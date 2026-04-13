import { useState, useEffect, useRef } from "react";
import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { SiteFooter } from "@/Components/SiteFooter";
import { useAsset } from "@/hooks/useAsset";
import { Shield, Target, Award, Clock, FlaskConical, PenTool, Users, Droplets, Calendar, CheckCircle2, Zap, Building2, Play, ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
    { name: "Stanley Jacob", role: "Founder", icon: Users },
    { name: "Jacob Richard", role: "Managing Director", icon: Users },
];

function VideoCard({ id, title, isMain = false, onNext, onPrev }) {
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
                src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                onError={(e) => {
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
            desc: "Removing iron content and color for perfectly clear, odor-free water."
        },
        {
            id: "IS8WTVfJQlw",
            title: "Chemical-Free Purity",
            desc: "Advanced water treatment without the need for harmful chemicals."
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
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-[#020617] py-40 md:py-60 text-white">
                    <img src={asset('/images/about.jpeg')} alt="About Dubhe Richus" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
                        {/* Text removed per user request */}
                    </div>
                </section>

                {/* History Section */}
                <section className="pt-24 pb-24 bg-white">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mb-16 text-center md:text-left">
                            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl tracking-tight mb-8">
                                About Dubherichus
                            </h2>
                            <div className="space-y-12">
                                <p className="text-lg leading-relaxed text-muted-foreground/90 font-light">
                                    Founded in 1991 under the brand name <span className="text-foreground font-semibold">Richus</span>, we began our journey as pioneers in water systems. In line with our sustainable vision and global expansion goals, we later rebranded as <span className="text-foreground font-semibold">Dubhe Richus</span>. Today, we are the <span className="text-foreground font-semibold">largest manufacturer of iron removal water treatment plants in South India</span>. Our advanced systems are capable of treating water from all sources, backed by a dedicated R&D division that drives continuous innovation in the water treatment sector.
                                </p>
                                <p className="text-lg leading-relaxed text-muted-foreground/90 font-light">
                                    In addition to supplying our product directly to customers, we also operate specialized divisions for Sewage Water Treatment (SWT) and Effluent Treatment Plants (ETP). Our goal is to ensure that both industrial and domestic water treatment plants offer professional systems for various needs. With our vast product portfolio, we ensure that our customers receive the most efficient and sustainable water treatment systems available.
                                </p>
                            </div>
                        </div>

                        {/* Moved Team Grid */}
                        <div className="grid gap-12 md:grid-cols-2 max-w-4xl mx-auto">
                            {teamMembers.map((member, idx) => (
                                <div key={member.name} className="group">
                                    <div className="relative mb-6 aspect-square rounded-[2.5rem] overflow-hidden shadow-xl transition-transform duration-700 group-hover:scale-105">
                                        <img src={asset(`/images/team-${idx}.jpg`)} alt={member.name} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-bottom p-8 items-end">
                                            <div className="text-left text-white">
                                                <h3 className="text-xl font-bold tracking-tight">{member.name}</h3>
                                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">{member.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>





                {/* Core Values / Features with Images */}
                <section className="py-32 bg-white space-y-32">
                    <div className="mx-auto max-w-7xl px-6">
                        {[
                            {
                                id: "vision",
                                label: "Our Vision",
                                title: "Our Vision",
                                desc: "Dubhe Richus aims to contribute towards the development of a better social Infrastructure by providing reliable technologies and services with superior value with expertise in the field of water/ waste water treatment.",
                                img: "/images/vision-img.jpg"
                            },
                            {
                                id: "rd",
                                label: "R&D FOCUS",
                                title: "Research and Development",
                                desc: "Our research and development team is dedicated to the development and upgradation of water treatment sector through grassroots action, research, and education. We look forward to keep the sustainability of the local natural environment in the development process.",
                                img: "/images/rd-img.jpg"
                            },
                            {
                                id: "tech",
                                label: "INNOVATION",
                                title: "Design and Technology",
                                desc: "Dubhe Richus integrated technology for a peaceful water purifying experience. (Completely patent protected) Perfection in every detail, our cylindrical vertical type of water treatment heavy machineries stands out from the crowd with superior quality, results and first-class design. Discover water flow rate maintaining iron removing with active oxygen and keeping natural minerals with the manual back washing method for hygienic water treatment with low temperatures. Our all models strive for sustainability and appreciate the active lifestyle of you and your family Water treatment plant in this range offer you real benefits and efficient features combined with timeless design.",
                                img: "/images/tech-img.jpg"
                            }
                        ].map((item, idx) => (
                            <div key={item.id} className={`grid gap-16 lg:grid-cols-2 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                                        {item.label}
                                    </p>
                                    <h2 className="mb-8 font-serif text-4xl font-bold leading-tight">{item.title}</h2>
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
                    <div className="mx-auto max-w-5xl px-6">
                        {/* Main Featured Video */}
                        <div className="relative mb-8">
                            <div className="relative aspect-video overflow-hidden shadow-2xl border border-black/5 bg-slate-900">
                                <VideoCard
                                    id={videos[currentVideoIndex].id}
                                    title={videos[currentVideoIndex].title}
                                    isMain={true}
                                    onNext={() => setCurrentVideoIndex(prev => (prev + 1) % videos.length)}
                                    onPrev={() => setCurrentVideoIndex(prev => (prev - 1 + videos.length) % videos.length)}
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





            </main>
            <SiteFooter />
        </>
    );
}
