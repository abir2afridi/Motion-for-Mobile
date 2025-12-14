import React, { useState } from 'react';
import Hero from './components/Hero';
import WorkSystem from './components/WorkSystem';
import Rocket from './components/Rocket';
import Process from './components/Process';
import Benefits from './components/Benefits';
import Showcase from './components/Showcase';
import Footer from './components/Footer';
import ChatModal from './components/ChatModal';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (
    <main className="min-h-screen font-sans selection:bg-brand-pink selection:text-white">
      <Hero onOpenChat={toggleChat} />
      <WorkSystem />
      <Rocket />
      <Process onOpenChat={toggleChat} />
      <Benefits />
      <Showcase onOpenChat={toggleChat} />
      <Footer />
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </main>
  );
};

export default App;