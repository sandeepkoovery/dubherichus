import { useState, useEffect, useRef } from "react";
import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { SiteFooter } from "@/Components/SiteFooter";
import { FAQSection } from "@/Components/FAQSection";
import { useAsset } from "@/hooks/useAsset";
import { Shield, Target, Award, Clock, FlaskConical, PenTool, Users, Droplets, Calendar, CheckCircle2, Zap, Building2, Play, ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
    { name: "Stanley Jacob", role: "Founder", icon: Users },
    { name: "Jacob Richard", role: "Managing Director", icon: Users },
];

function VideoCard({ id, title, isMain = false, onNext, onPrev, customThumbnail = null }) {
    const [isPlaying, setIsPlaying] = useState(false);

    // Reset playback state when the video changes
    useEffect(() => {
        setIsPlaying(false);
    }, [id]);

    if (isPlaying) {
        return (
            <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        );
    }

    return (
        <div
            className={`group/btn relative w-full h-full cursor-pointer flex items-center justify-center overflow-hidden`}
            onClick={() => isMain && setIsPlaying(true)}
        >
            <img
                src={customThumbnail || `https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                onError={(e) => {
                    if (customThumbnail) return;
                    e.target.onerror = null;
                    e.target.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
                }}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* YouTube Red Play Button Style for Main */}
            {isMain && (
                <div className="relative z-10 transition-transform duration-300 group-hover/btn:scale-110">
                    <div className="bg-red-600 rounded-2xl px-6 py-4 flex items-center justify-center shadow-xl">
                        <Play className="h-10 w-10 text-white fill-current" />
                    </div>
                </div>
            )}

            {/* Navigation Arrows for Main */}
            {isMain && (
                <>
                    <button
                        onClick={(e) => { e.stopPropagation(); onPrev(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center text-white/50 hover:text-white transition-colors"
                    >
                        <ChevronLeft className="h-12 w-12" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); onNext(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center text-white/50 hover:text-white transition-colors"
                    >
                        <ChevronRight className="h-12 w-12" />
                    </button>
                </>
            )}

            {/* Gray Circle Play for Thumbnails */}
            {!isMain && (
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm shadow-lg">
                    <Play className="h-5 w-5 text-white/90 fill-current ml-1" />
                </div>
            )}
        </div>
    );
}

const aboutFaqs = [
    {
        question: "How long has Dubhe Richus been in the water treatment industry?",
        answer: "We began our journey in 1991 under the brand name Richus and have since evolved into one of India’s leading water treatment companies, specializing in high-performance filtration systems."
    },
    {
        question: "What is the significance of your research & development focus?",
        answer: "Our R&D team continuously innovates to improve product efficiency and sustainability. We focus on protecting natural water resources and ensuring environmentally responsible management through field-tested and patented technologies."
    },
    {
        question: "Are your designs patent-protected?",
        answer: "Yes, our unique cylindrical vertical water treatment machineries and specific filtration techniques are patent-protected. We take pride in delivering first-class designs that are built for reliable performance."
    },
    {
        question: "What is Dubhe Richus' vision for the future?",
        answer: "Our vision is to make clean and safe water accessible across India through practical, expert-backed treatment solutions that enhance daily living and promote environmental responsibility."
    }
];

export default function About() {
    const asset = useAsset();
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    // Auto-scroll the active thumbnail into view
    useEffect(() => {
        if (scrollContainerRef.current) {
            const activeItem = scrollContainerRef.current.children[currentVideoIndex];
            if (activeItem) {
                activeItem.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }, [currentVideoIndex]);

    const videos = [
        {
            id: "-NRXVx9J29s",
            title: "Our Journey",
            desc: "Explore how Dubhe Richus became a leader in water treatment technology."
        },
        {
            id: "dG_qwixf-2M",
            title: "Crystal Clear Solutions",
            desc: "Removing iron content and color for perfectly clear, odor-free water.",
            thumbnail: "/images/thumb1.jpg"
        },
        {
            id: "IS8WTVfJQlw",
            title: "Chemical-Free Purity",
            desc: "Advanced water treatment without the need for harmful chemicals.",
            thumbnail: "/images/thumb2.jpg"
        },
        {
            id: "qVORpTDGCbg",
            title: "Regional Excellence",
            desc: "Expanding our reach to ensure clean water access for every community."
        },
        {
            id: "W0SBadrTdns",
            title: "Maintenance Free",
            desc: "Discover the world's first maintenance-free water treatment plant."
        },
        {
            id: "WlAzNowgjF4",
            title: "Whole House Filtration",
            desc: "Complete filtration systems designed for entire residential houses."
        },
        {
            id: "-jwVBWN5K48",
            title: "Modern Wastewater Tech",
            desc: "Innovative sewage and wastewater treatment technologies from Kerala."
        },
        {
            id: "LP3mLsRKgk0",
            title: "Commercial Success",
            desc: "Powering large-scale projects like Oberon Mall with purified water."
        }
    ];

    return (
        <>
            <Head title="About Us - Dubhe Richus" />
            <Navbar />
            <main className="pt-16 lg:pt-0">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-[#020617]">
                    {/* Mobile/Tablet: No-crop image */}
                    <div className="lg:hidden w-full">
                        <img
                            src={asset('/images/about.jpeg')}
                            alt="About Dubhe Richus"
                            className="w-full h-auto"
                        />
                    </div>
                    {/* Desktop: Cinematic Hero */}
                    <div
                        className="hidden lg:block relative py-40 md:py-60"
                        style={{
                            backgroundImage: `url(${asset('/images/about.jpeg')})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="absolute inset-0 bg-black/10" />
                    </div>
                </section>

                {/* History Section */}
                <section className="pt-24 pb-16 bg-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-16 text-center md:text-left">
                            <h2
                                className="font-sans text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl mb-8"
                                style={{ fontWeight: '300' }}
                            >
                                Dubhe Richu : Elevating Water Quality with Advanced Filtration
                            </h2>
                            <div className="space-y-6">
                                <p className="text-lg leading-relaxed text-muted-foreground/90 font-light">
                                    Dubhe Richus began its journey in 1991 under the brand name Richus, establishing water filtration and treatment services with a strong focus on quality, innovation and reliability. Guided by a long-term vision for sustainability and growth, the brand later evolved into Dubhe Richus. Today, we are one of India’s leading water treatment companies and the largest manufacturer of iron removal water treatment systems in Kerala. Our high-performance water filtration systems are designed to purify water from all sources using efficient, low-maintenance technology with no electricity requirement and no chemical usage, while our dedicated research and development team continuously drives innovation to deliver advanced, reliable and future-ready water treatment technology.
                                </p>
                                <p className="text-lg leading-relaxed text-muted-foreground/90 font-light">
                                    Along with manufacturing water treatment systems, Dubhe Richus provides complete solutions for diverse water and wastewater needs, including effective wastewater treatment for safe and responsible handling. We also operate dedicated divisions for Sewage Treatment Plants (STP) and Effluent Treatment Plants (ETP), ensuring safe, efficient and sustainable wastewater management for residential, commercial and industrial applications. Based in Kochi, Kerala, we are a trusted company with long-standing customers who rely on our systems for years of consistent performance. Our product range includes Water Filtration Plants, Iron Removal Filters, Pressure Sand Filters, Activated Carbon Filters, Softener Systems, Sewage Treatment Plants, Effluent Treatment Plants, along with advanced automatic and AI-enabled water treatment systems for commercial and industrial applications. All our systems are built for consistent performance, easy operation and long-term durability, supported by strong engineering expertise, practical field experience and custom-designed solutions that deliver clean, safe and high-quality water systems for real-world water challenges.
                                </p>
                            </div>
                        </div>

                        {/* Moved Team Grid */}
                        <h2
                            className="font-sans text-3xl tracking-tight text-foreground mb-10 text-center md:text-left"
                            style={{ fontWeight: '300' }}
                        >
                            The People Behind the Company
                        </h2>
                        <div className="grid gap-12 md:grid-cols-2">
                            {teamMembers.map((member, idx) => (
                                <div key={member.name} className="group">
                                    <div className="relative mb-6 aspect-square rounded-[2.5rem] overflow-hidden shadow-xl transition-transform duration-700 group-hover:scale-105">
                                        <img src={asset(`/images/team-${idx}.jpg`)} alt={member.name} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex p-10 items-end z-10">
                                            <div className="text-left text-white relative z-20">
                                                <h3
                                                    className="text-xl tracking-tight"
                                                    style={{ fontWeight: '300', color: 'white' }}
                                                >
                                                    {member.name}
                                                </h3>
                                                <p className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: '#60a5fa' }}>{member.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>





                {/* Core Values / Features with Images */}
                <section className="pt-8 pb-32 bg-white space-y-48">
                    <div className="mx-auto max-w-7xl px-6">
                        {[
                            {
                                id: "vision",
                                label: "Our Vision",
                                title: "Trusted Water Filtration for Clean and Safe Living",
                                desc: "Dubhe Richus is committed to making clean and safe water accessible for everyone. We provide advanced water treatment filters designed for both homes and commercial spaces, helping families and businesses enjoy better water quality daily. We improve borewell and tap water by removing iron, hardness, bad smell and dirt, and we also treat wastewater so it can be safely handled. We have a strong vision to expand further and make reliable water filters accessible everywhere, from Kerala to the whole of India. With an experienced team handling water testing, installation, and ongoing service support, we ensure every customer receives the right solution for long-term performance and lasting trust.",
                                img: "/images/vision-img.jpg"
                            },
                            {
                                id: "rd",
                                label: "R&D FOCUS",
                                title: "Research & Development for Environmental Progress",
                                desc: "Dubhe Richus uses advanced design and technology to deliver a smooth and reliable water purification experience. Our cylindrical vertical-type water treatment filters are engineered with precision, strong structural design, superior quality, and high performance. The smart custom design supports steady water flow, efficient iron removal using active oxygen, and helps retain natural minerals. With a manual backwashing system, they are easy to operate and maintain even in different water conditions. Our systems also include wastewater. Every model is designed with a strong focus on both design and technology, combining efficiency, sustainability, and a modern premium finish for long-term use.",
                                img: "/images/research.jpeg"
                            },
                            {
                                id: "tech",
                                label: "INNOVATION",
                                title: "Design and Technology",
                                desc: "Our R&D team continuously works on improving water treatment technologies through detailed research, field experience, and continuous innovation. We focus on developing systems that deliver higher efficiency, better performance, and long-term reliability in real water conditions. Along with improving product quality, we also work on making our solutions more sustainable by reducing environmental impact and supporting the responsible use of natural water resources. Our aim is to design advanced water treatment systems that not only solve real water problems in homes and commercial spaces but also promote environmentally responsible water management practices for a better and healthier future.",
                                img: "/images/products-tech.png"
                            }
                        ].map((item, idx) => (
                            <div key={item.id} className={`grid gap-16 lg:grid-cols-2 items-center py-8 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                                        {item.label}
                                    </p>
                                    <h2
                                        className="mb-8 font-sans text-4xl tracking-tight leading-tight"
                                        style={{ fontWeight: '300' }}
                                    >
                                        {item.title}
                                    </h2>
                                    <p className="text-lg font-light leading-relaxed text-muted-foreground/80">{item.desc}</p>
                                </div>
                                <div className={`relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <img src={asset(item.img)} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Screenshot-based Video Gallery Section */}
                <section className="pb-24 bg-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <h2
                            className="font-sans text-3xl tracking-tight text-foreground mb-8 text-center md:text-left"
                            style={{ fontWeight: '300' }}
                        >
                            Projects and Experiences
                        </h2>
                        {/* Main Featured Video */}
                        <div className="relative mb-8">
                            <div className="relative aspect-video overflow-hidden shadow-2xl border border-black/5 bg-slate-900">
                                <VideoCard
                                    id={videos[currentVideoIndex].id}
                                    title={videos[currentVideoIndex].title}
                                    isMain={true}
                                    onNext={() => setCurrentVideoIndex(prev => (prev + 1) % videos.length)}
                                    onPrev={() => setCurrentVideoIndex(prev => (prev - 1 + videos.length) % videos.length)}
                                    customThumbnail={videos[currentVideoIndex].thumbnail ? asset(videos[currentVideoIndex].thumbnail) : null}
                                />
                            </div>
                        </div>

                        {/* Video Thumbnails Selection Row */}
                        <div className="relative flex items-center group/thumbs mx-auto">
                            {/* Left Navigation Arrow */}
                            <button
                                onClick={() => setCurrentVideoIndex(prev => (prev - 1 + videos.length) % videos.length)}
                                className="absolute left-0 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 border border-slate-200 shadow-md text-slate-600 hover:text-blue-600 transition-all"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>

                            <div
                                ref={scrollContainerRef}
                                className="flex justify-start gap-4 overflow-x-auto py-4 no-scrollbar scroll-smooth px-12"
                            >
                                {videos.map((video, idx) => (
                                    <button
                                        key={video.id}
                                        onClick={() => setCurrentVideoIndex(idx)}
                                        className={`relative flex-shrink-0 w-32 md:w-44 aspect-video overflow-hidden border-2 transition-all duration-300 ${idx === currentVideoIndex ? 'border-blue-500 shadow-xl scale-110 z-10' : 'border-slate-200 opacity-60 hover:opacity-100'}`}
                                    >
                                        <VideoCard
                                            id={video.id}
                                            title={video.title}
                                            isMain={false}
                                            customThumbnail={video.thumbnail ? asset(video.thumbnail) : null}
                                        />
                                    </button>
                                ))}
                            </div>

                            {/* Right Navigation Arrow */}
                            <button
                                onClick={() => setCurrentVideoIndex(prev => (prev + 1) % videos.length)}
                                className="absolute right-0 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 border border-slate-200 shadow-md text-slate-600 hover:text-blue-600 transition-all"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </section>
                <FAQSection items={aboutFaqs} title="ABOUT OUR COMPANY & TECH" />
            </main>
            <SiteFooter />
        </>
    );
}
