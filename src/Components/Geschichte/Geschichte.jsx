import './Geschichte.css';

const galleryImages = [
  { src: '/assets/geschichte/img1.png', alt: 'Hund trinkt aus Pawbottle Näpfchen' },
  { src: '/assets/geschichte/img2.png', alt: 'Mann mit Labrador im Wald' },
  { src: '/assets/geschichte/img3.png', alt: 'Labrador schnuppert an der Pawbottle' },
  { src: '/assets/geschichte/img4.png', alt: 'Hund frisst aus dem integrierten Napf' },
  { src: '/assets/geschichte/img5.png', alt: 'Pawbottle Produktansicht' },
];

// Triple to ensure seamless infinite loop at all screen sizes
const loopedImages = [...galleryImages, ...galleryImages, ...galleryImages];

export default function Geschichte() {
  return (
    <section className="geschichte">
      <div className="geschichte__content">
        <h2 className="geschichte__title">Unsere Geschichte</h2>
        <p className="geschichte__text">
          Bei Pawbottle glauben wir, dass jedes Abenteuer mit deinem Vierbeiner mühelos und
          spaßig sein sollte. Deshalb haben wir die innovative 2-in-1 Pawbottle entwickelt –
          eine clevere Trinklösung mit integrierten Näpfen für Futter und Wasser. Perfekt für
          Spaziergänge, Wanderungen oder Reisen, bestehen unsere Flaschen aus hochwertigen,
          BPA-freien Materialien und sind auf Komfort und Sicherheit deines Haustiers ausgelegt.
        </p>
        <p className="geschichte__text">
          Unsere Mission ist einfach: Das Leben unterwegs für Tierhalter zu erleichtern und
          gleichzeitig die Tiere glücklich, gesund und gut hydriert zu halten. Stylisch,
          praktisch und umweltbewusst – Pawbottle ist mehr als eine Flasche, es ist ein
          Begleiter für jede Reise.
        </p>
      </div>

      <div className="geschichte__ticker">
        <div className="geschichte__ticker-track">
          {loopedImages.map((image, index) => (
            <div className="geschichte__ticker-slide" key={index}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}