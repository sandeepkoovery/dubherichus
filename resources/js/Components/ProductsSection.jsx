import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { useAsset } from "@/hooks/useAsset";
import { Link } from "@inertiajs/react";

const products = [
    {
        title: "Medium Range",
        description:
            "Individual household maintenance-free solutions to remove iron, turbidity, and bad odors naturally.",
        image: "/images/product-wtp.jpg",
        features: ["Active Oxygen Technology", "33+ Years Experience"],
        href: "/products/medium",
    },
    {
        title: "Standard Series",
        description:
            "High-performance filtration for large families and small businesses. Superior quality and design.",
        image: "/images/product-wtp.jpg",
        features: ["Enhanced Flow Rate", "Timeless Design"],
        href: "/products/standard",
    },
    {
        title: "Bayaweaver Model",
        description:
            "Our signature integrated technology for a premium water purifying experience. Patent protected.",
        image: "/images/product-stp.jpg",
        features: ["Integrated Technology", "First-Class Design"],
        href: "/products/bayaweaver",
    },
];

export function ProductsSection() {
    const asset = useAsset();
    const appBase = asset('');
    const parallaxRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const rect = parallaxRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top < windowHeight && rect.bottom > 0) {
                    const scrolled =
                        (windowHeight - rect.top) / (windowHeight + rect.height);
                    parallaxRef.current.style.backgroundPositionY = `${scrolled * 30}%`;
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div
                ref={parallaxRef}
                className="relative h-72 bg-cover bg-fixed bg-center md:h-96"
                style={{ backgroundImage: `url(${asset('/images/parallax-water.jpg')})` }}
            >
                <div className="absolute inset-0 bg-[#020617]/80" />
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.5em] text-primary">
                        Crafting Purity
                    </p>
                    <h2 className="font-serif text-5xl font-bold text-white md:text-6xl lg:text-7xl opacity-90">
                        Innovation in Every Drop
                    </h2>
                    <div className="mt-8 h-px w-24 bg-blue-500/30" />
                </div>
            </div>

            <section id="products" className="bg-white py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-20">
                        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                            Product Gallery
                        </p>
                        <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl mb-6">
                            PureFlow Insights
                        </h2>
                        <div className="mx-auto h-1 w-20 bg-primary/20 mb-8" />
                        <p className="text-muted-foreground/80 max-w-xl mx-auto text-lg font-light leading-relaxed">
                            Discover the perfect harmony of nature and <span className="text-primary font-medium">advanced engineering</span>.
                        </p>
                    </div>

                    <div className="grid gap-10 md:grid-cols-3">
                        {products.map((product, index) => (
                            <div
                                key={product.title}
                                className="group flex flex-col rounded-3xl bg-white overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-700 hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-4"
                                style={{ animationDelay: `${index * 150}ms`, animation: 'fade-in-up 1s ease-out both' }}
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={asset(product.image)}
                                        alt={product.title}
                                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                                <div className="p-10 flex flex-col flex-1 border border-t-0 border-border/50 rounded-b-3xl">
                                    <h3 className="mb-4 text-xl font-bold text-foreground tracking-tight">
                                        {product.title}
                                    </h3>
                                    <p className="text-[15px] font-light text-muted-foreground/80 leading-relaxed mb-6">
                                        {product.description}
                                    </p>
                                    <div className="mt-auto">
                                        <Link
                                            href={appBase + product.href}
                                            className="inline-flex items-center gap-2 text-primary text-[13px] font-bold uppercase tracking-widest transition-all hover:gap-3 underline decoration-primary/20 underline-offset-8"
                                        >
                                            View Details <ArrowRight className="h-3.5 w-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}
