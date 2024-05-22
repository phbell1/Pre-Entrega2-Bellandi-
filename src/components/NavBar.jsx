import './NavBar.css';
import ListaComponente from "./ListaComponente";
import CartWidget from './CartWidget';
export default function NavBar() {
    return (
        <>
            <div className="contMenu">
                <h1>Vivero Green House</h1>
                <nav className="navMenu">
                    <ul>
                        <ListaComponente seccion="Inicio" />
                        <ListaComponente seccion="Plantas Interior" />
                        <ListaComponente seccion="Plantas Exterior" />
                        <ListaComponente seccion="Maceteria" />
                        <ListaComponente seccion="Contacto" />
                        <CartWidget />
                    </ul>
                </nav>
            </div>

        </>
    );
}


