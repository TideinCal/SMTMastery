import { FadeUp } from "@/components/animations"

export default function Invite() {
  return (
    <section className="mastery__invite">
      <div className="invite-container">
        <FadeUp>
          <div className="invite light-theme">
            <div className="invite-col-1">
              <div className="invite-refferal">
                <div className="discount">
                  <p className="font-bold text-xl text-brand-red">Invite and get</p>
                  <img src="/assets/icons/30_dollar.svg" alt="Discount" className="-rotate-[5.58deg]" />
                  <p className="text-xl">for every refferal</p>
                </div>
                <div>
                  <img src="/assets/images/smt_mastery_black.png" alt="SMT Mastery" className="object-contain" />
                </div>
              </div>
            </div>

            <div className="invite-col-2">
              <div className="affiliate-program">
                <h2>Affiliate Program</h2>
                <div className="content">
                  <div className="content-list">
                    <div className="number px-1">1</div>
                    <div className="text-sm">Invite friends with your referral link.</div>
                  </div>
                  <div className="content-list">
                    <div className="number">2</div>
                    <div className="text-sm">They register with your link.</div>
                  </div>
                  <div className="content-list">
                    <div className="number">3</div>
                    <div className="text-sm">You get $30. Repeat for more.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
