import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { HeroSection } from "@/Components/HeroSection";
import { StatsBlock } from "@/Components/StatsBlock";
import { AboutSection } from "@/Components/AboutSection";
import { ProductsSection } from "@/Components/ProductsSection";
import { ProjectsPreview } from "@/Components/ProjectsPreview";
import { ClientsSection } from "@/Components/ClientsSection";
import { ContactSection } from "@/Components/ContactSection";
import { IndustriesSection } from "@/Components/IndustriesSection";
import { SiteFooter } from "@/Components/SiteFooter";

export default function Welcome({ appName }) {
    return (
        <>
            <Head title="Advanced Water Filters for Home & Industry | Dubhe Richus">
                <meta name="description" content="Dubhe Richus provides STP, ETP and water treatment systems in Kerala for homes and industries. Get clean, safe, long-lasting water with expert installation and support." />
            </Head>
            <Navbar />
            <main>
                <HeroSection />
                <StatsBlock />
                <AboutSection />
                <IndustriesSection />
                <ProductsSection />
                <ProjectsPreview />
                <ClientsSection />
            </main>
            <SiteFooter />
        </>
    );
}
