import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { SiteFooter } from "@/Components/SiteFooter";
import { useAsset } from "@/hooks/useAsset";
import { Button } from "@/Components/ui/button";
import { ArrowRight, CheckCircle2, FlaskConical, Settings, Zap } from "lucide-react";
import { Link } from "@inertiajs/react";

const detailedProducts = [
    {
        id: "wtp",
        title: "Water Treatment Plant (WTP)",
        tagline: "Total solution for iron, turbidity, and color removal.",
        description: "Our WTP systems use multi-grade natural filtration to provide crystal-clear water for domestic and industrial use. Unlike traditional filters, our systems are fully automated and backwash themselves without manual intervention.",
        image: "/images/product-wtp.jpg",
        specs: [
            { label: "Operation", value: "Fully Automatic / PLC Controlled" },
            { label: "Maintenance", value: "Self-Cleaning Mechanisms" },
            { label: "Service Life", value: "25+ Years" },
            { label: "Chemicals", value: "Zero Chemicals Used" }
        ],
        benefits: [
            "Removes 99% of suspended solids",
            "Eliminates bad odors and metallic taste",
            "Protects plumbing from scaling and corrosion",
            "Safe for high-precision industrial equipment"
        ]
    },
    {
        id: "etp",
        title: "Effluent Treatment Plant (ETP)",
        tagline: "Meeting complex industrial discharge standards naturally.",
        description: "Designed for textile, food processing, and chemical industries, our ETP systems treat process water to meet stringent environmental norms while maintaining low operational expenditure.",
        image: "/images/product-etp.jpg",
        specs: [
            { label: "Technology", value: "Physico-Chemical + Biological" },
            { label: "Compliance", value: "Pollution Control Board Standards" },
            { label: "Control", value: "Real-time pH and TDS Monitoring" },
            { label: "Automation", value: "Fully Automated Dosing" }
        ],
        benefits: [
            "High BOD and COD reduction efficiency",
            "Compact footprint design",
            "Low sludge generation",
            "Energy-optimized motors"
        ]
    },
    {
        id: "stp",
        title: "Sewage Treatment Plant (STP)",
        tagline: "Eco-friendly sewage management for a greener tomorrow.",
        description: "Our STP systems utilize advanced aerobic and anaerobic biological processes to treat domestic sewage. The recycled water can be safely used for gardening, toilet flushing, and cooling towers.",
        image: "/images/product-stp.jpg",
        specs: [
            { label: "Process", value: "MBBR / SBR Technology" },
            { label: "Output", value: "Reusable Non-potable Water" },
            { label: "Odor", value: "Complete Odor Cancellation" },
            { label: "Noise", value: "Silent Blower Operation" }
        ],
        benefits: [
            "Reduces fresh water demand up to 60%",
            "Modular design for easy expansion",
            "Easy to operate for residential societies",
            "Eco-friendly biological treatment"
        ]
    }
];

export default function Products() {
    const asset = useAsset();

    return (
        <>
            <Head title="Our Products - Dubhe Richus" />
            <Navbar />
            <main className="pt-20">
                <section className="relative h-[450px] w-full bg-[#0a1628] flex items-center">
                    <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block overflow-hidden">
                        <img
                            src={asset('/images/products-tech.png')}
                            alt="Precision Technology"
                            className="w-full h-full object-cover opacity-60"
                            style={{ maskImage: 'linear-gradient(to left, black, transparent)' }}
                        />
                    </div>
                    <div className="mx-auto max-w-7xl px-6 relative z-10">
                        <div className="max-w-2xl">
                            <p className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4da3ff]">
                                Technical Specifications
                            </p>
                            <h1 className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                                Engineered for <span className="text-[#4da3ff]">Precision</span>
                            </h1>
                            <p className="text-lg text-white/70 leading-relaxed">
                                Our products represent 33 years of engineering evolution. From domestic filtration to complex industrial treatment, we build systems that outperform and outlast the competition.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-background">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="space-y-32">
                            {detailedProducts.map((product, idx) => (
                                <div key={product.id} className={`grid gap-16 lg:grid-cols-2 lg:items-start ${idx % 2 !== 0 ? 'lg:direction-rtl' : ''}`} style={{ direction: idx % 2 !== 0 ? 'rtl' : 'ltr' }}>
                                    <div className="space-y-8" style={{ direction: 'ltr' }}>
                                        <div>
                                            <h2 className="mb-2 font-serif text-3xl font-bold text-foreground md:text-4xl">{product.title}</h2>
                                            <p className="text-primary font-medium">{product.tagline}</p>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">{product.description}</p>

                                        <div className="grid gap-4 sm:grid-cols-2">
                                            {product.specs.map((spec, sIdx) => (
                                                <div key={sIdx} className="p-4 border border-border rounded-xl bg-muted/20">
                                                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{spec.label}</p>
                                                    <p className="font-bold text-sm text-foreground">{spec.value}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="space-y-3">
                                            <h4 className="font-bold flex items-center gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-primary" /> Key Benefits
                                            </h4>
                                            <ul className="grid gap-2 sm:grid-cols-2">
                                                {product.benefits.map((benefit, bIdx) => (
                                                    <li key={bIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <div className="h-1 w-1 rounded-full bg-primary/40" />
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <Button asChild className="bg-primary text-primary-foreground">
                                            <Link href="/contact">
                                                Get Quote for {product.title} <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-border aspect-[4/3]" style={{ direction: 'ltr' }}>
                                        <img
                                            src={asset(product.image)}
                                            alt={product.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
