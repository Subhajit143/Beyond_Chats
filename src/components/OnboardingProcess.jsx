import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"; 
import { useSelector } from "react-redux"
import UserRegistration from "./UserRegistration"
import EmailVerification from "./EmailVerification"
import SetupOrganization from "./SetupOrganization"
import WebsiteScraping from "./WebsiteScraping"
import ChatbotIntegration from "./ChatbotIntegration"
import IntegrationTest from "./IntegrationTest"
import Loader from "./Loader";
import Navbar from "./Navbar";

const OnboardingProcess = () => {
  const step = useSelector((state) => state.onboarding.step)
  const [showLoader, setShowLoader] = useState(false);

  // Hide Navbar for specific steps
  const hideNavbarSteps = [1, 2, 3]; // Steps where the Navbar should be hidden
  const showNavbar = !hideNavbarSteps.includes(step);

  useEffect(() => {
    if (step === 4) {
      setShowLoader(true);
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 5000); // Show loader for 5 seconds

      return () => clearTimeout(timer); // Cleanup timeout on unmount
    }
  }, [step]);

  const renderStep = () => {
    if (step === 4 && showLoader) {
      return <Loader />; // Show loader before WebsiteScraping page
    }
    switch (step) {
      case 1:
        return <UserRegistration />
      case 2:
        return <EmailVerification />
      case 3:
        return <SetupOrganization />
      case 4:
        return <WebsiteScraping />
      case 5:
        return <ChatbotIntegration />
      case 6:
        return <IntegrationTest />
      default:
        return <UserRegistration />
    }
  }

  return (
    <div className="container mx-auto">
      {/* Conditionally render Navbar */}
      {showNavbar && <Navbar />}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={step} // Ensure animation triggers on step change
          initial={{ opacity: 0, x: 50 }} // Initial state (fade in from right)
          animate={{ opacity: 1, x: 0 }} // Animate to full opacity and position
          exit={{ opacity: 0, x: -50 }} // Exit animation (fade out to left)
          transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
          className="w-full"
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default OnboardingProcess;
