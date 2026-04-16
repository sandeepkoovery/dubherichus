import { Droplets } from "lucide-react";
import { Link } from "@inertiajs/react";
import { useAsset } from "@/hooks/useAsset";

const productLinks = [
    { label: "CLASSIC (S)", href: "/products/classic" },
    { label: "MEDIUM (M)", href: "/products/medium" },
    { label: "STANDARD (L)", href: "/products/standard" },
    { label: "COMMERCIAL (XL)", href: "/products/commercial" },
    { label: "Bayaweaver", href: "/products/bayaweaver" },
];

const companyLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog", isExternal: true },
    { label: "Contact Us", href: "/contact" },
];

export function SiteFooter() {
    const asset = useAsset();
    const appBase = asset('');
    return (
        <footer className="border-t border-border bg-[#0a1628] text-white">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 items-start">
                    <div className="lg:col-span-1 flex flex-col justify-between">
                        <div>
                            <Link href={appBase + "/"} className="mb-8 flex items-center gap-4 cursor-pointer group">
                                <img
                                    src={asset('/images/dubhe-logo.png')}
                                    alt="Dubhe Richus"
                                    className="h-10 w-auto brightness-0 invert transition-all duration-500 group-hover:scale-105"
                                />
                            </Link>
                            <p className="mb-6 text-[14px] font-light leading-relaxed text-white/50 max-w-sm">
                                Mastering the art of <span className="text-white font-normal underline underline-offset-8 decoration-blue-500/30">natural water filtration</span> for over 33 years.
                                India's premier manufacturer of advanced treatment systems.
                            </p>
                            <div className="mb-8 flex items-center gap-3 group">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary group-hover:animate-ping" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                                    Engineering Purity Since 1991
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/dubherichus?igsh=MXdwcTd0dDdwb2RyNg%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center transition-transform hover:scale-110"
                                title="Follow us on Instagram"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-2 shadow-lg transition-shadow hover:shadow-xl">
                                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.058 2.11.233 2.608.426.658.256 1.127.56 1.62 1.054.494.493.798.96 1.053 1.62.193.497.368 1.24.426 2.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.366-.233 2.11-.426 2.608-.256.658-.56 1.127-1.054 1.62-.493.494-.96.798-1.62 1.053-.497.193-1.24.368-2.608.426-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.058-2.11-.233-2.608-.426-.658-.256-1.127-.56-1.62-1.054-.494-.493-.798-.96-1.053-1.62-.193-.497-.368-1.24-.426-2.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.366.233-2.11.426-2.608.256-.658.56-1.127 1.054-1.62.493-.494.96-.798 1.62-1.053.497-.193 1.24-.368 2.608-.426 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.28.058-2.152.26-2.917.557-.79.307-1.458.718-2.126 1.386s-1.08 1.336-1.386 2.126c-.297.765-.499 1.637-.557 2.917-.058 1.28-.072 1.688-.072 4.947s.014 3.668.072 4.947c.058 1.28.26 2.152.557 2.917.307.79.718 1.458 1.386 2.126s1.336 1.08 2.126 1.386c.765.297 1.637.499 2.917.557 1.28.058 1.688.072 4.947.072s3.668-.014 4.947-.072c1.28-.058 2.152-.26 2.917-.557.79-.307 1.458-.718 2.126-1.386s1.08-1.336 1.386-2.126c.297-.765.499-1.637.557-2.917.058-1.28.072-1.688.072-4.947s-.014-3.668-.072-4.947c-.058-1.28-.26-2.152-.557-2.917-.307-.79-.718-1.458-1.386-2.126s-1.336-1.08-2.126-1.386c-.765-.297-1.637-.499-2.917-.557-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.441s-.645 1.441-1.441 1.441-1.441-.645-1.441-1.441.645-1.441 1.441-1.441z" />
                                    </svg>
                                </div>
                            </a>
                            <a
                                href="https://www.facebook.com/dubherichus?mibextid=LQQJ4d"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center transition-transform hover:scale-110"
                                title="Follow us on Facebook"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1877F2] p-2 shadow-lg transition-shadow hover:shadow-xl">
                                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </div>
                            </a>
                            <a
                                href="https://www.youtube.com/@dubherichus2108"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center transition-transform hover:scale-110"
                                title="Subscribe on YouTube"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF0000] p-2 shadow-lg transition-shadow hover:shadow-xl">
                                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-10 text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
                            Products
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
                        <h4 className="mb-10 text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
                            Menu
                        </h4>
                        <ul className="flex flex-col gap-4">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    {link.isExternal ? (
                                        <a
                                            href={appBase + link.href}
                                            className="group flex items-center gap-2 text-[14px] font-light text-white/50 transition-all hover:text-white"
                                        >
                                            <span className="h-px w-0 bg-blue-500 transition-all duration-300 group-hover:w-4" />
                                            {link.label}
                                        </a>
                                    ) : (
                                        <Link
                                            href={appBase + link.href}
                                            className="group flex items-center gap-2 text-[14px] font-light text-white/50 transition-all hover:text-white"
                                        >
                                            <span className="h-px w-0 bg-blue-500 transition-all duration-300 group-hover:w-4" />
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-10 text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
                            Newsletter
                        </h4>
                        <p className="mb-8 text-[14px] font-light leading-relaxed text-white/50">
                            Stay updated with our latest water treatment systems and
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
                                className="w-full rounded-2xl bg-primary py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:bg-primary/90 hover:scale-102 active:scale-98"
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
