---
title: "Menú Contextual en HTML5"
description: "Menú contextual en HTML5: crea una alternativa moderna con JavaScript, controla el clic derecho y añade opciones accesibles mediante teclado."
date: 2012-02-14
updatedDate: 2026-09-29
tags: ["html5","preventdefault","addeventlistener","accesibilidad","mouse","keyboard"]
slug: html/elementos-interactivos/menu-contextual-en-html5
type: doc
topic: html
id: 2e3bafbb-b740-4c40-ac74-c488c0dad7da
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Basicos/contextmenu/contextmenu.html
---

Un **menú contextual** es un conjunto de acciones asociado a una zona concreta de una página. Suele aparecer cuando el usuario pulsa el botón derecho del ratón, utiliza la tecla de menú contextual o ejecuta una combinación equivalente desde el teclado.


El artículo original proponía **crear un menú contextual en HTML5** mediante `<menu type="context">`, elementos `<menuitem>` y el atributo `contextmenu`. Ese mecanismo llegó a tener soporte experimental en versiones antiguas de Firefox, pero en la plataforma web actual esas características son obsoletas y no deben utilizarse en proyectos nuevos.


La alternativa moderna consiste en escuchar el evento `contextmenu` con [JavaScript](https://lineadecodigo.com/javascript/), cancelar el menú predeterminado mediante `preventDefault()` y mostrar un componente propio construido con elementos HTML compatibles.


## Qué es un menú contextual


Un menú contextual ofrece comandos relacionados con el elemento sobre el que se abre. Por ejemplo, puede permitir cambiar un color, copiar un valor, editar un registro o ejecutar una acción específica sobre una imagen.


No conviene sustituir el menú del navegador en toda la página. Este incluye acciones conocidas —como copiar, abrir un enlace o inspeccionar el contenido— que muchas personas esperan encontrar. El menú personalizado debe limitarse a una zona donde aporte una función clara y debe ofrecer otra forma visible de ejecutar las mismas acciones.


## El enfoque antiguo de HTML5


La propuesta original definía el menú de esta forma:


```html
<menu type="context" id="colorMenu">
  <menuitem label="Rojo" id="rojo" icon="rojo.png"></menuitem>
  <menuitem label="Verde" id="verde" icon="verde.png"></menuitem>
  <menuitem label="Azul" id="azul" icon="azul.png"></menuitem>
</menu>
```


Después se asociaba a una sección o a un campo mediante el atributo `contextmenu`:


```html
<section contextmenu="colorMenu" id="miseccion"></section>

<label for="color">Color:</label>
<input id="color" contextmenu="colorMenu" type="text" />
```


Este ejemplo se conserva como referencia histórica, pero `<menuitem>`, `type="context"` y el atributo `contextmenu` están obsoletos. Mantenerlos produciría un resultado inconsistente o simplemente no mostraría el menú en los navegadores actuales.


## Crear la estructura del menú contextual


El nuevo ejemplo conserva la intención del original: seleccionar un color desde un menú contextual y escribirlo en un campo. La zona interactiva utiliza `tabindex="0"` para que también pueda recibir el foco mediante teclado.


```html
<label for="color">Color seleccionado:</label>
<input id="color" type="text" readonly />

<div
  id="zona-contextual"
  class="zona-contextual"
  tabindex="0"
  aria-describedby="ayuda-contextual"
>
  Abre el menú contextual para elegir un color.
</div>

<p id="ayuda-contextual">
  Utiliza el botón derecho, la tecla de menú contextual o Mayús + F10.
</p>

<div id="menu-contextual" class="menu-contextual" role="menu" hidden>
  <button type="button" role="menuitem" data-color="Rojo">Rojo</button>
  <button type="button" role="menuitem" data-color="Verde">Verde</button>
  <button type="button" role="menuitem" data-color="Azul">Azul</button>
</div>
```


Los controles son elementos `<button>` reales. Así conservan su semántica, se pueden activar con teclado y no necesitan simular el comportamiento básico de un botón mediante un elemento genérico.


El atributo `role="menu"` identifica el contenedor y `role="menuitem"` define cada comando. Cuando se adopta este patrón también es necesario gestionar el foco y la navegación por teclado, como veremos más adelante.


## Dar estilo al menú


El menú se coloca con `position: fixed` porque las coordenadas `clientX` y `clientY` del evento se calculan respecto a la ventana visible. Los siguientes estilos en [CSS](https://lineadecodigo.com/css/) crean un componente sencillo:


```css
.zona-contextual {
  max-width: 32rem;
  margin-top: 1rem;
  padding: 2rem;
  border: 2px dashed #64748b;
  border-radius: 0.5rem;
  background: #f8fafc;
}

.zona-contextual:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 3px;
}

.menu-contextual {
  position: fixed;
  z-index: 1000;
  min-width: 10rem;
  padding: 0.35rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  background: #ffffff;
  box-shadow: 0 0.75rem 2rem rgb(15 23 42 / 20%);
}

.menu-contextual button {
  display: block;
  width: 100%;
  padding: 0.6rem 0.8rem;
  border: 0;
  border-radius: 0.3rem;
  background: transparent;
  text-align: left;
  cursor: pointer;
}

.menu-contextual button:hover,
.menu-contextual button:focus-visible {
  background: #e2e8f0;
  outline: none;
}

.menu-contextual[hidden] {
  display: none;
}
```


## Abrir el menú con el evento contextmenu


El evento `contextmenu` se dispara cuando el usuario intenta abrir un menú contextual. Dentro del manejador llamamos a `event.preventDefault()` para evitar el menú nativo únicamente en la zona elegida.


```javascript
const zona = document.getElementById("zona-contextual");
const menu = document.getElementById("menu-contextual");
const campo = document.getElementById("color");
const opciones = [...menu.querySelectorAll('[role="menuitem"]')];

function ocultarMenu() {
  menu.hidden = true;
}

function mostrarMenu(x, y) {
  menu.hidden = false;

  const margen = 8;
  const rect = menu.getBoundingClientRect();
  const izquierda = Math.max(
    margen,
    Math.min(x, window.innerWidth - rect.width - margen)
  );
  const arriba = Math.max(
    margen,
    Math.min(y, window.innerHeight - rect.height - margen)
  );

  menu.style.left = `${izquierda}px`;
  menu.style.top = `${arriba}px`;
  opciones[0].focus();
}

zona.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  const rect = zona.getBoundingClientRect();
  const x = event.clientX || rect.left;
  const y = event.clientY || rect.bottom;

  mostrarMenu(x, y);
});
```


El cálculo con `getBoundingClientRect()` evita que el componente quede fuera de la ventana cuando el usuario abre el menú cerca de un borde. Si el evento no aporta coordenadas —algo posible al utilizar el teclado— se toma como referencia la posición de la zona.


## Ejecutar las opciones del menú


En lugar de depender de propiedades específicas del antiguo `<menuitem>`, cada botón guarda el color en un atributo `data-color`. El valor se recupera mediante `dataset.color`:


```javascript
opciones.forEach((opcion) => {
  opcion.addEventListener("click", () => {
    const color = opcion.dataset.color;

    campo.value = color;
    zona.style.backgroundColor = color.toLowerCase();
    ocultarMenu();
    zona.focus();
  });
});
```


Esta parte conserva el comportamiento del ejemplo original: la opción pulsada actualiza el campo. Además, aplica el color seleccionado al fondo de la zona para que el resultado sea visible de inmediato.


## Añadir navegación mediante teclado


Un menú personalizado debe permitir recorrer sus opciones y cerrarse sin utilizar el ratón. El siguiente manejador admite las teclas de dirección, `Home`, `End` y `Escape`:


```javascript
menu.addEventListener("keydown", (event) => {
  const indice = opciones.indexOf(document.activeElement);
  let siguiente = indice;

  switch (event.key) {
    case "ArrowDown":
      siguiente = (indice + 1) % opciones.length;
      break;
    case "ArrowUp":
      siguiente = (indice - 1 + opciones.length) % opciones.length;
      break;
    case "Home":
      siguiente = 0;
      break;
    case "End":
      siguiente = opciones.length - 1;
      break;
    case "Escape":
      ocultarMenu();
      zona.focus();
      return;
    default:
      return;
  }

  event.preventDefault();
  opciones[siguiente].focus();
});
```


También debemos ocultarlo cuando el usuario pulsa fuera, desplaza la página o cambia el tamaño de la ventana:


```javascript
document.addEventListener("pointerdown", (event) => {
  if (!menu.contains(event.target)) {
    ocultarMenu();
  }
});

window.addEventListener("scroll", ocultarMenu, true);
window.addEventListener("resize", ocultarMenu);
window.addEventListener("blur", ocultarMenu);
```


## Ofrecer una alternativa visible


El clic derecho y la tecla de menú contextual no son evidentes para todas las personas. Una opción robusta es añadir un botón visible que abra el mismo componente:


```html
<button type="button" id="abrir-menu">Elegir color</button>
```


```javascript
const botonAbrir = document.getElementById("abrir-menu");

botonAbrir.addEventListener("click", () => {
  const rect = botonAbrir.getBoundingClientRect();
  mostrarMenu(rect.left, rect.bottom + 4);
});
```


Esta alternativa mejora la descubribilidad, funciona en pantallas táctiles y permite acceder a las acciones sin depender exclusivamente del menú contextual.


## Consideraciones de accesibilidad y uso


Al implementar un menú contextual en HTML5 conviene seguir estas recomendaciones:

- Limitar `preventDefault()` a la zona que realmente necesita acciones personalizadas.
- No bloquear el menú del navegador en toda la página.
- Utilizar controles nativos como `<button>` para cada acción.
- Mover el foco a la primera opción cuando se abre el menú.
- Permitir la navegación con las flechas y el cierre con `Escape`.
- Devolver el foco al elemento de origen después de seleccionar o cerrar.
- Ofrecer un botón visible con las mismas acciones.
- Comprobar el comportamiento con ratón, teclado y dispositivos táctiles.

En Firefox, la combinación `Shift` más clic derecho puede abrir directamente el menú nativo sin disparar `contextmenu`. Este comportamiento actúa como una vía de escape para que el usuario conserve acceso a las funciones del navegador.


Con este enfoque se mantiene la intención del artículo original —mostrar acciones específicas mediante el botón derecho—, pero se reemplazan los elementos obsoletos por eventos, controles y patrones compatibles con el desarrollo web actual.

