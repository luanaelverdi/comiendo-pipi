import AbstractView from "./AbstractView.js";


export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Inicio');
    }

    async init() {
        const appContainer = document.getElementById('app');
        appContainer.innerHTML = VIEW_CONTENT;
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'public/css/styles.css'; 
        document.head.appendChild(link);
    }
}

const VIEW_CONTENT = `

    <div class="container-view">
    <header class="header">

        <div class="menu container">
            <input type="checkbox" id="menu">
            <label for="menu">
                <img src="public/images/menu.png" class="menu-icono" alt="menu">
            </label>
            <nav class="navbar">
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#productos">Productos</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </div>
        <div class="header-content container" id="inicio">
            <h1>Comiendo con pipi</h1>
            <p class="txt-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, iusto optio. Fuga
                nemo itaque quasi
                error temporibus sapiente molestias consequuntur mollitia aspernatur minus. Doloribus blanditiis, nam
                voluptas quisquam eum ab.
            </p>
        </div>

    </header>

    <section class="cake">

        <div class="cake-contact container">
            <h2 class="title-2">Los postres más populares</h2>
            <p class="txt-p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi itaque similique provident, reiciendis
                debitis natus necessitatibus unde repellat, ab assumenda consequuntur, vero molestiae incidunt quae
                beatae neque? Eum, culpa eos?

            </p>
            <div class="cake-group">
                <div class="cake-1">
                    <img src="public/images/postre1.avif" alt="torta selva negra">
                    <h3 class="title-3">Selva negra</h3>
                    <p class="txt-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit maxime voluptas
                        aliquam fugiat,
                        aperiam aspernatur deserunt necessitatibus officia repellendus eaque non autem eveniet ab ullam
                        itaque dicta doloremque doloribus commodi.</p>
                </div>
                <div class="cake-1">
                    <img src="public/images/postre2.avif" alt="chessecake">
                    <h3 class="title-3">Chessecake</h3>
                    <p class="txt-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit maxime voluptas
                        aliquam fugiat,
                        aperiam aspernatur deserunt necessitatibus officia repellendus eaque non autem eveniet ab ullam
                        itaque dicta doloremque doloribus commodi.</p>
                </div>
                <div class="cake-1">
                    <img src="public/images/postre3.avif" alt="brownie">
                    <h3 class="title-3">Brownie</h3>
                    <p class="txt-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit maxime voluptas
                        aliquam fugiat,
                        aperiam aspernatur deserunt necessitatibus officia repellendus eaque non autem eveniet ab ullam
                        itaque dicta doloremque doloribus commodi.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="services" id="servicios">
        <div class="services-content container">
            <h2 class="title-2">Servicios de pastelería</h2>
            <p class="txt-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, iusto optio. Fuga
                nemo itaque quasi error temporibus sapiente molestias consequuntur mollitia aspernatur minus. Doloribus
                blanditiis, nam voluptas quisquam eum ab.</p>
            <div class="services-group">
                <div class="services-1">
                    <img src="public/images/servicio1.avif" alt="s1">
                    <h3 class="title-3">Muffins</h3>
                    <p class="txt-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae commodi
                        asperiores magnam,
                        autem dolor neque. Incidunt excepturi error suscipit?</p>
                </div>
                <div class="services-1">
                    <img src="public/images/servicio2.avif" alt="s1">
                    <h3 class="title-3">Masitas dulces</h3>
                    <p class="txt-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, debitis?
                        Dolorem quisquam
                        reprehenderit ut in.</p>
                </div>
                <div class="services-1">
                    <img src="public/images/servicio3.avif" alt="s1">
                    <h3 class="title-3">Helados frutales</h3>
                    <p class="txt-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, natus?</p>
                </div>

            </div>
        </div>
    </section>


    <section class="productos" id="productos">
        <h2 class="title-2">Todos los productos</h2>
        <div class="blog-content container">
            <div class="blog-1">
                <img src="public/images/torta-clasica.avif" alt="">
                <h3 class="title-3">Torta clásica</h3>
                <p class="txt-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium alias aliquam
                    commodi
                    perspiciatis porro quae nesciunt voluptatum, voluptates sapiente obcaecati.</p>
            </div>
            <div class="blog-1">
                <img src="public/images/torta-manzana.avif" alt="">
                <h3 class="title-3">Torta manzana</h3>
                <p class="txt-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium alias aliquam
                    commodi
                    perspiciatis porro quae nesciunt voluptatum, voluptates sapiente obcaecati.</p>
            </div>
            <div class="blog-1">
                <img src="public/images/torta-oreo.jpg" alt="">
                <h3 class="title-3">Torta oreo</h3>
                <p class="txt-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium alias aliquam
                    commodi
                    perspiciatis porro quae nesciunt voluptatum, voluptates sapiente obcaecati.</p>
            </div>
            <div class="blog-1">
                <img src="public/images/choco-torta.jpg" alt="">
                <h3 class="title-3">Chocotorta</h3>
                <p class="txt-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium alias aliquam
                    commodi
                    perspiciatis porro quae nesciunt voluptatum, voluptates sapiente obcaecati.</p>
            </div>
            <div class="blog-1">
                <img src="public/images/tarta-coco.jpg" alt="">
                <h3 class="title-3">Tarta de coco</h3>
                <p class="txt-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium alias aliquam
                    commodi
                    perspiciatis porro quae nesciunt voluptatum, voluptates sapiente obcaecati.</p>
            </div>
            <div class="blog-1">
                <img src="public/images/tarta-frutilla.jpg" alt="">
                <h3 class="title-3">Tarta frutales</h3>
                <p class="txt-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium alias aliquam
                    commodi
                    perspiciatis porro quae nesciunt voluptatum, voluptates sapiente obcaecati.</p>
            </div>
            <div class="blog-1">
                <img src="public/images/tarta-toffe.jpg" alt="">
                <h3 class="title-3">Tarta toffe</h3>
                <p class="txt-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium alias aliquam
                    commodi
                    perspiciatis porro quae nesciunt voluptatum, voluptates sapiente obcaecati.</p>
            </div>
        </div>
    </section>

    <footer class="footer" id="contacto">
        <div class="footer-content container">
            <div class="medios-pago">
                <h3 class="title-3">Medios de pago</h3>
                <ul>
                    <li><img src="public/images/transferencias.png" alt="transferencias" class="icon">Transferencias</li>
                    <li><img src="public/images/tarjeta-credito.png" alt="tarjeta-credito" class="icon">Tarjeta de crédito</li>
                    <li><img src="public/images/tarjeta-debito.png" alt="tarjeta-debito" class="icon">Tarjeta de débito</li>
                    <li><img src="public/images/efectivo.png" alt="efectivo" class="icon">Efectivo</li>
            </div>
            <div class="contacto">
                <h3 class="title-3">Contacto</h3>
                <ul>
                    <li><img src="public/images/whatsapp_3536445.png" alt="whatsapp" class="icon"><a href="https://api.whatsapp.com/send?phone=1168068390&text=Hola%20como%20estas%20%3F'">Celular: 11 54 65 78 12</a></li>
                    <li><img src="public/images/instagram.png" alt="instagram" class="icon"><a href="https://www.instagram.com/comiendoconpipi/">Instagram: comiendoconpipi</a></li>
                    <li><img src="public/images/facebook.png" alt="facebook" class="icon"><a href="https://www.facebook.com/luanaelverdi/">Facebook: comiendoconpipi</a></li>
                    <li><img src="public/images/correo.png" alt="correo" class="icon"><a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=luanaelverdi@gmail.com">Correo: comiendoconpipi@gmail.com</a></li>
                </ul>
            </div>
        </div>
    </footer>

    </div>
`;