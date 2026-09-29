---
title: "Gestionar estados del Historial con HTML5"
description: "Gestionar estados del Historial con HTML5: usa pushState, replaceState y popstate para crear navegación fiable en aplicaciones SPA sin recargar la página."
date: 2019-01-11
updatedDate: 2026-09-29
tags: ["history","pushstate","replacestate","javascript","ajax"]
slug: webapi/history/gestionar-estados-del-historial-con-html5
type: doc
topic: webapi
id: f209b703-18ab-4de1-97b4-4d5dc33f8d9e
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/History%20API/history-states.html
---

**Gestionar estados del Historial con HTML5** permite que una aplicación cambie de vista y actualice la `URL` sin recargar completamente el documento. Esta capacidad es especialmente útil en aplicaciones `SPA` (_Single Page Application_), donde el contenido se obtiene o genera de forma asíncrona, pero el usuario espera que los botones Atrás y Adelante del navegador sigan funcionando.


Tradicionalmente, el objeto `history` permitía recorrer las entradas ya existentes mediante métodos como `history.go()`, `history.forward()` y `history.back()`. El `History API` amplía este comportamiento con `pushState()`, `replaceState()` y el evento `popstate`, que permiten asociar datos a cada entrada y reconstruir la interfaz cuando cambia la posición del historial.


## Qué es un estado del historial


Un estado representa una vista o situación navegable dentro de la aplicación. Por ejemplo, una tienda puede mostrar una categoría, una página de resultados o la ficha de un producto sin cargar un documento nuevo. Cada una de esas vistas puede tener:

- Una `URL` propia que el usuario puede copiar o guardar.
- Un objeto con los datos mínimos necesarios para reconstruir la interfaz.
- Una entrada en el historial de sesión del navegador.

Antes de esta API era habitual cambiar únicamente el fragmento `hash` de `window.location`. Ese enfoque sigue siendo válido en determinados casos, pero `pushState()` permite utilizar rutas, parámetros de consulta y fragmentos sin provocar por sí mismo una recarga.


## Añadir un estado con pushState


La sintaxis actual del método es:


```javascript
history.pushState(estado, "", url);
```


Sus parámetros son:

- `estado`: objeto asociado a la nueva entrada del historial. Debe poder serializarse mediante el algoritmo de clonación estructurada.
- `""`: segundo argumento conservado por compatibilidad histórica. No se utiliza para establecer el título del documento, por lo que se recomienda pasar una cadena vacía.
- `url`: dirección opcional que se mostrará en la barra del navegador. Debe pertenecer al mismo origen que la página actual.

El siguiente ejemplo añade una vista correspondiente a la segunda página de resultados:


```javascript
const estado = {
  pagina: 2,
  producto: "portatiles",
  lugar: "madrid"
};

history.pushState(
  estado,
  "",
  "/productos/portatiles?pagina=2&lugar=madrid"
);
```


El método `pushState()` añade una entrada nueva, pero no descarga el recurso indicado por la `URL`, no recarga el documento y tampoco dispara el evento `popstate`. La aplicación debe actualizar la interfaz de forma explícita.


## Recuperar el estado actual


La propiedad `history.state` devuelve una copia del objeto asociado a la entrada activa o `null` si no existe ningún estado:


```javascript
console.log(history.state);
```


Si necesitamos mostrarlo en formato `JSON` para depuración, podemos usar:


```javascript
console.log(JSON.stringify(history.state));
```


No conviene almacenar objetos muy grandes, información sensible ni recursos que no puedan clonarse. El estado debe contener únicamente los datos necesarios para identificar o reconstruir la vista; el resto puede obtenerse desde la aplicación o una `API`.


## Sustituir la entrada actual con replaceState


El método `history.replaceState()` tiene los mismos argumentos que `pushState()`, pero modifica la entrada actual en lugar de crear una nueva:


```javascript
history.replaceState(
  { pagina: 1, producto: "portatiles" },
  "",
  "/productos/portatiles?pagina=1"
);
```


Resulta útil para:

- Asociar un estado a la entrada inicial de la aplicación.
- Corregir o normalizar la `URL` actual.
- Actualizar filtros sin añadir pasos innecesarios al historial.
- Evitar que el botón Atrás recorra cambios que no representan una navegación real.

Una práctica recomendable en una `SPA` es inicializar la entrada actual al cargar la aplicación:


```javascript
if (history.state === null) {
  history.replaceState(
    { vista: "inicio" },
    "",
    window.location.href
  );
}
```


## Responder a Atrás y Adelante con popstate


Cuando el usuario activa otra entrada mediante los botones Atrás o Adelante, el navegador dispara el evento `popstate`. Su propiedad `event.state` contiene una copia del estado asociado:


```javascript
window.addEventListener("popstate", (event) => {
  if (event.state) {
    renderizarVista(event.state);
  } else {
    renderizarVista({ vista: "inicio" });
  }
});
```


Llamar directamente a `pushState()` o `replaceState()` no genera `popstate`. El evento aparece al recorrer el historial, por ejemplo con los controles del navegador o mediante `history.back()`, `history.forward()` o `history.go()`.


## Ejemplo de navegación en una aplicación SPA


El siguiente ejemplo conserva el comportamiento de los enlaces, actualiza la interfaz y registra cada vista en el historial:


```html
<nav>
  <a href="/inicio" data-vista="inicio">Inicio</a>
  <a href="/productos" data-vista="productos">Productos</a>
  <a href="/contacto" data-vista="contacto">Contacto</a>
</nav>

<main id="contenido"></main>

<script>
  const contenido = document.getElementById("contenido");

  const vistas = {
    inicio: "<h2>Inicio</h2><p>Bienvenido a la aplicación.</p>",
    productos: "<h2>Productos</h2><p>Listado de productos.</p>",
    contacto: "<h2>Contacto</h2><p>Formulario de contacto.</p>"
  };

  function renderizarVista(estado) {
    const vista = estado?.vista ?? "inicio";
    contenido.innerHTML = vistas[vista] ?? vistas.inicio;
    document.title = `${vista} | Mi aplicación`;
  }

  document.addEventListener("click", (event) => {
    const enlace = event.target.closest("a[data-vista]");

    if (!enlace) {
      return;
    }

    event.preventDefault();

    const estado = {
      vista: enlace.dataset.vista
    };

    history.pushState(estado, "", enlace.href);
    renderizarVista(estado);
  });

  window.addEventListener("popstate", (event) => {
    renderizarVista(event.state ?? { vista: "inicio" });
  });

  const estadoInicial = history.state ?? { vista: "inicio" };

  if (history.state === null) {
    history.replaceState(
      estadoInicial,
      "",
      window.location.href
    );
  }

  renderizarVista(estadoInicial);
</script>
```


El código utiliza [JavaScript](https://lineadecodigo.com/javascript/) para interceptar los enlaces internos. Al pulsar uno de ellos, `preventDefault()` evita la navegación completa, `pushState()` registra la nueva entrada y `renderizarVista()` modifica el contenido. Cuando el usuario vuelve atrás o avanza, `popstate` recupera el estado correspondiente.


## Diferencias entre pushState y replaceState

- `pushState()` crea una entrada nueva y debe utilizarse cuando la acción representa una navegación que el usuario podría querer deshacer con Atrás.
- `replaceState()` modifica la entrada activa y resulta adecuado para inicializaciones, correcciones o cambios que no deberían añadir un paso adicional.
- Ninguno de los dos métodos recarga la página ni dispara `popstate` por sí solo.
- En ambos casos, la `URL` debe respetar la política del mismo origen.

## Rutas reales y recarga de la página


La `URL` añadida al historial debe funcionar también si el usuario la copia, la abre en otra pestaña o recarga el navegador. En una `SPA` con rutas como `/productos`, el servidor debe devolver el documento principal para esas rutas y permitir que el código del cliente reconstruya la vista adecuada.


Si el servidor no está configurado para resolverlas, una recarga puede producir un error `404`. Utilizar solo un `hash`, como `/#productos`, evita esa necesidad porque el fragmento no se envía al servidor, aunque ofrece direcciones menos limpias.


Gestionar estados del Historial con HTML5 permite integrar una `SPA` con el comportamiento habitual del navegador. La combinación de `pushState()`, `replaceState()`, `history.state` y `popstate` ofrece navegación predecible, direcciones compartibles y una mejor experiencia de usuario sin recargas completas.

