import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { SiteFooter } from "@/Components/SiteFooter";
import { FAQSection } from "@/Components/FAQSection";
import { useAsset } from "@/hooks/useAsset";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import { Cpu, Wrench, Activity, Network, Shield, Recycle, Eye, RefreshCw, BarChart2, ShieldCheck, ChevronRight, Check, Zap } from "lucide-react";

const productFaqs = [
    {
        question: "What sets Bayaweaver apart as an \"intelligent\" water system?",
        answer: "Bayaweaver integrates a network of smart electronic sensors with automated control valves. By continuously assessing hydraulic changes and water quality, it dictates its own self-cleaning and filtration intervals, giving you peak performance with absolutely zero manual labour."
    },
    {
        question: "What are the direct maintenance obligations for a Bayaweaver system?",
        answer: "Thanks to its advanced autonomous software architecture, manual intervention is reduced to zero. We simply recommend routine preventive inspections by our technicians to verify that the electronic arrays and mechanical valves are performing at factory specifications."
    }
];


export default function Bayaweaver() {
    const asset = useAsset();
    const appBase = asset('');

    return (
        <>
            <Head title="Automatic Water Treatment Plant in Kerala - Bayaweaver | Dubhe Richus">
                <meta name="description" content="Automatic water treatment plant with AI-powered automation, self-cleaning technology, and chemical-free filtration for hospitals, industries, hotels, and commercial facilities across India." />
            </Head>
            <Navbar />
            <main className="pt-20 bg-slate-50/50">

                {/* ── HERO SECTION: High-Tech Glassmorphism ── */}
                <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                    
                    <div className="mx-auto max-w-7xl px-6 relative z-10">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            {/* Left Side: Product Info */}
                            <div className="lg:col-span-7 space-y-8">
                                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                                    <Cpu className="w-3.5 h-3.5" /> Next-Gen Automation
                                </div>
                                <div className="space-y-4">
                                    <h1 className="text-5xl md:text-7xl font-sans font-black tracking-tight leading-none uppercase bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                                        BAYAWEAVER
                                    </h1>
                                    <h2 className="text-2xl md:text-3xl text-blue-300 font-light tracking-wide uppercase">
                                        Intelligent Automatic Treatment Plant
                                    </h2>
                                </div>
                                <p className="text-lg text-slate-200 font-light leading-relaxed max-w-xl text-justify">
                                    An AI-powered, autonomous water treatment ecosystem designed for intelligent, entirely hands-off filtration. Combining precision self-cleaning functionality with maintenance-free performance, Bayaweaver is engineered to dominate demanding industrial and commercial water profiles.
                                </p>
                                

                                <div className="flex flex-wrap gap-4">
                                    <Button asChild className="h-14 px-10 bg-primary hover:bg-primary/90 font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary/20 text-white">
                                        <Link href={appBase + "/contact"}>Order System</Link>
                                    </Button>
                                    <a href="#process" className="h-14 px-8 border border-white/40 text-white hover:bg-white/10 font-bold uppercase tracking-widest text-xs inline-flex items-center rounded-md transition-colors">
                                        See How it Works
                                    </a>
                                </div>
                            </div>

                            {/* Right Side: Showcase Product Image */}
                            <div className="lg:col-span-5 relative group flex justify-center lg:justify-end">
                                <div className="w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-800">
                                    <div className="w-full aspect-[4/5] overflow-hidden">
                                        <img 
                                            src={asset('/images/bayaweaver.jpg')} 
                                            alt="Bayaweaver Automatic Plant" 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 saturate-[0.85]"
                                        />
                                    </div>
                                    {/* Caption below image */}
                                    <div className="bg-slate-900 px-6 py-4 border-t border-slate-800">
                                        <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-0.5">System Architecture</p>
                                        <p className="text-base font-bold text-white leading-tight">Continuous Smart Filtration</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── THE INTELLIGENT CYCLE (Process Flow) ── */}
                <section id="process" className="py-24 bg-white border-b border-slate-100">
                    <div className="mx-auto max-w-7xl px-6">
                        
                        {/* Performance Benchmarks */}
                        <div className="mb-20">
                            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">Performance Benchmarks:</h2>
                            <ul className="space-y-4 max-w-2xl text-slate-600 text-lg font-light leading-relaxed">
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-primary shrink-0" />
                                    <span>0% Manual Effort (Fully Autonomous)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-primary shrink-0" />
                                    <span>24/7 Continuous Flow Monitoring</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-primary shrink-0" />
                                    <span>Predictive Auto Self-Cleaning Cycles</span>
                                </li>
                            </ul>
                        </div>

                        <div className="max-w-3xl mb-16">
                            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">System Architecture:</h2>
                            <h3 className="text-4xl font-sans font-light text-slate-900 tracking-tight leading-tight">
                                The 3-Step Smart Treatment Cycle
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 relative">
                            {[
                                { step: "01", title: "Real-Time Monitoring", desc: "Advanced electronic sensors continuously track inlet water quality variations, line pressure and volumetric flow rates.", icon: Eye },
                                { step: "02", title: "Adaptive Filtration", desc: "Our custom-formulated, chemical-free multi-layer media dynamically adjusts to varying pollution loads, trapping iron, particulates and Odor molecules with absolute precision.", icon: Cpu },
                                { step: "03", title: "Self-Cleaning Cycle", desc: "Upon hitting predefined optimization thresholds, the system autonomously triggers a high-velocity backwash cycle, instantly flushing away trapped debris without operator intervention.", icon: RefreshCw },
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div key={i} className="relative p-8 bg-slate-50/50 rounded-3xl border border-slate-100/80 hover:bg-white hover:shadow-xl hover:border-primary/10 transition-all duration-300">
                                        <div className="flex justify-between items-center mb-6">
                                            <span className="text-5xl font-black text-slate-200/80 font-mono leading-none">{item.step}</span>
                                            <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center">
                                                <Icon className="w-6 h-6 text-primary" />
                                            </div>
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                                        <p className="text-slate-500 font-light leading-relaxed text-sm text-justify">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── SPLIT APPS SHOWCASE (Where it is used) ── */}
                <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            
                            {/* Left side info */}
                            <div className="lg:col-span-5 space-y-6">
                                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">Applications</h2>
                                <h3 className="text-4xl font-sans font-light tracking-tight text-white leading-tight">
                                    Modern High-Volume Infrastructure
                                </h3>
                                <p className="text-slate-400 font-light leading-relaxed text-justify">
                                    Our Bayaweaver automatic water treatment plants are designed for high-performance and reliable operations across modern commercial and industrial infrastructure.
                                </p>
                                <ul className="space-y-3 pt-4">
                                    {[
                                        "Hospitals, Laboratories & Universities",
                                        "Manufacturing & Assembly Plants",
                                        "Luxury Hotels, Resorts & Clubs",
                                        "High-Rise Residential Townships",
                                    ].map(item => (
                                        <li key={item} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                                            <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                                                <Check className="w-3 h-3 text-blue-400" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right side interactive grid */}
                            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Manufacturing & Assembly Plants", desc: "Engineered for continuous, heavy-load operations with zero operational downtime.", stat: "Continuous" },
                                    { title: "Hospitals, Laboratories & Universities", desc: "Meets strict, chemical-free purity guidelines required for sensitive environments and sanitization protocols.", stat: "Ultra-Pure" },
                                    { title: "Luxury Hotels, Resorts & Clubs", desc: "Guarantees premium, highly aesthetic soft water that protects luxury guest amenities, piping and swimming pools.", stat: "Soft Water" },
                                    { title: "High-Rise Residential Townships", desc: "Centralized, ultra-efficient water distribution boasting the lowest operational and maintenance cost per litre in its class.", stat: "Centralized" },
                                ].map((item, i) => (
                                    <div key={i} className="bg-slate-850 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/30 hover:bg-slate-800/50 transition-all duration-300">
                                        <span className="inline-block bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4">
                                            {item.stat}
                                        </span>
                                        <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                        <p className="text-slate-400 font-light leading-relaxed text-xs text-justify">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── TWO-COLUMN DETAILED ROW (Instead of duplicate pillars) ── */}
                <section className="py-24 bg-slate-50/50 border-t border-slate-100">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                                    <img src={asset('/images/bayaweaver2new.jpeg')} alt="Natural Media" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="space-y-8">
                                <h3 className="text-4xl font-sans font-light text-slate-900 tracking-tight leading-tight text-left">
                                    Why Natural Filtration Media Wins
                                </h3>
                                <p className="text-slate-600 font-light leading-relaxed text-justify">
                                    Traditional systems inject synthetic chemicals that require complex balancing acts and leave trace chemical residues. Bayaweaver replaces this with proprietary, eco-compliant natural filtration strata. The result is safer, chemical-residue-free water, zero environmental pollution upon discharge and a radically reduced carbon footprint.
                                </p>
                                <div className="grid grid-cols-2 gap-6 pt-4">
                                    <div className="space-y-2 text-left">
                                        <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                                            <ShieldCheck className="w-5 h-5 text-green-600" />
                                        </div>
                                        <h4 className="font-bold text-slate-900 text-sm">Eco-Compliant</h4>
                                        <p className="text-slate-500 text-xs font-light">Safe wastewater release without chemical pollution.</p>
                                    </div>
                                    <div className="space-y-2 text-left">
                                        <div className="w-8 h-8 rounded-lg bg-yellow-50 flex items-center justify-center">
                                            <Zap className="w-5 h-5 text-yellow-600" />
                                        </div>
                                        <h4 className="font-bold text-slate-900 text-sm">Continuous Flow</h4>
                                        <p className="text-slate-500 text-xs font-light">Uninterrupted operation without electrical dependency during cycles.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── HIGH CONTEXT CTA BANNER ── */}
                <section className="bg-primary py-24 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/3" />
                    <div className="mx-auto max-w-5xl px-6 text-center relative z-10 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-sans font-light leading-tight text-white">
                            Intelligent Water Filtration Starts Here
                        </h2>
                        <p className="text-white/80 max-w-xl mx-auto font-light leading-relaxed text-sm text-justify">
                            Contact Dubhe Richus to request a professional site survey and customize the Bayaweaver automatic treatment plant for your building layout.
                        </p>
                        <div className="flex justify-center gap-4 pt-4">
                            <Button asChild className="bg-white text-primary hover:bg-slate-100 font-bold px-10 h-14 rounded-xl text-sm tracking-widest shadow-xl transition-all hover:-translate-y-1 active:translate-y-0 shrink-0">
                                <Link href={appBase + "/contact"}>Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                <FAQSection items={productFaqs} title="BAYAWEAVER AUTOMATION FAQS" />
            </main>
            <SiteFooter />
        </>
    );
}
