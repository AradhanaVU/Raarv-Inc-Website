import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

export const LandingPage = (): JSX.Element => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
    { label: "About Us", href: "#" },
    { label: "SAP Services", href: "#" },
    { label: "SAP AMS", href: "#" },
  ];

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
        className="bg-white overflow-hidden w-[1400px] relative"
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
                  className="font-body-text text-white text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] transition-colors hover:text-blue-200"
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="default"
                className="bg-white text-black rounded-lg shadow-button-shadow px-6 py-3.5 hover:bg-gray-100 transition-colors"
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
          className="flex flex-row justify-between mt-[53px] px-[87px]"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-10 max-w-[844px]"
          >
            <div className="flex flex-col gap-6">
              <motion.h1 
                variants={fadeInUp}
                className="font-['Inter',Helvetica] font-bold text-black text-[64px] tracking-[-1.28px]"
              >
                Raarv Inc
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="font-['Inter',Helvetica] font-normal text-black text-2xl leading-9 mt-[45px]"
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
                <Button className="bg-[#303a7e] text-white px-8 py-5 rounded-lg shadow-blur-glass mt-10 w-fit hover:bg-[#2a3370] transition-colors">
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
            className="w-[508px] h-[517px] object-cover"
            alt="Raarv Consulting"
            src="/figmaAssets/image-5.png"
          />
        </motion.section>

        {/* SAP Services Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mt-[200px] px-[69px]"
        >
          <motion.h2 
            variants={fadeInUp}
            className="font-['Inter',Helvetica] font-semibold text-black text-5xl tracking-[-0.96px]"
          >
            SAP Services
          </motion.h2>

          <motion.div 
            variants={staggerContainer}
            className="flex flex-row gap-8 mt-[48px] ml-[18px]"
          >
            {/* Core Banking Column */}
            <motion.div 
              variants={fadeInLeft}
              whileHover={{ y: -5 }}
              className="flex flex-col w-[393px] p-4 rounded-lg hover:shadow-lg transition-shadow"
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
              className="flex flex-col w-[407px] gap-[93px]"
            >
              <motion.div whileHover={{ x: 10 }} className="p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <h3 className="font-['Inter',Helvetica] font-medium text-black text-2xl leading-9">
                  SAP Business Technology Platform (BTP)
                </h3>
              </motion.div>
              <motion.div whileHover={{ x: 10 }} className="p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <h3 className="font-['Inter',Helvetica] font-medium text-black text-2xl leading-9">
                  SAP Omnichannel Banking (OCB)
                </h3>
              </motion.div>
              <motion.div whileHover={{ x: 10 }} className="p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <h3 className="font-['Inter',Helvetica] font-medium text-black text-2xl leading-9">
                  SAP Software Development
                </h3>
              </motion.div>
            </motion.div>

            {/* S/4HANA Column */}
            <motion.div 
              variants={fadeInRight}
              whileHover={{ y: -5 }}
              className="flex flex-col w-[393px] p-4 rounded-lg hover:shadow-lg transition-shadow"
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
        </motion.section>

        {/* SAP AMS Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-[100px] px-[88px] flex justify-between"
        >
          <motion.div variants={fadeInLeft}>
            <motion.h2 
              variants={fadeInUp}
              className="font-['Inter',Helvetica] font-semibold text-black text-5xl tracking-[-0.96px]"
            >
              SAP AMS
            </motion.h2>
            <motion.ul 
              variants={staggerContainer}
              className="mt-[48px] font-['Inter',Helvetica] font-medium text-black text-2xl leading-9"
            >
              {amsServices.map((service, index) => (
                <motion.li 
                  key={index} 
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                  className="mb-6 cursor-pointer hover:text-[#303a7e] transition-colors"
                >
                  {service}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.img
            variants={fadeInRight}
            whileHover={{ scale: 1.02 }}
            className="w-[562px] h-[564px] object-cover"
            alt="SAP Support"
            src="/figmaAssets/image-6.png"
          />
        </motion.section>

        {/* Contact Us Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-[100px] w-full bg-[#f7f7f7] py-[60px] px-[80px] flex justify-between items-center"
        >
          <motion.h2 
            variants={fadeInLeft}
            className="font-['Inter',Helvetica] font-semibold text-black text-5xl tracking-[-0.96px]"
          >
            Contact Us
          </motion.h2>
          <motion.div 
            variants={fadeInRight}
            className="flex gap-6"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-[#303a7e] text-white px-8 py-5 rounded-lg shadow-button-shadow hover:bg-[#2a3370] transition-colors">
                <span className="font-['Inter',Helvetica] font-medium text-2xl leading-9">
                  Email
                </span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="bg-[#e6e6e6] text-[#000000e6] px-8 py-5 rounded-lg shadow-button-shadow hover:bg-gray-300 transition-colors"
              >
                <span className="font-['Inter',Helvetica] font-medium text-2xl leading-9">
                  Phone
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};