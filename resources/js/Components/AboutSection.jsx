import {
    Lightbulb,
    PaintBucket,
    Leaf,
    FlaskConical,
    TreePine,
} from "lucide-react";
import { useAsset } from "@/hooks/useAsset";

const features = [
    {
        icon: Lightbulb,
        title: "Innovative Technology",
        desc: "We apply the latest advancements in natural filtration technology to deliver efficient and reliable water treatment systems.",
    },
    {
        icon: PaintBucket,
        title: "Custom Designs",
        desc: "Tailored solutions designed to meet the specific water treatment needs of homes, offices, and commercial establishments.",
    },
    {
        icon: Leaf,
        title: "Sustainability",
        desc: "Our treatment plants operate without chemicals, promoting eco-friendly and sustainable water purification processes.",
    },
    {
        icon: FlaskConical,
        title: "Research & Development",
        desc: "Dedicated R&D team continually improving our products for better performance and longer system life cycles.",
    },
    {
        icon: TreePine,
        title: "Environmental Focus",
        desc: "Committed to reducing the environmental impact of water treatment through green manufacturing and natural processes.",
    },
];

export function AboutSection() {
    const asset = useAsset();
    return (
        <section id="about" className="bg-background py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                            Why Choose Us
                        </p>
                        <h2 className="mb-6 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                            <span className="text-balance">
                                Smarter Than You Think
                            </span>
                        </h2>
                        <p className="mb-10 max-w-lg leading-relaxed text-muted-foreground">
                            At Dubhe Merak, we combine over three decades of expertise with
                            cutting-edge technology to deliver water treatment solutions that
                            are innovative, sustainable, and built to exceed expectations.
                        </p>

                        <div className="flex flex-col gap-6">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                        <feature.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="mb-1 text-sm font-semibold text-foreground">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden rounded-2xl">
                            <img
                                src={asset('/images/about-bg.jpg')}
                                alt="Dubhe Merak water treatment facility aerial view"
                                className="h-[500px] w-full object-cover lg:h-[640px]"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-card p-6 shadow-xl md:p-8">
                            <div className="flex items-center gap-6">
                                <div>
                                    <p className="text-3xl font-bold text-primary md:text-4xl">
                                        20K+
                                    </p>
                                    <p className="text-sm text-muted-foreground">Installations</p>
                                </div>
                                <div className="h-12 w-px bg-border" />
                                <div>
                                    <p className="text-3xl font-bold text-primary md:text-4xl">
                                        33+
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Years of Trust
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
