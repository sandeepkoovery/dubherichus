import { MapPin, Droplets, Users, Zap } from "lucide-react";

export function StatsBlock() {
    const stats = [
        { icon: Droplets, value: "3.2 Tr", label: "Litres Purified" },
        { icon: Zap, value: "0kWh", label: "Energy Consumption" },
        { icon: MapPin, value: "7+", label: "States" },
        { icon: Droplets, value: "7", label: "Products" },
        { icon: Users, value: "32K+", label: "Clients" },
    ];

    return (
        <section className="bg-white py-12 border-b border-slate-100">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-32">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center group transition-transform duration-500 hover:-translate-y-1">
                            <span className="text-4xl md:text-5xl font-serif font-black text-blue-950 tracking-tighter">
                                {stat.value}
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-600/70 mt-1">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
