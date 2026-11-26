<?php
declare(strict_types=1);

header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: same-origin');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /contact/', true, 303);
    exit;
}

function clean_text(mixed $value, int $maxLength): string
{
    if (!is_string($value)) {
        return '';
    }

    $value = trim(str_replace(["\r", "\0"], '', $value));
    return mb_substr($value, 0, $maxLength, 'UTF-8');
}

function redirect_with_status(string $status, string $interest = ''): never
{
    $location = $status === 'success'
        ? '/contact/success/'
        : '/contact/';
    $params = [];

    if ($status === 'error') {
        $params[] = 'status=error';
    }
    if ($interest !== '') {
        $params[] = 'interest=' . rawurlencode($interest);
    }
    if ($params !== []) {
        $location .= '?' . implode('&', $params);
    }
    if ($status === 'error') {
        $location .= '#enquiry';
    }

    header('Location: ' . $location, true, 303);
    exit;
}

$honeypot = clean_text($_POST['bot-field'] ?? '', 200);
if ($honeypot !== '') {
    redirect_with_status('success');
}

$name = clean_text($_POST['name'] ?? '', 120);
$organization = clean_text($_POST['organization'] ?? '', 180);
$email = clean_text($_POST['email'] ?? '', 180);
$phone = clean_text($_POST['phone'] ?? '', 60);
$service = clean_text($_POST['service'] ?? '', 140);
$description = clean_text($_POST['description'] ?? '', 5000);
$preferredContact = clean_text($_POST['preferred-contact'] ?? '', 40);
$consent = clean_text($_POST['privacy-consent'] ?? '', 10);
$interest = clean_text($_POST['interest'] ?? '', 60);

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $service === '' || $description === '' || $preferredContact === '' || $consent !== 'yes') {
    redirect_with_status('error', $interest);
}

if (mb_strlen($description, 'UTF-8') < 10) {
    redirect_with_status('error', $interest);
}

$allowedInterests = [
    '',
    'general',
    'velldot-trial',
    'velldot-purchase',
    'velldot-sales',
    'velldot-documentation',
    'velldot-contact',
];
if (!in_array($interest, $allowedInterests, true)) {
    $interest = 'general';
}

$to = getenv('OVERDOTT_CONTACT_EMAIL') ?: 'info@overdott.com';
$from = getenv('OVERDOTT_MAIL_FROM') ?: 'no-reply@overdott.com';
$subjectService = str_replace(["\r", "\n"], ' ', $service);
$headerName = str_replace(["\r", "\n"], ' ', $name);
$subject = 'Overdott website enquiry: ' . $subjectService;

$body = implode("\n", [
    'New Overdott website enquiry',
    '',
    'Name: ' . $name,
    'Organization: ' . ($organization !== '' ? $organization : 'Not provided'),
    'Email: ' . $email,
    'Phone: ' . ($phone !== '' ? $phone : 'Not provided'),
    'Service: ' . $service,
    'Interest: ' . ($interest !== '' ? $interest : 'general'),
    'Preferred contact: ' . $preferredContact,
    '',
    'Message:',
    $description,
]);

$headers = implode("\r\n", [
    'From: Overdott Website <' . $from . '>',
    'Reply-To: ' . $headerName . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
]);

$sent = mail($to, $subject, $body, $headers);
redirect_with_status($sent ? 'success' : 'error', $interest);
