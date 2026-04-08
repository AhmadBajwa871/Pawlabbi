import './Vergleich.css';
import cross_icon from '../../../public/assets/ver/cross.png'
import like_icon from '../../../public/assets/ver/like.png'
import dislike_icon from '../../../public/assets/ver/dislike.png'
const rows = [
  '2-In-1 Flasche Mit Futternäpfen',
  'Hält Getränke Warm Oder Kalt',
  'BPA-Frei & Lebensmittelechte Materialien',
  'Einfach Von Hand Zu Reinigen',
  'Für Mensch & Tier Geeignet',
];

export default function Vergleich() {
  return (
    <section className="vergleich">


      <div className="vergleich__inner">
        <h2 className="vergleich__title">
          So Schlägt Unsere Pawbottle Die<br />Konkurrenz
        </h2>

        <div className="vergleich__table">
          {/* Header row */}
          <div className="vergleich__row vergleich__row--header">
            <div className="vergleich__col-feature vergleich__header-feature">
              <span className="vergleich__paw-icon"><img src={cross_icon} alt="" /></span>
              <span className="vergleich__header-label">Features</span>
            </div>
            <div className="vergleich__col-pawbottle vergleich__header-pawbottle">
              Pawbottle
            </div>
            <div className="vergleich__col-other vergleich__header-other">
              Übliche Tierflaschen
            </div>
          </div>

          {/* Data rows */}
          {rows.map((label, i) => (
            <div className="vergleich__row" key={i}>
              <div className="vergleich__col-feature">
                <span className="vergleich__paw-icon"><img src={cross_icon} alt="" /></span>
                <span className="vergleich__feature-label">{label}</span>
              </div>
              <div className="vergleich__col-pawbottle vergleich__cell-yes">
                <img src={like_icon} alt="" />
              </div>
              <div className="vergleich__col-other vergleich__cell-no">
                <img src={dislike_icon} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}