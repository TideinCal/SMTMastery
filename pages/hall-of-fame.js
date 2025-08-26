import Head from "next/head"

import { FadeUp } from "@/components/animations"
import { Navbar, ImageGallery, JoinCommunity, Footer } from "@/components"
import { hallGrid1, hallGrid2, hallGrid3, hallGrid4 } from "@/constants"

export default function HallOfFame() {
  return (
    <>
      <Head>
        <meta name="description" content="Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
        <title>Hall of Fame | SMT</title>
      </Head>

      <main className="dark-theme">
        <Navbar dark />

        <section className="page-section">
          <div className="section-container">
            <FadeUp className="page-title">
              <span>SMT Funded Traders</span>
              <br />
              <span className="text-brand-white">Hall of Fame</span>
            </FadeUp>

            <ImageGallery grids={[hallGrid1, hallGrid2, hallGrid3, hallGrid4]} />
          </div>
        </section>

        <JoinCommunity />
      </main>

      <Footer />
    </>
  )
}
