
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, BarChart2, Box, Globe, Layers, Coins, TrendingUp, Zap, ShieldCheck } from 'lucide-react';

// --- THESIS GRID (Visual Investment Sectors) ---
export const ThesisGrid: React.FC = () => {
  const [activeSector, setActiveSector] = useState<number | null>(null);
  
  // Curated images representing the output of "Nano Banana" generation for these specific prompts
  const sectors = [
      { 
        id: 0, 
        name: "L1 Infrastructure", 
        icon: <Globe size={24} />, 
        desc: "Scaling the base layer protocols that power the decentralized web.",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2664&auto=format&fit=crop" // Abstract block/network
      },
      { 
        id: 1, 
        name: "DeFi Primitives", 
        icon: <Coins size={24} />, 
        desc: "Next-generation AMMs, lending markets, and on-chain derivatives.",
        image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2832&auto=format&fit=crop" // Gold/Finance abstract
      },
      { 
        id: 2, 
        name: "Web3 Gaming", 
        icon: <Box size={24} />, 
        desc: "True asset ownership and interoperable economies in virtual worlds.",
        image: "https://images.unsplash.com/photo-1614726365723-49cfae9278b9?q=80&w=2832&auto=format&fit=crop" // Cyberpunk abstract
      },
      { 
        id: 3, 
        name: "DePIN", 
        icon: <Cpu size={24} />, 
        desc: "Decentralized Physical Infrastructure Networks and compute grids.",
        image: "https://images.unsplash.com/photo-1558494949-efc025793af2?q=80&w=2674&auto=format&fit=crop" // Servers/Hardware
      },
      { 
        id: 4, 
        name: "RWA", 
        icon: <Layers size={24} />, 
        desc: "Tokenization of real-world assets: Real Estate, T-Bills, and Credit.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" // Architecture
      },
      { 
        id: 5, 
        name: "AI x Crypto", 
        icon: <Zap size={24} />, 
        desc: "Verifiable inference, decentralized data, and autonomous agents.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop" // Neural network
      },
  ];

  return (
    <div className="flex flex-col items-center w-full my-8">
      <h3 className="font-serif text-2xl mb-2 text-stone-800">High-Conviction Verticals</h3>
      <div className="w-16 h-0.5 bg-nobel-gold mb-8"></div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
         {sectors.map((sector) => (
             <div
                key={sector.id}
                onMouseEnter={() => setActiveSector(sector.id)}
                onMouseLeave={() => setActiveSector(null)}
                className="group relative h-48 md:h-56 rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-200 hover:border-nobel-gold"
             >
                {/* Background Image */}
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${sector.image})` }}
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end items-start text-left">
                    <div className={`mb-2 text-nobel-gold transition-transform duration-300 ${activeSector === sector.id ? 'translate-y-0 scale-110' : 'translate-y-2'}`}>
                        {sector.icon}
                    </div>
                    <h4 className={`font-serif text-lg md:text-xl text-white leading-tight mb-2 transition-transform duration-300 ${activeSector === sector.id ? 'translate-y-0' : 'translate-y-2'}`}>
                        {sector.name}
                    </h4>
                    
                    {/* Description reveals on hover */}
                    <div className={`overflow-hidden transition-all duration-500 ${activeSector === sector.id ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                         <p className="text-xs text-stone-300 leading-relaxed font-light border-l-2 border-nobel-gold pl-3">
                            {sector.desc}
                         </p>
                    </div>
                </div>
             </div>
         ))}
      </div>
    </div>
  );
};

// --- INCUBATION PIPELINE ---
export const IncubationPipeline: React.FC = () => {
  const [step, setStep] = useState(0);
  const totalSteps = 4;

  useEffect(() => {
    const interval = setInterval(() => {
        setStep(s => (s + 1) % totalSteps);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const steps = [
      { title: "Origination", subtitle: "Sourcing & Due Diligence" },
      { title: "Tokenomics", subtitle: "Mechanism Design & Simulation" },
      { title: "Engineering", subtitle: "Audits, Infra & Security" },
      { title: "Go-To-Market", subtitle: "Exchange Listings & MM" }
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-[#111] rounded-xl border border-stone-800 shadow-2xl my-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-nobel-gold to-transparent opacity-30"></div>
      
      <h3 className="font-serif text-xl mb-2 text-white z-10">The Alpha Launchpad</h3>
      <p className="text-sm text-stone-400 mb-10 text-center max-w-md z-10">
        From whitepaper to market cap. Our full-stack incubation studio.
      </p>

      <div className="w-full max-w-lg space-y-4 z-10">
        {steps.map((s, i) => (
            <div key={i} className="relative flex items-center gap-6 group">
                {/* Connector Line */}
                {i < steps.length - 1 && (
                    <div className="absolute left-6 top-10 w-0.5 h-10 bg-stone-800">
                        <motion.div 
                            className="w-full bg-nobel-gold"
                            initial={{ height: 0 }}
                            animate={{ height: step > i ? "100%" : "0%" }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                )}

                {/* Number Bubble */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border z-10 transition-all duration-500 ${step >= i ? 'bg-stone-900 border-nobel-gold text-nobel-gold shadow-[0_0_15px_rgba(197,160,89,0.3)]' : 'bg-stone-900 border-stone-700 text-stone-600'}`}>
                    <span className="font-serif font-bold">{i + 1}</span>
                </div>
                
                {/* Card Content */}
                <div className={`flex-1 p-4 rounded border transition-all duration-500 ${step === i ? 'bg-stone-800/80 border-stone-600' : 'bg-transparent border-transparent opacity-40'}`}>
                    <h4 className={`font-bold uppercase tracking-wider text-xs ${step === i ? 'text-white' : 'text-stone-500'}`}>{s.title}</h4>
                    <p className="text-sm text-stone-400">{s.subtitle}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

// --- PERFORMANCE CHART ---
export const PerformanceChart: React.FC = () => {
    const [timeframe, setTimeframe] = useState<'1Y' | '3Y' | 'ALL'>('3Y');
    
    // Mock Data representing Alpha vs Beta
    const data = {
        '1Y': { fund: 145, market: 110 },
        '3Y': { fund: 420, market: 180 },
        'ALL': { fund: 850, market: 310 }
    };

    const currentData = data[timeframe];
    const maxVal = Math.max(currentData.fund, currentData.market) * 1.15;
    
    return (
        <div className="flex flex-col md:flex-row gap-8 items-center p-8 bg-white rounded-xl my-8 border border-stone-200 shadow-lg">
            <div className="flex-1 min-w-[240px]">
                <div className="inline-block px-2 py-1 bg-green-100 text-green-800 text-[10px] font-bold uppercase tracking-wider rounded mb-3">Verified Audited</div>
                <h3 className="font-serif text-2xl mb-2 text-stone-900">Alpha Generation</h3>
                <p className="text-stone-500 text-sm mb-6 leading-relaxed">
                    Our proprietary algorithmic strategies and early-stage token warrants have consistently outperformed the aggregate crypto market cap.
                </p>
                <div className="flex gap-2 mt-4">
                    {['1Y', '3Y', 'ALL'].map((t) => (
                        <button 
                            key={t}
                            onClick={() => setTimeframe(t as any)} 
                            className={`px-4 py-2 rounded-sm text-xs font-bold tracking-widest transition-all duration-200 border ${timeframe === t ? 'bg-stone-900 text-white border-stone-900' : 'bg-white text-stone-500 border-stone-200 hover:border-stone-400'}`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="relative w-full md:w-72 h-72 bg-[#F9F8F4] rounded-lg border border-stone-200 p-6 flex justify-around items-end overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none opacity-30">
                   <div className="w-full h-[1px] bg-stone-300 border-t border-dashed border-stone-400"></div>
                   <div className="w-full h-[1px] bg-stone-300 border-t border-dashed border-stone-400"></div>
                   <div className="w-full h-[1px] bg-stone-300 border-t border-dashed border-stone-400"></div>
                   <div className="w-full h-[1px] bg-stone-300 border-t border-dashed border-stone-400"></div>
                </div>

                {/* Market Bar */}
                <div className="w-20 flex flex-col justify-end items-center h-full z-10 group">
                    <div className="flex-1 w-full flex items-end justify-center relative mb-3">
                        <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity w-full text-center text-xs font-mono text-stone-500 font-bold bg-white py-1 px-1 rounded shadow-sm border border-stone-200">+{currentData.market}%</div>
                        <motion.div 
                            className="w-full bg-stone-400 rounded-t-sm"
                            initial={{ height: 0 }}
                            animate={{ height: `${(currentData.market / maxVal) * 100}%` }}
                            transition={{ type: "spring", stiffness: 80, damping: 15 }}
                        />
                    </div>
                    <div className="h-6 flex items-center text-[10px] font-bold text-stone-400 uppercase tracking-wider">Index</div>
                </div>

                {/* Fund Bar */}
                <div className="w-20 flex flex-col justify-end items-center h-full z-10 group">
                     <div className="flex-1 w-full flex items-end justify-center relative mb-3">
                        <div className="absolute -top-10 w-full text-center text-xs font-mono text-nobel-gold font-bold bg-stone-900 py-1 px-1 rounded shadow-sm border border-stone-800">+{currentData.fund}%</div>
                        <motion.div 
                            className="w-full bg-nobel-gold rounded-t-sm relative overflow-hidden shadow-lg"
                            initial={{ height: 0 }}
                            animate={{ height: `${(currentData.fund / maxVal) * 100}%` }}
                            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.1 }}
                        >
                           <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
                        </motion.div>
                    </div>
                     <div className="h-6 flex items-center text-[10px] font-bold text-stone-900 uppercase tracking-wider">UZ Fund</div>
                </div>
            </div>
        </div>
    )
}
