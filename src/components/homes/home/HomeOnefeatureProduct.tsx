import Image, { StaticImageData } from "next/image";


import botulax from "@/assets/img/products/botulax.png";
import gana_ch from "@/assets/img/products/gana_ch.png";
import innotox from "@/assets/img/products/luva-innotox.png";
import meditoxin from "@/assets/img/products/meditoxin.png";
import rentox from "@/assets/img/products/rentox.png";
import touch_br from "@/assets/img/products/touch_br.png";
import neuronox from "@/assets/img/products/neuronox.png";
import nonafill from "@/assets/img/products/nonafill.png";

import featureThumbShape_1 from "@/assets/img/products/features_product_shape01.png";
import featureThumbShape_2 from "@/assets/img/products/features_product_shape02.png";
import featureThumbShape_3 from "@/assets/img/products/features_product_shape03.png";



interface DataType {
  id: number;
  thumb: StaticImageData;
  thumb_shape: StaticImageData;
  title: string;
  quantity?: string;
  desc: JSX.Element;
  new_price: number;
  old_price: number;
}
[];

const features_product_data: DataType[] = [
  {
    id: 1,
    thumb: botulax,
    thumb_shape: featureThumbShape_1,
    title: "Botulax",
    //  quantity: "High-strength, 5000IU",
    desc: (
      <>
        <p>
          Botulax es una toxina del grupo farmacéutico surcoreano HUGEL Inc.
          Durante 20 años, esta empresa ha creado y fabricado con éxito
          productos cosméticos y estéticos clínicos de vanguardia. Durante el
          desarrollo de Botulax se utilizó una técnica especial para
          proporcionar al producto la mayor concentración posible de principios
          activos. Los cosmetólogos recomiendan Botulax por sus resultados
          duraderos, su acción rápida y su seguridad. Dentro de la gama de
          productos de Botulax podemos encontrar Botulax 50 unidades, Botulax
          100 unidades, Botulax 150 unidades, Botulax 200 unidades y Botulax 300
          unidades.
        </p>
        <br />
        <p>
          Botulax es un relajante muscular compuesto por la toxina botulínica
          pura de tipo A (junto con hemaglutinina) y cloruro sódico
          (excipiente). El modo de acción de este producto se basa en la
          capacidad de esta toxina botulínica tipo A para impedir la transmisión
          del impulso nervioso. Una inyección intramuscular de dicha toxina
          altera la producción de acetilcolina (un neurotransmisor que garantiza
          la transmisión neuromuscular) y provoca una parálisis transitoria de
          los músculos faciales. Al paralizar las expresiones faciales, la
          relajación de los músculos se ve favorecida y las arrugas se suavizan
        </p>
      </>
    ),
    new_price: 89.99,
    old_price: 117.99,
  },
  {
    id: 2,
    thumb: innotox,
    thumb_shape: featureThumbShape_2,
    title: "Innotox",
    //  quantity: "High-strength, 4000IU",
    desc: (
      <>
        Toxina botulínica ya constituída, de alta calidad utilizada para reducir
        arrugas y brindar un aspecto más joven. Fue adquirido por laboratorios
        Allergan en 2013. Ofrece resultados notables y duraderos, es seguro y
        eficaz, con una fórmula avanzada para resultados naturales. La
        recuperación es rápida y se puede usar en diversas áreas del rostro.
        Tiene características similares a Botox Allergan y excluye el uso de
        sustancias de origen animal. Se comparó su seguridad y eficacia con
        Botox Allergan en una proporción de dosis para tratar líneas de
        expresión.
      </>
    ),
    new_price: 69.99,
    old_price: 79.99,
  },
  {
    id: 3,
    thumb: rentox,
    thumb_shape: featureThumbShape_3,
    title: "Rentox",
    //  quantity: "High-strength, 3000IU",
    desc: (
      <>
        Toxina botulínica tipo A, se utiliza para alisar arrugas severas y
        pliegues. La acción se basa en la relajación local de los músculos.
        Tiene la propagación más baja del mercado, lo que le permite trabajar en
        áreas locales de la piel. Bloquea la transmisión neuromuscular de las
        terminaciones nerviosas inhibiendo la liberación de acetilcolina, siendo
        una indicación terapéutica para tratar migrañas crónicas. Es un eficaz
        tratamiento para la hiperhidrosis en zonas como manos o axilas.
      </>
    ),
    new_price: 69.99,
    old_price: 89.99,
  },
  {
    id: 4,
    thumb: meditoxin,
    thumb_shape: featureThumbShape_3,
    title: "Meditoxin",
    //  quantity: "High-strength, 3000IU",
    desc: <></>,
    new_price: 69.99,
    old_price: 89.99,
  },
];
const features_product_data_two: DataType[] = [
  {
    id: 5,
    thumb: nonafill,
    thumb_shape: featureThumbShape_1,
    title: "Bonafill",
    quantity: "(2 jeringas de 1.1ml) (Soft, Deep y Volume)",
    desc: (
      <>
        Cada paquete del producto contiene 24mg/ml de HA. El ingrediente está
        presente de forma natural en el cuerpo humano, por lo que no tiene
        efectos secundarios. Además, se disuelve lentamente en los tejidos.
        Bonafill Volume dura hasta 2 años, Bonafill Deep hasta 1 año y medio, y
        Bonafill Soft hasta un año. Ayuda a la Hidratación de la piel Corrección
        de arrugas faciales profundas Relleno de labios, mentón, mandíbula,
        entre otros Realce de mejillas En su mayor parte, el Relleno HA se
        adapta a la estructura de la piel, ofreciendo resultados de aspecto
        natural. Después del tratamiento, algunos pacientes pueden experimentar
        enrojecimiento y picazón.
      </>
    ),
    new_price: 89.99,
    old_price: 117.99,
  },
];
const features_product_data_three: DataType[] = [
  {
    id: 6,
    thumb: gana_ch,
    thumb_shape: featureThumbShape_1,
    title: "Gana CH",
    quantity: "(Hidroxipatita de Calcio)",
    desc: (
      <>
        <p>
          Doble efecto anti-envejecimiento. Duración hasta 3 años. (1.1ml.
          Hidroxipatita de Calcio, 50mg. Ácido Hialurónico 20mg, Lidocaína 3mg).
        </p>
        <br />
        <p>
          Este revolucionario producto antienvejecimiento, biostimulante de
          COLÁGENO, contiene ácido hialurónico e hidroxiapatita de calcio, lo
          que lo hace más seguro y duradero que sus rivales. Es más, incorpora
          lidocaína para que los pacientes no tengan que soportar molestias o
          dolores durante el tratamiento.
        </p>
        <br />
        <p>
          La hidroxiapatita de calcio o hidroxiapatita cálcica (CaHa) es una
          sustancia biocompatible y reabsorbible que estimula la producción de
          colágeno y que se utiliza como relleno facial en tratamientos
          estéticos. Se aplica fundamentalmente en el rostro y en el cuello
          (aunque también es posible emplearlo para rejuvenecer las manos).
        </p>
        <br />
        <p>
          De este modo, las principales aplicaciones que suelen dársele son las
          siguientes:
        </p>
        <ul>
          <li>
            <p>
              Reducir las líneas de expresión en el rostro. Mejora del surco
              nasogeniano y de las arrugas peribucales.
            </p>
          </li>
          <li>
            <p>Rejuvenecimiento general del rostro.</p>
          </li>
          <li>
            <p>Correcciones leves de nariz (sin cirugía).</p>
          </li>
          <li>
            <p>Reducción de ojeras.</p>
          </li>
          <li>
            <p>Mejora de la línea de mandíbula.</p>
          </li>
          <li>
            <p>Mejora de cicatrices en el rostro.</p>
          </li>
          <li>
            <p>Aumento del volumen de las mejillas.</p>
          </li>
          <li>
            <p>Corrección del pliegue sublabial.</p>
          </li>
          <li>
            <p>Mejora de la forma del mentón.</p>
          </li>
        </ul>

        <p>
          Ventajas y beneficios de este tipo de tratamiento Los tratamientos con
          hidroxiapatita de calcio tienen importantes ventajas respecto de otras
          técnicas de medicina estética. Así, las principales son las
          siguientes:
          <ul>
            <li>
              <p>
                Es un tratamiento mínimamente invasivo. Los resultados son
                visibles casi de inmediato, van mejorando progresivamente y
                tienen una duración bastante amplia, como luego veremos.
              </p>
            </li>
            <li>
              <p>
                Se utiliza un material totalmente biocompatible, minimizando las
                posibles reacciones adversas. Por tanto, los riesgos de reacción
                alérgica son extremadamente bajos. Estimula la producción de
                colágeno en la zona tratada.
              </p>
            </li>
            <li>
              <p>
                Si se aplica adecuadamente, produce resultados muy naturales,
                con una apariencia saludable y rejuvenecida. Incluso al tacto,
                esta sustancia resulta natural.
              </p>
            </li>
            <li>
              <p>
                Es un tratamiento seguro, ya que las micropartículas de
                hidroxiapatita de calcio se degradan de forma natural en iones
                de calcio y fosfato, que son metabolizados por el cuerpo de
                forma segura.
              </p>
            </li>
            <li>
              <p>
                Sin duda, todo esto la convierte en una técnica muy demandada en
                el ámbito de los tratamientos estéticos a día de hoy.
              </p>
            </li>
          </ul>
        </p>
      </>
    ),
    new_price: 89.99,
    old_price: 117.99,
  },
  {
    id: 6,
    thumb: touch_br,
    thumb_shape: featureThumbShape_1,
    title: "Touch BR",
    quantity: "5ml",
    desc: (
      <>
        <p>
          Compuesto por Péptidos biomiméticos, Complejo blanqueador XT80,
          Niacinamida, Vitamina C
        </p>
        <br />
        <p>
          Eficacía: mejora de la calidad de la piel y la luminosidad cutánea.
        </p>
        <br />
        <p>
          Este producto está indicado para el tratamiento de la piel con manchas
          de la edad, materia cutánea con discromía de origen hormonal
          (embarazo, menopausia), por exceso de exposición a la luz solar, o por
          envejecimiento cutáneo y para la revitalización e hidratación de la
          piel. Regula la síntesis de melanina y reduce la pigmentación, las
          manchas de la edad y las pecas.
        </p>
      </>
    ),
    new_price: 89.99,
    old_price: 117.99,
  },
];
const HomeOnefeatureProduct = ({ style }: any) => {
  return (
    <section
      id="paroller"
      className={`features-products ${style ? "inner-features-products" : ""}`}
    >
      <h2 className="title text-center">Toxinas Botulinicas</h2>
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        {features_product_data.map((item) => (
          <div key={item.id} className="features-products-wrap">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="features-products-thumb">
                  <div className="main-img">
                    <Image src={item.thumb} alt="img" />
                  </div>
                  {/* <Image
                    src={item.thumb_shape}
                    alt="img"
                    className="shape-img"
                  /> */}
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="features-product-content">
                  <h2 className="title">
                    <div>{item.title}</div>
                  </h2>
                  <h6 className="features-product-quantity">{item.quantity}</h6>
                  <div>{item.desc}</div>
                  <div className="features-product-bottom">
                    {/* <div
                      //   href="/shop-details"
                      className="eg-btn"
                    >
                      Shop Now
                    </div> */}
                    {/* <span className="price">
                      ${item.new_price}{" "}
                      <span className="old-price">${item.old_price}</span>
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <h2 className="title text-center">Acidos Hialurónicos</h2>
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        {features_product_data_two.map((item) => (
          <div key={item.id} className="features-products-wrap">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="features-products-thumb">
                  <div className="main-img">
                    <Image src={item.thumb} alt="img" />
                  </div>
                  {/* <Image
                    src={item.thumb_shape}
                    alt="img"
                    className="shape-img"
                  /> */}
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="features-product-content">
                  <h2 className="title">
                    <div>{item.title}</div>
                  </h2>
                  <h6 className="features-product-quantity">{item.quantity}</h6>
                  <div>{item.desc}</div>
                  <div className="features-product-bottom">
                    {/* <div
                      //   href="/shop-details"
                      className="eg-btn"
                    >
                      Shop Now
                    </div> */}
                    {/* <span className="price">
                      ${item.new_price}{" "}
                      <span className="old-price">${item.old_price}</span>
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <h2 className="title text-center">Biostimuladores</h2>
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        {features_product_data_three.map((item) => (
          <div key={item.id} className="features-products-wrap">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="features-products-thumb">
                  <div className="main-img">
                    <Image src={item.thumb} alt="img" />
                  </div>
                  {/* <Image
                    src={item.thumb_shape}
                    alt="img"
                    className="shape-img"
                  /> */}
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="features-product-content">
                  <h2 className="title">
                    <div>{item.title}</div>
                  </h2>
                  <h6 className="features-product-quantity">{item.quantity}</h6>
                  <div>{item.desc}</div>
                  <div className="features-product-bottom">
                    {/* <div
                      //   href="/shop-details"
                      className="eg-btn"
                    >
                      Shop Now
                    </div> */}
                    {/* <span className="price">
                      ${item.new_price}{" "}
                      <span className="old-price">${item.old_price}</span>
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="fp-shapes-wrap">
        <div className="fp-shape-one">
          <Image
            src={featureProduct_1}
            alt="shape"
            className="paroller"
            data-paroller-factor="0.25"
            data-paroller-factor-lg="0.20"
            data-paroller-factor-md="0.25"
            data-paroller-factor-sm="0.10"
            data-paroller-type="foreground"
            data-paroller-direction="vertical"
          />
        </div>
        <div className="fp-shape-two">
          <Image
            src={featureProduct_2}
            alt="shape"
            className="paroller"
            data-paroller-factor="-0.25"
            data-paroller-factor-lg="0.20"
            data-paroller-factor-md="0.25"
            data-paroller-factor-sm="0.10"
            data-paroller-type="foreground"
            data-paroller-direction="vertical"
          />
        </div>
        <div className="fp-shape-three">
          <Image
            src={featureProduct_3}
            alt="shape"
            className="paroller"
            data-paroller-factor="0.25"
            data-paroller-factor-lg="0.20"
            data-paroller-factor-md="0.25"
            data-paroller-factor-sm="0.10"
            data-paroller-type="foreground"
            data-paroller-direction="vertical"
          />
        </div>
      </div> */}
      <div className="fp-circle one"></div>
      <div className="fp-circle two"></div>
      <div className="fp-circle three"></div>
      <div className="fp-circle four"></div>
      <div className="fp-circle five"></div>
    </section>
  );
};

export default HomeOnefeatureProduct;
