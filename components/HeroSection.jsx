import Image from "next/image"
import { Press, FadeUp, ScaleUp } from "@/components/animations"
import { brands } from "@/constants"

export default function HeroSection({ data }) {
  const { dark, heroImg, mockupImg, heading, heading2, heading3, paragraph } = data

  return (
    <section className="mastery__hero-section">
      <div className="hero-container overflow-hidden">
        <FadeUp>
          <div className="hero-logo">
            <Image src={heroImg} alt="SMT" fill />
          </div>
        </FadeUp>

        <div className="hero-content">
          <div className="hero-mockup">
            <div className={`hero-mockup-img ${!dark ? "sm:scale-[1.3]" : ""}`}>
              <FadeUp>
                <Image src={mockupImg} alt="SMT Mobile Mockup" fill style={{ objectFit: "contain" }} />
              </FadeUp>
            </div>
          </div>

          <div className="hero-text">
            <h1>
              <FadeUp>
                <span className="text-brand-red">
                  {heading}
                  {heading2 && (
                    <span className="text-black">
                      <br />
                      {heading2}
                    </span>
                  )}
                </span>
              </FadeUp>
              <br />
              <FadeUp>{heading3 && <span>{heading3}</span>}</FadeUp>
            </h1>

            <p className={dark ? "" : "text-black"}>{paragraph}</p>

            <FadeUp>
              <Press>
                <a href="#SMTExclusivePassSection" className="brand-btn bounce-animation">
                  <span>Start Now</span>
                  {/* Arrow */}
                  <span className="ml-2 relative inline-flex align-middle w-4 h-4">
                    <Image src="/assets/icons/arrow.svg" fill alt="Start Now" />
                  </span>
                </a>
              </Press>
            </FadeUp>
          </div>
        </div>

        <div className="hero-brands">
          {brands?.map(({ title, img, imgLight }, i) => (
            <ScaleUp key={title}>
              <div className={i === 3 ? "w-[180px]" : ""}>
                <Image src={dark ? img : imgLight} alt={title} style={{ objectFit: "contain" }} fill />
              </div>
            </ScaleUp>
          ))}
        </div>
      </div>
    </section>
  )
}
