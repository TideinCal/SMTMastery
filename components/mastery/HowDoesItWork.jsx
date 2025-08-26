import { Fragment } from "react"
import Image from "next/image"

import { FadeUp, ScaleUp } from "@/components/animations"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"

const mockups = [
  {
    img: "/assets/images/mockup1.png",
    title: "Copy",
  },
  {
    img: "/assets/images/mockup2.png",
    title: "Paste",
  },
  {
    img: "/assets/images/mockup3.png",
    title: "Track",
  },
  {
    img: "/assets/images/mockup4.png",
    title: "Enjoy!",
  },
]

export default function HowDoesItWork() {
  return (
    <section className="mastery__work theme-dark">
      <div className="work-container">
        <FadeUp>
          <h2 className="work-title">How does it work?</h2>
        </FadeUp>

        <div className="work-mobile">
          <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="work-cards">
            {mockups?.map(({ img, title }, i) => (
              <SwiperSlide key={title + i}>
                <FadeUp>
                  <div className="work-card">
                    <div className="mockup">
                      <Image src={img} alt={title} fill style={{ objectFit: "contain" }} />
                    </div>

                    <div className="title">
                      <div className="bg-brand-white text-brand-red px-2 rounded-full w-6 h-6">{i + 1}</div>
                      <div>{title}</div>
                    </div>
                  </div>
                </FadeUp>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="work-desktop">
          {mockups?.map(({ img, title }, i) => (
            <Fragment key={title}>
              <div className="w-1/5">
                <ScaleUp className="mockup">
                  <Image src={img} alt={title} fill style={{ objectFit: "contain" }} />
                </ScaleUp>

                <FadeUp className="title">
                  <div className="bg-brand-red px-2 rounded-full w-6 h-6">{i + 1}</div>
                  <div>{title}</div>
                </FadeUp>
              </div>

              <FadeUp className="arrow">
                <img src="/assets/icons/see_more_light.svg" />
              </FadeUp>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
