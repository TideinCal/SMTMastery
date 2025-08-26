import Head from "next/head"
import { Navbar, JoinCommunity, Footer } from "@/components"
import { FadeUp } from "@/components/animations"
import { privacyPolicy } from "@/constants"

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <meta name="description" content="Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
        <title>Privacy Policy | SMT</title>
      </Head>

      <main className="light-theme">
        <Navbar />

        <section className="page-section">
          <div className="section-container">
            <FadeUp className="page-title">Privacy Policy</FadeUp>

            <div className="page-content">
              {privacyPolicy?.map(({ title, paragraphs }, i) => (
                <div key={`content-${title}`} className="content">
                  <FadeUp className="heading">{title}</FadeUp>

                  <div className="paragraphs">
                    {paragraphs?.map((paragraph, j) => (
                      <FadeUp key={j}>
                        <p>{paragraph}</p>
                      </FadeUp>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <JoinCommunity />
        <Footer />
      </main>
    </>
  )
}
