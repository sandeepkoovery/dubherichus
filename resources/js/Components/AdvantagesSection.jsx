import { Wrench, Droplets, FlaskConical, Zap, Shield, Recycle } from "lucide-react";

const advantages = [
    {
        icon: Wrench,
        title: "Maintenance Free",
        description:
            "Our systems are designed for minimal maintenance with self-cleaning mechanisms and durable components that last for decades.",
    },
    {
        icon: Droplets,
        title: "Removes Impurities",
        description:
            "Advanced multi-stage natural filtration that effectively removes all types of impurities, sediments, and contaminants from water.",
    },
    {
        icon: FlaskConical,
        title: "Chemical Free",
        description:
            "100% natural water treatment process that purifies water without using any harmful chemicals, ensuring safe drinking water.",
    },
    {
        icon: Zap,
        title: "Energy Efficient",
        description:
            "Low power consumption systems that reduce operational costs while delivering high-performance water treatment results.",
    },
    {
        icon: Shield,
        title: "Built to Last",
        description:
            "Premium quality materials and robust construction ensure our plants deliver reliable performance for over 25 years.",
    },
    {
        icon: Recycle,
        title: "Eco Friendly",
        description:
            "Sustainable manufacturing practices and green technology that minimize environmental impact at every stage.",
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
                        Dubhe is a true Integrated Water Technology company built on strong
                        R&D foundations and decades of field experience.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {advantages.map((adv, idx) => (
                        <div
                            key={adv.title}
                            className={`group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${idx === 0 ? "md:col-span-2 lg:col-span-1" : ""
                                }`}
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
            </div>
        </section>
    );
}
