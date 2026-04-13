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
                            Ensuring Complete Water Purity for Every Space
                        </p>
                        <h2 className="mb-8 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                            <span className="block text-balance opacity-90">
                                Advanced Water Treatment <br /> Company in India
                            </span>
                        </h2>
                        <p className="mb-10 max-w-xl text-lg font-light leading-relaxed text-muted-foreground/80 text-balance">
                            Clean and safe water is important for every home and business, and Dubhe Richus provides advanced whole-water filters designed for reliable, long-term use. Using Super Jet Technology. Our systems effectively filter and purify water for houses, apartments, and large commercial spaces. We continuously improve our water purifier systems to deliver better water quality, low maintenance, and long-lasting performance, ensuring consistent chemical-free water treatment for daily use. Our customized water purifiers are suitable for homes, hospitals, hotels, and institutions, making it easy to choose the right whole-house water filtration system for any need while supporting sustainable and eco-friendly water purification for a healthier future.
                        </p>

                        <ul className="mb-12 space-y-6">
                            {[
                                { title: "Innovative Technology", desc: "We utilize Super Jet Technology for efficient, chemical-free water filtration, ensuring long-lasting, eco-friendly systems." },
                                { title: "Custom Designs", desc: "Tailored water treatment systems for both residential and commercial applications, including hospitals, hotels, and institutions." },
                                { title: "Sustainability", desc: "Our systems operate without electricity and can be used for over 25 years without replacing filter media." }
                            ].map((item) => (
                                <li key={item.title} className="group/item">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover/item:bg-primary group-hover/item:text-white mt-1">
                                            <CheckCircle2 className="h-3.5 w-3.5" />
                                        </div>
                                        <div>
                                            <p className="text-[13px] font-bold uppercase tracking-wider text-foreground/90">{item.title}</p>
                                            <p className="text-sm font-light text-muted-foreground/70">{item.desc}</p>
                                        </div>
                                    </div>
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
                                src={asset('/images/1-commercial.png')}
                                alt="Dubhe Richus Facility"
                                className="h-[400px] w-full object-cover lg:h-[500px]"
                            />
                        </div>
                        <div className="absolute -bottom-8 -left-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-2xl backdrop-blur-xl md:p-10 transition-transform duration-700 hover:scale-110">
                            <div className="text-center">
                                <p className="font-sans text-5xl font-black text-primary">33+</p>
                                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Years of Legacy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
