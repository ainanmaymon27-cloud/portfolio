import React, { useState } from 'react';

import {
  Menu,
  X,
  Code2,
  Smartphone,
  Server,
  Database,
  Sparkles,
  Mail,
  MapPin,
  GraduationCap,
  CheckCircle2,
  Send,
  Globe,
  BookOpen,
  ArrowUpRight,
  FolderGit2,
  Terminal,
  ShieldCheck,
  ShoppingBag,
  Hotel,
  Truck,
  Anchor,
  Home as HomeIcon,
  Car,
  Shirt,
  Cpu,
  User,
  Copy,
  Check,
  HeartHandshake,
  ExternalLink,
  Loader2
} from 'lucide-react';

// ============================================================================
// CLEAN SVG SOCIAL ICON (LinkedIn Only)
// ============================================================================
const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

// ============================================================================
// EMAIL & SOCIAL MEDIA CONFIGURATION FOR AISHA MUHAMMAD WASEEM
// ============================================================================
const WEB3FORMS_ACCESS_KEY = 'b1ae8f14-dccb-47a6-bcf3-aa7779e7d76f';

const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/aisha-waseem-dev'
};

const PORTFOLIO_DATA = {
  name: 'Aisha Muhammad Waseem',
  shortName: 'Aisha Waseem',
  location: 'Karachi, Pakistan',
  email: 'aishawaseem@gmail.com',
  linkedin: SOCIAL_LINKS.linkedin,
  heroKicker: 'Full-Stack Developer • Flutter App Creator • CS & Math Educator',
  summary:
    'I am a Karachi-based IT Undergraduate and Full-Stack Software Developer crafting complete MERN web applications, Flutter mobile apps, and PHP/MySQL platforms with custom admin dashboards. Alongside software engineering, I teach Computer Science & Mathematics at S.A.J Academy and coordinate remotely with international clients in Japan and global platforms.',
  projects: [
    {
      id: 'luxurystay',
      number: '01',
      title: 'Hotel Management System (MERN Stack)',
      category: 'Full-Stack & MERN',
      stackLabel: 'MERN Stack + Admin Panel',
      icon: 'Hotel',
      shortDesc:
        'A full-stack hotel management and room reservation web application built with React, Node.js, Express, and MongoDB featuring a complete administrative dashboard.',
      fullDesc:
        'Built from the ground up using the MERN stack, this Hotel Management System allows guests to explore rooms, check availability, and book stays seamlessly, while administrators control room inventory, guest bookings, and pricing from a dedicated admin dashboard.',
      highlights: [
        'Full MERN architecture: React frontend, Node.js & Express API, MongoDB database',
        'Dedicated Admin Dashboard for room inventory, reservations, and status updates',
        'Smooth room filtering, suite previews, and responsive reservation flow',
        'Structured RESTful backend with clean data validation'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Admin Dashboard']
    },
    {
      id: 'babyshophub',
      number: '02',
      title: 'BabyShopHub — E-Commerce Mobile App',
      category: 'Mobile Apps (Flutter)',
      stackLabel: 'Flutter App + Admin Dashboard',
      icon: 'ShoppingBag',
      shortDesc:
        'A complete cross-platform baby care shopping mobile application built in Flutter with live product catalogs, cart management, and an integrated admin dashboard.',
      fullDesc:
        'BabyShopHub is an end-to-end e-commerce mobile application created for baby essentials and care products. Built with Flutter and Dart, it features category browsing, search, cart management, and an integrated admin dashboard for catalog and order control.',
      highlights: [
        'Cross-platform mobile experience engineered in Flutter & Dart',
        'Integrated Admin Dashboard for managing products, categories, and orders',
        'Interactive shopping cart with quantity updates and instant total calculation',
        'Clean, intuitive mobile UI with fast search and product filtering'
      ],
      tech: ['Flutter', 'Dart', 'Admin Dashboard', 'Cart & Inventory', 'REST API']
    },
    {
      id: 'womensafety',
      number: '03',
      title: 'Women Safety Application',
      category: 'Mobile Apps (Flutter)',
      stackLabel: 'Flutter Emergency Safety App',
      icon: 'ShieldCheck',
      shortDesc:
        'A dedicated mobile safety application built with Flutter to provide rapid one-tap emergency SOS alerts, guardian notifications, and personal protection tools.',
      fullDesc:
        'Engineered with speed, clarity, and reliability as top priorities, the Women Safety Application empowers users during critical situations with one-tap emergency SOS triggers, trusted guardian contact lists, and immediate safety assistance workflows.',
      highlights: [
        'One-tap emergency SOS dispatch designed for rapid access under stress',
        'Trusted emergency contacts and instant alert broadcasting',
        'High-contrast, accessible mobile interface built with Flutter',
        'Reliable cross-platform performance for everyday personal security'
      ],
      tech: ['Flutter', 'Dart', 'SOS Alert System', 'Mobile UI/UX']
    },
    {
      id: 'jensendecors',
      number: '04',
      title: 'JensenDecors — Wall Decor E-Commerce',
      category: 'Full-Stack & MERN',
      stackLabel: 'Frontend + Backend Web App',
      icon: 'HomeIcon',
      liveLinkLabel: 'Live Project Link Available',
      shortDesc:
        'An aesthetic interior and wall decoration e-commerce web platform featuring complete frontend product galleries and backend catalog management.',
      fullDesc:
        'JensenDecors is a full-stack wall decoration and home interior e-commerce website showcasing curated wall art, mirrors, frames, and decorative pieces. It pairs a visually rich storefront with full backend product management and dynamic category browsing.',
      highlights: [
        'Full-stack architecture combining responsive storefront UI with backend management',
        'Curated visual collections for every style of wall decoration',
        'Dynamic product listings, specifications, and customer inquiry flow',
        'Live deployment ready with clean, responsive grid layouts'
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Full-Stack Backend', 'Database']
    },
    {
      id: 'courier',
      number: '05',
      title: 'Courier Management System',
      category: 'PHP & Web Stores',
      stackLabel: 'Pure PHP & MySQL + Admin Panel',
      icon: 'Truck',
      shortDesc:
        'An end-to-end logistics and parcel tracking system developed completely in PHP & MySQL with a full administrative control dashboard.',
      fullDesc:
        'Built completely in PHP and MySQL, the Courier Management System digitizes parcel booking, consignment tracking, branch operations, and shipment status updates through a structured multi-role admin dashboard.',
      highlights: [
        '100% custom PHP & MySQL backend architecture',
        'Comprehensive Admin Dashboard for managing parcels, branches, and delivery status',
        'Customer consignment tracking lookup with real-time status history',
        'Structured relational database for reliable logistics record keeping'
      ],
      tech: ['PHP', 'MySQL', 'Admin Dashboard', 'Bootstrap', 'JavaScript']
    },
    {
      id: 'marinafleet',
      number: '06',
      title: 'Marina Fleet — Yacht & Marine Showcase',
      category: 'Full-Stack & MERN',
      stackLabel: 'Frontend + Backend Platform',
      icon: 'Anchor',
      shortDesc:
        'A luxury yacht and marine fleet showcase platform featuring interactive vessel galleries, specifications, and backend charter inquiry support.',
      fullDesc:
        'Marina Fleet is a maritime and luxury yacht showcase website designed to present high-end vessels, technical specifications, and charter experiences with smooth frontend interactivity backed by server-side inquiry handling.',
      highlights: [
        'Interactive yacht and marine fleet showcase with vessel specifications',
        'Backend integration for handling charter requests and customer inquiries',
        'Editorial visual presentation optimized for high-resolution marine imagery',
        'Responsive navigation across mobile, tablet, and desktop viewports'
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Backend Support']
    },
    {
      id: 'portfolio',
      number: '07',
      title: 'Personal Developer & Educator Portfolio',
      category: 'Full-Stack & MERN',
      stackLabel: 'React Interactive Web App',
      icon: 'User',
      shortDesc:
        'A signature personal brand portfolio built with React showcasing full-stack projects, Flutter mobile apps, teaching experience, and interactive case studies.',
      fullDesc:
        'Designed and engineered in React, this personal portfolio highlights my dual identity as a Full-Stack Software Developer and Computer & Mathematics Educator with interactive project filtering, case study modals, and direct collaboration tools.',
      highlights: [
        'Component-driven React architecture with interactive filtering and modals',
        'Clean professional tech palette tailored for clarity and readability',
        'Complete showcase of software engineering, mobile apps, and teaching roles',
        'Fully responsive layout with one-click contact utilities'
      ],
      tech: ['React.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'Responsive UI']
    },
    {
      id: 'housewebsite',
      number: '08',
      title: 'Real Estate & House Showcase Website',
      category: 'PHP & Web Stores',
      stackLabel: 'Bootstrap Responsive Web',
      icon: 'HomeIcon',
      shortDesc:
        'A modern real estate and residential property showcase website crafted with Bootstrap featuring structured house listings and property details.',
      fullDesc:
        'A responsive real estate web showcase developed using Bootstrap, HTML5, and CSS3. It presents residential houses, floor specifications, location highlights, and agent contact sections in a clean grid layout.',
      highlights: [
        'Built with Bootstrap grid system for seamless multi-device responsiveness',
        'Structured property cards highlighting pricing, area, and house amenities',
        'Interactive property gallery and direct buyer inquiry forms',
        'Clean typography and accessible navigation'
      ],
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript']
    },
    {
      id: 'carwebsite',
      number: '09',
      title: 'Car Dealership & Vehicle Showcase',
      category: 'PHP & Web Stores',
      stackLabel: 'Frontend Web Showcase',
      icon: 'Car',
      shortDesc:
        'An automobile and car dealership showcase website featuring vehicle model catalogs, technical specs, and customer test-drive inquiries.',
      fullDesc:
        'Inspired by hands-on experience coordinating automobile data for Japan-based company Nozaki, this responsive vehicle dealership website showcases car models, engine specifications, and buyer inquiry workflows.',
      highlights: [
        'Detailed vehicle inventory cards with model specs and comparisons',
        'Responsive design adapted for effortless browsing on phones and desktops',
        'Customer inquiry and test-drive booking interface',
        'Clean visual hierarchy tailored for automotive catalogs'
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap']
    },
    {
      id: 'clothingstore',
      number: '10',
      title: 'Fashion & Clothing E-Commerce Store',
      category: 'PHP & Web Stores',
      stackLabel: 'E-Commerce Storefront',
      icon: 'Shirt',
      shortDesc:
        'An online clothing and apparel e-commerce website featuring seasonal fashion collections, size selections, and interactive shopping cart UI.',
      fullDesc:
        'An e-commerce storefront tailored for fashion and clothing retail. It offers curated apparel collections, product detail views, size and color selectors, and a smooth shopping cart experience.',
      highlights: [
        'Categorized fashion collections with clean product lookbooks',
        'Interactive product cards with pricing, sizing, and cart actions',
        'Mobile-first responsive shopping layout',
        'Modern storefront aesthetics with clear calls to action'
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'E-Commerce UI']
    },
    {
      id: 'electronicsstore',
      number: '11',
      title: 'Electronics & Gadgets E-Commerce Store',
      category: 'PHP & Web Stores',
      stackLabel: 'E-Commerce Storefront',
      icon: 'Cpu',
      shortDesc:
        'A consumer electronics and gadgets e-commerce website displaying tech specifications, featured deals, and responsive product filtering.',
      fullDesc:
        'A responsive electronics e-commerce storefront designed for laptops, smartphones, and home gadgets. It highlights technical specifications, featured offers, and structured category browsing.',
      highlights: [
        'Structured gadget catalog with clear technical spec highlights',
        'Category browsing for laptops, accessories, and smart devices',
        'Responsive card grids optimized for product comparison',
        'Interactive cart preview and promotional deal banners'
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'E-Commerce UI']
    }
  ],
  skillCategories: [
    {
      id: 'frontend',
      title: 'Frontend Engineering',
      subtitle: 'Responsive & Interactive Interfaces',
      icon: 'Code2',
      skills: [
        { name: 'React.js', level: 'Advanced' },
        { name: 'JavaScript (ES6+)', level: 'Advanced' },
        { name: 'HTML5 & CSS3', level: 'Expert' },
        { name: 'Bootstrap & Tailwind', level: 'Advanced' },
        { name: 'Responsive Web Design', level: 'Expert' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend & Admin Systems',
      subtitle: 'APIs, Server Logic & Dashboards',
      icon: 'Server',
      skills: [
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Express.js', level: 'Advanced' },
        { name: 'PHP (Core & Custom)', level: 'Advanced' },
        { name: 'RESTful APIs', level: 'Advanced' },
        { name: 'Custom Admin Dashboards', level: 'Expert' }
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile App Development',
      subtitle: 'Cross-Platform iOS & Android',
      icon: 'Smartphone',
      skills: [
        { name: 'Flutter', level: 'Advanced' },
        { name: 'Dart', level: 'Advanced' },
        { name: 'Mobile E-Commerce & Carts', level: 'Advanced' },
        { name: 'Real-Time Safety & Alerts', level: 'Proficient' }
      ]
    },
    {
      id: 'database',
      title: 'Databases & Dev Tools',
      subtitle: 'Data Modeling & Version Control',
      icon: 'Database',
      skills: [
        { name: 'MongoDB & Mongoose', level: 'Advanced' },
        { name: 'MySQL', level: 'Advanced' },
        { name: 'Git & GitHub', level: 'Advanced' },
        { name: 'Multer & File Uploads', level: 'Proficient' }
      ]
    },
    {
      id: 'teaching',
      title: 'Teaching & Global Client Skills',
      subtitle: 'Communication, Sales & Leadership',
      icon: 'Sparkles',
      skills: [
        { name: 'Computer Science Instruction', level: 'Educator' },
        { name: 'Mathematics Teaching', level: 'Educator' },
        { name: 'International Client Coordination', level: 'Proven' },
        { name: 'Lead Generation & Pitching', level: 'Proven' }
      ]
    }
  ],
  experience: [
    {
      id: 'saj',
      role: 'Computer Science & Mathematics Teacher',
      organization: 'S.A.J Academy',
      location: 'Karachi, Pakistan',
      period: 'Present',
      tag: 'Academic Educator',
      summary:
        'Teaching Computer Science and Mathematics, helping students master programming fundamentals, logical thinking, and analytical problem solving.',
      highlights: [
        'Deliver engaging lessons in Computer Science and Mathematics across secondary levels.',
        'Simplify complex coding concepts and mathematical formulas into clear, practical steps.',
        'Design structured quizzes, exercises, and exam preparation plans to boost student performance.'
      ]
    },
    {
      id: 'internships',
      role: 'Full-Stack Web Development Intern (Frontend & Backend)',
      organization: 'CodeAlpha & CognoRise InfoTech (Cognotech)',
      location: 'Remote',
      period: '6 Months',
      tag: 'Software Engineering',
      summary:
        'Completed 6 months of intensive frontend and backend web development internships, building responsive interfaces and dynamic server-side features.',
      highlights: [
        'Engineered responsive web layouts and interactive UI components using modern frontend stacks.',
        'Implemented backend logic, form processing, and database operations across full-stack tasks.',
        'Debugged codebases and delivered milestone web applications within tight deadlines.'
      ]
    },
    {
      id: 'nozaki',
      role: 'Remote Automobile Data & Client Coordinator',
      organization: 'Nozaki (Automobile Company – Japan)',
      location: 'Remote (From Karachi, Pakistan)',
      period: '2 Months',
      tag: 'International Operations',
      summary:
        'Worked remotely from Pakistan with Japan-based automobile company Nozaki, managing vehicle inventory data and coordinating directly with customers.',
      highlights: [
        'Compiled, verified, and transmitted accurate automobile specifications and car data to clients.',
        'Coordinated smoothly across international time zones from Pakistan to maintain client trust.',
        'Ensured rapid response times and clear documentation for customer inquiries.'
      ]
    },
    {
      id: 'twitter',
      role: 'Freelance Client Acquisition & Sales Specialist',
      organization: 'Twitter (X) Global Outreach',
      location: 'Remote',
      period: 'Freelance',
      tag: 'Client Relations & Sales',
      summary:
        'Managed direct client outreach and persuasion on Twitter (X), pitching custom logo animation videos to international creators and businesses.',
      highlights: [
        'Identified prospective clients on Twitter (X) and initiated personalized outreach conversations.',
        'Presented creative value propositions that convinced clients to purchase custom logo animation videos.',
        'Handled client requirements, revisions communication, and successful deal closures.'
      ]
    }
  ],
  education: [
    {
      degree: 'Diploma in Information Technology (Undergraduate Level)',
      institution: 'Aptech Learning (North Nazimabad II)',
      city: 'Karachi, Pakistan',
      status: 'In Progress',
      current: true,
      details:
        'Comprehensive undergraduate-level IT program covering Full-Stack Web Engineering, MERN Stack, PHP/MySQL, and Mobile Application Development.'
    },
    {
      degree: 'Intermediate (HSC)',
      institution: 'Shaheed-e-Millat College',
      city: 'Karachi, Pakistan',
      status: 'Completed',
      current: false,
      details: 'Higher Secondary education strengthening analytical, mathematical, and computing foundations.'
    },
    {
      degree: 'Matriculation (SSC)',
      institution: 'KMA (Kutiyana Memon Academy)',
      city: 'Karachi, Pakistan',
      status: 'Completed',
      current: false,
      details: 'Secondary School Certificate with core concentration in Science and Mathematics.'
    }
  ],
  languages: [
    {
      name: 'English',
      level: 'Professional Working Proficiency',
      note: 'Technical documentation, international client communication & teaching'
    },
    {
      name: 'Urdu',
      level: 'Native / Bilingual Proficiency',
      note: 'Fluent verbal and written communication'
    }
  ]
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All 11 Projects');
  const [selectedSkillFilter, setSelectedSkillFilter] = useState('all');
  const [activeExpIndex, setActiveExpIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedField, setCopiedField] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Full-Stack MERN / Web Development',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionMode, setSubmissionMode] = useState('api');
  const [formError, setFormError] = useState('');

  const navLinks = [
    { id: 'projects', label: 'Projects (11)' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const projectFilters = [
    'All 11 Projects',
    'Full-Stack & MERN',
    'Mobile Apps (Flutter)',
    'PHP & Web Stores'
  ];

  const filteredProjects =
    selectedCategory === 'All 11 Projects'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((proj) => proj.category === selectedCategory);

  const displayedSkillCategories =
    selectedSkillFilter === 'all'
      ? PORTFOLIO_DATA.skillCategories
      : PORTFOLIO_DATA.skillCategories.filter((cat) => cat.id === selectedSkillFilter);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopy = (text, label) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setCopiedField(label);
    setTimeout(() => setCopiedField(''), 2200);
  };

  const renderIcon = (name, className = 'w-5 h-5') => {
    switch (name) {
      case 'Hotel':
        return <Hotel className={className} />;
      case 'ShoppingBag':
        return <ShoppingBag className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      case 'HomeIcon':
        return <HomeIcon className={className} />;
      case 'Truck':
        return <Truck className={className} />;
      case 'Anchor':
        return <Anchor className={className} />;
      case 'User':
        return <User className={className} />;
      case 'Car':
        return <Car className={className} />;
      case 'Shirt':
        return <Shirt className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      case 'Code2':
        return <Code2 className={className} />;
      case 'Server':
        return <Server className={className} />;
      case 'Smartphone':
        return <Smartphone className={className} />;
      case 'Database':
        return <Database className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill in your name, email address, and message.');
      return;
    }
    setFormError('');
    setIsSubmitting(true);

    const subjectLine = `💼 Portfolio Inquiry [${formData.inquiryType}] from ${formData.name}`;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: subjectLine,
          from_name: 'Aisha Waseem Portfolio Studio',
          replyto: formData.email,
          name: formData.name,
          email: formData.email,
          inquiry_topic: formData.inquiryType,
          message: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmissionMode('api');
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          inquiryType: 'Full-Stack MERN / Web Development',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Email delivery failed');
      }
    } catch (err) {
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${PORTFOLIO_DATA.email}?subject=${encodeURIComponent(
        subjectLine
      )}&body=${mailtoBody}`;
      setSubmissionMode('mailto');
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentExp = PORTFOLIO_DATA.experience[activeExpIndex];

  return (
    <div className="min-h-screen bg-[#2C3531] text-[#D1E8E2] font-sans selection:bg-[#116466] selection:text-[#FFCB9A] relative overflow-x-hidden w-full box-border">
      {/* Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 -left-24 w-[20rem] sm:w-[36rem] h-[20rem] sm:h-[36rem] rounded-full bg-[#116466]/20 blur-[150px]" />
        <div className="absolute top-24 right-0 w-[20rem] sm:w-[32rem] h-[20rem] sm:h-[32rem] rounded-full bg-[#D9B08C]/10 blur-[140px]" />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-[#2C3531]/95 backdrop-blur-xl border-b border-[#116466] w-full box-border">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
          <button
            onClick={() => scrollToSection('top')}
            className="flex items-center gap-2 text-left group cursor-pointer focus:outline-none min-w-0 shrink"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#D9B08C] bg-gradient-to-tr from-[#116466] to-[#D9B08C] flex items-center justify-center shadow-md shadow-[#116466]/40 group-hover:scale-105 transition-transform text-[#FFCB9A] font-extrabold text-xs sm:text-sm tracking-wider shrink-0">
              AW
            </div>
            <div className="min-w-0">
              <div className="font-bold text-xs sm:text-base tracking-tight text-[#FFCB9A] truncate">
                Aisha Waseem
              </div>
              <div className="text-[10px] sm:text-[11px] font-medium text-[#D1E8E2]/70 hidden sm:block truncate">
                Developer &amp; Educator • Karachi
              </div>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-1 bg-[#1A2321] border border-[#116466] rounded-full px-2 py-1.5 shadow-2xs">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#D1E8E2] hover:text-[#FFCB9A] hover:bg-[#116466]/50 transition-all cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex px-4 py-2 rounded-full bg-[#116466] hover:bg-[#0E5253] text-[#FFCB9A] border border-[#D9B08C]/40 text-xs sm:text-sm font-bold shadow-sm transition-colors cursor-pointer shrink-0"
            >
              Hire / Collaborate
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 rounded-xl bg-[#1A2321] border border-[#116466] text-[#D1E8E2] hover:text-[#FFCB9A] cursor-pointer shrink-0"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1A2321] border-b border-[#116466] px-4 py-3 space-y-1 shadow-xl">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-[#D1E8E2] hover:bg-[#116466]/50 hover:text-[#FFCB9A]"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold text-[#FFCB9A] hover:bg-[#116466]/50"
            >
              Hire / Collaborate
            </button>
          </div>
        )}
      </header>

      <main id="top" className="relative z-10 w-full overflow-x-hidden box-border">
        {/* 1. HERO SECTION */}
        <section className="pt-8 sm:pt-16 pb-12 sm:pb-24 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full box-border">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 min-w-0">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A2321] border border-[#116466] text-[11px] sm:text-xs font-bold text-[#FFCB9A] max-w-full flex-wrap">
                <Sparkles className="w-3.5 h-3.5 text-[#D9B08C] shrink-0" />
                <span className="break-words">{PORTFOLIO_DATA.heroKicker}</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-[3.4rem] font-extrabold tracking-tight text-[#FFFFFF] leading-tight sm:leading-[1.12] break-words">
                  Hi, I&apos;m{' '}
                  <span className="font-serif italic font-bold text-[#FFCB9A] underline decoration-[#D9B08C] decoration-4 underline-offset-8">
                    Aisha Muhammad Waseem
                  </span>
                  .
                </h1>
                <p className="text-base sm:text-xl font-medium text-[#D1E8E2] pt-1 break-words">
                  Crafting full-stack web &amp; Flutter mobile applications while inspiring students in Computer Science &amp; Mathematics.
                </p>
              </div>

              <p className="text-xs sm:text-base text-[#D1E8E2]/80 leading-relaxed max-w-2xl break-words">
                {PORTFOLIO_DATA.summary}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="w-full sm:w-auto px-5 sm:px-6 py-3.5 rounded-2xl bg-[#116466] hover:bg-[#0E5253] text-[#FFCB9A] border border-[#D9B08C]/50 font-bold text-xs sm:text-sm shadow-lg shadow-[#116466]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FolderGit2 className="w-4 h-4 shrink-0" />
                  Explore All 11 Projects
                </button>
              </div>

              {/* Social & Email Links Bar */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1A2321] border border-[#116466] hover:border-[#D9B08C] text-xs font-semibold text-[#D1E8E2] transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#D9B08C] shrink-0" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${PORTFOLIO_DATA.email}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1A2321] border border-[#116466] hover:border-[#D9B08C] text-xs font-semibold text-[#D1E8E2] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D9B08C] shrink-0" />
                  <span className="truncate">{PORTFOLIO_DATA.email}</span>
                </a>
              </div>
            </div>

            {/* Right Signature Card */}
            <div className="lg:col-span-5 w-full min-w-0">
              <div className="relative bg-[#1A2321] border border-[#116466] rounded-[1.75rem] sm:rounded-[2rem] p-4 sm:p-8 shadow-2xl box-border overflow-hidden">
                <div className="flex items-center justify-between gap-2 pb-4 sm:pb-5 mb-4 sm:mb-5 border-b border-[#116466]">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#D9B08C] bg-gradient-to-tr from-[#116466] to-[#D9B08C] flex items-center justify-center shrink-0 shadow-md text-[#FFCB9A] font-extrabold text-sm sm:text-lg">
                      AW
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#D9B08C] block truncate">
                        Signature Profile
                      </span>
                      <h2 className="font-bold text-xs sm:text-base text-[#FFFFFF] truncate">Aisha M. Waseem</h2>
                      <p className="text-[10px] sm:text-[11px] text-[#D1E8E2]/70 truncate">IT Undergraduate • Aptech NN2</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#116466]/60 border border-[#D9B08C]/40 text-[9px] sm:text-[11px] font-bold text-[#FFCB9A] shrink-0">
                    Open to Roles
                  </span>
                </div>

                <div className="space-y-3 mb-5">
                  <div className="p-3 sm:p-4 rounded-2xl bg-[#222E2B] border border-[#116466]">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <span className="text-xs font-extrabold text-[#FFCB9A] flex items-center gap-1.5">
                        <Code2 className="w-4 h-4 text-[#D9B08C] shrink-0" /> Full-Stack &amp; Flutter
                      </span>
                      <span className="font-mono text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded bg-[#1A2321] text-[#D9B08C] border border-[#116466]">
                        MERN • Flutter
                      </span>
                    </div>
                    <p className="text-xs text-[#D1E8E2]/80 leading-relaxed break-words">
                      Built 11 web &amp; mobile apps including Hotel Management, BabyShopHub, and Women Safety App.
                    </p>
                  </div>

                  <div className="p-3 sm:p-4 rounded-2xl bg-[#222E2B]/75 border border-[#116466]">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <span className="text-xs font-extrabold text-[#FFCB9A] flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-[#D9B08C] shrink-0" /> CS &amp; Math Educator
                      </span>
                      <span className="font-mono text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded bg-[#1A2321] text-[#D9B08C] border border-[#116466]">
                        S.A.J Academy
                      </span>
                    </div>
                    <p className="text-xs text-[#D1E8E2]/80 leading-relaxed break-words">
                      Teaching Computer Science &amp; Mathematics with structured lesson planning and analytical instruction.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#161F1D] border border-[#116466] p-3 font-mono text-xs text-[#D1E8E2] overflow-x-auto">
                  <div className="flex items-center justify-between text-[10px] text-[#D1E8E2]/70 pb-2 mb-2 border-b border-[#116466]">
                    <span className="flex items-center gap-1.5 font-bold text-[#FFCB9A]">
                      <Terminal className="w-3.5 h-3.5 text-[#D9B08C] shrink-0" /> aisha.signature.js
                    </span>
                    <span>11 Shipped</span>
                  </div>
                  <div className="space-y-0.5 text-[11px] leading-relaxed whitespace-nowrap">
                    <div>
                      <span className="text-[#D9B08C] font-bold">const</span> stack = [&quot;MERN&quot;, &quot;Flutter&quot;, &quot;PHP&quot;];
                    </div>
                    <div>
                      <span className="text-[#D9B08C] font-bold">const</span> role = &quot;Developer &amp; Teacher&quot;;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ALL 11 PROJECTS SHOWCASE */}
        <section id="projects" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full box-border">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#D9B08C]">
                Complete Portfolio Archive
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FFFFFF] mt-1 tracking-tight break-words">
                All 11 Software, Mobile &amp; Web{' '}
                <span className="font-serif italic text-[#FFCB9A]">Projects</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#D1E8E2]/80 mt-2 max-w-2xl break-words">
                Every single project I have engineered—from full-stack MERN hotel platforms and Flutter mobile applications to PHP logistics systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 bg-[#1A2321] p-1.5 rounded-2xl border border-[#116466] shadow-2xs self-start w-full sm:w-auto">
              {projectFilters.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex-1 sm:flex-initial px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                    selectedCategory === cat
                      ? 'bg-[#116466] text-[#FFCB9A] border border-[#D9B08C]/40 shadow-xs'
                      : 'text-[#D1E8E2] hover:text-[#FFCB9A] hover:bg-[#116466]/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group bg-[#1A2321] border border-[#116466] rounded-[1.5rem] sm:rounded-[1.75rem] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-[#D9B08C] transition-all duration-300 flex flex-col justify-between box-border"
              >
                <div>
                  <div className="bg-gradient-to-br from-[#222E2B] via-[#1A2321] to-[#161F1D] p-4 sm:p-5 border-b border-[#116466] relative">
                    <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#161F1D] text-[#FFCB9A] border border-[#116466] truncate">
                        {project.stackLabel}
                      </span>
                      <span className="font-serif italic font-bold text-sm text-[#D9B08C]">
                        #{project.number}
                      </span>
                    </div>

                    <div className="bg-[#161F1D] border border-[#116466] rounded-2xl p-3 shadow-2xs">
                      <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-[#116466]">
                        <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                        <span className="w-2 h-2 rounded-full bg-[#FFCB9A]" />
                        <span className="w-2 h-2 rounded-full bg-[#116466]" />
                        <span className="ml-auto text-[10px] font-mono text-[#D1E8E2]/70 truncate">
                          {project.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#222E2B] border border-[#116466] flex items-center justify-center shrink-0 text-[#FFCB9A]">
                          {renderIcon(project.icon, 'w-4 h-4 sm:w-5 sm:h-5')}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-[#FFFFFF] truncate">
                            {project.title}
                          </div>
                          <div className="text-[10px] sm:text-[11px] text-[#D1E8E2]/70 truncate mt-0.5">
                            {project.highlights[0]}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="text-sm sm:text-base font-extrabold text-[#FFFFFF] group-hover:text-[#FFCB9A] transition-colors leading-snug mb-2 break-words">
                      {project.title}
                    </h3>

                    {project.liveLinkLabel && (
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-[#FFCB9A] bg-[#222E2B] border border-[#116466] px-2.5 py-0.5 rounded-full mb-2">
                        <ExternalLink className="w-3 h-3 shrink-0" /> {project.liveLinkLabel}
                      </span>
                    )}

                    <p className="text-xs sm:text-sm text-[#D1E8E2]/80 leading-relaxed mb-4 break-words">
                      {project.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-3 border-t border-[#116466] space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#222E2B] border border-[#116466] font-mono text-[9px] sm:text-[10px] font-semibold text-[#FFCB9A]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#222E2B] hover:bg-[#116466] text-[#FFFFFF] hover:text-[#FFCB9A] border border-[#116466] hover:border-[#D9B08C] text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 3. EXPERIENCE & JOURNEY */}
        <section id="experience" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full box-border">
          <div className="mb-8 sm:mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D9B08C]">
              Career &amp; Global Exposure
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FFFFFF] mt-1 tracking-tight break-words">
              My Journey &amp;{' '}
              <span className="font-serif italic text-[#FFCB9A]">Experience</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5 space-y-3">
              {PORTFOLIO_DATA.experience.map((exp, idx) => {
                const isSelected = activeExpIndex === idx;
                return (
                  <button
                    key={exp.id}
                    onClick={() => setActiveExpIndex(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl sm:rounded-3xl border transition-all cursor-pointer box-border ${
                      isSelected
                        ? 'bg-[#1A2321] border-[#D9B08C] shadow-lg shadow-black/50'
                        : 'bg-[#1A2321]/75 border-[#116466] hover:bg-[#1A2321] hover:border-[#D9B08C]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span
                        className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full truncate ${
                          isSelected
                            ? 'bg-[#116466] text-[#FFCB9A] border border-[#D9B08C]/40'
                            : 'bg-[#222E2B] text-[#D9B08C]'
                        }`}
                      >
                        {exp.tag}
                      </span>
                      <span className="text-xs font-bold text-[#D1E8E2]/70 shrink-0">{exp.period}</span>
                    </div>
                    <div className="font-extrabold text-sm sm:text-base text-[#FFFFFF] break-words">
                      {exp.role}
                    </div>
                    <div className="text-xs font-semibold text-[#D1E8E2]/70 mt-0.5 break-words">
                      {exp.organization} • {exp.location}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-7 bg-[#1A2321] border border-[#116466] rounded-[1.75rem] sm:rounded-[2rem] p-4 sm:p-9 shadow-sm box-border overflow-hidden">
              <div className="pb-4 sm:pb-5 mb-5 sm:mb-6 border-b border-[#116466]">
                <span className="inline-block px-3 py-1 rounded-full bg-[#222E2B] border border-[#116466] text-xs font-bold text-[#FFCB9A] mb-2">
                  {currentExp.tag} • {currentExp.period}
                </span>
                <h3 className="text-lg sm:text-2xl font-extrabold text-[#FFFFFF] break-words">
                  {currentExp.role}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#D9B08C] mt-1 break-words">
                  {currentExp.organization}{' '}
                  <span className="font-medium text-[#D1E8E2]/70">({currentExp.location})</span>
                </p>
              </div>

              <p className="text-xs sm:text-base text-[#D1E8E2]/80 leading-relaxed mb-6 break-words">
                {currentExp.summary}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#D9B08C]">
                  Key Responsibilities &amp; Impact
                </h4>
                {currentExp.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[#222E2B] border border-[#116466] flex items-start gap-3 box-border"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D9B08C] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#D1E8E2] leading-relaxed break-words">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. SKILLS SECTION */}
        <section id="skills" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full box-border">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#D9B08C]">
                Technical &amp; Interpersonal Arsenal
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FFFFFF] mt-1 tracking-tight break-words">
                Skills &amp;{' '}
                <span className="font-serif italic text-[#FFCB9A]">Core Capabilities</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-1.5 bg-[#1A2321] p-1.5 rounded-2xl border border-[#116466] shadow-2xs self-start w-full md:w-auto">
              <button
                onClick={() => setSelectedSkillFilter('all')}
                className={`flex-1 md:flex-initial px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer text-center ${
                  selectedSkillFilter === 'all'
                    ? 'bg-[#116466] text-[#FFCB9A] border border-[#D9B08C]/40'
                    : 'text-[#D1E8E2] hover:bg-[#116466]/30'
                }`}
              >
                All
              </button>
              {PORTFOLIO_DATA.skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedSkillFilter(cat.id)}
                  className={`flex-1 md:flex-initial px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer text-center ${
                    selectedSkillFilter === cat.id
                      ? 'bg-[#116466] text-[#FFCB9A] border border-[#D9B08C]/40'
                      : 'text-[#D1E8E2] hover:bg-[#116466]/30'
                  }`}
                >
                  {cat.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {displayedSkillCategories.map((category) => (
              <div
                key={category.id}
                className="bg-[#1A2321] border border-[#116466] rounded-[1.5rem] sm:rounded-[1.75rem] p-4 sm:p-6 shadow-2xs hover:border-[#D9B08C] transition-all box-border"
              >
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center bg-[#222E2B] text-[#FFCB9A] border border-[#116466] shrink-0">
                    {renderIcon(category.icon, 'w-5 h-5')}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-extrabold text-sm sm:text-base text-[#FFFFFF] truncate">{category.title}</h3>
                    <p className="text-[11px] text-[#D1E8E2]/70 truncate">{category.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#222E2B] border border-[#116466]"
                    >
                      <span className="text-xs sm:text-sm font-bold text-[#FFFFFF] truncate pr-2">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1A2321] border border-[#116466] text-[#FFCB9A] shrink-0">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. EDUCATION & LANGUAGES */}
        <section id="education" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full box-border">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-[#1A2321] border border-[#116466] rounded-[1.75rem] sm:rounded-[2rem] p-4 sm:p-9 shadow-2xs box-border overflow-hidden">
              <div className="flex items-center gap-3 mb-6 sm:mb-7">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#222E2B] border border-[#116466] text-[#FFCB9A] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#D9B08C] block truncate">
                    Academic Background
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#FFFFFF] truncate">Education Timeline</h2>
                </div>
              </div>

              <div className="space-y-6 relative pl-5 sm:pl-6 border-l-2 border-[#D9B08C]">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <div key={idx} className="relative">
                    <span
                      className={`absolute -left-[27px] sm:-left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                        edu.current
                          ? 'bg-[#D9B08C] border-[#1A2321]'
                          : 'bg-[#1A2321] border-[#FFCB9A]'
                      }`}
                    />
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#222E2B] border border-[#116466] box-border">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <h3 className="font-extrabold text-sm sm:text-base text-[#FFFFFF] break-words">
                          {edu.degree}
                        </h3>
                        <span
                          className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full shrink-0 ${
                            edu.current
                              ? 'bg-[#116466] text-[#FFCB9A] border border-[#D9B08C]/40'
                              : 'bg-[#1A2321] text-[#D9B08C] border border-[#116466]'
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-[#D9B08C] mb-2 break-words">
                        {edu.institution} • {edu.city}
                      </div>
                      <p className="text-xs text-[#D1E8E2]/80 leading-relaxed break-words">{edu.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6 w-full">
              <div className="bg-[#1A2321] border border-[#116466] rounded-[1.75rem] sm:rounded-[2rem] p-4 sm:p-8 shadow-2xs box-border overflow-hidden">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#222E2B] border border-[#116466] text-[#FFCB9A] flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#D9B08C] block truncate">
                      Communication
                    </span>
                    <h2 className="text-lg sm:text-xl font-extrabold text-[#FFFFFF] truncate">Languages</h2>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {PORTFOLIO_DATA.languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="p-3.5 sm:p-4 rounded-2xl bg-[#222E2B] border border-[#116466]"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-extrabold text-sm sm:text-base text-[#FFFFFF]">{lang.name}</span>
                        <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#1A2321] text-[#FFCB9A] border border-[#116466] shrink-0">
                          {lang.level}
                        </span>
                      </div>
                      <p className="text-xs text-[#D1E8E2]/80 break-words">{lang.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#222E2B] via-[#1A2321] to-[#161F1D] border border-[#D9B08C]/50 rounded-[1.75rem] sm:rounded-[2rem] p-4 sm:p-8 flex-1 flex flex-col justify-between box-border">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#D9B08C] mb-2 sm:mb-3">
                    <HeartHandshake className="w-4 h-4 text-[#FFCB9A] shrink-0" />
                    <span>Why Work With Me</span>
                  </div>
                  <h3 className="font-serif italic text-lg sm:text-2xl font-bold text-[#FFFFFF] mb-2 break-words">
                    Engineering Precision Meets Clear Communication
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D1E8E2] leading-relaxed break-words">
                    Whether building a MERN hotel reservation platform, launching a Flutter e-commerce mobile app, or teaching Computer Science and Mathematics, I bring structure and full ownership to every role.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#116466] flex items-center justify-between text-xs font-bold text-[#D1E8E2] gap-2">
                  <span className="truncate">Aptech NN2 • S.A.J Academy</span>
                  <span className="text-[#FFCB9A] shrink-0">Karachi, PK</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CONTACT SECTION */}
        <section id="contact" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full box-border">
          <div className="bg-[#1A2321] border border-[#116466] rounded-[1.75rem] sm:rounded-[2.25rem] p-4 sm:p-10 lg:p-12 shadow-2xl box-border overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
              <div className="lg:col-span-5 space-y-5 sm:space-y-6 min-w-0">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#D9B08C]">
                    Collaboration Studio
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] mt-1 tracking-tight break-words">
                    Let&apos;s Connect &amp;{' '}
                    <span className="font-serif italic text-[#FFCB9A]">Collaborate</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-[#D1E8E2]/80 leading-relaxed mt-2 break-words">
                    Reach out via email or connect with me on LinkedIn for full-stack projects, mobile apps, or teaching roles.
                  </p>
                </div>

                <div className="space-y-3">
                  {/* Email Card */}
                  <div className="flex items-center justify-between gap-2 p-3.5 rounded-2xl bg-[#222E2B] border border-[#116466]">
                    <a
                      href={`mailto:${PORTFOLIO_DATA.email}`}
                      className="flex items-center gap-3 min-w-0"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1A2321] text-[#FFCB9A] border border-[#116466] flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] sm:text-[11px] font-semibold text-[#D1E8E2]/70">Email Address</div>
                        <div className="text-xs sm:text-sm font-extrabold text-[#FFFFFF] truncate">
                          {PORTFOLIO_DATA.email}
                        </div>
                      </div>
                    </a>
                    <button
                      onClick={() => handleCopy(PORTFOLIO_DATA.email, 'email')}
                      className="px-2.5 py-1.5 rounded-lg bg-[#1A2321] border border-[#116466] hover:border-[#D9B08C] text-xs font-bold text-[#FFCB9A] flex items-center gap-1 cursor-pointer shrink-0"
                    >
                      {copiedField === 'email' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#FFCB9A]" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* LinkedIn Card */}
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-[#222E2B] border border-[#116466] hover:border-[#D9B08C] transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1A2321] text-[#FFCB9A] border border-[#116466] flex items-center justify-center shrink-0">
                        <LinkedinIcon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] sm:text-[11px] font-semibold text-[#D1E8E2]/70">Professional Network</div>
                        <div className="text-xs sm:text-sm font-extrabold text-[#FFFFFF] truncate">LinkedIn Profile</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#D9B08C] shrink-0" />
                  </a>

                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#222E2B] border border-[#116466]">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1A2321] text-[#FFCB9A] border border-[#116466] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-[11px] font-semibold text-[#D1E8E2]/70">Base Location</div>
                      <div className="text-xs sm:text-sm font-extrabold text-[#FFFFFF]">Karachi, Pakistan</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#222E2B] border border-[#116466] rounded-2xl sm:rounded-3xl p-4 sm:p-8 box-border">
                {formSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-8 sm:py-10 space-y-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1A2321] border border-[#D9B08C] text-[#FFCB9A] flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#FFFFFF] break-words">
                      {submissionMode === 'api'
                        ? 'Email Sent Successfully!'
                        : 'Email Draft Opened for Aisha!'}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#D1E8E2]/80 max-w-md break-words">
                      {submissionMode === 'api' ? (
                        <>
                          Your message has been delivered directly to{' '}
                          <span className="font-bold text-[#FFFFFF]">{PORTFOLIO_DATA.email}</span>. Aisha will
                          reply soon!
                        </>
                      ) : (
                        <>
                          Your email app has been opened to send your inquiry straight to{' '}
                          <span className="font-bold text-[#FFFFFF]">{PORTFOLIO_DATA.email}</span>.
                        </>
                      )}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                      <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 sm:px-5 py-2.5 rounded-xl bg-[#1A2321] border border-[#116466] hover:bg-[#116466] text-[#FFCB9A] text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
                      >
                        <LinkedinIcon className="w-4 h-4 text-[#FFCB9A] shrink-0" />
                        Connect on LinkedIn
                      </a>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="px-4 sm:px-5 py-2.5 rounded-xl bg-[#116466] hover:bg-[#0E5253] text-[#FFCB9A] border border-[#D9B08C]/40 text-xs font-bold transition-colors cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-extrabold text-[#FFFFFF]">
                        Send Email Directly to Aisha
                      </h3>
                      <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#1A2321] border border-[#116466] text-[#FFCB9A] truncate max-w-full">
                        To: {PORTFOLIO_DATA.email}
                      </span>
                    </div>

                    {formError && (
                      <div className="p-3 rounded-xl bg-[#3B1111] border border-[#EF4444] text-[#FCA5A5] text-xs font-bold break-words">
                        {formError}
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#D1E8E2] mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#1A2321] border border-[#116466] text-sm text-[#FFFFFF] focus:outline-none focus:border-[#D9B08C] transition-colors box-border"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#D1E8E2] mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#1A2321] border border-[#116466] text-sm text-[#FFFFFF] focus:outline-none focus:border-[#D9B08C] transition-colors box-border"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#D1E8E2] mb-1.5">
                        Collaboration Topic
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#1A2321] border border-[#116466] text-sm text-[#FFFFFF] focus:outline-none focus:border-[#D9B08C] transition-colors box-border"
                      >
                        <option className="bg-[#1A2321]">Full-Stack MERN / Web Development</option>
                        <option className="bg-[#1A2321]">Flutter Mobile App Development</option>
                        <option className="bg-[#1A2321]">PHP / MySQL &amp; Admin Dashboard</option>
                        <option className="bg-[#1A2321]">Computer Science / Math Teaching Role</option>
                        <option className="bg-[#1A2321]">Remote Client Coordination / Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#D1E8E2] mb-1.5">
                        Project or Role Details *
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell me about your project, job opportunity, or collaboration..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#1A2321] border border-[#116466] text-sm text-[#FFFFFF] focus:outline-none focus:border-[#D9B08C] transition-colors resize-none box-border"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#116466] hover:bg-[#0E5253] disabled:opacity-60 text-[#FFCB9A] border border-[#D9B08C]/50 font-bold text-sm shadow-md shadow-[#116466]/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                          Sending to Email...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 shrink-0" />
                          Send Email to Aisha
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#116466] bg-[#2C3531]/90 py-8 px-3 sm:px-6 lg:px-8 pb-10 w-full box-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#D9B08C] bg-gradient-to-tr from-[#116466] to-[#D9B08C] flex items-center justify-center shrink-0 text-[#FFCB9A] font-extrabold text-xs">
              AW
            </div>
            <span className="text-sm font-extrabold text-[#FFFFFF]">{PORTFOLIO_DATA.name}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-bold text-[#D1E8E2]/80">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-[#FFCB9A] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FFCB9A] transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <p className="text-xs text-[#D1E8E2]/60">
            © {new Date().getFullYear()} {PORTFOLIO_DATA.name} • Karachi, PK
          </p>
        </div>
      </footer>

      {/* PROJECT CASE STUDY MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs box-border"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-2xl bg-[#1A2321] border border-[#116466] rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden shadow-2xl max-h-[90vh] flex flex-col box-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-[#222E2B] via-[#1A2321] to-[#161F1D] px-5 sm:px-8 py-5 sm:py-6 border-b border-[#116466] shrink-0">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-[#161F1D] text-[#FFCB9A] border border-[#116466] mb-2 truncate max-w-full">
                    Project #{selectedProject.number} • {selectedProject.stackLabel}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-[#FFFFFF] break-words">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                  className="p-2 rounded-full bg-[#161F1D] border border-[#116466] text-[#D1E8E2] hover:text-[#FFCB9A] transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-5 sm:p-8 space-y-6 overflow-y-auto">
              <p className="text-xs sm:text-base text-[#D1E8E2]/80 leading-relaxed break-words">
                {selectedProject.fullDesc}
              </p>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#D9B08C] mb-3">
                  Key Highlights &amp; Implementation
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((feat, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-[#FFFFFF] flex items-start gap-2.5 break-words">
                      <CheckCircle2 className="w-4 h-4 text-[#D9B08C] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#D9B08C] mb-2.5">
                  Tech Stack &amp; Tools
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-[#222E2B] border border-[#116466] font-mono text-[10px] sm:text-xs font-bold text-[#FFFFFF]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#116466]">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    scrollToSection('contact');
                  }}
                  className="px-4 sm:px-5 py-2.5 rounded-xl bg-[#116466] hover:bg-[#0E5253] text-[#FFCB9A] border border-[#D9B08C]/40 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
                >
                  Request Demo / Source Details
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 sm:px-5 py-2.5 rounded-xl bg-[#222E2B] border border-[#116466] hover:bg-[#116466] text-[#FFFFFF] text-xs sm:text-sm font-bold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}