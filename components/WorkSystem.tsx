import React, { useState, useEffect } from 'react';
import { Monitor, Users, Share2, DollarSign } from 'lucide-react';

const WorkSystem: React.FC = () => {
  const [terminalText, setTerminalText] = useState('');
  const fullText = "> INIT SOCIAL_PROTOCOL\n> LOADING ASSETS...\n> ENGAGEMENT: 400%\n> SYSTEM READY_";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTerminalText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        // Reset or stop? Let's stop then blink cursor
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      
      {/* Background Typography Marquee */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none select-none opacity-20 md:opacity-30">
        {/* Row 1 - Left */}
        <div className="flex whitespace-nowrap animate-marquee">
             {[...Array(6)].map((_, i) => (
                <div key={i} className="font-display text-[6rem] md:text-[8rem] leading-[0.8] text-outline mx-4">
                    WORK THE SYSTEM
                </div>
             ))}
        </div>
        {/* Row 2 - Right (Reverse) */}
        <div className="flex whitespace-nowrap animate-marquee-reverse my-2">
             {[...Array(6)].map((_, i) => (
                <div key={i} className={`font-display text-[6rem] md:text-[8rem] leading-[0.8] mx-4 ${i % 2 === 0 ? 'text-brand-green mix-blend-screen' : 'text-outline'}`}>
                    WORK THE SYSTEM
                </div>
             ))}
        </div>
        {/* Row 3 - Left */}
        <div className="flex whitespace-nowrap animate-marquee">
             {[...Array(6)].map((_, i) => (
                <div key={i} className="font-display text-[6rem] md:text-[8rem] leading-[0.8] text-outline mx-4">
                    WORK THE SYSTEM
                </div>
             ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-20 mt-10 md:mt-0">
        <div className="flex flex-col items-center">
            
          {/* Retro Computer Graphic */}
          <div className="w-64 h-64 md:w-80 md:h-80 bg-brand-yellow rounded-3xl p-6 shadow-2xl transform -rotate-6 mb-12 border-b-8 border-r-8 border-orange-600 relative hover:rotate-0 transition duration-500">
             <div className="w-full h-3/4 bg-black rounded-xl border-4 border-gray-700 relative overflow-hidden flex items-start justify-start p-4">
                <div className="text-brand-green font-mono text-xs whitespace-pre-wrap leading-relaxed opacity-90">
                    {terminalText}
                    <span className="animate-pulse">|</span>
                </div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-brand-green rounded-full animate-ping opacity-20"></div>
             </div>
             <div className="mt-4 h-2 bg-gray-700 rounded-full w-1/3 mx-auto"></div>
             
             {/* Keyboard part fake */}
             <div className="absolute -bottom-10 -right-10 w-24 h-12 bg-gray-200 rounded-lg shadow-lg transform rotate-12 border-b-4 border-gray-400"></div>
          </div>

          <div className="max-w-2xl text-center bg-brand-dark/90 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-2xl">
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Social media rewards organic engagement. The more people like it, the more it’s shared and seen. <span className="text-brand-pink font-bold">Work it.</span>
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 w-full max-w-5xl border-t border-white/20 pt-8">
            <div className="text-center group">
                <div className="flex justify-center mb-2 text-brand-cyan group-hover:scale-110 transition"><Monitor size={32}/></div>
                <h4 className="font-bold text-white mb-1">Over 50%</h4>
                <p className="text-xs text-gray-400">of the world now uses social media.</p>
            </div>
            <div className="text-center group">
                <div className="flex justify-center mb-2 text-brand-green group-hover:scale-110 transition"><Users size={32}/></div>
                <h4 className="font-bold text-white mb-1">1 in 3</h4>
                <p className="text-xs text-gray-400">consumers turn to social media for advice.</p>
            </div>
            <div className="text-center group">
                <div className="flex justify-center mb-2 text-brand-pink group-hover:scale-110 transition"><Share2 size={32}/></div>
                <h4 className="font-bold text-white mb-1">Organic</h4>
                <p className="text-xs text-gray-400">reach beats paid when content is king.</p>
            </div>
            <div className="text-center group">
                <div className="flex justify-center mb-2 text-brand-yellow group-hover:scale-110 transition"><DollarSign size={32}/></div>
                <h4 className="font-bold text-white mb-1">$20 Billion</h4>
                <p className="text-xs text-gray-400">spent on social media video advertising in 2021.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkSystem;