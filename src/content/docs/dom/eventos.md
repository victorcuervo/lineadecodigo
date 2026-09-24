---
title: "Eventos"
description: "Aprende la manipulación de eventos DOM con addEventListener, propagación, delegación y preventDefault mediante un ejemplo práctico y accesible."
date: 2026-09-24
updatedDate: 2026-09-24
tags: ["eventos","addeventlistener","preventdefault"]
slug: dom/eventos
type: category
topic: dom
id: 3e5a9dfb-adca-80ff-8535-e8e39cd3fb92
author: victor_cuervo
---

## ¿Qué es la manipulación de eventos DOM?


La **manipulación de eventos DOM** es el proceso de detectar y responder mediante programación a acciones o cambios que ocurren en un documento. Un evento puede originarse por la interacción de una persona —como un clic, una pulsación de teclado o el envío de un formulario— o por el propio navegador, por ejemplo cuando termina de cargar un recurso.


En el [DOM](https://lineadecodigo.com/dom/), los elementos son objetos capaces de emitir eventos. [JavaScript](https://lineadecodigo.com/javascript/) registra una función manejadora con `addEventListener()`. Cuando sucede el evento indicado, el navegador ejecuta esa función y le entrega un objeto `Event` con información sobre lo ocurrido.


El evento se relaciona con la jerarquía del documento [HTML](https://lineadecodigo.com/html/). Normalmente recorre el árbol en tres fases: **captura**, desde `window` hacia el elemento de origen; **objetivo**, sobre el nodo que inició el evento; y **burbujeo**, desde ese nodo hacia sus antecesores. Comprender este recorrido permite controlar interacciones complejas sin registrar un manejador en cada elemento.


## Características de la manipulación de eventos DOM

- **`addEventListener()`** **separa comportamiento y estructura.** Permite registrar varios manejadores para un mismo tipo de evento sin sobrescribirlos. Recibe el nombre del evento, la función y, opcionalmente, una configuración.
- **El objeto de evento describe la interacción.** `event.type` identifica el tipo; `event.target` señala el nodo que originó el evento; y `event.currentTarget` indica el elemento cuyo manejador se está ejecutando.
- **La propagación sigue el árbol DOM.** La mayoría de los eventos de interacción burbujean. La opción `{ capture: true }` registra el manejador en la fase de captura. No todos los eventos se propagan del mismo modo; por ejemplo, `focus` no burbujea, mientras que `focusin` sí.
- **`preventDefault()`** **cancela una acción predeterminada.** Puede impedir el envío normal de un formulario o la navegación de un enlace si el evento es cancelable. No detiene la propagación.
- **`stopPropagation()`** **limita el recorrido.** Evita que el evento continúe hacia otros nodos durante la captura o el burbujeo. Debe usarse solo cuando el flujo normal cause un conflicto, ya que puede impedir que otros componentes detecten la interacción.
- **La delegación reduce manejadores.** Se registra un único listener en un antecesor y se usa `target` o `closest()` para identificar el descendiente que actuó. Funciona también con elementos añadidos después.
- **Las opciones controlan el ciclo del listener.** `{ once: true }` lo ejecuta una sola vez; `{ passive: true }` declara que no llamará a `preventDefault()`; y `signal` permite retirarlo mediante un `AbortController`.
- **Eliminar un listener requiere la misma referencia.** `removeEventListener()` necesita el mismo tipo, la misma función y el mismo valor de captura utilizados al registrarlo. Una función anónima escrita de nuevo es un objeto distinto y no elimina la anterior.
- **Los eventos deben respetar la accesibilidad.** Conviene preferir controles nativos como `button`, `input` y `a`, que ya ofrecen semántica y comportamiento de teclado, en lugar de convertir elementos genéricos en controles mediante eventos de ratón.

## ¿Por qué aprender manipulación de eventos DOM?


Los eventos conectan las acciones de una persona con los cambios de una interfaz. Permiten validar formularios, abrir menús, filtrar resultados, actualizar contadores, cargar información bajo demanda y responder a entradas de teclado, puntero o controles táctiles.


Entender propagación y delegación evita código repetido. Una tabla o lista dinámica puede gestionar todos sus botones desde el contenedor, incluso cuando las filas se crean después de registrar el listener. Esto reduce el número de manejadores y centraliza la lógica de interacción.


Distinguir `preventDefault()` de `stopPropagation()` también evita errores frecuentes. El primero cancela el comportamiento nativo, mientras que el segundo modifica la ruta del evento. Usarlos como equivalentes puede provocar formularios que se envían de forma inesperada o componentes que dejan de responder.


El conocimiento del ciclo de vida de los listeners ayuda a prevenir comportamientos duplicados y referencias innecesarias. En componentes temporales, retirar manejadores con `removeEventListener()` o con una señal de aborto permite liberar la lógica asociada cuando el componente deja de utilizarse.


## Ejemplo de manipulación de eventos DOM


El siguiente documento muestra un formulario para añadir mensajes. Utiliza los eventos `input`, `submit` y `click`, además de delegación para eliminar elementos creados dinámicamente.


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Eventos DOM</title>
</head>
<body>
  <form id="formulario-mensaje">
    <label for="mensaje">Mensaje</label>
    <input id="mensaje" maxlength="40" required>
    <output id="contador" for="mensaje">0/40</output>
    <button type="submit">Añadir</button>
  </form>

  <ul id="lista-mensajes"></ul>

  <script>
    const formulario = document.querySelector("#formulario-mensaje");
    const campoMensaje = document.querySelector("#mensaje");
    const contador = document.querySelector("#contador");
    const listaMensajes = document.querySelector("#lista-mensajes");

    campoMensaje.addEventListener("input", (evento) => {
      contador.value = `${evento.target.value.length}/40`;
    });

    formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();

      const texto = campoMensaje.value.trim();
      if (texto === "") return;

      const elemento = document.createElement("li");
      const contenido = document.createElement("span");
      const botonEliminar = document.createElement("button");

      contenido.textContent = texto;
      botonEliminar.type = "button";
      botonEliminar.textContent = "Eliminar";
      botonEliminar.dataset.accion = "eliminar";

      elemento.append(contenido, " ", botonEliminar);
      listaMensajes.append(elemento);

      formulario.reset();
      contador.value = "0/40";
      campoMensaje.focus();
    });

    listaMensajes.addEventListener("click", (evento) => {
      const boton = evento.target.closest("button[data-accion='eliminar']");
      if (!boton || !listaMensajes.contains(boton)) return;

      boton.closest("li").remove();
    });
  </script>
</body>
</html>
```


El listener de `input` recibe un objeto `Event` y consulta `target`, que corresponde al campo donde se produjo la entrada. Así actualiza el contador con cada cambio, tanto si se escribe con el teclado como si se pega texto.


En `submit`, `preventDefault()` evita la recarga asociada al envío convencional. Después se crean e insertan los nodos del mensaje. El texto se asigna con `textContent` para que no se interprete como marcado.


El listener de `click` está en la lista, no en cada botón. Como el evento burbujea, `closest()` puede localizar el botón pulsado y eliminar su `li`. La comprobación con `contains()` confirma que el botón pertenece a la lista y evita actuar sobre un elemento ajeno al contenedor.

