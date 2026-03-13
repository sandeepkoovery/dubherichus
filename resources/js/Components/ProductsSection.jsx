import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { useAsset } from "@/hooks/useAsset";
import { Link } from "@inertiajs/react";

const products = [
    {
        title: "Medium",
        capacity: "1250- 1500 Ltr./day",
        image: "/images/medium.jpg",
        href: "/products/medium",
    },
    {
        title: "Standard",
        capacity: "1500- 2500 Ltr./day",
        image: "/images/standard.jpg",
        href: "/products/standard",
    },
    {
        title: "Commercial",
        capacity: "For Custom Use",
        image: "/images/commercial.jpg",
        href: "/products/commercial",
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

            <section id="products" className="bg-white">
                <div className="py-16 md:py-24 mx-auto max-w-7xl px-6">
                    <div className="text-center mb-8">
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
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-3">
                    {products.map((product, index) => (
                        <Link
                            key={product.title}
                            href={appBase + product.href}
                            className="group relative block w-full h-[60vh] min-h-[500px] overflow-hidden bg-slate-900"
                        >
                            <img
                                src={asset(product.image)}
                                alt={product.title}
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:opacity-40 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-700 opacity-60 group-hover:opacity-100" />

                            <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end items-start transition-transform duration-700 translate-y-8 group-hover:translate-y-0">
                                <p className="text-blue-400 font-bold tracking-[0.2em] text-[10px] md:text-xs mb-3 opacity-0 transition-opacity duration-700 delay-100 group-hover:opacity-100 uppercase drop-shadow-md">
                                    {product.capacity}
                                </p>
                                <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 drop-shadow-lg transform transition-all duration-700">
                                    {product.title}
                                </h3>

                                <div className="flex items-center gap-3 text-white text-xs font-bold uppercase tracking-[0.2em] opacity-0 transition-all duration-700 delay-200 group-hover:opacity-100">
                                    <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-500 group-hover:after:w-full pb-1">
                                        Explore System
                                    </span>
                                    <ArrowRight className="w-4 h-4 ml-2 transform -translate-x-4 transition-transform duration-700 group-hover:translate-x-0" />
                                </div>
                            </div>

                            <div className="absolute top-0 left-0 w-full h-px bg-white/10" />
                            <div className="absolute top-0 right-0 w-px h-full bg-white/10 hidden md:block" />
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}
