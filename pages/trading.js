import Head from "next/head"
import {
  Navbar,
  HeroSection,
  Roadmap,
  Testimonials,
  AcademyPerks,
  SMTFundedTrader,
  ClientsTestimonials,
  Curriculum,
  About,
  Offers,
  FAQ,
  JoinCommunity,
  Footer,
} from "@/components"

export default function Academy() {
  return (
    <>
      <Head>
        <meta name="description" content="Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
        <title>SMT Academy</title>
      </Head>

      <main className="light-theme">
        <Navbar />
        <HeroSection
          data={{
            heroImg: "/assets/images/smt_academy.jpg",
            mockupImg: "/assets/images/academy__hero-mockup.jpg",
            heading: "Learn How to become a",
            heading2: "Profitable Funded Trader",
            paragraph: "Trading Academy that teaches you the necessary skills to become a certified Funded Trader",
          }}
        />
        <Roadmap />
        <Testimonials seeMore />
        <AcademyPerks />
        <SMTFundedTrader academy />
        <ClientsTestimonials />
        <Curriculum />
        <About />
        <div className="dark-theme">
          <Offers />
          <FAQ />
          <JoinCommunity variant={"black"} />
        </div>
      </main>

      <Footer />
    </>
  )
}
