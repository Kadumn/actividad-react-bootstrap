
function Perfil() {
  return (
    <section id="perfil" className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
              className="rounded-circle img-fluid shadow"
              style={{ width: "220px", height: "220px", objectFit: "cover" }}
              alt="Fotografía de perfil"
            />
          </div>

          <div className="col-md-8 text-center text-md-start mt-4 mt-md-0">
            <span className="badge bg-primary mb-2">Ingeniería de Sistemas</span>
            <h1 className="fw-bold">Jerónimo Larrotta León</h1>
            <h4 className="text-secondary">Desarrollador de Software</h4>
            <p className="lead">
              Estudiante de Ingeniería de Sistemas interesado en la tecnología,
              la programación y el desarrollo de soluciones digitales.
            </p>
            <p><i className="bi bi-geo-alt-fill"></i> Colombia</p>
            <p><i className="bi bi-envelope-fill"></i> jeronimo@email.com</p>
            <a href="mailto:jeronimo@email.com" className="btn btn-primary">
              <i className="bi bi-send"></i> Contactarme
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perfil;
