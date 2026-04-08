import './Newsletter.css';

export default function Newsletter() {
  return (
    <section className="newsletter">

      <div className="newsletter__overlay" />

      <div className="newsletter__card">

        <h2>
          Trage Dich In Unseren Newsletter Ein Und <br />
          Verpasse Nichts Mehr
        </h2>

        <p>
          Erhalte exklusive Angebote, spannende Tipps rund um deinen Hund
          und bleibe immer über neue Produkte informiert.
        </p>

        <form className="newsletter__form">
          <input type="email" placeholder="@ Enter your email" />
          <button type="submit">Submit</button>
        </form>

      </div>
    </section>
  );
}