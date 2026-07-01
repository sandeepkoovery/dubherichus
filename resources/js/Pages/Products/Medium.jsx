import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { SiteFooter } from "@/Components/SiteFooter";
import { FAQSection } from "@/Components/FAQSection";
import { useAsset } from "@/hooks/useAsset";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import { Check, Droplets, Ruler, Home, Zap, ShieldCheck, ArrowRight, Filter, Settings, Wind, Layers, Box, HeartHandshake } from "lucide-react";

const productFaqs = [
    {
        question: "How often should the residential system be backwashed",
        answer: "Depending on your daily water usage and raw water parameters, a quick manual backwash is typically recommended every few days. The process is remarkably straightforward, requires no technical training and wraps up within minutes."
    },
    {
        question: "Does this system completely eradicate iron content and bad Odors?",
        answer: "Yes. Our specialized multi-stratified filtration media combined with proprietary natural aeration technology is highly effective at stripping out heavy dissolved iron, visible discoloration and sulphurous or muddy Odors."
    },
    {
        question: "How long does the filtration media last before requiring replacement?",
        answer: "When maintained via regular backwashing cycles, our premium-grade filtration media is incredibly durable. It routinely lasts for several years before requiring a professional media refresh, depending on the contamination levels of your raw inlet water."
    }
];

const features = [
    { title: "Advanced Iron Removal", desc: "Eliminates heavy iron content and multi-level particulate impurities directly at the source.", icon: Filter },
    { title: "Maintenance-Free Engineering", desc: "Features a streamlined manual backwash process requiring negligible human intervention.", icon: Settings },
    { title: "Natural Aeration Degasser", desc: "An integrated degassing system naturally eliminates foul Odors and sour smells without chemicals.", icon: Wind },
    { title: "High-Precision Activated Carbon", desc: "Enhances taste, clarity and overall organic water quality with exceptional filtration accuracy.", icon: Layers },
    { title: "Compact Single-Unit Footprint", desc: "A space-saving, systematic design engineered for seamless residential integration.", icon: Box },
    { title: "Responsive After-Sales Care", desc: "Backed by a dedicated support network to guarantee lifetime system performance.", icon: HeartHandshake }
];

export default function Medium() {
    const asset = useAsset();
    const appBase = asset('');

    return (
        <>
            <Head title="Water Purification Filters for Medium Homes (M) | Dubhe Richus">
                <meta name="description" content="Reliable home water purification system designed for family houses and villas. Treat borewell and hard water with eco-friendly filtration for clean water from every tap." />
            </Head>
            <Navbar />
            <main className="pt-20">

                {/* ── HERO ── */}
                <section className="bg-white overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div>
                                <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.3em]">
                                    Size M · Home Series
                                </span>
                                <h1 className="font-sans text-6xl md:text-7xl font-black tracking-tight text-slate-900 uppercase mb-2">
                                    Medium
                                </h1>
                                <p className="text-2xl md:text-3xl font-light text-slate-500 mb-8 tracking-tight">
                                    Water Treatment Plant
                                </p>
                                <p className="text-lg text-slate-600 font-light leading-relaxed mb-10 max-w-lg">
                                    Premium Whole-House Water Filtration for Uncompromising Purity. Supplies treated water to multiple taps, protecting plumbing and appliances from scaling and damage.
                                </p>
                                <div className="flex flex-wrap gap-3 mb-10">
                                    {[
                                        { icon: Droplets, label: "1,250–1,500 L/Day" },
                                        { icon: Home, label: "Up to 1,800 sq. ft." },
                                        { icon: Ruler, label: "H: 4.1 ft · Dia: 200 mm" },
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

                            {/* Square image */}
                            <div className="relative">
                                <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
                                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-primary/10">
                                    <img
                                        src={asset('/images/medium.jpeg')}
                                        alt="Medium Series Water Treatment Plant"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Capacity</p>
                                        <p className="text-lg font-black text-primary">1250–1500 L/day</p>
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
                                { value: "5", label: "Taps Simultaneously" },
                                { value: "4.1 ft", label: "Height" },
                                { value: "200mm", label: "Diameter" },
                                { value: "40mm", label: "Outlet" },
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
                                    Premium Whole-House Water Filtration for Uncompromising Purity
                                </h2>
                                <div className="space-y-5 text-lg text-slate-600 font-light leading-relaxed">
                                    <p>Hard water, yellow staining, heavy iron Odors and disruptive scaling in bathrooms and kitchens are common challenges faced by households across India. The Dubhe Water Treatment System is purpose-built to address these real-world issues, delivering dependable, long-term performance.</p>
                                    <p>Engineered specifically for typical Indian homes and single-storey villas, our Medium Home Series delivers treated water to multiple outlets simultaneously. Bathrooms, kitchens and utility zones receive a consistent supply of premium-quality water, effectively shielding your plumbing infrastructure, high-end fixtures and appliances from scaling and corrosion.</p>
                                    <p>Developed through over three decades of pioneering expertise, this system naturally eliminates iron, turbidity and unpleasant Odors—fundamentally elevating your water quality for drinking, cooking, bathing and daily use.</p>
                                </div>
                            </div>
                            {/* Image alongside description to fill the blank space */}
                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                                <img
                                    src={asset('/images/medium1.jpeg')}
                                    alt="Medium Series Water Treatment Plant"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 mb-3">Ideal For</p>
                                    <ul className="space-y-2">
                                        {[
                                            "Single-storey residences up to 1,800 sq. ft.",
                                            "Standard Indian homes and boutique villas.",
                                            "Households relying on challenging borewell or hard water sources.",
                                            "Homeowners demanding pristine, clean water from every single tap.",
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
                                <img src={asset('/images/no_electricity.jpeg')} alt="No Electricity" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div>
                                <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6">
                                    <Zap className="w-3.5 h-3.5" /> Zero Electricity
                                </div>
                                <h3 className="text-4xl font-sans mb-5 text-slate-900" style={{ fontWeight: '300' }}>Zero Electricity Required</h3>
                                <p className="text-lg text-slate-600 font-light leading-relaxed">Enjoy an uninterrupted supply of purified water even during power outages. This completely electricity-free operation slashes your energy bills and minimizes operational costs.</p>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6">
                                    <ShieldCheck className="w-3.5 h-3.5" /> Chemical Free
                                </div>
                                <h3 className="text-4xl font-sans mb-5 text-slate-900" style={{ fontWeight: '300' }}>100% Chemical-Free</h3>
                                <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">Water is purified purely through advanced physical filtration layers. No chemical additives, no synthetic residues—just safe, healthy water protecting your family and your home's plumbing.</p>
                                <Button asChild className="h-14 px-10 bg-primary hover:bg-primary/90 font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary/20">
                                    <Link href={appBase + "/contact"}>Get Pricing</Link>
                                </Button>
                            </div>
                            <div className="order-1 lg:order-2 w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                                <img src={asset('/images/new_natural_filtered.png')} alt="No Chemicals" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
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
