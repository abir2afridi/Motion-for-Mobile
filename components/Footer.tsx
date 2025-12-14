import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-brand-dark py-16 text-sm">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
        
        {/* Logo/Info */}
        <div className="md:col-span-1">
          <h3 className="font-display text-2xl text-brand-blue mb-4">mot/on <span className="text-gray-400 text-sm font-sans normal-case">for mobile</span></h3>
          <p className="text-gray-500 leading-relaxed mb-6">
            Motion For Mobile is a social media marketing product for brands looking to produce high quality, dynamic video content. Designed with a mobile-first approach.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-brand-pink hover:text-white transition"><Instagram size={18}/></a>
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-brand-blue hover:text-white transition"><Facebook size={18}/></a>
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-brand-dark hover:text-white transition"><Linkedin size={18}/></a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-bold text-brand-blue mb-4">Navigation</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-brand-pink">Home</a></li>
            <li><a href="#" className="hover:text-brand-pink">About Us</a></li>
            <li><a href="#" className="hover:text-brand-pink">Packages</a></li>
            <li><a href="#" className="hover:text-brand-pink">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-brand-blue mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Motion For Mobile</li>
            <li>hello@motionformobile.com</li>
            <li>+64 04 282 0007</li>
            <li className="pt-2">Level 4, 17 Garrett Street</li>
            <li>Te Aro, Wellington</li>
            <li>New Zealand 6011</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold text-brand-blue mb-4">Legal Bits</h4>
          <ul className="space-y-2 text-gray-600">
            <li>© 2024 Motion for Mobile Ltd.</li>
            <li><a href="#" className="hover:text-brand-pink">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-brand-pink">Privacy Policy</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;