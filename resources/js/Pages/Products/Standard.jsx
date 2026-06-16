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
    { title: "Fully Automatic Operation", desc: "Ensures consistent water treatment protocol without manual intervention.", icon: Cpu },
    { title: "Low Maintenance Cost", desc: "Requires very little upkeep, making it an easy and hassle-free system.", icon: PiggyBank },
    { title: "Long-lasting & Durable Build", desc: "Constructed with high-quality components for multi-year performance.", icon: Shield },
    { title: "Suitable in Tough Water Conditions", desc: "Designed for consistent results and high reliability in any water source.", icon: Droplets },
    { title: "Improves Water Quality Daily", desc: "Clean water for drinking, cooking, bathing, and all household purposes.", icon: Award },
    { title: "Responsible Wastewater Handling", desc: "Supports environmentally responsible and sustainable water management.", icon: Leaf }
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
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                            {/* Left: Square image first on desktop */}
                            <div className="relative order-2 lg:order-1">
                                <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
                                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-primary/10">
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
                                <p className="text-lg text-slate-600 font-light leading-relaxed mb-10 max-w-lg">
                                    Built for large homes and double-storey villas. Delivers clean, healthy water from every tap, solving common water quality problems at the source with proven, worry-free technology.
                                </p>

                                {/* Spec pills */}
                                <div className="flex flex-wrap gap-3 mb-10">
                                    {[
                                        { icon: Droplets, label: "1500–2500 Ltr/Day" },
                                        { icon: Home, label: "Upto 3500 sq.ft." },
                                        { icon: Ruler, label: "H: 5.1ft · Dia: 200mm" },
                                    ].map(({ icon: Icon, label }) => (
                                        <div key={label} className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2">
                                            <Icon className="w-4 h-4 text-primary" />
                                            <span className="text-sm font-medium text-slate-700">{label}</span>
                                        </div>
                                    ))}
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
                                <h2 className="text-4xl font-sans tracking-tight mb-6 leading-snug text-slate-900" style={{ fontWeight: '300' }}>
                                    Standard Whole-House Clean Water Treatment System
                                </h2>
                                <div className="space-y-5 text-lg text-slate-600 font-light leading-relaxed">
                                    <p>Give your home the confidence of clean, healthy water from every tap. Our Standard Whole-House Water Treatment System solves common water quality problems at the source and delivers reliable, worry-free water throughout your entire home.</p>
                                    <p>Built on more than three decades of expertise and innovation, this system naturally removes iron, turbidity, and unpleasant odour to improve water for drinking, cooking, bathing, cleaning, and everyday household needs.</p>
                                    <p>Engineered with proven technology, the Dubhe water purification system delivers efficient performance from day one, protecting plumbing, fittings, and appliances from damage caused by poor water quality.</p>
                                </div>
                            </div>
                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                                <img
                                    src={asset('/images/standard.jpeg')}
                                    alt="Standard Series Water Treatment Plant"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 mb-3">Suitable For</p>
                                    <ul className="space-y-2">
                                        {[
                                            "Single-storey homes up to 3500 sq.ft.",
                                            "Double-storey homes up to 2800 sq.ft.",
                                            "Large families needing high daily water output",
                                            "Homes with severe hard or borewell water issues",
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
                                Advantages of Our Standard Home Water Treatment
                            </h2>
                            <p className="text-center text-slate-500 font-light">What our standard water treatment range offers</p>
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
                                <img src={asset('/images/about-mission.png')} alt="No Electricity" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div>
                                <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6">
                                    <Zap className="w-3.5 h-3.5" /> Zero Electricity
                                </div>
                                <h3 className="text-4xl font-sans mb-5 text-slate-900" style={{ fontWeight: '300' }}>No Electricity Required</h3>
                                <p className="text-lg text-slate-600 font-light leading-relaxed">DUBHE systems work perfectly without any electricity. This makes them cost-effective and easy to maintain even in areas where power outages are common. No more worrying about electricity bills or power failures affecting your clean water supply.</p>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6">
                                    <ShieldCheck className="w-3.5 h-3.5" /> Chemical Free
                                </div>
                                <h3 className="text-4xl font-sans mb-5 text-slate-900" style={{ fontWeight: '300' }}>No Chemical Used</h3>
                                <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">DUBHE Water purification systems use natural filtering media to remove impurities from your water supply. No chemicals are added during the treatment process, resulting in cleaner and healthier water for your family.</p>
                                <Button asChild className="h-14 px-10 bg-primary hover:bg-primary/90 font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary/20">
                                    <Link href={appBase + "/contact"}>Get Pricing</Link>
                                </Button>
                            </div>
                            <div className="order-1 lg:order-2 w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                                <img src={asset('/images/parallax-water.jpg')} alt="No Chemicals" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
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
