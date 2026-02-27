import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const clientLogos = [
    "HCL",
    "Ford",
    "Yamaha",
    "Bridgestone",
    "SFS Group",
    "Tata Motors",
    "Mahindra",
    "Reliance",
    "Infosys",
    "Wipro",
];

const testimonials = [
    {
        quote:
            "Dubhe Richus installed our WTP system 5 years ago and it has been running flawlessly. The water quality is exceptional and maintenance has been virtually zero.",
        name: "Rajesh Kumar",
        role: "Plant Manager, Industrial Corp",
        rating: 5,
    },
    {
        quote:
            "Their expertise in effluent treatment is unmatched. They helped us meet all CPCB standards while significantly reducing our operational costs. Highly recommended.",
        name: "Priya Sharma",
        role: "Director, Green Manufacturing Ltd",
        rating: 5,
    },
    {
        quote:
            "The best decision we made for our residential complex was choosing Dubhe Richus. Clean, safe water for over 200 families without any chemicals.",
        name: "Anil Gupta",
        role: "Chairman, Sunrise Residences",
        rating: 5,
    },
];

export function ClientsSection() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        let animationId;
        let scrollPos = 0;

        const animate = () => {
            scrollPos += 0.5;
            if (scrollPos >= el.scrollWidth / 2) {
                scrollPos = 0;
            }
            el.scrollLeft = scrollPos;
            animationId = requestAnimationFrame(animate);
        };
        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <section id="clients" className="bg-background py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                        Trusted Partners
                    </p>
                    <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                        Some of Our Esteemed Clients
                    </h2>
                </div>

                <div
                    ref={scrollRef}
                    className="mb-24 overflow-hidden"
                    aria-label="Client logos carousel"
                >
                    <div className="flex w-max gap-12">
                        {[...clientLogos, ...clientLogos].map((logo, i) => (
                            <div
                                key={`${logo}-${i}`}
                                className="flex h-16 w-32 shrink-0 items-center justify-center rounded-lg border border-border bg-card px-4"
                            >
                                <span className="text-sm font-bold text-muted-foreground">
                                    {logo}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-16 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                        Testimonials
                    </p>
                    <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                        Quality in Every Review
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="mb-4 flex gap-1">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-4 w-4 fill-amber-400 text-amber-400"
                                    />
                                ))}
                            </div>
                            <p className="mb-6 leading-relaxed text-muted-foreground">
                                &quot;{t.quote}&quot;
                            </p>
                            <div className="border-t border-border pt-4">
                                <p className="text-sm font-semibold text-foreground">
                                    {t.name}
                                </p>
                                <p className="text-xs text-muted-foreground">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
