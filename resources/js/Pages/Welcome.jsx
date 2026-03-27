import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { HeroSection } from "@/Components/HeroSection";
import { AboutSection } from "@/Components/AboutSection";
import { ProductsSection } from "@/Components/ProductsSection";
import { ProjectsPreview } from "@/Components/ProjectsPreview";
import { ClientsSection } from "@/Components/ClientsSection";
import { ContactSection } from "@/Components/ContactSection";
import { SiteFooter } from "@/Components/SiteFooter";

export default function Welcome({ appName }) {
    return (
        <>
            <Head title="Home - Dubhe Richus">
                <meta name="description" content="Welcome to Dubhe Richus - Your destination for premium high-performance brand experiences." />
            </Head>
            <Navbar />
            <main>
                <HeroSection />
                <AboutSection />
                <ProductsSection />
                <ProjectsPreview />
                <ClientsSection />
            </main>
            <SiteFooter />
        </>
    );
}
