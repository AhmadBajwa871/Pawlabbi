import './Features.css';

const features = [
  {
    icon: '/assets/features/1.png',
    title: 'Natürlich & Sicher',
    text: 'Hergestellt aus hochwertigen, BPA-freien Materialien – komplett frei von Schadstoffen und Zusatzstoffen.',
  },
  {
    icon: '/assets/features/2.png',
    title: 'Allergikerfreundlich',
    text: 'Speziell entwickelt, um auch empfindlichen Hunden und Katzen ein sicheres Trinkerlebnis zu bieten.',
  },
  {
    icon: '/assets/features/3.png',
    title: 'Doppelwand Thermoflasche',
    text: 'Hält Wasser und Futter stundenlang warm oder kalt – ideal für unterwegs, Spaziergänge und Reisen.',
  },
  {
    icon: '/assets/features/4.png',
    title: 'Tierfreundlich',
    text: 'Ergonomisches Design, leicht zugängliche Näpfe – perfekt für deine Vierbeiner, praktisch und bequem.',
  },
];

export default function Features() {
  return (
    <section className="features">
      <div className="features__grid">
        {features.map((feature, index) => (
          <div className="features__card" key={index}>
            <div className="features__icon">
              <img src={feature.icon} alt={feature.title} />
            </div>
            <h3 className="features__title">{feature.title}</h3>
            <p className="features__text">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}