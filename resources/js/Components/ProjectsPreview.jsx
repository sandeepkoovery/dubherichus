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
                    <p className="mb-4 text-center text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                        Innovation & Impact
                    </p>
                    <h2
                        className="font-sans text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl"
                        style={{ fontWeight: '300' }}
                    >
                        Why Choose <span className="opacity-90">Dubhe Richus</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary/20 mt-8 mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mt-12">
                    {features.map((item, idx) => (
                        <div
                            key={item.title}
                            className="flex flex-col sm:flex-row gap-6 items-start border-t border-slate-200 pt-8 group"
                        >
                            <div className="flex-shrink-0 mt-1 bg-slate-50 p-4 rounded-2xl group-hover:bg-primary/5 transition-colors duration-300">
                                <item.icon className="h-8 w-8 text-slate-400 group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
                            </div>

                            <div>
                                <h3 className="mb-3 text-xl font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors duration-300">
                                    {item.title}
                                </h3>

                                <p className="text-[15px] font-light leading-relaxed text-slate-500">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
