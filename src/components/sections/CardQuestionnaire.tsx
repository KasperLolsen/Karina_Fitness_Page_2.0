import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { sendFormDataToEmail } from "../../services/emailService";

const CardQuestionnaire: React.FC = () => {
  // Track current question and all answers
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedGoal, setSelectedGoal] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [answers, setAnswers] = useState({
    helpWith: "",
    birthdate: "",
    moreDetails: "",
    annetDetails: "",
    name: "",
    email: "",
    phone: "",
  });

  // Add loading and error states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [dealAccepted, setDealAccepted] = useState(false);

  // Initialize EmailJS when component mounts
  useEffect(() => {
    // No need to initialize here, it's already done in emailService.ts
  }, []);

  // Handle goal selection
  const handleSelect = (option: string) => {
    setSelectedGoal(option);
    setAnswers((prev) => ({ ...prev, helpWith: option }));
  };

  // Handle birthdate dropdown changes
  const handleBirthDropdown = (field: "day" | "month" | "year", value: string) => {
    const newDay = field === "day" ? value : birthDay;
    const newMonth = field === "month" ? value : birthMonth;
    const newYear = field === "year" ? value : birthYear;
    if (field === "day") setBirthDay(value);
    if (field === "month") setBirthMonth(value);
    if (field === "year") setBirthYear(value);
    if (newDay && newMonth && newYear) {
      const formatted = `${newYear}-${newMonth.padStart(2, "0")}-${newDay.padStart(2, "0")}`;
      setAnswers((prev) => ({ ...prev, birthdate: formatted }));
    }
  };

  const isBirthdateComplete = birthDay !== "" && birthMonth !== "" && birthYear !== "";

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  // Move to next question
  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  // Go back to previous step
  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      console.log("Sending form data:", answers);
      const success = await sendFormDataToEmail(answers);

      if (success) {
        console.log("Email sent successfully");
        setIsSuccess(true);
      } else {
        setSubmitError("Could not send the message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalSteps = 4;

  const ProgressBar = () => (
    <div className="mb-4 md:mb-6">
      <div className="flex justify-between mb-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-medium transition-all duration-300 ${
              i < currentStep
                ? "bg-[#9B5DE5] text-white"
                : i === currentStep
                ? "bg-[#9B5DE5] text-white ring-2 ring-[#9B5DE5]/50 ring-offset-2 ring-offset-transparent"
                : "bg-white/10 text-white/40"
            }`}
          >
            {i < currentStep ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              i + 1
            )}
          </div>
        ))}
      </div>
      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#9B5DE5] rounded-full transition-all duration-400 ease-in-out"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );

  const goalOptions = [
    { id: "protein-princess", label: "Become a muscle mommy protein princess" },
    { id: "weight-change", label: "Weight change" },
    { id: "lifestyle-change", label: "Change lifestyle and have a better everyday life" },
    { id: "other", label: "Other" },
  ];

  // If we're showing success message
  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-md p-8 border border-primary/30 shadow-lg"
      >
        <div className="text-center">
          <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 uppercase text-center" style={{ fontFamily: "'Sequel', sans-serif" }}>Thank you for your inquiry!</h3>
          <p className="text-white/70">
            I look forward to helping you reach your goals. You will hear from me within 1-2 business days to discuss how we can create results together.
          </p>
        </div>
      </motion.div>
    );
  }

  // If we're showing the first step with goal selection
  if (currentStep === 0) {
    return (
      <div className="w-full">
        <ProgressBar />
        <h3 className="text-base md:text-xl font-bold text-white mb-3 md:mb-5 uppercase text-center" style={{ fontFamily: "'Sequel', sans-serif" }}>What do you want to achieve?</h3>
        <div className="space-y-3">
          {/* Goal selection buttons */}
          {goalOptions.map((option) => (
            <motion.button
              key={option.id}
              onClick={() => handleSelect(option.label)}
              className={`w-full rounded-xl transition-all duration-300 flex items-center justify-center text-sm md:text-base ${
                selectedGoal === option.label
                  ? "p-4 md:p-6 bg-black/40 border-2 border-primary/50 text-white shadow-lg"
                  : "p-3 md:p-5 bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:shadow-sm"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <span className="font-medium">{option.label}</span>
            </motion.button>
          ))}
          
          {/* Special field for "Other" option */}
          {selectedGoal === "Other" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <textarea
                name="annetDetails"
                value={answers.annetDetails}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-white/20 bg-white/10 text-white text-center focus:ring-2 focus:ring-primary/50 focus:border-primary/50 h-24 resize-none transition duration-200"
                placeholder="Tell us about your specific goals..."
              />
            </motion.div>
          )}
          
          {/* Next button */}
          <div className="mt-5 md:mt-8">
            <motion.button
              onClick={nextStep}
              disabled={!selectedGoal}
              className={`w-full p-3 md:p-4 rounded-xl text-white font-medium transition-all duration-300 ${
                selectedGoal 
                  ? "bg-[#9B5DE5] hover:bg-[#8a4dd4] shadow-md hover:shadow-lg" 
                  : "bg-white/20 cursor-not-allowed"
              }`}
              whileHover={selectedGoal ? { y: -2 } : {}}
              whileTap={selectedGoal ? { y: 0 } : {}}
            >
              <span className="text-sm md:text-base">Next step</span>
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  // If we're showing the age selection step
  if (currentStep === 1) {
    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <ProgressBar />
        <div className="flex items-center justify-center mb-5">
          <button
            onClick={prevStep}
            className="mr-3 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
          >
            ←
          </button>
          <h3 className="text-xl font-bold text-white uppercase text-center" style={{ fontFamily: "'Sequel', sans-serif" }}>When were you born?</h3>
        </div>
        
        <div className="mt-3">
          <div className="flex gap-3">
            <select
              value={birthDay}
              onChange={(e) => handleBirthDropdown("day", e.target.value)}
              className="flex-1 p-3 md:p-4 rounded-xl border border-white/20 bg-white/10 text-white text-sm md:text-base text-center focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition duration-200 appearance-none cursor-pointer"
            >
              <option value="" disabled className="bg-gray-900">Day</option>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={String(i + 1)} className="bg-gray-900">
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              value={birthMonth}
              onChange={(e) => handleBirthDropdown("month", e.target.value)}
              className="flex-[2] p-3 md:p-4 rounded-xl border border-white/20 bg-white/10 text-white text-sm md:text-base text-center focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition duration-200 appearance-none cursor-pointer"
            >
              <option value="" disabled className="bg-gray-900">Month</option>
              {months.map((m, i) => (
                <option key={m} value={String(i + 1)} className="bg-gray-900">
                  {m}
                </option>
              ))}
            </select>
            <select
              value={birthYear}
              onChange={(e) => handleBirthDropdown("year", e.target.value)}
              className="flex-1 p-3 md:p-4 rounded-xl border border-white/20 bg-white/10 text-white text-sm md:text-base text-center focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition duration-200 appearance-none cursor-pointer"
            >
              <option value="" disabled className="bg-gray-900">Year</option>
              {Array.from({ length: 80 }, (_, i) => {
                const year = new Date().getFullYear() - 10 - i;
                return (
                  <option key={year} value={String(year)} className="bg-gray-900">
                    {year}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Next button */}
          <div className="mt-5 md:mt-8">
            <motion.button
              onClick={nextStep}
              disabled={!isBirthdateComplete}
              className={`w-full p-3 md:p-4 rounded-xl text-white font-medium transition-all duration-300 ${
                isBirthdateComplete
                  ? "bg-[#9B5DE5] hover:bg-[#8a4dd4] shadow-md hover:shadow-lg"
                  : "bg-white/20 cursor-not-allowed"
              }`}
              whileHover={isBirthdateComplete ? { y: -2 } : {}}
              whileTap={isBirthdateComplete ? { y: 0 } : {}}
            >
              <span className="text-sm md:text-base">Next step</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  }

  // If we're showing the additional details step
  if (currentStep === 2) {
    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <ProgressBar />
        <div className="flex items-center justify-center mb-5">
          <button
            onClick={prevStep}
            className="mr-3 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
          >
            ←
          </button>
          <h3 className="text-xl font-bold text-white uppercase text-center" style={{ fontFamily: "'Sequel', sans-serif" }}>Girl, tell me EVERYTHING</h3>
        </div>
        
        <div className="mt-3">
          <p className="text-white/70 mb-4 text-center">
            Explain in a few sentences what you want to achieve through coaching.
          </p>
          <textarea
            name="moreDetails"
            value={answers.moreDetails}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-white/20 bg-white/10 text-white text-center focus:ring-2 focus:ring-primary/50 focus:border-primary/50 h-32 resize-none transition duration-200"
            placeholder="E.g. increase strength, build bigger muscles, lose weight, gain weight, build good habits, better quality of life, etc."
          />
          
          {/* Navigation buttons */}
          <div className="flex gap-4 mt-6">
            <motion.button
              onClick={nextStep}
              className="w-full p-4 bg-[#9B5DE5] hover:bg-[#8a4dd4] rounded-xl text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <span className="text-sm md:text-base">Next step</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  }

  // If we're showing the contact info step
  if (currentStep === 3) {
    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <ProgressBar />
        <div className="flex items-center justify-center mb-5">
          <button
            onClick={prevStep}
            className="mr-3 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
          >
            ←
          </button>
          <h3 className="text-xl font-bold text-white uppercase text-center" style={{ fontFamily: "'Sequel', sans-serif" }}>Your contact information</h3>
        </div>
        
        <div className="space-y-4 mt-3">
          <div>
            <label htmlFor="name" className="block text-white/80 mb-1 font-medium text-center">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={answers.name}
              onChange={handleChange}
              className="w-full p-3 md:p-4 rounded-xl border border-white/20 bg-white/10 text-white text-sm md:text-base text-center focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition duration-200"
              placeholder="Your full name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-white/80 mb-1 font-medium text-center">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={answers.email}
              onChange={handleChange}
              className="w-full p-3 md:p-4 rounded-xl border border-white/20 bg-white/10 text-white text-sm md:text-base text-center focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition duration-200"
              placeholder="your@email.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-white/80 mb-1 font-medium text-center">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={answers.phone}
              onChange={handleChange}
              className="w-full p-3 md:p-4 rounded-xl border border-white/20 bg-white/10 text-white text-sm md:text-base text-center focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition duration-200"
              placeholder="+47 XXX XX XXX"
              required
            />
          </div>
          
          {/* Deal checkbox */}
          <div className="pt-2">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={dealAccepted}
                onChange={(e) => setDealAccepted(e.target.checked)}
                className="w-5 h-5 rounded border-white/30 bg-white/10 text-[#9B5DE5] focus:ring-[#9B5DE5]/50 cursor-pointer accent-[#9B5DE5]"
              />
              <span className="text-white font-medium text-sm">{dealAccepted ? "Yes, we have a deal!" : "We have a deal?"}</span>
              <a
                href="#how-it-works"
                className="text-white/40 text-xs hover:text-primary transition-colors ml-1"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('how-it-works');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  const btn = el?.querySelector('button') as HTMLButtonElement;
                  const content = el?.querySelector('.overflow-hidden');
                  if (btn && !content) btn.click();
                }}
              >
                What's the deal?
              </a>
            </label>
          </div>

          {/* Submit button */}
          <div className="pt-4">
            <motion.button
              onClick={handleSubmit}
              disabled={isSubmitting || !answers.name || !answers.email || !answers.phone || !dealAccepted}
              className={`w-full p-3 md:p-4 rounded-xl text-white font-medium transition-all duration-300 ${
                isSubmitting || !answers.name || !answers.email || !answers.phone || !dealAccepted
                  ? "bg-white/20 cursor-not-allowed"
                  : "bg-[#9B5DE5] hover:bg-[#8a4dd4] shadow-md hover:shadow-lg"
              }`}
              whileHover={!isSubmitting && answers.name && answers.email && answers.phone && dealAccepted ? { y: -2 } : {}}
              whileTap={!isSubmitting && answers.name && answers.email && answers.phone && dealAccepted ? { y: 0 } : {}}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Submit"
              )}
            </motion.button>
            
            {submitError && (
              <p className="mt-3 text-red-500 text-sm">
                {submitError}
              </p>
            )}
            
            <p className="mt-4 text-xs text-white/50 text-center">
              By submitting this form, you agree that I may contact you regarding fitness services. I respect your privacy and your data will never be shared with third parties.
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  // Fallback (should never happen, but just in case)
  return null;
};

export default CardQuestionnaire;
