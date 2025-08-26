import { Press, FadeUp } from "@/components/animations"

const whopMembershipLink = "https://whop.com/smtmastery/"

const exclusivePerks = [
  "Live Trading Sessions",
  "Simple Copy and Paste Signals with Alerts",
  "Trade live with Tim during New York session",
  "Study how Tim spots each trade live",
  "Get Trade Alerts on your Phone",
  "High Probability trades setups",
  "Receive trade updates",
]

export default function ExclusivePass() {
  return (
    <section id="SMTExclusivePassSection" className="smart-money-section">
      <div className="container mx-auto">
        <FadeUp className="exclusive-pass">
          <h2 className="title">
            <span>Welcome to the</span>
            <br />
            <span>Smart Money Team</span>
          </h2>
        </FadeUp>

        <div className="exclusive-access">
          {/* Column 1 */}
          <div className="exclusive-col-1">
            <FadeUp className="actual-price">
              <img src="/assets/icons/249_dollar.svg" alt="Actual Price - $249" />
            </FadeUp>

            <FadeUp className="discounted-price">$125</FadeUp>

            <FadeUp className="text-sm md:text-[15px] lg:text-base mb-6 md:mb-7">30-Day Exclusive Access</FadeUp>

            <FadeUp className="join">
              <Press>
                <a href={whopMembershipLink} className="brand-btn">
                  Join Now
                  <img src="/assets/icons/see_more_light.svg" alt="SMT Mastery Whop membership" className="ml-2 inline-flex h-3 w-3" />
                </a>
              </Press>
            </FadeUp>

            <FadeUp className="payment">
              <img src="/assets/images/payment.jpg" alt="Payment" />
            </FadeUp>
          </div>

          {/* Column 2 */}
          <div className="exclusive-col-2">
            <div className="content-list-container">
              {exclusivePerks?.map((item, i) => (
                <FadeUp key={i + item} className="content-list">
                  <div className="bullet">
                    <img src="/assets/icons/checked.svg" alt="" />
                  </div>
                  <div className="text-sm">{item}</div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
