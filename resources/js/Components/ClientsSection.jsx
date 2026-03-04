import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useAsset } from "@/hooks/useAsset";

const clientLinks = [
    { name: "Client 1", logo: "/images/clients/1.png" },
    { name: "Client 2", logo: "/images/clients/2.png" },
    { name: "Client 3", logo: "/images/clients/3.png" },
    { name: "Client 4", logo: "/images/clients/4.png" },
    { name: "Client 5", logo: "/images/clients/5.png" },
    { name: "Client 7", logo: "/images/clients/7.png" },
    { name: "Client 8", logo: "/images/clients/8.png" },
    { name: "Client 9", logo: "/images/clients/9.png" },
    { name: "Client 10", logo: "/images/clients/10.png" },
    { name: "Client 11", logo: "/images/clients/11.png" },
    { name: "Client 12", logo: "/images/clients/12.png" },
    { name: "Client 13", logo: "/images/clients/13.png" },
    { name: "Client 14", logo: "/images/clients/14.png" },
    { name: "Client 15", logo: "/images/clients/15.png" },
    { name: "Client 16", logo: "/images/clients/16.png" },
    { name: "Client 17", logo: "/images/clients/17.png" },
    { name: "Client 18", logo: "/images/clients/18.png" },
    { name: "Client 19", logo: "/images/clients/19.png" },
];

const testimonials = [
    {
        quote: "Using this for the last one and half year. Very much satisfied with the results. Zero maintenance till now. Just have to do the periodic backwash without fail.",
        name: "Vivek",
        role: "Residential Client",
        image: "/images/testimonials/vivek.png"
    },
    {
        quote: "Bought it a year ago after lot of research. Installation was quick and it's easy to operate. It improved my water pressure all over the 1st floor. I would highly recommend Dubhe Richus.",
        name: "Tinku Tharasing",
        role: "Home Owner",
        image: "/images/testimonials/tinku.png"
    },
    {
        quote: "I have been using Dubhe Richus water filter for last 8 years and I am thoroughly impressed. The filter provides crisp, clean-tasting water with noticeable improvement.",
        name: "Nirupama Anil",
        role: "Long-term User",
        image: "/images/testimonials/nirupama.png"
    },
    {
        quote: "This water filter is excellent, providing crisp, clean-tasting water every time. It's easy to install, no maintenance, and effectively removes impurities.",
        name: "Badu sha",
        role: "Verified Buyer",
        image: "/images/testimonials/badu.png"
    },
    {
        quote: "We are using this filter more than 10 years. And we are also satisfied with their service. Definitely recommend to all others looking for a water filter.",
        name: "Anoop Antony",
        role: "Legacy Client",
        image: "/images/testimonials/anoop.png"
    },
    {
        quote: "We have been using the water filter for the past 2 years. It is working really well and we are completely satisfied with it. Highly recommended.",
        name: "George VV",
        role: "Satisfied Customer",
        image: "/images/testimonials/george.png"
    },
];

export function ClientsSection() {
    const asset = useAsset();
    const scrollRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Logos auto-scroll logic
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

    // Testimonials auto-play
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
    };

    return (
        <section id="clients" className="bg-stone-50/50 py-16 md:py-24 overflow-hidden">
            <div className="w-full px-6">
                {/* Logos Section */}
                <div className="mb-12 text-center">
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60">
                        Our Clients
                    </p>
                    <h2 className="mb-6 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                        Some of our esteemed clients and partners
                    </h2>
                    <div className="mx-auto h-1 w-20 bg-primary/20" />
                </div>

                <div
                    ref={scrollRef}
                    className="mb-12 overflow-hidden py-4 relative"
                    aria-label="Client logos carousel"
                >
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-stone-50/50 to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-stone- stone-50/50 to-transparent z-10" />

                    <div className="flex w-max gap-4 items-center px-4">
                        {[...clientLinks, ...clientLinks, ...clientLinks, ...clientLinks].map((client, i) => (
                            <div
                                key={`${client.name}-${i}`}
                                className="group flex items-center justify-center shrink-0 transition-all duration-500 hover:scale-110"
                                style={{ width: '215px', height: '90px' }}
                            >
                                <img
                                    src={client.logo.startsWith('http') ? client.logo : asset(client.logo)}
                                    alt={client.name}
                                    className="h-full w-full object-contain p-0.5 transition-all opacity-90 group-hover:opacity-100"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        const sibling = e.target.nextSibling;
                                        if (sibling) sibling.classList.remove('hidden');
                                    }}
                                />
                                <span className="hidden text-[10px] font-bold text-foreground/40 tracking-widest uppercase text-center group-hover:text-primary transition-colors py-2 px-4 border border-border/50 rounded-lg bg-card/20">
                                    {client.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="mb-20 text-center">
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                        Real Experiences
                    </p>
                    <h2 className="mb-6 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl opacity-90">
                        Quality in Every Review
                    </h2>
                    <div className="mx-auto h-1 w-20 bg-primary/20" />
                </div>

                <div className="relative mx-auto max-w-5xl">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((t, index) => (
                                <div key={index} className="w-full shrink-0 px-4">
                                    <div className="group relative rounded-[2.5rem] border border-white/50 bg-white p-10 md:p-16 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] transition-all duration-700 hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.1)]">
                                        <div className="absolute top-10 right-10 opacity-5 transition-opacity group-hover:opacity-10">
                                            <Quote className="h-24 w-24 rotate-180" />
                                        </div>

                                        <div className="flex flex-col items-center text-center">
                                            <div className="mb-10 h-24 w-24 overflow-hidden rounded-full border-4 border-primary/5 shadow-2xl transition-transform duration-700 group-hover:scale-110">
                                                <img
                                                    src={asset(t.image)}
                                                    alt={t.name}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>

                                            <p className="mb-10 max-w-3xl text-lg font-light leading-relaxed text-muted-foreground/90 md:text-xl">
                                                "{t.quote}"
                                            </p>

                                            <div className="flex flex-col items-center">
                                                <p className="text-lg font-bold tracking-tight text-foreground">
                                                    {t.name}
                                                </p>
                                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mt-2">
                                                    {t.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl border border-border/50 text-foreground transition-all hover:bg-primary hover:text-white hover:scale-110 active:scale-95 hidden md:flex"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl border border-border/50 text-foreground transition-all hover:bg-primary hover:text-white hover:scale-110 active:scale-95 hidden md:flex"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Indicators */}
                    <div className="mt-12 flex justify-center gap-3">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setCurrentIndex(i);
                                    setIsAutoPlaying(false);
                                }}
                                className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === i ? "w-8 bg-primary" : "w-1.5 bg-primary/20 hover:bg-primary/40"
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
