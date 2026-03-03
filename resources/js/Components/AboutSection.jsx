import {
    CheckCircle2,
    ArrowRight
} from "lucide-react";
import { useAsset } from "@/hooks/useAsset";
import { Link } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";

export function AboutSection() {
    const asset = useAsset();
    const appBase = asset('');
    return (
        <section id="about" className="bg-background py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <div className="order-2 lg:order-1">
                        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-primary/80">
                            Engineering Purity
                        </p>
                        <h2 className="mb-8 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                            <span className="block text-balance opacity-90">
                                Smarter Than <br /> You Think
                            </span>
                        </h2>
                        <p className="mb-10 max-w-lg text-lg font-light leading-relaxed text-muted-foreground/80">
                            At Dubhe Richus, we don't just treat water; we master it.
                            Our journey is defined by <span className="text-foreground font-medium underline underline-offset-4 decoration-primary/30">reliable technologies</span> and
                            bespoke solutions that deliver superior value across India's social infrastructure.
                        </p>

                        <ul className="mb-12 space-y-5">
                            {[
                                "33+ Years of Technical Excellence",
                                "Sustainable, Chemical-Free Processes",
                                "Zero-Maintenance Integrated Systems"
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-4 text-[13px] font-bold uppercase tracking-wider text-foreground/70 group/item">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover/item:bg-primary group-hover/item:text-white">
                                        <CheckCircle2 className="h-3.5 w-3.5" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Button asChild variant="outline" className="group">
                            <Link href={appBase + "/about"}>
                                Learn More About Our Journey
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>

                    <div className="relative order-1 lg:order-2">
                        <div className="overflow-hidden rounded-2xl shadow-2xl">
                            <img
                                src={asset('/images/about-bg.jpg')}
                                alt="Dubhe Richus Facility"
                                className="h-[400px] w-full object-cover lg:h-[500px]"
                            />
                        </div>
                        <div className="absolute -bottom-8 -left-8 rounded-2xl border border-white/10 bg-[#0f172a]/95 p-8 shadow-2xl backdrop-blur-xl md:p-10 transition-transform duration-700 hover:scale-110">
                            <div className="text-center">
                                <p className="font-sans text-5xl font-black text-blue-400">33+</p>
                                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">Years of Legacy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
