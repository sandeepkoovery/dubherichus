import {
    Home,
    Hotel,
    Hospital,
    Factory,
    School,
    Building2
} from "lucide-react";

export function IndustriesSection() {
    const industries = [
        { name: "Homes & Villas", icon: <Home className="w-8 h-8" /> },
        { name: "Hotels & Resorts", icon: <Hotel className="w-8 h-8" /> },
        { name: "Hospitals & Healthcare", icon: <Hospital className="w-8 h-8" /> },
        { name: "Industries & Manufacturing", icon: <Factory className="w-8 h-8" /> },
        { name: "Institutions", icon: <School className="w-8 h-8" /> },
        { name: "Commercial Buildings", icon: <Building2 className="w-8 h-8" /> },
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#0c3b5e 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl font-bold text-blue-950 md:text-5xl mb-4">
                        Industries We Serve
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:scale-105 group"
                        >
                            <div className="mb-4 p-4 rounded-xl bg-blue-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                                {industry.icon}
                            </div>
                            <h3 className="text-center text-sm font-bold text-slate-700 leading-snug">
                                {industry.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
