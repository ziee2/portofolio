'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  actionUrl?: string;
};

const INITIAL_MESSAGE: Message = {
  id: 'init-1',
  sender: 'ai',
  text: 'Halo! Saya asisten AI Faried. Ada yang ingin Anda ketahui tentang profil, pengalaman, atau proyek Faried?',
};

const QUICK_ACTIONS = [
  { id: 'q1', text: 'Apa keahlian utamanya?', reply: 'Faried berspesialisasi dalam AI (Computer Vision & NLP) serta Full-Stack Web Development menggunakan Python, TensorFlow, dan React/Next.js.' },
  { id: 'q2', text: 'Ceritakan proyek terbesarnya!', reply: 'Proyek terbesarnya adalah TomKits, sistem deteksi penyakit tomat dengan akurasi 98% menggunakan EfficientNet yang dideploy sebagai REST API.' },
  { id: 'q3', text: 'Download CV', reply: 'Tentu! Anda bisa mengunduh CV Faried melalui tautan di bawah ini:', actionUrl: '#' },
];

export default function ChatbotBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleActionClick = (action: typeof QUICK_ACTIONS[0]) => {
    const userMsg: Message = { id: Date.now().toString() + '-user', sender: 'user', text: action.text };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg: Message = { id: Date.now().toString() + '-ai', sender: 'ai', text: action.reply, actionUrl: action.actionUrl };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-24 right-5 sm:right-8 z-[100] w-[320px] sm:w-[360px] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white/90 shadow-2xl backdrop-blur-xl flex flex-col"
          >
            {/* Header */}
            <div className="bg-ink px-5 py-4 text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
                <div>
                  <h3 className="text-sm font-semibold tracking-wide">AI Assistant</h3>
                  <p className="text-[10px] text-cyan-200/80">Online & ready</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="rounded-full p-1 text-white/70 hover:bg-white/10 hover:text-white transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-5 overflow-y-auto max-h-[360px] bg-[#fbfaf7]/60 space-y-5 scrollbar-thin">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-[1.15rem] px-4 py-3 text-[13px] leading-relaxed shadow-sm ${msg.sender === 'user' ? 'bg-ink text-white rounded-br-sm' : 'bg-white border border-slate-200 text-slate-700 rounded-bl-sm'}`}>
                    {msg.text}
                    {msg.actionUrl && (
                      <div className="mt-3">
                        <a href={msg.actionUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[11px] font-semibold text-white shadow-sm transition hover:bg-slate-800 hover:-translate-y-0.5">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                          Download CV
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 rounded-[1.15rem] rounded-bl-sm px-4 py-3 shadow-sm flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions Footer */}
            <div className="bg-white p-4 border-t border-slate-100 flex flex-wrap gap-2">
              {QUICK_ACTIONS.map((action) => (
                <button 
                  key={action.id} 
                  onClick={() => handleActionClick(action)}
                  disabled={isTyping}
                  className="rounded-full border border-cyan-100 bg-cyan-50/50 px-3.5 py-2 text-[11px] font-semibold text-cyan-800 transition hover:bg-cyan-100 hover:text-cyan-900 hover:border-cyan-200 hover:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {action.text}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[100] flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-ink text-white shadow-xl hover:shadow-cyan-500/20 transition-all group"
      >
        <span className="absolute inset-0 rounded-full bg-cyan-400 opacity-20 blur-md transition-opacity group-hover:opacity-40"></span>
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M3 5v14"></path><path d="m3 19 4-4"></path></svg>
        )}
      </motion.button>
    </>
  );
}
