
function Footer() {
  return (
    <footer className="container-fluid bg-dark text-white text-center py-4">
      <h5 className="fw-bold">Jerónimo Larrotta León</h5>
      <p className="mb-2">Estudiante de Ingeniería de Sistemas</p>

      <div className="fs-4 mb-3">
        <a href="https://github.com/Kadumn" className="text-white mx-2">
          <i className="bi bi-github"></i>
        </a>
        <a href="mailto:jlarrotal@ufpso.edu.co" className="text-white mx-2">
          <i className="bi bi-envelope-fill"></i>
        </a>
        <a href="#perfil" className="text-white mx-2">
          <i className="bi bi-person-circle"></i>
        </a>
      </div>

      <p className="mb-0">
        © 2026 Jerónimo Larrotta León. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
