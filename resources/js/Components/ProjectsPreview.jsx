import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Droplets, Layout, PenTool, RefreshCw, Users, ZapOff, FlaskConical } from "lucide-react";
import { useAsset } from "@/hooks/useAsset";

const features = [
    {
        type: "feature",
        icon: Droplets,
        label: "Features",
        title: "Bulk Collection of Treated Water",
        description: "Dubhe Richus water treatment systems allow for efficient bulk collection of clean, treated water."
    },
    {
        type: "feature",
        icon: Layout,
        label: "Design, Features",
        title: "Custom design",
        description: "Dubhe Richus offers custom-designed water treatment systems tailored for commercial needs like hotels and hospitals."
    },
    {
        type: "feature",
        icon: PenTool,
        label: "Features, Technology",
        title: "Innovative Technology",
        description: "Dubhe Richus's Innovative Technology ensures efficient water filtration by removing impurities like iron, smell, and turbidity."
    },
    {
        type: "feature",
        icon: RefreshCw,
        label: "Features, Technology",
        title: "Manual back washing",
        description: "Manual backwashing in Dubhe Richus systems is recommended every 5-7 days, ensuring optimal filtration performance."
    },
    {
        type: "feature",
        icon: ZapOff,
        label: "Efficiency & Purity",
        title: "No Electricity Required",
        description: "Our high-efficiency filtration systems operate purely through water pressure, with zero power consumption."
    },
    {
        type: "feature",
        icon: FlaskConical,
        label: "Eco-Friendly",
        title: "No Chemical Used",
        description: "A completely mechanical process that purifies water without adding harmful chemicals or synthetic agents."
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
                        Excellence in <span className="opacity-90">Every Detail</span>
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
