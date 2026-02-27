import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { SiteFooter } from "@/Components/SiteFooter";
import { useAsset } from "@/hooks/useAsset";
import { Shield, Target, Award, Clock } from "lucide-react";

export default function About() {
    const asset = useAsset();

    return (
        <>
            <Head title="About Us - Dubhe Richus" />
            <Navbar />
            <main className="pt-20">
                {/* Hero section for About Page */}
                <section className="relative h-[400px] w-full overflow-hidden">
                    <img
                        src={asset('/images/about-mission.png')}
                        alt="Our Mission"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0a1628]/60 flex items-center justify-center">
                        <div className="text-center px-6">
                            <h1 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                                Our Legacy of Purity
                            </h1>
                            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                                Since 1991, we have been at the forefront of natural water treatment technology in India.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-background">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                            <div>
                                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                                    Our Story
                                </p>
                                <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
                                    33+ Years of Excellence in Water Technology
                                </h2>
                                <div className="space-y-6 text-muted-foreground leading-relaxed">
                                    <p>
                                        Dubhe Richus was founded with a single vision: to provide clean, safe water through natural and sustainable processes. Over the last three decades, we have transformed from a local manufacturer into a national leader in Integrated Water Technology.
                                    </p>
                                    <p>
                                        Our commitment to Research and Development has allowed us to develop chemical-free filtration systems that are not only effective but also environmentally responsible. We believe that technology should work in harmony with nature, not against it.
                                    </p>
                                </div>

                                <div className="mt-10 grid grid-cols-2 gap-6">
                                    <div className="p-4 border border-border rounded-xl bg-muted/30">
                                        <Clock className="h-6 w-6 text-primary mb-2" />
                                        <h4 className="font-bold text-foreground">Established</h4>
                                        <p className="text-sm">1991, Kerala, India</p>
                                    </div>
                                    <div className="p-4 border border-border rounded-xl bg-muted/30">
                                        <Award className="h-6 w-6 text-primary mb-2" />
                                        <h4 className="font-bold text-foreground">Projects</h4>
                                        <p className="text-sm">1000+ Completed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl">
                                    <img
                                        src={asset('/images/about_mission_vision_1772184018468.png')} // Fallback if move failed, but using the new one is better
                                        // But I moved it to public/images/about-mission.png
                                        src={asset('/images/about-mission.png')}
                                        alt="Vision for the future"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-primary p-8 rounded-2xl hidden md:block">
                                    <p className="text-4xl font-bold text-primary-foreground">33</p>
                                    <p className="text-sm text-primary-foreground/80 lowercase">Years of Trust</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-muted">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                                Mission & Vision
                            </h2>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="bg-card p-10 rounded-2xl border border-border shadow-sm">
                                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <Target className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    To engineer and deliver the world's most sustainable, efficient, and natural water treatment solutions that empower communities and industries to thrive without compromising environmental integrity.
                                </p>
                            </div>
                            <div className="bg-card p-10 rounded-2xl border border-border shadow-sm">
                                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <Shield className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    To set the global standard for chemical-free water purification, ensuring that future generations have access to clean, safe, and natural water as a fundamental right.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
