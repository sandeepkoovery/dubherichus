import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { SiteFooter } from "@/Components/SiteFooter";
import { useAsset } from "@/hooks/useAsset";
import { CheckCircle2, Zap, Building } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";

export default function Standard() {
    const asset = useAsset();
    const appBase = asset('');

    return (
        <>
            <Head title="Standard Series - Dubhe Richus" />
            <Navbar />
            <main className="pt-20">
                <section className="bg-[#0a1628] py-24 text-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                            <div>
                                <p className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4da3ff]">
                                    Standard Series
                                </p>
                                <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
                                    Whole-House <span className="text-[#4da3ff]">Pure</span> Water
                                </h1>
                                <p className="text-lg text-white/70 leading-relaxed mb-8">
                                    Capacity: 1500 - 2500 Ltr/ Day. The benchmark for performance, suitable for large double-storied houses and small commercial needs.
                                </p>
                                <div className="flex gap-4">
                                    <Button asChild size="lg">
                                        <Link href={appBase + "/contact"}>Order Now</Link>
                                    </Button>
                                    <div className="flex items-center gap-2 text-sm text-white/60">
                                        <Building className="h-5 w-5" />
                                        <span>Upto 3500 sq.ft. Single / 2800 sq.ft. Double</span>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <img src={asset('/images/product-wtp.jpg')} alt="Standard Series Filter" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-background">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-16 text-center">
                            <h2 className="font-serif text-3xl font-bold mb-4 italic">"Smarter Than You Think"</h2>
                            <p className="text-muted-foreground">Advantages of Our Standard Home Water Treatment System</p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                { title: "Fully Automatic", desc: "Ensures consistent water treatment with minimal manual intervention." },
                                { title: "Low Maintenance", desc: "Requires very little upkeep, making it easy and hassle-free." },
                                { title: "Durable Build", desc: "Constructed with high-quality components for multi-year reliability." },
                                { title: "Tough Conditions", desc: "Delivers consistent results even in hard water and iron-rich areas." },
                                { title: "Everyday Quality", desc: "Clean water for bathing, cooking, washing, and all daily activities." },
                                { title: "Responsible Disposal", desc: "Improves overall water quality to support environmentally responsible disposal." }
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
                        <Zap className="h-12 w-12 text-primary mx-auto mb-6" />
                        <h2 className="text-3xl font-bold mb-6 italic">No Electricity Required & No Chemicals used</h2>
                        <p className="text-muted-foreground mb-8">
                            Join thousands of satisfied families. Our Standard Series is the most trusted solution for high-volume residential water treatment.
                        </p>
                        <Button asChild variant="outline" size="lg">
                            <Link href={appBase + "/contact"}>Consult an Expert</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
