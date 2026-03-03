import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { SiteFooter } from "@/Components/SiteFooter";
import { useAsset } from "@/hooks/useAsset";

const projects = [
    { id: 1, title: "Heather Homes", location: "Trivandrum", category: "Commercial", image: "/images/projects/p1.png" },
    { id: 2, title: "Arctic Hotels", location: "Cochin", category: "Commercial", image: "/images/projects/p2.png" },
    { id: 3, title: "Navya Bakers", location: "Cochin", category: "Commercial", image: "/images/projects/p3.png" },
    { id: 4, title: "Abad Builders", location: "Cochin", category: "Commercial", image: "/images/projects/p4.png" },
    { id: 5, title: "Asset Homes", location: "Kottayam", category: "Commercial", image: "/images/projects/p5.png" },
    { id: 6, title: "Skyline Builders", location: "Thrissur", category: "Commercial", image: "/images/projects/p6.png" },
    { id: 7, title: "Confident Group", location: "Calicut", category: "Commercial", image: "/images/projects/p7.png" },
    { id: 8, title: "Joyalukkas", location: "Cochin", category: "Commercial", image: "/images/projects/p8.png" },
    { id: 9, title: "St Raphelales Parish Hall", location: "Cochin", category: "Commercial", image: "/images/projects/p9.png" },
];

export default function Projects() {
    const asset = useAsset();

    return (
        <>
            <Head title="Our Projects - Dubhe Richus" />
            <Navbar />
            <main className="pt-20 bg-white">
                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-16 text-center">
                            <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">Our Projects</h1>
                            <p className="mt-4 text-muted-foreground">Showcasing our commitment to clean water across various sectors.</p>
                        </div>

                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#0f172a' }}>Commercial Projects</h2>
                        </div>

                        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                            {projects.map((project) => (
                                <div key={project.id} className="group relative cursor-pointer">
                                    <div className="aspect-[1/1] overflow-hidden w-full shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1">
                                        <img
                                            src={asset(project.image)}
                                            alt={project.title}
                                            className="h-full w-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    {/* Project Labels Overlay with animation */}
                                    <div className="absolute bottom-6 left-0 flex flex-col items-start gap-1 transform transition-all duration-500 group-hover:translate-x-2">
                                        <div className="bg-black/90 px-4 py-1.5 transition-all duration-300 group-hover:bg-[#0f172a]">
                                            <span className="text-sm font-bold tracking-wide text-white uppercase">
                                                {project.title}
                                            </span>
                                        </div>
                                        <div className="bg-black/90 px-3 py-1 transition-all duration-300 group-hover:bg-[#0f172a]/80">
                                            <span className="text-[11px] font-medium text-white/90">
                                                {project.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-[#0a1628] text-white text-center">
                    <div className="mx-auto max-w-3xl px-6">
                        <h2 className="font-serif text-3xl font-bold mb-6 italic opacity-90">"Smarter Than You Think"</h2>
                        <p className="text-lg text-white/70">
                            Our projects stand as a testament to our engineering excellence and our pursuit of perfect water purity.
                        </p>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
