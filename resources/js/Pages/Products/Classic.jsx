import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { SiteFooter } from "@/Components/SiteFooter";
import { FAQSection } from "@/Components/FAQSection";
import { useAsset } from "@/hooks/useAsset";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import { Check, X, ShieldCheck, Zap, Droplets } from "lucide-react";

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
        question: "Is the classic series suitable for apartments and small homes?",
        answer: "Yes, the Classic series is ideal for small homes and apartments (up to 1200 litres per day), providing reliable water treatment in a compact design."
    },
    {
        question: "How long does the filtration media last?",
        answer: "With regular backwashing, our high-quality filtration media is designed for long-term durability and can last for several years before needing replacement, depending on the raw water quality."
    }
];

export default function Classic() {
    const asset = useAsset();
    const appBase = asset('');

    return (
        <>
            <Head title="Classic Whole House Water Filters for Small Homes & Apartments">
                <meta name="description" content="Compact water filter system for apartments and small homes in Kerala. Removes iron, odor and hardness with chemical-free, low-maintenance filtration for safe everyday water use." />
            </Head>
            <Navbar />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="bg-white py-12 text-foreground overflow-hidden border-b border-slate-100">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                            <div>
                                <h1 className="mb-2 font-sans text-5xl font-semibold tracking-tight text-slate-900 md:text-6xl uppercase">
                                    Classic
                                </h1>
                                <h2 
                                    className="mb-8 font-sans text-3xl md:text-4xl"
                                    style={{ color: '#262626', fontWeight: '300' }}
                                >
                                    Water Treatment Plant
                                </h2>

                                <div className="max-w-xl mb-12">
                                    <p className="text-xl text-slate-600 font-light leading-relaxed">
                                        Classic Water Filters are specially designed for Indian homes and perfectly suited for the average household size in Kerala and across India. Providing safe and clean water for all domestic needs.
                                    </p>
                                </div>

                                <div className="mb-12 flex flex-col md:flex-row gap-8 items-start md:items-center">
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">Capacity</p>
                                        <p className="text-2xl text-slate-800" style={{ fontWeight: '300' }}>800 - 1200 Ltr/ Day</p>
                                    </div>
                                    <div className="h-10 w-px bg-slate-200 hidden md:block" />
                                    <Button asChild size="lg" className="rounded-md bg-primary hover:bg-primary/90 h-14 px-10 text-[11px] font-bold uppercase tracking-[0.2em] transition-all shadow-xl shadow-primary/20 active:scale-95">
                                        <Link href={appBase + "/contact"}>ORDER NOW</Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="relative flex justify-center lg:justify-end">
                                <div className="absolute -inset-10 bg-blue-500/5 rounded-full blur-[80px]" />
                                <div className="relative bg-slate-100/50 rounded-full p-10 md:p-20 border border-slate-200/50 backdrop-blur-sm shadow-inner">
                                    <img
                                        src={asset('/images/products_classic.jpeg')}
                                        alt="Classic Series Plant"
                                        className="w-[300px] md:w-[480px] h-auto drop-shadow-2xl transition-transform duration-700 hover:scale-105 saturate-50"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Description & Precise Layout Section (Refined) */}
                <section className="py-16 bg-white overflow-hidden pb-0">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
                            {/* Column 1: History/Product Card */}
                            <div className="lg:col-span-3">
                                <div className="h-full bg-slate-50 rounded-[32px] overflow-hidden border border-slate-100 flex flex-col shadow-sm min-h-[400px]">
                                    <div className="p-8">
                                        <p className="text-slate-800 font-medium leading-relaxed">
                                            Dubhe Richus Ltd Since 1991, single plant more than 32000 Units across India
                                        </p>
                                    </div>
                                    <div className="flex-1 mt-auto overflow-hidden">
                                        <img
                                            src={asset('/images/clients/Client-List-Dubhe-Richus.png')}
                                            alt="Client List"
                                            className="w-full h-full object-cover grayscale opacity-60 transition-transform duration-1000 hover:scale-110"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Column 2: Specific Data Cards */}
                            <div className="lg:col-span-3 flex flex-col gap-6">
                                <div className="flex-1 bg-slate-50 p-8 rounded-[32px] border border-slate-100 flex flex-col justify-center items-center text-center shadow-sm">
                                    <div className="bg-white p-4 rounded-2xl shadow-sm mb-4">
                                        <Zap className="w-8 h-8 text-yellow-500" />
                                    </div>
                                    <p className="text-slate-600 font-bold uppercase tracking-widest text-xs">Saves energy & money</p>
                                </div>

                                <div className="flex-1 bg-slate-50 p-8 rounded-[32px] border border-slate-100 shadow-sm">
                                    <p className="text-xl font-bold text-slate-800 mb-6">Dimensions</p>
                                    <div className="space-y-4 text-slate-600 font-medium">
                                        <p className="flex flex-col">
                                            <span className="text-xs uppercase tracking-widest text-slate-400">Height</span>
                                            <span className="text-lg text-slate-900 font-bold">3.0 Feet</span>
                                        </p>
                                        <p className="flex flex-col">
                                            <span className="text-xs uppercase tracking-widest text-slate-400">Width</span>
                                            <span className="text-lg text-slate-900 font-bold">15 Inch</span>
                                        </p>
                                        <p className="flex flex-col">
                                            <span className="text-xs uppercase tracking-widest text-slate-400">Filter Diameter</span>
                                            <span className="text-lg text-slate-900 font-bold">5 Inch</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Column 3: Detailed Text Content */}
                            <div className="lg:col-span-6 flex flex-col justify-center py-4">
                                <h3 
                                    className="text-4xl font-sans tracking-tight mb-8 leading-[1.15]"
                                    style={{ color: '#262626', fontWeight: '300' }}
                                >
                                    Classic Whole-House Water Filtration System for Homes
                                </h3>
                                <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                                    <p>
                                        Classic Water Filters are specially designed for Indian homes and perfectly suited for the average household size in Kerala and across India. This compact water treatment plant is ideal for smaller homes and everyday usage, providing safe and clean water for all domestic needs.
                                    </p>
                                    <p>
                                        Clean water is essential for good health, which is why this small-capacity system makes reliable water purification accessible and affordable even for homes with lower water consumption. It ensures safe water for bathrooms, kitchens, pipelines, and every tap in your home.
                                    </p>
                                    <p>
                                        Designed for long-term performance and reliable service, the system delivers consistent water purification with low maintenance and a capacity of 800–1200 litres per day. Our experts manage installation and ongoing support, addressing common issues such as yellow water, iron content, and other impurities to ensure a steady supply of clean water.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-12">
                            <h2 
                                className="font-sans text-3xl tracking-tight mb-1"
                                style={{ color: '#262626', fontWeight: '300' }}
                            >
                                Advantages of Our Classic Home Water Treatment System
                            </h2>
                            <p className="text-slate-500 font-light italic">Efficient systems for your home need / what Our water treatment range offer</p>
                            <div className="mt-6 h-1 w-20 bg-primary" />
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                { title: "Simple Operation", desc: "Ensures consistent water treatment protocol with minimal manual intervention." },
                                { title: "Low Maintenance Cost", desc: "Requires very little upkeep, making it an easy and hassle-free system." },
                                { title: "Long-lasting & Durable build", desc: "Constructed with high-quality components for multi-year performance and utility." },
                                { title: "Suitable in Tough Water conditions", desc: "Designed for consistent results and high reliability in water sources." },
                                { title: "Improves Water Quality for everyday life", desc: "Clean water for drinking, cooking, bathing, and all household purposes." },
                                { title: "Responsible Wastewater Handling", desc: "Improves overall water quality to support environmentally responsible and sustainable systems." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-slate-50 rounded-[28px] border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all group">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Check className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl mb-3 text-slate-900" style={{ fontWeight: '300' }}>{item.title}</h4>
                                    <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pillars Sections (Refined and Compact) */}
                <section className="py-20 bg-slate-50">
                    <div className="mx-auto max-w-7xl px-6 space-y-20">
                        {/* No Electricity */}
                        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                            <div className="flex flex-col justify-center bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm">
                                <h3 
                                    className="text-4xl font-sans tracking-tight mb-6"
                                    style={{ color: '#262626', fontWeight: '300' }}
                                >
                                    Works Without Electricity
                                </h3>
                                <p className="text-lg text-slate-600 font-light leading-relaxed">
                                    Classic water treatment filters from Dubhe Richus work without electricity, making them dependable and economical for everyday household use. Clean water continues to flow even during power cuts, helping reduce energy expenses and minimizing maintenance worries.
                                </p>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-0 bg-primary/5 rounded-[40px] blur-2xl group-hover:bg-primary/10 transition-colors" />
                                <div className="relative h-full min-h-[400px] rounded-[40px] overflow-hidden border border-slate-200 shadow-xl group-hover:border-blue-200 transition-all">
                                    <img src={asset('/images/about-mission.png')} alt="No Electricity" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10">
                                        <div className="relative">
                                            <Zap className="w-40 h-40 text-white/40 stroke-[1]" />
                                            <X className="absolute inset-0 w-40 h-40 text-red-500/60 stroke-[4] scale-110" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* No Chemical */}
                        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                            <div className="order-2 lg:order-1 relative group">
                                <div className="absolute inset-0 bg-primary/5 rounded-[40px] blur-2xl group-hover:bg-primary/10 transition-colors" />
                                <div className="relative h-full min-h-[400px] rounded-[40px] overflow-hidden border border-slate-200 shadow-xl group-hover:border-blue-200 transition-all">
                                    <img src={asset('/images/parallax-water.jpg')} alt="No Chemicals" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10">
                                        <div className="relative">
                                            <ShieldCheck className="w-40 h-40 text-white/40 stroke-[1]" />
                                            <X className="absolute inset-0 w-40 h-40 text-red-500/60 stroke-[4] scale-110" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 flex flex-col justify-center bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm">
                                <h3 
                                    className="text-4xl font-sans tracking-tight mb-6"
                                    style={{ color: '#262626', fontWeight: '300' }}
                                >
                                    Chemical-Free Water Treatment
                                </h3>
                                <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                                    Specially selected filtration media helps remove impurities from your water without the use of chemicals or additives. This process improves water quality while keeping it safe for everyday household use such as cooking, bathing, and cleaning, giving your family cleaner and healthier water every day.
                                </p>
                                <Button asChild className="w-fit h-14 px-10 bg-primary hover:bg-primary/90 font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary/20">
                                    <Link href={appBase + "/contact"}>GET PRICING</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Banner */}
                <section className="bg-primary py-20 text-white relative">
                    <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-10">
                        <h2 
                            className="text-3xl md:text-4xl text-center md:text-left max-w-2xl leading-tight tracking-tight uppercase"
                            style={{ color: '#ffffff', fontWeight: '300' }}
                        >
                            Experience clean water today! contact Dubhe Richus!
                        </h2>
                        <Button asChild className="bg-white text-blue-700 hover:bg-slate-100 font-bold px-10 h-14 rounded-md text-sm tracking-widest shadow-xl transition-all hover:-translate-y-1 active:translate-y-0">
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
