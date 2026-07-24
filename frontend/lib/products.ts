export type ProductId = "dp360" | "pardha" | "aura";
export type SignalVariant = "pulse" | "mesh" | "sweep";

export type ProductHighlight = {
  title: string;
  description: string;
  icon: "rocket" | "store" | "chart" | "zap" | "link" | "bot" | "brain" | "workflow" | "trending" | "plug" | "eye" | "message" | "home" | "move" | "blocks";
};

export type ProductSolution = {
  name: string;
  subtitle: string;
  description: string;
  idealFor: string[];
  features: string[];
};

export type Product = {
  id: ProductId;
  name: string;
  eyebrow: string;
  thesis: string;
  accent: string;
  signal: SignalVariant;
  highlights: ProductHighlight[];
  perfectFor: string[];
  cta: string;
  capabilities: string[];
  useCases?: string[];
  why: string[];
  solutions?: ProductSolution[];
};

export const products = [
  {
    id: "dp360",
    name: "DP360",
    eyebrow: "AI Commerce Platform",
    // Launch, manage, and scale your digital business with an AI-powered commerce ecosystem. 
    thesis:
      "DP360 is a modular commerce platform designed to help businesses digitize operations, streamline sales, and deliver exceptional customer experiences. Whether you're a cloud kitchen, D2C brand, retail chain, café, or FMCG business, DP360 provides everything needed to operate from a single intelligent platform. Two Solutions. One Powerful Platform.",
    accent: "#D98A2B",
    signal: "pulse",
    highlights: [
      {
        icon: "rocket",
        title: "E-Commerce as a Service",
        description:
          "Launch your branded online store with integrated ordering, payments, delivery, and customer management.",
      },
      {
        icon: "store",
        title: "Complete Retail Operating System",
        description:
          "Manage POS, inventory, procurement, CRM, finance, vendors, warehouses, and multiple stores from one platform.",
      },
      {
        icon: "chart",
        title: "AI Business Intelligence",
        description:
          "Real-time dashboards, sales forecasting, customer analytics, and actionable insights to drive growth.",
      },
      {
        icon: "zap",
        title: "Rapid Deployment",
        description:
          "Go live in as little as 2 weeks with a scalable, cloud-native architecture.",
      },
      {
        icon: "link",
        title: "Everything Connected",
        description:
          "Integrates orders, inventory, customers, logistics, payments, and marketing into one seamless ecosystem.",
      },
    ],
    perfectFor: [
      "Cloud Kitchens",
      "D2C Brands",
      "Cafes",
      "Restaurants",
      "FMCG",
      "Retail Chains",
      "Franchise Businesses",
    ],
    cta: "Transform Your Commerce",
    capabilities: [
      "Branded Website & Mobile Ordering",
      "Customer & Order Management",
      "Inventory & Product Catalog",
      "Payment Gateway Integration",
      "Coupons & Loyalty Programs",
      "Delivery & Logistics Integration",
      "Marketing Campaign Management",
      "Customer Analytics",
      "AI-powered Business Insights",
      "Point of Sale (POS)",
      "Inventory & Warehouse Management",
      "Procurement & Vendor Management",
      "Purchase & Sales Management",
      "CRM & Loyalty Programs",
      "Multi-Store Management",
      "Employee & Role Management",
      "Financial Reporting",
      "Business Intelligence Dashboards",
      "AI-powered Sales Forecasting",
      "Customer Behaviour Analytics",
      "Executive Insights",
    ],
    solutions: [
      {
        name: "DP360 Commerce",
        subtitle: "E-Commerce as a Service",
        description: "Launch your own branded online ordering platform in weeks—not months.",
        idealFor: [
          "Cloud Kitchens",
          "D2C Brands",
          "Food & Beverage Businesses",
          "Quick Commerce Startups"
        ],
        features: [
          "Branded Website & Mobile Ordering",
          "Customer & Order Management",
          "Inventory & Product Catalog",
          "Payment Gateway Integration",
          "Coupons & Loyalty Programs",
          "Delivery & Logistics Integration",
          "Marketing Campaign Management",
          "Customer Analytics",
          "AI-powered Business Insights"
        ]
      },
      {
        name: "DP360 Retail",
        subtitle: "Complete Retail Operations Platform",
        description: "Digitize every aspect of your retail business through one intelligent operating system.",
        idealFor: [
          "Cafés & Restaurants",
          "FMCG Distributors",
          "Supermarkets",
          "Retail Chains",
          "Franchise Businesses",
          "Convenience Stores"
        ],
        features: [
          "Point of Sale (POS)",
          "Inventory & Warehouse Management",
          "Procurement & Vendor Management",
          "Purchase & Sales Management",
          "CRM & Loyalty Programs",
          "Multi-Store Management",
          "Employee & Role Management",
          "Financial Reporting",
          "Business Intelligence Dashboards",
          "AI-powered Sales Forecasting",
          "Customer Behaviour Analytics",
          "Executive Insights"
        ]
      }
    ],
    why: [
      "One Platform for Complete Business Operations",
      "AI-Driven Business Intelligence",
      "Multi-Branch Ready",
      "Enterprise Security",
      "Cloud-Based & Scalable",
      "Rapid Implementation",
    ],
  },
  {
    id: "pardha",
    name: "Pardha",
    eyebrow: "Agentic AI Operating System",
    // Your AI workforce—designed to think, collaborate, and execute. 
    thesis:
      "Pardha is an enterprise-grade Agentic AI Operating System that orchestrates intelligent AI agents across your organization. It connects people, business systems, and enterprise knowledge into a single autonomous decision-making platform. Instead of isolated AI assistants, Pardha creates an AI-powered workforce capable of planning, coordinating, automating, and continuously learning.",
    accent: "#855CF8",
    signal: "mesh",
    highlights: [
      {
        icon: "bot",
        title: "AI Workforce",
        description:
          "Deploy specialized AI agents that work together across business functions.",
      },
      {
        icon: "brain",
        title: "Enterprise Knowledge Hub",
        description:
          "Unify documents, systems, and business knowledge into one searchable intelligence layer.",
      },
      {
        icon: "workflow",
        title: "Workflow Automation",
        description:
          "Automate repetitive tasks, approvals, reporting, and enterprise workflows with AI.",
      },
      {
        icon: "trending",
        title: "Executive Decision Support",
        description:
          "Deliver real-time insights, recommendations, and strategic intelligence to leadership teams.",
      },
      {
        icon: "plug",
        title: "Enterprise Integrations",
        description:
          "Connect seamlessly with your business tools, APIs, cloud platforms, and internal systems.",
      },
    ],
    perfectFor: [
      "Enterprises",
      "Product Teams",
      "Operations",
      "HR",
      "Finance",
      "Customer Support",
      "Leadership Teams",
    ],
    cta: "Meet Your AI Workforce",
    capabilities: [
      "Multi-Agent Collaboration",
      "AI Executive Assistants",
      "Knowledge Management",
      "Workflow Automation",
      "Intelligent Decision Support",
      "Enterprise Search",
      "Calendar & Email Intelligence",
      "Project & Task Orchestration",
      "Business Process Automation",
      "Secure Enterprise Integrations",
    ],
    useCases: [
      "Executive AI Assistant",
      "Product Management",
      "HR Operations",
      "Customer Support",
      "Project Management",
      "Finance Operations",
      "Sales Enablement",
      "Internal Knowledge Platform",
    ],
    why: [
      "Autonomous AI Agents",
      "Enterprise-Ready Architecture",
      "Modular & Extensible",
      "Human-in-the-Loop Intelligence",
      "Secure by Design",
      "Built for Scale",
    ],
  },
  {
    id: "aura",
    name: "AURA",
    eyebrow: "Intelligent Robotics Platform",
    // Building robots that don't just move—they understand, assist, and evolve. 
    thesis:
      "AURA is UVA's modular AI Robotics Platform that combines robotics, computer vision, artificial intelligence, embedded systems, cloud computing, and smart automation into a single intelligent ecosystem. Designed as a long-term robotics platform, AURA continuously evolves through new AI capabilities, autonomous behaviors, and specialized applications.",
    accent: "#1FA192",
    signal: "sweep",
    highlights: [
      {
        icon: "eye",
        title: "AI Vision",
        description:
          "Detect people, recognize faces, understand environments, and respond intelligently using computer vision.",
      },
      {
        icon: "message",
        title: "Natural Interaction",
        description:
          "Voice-enabled conversations, intelligent responses, and personalized assistance powered by AI.",
      },
      {
        icon: "home",
        title: "Smart Living",
        description:
          "Monitor homes, assist families, support child safety, elderly care, and integrate with smart home ecosystems.",
      },
      {
        icon: "move",
        title: "Autonomous Mobility",
        description:
          "Navigate spaces, follow users, patrol environments, and perform intelligent autonomous actions.",
      },
      {
        icon: "blocks",
        title: "Built for the Future",
        description:
          "A modular architecture that continuously evolves with new AI capabilities, sensors, and applications.",
      },
    ],
    perfectFor: [
      "Families",
      "Healthcare",
      "Education",
      "Hospitality",
      "Security",
      "Smart Homes",
      "Enterprises",
    ],
    cta: "Discover Intelligent Robotics",
    capabilities: [
      "Autonomous Mobility",
      "Computer Vision",
      "Face & Emotion Recognition",
      "Voice Interaction",
      "Conversational AI",
      "Family Monitoring",
      "Child Safety Intelligence",
      "Elderly Assistance",
      "Smart Home Integration",
      "Remote Monitoring",
      "OTA Updates",
      "Cloud Intelligence",
    ],
    useCases: [
      "AI Child Guardian",
      "Elder Care Companion",
      "Home Assistant Robot",
      "Security Patrol Robot",
      "Education Companion",
      "Healthcare Assistant",
      "Hospitality Concierge",
      "Enterprise Reception Robot",
    ],
    why: [
      "Modular Robotics Platform",
      "AI-Native Architecture",
      "Vision Intelligence",
      "Human-Centric Design",
      "Cloud Connected",
      "Continuously Learning",
    ],
  },
] satisfies Product[];

export const productMap = Object.fromEntries(
  products.map((product) => [product.id, product]),
) as Record<ProductId, Product>;

export function getProduct(id: string): Product | undefined {
  return productMap[id as ProductId];
}
