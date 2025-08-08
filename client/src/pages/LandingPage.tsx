import React, { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export const LandingPage = (): JSX.Element => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Navigation items
  const navItems = [
    { label: "About Us", sectionId: "hero" },
    { label: "SAP Services", sectionId: "sap-services" },
    { label: "SAP AMS", sectionId: "sap-ams" },
  ];

  // Service overlays data
  const serviceOverlays = {
    "SAP Core Banking": {
      title: "SAP Core Banking Solutions",
      description: "Comprehensive banking solutions including loans management, transactional banking, and financial products subledger. Our expertise covers end-to-end implementation and optimization.",
      features: ["Implementation & Migration", "Performance Optimization", "Custom Development", "Integration Services"]
    },
    "SAP Business Technology Platform (BTP)": {
      title: "SAP BTP Services",
      description: "Cloud-native platform services for integration, analytics, and application development. We help businesses leverage the full potential of SAP's technology platform.",
      features: ["Cloud Integration", "Analytics & Reporting", "Application Development", "Platform Management"]
    },
    "SAP Omnichannel Banking (OCB)": {
      title: "SAP Omnichannel Banking",
      description: "Modern banking experiences across all customer touchpoints. We implement unified banking solutions that deliver consistent experiences across web, mobile, and branch channels.",
      features: ["Channel Integration", "Customer Journey", "Digital Banking", "Mobile Solutions"]
    },
    "SAP Software Development": {
      title: "Custom SAP Development",
      description: "Tailored SAP solutions built to meet your specific business requirements. Our development team creates custom applications and extensions.",
      features: ["Custom Applications", "System Extensions", "API Development", "Technical Architecture"]
    },
    "SAP S/4HANA": {
      title: "SAP S/4HANA Implementation",
      description: "Complete S/4HANA transformation services from ECC migration to new implementations. We cover all modules including FI, TRM, and specialized banking components.",
      features: ["ECC Migration", "New Implementation", "Module Configuration", "Post-Go-Live Support"]
    },
    "Help Desk Services": {
      title: "24/7 Help Desk Support",
      description: "Round-the-clock technical support for your SAP systems. Our experienced team provides immediate assistance and resolution for system issues.",
      features: ["24/7 Support", "Incident Management", "User Training", "System Monitoring"]
    },
    "Staff Augmentation for AMS": {
      title: "SAP Staff Augmentation",
      description: "Extend your team with our skilled SAP professionals. We provide experienced consultants to supplement your internal capabilities.",
      features: ["Skilled Consultants", "Flexible Engagement", "Knowledge Transfer", "Team Integration"]
    },
    "AMS Service Management": {
      title: "Application Management Services",
      description: "Comprehensive management of your SAP applications including maintenance, monitoring, and continuous improvement initiatives.",
      features: ["System Maintenance", "Performance Monitoring", "Change Management", "Continuous Improvement"]
    },
    "Nearshore IT Services": {
      title: "Nearshore SAP Services",
      description: "Cost-effective SAP services delivered from our nearshore centers with cultural alignment and timezone compatibility.",
      features: ["Cost Optimization", "Cultural Alignment", "Timezone Coverage", "Quality Delivery"]
    },
    "SAP Basis Services": {
      title: "SAP Basis Administration",
      description: "Complete SAP Basis services including system administration, performance tuning, and infrastructure management.",
      features: ["System Administration", "Performance Tuning", "Infrastructure Management", "Security Management"]
    }
  };

  // SAP Core Banking services
  const coreBankingServices = [
    "SAP Loans Management (CML)",
    "SAP Transactional Banking (TRBK)",
    "SAP Financial Products Subledger (FPSL)",
    "SAP Fioneer Cloud for Banking",
    "SAP Collateral Management (CMS)",
    "SAP S/4HANA Banking for Complex Loans",
    "SAP Payment Engine (FS-PE)",
  ];

  // SAP S/4HANA services
  const s4hanaServices = [
    "ECC to S/4HANA Transition",
    "Financial Accounting (FI)",
    "SAP Contract and Lease Management (CLM / RE-FX)",
    "SAP Treasury and Risk Management (TRM)",
    "SAP Collections and Dispute Management",
    "SAP Credit Management (CM)",
  ];

  // SAP AMS services
  const amsServices = [
    "Help Desk Services",
    "Staff Augmentation for AMS",
    "AMS Service Management",
    "Nearshore IT Services",
    "SAP Basis Services",
  ];

  return (
    <div className="bg-white grid justify-items-center [align-items:start] w-screen scroll-smooth">
      <motion.div 
        initial="hidden"
        animate="visible"
        className="bg-white overflow-hidden w-full max-w-[1200px] relative"
      >
        {/* Header */}
        <motion.header 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-[164px] bg-[#303a7e] flex items-center justify-between px-8"
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="w-[191px] h-32 object-cover cursor-pointer"
            alt="Raarv Logo"
            src="/figmaAssets/image-4.png"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-12"
          >
            {navItems.map((item, index) => (
              <motion.div key={index} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="link"
                  onClick={() => scrollToSection(item.sectionId)}
                  className="font-body-text text-white text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] transition-colors hover:text-blue-200 cursor-pointer"
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="default"
                onClick={() => scrollToSection('contact')}
                className="bg-white text-black rounded-lg shadow-button-shadow px-6 py-3.5 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <span className="font-small-text text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)]">
                  Contact Us
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.header>

        {/* Hero Section */}
        <motion.section 
          id="hero"
          className="flex flex-row justify-between mt-[40px] px-[60px]"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8 max-w-[700px]"
          >
            <div className="flex flex-col gap-6">
              <motion.h1 
                variants={fadeInUp}
                className="font-['Inter',Helvetica] font-bold text-black text-[48px] lg:text-[64px] tracking-[-1.28px]"
              >
                Raarv Inc
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="font-['Inter',Helvetica] font-normal text-black text-lg lg:text-xl leading-relaxed mt-[30px]"
              >
                We&apos;re a dedicated boutique SAP consulting firm specializing
                in SAP and Fioneer financial services and SAP AMS. With 20+
                years of hands-on experience working with clients across the
                globe in areas such as core banking, financials, and
                architecture. We deliver practical, high-impact solutions — from
                full implementations to ongoing support. Our expertise spans
                Account Origination, Loans and Collateral Management, Financial
                Accounting, and more.
                <br />
                <br />
                SAP made simple. Results made real.
              </motion.p>
              <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#303a7e] text-white px-8 py-5 rounded-lg shadow-blur-glass mt-10 w-fit hover:bg-[#2a3370] transition-colors cursor-pointer"
                >
                  <span className="font-['Inter',Helvetica] text-2xl">
                    Contact Us
                  </span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] object-cover"
            alt="Raarv Consulting"
            src="/figmaAssets/image-5.png"
          />
        </motion.section>

        {/* SAP Services Section */}
        <motion.section 
          id="sap-services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mt-[120px] px-[60px] relative"
        >
          <motion.h2 
            variants={fadeInUp}
            className="font-['Inter',Helvetica] font-semibold text-black text-3xl lg:text-4xl tracking-[-0.96px]"
          >
            SAP Services
          </motion.h2>

          <motion.div 
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-8 mt-[40px] ml-0 lg:ml-[18px]"
          >
            {/* Core Banking Column */}
            <motion.div 
              variants={fadeInLeft}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredService('SAP Core Banking')}
              onHoverEnd={() => setHoveredService(null)}
              className="flex flex-col w-full lg:w-[350px] p-4 rounded-lg hover:shadow-lg transition-shadow cursor-pointer relative"
            >
              <h3 className="font-['Inter',Helvetica] font-medium text-black text-2xl leading-9">
                SAP Core Banking
              </h3>
              <ul className="mt-1 font-['Inter',Helvetica] font-normal text-[#828282] text-xl leading-[30px]">
                {coreBankingServices.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </motion.div>

            {/* Middle Column */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col w-full lg:w-[350px] gap-12 lg:gap-[80px]"
            >
              <motion.div 
                whileHover={{ x: 10 }} 
                onHoverStart={() => setHoveredService('SAP Business Technology Platform (BTP)')}
                onHoverEnd={() => setHoveredService(null)}
                className="p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer relative"
              >
                <h3 className="font-['Inter',Helvetica] font-medium text-black text-2xl leading-9">
                  SAP Business Technology Platform (BTP)
                </h3>
              </motion.div>
              <motion.div 
                whileHover={{ x: 10 }} 
                onHoverStart={() => setHoveredService('SAP Omnichannel Banking (OCB)')}
                onHoverEnd={() => setHoveredService(null)}
                className="p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer relative"
              >
                <h3 className="font-['Inter',Helvetica] font-medium text-black text-2xl leading-9">
                  SAP Omnichannel Banking (OCB)
                </h3>
              </motion.div>
              <motion.div 
                whileHover={{ x: 10 }} 
                onHoverStart={() => setHoveredService('SAP Software Development')}
                onHoverEnd={() => setHoveredService(null)}
                className="p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer relative"
              >
                <h3 className="font-['Inter',Helvetica] font-medium text-black text-2xl leading-9">
                  SAP Software Development
                </h3>
              </motion.div>
            </motion.div>

            {/* S/4HANA Column */}
            <motion.div 
              variants={fadeInRight}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredService('SAP S/4HANA')}
              onHoverEnd={() => setHoveredService(null)}
              className="flex flex-col w-full lg:w-[350px] p-4 rounded-lg hover:shadow-lg transition-shadow cursor-pointer relative"
            >
              <h3 className="font-['Inter',Helvetica] font-medium text-black text-2xl leading-9">
                SAP S/4HANA
              </h3>
              <ul className="mt-1 font-['Inter',Helvetica] font-normal text-[#828282] text-xl leading-[30px]">
                {s4hanaServices.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Service Overlay */}
          <AnimatePresence>
            {hoveredService && serviceOverlays[hoveredService as keyof typeof serviceOverlays] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-0 right-0 z-50 bg-white border border-gray-200 rounded-xl shadow-2xl p-6 w-[400px] max-h-[300px] overflow-hidden"
                style={{ marginRight: '-50px', marginTop: '100px' }}
              >
                <div className="relative">
                  <h4 className="font-['Inter',Helvetica] font-semibold text-[#303a7e] text-xl mb-3">
                    {serviceOverlays[hoveredService as keyof typeof serviceOverlays].title}
                  </h4>
                  <p className="font-['Inter',Helvetica] text-gray-600 text-sm leading-relaxed mb-4">
                    {serviceOverlays[hoveredService as keyof typeof serviceOverlays].description}
                  </p>
                  <div className="border-t border-gray-100 pt-3">
                    <h5 className="font-['Inter',Helvetica] font-medium text-gray-800 text-sm mb-2">Key Services:</h5>
                    <ul className="grid grid-cols-2 gap-1">
                      {serviceOverlays[hoveredService as keyof typeof serviceOverlays].features.map((feature, index) => (
                        <li key={index} className="font-['Inter',Helvetica] text-xs text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#303a7e] rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        {/* SAP AMS Section */}
        <motion.section 
          id="sap-ams"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-[80px] px-[60px] flex flex-col lg:flex-row justify-between items-start gap-8 relative"
        >
          <motion.div variants={fadeInLeft}>
            <motion.h2 
              variants={fadeInUp}
              className="font-['Inter',Helvetica] font-semibold text-black text-3xl lg:text-4xl tracking-[-0.96px]"
            >
              SAP AMS
            </motion.h2>
            <motion.div 
              variants={staggerContainer}
              className="mt-[30px] space-y-4 w-full lg:w-auto"
            >
              {amsServices.map((service, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  whileHover={{ x: 10, y: -2 }}
                  onHoverStart={() => setHoveredService(service)}
                  onHoverEnd={() => setHoveredService(null)}
                  className="p-4 rounded-lg hover:shadow-lg hover:bg-gray-50 transition-all cursor-pointer relative"
                >
                  <h3 className="font-['Inter',Helvetica] font-medium text-black text-2xl leading-9 hover:text-[#303a7e] transition-colors">
                    {service}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.img
            variants={fadeInRight}
            whileHover={{ scale: 1.02 }}
            className="w-full lg:w-[450px] h-[300px] lg:h-[450px] object-cover rounded-lg"
            alt="SAP Support"
            src="/figmaAssets/image-6.png"
          />

          {/* AMS Service Overlay */}
          <AnimatePresence>
            {hoveredService && amsServices.includes(hoveredService) && serviceOverlays[hoveredService as keyof typeof serviceOverlays] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-0 right-0 z-50 bg-white border border-gray-200 rounded-xl shadow-2xl p-6 w-[400px] max-h-[300px] overflow-hidden"
                style={{ marginRight: '50px', marginTop: '150px' }}
              >
                <div className="relative">
                  <h4 className="font-['Inter',Helvetica] font-semibold text-[#303a7e] text-xl mb-3">
                    {serviceOverlays[hoveredService as keyof typeof serviceOverlays].title}
                  </h4>
                  <p className="font-['Inter',Helvetica] text-gray-600 text-sm leading-relaxed mb-4">
                    {serviceOverlays[hoveredService as keyof typeof serviceOverlays].description}
                  </p>
                  <div className="border-t border-gray-100 pt-3">
                    <h5 className="font-['Inter',Helvetica] font-medium text-gray-800 text-sm mb-2">Key Services:</h5>
                    <ul className="grid grid-cols-2 gap-1">
                      {serviceOverlays[hoveredService as keyof typeof serviceOverlays].features.map((feature, index) => (
                        <li key={index} className="font-['Inter',Helvetica] text-xs text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#303a7e] rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        {/* Contact Us Section */}
        <motion.section 
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-[80px] w-full bg-[#f7f7f7] py-[60px] px-[60px] flex flex-col lg:flex-row justify-between items-center gap-6"
        >
          <motion.h2 
            variants={fadeInLeft}
            className="font-['Inter',Helvetica] font-semibold text-black text-3xl lg:text-4xl tracking-[-0.96px]"
          >
            Contact Us
          </motion.h2>
          <motion.div 
            variants={fadeInRight}
            className="flex gap-6"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-[#303a7e] text-white px-8 py-5 rounded-lg shadow-button-shadow hover:bg-[#2a3370] transition-colors">
                <a href="mailto:vasu@raarv.ca" target="_blank" rel="noopener noreferrer">
                  <span className="font-['Inter',Helvetica] font-medium text-2xl leading-9">
                    Email
                  </span>
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                className="bg-[#e6e6e6] text-[#000000e6] px-8 py-5 rounded-lg shadow-button-shadow hover:bg-gray-300 transition-colors"
              >
                <a href="tel:+14165778708" target="_blank" rel="noopener noreferrer">
                  <span className="font-['Inter',Helvetica] font-medium text-2xl leading-9">
                    Phone
                  </span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};
