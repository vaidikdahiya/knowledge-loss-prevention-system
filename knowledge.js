// =============================================
// KLPS — Sample Knowledge Data
// =============================================

const KNOWLEDGE_DATA = [
  {
    id: 1,
    title: "Quarterly Budget Reconciliation Process",
    domain: "Finance",
    criticality: "Critical",
    expert: "Priya Mehta",
    description: "Step-by-step process for reconciling departmental budgets at the end of each quarter, including handling discrepancies above 5%, escalation paths, and ERP system codes used.",
    tags: ["finance", "quarterly", "reconciliation", "budget"],
    date: "2024-11-10"
  },
  {
    id: 2,
    title: "CI/CD Pipeline Deployment Runbook",
    domain: "Engineering",
    criticality: "High",
    expert: "Rajan Iyer",
    description: "Complete runbook for deploying to production via our Jenkins + ArgoCD pipeline. Covers rollback procedures, hotfix paths, environment secrets rotation, and post-deploy validation.",
    tags: ["devops", "cicd", "deployment", "jenkins"],
    date: "2024-10-28"
  },
  {
    id: 3,
    title: "Enterprise Client Onboarding Playbook",
    domain: "Operations",
    criticality: "Critical",
    expert: "Neha Sharma",
    description: "End-to-end process for onboarding enterprise clients — from contract signature to first go-live. Includes stakeholder mapping templates, SLA commitments, and escalation contacts.",
    tags: ["onboarding", "clients", "enterprise", "sla"],
    date: "2024-11-01"
  },
  {
    id: 4,
    title: "Performance Review Calibration Guidelines",
    domain: "HR & Culture",
    criticality: "High",
    expert: "Anita Reddy",
    description: "Internal guidelines used by HR and managers during calibration sessions. Details scoring norms, common bias patterns to avoid, and how to handle promotion discussions.",
    tags: ["hr", "performance", "calibration", "promotion"],
    date: "2024-09-15"
  },
  {
    id: 5,
    title: "Legacy API Integration Patterns",
    domain: "Engineering",
    criticality: "Critical",
    expert: "Suresh Babu",
    description: "Documents the undocumented integration patterns used to connect our modern microservices to the 2011-era billing system. Only 2 engineers fully understand this.",
    tags: ["api", "legacy", "integration", "billing"],
    date: "2024-10-05"
  },
  {
    id: 6,
    title: "Product Roadmap Prioritization Framework",
    domain: "Product",
    criticality: "Medium",
    expert: "Kavita Nair",
    description: "How the product team scores and ranks feature requests using the RICE framework adapted to our context. Includes override conditions and stakeholder negotiation tactics.",
    tags: ["product", "roadmap", "prioritization", "rice"],
    date: "2024-11-15"
  },
  {
    id: 7,
    title: "Vendor Contract Negotiation Strategies",
    domain: "Operations",
    criticality: "High",
    expert: "Deepak Verma",
    description: "Negotiation playbook covering our standard discount structures, walk-away points, MSA clause templates, and preferred payment terms for SaaS and infrastructure vendors.",
    tags: ["vendor", "contracts", "negotiation", "procurement"],
    date: "2024-08-22"
  },
  {
    id: 8,
    title: "Database Disaster Recovery Procedures",
    domain: "Engineering",
    criticality: "Critical",
    expert: "Mohan Rao",
    description: "RTO/RPO documentation and step-by-step failover procedures for our primary PostgreSQL cluster. Includes contact list, DNS cutover steps, and post-recovery verification checklist.",
    tags: ["database", "disaster-recovery", "postgresql", "rto"],
    date: "2024-11-08"
  },
  {
    id: 9,
    title: "Employee Benefits Enrollment Process",
    domain: "HR & Culture",
    criticality: "Low",
    expert: "Sonal Gupta",
    description: "Annual open enrollment process including insurance options, HSA limits, EAP enrollment, and special handling for late joiners and life event exceptions.",
    tags: ["hr", "benefits", "enrollment", "insurance"],
    date: "2024-07-10"
  }
];

const EXPERTS_DATA = [
  {
    name: "Priya Mehta",
    role: "Finance Controller",
    initials: "PM",
    domains: ["Finance", "Compliance"],
    articles: 18,
    riskLevel: "High",
    yearsExp: 12
  },
  {
    name: "Rajan Iyer",
    role: "Senior DevOps Engineer",
    initials: "RI",
    domains: ["Engineering", "Infrastructure"],
    articles: 24,
    riskLevel: "Critical",
    yearsExp: 9
  },
  {
    name: "Neha Sharma",
    role: "Head of Customer Success",
    initials: "NS",
    domains: ["Operations", "CX"],
    articles: 15,
    riskLevel: "Medium",
    yearsExp: 7
  },
  {
    name: "Suresh Babu",
    role: "Principal Engineer",
    initials: "SB",
    domains: ["Engineering", "Legacy Systems"],
    articles: 11,
    riskLevel: "Critical",
    yearsExp: 16
  },
  {
    name: "Kavita Nair",
    role: "Senior Product Manager",
    initials: "KN",
    domains: ["Product", "Strategy"],
    articles: 9,
    riskLevel: "Low",
    yearsExp: 6
  },
  {
    name: "Deepak Verma",
    role: "VP Operations",
    initials: "DV",
    domains: ["Operations", "Finance"],
    articles: 20,
    riskLevel: "High",
    yearsExp: 14
  }
];

const RISK_DATA = [
  {
    title: "Single Point of Failure: Legacy Billing Integration",
    description: "Only Suresh Babu fully understands the legacy billing API integration. No documentation exists for 40% of the integration layer. Risk of complete billing disruption if unavailable.",
    domain: "Engineering",
    owner: "Suresh Babu",
    score: 94,
    level: "critical",
    action: "Knowledge transfer sessions scheduled"
  },
  {
    title: "Undocumented Budget Override Approvals",
    description: "Priya Mehta holds institutional knowledge of all informal budget override approvals made in the past 3 fiscal years. Not captured in any system.",
    domain: "Finance",
    owner: "Priya Mehta",
    score: 87,
    level: "critical",
    action: "Interview sessions needed"
  },
  {
    title: "CI/CD Pipeline Tribal Knowledge",
    description: "Rajan Iyer is the only person who can troubleshoot edge-case pipeline failures. Deployment halts during his absence have occurred twice this year.",
    domain: "Engineering",
    owner: "Rajan Iyer",
    score: 79,
    level: "high",
    action: "Runbook in progress"
  },
  {
    title: "Enterprise Client Relationship History",
    description: "Deepak Verma holds all informal commitments and relationship context for top 5 enterprise clients, not captured in CRM.",
    domain: "Operations",
    owner: "Deepak Verma",
    score: 71,
    level: "high",
    action: "CRM update required"
  },
  {
    title: "HR Calibration Edge Cases",
    description: "Anita Reddy has handled all non-standard review cases personally. No precedent documentation exists for edge cases in appraisals.",
    domain: "HR & Culture",
    owner: "Anita Reddy",
    score: 58,
    level: "high",
    action: "Case library to be created"
  }
];
