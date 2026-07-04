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
                key={id}
                src={customThumbnail || `https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                onError={(e) => {
                    if (customThumbnail) return;
                    if (!e.target.dataset.fallback) {
                        e.target.dataset.fallback = 'hq720';
                        e.target.src = `https://img.youtube.com/vi/${id}/hq720.jpg`;
                    } else if (e.target.dataset.fallback === 'hq720') {
                        e.target.dataset.fallback = 'hqdefault';
                        e.target.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
                    }
                }}
                onLoad={(e) => {
                    if (customThumbnail) return;
                    if (e.target.naturalWidth <= 120 && !e.target.dataset.fallback) {
                        e.target.dataset.fallback = 'hq720';
                        e.target.src = `https://img.youtube.com/vi/${id}/hq720.jpg`;
                    } else if (e.target.naturalWidth <= 120 && e.target.dataset.fallback === 'hq720') {
                        e.target.dataset.fallback = 'hqdefault';
                        e.target.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
                    }
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
            id: "tinXhCUAJAQ",
            title: "Dubhe Richus Showcase",
            desc: "Explore our latest water treatment technology."
        },
        {
            id: "i7ZL8lSMIAw",
            title: "Advanced Filtration",
            desc: "See our advanced filtration systems in action."
        },
        {
            id: "wCgEz2PaLjU",
            title: "Water Purification",
            desc: "Ensuring pure and safe water for everyone."
        },
        {
            id: "naooq0auZAk",
            title: "Our Technology",
            desc: "Inside look at Dubhe Richus technology."
        },
        {
            id: "jwOe-8PFPl4",
            title: "Installation Process",
            desc: "How our systems are installed seamlessly."
        },
        {
            id: "myjhGFjnx-s",
            title: "Project Highlight",
            desc: "Highlighting another successful project."
        },
        {
            id: "ENBcbUOOIM8",
            title: "Quality Assurance",
            desc: "Our commitment to high-quality filtration."
        },
        {
            id: "GsxStc8Y6bU",
            title: "System Overview",
            desc: "Overview of our complete water systems."
        },
        {
            id: "O2ImDMVa-ts",
            title: "Sustainable Water",
            desc: "Providing sustainable water solutions."
        },
        {
            id: "DG6OrdzGXCE",
            title: "Commercial Projects",
            desc: "Delivering pure water for commercial use."
        },
        {
            id: "PEN_Pl--JDY",
            title: "Residential Solutions",
            desc: "Perfect for any residential application."
        },
        {
            id: "Y-5Kd2Wc8LI",
            title: "Future of Water",
            desc: "Innovating the future of water treatment."
        }
    ];

    return (
        <>
            <Head title="About Us - Dubhe Richus" />
            <Navbar />
            <main className="pt-16">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-[#020617]">
                    <img
                        src={asset('/images/about.jpeg')}
                        alt="About Dubhe Richus"
                        className="w-full h-auto block"
                    />
                </section>

                {/* History Section */}
                <section className="pt-24 pb-16 bg-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-16 text-center md:text-left">
                            <h2 className="font-sans text-4xl tracking-tight text-foreground md:text-5xl font-bold mb-4">
                                Dubhe Richus
                            </h2>
                            <p className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-800">
                                ELEVATING WATER QUALITY THROUGH ADVANCED ENGINEERING
                            </p>
                            <div className="h-px w-full bg-slate-200 mb-8" />
                            <div className="space-y-6">
                                <p className="text-lg leading-relaxed text-muted-foreground/90 font-light text-justify">
                                    Dubhe Richus commenced its journey in 1991 under the brand name Richus, establishing a benchmark in water filtration and treatment services anchored on quality, innovation and reliability. Guided by a long-term vision for sustainability and scalable growth, the brand later evolved into Dubhe Richus. Today, we stand as one of India's premier water treatment enterprises and the largest manufacturer of iron-removal water treatment systems in Kerala. Our high-performance water filtration systems are engineered to purify water from diverse sources using efficient, low-maintenance technology that requires zero electricity and zero chemical intervention. This is supported by a dedicated Research and Development division that continuously drives innovation to deliver advanced, reliable and future-ready water treatment Technology.
                                </p>
                                <p className="text-lg leading-relaxed text-muted-foreground/90 font-light text-justify">
                                    Beyond manufacturing, Dubhe Richus provides complete solutions for complex water and wastewater requirements, ensuring safe, compliant and responsible ecological handling. We operate specialized divisions for Sewage Treatment Plants (STP) and Effluent Treatment Plants (ETP), delivering efficient and sustainable wastewater management across residential, commercial and industrial sectors. Headquartered in Kochi, Kerala, our reputation as a trusted industry leader is validated by a loyal, long-standing clientele who rely on our systems for years of consistent performance.
                                </p>
                                <div className="pt-4 text-left">
                                    <h4 className="font-bold text-slate-900 mb-4 uppercase text-sm">OUR COMPREHENSIVE PORTFOLIO INCLUDES:</h4>
                                    <ul className="space-y-3 text-lg leading-relaxed text-muted-foreground/90 font-light ml-4">
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                                            <span>Water Filtration Plants & Iron Removal Filters</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                                            <span>Pressure Sand & Activated Carbon Filters</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                                            <span>Water Softener Systems</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                                            <span>Sewage (STP) & Effluent (ETP) Treatment Plants</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                                            <span>Advanced Automatic and AI-Enabled Water Treatment Systems for commercial and industrial applications</span>
                                        </li>
                                    </ul>
                                </div>
                                <p className="text-lg leading-relaxed text-muted-foreground/90 font-light pt-2 text-justify">
                                    All our systems are Engineered for seamless operation and long-term durability, all Dubhe Richus systems leverage deep engineering expertise, extensive field experience and bespoke designs to resolve real-world water challenges.
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
                                title: "Engineered Water Filtration for a Cleaner, Safer Tomorrow",
                                desc: "Dubhe Richus is committed to democratizing access to clean and safe water. We engineer advanced filtration systems tailored for both residential and commercial ecosystems, empowering families and businesses to experience superior water quality daily. By effectively eliminating iron, hardness, odor, and particulate matter from borewell and municipal supplies—while simultaneously treating wastewater for eco-friendly discharge—we elevate daily living standards. Driven by a strategic vision to scale our footprint, we aim to expand the accessibility of our reliable filtration technologies from Kerala to the entirety of India. Backed by an expert team overseeing water analysis, precision installation, and dedicated lifecycle support, we ensure every client receives a tailored solution built on performance and enduring trust.",
                                img: "/images/vision-img.jpg"
                            },
                            {
                                id: "rd",
                                label: "R&D FOCUS",
                                title: "Pioneering Research for Environmental Stewardship",
                                desc: "Dubhe Richus integrates sophisticated design philosophy with cutting-edge technology to deliver a seamless, high-fidelity water purification experience. Our signature cylindrical vertical-type filters are precision-engineered, boasting superior structural integrity and high-capacity performance. The intelligent, custom architecture ensures optimal hydraulic flow, efficient iron removal via active oxygen matrices, and the preservation of essential natural minerals. Equipped with ergonomic manual backwashing mechanisms, our systems offer effortless operation and simplified maintenance across diverse water chemistries. Every model reflects a harmonious blend of form and function—combining operational efficiency, environmental sustainability, and a premium, modern finish built for longevity.",
                                img: "/images/research.jpeg"
                            },
                            {
                                id: "tech",
                                label: "INNOVATION",
                                title: "The Intersection of Design and Technology",
                                desc: "Our R&D division continuously advances the frontiers of water purification through rigorous scientific research, empirical field data, and iterative innovation. We are focused on developing next-generation systems that offer heightened efficiency, enhanced performance, and unyielding reliability under demanding real-world conditions. Parallel to elevating product benchmarks, we actively minimize ecological footprints by designing solutions that champion the responsible stewardship of natural water resources. Our ultimate objective is to architect sophisticated water treatment infrastructures that not only resolve immediate residential and commercial water crises but also champion sustainable, environmentally responsible management practices for a healthier future.",
                                img: "/images/products-tech.png"
                            }
                        ].map((item, idx) => (
                            <div key={item.id} className={`grid gap-16 lg:grid-cols-2 items-stretch py-8 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
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
                                    <p className="text-lg font-light leading-relaxed text-muted-foreground/80 text-justify">{item.desc}</p>
                                </div>
                                <div className={`relative rounded-[3rem] overflow-hidden shadow-2xl min-h-[400px] ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <img src={asset(item.img)} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
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
