import Image from "next/image";

import logo_1 from "@/assets/img/icons/close.png";
import Link from "next/link";

const HeaderOffcanvas = ({ offCanvas, setOffCanvas }: any) => {
  return (
    <>
      <div className={`${offCanvas ? "offcanvas-menu-visible" : ""}`}>
        <div className="offCanvas-wrap">
          <div className="offCanvas-toggle" onClick={() => setOffCanvas(false)}>
            <Image src={logo_1} alt="icon" />
          </div>
          <div className="offCanvas-body">
            <div className="offCanvas-content">
              <h3 className="title">
                LOGRAR UNA{" "}
                <span style={{ color: "#1b4292" }}>
                  {" "}
                  PIEL RADIANTE Y JOVEN{" "}
                </span>{" "}
                NO ES UNA CUESTIÓN DE SUERTE, SINO DE ELECCIÓN DE LOS PRODUCTOS
                CORRECTOS.
              </h3>
              <p>
                Descubre nuestros ácidos hialurónicos y bioestimulantes,
                diseñados para rejuvenecer y revitalizar tu piel, con la
                seguridad y eficacia que solo WELLCARE Chile puede ofrecer.
              </p>
            </div>
            <div className="offcanvas-contact">
              <h4 className="number">+56 9 36400252</h4>
              <h4 className="email">contacto@wellcarechile.cl</h4>
              <p>
                Santiago, <br /> Región Metropolitana, Chile
              </p>
              <ul className="offcanvas-social list-wrap">
                <li >
                  <Link href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          onClick={() => setOffCanvas(false)}
          className="offCanvas-overlay"
        ></div>
      </div>
    </>
  );
};

export default HeaderOffcanvas;
