import React, { useState } from 'react';
import { Plus, X, ChevronsRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const DEFAULT_FAQ = [
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

export const FAQSection = ({ 
    items = DEFAULT_FAQ, 
    title = "FREQUENTLY ASKED QUESTIONS", 
    description = "All your questions about the Water Treatment were answered." 
}) => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white" id="faq">
            <div className="container mx-auto px-6 max-w-7xl text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <ChevronsRight className="w-5 h-5 text-[#3b82f6]" strokeWidth={3} />
                    <span className="text-[#1e3a8a] font-bold text-sm tracking-widest uppercase">
                        HAVE QUESTIONS?
                    </span>
                </div>
                <h2 
                    className="text-4xl md:text-5xl mb-6 tracking-tight uppercase"
                    style={{ fontWeight: '300', color: '#262626' }}
                >
                    {title}
                </h2>
                {description && (
                    <p className="text-gray-500 text-lg md:text-xl font-light">
                        {description}
                    </p>
                )}
            </div>
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="space-y-4">
                    {items.map((item, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-0">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                            >
                                <span className={cn(
                                    "text-lg font-normal tracking-wide transition-colors duration-200",
                                    openIndex === index ? "text-[#0A2647]" : "text-gray-600 group-hover:text-[#0A2647]"
                                )}>
                                    {item.question}
                                </span>
                                <div className="ml-4 flex-shrink-0">
                                    <div className={cn(
                                        "w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300",
                                        openIndex === index ? "bg-[#0A2647] border-[#0A2647] rotate-90" : "bg-transparent"
                                    )}>
                                        {openIndex === index ? (
                                            <X className="w-4 h-4 text-white" strokeWidth={1.5} />
                                        ) : (
                                            <Plus className="w-4 h-4 text-gray-500" strokeWidth={1.5} />
                                        )}
                                    </div>
                                </div>
                            </button>
                            <div
                                className={cn(
                                    "overflow-hidden transition-all duration-300 ease-in-out",
                                    openIndex === index ? "max-h-[500px] pb-8 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                <p className="text-gray-500 leading-relaxed text-[17px] font-light">
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

