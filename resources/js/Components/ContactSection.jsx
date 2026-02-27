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
        service: "",
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
                    <div className="flex flex-col">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                            Get In Touch
                        </span>
                        <h2 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
                            <span className="text-balance">
                                Ready to Transform Your Water Treatment?
                            </span>
                        </h2>
                        <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                            Whether you need a new installation or want to upgrade your
                            existing system, our team is ready to help you find the perfect
                            solution.
                        </p>

                        {/* Contact Details */}
                        <div className="mt-12 flex flex-col gap-8">
                            <div className="flex items-center gap-5">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/20 bg-background">
                                    <Phone className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                                        Call Us
                                    </p>
                                    <p className="mt-0.5 text-base font-semibold text-foreground">
                                        Contact via website
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/20 bg-background">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                                        Email
                                    </p>
                                    <p className="mt-0.5 text-base font-semibold text-foreground">
                                        info@dubherichus.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/20 bg-background">
                                    <MapPin className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                                        Location
                                    </p>
                                    <p className="mt-0.5 text-base font-semibold text-foreground">
                                        India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form Card */}
                    <div>
                        {recentlySuccessful ? (
                            <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card px-8 py-16 text-center shadow-lg shadow-foreground/[0.03]">
                                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                                    <CheckCircle className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-foreground">
                                    Message Sent!
                                </h3>
                                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                                    Thank you for reaching out. Our team will get back to you
                                    within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="rounded-2xl border border-border bg-card px-8 py-10 shadow-lg shadow-foreground/[0.03] md:px-10"
                            >
                                <h3 className="font-serif text-xl font-bold text-foreground">
                                    Send us a message
                                </h3>
                                <p className="mt-1.5 text-sm text-muted-foreground">
                                    Fill out the form and our team will get back to you within 24
                                    hours.
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

                                {/* Phone */}
                                <div className="mt-5 flex flex-col gap-1.5">
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

                                {/* Service */}
                                <div className="mt-5 flex flex-col gap-1.5">
                                    <Label
                                        htmlFor="service"
                                        className="text-xs font-bold uppercase tracking-[0.1em] text-foreground"
                                    >
                                        Service Required
                                    </Label>
                                    <Select onValueChange={(value) => setData("service", value)} value={data.service}>
                                        <SelectTrigger
                                            id="service"
                                            className="h-12 w-full rounded-lg border-border bg-background px-4 text-sm transition-colors focus:border-primary focus:ring-1 focus:ring-primary/30"
                                        >
                                            <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="wtp">
                                                Water Treatment Plant (WTP)
                                            </SelectItem>
                                            <SelectItem value="etp">
                                                Effluent Treatment Plant (ETP)
                                            </SelectItem>
                                            <SelectItem value="stp">
                                                Sewage Treatment Plant (STP)
                                            </SelectItem>
                                            <SelectItem value="consultation">
                                                General Consultation
                                            </SelectItem>
                                            <SelectItem value="maintenance">
                                                AMC / Maintenance
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.service && <span className="text-xs text-destructive">{errors.service}</span>}
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
