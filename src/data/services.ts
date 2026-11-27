export type ServicePillarId = 'digital' | 'automation' | 'infrastructure';

export type Service = {
  slug: string;
  pillar: ServicePillarId;
  category: string;
  title: string;
  summary: string;
  image: string;
  cta: string;
  problems: string[];
  capabilities: string[];
  technologies?: string[];
  faqs: { question: string; answer: string }[];
  related: string[];
};

export type ServicePillar = {
  id: ServicePillarId;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  href: string;
  interest: string;
  cta: string;
  outcomes: string[];
  services: { title: string; description: string }[];
  startingPointsLabel: 'Commercial packages' | 'Engagement areas';
  startingPoints: string[];
  technologies?: string[];
};

export const servicePillars: ServicePillar[] = [
  {
    id: 'digital',
    number: '01',
    title: 'Digital Solutions & Development',
    shortTitle: 'Digital solutions',
    summary: 'Digital experiences and web applications designed to help businesses establish their presence, serve customers and operate more effectively.',
    description: 'Your digital presence is often the first interaction customers have with your business. We design and develop professional digital platforms that help businesses communicate, engage customers and deliver services online.',
    href: '/digital-services/',
    interest: 'digital-development',
    cta: 'Discuss a Digital Project',
    outcomes: [
      'Establish a professional online presence.',
      'Improve customer accessibility.',
      'Enable online transactions and enquiries.',
      'Digitize business interactions.',
      'Connect existing business tools.',
    ],
    services: [
      { title: 'Business Websites', description: 'Professional, responsive websites that communicate your brand, showcase your services and make it easier for customers to reach you.' },
      { title: 'E-commerce Development', description: 'Online stores that help businesses showcase products, manage orders and serve customers through digital channels.' },
      { title: 'Landing Pages & Campaign Websites', description: 'Focused digital experiences for campaigns, offers and specific customer journeys.' },
      { title: 'Custom Web Applications', description: 'Purpose-built web applications designed to address specific business requirements and operational needs.' },
      { title: 'Website Modernization', description: 'Improve existing websites through better design, usability, performance and functionality.' },
      { title: 'Website Maintenance', description: 'Keep your website updated, functional and properly maintained through ongoing technical support.' },
      { title: 'Integrations', description: 'Connect websites and applications with relevant third-party services, APIs and business tools.' },
    ],
    startingPointsLabel: 'Commercial packages',
    startingPoints: ['Business Website', 'Business Website Plus', 'E-commerce Development', 'Custom Web Applications', 'Website Maintenance'],
  },
  {
    id: 'automation',
    number: '02',
    title: 'Business Systems & Automation',
    shortTitle: 'Business automation',
    summary: 'We help businesses replace repetitive manual processes with practical digital systems that improve efficiency, visibility and control.',
    description: 'Many businesses rely on repetitive processes, disconnected spreadsheets and manual approvals. We help digitize these activities through custom applications and workflow automation.',
    href: '/services/software-development/',
    interest: 'business-automation',
    cta: 'Discuss an Automation Project',
    outcomes: [
      'Reduce repetitive administrative work.',
      'Improve process visibility.',
      'Reduce dependence on disconnected spreadsheets.',
      'Improve access to operational information.',
      'Standardize business processes.',
      'Improve reporting and accountability.',
    ],
    services: [
      { title: 'Workflow Automation', description: 'Digitize repetitive business processes, approvals and internal workflows.' },
      { title: 'Digital Forms & Approvals', description: 'Replace paper-based requests with structured forms, routing and approval records.' },
      { title: 'Inventory Management', description: 'Develop practical systems for managing stock, recording movements and improving inventory visibility.' },
      { title: 'HR Workflow Solutions', description: 'Digitize employee-related processes such as leave requests, approvals and staff information management.' },
      { title: 'Business Dashboards', description: 'Bring operational information together through dashboards and reporting applications.' },
      { title: 'Document & Records Management', description: 'Organize business documents and records with appropriate access and retrieval workflows.' },
      { title: 'Custom Business Applications', description: 'Build applications around your business processes instead of forcing your business into unsuitable software.' },
      { title: 'System Integrations', description: 'Connect existing applications and streamline the exchange of business information.' },
    ],
    startingPointsLabel: 'Commercial packages',
    startingPoints: ['Workflow Automation', 'Inventory Management Solutions', 'HR Workflow Solutions', 'Business Reporting & Dashboards', 'Custom Business Applications'],
  },
  {
    id: 'infrastructure',
    number: '03',
    title: 'IT Infrastructure & Technical Services',
    shortTitle: 'IT infrastructure',
    summary: 'We help businesses deploy, maintain and improve the technology infrastructure that supports their day-to-day operations.',
    description: 'We help businesses establish, maintain and improve the IT infrastructure that supports their operations.',
    href: '/services/infrastructure/',
    interest: 'it-infrastructure',
    cta: 'Discuss Your IT Environment',
    outcomes: [
      'Establish a reliable technology foundation.',
      'Improve infrastructure visibility and administration.',
      'Strengthen backup and recovery arrangements.',
      'Reduce avoidable technical disruption.',
      'Plan upgrades around business needs.',
    ],
    services: [
      { title: 'Server Deployment & Administration', description: 'Installation, configuration and administration of business server environments.' },
      { title: 'Windows Server & Active Directory', description: 'Configuration and support for Windows Server, directory services, users and access.' },
      { title: 'Virtualization', description: 'Support for virtualized infrastructure and server environments.' },
      { title: 'Infrastructure Assessments', description: 'Review existing infrastructure and identify opportunities for improvement.' },
      { title: 'Backup & Recovery', description: 'Configuration and maintenance of backup solutions to support data protection and recovery objectives.' },
      { title: 'IT Technical Support', description: 'Technical assistance for infrastructure issues, system administration and maintenance.' },
      { title: 'Infrastructure Optimization', description: 'Improve the performance, reliability and manageability of existing IT environments.' },
    ],
    startingPointsLabel: 'Engagement areas',
    startingPoints: ['Infrastructure Assessment', 'Server Deployment & Administration', 'Virtualization Support', 'Backup & Recovery', 'Technical Support', 'Infrastructure Optimization'],
    technologies: ['Windows Server', 'VMware', 'Hyper-V', 'Nutanix', 'NetApp', 'Veeam and other backup platforms'],
  },
];

export const services: Service[] = [
  {
    slug: 'website-development',
    pillar: 'digital',
    category: 'Digital Solutions & Development',
    title: 'Corporate website and web application development',
    summary: 'Build a credible business website, online store, focused landing page or web application with clear content, responsive design and a maintainable foundation.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85',
    cta: 'Discuss a Website Project',
    problems: [
      'Your website does not clearly explain your offer to customers.',
      'The experience feels outdated or difficult to use on a phone.',
      'Content, services and enquiry paths are unclear.',
      'Your site is difficult to update, extend or integrate.',
    ],
    capabilities: [
      'Corporate websites and company profiles',
      'E-commerce development and online transactions',
      'Campaign landing pages and conversion journeys',
      'Responsive, accessible design and development',
      'Custom web applications and customer-facing tools',
      'Website redesign, modernization and maintenance',
      'API and third-party system integrations',
      'Content management, technical SEO foundations and analytics planning',
      'Testing, handover and documentation',
    ],
    faqs: [
      { question: 'Can you help with content?', answer: 'Content structure and copywriting can be discussed during project planning. Deliverables are defined in the scope.' },
      { question: 'Can you build more than a brochure website?', answer: 'Yes. E-commerce, landing pages, web applications and integration requirements can be explored. Scope, ownership and dependencies are agreed before development.' },
      { question: 'Can you improve our existing website?', answer: 'Yes. A modernization engagement can review design, usability, performance, functionality and maintenance needs before proposing changes.' },
      { question: 'Will the website work on mobile?', answer: 'Responsive layouts are part of the proposed approach. Devices and user journeys should be included in acceptance testing.' },
      { question: 'Do you promise search rankings?', answer: 'No. Technical SEO foundations can be implemented, but rankings depend on many factors and are not guaranteed.' },
    ],
    related: ['software-development', 'digital-marketing', 'cloud-it-management'],
  },
  {
    slug: 'software-development',
    pillar: 'automation',
    category: 'Business Systems & Automation',
    title: 'Business systems and workflow automation',
    summary: 'Replace repetitive manual work with practical applications, digital workflows and integrations shaped around the way your business operates.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=85',
    cta: 'Discuss Your Business Process',
    problems: [
      'Processes are spread across disconnected tools and spreadsheets.',
      'Routine approvals depend on paperwork or repeated data entry.',
      'Operational information is difficult to find and report on.',
      'Off-the-shelf software does not fit an important workflow.',
    ],
    capabilities: [
      'Business process discovery and workflow mapping',
      'Business process automation and approval workflows',
      'Digital forms and structured data capture',
      'Inventory and stock management applications',
      'HR and employee workflow applications',
      'Business reporting and dashboard applications',
      'Document and records management',
      'Custom business management applications',
      'API integration and business system connections',
    ],
    faqs: [
      { question: 'Do you already have a standard product for every requirement?', answer: 'No. This service covers custom development and appropriately selected solutions. We distinguish custom work, available products and future product initiatives during scoping.' },
      { question: 'Can you connect our existing systems?', answer: 'Integration can be explored after reviewing the systems, available interfaces and intended workflow.' },
      { question: 'How is a project estimated?', answer: 'An estimate follows a requirements discussion and written scope identifying assumptions, dependencies and deliverables.' },
      { question: 'Can you start with one process?', answer: 'Yes. A focused workflow can be a practical starting point, provided its data, users and integration boundaries are understood.' },
    ],
    related: ['website-development', 'infrastructure', 'technology-procurement'],
  },
  {
    slug: 'infrastructure',
    pillar: 'infrastructure',
    category: 'IT Infrastructure & Technical Services',
    title: 'IT infrastructure and technical services',
    summary: 'Deploy, maintain and improve the servers, virtualization, backup and technical environment that supports day-to-day business operations.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85',
    cta: 'Discuss Your IT Environment',
    problems: [
      'Infrastructure has grown without a clear plan.',
      'Server administration and technical support need attention.',
      'Backup and recovery arrangements need review.',
      'It is unclear what to replace, retain, virtualize or expand.',
    ],
    capabilities: [
      'Server deployment, configuration and administration',
      'Windows Server and Active Directory services',
      'Virtualization deployment and support',
      'Infrastructure health assessments',
      'Backup and recovery configuration',
      'Infrastructure troubleshooting and technical support',
      'Infrastructure upgrades and optimization',
      'Technology sourcing, licensing and compatibility reviews',
      'Deployment, integration, testing and handover',
    ],
    technologies: ['Windows Server', 'VMware', 'Hyper-V', 'Nutanix', 'NetApp', 'Veeam and other backup platforms'],
    faqs: [
      { question: 'Can you work with our existing equipment?', answer: 'Yes. An engagement can start with a review of your current environment and compatibility needs before any replacement is proposed.' },
      { question: 'Do you supply equipment as well as install it?', answer: 'Technology sourcing and integration can be scoped together. Availability, licensing and procurement terms are confirmed for each enquiry.' },
      { question: 'How do you confirm technology fit?', answer: 'We review compatibility, support and deployment requirements before recommending an option. Relevant technologies are listed as delivery areas, not as a statement about every product or deployment.' },
      { question: 'Do you offer ongoing support?', answer: 'Support can be discussed and documented as part of a proposal. Coverage depends on the agreed scope.' },
    ],
    related: ['cybersecurity', 'cloud-it-management', 'technology-procurement'],
  },
  {
    slug: 'cybersecurity',
    pillar: 'infrastructure',
    category: 'IT Infrastructure & Technical Services',
    title: 'Cybersecurity and digital trust',
    summary: 'Strengthen security through considered assessments and practical controls matched to your environment and priorities.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=85',
    cta: 'Discuss Your Security Requirements',
    problems: [
      'Limited visibility into devices, accounts or security controls.',
      'Endpoint, email or network protection is inconsistent.',
      'Access needs review as teams and systems change.',
      'Security improvements need prioritizing within a realistic budget.',
    ],
    capabilities: [
      'Endpoint protection and device management',
      'Identity, access and account configuration',
      'Email and network security reviews',
      'Vulnerability reviews and practical hardening',
      'Security monitoring and log-management planning',
    ],
    faqs: [
      { question: 'Does an assessment guarantee protection?', answer: 'No assessment or control can guarantee security. The goal is to identify relevant risks and prioritize practical improvements.' },
      { question: 'Can you review our current security setup?', answer: 'An initial conversation can establish which systems, controls and questions should be included in a scoped review.' },
      { question: 'Can you help implement recommendations?', answer: 'Implementation can be included in a proposal where it fits the engagement and required expertise.' },
    ],
    related: ['infrastructure', 'cloud-it-management', 'software-development'],
  },
  {
    slug: 'cloud-it-management',
    pillar: 'infrastructure',
    category: 'IT Infrastructure & Technical Services',
    title: 'Cloud, productivity and IT management',
    summary: 'Make cloud platforms, productivity tools and day-to-day IT operations easier to manage through scoped configuration and support.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=85',
    cta: 'Discuss Your IT Operations',
    problems: [
      'Cloud services are difficult to administer.',
      'User, device or access setup is inconsistent.',
      'Manual IT tasks take time away from other work.',
      'There is limited visibility into assets, updates or service health.',
    ],
    capabilities: [
      'Cloud infrastructure planning and administration',
      'Microsoft 365 and productivity configuration',
      'Identity, endpoint and access management',
      'Patch management and IT service management',
      'Network and application monitoring and asset reporting',
    ],
    faqs: [
      { question: 'Can you work with our current cloud provider?', answer: 'An engagement can begin with your existing provider, subscriptions and configuration. Proposed changes depend on the initial review.' },
      { question: 'Can Overdott help with Microsoft 365?', answer: 'Yes. Configuration and productivity assistance can be scoped around your subscriptions, users and requirements.' },
      { question: 'Can management be ongoing?', answer: 'Ongoing administration can be considered where a suitable support scope is agreed. No service level is implied without written agreement.' },
    ],
    related: ['infrastructure', 'cybersecurity', 'website-development'],
  },
  {
    slug: 'technology-procurement',
    pillar: 'infrastructure',
    category: 'IT Infrastructure & Technical Services',
    title: 'Technology sourcing and procurement',
    summary: 'Define requirements and compare hardware, software and licensing options before committing to a purchase.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=85',
    cta: 'Discuss a Product Requirement',
    problems: [
      'Specifications or compatibility requirements are unclear.',
      'Technically similar options are difficult to compare.',
      'Purchasing decisions have hidden implementation dependencies.',
      'Licensing needs vary across users and devices.',
    ],
    capabilities: [
      'Requirements gathering and specification reviews',
      'Hardware, software and licensing enquiries',
      'Compatibility and deployment planning',
      'Integration and implementation coordination',
    ],
    faqs: [
      { question: 'How do product enquiries work?', answer: 'We start with your requirements, compatibility and licensing needs, then confirm availability and sourcing arrangements for the enquiry.' },
      { question: 'Can I ask about one product?', answer: 'Yes. Share the product or outcome you have in mind along with compatibility and licensing requirements.' },
      { question: 'Do you sell directly online?', answer: 'This website accepts product enquiries rather than online checkout. Availability and terms are confirmed individually.' },
    ],
    related: ['infrastructure', 'cloud-it-management', 'cybersecurity'],
  },
  {
    slug: 'digital-marketing',
    pillar: 'digital',
    category: 'Digital Solutions & Development',
    title: 'Digital visibility and technical SEO',
    summary: 'Support website discoverability, content structure and online presence as part of a wider digital project, without promises of guaranteed results.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=85',
    cta: 'Discuss Your Digital Presence',
    problems: [
      'Prospective customers have difficulty finding your website.',
      'Your online presence is inconsistent or unclear.',
      'Digital activity lacks defined goals or measurement.',
      'Technical website issues affect discoverability.',
    ],
    capabilities: [
      'SEO foundations and technical reviews',
      'Content and online presence planning',
      'Analytics setup planning',
      'Coordination with website development',
    ],
    faqs: [
      { question: 'Can you guarantee first-page rankings?', answer: 'No. Search results depend on competition, search engine changes, content and many other factors. Rankings are never guaranteed.' },
      { question: 'Can this be combined with a website project?', answer: 'Yes. Content, technical SEO and digital visibility can be discussed together and scoped as related workstreams.' },
      { question: 'Are you a digital marketing agency?', answer: 'Overdott is a technology solutions business. Digital visibility is offered as a supporting capability where it fits a website or wider technology engagement.' },
    ],
    related: ['website-development', 'software-development', 'cloud-it-management'],
  },
];

export const digitalServices = services.filter((service) => service.pillar === 'digital');
export const coreServices = services.filter((service) => service.pillar !== 'digital');
export const findService = (slug: string) => services.find((service) => service.slug === slug);
export const findPillar = (id: ServicePillarId) => servicePillars.find((pillar) => pillar.id === id);
