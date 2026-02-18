import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { HeroSection } from "@/Components/HeroSection";
import { AboutSection } from "@/Components/AboutSection";
import { ProductsSection } from "@/Components/ProductsSection";
import { AdvantagesSection } from "@/Components/AdvantagesSection";
import { ClientsSection } from "@/Components/ClientsSection";
import { ContactSection } from "@/Components/ContactSection";
import { SiteFooter } from "@/Components/SiteFooter";

export default function Welcome({ appName }) {
    return (
        <>
            <Head title="Home" />
            <Navbar />
            <main>
                <HeroSection />
                <AboutSection />
                <ProductsSection />
                <AdvantagesSection />
                <ClientsSection />
                <ContactSection />
            </main>
            <SiteFooter />
        </>
    );
}
