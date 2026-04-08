import './Warum.css';

const cross_icon = '/assets/Warum/cross.png';

const cards = [
  {
    title: '100 % Natürlich & Sicher',
    text: 'Hergestellt Aus Hochwertigen Materialien – Komplett Frei Von Schadstoffen Und Zusätzen.',
  },
  {
    title: 'Tierfreundlich Entwickelt',
    text: 'Ergonomisch, Praktisch Und Komfortabel In Der Anwendung.',
  },
  {
    title: 'Nachhaltig Produziert',
    text: 'Umweltfreundliche Materialien Und Langlebige Verarbeitung – Gut Für Dich, Deinen Hund Und Die Natur.',
  },
  {
    title: 'Auslaufsicheres Design',
    text: 'Innovativer Verschluss Hält Wasser Sicher In Der Flasche – Kein Tropfen Geht Verloren.',
  },
  {
    title: 'Hygienisch & Leicht Zu Reinigen',
    text: 'Einfach Zerlegbar Und Schnell Zu Reinigen – Für Maximale Frische Unterwegs.',
  },
  {
    title: 'Praktisch Für Unterwegs',
    text: 'Perfekt Für Spaziergänge, Reisen Und Outdoor-Abenteuer Mit Deinem Hund.',
  },
];

export default function Warum() {
  return (
    <section className="warum">
      <div className="warum__inner">

        <h2 className="warum__title">
          Warum Unsere Hunde-<br />Trinkflasche Die Beste Wahl Ist
        </h2>

        <div className="warum__stage">

          <div className="warum__bottle" />

          <div className="warum__cards">
            {cards.map((card, i) => (
              <div className={`warum__card warum__card--${i}`} key={i}>
                <span className="warum__card-icon">
                  <img src={cross_icon} alt="" />
                </span>
                <h3 className="warum__card-title">{card.title}</h3>
                <p className="warum__card-text">{card.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}