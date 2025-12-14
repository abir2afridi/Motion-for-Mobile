import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-[#fdf2f4] text-brand-dark">
      <div className="container mx-auto px-4">
        
        <h2 className="font-display text-6xl md:text-8xl text-center text-brand-pink mb-16 uppercase tracking-tight">
          Better Done Right
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left Text */}
          <div className="bg-brand-pink/10 p-8 rounded-3xl">
            <p className="text-2xl md:text-3xl font-medium text-brand-pink leading-snug">
              You’ll <span className="font-black bg-brand-pink text-white px-2 transform -skew-x-6 inline-block">SCORE</span> with MFM! 
              Our approach gets your brand consistently loved, for longer. 
              With tailored creative across your social media platforms, you’ll enjoy a host of benefits:
            </p>
          </div>

          {/* Right List */}
          <div className="space-y-6">
            {[
              { title: "Stand out from the noise", desc: "Dynamic, high-quality creative that will elevate your brand." },
              { title: "Capture attention", desc: "Connect and hold your audience for longer with snackable motion content." },
              { title: "Organic Reach", desc: "Reach audiences through likes and shares with content that adds value rather than sells." },
              { title: "Raised brand perception", desc: "Associate high-end production value with your brand." },
              { title: "Engagement with your brand", desc: "High-quality visuals get more likes, comments, shares and link clicks." },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 border-b border-brand-pink/20 pb-4">
                <div className="w-1/3 font-bold text-brand-pink text-sm uppercase tracking-wider">
                  {item.title}
                </div>
                <div className="w-2/3 text-sm text-gray-700 font-medium">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;