import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Droplets, Layout, PenTool, RefreshCw, Users, ZapOff, FlaskConical } from "lucide-react";
import { useAsset } from "@/hooks/useAsset";

const features = [
    {
        type: "feature",
        icon: Droplets,
        label: "Features",
        title: "Complete Whole-Water Filtration Systems",
        description: "High-performance whole-water filtration and purification systems built for homes, apartments, villas, hotels, and industries to deliver clean, safe water from every tap."
    },
    {
        type: "feature",
        icon: Layout,
        label: "Design, Features",
        title: "Zero-Electricity & Low-Maintenance Technology",
        description: "Dubhe water filters work without electricity using gravity-based filtration, making them cost-effective, eco-friendly, and easy to maintain."
    },
    {
        type: "feature",
        icon: PenTool,
        label: "Features, Technology",
        title: "Customized Water Treatment Plants",
        description: "Each water treatment plant is designed based on water source and usage requirements, ensuring the perfect solution for residential and commercial needs."
    },
    {
        type: "feature",
        icon: RefreshCw,
        label: "Features, Technology",
        title: "Borewell & Hard Water Problem Experts",
        description: "Specialized systems designed to remove iron, odor, turbidity, and hardness, making borewell and groundwater safe for daily use."
    },
    {
        type: "feature",
        icon: ZapOff,
        label: "Efficiency & Purity",
        title: "Sustainable & Chemical-Free Water Treatment",
        description: "Built for long-lasting, chemical-free water purification that reduces operating costs while protecting the environment."
    },
    {
        type: "feature",
        icon: FlaskConical,
        label: "Eco-Friendly",
        title: "Research-Driven Innovation & Global Supply",
        description: "Backed by continuous research and development, Dubhe Richus manufactures and supplies advanced water and wastewater treatment systems in India and worldwide."
    }
];

export function ProjectsPreview() {
    return (
        <section id="impact" className="bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
                <div className="mb-16 text-center">
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                        Innovation & Impact
                    </p>
                    <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                        Why Choose <span className="opacity-90">Dubhe Richus</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary/20 mt-8 mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-100 shadow-2xl">
                    {features.map((item, idx) => {
                        const isBlue = idx % 2 === 0;
                        return (
                            <div
                                key={item.title}
                                className={`flex flex-col items-center text-center p-12 md:p-16 h-full transition-all duration-500 ${isBlue
                                    ? "bg-[#58a2cc] text-white"
                                    : "bg-white text-slate-800"
                                    }`}
                            >
                                <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${isBlue ? "text-white" : "text-[#58a2cc]"
                                    }`}>
                                    <item.icon className="h-10 w-10" strokeWidth={1.5} />
                                </div>

                                <h3 className="mb-6 text-xl font-bold tracking-widest uppercase">
                                    {item.title}
                                </h3>

                                <p className={`text-sm font-light leading-relaxed max-w-xs ${isBlue ? "text-white/90" : "text-slate-500"
                                    }`}>
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
