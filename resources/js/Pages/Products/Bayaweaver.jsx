import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { SiteFooter } from "@/Components/SiteFooter";
import { useAsset } from "@/hooks/useAsset";
import { CheckCircle2, Cpu, Sparkles } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";

export default function Bayaweaver() {
    const asset = useAsset();
    const appBase = asset('');

    return (
        <>
            <Head title="Bayaweaver AI Water Systems - Dubhe Richus" />
            <Navbar />
            <main className="pt-20">
                <section className="bg-[#0a1628] py-24 text-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                            <div>
                                <p className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4da3ff]">
                                    Bayaweaver Flagship
                                </p>
                                <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
                                    Next-Gen <span className="text-[#4da3ff]">AI Powered</span> Water
                                </h1>
                                <p className="text-lg text-white/70 leading-relaxed mb-8">
                                    The Bayaweaver represents the pinnacle of innovative water treatment. Integrated technology for a peaceful, premium purifying experience.
                                </p>
                                <div className="flex gap-4">
                                    <Button asChild size="lg">
                                        <Link href={appBase + "/contact"}>Inquire for Bayaweaver</Link>
                                    </Button>
                                    <div className="flex items-center gap-2 text-sm text-white/60">
                                        <Cpu className="h-5 w-5" />
                                        <span>Centralised AI Monitoring System</span>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <img src={asset('/images/product-stp.jpg')} alt="Bayaweaver AI System" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-background">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-16 text-center">
                            <h2 className="font-serif text-3xl font-bold mb-4 italic">"Smarter Than You Think"</h2>
                            <p className="text-muted-foreground">Innovative Features for Advanced Clean Water Systems</p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                { title: "Unique Design", desc: "Aesthetics and efficiency combined in a cylindrical vertical framework." },
                                { title: "Chemical-Free", desc: "Ensures the highest safety standards using 100% natural media." },
                                { title: "AI Integrated", desc: "Smart logic controls for real-time adjustments and monitoring." },
                                { title: "Portability", desc: "Optimized design for easy relocation and installation flexibility." },
                                { title: "Central Monitoring", desc: "Track water health and system performance via centralized hub." },
                                { title: "Auto Backwash", desc: "Maintenance-free self-cleaning tech designed for longevitiy." }
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
                        <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
                        <h2 className="text-3xl font-bold mb-6 italic">Premium Experience. Engineered Excellence.</h2>
                        <p className="text-muted-foreground mb-8">
                            The Bayaweaver is more than a product; it's a testament to 33 years of engineering evolution. Experience the state-of-the-art in water purity.
                        </p>
                        <Button asChild variant="outline" size="lg">
                            <Link href={appBase + "/contact"}>Get a Technical Demo</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
