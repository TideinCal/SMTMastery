import { useState } from "react"
import Link from "next/link"

import { VideoModal } from "@/components"
import { Press, FadeUp } from "@/components/animations"
import { clients } from "@/constants"

import { Swiper, SwiperSlide } from "swiper/react"
import { Mousewheel } from "swiper"

import "lightgallery/css/lightgallery.css"
import "swiper/css"

export default function ClientsTestimonial({ dark }) {
  const [active, setActive] = useState(false)

  return (
    <section className="page-section bg-white">
      <div className="section-container">
        <FadeUp className="content">
          <h2 className="heading-center">
            Here's what our&nbsp;
            <div className="sm:hidden" />
            clients are saying
          </h2>
        </FadeUp>

        <div className="relative px-3.5 sm:px-6 md:px-7 mb-8 sm:mb-12">
          <Swiper
            mousewheel={true}
            modules={[Mousewheel]}
            grabCursor
            breakpoints={{
              0: { slidesPerView: 1.2, spaceBetween: 10 },
              380: { slidesPerView: 1.5, spaceBetween: 10 },
              480: { slidesPerView: 1.8, spaceBetween: 10 },
              580: { slidesPerView: 2.1, spaceBetween: 10 },
              680: { slidesPerView: 2.3, spaceBetween: 20 },
              1024: { slidesPerView: 3.5, spaceBetween: 30 },
              1440: { slidesPerView: 3.8, spaceBetween: 30 },
            }}
          >
            {clients?.map(({ title, img, video }, i) => (
              <SwiperSlide key={i + title}>
                <button onClick={() => setActive(i)} className="relative group">
                  <img src={img} alt={title} className="w-full" />
                  <img src="/assets/icons/play_icon.svg" alt="" className="play-icon" />
                </button>

                <VideoModal i={i} video={video} active={active} setActive={setActive} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            className={`absolute top-0 right-0 z-10 bg-gradient-to-r from-transparent pointer-events-none h-full w-1/3 origin-right scale-105 ${
              dark ? "to-brand-black" : "to-brand-white"
            }`}
          ></div>
        </div>

        <div className="see_more w-full flex justify-end px-7">
          <FadeUp>
            <Press>
              <Link href="/testimonials" className="brand-btn">
                See More
                <img src="/assets/icons/see_more_light.svg" alt=">" className="ml-2 inline-flex w-3 h-3" />
              </Link>
            </Press>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
