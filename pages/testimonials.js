import { useState } from "react"
import Head from "next/head"

import { FadeUp } from "@/components/animations"
import { Navbar, Testimonials, VideoModal, ImageGallery, JoinCommunity, Footer } from "@/components"
import { testimonialGrid1, testimonialGrid2, testimonialGrid3, testimonialGrid4, clients } from "@/constants"

export default function Testimonals() {
  const [active, setActive] = useState(false)

  return (
    <>
      <Head>
        <meta name="description" content="Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
        <title>Testimonials | SMT</title>
      </Head>

      <main className="light-theme">
        <Navbar />

        <section className="page-section">
          <FadeUp className="page-title">Testimonials</FadeUp>
        </section>

        <Testimonials />

        <section className="page-section">
          <div className="section-container">
            <div className="content">
              <h2 className="heading mb-5">Videos</h2>

              <div className="clients-container">
                {clients?.map(({ title, img, video }, i) => (
                  <FadeUp key={title}>
                    <button onClick={() => setActive(i)} className="relative group">
                      <img src={img} alt={title} />
                      <img src="/assets/icons/play_icon.svg" alt="play" className="play-icon" />
                    </button>

                    <VideoModal i={i} video={video} active={active} setActive={setActive} />
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="section-container">
            <div className="content">
              <h2 className="heading mb-5">Screenshots</h2>
              <ImageGallery grids={[testimonialGrid1, testimonialGrid2, testimonialGrid3, testimonialGrid4]} />
            </div>
          </div>
        </section>

        <JoinCommunity />
      </main>

      <Footer dark />
    </>
  )
}
