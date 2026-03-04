import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { SiteFooter } from "@/Components/SiteFooter";
import { useAsset } from "@/hooks/useAsset";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";

export default function Bayaweaver() {
    const asset = useAsset();
    const appBase = asset('');

    return (
        <>
            <Head title="Bayaweaver Water Treatment Solutions – Clean Water Systems by Dubhe Merak" />
            <Navbar />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="bg-slate-50 py-24 text-foreground overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                            <div className="order-2 lg:order-1">
                                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
                                    DUBHE MERAK
                                </p>
                                <h1 className="mb-8 font-serif text-6xl font-black md:text-7xl lg:text-8xl tracking-tight leading-[0.9]">
                                    BAYAWEAVER
                                </h1>
                                <p className="text-lg text-muted-foreground/80 leading-relaxed mb-10 max-w-lg font-light">
                                    At Dubhe Merak Pvt. Ltd., we are dedicated to providing efficient water treatment solutions under our brand BAYAWEAVER. Our systems are designed to accommodate a wide range of treatment capacities, ensuring we meet the diverse needs of our clients.
                                </p>
                                <Button asChild size="lg" className="rounded-md bg-primary hover:bg-primary/90 h-16 px-12 text-sm font-bold tracking-widest transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
                                    <Link href={appBase + "/contact"}>ORDER NOW</Link>
                                </Button>
                            </div>
                            <div className="order-1 lg:order-2 relative flex justify-center">
                                <div className="absolute -inset-20 bg-blue-500/5 rounded-full blur-[100px]" />
                                <img
                                    src={asset('/images/product-stp.jpg')}
                                    alt="BAYAWEAVER Product"
                                    className="relative w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition-transform duration-1000 hover:scale-[1.02]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-20">
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                                TOP FEATURES
                            </p>
                            <h2 className="font-serif text-4xl font-bold md:text-5xl lg:text-6xl max-w-5xl leading-tight tracking-tight">
                                A range of innovative features that enhance the efficiency and effectiveness of our solutions:
                            </h2>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {[
                                {
                                    title: "Unique Design",
                                    desc: "Our BAYAWEAVER water treatment plants utilize a highly efficient treatment medium, maximizing filtration performance and ensuring superior water quality."
                                },
                                {
                                    title: "Chemical-Free Process",
                                    desc: "BAYAWEAVER systems operate without the need for any chemicals at any stage of the treatment process, providing a safer and more environmentally friendly solution."
                                },
                                {
                                    title: "AI System",
                                    desc: "With advanced AI technology, our plants can be operated remotely, allowing for control from anywhere in the world. This flexibility enhances usability and monitoring."
                                },
                                {
                                    title: "Portability",
                                    desc: "Designed for versatility, our plants are easy to move, making them adaptable to various locations and site conditions."
                                },
                                {
                                    title: "Centralised monitoring system",
                                    desc: "Our systems feature centralized monitoring for real-time tracking of water quality and system health through an intuitive interface."
                                },
                                {
                                    title: "Auto Backwash",
                                    desc: "Includes an automated backwashing system that ensures the filters remain clean and functional with minimal human intervention."
                                }
                            ].map((item, i) => (
                                <div key={i} className="group p-12 bg-[#f8fafc] rounded-lg transition-all duration-300 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-transparent hover:border-slate-100">
                                    <h3 className="text-2xl font-bold mb-5 tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Banner */}
                <section className="bg-primary py-20 text-white overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 -translate-x-16 -translate-y-16 rounded-full blur-2xl" />
                    <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left max-w-2xl leading-tight">
                            Experience clean water today! contact Dubhe Richus for solutions!
                        </h2>
                        <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-slate-100 font-bold px-10 h-14 rounded-md text-sm tracking-widest shadow-xl transition-all hover:-translate-y-1 active:translate-y-0">
                            <Link href={appBase + "/contact"}>Contact Us</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
