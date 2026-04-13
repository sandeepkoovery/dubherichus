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
                <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="order-2 lg:order-1 flex flex-col justify-center py-4">
                        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-primary/80">
                            Ensuring Complete Water Purity for Every Space
                        </p>
                        <h2 className="mb-8 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-[2.75rem]">
                            Advanced Water Treatment <br className="hidden lg:block" /> Company in India
                        </h2>
                        <p className="text-lg font-light leading-relaxed text-muted-foreground/80">
                            Clean and safe water is important for every home and business, and Dubhe Richus provides advanced whole-water filters designed for reliable, long-term use. Using Super Jet Technology. Our systems effectively filter and purify water for houses, apartments, and large commercial spaces. We continuously improve our water purifier systems to deliver better water quality, low maintenance, and long-lasting performance, ensuring consistent chemical-free water treatment for daily use. Our customized water purifiers are suitable for homes, hospitals, hotels, and institutions, making it easy to choose the right whole-house water filtration system for any need while supporting sustainable and eco-friendly water purification for a healthier future.
                        </p>
                    </div>

                    <div className="relative order-1 lg:order-2">
                        <div className="overflow-hidden rounded-2xl shadow-2xl h-full min-h-[400px]">
                            <img
                                src={asset('/images/1-commercial.png')}
                                alt="Dubhe Richus Facility"
                                className="h-full w-full object-cover"
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
