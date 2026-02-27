import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { SiteFooter } from "@/Components/SiteFooter";
import { useAsset } from "@/hooks/useAsset";
import { Settings, PenTool, HardHat, ShieldCheck, Headphones, Zap } from "lucide-react";

const services = [
    {
        icon: PenTool,
        title: "Site Consultation & Design",
        description: "Every site is unique. Our engineers perform detailed water analysis and site surveys to design a custom treatment plant that fits your specific needs and constraints.",
        features: ["Water Quality Testing", "Technical Feasibility Study", "Custom Blueprint Design"]
    },
    {
        icon: HardHat,
        title: "Professional Installation",
        description: "Our expert installation team ensures your plant is set up correctly, safely, and efficiently. We handle everything from piping to electrical integration and initial testing.",
        features: ["Skilled Engineering Team", "Safety Compliant", "End-to-end Setup"]
    },
    {
        icon: ShieldCheck,
        title: "Annual Maintenance Contracts (AMC)",
        description: "Keep your system running at peak performance with our comprehensive AMC plans. We provide regular checkups, preventative maintenance, and priority support.",
        features: ["Scheduled Inspections", "Free Filter Cleaning", "Discounted Spare Parts"]
    },
    {
        icon: Settings,
        title: "Repairs & Spare Parts",
        description: "We stock a full range of high-quality components and spare parts for all our systems, ensuring minimal downtime in case of repairs.",
        features: ["Genuine Components", "Quick Delivery", "Expert Repair Technicians"]
    },
    {
        icon: Zap,
        title: "Energy Audits & Upgrades",
        description: "Modernize your old water treatment systems for better efficiency. We provide audits to identify energy-saving opportunities and performance upgrades.",
        features: ["Efficiency Analysis", "Retrofitting Options", "Performance Boosting"]
    },
    {
        icon: Headphones,
        title: "24/7 Technical Support",
        description: "Our dedicated support team is always available to help with troubleshooting and provide technical guidance for your plant's operation.",
        features: ["Emergency Hotline", "Remote Troubleshooting", "On-site Support"]
    }
];

export default function Services() {
    const asset = useAsset();

    return (
        <>
            <Head title="Our Services - Dubhe Richus" />
            <Navbar />
            <main className="pt-20">
                <section className="bg-[#0a1628] py-24 text-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                            <div>
                                <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
                                    Comprehensive Water Solutions
                                </h1>
                                <p className="text-lg text-white/70 leading-relaxed">
                                    Beyond manufacturing, we provide end-to-end services to ensure your water treatment systems deliver pure, safe water every single day.
                                </p>
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    src={asset('/images/services-install.png')}
                                    alt="Professional Installation"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-background">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center mb-20">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                                What We Do
                            </p>
                            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                                Expert Services for Lasting Performance
                            </h2>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {services.map((service, idx) => (
                                <div key={idx} className="group p-8 rounded-2xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1">
                                    <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                        <service.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-center gap-2 text-xs font-medium text-foreground/70">
                                                <div className="h-1 w-1 rounded-full bg-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-primary text-primary-foreground">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <h2 className="font-serif text-3xl font-bold mb-6 italic">
                            "Excellence is not a skill, it is an attitude."
                        </h2>
                        <p className="text-lg opacity-80 mb-10">
                            We don't just sell machines; we build trusting relationships through reliable after-sales service and uncompromising quality.
                        </p>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
