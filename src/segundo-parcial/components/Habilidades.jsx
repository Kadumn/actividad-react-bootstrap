
function Habilidades() {
  const habilidades = [
    { nombre: "HTML y CSS", nivel: 80, color: "primary" },
    { nombre: "JavaScript", nivel: 65, color: "warning" },
    { nombre: "React", nivel: 55, color: "success" },
    { nombre: "Bootstrap", nivel: 70, color: "danger" }
  ];

  return (
    <section id="habilidades" className="container-fluid py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Mis habilidades</h2>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h4 className="text-primary">Habilidades técnicas</h4>

                {habilidades.map((item, index) => (
                  <div className="mb-3" key={index}>
                    <div className="d-flex justify-content-between">
                      <span>{item.nombre}</span>
                      <span>{item.nivel}%</span>
                    </div>
                    <div className="progress">
                      <div
                        className={`progress-bar bg-${item.color}`}
                        style={{ width: `${item.nivel}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h4 className="text-success">Habilidades blandas</h4>
                <span className="badge bg-primary m-2">Comunicación</span>
                <span className="badge bg-success m-2">Trabajo en equipo</span>
                <span className="badge bg-warning text-dark m-2">Creatividad</span>
                <span className="badge bg-danger m-2">Responsabilidad</span>
                <span className="badge bg-info text-dark m-2">Adaptabilidad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
