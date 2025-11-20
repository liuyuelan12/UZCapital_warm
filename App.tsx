
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene, GenesisBlockScene } from './components/QuantumScene';
import { ThesisGrid, IncubationPipeline, PerformanceChart } from './components/Diagrams';
import { ArrowDown, Menu, X, Globe, ShieldCheck, Zap, Gem, Briefcase, Users } from 'lucide-react';

const TeamCard = ({ name, role, delay }: { name: string, role: string, delay: string }) => {
  return (
    <div className="flex flex-col group animate-fade-in-up items-center p-8 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-500 w-full max-w-xs hover:-translate-y-2" style={{ animationDelay: delay }}>
      <div className="w-24 h-24 rounded-full bg-stone-50 mb-6 flex items-center justify-center text-stone-300 font-serif text-3xl font-bold group-hover:bg-nobel-gold group-hover:text-white transition-colors duration-500 overflow-hidden relative">
        <span className="relative z-10">{name.charAt(0)}</span>
      </div>
      <h3 className="font-serif text-2xl text-stone-900 text-center mb-2">{name}</h3>
      <div className="w-8 h-0.5 bg-nobel-gold mb-4 opacity-60"></div>
      <p className="text-xs text-stone-500 font-bold uppercase tracking-widest text-center leading-relaxed">{role}</p>
    </div>
  );
};

// Mock Portfolio Ticker
const PortfolioTicker = () => (
  <div className="w-full bg-stone-900 py-6 overflow-hidden flex items-center border-y border-stone-800">
    <div className="flex gap-16 items-center animate-scroll whitespace-nowrap min-w-full px-8">
      {["PROTOCOL A", "ZK-LAYER", "DEFI-X", "GAME-GRID", "NOVA-DEX", "CHAIN-AI", "PROTOCOL A", "ZK-LAYER", "DEFI-X"].map((item, i) => (
        <span key={i} className="text-stone-600 font-serif font-bold text-xl opacity-50 hover:opacity-100 hover:text-nobel-gold transition-colors cursor-default">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/95 backdrop-blur-md shadow-sm py-4 border-b border-stone-200' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-stone-900 rounded-sm flex items-center justify-center text-nobel-gold font-serif font-bold text-xl shadow-lg border border-stone-800">UZ</div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-lg tracking-wide text-stone-900 leading-none`}>
                UZ CAPITAL
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-stone-500 font-bold">Ventures</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest text-stone-600 uppercase">
            <a href="#thesis" onClick={scrollToSection('thesis')} className="hover:text-nobel-gold transition-colors cursor-pointer">Portfolio</a>
            <a href="#incubation" onClick={scrollToSection('incubation')} className="hover:text-nobel-gold transition-colors cursor-pointer">Incubation</a>
            <a href="#performance" onClick={scrollToSection('performance')} className="hover:text-nobel-gold transition-colors cursor-pointer">Strategy</a>
            <a href="#team" onClick={scrollToSection('team')} className="hover:text-nobel-gold transition-colors cursor-pointer">Partners</a>
            <button 
              className="px-6 py-2.5 bg-stone-900 text-nobel-gold border border-stone-900 hover:bg-white hover:text-stone-900 transition-all shadow-sm cursor-pointer"
            >
              Submit Deck
            </button>
          </div>

          <button className="md:hidden text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-8 text-2xl font-serif animate-fade-in">
            <a href="#thesis" onClick={scrollToSection('thesis')} className="hover:text-nobel-gold transition-colors cursor-pointer">Portfolio</a>
            <a href="#incubation" onClick={scrollToSection('incubation')} className="hover:text-nobel-gold transition-colors cursor-pointer">Incubation</a>
            <a href="#performance" onClick={scrollToSection('performance')} className="hover:text-nobel-gold transition-colors cursor-pointer">Strategy</a>
            <a href="#team" onClick={scrollToSection('team')} className="hover:text-nobel-gold transition-colors cursor-pointer">Partners</a>
            <button 
              onClick={() => setMenuOpen(false)} 
              className="mt-4 px-8 py-4 bg-stone-900 text-nobel-gold uppercase text-sm tracking-widest font-sans font-bold"
            >
              Contact Us
            </button>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <HeroScene />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(10,10,10,0.4)_0%,rgba(10,10,10,0.8)_60%,rgba(10,10,10,1)_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center mt-16">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 border border-stone-700 text-nobel-gold text-[10px] tracking-[0.3em] uppercase font-bold rounded-full backdrop-blur-md bg-stone-900/50">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Fund III Deploying Now
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-none mb-8 text-white drop-shadow-2xl tracking-tight">
            Building the <br/>
            <span className="text-nobel-gold italic font-normal">Trustless Future</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-400 font-light leading-relaxed mb-12">
            UZ Capital is a thesis-driven Web3 venture firm. We incubate, invest in, and scale the decentralized protocols that define the next era of the internet.
          </p>
          
          <div className="flex justify-center gap-6">
             <button onClick={scrollToSection('thesis')} className="px-8 py-3 bg-nobel-gold text-stone-900 font-bold text-xs tracking-widest uppercase hover:bg-white transition-colors">
                View Portfolio
             </button>
             <button onClick={scrollToSection('incubation')} className="px-8 py-3 border border-stone-600 text-white font-bold text-xs tracking-widest uppercase hover:border-nobel-gold hover:text-nobel-gold transition-colors">
                Our Approach
             </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce opacity-50">
            <ArrowDown className="text-stone-500" size={20} />
        </div>
      </header>

      <PortfolioTicker />

      <main>
        {/* Introduction / Manifesto */}
        <section id="thesis" className="py-32 bg-white">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-5 sticky top-32">
              <div className="inline-block mb-4 text-xs font-bold tracking-widest text-stone-500 uppercase border-b border-nobel-gold pb-1">Investment Thesis</div>
              <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-[1.1] text-stone-900">
                Capital for the <span className="text-stone-400 italic">Code-Governed</span> World.
              </h2>
              <p className="text-stone-500 mb-8">
                  We don't chase hype cycles. We identify the technical bottlenecks and economic inefficiencies preventing mass adoption, and back the teams solving them.
              </p>
              <div className="grid grid-cols-2 gap-6">
                  <div>
                      <div className="text-3xl font-serif text-nobel-gold mb-1">$250M+</div>
                      <div className="text-xs font-bold tracking-wider text-stone-400 uppercase">Assets Under Management</div>
                  </div>
                  <div>
                      <div className="text-3xl font-serif text-nobel-gold mb-1">40+</div>
                      <div className="text-xs font-bold tracking-wider text-stone-400 uppercase">Protocol Investments</div>
                  </div>
              </div>
            </div>
            <div className="md:col-span-7">
               <ThesisGrid />
            </div>
          </div>
        </section>

        {/* Incubation Process */}
        <section id="incubation" className="py-32 bg-stone-900 text-stone-100 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                     <div className="lg:col-span-7 order-2 lg:order-1">
                        <IncubationPipeline />
                     </div>
                     <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="flex items-center gap-3 mb-6">
                             <div className="p-2 bg-stone-800 rounded border border-stone-700">
                                <Gem size={20} className="text-nobel-gold" />
                             </div>
                             <span className="text-xs font-bold tracking-widest uppercase text-stone-400">UZ Labs</span>
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white leading-tight">
                            More Than Just Capital. <br/>
                            <span className="text-stone-500 italic">We Build.</span>
                        </h2>
                        <p className="text-lg text-stone-400 mb-6 leading-relaxed font-light">
                            The gap between a whitepaper and a functioning token economy is immense. UZ Labs is our in-house incubation studio dedicated to bridging that gap.
                        </p>
                        <ul className="space-y-4 mt-8 text-stone-300">
                            <li className="flex items-center gap-4 border-b border-stone-800 pb-4">
                                <Zap size={18} className="text-nobel-gold"/>
                                <span>Smart Contract Security Auditing</span>
                            </li>
                            <li className="flex items-center gap-4 border-b border-stone-800 pb-4">
                                <Globe size={18} className="text-nobel-gold"/>
                                <span>Tokenomics & Treasury Management</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Users size={18} className="text-nobel-gold"/>
                                <span>Key Opinion Leader (KOL) Alignment</span>
                            </li>
                        </ul>
                     </div>
                </div>
            </div>
        </section>

        {/* Performance Results */}
        <section id="performance" className="py-32 bg-[#F9F8F4]">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-block mb-4 text-xs font-bold tracking-widest text-stone-500 uppercase">Track Record</div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Asymmetric Upside</h2>
                    <p className="text-lg text-stone-600 leading-relaxed mb-8">
                        Our investment committee employs a rigorous, data-driven due diligence process. We combine on-chain analytics with fundamental valuation models to identify undervalued protocols before the market consensus forms.
                    </p>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-6 py-3 bg-white border border-stone-300 rounded-sm hover:border-nobel-gold transition-colors shadow-sm">
                            <Briefcase size={16} className="text-stone-400"/>
                            <span className="text-xs font-bold tracking-widest uppercase text-stone-800">Download Q3 Report</span>
                        </button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <PerformanceChart />
                </div>
            </div>
        </section>

        {/* Ecosystem / Impact */}
        <section className="py-32 bg-white border-t border-stone-200 overflow-hidden">
             <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-6 relative order-2 md:order-1">
                    <div className="aspect-square bg-[#050505] rounded-full overflow-hidden relative border border-stone-100 shadow-2xl mx-auto w-full max-w-lg">
                        <GenesisBlockScene />
                        <div className="absolute inset-0 rounded-full border-[20px] border-[#F9F8F4] pointer-events-none z-20"></div>
                    </div>
                </div>
                <div className="md:col-span-6 flex flex-col justify-center order-1 md:order-2">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">The Network</div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">The UZ Ecosystem</h2>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                        Founders back founders. When you partner with UZ Capital, you gain access to an exclusive collective of over 100 active Web3 builders, market makers, and exchanges.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-6 bg-stone-50 border border-stone-100 rounded-xl hover:border-nobel-gold transition-colors">
                             <div className="text-3xl font-serif mb-2 text-stone-900">Global</div>
                             <p className="text-xs text-stone-500 uppercase tracking-wider">Presence in SF, Dubai, Singapore</p>
                        </div>
                        <div className="p-6 bg-stone-50 border border-stone-100 rounded-xl hover:border-nobel-gold transition-colors">
                             <div className="text-3xl font-serif mb-2 text-stone-900">Tier 1</div>
                             <p className="text-xs text-stone-500 uppercase tracking-wider">Exchange Relations</p>
                        </div>
                    </div>
                </div>
             </div>
        </section>

        {/* Team */}
        <section id="team" className="py-32 bg-[#F5F4F0] border-t border-stone-300">
           <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">General Partners</div>
                    <h2 className="font-serif text-3xl md:text-5xl mb-4 text-stone-900">Investment Committee</h2>
                    <p className="text-stone-500 max-w-2xl mx-auto">A multidisciplinary team of cryptographers, economists, and traders.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                    <TeamCard 
                        name="Alexander V." 
                        role="Managing Partner" 
                        delay="0s" 
                    />
                    <TeamCard 
                        name="Sarah Chen" 
                        role="Head of Research" 
                        delay="0.1s" 
                    />
                    <TeamCard 
                        name="David K." 
                        role="CTO / Smart Contracts" 
                        delay="0.2s" 
                    />
                    <TeamCard 
                        name="Elena R." 
                        role="Head of Incubation" 
                        delay="0.3s" 
                    />
                </div>
           </div>
        </section>

      </main>

      <footer className="bg-[#0a0a0a] text-stone-400 py-20 border-t border-stone-900">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-nobel-gold rounded-sm flex items-center justify-center text-stone-900 font-serif font-bold text-lg">UZ</div>
                        <span className="text-white font-serif font-bold text-xl">UZ CAPITAL</span>
                    </div>
                    <p className="text-sm max-w-md text-stone-500 leading-relaxed mb-8">
                        UZ Capital is a venture capital firm dedicated to the decentralized future. We provide early-stage funding and hands-on incubation for the protocols that will reshape the global economy.
                    </p>
                    <div className="flex gap-4">
                        <input type="email" placeholder="Subscribe to our Research" className="bg-stone-900 border border-stone-800 px-4 py-2 text-sm text-white rounded-sm focus:border-nobel-gold outline-none w-64"/>
                        <button className="bg-nobel-gold text-stone-900 px-4 py-2 text-xs font-bold uppercase rounded-sm hover:bg-white transition-colors">Join</button>
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Firm</h4>
                    <ul className="space-y-4 text-sm">
                        <li><a href="#" className="hover:text-nobel-gold transition-colors">Portfolio</a></li>
                        <li><a href="#" className="hover:text-nobel-gold transition-colors">Team</a></li>
                        <li><a href="#" className="hover:text-nobel-gold transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-nobel-gold transition-colors">Press Kit</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Connect</h4>
                    <ul className="space-y-4 text-sm">
                        <li><a href="#" className="hover:text-nobel-gold transition-colors">Twitter / X</a></li>
                        <li><a href="#" className="hover:text-nobel-gold transition-colors">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-nobel-gold transition-colors">Telegram</a></li>
                        <li><a href="#" className="hover:text-nobel-gold transition-colors">Mirror.xyz</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center md:text-left text-[10px] text-stone-600 border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between">
                <span>&copy; 2024 UZ Capital Management. All Rights Reserved.</span>
                <span className="mt-2 md:mt-0">Investments in crypto assets involve significant risk. Past performance is not indicative of future results.</span>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
