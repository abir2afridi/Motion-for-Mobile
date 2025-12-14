import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenChat: () => void;
}

const images = [
  "https://picsum.photos/400/800?random=1",
  "https://picsum.photos/400/800?random=10",
  "https://picsum.photos/400/800?random=20"
];

const Hero: React.FC<HeroProps> = ({ onOpenChat }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20">
      
      {/* Background Shapes */}
      <div className="absolute top-20 left-10 w-24 h-24 border-4 border-brand-green transform rotate-12 z-0 opacity-50 hidden md:block animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full border-4 border-brand-pink z-0 opacity-50 hidden md:block animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-40 right-[20%] text-brand-yellow text-9xl font-display opacity-20 z-0 select-none animate-pulse">⚡</div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
        
        {/* Floating Phone Graphic Placeholder - Moved to background of text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 z-0 hover:scale-105 transition duration-500 ease-out animate-float opacity-40 md:opacity-60 pointer-events-none">
            <div className="relative bg-black rounded-[2.5rem] border-8 border-gray-900 shadow-2xl overflow-hidden aspect-[9/19]">
                {images.map((src, index) => (
                  <img 
                    key={index}
                    src={src} 
                    alt="App Interface" 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? 'opacity-80' : 'opacity-0'}`}
                  />
                ))}
                 {/* Fake UI Overlay */}
                 <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-b from-transparent to-brand-blue/80">
                    <div className="flex justify-between items-center text-white text-xs">
                        <span>9:41</span>
                        <div className="flex gap-1">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                    </div>
                    <div className="bg-white p-3 rounded-xl shadow-lg transform rotate-[-5deg]">
                        <p className="text-brand-dark font-bold text-sm">MOTION THAT MOVES!</p>
                    </div>
                 </div>
            </div>
        </div>

        {/* Big Text Layering */}
        <h1 className="text-center font-display leading-[0.85] tracking-tighter text-white relative z-10">
          <span className="block text-[8rem] md:text-[14rem] lg:text-[18rem] relative z-10 drop-shadow-2xl animate-slide-up">
            MAKE A
          </span>
          <span className="block text-[8rem] md:text-[14rem] lg:text-[18rem] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300 relative z-30 -mt-8 md:-mt-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            SPLASH
          </span>
        </h1>

        <div className="mt-12 md:mt-8 max-w-xl text-center relative z-40 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl md:text-3xl font-display text-brand-cyan mb-4">
            Tailored Creative for Social Media
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed drop-shadow-md">
            Motion graphics make up social media. Get your brand seen and shared with slick creative that’s tailored to you.
          </p>
          
          <button 
            onClick={onOpenChat}
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-brand-pink text-white font-bold rounded-full overflow-hidden transition-all hover:bg-white hover:text-brand-pink shadow-[0_0_20px_rgba(255,46,99,0.5)] active:scale-95"
          >
            <span className="mr-2">Start the Conversation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

      {/* Decorative Zig Zag */}
      <svg className="absolute bottom-[10%] left-[5%] w-24 h-24 text-brand-green opacity-80 animate-pulse" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="10">
        <path d="M10 10 L40 40 L10 70 L40 100" />
        <path d="M50 10 L80 40 L50 70 L80 100" />
      </svg>
    </section>
  );
};

export default Hero;