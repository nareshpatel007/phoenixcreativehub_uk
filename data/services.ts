export interface Service {
    title: string;
    slug: string;
    tagline: string;
    description: string;
    features: string[];
    benefits: string[];
    technologies: string[];
    faq: { question: string; answer: string }[];
    iconName: string;
    whatYouGet: { title: string; description: string }[];
    process: { step: number; title: string; description: string }[];
    whoItsFor: string[];
    whyChooseUs: string[];
    pricing: { tier: string; price: string; features: string[] }[];
}

export const services: Service[] = [
    {
        title: "Custom Software Development",
        slug: "custom-software-development",
        tagline: "High-performance enterprise software built for scale.",
        description: "We engineer robust, responsive, and secure custom applications using modern frameworks like React, Next.js, and Node.js. Our solutions are designed to handle high traffic while delivering exceptional user experiences.",
        features: ["Single Page Applications (SPAs)", "Progressive Web Apps (PWAs)", "E-commerce Platforms", "Custom CMS Solutions"],
        benefits: ["Lightning-fast load times", "SEO-optimized architecture", "Seamless third-party integrations", "Bank-grade security"],
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
        whatYouGet: [
            { title: "Custom-Built Software", description: "Software designed specifically for your business needs, not generic solutions." },
            { title: "User-Friendly Interface", description: "Easy-to-use design that your team can learn quickly without extensive training." },
            { title: "Scalable Solution", description: "Grows with your business - add features and users as you expand." },
            { title: "Ongoing Support", description: "Technical support and maintenance to keep everything running smoothly." }
        ],
        process: [
            { step: 1, title: "Discovery", description: "We learn about your business, goals, and requirements through meetings and research." },
            { step: 2, title: "Planning", description: "We create a detailed plan, timeline, and prototype for your approval." },
            { step: 3, title: "Development", description: "Our team builds your software using proven methodologies and best practices." },
            { step: 4, title: "Testing", description: "We thoroughly test everything to ensure quality and performance." },
            { step: 5, title: "Launch", description: "We deploy your software and train your team on how to use it." }
        ],
        whoItsFor: ["Small to medium businesses needing custom software", "Companies outgrowing spreadsheets or manual processes", "Businesses requiring unique workflows not available in off-the-shelf solutions", "Organizations needing integration with existing systems"],
        whyChooseUs: ["10+ years of industry experience", "Dedicated project manager for clear communication", "Transparent pricing with no hidden costs", "Post-launch support and training included"],
        pricing: [
            { tier: "Starter", price: "Starting at ₹1,00,000", features: ["Basic custom software", "Core features", "Standard support", "1-month warranty"] },
            { tier: "Professional", price: "Starting at ₹2,00,000", features: ["Advanced custom software", "Custom integrations", "Priority support", "3-month warranty", "Training sessions"] },
            { tier: "Enterprise", price: "Starting at ₹3,00,000", features: ["Complex multi-system solutions", "Full-scale integrations", "24/7 support", "6-month warranty", "On-site training", "Custom SLA"] }
        ],
        faq: [
            { question: "How long does a typical web project take?", answer: "Most medium-sized web applications take 3-4 months from discovery to launch, depending on complexity and features." },
            { question: "Do you provide ongoing maintenance?", answer: "Yes, we offer comprehensive SLA packages for updates, security patches, and feature additions to ensure your site stays current." },
            { question: "What technologies do you use for custom software?", answer: "We primarily use modern frameworks like React, Next.js, Node.js, and TypeScript. We choose technologies based on your specific requirements for performance, scalability, and maintainability." },
            { question: "Can you integrate with my existing systems?", answer: "Absolutely. We have extensive experience integrating custom software with existing ERPs, CRMs, payment gateways, and third-party APIs through REST, GraphQL, or SOAP protocols." },
            { question: "How do you ensure code quality?", answer: "We follow strict coding standards, conduct peer code reviews, implement automated testing (unit, integration, E2E), and use CI/CD pipelines to ensure high-quality, maintainable code." },
            { question: "What's your development process?", answer: "We follow an agile methodology with 2-week sprints, regular demos, and continuous client communication. This ensures transparency and allows for iterative improvements based on your feedback." }
        ],
        iconName: "Laptop"
    },
    {
        title: "Web & Mobile Applications",
        slug: "web-mobile-development",
        tagline: "Native and cross-platform mobile experiences.",
        description: "From iOS to Android, we craft mobile applications that users love. We focus on intuitive interfaces, offline capabilities, and smooth performance to keep your audience engaged.",
        features: ["iOS Native Development", "Android Native Development", "Cross-Platform (React Native/Flutter)", "App Store Optimization"],
        benefits: ["Wider audience reach", "Offline access", "Push notifications", "Hardware integration (Camera, GPS)"],
        technologies: ["Swift", "Kotlin", "React Native", "Flutter"],
        whatYouGet: [
            { title: "Mobile App for iOS & Android", description: "Your customers can download your app from both major app stores." },
            { title: "Intuitive Design", description: "Easy-to-navigate interface that keeps users engaged." },
            { title: "Offline Capability", description: "Users can access key features even without internet connection." },
            { title: "App Store Management", description: "We handle submissions, updates, and store optimization." }
        ],
        process: [
            { step: 1, title: "Strategy", description: "We define app goals, target audience, and key features." },
            { step: 2, title: "Design", description: "We create visual designs and interactive prototypes." },
            { step: 3, title: "Development", description: "We build and test your app on both platforms." },
            { step: 4, title: "Submission", description: "We handle app store submission and approval process." },
            { step: 5, title: "Launch & Support", description: "We launch your app and provide ongoing updates and support." }
        ],
        whoItsFor: ["Businesses wanting to reach mobile customers", "E-commerce companies needing mobile shopping experiences", "Service-based businesses with booking needs", "Organizations requiring employee-facing mobile tools"],
        whyChooseUs: ["Expertise in both native and cross-platform", "User-centered design approach", "Full app store lifecycle management", "Performance optimization for all devices"],
        pricing: [
            { tier: "MVP", price: "Starting at ₹70,000", features: ["Single platform (iOS or Android)", "Core features", "Basic design", "Standard support"] },
            { tier: "Cross-Platform", price: "Starting at ₹1,50,000", features: ["Both iOS and Android", "Advanced features", "Custom design", "Priority support", "App store optimization"] },
            { tier: "Enterprise", price: "Starting at ₹2,00,000", features: ["Complex multi-platform apps", "Hardware integrations", "Backend development", "24/7 support", "White-label options"] }
        ],
        faq: [
            { question: "Should I choose native or cross-platform?", answer: "Native offers maximum performance, while cross-platform (React Native/Flutter) is more cost-effective for reaching both platforms simultaneously." },
            { question: "Can you rescue an existing mobile app project?", answer: "Yes, our team can audit, refactor, and stabilize existing mobile codebases that have been stalled or poorly implemented." },
            { question: "How do you handle app store submissions?", answer: "We handle the entire submission process for both Apple App Store and Google Play Store, including preparing screenshots, descriptions, and managing review responses." },
            { question: "What about app updates and maintenance?", answer: "We provide ongoing support for bug fixes, OS compatibility updates, and new feature releases. We can also set up automated crash reporting and analytics." },
            { question: "Can you integrate payment gateways in mobile apps?", answer: "Yes, we integrate payment solutions like Stripe, PayPal, Apple Pay, and Google Pay with secure tokenization and PCI compliance." },
            { question: "Do you provide offline functionality?", answer: "Absolutely. We implement offline data caching, background sync, and local storage strategies to ensure your app works seamlessly even without internet connectivity." }
        ],
        iconName: "Smartphone"
    },
    {
        title: "AI Automation & ML",
        slug: "ai-automation-ml",
        tagline: "Intelligent systems that learn and adapt.",
        description: "Unlock the power of your data with custom Artificial Intelligence and Machine Learning models. From predictive analytics to natural language processing, we build systems that give you a competitive edge.",
        features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Engines"],
        benefits: ["Automated decision making", "Personalized user experiences", "Operational efficiency", "Data-driven insights"],
        technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI"],
        whatYouGet: [
            { title: "Smart Automation", description: "AI handles repetitive tasks, freeing your team for important work." },
            { title: "Data Insights", description: "Turn your data into actionable business intelligence." },
            { title: "Predictive Capabilities", description: "Forecast trends and make informed decisions." },
            { title: "Custom AI Models", description: "AI trained specifically for your business and industry." }
        ],
        process: [
            { step: 1, title: "Assessment", description: "We evaluate your data and identify AI opportunities." },
            { step: 2, title: "Data Preparation", description: "We clean and organize your data for AI training." },
            { step: 3, title: "Model Development", description: "We build and train custom AI models for your needs." },
            { step: 4, title: "Integration", description: "We integrate AI into your existing systems." },
            { step: 5, title: "Monitoring", description: "We continuously monitor and improve AI performance." }
        ],
        whoItsFor: ["Businesses with large amounts of data", "Companies wanting to automate manual processes", "Organizations needing better decision-making tools", "Businesses seeking competitive advantages through AI"],
        whyChooseUs: ["AI/ML specialists with real-world experience", "Focus on practical business outcomes", "Ethical AI practices", "Ongoing model optimization"],
        pricing: [
            { tier: "Consultation", price: "Starting at ₹1,00,000", features: ["AI readiness assessment", "Opportunity analysis", "Recommendations", "Implementation roadmap"] },
            { tier: "Implementation", price: "Starting at ₹1,50,000", features: ["Custom AI model development", "Data processing", "System integration", "Training and documentation"] },
            { tier: "Enterprise AI", price: "Starting at ₹2,00,000", features: ["Complex AI systems", "Multiple model deployment", "Real-time processing", "Dedicated AI team", "Continuous optimization"] }
        ],
        faq: [
            { question: "Do I need a lot of data for AI?", answer: "While more data is better, we can start with pre-trained models and fine-tune them with smaller, high-quality datasets specific to your business." },
            { question: "Can AI integrate with my existing software?", answer: "Yes, we typically deploy AI models as microservices accessible via REST or GraphQL APIs for easy integration." },
            { question: "What types of AI solutions can you build?", answer: "We build custom AI solutions including chatbots, predictive analytics, recommendation engines, document processing, computer vision systems, and natural language processing applications." },
            { question: "How do you handle AI model training and deployment?", answer: "We handle the entire ML lifecycle from data preprocessing and model training to deployment, monitoring, and continuous retraining to maintain model accuracy over time." },
            { question: "Is AI development expensive?", answer: "Costs vary based on complexity. We start with MVP solutions to validate ROI before scaling. Many AI implementations pay for themselves through automation and efficiency gains." },
            { question: "Do you use pre-trained models or build from scratch?", answer: "We use a hybrid approach. We leverage pre-trained models (like GPT, BERT, ResNet) when appropriate for faster development, and build custom models when your use case requires specialized training." }
        ],
        iconName: "Bot"
    },
    {
        title: "CRM & ERP Systems",
        slug: "crm-erp-systems",
        tagline: "End-to-end software as a service and administrative platforms.",
        description: "We architect and build multi-tenant SaaS and custom ERP systems designed for subscription billing, user management, and high availability. Turn your concept into a recurring revenue engine.",
        features: ["Multi-tenant Architecture", "Subscription Billing Integration", "Role-based Access Control", "API Development"],
        benefits: ["Recurring revenue stream", "Centralized updates", "Global accessibility", "Rapid deployment"],
        technologies: ["Next.js", "Stripe", "GraphQL", "Redis"],
        whatYouGet: [
            { title: "Custom CRM/ERP System", description: "A system tailored to your specific business processes." },
            { title: "Centralized Data", description: "All your business information in one secure location." },
            { title: "Automated Workflows", description: "Streamline operations with automated processes and notifications." },
            { title: "User Management", description: "Control who sees what with role-based access and permissions." }
        ],
        process: [
            { step: 1, title: "Analysis", description: "We study your current processes and pain points." },
            { step: 2, title: "Architecture", description: "We design a system architecture that fits your needs." },
            { step: 3, title: "Development", description: "We build your CRM/ERP with iterative feedback." },
            { step: 4, title: "Migration", description: "We migrate your existing data to the new system." },
            { step: 5, title: "Training", description: "We train your team and provide ongoing support." }
        ],
        whoItsFor: ["Growing businesses outgrowing spreadsheets", "Companies with complex customer or inventory management needs", "Organizations needing better reporting and analytics", "Businesses requiring process automation"],
        whyChooseUs: ["Experience with complex business systems", "Focus on user adoption", "Scalable architecture", "Comprehensive data migration"],
        pricing: [
            { tier: "Essential", price: "Starting at ₹1,00,000", features: ["Core CRM/ERP features", "Up to 50 users", "Standard reporting", "Email support"] },
            { tier: "Business", price: "Starting at ₹2,00,000", features: ["Advanced features", "Unlimited users", "Custom reports", "Priority support", "API access"] },
            { tier: "Enterprise", price: "Starting at ₹3,00,000", features: ["Full customization", "Multi-location support", "Advanced security", "Dedicated support", "On-premise options"] }
        ],
        faq: [
            { question: "How do you handle data security in SaaS?", answer: "We implement tenant isolation (ensuring one customer can't see another's data), encryption, and robust RBAC (Role-Based Access Control)." },
            { question: "Do you integrate payment gateways?", answer: "Yes, we have extensive experience with Stripe, Paddle, and Braintree for handling recurring subscriptions and tax compliance." },
            { question: "Can you migrate my existing CRM/ERP to a new system?", answer: "Yes, we specialize in data migration from legacy systems to modern platforms. We ensure data integrity, map custom fields, and minimize downtime during transition." },
            { question: "What's the difference between CRM and ERP?", answer: "CRM (Customer Relationship Management) focuses on sales, marketing, and customer service. ERP (Enterprise Resource Planning) handles core business operations like inventory, finance, and HR. We can build integrated systems that cover both." },
            { question: "Do you support multi-tenant architecture?", answer: "Absolutely. We build scalable multi-tenant SaaS applications with proper data isolation, customizable branding per tenant, and efficient resource utilization." },
            { question: "Can you add custom reporting and dashboards?", answer: "Yes, we create custom reporting modules with real-time data visualization, scheduled reports, and export capabilities (PDF, Excel, CSV) tailored to your business KPIs." }
        ],
        iconName: "Database"
    }
];
