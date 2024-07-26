// pages/index.js
"use client"; // Add this line

import React, { useState } from "react";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is your return policy?",
      answer: "Our return policy is ...",
    },
    {
      question: "How do I track my order?",
      answer: "You can track your order by ...",
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support ...",
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support ...",
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support ...",
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support ...",
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support ...",
    },
    {
      question: "How do I track my order?",
      answer: "You can track your order by ...",
    },
  ];

  return (
    <div style={{marginRight: "auto", marginLeft: "auto" }}>
       {/* Header */}
      <div className="h-[122px] border pl-5 pr-5 flex flex-col sm:flex-row justify-between items-center sm:items-stretch">
        <div className="mb-4 sm:mb-0">
          <img src="/HeaderLogo.png" alt="Example" className="mb-4 sm:mb-0" />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[40px] mb-4 sm:mb-0">
          <select className="w-full sm:w-auto">
            <option>Workspace & Services</option>
            <option>Workspace & Services</option>
          </select>
          <div className="w-full sm:w-auto">
            <span>Get started</span>
          </div>
          <select className="w-full sm:w-auto">
            <option>More</option>
          </select>
          <div className="w-full sm:w-auto">
            <span>Help</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img src="/socialIcon.png" alt="socialIcon" className="h-8 w-8" />
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            ENQUIRE NOW
          </button>
        </div>
      </div>

      {/* banner */}
      <div className="relative">
        <img src="/homePage.png" alt="home banner" className="w-full h-auto" />
        <div className="absolute top-5 text-center w-full">
          <h3 className="text-white text-[12px] sm:text-[20px]">
            From a single desk to a whole building. The choice is yours.
          </h3>
          <h2 className="text-white text-[22px] sm:text-[48px]">
            Discover the Ultimate Workspace Solution
          </h2>
          <div className="top-[25%] bg-[#F4F3F0] p-4 w-[800px] rounded-lg ml-auto mr-auto flex gap-4">
            <input
              type="text"
              placeholder="Search city"
              className="p-2 rounded-sm w-full border-none outline-none	"
            />
            <button className="px-8 py-2 bg-blue-500 text-white rounded ">
              Search
            </button>
          </div>

          <h2 className="text-white">Trending cities</h2>
          <div className="flex gap-4 p-2 justify-center">
            {[1, 2, 3, 4, 5].map((item) => (
              <div className="text-center flex flex-col	items-center">
                <img
                  src="/city1.png"
                  alt="city-img"
                  className="bg-[#F4F3F0] p-2 rounded-md"
                />

                <h3 className="text-white text-[14px]">New Delhi</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 3rd component */}
      <div className="flex flex-wrap gap-8 justify-center pt-4 pb-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div className="flex border p-4 rounded-md justify-between">
            <img src="/cardIcon.png" alt="cardIcon" />
            <div>
              <h2 className="text-[#2962FF] text-[24px]">Our solutions</h2>
              <h3 className="text-[14px]">
                Browse our full range of
                <br />
                products and services
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* 4th Component */}
      <div className="bg-[#F5F5F5] p-8">
        <div className="flex justify-between">
          <h3 className="text-[32px]">
            Flexible workspace designed around your needs
          </h3>
          <div>
            <h3>Prices for India</h3>
            <input
              type="text"
              placeholder="Search for a city or area to refine pricing"
            />
          </div>
        </div>
        <div>
          <h4 className="text-[16px] pt-4 pb-4">
            Our flexible, fully-customisable office rentals are available by the
            hour, day, or as long as you need.
          </h4>

          <div className="flex gap-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div>
                <img
                  src="cardImg.png"
                  alt="card-img"
                  className="rounded-s-md	rounded-r-md	w-full"
                />
                <div className="bg-[#fff] p-4">
                  <h3 className="text-[18px] font-normal text-[#393939]">
                    Private offices
                  </h3>
                  <h3 className="text-[14px] font-normal pb-2">
                    A range of ready-to-use, fully equipped offices with
                    everything you need to get started.
                  </h3>
                  <div>
                    <h4 className="text-[12px] font-normal">
                      By month or year
                    </h4>
                    <h4 className="text-[12px] font-normal">
                      Teams of any size
                    </h4>
                  </div>
                  <h3 className="text-[#008385] text-[14px]">
                    From $ 89 per person per month
                  </h3>
                  <div className="flex gap-x-4">
                    <button className="bg-[#2962FF] border-2 rounded-2xl text-[#fff] pt-1 pb-1 pl-2 pr-2 text-[12px]">
                      Get a quote
                    </button>
                    <button className="border-[#2962FF] rounded-2xl border-2 pt-1 pb-1 pl-2 pr-2 text-[12px] text-[#2962FF]">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5th Component */}
      <div className="flex p-4 justify-evenly">
        <div className="">
          <img src="5thComp.png" alt="comp img" className="w-[70%]" />
        </div>
        <div className="w-[65%]">
          <h3 className="text-[40px]">
            Discover the Ultimate
            <br /> Workspace Solution
          </h3>
          <h4 className="text-[16px] font-normal">
            From solo entrepreneurs to growing teams, find everything you need
            under one roof.
            <br /> Whether it's pay-per-use plans or fixed desks, our flexible
            options cater to your unique
            <br /> work style, ensuring seamless productivity and success.
          </h4>
          <div className="pt-8 flex flex-wrap justify-between gap-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div>
                <h2 className="text-[24px] font-bold">
                  Prestigious Business Addresses
                </h2>
                <h3 className="text-[#777777]">
                  Access to prestigious business addresses in <br />
                  key locations, enhancing your brand image
                  <br />
                  and credibility.
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 6th Component */}
      <div className="bg-[#F5F5F5] p-[50px]">
        <h2 className="text-[40px] font-">Use Virtual Address For</h2>

        <div className="flex justify-around">
          <div className="flex flex-col gap-5 w-[50%]">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div>
                <h3 className="text-[#2962FF] text-[30px]">
                  Company Registration
                </h3>
                <p className="text-[#777777]">
                  Enhance your professional image and organizational presence by
                  choosing a virtual address over your residential one.
                </p>
              </div>
            ))}
          </div>

          <div>
            <img src="/6thComp.png" alt="component" className="w-[70%]" />
          </div>
        </div>
      </div>
      {/* 7th Component */}
      <div className="p-4">
        <h2 className="text-[32px] mb-[20px] font-[700]">
          Trusted by the world’s largest companies
        </h2>
        <img src="/7thImg.png" alt="image" />
      </div>

      {/* 8th Component */}

      <div className="bg-[#F5F5F5] p-[50px]">
        <div className="flex items-center justify-between">
          <img src="/8thImg.png" alt="image" className="w-[50%]" />
          <div className="w-[35%]">
            <h2 className="text-[32px] font-[600]">Client Testimonials</h2>
            <h3>
              We love hearing feedback from our valued clients. Here's what some
              of our satisfied customers have to say about our services.
            </h3>
          </div>
        </div>
      </div>
      {/* 9th Component */}
      <div className="flex w-[80%] ml-auto mr-auto justify-between pt-8">
        <div>
          <img src="9thImg.png" alt="iamge" />
        </div>
        <div className="w-[50%]">
          <h2 className="text-[40px] ">Why Opt for Launchwise?</h2>
          <p className="text-[16px]">
            Delegate workspace customization and management to us, allowing you
            to concentrate on your core business activities while we ensure your
            workspace is primed for growth.
          </p>
          <div>
            <h3 className="text-[32px]">Prime Nationwide Options</h3>
            <p className="text-[16px]">
              Explore our diverse and unparalleled portfolio of office spaces,
              offering the finest options strategically located across the
              nation
            </p>
            <div>
              <ul className="flex flex-col gap-[20px]">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="text-[20px] list-disc	">
                    Comprehensive Office Solutions
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 10th Component */}

      <div className="text-center p-4">
        <h2 className="text-[#2962FF] text-2xl font-semibold">
          Questions in mind?
        </h2>
        <h3 className="text-xl">Read our FAQ</h3>
        <hr className="my-4" />
        <div className="flex flex-wrap justify-center">
          {faqData.map((item, index) => (
            <div key={index} className=" border-gray-300 w-full sm:w-1/2 p-2">
              <div
                className="bg-gray-100 cursor-pointer font-bold p-4 flex justify-between items-center rounded-md"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.question}</span>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
              <div
                className={`bg-[#F2F5FE] overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 11th component footer */}

      <div className="bg-[#191C20] flex justify-between p-4">
        <div>
          <img src="/footerImg.png" alt="img" />
        </div>
        <div className="flex gap-4">
          <div>
            <h3 className="text-[16px] font-bold text-white">Services</h3>
            <ul>
              {[1, 2, 3, 4, 5].map((item) => (
                <li className="text-[16px] font-normal text-[#C2C2C2]">
                  Virtual Office
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[16px] font-bold text-white">Services</h3>
            <ul>
              {[1, 2, 3, 4, 5].map((item) => (
                <li className="text-[16px] font-normal text-[#C2C2C2]">
                  Virtual Office
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[16px] font-bold text-white">Services</h3>
            <ul>
              {[1, 2, 3, 4, 5].map((item) => (
                <li className="text-[16px] font-normal text-[#C2C2C2]">
                  Virtual Office
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <img src="/footerImg2.png" alt="" />
        </div>
      </div>

      {/* footer */}
      <div className="bg-[#2B2F33] p-6">
       {[1,2,3,4].map((item)=> 
       <div className="pb-4">
          <h2 className="text-white text-[16px]">Virtual Office in Major Cities</h2>
          <h3 className="text-[#ACACAC] text-[14px]">
          Virtual Office in Delhi | Virtual Office in Gurgaon | Virtual Office in Bangalore | Virtual Office in Mumbai | Virtual Office in Pune | Virtual Office in Kolkata | Virtual Office in Chennai | Virtual Office in Noida | Virtual Office in Kochi | Virtual Office in Jaipur | Virtual Office in Hyderabad | Virtual Office in Chandigarh | Virtual Office in Lucknow | Virtual Office in Mohali
          </h3>
        </div>)}

      </div>
    </div>
  );
};

export default Header;
