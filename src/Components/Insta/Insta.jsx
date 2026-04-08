import './Insta.css';
import img1 from '../../../public/assets/insta/1.png'
import img2 from '../../../public/assets/insta/2.png'
import img3 from '../../../public/assets/insta/3.png'
import img4 from '../../../public/assets/insta/4.png'
import img5 from '../../../public/assets/insta/5.png'
import img6 from '../../../public/assets/insta/6.png'
import img7 from '../../../public/assets/insta/7.png'
import img8 from '../../../public/assets/insta/8.png'


export default function Insta() {
  return (
    <section className="insta">
      <div className="insta__grid">

        <div className="insta__item"><img src={img1} alt="" /></div>
        <div className="insta__item"><img src={img2} alt="" /></div>
        <div className="insta__item"><img src={img3} alt="" /></div>

        <div className="insta__item"><img src={img4} alt="" /></div>

        {/* CENTER CTA */}
        <div className="insta__cta">
          <h3>
            Sieh Dir Die Ergebnisse <br />
            Auf Instagram An
          </h3>
          <button>Follow on instagram</button>
        </div>

        <div className="insta__item"><img src={img5} alt="" /></div>

        <div className="insta__item"><img src={img6} alt="" /></div>
        <div className="insta__item"><img src={img7} alt="" /></div>
        <div className="insta__item"><img src={img8} alt="" /></div>

      </div>
    </section>
  );
}