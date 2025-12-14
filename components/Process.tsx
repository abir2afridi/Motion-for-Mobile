import React from 'react';

interface ProcessProps {
  onOpenChat: () => void;
}

const steps = [
  { id: '01', title: 'Chat', desc: "We'll get to know more about your project and you'll get to know more about how we work. This is the briefing step." },
  { id: '02', title: 'Choose', desc: "Using information gathered, we'll propose a creative solution with script and visual frames. This is the concepting step." },
  { id: '03', title: 'Create', desc: "We'll produce the hero animation with illustration, animation and audio. This is the creating step." },
  { id: '04', title: 'Channel', desc: "We'll produce cutdowns and still assets in various formats for delivery. This is the delivery step." },
];

const Process: React.FC<ProcessProps> = ({ onOpenChat }) => {
  return (
    <section className="py-24 bg-[#eef2ff] text-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Graphic Text */}
        <div className="relative group cursor-default">
          <div className="font-display text-[8rem] md:text-[10rem] leading-[0.8] text-transparent text-outline-blue tracking-tighter opacity-10 absolute top-0 left-0 select-none transition-transform duration-500 group-hover:scale-105">
            BOOM DONE!
          </div>
          <h2 className="font-display text-[6rem] md:text-[9rem] leading-[0.85] text-brand-blue tracking-tighter relative z-10 transform -rotate-2 transition-transform duration-500 group-hover:rotate-0">
            BOOM<br/>
            <span className="text-white text-stroke-blue">DONE!</span>
          </h2>
          
          {/* Explosion Graphic */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 z-20 transform rotate-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45">
            <svg viewBox="0 0 100 100" className="w-full h-full text-brand-pink fill-current drop-shadow-xl animate-pulse">
                <path d="M50 0 L60 35 L95 35 L65 55 L75 90 L50 70 L25 90 L35 55 L5 35 L40 35 Z" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-brand-yellow rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div>
          <p className="text-xl md:text-2xl font-medium mb-12 text-brand-blue/80 max-w-lg">
            Leave it to us. Tell us about your brand and who you want to reach, we'll show you how. We've simplified agency strategies into an easy, results driven process.
          </p>

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.id} className="flex gap-6 group hover:bg-white p-6 -mx-2 rounded-2xl transition-all duration-300 hover:shadow-xl hover:translate-x-2 border border-transparent hover:border-brand-pink/20">
                <div className="font-display text-brand-blue/30 text-xl pt-1 group-hover:text-brand-pink transition-colors">
                    {step.id}. {step.title}
                </div>
                <div className="text-sm text-gray-600 leading-relaxed pt-1 border-b border-gray-200 pb-4 w-full group-hover:border-transparent">
                    {step.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button 
              onClick={onOpenChat}
              className="px-8 py-3 bg-brand-cyan text-brand-dark font-bold rounded-full hover:bg-brand-dark hover:text-white transition-all shadow-lg hover:shadow-brand-cyan/50 hover:-translate-y-1"
            >
              Help my Brand
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .text-stroke-blue {
          -webkit-text-stroke: 3px #4353ff;
          color: transparent;
        }
        .text-outline-blue {
             -webkit-text-stroke: 1px #4353ff;
             color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Process;