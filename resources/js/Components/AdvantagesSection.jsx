import { Wrench, Droplets, FlaskConical, Zap, Shield, Recycle, ArrowRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";

const advantages = [
    {
        icon: Wrench,
        title: "Maintenance Free",
        description:
            "Self-cleaning mechanisms designed for minimal intervention and long-term durability.",
    },
    {
        icon: FlaskConical,
        title: "Chemical Free",
        description:
            "100% natural water treatment process that purifies water without any harmful additives.",
    },
    {
        icon: Zap,
        title: "Energy Efficient",
        description:
            "High-performance systems optimized for low power consumption and reduced operational costs.",
    },
];

export function AdvantagesSection() {
    return (
        <section id="advantages" className="bg-muted py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                        Our Advantages
                    </p>
                    <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                        <span className="text-balance">
                            Why Dubhe Richus Stands Apart
                        </span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Built on strong R&D foundations and decades of field experience, our systems deliver uncompromising purity.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {advantages.map((adv) => (
                        <div
                            key={adv.title}
                            className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                                <adv.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="mb-3 text-lg font-bold text-foreground">
                                {adv.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {adv.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button asChild className="group">
                        <Link href="/services">
                            Explore Detailed Services
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
