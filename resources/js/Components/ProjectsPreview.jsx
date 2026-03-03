import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Droplets, Layout, PenTool, RefreshCw, Users } from "lucide-react";
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
    }
];

export function ProjectsPreview() {
    const asset = useAsset();
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % features.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    };

    // Calculate items to show based on window size (simplified)
    // On desktop we show 3, so we need to loop appropriately.
    const getVisibleItems = () => {
        const items = [];
        for (let i = 0; i < 3; i++) {
            items.push(features[(currentIndex + i) % features.length]);
        }
        return items;
    };

    return (
        <section id="impact" className="bg-muted py-16 md:py-24 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="w-full">
                        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                            Innovation & Impact
                        </p>
                        <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl whitespace-nowrap">
                            Excellence in <span className="opacity-90">Every Detail</span>
                        </h2>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-foreground transition-all hover:bg-primary hover:text-white hover:border-primary active:scale-95"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-foreground transition-all hover:bg-primary hover:text-white hover:border-primary active:scale-95"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex gap-8 transition-all duration-700 ease-in-out lg:grid lg:grid-cols-3">
                        {/* Mobile: Simple 1-item view (handled by hidden/block) 
                            Desktop: 3-item grid that we update by re-rendering visible items
                        */}
                        {getVisibleItems().map((item, idx) => (
                            <div
                                key={`${item.title}-${idx}`}
                                className={`w-full shrink-0 lg:shrink lg:w-auto animate-fade-in-up`}
                                style={{ animationDelay: `${idx * 150}ms` }}
                            >
                                {item.type === "clients" ? (
                                    <div className="h-full flex flex-col rounded-[2.5rem] border border-white bg-white/50 p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-all duration-500 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]">
                                        <div className="mb-8">
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/60 mb-2">{item.label}</p>
                                            <h3 className="text-xl font-bold text-foreground leading-tight tracking-tight">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mt-auto">
                                            {item.clients.slice(0, 6).map(client => (
                                                <div key={client} className="flex h-12 items-center justify-center rounded-xl bg-card/40 border border-border/50 px-3 text-[10px] font-bold text-muted-foreground/70 uppercase tracking-tighter text-center">
                                                    {client}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-8 pt-6 border-t border-border/10 flex items-center justify-between">
                                            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Our Network</span>
                                            <div className="flex -space-x-2">
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className="h-6 w-6 rounded-full border-2 border-white bg-primary/10" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="h-full group flex flex-col rounded-[2.5rem] border border-white bg-white/30 p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-all duration-700 hover:bg-white hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-4">
                                        <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                                            <item.icon className="h-6 w-6" />
                                        </div>

                                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60">
                                            {item.label}
                                        </p>
                                        <h3 className="mb-6 text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-[15px] font-light leading-relaxed text-muted-foreground/80">
                                            {item.description}
                                        </p>

                                        <div className="mt-10 h-1 w-0 bg-primary/20 rounded-full transition-all duration-500 group-hover:w-16" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 flex justify-center gap-2 lg:hidden">
                    {features.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-6 bg-primary' : 'w-1.5 bg-primary/20'}`}
                        />
                    ))}
                </div>
            </div >
        </section >
    );
}
