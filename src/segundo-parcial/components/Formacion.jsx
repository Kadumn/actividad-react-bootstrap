
function Formacion() {
  return (
    <section id="formacion" className="container-fluid bg-light py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Formación académica</h2>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <i className="bi bi-mortarboard-fill fs-1 text-primary"></i>
                <h5 className="card-title mt-3">Ingeniería de Sistemas</h5>
                <p className="card-text">Universidad Francisco de Paula Santander Ocaña</p>
                <span className="badge bg-primary">En curso</span>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <i className="bi bi-pc-display fs-1 text-success"></i>
                <h5 className="card-title mt-3">Formación complementaria</h5>
                <p className="card-text">Fundamentos de programación y desarrollo web.</p>
                <span className="badge bg-success">En aprendizaje</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Formacion;
