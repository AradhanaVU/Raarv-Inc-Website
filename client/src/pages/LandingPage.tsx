import React from "react";
import { Button } from "@/components/ui/button";

export const LandingPage = (): JSX.Element => {
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
    <div className="bg-white grid justify-items-center [align-items:start] w-screen">
      <div className="bg-white overflow-hidden w-[1400px] relative">
        {/* Header */}
        <header className="w-full h-[164px] bg-[#303a7e] flex items-center justify-between px-8">
          <img
            className="w-[191px] h-32 object-cover"
            alt="Raarv Logo"
            src="/figmaAssets/image-4.png"
          />
          <div className="flex items-center gap-12">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="link"
                className="font-body-text text-white text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)]"
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="default"
              className="bg-white text-black rounded-lg shadow-button-shadow px-6 py-3.5"
            >
              <span className="font-small-text text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)]">
                Contact Us
              </span>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="flex flex-row justify-between mt-[53px] px-[87px]">
          <div className="flex flex-col gap-10 max-w-[844px]">
            <div className="flex flex-col gap-6">
              <h1 className="font-['Inter',Helvetica] font-bold text-black text-[64px] tracking-[-1.28px]">
                Raarv Inc
              </h1>
              <p className="font-['Inter',Helvetica] font-normal text-black text-2xl leading-9 mt-[45px]">
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
              </p>
              <Button className="bg-[#303a7e] text-white px-8 py-5 rounded-lg shadow-blur-glass mt-10 w-fit">
                <span className="font-['Inter',Helvetica] text-2xl">
                  Contact Us
                </span>
              </Button>
            </div>
          </div>
          <img
            className="w-[508px] h-[517px] object-cover"
            alt="Raarv Consulting"
            src="/figmaAssets/image-5.png"
          />
        </section>

        {/* SAP Services Section */}
        <section className="mt-[200px] px-[69px]">
          <h2 className="font-['Inter',Helvetica] font-semibold text-black text-5xl tracking-[-0.96px]">
            SAP Services
          </h2>

          <div className="flex flex-row gap-8 mt-[48px] ml-[18px]">
            {/* Core Banking Column */}
            <div className="flex flex-col w-[393px]">
              <h3 className="font-['Inter',Helvetica] font-medium text-black text-2xl leading-9">
                SAP Core Banking
              </h3>
              <ul className="mt-1 font-['Inter',Helvetica] font-normal text-[#828282] text-xl leading-[30px]">
                {coreBankingServices.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>

            {/* Middle Column */}
            <div className="flex flex-col w-[407px] gap-[93px]">
              <div>
                <h3 className="font-['Inter',Helvetica] font-medium text-black text-2xl leading-9">
                  SAP Business Technology Platform (BTP)
                </h3>
              </div>
              <div>
                <h3 className="font-['Inter',Helvetica] font-medium text-black text-2xl leading-9">
                  SAP Omnichannel Banking (OCB)
                </h3>
              </div>
              <div>
                <h3 className="font-['Inter',Helvetica] font-medium text-black text-2xl leading-9">
                  SAP Software Development
                </h3>
              </div>
            </div>

            {/* S/4HANA Column */}
            <div className="flex flex-col w-[393px]">
              <h3 className="font-['Inter',Helvetica] font-medium text-black text-2xl leading-9">
                SAP S/4HANA
              </h3>
              <ul className="mt-1 font-['Inter',Helvetica] font-normal text-[#828282] text-xl leading-[30px]">
                {s4hanaServices.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SAP AMS Section */}
        <section className="mt-[100px] px-[88px] flex justify-between">
          <div>
            <h2 className="font-['Inter',Helvetica] font-semibold text-black text-5xl tracking-[-0.96px]">
              SAP AMS
            </h2>
            <ul className="mt-[48px] font-['Inter',Helvetica] font-medium text-black text-2xl leading-9">
              {amsServices.map((service, index) => (
                <li key={index} className="mb-6">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <img
            className="w-[562px] h-[564px] object-cover"
            alt="SAP Support"
            src="/figmaAssets/image-6.png"
          />
        </section>

        {/* Contact Us Section */}
        <section className="mt-[100px] w-full bg-[#f7f7f7] py-[60px] px-[80px] flex justify-between items-center">
          <h2 className="font-['Inter',Helvetica] font-semibold text-black text-5xl tracking-[-0.96px]">
            Contact Us
          </h2>
          <div className="flex gap-6">
            <Button className="bg-[#303a7e] text-white px-8 py-5 rounded-lg shadow-button-shadow">
              <span className="font-['Inter',Helvetica] font-medium text-2xl leading-9">
                Email
              </span>
            </Button>
            <Button
              variant="outline"
              className="bg-[#e6e6e6] text-[#000000e6] px-8 py-5 rounded-lg shadow-button-shadow"
            >
              <span className="font-['Inter',Helvetica] font-medium text-2xl leading-9">
                Phone
              </span>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};
