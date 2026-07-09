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
        question: "Do you offer solutions for both homes and businesses?",
        answer: "Yes. We provide whole-house water treatment systems for residential use and customized water and wastewater solutions for apartments, offices, institutions, and industrial facilities."
    },
    {
        question: "Can the system be customised for my water and usage needs?",
        answer: "Absolutely. Every solution is designed after understanding your water quality, daily usage, and site conditions to ensure optimal performance and long-term reliability."
    },
    {
        question: "Will you handle installation and service support?",
        answer: "Yes. Our team manages everything from professional installation to routine maintenance and dependable after-sales support, ensuring a smooth and hassle-free experience."
    },
    {
        question: "Can your systems remove iron, bad odour, and other impurities?",
        answer: "Yes. Our systems remove iron, dirt, bad smell, and other common impurities from water, making it much cleaner and safer to use."
    },
    {
        question: "Do you provide services across India?",
        answer: "Yes. We offer water and wastewater treatment solutions along with support services across India."
    }
];

export default function Welcome({ appName }) {
    return (
        <>
            <Head title="Water Treatment Company in Kochi, Kerala | Home & Commercial Water Filters">
                <meta name="description" content="Dubhe Richus is a trusted water treatment company in Kochi, Kerala, offering home, commercial, and industrial water treatment solutions across Kerala and India." />
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

