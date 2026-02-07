import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CardQuestionnaire from './CardQuestionnaire';

const Contact: React.FC = () => {
  const [isDealOpen, setIsDealOpen] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden pt-24 pb-24">
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-wide uppercase" style={{ fontFamily: "'Sequel', sans-serif", color: '#ffe7fd' }}>
            Become a better version of yourself
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            I want to know how I can help YOU best. Tell me a little about yourself and your goals!
          </p>
          
          <div className="relative">
            {/* Subtle shadow and border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-2xl blur-md"></div>
            
            <div className="relative p-8 md:p-10 rounded-xl shadow-xl" style={{ backgroundColor: '#1a0a2e' }}>
              <CardQuestionnaire />
            </div>
          </div>

          {/* What's the deal? dropdown */}
          <div id="how-it-works" className="mt-8 scroll-mt-24">
            <button
              onClick={() => setIsDealOpen(!isDealOpen)}
              className="w-full flex items-center justify-between p-5 rounded-xl border border-pink-500/20 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-lg md:text-xl font-bold text-primary uppercase" style={{ fontFamily: "'Sequel', sans-serif" }}>
                What's the deal?
              </h3>
              <svg
                className={`w-5 h-5 text-primary transition-transform duration-300 ${isDealOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {isDealOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 md:p-8 border border-t-0 border-pink-500/20 rounded-b-xl bg-white/5 backdrop-blur-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <h4 className="text-xl md:text-2xl font-bold text-primary mb-6 uppercase" style={{ fontFamily: "'Sequel', sans-serif" }}>
                      GET FIT, PAY $0 — HOW IT WORKS
                    </h4>

                    <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: '#ffe7fd' }}>
                      <p>
                        Most coaching programs make money whether you succeed or not.<br />
                        I only win when you do.
                      </p>

                      <p className="font-semibold">Here's the deal:</p>

                      <ul className="space-y-3 my-4">
                        {[
                          "Follow the plan",
                          "Reach your agreed-upon goal",
                          "Show up to check-in once a week",
                          "Pay nothing",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded bg-pink-500/20 border border-pink-500/40 flex items-center justify-center shrink-0">
                              <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <p>
                        If you don't follow through on the agreed actions or don't complete the program, you pay the program fee.
                      </p>

                      <p className="font-semibold">Simple.</p>

                      <p>
                        This program isn't about selling information. It's about execution, accountability, and real results.
                      </p>

                      <div className="mt-8">
                        <h5 className="text-lg md:text-xl font-bold text-primary mb-4 uppercase" style={{ fontFamily: "'Sequel', sans-serif" }}>
                          SO WHAT'S IN IT FOR ME?
                        </h5>

                        <p>My incentive is simple: I want proof that my system works.</p>

                        <p className="mt-4">
                          Successful clients build my reputation, create powerful testimonials, and generate referrals. That's far more valuable than a single coaching payment.
                        </p>

                        <p className="mt-4">When you succeed, I gain:</p>

                        <ul className="mt-3 space-y-3">
                          {["Social proof", "Transformations I can showcase", "Long-term client relationships", "Referrals from happy clients"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded bg-pink-500/20 border border-pink-500/40 flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <p className="mt-4">
                          This aligns our incentives, we're working toward the same outcome from day one.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 