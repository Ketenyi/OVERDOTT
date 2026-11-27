export type Service = {
  slug: string;
  category: 'Technology solutions' | 'Digital services';
  title: string;
  summary: string;
  image: string;
  problems: string[];
  capabilities: string[];
  faqs: { question: string; answer: string }[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: 'infrastructure', category: 'Technology solutions', title: 'IT infrastructure and systems integration',
    summary: 'Plan, source and integrate infrastructure with a clear view of compatibility, implementation and support.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85',
    problems: ['Infrastructure has grown without a clear plan.', 'New equipment must work with existing systems.', 'It is unclear what to replace, retain or expand.', 'Backup and recovery arrangements need review.'],
    capabilities: ['Servers, storage and networking', 'Virtualization and hybrid infrastructure', 'Backup and disaster recovery planning', 'Technology sourcing, licensing and compatibility reviews', 'Deployment, integration, testing and handover'],
    faqs: [
      { question: 'Can you work with our existing equipment?', answer: 'Yes. An engagement can start with a review of your current environment and compatibility needs before any replacement is proposed.' },
      { question: 'Do you supply equipment as well as install it?', answer: 'Technology sourcing and integration can be scoped together. Availability, licensing and procurement terms are confirmed for each enquiry.' },
      { question: 'Do you offer ongoing support?', answer: 'Support can be discussed and documented as part of a proposal. Coverage depends on the agreed scope.' },
    ], related: ['cybersecurity', 'cloud-it-management', 'technology-procurement'],
  },
  {
    slug: 'cybersecurity', category: 'Technology solutions', title: 'Cybersecurity and digital trust',
    summary: 'Strengthen security through considered assessments and practical controls matched to your environment and priorities.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=85',
    problems: ['Limited visibility into devices, accounts or security controls.', 'Endpoint, email or network protection is inconsistent.', 'Access needs review as teams and systems change.', 'Security improvements need prioritizing within a realistic budget.'],
    capabilities: ['Endpoint protection and device management', 'Identity, access and account configuration', 'Email and network security reviews', 'Vulnerability reviews and practical hardening', 'Security monitoring and log-management planning'],
    faqs: [
      { question: 'Does an assessment guarantee protection?', answer: 'No assessment or control can guarantee security. The goal is to identify relevant risks and prioritize practical improvements.' },
      { question: 'Can you review our current security setup?', answer: 'An initial conversation can establish which systems, controls and questions should be included in a scoped review.' },
      { question: 'Can you help implement recommendations?', answer: 'Implementation can be included in a proposal where it fits the engagement and required expertise.' },
    ], related: ['infrastructure', 'cloud-it-management', 'software-development'],
  },
  {
    slug: 'cloud-it-management', category: 'Technology solutions', title: 'Cloud, productivity and IT management',
    summary: 'Make cloud platforms, productivity tools and day-to-day IT operations easier to manage through scoped configuration and support.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=85',
    problems: ['Cloud services are difficult to administer.', 'User, device or access setup is inconsistent.', 'Manual IT tasks take time away from other work.', 'There is limited visibility into assets, updates or service health.'],
    capabilities: ['Cloud infrastructure planning and administration', 'Microsoft 365 and productivity configuration', 'Identity, endpoint and access management', 'Patch management and IT service management', 'Network and application monitoring and asset reporting'],
    faqs: [
      { question: 'Can you work with our current cloud provider?', answer: 'An engagement can begin with your existing provider, subscriptions and configuration. Proposed changes depend on the initial review.' },
      { question: 'Do you provide Microsoft 365 support?', answer: 'Microsoft 365 configuration and productivity assistance are available to enquire about. Tasks are agreed in scope.' },
      { question: 'Can management be ongoing?', answer: 'Ongoing administration can be considered where a suitable support scope is agreed. No service level is implied without written agreement.' },
    ], related: ['infrastructure', 'cybersecurity', 'website-development'],
  },
  {
    slug: 'technology-procurement', category: 'Technology solutions', title: 'Technology sourcing and procurement',
    summary: 'Define requirements and compare hardware, software and licensing options before committing to a purchase.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=85',
    problems: ['Specifications or compatibility requirements are unclear.', 'Technically similar options are difficult to compare.', 'Purchasing decisions have hidden implementation dependencies.', 'Licensing needs vary across users and devices.'],
    capabilities: ['Requirements gathering and specification reviews', 'Hardware, software and licensing enquiries', 'Compatibility and deployment planning', 'Integration and implementation coordination'],
    faqs: [
      { question: 'Are you an authorized reseller?', answer: 'No vendor authorization is claimed on this website. Product availability, sourcing arrangements and any vendor status should be verified for each enquiry.' },
      { question: 'Can I ask about one product?', answer: 'Yes. Share the product or outcome you have in mind along with compatibility and licensing requirements.' },
      { question: 'Do you sell directly online?', answer: 'This website accepts product enquiries rather than online checkout. Availability and terms are confirmed individually.' },
    ], related: ['infrastructure', 'cloud-it-management', 'cybersecurity'],
  },
  {
    slug: 'website-development', category: 'Digital services', title: 'Corporate website and web application development',
    summary: 'Build a credible corporate website, focused landing page or web application with clear content, responsive design and a maintainable foundation.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85',
    problems: ['Your website does not clearly explain your offer to corporate buyers.', 'The experience feels outdated or difficult to use on a phone.', 'Content, services and enquiry paths are unclear.', 'Your site is difficult to update, extend or integrate.'],
    capabilities: ['Corporate websites and company profiles', 'Campaign landing pages and conversion journeys', 'Responsive, accessible design and development', 'Web applications and customer portal enquiries', 'Content management and maintainable page structures', 'Technical SEO foundations and analytics planning', 'Testing, handover and website maintenance options'],
    faqs: [
      { question: 'Can you help with content?', answer: 'Content structure and copywriting can be discussed during project planning. Deliverables are defined in the scope.' },
      { question: 'Can you build more than a brochure website?', answer: 'Yes. Landing pages, web applications and customer portal requirements can be explored. Scope, integrations and ownership are agreed before development.' },
      { question: 'Will the website work on mobile?', answer: 'Responsive layouts are part of the proposed approach. Devices and user journeys should be included in acceptance testing.' },
      { question: 'Do you promise search rankings?', answer: 'No. Technical SEO foundations can be implemented, but rankings depend on many factors and are not guaranteed.' },
    ], related: ['software-development', 'digital-marketing', 'cloud-it-management'],
  },
  {
    slug: 'software-development', category: 'Digital services', title: 'Software and business application development',
    summary: 'Explore custom web applications, API integrations and workflow automation with clear requirements and practical handover.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=85',
    problems: ['Processes are spread across disconnected tools.', 'Off-the-shelf software does not fit a workflow.', 'Information must move between business systems.', 'An application idea needs scoping before investment.'],
    capabilities: ['Requirements discovery and solution scoping', 'Custom web applications and business workflows', 'API integration and automation enquiries', 'Business software evaluation', 'Testing, documentation and handover'],
    faqs: [
      { question: 'Do you already have a standard product?', answer: 'This service covers custom development and business software enquiries. Product availability and features are confirmed individually.' },
      { question: 'Can you connect our existing systems?', answer: 'Integration can be explored after reviewing the systems, available interfaces and intended workflow.' },
      { question: 'How is a project estimated?', answer: 'An estimate follows a requirements discussion and written scope identifying assumptions and dependencies.' },
    ], related: ['website-development', 'digital-marketing', 'cloud-it-management'],
  },
  {
    slug: 'digital-marketing', category: 'Digital services', title: 'Digital marketing and online visibility',
    summary: 'Get practical support with search visibility, content planning and online presence without promises of guaranteed results.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=85',
    problems: ['Prospective customers have difficulty finding your website.', 'Your online presence is inconsistent or unclear.', 'Marketing activity lacks defined goals or measurement.', 'Technical website issues affect search.'],
    capabilities: ['SEO foundations and technical reviews', 'Content and online presence planning', 'Social media management enquiries', 'Analytics setup planning', 'Coordination with website development'],
    faqs: [
      { question: 'Can you guarantee first-page rankings?', answer: 'No. Search results depend on competition, search engine changes, content and many other factors. Rankings are never guaranteed.' },
      { question: 'Can this be combined with a website project?', answer: 'Yes. Content, technical SEO and digital visibility can be discussed together and scoped as related workstreams.' },
      { question: 'Do you manage social media accounts?', answer: 'Social media management is available to enquire about. Channels, responsibilities and deliverables are agreed before work begins.' },
    ], related: ['website-development', 'software-development', 'cloud-it-management'],
  },
];

export const coreServices = services.filter((service) => service.category === 'Technology solutions');
export const digitalServices = services.filter((service) => service.category === 'Digital services');
export const findService = (slug: string) => services.find((service) => service.slug === slug);