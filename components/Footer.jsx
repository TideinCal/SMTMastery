import Link from "next/link"
import { Press } from "./animations"

const socialLinks = [
  {
    title: "Facebook",
    img: "/assets/icons/facebook.svg",
    link: "https://fb.com",
  },
  {
    title: "Instagram",
    img: "/assets/icons/instagram.svg",
    link: "https://www.instagram.com/timtradez/?hl=en",
  },
  {
    title: "Twitch",
    img: "/assets/icons/twitch.svg",
    link: "https://m.twitch.tv/timtradez96",
  },
  {
    title: "YouTube",
    img: "/assets/icons/youtube.svg",
    link: "https://www.youtube.com/channel/UCNKUQtw6CCf-PT6adLoY2JA",
  },
]

const year = new Date().getFullYear()

export default function Footer({ dark }) {
  return (
    <footer className={`footer-section ${dark ? "dark-theme" : "light-theme"}`}>
      <div className="footer-container">
        <div className="footer-social">
          <div className="logo">
            <img src="/assets/images/smt_logo_footer.jpg" alt="SMT Logo" className="w-full object-cover" />
          </div>

          <div className="social-links">
            {socialLinks?.map(({ title, img, link }, i) => (
              <Press key={title + i}>
                <a href={link} target="_blank">
                  <img src={img} alt={title} className="w-8 object-contain" />
                </a>
              </Press>
            ))}
          </div>
        </div>

        <div className="footer-nav">
          <div className="categories-container">
            <div className="category">
              <div className="category-title">Products</div>

              <div>
                <Link href="/trading">SMT Academy</Link>
              </div>

              <div>
                <Link href="/">SMT Mastery</Link>
              </div>
            </div>

            <div className="category">
              <div className="category-title">Company</div>

              <div>
                <Link href="/terms-of-service">Terms of Service</Link>
              </div>

              <div>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </div>
            </div>

            <div className="category">
              <div className="category-title">Support</div>

              <div>Email Us:</div>

              <div>
                <a href="mailto:admin@smtmastery.com" target="_blank" className="underline">
                  admin@smtmastery.com
                </a>
              </div>
            </div>
          </div>

          <div className="copyright">&copy; SMT Mastery {year}. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  )
}
