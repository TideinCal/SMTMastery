import Head from "next/head"
import {
  Navbar,
  HeroSection,
  Perks,
  HowDoesItWork,
  TradeLiveWithUs,
  ClientsTestimonials,
  Testimonials,
  SMTFundedTrader,
  Invite,
  About,
  ExclusivePass,
  FAQ,
  JoinCommunity,
  Footer,
} from "@/components"

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
        <title>SMT Mastery</title>
      </Head>

      <main className="dark-theme">
        <Navbar dark trial />
        <HeroSection
          data={{
            dark: true,
            heroImg: "/assets/images/smt_mastery.jpg",
            mockupImg: "/assets/images/mastery__hero-mockup.png",
            heading: "Earn While You Learn",
            heading3: "88-92% Win Rate",
            paragraph: "Trade the markets by following the best forex signals",
          }}
        />
        <Perks />
        <HowDoesItWork />
        <TradeLiveWithUs />
        <ClientsTestimonials dark />
        <Testimonials seeMore />
        <SMTFundedTrader />
        <Invite />
        <About dark />
        <ExclusivePass />
        <FAQ />
        <JoinCommunity />
      </main>

      <Footer />
    </>
  )
}
