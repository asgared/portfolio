import Link from "next/link";
function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
            <Link className="navbar-brand" href="/">Univerzoo</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" href="/about">Acerca de Nosotros</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" href="/services">Servicios</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navigation