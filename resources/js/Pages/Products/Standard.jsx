import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { SiteFooter } from "@/Components/SiteFooter";
import { FAQSection } from "@/Components/FAQSection";
import { useAsset } from "@/hooks/useAsset";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import { Check, Droplets, Ruler, Home, Zap, ShieldCheck, ArrowRight, Cpu, PiggyBank, Shield, Award, Leaf } from "lucide-react";

const productFaqs = [
    {
        question: "How often should the system be backwashed?",
        answer: "Depending on your water usage and quality, manual backwashing is typically needed every few days to keep the media clean and hygienic. The process is simple and takes only a few minutes."
    },
    {
        question: "Does this system remove iron and bad odour?",
        answer: "Yes, our specialized filtration media and aeration technology are specifically designed to effectively remove iron content, color, and unpleasant odors from the water source."
    },
    {
        question: "Is the standard series suitable for a large family?",
        answer: "Absolutely. The Standard series is designed for large homes (up to 3500 sq.ft.) and can handle 1500-2500 litres per day, supplying clean water to multiple taps simultaneously."
    },
    {
        question: "How long does the filtration media last?",
        answer: "With regular backwashing, our high-quality filtration media is designed for long-term durability and can last for several years before needing replacement, depending on the raw water quality."
    }
];

const features = [
    { title: "Fully Automated Operation", desc: "Programmed to manage its own treatment protocols flawlessly without requiring manual operation.", icon: Cpu },
    { title: "Ultra-Low Lifecycle Costs", desc: "Engineered for maximum efficiency with minimal upkeep, providing a true \"fit-and-forget\" experience.", icon: PiggyBank },
    { title: "Heavy-Duty Build Quality", desc: "Constructed utilizing premium-tier, industrial-grade components for multi-decade durability.", icon: Shield },
    { title: "Resilient in Extreme Conditions", desc: "Specially calibrated to deliver consistent, highly reliable filtration parameters across erratic water sources.", icon: Droplets },
    { title: "Eco-Responsible Backwash", desc: "Supports sustainable water management with optimized, low-waste discharge protocols.", icon: Leaf }
];

export default function Standard() {
    const asset = useAsset();
    const appBase = asset('');

    return (
        <>
            <Head title="Whole House Water Filters in Kerala | Dubhe Richus">
                <meta name="description" content="High-capacity whole house water filtration system for large homes and commercial spaces. Advanced iron removal and hard water treatment with long-lasting, eco-friendly performance." />
            </Head>
            <Navbar />
            <main className="pt-20">

                {/* ── HERO: Full-bleed split layout ── */}
                <section className="bg-white overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

                            {/* Left: Square image first on desktop */}
                            <div className="relative order-2 lg:order-1 flex flex-col">
                                <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
                                <div className="relative flex-1 min-h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-primary/10">
                                    <img
                                        src={asset('/images/standard.jpeg')}
                                        alt="Standard Series Water Treatment Plant"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Capacity</p>
                                        <p className="text-lg font-black text-primary">1500–2500 L/day</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Text */}
                            <div className="order-1 lg:order-2">
                                <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.3em]">
                                    Size L · Home Series
                                </span>
                                <h1 className="font-sans text-6xl md:text-7xl font-black tracking-tight text-slate-900 uppercase mb-2">
                                    Standard
                                </h1>
                                <p className="text-2xl md:text-3xl font-light text-slate-500 mb-8 tracking-tight">
                                    Water Treatment Plant
                                </p>
                                <p className="text-lg text-primary font-light leading-relaxed mb-8 max-w-xl">
                                    High-Capacity Whole-House Treatment for Larger Homes. Equip your home with the absolute confidence of pure, healthy water from every faucet.
                                </p>

                                <div className="mb-10 bg-slate-50/60 border border-slate-100 rounded-3xl p-6 max-w-xl">
                                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Quick Specs</h3>
                                    <div className="space-y-3.5 text-sm text-slate-600">
                                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                                            <span className="font-bold text-slate-900 min-w-[175px] shrink-0">Daily Capacity</span>
                                            <span className="font-light">1,500–2,500 L/Day</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 border-t border-slate-100 pt-3">
                                            <span className="font-bold text-slate-900 min-w-[175px] shrink-0">Coverage</span>
                                            <span className="font-light">Up to 3,500 sq. ft.</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 border-t border-slate-100 pt-3">
                                            <span className="font-bold text-slate-900 min-w-[175px] shrink-0">Simultaneous Performance</span>
                                            <span className="font-light">Supplies up to 7 taps concurrently</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 border-t border-slate-100 pt-3">
                                            <span className="font-bold text-slate-900 min-w-[175px] shrink-0">Dimensions</span>
                                            <span className="font-light">H: 5.1 ft | Dia: 200 mm | Outlet: 50 mm</span>
                                        </div>
                                    </div>
                                </div>

                                <Button asChild size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                                    <Link href={appBase + "/contact"}>Order Now <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── STATS STRIP ── */}
                <section className="bg-primary py-10">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
                            {[
                                { value: "7", label: "Taps Simultaneously" },
                                { value: "5.1 ft", label: "Height" },
                                { value: "200mm", label: "Diameter" },
                                { value: "50mm", label: "Outlet" },
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
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div>
                                <div className="space-y-5 text-lg text-slate-600 font-light leading-relaxed">
                                    <p>High-Capacity Whole-House Treatment for Homes. Equip your home with the absolute confidence of pure, healthy water from every faucet.</p>
                                    <p>Our Standard Whole-House Water Treatment System eliminates water quality issues at the point of entry, delivering worry-free, crystal-clear water throughout your entire property.</p>
                                    <p>Designed for expansive multi-storey residences and double-storey villas, this system leverages our three decades of proprietary engineering to naturally eradicate iron, cloudiness and heavy Odors. It safeguards your premium bathroom fittings, expensive appliances and plumbing infrastructure from the severe damage caused by untreated water.</p>
                                </div>
                            </div>
                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                                <img
                                    src={asset('/images/standard1.jpeg')}
                                    alt="Standard Series Water Treatment Plant"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 mb-3">Ideal For</p>
                                    <ul className="space-y-2">
                                        {[
                                            "Single-storey luxury homes up to 3,500 sq. ft.",
                                            "Double-storey villas up to 2,800 sq. ft.",
                                            "Large families requiring high-volume daily water yields.",
                                            "Estates facing severe hard water or heavily contaminated borewell sources.",
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
                        <div className="text-center">
                            <h2 className="font-sans text-4xl tracking-tight text-slate-900 mb-3" style={{ fontWeight: '300' }}>
                                The Sustainable Advantage
                            </h2>
                            <div className="mt-6 h-1 w-16 bg-primary mx-auto rounded-full" />
                        </div>
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                                <img src={asset('/images/standard2.jpeg')} alt="No Electricity Required" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div>
                                <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6">
                                    <Zap className="w-3.5 h-3.5" /> Zero Electricity
                                </div>
                                <h3 className="text-4xl font-sans mb-5 text-slate-900" style={{ fontWeight: '300' }}>Zero Electricity Required</h3>
                                <p className="text-lg text-slate-600 font-light leading-relaxed">Operates smoothly and completely independent of the power grid, rendering it entirely immune to power failures or rising energy bills.</p>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6">
                                    <ShieldCheck className="w-3.5 h-3.5" /> Chemical Free
                                </div>
                                <h3 className="text-4xl font-sans mb-5 text-slate-900" style={{ fontWeight: '300' }}>100% Chemical-Free</h3>
                                <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">Utilizes premium natural filtration media to strip away impurities, yielding healthier, safer water for your family's daily wellness.</p>
                                <Button asChild className="h-14 px-10 bg-primary hover:bg-primary/90 font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary/20">
                                    <Link href={appBase + "/contact"}>Get Pricing</Link>
                                </Button>
                            </div>
                            <div className="order-1 lg:order-2 w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                                <img src={asset('/images/no_chemicals.jpeg')} alt="No Chemicals" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="bg-primary py-20 text-white">
                    <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-10">
                        <h2 className="text-white text-3xl md:text-4xl text-center md:text-left max-w-2xl leading-tight" style={{ fontWeight: '300' }}>
                            Experience clean water today — contact Dubhe Richus!
                        </h2>
                        <Button asChild className="bg-white text-primary hover:bg-slate-100 font-bold px-10 h-14 rounded-xl text-sm tracking-widest shadow-xl transition-all hover:-translate-y-1 active:translate-y-0 shrink-0">
                            <Link href={appBase + "/contact"}>Contact Us</Link>
                        </Button>
                    </div>
                </section>

                <FAQSection items={productFaqs} title="PRODUCT & MAINTENANCE FAQS" />
            </main>
            <SiteFooter />
        </>
    );
}
