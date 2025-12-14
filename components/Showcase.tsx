import React from 'react';

interface ShowcaseProps {
    onOpenChat: () => void;
}

const Showcase: React.FC<ShowcaseProps> = ({ onOpenChat }) => {
  return (
    <section className="relative pt-24 pb-48 overflow-hidden bg-white">
      
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Decorative Blocks */}
      <div className="absolute top-10 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-pink rounded-full mix-blend-multiply opacity-80"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-brand-cyan rounded-tr-3xl rotate-12 opacity-80"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-brand-yellow clip-triangle"></div>
        
        {/* Checkers */}
        <div className="absolute left-0 top-[40%] w-24 h-48 opacity-20" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #ff2e63 25%, transparent 25%, transparent 75%, #ff2e63 75%, #ff2e63), repeating-linear-gradient(45deg, #ff2e63 25%, transparent 25%, transparent 75%, #ff2e63 75%, #ff2e63)',
            backgroundPosition: '0 0, 10px 10px',
            backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        
        {/* Desk Setup Graphic Placeholder */}
        <div className="relative w-full max-w-4xl">
            {/* Monitor */}
            <div className="mx-auto w-[80%] aspect-video bg-black rounded-t-2xl border-[16px] border-gray-800 shadow-2xl relative overflow-hidden group">
                {/* Screen Content */}
                <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                    <img src="https://picsum.photos/1200/800?random=2" alt="Showcase Work" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-700"/>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                         <span className="bg-white text-brand-dark font-display text-4xl px-6 py-2 transform -rotate-3 shadow-[8px_8px_0px_#000]">
                            ANY PLATFORM
                         </span>
                    </div>
                </div>
            </div>
            {/* Stand */}
            <div className="mx-auto w-32 h-16 bg-gray-700"></div>
            <div className="mx-auto w-48 h-4 bg-gray-600 rounded-full shadow-lg"></div>

            {/* Desk Objects (CSS Shapes) */}
            <div className="absolute bottom-4 -left-10 w-24 h-24 bg-yellow-400 rounded-lg transform -rotate-12 border-b-8 border-yellow-600 shadow-xl hidden md:block">
                <div className="w-12 h-12 bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-gray-700"></div>
            </div> {/* Camera-ish */}

            <div className="absolute bottom-4 -right-12 w-16 h-24 bg-red-500 rounded-t-lg border-b-4 border-red-700 shadow-xl hidden md:block"></div> {/* Can */}
        </div>
        
        <div className="mt-16 text-center">
             <button 
                onClick={onOpenChat}
                className="px-10 py-4 bg-brand-cyan text-brand-dark text-xl font-bold rounded-full hover:bg-brand-pink hover:text-white transition-all shadow-[0_10px_0_#181846] hover:shadow-[0_5px_0_#181846] hover:translate-y-[5px]"
            >
              Help my Brand
            </button>
        </div>
      </div>

      {/* Pink Footer Background Strip */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-brand-pink"></div>
    </section>
  );
};

export default Showcase;