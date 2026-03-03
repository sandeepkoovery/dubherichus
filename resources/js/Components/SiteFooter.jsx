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
                        <Link href={appBase + "/"} className="mb-10 flex items-center gap-4 cursor-pointer group">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#020617] transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                                <Droplets className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <span className="block text-2xl font-bold font-serif leading-tight tracking-tight text-white group-hover:text-blue-400 transition-colors">
                                    DUBHE RICHUS
                                </span>
                                <span className="block text-[10px] font-bold uppercase tracking-[0.4em] text-blue-400 opacity-80">
                                    Innovations for Life
                                </span>
                            </div>
                        </Link>
                        <p className="mb-10 text-[15px] font-light leading-relaxed text-white/50 max-w-sm">
                            Mastering the art of <span className="text-white font-normal underline underline-offset-8 decoration-blue-500/30">natural water filtration</span> for over 33 years.
                            India's premier manufacturer of advanced treatment systems.
                        </p>
                        <div className="flex items-center gap-3 group">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-400 group-hover:animate-ping" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                                Engineering Purity Since 1991
                            </span>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-10 text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
                            Portfolio
                        </h4>
                        <ul className="flex flex-col gap-4">
                            {productLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={appBase + link.href}
                                        className="group flex items-center gap-2 text-[14px] font-light text-white/50 transition-all hover:text-white"
                                    >
                                        <span className="h-px w-0 bg-blue-500 transition-all duration-300 group-hover:w-4" />
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
                        <h4 className="mb-10 text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
                            Newsletter
                        </h4>
                        <p className="mb-8 text-[14px] font-light leading-relaxed text-white/50">
                            Stay updated with our latest water treatment solutions and
                            industry insights.
                        </p>
                        <form
                            className="relative flex flex-col gap-4"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-white placeholder:text-white/20 transition-all focus:border-blue-500 focus:bg-white/[0.08] focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="w-full rounded-2xl bg-blue-600 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:bg-blue-500 hover:scale-102 active:scale-98"
                            >
                                Subscribe
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
