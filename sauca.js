/* Variables Globales */
let contadorCarrito = (elementosCarritos =
  JSON.parse(localStorage.getItem("carrito")) ?? []);

contadorCarrito.forEach((productos) => {
  document.getElementById("elementos_carrito").innerHTML += `<tr>
  <th scope="row">${productos.id}</th>
  <td>${productos.nombre}</td>
  <td>${productos.precio}</td>
  <td>${productos.category}</td>
  <td style="width: 20% !important;"><button class="btn btn-outline-success" id="eliminar_producto" type="button" style="width: 10rem!important;"> Eliminar Producto</td>
</tr>`;
});

/* Objetos */
let productos = [
  {
    id: 1,
    nombre: "Jabón MIX",
    descripcion: "Jabón artesanal MIX",
    precio: 400,
    category: "jabones",
    img: "../Sauca-Fetch/imagenes/jabon-artesanal.jpg",
  },
  {
    id: 2,
    nombre: "Shampoo Graso",
    descripcion: "Shampoo sólido para cabello normal a graso",
    precio: 700,
    category: "shampoos",
    img: "../Sauca-Fetch/imagenes/c-graso-ng.png",
  },
  {
    id: 3,
    nombre: "Shampoo Seco",
    descripcion: "Shampoo sólido para cabello normal a seco",
    precio: 700,
    category: "shampoos",
    img: "../Sauca-Fetch/imagenes/c-solido-ns.png",
  },
  {
    id: 4,
    nombre: "Jabón Artesanal",
    descripcion: "Jabón artesanal para pieles sensibles",
    precio: 360,
    category: "jabones",
    img: "../Sauca-Fetch/imagenes/jabonSensible.png",
  },
  {
    id: 5,
    nombre: "Jabón Exfoliante",
    descripcion:
      "Jabón artesanal exfoliante fuerte con carbón activado de coco y café. Elaborado con aceite de coco, oliva, almendras dulces y rosa mosqueta con hierbas aromáticas",
    precio: 460,
    category: "jabones",
    img: "../Sauca-Fetch/imagenes/jabon-exfoliante.png",
  },
  {
    id: 6,
    nombre: "Desodorante Sólido",
    descripcion:
      "Desodorante sólido para todos los sexos y edades. Apto para todo tipo de deportes y vida cotidiana. Elaborado con materias primas 100% naturales de manera 100% artesanal",
    precio: 600,
    category: "cosmeticos",
    img: "../Sauca-Fetch/imagenes/desodorante-solido.png",
  },
  {
    id: 7,
    nombre: "Unguento Mu",
    descripcion:
      "Ungüento MÜ ideal para aliviar dolores musculares y de articulaciones. Posee propiedades antiinflamatorias, calmantes y antimicrobianas. Elaborado con materias primas 100% naturales de manera 100% artesanal.",
    precio: 680,
    category: "cosmeticos",
    img: "../Sauca-Fetch/imagenes/unguento-mu.jpeg",
  },
  {
    id: 8,
    nombre: "Unguento Sauca",
    descripcion:
      "Ungüento SAUCA con propiedades cicatrizantes, antiinflamatorias, regenerativas, calmantes, expectorantes y antimicrobianas. Elaborado con materias primas 100% naturales de manera 100% artesanal.",
    precio: 650,
    category: "cosmeticos",
    img: "../Sauca-Fetch/imagenes/unguento.jpeg",
  },
  {
    id: 9,
    nombre: "Emulsión de Día",
    descripcion:
      "Emulsión de Día con propiedades anti-age, humectantes y regenerativas. Para aplicar en rostro y manos. Elaborada con materias primas 100% naturales de manera 100% artesanal.",
    precio: 950,
    category: "cosmeticos",
    img: "../Sauca-Fetch/imagenes/emulsion-dia.jpeg",
  },
  {
    id: 10,
    nombre: "Emulsión de Noche",
    descripcion:
      "Emulsión de Noche con propiedades anti-age y tonificantes. Suaviza manchas, arrugas y estrías. Para aplicar en rostro, manos y cuerpo. Elaborada con materias primas 100% naturales de manera 100% artesanal.",
    precio: 950,
    category: "cosmeticos",
    img: "../Sauca-Fetch/imagenes/emulsion-noche.jpeg",
  },
  {
    id: 11,
    nombre: "Dentífrico",
    descripcion:
      "Polvillo limpiador dental con carbón activado y aceite de coco, un toque de bentoita y bicarbonato de sodio. Sus aceites esenciales de naraja dulce, manzanilla, menta y salvia colaborar con el cuidado de los dientes y encías.",
    precio: 300,
    category: "cosmeticos",
    img: "../Sauca-Fetch/imagenes/dentrifico-sauca.jpeg",
  },
  {
    id: 12,
    nombre: "Roll On",
    descripcion:
      "Roll-on herbal contorno de ojos para suavizar ojeras, humectar comisura de labios, sienes y entrecejo. Sus propiedades aromaterapéuticas ayudan a reequilibarar los estados de ánimos especialmente si se aplica en sienes, nuca y muñecas con un suave masaje.",
    precio: 480,
    category: "cosmeticos",
    img: "../Sauca-Fetch/imagenes/roll-on.jpeg",
  },
];

/* Evento agregar al carrito y total carrito */

const cardProductos = document.getElementById("card_productos");

productos.forEach((product) => {
  cardProductos.innerHTML += `
<div id="card_productos" id="productos${product.id}">
  <img src="${product.img}" class="card-img-top">
  <div class="card-body">
    <h2 class="card-title">${product.nombre}</h2>
    <p class="card-text">${product.descripcion}</p>
    <p class="card-price">$${product.precio}</p>
    <button class="btn btn-outline-success" id="boton_carrito" type="button" style="width: 5rem" onclick="agregarAlCarrito(${product.id})">Agregar al Carrito</button> 
  </div>
</div>`;
});

/* Filtrar productos por categoría */

function filtrarProductosCategoria(category) {
  document.getElementById("card_productos").innerHTML = "";
  productoCategoria = document.getElementById("card_productos");
  const productosFiltrados = productos.filter(
    (producto) => producto.category === category
  );
  productosFiltrados.forEach((product) => {
    productoCategoria.innerHTML += `
  <div id="card_productos" id="productos${product.id}">
    <img src="${product.img}" class="card-img-top">
    <div class="card-body">
      <h2 class="card-title">${product.nombre}</h2>
      <p class="card-text">${product.descripcion}</p>
      <p class="card-text">$${product.precio}</p>
      <button class="btn btn-outline-success" id="boton_carrito" type="button" style="width: 5rem" onclick="agregarAlCarrito(${product.id})">Agregar al Carrito</button> 
    </div>
  </div>`;
  });
}

/* Agregar al carrito */

function agregarAlCarrito(id) {
  let agregados = productos.find((product) => product.id === id);
  contadorCarrito.push(agregados);
  //localStorage.setItem("carrito", JSON.stringify(contadorCarrito));
  actualizarCarrito();
  Swal.fire({
    title: `Agregaste ${agregados.nombre} al carrito`,
    icon: "success",
    confirmButtonText: "Cool",
  });
  console.log(contadorCarrito);
  document.getElementById("elementos_carrito").innerHTML = "";
  contadorCarrito.forEach((productos) => {
    document.getElementById(
      "elementos_carrito"
    ).innerHTML += `<tr id="producto_carrito_${productos.id}">
    <th scope="row">${productos.id}</th>
    <td>${productos.nombre}</td>
    <td>${productos.precio}</td>
    <td>${productos.category}</td>
    <td><button 
          class="btn btn-outline-success"
          type="button"
          style="width: 2rem"
          onClick="borrarProducto(${productos.id})"
        > Eliminar Producto</td>
  </tr>`;
    actualizarCarrito();
  });
}

function actualizarCarrito() {
  let totalCart = document.getElementById("total_carrito");
  totalCart.innerHTML = `<p>$${sumarCarrito(contadorCarrito)}</p>
  `;
}

function sumarCarrito(contadorCarrito) {
  let preciosCarritos = 0;
  for (i = 0; i < contadorCarrito.length; i++) {
    preciosCarritos += contadorCarrito[i].precio;
  }
  return preciosCarritos;
}

const botonCompra = document.getElementById("carrito");

botonCompra.addEventListener("click", () => {
  Compra(contadorCarrito);
});

function Compra() {
  let totalCompra = 0;
  if (contadorCarrito.length > 0) {
    for (i = 0; i < contadorCarrito.length; i++) {
      totalCompra += Number(contadorCarrito[i].precio);
    }
    console.log(contadorCarrito);
    Swal.fire({
      title: `Tu compra es de $ ${totalCompra.toFixed(2)}`,
      icon: "success",
      confirmButtonText: "Cool",
    });
    totalCompra > 5000 &&
      Swal.fire({
        title: `Tu compra supera los $5000 pesos. El envio es gratis!`,
        confirmButtonText: "Cool",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
  } else {
  }
}

/* Borrar carrito */

const botonBorrar = document.getElementById("borrar_carrito");
botonBorrar.addEventListener("click", () => {
  borrarCarrito(contadorCarrito);
});

function borrarCarrito() {
  if (contadorCarrito.length > 0) {
    contadorCarrito.splice(0, contadorCarrito.length);
    document.getElementById("elementos_carrito").innerHTML = "";
    actualizarCarrito();
    //localStorage.clear();
    console.log(contadorCarrito);
    Swal.fire({
      title: `Eliminaste los productos del carrito`,
      icon: "warning",
    });
  } else {
    return Swal.fire({
      title: `No tienes productos en el carrito`,
      icon: "question",
      confirmButtonText: "A comprar!",
    });
  }
}

function borrarProducto(id) {
  contadorCarrito = contadorCarrito.filter((producto) => producto.id !== id);
  console.log(contadorCarrito);
  document.getElementById("producto_carrito_" + id).remove();
  actualizarCarrito();
}
/* Eventos Creando Cards*/

const buscarProductosForm = document.getElementById("buscar_productos_form");
const buscarProductosInput = document.getElementById("buscar_productos_input");

buscarProductosForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = buscarProductosInput.value;
  console.log(searchValue);
  productosSearch = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
  );
});

/* Agregando FETCH */

const apiKey = "097d49605d295fb53035ecf095dc53fd";
const inputVal = "Salta";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

let acumulador = document.getElementById("weather_section");
let temperaturaIcono = document.getElementById("iconoAnimado");

const tiempoSalta = () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((informacionClima) => {
      console.log(informacionClima);

      let temperatura = informacionClima.main;
      let clima = informacionClima.weather[0].main.toUpperCase();
      console.log(clima);

      acumulador.innerHTML = ``;
      acumulador.innerHTML += `
        <div class="card_weather">
          <h2>${Math.round(temperatura.temp)}ºC</h2>
          <img src="./animated/day.svg"></img>
          <h1>${inputVal}</h1>
          
        </div>
      `;
     /*
     switch (informacionClima.weather[0].main) {
        case "Clear":
          temperaturaIcono.src = "../Sauca-Fetch/animated/day.svg";
          console.log("Limpio");
          break;

        case "Drizzle":
          temperaturaIcono.src = "../Sauca-Fetch/animated/rainy-2.svg";
          console.log("Llovizna");
          break;

        case "Thunderstorm":
          temperaturaIcono.src = "../Sauca-Fetch/animated/thunder.svg";
          console.log("Tormenta");
          break;

        case "Rain":
          temperaturaIcono.src = "../Sauca-Fetch/animated/rainy-7.svg";
          console.log("Lluvia");
          break;

        case "Snow":
          temperaturaIcono.src = "../Sauca-Fetch/animated/day.svg";
          console.log("Nieve");
          break;

        case "Clouds":
          temperaturaIcono.src = "../Sauca-Fetch/animated/cloudy-day-1.svg";
          console.log("Nubes");
          break;

        default:
      }
*/

    });
};
tiempoSalta();
