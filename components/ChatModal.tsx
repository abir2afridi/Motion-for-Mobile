import React, { useState, useRef, useEffect } from 'react';
import { generateChatResponse } from '../services/gemini';
import { X, Send, MessageCircle } from 'lucide-react';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: "HEY! 👋 I'm Momo. Ready to make a splash? How can I help your brand today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const response = await generateChatResponse(messages, userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: response || "Something went wrong." }]);
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white text-brand-dark w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px] border-4 border-brand-pink animate-pop-in">
        
        {/* Header */}
        <div className="bg-brand-blue p-4 flex justify-between items-center text-white shadow-md z-10">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-white/20 rounded-full">
                <MessageCircle className="w-5 h-5 fill-current" />
            </div>
            <h3 className="font-display text-xl tracking-wide">MOMO ASSISTANT</h3>
          </div>
          <button onClick={onClose} className="hover:bg-white/20 p-1 rounded-full transition hover:rotate-90 duration-300">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4" ref={scrollRef}>
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}>
              <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-brand-pink text-white rounded-br-none' 
                  : 'bg-white text-brand-dark border border-gray-100 rounded-bl-none'
              }`}>
                <p className="text-sm font-medium leading-relaxed">{msg.text}</p>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start animate-pulse">
              <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-bl-none shadow-sm">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-brand-blue rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-brand-blue rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-brand-blue rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100 z-10">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about motion graphics..."
              className="flex-1 px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue text-brand-dark placeholder-gray-400 transition-shadow"
              autoFocus
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="bg-brand-blue hover:bg-brand-dark text-white p-3 rounded-xl transition-all disabled:opacity-50 hover:scale-105 active:scale-95 shadow-lg shadow-brand-blue/30"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChatModal;