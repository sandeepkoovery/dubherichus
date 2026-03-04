import { useForm } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { MapPin, Phone, Mail, CheckCircle, ArrowRight } from "lucide-react";

export function ContactSection() {
    const { data, setData, post, processing, errors, recentlySuccessful } = useForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/contact', {
            preserveScroll: true,
        });
    };

    return (
        <section id="contact" className="bg-secondary/50 py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Column */}
                    <div className="flex flex-col" style={{ animation: 'fade-in-left 1s ease-out both' }}>
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                            CONTACT US
                        </span>
                        <h2 className="mt-6 font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                            Have questions?<br />
                            Get in touch!
                        </h2>
                        <div className="mt-10 max-w-md text-sm leading-relaxed text-muted-foreground/80">
                            Have questions or need assistance? Reach out to us today,
                            and let our team help you find the perfect water solution!
                        </div>

                        {/* Contact Details */}
                        <div className="mt-16 flex flex-col gap-10">
                            {[
                                { icon: Phone, label: "Call Us", value: "Consultation Lines Open", color: "blue" },
                                { icon: Mail, label: "Email", value: "info@dubherichus.com", color: "teal" },
                                { icon: MapPin, label: "Location", value: "HQ - Kerala, India", color: "indigo" }
                            ].map((item, idx) => (
                                <div key={item.label} className="group flex items-center gap-6" style={{ animationDelay: `${idx * 150}ms`, animation: 'fade-in-left 1s ease-out both' }}>
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-xl border border-border/50 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">
                                            {item.label}
                                        </p>
                                        <p className="mt-1 text-lg font-bold tracking-tight text-foreground">
                                            {item.value}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Form Card */}
                    <div>
                        {recentlySuccessful ? (
                            <div className="flex flex-col items-center justify-center rounded-3xl border border-[#0f172a]/5 bg-white px-10 py-20 text-center shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)]">
                                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                                    <CheckCircle className="h-10 w-10 text-green-500" />
                                </div>
                                <h3 className="font-serif text-3xl font-bold text-foreground">
                                    Message Request Logged
                                </h3>
                                <p className="mt-4 max-w-sm text-[15px] font-light leading-relaxed text-muted-foreground">
                                    Your interest has been noted. A water treatment expert will
                                    reach out to you <span className="text-foreground font-medium">within 24 hours</span>.
                                </p>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="rounded-[2.5rem] border border-[#0f172a]/5 bg-white px-10 py-12 shadow-[0_45px_100px_-20px_rgba(0,0,0,0.1)] md:px-14 md:py-16"
                                style={{ animation: 'fade-in-right 1s ease-out both' }}
                            >
                                <h3 className="font-serif text-2xl font-bold text-foreground tracking-tight">
                                    Inquiry Form
                                </h3>
                                <p className="mt-2 text-[15px] font-light text-muted-foreground/80">
                                    Experience the future of water purity today.
                                </p>

                                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                                    {/* Name */}
                                    <div className="flex flex-col gap-1.5">
                                        <Label
                                            htmlFor="name"
                                            className="text-xs font-bold uppercase tracking-[0.1em] text-foreground"
                                        >
                                            Name
                                        </Label>
                                        <Input
                                            id="name"
                                            placeholder="Your full name"
                                            required
                                            value={data.name}
                                            onChange={(e) => setData("name", e.target.value)}
                                            className="h-12 rounded-lg border-border bg-background px-4 text-sm transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary/30"
                                        />
                                        {errors.name && <span className="text-xs text-destructive">{errors.name}</span>}
                                    </div>

                                    {/* Email */}
                                    <div className="flex flex-col gap-1.5">
                                        <Label
                                            htmlFor="email"
                                            className="text-xs font-bold uppercase tracking-[0.1em] text-foreground"
                                        >
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="you@company.com"
                                            required
                                            value={data.email}
                                            onChange={(e) => setData("email", e.target.value)}
                                            className="h-12 rounded-lg border-border bg-background px-4 text-sm transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary/30"
                                        />
                                        {errors.email && <span className="text-xs text-destructive">{errors.email}</span>}
                                    </div>
                                </div>

                                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                                    {/* Phone */}
                                    <div className="flex flex-col gap-1.5">
                                        <Label
                                            htmlFor="phone"
                                            className="text-xs font-bold uppercase tracking-[0.1em] text-foreground"
                                        >
                                            Phone
                                        </Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="+91 XXXXX XXXXX"
                                            value={data.phone}
                                            onChange={(e) => setData("phone", e.target.value)}
                                            className="h-12 rounded-lg border-border bg-background px-4 text-sm transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary/30"
                                        />
                                        {errors.phone && <span className="text-xs text-destructive">{errors.phone}</span>}
                                    </div>

                                    {/* Subject */}
                                    <div className="flex flex-col gap-1.5">
                                        <Label
                                            htmlFor="subject"
                                            className="text-xs font-bold uppercase tracking-[0.1em] text-foreground"
                                        >
                                            Subject
                                        </Label>
                                        <Input
                                            id="subject"
                                            placeholder="Nature of inquiry"
                                            value={data.subject}
                                            onChange={(e) => setData("subject", e.target.value)}
                                            className="h-12 rounded-lg border-border bg-background px-4 text-sm transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary/30"
                                        />
                                        {errors.subject && <span className="text-xs text-destructive">{errors.subject}</span>}
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="mt-5 flex flex-col gap-1.5">
                                    <Label
                                        htmlFor="message"
                                        className="text-xs font-bold uppercase tracking-[0.1em] text-foreground"
                                    >
                                        Message
                                    </Label>
                                    <Textarea
                                        id="message"
                                        rows={4}
                                        placeholder="Tell us about your requirements..."
                                        value={data.message}
                                        onChange={(e) => setData("message", e.target.value)}
                                        className="rounded-lg border-border bg-background px-4 py-3 text-sm transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary/30"
                                    />
                                    {errors.message && <span className="text-xs text-destructive">{errors.message}</span>}
                                </div>

                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="mt-8 h-12 w-full gap-2 rounded-lg bg-primary text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                                >
                                    {processing ? "Sending..." : "Send Message"}
                                    {!processing && <ArrowRight className="h-4 w-4" />}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
