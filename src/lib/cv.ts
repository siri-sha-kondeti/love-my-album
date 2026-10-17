export const profile = {
  name: "Sirisha Kondeti",
  title: "Senior SAP EDI and Functional Consultant",
  phone: "+49 17658029365",
  phoneHref: "tel:+4917658029365",
  email: "sirishakondeti111@gmail.com",
  summary: [
    "Senior SAP EDI and Functional Consultant with over 7 years of experience in SAP SD, SAP MM, SAP GTS Trade, EDI integration, IDoc processing, and production support.",
    "Experienced in configuring inbound and outbound EDI interfaces, partner profiles, process codes, and electronic business documents using ANSI X12, EDIFACT, XML, and SAP IDocs. Skilled in SAP SD configuration, sales document customization, tax-related requirements, customer master data maintenance, and cross-functional integration.",
    "Experienced in EDI mapping, functional specification preparation, defect analysis, root-cause investigation, integration testing, and end-to-end transaction monitoring. Worked with international project teams across North America, South America, and Europe, collaborating with clients, onshore teams, developers, and business stakeholders to deliver solutions aligned with business requirements.",
  ],
};

export const expertiseStrip = ["SAP SD", "SAP MM", "SAP GTS Trade", "EDI Integration", "IDoc Processing", "Production Support"];

export const aboutHighlights = [
  "SAP SD and SAP MM",
  "SAP GTS Trade",
  "EDI integration and IDoc processing",
  "Inbound and outbound EDI interfaces",
  "EDI mapping and electronic business documents",
  "Functional specifications, defect analysis, and root-cause investigation",
  "Integration testing and end-to-end transaction monitoring",
  "International collaboration across North America, South America, and Europe",
];

export const skills: { title: string; items: string[] }[] = [
  { title: "SAP Modules", items: ["SAP SD", "SAP MM", "SAP GTS Trade", "SAP PP integration"] },
  { title: "SAP EDI and IDocs", items: ["Inbound and outbound EDI", "IDoc configuration", "Partner profiles", "Process codes", "IDoc monitoring", "IDoc error analysis and resolution", "Transaction monitoring", "End-to-end message tracking"] },
  { title: "EDI Standards and Transactions", items: ["ANSI X12", "EDIFACT", "XML", "SAP IDocs", "EDI 850, 830, and 855", "Purchase orders", "Planning schedules", "Purchase order acknowledgements", "Other business transactions"] },
  { title: "EDI Integration and Mapping", items: ["EDI mapping", "Mapping requirements", "Map development and maintenance", "Trading partner onboarding", "Transaction validation", "Data transformation", "Mapping specifications", "GXS", "Sterling Integrator"] },
  { title: "Communication Protocols", items: ["AS2", "SFTP", "FTPS", "PGP", "SSL certificates", "Secure file transfer"] },
  { title: "SAP SD Configuration", items: ["Sales document configuration", "Tax structures", "Customer master data", "Shipping conditions", "Sales order processing", "Invoice monitoring", "Business process configuration"] },
  { title: "Documentation and Testing", items: ["Functional specifications", "Technical design documents", "Mapping Requirement Specifications (MRS)", "Unit Test Plans (UTP)", "Integration testing", "Knowledge transfer documents", "Process documentation", "User training"] },
  { title: "Production Support", items: ["Incident management", "Critical ticket resolution", "Root-cause analysis", "Defect analysis", "Workflow monitoring", "Error resolution", "Enhancement support", "Production monitoring"] },
  { title: "Tools", items: ["GXS", "Sterling Integrator", "Visual Mapper", "Application Integrator", "Map Editor", "Citrix", "SAP integration monitoring tools"] },
];

export type Role = {
  title: string;
  company: string;
  meta: string[];
  duration: string;
  overview?: string;
  responsibilities: string[];
};

export const experience: Role[] = [
  {
    title: "Freelance SAP EDI Mapping Consultant",
    company: "Confidential — Freelance",
    meta: ["Client: Sealed Air"],
    duration: "May 2024 – May 2025",
    overview: "Sealed Air is a global manufacturer of packaging materials, systems, and performance solutions serving industrial, food, and consumer markets.",
    responsibilities: [
      "Interacted with client stakeholders to understand EDI mapping requirements, clarify business rules, and coordinate with onshore teams to ensure timely completion of deliverables.",
      "Accessed client systems through Citrix and worked with the GIS server to create and modify EDI maps according to client-provided specifications.",
      "Analysed requirements for minor development changes and prepared specifications to extend existing map functionality for additional regions and business requirements.",
      "Worked with ANSI X12 and EDIFACT standards, XML, and SAP IDocs to support EDI mapping and system integration.",
      "Analysed defects in existing mapping solutions and investigated transaction discrepancies to support issue resolution and reliable data exchange.",
      "Prepared Mapping Requirement Specifications (MRS), functional and technical design documents, and Unit Test Plans (UTP) to support development, testing, and documentation.",
    ],
  },
  {
    title: "SAP EDI / SD Functional Consultant",
    company: "US Software and Services Group",
    meta: ["Full Time", "India"],
    duration: "August 2018 – August 2023",
    responsibilities: [
      "Configured SAP GTS Trade functionalities for customers and materials according to business and trading partner requirements.",
      "Configured and supported inbound and outbound EDI interfaces, including IDoc setup, partner profiles, process codes, and message processing.",
      "Generated and supported EDI business documents, including ANSI X12 transactions 850, 830, and 855, along with other trading partner transactions.",
      "Monitored EDI transactions and SAP IDocs, analysed processing failures, corrected data issues, and resolved IDoc errors to maintain reliable end-to-end transaction flows.",
      "Provided technical and functional support for EDI transactions during critical production phases, investigating incidents and coordinating resolution with relevant teams.",
      "Monitored production orders, invoices, and workflow notifications, investigating error messages and coordinating corrective actions to support business continuity.",
      "Maintained customer master records and updated shipping conditions in line with defined business requirements.",
      "Supported SAP SD configuration and enhancement activities, including sales document changes and tax-related requirements.",
      "Prepared functional specifications for ABAP developments, documented business requirements, and supported the definition of new tax structures.",
      "Worked with SAP MM and SAP PP integration requirements, supporting cross-functional testing and coordination between procurement, production, and sales processes.",
      "Participated in international projects involving teams and stakeholders across North America, South America, and Europe, contributing as a configuration team member and solution design contributor.",
      "Supported trading partner onboarding by coordinating the setup of EDI customers and the configuration and validation of inbound and outbound transactions.",
      "Worked with ANSI X12, EDIFACT, XML, and SAP IDocs to support data exchange, analyse transaction discrepancies, and resolve mapping and integration defects.",
      "Monitored EDI and SAP PI message flows, tracked transactions from source to destination, and investigated failures affecting supplier and customer integrations.",
      "Worked with secure transport protocols, including AS2, SFTP, FTPS, PGP, and SSL certificates, to support secure communications with trading partners.",
      "Prepared functional and process documentation, knowledge transfer materials, and training documents. Provided end-user training and support for SAP SD processes.",
      "Documented critical incidents, root causes, corrective actions, and permanent solutions. Supported enhancement-related issues, business reporting, and emergency production tickets.",
    ],
  },
  {
    title: "SAP EDI / Mapping Analyst",
    company: "Talent Capital",
    meta: ["Full Time", "India"],
    duration: "September 2016 – June 2018",
    responsibilities: [
      "Analysed client requirements for EDI mapping and coordinated with clients, onshore teams, and internal developers to deliver mapping changes within agreed timelines.",
      "Developed and modified EDI maps based on Mapping Requirement Specifications and client-defined business rules, supporting existing transactions and regional requirements.",
      "Worked with ANSI X12, EDIFACT, XML, and SAP IDocs to support electronic data interchange and integration between client systems and trading partners.",
      "Used Visual Mapper, Application Integrator, and Map Editor to create, modify, test, and maintain EDI maps according to functional and technical specifications.",
      "Accessed client environments through Citrix and worked with GIS servers to implement mapping requirements and validate map behaviour against documented specifications.",
      "Prepared Mapping Requirement Specifications (MRS), functional and technical design documents, and Unit Test Plans (UTP) for mapping development and enhancement activities.",
      "Analysed defects in existing maps and integration processes, investigated transaction discrepancies, and coordinated fixes to improve data accuracy and processing.",
      "Participated in requirement analysis and minor development activities to extend existing map functionality for additional regions, carriers, and trading partner requirements.",
      "Coordinated with clients and project stakeholders to clarify mapping rules, validate requirements, communicate progress, and resolve implementation questions.",
      "Supported knowledge transfer activities, prepared process documentation, and conducted knowledge-sharing sessions for new team members and project resources.",
      "Reviewed development work packets against specifications and documented requirements, helping maintain consistency and quality throughout the mapping delivery process.",
      "Assisted with client visits, team coordination, and knowledge transition activities to support effective communication and continuity across project teams.",
    ],
  },
];

export const competencies = [
  "SAP EDI integration, inbound and outbound interfaces, partner profiles, process codes, and IDoc processing.",
  "SAP SD configuration, sales documents, tax-related configuration, customer master data, and shipping conditions.",
  "SAP MM functional support and SAP PP integration testing across related business processes.",
  "EDI transaction mapping, trading partner onboarding, mapping requirements, data transformation, and transaction validation.",
  "ANSI X12, EDIFACT, XML, SAP IDocs, and common EDI transactions, including 850, 830, and 855.",
  "Production support, critical incident handling, error analysis, root-cause investigation, and corrective actions.",
  "Functional specifications, technical documentation, MRS, UTP, knowledge transfer, and end-user training.",
  "Cross-functional collaboration with clients, developers, business stakeholders, and international project teams.",
];

export const education = {
  degree: "Bachelor of Technology in Electronics and Communication Engineering",
  institution: "JNTUA University, India",
  duration: "2012 – 2016",
};
