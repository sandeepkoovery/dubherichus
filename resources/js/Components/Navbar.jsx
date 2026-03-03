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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isDarkTheme
                ? "bg-transparent"
                : "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
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
                                className={`block text-lg font-bold font-serif leading-tight tracking-tight ${isDarkTheme ? "text-white" : "text-foreground"
                                    }`}
                            >
                                DUBHE RICHUS
                            </span>
                            <span
                                className={`block text-[10px] font-medium uppercase tracking-[0.2em] ${isDarkTheme ? "text-white/70" : "text-muted-foreground"
                                    }`}
                            >
                                Pvt Ltd
                            </span>
                        </div>
                    </div>
                </Link>

                <div className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <div key={link.label} className="relative group">
                            {link.subLinks ? (
                                <>
                                    <button className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 hover:text-primary ${isDarkTheme ? "text-white/90 hover:text-white" : "text-foreground"}`}>
                                        {link.label}
                                        <svg className="h-4 w-4 transition-transform group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
                                    </button>
                                    <div className="absolute left-0 top-full hidden w-56 pt-2 group-hover:block transition-all duration-300">
                                        <div className="rounded-xl border border-border bg-card p-2 shadow-xl backdrop-blur-md">
                                            {link.subLinks.map((sub) => (
                                                <Link
                                                    key={sub.href}
                                                    href={appBase + sub.href}
                                                    className="block rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
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
                                    className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${isDarkTheme ? "text-white/90 hover:text-white" : "text-foreground"
                                        }`}
                                >
                                    {link.label}
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
