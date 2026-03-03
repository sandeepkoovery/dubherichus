import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Link, usePage } from "@inertiajs/react";
import { useAsset } from "@/hooks/useAsset";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    {
        label: "Products",
        href: "#",
        subLinks: [
            { label: "Medium Range", href: "/products/medium" },
            { label: "Standard Series", href: "/products/standard" },
            { label: "Commercial", href: "/products/commercial" },
            { label: "Bayaweaver", href: "/products/bayaweaver" },
        ]
    },
    { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
    const asset = useAsset();
    const { url } = usePage();
    const appBase = asset('');

    // Resolve relative URL for comparison
    const currentPath = url.replace(appBase, '').split('?')[0];
    const isHome = currentPath === "/" || currentPath === "" || url === "/";
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Navbar is "dark mode" (transparent with white text) only at the top of the Home page
    const isDarkTheme = isHome && !isScrolled;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${isDarkTheme
                ? "bg-transparent py-2"
                : "bg-background/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] border-b border-white/10 py-0"
                }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link href={appBase + "/"} className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                        <div
                            className={`flex h-9 w-9 items-center justify-center rounded-lg font-serif text-sm font-bold ${isDarkTheme
                                ? "bg-white/20 text-white backdrop-blur-sm"
                                : "bg-primary text-primary-foreground"
                                }`}
                        >
                            DM
                        </div>
                        <div>
                            <span
                                className={`block text-xl font-bold font-serif leading-tight tracking-tight ${isDarkTheme ? "text-white" : "text-foreground"
                                    }`}
                            >
                                DUBHE RICHUS
                            </span>
                            <span
                                className={`block text-[9px] font-semibold uppercase tracking-[0.3em] opacity-80 ${isDarkTheme ? "text-white/70" : "text-primary"
                                    }`}
                            >
                                Innovations for Life
                            </span>
                        </div>
                    </div>
                </Link>

                <div className="hidden items-center gap-10 lg:flex">
                    {navLinks.map((link) => (
                        <div key={link.label} className="relative group">
                            {link.subLinks ? (
                                <>
                                    <button className={`flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-wider transition-all duration-300 hover:text-primary ${isDarkTheme ? "text-white/90 hover:text-white" : "text-foreground/80"}`}>
                                        {link.label}
                                        <svg className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6" /></svg>
                                    </button>
                                    <div className="absolute left-1/2 -translate-x-1/2 top-full invisible opacity-0 translate-y-2 w-64 pt-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                                        <div className="rounded-2xl border border-white/20 bg-background/95 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-2xl">
                                            {link.subLinks.map((sub) => (
                                                <Link
                                                    key={sub.href}
                                                    href={appBase + sub.href}
                                                    className="block rounded-xl px-5 py-3 text-[13px] font-medium text-muted-foreground transition-all duration-300 hover:bg-primary/5 hover:text-primary hover:translate-x-1"
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={appBase + link.href}
                                    className={`relative text-[13px] font-semibold uppercase tracking-wider transition-all duration-300 hover:text-primary ${isDarkTheme ? "text-white/90 hover:text-white" : "text-foreground/80"
                                        }`}
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                <div className="hidden items-center gap-4 lg:flex">
                    <a
                        href="tel:+919876543210"
                        className={`flex items-center gap-2 text-sm font-medium ${isDarkTheme ? "text-white" : "text-foreground"
                            }`}
                    >
                        <Phone className="h-4 w-4" />
                        <span>+91 98765 43210</span>
                    </a>
                    <Button
                        asChild
                        size="sm"
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                        <Link href={appBase + "/contact"}>Get a Quote</Link>
                    </Button>
                </div>

                <button
                    className="lg:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? (
                        <X
                            className={`h-6 w-6 ${isDarkTheme ? "text-white" : "text-foreground"}`}
                        />
                    ) : (
                        <Menu
                            className={`h-6 w-6 ${isDarkTheme ? "text-white" : "text-foreground"}`}
                        />
                    )}
                </button>
            </nav>

            {isMobileMenuOpen && (
                <div className="border-b border-border bg-card/98 backdrop-blur-lg lg:hidden">
                    <div className="flex flex-col gap-1 px-6 py-4">
                        {navLinks.map((link) => (
                            <div key={link.label}>
                                {link.subLinks ? (
                                    <div className="space-y-1">
                                        <div className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">{link.label}</div>
                                        {link.subLinks.map((sub) => (
                                            <Link
                                                key={sub.href}
                                                href={appBase + sub.href}
                                                className="block rounded-lg px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <Link
                                        href={appBase + link.href}
                                        className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="mt-2 border-t border-border pt-4">
                            <Button asChild className="w-full bg-primary text-primary-foreground">
                                <Link
                                    href={appBase + "/contact"}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Get a Quote
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
