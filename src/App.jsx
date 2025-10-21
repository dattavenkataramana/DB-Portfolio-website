// import React, { useState, useEffect, useRef } from 'react';
 
// import { Menu, X, Moon, Sun, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download, Send, Code, Database, Layers, Award, Briefcase, GraduationCap, User, Rocket, Zap, Star, ChevronDown,Cloud } from 'lucide-react';

// export default function Portfolio() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [typedText, setTypedText] = useState('');
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [scrollY, setScrollY] = useState(0);
//   const [visibleSections, setVisibleSections] = useState({});
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

 
//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = '/DattavenkataramanaResume.pdf'; // Ensure the resume file is in the public directory
//     link.download = 'DattavenkataramanaResume.pdf';   
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };
   

//   const fullText = "Frontend & Full Stack Developer";
//   const sectionRefs = useRef({});

//   useEffect(() => {
//     let index = 0;
//     const timer = setInterval(() => {
//       if (index <= fullText.length) {
//         setTypedText(fullText.slice(0, index));
//         index++;
//       } else {
//         clearInterval(timer);
//       }
//     }, 100);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
      
//       const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
//       const current = sections.find(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });
//       if (current) setActiveSection(current);

//       // Check visibility of sections for animations
//       const newVisibleSections = {};
//       sections.forEach(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           newVisibleSections[section] = rect.top < window.innerHeight * 0.75;
//         }
//       });
//       setVisibleSections(newVisibleSections);
//     };

//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('mousemove', handleMouseMove);
//     handleScroll();
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   const skills = {
//     frontend: [
//       { name: 'React.js', level: 100, color: 'from-blue-500 to-cyan-500' },
//       { name: 'JavaScript.js', level: 100, color: 'from-green-500 to-cyan-500' },
//       { name: 'Bootstrap', level: 100, color: 'from-green-500 to-cyan-500' },
//       { name: 'HTML5', level: 100, color: 'from-orange-500 to-red-500' },
//       { name: 'CSS3', level: 100, color: 'from-blue-400 to-blue-600' },
//       { name: 'Tailwind CSS', level: 100, color: 'from-teal-400 to-teal-600' },
//       { name: 'Redux', level: 100, color: 'from-purple-500 to-purple-700' }
//     ],
//     backend: [
//       { name: 'Node.js', level: 100, color: 'from-green-500 to-green-700' },
//       { name: 'Express.js', level: 100, color: 'from-gray-600 to-gray-800' },
//       { name: 'RESTful APIs', level: 100, color: 'from-indigo-500 to-indigo-700' },
//       { name: 'JWT Auth', level: 100, color: 'from-yellow-500 to-orange-500' },
//       { name: 'OAuth, Middlewares', level: 100, color: 'from-yellow-500 to-orange-500' },
//       { name: 'Python', level: 100, color: 'from-green-500 to-orange-500' } 
//     ],    
//     database: [
//       { name: 'MongoDB', level: 100, color: 'from-green-600 to-green-800' },
//       { name: 'SQLite', level: 100, color: 'from-blue-500 to-blue-700' }
//     ],
//     tools: [
//       { name: 'Git', level: 100, color: 'from-red-500 to-orange-600' },
//       { name: 'GitHub', level: 100, color: 'from-gray-700 to-gray-900' },
//       { name: 'Vite', level: 100, color: 'from-purple-500 to-pink-500' },
//       { name: 'Visual Studio Code', level: 100, color: 'from-red-500 to-orange-600' },
//       { name: 'Postman', level: 100, color: 'from-gray-700 to-gray-900' },
//       { name: 'Render', level: 100, color: 'from-purple-500 to-pink-500' },
//       { name: 'Netlify', level: 100, color: 'from-red-500 to-orange-600' },
//       { name: 'Vercel', level: 100, color: 'from-gray-700 to-gray-900' }  
//     ],
//     DevelopmentPractices: [
//       { name: 'Agile Methodologies', level: 100, color: 'from-blue-500 to-blue-700' },
//       { name: 'Version Control (Git)', level: 100, color: 'from-green-500 to-green-700' },
//       { name: 'CI/CD Pipelines', level: 50, color: 'from-purple-500 to-purple-700' },
//       { name: 'Code Reviews & Debugging', level: 100, color: 'from-yellow-500 to-yellow-700' },
//       { name: 'Unit Testing (Jest)', level: 100, color: 'from-yellow-500 to-yellow-700' }
//     ],
//     CloudPlatforms: [
//       { name: 'AWS(EC2, S3) SSH, HTTP/HTTPS, Nginx, pm23', level: 100, color: 'from-green-500 to-blue-500' }
//     ]

//   };

//   const projects = [
//     {
//       title: 'Job Board Application',
//       description: 'Real-time job posting platform with advanced search, user authentication, and admin dashboard. Built with modern tech stack for optimal performance.',
//       tech: ['React.js', 'Node.js', 'SQLite', 'JWT', 'Express.js'],
//       gradient: 'from-blue-500 via-purple-500 to-pink-500',
//       icon: <Briefcase size={32} />,
//       website: 'https://jb.xypherasystems.com/',
//       gitcode: "https://github.com/dattavenkataramana/jobboardapplication"
//     },
//     {
//       title: 'Async Operations Portal',
//       description: 'Event-driven portal featuring real-time validations, asynchronous data processing, and dynamic UI components for seamless user interactions.',
//       tech: ['React.js', 'MongoDB', 'Node.js', 'Express.js'],
//       gradient: 'from-green-500 via-teal-500 to-cyan-500',
//       icon: <Zap size={32} />,
//       website: 'https://rad-piroshki-dc45bd.netlify.app/',
//       gitcode:"https://github.com/dattavenkataramana?tab=repositories"

//     },
//     {
//       title: 'E-Commerce Web App',
//       description: 'Full-stack shopping platform with product catalog, cart management, secure payments, and JWT authentication for enhanced security.',
//       tech: ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind'],
//       gradient: 'from-orange-500 via-red-500 to-pink-500',
//       icon: <Rocket size={32} />,
//       website: 'https://dattaanimationreactform.netlify.app/',
//       gitcode:"https://github.com/dattavenkataramana/Login-css-animation-form"

//     },
//     {
//       title: 'Chat Application',
//       description: 'Interactive chat application with live messaging, presence indicators, typing notifications, and persistent message history using Socket.io.',
//       tech: ['React.js', 'Socket.io', 'MongoDB', 'Node.js'],
//       gradient: 'from-indigo-500 via-purple-500 to-pink-500',
//       icon: <Star size={32} />
//     }
//   ];

//   const scrollToSection = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//     setMenuOpen(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Thank you! Your message has been sent.');
//     setFormData({ name: '', email: '', message: '' });
//   };

//   const parallaxOffset = scrollY * 0.5;

//   return (
//     <div className={darkMode ? 'dark' : ''}>
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950 text-gray-900 dark:text-gray-100 transition-all duration-500 overflow-x-hidden">
        
//         {/* Animated Background Elements */}
//         <div className="fixed inset-0 overflow-hidden pointer-events-none">
//           <div 
//             className="absolute w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"
//             style={{ 
//               top: `${20 + scrollY * 0.1}%`, 
//               left: `${10 + mousePosition.x * 0.01}%`,
//               transform: 'translate(-50%, -50%)',
//               transition: 'all 0.3s ease-out'
//             }}
//           />
//           <div 
//             className="absolute w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl"
//             style={{ 
//               bottom: `${10 + scrollY * 0.05}%`, 
//               right: `${10 + mousePosition.y * 0.01}%`,
//               transform: 'translate(50%, 50%)',
//               transition: 'all 0.3s ease-out'
//             }}
//           />
//           <div 
//             className="absolute w-64 h-64 bg-pink-400/10 dark:bg-pink-500/10 rounded-full blur-3xl"
//             style={{ 
//               top: `${50 - scrollY * 0.08}%`, 
//               right: `${20 + mousePosition.x * 0.005}%`,
//               transform: 'translate(50%, -50%)',
//               transition: 'all 0.3s ease-out'
//             }}
//           />
//         </div>

//         {/* Navigation */}
//         <nav className="fixed top-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg z-50 border-b border-gray-200/50 dark:border-gray-700/50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between items-center h-20">
//               <div 
//                 className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse"
//                 style={{ animationDuration: '3s' }}
//               >
//                 DVR.dev
//               </div>
              
//               <div className="hidden md:flex space-x-1">
//                 {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
//                   <button
//                     key={item}
//                     onClick={() => scrollToSection(item.toLowerCase())}
//                     className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
//                       activeSection === item.toLowerCase() 
//                         ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
//                         : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </div>

//               <div className="flex items-center space-x-4">
//                 <button
//                   onClick={() => setDarkMode(!darkMode)}
//                   className="p-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-blue-500 dark:to-purple-600 text-white hover:shadow-xl transform hover:scale-110 transition-all duration-300"
//                 >
//                   {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//                 </button>
//                 <button
//                   onClick={() => setMenuOpen(!menuOpen)}
//                   className="md:hidden p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-xl"
//                 >
//                   {menuOpen ? <X size={24} /> : <Menu size={24} />}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {menuOpen && (
//             <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 animate-slide-down">
//               <div className="px-4 py-4 space-y-2">
//                 {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item, index) => (
//                   <button
//                     key={item}
//                     onClick={() => scrollToSection(item.toLowerCase())}
//                     className="block w-full text-left px-6 py-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all transform hover:scale-105"
//                     style={{ animationDelay: `${index * 50}ms` }}
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
//         </nav>

//         {/* Hero Section */}
//         <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 mt-[50px]">
//           <div 
//             className="max-w-7xl mx-auto text-center"
//             style={{ transform: `translateY(-${parallaxOffset}px)` }}
//           >
//             <div className={`space-y-8 transition-all duration-1000 ${visibleSections.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//               <div className="relative inline-block group">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
//                 <div className="relative w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-5xl font-black shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
//                   DB
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x leading-tight">
//                   Dattavenkataramana
//                   <br />
//                   <span className="text-5xl md:text-7xl">Bavirisetti</span>
//                 </h1>
                
//                 <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 h-16 flex items-center justify-center">
//                   {typedText}<span className="animate-blink text-purple-600">|</span>
//                 </div>

//                 <div className="flex flex-wrap items-center justify-center gap-4 text-lg text-gray-600 dark:text-gray-400">
//                   <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm">
//                     <MapPin size={20} className="text-blue-600" />
//                     <span>Vannepudi, India</span>
//                   </div>
//                   <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm">
//                     <Briefcase size={20} className="text-purple-600" />
//                     <span>1+ Year Experience</span>
//                   </div>
//                 </div>

//                 <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
//                   Crafting exceptional digital experiences with cutting-edge technologies. 
//                   Passionate about building scalable, performant web applications that make a difference.
//                 </p>

//                 <div className="flex flex-wrap justify-center gap-6 pt-8">
//                   <button onClick={handleDownload} className="group px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center gap-3 relative overflow-hidden">
//                     <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//                     <Download size={24} />
//                     <span>Download Resume</span>
//                   </button>
//                   <button
//                     onClick={() => scrollToSection('contact')}
//                     className="group px-10 py-4 border-4 border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400 rounded-2xl font-bold text-lg hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transform hover:scale-110 transition-all duration-300 flex items-center gap-3"
//                   >
//                     <Send size={24} />
//                     <span>Let's Talk</span>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <button
//               onClick={() => scrollToSection('about')}
//               className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
//             >
//               <ChevronDown size={40} className="text-purple-600 dark:text-purple-400" />
//             </button>
//           </div>
//         </section>

//         {/* About Section */}
//         <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8">
//           <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-200 ${visibleSections.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
//             <div className="text-center mb-16">
//               <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-sm mb-6">
//                 <User className="text-purple-600" size={24} />
//                 <span className="text-sm font-bold text-purple-600 dark:text-purple-400">WHO AM I</span>
//               </div>
//               <h2 className="text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
//                 About Me
//               </h2>
//             </div>

//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               <div className="relative group">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
//                 <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transform group-hover:scale-105 transition-all duration-500">
//                   <div className="w-48 h-48 mx-auto rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-6xl font-black shadow-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500">
//                     DB
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl p-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 transform hover:scale-105 transition-all duration-300">
//                   <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                     I'm a <span className="font-bold text-purple-600">passionate Frontend and Full Stack Developer</span> with 1+ year of hands-on experience 
//                     in crafting dynamic, responsive web applications that users love.
//                   </p>
//                 </div>

//                 <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl p-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 transform hover:scale-105 transition-all duration-300">
//                   <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                     My expertise spans the <span className="font-bold text-blue-600">MERN stack</span>, with a laser focus on creating 
//                     intuitive user interfaces and rock-solid backend architectures that scale.
//                   </p>
//                 </div>

//                 <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl p-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 transform hover:scale-105 transition-all duration-300">
//                   <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                     I thrive on solving complex problems and building <span className="font-bold text-pink-600">production-ready applications</span> that 
//                     make a real impact. Let's create something amazing together!
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Skills Section */}
//         <section id="skills" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/30">
//           <div className={`max-w-7xl mx-auto transition-all duration-1000 delay-300 ${visibleSections.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
//             <div className="text-center mb-20">
//               <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full backdrop-blur-sm mb-6">
//                 <Code className="text-blue-600" size={24} />
//                 <span className="text-sm font-bold text-blue-600 dark:text-blue-400">WHAT I KNOW</span>
//               </div>
//               <h2 className="text-6xl font-black bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
//                 Skills & Expertise
//               </h2>
//             </div>

//             <div className="space-y-16">
//               {Object.entries(skills).map(([category, skillList], catIndex) => (
//                 <div key={category} className="space-y-6" style={{ animationDelay: `${catIndex * 100}ms` }}>
//                   <h3 className="text-3xl font-bold capitalize bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-4">
//                     {category === 'frontend' && <Code size={32} className="text-blue-600" />}
//                     {category === 'backend' && <Layers size={32} className="text-green-600" />}
//                     {category === 'database' && <Database size={32} className="text-purple-600" />}
//                     {category === 'tools' && <Award size={32} className="text-orange-600" />}
//                     {category}
//                   </h3>
                  
//                   <div className="grid md:grid-cols-2 gap-6">
//                     {skillList.map((skill, index) => (
//                       <div 
//                         key={skill.name}
//                         className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
//                         style={{ animationDelay: `${index * 50}ms` }}
//                       >
//                         <div className="flex justify-between items-center mb-3">
//                           <span className="font-bold text-lg text-gray-800 dark:text-gray-200">{skill.name}</span>
//                           <span className="text-sm font-bold text-purple-600 dark:text-purple-400">{skill.level}%</span>
//                         </div>
//                         <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//                           <div 
//                             className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-x-105`}
//                             style={{ 
//                               width: visibleSections.skills ? `${skill.level}%` : '0%',
//                               transitionDelay: `${index * 100}ms`
//                             }}
//                           />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Projects Section */}
//         <section id="projects" className="relative py-32 px-4 sm:px-6 lg:px-8">
//           <div className={`max-w-7xl mx-auto transition-all duration-1000 delay-400 ${visibleSections.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
//             <div className="text-center mb-20">
//               <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full backdrop-blur-sm mb-6">
//                 <Rocket className="text-orange-600" size={24} />
//                 <span className="text-sm font-bold text-orange-600 dark:text-orange-400">MY WORK</span>
//               </div>
//               <h2 className="text-6xl font-black bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
//                 Featured Projects
//               </h2>
//             </div>

//             <div className="grid md:grid-cols-2 gap-8">
//               {projects.map((project, index) => (
//                 <div
//                   key={index}
//                   className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500"
//                   style={{ animationDelay: `${index * 150}ms` }}
//                 >
//                   <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
//                   <div className="p-8 relative z-10">
//                     <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
//                       {project.icon}
//                     </div>

//                     <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
//                       {project.title}
//                     </h3>
                    
//                     <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
//                       {project.description}
//                     </p>
                    
//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {project.tech.map((tech) => (
//                         <span 
//                           key={tech} 
//                           className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 rounded-xl text-sm font-semibold border border-blue-200 dark:border-blue-800 transform hover:scale-110 transition-transform duration-300"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
                    
//                     <div className="flex gap-4">
//                       <button onClick={()=> window.open(project.website, "_blank") } className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
//                         <ExternalLink size={20} /> {project.website}
//                         <span>Live Demo</span>
//                       </button>
//                       <button  onClick={()=> window.open(project.gitcode, "_blank")}  className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-300">
//                         <Github size={20} />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Experience Section */}
//         <section id="experience" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/30">
//           <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-500 ${visibleSections.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
//             <div className="text-center mb-20">
//               <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm mb-6">
//                 <Briefcase className="text-purple-600" size={24} />
//                 <span className="text-sm font-bold text-purple-600 dark:text-purple-400">MY JOURNEY</span>
//               </div>
//               <h2 className="text-6xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6">
//                 Work Experience
//               </h2>
//             </div>

//             <div className="relative">
//               <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
              
//               <div className="relative pl-24 space-y-12">
//                 <div className="group">
//                   <div className="absolute left-4 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-4 border-white dark:border-gray-900 shadow-xl transform group-hover:scale-125 transition-all duration-300"></div>
                  
//                   <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-300">
//                     <div className="flex flex-wrap justify-between items-start mb-4">
//                       <div>
//                         <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
//                           Frontend & Full Stack Developer
//                         </h3>
//                         <p className="text-xl font-semibold text-purple-600 dark:text-purple-400">Freelance / Project-Based</p>
//                       </div>
//                       <span className="px-6 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full text-sm font-bold shadow-lg">
//                         2023 - Present
//                       </span>
//                     </div>
                    
//                     <div className="space-y-3 mt-6">
//                       {[
//                         "Enthusiastic Frontend Developer with 1 year of hands-on experience in building responsive, user-friendly web applications using React.js, Node.js, Express.js, SQLite, and MongoDB.",
//                          "Skilled in developing RESTful APIs.", "Implementing JWT authentication.",
//                          "Integrating frontend interfaces with backend services.",
//                          "Adept at creating reusable UI components, optimizing performance, and collaborating in Agile teams to deliver high-quality, scalable applications.",
//                         "Passionate about contributing to company growth, learning emerging technologies like Next.js, Tailwind CSS, and AWS, and driving impactful results through clean, efficient code.",
//                         'Developed and deployed 15+ full-stack production applications using MERN stack.',
//                         'Implemented real-time features with Socket.io and WebSocket protocols.',
//                         'Achieved 40% performance improvement through code optimization',
//                         'Led Git/GitHub workflows and conducted comprehensive code reviews',
//                         'Integrated secure JWT authentication and RESTful API architecture'
//                       ].map((item, i) => (
//                         <div key={i} className="flex items-start gap-4 group/item">
//                           <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mt-2 transform group-hover/item:scale-150 transition-all duration-300"></div>
//                           <p className="text-gray-700 dark:text-gray-300 flex-1 group-hover/item:text-purple-600 dark:group-hover/item:text-purple-400 transition-colors duration-300">
//                             {item}
//                           </p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Education Section */}
//         <section id="education" className="relative py-32 px-4 sm:px-6 lg:px-8">
//           <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-600 ${visibleSections.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
//             <div className="text-center mb-20">
//               <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full backdrop-blur-sm mb-6">
//                 <GraduationCap className="text-blue-600" size={24} />
//                 <span className="text-sm font-bold text-blue-600 dark:text-blue-400">ACADEMIC BACKGROUND</span>
//               </div>
//               <h2 className="text-6xl font-black bg-gradient-to-r from-blue-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-6">
//                 Education
//               </h2>
//             </div>

//             <div className="relative group">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 to-teal-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
//               <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-10 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
//                 <div className="flex flex-wrap justify-between items-start mb-6">
//                   <div className="flex-1">
//                     <div className="flex items-center gap-4 mb-3">
//                       <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white shadow-xl transform group-hover:rotate-12 transition-all duration-500">
//                         <GraduationCap size={32} />
//                       </div>
//                       <div>
//                         <h3 className="text-3xl font-black text-gray-900 dark:text-gray-100">Bachelor of Science</h3>
//                         <p className="text-xl text-blue-600 dark:text-blue-400 font-bold">Computer Science</p>
//                       </div>
//                     </div>
//                     <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 ml-20">
//                       Rajiv Gandhi Institute of Management and Science Technology
//                     </p>
//                   </div>
                  
//                   <div className="text-right space-y-2">
//                     <p className="text-lg font-semibold text-gray-600 dark:text-gray-400">2017 - 2020</p>
//                     <div className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-2xl font-black text-2xl shadow-xl">
//                       CGPA: 8.32/10
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/50 dark:to-green-950/50 rounded-2xl border border-blue-200 dark:border-blue-800">
//                   <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//                     <span className="font-bold text-blue-600">Key Highlights:</span> Comprehensive coursework in Computer Science, 
//                     Web Development, Data Structures, Algorithms, and Database Management. Active participant in coding 
//                     competitions and technical workshops. Developed strong foundation in software engineering principles 
//                     and modern development practices.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-pink-50/30 to-transparent dark:via-pink-950/30">
//           <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-700 ${visibleSections.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
//             <div className="text-center mb-20">
//               <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full backdrop-blur-sm mb-6">
//                 <Mail className="text-green-600" size={24} />
//                 <span className="text-sm font-bold text-green-600 dark:text-green-400">LET'S CONNECT</span>
//               </div>
//               <h2 className="text-6xl font-black bg-gradient-to-r from-green-600 via-green-600 to-orange-600 bg-clip-text text-transparent mb-6">
//                 Get In Touch
//               </h2>
//               <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//                 Have a project in mind? Let's collaborate and build something amazing together!
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-12">
//               <div className="space-y-6">
//                 {[
//                   { icon: <Mail size={28} />, title: 'Email', value: 'bavirisettidvramana@gmail.com', link: 'mailto:bavirisettidvramana@gmail.com', gradient: 'from-blue-500 to-cyan-500' },
//                   { icon: <Phone size={28} />, title: 'Phone', value: '+91 93909 19698', link: 'tel:+919390919698', gradient: 'from-green-500 to-teal-500' },
//                   { icon: <MapPin size={28} />, title: 'Location', value: 'Vanepudi, kakinada, Ap,India', link: '#', gradient: 'from-purple-500 to-pink-500' }
//                 ].map((item, index) => (
//                   <div 
//                     key={index}
//                     className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-6 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
//                   >
//                     <div className="flex items-center gap-6">
//                       <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
//                         {item.icon}
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-1">{item.title}</h3>
//                         <a href={item.link} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
//                           {item.value}
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 ))}

//                 <div className="flex gap-4 pt-6">
//                   {[
//                     { icon: <Github size={28} />, link: 'https://github.com/dattavenkataramana', gradient: 'from-gray-700 to-gray-900' },
//                     { icon: <Linkedin size={28} />, link: 'https://linkedin.com/in/dattavenkataramana/', gradient: 'from-blue-600 to-blue-800' }
//                   ].map((social, index) => (
//                     <a
//                       key={index}
//                       href={social.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`flex-1 h-20 rounded-2xl bg-gradient-to-br ${social.gradient} flex items-center justify-center text-white shadow-xl hover:shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-300`}
//                     >
//                       {social.icon}
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
//                 <div className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">Your Name</label>
//                     <input
//                       type="text"
//                       value={formData.name}
//                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                       className="w-full px-6 py-4 rounded-2xl border-2 border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 focus:ring-4 focus:ring-purple-500/50 focus:border-purple-600 outline-none transition-all duration-300 text-gray-900 dark:text-gray-100"
//                       placeholder="John Doe"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">Your Email</label>
//                     <input
//                       type="email"
//                       value={formData.email}
//                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                       className="w-full px-6 py-4 rounded-2xl border-2 border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 focus:ring-4 focus:ring-purple-500/50 focus:border-purple-600 outline-none transition-all duration-300 text-gray-900 dark:text-gray-100"
//                       placeholder="john@example.com"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">Your Message</label>
//                     <textarea
//                       value={formData.message}
//                       onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                       rows="5"
//                       className="w-full px-6 py-4 rounded-2xl border-2 border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 focus:ring-4 focus:ring-purple-500/50 focus:border-purple-600 outline-none transition-all duration-300 resize-none text-gray-900 dark:text-gray-100"
//                       placeholder="Tell me about your project..."
//                     ></textarea>
//                   </div>
                  
//                   <button
//                     onClick={handleSubmit}
//                     className="group w-full px-8 py-5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden"
//                   >
//                     <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//                     <Send size={24} />
//                     <span>Send Message</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="relative py-12 px-4 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white">
//           <div className="max-w-7xl mx-auto text-center space-y-4">
//             <div className="flex justify-center items-center gap-3 mb-4">
//               <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-black shadow-xl">
//                 DB
//               </div>
//               <span className="text-2xl font-black">Dattavenkataramana Bavirisetti</span>
//             </div>
            
//             <p className="text-gray-400">
//               © 2025 Dattavenkataramana Bavirisetti.  
//             </p>
            
//             <p className="text-sm text-gray-500">
//               Address<span className="text-red-500 animate-pulse">❤</span>1-14, vannepudi, kakinada, Andra Pradesh, India.
//             </p>
            
//             <div className="flex justify-center gap-6 pt-4">
//               {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item.toLowerCase())}
//                   className="text-gray-400 hover:text-white transition-colors duration-300"
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </footer>

//         <style>{`
//           @keyframes gradient-x {
//             0%, 100% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//           }
//           .animate-gradient-x {
//             background-size: 200% 200%;
//             animation: gradient-x 3s ease infinite;
//           }
//           @keyframes blink {
//             0%, 100% { opacity: 1; }
//             50% { opacity: 0; }
//           }
//           .animate-blink {
//             animation: blink 1s infinite;
//           }
//           @keyframes slide-down {
//             from {
//               opacity: 0;
//               transform: translateY(-20px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
//           .animate-slide-down {
//             animation: slide-down 0.3s ease-out;
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect, useRef } from 'react';

import { Menu, X, Moon, Sun, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download, Send, Code, Database, Layers, Award, Briefcase, GraduationCap, User, Rocket, Zap, Star, ChevronDown, Cloud, ArrowUp } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/DattavenkataramanaResume.pdf'; // Ensure the resume file is in the public directory
    link.download = 'DattavenkataramanaResume.pdf';   
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fullText = "Frontend & Full Stack Developer";
  const sectionRefs = useRef({});

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 120); // Slightly slower for better readability
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
      setShowBackToTop(newScrollY > 300);
      
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      // Check visibility of sections for animations
      const newVisibleSections = {};
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          newVisibleSections[section] = rect.top < window.innerHeight * 0.75;
        }
      });
      setVisibleSections(newVisibleSections);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skills = {
    frontend: [
      { name: 'React.js', level: 100, color: 'from-blue-500 to-cyan-500' },
      { name: 'JavaScript', level: 100, color: 'from-yellow-500 to-orange-500' },
      { name: 'Bootstrap', level: 100, color: 'from-purple-500 to-pink-500' },
      { name: 'HTML5', level: 100, color: 'from-orange-500 to-red-500' },
      { name: 'CSS3', level: 100, color: 'from-blue-400 to-blue-600' },
      { name: 'Tailwind CSS', level: 100, color: 'from-teal-400 to-teal-600' },
      { name: 'Redux', level: 100, color: 'from-purple-500 to-purple-700' }
    ],
    backend: [
      { name: 'Node.js', level:100, color: 'from-green-500 to-green-700' },
      { name: 'Express.js', level: 100, color: 'from-gray-600 to-gray-800' },
      { name: 'RESTful APIs', level: 100, color: 'from-indigo-500 to-indigo-700' },
      { name: 'JWT Auth', level: 100, color: 'from-yellow-500 to-orange-500' },
      { name: 'OAuth, Middlewares', level: 100, color: 'from-amber-500 to-yellow-500' },
      { name: 'Python', level: 100, color: 'from-blue-500 to-purple-500' } 
    ],    
    database: [
      { name: 'MongoDB', level: 100, color: 'from-green-600 to-green-800' },
      { name: 'SQLite', level: 100, color: 'from-blue-500 to-blue-700' }
    ],
    tools: [
      { name: 'Git', level: 100, color: 'from-red-500 to-orange-600' },
      { name: 'GitHub', level: 100, color: 'from-gray-700 to-gray-900' },
      { name: 'Vite', level: 100, color: 'from-purple-500 to-pink-500' },
      { name: 'Visual Studio Code', level: 100, color: 'from-blue-500 to-indigo-600' },
      { name: 'Postman', level: 100, color: 'from-orange-500 to-red-500' },
      { name: 'Render', level: 100, color: 'from-teal-500 to-cyan-500' },
      { name: 'Netlify', level: 100, color: 'from-green-500 to-emerald-500' },
      { name: 'Vercel', level: 100, color: 'from-gray-500 to-slate-600' }  
    ],
    DevelopmentPractices: [
      { name: 'Agile Methodologies', level: 100, color: 'from-blue-500 to-blue-700' },
      { name: 'Version Control (Git)', level: 100, color: 'from-green-500 to-green-700' },
      { name: 'CI/CD Pipelines', level: 60, color: 'from-purple-500 to-purple-700' },
      { name: 'Code Reviews & Debugging', level: 100, color: 'from-yellow-500 to-yellow-700' },
      { name: 'Unit Testing (Jest)', level: 100, color: 'from-indigo-500 to-violet-500' }
    ],
    CloudPlatforms: [
      { name: 'AWS(EC2, S3) SSH, HTTP/HTTPS, Nginx, pm2', level: 100, color: 'from-orange-500 to-red-500' }
    ]
  };

  const projects = [
    {
      title: 'Job Board Application',
      description: 'Real-time job posting platform with advanced search, user authentication, and admin dashboard. Built with modern tech stack for optimal performance.',
      tech: ['React.js', 'Node.js', 'SQLite', 'JWT', 'Express.js'],
      gradient: 'from-blue-500 via-purple-500 to-pink-500',
      icon: <Briefcase size={32} />,
      website: 'https://jb.xypherasystems.com/',
      gitcode: "https://github.com/dattavenkataramana/jobboardapplication"
    },
    {
      title: 'Async Operations Portal',
      description: 'Event-driven portal featuring real-time validations, asynchronous data processing, and dynamic UI components for seamless user interactions.',
      tech: ['React.js', 'MongoDB', 'Node.js', 'Express.js'],
      gradient: 'from-green-500 via-teal-500 to-cyan-500',
      icon: <Zap size={32} />,
      website: 'https://rad-piroshki-dc45bd.netlify.app/',
      gitcode: "https://github.com/dattavenkataramana/async-operations-portal" // Assumed specific repo; update if needed
    },
    {
      title: 'E-Commerce Web App',
      description: 'Full-stack shopping platform with product catalog, cart management, secure payments, and JWT authentication for enhanced security.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind'],
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      icon: <Rocket size={32} />,
      website: 'https://dattaanimationreactform.netlify.app/',
      gitcode: "https://github.com/dattavenkataramana/ecommerce-app" // Assumed specific repo; update if needed
    },
    {
      title: 'Chat Application',
      description: 'Interactive chat application with live messaging, presence indicators, typing notifications, and persistent message history using Socket.io.',
      tech: ['React.js', 'Socket.io', 'MongoDB', 'Node.js'],
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      icon: <Star size={32} />,
      website: '', // Placeholder; update with actual
      gitcode: "" // Placeholder; update with actual
    }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Simulate API call
      setTimeout(() => {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormSubmitted(false), 3000);
      }, 500);
    } else {
      alert('Please fill in all fields.');
    }
  };

  const parallaxOffset = scrollY * 0.5;

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950 text-gray-900 dark:text-gray-100 transition-all duration-500 overflow-x-hidden">
        
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"
            style={{ 
              top: `${20 + scrollY * 0.1}%`, 
              left: `${10 + mousePosition.x * 0.01}%`,
              transform: 'translate(-50%, -50%)',
              transition: 'all 0.3s ease-out'
            }}
          />
          <div 
            className="absolute w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl"
            style={{ 
              bottom: `${10 + scrollY * 0.05}%`, 
              right: `${10 + mousePosition.y * 0.01}%`,
              transform: 'translate(50%, 50%)',
              transition: 'all 0.3s ease-out'
            }}
          />
          <div 
            className="absolute w-64 h-64 bg-pink-400/10 dark:bg-pink-500/10 rounded-full blur-3xl"
            style={{ 
              top: `${50 - scrollY * 0.08}%`, 
              right: `${20 + mousePosition.x * 0.005}%`,
              transform: 'translate(50%, -50%)',
              transition: 'all 0.3s ease-out'
            }}
          />
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg z-50 border-b border-gray-200/50 dark:border-gray-700/50" role="navigation" aria-label="Main navigation">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div 
                className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse"
                style={{ animationDuration: '3s' }}
                role="banner"
              >
                DVR.dev
              </div>
              
              <div className="hidden md:flex space-x-1">
                {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      activeSection === item.toLowerCase() 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    aria-current={activeSection === item.toLowerCase() ? 'page' : undefined}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-blue-500 dark:to-purple-600 text-white hover:shadow-xl transform hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="md:hidden p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Toggle mobile menu"
                  aria-expanded={menuOpen}
                >
                  {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 animate-slide-down">
              <div className="px-4 py-4 space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-6 py-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 mt-[50px]" role="main">
          <div 
            className="max-w-7xl mx-auto text-center"
            style={{ transform: `translateY(-${parallaxOffset}px)` }}
          >
            <div className={`space-y-8 transition-all duration-1000 ${visibleSections.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className={`relative inline-block group`}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
                <div className="relative w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-5xl font-black shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  DB
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x leading-tight">
                  Dattavenkataramana
                  <br />
                  <span className="text-4xl sm:text-5xl md:text-5xl">Bavirisetti</span>
                </h1>
                
                <div className="text-1xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 h-12 sm:h-16 flex items-center justify-center">
                  {typedText}<span className="animate-blink text-purple-600">|</span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm">
                    <MapPin size={20} className="text-blue-600" />
                    <span>Vannepudi, India</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm">
                    <Briefcase size={20} className="text-purple-600" />
                    <span>1+ Year Experience</span>
                  </div>
                </div>

                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                  Crafting exceptional digital experiences with cutting-edge technologies. 
                  Passionate about building scalable, performant web applications that make a difference.
                </p>

                <div className="flex flex-wrap justify-center gap-6 pt-8">
                  <button 
                    onClick={handleDownload} 
                    className="group px-8 sm:px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-bold text-base sm:text-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center gap-3 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Download resume"
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <Download size={24} />
                    <span>Download Resume</span>
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="group px-8 sm:px-10 py-4 border-4 border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400 rounded-2xl font-bold text-base sm:text-lg hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transform hover:scale-110 transition-all duration-300 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    aria-label="Scroll to contact section"
                  >
                    <Send size={24} />
                    <span>Let's Talk</span>
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('about')}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Scroll to about section"
            >
              <ChevronDown size={40} className="text-purple-600 dark:text-purple-400" />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
          <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-200 ${visibleSections.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-sm mb-6">
                <User className="text-purple-600" size={24} />
                <span className="text-sm font-bold text-purple-600 dark:text-purple-400">WHO AM I</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                About Me
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 sm:p-12 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transform group-hover:scale-105 transition-all duration-500">
                  <div className="w-32 sm:w-48 h-32 sm:h-48 mx-auto rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl sm:text-6xl font-black shadow-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500">
                    DB
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 transform hover:scale-105 transition-all duration-300">
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I'm a <span className="font-bold text-purple-600">passionate Frontend and Full Stack Developer</span> with 1+ year of hands-on experience 
                    in crafting dynamic, responsive web applications that users love.
                  </p>
                </div>

                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 transform hover:scale-105 transition-all duration-300">
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    My expertise spans the <span className="font-bold text-blue-600">MERN stack</span>, with a laser focus on creating 
                    intuitive user interfaces and rock-solid backend architectures that scale.
                  </p>
                </div>

                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 transform hover:scale-105 transition-all duration-300">
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I thrive on solving complex problems and building <span className="font-bold text-pink-600">production-ready applications</span> that 
                    make a real impact. Let's create something amazing together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/30">
          <div className={`max-w-7xl mx-auto transition-all duration-1000 delay-300 ${visibleSections.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="text-center mb-12 sm:mb-20">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full backdrop-blur-sm mb-6">
                <Code className="text-blue-600" size={24} />
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">WHAT I KNOW</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Skills & Expertise
              </h2>
            </div>

            <div className="space-y-12 sm:space-y-16">
              {Object.entries(skills).map(([category, skillList], catIndex) => (
                <div key={category} className="space-y-6" style={{ animationDelay: `${catIndex * 100}ms` }}>
                  <h3 className="text-2xl sm:text-3xl font-bold capitalize bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center justify-center sm:justify-start gap-4">
                    {category === 'frontend' && <Code size={32} className="text-blue-600" />}
                    {category === 'backend' && <Layers size={32} className="text-green-600" />}
                    {category === 'database' && <Database size={32} className="text-purple-600" />}
                    {category === 'tools' && <Award size={32} className="text-orange-600" />}
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {skillList.map((skill, index) => (
                      <div 
                        key={skill.name}
                        className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-bold text-base sm:text-lg text-gray-800 dark:text-gray-200">{skill.name}</span>
                          <span className="text-sm font-bold text-purple-600 dark:text-purple-400">{skill.level}%</span>
                        </div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-x-105`}
                            style={{ 
                              width: visibleSections.skills ? `${skill.level}%` : '0%',
                              transitionDelay: `${index * 100}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
          <div className={`max-w-7xl mx-auto transition-all duration-1000 delay-400 ${visibleSections.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="text-center mb-12 sm:mb-20">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full backdrop-blur-sm mb-6">
                <Rocket className="text-orange-600" size={24} />
                <span className="text-sm font-bold text-orange-600 dark:text-orange-400">MY WORK</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Featured Projects
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-orange-500"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="p-6 sm:p-8 relative z-10">
                    <div className={`w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white mb-4 sm:mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                      {project.icon}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 rounded-xl text-xs sm:text-sm font-semibold border border-blue-200 dark:border-blue-800 transform hover:scale-110 transition-transform duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 sm:gap-4">
                      {project.website && (
                        <button 
                          onClick={() => window.open(project.website, "_blank")} 
                          className={`flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                          <span className="hidden sm:inline">Live Demo</span>
                          <span className="sm:hidden">Demo</span>
                        </button>
                      )}
                      <button 
                        onClick={() => window.open(project.gitcode, "_blank")} 
                        className="px-4 sm:px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        aria-label={`View GitHub repo for ${project.title}`}
                      >
                        <Github size={16} className="sm:w-5 sm:h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/30">
          <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-500 ${visibleSections.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="text-center mb-12 sm:mb-20">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm mb-6">
                <Briefcase className="text-purple-600" size={24} />
                <span className="text-sm font-bold text-purple-600 dark:text-purple-400">MY JOURNEY</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6">
                Work Experience
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
              
              <div className="relative pl-16 sm:pl-24 space-y-8 sm:space-y-12">
                <div className="group">
                  <div className="absolute left-2 sm:left-4 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-4 border-white dark:border-gray-900 shadow-xl transform group-hover:scale-125 transition-all duration-300"></div>
                  
                  <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                          Frontend & Full Stack Developer
                        </h3>
                        <p className="text-lg sm:text-xl font-semibold text-purple-600 dark:text-purple-400">Freelance / Project-Based</p>
                      </div>
                      <span className="px-4 sm:px-6 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full text-sm font-bold shadow-lg">
                        2023 - Present
                      </span>
                    </div>
                    
                    <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                      {[
                        "Enthusiastic Frontend Developer with 1 year of hands-on experience in building responsive web applications using React.js, Node.js, Express.js, SQLite, and MongoDB.",
                        "Skilled in developing RESTful APIs and implementing JWT authentication.",
                        "Integrating frontend interfaces with backend services and creating reusable UI components.",
                        "Adept at optimizing performance and collaborating in Agile teams to deliver scalable applications.",
                        "Passionate about learning emerging technologies like Next.js, Tailwind CSS, and AWS.",
                        "Developed and deployed 15+ full-stack production applications using MERN stack.",
                        "Implemented real-time features with Socket.io and achieved 40% performance improvement.",
                        "Led Git/GitHub workflows, conducted code reviews, and integrated secure JWT architecture."
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 sm:gap-4 group/item">
                          <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mt-2 transform group-hover/item:scale-150 transition-all duration-300 flex-shrink-0"></div>
                          <p className="text-gray-700 dark:text-gray-300 flex-1 text-sm sm:text-base group-hover/item:text-purple-600 dark:group-hover/item:text-purple-400 transition-colors duration-300">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
          <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-600 ${visibleSections.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="text-center mb-12 sm:mb-20">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full backdrop-blur-sm mb-6">
                <GraduationCap className="text-blue-600" size={24} />
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">ACADEMIC BACKGROUND</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black bg-gradient-to-r from-blue-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-6">
                Education
              </h2>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 to-teal-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl transform group-hover:scale-105 transition-all duration-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500">
                <div className="flex flex-wrap justify-between items-start mb-4 sm:mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3">
                      <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white shadow-xl transform group-hover:rotate-12 transition-all duration-500">
                        <GraduationCap size={24} className="sm:w-8 sm:h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-gray-100">Bachelor of Science</h3>
                        
                      </div>
                    </div>
                    <p className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 ml-0 sm:ml-20">
                      Rajiv Gandhi Institute of Management and Science Technology
                    </p>
                  </div>
                  
                  <div className="text-right space-y-2">
                    <p className="text-lg font-semibold text-gray-600 dark:text-gray-400">2017 - 2020</p>
                    <div className="px-4 sm:px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-2xl font-black text-xl sm:text-2xl shadow-xl">
                      CGPA: 8.32/10
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/50 dark:to-green-950/50 rounded-2xl border border-blue-200 dark:border-blue-800">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                    <span className="font-bold text-blue-600">Key Highlights:</span> Comprehensive coursework in Computer Science, 
                    Web Development, Data Structures, Algorithms, and Database Management. Active participant in coding 
                    competitions and technical workshops. Developed strong foundation in software engineering principles 
                    and modern development practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-pink-50/30 to-transparent dark:via-pink-950/30">
          <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-700 ${visibleSections.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="text-center mb-12 sm:mb-20">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full backdrop-blur-sm mb-6">
                <Mail className="text-green-600" size={24} />
                <span className="text-sm font-bold text-green-600 dark:text-green-400">LET'S CONNECT</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black bg-gradient-to-r from-green-600 via-green-600 to-orange-600 bg-clip-text text-transparent mb-6">
                Get In Touch
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Have a project in mind? Let's collaborate and build something amazing together!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <div className="space-y-4 sm:space-y-6">
                {[
                  { icon: <Mail size={24} className="sm:w-7 sm:h-7" />, title: 'Email', value: 'bavirisettidvramana@gmail.com', link: 'mailto:bavirisettidvramana@gmail.com', gradient: 'from-blue-500 to-cyan-500' },
                  { icon: <Phone size={24} className="sm:w-7 sm:h-7" />, title: 'Phone', value: '+91 93909 19698', link: 'tel:+919390919698', gradient: 'from-green-500 to-teal-500' },
                  { icon: <MapPin size={24} className="sm:w-7 sm:h-7" />, title: 'Location', value: 'Vanepudi, Kakinada, AP, India', link: '#', gradient: 'from-purple-500 to-pink-500' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-4 sm:p-6 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-500"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className={`w-12 sm:w-16 h-12 sm:h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-gray-100 mb-1">{item.title}</h3>
                        <a 
                          href={item.link} 
                          className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base"
                          aria-label={`Contact via ${item.title}`}
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex gap-3 sm:gap-4 pt-4 sm:pt-6">
                  {[
                    { icon: <Github size={24} className="sm:w-7 sm:h-7" />, link: 'https://github.com/dattavenkataramana', gradient: 'from-gray-700 to-gray-900' },
                    { icon: <Linkedin size={24} className="sm:w-7 sm:h-7" />, link: 'https://linkedin.com/in/dattavenkataramana/', gradient: 'from-blue-600 to-blue-800' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 h-16 sm:h-20 rounded-2xl bg-gradient-to-br ${social.gradient} flex items-center justify-center text-white shadow-xl hover:shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      aria-label={`Visit ${index === 0 ? 'GitHub' : 'LinkedIn'} profile`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" role="form" aria-label="Contact form">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 sm:px-6 py-4 rounded-2xl border-2 border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 focus:ring-4 focus:ring-purple-500/50 focus:border-purple-600 outline-none transition-all duration-300 text-gray-900 dark:text-gray-100 text-base"
                      placeholder="John Doe"
                      required
                      aria-required="true"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">Your Email</label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 sm:px-6 py-4 rounded-2xl border-2 border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 focus:ring-4 focus:ring-purple-500/50 focus:border-purple-600 outline-none transition-all duration-300 text-gray-900 dark:text-gray-100 text-base"
                      placeholder="john@example.com"
                      required
                      aria-required="true"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">Your Message</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows="4"
                      className="w-full px-4 sm:px-6 py-4 rounded-2xl border-2 border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 focus:ring-4 focus:ring-purple-500/50 focus:border-purple-600 outline-none transition-all duration-300 resize-none text-gray-900 dark:text-gray-100 text-base"
                      placeholder="Tell me about your project..."
                      required
                      aria-required="true"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className={`group w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white rounded-2xl font-bold text-base sm:text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-purple-500 ${formSubmitted ? 'bg-green-600' : ''}`}
                    aria-label="Send message"
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    {formSubmitted ? (
                      <>
                        <Send size={24} className="animate-pulse" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send size={24} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-8 sm:py-12 px-4 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <div className="flex justify-center items-center gap-3 mb-4">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-black shadow-xl">
                DB
              </div>
              <span className="text-xl sm:text-2xl font-black">Dattavenkataramana Bavirisetti</span>
            </div>
            
            <p className="text-gray-400 text-sm sm:text-base">
              © 2025 Dattavenkataramana Bavirisetti. All rights reserved.
            </p>
            
            <p className="text-xs sm:text-sm text-gray-500">
              Address<span className="text-red-500 animate-pulse">❤</span>1-14, Vannepudi, Kakinada, Andhra Pradesh, India.
            </p>
            
            <div className="flex justify-center gap-4 sm:gap-6 pt-4 flex-wrap">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-white"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </footer>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={handleBackToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        )}

        <style>{`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 3s ease infinite;
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s infinite;
          }
          @keyframes slide-down {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-slide-down {
            animation: slide-down 0.3s ease-out;
          }
          @media (max-width: 640px) {
            .text-5xl { font-size: 2.25rem; }
            .text-4xl { font-size: 1.875rem; }
            .text-2xl { font-size: 1.5rem; }
          }
        `}</style>
      </div>
    </div>
  );
}