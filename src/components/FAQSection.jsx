import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does FindItBuyIt work?",
      answer:
        "FindItBuyIt is a smart shopping assistant that helps you find products in nearby stores without the hassle of walking from shop to shop. Simply search for the item you need, and we'll instantly check its availability in various stores. This saves you time, energy, and money while ensuring you always find the best deals quickly.",
    },
    {
      question: "Is it free to use?",
      answer:
        "Yes! FindItBuyIt is free for all shoppers to browse and check product availability. However, we also offer premium features that enhance your shopping experience, such as instant restock alerts, Multi-Language search, In-built price Calculator and many more. These premium services require a small fee to unlock all at once, but basic usage remains free.",
    },
    {
      question: "What states does FindItBuyIt operate in?",
      answer:
        "Currently, FindItBuyIt operates exclusively in Rivers State. We are actively working on expanding to more locations in the near future. Stay tuned for updates, and if you’d like us to launch in your area, let us know!",
    },
    {
      question: "Which stores are supported?",
      answer:
        "FindItBuyIt partners with a wide range of stores, especially large retailers, ensuring that you have access to the best product availability. We are continuously adding more stores to our network, so you always have the most up-to-date options when shopping.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
          <button
            className="w-full flex items-center justify-between text-left"
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-semibold">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <p className="mt-4 text-gray-700">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
