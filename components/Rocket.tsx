import React, { useEffect, useRef, useState } from 'react';

const Rocket: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-gradient-to-b from-brand-dark to-indigo-900">
      
      {/* Clouds / Shapes */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-white/5 blur-2xl"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 rounded-full bg-brand-blue/20 blur-3xl"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center relative z-10">
        
        {/* Left Text */}
        <div className={`flex-1 text-center md:text-right mb-10 md:mb-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <h2 className="font-display text-6xl md:text-8xl text-white">HIGH END</h2>
        </div>

        {/* Rocket Graphic */}
        <div className="flex-0 mx-8 relative group">
            {/* Rocket Body - Animated */}
            <div className={`w-40 md:w-56 aspect-[1/2] relative transition-transform duration-[2000ms] cubic-bezier(0.25, 1, 0.5, 1) ${isVisible ? 'translate-y-0' : 'translate-y-[200px]'}`}>
                {/* CSS Rocket Construction for fun */}
                <div className="absolute inset-x-0 top-0 h-[70%] bg-red-600 rounded-[50%_50%_10%_10%] z-20 flex items-center justify-center overflow-hidden border-r-8 border-red-800 shadow-xl">
                    <div className="w-16 h-16 bg-blue-200 rounded-full border-4 border-gray-300 shadow-inner"></div>
                </div>
                <div className="absolute inset-x-8 bottom-[20%] h-[20%] bg-white z-20"></div>
                <div className="absolute -left-4 bottom-[20%] w-10 h-24 bg-red-700 rounded-l-full z-10 origin-top-right transform rotate-12"></div>
                <div className="absolute -right-4 bottom-[20%] w-10 h-24 bg-red-700 rounded-r-full z-10 origin-top-left transform -rotate-12"></div>
                
                {/* Nozzle */}
                <div className="absolute inset-x-12 bottom-0 h-4 bg-gray-800 rounded-b-md z-10"></div>

                {/* Enhanced Fire / Thruster */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 flex justify-center w-full z-0 pointer-events-none">
                     <div className="relative">
                        {/* Core Beam - White Hot */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-32 bg-gradient-to-b from-white via-yellow-200 to-transparent blur-[4px] animate-flicker origin-top"></div>
                        
                        {/* Main Flame - Yellow/Orange */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-48 bg-gradient-to-b from-yellow-400 via-orange-500 to-transparent rounded-full blur-[8px] animate-flicker opacity-80" style={{ animationDuration: '0.15s' }}></div>
                        
                        {/* Outer Glow - Red/Purple */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-64 bg-gradient-to-b from-orange-600 via-red-600 to-transparent rounded-full blur-[20px] animate-pulse opacity-60"></div>

                        {/* Particles / Sparks */}
                        <div className="absolute top-4 left-0 w-2 h-2 bg-yellow-100 rounded-full animate-jet opacity-0" style={{ animationDelay: '0s', left: '-10px' }}></div>
                        <div className="absolute top-8 left-0 w-3 h-3 bg-orange-200 rounded-full animate-jet opacity-0" style={{ animationDelay: '0.2s', left: '20px' }}></div>
                        <div className="absolute top-2 left-0 w-2 h-2 bg-white rounded-full animate-jet opacity-0" style={{ animationDelay: '0.1s', left: '-5px' }}></div>
                        <div className="absolute top-6 left-0 w-2 h-2 bg-yellow-300 rounded-full animate-jet opacity-0" style={{ animationDelay: '0.3s', left: '15px' }}></div>
                        <div className="absolute top-5 left-0 w-1 h-1 bg-white rounded-full animate-jet opacity-0" style={{ animationDelay: '0.15s', left: '-20px' }}></div>
                     </div>
                </div>
            </div>
            
            {/* Smoke */}
             <div className={`absolute top-full left-1/2 -translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10 transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>

        {/* Right Text */}
        <div className={`flex-1 text-center md:text-left mt-10 md:mt-0 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <h2 className="font-display text-6xl md:text-8xl text-white">HEAD START</h2>
          <div className="max-w-xs md:ml-4 mt-4 text-sm text-gray-300 bg-brand-dark/50 p-4 rounded-xl backdrop-blur-md border border-white/10">
            We've packaged design agency expertise into social media motion graphics that are ready to work. Tailored to you, the hard work's already done.
          </div>
        </div>

      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/2 left-[10%] w-12 h-12 border-4 border-brand-yellow transform rotate-45 animate-float"></div>
      <div className="absolute bottom-[20%] right-[15%] w-16 h-16 rounded-full border-4 border-brand-cyan animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Rocket;