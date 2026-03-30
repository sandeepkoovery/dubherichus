import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { SiteFooter } from "@/Components/SiteFooter";
import { useAsset } from "@/hooks/useAsset";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import { Check, X, ShieldCheck, Zap, Droplets } from "lucide-react";

export default function Medium() {
    const asset = useAsset();
    const appBase = asset('');

    return (
        <>
            <Head title="Medium Water Treatment Plant – Dubhe Merak Clean Water Solutions" />
            <Navbar />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="bg-white py-12 text-foreground overflow-hidden border-b border-slate-100">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                            <div>
                                <h1 className="mb-2 font-serif text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
                                    Medium
                                </h1>
                                <h2 className="mb-8 font-serif text-3xl font-light text-slate-500 md:text-4xl">
                                    Water Treatment Plant
                                </h2>

                                <div className="flex gap-3 mb-8">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                                            <img src={asset(`/images/projects/p${i + 4}.png`)} alt={`Usage ${i}`} className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>

                                <div className="mb-10">
                                    <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-1">Capacity</p>
                                    <p className="text-3xl font-bold text-slate-800">1250 - 1500 Ltr/ Day</p>
                                </div>

                                <Button asChild size="lg" className="rounded-md bg-primary hover:bg-primary/90 h-14 px-10 text-sm font-bold tracking-widest transition-all shadow-lg shadow-primary/20 active:scale-95">
                                    <Link href={appBase + "/contact"}>ORDER NOW</Link>
                                </Button>
                            </div>

                            <div className="relative flex justify-center lg:justify-end">
                                <div className="absolute -inset-10 bg-blue-500/5 rounded-full blur-[80px]" />
                                <div className="relative bg-slate-100/50 rounded-full p-10 md:p-20 border border-slate-200/50 backdrop-blur-sm shadow-inner">
                                    <img
                                        src={asset('/images/medium.jpg')}
                                        alt="Medium Series Plant"
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
                            {/* Column 1: House Illustration Card */}
                            <div className="lg:col-span-3">
                                <div className="h-full bg-slate-50 rounded-[32px] overflow-hidden border border-slate-100 flex flex-col shadow-sm min-h-[400px]">
                                    <div className="p-8">
                                        <p className="text-slate-800 font-medium leading-relaxed">
                                            Suitable for, Upto 1800 sq.ft. single storied house
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
                                    <div className="mb-6 flex gap-1 items-end">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <Droplets key={i} className="w-6 h-6 text-blue-400" />
                                        ))}
                                    </div>
                                    <p className="text-slate-600 font-medium">5 taps can use at a time</p>
                                </div>

                                <div className="flex-1 bg-slate-50 p-8 rounded-[32px] border border-slate-100 shadow-sm">
                                    <p className="text-xl font-bold text-slate-800 mb-6">Dimensions</p>
                                    <div className="space-y-4 text-slate-600 font-medium">
                                        <p className="flex flex-col">
                                            <span className="text-xs uppercase tracking-widest text-slate-400">Hight</span>
                                            <span className="text-lg text-slate-900 font-bold">4.1 feet</span>
                                        </p>
                                        <p className="flex flex-col">
                                            <span className="text-xs uppercase tracking-widest text-slate-400">Dia</span>
                                            <span className="text-lg text-slate-900 font-bold">200mm</span>
                                        </p>
                                        <p className="flex flex-col">
                                            <span className="text-xs uppercase tracking-widest text-slate-400">Outlet ratio</span>
                                            <span className="text-lg text-slate-900 font-bold">40mm</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Column 3: Detailed Text Content */}
                            <div className="lg:col-span-6 flex flex-col justify-center py-4">
                                <h3 className="text-4xl font-serif font-bold text-slate-900 mb-8 leading-[1.15]">
                                    Medium-Size Home Water Purification System for Consistent Clean Water
                                </h3>
                                <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                                    <p>
                                        The advanced medium-sized home water treatment system is designed for average-sized Indian homes and single-storey villas up to 1,800 sq. ft. It improves overall water quality by reducing hardness, iron, and other common impurities found in household water.
                                    </p>
                                    <p>
                                        Built for everyday use, this <Link href={appBase + "/"} className="text-primary">water treatment system</Link> supplies clean water to up to five taps simultaneously, ensuring consistent water quality in bathrooms, kitchens, and utility areas. Its compact design allows easy installation, even in homes with limited space.
                                    </p>
                                    <p>
                                        Each system is carefully engineered to deliver consistent and dependable performance across different water sources, including borewell, well, and mixed supply. Built with durable components and a chemical-free treatment process, it requires minimal maintenance while ensuring long-term reliability. This makes it a practical and efficient solution for everyday household water needs in regions such as Kerala, Tamil Nadu, Karnataka, and across India.
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
                            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-1">
                                Customized Home Water & Wastewater treatment solutions
                            </h2>
                            <p className="text-slate-500 font-light italic">Efficient solutions for your home need / what Our water treatment range offer</p>
                            <div className="mt-6 h-1 w-20 bg-primary" />
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                { title: "Iron removal filter", desc: "Designed correctly remove iron content and multi-level impurities from your water source." },
                                { title: "Maintenance-free System", desc: "Designed for easy and easy hand manual cleaning process with less human intervention." },
                                { title: "Degasser to Remove bad Odour", desc: "Comes with an integrated degasser system for removing foul odour and bad smell naturally." },
                                { title: "Activated Carbon Filter for better water quality", desc: "For better taste and better result naturally with high precision water results." },
                                { title: "Compact and Single unit Solution", desc: "Consistent performance for residential homes with high quality and systematic treatment." },
                                { title: "Responsive After-sales Service", desc: "Dedicated support team to ensure your system performs at its best for the lifetime." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-slate-50 rounded-[28px] border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all group">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Check className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h4>
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
                                <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6">No Electricity Required</h3>
                                <p className="text-lg text-slate-600 font-light leading-relaxed">
                                    DUBHE Merak provides standard home water treatment solutions which work perfectly without any electricity. This makes them cost-effective and easy to maintain even in areas where power outages are common. No more worrying about electricity bills or power failures affecting your clean water supply.
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
                                <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6">No Chemical used</h3>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left max-w-2xl leading-tight">
                            Experience clean water today! contact Dubhe Richus for solutions!
                        </h2>
                        <Button asChild className="bg-white text-blue-700 hover:bg-slate-100 font-bold px-10 h-14 rounded-md text-sm tracking-widest shadow-xl transition-all hover:-translate-y-1 active:translate-y-0">
                            <Link href={appBase + "/contact"}>Contact Us</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
