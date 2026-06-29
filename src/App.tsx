import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, 
  Layers, 
  Users, 
  Wind, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X, 
  Check, 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail, 
  Phone, 
  Calendar, 
  ArrowRight,
  Sparkle,
  Locate,
  Volume2
} from 'lucide-react';

// Multi-location setup for interactive Contact and Address system
interface LocationData {
  name: string;
  address: string;
  phone: string;
  hours: string[];
  mapEmbedUrl: string; // Placeholder styling for dark theme map
}

const locations: LocationData[] = [
  {
    name: "Chelsea Flagship",
    address: "154 W 19th St, New York, NY 10011",
    phone: "+1 (212) 555-0190",
    hours: [
      "Monday - Thursday: 5:00 AM - 11:00 PM",
      "Friday: 5:00 AM - 10:00 PM",
      "Saturday - Sunday: 8:00 AM - 9:00 PM"
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.951564756857!2d-74.000721223423!3d40.74108873582885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bea3ce18bb%3A0x600c7764d7df6db6!2s154%20W%2019th%20St%2C%20New%20York%2C%20NY%2010011!5e0!3m2!1sen!2sus!4v1718318400000!5m2!1sen!2sus"
  },
  {
    name: "Astor Place",
    address: "4 Astor Pl, New York, NY 10003",
    phone: "+1 (212) 555-0145",
    hours: [
      "Monday - Thursday: 5:30 AM - 11:00 PM",
      "Friday: 5:30 AM - 10:00 PM",
      "Saturday - Sunday: 7:00 AM - 8:00 PM"
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.2386927357754!2d-73.99368302342331!3d40.73030283621644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599903b71ca3%3A0xa1ea3b35eb6fa80!2s4%20Astor%20Pl%2C%20New%20York%2C%20NY%2010003!5e0!3m2!1sen!2sus!4v1718318400001!5m2!1sen!2sus"
  },
  {
    name: "South Beach Hub",
    address: "1241 Alton Rd, Miami Beach, FL 33139",
    phone: "+1 (305) 555-0130",
    hours: [
      "Monday - Friday: 6:00 AM - 10:00 PM",
      "Saturday - Sunday: 8:00 AM - 8:00 PM"
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.5488126075904!2d-80.14322442377227!3d25.782163977334757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b4eb5f778db1%3A0xa54dedb402bf06bd!2s1241%20Alton%20Rd%2C%20Miami%20Beach%2C%20FL%2033139!5e0!3m2!1sen!2sus!4v1718318400002!5m2!1sen!2sus"
  }
];

export default function App() {
  const [activeLocation, setActiveLocation] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [navScrolled, setNavScrolled] = useState<boolean>(false);
  
  // High fidelity states for waitlist signup
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredLoc, setPreferredLoc] = useState('Chelsea Flagship');
  const [newsletter, setNewsletter] = useState(true);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [invitationCode, setInvitationCode] = useState('');

  // Track window scroll for premium blurring header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleApplyMembership = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;
    
    setIsSubmitting(true);
    
    // Simulate premium validation & invitation ticket generation
    setTimeout(() => {
      const uniqueCode = `DBG-${Math.floor(1000 + Math.random() * 9000)}-${preferredLoc.split(' ')[0].toUpperCase()}`;
      setInvitationCode(uniqueCode);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setIsSubmitted(false);
  };

  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen relative overflow-hidden font-sans selection:bg-gold-accent selection:text-black">
      
      {/* Design Theme: Ambient top gold glow gradient */}
      <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(circle_at_50%_-20%,_#C9A84C_0%,_transparent_70%)]"></div>

      {/* Background Lighting Concept Art: Ambient pulsing neon/gold nightclub glow layout */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-accent/5 rounded-full blur-[120px] pointer-events-none animate-pulse duration-10000"></div>
      <div className="absolute top-[30vh] right-[10%] w-[600px] h-[600px] bg-gold-accent/4 rounded-full blur-[140px] pointer-events-none animate-pulse duration-[8000ms]"></div>
      <div className="absolute bottom-[20vh] left-[5%] w-[450px] h-[450px] bg-red-950/15 rounded-full blur-[110px] pointer-events-none animate-pulse duration-[12000ms]"></div>

      {/* FIXED NAVIGATION */}
      <header 
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          navScrolled 
            ? 'bg-bg-dark/95 backdrop-blur-md border-b border-white/[0.06] py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo Brand / Icon */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gold-accent flex items-center justify-center rounded-sm transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(201,168,76,0.3)]">
              <span className="font-bebas text-black text-2xl font-bold tracking-tighter">DB</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bebas text-2xl tracking-widest text-white leading-none">DAVID BARTON</span>
              <span className="text-[10px] tracking-[0.25em] text-gold-accent font-medium leading-none mt-1">G Y M</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#experience" className="text-gray-400 hover:text-gold-accent transition-colors duration-200 text-sm font-medium tracking-wide">VIBE</a>
            <a href="#facility" className="text-gray-400 hover:text-gold-accent transition-colors duration-200 text-sm font-medium tracking-wide">FACILITY</a>
            <a href="#classes" className="text-gray-400 hover:text-gold-accent transition-colors duration-200 text-sm font-medium tracking-wide">CLASSES</a>
            <a href="#testimonials" className="text-gray-400 hover:text-gold-accent transition-colors duration-200 text-sm font-medium tracking-wide">TESTIMONIALS</a>
            <a href="#membership" className="text-gray-400 hover:text-gold-accent transition-colors duration-200 text-sm font-medium tracking-wide">JOIN</a>
            <a href="#visit" className="text-gray-400 hover:text-gold-accent transition-colors duration-200 text-sm font-medium tracking-wide">VISIT</a>
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:block">
            <a 
              href="#membership" 
              className="px-6 py-2.5 bg-black hover:bg-gold-accent text-gold-accent hover:text-black border border-gold-accent text-xs font-bold tracking-wider uppercase rounded-sm transition-all duration-300 gold-border-glow hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]"
            >
              MEMBERSHIP PASS
            </a>
          </div>

          {/* Mobile Menu Action */}
          <button 
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle mobile Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-45 bg-bg-dark/98 backdrop-blur-lg flex flex-col justify-center px-8 pt-24"
          >
            <nav className="flex flex-col space-y-6 text-center">
              <a 
                href="#experience" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-bebas text-3xl tracking-widest text-white hover:text-gold-accent transition-colors"
              >
                THE VIBE
              </a>
              <a 
                href="#facility" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-bebas text-3xl tracking-widest text-white hover:text-gold-accent transition-colors"
              >
                THE FACILITY
              </a>
              <a 
                href="#classes" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-bebas text-3xl tracking-widest text-white hover:text-gold-accent transition-colors"
              >
                SIGNATURE CLASSES
              </a>
              <a 
                href="#testimonials" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-bebas text-3xl tracking-widest text-white hover:text-gold-accent transition-colors"
              >
                REVIEWS
              </a>
              <a 
                href="#membership" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-bebas text-3xl tracking-widest text-white hover:text-gold-accent transition-colors"
              >
                SECURE PLACE
              </a>
              <a 
                href="#visit" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-bebas text-3xl tracking-widest text-white hover:text-gold-accent transition-colors"
              >
                VISIT THE CLUBS
              </a>

              <div className="pt-8">
                <a 
                  href="#membership"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-block w-full py-4 bg-gold-accent text-black font-bold uppercase tracking-widest text-sm rounded-sm transition-all duration-300 shadow-[0_0_15px_rgba(201,168,76,0.3)]"
                >
                  SECURE AN INVITATION
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>


      {/* SECTION 1: HERO CONTAINER */}
      <section 
        id="hero" 
        className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Extreme Dramatic Gradient & Contrast Graphic Layer background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(13,13,13,0.1)_0%,rgba(13,13,13,1)_85%)] z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/70 z-10 pointer-events-none"></div>
        
        {/* Custom Visual Vector Background styling replicating a dynamic fitness club pulse */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-color-dodge">
          <svg className="w-full h-full min-w-max" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800">
            <defs>
              <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#C9A84C" stopOpacity="0.0" />
                <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="none" />
            <path d="M-100,500 L1600,600 M-100,200 L1600,450" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="10 15" />
            <path d="M-100,350 L1600,300" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.1" />
            <circle cx="720" cy="400" r="280" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.08" strokeDasharray="5 10" fill="none" />
            <circle cx="720" cy="400" r="450" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.05" fill="none" />
          </svg>
        </div>

        {/* Ambient background shadow video frame replication - gorgeous high-fashion overlay */}
        <div className="absolute inset-0 z-0 bg-cover bg-center mix-blend-screen opacity-[0.22]" style={{ backgroundImage: "linear-gradient(rgba(13,13,13,0.85), rgba(13,13,13,0.95)), url('https://images.unsplash.com/photo-1540539233-c15141FC9d4D?auto=format&fit=crop&q=80')" }}></div>

        {/* HERO CONTENT */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center pt-20 flex flex-col justify-center items-center h-full">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/[0.02] border border-white/[0.08] mb-6 shadow-md">
            <Sparkle size={12} className="text-gold-accent" />
            <span className="text-xs font-bold tracking-[0.5em] text-gold-accent uppercase">SINCE 1992</span>
          </div>

          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black italic uppercase leading-[0.85] tracking-tighter text-white mb-6 select-none">
            WHERE THE <br />
            <span className="text-outline-white">BEAUTIFUL</span> <br />
            WORK HARD
          </h1>

          <p className="mt-8 text-gray-400 font-light text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed tracking-wide">
            This is not a neighborhood gym. This is an immersive, high-energy temple of results. Designed like a luxury nightclub, engineered for maximum physiological transformation.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center justify-center">
            <a 
              href="#membership" 
              className="group relative px-10 py-4 w-full sm:w-auto bg-gold-accent text-black font-extrabold tracking-widest text-sm uppercase rounded-sm transition-all duration-300 shadow-[0_4px_30px_rgba(201,168,76,0.25)] hover:shadow-[0_0_35px_rgba(201,168,76,0.6)] hover:scale-[1.02]"
            >
              BECOME A MEMBER
              <span className="absolute right-4 top-1/2 -translate-y-1/2 transition-transform group-hover:translate-x-1">
                <ArrowRight size={16} />
              </span>
            </a>
            <a 
              href="#experience" 
              className="px-8 py-4 w-full sm:w-auto border border-white/20 hover:border-gold-accent text-white hover:text-gold-accent font-semibold tracking-widest text-xs uppercase rounded-sm transition-all duration-200"
            >
              EXPLORE THE CLUB VIBE
            </a>
          </div>

          {/* Quick Stats Banner in Hero */}
          <div className="mt-20 grid grid-cols-3 gap-4 md:gap-16 pt-10 border-t border-white/[0.06] w-full max-w-3xl">
            <div className="text-center">
              <span className="block font-bebas text-3xl sm:text-4xl text-gold-accent tracking-widest text-glow">3FLOORS</span>
              <span className="block text-[10px] sm:text-xs tracking-widest text-gray-500 uppercase mt-1">CHELSEA HIGH-RIG</span>
            </div>
            <div className="text-center border-x border-white/[0.06] px-4">
              <span className="block font-bebas text-3xl sm:text-4xl text-white tracking-widest">DARK</span>
              <span className="block text-[10px] sm:text-xs tracking-widest text-gray-500 uppercase mt-1">SIGNATURE ATMOSPHERE</span>
            </div>
            <div className="text-center">
              <span className="block font-bebas text-3xl sm:text-4xl text-gold-accent tracking-widest text-glow">NO WAIT</span>
              <span className="block text-[10px] sm:text-xs tracking-widest text-gray-500 uppercase mt-1">MACHINE OPTIMIZED</span>
            </div>
          </div>
        </div>

        {/* Dynamic scroll down cue indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <span className="text-[9px] tracking-[0.4em] text-gray-500 uppercase mb-2">SCROLL TO DISCOVER</span>
          <div className="w-[1.5px] h-10 bg-white/20 relative rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gold-accent rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      
      {/* SECTION 2: THE DBG EXPERIENCE */}
      <section 
        id="experience" 
        className="py-24 sm:py-32 bg-gradient-to-b from-bg-dark to-black relative border-t border-white/[0.04]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="md:col-span-7 space-y-8">
              <div className="inline-flex items-center space-x-2">
                <div className="h-[1px] w-8 bg-gold-accent"></div>
                <span className="text-xs tracking-[0.3em] font-semibold text-gold-accent uppercase">THE ANATOMY OF DESIRE</span>
              </div>

              <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl tracking-wide uppercase leading-tight">
                AN UNAPOLOGETIC <br />
                HEALTH <span className="text-gold-accent font-bold text-glow">REVOLUTION.</span>
              </h2>

              <p className="text-gray-300 font-light text-base sm:text-lg leading-relaxed tracking-wide">
                David Barton redesigned the modern gym concept from the ground up. By stripping away clinical fluorescent lighting, uninspiring white walls, and repetitive elevator music, we replaced it with a multi-layered, low-light sanctuary. Our dark, dramatic spaces are intentionally engineered to amplify focus, lower self-consciousness, and generate a competitive high-fashion rush.
              </p>

              <div className="bg-[#1A1A1A] p-8 border-l-2 border-gold-accent max-w-xl">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gold-accent mb-3">The Experience</h3>
                <p className="italic font-serif text-lg leading-snug text-gray-200">
                  &ldquo;They make you feel beautiful while you're working out. The low lighting makes you look fantastic and focus entirely on the weights. Truly irreplaceable.&rdquo;
                </p>
                <span className="block mt-4 text-[10px] text-gray-500 uppercase tracking-widest">&mdash; Michael M., Member since 2019</span>
              </div>

              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Step onto the floors and you will notice a rare kind of energy: a serious, highly focused community, motivated by raw physical output and stylistic design. We exist to transport you mentally away from the mundane.
              </p>
            </div>

            {/* Right Interactive Image / Video Frame Art Wrapper */}
            <div className="md:col-span-5 relative">
              <div className="w-full aspect-[4/5] bg-card-dark border border-white/[0.08] relative overflow-hidden rounded-sm shadow-[0_20px_40px_rgba(0,0,0,0.8)] group">
                {/* Simulated club red/gold lighting pulsing inside frame */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.15)_0%,transparent_70%)] opacity-80 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10"></div>
                
                {/* Immersive Dark Gym Aesthetic Art Frame */}
                <img 
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80" 
                  alt="David Barton Gym Vibe" 
                  className="w-full h-full object-cover grayscale brightness-50 transition-all duration-700 group-hover:scale-105 group-hover:brightness-75 group-hover:grayscale-0"
                />

                {/* Text Badge Floating over visual */}
                <div className="absolute bottom-6 left-6 z-20 space-y-1">
                  <span className="text-[10px] tracking-[0.3em] font-semibold text-gold-accent uppercase">CHELSEA INTERIOR VIBE</span>
                  <div className="text-lg font-bebas tracking-wider text-white">THE INTENTIONAL INTENSITY OF DARKNESS</div>
                </div>

                <div className="absolute top-6 right-6 z-20 bg-black/70 border border-white/10 p-2 text-center rounded-sm text-glow">
                  <Volume2 size={16} className="text-gold-accent mx-auto mb-1 animate-bounce" />
                  <span className="text-[8px] tracking-widest text-gray-400 uppercase font-semibold">CLUB SYSTEM</span>
                </div>
              </div>

              {/* Decorative design frame borders */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold-accent/40 pointer-events-none"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-white/10 pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 3: THE FACILITY */}
      <section 
        id="facility" 
        className="py-24 sm:py-32 bg-black border-t border-white/[0.04] relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs tracking-[0.3em] font-semibold text-gold-accent uppercase">THE PHYSICAL PRODUCT</span>
            <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide uppercase">
              NOTHING COMPROMISED. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-accent to-white font-bold text-glow">ULTRA-PREMIUM AMENITIES.</span>
            </h2>
            <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
              Every square inch layout is conceptualized to support real results and exceptional hygiene specs. Wide corridors, multiple floors details and custom machines.
            </p>
          </div>

          {/* FACILITY CARD GRID (6 items requested) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Floor 1 */}
            <div className="bg-card-dark border border-white/[0.06] hover:border-gold-accent/40 p-8 rounded-sm transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group gold-glow-hover">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-accent/[0.03] to-transparent pointer-events-none"></div>
              <div className="w-12 h-12 rounded-sm bg-black border border-white/[0.08] flex items-center justify-center mb-6 text-gold-accent transition-colors duration-300 group-hover:bg-gold-accent group-hover:text-black">
                <Layers size={22} />
              </div>
              <h3 className="font-bebas text-2xl tracking-wider text-white mb-2 uppercase group-hover:text-gold-accent transition-colors">
                Multiple Training Floors
              </h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Gigantic multi-floor configurations. No packed rooms or crowded platforms. Dedicated sections for heavy powerlifting, cardiovascular conditioning, dynamic movement, and selectorized machinery.
              </p>
            </div>

            {/* Floor 2 */}
            <div className="bg-card-dark border border-white/[0.06] hover:border-gold-accent/40 p-8 rounded-sm transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group gold-glow-hover">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-accent/[0.03] to-transparent pointer-events-none"></div>
              <div className="w-12 h-12 rounded-sm bg-black border border-white/[0.08] flex items-center justify-center mb-6 text-gold-accent transition-colors duration-300 group-hover:bg-gold-accent group-hover:text-black">
                <Users size={22} />
              </div>
              <h3 className="font-bebas text-2xl tracking-wider text-white mb-2 uppercase group-hover:text-gold-accent transition-colors">
                Group Fitness Classes
              </h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Elite instruction paired with live mixes. From punishing power-intervals to high-concept flexibility labs. Driven by celebrity instructors who hold you to a higher physical standard.
              </p>
            </div>

            {/* Floor 3 */}
            <div className="bg-card-dark border border-white/[0.06] hover:border-gold-accent/40 p-8 rounded-sm transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group gold-glow-hover">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-accent/[0.03] to-transparent pointer-events-none"></div>
              <div className="w-12 h-12 rounded-sm bg-black border border-white/[0.08] flex items-center justify-center mb-6 text-gold-accent transition-colors duration-300 group-hover:bg-gold-accent group-hover:text-black">
                <Wind size={22} />
              </div>
              <h3 className="font-bebas text-2xl tracking-wider text-white mb-2 uppercase group-hover:text-gold-accent transition-colors">
                Premium Steam Rooms
              </h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Sleek, high-grade eucalyptus steam suites designed for complete cellular recovery. Purify your body after maximum output in pristine, quiet heated chambers.
              </p>
            </div>

            {/* Floor 4 */}
            <div className="bg-card-dark border border-white/[0.06] hover:border-gold-accent/40 p-8 rounded-sm transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group gold-glow-hover">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-accent/[0.03] to-transparent pointer-events-none"></div>
              <div className="w-12 h-12 rounded-sm bg-black border border-white/[0.08] flex items-center justify-center mb-6 text-gold-accent transition-colors duration-300 group-hover:bg-gold-accent group-hover:text-black">
                <Sparkles size={22} />
              </div>
              <h3 className="font-bebas text-2xl tracking-wider text-white mb-2 uppercase group-hover:text-gold-accent transition-colors">
                On-Site Massage Services
              </h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Licensed athletic therapists specialized in myofascial release, deep tissue rehabilitation, and performance maintenance. Maximize your recovery windows immediately on-site.
              </p>
            </div>

            {/* Floor 5 */}
            <div className="bg-card-dark border border-white/[0.06] hover:border-gold-accent/40 p-8 rounded-sm transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group gold-glow-hover">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-accent/[0.03] to-transparent pointer-events-none"></div>
              <div className="w-12 h-12 rounded-sm bg-black border border-white/[0.08] flex items-center justify-center mb-6 text-gold-accent transition-colors duration-300 group-hover:bg-gold-accent group-hover:text-black">
                <Clock size={22} />
              </div>
              <h3 className="font-bebas text-2xl tracking-wider text-white mb-2 uppercase group-hover:text-gold-accent transition-colors">
                No Machine Wait Times
              </h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Over-engineered equipment density means you never compromise your tempo or rest cycles. No clipboard signs, no awkward waits. Just pure, continuous mechanical progression.
              </p>
            </div>

            {/* Floor 6 */}
            <div className="bg-card-dark border border-white/[0.06] hover:border-gold-accent/40 p-8 rounded-sm transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group gold-glow-hover">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-accent/[0.03] to-transparent pointer-events-none"></div>
              <div className="w-12 h-12 rounded-sm bg-black border border-white/[0.08] flex items-center justify-center mb-6 text-gold-accent transition-colors duration-300 group-hover:bg-gold-accent group-hover:text-black">
                <ShieldCheck size={22} />
              </div>
              <h3 className="font-bebas text-2xl tracking-wider text-white mb-2 uppercase group-hover:text-gold-accent transition-colors">
                Immaculate Locker Suites
              </h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Strowed in custom stone, dark wood panelling, high-fidelity grooming products, and premium linen towels. Meticulously maintained every hour to ensure medical-grade cleanliness.
              </p>
            </div>

          </div>
        </div>
      </section>

      
      {/* SECTION 4: SIGNATURE CLASSES */}
      <section 
        id="classes" 
        className="py-24 sm:py-32 bg-gradient-to-t from-bg-dark to-black relative border-t border-white/[0.04]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div className="space-y-4">
              <span className="text-xs tracking-[0.3em] font-semibold text-gold-accent uppercase">CURATED BRUTALITY</span>
              <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide uppercase">
                THE SIGNATURE CLASSES.
              </h2>
            </div>
            <p className="text-gray-400 font-light text-sm max-w-md">
              Meticulously designed workouts where physical effort is guided by premium athletic teachers under custom visual lighting arrays.
            </p>
          </div>

          {/* CLASS GRID (2 specified + 1 on-brand fictional name) */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Class 1 (Pain + Pleasure) */}
            <div className="bg-[#111] border border-white/[0.05] relative rounded-sm overflow-hidden group flex flex-col justify-between h-full hover:border-gold-accent/40 transition-all duration-300">
              <div>
                <div className="h-56 relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(17,17,17,1)), url('https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80')" }}>
                  <div className="absolute top-4 left-4 bg-red-950/80 border border-red-500/30 text-red-500 text-[10px] tracking-[0.2em] px-3 py-1 font-bold uppercase rounded-sm">
                    INTENSITY: MAX
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="font-bebas text-3xl tracking-wider text-white uppercase group-hover:text-gold-accent transition-all">
                    PAIN + PLEASURE
                  </h3>
                  <div className="flex items-center space-x-4 text-xs tracking-wider text-gray-500 font-mono">
                    <span className="flex items-center">
                      <Clock size={12} className="mr-1 text-gold-accent" /> 45 MINS
                    </span>
                    <span className="flex items-center">
                      <Dumbbell size={12} className="mr-1 text-gold-accent" /> WEIGHTS + CARDIO
                    </span>
                  </div>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    Our legendary trademark class. 45 minutes of non-stop weighted squats, heavy lunges, active planks, and relentless cardiovascular runs. No rest allowed. Designed strictly for the driven.
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0">
                <a href="#membership" className="inline-flex items-center text-xs tracking-[0.2em] font-bold text-gold-accent hover:text-white transition-colors uppercase">
                  GET VIP PASS <ChevronRight size={14} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Class 2 (Ab Lab) */}
            <div className="bg-[#111] border border-white/[0.05] relative rounded-sm overflow-hidden group flex flex-col justify-between h-full hover:border-gold-accent/40 transition-all duration-300">
              <div>
                <div className="h-56 relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(17,17,17,1)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80')" }}>
                  <div className="absolute top-4 left-4 bg-gold-accent/20 border border-gold-accent/30 text-gold-accent text-[10px] tracking-[0.2em] px-3 py-1 font-bold uppercase rounded-sm">
                    CROWD FAVORITE
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="font-bebas text-3xl tracking-wider text-white uppercase group-hover:text-gold-accent transition-all">
                    AB LAB <span className="text-gold-accent">(TJ'S MONDAYS)</span>
                  </h3>
                  <div className="flex items-center space-x-4 text-xs tracking-wider text-gray-500 font-mono">
                    <span className="flex items-center">
                      <Clock size={12} className="mr-1 text-gold-accent" /> 30 MINS
                    </span>
                    <span className="flex items-center">
                      <Calendar size={12} className="mr-1 text-gold-accent" /> EVERY MONDAY
                    </span>
                  </div>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    A heavy core-focused masterpiece with TJ. Target deep rectus abdominis, obliques, and pelvic stabilizer platforms. Packed class set to high-energy electronic club tracks.
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0">
                <a href="#membership" className="inline-flex items-center text-xs tracking-[0.2em] font-bold text-gold-accent hover:text-white transition-colors uppercase">
                  GET VIP PASS <ChevronRight size={14} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Class 3 (Fictional But On-Brand) */}
            <div className="bg-[#111] border border-white/[0.05] relative rounded-sm overflow-hidden group flex flex-col justify-between h-full hover:border-gold-accent/40 transition-all duration-300">
              <div>
                <div className="h-56 relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(17,17,17,1)), url('https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&q=80')" }}>
                  <div className="absolute top-4 left-4 bg-purple-950/80 border border-purple-500/30 text-purple-400 text-[10px] tracking-[0.2em] px-3 py-1 font-bold uppercase rounded-sm">
                    SONIC TEMPO
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="font-bebas text-3xl tracking-wider text-white uppercase group-hover:text-gold-accent transition-all">
                    BLACK BOX CONDITIONING
                  </h3>
                  <div className="flex items-center space-x-4 text-xs tracking-wider text-gray-500 font-mono">
                    <span className="flex items-center">
                      <Clock size={12} className="mr-1 text-gold-accent" /> 50 MINS
                    </span>
                    <span className="flex items-center">
                      <Locate size={12} className="mr-1 text-gold-accent" /> LASER/STROBE
                    </span>
                  </div>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    A high-altitude sensory experience. Blind training segments under strobe arrays designed to heighten your central nervous system reaction and spike metabolic rate.
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0">
                <a href="#membership" className="inline-flex items-center text-xs tracking-[0.2em] font-bold text-gold-accent hover:text-white transition-colors uppercase">
                  GET VIP PASS <ChevronRight size={14} className="ml-1" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      {/* SECTION 5: MEMBER TESTIMONIALS */}
      <section 
        id="testimonials" 
        className="py-24 sm:py-32 bg-black border-t border-white/[0.04] relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs tracking-[0.3em] font-semibold text-gold-accent uppercase">REAL PERSPECTIVES</span>
            <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide uppercase">
              REVERED BY THE DISCRIMINATING.
            </h2>
            <p className="text-gray-400 font-light text-sm">
              We don't buy reviews. Our members understand the lifestyle. Here are three pull-quotes recorded from real member reviews.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Quote 1 */}
            <div className="bg-[#1A1A1A] p-10 border-l-2 border-gold-accent rounded-sm relative flex flex-col justify-between relative overflow-hidden group hover:brightness-110 transition-all duration-300">
              <span className="text-gold-accent/10 font-bebas text-8xl absolute -top-2 left-4 pointer-events-none leading-none">“</span>
              <div className="relative z-10 space-y-4 mt-6">
                <p className="text-white italic font-serif text-lg leading-snug">
                  &ldquo;DBG has hit the mark. They've styled a high-tempo atmosphere that actually makes you WANT to show up. The motivation is completely built into the design.&rdquo;
                </p>
              </div>
              <div className="border-t border-white/[0.06] pt-6 mt-8 flex items-center justify-between">
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-white">Michael M.</span>
                  <span className="block text-[9px] text-gold-accent uppercase tracking-widest mt-1">Chelsea Member</span>
                </div>
                <div className="flex space-x-0.5 text-gold-accent text-xs">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>
            </div>

            {/* Quote 2 */}
            <div className="bg-[#1A1A1A] p-10 border-l-2 border-gold-accent rounded-sm relative flex flex-col justify-between relative overflow-hidden group hover:brightness-110 transition-all duration-300">
              <span className="text-gold-accent/10 font-bebas text-8xl absolute -top-2 left-4 pointer-events-none leading-none">“</span>
              <div className="relative z-10 space-y-4 mt-6">
                <p className="text-white italic font-serif text-lg leading-snug">
                  &ldquo;Several floors of gorgeous machinery that are in perfect alignment, fantastic custom classes, steam room. This gym is huge. Absolutely zero waiting around.&rdquo;
                </p>
              </div>
              <div className="border-t border-white/[0.06] pt-6 mt-8 flex items-center justify-between">
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-white">Clarissa S.</span>
                  <span className="block text-[9px] text-gold-accent uppercase tracking-widest mt-1">NYC Elite Tier</span>
                </div>
                <div className="flex space-x-0.5 text-gold-accent text-xs">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>
            </div>

            {/* Quote 3 */}
            <div className="bg-[#1A1A1A] p-10 border-l-2 border-gold-accent rounded-sm relative flex flex-col justify-between relative overflow-hidden group hover:brightness-110 transition-all duration-300">
              <span className="text-gold-accent/10 font-bebas text-8xl absolute -top-2 left-4 pointer-events-none leading-none">“</span>
              <div className="relative z-10 space-y-4 mt-6">
                <p className="text-white italic font-serif text-lg leading-snug">
                  &ldquo;A trendy high-concept gym styled filled with genuinely beautiful people who are completely focused on their health output. Simply the most elegant spot in the city.&rdquo;
                </p>
              </div>
              <div className="border-t border-white/[0.06] pt-6 mt-8 flex items-center justify-between">
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-white">Grant B.</span>
                  <span className="block text-[9px] text-gold-accent uppercase tracking-widest mt-1">Founding Member</span>
                </div>
                <div className="flex space-x-0.5 text-gold-accent text-xs">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 6: MEMBERSHIP CTA WAITING LIST ACCESS */}
      <section 
        id="membership" 
        className="py-24 sm:py-32 bg-gradient-to-b from-black to-bg-dark border-t border-white/[0.04] relative"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#111] border border-white/[0.06] rounded-sm p-8 sm:p-16 relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.9)] gold-border-glow">
            
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-accent/[0.02] rounded-full blur-3xl pointer-events-none"></div>

            <div className="text-center space-y-4 mb-12 relative z-10">
              <span className="text-xs tracking-[0.3em] font-semibold text-gold-accent uppercase">EXCLUSIVE PLACEMENT</span>
              <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide uppercase leading-none">
                READY TO EARN YOUR PLACE?
              </h2>
              <p className="text-gray-400 font-light text-sm max-w-md mx-auto">
                Submit your inquiry details below. Our Barton Admissions board limits weekly registrations to maintain floor space balance.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="membership-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleApplyMembership} 
                  className="space-y-6 relative z-10 max-w-xl mx-auto"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="name-input" className="block text-[10px] tracking-widest text-gray-400 uppercase font-semibold">
                        Full Name <span className="text-gold-accent">*</span>
                      </label>
                      <input 
                        id="name-input"
                        type="text" 
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Johnathan Doe"
                        className="w-full bg-black border border-white/[0.08] focus:border-gold-accent/60 outline-none px-4 py-3 text-sm text-white rounded-sm placeholder-gray-600 transition-colors focus:shadow-[0_0_10px_rgba(201,168,76,0.1)]"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email-input" className="block text-[10px] tracking-widest text-gray-400 uppercase font-semibold">
                        Email Address <span className="text-gold-accent">*</span>
                      </label>
                      <input 
                        id="email-input"
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@luxury.com"
                        className="w-full bg-black border border-white/[0.08] focus:border-gold-accent/60 outline-none px-4 py-3 text-sm text-white rounded-sm placeholder-gray-600 transition-colors focus:shadow-[0_0_10px_rgba(201,168,76,0.1)]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label htmlFor="phone-input" className="block text-[10px] tracking-widest text-gray-400 uppercase font-semibold">
                        Mobile Phone <span className="text-gold-accent">*</span>
                      </label>
                      <input 
                        id="phone-input"
                        type="tel" 
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (212) 555-0100"
                        className="w-full bg-black border border-white/[0.08] focus:border-gold-accent/60 outline-none px-4 py-3 text-sm text-white rounded-sm placeholder-gray-600 transition-colors focus:shadow-[0_0_10px_rgba(201,168,76,0.1)]"
                      />
                    </div>

                    {/* Preferred Location */}
                    <div className="space-y-2">
                      <label htmlFor="location-select" className="block text-[10px] tracking-widest text-gray-400 uppercase font-semibold">
                        Preferred Sanctuary Location
                      </label>
                      <select 
                        id="location-select"
                        value={preferredLoc}
                        onChange={(e) => setPreferredLoc(e.target.value)}
                        className="w-full bg-black border border-white/[0.08] focus:border-gold-accent/60 outline-none px-4 py-3 text-sm text-white rounded-sm transition-colors focus:shadow-[0_0_10px_rgba(201,168,76,0.1)]"
                      >
                        {locations.map((loc, idx) => (
                          <option key={idx} value={loc.name} className="bg-bg-dark">
                            {loc.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 pt-2">
                    <input 
                      id="newsletter-checkbox"
                      type="checkbox"
                      checked={newsletter}
                      onChange={(e) => setNewsletter(e.target.checked)}
                      className="mt-1 accent-gold-accent cursor-pointer rounded-sm"
                    />
                    <label htmlFor="newsletter-checkbox" className="text-xs text-gray-500 cursor-pointer select-none leading-relaxed">
                      I agree to receive transactional text notifications and elite lifestyle newsletters from Barton Relations Board.
                    </label>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gold-accent hover:bg-gold-hover text-black font-extrabold tracking-widest text-sm uppercase rounded-sm transition-all duration-300 shadow-[0_4px_25px_rgba(201,168,76,0.2)]"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center space-x-2">
                          <span className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent"></span>
                          <span>EVALUATING INQUIRY REQS...</span>
                        </span>
                      ) : (
                        <span>SUBMIT FOR BARTON ACCREDITATION</span>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-black/80 border border-gold-accent/30 p-8 sm:p-12 text-center rounded-sm max-w-xl mx-auto space-y-6"
                >
                  <div className="w-16 h-16 bg-gold-accent/20 border border-gold-accent text-gold-accent rounded-full flex items-center justify-center mx-auto text-glow animate-bounce">
                    <Check size={32} />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] tracking-[0.3em] font-medium text-gold-accent uppercase">SUCCESSFULLY INDUCTED</span>
                    <h3 className="font-bebas text-4xl tracking-wider text-white uppercase">INVITATION SECURED</h3>
                    <p className="text-gray-400 font-light text-sm leading-relaxed">
                      Welcome to the Barton Inner Circle, <span className="text-white font-medium">{fullName}</span>. Your baseline request has cleared preview filters.
                    </p>
                  </div>

                  {/* PREMIUM MEMBER VIP PASS TICKET */}
                  <div className="border border-white/[0.08] bg-[#0A0A0A] rounded-sm p-6 relative overflow-hidden text-left space-y-4 shadow-inner">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-accent/[0.05] to-transparent pointer-events-none"></div>
                    
                    <div className="flex justify-between items-center border-b border-white/[0.06] pb-3 mb-2">
                      <div className="flex flex-col">
                        <span className="text-[9px] tracking-[0.2em] text-gray-500 uppercase font-semibold">APPLICATION TYPE</span>
                        <span className="text-xs font-semibold text-white">NYC SANCTUARY SELECTION</span>
                      </div>
                      <span className="font-bebas text-xl text-gold-accent tracking-widest">TEMPORARY PASS</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="block text-[8px] tracking-wider text-gray-500 uppercase">INDIVIDUAL APPLICANT</span>
                        <span className="text-sm font-semibold text-white truncate">{fullName}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] tracking-wider text-gray-500 uppercase">VIP ACCESS CODE</span>
                        <span className="text-sm font-mono font-bold text-gold-accent text-glow">{invitationCode}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] tracking-wider text-gray-500 uppercase">SANCTUARY ASSIGNED</span>
                        <span className="text-sm font-semibold text-white">{preferredLoc}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] tracking-wider text-gray-500 uppercase">STATUS APPROVED</span>
                        <span className="text-emerald-400 text-xs font-bold tracking-widest flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                          INITIALIZED
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-white/[0.06] pt-4 text-center">
                      <p className="text-[10px] text-gray-500 font-light italic">
                        Present this barcode or secure code to the Front Desk Advisor upon arriving at {preferredLoc}. A Membership Relations Coordinator has been assigned to text you at {phone}.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button 
                      onClick={resetForm}
                      className="text-xs text-gray-500 hover:text-gold-accent underline transition-colors uppercase tracking-widest font-semibold"
                    >
                      SUBMIT ANOTHER APPLICATION
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </section>

      
      {/* SECTION 7: VISIT / CONTACT INQUIRY */}
      <section 
        id="visit" 
        className="py-24 sm:py-32 bg-black border-t border-white/[0.04] relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Address and Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="inline-flex items-center space-x-2">
                <div className="h-[1px] w-8 bg-gold-accent"></div>
                <span className="text-xs tracking-[0.3em] font-semibold text-gold-accent uppercase">VISIT OUR HEAVENS</span>
              </div>

              <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide uppercase leading-tight">
                OUR BRICK <br />
                AND MORTAR <span className="text-gold-accent font-bold text-glow">SANCTUARIES.</span>
              </h2>

              <p className="text-gray-400 font-light text-base leading-relaxed tracking-wide">
                David Barton locations are strategically stationed across NYC and South Beach. Select or toggle our flagship sanctuaries to update address directions and private communications channels.
              </p>

              {/* Location Selector Tabs */}
              <div className="border border-white/10 rounded-sm p-1 flex bg-[#0A0A0A] space-x-2">
                {locations.map((loc, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveLocation(idx)}
                    className={`flex-1 py-3 text-xs font-semibold uppercase tracking-widest rounded-sm transition-all duration-300 ${
                      activeLocation === idx 
                        ? 'bg-gold-accent text-black font-extrabold shadow-[0_2px_10px_rgba(201,168,76,0.2)]'
                        : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'
                    }`}
                  >
                    {loc.name.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Display Info Card */}
              <motion.div 
                key={activeLocation}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#111] p-8 border border-white/[0.06] rounded-sm space-y-6"
              >
                <div className="space-y-2">
                  <span className="text-[10px] tracking-[0.3em] font-semibold text-gold-accent uppercase">EXCLUSIVE CONTACT</span>
                  <h3 className="font-bebas text-3xl tracking-wider text-white uppercase">{locations[activeLocation].name}</h3>
                </div>

                <div className="space-y-4 font-light text-sm text-gray-300">
                  <p className="flex items-start">
                    <MapPin size={18} className="text-gold-accent shrink-0 mr-3 mt-0.5" />
                    <span>{locations[activeLocation].address}</span>
                  </p>
                  <p className="flex items-center">
                    <Phone size={18} className="text-gold-accent shrink-0 mr-3" />
                    <span className="font-mono">{locations[activeLocation].phone}</span>
                  </p>
                  <p className="flex items-center">
                    <Mail size={18} className="text-gold-accent shrink-0 mr-3" />
                    <span className="font-mono">relations@davidbartongym.com</span>
                  </p>
                </div>

                <div className="border-t border-white/[0.06] pt-6 space-y-3">
                  <span className="block text-[10px] tracking-widest text-gray-500 uppercase font-bold">SANCTUARY DOORS & HOURS</span>
                  <div className="space-y-1">
                    {locations[activeLocation].hours.map((line, hIdx) => (
                      <span key={hIdx} className="block text-xs font-light text-gray-400">
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column Google Maps iframe Embed Placeholder */}
            <div className="lg:col-span-7">
              <div className="w-full aspect-[16/10] bg-card-dark border border-white/[0.08] relative overflow-hidden rounded-sm shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
                
                {/* Premium Dark Theme Map Layer Styling Overlay */}
                <div className="absolute inset-0 bg-transparent mix-blend-color z-10 pointer-events-none border border-gold-accent/20"></div>
                <div className="absolute top-4 left-4 z-20 bg-black/90 border border-white/10 px-4 py-2.5 rounded-sm flex items-center space-x-2 shadow-lg">
                  <span className="w-2.4 h-2.4 rounded-full bg-gold-accent animate-ping absolute -top-0.5 -left-0.5"></span>
                  <span className="w-2 h-2 rounded-full bg-gold-accent"></span>
                  <span className="text-[10px] tracking-widest text-white uppercase font-bold">LIVE CLUB TRACKING</span>
                </div>

                {/* React Real Google Maps Embed integration aligned to active selection */}
                <iframe 
                  src={locations[activeLocation].mapEmbedUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%)" }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Club Location Satellite Vector"
                  className="w-full h-full opacity-80"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 8: FOOTER SYSTEM */}
      <footer 
        id="footer" 
        className="py-16 bg-[#0A0A0A] border-t border-[#1A1A1A] relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          
          <div className="grid md:grid-cols-3 gap-8 items-center pb-12 border-b border-[#1A1A1A]">
            {/* Brand Logo and details */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
              <a href="#hero" className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gold-accent flex items-center justify-center rounded-sm">
                  <span className="font-bebas text-black text-xl font-bold tracking-tighter">DB</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bebas text-xl tracking-widest text-glow text-white leading-none">DAVID BARTON</span>
                  <span className="text-[9px] tracking-[0.2em] text-gold-accent font-medium leading-none mt-1">G Y M</span>
                </div>
              </a>
              <p className="text-gray-500 font-light text-[10px] uppercase tracking-widest leading-relaxed">
                The Alternative Sanctuary Standard. <br />
                Where the beauty works hard.
              </p>
            </div>

            {/* Dynamic Active Location Details inspired by the Design HTML */}
            <div className="flex flex-col sm:flex-row justify-center gap-8 text-center sm:text-left">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-gray-500 block mb-1">Location Sanctuary</span>
                <span className="text-[11px] font-medium block uppercase text-white">{locations[activeLocation].name}</span>
                <span className="text-[10px] text-gray-400 block mt-0.5">{locations[activeLocation].address.split(',')[0]}</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-gray-500 block mb-1">Contact Phone</span>
                <span className="text-[11px] font-mono block text-gold-accent tracking-wider">{locations[activeLocation].phone}</span>
                <span className="text-[9px] text-gray-500 block mt-0.5">RELATIONS BOARD</span>
              </div>
            </div>

            {/* Social Platform list with thematic container style icons */}
            <div className="flex flex-col items-center md:items-end gap-3">
              <span className="text-[11px] italic font-serif text-[#C9A84C]">Sweat. Style. Results.</span>
              <div className="flex gap-3">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-7 h-7 bg-[#1A1A1A] hover:bg-gold-accent hover:text-black rounded-full flex items-center justify-center text-gray-400 transition-all"
                  title="Instagram"
                >
                  <Instagram size={14} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-7 h-7 bg-[#1A1A1A] hover:bg-gold-accent hover:text-black rounded-full flex items-center justify-center text-gray-400 transition-all"
                  title="Facebook"
                >
                  <Facebook size={14} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-7 h-7 bg-[#1A1A1A] hover:bg-gold-accent hover:text-black rounded-full flex items-center justify-center text-gray-400 transition-all"
                  title="Twitter"
                >
                  <Twitter size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] tracking-widest text-gray-600 uppercase text-center sm:text-left space-y-4 sm:space-y-0 font-light">
            <span>© {new Date().getFullYear()} DAVID BARTON GYM BRANDS CORP. ALL RIGHTFUL PLACEMENT RESERVED.</span>
            <div className="flex space-x-6">
              <a href="#membership" className="hover:text-white transition-colors">PRIVACY CODE</a>
              <a href="#membership" className="hover:text-white transition-colors">Sanctuary Rules</a>
              <a href="#membership" className="hover:text-white transition-colors">Terms of Admission</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Action Button */}
      <a 
        href="https://auroraadv.co/?tab=wizard"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-32 h-32 rounded-full bg-gold-accent hover:bg-gold-hover text-black shadow-[0_10px_40px_rgba(201,168,76,0.4)] hover:shadow-[0_0_50px_rgba(201,168,76,0.6)] transition-all duration-300 hover:scale-105 border border-white/20"
      >
        <span className="text-xs font-bold text-center leading-tight tracking-wider px-4 uppercase">
          Get this <br/> website <br/> for only <br/> <span className="text-base font-black">$999</span>
        </span>
      </a>

    </div>
  );
}
