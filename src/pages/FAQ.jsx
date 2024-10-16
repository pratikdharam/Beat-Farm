import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I update my billing information?",
      answer: "To update your billing information, log into your account and navigate to the 'Billing' section. You can edit your payment details and save the changes from there."
    },
    {
      question: "How can I contact customer support?",
      answer: "To contact customer support, look for the 'Contact Us' section in the footer of the website, or click the help button for live chat support."
    },
    {
      question: "How do I update my profile information?",
      answer: "To update your profile, go to 'Settings' and click on 'Edit Profile'. You can update your name, email, and other information there."
    },
    {
      question: "Can I change my subscription plan?",
      answer: "Yes, you can change your subscription plan by navigating to the 'Account' section and selecting 'Subscription'. From there, you can upgrade or downgrade your plan."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "To cancel your subscription, go to 'Account Settings', then click on 'Manage Subscription'. You'll see an option to cancel your plan."
    },
    {
      question: "Is there a mobile app for BeatFarm?",
      answer: "Yes, BeatFarm has a mobile app available for both Android and iOS. You can download it from the Google Play Store or the Apple App Store."
    }
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h6 className="text-lg text-indigo-600 font-medium text-center mb-2">
            FAQs
          </h6>
          <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="accordion-group" data-accordion="default-accordion">
          {faqData.map((item, index) => (
            <div key={index} className="accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50">
              <button
                className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
                onClick={() => toggleAccordion(index)}
              >
                <h5>{item.question}</h5>
                <svg
                  className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${openIndex === index ? "rotate-180" : ""}`}
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              {openIndex === index && (
                <div className="accordion-content w-full px-0 overflow-hidden">
                  <p className="text-base text-gray-900 leading-6">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
