import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { useAsset } from "@/hooks/useAsset";
import { Link } from "@inertiajs/react";

const products = [
    {
        title: "Water Treatment Plant (WTP)",
        description:
            "Fully automated water treatment systems designed for residential, commercial, and industrial applications. Our WTP systems remove impurities through natural filtration processes without chemicals.",
        image: "/images/product-wtp.jpg",
        features: [
            "Fully Automated Operation",
            "Chemical-Free Process",
            "Low Maintenance",
            "Energy Efficient",
        ],
    },
    {
        title: "Effluent Treatment Plant (ETP)",
        description:
            "Advanced effluent treatment solutions for industries. Our ETP systems effectively treat industrial wastewater to meet environmental discharge standards while minimizing operational costs.",
        image: "/images/product-etp.jpg",
        features: [
            "Industrial Grade",
            "Meets CPCB Standards",
            "Automated Monitoring",
            "Cost Effective",
        ],
    },
    {
        title: "Sewage Treatment Plant (STP)",
        description:
            "State-of-the-art sewage treatment plants designed for municipalities, residential complexes, and commercial establishments. Eco-friendly and built for reliable long-term performance.",
        image: "/images/product-stp.jpg",
        features: [
            "Bio-Treatment Process",
            "Compact Design",
            "Odor Free Operation",
            "Recyclable Output",
        ],
    },
];

export function ProductsSection() {
    const asset = useAsset();
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
                className="relative h-64 bg-cover bg-fixed bg-center md:h-80"
                style={{ backgroundImage: `url(${asset('/images/parallax-water.jpg')})` }}
            >
                <div className="absolute inset-0 bg-[#0a1628]/70" />
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                    <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#4da3ff]">
                        Our Solutions
                    </p>
                    <h2 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                        <span className="text-balance">
                            Customized Water Treatment Solutions
                        </span>
                    </h2>
                    <p className="mt-3 max-w-xl text-white/60">
                        for Every Commercial Need
                    </p>
                </div>
            </div>

            <section id="products" className="bg-background py-24 md:py-32 border-t border-border">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                            Our Solutions
                        </p>
                        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl mb-4">
                            Expert Water Treatment
                        </h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            High-performance systems for residential and industrial needs.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {products.map((product) => (
                            <div
                                key={product.title}
                                className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-sm transition-all hover:shadow-md"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={asset(product.image)}
                                        alt={product.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="mb-2 text-lg font-bold text-foreground">
                                        {product.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                                        {product.description}
                                    </p>
                                    <div className="mt-auto">
                                        <Link
                                            href="/products"
                                            className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
                                        >
                                            View Details <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Button asChild size="lg">
                            <Link href="/products">
                                View Full Product Catalog
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
