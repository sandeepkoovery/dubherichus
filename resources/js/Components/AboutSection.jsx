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
        <section id="about" className="bg-background py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <div className="order-2 lg:order-1">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                            India's No.1 Water Solutions
                        </p>
                        <h2 className="mb-6 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                            <span className="text-balance italic">
                                "Smarter Than You Think"
                            </span>
                        </h2>
                        <p className="mb-8 max-w-lg leading-relaxed text-muted-foreground">
                            Dubhe Richus aims to contribute towards the development of a better social Infrastructure by providing reliable technologies and solutions with superior value with expertise in the field of water treatment.
                        </p>

                        <ul className="mb-10 space-y-4">
                            {[
                                "33+ Years of Technical Expertise",
                                "100% Chemical-Free Processes",
                                "Fully Automated Maintenance-Free Systems"
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-sm font-medium text-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
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
                        <div className="absolute -bottom-6 -right-6 rounded-xl border border-border bg-card p-6 shadow-xl md:p-8">
                            <div className="text-center">
                                <p className="text-4xl font-bold text-primary">33+</p>
                                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Years of Trust</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
