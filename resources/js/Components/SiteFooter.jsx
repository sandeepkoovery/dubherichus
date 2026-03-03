import { Droplets } from "lucide-react";
import { Link } from "@inertiajs/react";
import { useAsset } from "@/hooks/useAsset";

const productLinks = [
    { label: "Medium", href: "/products/medium" },
    { label: "Standard", href: "/products/standard" },
    { label: "Commercial", href: "/products/commercial" },
    { label: "Bayaweaver", href: "/products/bayaweaver" },
];

const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact Us", href: "/contact" },
];

export function SiteFooter() {
    const asset = useAsset();
    const appBase = asset('');
    return (
        <footer className="border-t border-border bg-[#0a1628] text-white">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="lg:col-span-1">
                        <Link href={appBase + "/"} className="mb-6 flex items-center gap-2 cursor-pointer">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 font-serif text-sm font-bold text-white">
                                DM
                            </div>
                            <div>
                                <span className="block text-lg font-bold font-serif leading-tight">
                                    DUBHE RICHUS
                                </span>
                                <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
                                    Pvt Ltd
                                </span>
                            </div>
                        </Link>
                        <p className="mb-6 text-sm leading-relaxed text-white/60">
                            Mastering Natural Water Filtration for Over 33 Years. India&apos;s
                            trusted manufacturer of WTP, ETP &amp; STP systems.
                        </p>
                        <div className="flex items-center gap-2">
                            <Droplets className="h-4 w-4 text-[#4da3ff]" />
                            <span className="text-xs text-white/40">
                                Clean Water, Healthy Future
                            </span>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white/80">
                            Products
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {productLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={appBase + link.href}
                                        className="text-sm text-white/50 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white/80">
                            Company
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={appBase + link.href}
                                        className="text-sm text-white/50 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white/80">
                            Newsletter
                        </h4>
                        <p className="mb-4 text-sm text-white/50">
                            Stay updated with our latest water treatment solutions and
                            industry insights.
                        </p>
                        <form
                            className="flex gap-2"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[#4da3ff] focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="rounded-lg bg-[#4da3ff] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#4da3ff]/80"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
                    <p className="text-xs text-white/40">
                        &copy; {new Date().getFullYear()} Dubhe Richus Pvt Ltd. All rights
                        reserved.
                    </p>
                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="text-xs text-white/40 transition-colors hover:text-white"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-xs text-white/40 transition-colors hover:text-white"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
