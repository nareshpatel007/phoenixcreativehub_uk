export interface Project {
    slug: string;
    title: string;
    category: string;
    desc: string;
    tags: string[];
    stats: string;
    image: string;
    challenge: string;
    solution: string;
    results: string;
}

export const PORTFOLIO_PROJECTS: Project[] = [
    {
        slug: "enterprise-logistic-erp-suite",
        title: "Enterprise Logistic ERP Suite",
        category: "ERP & Custom Software",
        desc: "Designed and engineered a high-scale supply chain and logistics control dashboard handling 50,000+ daily package movements with <20ms API latency.",
        tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
        stats: "Deflected 85% of coordination lags",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
        challenge: "The client suffered from severe package delays and lack of real-time visibility across multiple transit hubs, leading to significant operations overhead.",
        solution: "We built a centralized microservices-driven ERP with WebSockets for real-time tracking, integrated barcode scanner APIs, and optimized query structures.",
        results: "Package tracking lag was reduced by 85%, and manual package routing workloads decreased by 60% within the first month of launch."
    },
    {
        slug: "subscription-fintech-mobile-client",
        title: "Subscription Fintech Mobile Client",
        category: "Mobile App Development",
        desc: "Launched a fully featured native React Native portal for iOS and Android featuring offline sync, secure payment gateway integrations, and WebSockets.",
        tags: ["React Native", "TypeScript", "Redux", "Stripe API", "AWS"],
        stats: "4.8★ App Store Rating",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
        challenge: "High churn rates due to a slow, unstable checkout flow on mobile and lack of secure local state persistence for offline transactions.",
        solution: "Implemented an offline-first mobile client using Redux Persist and SQLite, wrapped inside native iOS/Android bridge wrappers with optimized Stripe gateways.",
        results: "Boosted checkout completion rates by 42% and secured a 4.8★ rating on the iOS App Store."
    },
    {
        slug: "llm-customer-support-agent-system",
        title: "LLM Customer Support Agent System",
        category: "AI & Automation",
        desc: "Integrated custom OpenAI models and vector indexes with real-time slack triggers to automate inbound support inquiries.",
        tags: ["OpenAI LLM", "Python", "FastAPI", "Pinecone DB", "Github CI"],
        stats: "78% Tickets Automated",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
        challenge: "Customer support desks were overwhelmed by thousands of basic repetitive support queries, increasing response times to over 12 hours.",
        solution: "Built a retrieval-augmented generation (RAG) system processing documentation databases through Pinecone and answering securely via Slack and web chat widgets.",
        results: "Successfully resolved 78% of incoming support requests autonomously, decreasing customer service response times down to under 5 minutes."
    },
    {
        slug: "cloud-infrastructure-re-architecture",
        title: "Cloud Infrastructure Re-architecture",
        category: "Custom Software",
        desc: "Re-engineered a legacy backend monolith to a Kubernetes microservice system with zero-downtime CI/CD deployment pipelines.",
        tags: ["Kubernetes", "AWS EKS", "Terraform", "Docker", "GitLab CI"],
        stats: "Reduced hosting costs by 40%",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
        challenge: "Heavy server downtimes during product updates and scaling bottlenecks caused during high-traffic marketing campaigns.",
        solution: "Decoupled the monolithic database structure, created Helm chart configurations, and orchestrated container groups using Terraform scripts on AWS.",
        results: "Eliminated deployment downtimes entirely (100% uptime achieved) and saved 40% in monthly hosting costs."
    },
    {
        slug: "healthcare-patient-management-system",
        title: "Healthcare Patient Management System",
        category: "Custom Software",
        desc: "Built a HIPAA-compliant patient management platform with appointment scheduling, medical records, and telemedicine integration.",
        tags: ["React", "Node.js", "PostgreSQL", "WebRTC", "AWS"],
        stats: "Serving 200+ clinics",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop",
        challenge: "Healthcare providers struggled with fragmented patient data, manual appointment scheduling, and lack of remote consultation capabilities.",
        solution: "Developed a comprehensive platform with secure EHR integration, automated scheduling algorithms, and built-in video conferencing for telemedicine.",
        results: "Reduced appointment no-shows by 35%, improved patient data accessibility by 90%, and enabled remote consultations for 50+ clinics."
    },
    {
        slug: "e-commerce-marketplace-platform",
        title: "Multi-vendor E-commerce Marketplace",
        category: "Web Development",
        desc: "Created a scalable marketplace platform supporting 500+ vendors with real-time inventory management and payment processing.",
        tags: ["Next.js", "GraphQL", "Stripe", "MongoDB", "Redis"],
        stats: "£1.5M+ monthly transactions",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
        challenge: "The client needed a platform that could handle multiple vendors, complex commission structures, and high-traffic sales events.",
        solution: "Built a microservices architecture with GraphQL for efficient data fetching, implemented real-time inventory sync, and integrated multi-vendor payment splits.",
        results: "Successfully onboarded 500+ vendors, processed £1.5M+ in monthly transactions, and achieved 99.9% uptime during peak sales periods."
    },
    {
        slug: "ai-powered-sales-forecasting",
        title: "AI-Powered Sales Forecasting Engine",
        category: "AI & Automation",
        desc: "Developed machine learning models to predict sales trends and optimize inventory for retail chains across 100+ locations.",
        tags: ["Python", "TensorFlow", "Scikit-learn", "PostgreSQL", "AWS SageMaker"],
        stats: "92% prediction accuracy",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
        challenge: "Retail chains faced significant losses due to overstocking and stockouts, with no reliable way to predict demand patterns.",
        solution: "Created an ML pipeline analyzing historical sales data, seasonal trends, and external factors to generate accurate demand forecasts with automated inventory recommendations.",
        results: "Achieved 92% prediction accuracy, reduced inventory costs by 28%, and decreased stockouts by 65% across 100+ retail locations."
    },
    {
        slug: "manufacturing-iot-dashboard",
        title: "Manufacturing IoT Monitoring Dashboard",
        category: "IoT & Custom Software",
        desc: "Real-time IoT dashboard monitoring 10,000+ sensors across manufacturing facilities with predictive maintenance alerts.",
        tags: ["React", "Node.js", "MQTT", "InfluxDB", "AWS IoT"],
        stats: "10,000+ sensors monitored",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
        challenge: "Manufacturing facilities experienced unplanned downtime due to equipment failures, with no early warning system for predictive maintenance.",
        solution: "Implemented an IoT platform collecting real-time sensor data, built anomaly detection algorithms, and created a dashboard for monitoring and alerting.",
        results: "Reduced unplanned downtime by 45%, extended equipment lifespan by 30%, and saved £200,000 annually in maintenance costs."
    },
    {
        slug: "food-delivery-super-app",
        title: "Food Delivery Super App",
        category: "Mobile App Development",
        desc: "Built a comprehensive food delivery platform with real-time tracking, multiple payment options, and restaurant management portal.",
        tags: ["React Native", "Node.js", "Google Maps API", "Razorpay", "Firebase"],
        stats: "50,000+ daily orders",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop",
        challenge: "The client needed a scalable food delivery solution that could handle high order volumes, real-time tracking, and complex logistics.",
        solution: "Developed a mobile-first architecture with real-time order tracking, optimized routing algorithms, and a comprehensive restaurant management system.",
        results: "Successfully processing 50,000+ daily orders, achieving 98% on-time delivery rate, and onboarding 2,000+ restaurant partners."
    },
    {
        slug: "crm-sales-automation-platform",
        title: "CRM Sales Automation Platform",
        category: "CRM & ERP",
        desc: "Custom CRM with lead scoring, automated follow-ups, and comprehensive sales analytics for B2B sales teams.",
        tags: ["React", "Node.js", "MongoDB", "SendGrid", "HubSpot API"],
        stats: "3x lead conversion rate",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
        challenge: "Sales teams struggled with manual lead management, inconsistent follow-ups, and lack of data-driven insights for decision making.",
        solution: "Built a CRM with AI-powered lead scoring, automated email sequences, comprehensive dashboards, and integration with existing marketing tools.",
        results: "Increased lead conversion rates by 3x, reduced manual data entry by 70%, and improved sales team productivity by 45%."
    },
    {
        slug: "educational-lms-platform",
        title: "Enterprise Learning Management System",
        category: "Custom Software",
        desc: "Scalable LMS with video streaming, interactive quizzes, progress tracking, and certification management for corporate training.",
        tags: ["Next.js", "Node.js", "AWS S3", "PostgreSQL", "Vimeo API"],
        stats: "100,000+ active learners",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop",
        challenge: "Corporate training programs were inefficient with no centralized platform, poor engagement tracking, and manual certification processes.",
        solution: "Developed a comprehensive LMS with adaptive video streaming, interactive learning modules, real-time progress tracking, and automated certification workflows.",
        results: "Onboarded 100,000+ learners, increased course completion rates by 55%, and reduced training administration costs by 60%."
    },
    {
        slug: "real-estate-property-portal",
        title: "Real Estate Property Portal",
        category: "Web Development",
        desc: "Property listing platform with virtual tours, mortgage calculators, and agent management system for real estate agencies.",
        tags: ["React", "Node.js", "MongoDB", "Three.js", "Google Maps"],
        stats: "5,000+ properties listed",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop",
        challenge: "Real estate agencies needed a modern platform to showcase properties with virtual tours, manage listings, and connect with potential buyers efficiently.",
        solution: "Built a feature-rich portal with 3D virtual tours, advanced search filters, integrated mortgage calculators, and a comprehensive agent management system.",
        results: "Listed 5,000+ properties, increased buyer engagement by 70%, and reduced time-to-close by 40% for partner agencies."
    },
    {
        slug: "fintech-payment-gateway-integration",
        title: "Fintech Payment Gateway Integration",
        category: "Custom Software",
        desc: "Secure payment processing platform supporting multiple payment methods, recurring billing, and fraud detection for SaaS businesses.",
        tags: ["Node.js", "Stripe", "Razorpay", "PostgreSQL", "Redis"],
        stats: "£50Cr+ processed monthly",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop",
        challenge: "SaaS businesses needed a reliable payment solution with multi-currency support, subscription management, and robust fraud prevention.",
        solution: "Integrated multiple payment gateways with unified API, built subscription billing engine, implemented ML-based fraud detection, and ensured PCI compliance.",
        results: "Processing £50Cr+ monthly transactions, achieving 99.9% payment success rate, and reducing fraud losses by 85%."
    },
    {
        slug: "social-media-analytics-dashboard",
        title: "Social Media Analytics Dashboard",
        category: "AI & Automation",
        desc: "AI-powered analytics platform tracking social media performance, sentiment analysis, and automated content recommendations.",
        tags: ["Python", "TensorFlow", "React", "Twitter API", "PostgreSQL"],
        stats: "95% sentiment accuracy",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
        challenge: "Marketing teams struggled to measure social media ROI, understand audience sentiment, and optimize content strategies effectively.",
        solution: "Built an AI-driven platform aggregating data from multiple social channels, performing sentiment analysis, and providing actionable content recommendations.",
        results: "Achieved 95% sentiment analysis accuracy, increased engagement rates by 40%, and reduced content planning time by 60%."
    },
    {
        slug: "supply-chain-blockchain-tracker",
        title: "Supply Chain Blockchain Tracker",
        category: "Custom Software",
        desc: "Blockchain-based supply chain tracking system ensuring product authenticity and transparency for luxury goods manufacturers.",
        tags: ["React", "Node.js", "Ethereum", "IPFS", "PostgreSQL"],
        stats: "100% traceability achieved",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600&auto=format&fit=crop",
        challenge: "Luxury goods manufacturers faced counterfeiting issues and lacked transparency in their supply chain, damaging brand reputation.",
        solution: "Implemented a blockchain solution creating immutable records for each product, enabling end-to-end traceability and authenticity verification.",
        results: "Achieved 100% supply chain traceability, reduced counterfeiting by 90%, and increased consumer trust by 75%."
    },
    {
        slug: "hotel-booking-engine",
        title: "Hotel Booking Engine",
        category: "Web Development",
        desc: "Real-time hotel booking platform with dynamic pricing, room management, and integration with global distribution systems.",
        tags: ["Next.js", "Node.js", "PostgreSQL", "Amadeus API", "Redis"],
        stats: "20,000+ bookings/month",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
        challenge: "Hotels needed a modern booking system with real-time availability, dynamic pricing, and seamless integration with global distribution networks.",
        solution: "Built a comprehensive booking engine with real-time inventory management, AI-based dynamic pricing, and integration with major GDS providers.",
        results: "Processing 20,000+ bookings monthly, increased direct bookings by 35%, and improved revenue per available room by 18%."
    },
    {
        slug: "telemedicine-video-consultation",
        title: "Telemedicine Video Consultation Platform",
        category: "Mobile App Development",
        desc: "HIPAA-compliant telemedicine app with video consultations, prescription management, and patient health records.",
        tags: ["React Native", "WebRTC", "Node.js", "PostgreSQL", "AWS"],
        stats: "10,000+ consultations/month",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
        challenge: "Healthcare providers needed a secure, user-friendly telemedicine solution to expand remote care capabilities and improve patient access.",
        solution: "Developed a HIPAA-compliant mobile app with secure video consultations, integrated prescription management, and comprehensive patient health records.",
        results: "Facilitating 10,000+ consultations monthly, reduced patient wait times by 60%, and expanded healthcare access to rural areas."
    },
    {
        slug: "inventory-management-saas",
        title: "Multi-warehouse Inventory Management SaaS",
        category: "CRM & ERP",
        desc: "Cloud-based inventory management system with multi-warehouse support, barcode scanning, and automated reordering.",
        tags: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
        stats: "50+ warehouses managed",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
        challenge: "Businesses with multiple warehouses struggled with fragmented inventory data, stockouts, and inefficient reordering processes.",
        solution: "Built a cloud-based system with real-time multi-warehouse sync, mobile barcode scanning, AI-powered demand forecasting, and automated reordering.",
        results: "Managing 50+ warehouses, reduced stockouts by 75%, decreased inventory holding costs by 30%, and improved order fulfillment speed by 50%."
    },
    {
        slug: "cloud-migration-legacy-system",
        title: "Legacy System Cloud Migration",
        category: "Custom Software",
        desc: "Complete migration of a 15-year-old legacy ERP system to cloud infrastructure with zero data loss and minimal downtime.",
        tags: ["AWS", "Kubernetes", "Terraform", "PostgreSQL", "Docker"],
        stats: "99.99% uptime maintained",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
        challenge: "A manufacturing company needed to migrate their critical 15-year-old ERP system to the cloud while maintaining 99.99% uptime and zero data loss.",
        solution: "Executed a phased migration strategy using containerization, implemented blue-green deployment, and created comprehensive rollback procedures.",
        results: "Successfully migrated with zero data loss, maintained 99.99% uptime throughout migration, and reduced infrastructure costs by 45%."
    }
];

export interface Testimonial {
    name: string;
    role: string;
    company: string;
    image: string;
    content: string;
    rating: number;
    projectSlug: string;
}

export const TESTIMONIALS: Testimonial[] = [
    {
        name: "Alexander Wright",
        role: "CTO",
        company: "LogiTech Solutions Ltd",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
        content: "The ERP system transformed our logistics operations. We've seen an 85% reduction in coordination lags and our team can now track packages in real-time across all transit hubs.",
        rating: 5,
        projectSlug: "enterprise-logistic-erp-suite"
    },
    {
        name: "Charlotte Evans",
        role: "Founder & CEO",
        company: "PayFlow Fintech UK",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
        content: "Our mobile app rating jumped to 4.8 stars after the redesign. The offline sync feature has been a game-changer for our users across the UK and Europe.",
        rating: 5,
        projectSlug: "subscription-fintech-mobile-client"
    },
    {
        name: "James Thornton",
        role: "VP of Customer Success",
        company: "TechSupport UK Inc",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
        content: "The AI support system handles 78% of our tickets automatically. Our response time dropped from 12 hours to under 5 minutes, dramatically improving customer satisfaction.",
        rating: 5,
        projectSlug: "llm-customer-support-agent-system"
    },
    {
        name: "Sophie Harrison",
        role: "Head of Infrastructure",
        company: "CloudScale Europe",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
        content: "Zero downtime deployments and 40% cost savings. The cloud re-architecture was exactly what we needed to scale our infrastructure efficiently.",
        rating: 5,
        projectSlug: "cloud-infrastructure-re-architecture"
    },
    {
        name: "Dr. Oliver Campbell",
        role: "Medical Director",
        company: "CareFirst Clinics London",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=100&auto=format&fit=crop",
        content: "The patient management system has revolutionized how we operate. Appointment no-shows dropped by 35% and our patients love the telemedicine integration.",
        rating: 5,
        projectSlug: "healthcare-patient-management-system"
    },
    {
        name: "Emma Watson-Clarke",
        role: "Managing Director",
        company: "MarketHub UK Ltd",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop",
        content: "Processing £1.5M monthly transactions with 99.9% uptime. The marketplace platform has enabled us to onboard 500+ vendors seamlessly.",
        rating: 5,
        projectSlug: "e-commerce-marketplace-platform"
    },
    {
        name: "David Sterling",
        role: "Head of Operations",
        company: "RetailMax UK",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
        content: "92% prediction accuracy on sales forecasting has transformed our inventory management. We've reduced costs by 28% and stockouts by 65% across 100 locations.",
        rating: 5,
        projectSlug: "ai-powered-sales-forecasting"
    },
    {
        name: "Hannah Phillips",
        role: "Plant Director",
        company: "Apex Precision Manufacturing",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
        content: "Monitoring 10,000+ sensors in real-time has reduced our unplanned downtime by 45%. The predictive maintenance alerts have saved us £200,000 annually.",
        rating: 5,
        projectSlug: "manufacturing-iot-dashboard"
    },
    {
        name: "George Davies",
        role: "Head of Delivery",
        company: "SwiftExpress UK",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop",
        content: "Processing 50,000 daily orders with 98% on-time delivery. The routing algorithms and restaurant management system have been exceptional.",
        rating: 5,
        projectSlug: "food-delivery-super-app"
    },
    {
        name: "Jessica Bennett",
        role: "Commercial Director",
        company: "B2B Enterprise Solutions",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
        content: "Our lead conversion rate increased 3x after implementing the CRM. The automated follow-ups and lead scoring have dramatically improved our sales productivity.",
        rating: 5,
        projectSlug: "crm-sales-automation-platform"
    },
    {
        name: "Marcus Taylor",
        role: "VP of People & Learning",
        company: "CorpLearn Global UK",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop",
        content: "100,000+ active learners and 55% increase in course completion rates. The LMS has completely transformed our corporate training programs.",
        rating: 5,
        projectSlug: "educational-lms-platform"
    },
    {
        name: "Victoria Montgomery",
        role: "Managing Director",
        company: "Prime Properties London",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop",
        content: "The virtual tours and property portal have increased buyer engagement by 70%. Our agents can now close deals 40% faster with the integrated tools.",
        rating: 5,
        projectSlug: "real-estate-property-portal"
    }
];
