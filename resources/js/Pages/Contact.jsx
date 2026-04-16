import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { SiteFooter } from "@/Components/SiteFooter";
import { ContactSection } from "@/Components/ContactSection";
import { MapPin, Phone, Mail } from "lucide-react";
import { useAsset } from "@/hooks/useAsset";

export default function Contact() {
    const asset = useAsset();
    return (
        <div className="min-h-screen bg-white">
            <Head title="Contact Us - Dubhe Richus" />
            <Navbar />

            <main className="pt-16 lg:pt-0 pb-20">
                {/* Responsive Banner Section */}
                <section className="relative overflow-hidden bg-[#020617]">
                    {/* Mobile/Tablet: No-crop image */}
                    <div className="lg:hidden w-full">
                        <img
                            src={asset('/images/contactus.jpeg')}
                            alt="Contact Us"
                            className="w-full h-auto"
                        />
                    </div>
                    {/* Desktop: Cinematic Hero */}
                    <div
                        className="hidden lg:block relative py-40 md:py-60"
                        style={{
                            backgroundImage: `url(${asset('/images/contactus.jpeg')})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="absolute inset-0 bg-black/10" />
                    </div>
                </section>
                {/* Main Contact Section (Original Component) */}
                <ContactSection />

                {/* Location Cards */}
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Cochin */}
                        <div className="rounded-[2.5rem] bg-white p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-50 transition-all hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] group">
                            <h3 className="font-serif text-3xl font-bold text-slate-900 mb-8">Cochin</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <MapPin className="h-3 w-3" />
                                    </div>
                                    <p className="text-sm text-slate-500 leading-relaxed font-normal">
                                        August Nursing Home Rd 282/20, Changampuzha Nagar, South<br />
                                        Kalamassery, Edappally, Kochi, Kerala 682033
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <Phone className="h-3 w-3" />
                                    </div>
                                    <p className="text-sm font-bold text-slate-900">099611 22777</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <Mail className="h-3 w-3" />
                                    </div>
                                    <p className="text-sm text-slate-500 font-normal">info@email.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Kannur */}
                        <div className="rounded-[2.5rem] bg-white p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-50 transition-all hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] group">
                            <h3 className="font-serif text-3xl font-bold text-slate-900 mb-8">Kannur</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <MapPin className="h-3 w-3" />
                                    </div>
                                    <p className="text-sm text-slate-500 leading-relaxed font-normal">
                                        Thulichery Road, near CSI Church,<br />
                                        Talap, Kannur, Kerala 670002
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <Phone className="h-3 w-3" />
                                    </div>
                                    <p className="text-sm font-bold text-slate-900">099611 22777</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <Mail className="h-3 w-3" />
                                    </div>
                                    <p className="text-sm text-slate-500 font-normal">info@email.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Full-width Dual Maps Section */}
                <div className="mt-32 w-full border-y border-slate-100">
                    <div className="flex flex-col lg:flex-row w-full h-[500px] lg:h-[600px]">
                        {/* Cochin Map */}
                        <div className="w-full lg:w-1/2 h-full relative group bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-100">
                            <iframe
                                src="https://www.google.com/maps?q=DUBHE+RICHUS+WATER+TREATMENT+PLANT+%26+SEWAGE+TREATMENT+EXPERTS+Cochin&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale-[0.2] contrast-[1.05] group-hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                        </div>

                        {/* Kannur Map */}
                        <div className="w-full lg:w-1/2 h-full relative group bg-slate-50">
                            <iframe
                                src="https://www.google.com/maps?q=DUBHE+RICHUS+WATER+TREATMENT+PLANT+%26+SEWAGE+TREATMENT+EXPERTS+KANNUR&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale-[0.2] contrast-[1.05] group-hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </main>

            <SiteFooter />
        </div>
    );
}
