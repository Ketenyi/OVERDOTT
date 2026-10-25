# Overdott Technologies website

A static Astro website for Overdott Technologies Limited. The site has dedicated service and insight routes, a shared responsive layout, and an enquiry form ready for Netlify hosting.

## Run locally

Install Node.js, then run:

```sh
npm install
npm run dev
```

Create a production build with `npm run build`; preview it with `npm run preview`.

## Contact form

The form uses Netlify Forms and sends visitors to `/contact/success/` after submission. Deploy the generated `dist` directory to Netlify, confirm form detection in its dashboard, configure notifications to a monitored inbox, and test a real submission. Netlify Forms will not process submissions on other hosts; configure an equivalent form endpoint before using another host.

## Before launch

- Set `SITE_URL` to the verified HTTPS domain. The current `overdott.example` origin is reserved and must be replaced.
- Set `PUBLIC_VELLDOT_URL` to the verified HTTPS URL for the Velldot application when it is ready; the Velldot product page otherwise directs visitors to Overdott's contact form. `PUBLIC_SORA_URL` remains a fallback for existing deployments.
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