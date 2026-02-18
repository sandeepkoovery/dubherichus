"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    title: "Water Treatment Plant (WTP)",
    description:
      "Fully automated water treatment systems designed for residential, commercial, and industrial applications. Our WTP systems remove impurities through natural filtration processes without chemicals.",
    image: "/images/product-wtp.jpg",
    features: [
      "Fully Automated Operation",
      "Chemical-Free Process",
      "Low Maintenance",
      "Energy Efficient",
    ],
  },
  {
    title: "Effluent Treatment Plant (ETP)",
    description:
      "Advanced effluent treatment solutions for industries. Our ETP systems effectively treat industrial wastewater to meet environmental discharge standards while minimizing operational costs.",
    image: "/images/product-etp.jpg",
    features: [
      "Industrial Grade",
      "Meets CPCB Standards",
      "Automated Monitoring",
      "Cost Effective",
    ],
  },
  {
    title: "Sewage Treatment Plant (STP)",
    description:
      "State-of-the-art sewage treatment plants designed for municipalities, residential complexes, and commercial establishments. Eco-friendly and built for reliable long-term performance.",
    image: "/images/product-stp.jpg",
    features: [
      "Bio-Treatment Process",
      "Compact Design",
      "Odor Free Operation",
      "Recyclable Output",
    ],
  },
]

export function ProductsSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        if (rect.top < windowHeight && rect.bottom > 0) {
          const scrolled =
            (windowHeight - rect.top) / (windowHeight + rect.height)
          parallaxRef.current.style.backgroundPositionY = `${scrolled * 30}%`
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div
        ref={parallaxRef}
        className="relative h-64 bg-cover bg-fixed bg-center md:h-80"
        style={{ backgroundImage: "url(/images/parallax-water.jpg)" }}
      >
        <div className="absolute inset-0 bg-[#0a1628]/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#4da3ff]">
            Our Solutions
          </p>
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            <span className="text-balance">
              Customized Water Treatment Solutions
            </span>
          </h2>
          <p className="mt-3 max-w-xl text-white/60">
            for Every Commercial Need
          </p>
        </div>
      </div>

      <section id="products" className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-20">
            {products.map((product, idx) => (
              <div
                key={product.title}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  idx % 2 !== 0 ? "lg:direction-rtl" : ""
                }`}
                style={{
                  direction: idx % 2 !== 0 ? "rtl" : "ltr",
                }}
              >
                <div
                  className="overflow-hidden rounded-2xl"
                  style={{ direction: "ltr" }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-80 w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-96"
                  />
                </div>
                <div style={{ direction: "ltr" }}>
                  <h3 className="mb-4 font-serif text-2xl font-bold text-foreground md:text-3xl">
                    {product.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                  <div className="mb-8 grid grid-cols-2 gap-3">
                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-sm font-medium text-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href="#contact">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
