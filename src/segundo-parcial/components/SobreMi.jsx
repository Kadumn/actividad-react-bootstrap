
function SobreMi() {
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
                <p>Programación, videojuegos, tecnología, diseño web
                  e innovación digital.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-danger">
              <div className="card-body">
                <h4 className="text-danger">Fortalezas</h4>
                <p>Responsabilidad, trabajo en equipo, pensamiento
                  lógico, creatividad y aprendizaje continuo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
