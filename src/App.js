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
  Phone,
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
  Briefcase,
  HeartHandshake,
  ExternalLink,
  MessageCircle,
  Loader2
} from 'lucide-react';

// ============================================================================
// EMAIL & WHATSAPP CONFIGURATION FOR AISHA MUHAMMAD WASEEM
// 1. Get a free Access Key for 'ainanmaymon27@gmail.com' from https://web3forms.com
// 2. Replace 'YOUR_WEB3FORMS_ACCESS_KEY' below with your actual key.
// (Until replaced, submitting the form will automatically open a pre-filled
//  email draft directly to ainanmaymon27@gmail.com as a seamless fallback!)
// ============================================================================
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';
const WHATSAPP_URL =
  'https://wa.me/923102600950?text=Assalam-o-Alaikum%20Aisha!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.';

const PORTFOLIO_DATA = {
  name: 'Aisha Muhammad Waseem',
  shortName: 'Aisha Waseem',
  location: 'Karachi, Pakistan',
  email: 'ainanmaymon27@gmail.com',
  phone: '0310-2600950',
  whatsappUrl: WHATSAPP_URL,
  linkedin: 'https://www.linkedin.com/in/aisha-waseem-dev',
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
        'Warm beige, biscuit & espresso palette tailored for clarity and readability',
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
  const [submissionMode, setSubmissionMode] = useState('api'); // 'api' | 'mailto'
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
  const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

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

  // Sends contact form submissions directly to ainanmaymon27@gmail.com
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill in your name, email address, and message.');
      return;
    }
    setFormError('');
    setIsSubmitting(true);

    const subjectLine = `Portfolio Inquiry (${formData.inquiryType}) from ${formData.name}`;

    // If Web3Forms key is not yet configured, seamlessly open user's email client pre-addressed to Aisha
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${PORTFOLIO_DATA.email}?subject=${encodeURIComponent(
        subjectLine
      )}&body=${mailtoBody}`;
      setIsSubmitting(false);
      setSubmissionMode('mailto');
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        inquiryType: 'Full-Stack MERN / Web Development',
        message: ''
      });
      return;
    }

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
          from_name: 'Aisha Waseem Portfolio',
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
      // Fallback to mailto if network or API fails
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
    <div className="min-h-screen bg-[#F7F2EA] text-[#2C1E16] font-sans selection:bg-[#E6D5BE] selection:text-[#2C1E16] relative overflow-x-hidden">
      {/* Warm Biscuit & Caramel Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 -left-24 w-[36rem] h-[36rem] rounded-full bg-[#E6D5BE]/55 blur-[120px]" />
        <div className="absolute top-24 right-0 w-[32rem] h-[32rem] rounded-full bg-[#DEC7A8]/45 blur-[110px]" />
        <div className="absolute bottom-10 left-1/3 w-[34rem] h-[34rem] rounded-full bg-[#EADCCB]/50 blur-[120px]" />
      </div>

      {/* STICKY HEADER */}
      <header className="sticky top-0 z-40 bg-[#F7F2EA]/90 backdrop-blur-xl border-b border-[#DFD2BE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Monogram Logo */}
          <button
            onClick={() => scrollToSection('top')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#5C3D2E] via-[#7A4B32] to-[#B88655] text-[#FBF8F3] flex items-center justify-center shadow-md shadow-[#5C3D2E]/20 group-hover:scale-105 transition-transform">
              <span className="font-serif italic font-bold text-lg tracking-tight">AW</span>
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base tracking-tight text-[#2C1E16]">
                Aisha Waseem
              </div>
              <div className="text-[11px] font-medium text-[#7A5C48] hidden sm:block">
                Developer &amp; Educator • Karachi
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#FBF8F3]/90 border border-[#DFD2BE] rounded-full px-2 py-1.5 shadow-2xs">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#5C4433] hover:text-[#2C1E16] hover:bg-[#EFE6D8] transition-all cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 sm:px-5 py-2.5 rounded-full bg-[#5C3D2E] hover:bg-[#3E271C] text-[#FBF8F3] text-xs sm:text-sm font-semibold shadow-sm transition-colors cursor-pointer"
            >
              Hire / Collaborate
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2.5 rounded-xl bg-[#FBF8F3] border border-[#DFD2BE] text-[#5C3D2E] hover:text-[#2C1E16] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F7F2EA] border-b border-[#DFD2BE] px-4 py-3 space-y-1 shadow-lg">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-[#5C4433] hover:bg-[#EFE6D8] hover:text-[#2C1E16]"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main id="top" className="relative z-10">
        {/* 1. HERO SECTION */}
        <section className="pt-10 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Narrative (7 Columns) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE6D8] border border-[#D4C0A3] shadow-2xs text-xs font-bold text-[#5C3D2E]">
                <Sparkles className="w-3.5 h-3.5 text-[#9E6B3B]" />
                <span>{PORTFOLIO_DATA.heroKicker}</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-[#2C1E16] leading-[1.12]">
                  Hi, I&apos;m{' '}
                  <span className="font-serif italic font-bold text-[#7A4B32] underline decoration-[#C69C6D] decoration-4 underline-offset-8">
                    Aisha Muhammad Waseem
                  </span>
                  .
                </h1>
                <p className="text-lg sm:text-xl font-medium text-[#5C4433] pt-1">
                  Crafting full-stack web &amp; Flutter mobile applications while inspiring students in Computer Science &amp; Mathematics.
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#664E3D] leading-relaxed max-w-2xl">
                {PORTFOLIO_DATA.summary}
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3.5 rounded-2xl bg-[#5C3D2E] hover:bg-[#3E271C] text-[#FBF8F3] font-bold text-sm shadow-lg shadow-[#5C3D2E]/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <FolderGit2 className="w-4 h-4" />
                  Explore All 11 Projects
                </button>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="px-6 py-3.5 rounded-2xl bg-[#FBF8F3] hover:bg-[#EFE6D8] text-[#2C1E16] border border-[#D4C0A3] font-bold text-sm shadow-2xs transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Briefcase className="w-4 h-4 text-[#8C5B32]" />
                  My Journey &amp; Roles
                </button>
              </div>

              {/* Quick Interactive Contact Pills */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                <a
                  href="tel:+923102600950"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FBF8F3] border border-[#DFD2BE] hover:border-[#B88655] text-xs font-semibold text-[#3D2B20] shadow-2xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#7A4B32]" />
                  <span>0310-2600950</span>
                </a>
                <a
                  href={`mailto:${PORTFOLIO_DATA.email}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FBF8F3] border border-[#DFD2BE] hover:border-[#B88655] text-xs font-semibold text-[#3D2B20] shadow-2xs transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#7A4B32]" />
                  <span>{PORTFOLIO_DATA.email}</span>
                </a>
                <a
                  href={PORTFOLIO_DATA.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FBF8F3] border border-[#DFD2BE] hover:border-[#B88655] text-xs font-semibold text-[#3D2B20] shadow-2xs transition-colors"
                >
                 <LinkedinIcon className="w-3.5 h-3.5 text-[#8C5B32]" />
  <span>linkedin.com/in/aisha-waseem-dev</span>
                </a>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#EFE6D8] border border-[#D9C8B0] text-xs font-semibold text-[#5C3D2E]">
                  <MapPin className="w-3.5 h-3.5 text-[#7A4B32]" />
                  <span>Karachi, Pakistan</span>
                </span>
              </div>
            </div>

            {/* Right Signature Card (5 Columns) */}
            <div className="lg:col-span-5">
              <div className="relative bg-[#FBF8F3] border border-[#D9C8B0] rounded-[2rem] p-6 sm:p-8 shadow-[0_24px_60px_rgba(44,30,22,0.08)]">
                <div className="flex items-center justify-between gap-3 pb-5 mb-5 border-b border-[#E6DAC8]">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EFE6D8] via-[#E5D3B8] to-[#D6BC98] border border-[#C69C6D] flex items-center justify-center relative">
                      <span className="font-serif italic font-extrabold text-xl text-[#5C3D2E]">
                        AW
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C5B32]">
                        Signature Profile
                      </span>
                      <h2 className="font-bold text-base text-[#2C1E16]">Aisha M. Waseem</h2>
                      <p className="text-xs text-[#7A5C48]">IT Undergraduate • Aptech NN2</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#EFE6D8] border border-[#C69C6D] text-[11px] font-bold text-[#5C3D2E]">
                    Open to Roles
                  </span>
                </div>

                {/* Dual Identity Mini-Cards */}
                <div className="space-y-3 mb-5">
                  <div className="p-4 rounded-2xl bg-[#F4ECE0] border border-[#DFD2BE]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-extrabold text-[#5C3D2E] flex items-center gap-1.5">
                        <Code2 className="w-4 h-4 text-[#8C5B32]" /> Full-Stack &amp; Flutter Developer
                      </span>
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#FBF8F3] text-[#5C3D2E] border border-[#D9C8B0]">
                        MERN • Flutter • PHP
                      </span>
                    </div>
                    <p className="text-xs text-[#664E3D] leading-relaxed">
                      Built 11 web &amp; mobile applications including Hotel Management, BabyShopHub, Women Safety App, JensenDecors &amp; Courier Systems.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#EFE6D8]/85 border border-[#D9C8B0]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-extrabold text-[#5C3D2E] flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-[#8C5B32]" /> CS &amp; Math Educator + Global Ops
                      </span>
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#FBF8F3] text-[#5C3D2E] border border-[#D9C8B0]">
                        Karachi • Japan • X
                      </span>
                    </div>
                    <p className="text-xs text-[#664E3D] leading-relaxed">
                      Teaching at S.A.J Academy, 6-month dev internships at CodeAlpha &amp; Cognotech, Japan auto data coordinator at Nozaki &amp; Twitter sales.
                    </p>
                  </div>
                </div>

                {/* Code Snapshot */}
                <div className="rounded-2xl bg-[#EFE6D8] border border-[#D9C8B0] p-3.5 font-mono text-xs text-[#3D2B20]">
                  <div className="flex items-center justify-between text-[10px] text-[#7A5C48] pb-2 mb-2 border-b border-[#D9C8B0]">
                    <span className="flex items-center gap-1.5 font-bold text-[#5C3D2E]">
                      <Terminal className="w-3.5 h-3.5 text-[#8C5B32]" /> aisha.signature.js
                    </span>
                    <span>11 Projects Shipped</span>
                  </div>
                  <div className="space-y-0.5 text-[11px] leading-relaxed">
                    <div>
                      <span className="text-[#7A4B32] font-bold">const</span> stack = [
                      <span className="text-[#5C3D2E] font-semibold">&quot;MERN&quot;</span>,{' '}
                      <span className="text-[#5C3D2E] font-semibold">&quot;Flutter&quot;</span>,{' '}
                      <span className="text-[#5C3D2E] font-semibold">&quot;PHP/MySQL&quot;</span>];
                    </div>
                    <div>
                      <span className="text-[#7A4B32] font-bold">const</span> passion ={' '}
                      <span className="text-[#8C5B32]">&quot;Clean Code &amp; Teaching&quot;</span>;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ALL 11 PROJECTS SHOWCASE */}
        <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#8C5B32]">
                Complete Portfolio Archive
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C1E16] mt-1 tracking-tight">
                All 11 Software, Mobile &amp; Web{' '}
                <span className="font-serif italic text-[#7A4B32]">Projects</span>
              </h2>
              <p className="text-sm text-[#664E3D] mt-2 max-w-2xl">
                Every single project I have engineered—from full-stack MERN hotel platforms and Flutter mobile applications to PHP logistics systems and responsive e-commerce storefronts.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 bg-[#FBF8F3] p-1.5 rounded-2xl border border-[#DFD2BE] shadow-2xs self-start">
              {projectFilters.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#5C3D2E] text-[#FBF8F3] shadow-xs'
                      : 'text-[#664E3D] hover:text-[#2C1E16] hover:bg-[#EFE6D8]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group bg-[#FBF8F3] border border-[#DFD2BE] rounded-[1.75rem] overflow-hidden shadow-2xs hover:shadow-xl hover:-translate-y-1 hover:border-[#B88655] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Biscuit UI Mockup Header */}
                  <div className="bg-gradient-to-br from-[#EFE6D8] via-[#E8DAC5] to-[#DFCEB4] p-5 border-b border-[#DFD2BE] relative">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#FBF8F3] text-[#5C3D2E] border border-[#D4C0A3]">
                        {project.stackLabel}
                      </span>
                      <span className="font-serif italic font-bold text-sm text-[#7A5C48]">
                        #{project.number}
                      </span>
                    </div>

                    <div className="bg-[#FBF8F3]/95 border border-[#D9C8B0] rounded-2xl p-3.5 shadow-2xs">
                      <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-[#EFE6D8]">
                        <span className="w-2 h-2 rounded-full bg-[#C69C6D]" />
                        <span className="w-2 h-2 rounded-full bg-[#9E6B3B]" />
                        <span className="w-2 h-2 rounded-full bg-[#5C3D2E]" />
                        <span className="ml-auto text-[10px] font-mono text-[#7A5C48]">
                          {project.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#EFE6D8] border border-[#D4C0A3] flex items-center justify-center shrink-0 text-[#5C3D2E]">
                          {renderIcon(project.icon, 'w-5 h-5')}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-[#2C1E16] truncate">
                            {project.title}
                          </div>
                          <div className="text-[11px] text-[#7A5C48] truncate mt-0.5">
                            {project.highlights[0]}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-base sm:text-lg font-extrabold text-[#2C1E16] group-hover:text-[#7A4B32] transition-colors leading-snug mb-2">
                      {project.title}
                    </h3>

                    {project.liveLinkLabel && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#5C3D2E] bg-[#EFE6D8] border border-[#C69C6D] px-2.5 py-0.5 rounded-full mb-2.5">
                        <ExternalLink className="w-3 h-3" /> {project.liveLinkLabel}
                      </span>
                    )}

                    <p className="text-xs sm:text-sm text-[#664E3D] leading-relaxed mb-4">
                      {project.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-[#EFE6D8] space-y-3.5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-[#EFE6D8] border border-[#DFD2BE] font-mono text-[10px] font-semibold text-[#5C3D2E]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#F4ECE0] hover:bg-[#5C3D2E] text-[#2C1E16] hover:text-[#FBF8F3] border border-[#D4C0A3] hover:border-[#5C3D2E] text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 3. EXPERIENCE & JOURNEY */}
        <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#8C5B32]">
              Career &amp; Global Exposure
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C1E16] mt-1 tracking-tight">
              My Journey &amp;{' '}
              <span className="font-serif italic text-[#7A4B32]">Experience</span>
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
                    className={`w-full text-left p-5 rounded-3xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#FBF8F3] border-[#5C3D2E] shadow-lg shadow-[#2C1E16]/5'
                        : 'bg-[#FBF8F3]/75 border-[#DFD2BE] hover:bg-[#FBF8F3] hover:border-[#C69C6D]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                          isSelected
                            ? 'bg-[#5C3D2E] text-[#FBF8F3]'
                            : 'bg-[#EFE6D8] text-[#5C3D2E]'
                        }`}
                      >
                        {exp.tag}
                      </span>
                      <span className="text-xs font-bold text-[#7A5C48]">{exp.period}</span>
                    </div>
                    <div className="font-extrabold text-sm sm:text-base text-[#2C1E16]">
                      {exp.role}
                    </div>
                    <div className="text-xs font-semibold text-[#7A5C48] mt-0.5">
                      {exp.organization} • {exp.location}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-7 bg-[#FBF8F3] border border-[#DFD2BE] rounded-[2rem] p-6 sm:p-9 shadow-sm">
              <div className="pb-5 mb-6 border-b border-[#EFE6D8]">
                <span className="inline-block px-3 py-1 rounded-full bg-[#EFE6D8] border border-[#C69C6D] text-xs font-bold text-[#5C3D2E] mb-2">
                  {currentExp.tag} • {currentExp.period}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#2C1E16]">
                  {currentExp.role}
                </h3>
                <p className="text-sm font-bold text-[#7A4B32] mt-1">
                  {currentExp.organization}{' '}
                  <span className="font-medium text-[#7A5C48]">({currentExp.location})</span>
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#664E3D] leading-relaxed mb-6">
                {currentExp.summary}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#8C5B32]">
                  Key Responsibilities &amp; Impact
                </h4>
                {currentExp.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[#F4ECE0] border border-[#DFD2BE] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#5C3D2E] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#3D2B20] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. SKILLS SECTION */}
        <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#8C5B32]">
                Technical &amp; Interpersonal Arsenal
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C1E16] mt-1 tracking-tight">
                Skills &amp;{' '}
                <span className="font-serif italic text-[#7A4B32]">Core Capabilities</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-1.5 bg-[#FBF8F3] p-1.5 rounded-2xl border border-[#DFD2BE] shadow-2xs self-start">
              <button
                onClick={() => setSelectedSkillFilter('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  selectedSkillFilter === 'all'
                    ? 'bg-[#2C1E16] text-[#FBF8F3]'
                    : 'text-[#664E3D] hover:bg-[#EFE6D8]'
                }`}
              >
                All Domains
              </button>
              {PORTFOLIO_DATA.skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedSkillFilter(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    selectedSkillFilter === cat.id
                      ? 'bg-[#5C3D2E] text-[#FBF8F3]'
                      : 'text-[#664E3D] hover:bg-[#EFE6D8]'
                  }`}
                >
                  {cat.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedSkillCategories.map((category) => (
              <div
                key={category.id}
                className="bg-[#FBF8F3] border border-[#DFD2BE] rounded-[1.75rem] p-6 shadow-2xs hover:border-[#B88655] transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-[#EFE6D8] text-[#5C3D2E] border border-[#D4C0A3]">
                    {renderIcon(category.icon, 'w-5 h-5')}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-[#2C1E16]">{category.title}</h3>
                    <p className="text-xs text-[#7A5C48]">{category.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#F4ECE0] border border-[#DFD2BE]"
                    >
                      <span className="text-xs sm:text-sm font-bold text-[#2C1E16]">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#FBF8F3] border border-[#D4C0A3] text-[#5C3D2E]">
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
        <section id="education" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-[#FBF8F3] border border-[#DFD2BE] rounded-[2rem] p-6 sm:p-9 shadow-2xs">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-11 h-11 rounded-2xl bg-[#EFE6D8] border border-[#D4C0A3] text-[#5C3D2E] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#8C5B32]">
                    Academic Background
                  </span>
                  <h2 className="text-2xl font-extrabold text-[#2C1E16]">Education Timeline</h2>
                </div>
              </div>

              <div className="space-y-6 relative pl-6 border-l-2 border-[#C69C6D]">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <div key={idx} className="relative">
                    <span
                      className={`absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                        edu.current
                          ? 'bg-[#5C3D2E] border-[#E6D5BE]'
                          : 'bg-[#FBF8F3] border-[#9E6B3B]'
                      }`}
                    />
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#F4ECE0] border border-[#DFD2BE]">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <h3 className="font-extrabold text-sm sm:text-base text-[#2C1E16]">
                          {edu.degree}
                        </h3>
                        <span
                          className={`text-[11px] font-bold px-3 py-0.5 rounded-full ${
                            edu.current
                              ? 'bg-[#5C3D2E] text-[#FBF8F3]'
                              : 'bg-[#FBF8F3] text-[#5C3D2E] border border-[#D4C0A3]'
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-[#7A4B32] mb-2">
                        {edu.institution} • {edu.city}
                      </div>
                      <p className="text-xs text-[#664E3D] leading-relaxed">{edu.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-[#FBF8F3] border border-[#DFD2BE] rounded-[2rem] p-6 sm:p-8 shadow-2xs">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-[#EFE6D8] border border-[#D4C0A3] text-[#5C3D2E] flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#8C5B32]">
                      Communication
                    </span>
                    <h2 className="text-xl font-extrabold text-[#2C1E16]">Languages</h2>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {PORTFOLIO_DATA.languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="p-4 rounded-2xl bg-[#F4ECE0] border border-[#DFD2BE]"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-extrabold text-base text-[#2C1E16]">{lang.name}</span>
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#FBF8F3] text-[#5C3D2E] border border-[#D4C0A3]">
                          {lang.level}
                        </span>
                      </div>
                      <p className="text-xs text-[#664E3D]">{lang.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#EFE6D8] via-[#E8DAC5] to-[#DFCEB4] border border-[#C69C6D] rounded-[2rem] p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#5C3D2E] mb-3">
                    <HeartHandshake className="w-4 h-4 text-[#8C5B32]" />
                    <span>Why Work With Me</span>
                  </div>
                  <h3 className="font-serif italic text-xl sm:text-2xl font-bold text-[#2C1E16] mb-2">
                    Engineering Precision Meets Clear Communication
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3D2B20] leading-relaxed">
                    Whether building a MERN hotel reservation platform, launching a Flutter e-commerce mobile app, or teaching Computer Science and Mathematics, I bring structure, clarity, and full ownership to every project.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#C69C6D]/50 flex items-center justify-between text-xs font-bold text-[#3D2B20]">
                  <span>Aptech NN2 • S.A.J Academy</span>
                  <span className="text-[#5C3D2E]">Karachi, PK</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CONTACT SECTION */}
        <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="bg-[#FBF8F3] border border-[#DFD2BE] rounded-[2.25rem] p-6 sm:p-10 lg:p-12 shadow-[0_24px_60px_rgba(44,30,22,0.06)]">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#8C5B32]">
                    Collaboration Studio
                  </span>
                  <h2 className="text-3xl font-extrabold text-[#2C1E16] mt-1 tracking-tight">
                    Let&apos;s Build Something{' '}
                    <span className="font-serif italic text-[#7A4B32]">Memorable</span>
                  </h2>
                  <p className="text-sm text-[#664E3D] leading-relaxed mt-2">
                    Reach out for Full-Stack MERN or Flutter app development, custom PHP/MySQL dashboards, or Computer Science &amp; Mathematics teaching opportunities.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 p-3.5 rounded-2xl bg-[#F4ECE0] border border-[#DFD2BE]">
                    <a href="tel:+923102600950" className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-[#EFE6D8] text-[#5C3D2E] border border-[#D4C0A3] flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className="text-[11px] font-semibold text-[#7A5C48]">Phone / WhatsApp</div>
                        <div className="text-sm font-extrabold text-[#2C1E16]">0310-2600950</div>
                      </div>
                    </a>
                    <button
                      onClick={() => handleCopy('03102600950', 'phone')}
                      className="px-2.5 py-1.5 rounded-lg bg-[#FBF8F3] border border-[#D4C0A3] hover:border-[#5C3D2E] text-xs font-bold text-[#5C3D2E] flex items-center gap-1 cursor-pointer shrink-0"
                    >
                      {copiedField === 'phone' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#5C3D2E]" />
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

                  <div className="flex items-center justify-between gap-2 p-3.5 rounded-2xl bg-[#F4ECE0] border border-[#DFD2BE]">
                    <a
                      href={`mailto:${PORTFOLIO_DATA.email}`}
                      className="flex items-center gap-3 min-w-0"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#EFE6D8] text-[#5C3D2E] border border-[#D4C0A3] flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className="text-[11px] font-semibold text-[#7A5C48]">Email Address</div>
                        <div className="text-sm font-extrabold text-[#2C1E16] truncate">
                          {PORTFOLIO_DATA.email}
                        </div>
                      </div>
                    </a>
                    <button
                      onClick={() => handleCopy(PORTFOLIO_DATA.email, 'email')}
                      className="px-2.5 py-1.5 rounded-lg bg-[#FBF8F3] border border-[#D4C0A3] hover:border-[#5C3D2E] text-xs font-bold text-[#5C3D2E] flex items-center gap-1 cursor-pointer shrink-0"
                    >
                      {copiedField === 'email' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#5C3D2E]" />
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
<a
  href={PORTFOLIO_DATA.linkedin}
  target="_blank"
  rel="noreferrer"
  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F4ECE0] border border-[#DFD2BE] hover:border-[#8C5B32] transition-colors"
>
  <div className="flex items-center gap-3 min-w-0">
    <div className="w-10 h-10 rounded-xl bg-[#EFE6D8] text-[#5C3D2E] border border-[#D4C0A3] flex items-center justify-center shrink-0">
      <LinkedinIcon className="w-4 h-4" />
    </div>
    <div className="truncate">
      <div className="text-[11px] font-semibold text-[#7A5C48]">LinkedIn Profile</div>
      <div className="text-sm font-extrabold text-[#2C1E16] truncate">
        linkedin.com/in/aisha-waseem-dev
      </div>
    </div>
  </div>
  <ArrowUpRight className="w-4 h-4 text-[#7A5C48] shrink-0" />
</a>

                  {/* Direct WhatsApp Quick-Chat Card */}
                  <a
                    href={PORTFOLIO_DATA.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-[#EFE6D8] border border-[#C69C6D] hover:bg-[#5C3D2E] group transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-[#5C3D2E] group-hover:bg-[#FBF8F3] text-[#FBF8F3] group-hover:text-[#5C3D2E] flex items-center justify-center shrink-0 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className="text-[11px] font-bold text-[#7A4B32] group-hover:text-[#E6D5BE]">
                          Direct WhatsApp Chat
                        </div>
                        <div className="text-sm font-extrabold text-[#2C1E16] group-hover:text-[#FBF8F3]">
                          Chat on WhatsApp (+92 310-2600950)
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#5C3D2E] group-hover:text-[#FBF8F3] shrink-0" />
                  </a>

                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F4ECE0] border border-[#DFD2BE]">
                    <div className="w-10 h-10 rounded-xl bg-[#EFE6D8] text-[#5C3D2E] border border-[#D4C0A3] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-[#7A5C48]">Base Location</div>
                      <div className="text-sm font-extrabold text-[#2C1E16]">Karachi, Pakistan</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#F4ECE0] border border-[#DFD2BE] rounded-3xl p-6 sm:p-8">
                {formSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-10 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#EFE6D8] border border-[#C69C6D] text-[#5C3D2E] flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#2C1E16]">
                      {submissionMode === 'api'
                        ? 'Email Sent Successfully!'
                        : 'Email Draft Opened for Aisha!'}
                    </h3>
                    <p className="text-sm text-[#664E3D] max-w-md">
                      {submissionMode === 'api' ? (
                        <>
                          Your message has been delivered directly to{' '}
                          <span className="font-bold">{PORTFOLIO_DATA.email}</span>. Aisha will
                          reply soon!
                        </>
                      ) : (
                        <>
                          Your email app has been opened to send your inquiry straight to{' '}
                          <span className="font-bold">{PORTFOLIO_DATA.email}</span>, or you can
                          message her instantly on WhatsApp below.
                        </>
                      )}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                      <a
                        href={PORTFOLIO_DATA.whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-[#EFE6D8] border border-[#C69C6D] hover:bg-[#E6D5BE] text-[#2C1E16] text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4 text-[#5C3D2E]" />
                        Message on WhatsApp
                      </a>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="px-5 py-2.5 rounded-xl bg-[#5C3D2E] hover:bg-[#3E271C] text-[#FBF8F3] text-xs font-bold transition-colors cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-extrabold text-[#2C1E16]">
                        Send Email Directly to Aisha
                      </h3>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#EFE6D8] border border-[#D4C0A3] text-[#5C3D2E]">
                        To: {PORTFOLIO_DATA.email}
                      </span>
                    </div>

                    {formError && (
                      <div className="p-3 rounded-xl bg-[#EFE6D8] border border-[#9E6B3B] text-[#5C3D2E] text-xs font-bold">
                        {formError}
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#3D2B20] mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#FBF8F3] border border-[#D4C0A3] text-sm text-[#2C1E16] focus:outline-none focus:border-[#5C3D2E] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#3D2B20] mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#FBF8F3] border border-[#D4C0A3] text-sm text-[#2C1E16] focus:outline-none focus:border-[#5C3D2E] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3D2B20] mb-1.5">
                        Collaboration Topic
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FBF8F3] border border-[#D4C0A3] text-sm text-[#2C1E16] focus:outline-none focus:border-[#5C3D2E] transition-colors"
                      >
                        <option>Full-Stack MERN / Web Development</option>
                        <option>Flutter Mobile App Development</option>
                        <option>PHP / MySQL &amp; Admin Dashboard</option>
                        <option>Computer Science / Math Teaching Role</option>
                        <option>Remote Client Coordination / Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3D2B20] mb-1.5">
                        Project or Role Details *
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell me about your project, job opportunity, or collaboration..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FBF8F3] border border-[#D4C0A3] text-sm text-[#2C1E16] focus:outline-none focus:border-[#5C3D2E] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#5C3D2E] hover:bg-[#3E271C] disabled:opacity-60 text-[#FBF8F3] font-bold text-sm shadow-md shadow-[#5C3D2E]/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending to Email...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
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
      <footer className="border-t border-[#DFD2BE] bg-[#FBF8F3]/90 py-8 px-4 sm:px-6 lg:px-8 pb-24 sm:pb-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#5C3D2E] text-[#FBF8F3] font-serif italic font-bold text-sm flex items-center justify-center">
              AW
            </div>
            <span className="text-sm font-extrabold text-[#2C1E16]">{PORTFOLIO_DATA.name}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-[#664E3D]">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-[#2C1E16] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <a
              href={PORTFOLIO_DATA.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EFE6D8] border border-[#C69C6D] text-[#5C3D2E] hover:bg-[#5C3D2E] hover:text-[#FBF8F3] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          <p className="text-xs text-[#7A5C48]">
            © {new Date().getFullYear()} {PORTFOLIO_DATA.name} • Karachi, Pakistan
          </p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP QUICK-CHAT BUTTON */}
      <a
        href={PORTFOLIO_DATA.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Aisha Muhammad Waseem on WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#5C3D2E] hover:bg-[#3E271C] text-[#FBF8F3] border-2 border-[#E6D5BE] shadow-xl shadow-[#2C1E16]/25 hover:scale-105 transition-all"
      >
        <span className="w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
          <MessageCircle className="w-4 h-4 fill-current" />
        </span>
        <span className="text-xs font-extrabold tracking-wide pr-1">Chat on WhatsApp</span>
      </a>

      {/* PROJECT CASE STUDY MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2C1E16]/55 backdrop-blur-xs"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-2xl bg-[#FBF8F3] border border-[#D4C0A3] rounded-[2rem] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-[#EFE6D8] via-[#E8DAC5] to-[#DFCEB4] px-6 sm:px-8 py-6 border-b border-[#D4C0A3]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#FBF8F3] text-[#5C3D2E] border border-[#C69C6D] mb-2">
                    Project #{selectedProject.number} • {selectedProject.stackLabel}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#2C1E16]">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                  className="p-2 rounded-full bg-[#FBF8F3] border border-[#D4C0A3] text-[#5C3D2E] hover:text-[#2C1E16] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm sm:text-base text-[#664E3D] leading-relaxed">
                {selectedProject.fullDesc}
              </p>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#8C5B32] mb-3">
                  Key Highlights &amp; Implementation
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((feat, idx) => (
                    <li key={idx} className="text-sm text-[#2C1E16] flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#5C3D2E] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#7A4B32] mb-2.5">
                  Tech Stack &amp; Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-xl bg-[#EFE6D8] border border-[#D4C0A3] font-mono text-xs font-bold text-[#2C1E16]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#EFE6D8]">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    scrollToSection('contact');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#5C3D2E] hover:bg-[#3E271C] text-[#FBF8F3] text-xs sm:text-sm font-bold transition-colors cursor-pointer"
                >
                  Request Demo / Source Details
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#FBF8F3] border border-[#D4C0A3] hover:bg-[#EFE6D8] text-[#2C1E16] text-xs sm:text-sm font-bold transition-colors cursor-pointer"
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