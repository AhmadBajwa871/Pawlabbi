import React from 'react'
import './Hero.css'
import pawBottle from '../../../public/assets/pawbottle.png'
import cross_icon from '../../../public/assets/cross-icon.png'
import cta_icon from '../../../public/assets/cta-icon.png'
import hero_badge from '../../../public/assets/hero-badge.png'
const Hero = () => {
  const sliderItems = [
    { text: 'Lieferung in 2–3 Werktagen l Sicher & bequem bezahlen l Black Week 23,99€ statt 29,99€' },
    { text: 'Lieferung in 2–3 Werktagen l Sicher & bequem bezahlen l Black Week 23,99€ statt 29,99€' },
    { text: 'Lieferung in 2–3 Werktagen l Sicher & bequem bezahlen l Black Week 23,99€ statt 29,99€' },
    { text: 'Lieferung in 2–3 Werktagen l Sicher & bequem bezahlen l Black Week 23,99€ statt 29,99€' },
    { text: 'Lieferung in 2–3 Werktagen l Sicher & bequem bezahlen l Black Week 23,99€ statt 29,99€' },
    { text: 'Lieferung in 2–3 Werktagen l Sicher & bequem bezahlen l Black Week 23,99€ statt 29,99€' },
  
  ]

  const allItems = [...sliderItems, ...sliderItems]

  return (
    <div className="hero">

      {/* ── Left Content ── */}
      <div className="hero__content">
        <p className="hero__eyebrow">Smart. Stylisch. Praktisch.</p>
        <h1 className="hero__title">
          Hydration<br />
          Trifft Abenteuer
        </h1>
        <p className="hero__description">
          Die Pawbottle Ist Die Clevere 2-In-1-Trinkflasche Mit Integrierten Näpfen –
          Perfekt Für Spaziergänge, Wanderungen & Reisen.
        </p>
        <a href="/pawbottle" className='herocta'>
          <span className="hero__cta">Jetzt ansehen</span>
          <span className="hero__cta-arrow"><img src={cta_icon} alt="" /></span>
        </a>
      </div>

      {/* ── Right: Bottle ── */}
      <div className="hero__image-wrapper">
        <div className="hero__badge">
          <img className='hero__badge-label ' src={hero_badge} alt="" />
        </div>
        <img src={pawBottle} alt="Pawlabbi Trinkflasche" className="hero__bottle" />
      </div>

      {/* ── Ticker ── */}
      <div className="hero__ticker">
        <div className="hero__ticker-track">
          {allItems.map((item, i) => (
            <span key={i} className="hero__ticker-item">
              <span className="hero__ticker-sep"><img src={cross_icon} alt="" /></span>
              <span className="hero__ticker-text">{item.text}</span>
              
            </span>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Hero