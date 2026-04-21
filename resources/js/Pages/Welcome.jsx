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
import { FAQSection } from "@/Components/FAQSection";

const homeFaqs = [
    {
        question: "WHY CHOOSE DUBHE RICHUS FOR WATER TREATMENT?",
        answer: "With over 30 years of experience and patented technology, Dubhe Richus is a leader in high-performance water filtration. Our systems are designed for reliability, efficiency, and superior water quality across diverse sources."
    },
    {
        question: "IS THE WATER TREATMENT SYSTEM TRULY MAINTENANCE-FREE?",
        answer: "Our patented cylindrical vertical machineries are designed for long-term durability and ease of use. Using advanced filtration methods like active oxygen and manual backwashing, we minimize the need for complex maintenance or chemical additives."
    },
    {
        question: "CAN YOUR SYSTEMS TREAT IRON-CONTAMINATED BOREHOLE WATER?",
        answer: "Yes, we are specialists in the treatment of iron-contaminated water, especially in Kerala. Our systems effectively remove iron, color, and odor, providing crystal clear water for your home or industry."
    },
    {
        question: "DO YOU PROVIDE PAN-INDIA SERVICES AND INSTALLATION?",
        answer: "Yes, Dubhe Richus has a dedicated team of professionals and a wide service network to ensure seamless installation and support for water and wastewater treatment plants across India."
    }
];

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
                <FAQSection items={homeFaqs} />
            </main>
            <SiteFooter />
        </>
    );
}

