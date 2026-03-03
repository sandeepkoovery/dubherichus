import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { SiteFooter } from "@/Components/SiteFooter";
import { useAsset } from "@/hooks/useAsset";
import { Shield, Target, Award, Clock, FlaskConical, PenTool, Users } from "lucide-react";

const teamMembers = [
    { name: "Stanley Jacob", role: "Founder", icon: Users },
    { name: "Jacob Richard", role: "Managing Director", icon: Users },
    { name: "Jacob Shalu", role: "Chief Technical Director", icon: Users },
];

export default function About() {
    const asset = useAsset();

    return (
        <>
            <Head title="About Us - Dubhe Richus" />
            <Navbar />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="bg-[#0a1628] py-24 text-white">
                    <div className="mx-auto max-w-7xl px-6 text-center">
                        <h1 className="font-serif text-4xl font-bold md:text-6xl">About Us</h1>
                        <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto italic">
                            "Innovators Driving Clean Water Solutions Forward"
                        </p>
                    </div>
                </section>

                {/* Our Vision */}
                <section className="py-24 bg-background border-b border-border">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                            <div>
                                <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl italic">Our Vision</h2>
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    Dubhe Richus aims to contribute towards the development of a better social Infrastructure by providing reliable technologies and solutions with superior value with expertise in the field of water/ waste water treatment.
                                </p>
                            </div>
                            <div className="bg-primary/5 p-12 rounded-2xl border border-primary/10">
                                <Target className="h-12 w-12 text-primary mb-6" />
                                <h3 className="text-xl font-bold mb-4">Focus on Reliability</h3>
                                <p className="text-muted-foreground italic">"Perfection in every detail."</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* R&D and Design */}
                <section className="py-24 bg-muted">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-12 md:grid-cols-2">
                            <div className="bg-card p-10 rounded-2xl border border-border shadow-sm">
                                <FlaskConical className="h-10 w-10 text-primary mb-6" />
                                <h2 className="mb-4 font-serif text-2xl font-bold">Research and Development</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our research and development team is dedicated to the development and upgradation of water treatment sector through grassroots action, research, and education. We look forward to keep the sustainability of the local natural environment in the development process.
                                </p>
                            </div>
                            <div className="bg-card p-10 rounded-2xl border border-border shadow-sm">
                                <PenTool className="h-10 w-10 text-primary mb-6" />
                                <h2 className="mb-4 font-serif text-2xl font-bold">Design and Technology</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Dubhe Richus integrated technology for a peaceful water purifying experience. (Completely patent protected). Perfection in every detail, our cylindrical vertical type of water treatment heavy machineries stands out from the crowd with superior quality, results and first-class design.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-24 bg-background">
                    <div className="mx-auto max-w-7xl px-6 text-center">
                        <h2 className="mb-16 font-serif text-3xl font-bold text-foreground md:text-4xl">Meet Our Leadership Team</h2>
                        <div className="grid gap-8 md:grid-cols-3">
                            {teamMembers.map((member) => (
                                <div key={member.name} className="p-10 rounded-2xl border border-border bg-card transition-all hover:shadow-lg">
                                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                                        <member.icon className="h-10 w-10 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold">{member.name}</h3>
                                    <p className="text-primary font-medium tracking-wider uppercase text-xs mt-2">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Dubhe Merak Sister Concern */}
                <section className="py-24 bg-[#0a1628] text-white">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <h2 className="mb-8 font-serif text-2xl font-bold md:text-3xl">Our Technical Partnership</h2>
                        <p className="text-lg text-white/70 leading-relaxed mb-10">
                            Dubhe Merak specializes in the research, development, and manufacturing of advanced water treatment solutions. We focus on fully automatic water treatment plants (WTP) and heavy-duty systems for Sewage Water Treatment (SWT) and Effluent Treatment Plants (ETP).
                        </p>
                        <a
                            href="https://dubhemerak.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 font-bold transition-colors hover:bg-white/10"
                        >
                            Visit Dubhe Merak
                        </a>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
