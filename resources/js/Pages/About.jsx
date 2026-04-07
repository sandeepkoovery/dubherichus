import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { SiteFooter } from "@/Components/SiteFooter";
import { useAsset } from "@/hooks/useAsset";
import { Shield, Target, Award, Clock, FlaskConical, PenTool, Users, Droplets, Calendar, CheckCircle2, Zap, Building2, Play } from "lucide-react";

const teamMembers = [
    { name: "Stanley Jacob", role: "Founder", icon: Users },
    { name: "Jacob Richard", role: "Managing Director", icon: Users },
];

export default function About() {
    const asset = useAsset();

    return (
        <>
            <Head title="About Us - Dubhe Richus" />
            <Navbar />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-[#020617] py-32 text-white">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50" />
                    <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
                        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.5em] text-blue-400">
                            Dubhe Richus
                        </p>
                        <h1 className="font-serif text-5xl font-bold md:text-7xl lg:text-8xl tracking-tight">
                            Smarter <br /> <span className="text-blue-400">than you think</span>
                        </h1>
                    </div>
                </section>

                {/* History Section */}
                <section className="py-24 bg-white">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="space-y-12 text-center md:text-left">
                            <p className="text-lg leading-relaxed text-muted-foreground/90 font-light">
                                Founded in 1991 under the brand name <span className="text-foreground font-semibold">Richus</span>, we began our journey as pioneers in water systems. In line with our sustainable vision and global expansion goals, we later rebranded as <span className="text-foreground font-semibold">Dubhe Richus</span>. Today, we are the <span className="text-foreground font-semibold">largest manufacturer of iron removal water treatment plants in South India</span>. Our advanced systems are capable of treating water from all sources, backed by a dedicated R&D division that drives continuous innovation in the water treatment sector.
                            </p>
                            <p className="text-lg leading-relaxed text-muted-foreground/90 font-light">
                                In addition to supplying our product directly to customers, we also operate specialized divisions for Sewage Water Treatment (SWT) and Effluent Treatment Plants (ETP). Our goal is to ensure that both industrial and domestic water treatment plants offer professional systems for various needs. With our vast product portfolio, we ensure that our customers receive the most efficient and sustainable water treatment systems available.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Video Section */}
                <section className="pb-24 bg-white">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/-NRXVx9J29s?rel=0"
                                title="Dubhe Richus - Our Journey"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-32 bg-muted/30">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-20 text-center">
                            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl tracking-tight">
                                Transforming Lives <br /> with Clean Water Systems
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            {[
                                { label: "Customers", val: "32,000+", icon: Users },
                                { label: "Litres Purified", val: "3.2 Trillion", icon: Droplets },
                                { label: "Years Legacy", val: "33+", icon: Calendar },
                                { label: "Satisfaction", val: "100%", icon: CheckCircle2 },
                                { label: "Energy Consumption", val: "0 kWh", icon: Zap },
                                { label: "Commercial Installations", val: "32K+", icon: Building2 },
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-black/5 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                                    <div className="mb-6 h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                                        <stat.icon className="h-6 w-6" />
                                    </div>
                                    <p className="text-3xl font-black text-foreground mb-1">{stat.val}</p>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Core Values / Features with Images */}
                <section className="py-32 bg-white space-y-32">
                    <div className="mx-auto max-w-7xl px-6">
                        {[
                            {
                                id: "vision",
                                label: "Our Vision",
                                title: "Our Vision",
                                desc: "Dubhe Richus aims to contribute towards the development of a better social Infrastructure by providing reliable technologies and services with superior value with expertise in the field of water/ waste water treatment.",
                                img: "/images/vision-img.jpg"
                            },
                            {
                                id: "rd",
                                label: "R&D FOCUS",
                                title: "Research and Development",
                                desc: "Our research and development team is dedicated to the development and upgradation of water treatment sector through grassroots action, research, and education. We look forward to keep the sustainability of the local natural environment in the development process.",
                                img: "/images/rd-img.jpg"
                            },
                            {
                                id: "tech",
                                label: "INNOVATION",
                                title: "Design and Technology",
                                desc: "Dubhe Richus integrated technology for a peaceful water purifying experience. (Completely patent protected) Perfection in every detail, our cylindrical vertical type of water treatment heavy machineries stands out from the crowd with superior quality, results and first-class design. Discover water flow rate maintaining iron removing with active oxygen and keeping natural minerals with the manual back washing method for hygienic water treatment with low temperatures. Our all models strive for sustainability and appreciate the active lifestyle of you and your family Water treatment plant in this range offer you real benefits and efficient features combined with timeless design.",
                                img: "/images/tech-img.jpg"
                            }
                        ].map((item, idx) => (
                            <div key={item.id} className={`grid gap-16 lg:grid-cols-2 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                                        {item.label}
                                    </p>
                                    <h2 className="mb-8 font-serif text-4xl font-bold leading-tight">{item.title}</h2>
                                    <p className="text-lg font-light leading-relaxed text-muted-foreground/80">{item.desc}</p>
                                </div>
                                <div className={`relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <img src={asset(item.img)} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-32 bg-muted/30">
                    <div className="mx-auto max-w-7xl px-6 text-center">
                        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                            Leadership
                        </p>
                        <h2 className="mb-20 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl tracking-tight">Innovators Driving Clean <br /> Water Systems Forward</h2>
                        <div className="grid gap-16 md:grid-cols-2 max-w-4xl mx-auto">
                            {teamMembers.map((member, idx) => (
                                <div key={member.name} className="group">
                                    <div className="relative mb-8 aspect-square rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-105">
                                        <img src={asset(`/images/team-${idx}.jpg`)} alt={member.name} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-bottom p-10 items-end">
                                            <div className="text-left text-white">
                                                <h3 className="text-2xl font-bold tracking-tight">{member.name}</h3>
                                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">{member.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Contact Banner */}
                <section className="pb-32 bg-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="relative rounded-[3rem] overflow-hidden h-[400px] flex items-center justify-center text-center px-6">
                            <img src={asset('/images/cta-bg.jpg')} alt="" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px]" />
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">
                                    Transform your water with <br /> Dubhe Richus!
                                </h2>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-5 font-bold text-blue-900 transition-all hover:scale-105 active:scale-95"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
