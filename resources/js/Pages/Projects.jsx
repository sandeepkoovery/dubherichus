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
                        <div className="mb-20 text-center">
                            <h1 className="font-serif text-5xl font-bold tracking-tight text-foreground md:text-6xl mb-6">Our Projects</h1>
                            <div className="mx-auto h-1 w-20 bg-primary/20 mb-6" />
                            <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-light leading-relaxed">
                                From large-scale industrial plants to specialized commercial installations,
                                explore how we're redefining <span className="text-primary font-medium">water purity</span> across India.
                            </p>
                        </div>

                        <div className="mb-16">
                            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-primary text-center mb-4">Portfolio</h2>
                            <h3 className="text-3xl font-serif text-center" style={{ color: '#0f172a' }}>Commercial Excellence</h3>
                        </div>

                        <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                            {projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className="group relative cursor-pointer"
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                        animation: 'fade-in-up 1s ease-out both'
                                    }}
                                >
                                    <div className="aspect-[1/1] overflow-hidden w-full rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 group-hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.2)] group-hover:-translate-y-3">
                                        <img
                                            src={asset(project.image)}
                                            alt={project.title}
                                            className="h-full w-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    </div>

                                    {/* Project Labels Overlay with animation */}
                                    <div className="absolute bottom-8 left-0 flex flex-col items-start gap-1 transform transition-all duration-700 ease-out group-hover:translate-x-3">
                                        <div className="bg-[#0f172a] px-6 py-2 shadow-2xl transition-all duration-500 group-hover:bg-primary">
                                            <span className="text-[14px] font-bold tracking-wider text-white uppercase">
                                                {project.title}
                                            </span>
                                        </div>
                                        <div className="bg-white/95 backdrop-blur-md px-4 py-1.5 shadow-xl transition-all duration-500">
                                            <span className="text-[11px] font-semibold tracking-widest text-[#0f172a]/70 uppercase">
                                                {project.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-32 bg-[#020617] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50" />
                    <div className="mx-auto max-w-4xl px-6 relative z-10">
                        <h2 className="font-serif text-4xl font-bold mb-8 text-white leading-relaxed">
                            Smarter Than You Think
                        </h2>
                        <div className="mx-auto h-px w-24 bg-blue-500/50 mb-8" />
                        <p className="text-xl text-white/60 font-light leading-relaxed tracking-wide">
                            Our projects stand as a testament to our engineering excellence
                            and our relentless pursuit of <span className="text-white font-normal">perfect water purity</span>.
                        </p>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
