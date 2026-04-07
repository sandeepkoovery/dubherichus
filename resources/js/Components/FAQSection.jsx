import React, { useState } from 'react';
import { Plus, X, ChevronsRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQ_DATA = [
    {
        question: "HOW DOES WATER SOFTENING WORK?",
        answer: "Water softening removes minerals like calcium and magnesium from hard water, replacing them with sodium ions through an ion exchange process, resulting in softened water."
    },
    {
        question: "WHAT ARE THE BENEFITS OF REVERSE OSMOSIS?",
        answer: "Reverse osmosis effectively removes contaminants such as lead, chlorine, and fluoride, providing clean, great-tasting drinking water for your home or business."
    },
    {
        question: "HOW OFTEN SHOULD FILTERS BE REPLACED?",
        answer: "Filter replacement frequency depends on your water usage and system type, but typically ranges from every 6 to 12 months for optimal performance."
    },
    {
        question: "DO YOU OFFER MAINTENANCE SERVICES?",
        answer: "Yes, we provide comprehensive maintenance and repair services for all our water treatment systems to ensure they continue to operate at peak efficiency."
    }
];

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white" id="faq">
            <div className="container mx-auto px-4 max-w-4xl text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <ChevronsRight className="w-5 h-5 text-[#3b82f6]" strokeWidth={3} />
                    <span className="text-[#1e3a8a] font-bold text-sm tracking-widest uppercase">
                        HAVE QUESTIONS?
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight uppercase">
                    FREQUENTLY ASKED QUESTIONS
                </h2>
                <p className="text-gray-500 text-lg md:text-xl">
                    All your questions about the Water Treatment were answered.
                </p>
            </div>
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="space-y-4">
                    {FAQ_DATA.map((item, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-0">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                            >
                                <span className={cn(
                                    "text-lg font-bold tracking-wider uppercase transition-colors duration-200",
                                    openIndex === index ? "text-[#0A2647]" : "text-gray-700 group-hover:text-[#0A2647]"
                                )}>
                                    {item.question}
                                </span>
                                <div className="ml-4 flex-shrink-0">
                                    {openIndex === index ? (
                                        <X className="w-6 h-6 text-[#0A2647]" strokeWidth={1} />
                                    ) : (
                                        <Plus className="w-6 h-6 text-[#0A2647]" strokeWidth={1} />
                                    )}
                                </div>
                            </button>
                            <div
                                className={cn(
                                    "overflow-hidden transition-all duration-300 ease-in-out",
                                    openIndex === index ? "max-h-96 pb-8" : "max-h-0"
                                )}
                            >
                                <p className="text-gray-500 leading-relaxed text-[17px]">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
