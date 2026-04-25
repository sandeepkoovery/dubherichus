import { useRef } from "react";
import { Head, Link } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { SiteFooter } from "@/Components/SiteFooter";
import { FAQSection } from "@/Components/FAQSection";
import { useAsset } from "@/hooks/useAsset";
import { Home, Building2, ChevronRight, ChevronLeft } from "lucide-react";

const logos = [
    { name: "Heather Homes", src: "/images/projects/p1.jpeg" },
    { name: "Arctic Hotels", src: "/images/projects/p2.jpeg" },
    { name: "Navya Bakers", src: "/images/projects/p3.jpeg" },
    { name: "Abad Builders", src: "/images/projects/p4.jpeg" },
    { name: "Asset Homes", src: "/images/projects/p5.jpeg" },
    { name: "Skyline Builders", src: "/images/projects/p6.jpeg" },
    { name: "Confident Group", src: "/images/projects/p7.jpeg" },
    { name: "Joy Alukkas", src: "/images/projects/p8.jpeg" },
    { name: "Project 9", src: "/images/projects/p9.jpeg" },
];

const projectsFaqs = [
    {
        question: "What types of projects does Dubhe Richus specialize in?",
        answer: "We handle a wide range of projects including premium residential complexes, large-scale commercial buildings like malls and hospitals, and industrial water/wastewater treatment plants."
    },
    {
        question: "Can you design systems for large-scale commercial use?",
        answer: "Yes, our engineering team specializes in custom-designed systems for high-volume needs. We have many successful installations in commercial sectors across India, ensuring clean and safe water for thousands of people."
    },
    {
        question: "Do you provide wastewater treatment solutions like STP and ETP?",
        answer: "Absolutely. We have dedicated divisions for Sewage Treatment Plants (STP) and Effluent Treatment Plants (ETP), providing safe and efficient wastewater management for businesses and industries."
    },
    {
        question: "How do you ensure the quality and reliability of your installations?",
        answer: "Every project follows strict engineering standards. Since 1991, our installations have been known for their durability and performance, backed by our expertise and commitment to environmental sustainability."
    }
];

export default function Projects() {
    const asset = useAsset();
    const appBase = asset('');
    const scrollContainerRef = useRef(null);

    return (
        <>
            <Head title="Our Projects - Global Water Treatment Excellence | Dubhe Richus">
                <meta name="description" content="Explore our portfolio of successful water treatment projects across India. From premium residential installations to large-scale commercial plants for industry leaders." />
            </Head>
            <Navbar />
            <main className="pt-16 lg:pt-0 bg-white">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-[#020617]">
                    {/* Mobile/Tablet: No-crop image */}
                    <div className="lg:hidden w-full">
                        <img
                            src={asset('/images/our_projects.jpeg')}
                            alt="Our Projects"
                            className="w-full h-auto"
                        />
                    </div>
                    {/* Desktop: Cinematic Hero */}
                    <div
                        className="hidden lg:block relative py-40 md:py-60"
                        style={{
                            backgroundImage: `url(${asset('/images/our_projects.jpeg')})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="absolute inset-0 bg-black/10" />
                    </div>
                </section>

                {/* Description Section */}
                <section className="pt-16 pb-4 bg-white">
                    <div className="mx-auto max-w-7xl px-6 text-center md:text-left">
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4">Portfolio Highlight</p>
                        <h1 
                            className="font-sans text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl mb-10"
                            style={{ fontWeight: '300' }}
                        >
                            Our Projects
                        </h1>
                        <div className="max-w-4xl mx-auto md:mx-0">
                            <p className="text-lg leading-relaxed text-slate-600 font-light mb-6">
                                Dubhe Richus has been at the forefront of water purification since 1991, delivering thousands of successful projects across residential and commercial sectors. Our commitment to engineering excellence ensures that every installation meets the highest standards of purity, reliability, and sustainability.
                            </p>
                            <p className="text-lg leading-relaxed text-slate-600 font-light">
                                From premium residential complexes to large-scale industrial plants, we provide custom-engineered solutions that handle the most challenging water conditions. Explore our diverse portfolio of projects that showcase our liquid legacy of innovation.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Commercial Excellence - Logo Slider */}
                <section className="pt-6 pb-16 bg-white overflow-hidden border-t border-slate-100">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-10">
                             <h3 
                                 className="text-3xl text-[#262626]"
                                 style={{ fontWeight: '300' }}
                             >
                                 Commercial Excellence
                             </h3>
                             <div className="mt-3 h-1 w-16 bg-primary/30" />
                        </div>

                        <div className="relative group">
                            {/* Navigation Arrows */}
                            <button 
                                onClick={() => scrollContainerRef.current?.scrollBy({ left: -500, behavior: 'smooth' })}
                                className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/95 rounded-full shadow-lg border border-slate-100 text-slate-400 hover:text-primary hover:scale-110 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button 
                                onClick={() => scrollContainerRef.current?.scrollBy({ left: 500, behavior: 'smooth' })}
                                className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/95 rounded-full shadow-lg border border-slate-100 text-slate-400 hover:text-primary hover:scale-110 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
                            >
                                <ChevronRight size={20} />
                            </button>

                            <div 
                                ref={scrollContainerRef}
                                className="flex overflow-x-auto no-scrollbar gap-2 md:gap-3 items-stretch py-8 scroll-smooth"
                            >
                                {logos.map((logo, index) => (
                                    <div 
                                        key={index} 
                                        className="w-64 md:w-96 aspect-square flex-shrink-0 relative overflow-hidden rounded-xl border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-xl group/logo cursor-pointer"
                                    >
                                        <div className="absolute inset-0 flex items-center justify-center transition-all duration-500">
                                            <img 
                                                src={asset(logo.src)} 
                                                alt={logo.name} 
                                                className="w-full h-full object-contain p-4" 
                                            />
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Categories */}
                <section className="py-16 bg-slate-50">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Home Projects Box */}
                            <div 
                                className="group relative overflow-hidden rounded-[40px] bg-white p-12 shadow-sm border border-slate-100 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-2"
                            >
                                <div className="mb-10 w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                                    <Home size={36} strokeWidth={1.5} />
                                </div>
                                <h4 className="text-4xl text-[#262626] font-light mb-6 tracking-tight">Home</h4>
                                <p className="text-lg text-slate-500 font-light mb-10 leading-relaxed max-w-sm">
                                    Advanced water purification for residences, providing clean water for every tap in your home.
                                </p>
                                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all cursor-pointer" />
                            </div>

                            {/* Commercial Projects Box */}
                            <div 
                                className="group relative overflow-hidden rounded-[40px] bg-white p-12 shadow-sm border border-slate-100 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-2"
                            >
                                <div className="mb-10 w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:-rotate-6">
                                    <Building2 size={36} strokeWidth={1.5} />
                                </div>
                                <h4 className="text-4xl text-[#262626] font-light mb-6 tracking-tight">Commercial</h4>
                                <p className="text-lg text-slate-500 font-light mb-10 leading-relaxed max-w-sm">
                                    Large-scale treatment solutions for industries, hospitals, and high-volume commercial complexes.
                                </p>
                                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-32 bg-[#020617] text-center">
                    <div className="mx-auto max-w-4xl px-6">
                        <p className="text-sm font-bold uppercase tracking-[0.5em] text-blue-500/60 mb-8">Engineering Excellence</p>
                        <h2 
                            className="text-4xl md:text-5xl text-white mb-10 leading-tight"
                            style={{ fontWeight: '300' }}
                        >
                            Over 32,000+ Units Installed Across India
                        </h2>
                        <div className="mx-auto h-1 w-20 bg-blue-500/30 mb-10" />
                        <p className="text-xl text-white/50 font-light leading-relaxed">
                            Since 1991, Dubhe Richus has been the trusted partner for premium water filtration,
                            delivering natural purity to thousands of satisfied clients.
                        </p>
                    </div>
                </section>
                <FAQSection items={projectsFaqs} title="PROJECTS & INSTALLATION FAQS" />
            </main>
            <SiteFooter />
        </>
    );
}
