import { Press, FadeUp } from "@/components/animations"

const discordCommunityLink = "https://discord.gg/EmxEFNVu"

export default function JoinCommunity({ variant }) {
  return (
    <section className="join-community-section">
      <div className="join-community-container">
        <FadeUp className={`join-community-wrapper ${variant === "black" ? "bg-black" : "bg-brand-red"}`}>
          <div className="img-wrapper bg-brand-red">
            <img src="/assets/images/chat.jpg" alt="Join Community" />
            <div className={variant === "black" ? "dark" : "light"}></div>
          </div>

          <div className="details">
            <h1 className={variant === "black" ? "text-brand-red" : ""}>
              <span>Not ready yet?</span>
              <br />
              <span>Join our FREE</span>
              &nbsp;
              <br className="xl:hidden" />
              <span>Discord today.</span>
            </h1>
            <p>
              Get updates from SMT, Get FREE trades and discuss with other members. We give a TON of value on our public
              discord group. See you there!
            </p>
            <Press>
              <a
                href={discordCommunityLink}
                className={`community-btn ${variant === "black" ? "bg-brand-red" : "bg-brand-black"}`}
              >
                <span>Join the Community</span>
                <img src="/assets/icons/see_more_light.svg" alt="See More" className="inline-flex w-3 h-3" />
              </a>
            </Press>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
