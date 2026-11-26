# Overdott Technologies website

A static Astro website for Overdott Technologies Limited. The site has dedicated service and insight routes, a shared responsive layout, a VellDot ERP product page, and an enquiry form configured for PHP hosting by default.

## Run locally

Install Node.js, then run:

```sh
npm install
npm run dev
```

Create a production build with `npm run build`; preview it with `npm run preview`.

## Contact form

The default form posts to `/api/enquiry.php`, which is copied into `dist/api/` for PHP hosting such as cPanel. The handler validates submissions, includes a honeypot field and redirects to the success or error state. Configure `OVERDOTT_CONTACT_EMAIL` and `OVERDOTT_MAIL_FROM` on the host; the defaults are `info@overdott.com` and `no-reply@overdott.com`. PHP with `mbstring` and a working mail configuration is required. Test real delivery and add host-level spam/rate-limit protection before launch.

To use Netlify Forms instead, set `PUBLIC_FORM_ACTION=/contact/success/` before building, deploy `dist` to Netlify, confirm form detection in its dashboard and configure notifications. Netlify Forms will not process the default PHP endpoint.

## Before launch

- Set `SITE_URL` to the verified HTTPS domain. The current `overdott.example` origin is reserved and must be replaced.
- Set `PUBLIC_VELLDOT_URL` to the verified HTTPS URL for the Velldot application when it is ready; the Velldot product page otherwise directs visitors to Overdott's contact form. `PUBLIC_SORA_URL` remains a fallback for existing deployments.
- Choose the form backend: configure the PHP mail environment for cPanel, or set `PUBLIC_FORM_ACTION=/contact/success/` for Netlify Forms.
- Set `contactEmail` and `whatsappNumber` in `src/config.ts` to verified contact details. WhatsApp must be country code and digits only.
- Test the deployed form, notifications and spam handling.
- Review the draft privacy notice against real data practices and Kenyan privacy requirements; provide a working privacy contact.
- Verify the Velldot ERP features and tenant/module behavior described on the product page.
- Verify product availability, licensing, vendor relationships and any partner authorization before publishing specifics.
- Confirm service availability, delivery arrangements and permissions for imagery and social preview assets.
- Review whether any analytics or marketing technologies require consent controls before adding them.

## Pre-launch checklist

- [ ] Set the production domain, then check canonical URLs, sitemap and robots directives.
- [ ] Test form submission, notifications, validation and success behavior on the production host.
- [ ] Check every navigation link, service and insight route, CTA, email link and WhatsApp link.
- [ ] Test mobile, tablet and desktop layouts, keyboard navigation, focus, form labels and contrast.
- [ ] Review page titles, descriptions, headings, social previews and image alt text.
- [ ] Confirm all business, customer, certification, partner, product and performance claims are verified.
- [ ] Complete privacy review and confirm hosting and data-processing arrangements.