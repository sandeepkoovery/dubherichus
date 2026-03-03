import { Building2, Home, Factory, ArrowRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { useAsset } from "@/hooks/useAsset";

const projectTypes = [
    {
        icon: Home,
        title: "Household",
        description: "Pure and safe water solutions tailored for modern homes and villas.",
    },
    {
        icon: Building2,
        title: "Commercial",
        description: "Heavy-duty water treatment for hotels, hospitals, and office complexes.",
    },
    {
        icon: Factory,
        title: "Industrial",
        description: "Scaleable filtration systems for factories and large-scale manufacturing.",
    },
];

export function ProjectsPreview() {
    const asset = useAsset();
    const appBase = asset('');
    return (
        <section id="projects-preview" className="bg-muted py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                        Our Impact
                    </p>
                    <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                        <span className="text-balance italic">
                            "Impactful Stories"
                        </span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        From residential homes to massive industrial plants, our technologies ensure water purity everywhere.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {projectTypes.map((type) => (
                        <div
                            key={type.title}
                            className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                                <type.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="mb-3 text-lg font-bold text-foreground">
                                {type.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {type.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button asChild className="group">
                        <Link href={appBase + "/projects"}>
                            View All Projects
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
