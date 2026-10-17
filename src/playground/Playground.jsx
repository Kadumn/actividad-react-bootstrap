
import Header from "./Header";
import Perfil from "./Perfil";
import Tarjeta from "./Tarjeta";
import DatoCurioso from "./DatoCurioso";
import Footer from "./Footer";

function Playground() {
  return (
    <>
      <Header />

      <main>
        <Perfil />

        <section className="container pb-4">
          <h2 className="text-center mb-4">
            Videojuegos destacados
          </h2>

          <div className="row justify-content-center">
            <Tarjeta />

            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title">Valorant</h3>
                  <p className="card-text">
                    Un juego competitivo que combina
                    estrategia, precisión y trabajo en equipo.
                  </p>
                  <span className="badge bg-danger">
                    Acción y estrategia
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title">Monster Hunter</h3>
                  <p className="card-text">
                    Aventuras en las que los jugadores
                    enfrentan criaturas y mejoran su equipo.
                  </p>
                  <span className="badge bg-primary">
                    Aventura
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <DatoCurioso />
      </main>

      <Footer />
    </>
  );
}

export default Playground;
