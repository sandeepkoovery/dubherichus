import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { SiteFooter } from "@/Components/SiteFooter";
import { ContactSection } from "@/Components/ContactSection";
import { MessageSquare, HelpCircle, Mail, MapPin, Phone } from "lucide-react";

const faqs = [
    {
        q: "What is the maintenance schedule for your WTP systems?",
        a: "Our fully automated systems require minimal intervention. We recommend a professional check-up once every 6 months to ensure all valves and sensors are calibrated correctly."
    },
    {
        q: "Do you provide solutions outside of Kerala?",
        a: "Yes, we have completed projects in over 7 states across India. Our team is equipped to handle installations and consultations nationwide."
    },
    {
        q: "How long does a typical installation take?",
        a: "Domestic WTP systems are usually installed within 1-2 days. Larger industrial ETP or STP units can take anywhere from 2 to 6 weeks depending on the complexity and civil works."
    },
    {
        q: "Are your water treatment processes chemical-free?",
        a: "Yes, our core philosophy is based on natural filtration. We use multi-grade natural media to purify water without the need for harmful chemicals."
    }
];

export default function Contact() {
    return (
        <>
            <Head title="Contact Us - Dubhe Richus" />
            <Navbar />
            <main className="pt-20 bg-background">
                {/* Header Section */}
                <section className="bg-muted py-24 border-b border-border">
                    <div className="mx-auto max-w-7xl px-6 text-center">
                        <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl mb-6">
                            Let's Talk Water
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Whether you need a small system for your home or a massive plant for an industrial complex, our experts are here to help.
                        </p>
                    </div>
                </section>

                {/* Main Contact Section (Existing Component) */}
                <ContactSection />

                {/* FAQ Section */}
                <section className="py-24 bg-card border-t border-border">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
                                <HelpCircle className="h-8 w-8 text-primary" /> Frequently Asked Questions
                            </h2>
                            <p className="text-muted-foreground">Quick answers to common inquiries about our systems and projects.</p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="p-8 rounded-2xl border border-border bg-background hover:border-primary/30 transition-colors">
                                    <h4 className="font-bold text-foreground mb-3">{faq.q}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Direct Reach Section */}
                <section className="py-24 bg-background">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="flex flex-col items-center text-center p-8 border border-border rounded-2xl">
                                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-bold mb-2">Call Us</h3>
                                <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                                <p className="text-sm text-muted-foreground">+91 484 2345678</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-8 border border-border rounded-2xl">
                                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-bold mb-2">Email Us</h3>
                                <p className="text-sm text-muted-foreground">info@dubherichus.com</p>
                                <p className="text-sm text-muted-foreground">support@dubherichus.com</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-8 border border-border rounded-2xl">
                                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-bold mb-2">Visit Us</h3>
                                <p className="text-sm text-muted-foreground leading-tight">Dubhe Richus Pvt Ltd,<br />Industrial Area, Kochi, Kerala</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
