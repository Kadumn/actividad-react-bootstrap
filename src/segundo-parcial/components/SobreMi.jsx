
import { useState } from "react";

function SobreMi() {
  const [enviado, setEnviado] = useState(false);

  function enviarFormulario(e) {
    e.preventDefault();

    const datos = new FormData(e.target);
    const nombre = datos.get("nombre");
    const correo = datos.get("correo");
    const mensaje = datos.get("mensaje");

    const asunto = encodeURIComponent("Contacto desde mi hoja de vida");
    const cuerpo = encodeURIComponent(
      `Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`
    );

    setEnviado(true);
    window.location.href =
      `mailto:jlarrotal@ufpso.edu.co?subject=${asunto}&body=${cuerpo}`;
  }

  return (
    <section id="sobre-mi" className="container-fluid py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Sobre mí</h2>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-primary">
              <div className="card-body">
                <h4 className="text-primary">Descripción personal</h4>
                <p>
                  Soy una persona responsable, creativa y comprometida
                  con mi formación profesional. Me gusta aprender
                  nuevas tecnologías y enfrentar retos.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-success">
              <div className="card-body">
                <h4 className="text-success">Objetivos profesionales</h4>
                <p>
                  Desarrollar mis conocimientos en programación,
                  participar en proyectos tecnológicos y crecer
                  profesionalmente en el área del software.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-warning">
              <div className="card-body">
                <h4 className="text-warning">Intereses</h4>
                <p>
                  Programación, videojuegos, tecnología,
                  diseño web e innovación digital.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-danger">
              <div className="card-body">
                <h4 className="text-danger">Fortalezas</h4>
                <p>
                  Responsabilidad, trabajo en equipo,
                  pensamiento lógico, creatividad y aprendizaje continuo.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="text-primary mb-3">
                  <i className="bi bi-envelope-fill"></i> Formulario de contacto
                </h4>

                <form onSubmit={enviarFormulario}>
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                      type="text"
                      name="nombre"
                      className="form-control"
                      placeholder="Escribe tu nombre"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Correo electrónico</label>
                    <input
                      type="email"
                      name="correo"
                      className="form-control"
                      placeholder="ejemplo@correo.com"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Mensaje</label>
                    <textarea
                      name="mensaje"
                      className="form-control"
                      rows="4"
                      placeholder="Escribe tu mensaje"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    <i className="bi bi-send-fill"></i> Enviar mensaje
                  </button>
                </form>

                {enviado && (
                  <p className="text-success mt-3">
                    Se ha preparado tu mensaje para enviarlo por correo.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
