import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { SiteFooter } from "@/Components/SiteFooter";
import { useAsset } from "@/hooks/useAsset";
import { CheckCircle2, Factory, ShieldCheck } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";

export default function Commercial() {
    const asset = useAsset();
    const appBase = asset('');

    return (
        <>
            <Head title="Commercial Solutions - Dubhe Richus" />
            <Navbar />
            <main className="pt-20">
                <section className="bg-[#0a1628] py-24 text-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                            <div>
                                <p className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4da3ff]">
                                    Commercial & Industrial
                                </p>
                                <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
                                    Industrial <span className="text-[#4da3ff]">Grade</span> Filtration
                                </h1>
                                <p className="text-lg text-white/70 leading-relaxed mb-8">
                                    High-capacity systems designed for Apartments, Schools, Hotels, and Factories. Built for continuous operation and maximum reliability.
                                </p>
                                <div className="flex gap-4">
                                    <Button asChild size="lg">
                                        <Link href={appBase + "/contact"}>Get Industrial Quote</Link>
                                    </Button>
                                    <div className="flex items-center gap-2 text-sm text-white/60">
                                        <Factory className="h-5 w-5" />
                                        <span>Custom Design as per Needs</span>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <img src={asset('/images/product-etp.jpg')} alt="Commercial Filter" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-background">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-16 text-center">
                            <h2 className="font-serif text-3xl font-bold mb-4 italic">"Smarter Than You Think"</h2>
                            <p className="text-muted-foreground">What Our Commercial Water Treatment Solutions Offer</p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                { title: "Custom Engineering", desc: "Designed based on water source quality, consumption levels, and site conditions." },
                                { title: "High-Volume Ready", desc: "Built to handle large water demand and uninterrupted operation for facilities." },
                                { title: "Smart Automation", desc: "Intelligent monitoring ensures consistent performance with minimal manual intervention." },
                                { title: "Effective Treatment", desc: "Addresses hardness, iron, odour, scaling, and fluctuating water quality challenges." },
                                { title: "Centralized Infrastructure", desc: "Supports centralized plants supplying across multiple floors, departments, or buildings." },
                                { title: "Reuse Support", desc: "Enables treated water reuse for flushing, cooling, landscaping, or process requirements." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors">
                                    <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-muted text-center border-t border-border">
                    <div className="mx-auto max-w-3xl px-6">
                        <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-6" />
                        <h2 className="text-3xl font-bold mb-6 italic">No Electricity Required & No Chemicals used</h2>
                        <p className="text-muted-foreground mb-8">
                            Compliance with Pollution Control Board standards. Low operational expenditure and modular design for easy expansion.
                        </p>
                        <Button asChild variant="outline" size="lg">
                            <Link href={appBase + "/contact"}>Request Technical Consultation</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
