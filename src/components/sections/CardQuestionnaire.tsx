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
    instagram: "",
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
                : "bg-[#9B5DE5]/10 text-[#9B5DE5]/40"
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
      <div className="w-full h-1.5 bg-[#9B5DE5]/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#9B5DE5] rounded-full transition-all duration-400 ease-in-out"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );

  const goalOptions = [
    { id: "muscle-gain", label: "Muscle gain" },
    { id: "fat-loss", label: "Fat loss" },
    { id: "lifestyle-change", label: "Lifestyle change" },
    { id: "other", label: "Other" },
  ];

  // If we're showing success message
  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full rounded-xl bg-white/60 backdrop-blur-md p-8 border border-[#9B5DE5]/30 shadow-lg"
      >
        <div className="text-center">
          <div className="w-20 h-20 bg-[#9B5DE5]/20 rounded-full mx-auto flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-[#9B5DE5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[#9B5DE5] mb-3 uppercase text-center" style={{ fontFamily: "'Sequel', sans-serif" }}>Thank you for your inquiry!</h3>
          <p className="text-[#9B5DE5]/70">
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
        <h3 className="text-base md:text-xl font-bold text-[#9B5DE5] mb-3 md:mb-5 uppercase text-center" style={{ fontFamily: "'Sequel', sans-serif" }}>What do you want to achieve?</h3>
        <div className="space-y-3">
          {/* Goal selection buttons */}
          {goalOptions.map((option) => (
            <motion.button
              key={option.id}
              onClick={() => handleSelect(option.label)}
              className={`w-full rounded-xl transition-all duration-300 flex items-center justify-center text-sm md:text-base ${
                selectedGoal === option.label
                  ? "p-4 md:p-6 bg-[#9B5DE5]/20 border-2 border-[#9B5DE5]/50 text-[#9B5DE5] shadow-lg"
                  : "p-3 md:p-5 bg-white/60 border border-[#9B5DE5]/20 text-[#9B5DE5] hover:bg-[#9B5DE5]/10 hover:shadow-sm"
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
                className="w-full p-4 rounded-xl border border-[#9B5DE5]/20 bg-white/60 text-[#9B5DE5] text-center focus:ring-2 focus:ring-primary/50 focus:border-primary/50 h-24 resize-none transition duration-200"
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
                  : "bg-[#9B5DE5]/20 cursor-not-allowed text-[#9B5DE5]/40"
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
    const ageOptions = [
      { id: "18-20", label: "18–20" },
      { id: "20-25", label: "20–25" },
      { id: "25-30", label: "25–30" },
      { id: "30+", label: "30+" },
    ];

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
            className="mr-3 w-8 h-8 rounded-full bg-[#9B5DE5]/10 hover:bg-[#9B5DE5]/20 flex items-center justify-center text-[#9B5DE5]"
          >
            ←
          </button>
          <h3 className="text-xl font-bold text-[#9B5DE5] uppercase text-center" style={{ fontFamily: "'Sequel', sans-serif" }}>How old are you?</h3>
        </div>

        <div className="space-y-3 mt-3">
          {ageOptions.map((option) => (
            <motion.button
              key={option.id}
              onClick={() => setAnswers((prev) => ({ ...prev, birthdate: option.label }))}
              className={`w-full rounded-xl transition-all duration-300 flex items-center justify-center text-sm md:text-base ${
                answers.birthdate === option.label
                  ? "p-4 md:p-6 bg-[#9B5DE5]/20 border-2 border-[#9B5DE5]/50 text-[#9B5DE5] shadow-lg"
                  : "p-3 md:p-5 bg-white/60 border border-[#9B5DE5]/20 text-[#9B5DE5] hover:bg-[#9B5DE5]/10 hover:shadow-sm"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <span className="font-medium">{option.label}</span>
            </motion.button>
          ))}

          {/* Next button */}
          <div className="mt-5 md:mt-8">
            <motion.button
              onClick={nextStep}
              disabled={!answers.birthdate}
              className={`w-full p-3 md:p-4 rounded-xl text-white font-medium transition-all duration-300 ${
                answers.birthdate
                  ? "bg-[#9B5DE5] hover:bg-[#8a4dd4] shadow-md hover:shadow-lg"
                  : "bg-[#9B5DE5]/20 cursor-not-allowed text-[#9B5DE5]/40"
              }`}
              whileHover={answers.birthdate ? { y: -2 } : {}}
              whileTap={answers.birthdate ? { y: 0 } : {}}
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
            className="mr-3 w-8 h-8 rounded-full bg-[#9B5DE5]/10 hover:bg-[#9B5DE5]/20 flex items-center justify-center text-[#9B5DE5]"
          >
            ←
          </button>
          <h3 className="text-sm font-bold text-[#9B5DE5] uppercase text-center" style={{ fontFamily: "'Sequel', sans-serif" }}>What are you struggling with right now?</h3>
        </div>
        
        <div className="mt-3">
          <p className="text-[#9B5DE5]/70 mb-4 text-center">
            Explain in a few sentences what you want to achieve through coaching.
          </p>
          <textarea
            name="moreDetails"
            value={answers.moreDetails}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-[#9B5DE5]/20 bg-white/60 text-[#9B5DE5] text-center focus:ring-2 focus:ring-primary/50 focus:border-primary/50 h-32 resize-none transition duration-200"
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
            className="mr-3 w-8 h-8 rounded-full bg-[#9B5DE5]/10 hover:bg-[#9B5DE5]/20 flex items-center justify-center text-[#9B5DE5]"
          >
            ←
          </button>
          <h3 className="text-xl font-bold text-[#9B5DE5] uppercase text-center" style={{ fontFamily: "'Sequel', sans-serif" }}>Your contact information</h3>
        </div>
        
        <div className="space-y-4 mt-3">
          <div>
            <label htmlFor="name" className="block text-[#9B5DE5]/80 mb-1 font-medium text-center">
              Name <span className="text-red-400 text-xs">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={answers.name}
              onChange={handleChange}
              className="w-full p-3 md:p-4 rounded-xl border border-[#9B5DE5]/20 bg-white/60 text-[#9B5DE5] text-sm md:text-base text-center focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition duration-200"
              placeholder="Your full name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-[#9B5DE5]/80 mb-1 font-medium text-center">
              Email <span className="text-red-400 text-xs">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={answers.email}
              onChange={handleChange}
              className="w-full p-3 md:p-4 rounded-xl border border-[#9B5DE5]/20 bg-white/60 text-[#9B5DE5] text-sm md:text-base text-center focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition duration-200"
              placeholder="your@email.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-[#9B5DE5]/80 mb-1 font-medium text-center">
              Phone <span className="text-[#9B5DE5]/40 text-xs font-normal">(optional)</span>
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={answers.phone}
              onChange={handleChange}
              className="w-full p-3 md:p-4 rounded-xl border border-[#9B5DE5]/20 bg-white/60 text-[#9B5DE5] text-sm md:text-base text-center focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition duration-200"
              placeholder="+47 XXX XX XXX"
            />
          </div>

          <div>
            <label htmlFor="instagram" className="block text-[#9B5DE5]/80 mb-1 font-medium text-center">
              Instagram <span className="text-red-400 text-xs">*</span>
            </label>
            <input
              type="text"
              name="instagram"
              id="instagram"
              value={answers.instagram}
              onChange={handleChange}
              className="w-full p-3 md:p-4 rounded-xl border border-[#9B5DE5]/20 bg-white/60 text-[#9B5DE5] text-sm md:text-base text-center focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition duration-200"
              placeholder="@yourusername"
              required
            />
          </div>
          
          {/* Submit button */}
          <div className="pt-4">
            <motion.button
              onClick={handleSubmit}
              disabled={isSubmitting || !answers.name || !answers.email || !answers.instagram}
              className={`w-full p-3 md:p-4 rounded-xl text-white font-medium transition-all duration-300 ${
                isSubmitting || !answers.name || !answers.email || !answers.instagram
                  ? "bg-white/20 cursor-not-allowed"
                  : "bg-[#9B5DE5] hover:bg-[#8a4dd4] shadow-md hover:shadow-lg"
              }`}
              whileHover={!isSubmitting && answers.name && answers.email && answers.instagram ? { y: -2 } : {}}
              whileTap={!isSubmitting && answers.name && answers.email && answers.instagram ? { y: 0 } : {}}
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
            
            <p className="mt-4 text-xs text-[#9B5DE5]/50 text-center">
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
