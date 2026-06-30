import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { SiteFooter } from "@/Components/SiteFooter";
import { FAQSection } from "@/Components/FAQSection";
import { useAsset } from "@/hooks/useAsset";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import { Check, Building2, Zap, ShieldCheck, ArrowRight, Factory, Settings, Wrench, Activity, Cpu, Network, Shield, Recycle } from "lucide-react";

const productFaqs = [
    {
        question: "How are the commercial systems customized?",
        answer: "Every commercial plant is custom-engineered based on a detailed analysis of your raw water quality, required daily capacity, and specific industry standards. We ensure the system meets your exact operational needs."
    },
    {
        question: "What is the capacity range for commercial plants?",
        answer: "Our commercial and industrial plants are designed for high-volume demand. Capacity is customized to your requirements, ranging from several thousand to lakhs of litres per day for large institutions and industries."
    },
    {
        question: "Do you provide installation and maintenance services?",
        answer: "Yes, Dubhe Richus provides end-to-end services, including site survey, custom design, installation, and ongoing maintenance support to ensure your facility has a reliable supply of clean water."
    },
    {
        question: "Can the system handle extremely tough water conditions?",
        answer: "Absolutely. Our commercial systems are built to handle high levels of iron, turbidity, and other complex impurities common in borewell and industrial water sources across South India."
    }
];

const features = [
    { title: "Bespoke Systems Architecture", desc: "Engineered around a comprehensive diagnostic analysis of your water source and operational requirements.", icon: Wrench },
    { title: "High-Volume Continuous Yield", desc: "Built to withstand the rigorous demands of 24/7 continuous commercial operations.", icon: Activity },
    { title: "Advanced Process Automation", desc: "Smart controls ensure consistent water outputs with negligible operator oversight.", icon: Cpu },
    { title: "Centralized Distribution Integration", desc: "Uniformly feeds purified water across expansive, multi-department facilities.", icon: Network },
    { title: "Wastewater Reclamation Capabilities", desc: "Offers integrated frameworks for treated effluent recycling, ideal for flushing and landscaping applications.", icon: Recycle }
];

export default function Commercial() {
    const asset = useAsset();
    const appBase = asset('');

    return (
        <>
            <Head title="Commercial & Industrial Water Treatment Plants in Kerala, India">
                <meta name="description" content="Commercial water treatment plants in India by Dubhe Richus, offering customized water filtration for borewell and hard water using sustainable, chemical-free, low-maintenance technology." />
            </Head>
            <Navbar />
            <main className="pt-20">

                {/* ── HERO ── */}
                <section className="bg-white overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div>
                                <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.3em]">
                                    Size XL · Commercial Series
                                </span>
                                <h1 className="font-sans text-6xl md:text-7xl font-black tracking-tight text-slate-900 uppercase mb-2">
                                    Commercial
                                </h1>
                                <p className="text-2xl md:text-3xl font-light text-slate-500 mb-8 tracking-tight">
                                    Water Treatment Plant
                                </p>
                                <p className="text-lg text-slate-600 font-light leading-relaxed mb-10 max-w-lg">
                                    High-Volume Centralized Systems for Commercial & Industrial Infrastructure. Custom engineered and scalable to any demand.
                                </p>
                                <div className="flex flex-wrap gap-3 mb-10">
                                    {[
                                        { icon: Factory, label: "Custom Engineered" },
                                        { icon: Building2, label: "Large-Scale Facilities" },
                                        { icon: Settings, label: "End-to-End Execution" },
                                    ].map(({ icon: Icon, label }) => (
                                        <div key={label} className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2">
                                            <Icon className="w-4 h-4 text-primary" />
                                            <span className="text-sm font-medium text-slate-700">{label}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button asChild size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                                    <Link href={appBase + "/contact"}>Get a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>

                            {/* Square image */}
                            <div className="relative">
                                <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
                                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-primary/10">
                                    <img
                                        src={asset('/images/commercial.jpeg')}
                                        alt="Commercial Series Water Treatment Plant"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Capacity</p>
                                        <p className="text-lg font-black text-primary">Custom Engineered</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── STATS STRIP ── */}
                <section className="bg-primary py-10">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
                            {[
                                { value: "33+", label: "Years of Experience" },
                                { value: "100%", label: "Chemical Free" },
                                { value: "0W", label: "Electricity Used" },
                                { value: "Custom", label: "Capacity" },
                            ].map(({ value, label }) => (
                                <div key={label}>
                                    <p className="text-white text-4xl font-black mb-1">{value}</p>
                                    <p className="text-white/70 text-xs uppercase tracking-widest font-medium">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── DESCRIPTION ── */}
                <section className="py-20 bg-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-sans tracking-tight mb-6 leading-snug text-slate-900" style={{ fontWeight: '300' }}>
                                    High-Volume Centralized Systems for Commercial & Industrial Infrastructure
                                </h2>
                                <div className="space-y-5 text-lg text-slate-600 font-light leading-relaxed">
                                    <p>Our industrial-grade water treatment plants solve heavy-volume water challenges naturally. We design and deploy comprehensive centralized systems for luxury apartments, commercial hubs, hospitals, educational institutions and manufacturing facilities where clean water is critical to daily operations.</p>
                                    <p>Each plant is bespoke—custom-tailored to your precise raw water chemistry, spatial layout and daily consumption patterns. From concept and construction to ongoing lifecycle maintenance, we deliver high-performance water architecture across India.</p>
                                </div>
                            </div>
                            {/* Image with overlay — same pattern as Medium & Standard */}
                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                                <img
                                    src={asset('/images/commercial1.jpeg')}
                                    alt="Commercial Series Water Treatment Plant"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 mb-3">Trusted By</p>
                                    <ul className="space-y-2">
                                        {[
                                            "Premier Hospitals & Healthcare Networks",
                                            "Industrial Manufacturing & Processing Plants",
                                            "Elite Resorts, Hotels, and Hospitality Chains",
                                            "High-Rise Residential Complexes & Townships",
                                        ].map(item => (
                                            <li key={item} className="flex items-center gap-2 text-white text-sm font-medium">
                                                <Check className="w-3.5 h-3.5 text-white/80 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── FEATURES GRID ── */}
                <section className="py-20 bg-slate-50">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-12 text-center">
                            <h2 className="font-sans text-4xl tracking-tight text-slate-900 mb-3" style={{ fontWeight: '300' }}>
                                Key Features & Benefits
                            </h2>
                            <div className="mt-6 h-1 w-16 bg-primary mx-auto rounded-full" />
                        </div>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {features.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div key={i} className="relative p-8 bg-white rounded-3xl border border-slate-100/80 shadow-sm hover:shadow-2xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl translate-x-8 -translate-y-8 group-hover:bg-primary/10 transition-colors" />
                                        <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                            <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                                        <p className="text-slate-500 font-light leading-relaxed text-sm">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── PILLARS ── */}
                <section className="py-20 bg-white">
                    <div className="mx-auto max-w-7xl px-6 space-y-16">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                                <img src={asset('/images/commercial2.jpeg')} alt="Electricity-Free Operation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div>
                                <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6">
                                    <Zap className="w-3.5 h-3.5" /> Zero Electricity
                                </div>
                                <h3 className="text-4xl font-sans mb-5 text-slate-900" style={{ fontWeight: '300' }}>Grid-Independent Commercial Operation</h3>
                                <p className="text-lg text-slate-600 font-light leading-relaxed">Drastically cuts facility overheads. These high-capacity systems run flawlessly without electricity, ensuring a constant water supply even during major power disruptions.</p>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6">
                                    <ShieldCheck className="w-3.5 h-3.5" /> Chemical Free
                                </div>
                                <h3 className="text-4xl font-sans mb-5 text-slate-900" style={{ fontWeight: '300' }}>Zero Chemicals, Total Compliance</h3>
                                <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">Advanced natural filtration media ensures you achieve full environmental and regulatory compliance without introducing toxic chemicals or synthetic balancing additives into the ecosystem.</p>
                                <Button asChild className="h-14 px-10 bg-primary hover:bg-primary/90 font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary/20 text-white">
                                    <Link href={appBase + "/contact"}>Get Pricing</Link>
                                </Button>
                            </div>
                            <div className="order-1 lg:order-2 w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                                <img src={asset('/images/bottom_commercial.jpeg')} alt="No Chemicals" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="bg-primary py-20 text-white">
                    <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-10">
                        <h2 className="text-white text-3xl md:text-4xl text-center md:text-left max-w-2xl leading-tight" style={{ fontWeight: '300' }}>
                            Need a custom commercial water treatment solution? Let's talk.
                        </h2>
                        <Button asChild className="bg-white text-primary hover:bg-slate-100 font-bold px-10 h-14 rounded-xl text-sm tracking-widest shadow-xl transition-all hover:-translate-y-1 active:translate-y-0 shrink-0">
                            <Link href={appBase + "/contact"}>Contact Us</Link>
                        </Button>
                    </div>
                </section>

                <FAQSection items={productFaqs} title="COMMERCIAL SYSTEM FAQS" />
            </main>
            <SiteFooter />
        </>
    );
}
