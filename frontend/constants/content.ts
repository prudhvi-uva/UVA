export const CONTENT = {
  hero: {
    headline: "Engineering the Future of Intelligence",
    subheadline: "We engineer intelligent products that transform ideas into AI-powered platforms, autonomous agents, and robotics helping businesses innovate faster, operate smarter, and lead the future.",
    ctaPrimary: "Explore Our Products",
    ctaSecondary: "Contact Us",
  },
  products: {
    // heading: "What we're building",
    // subheading: "Two products in market. Two more in the lab.",
    // eyebrow: "Product Lab",
    heading: "Something exciting is coming soon!",
    subheading: "Beyond our services, we're innovating something game-changing. Stay tuned for the big reveal!",
    teaser: "Curiosity is at an all-time high.",
    rating: "★★★★★",
    cta: "Discover",
  },
  productCards: [
    {
      id: 'dp360',
      tag: 'DATA PLATFORM',
      name: 'DP360',
      link:'',
      accent: 'copper' as const,
      mode: 'toggle' as const,
      fmcg: {
        positioning: 'Retail and consumer data, unified into one decision layer.',
        bullets: [
          'Demand forecasting tuned to SKU-level seasonality',
          'Retail and distributor data reconciled automatically',
          'Dashboards built for category and channel managers',
        ],
      },
      nonFmcg: {
        positioning: 'The same platform, reshaped for industrial and B2B data.',
        bullets: [
          'Asset and supply-chain data unified across plants',
          'Configurable to sector-specific KPIs',
          'Role-based dashboards for ops and finance teams',
        ],
      },
      cta: { label: 'Learn more', href: '/product' },
    },
    {
      id: 'paarth',
      tag: 'AI AGENT',
      name: 'Paarth',
      link:'',
      accent: 'circuit' as const,
      mode: 'ticker' as const,
      positioning: 'An agent that tests your software while you build it.',
      bullets: [
        'Writes and runs test cases from your existing codebase',
        'Flags regressions before they reach QA',
        'Learns your product\'s edge cases over time',
      ],
      tickerLines: [
        '✓ checkout flow — passed',
        '✓ auth redirect — passed',
        '✓ payment gateway — passed',
        '✓ session timeout — passed',
        '✓ cart sync — passed',
        '✓ error boundary — passed',
      ],
      cta: { label: 'Learn more', href: '/product' },
    },
    {
      id: 'p3',
      tag: 'COMING SOON',
      name: 'Product 3',
      link:'',
      accent: 'ink' as const,
      mode: 'static' as const,
      positioning: 'Details coming soon — something worth waiting for.',
      bullets: [] as string[],
      cta: null,
    },
    {
      id: 'p5',
      tag: 'COMING SOON',
      name: 'Product 5',
      accent: 'ink' as const,
      mode: 'static' as const,
      positioning: 'Details coming soon — something worth waiting for.',
      bullets: [] as string[],
      cta: null,
    },
  ],
  product: {
    hero: {
      headline: "Smarter Retail Starts Here.",
      subheadline: "DealPulse 360: The Complete Commerce Control Suite",
      description: "From store launch to advanced sales intelligence, DealPulse 360 powers retail businesses of all sizes with one unified system.",
      banner: "Launching Soon! — Be the first to transform your business."
    },
    intro: {
      headline: "Your Store. Your Sales. Your Strategy — One Platform.",
      description: "DealPulse 360 is a next-gen, cloud-powered retail system transforming how UK and Indian businesses operate. Whether you run a corner shop, a café, or a franchise — we simplify your digital journey with precision."
    },
    tiers: [
      {
        icon: "",
        name: "StoreFront 360",
        description: "Build your store online. Manage prices, orders, payments — all from one place.",
        ideal: "Restaurant websites, Kirana stores, boutiques, Home vendors."
      },
      {
        icon: "",
        name: "PulsePOS Web",
        description: "Turn any browser into your sales terminal. Simple billing, real-time reports, payment gateway built in.",
        ideal: "Bakeries, cafés, thrift stores."
      },
      {
        icon: "",
        name: "PulseHQ POS",
        description: "Complete control for serious business: kitchen sync, staff HR, feedback, inventory — in one place.",
        ideal: "Restaurants and Bars, salons, cloud kitchens."
      }
    ],
    whyChoose: {
      headline: "Why Choose DealPulse 360?",
      points: [
        "All-in-One Platform — No need to juggle tools",
        "UK + India Friendly — Local currency & gateway support",
        "Mobile Ready — Manage from anywhere",
        "Growth-Ready — Scale from 1 store to 100",
        "No-Code Setup — Designed for entrepreneurs"
      ]
    },
    testimonial: {
      quote: "“I moved my shop online in 2 days and started tracking orders instantly. DealPulse 360 is everything I needed — and nothing I didn’t.”",
      author: "— Boutique Owner – India"
    },
    cta: {
      headline: "Ready to modernize your retail business?",
      button: "Enquire now!"
    }
  },
  productPage: {
    title: "UVA Product Information",
    description: "Discover the latest updates and information about groundbreaking, innovative tools UVA is developing in the domain of Data analytics and AI. Stay tuned for the updates and subscribe for Latest UVA product information."
  },
  productCatalog: [
    {
      id: "prod_01JJQD16S91DVAQQ5XE5GHR357",
      name: "AI-Driven Analytics Solutions",
      description: "Transform your data analytics with our innovative AI-driven solutions designed specifically for the food and beverage industry. Our product enhances decision-making for bars, restaurants, and coffee shops by providing actionable insights and predictive analytics. Leverage the power of data to optimize operations, improve customer experiences, and drive sales growth. Discover how our technology can revolutionize your business today!",
      image: "https://images.unsplash.com/photo-1579226905180-636b76d96082?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxN3x8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHx8fDE3MzgwNjI1OTR8MA&ixlib=rb-4.0.3"
    },
    {
      id: "prod_01JJQD16SHMDXGAEQTXVNMFFET",
      name: "AI Analytics Solution for Businesses",
      description: "Transform your data into actionable insights with our cutting-edge AI analytics solution. Designed specifically for bars, restaurants, and coffee shops, our product enhances decision-making and boosts operational efficiency. Leverage advanced algorithms to analyze customer behavior, optimize inventory, and improve service quality. Elevate your business with data-driven strategies that lead to increased revenue and customer satisfaction. Discover the future of analytics tailored for the hospitality industry.",
      image: "https://images.unsplash.com/photo-1522071901873-411886a10004?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxNnx8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHx8fDE3MzgwNjI1OTR8MA&ixlib=rb-4.0.3"
    },
    {
      id: "prod_01JJQD16SR0XACSBAFTW5CAVPY",
      name: "AI Analytics Solutions for Businesses",
      description: "Discover our cutting-edge AI analytics solutions designed specifically for the data analytics and AI department. Our product enhances decision-making for bars, restaurants, and coffee shops by providing actionable insights through data visualization. With user-friendly interfaces and powerful algorithms, you can effortlessly track performance metrics and customer preferences. Transform your business operations and elevate your service quality with our innovative tools tailored for the hospitality industry.",
      image: "https://images.unsplash.com/photo-1587400563263-e77a5590bfe7?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyN3x8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHx8fDE3MzgwNjI1OTR8MA&ixlib=rb-4.0.3"
    },
    {
      id: "prod_01JJQD16T0TCP9YY829WQQ7BJR",
      name: "AI-Powered Data Analytics Tool",
      description: "Introducing our cutting-edge AI-powered data analytics tool designed specifically for the food and beverage industry. This innovative product helps bars, restaurants, and coffee shops harness the power of data to enhance customer experiences, optimize operations, and drive sales. With intuitive dashboards and real-time insights, you can make informed decisions that elevate your business. Transform your data into actionable strategies and stay ahead in a competitive market.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxOHx8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHx8fDE3MzgwNjI1OTR8MA&ixlib=rb-4.0.3"
    },
    {
      id: "prod_01JJQD16T7CHWFPCGH1GCRQ10G",
      name: "AI-Driven Analytics Tool",
      description: "Introducing our cutting-edge AI-driven analytics tool designed specifically for the data analytics and AI departments in bars, restaurants, and coffee shops. This innovative product empowers businesses to harness data insights, optimize operations, and enhance customer experiences. With intuitive dashboards and real-time reporting, you can make informed decisions that drive growth and efficiency. Transform your establishment with our advanced analytics solution today!",
      image: "https://images.unsplash.com/photo-1501526029524-a8ea952b15be?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw5fHxkYXRhJTIwYW5hbHl0aWNzfGVufDB8fHx8MTczODA2MjU5NHww&ixlib=rb-4.0.3"
    },
    {
      id: "prod_01JJQD16ZNYC9CQ8M56P9KN9GD",
      name: "AI Analytics Tool for Businesses",
      description: "Introducing our cutting-edge AI Analytics Tool designed specifically for the data analytics and AI departments of bars, restaurants, and coffee shops. This product empowers businesses to harness data insights, optimize operations, and enhance customer experiences. With intuitive dashboards and real-time analytics, you can make informed decisions that drive growth and efficiency. Elevate your business with our innovative solution tailored for the hospitality industry.",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw0fHxkYXRhJTIwYW5hbHl0aWNzfGVufDB8fHx8MTczODA2MjU5NHww&ixlib=rb-4.0.3"
    }
  ],
  assets: {
    logo: "/UVA_logo.png",
    heroVideo: "https://videos.pexels.com/video-files/8059189/8059189-uhd_2732_1440_25fps.mp4",
    serviceVideo: "https://videos.pexels.com/video-files/3141208/3141208-uhd_2560_1440_25fps.mp4",
    images: {
      dataAnalytics: "https://images.unsplash.com/photo-1673255745677-e36f618550d1?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyM3x8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHx8fDE3MzgwNjI1OTR8MA&ixlib=rb-4.0.3",
      embedded: "https://images.unsplash.com/photo-1595692682118-774e5182f484?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxM3x8ZW1iZWRkZWQlMjBzeXN0ZW1zfGVufDB8fHx8MTczODIzMjIxOXww&ixlib=rb-4.0.3",
      aiIntro: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwzfHxBSXxlbnwwfHx8fDE3MzgyMjkxNjl8MA&ixlib=rb-4.0.3",
      contact: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw3fHxjb250YWN0JTIwdXN8ZW58MHx8fHwxNzM4MTg4MTY5fDA&ixlib=rb-4.0.3"
    }
  },
  leadership: {
    hero: {
      headline: "The Minds Shaping UVA",
      subheadline: "Empowering Change & Inspiring Collective Action",
      description: "UVA is a collective of three passionate individuals dedicated to making a meaningful impact in our community and beyond. We believe in the power of collaboration and innovation to drive change.",
    },
    mission: {
      headline: "Our Vision, Our Mission",
      description: "Our journey began with a shared vision to create something that truly matters. Together, we strive to inspire others and foster a sense of community through our initiatives and projects.",
      quote: "\"Karmanye vadhikaraste ma phaleshu kadachana, Ma karmaphalaheturbhurma te sangostvakarmani.\" — Krushn",
    },
    team: [
      {
        name: "Ushaswini Verma",
        role: "Co-Founder, Director, Head of Operations",
        quote: "\"Peace Begins with Smile\"",
        linkedin: "https://www.linkedin.com/in/ushaswini-verma-mupparapu-879026302/",
        email: "mailto:ushaswini_mupparapu@uvaproit.com"
      },
      {
        name: "Abhishek Kola",
        role: "Co-Founder, Director, Head of Data Analytics & AI",
        quote: "\"Yad Bhavam, Tad Bhavathi\"",
        linkedin: "https://www.linkedin.com/in/abhishek-kola-ak/",
        email: "mailto:abhishek_kola@uvaproit.com"
      },
      {
        name: "Vishal Verma",
        role: "Co-Founder, Director, Head of Embedded Services",
        quote: "\"As a Man Thinketh — So is he\"",
        linkedin: "https://www.linkedin.com/in/vishal-verma-mupparapu-955a92270/",
        email: "mailto:vishal_verma@uvaproit.com"
      }
    ]
  },
  careers: {
    hero: {
      headline: "Explore Career Opportunities",
      description: "Join us at UVA and discover exciting job openings tailored for your skills and aspirations."
    },
    about: {
      heading: "Empowering Your Career Journey",
      description1: "Welcome to our careers page, where we connect talented individuals with exciting job opportunities. Explore various positions and take the next step in your professional journey with us.",
      image1: {
        url: "https://images.unsplash.com/photo-1635350736475-c8cef4b21906?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxqb2IlMjBhcHBsaWNhdGlvbnxlbnwwfHx8fDE3MzgxNTY4MjN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "a sign that says we are hiring and apply today"
      },
      subheading: "Join Our Team",
      heading2: "Explore Career Opportunities",
      description2: "Our mission is to provide a platform for job seekers to find fulfilling careers. We are dedicated to helping you navigate your career path and achieve your professional goals."
    },
    contact: {
      heading: "Get In Touch",
      description: "Reach out for inquiries about job applications or career opportunities on our UVA careers page.",
      image: {
        url: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwzfHxqb2IlMjBhcHBsaWNhdGlvbnxlbnwwfHx8fDE3MzgxNTY4MjN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "white printer paper beside silver laptop computer"
      }
    },
    resources: {
      heading: "Career Opportunities Available",
      description: "Explore various job openings and apply for positions that match your skills and aspirations.",
      portal_title: "Job Application Portal",
      portal_desc: "Submit your application easily and track your job progress on our user-friendly platform.",
      portal_image: {
        url: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxMXx8am9iJTIwYXBwbGljYXRpb258ZW58MHx8fHwxNzM4MTU2ODIzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "two person standing on gray tile paving"
      },
      hub_title: "Career Resources Hub",
      hub_desc: "Access valuable resources, tips, and guidance to enhance your job search and career development.",
      hub_image: {
        url: "https://images.unsplash.com/photo-1573496130407-57329f01f769?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxM3x8am9iJTIwYXBwbGljYXRpb258ZW58MHx8fHwxNzM4MTU2ODIzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "three women sitting at the table"
      }
    }
  },
  privacyPolicy: {
    title: "Privacy Policy",
    intro: [
      "www.uvatechservices.com website is owned by UVA Product and IT Services Limited, which is a data controller of your personal data.",
      "We have adopted this Privacy Policy, which determines how we are processing the information collected by www.uvatechservices.com, which also provides the reasons why we must collect certain personal data about you. Therefore, you must read this Privacy Policy before using www.uvatechservices.com website.",
      "We take care of your personal data and undertake to guarantee its confidentiality and security."
    ],
    sections: [
      {
        heading: "Personal information we collect",
        paragraphs: ["We may collect the following personal information when you voluntarily submit it through:"],
        bullets: [
          "Contact Forms: Name, email address, and message",
          "Newsletter/Subscription Forms: Email address"
        ]
      },
      {
        heading: "How We Use Your Information",
        paragraphs: ["We use the information you provide to:"],
        bullets: [
          "Respond to your enquiries",
          "Contact you regarding our products, services, or careers",
          "Send updates or notifications (if subscribed)"
        ],
        footer: "We do not share your data with third parties. The data is only used by our internal team for the purposes mentioned above. You can visit the website without telling us who you are or revealing any information, by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the website’s features, or you wish to receive our newsletter or provide other details by filling a form, you may provide personal data to us, such as your email, first name, last name, city of residence, organization, telephone number. You can choose not to provide us with your personal data, but then you may not be able to take advantage of some of the website’s features. For example, you won’t be able to receive our Newsletter or contact us directly from the website. Users who are uncertain about what information is mandatory are welcome to contact us via enquiries@uvaproit.com."
      },
      {
        heading: "Your Rights",
        paragraphs: ["If you are located in the UK or EU, you have the right to:"],
        bullets: [
          "Access the data we hold about you",
          "Request correction or deletion of your data",
          "Withdraw your consent at any time"
        ],
        footer: "To make such a request, please contact us via the email you originally used to communicate with us."
      },
      {
        heading: "Data Retention",
        paragraphs: ["We retain submitted data only for as long as necessary to fulfill the enquiry or interaction."]
      },
      {
        heading: "Information Security",
        paragraphs: ["We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We keep reasonable administrative, technical, and physical safeguards to protect against unauthorized access, use, modification, and personal data disclosure in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed."]
      },
      {
        heading: "Cookies and Tracking",
        paragraphs: ["We do not use cookies or tracking technologies on our website."]
      },
      {
        heading: "International Access",
        paragraphs: ["Our services are based in the United Kingdom, but the website can be accessed globally. We ensure compliance with applicable data protection laws, including GDPR."]
      },
      {
        heading: "Legal Disclosure",
        paragraphs: ["We will disclose any information we collect, use or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request."]
      },
      {
        heading: "Contact Information",
        paragraphs: ["If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you may send an email to enquiries@uvaproit.com."]
      }
    ]
  },
  termsAndConditions: {
    title: "Terms and Conditions",
    intro: [
      "Welcome to UVA!",
      "These terms and conditions outline the rules and regulations for the use of UVA Product and IT Services Limited's Website, located at https://uvatechservices.com.",
      "By accessing this website, we assume you accept these terms and conditions. Do not continue to use uvaproit if you do not agree to take all of the terms and conditions stated on this page."
    ],
    sections: [
      {
        heading: "Use of Website",
        paragraphs: ["Our website provides information about our services, company news, and offers a way for users to contact us. You agree to use the website only for lawful purposes."]
      },
      {
        heading: "No Account Required",
        paragraphs: ["There is no user account registration required to access or use our website."]
      },
      {
        heading: "Enquiries and Submissions",
        paragraphs: ["When you submit information via our contact forms:"],
        bullets: [
          "You affirm that the information is accurate and submitted voluntarily.",
          "You agree that we may use your information to contact you regarding your enquiry."
        ],
        footer: "No public user-generated content is posted or visible on the site."
      },
      {
        heading: "Intellectual Property",
        paragraphs: ["All content on this website, including text, graphics, logos, and service descriptions, is the property of UVA Product and IT Services Limited and may not be used without permission."]
      },
      {
        heading: "Limitation of Liability",
        paragraphs: ["We do our best to ensure the website is accurate and secure, but we make no guarantees and accept no liability for:"],
        bullets: [
          "Errors or omissions in content",
          "Uninterrupted access",
          "Any damages resulting from the use or misuse of the site"
        ]
      },
      {
        heading: "Modifications",
        paragraphs: ["We reserve the right to update these terms at any time. Continued use of the website after any changes indicates your agreement to the new terms."]
      },
      {
        heading: "Governing Law",
        paragraphs: ["These terms are governed by the laws of England and Wales."]
      }
    ]
  },
  services: [
    {
      id: "data-analytics",
      title: "Data Analytics & AI",
      description: "Turning raw data into actionable insights with AI-driven analytics.",
      link: "/data-analysis-services"
    },
    {
      id: "embedded-solutions",
      title: "Embedded Solutions",
      description: "Embedded Software & Hardware Solutions – Designing intelligent, high-performance systems.",
      link: "/embedded-solutions"
    },
    {
      id: "cybersecurity",
      title: "CyberSecurity",
      description: "Protecting digital assets with robust security frameworks.",
      link: "/cybersecurity-services"
    },
    {
      id: "web-app",
      title: "Web & App Development",
      description: "Crafting seamless, scalable, and user-centric digital experiences.",
      link: "/webapp-development"
    }
  ],
  quote: {
    text: '"At UVA, we specialize in delivering cutting-edge technology solutions to empower businesses and drive innovation. Whether you need custom development or advanced tech solutions, we’ve got you covered."'
  },
  contact: {
    heading: "What are you building?",
    subheading: "Custom development or embedded systems — tell us what you're building, and we'll tell you how fast we can get there.",
    phones: ["+44 7747523054", "+91 9949919473"],
    emails: ["enquiries@uvaproit.com", "enquiries@uvaproit.in"],
    offices: {
      uk: {
        title: "UK Office",
        company: "UVA Product and IT Service Limited",
        address: "Park House, 37 Clarence Street, Leicester, Leicestershire, England, LE1 3RW",
        email: "enquiries@uvaproit.com",
        phone: "+44 7747523054"
      },
      ind: {
        title: "IND Office",
        company: "UVA Product and IT IND Service Limited",
        address: "Hanamkonda, Warangal, Telangana, India, 506001",
        email: "enquiries@uvaproit.in",
        phone: "+91 9949919473"
      }
    }
  },
  footer: {
    copyright: "© 2024 UVA Product and IT Services Limited. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-and-conditions" }
    ]
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/#products", isDropdown: true },
    { label: "About Us", href: "/uva-leadership" },
  ]
};
