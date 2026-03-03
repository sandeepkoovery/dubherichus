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
                <section className="relative overflow-hidden bg-[#020617] py-32 text-white">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50" />
                    <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
                        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.5em] text-blue-400">
                            Our Story
                        </p>
                        <h1 className="font-serif text-5xl font-bold md:text-7xl lg:text-8xl tracking-tight">
                            About <span className="text-blue-400">Us</span>
                        </h1>
                        <div className="mx-auto mt-8 h-1 w-24 bg-blue-500/30" />
                        <p className="mt-10 text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                            "Innovators Driving Clean Water Solutions Forward"
                        </p>
                    </div>
                </section>

                {/* Our Vision */}
                <section className="py-32 bg-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
                            <div style={{ animation: 'fade-in-left 1s ease-out both' }}>
                                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                                    Our Vision
                                </p>
                                <h2 className="mb-8 font-serif text-4xl font-bold text-foreground md:text-5xl leading-tight">
                                    Contributing to <br />
                                    <span className="text-primary/80">Social Evolution</span>
                                </h2>
                                <p className="text-xl font-light leading-relaxed text-muted-foreground/80">
                                    Dubhe Richus aims to contribute towards the development of a better social Infrastructure by providing <span className="text-foreground font-medium underline underline-offset-8 decoration-primary/20">reliable technologies</span> and solutions with superior value.
                                </p>
                            </div>
                            <div className="bg-[#0f172a] p-16 rounded-[3rem] shadow-2xl relative overflow-hidden group" style={{ animation: 'fade-in-right 1s ease-out both' }}>
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent" />
                                <Target className="h-16 w-16 text-blue-400 mb-8 relative z-10 transition-transform duration-700 group-hover:scale-110" />
                                <h3 className="text-2xl font-bold mb-4 relative z-10 text-white">Focus on Reliability</h3>
                                <p className="text-white/60 text-lg font-light relative z-10">Perfection in every detail.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* R&D and Design */}
                <section className="py-32 bg-muted/30">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-12 md:grid-cols-2">
                            {[
                                {
                                    icon: FlaskConical,
                                    title: "Research and Development",
                                    desc: "Our research and development team is dedicated to the development and upgradation of water treatment sector through grassroots action, research, and education."
                                },
                                {
                                    icon: PenTool,
                                    title: "Design and Technology",
                                    desc: "Dubhe Richus integrated technology for a peaceful water purifying experience. Our cylindrical vertical type of water treatment machineries stands out with first-class design."
                                }
                            ].map((item, idx) => (
                                <div key={item.title} className="group bg-white p-12 rounded-[2.5rem] shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]" style={{ animationDelay: `${idx * 200}ms`, animation: 'fade-in-up 1s ease-out both' }}>
                                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <h2 className="mb-6 font-serif text-3xl font-bold tracking-tight">{item.title}</h2>
                                    <p className="text-[15px] font-light leading-relaxed text-muted-foreground/80">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-32 bg-white">
                    <div className="mx-auto max-w-7xl px-6 text-center">
                        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                            Leadership
                        </p>
                        <h2 className="mb-20 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl tracking-tight">Meet Our Team</h2>
                        <div className="grid gap-12 md:grid-cols-3">
                            {teamMembers.map((member, idx) => (
                                <div key={member.name} className="group p-12 rounded-[2.5rem] border border-[#0f172a]/5 bg-white transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.1)]" style={{ animationDelay: `${idx * 150}ms`, animation: 'fade-in-up 1s ease-out both' }}>
                                    <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary/5 text-primary transition-all duration-700 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                                        <member.icon className="h-10 w-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">{member.name}</h3>
                                    <div className="mx-auto mt-3 h-0.5 w-8 bg-primary/20 transition-all duration-500 group-hover:w-16" />
                                    <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60">{member.role}</p>
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
