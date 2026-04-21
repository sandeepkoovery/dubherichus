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
        question: "HOW OFTEN SHOULD THE SYSTEM BE BACKWASHED?",
        answer: "Depending on your water usage and quality, manual backwashing is typically needed every few days to keep the media clean and hygienic. The process is simple and takes only a few minutes."
    },
    {
        question: "DOES THIS SYSTEM REMOVE IRON AND BAD ODOUR?",
        answer: "Yes, our specialized filtration media and aeration technology are specifically designed to effectively remove iron content, color, and unpleasant odors from the water source."
    },
    {
        question: "IS THE STANDARD SERIES SUITABLE FOR A LARGE FAMILY?",
        answer: "Absolutely. The Standard series is designed for large homes (up to 3500 sq.ft.) and can handle 1500-2500 litres per day, supplying clean water to multiple taps simultaneously."
    },
    {
        question: "HOW LONG DOES THE FILTRATION MEDIA LAST?",
        answer: "With regular backwashing, our high-quality filtration media is designed for long-term durability and can last for several years before needing replacement, depending on the raw water quality."
    }
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
                {/* Hero Section */}
                <section className="bg-white py-12 text-foreground overflow-hidden border-b border-slate-100">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                            <div>
                                <h1 className="mb-2 font-sans text-5xl font-semibold tracking-tight text-slate-900 md:text-6xl uppercase">
                                    Standard
                                </h1>
                                <h2 
                                    className="mb-8 font-sans text-3xl md:text-4xl"
                                    style={{ color: '#262626', fontWeight: '300' }}
                                >
                                    Water Treatment Plant
                                </h2>

                                <div className="max-w-xl mb-12">
                                    <p className="text-xl text-slate-600 font-light leading-relaxed">
                                        Give your home the confidence of clean, healthy water from every tap. Our Standard Whole-House Water Treatment System is designed to solve common water quality problems at the source and deliver reliable, worry-free water throughout your entire home.
                                    </p>
                                </div>

                                <div className="mb-12 flex flex-col md:flex-row gap-8 items-start md:items-center">
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">Capacity</p>
                                        <p className="text-2xl text-slate-800" style={{ fontWeight: '300' }}>1500 - 2500 Ltr/ Day</p>
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
                                        src={asset('/images/products_standard.jpeg')}
                                        alt="Standard Series Plant"
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
                                            Suitable for, Upto 3500 sq.ft. single storied house or 2800 sq.ft. double storied house
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
                                    <div className="mb-6 flex gap-1 items-end">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <Droplets key={i} className="w-6 h-6 text-blue-400" />
                                        ))}
                                    </div>
                                    <p className="text-slate-600 font-medium text-center">5 taps can use at a time</p>

                                <div className="flex-1 bg-slate-50 p-8 rounded-[32px] border border-slate-100 shadow-sm">
                                    <p className="text-xl font-bold text-slate-800 mb-6">Dimensions</p>
                                    <div className="space-y-4 text-slate-600 font-medium">
                                        <p className="flex flex-col">
                                            <span className="text-xs uppercase tracking-widest text-slate-400">Height</span>
                                            <span className="text-lg text-slate-900 font-bold">5.1 feet</span>
                                        </p>
                                        <p className="flex flex-col">
                                            <span className="text-xs uppercase tracking-widest text-slate-400">Dia</span>
                                            <span className="text-lg text-slate-900 font-bold">200mm</span>
                                        </p>
                                        <p className="flex flex-col">
                                            <span className="text-xs uppercase tracking-widest text-slate-400">Outlet ratio</span>
                                            <span className="text-lg text-slate-900 font-bold">50mm</span>
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
                                    Standard Whole-House Clean Water Treatment System
                                </h3>
                                <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                                    <p>
                                        Give your home the confidence of clean, healthy water from every tap. Our Standard Whole-House Water Treatment System is designed to solve common water quality problems at the source and deliver reliable, worry-free water throughout your entire home.
                                    </p>
                                    <p>
                                        Built on more than three decades of expertise and innovation, this system naturally removes iron, turbidity, and unpleasant odour to improve water used for drinking, cooking, bathing, cleaning, and everyday household needs. The advanced home water filtration process ensures consistent performance and dependable water quality every day.
                                    </p>
                                    <p>
                                        Engineered with proven technology and high-quality components, the Dubhe water purification filter system delivers efficient performance from day one while reducing overall home maintenance. It helps protect your plumbing, bathroom fittings, and household appliances from damage caused by poor water quality. By reducing stains, scaling, and buildup, it keeps your home running smoothly and helps you avoid frequent repairs. This makes it a smart long-term choice for your family’s comfort and peace of mind.
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
                                Advantages of Our Standard Home Water Treatment System
                            </h2>
                            <p className="text-slate-500 font-light italic">Efficient systems for your home need / what Our water treatment range offer</p>
                            <div className="mt-6 h-1 w-20 bg-primary" />
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                { title: "Fully Automatic Operation", desc: "Ensures consistent water treatment protocol without manual intervention." },
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
                                    className="text-4xl font-sans mb-6"
                                    style={{ color: '#262626', fontWeight: '300' }}
                                >
                                    No Electricity Required
                                </h3>
                                <p className="text-lg text-slate-600 font-light leading-relaxed">
                                    DUBHE Merak provides standard home water treatment systems which work perfectly without any electricity. This makes them cost-effective and easy to maintain even in areas where power outages are common. No more worrying about electricity bills or power failures affecting your clean water supply.
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
                                    className="text-4xl font-sans mb-6"
                                    style={{ color: '#262626', fontWeight: '300' }}
                                >
                                    No Chemical used
                                </h3>
                                <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                                    DUBHE Water purification systems use natural filtering media to remove impurities from your water supply. This means no chemicals are added during the treatment process, resulting in cleaner and healthier water for your family.
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
                            className="text-3xl md:text-4xl text-center md:text-left max-w-2xl leading-tight uppercase"
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
