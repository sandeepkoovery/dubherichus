import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { SiteFooter } from "@/Components/SiteFooter";
import { useAsset } from "@/hooks/useAsset";
import { CheckCircle2, Droplets, Home } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";

export default function Medium() {
    const asset = useAsset();
    const appBase = asset('');

    return (
        <>
            <Head title="Medium Range - Dubhe Richus" />
            <Navbar />
            <main className="pt-20">
                <section className="bg-[#0a1628] py-24 text-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                            <div>
                                <p className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4da3ff]">
                                    Medium Range
                                </p>
                                <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
                                    High-Capacity Water <span className="text-[#4da3ff]">Filters</span>
                                </h1>
                                <p className="text-lg text-white/70 leading-relaxed mb-8">
                                    Capacity: 1250 - 1500 Ltr/ Day. Perfect for large homes and families in Kerala seeking reliable, long-term water purity solutions.
                                </p>
                                <div className="flex gap-4">
                                    <Button asChild size="lg">
                                        <Link href={appBase + "/contact"}>Order Now</Link>
                                    </Button>
                                    <div className="flex items-center gap-2 text-sm text-white/60">
                                        <Home className="h-5 w-5" />
                                        <span>Upto 1800 sq.ft. Single Storied</span>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <img src={asset('/images/product-wtp.jpg')} alt="Medium Range Filter" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-background">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-16 text-center">
                            <h2 className="font-serif text-3xl font-bold mb-4 italic">"Smarter Than You Think"</h2>
                            <p className="text-muted-foreground">Medium-Size Home Water Purification System for Consistent Clean Water</p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                { title: "Tailored Design", desc: "Customized based on your water source, usage, and space." },
                                { title: "Ideal for Villas", desc: "Suitable for medium-size homes up to 1,800 sq. ft." },
                                { title: "Multi-Point Support", desc: "Delivers treated water to up to five taps simultaneously." },
                                { title: "Space-Efficient", desc: "Easy to install in residential spaces with minimal changes." },
                                { title: "Low Maintenance", desc: "Designed for long-term use with minimal servicing." },
                                { title: "Natural Process", desc: "Effectively treats iron-rich water and household impurities." }
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
                        <Droplets className="h-12 w-12 text-primary mx-auto mb-6" />
                        <h2 className="text-3xl font-bold mb-6 italic">No Electricity Required & No Chemicals used</h2>
                        <p className="text-muted-foreground mb-8">
                            Experience the purity of natural filtration. Our Medium Range is designed to give you the best quality water with zero operational costs.
                        </p>
                        <Button asChild variant="outline" size="lg">
                            <Link href={appBase + "/contact"}>Get Pricing Details</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
