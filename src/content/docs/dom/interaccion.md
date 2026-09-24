---
title: "Interacción"
description: "Comprende la interacción DOM con eventos, estado, foco y actualización de elementos mediante un ejemplo accesible con teclado, ratón y respuesta visual."
date: 2026-09-24
updatedDate: 2026-09-24
tags: ["accesibilidad","element","addeventlistener","event"]
slug: dom/interaccion
type: category
topic: dom
id: 3e5a9dfb-adca-8099-a241-f5a4f8c50b3d
author: victor_cuervo
---

## ¿Qué es la interacción DOM?


La **interacción DOM** es el intercambio entre las acciones de una persona y los elementos de un documento representado por el [Document Object Model](https://lineadecodigo.com/dom/). Una interacción comienza con una entrada —por ejemplo, pulsar un botón, escribir, cambiar una opción o mover el foco— y continúa con una respuesta de la interfaz, como actualizar contenido, habilitar un control o mostrar un mensaje.


El navegador convierte el documento [HTML](https://lineadecodigo.com/html/) en un árbol de nodos. [JavaScript](https://lineadecodigo.com/javascript/) puede escuchar los eventos emitidos por esos nodos mediante `addEventListener()`, consultar sus propiedades y modificar el árbol para reflejar un nuevo estado.


Este proceso suele seguir un ciclo: **entrada, evento, lógica, actualización y respuesta**. El usuario realiza una acción; el navegador crea un objeto de evento; un manejador aplica una regla; el [DOM](https://lineadecodigo.com/dom/) se actualiza; y la interfaz comunica el resultado. El estado es la información que determina cómo debe verse o comportarse la interfaz en un momento concreto.


## Características de la interacción DOM

- **Se basa en eventos.** Eventos como `click`, `input`, `change`, `submit`, `focus` y `keydown` permiten responder a distintas formas de entrada. El objeto `Event` identifica el origen y aporta datos específicos de la interacción.
- **El estado y la vista deben permanecer sincronizados.** Si una cantidad cambia, el texto mostrado, los botones disponibles y cualquier mensaje relacionado deben representar el mismo valor. Centralizar esa actualización en una función reduce inconsistencias.
- **Los controles nativos incluyen comportamiento accesible.** Elementos como `button`, `input`, `select` y `details` ya ofrecen foco, teclado y semántica. Un `button` responde tanto al ratón como a las teclas Enter y Espacio sin añadir manejadores de teclado manuales.
- **El foco indica dónde continuará la interacción.** `document.activeElement` permite saber qué nodo lo tiene y `focus()` puede moverlo cuando sea necesario. El foco no debe cambiarse de forma inesperada ni ocultarse mediante [CSS](https://lineadecodigo.com/css/) sin ofrecer una alternativa visible.
- **La retroalimentación debe ser perceptible.** Cambiar texto, estado o disponibilidad confirma que una acción tuvo efecto. Para mensajes dinámicos relevantes, `role="status"` o una región `aria-live` permite que las tecnologías de asistencia anuncien la actualización.
- **Las propiedades comunican estados reales.** Asignar `disabled`, `checked`, `value` o `hidden` modifica tanto el comportamiento como la representación del control. Usar solo una clase visual puede hacer que el aspecto y la funcionalidad no coincidan.
- **La propagación permite delegar eventos.** Un contenedor puede escuchar interacciones de sus descendientes y reconocer el elemento de origen con `event.target` y `closest()`. Esto resulta útil cuando los elementos se crean dinámicamente.
- **La respuesta debe ser proporcional al evento.** Operaciones costosas asociadas a eventos frecuentes como `input`, `pointermove` o `scroll` pueden bloquear la interfaz. Conviene actualizar solo los nodos necesarios y limitar cálculos repetidos cuando sea preciso.
- **Los datos del usuario deben tratarse como texto.** Para mostrar una entrada, `textContent` evita que el navegador la interprete como marcado. Insertarla directamente mediante `innerHTML` puede introducir vulnerabilidades XSS.

## ¿Por qué aprender interacción DOM?


Comprender este ciclo permite desarrollar menús, filtros, formularios, selectores, pestañas, diálogos y listas dinámicas que responden de manera coherente. No se trata solo de detectar un clic: la interfaz debe actualizar su estado, impedir acciones no válidas y comunicar el resultado.


También ayuda a evitar duplicar lógica para ratón y teclado. Si se eligen elementos semánticos, el navegador aporta gran parte de la interacción. Un botón con un listener de `click` funciona al pulsarlo con puntero, Enter o Espacio; un elemento `div` obliga a recrear manualmente ese comportamiento y su semántica accesible.


Separar el estado de su representación facilita mantener la interfaz. La lógica cambia el dato y una función de renderizado actualiza los nodos afectados. De este modo, todos los indicadores dependen de la misma fuente y no quedan botones habilitados cuando la acción ya no es válida.


La **interacción DOM** conecta varios conceptos: selección de elementos, eventos, manipulación de contenido, atributos, clases, formularios y accesibilidad. Dominar esa relación permite comprender cómo funcionan los componentes de una aplicación incluso cuando una biblioteca abstrae el acceso directo al [DOM](https://lineadecodigo.com/dom/).


## Ejemplo de interacción DOM


Este selector permite aumentar o reducir una cantidad entre uno y cinco. La interfaz mantiene sincronizados el valor, el estado de los botones y un mensaje para la persona usuaria.


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Interacción DOM</title>
</head>
<body>
  <section id="selector-cantidad" aria-labelledby="titulo-cantidad">
    <h2 id="titulo-cantidad">Cantidad</h2>

    <button type="button" data-accion="restar" aria-label="Reducir cantidad">
      Menos
    </button>

    <output id="cantidad" aria-label="Cantidad seleccionada">1</output>

    <button type="button" data-accion="sumar" aria-label="Aumentar cantidad">
      Más
    </button>

    <p id="estado" role="status"></p>
  </section>

  <script>
    const selector = document.querySelector("#selector-cantidad");
    const salidaCantidad = document.querySelector("#cantidad");
    const estado = document.querySelector("#estado");
    const botonRestar = selector.querySelector("[data-accion='restar']");
    const botonSumar = selector.querySelector("[data-accion='sumar']");

    const cantidadMinima = 1;
    const cantidadMaxima = 5;
    let cantidad = cantidadMinima;

    function actualizarInterfaz() {
      salidaCantidad.textContent = cantidad;
      botonRestar.disabled = cantidad === cantidadMinima;
      botonSumar.disabled = cantidad === cantidadMaxima;
      estado.textContent = `Cantidad seleccionada: ${cantidad}`;
    }

    selector.addEventListener("click", (evento) => {
      const boton = evento.target.closest("button[data-accion]");
      if (!boton || !selector.contains(boton)) return;

      if (boton.dataset.accion === "sumar") {
        cantidad = Math.min(cantidad + 1, cantidadMaxima);
      } else {
        cantidad = Math.max(cantidad - 1, cantidadMinima);
      }

      actualizarInterfaz();
    });

    actualizarInterfaz();
  </script>
</body>
</html>
```


La variable `cantidad` actúa como estado y `actualizarInterfaz()` representa ese estado en el DOM. La misma función modifica el contenido del `output`, deshabilita los botones cuando se alcanza un límite y actualiza el mensaje de respuesta. Así se evita mantener cada elemento con lógica independiente.


El listener se registra en el contenedor y usa delegación para identificar el botón mediante `closest()`. `Math.min()` y `Math.max()` impiden que el estado salga del rango aunque la función se invoque repetidamente.


Como se utilizan botones nativos, la interacción funciona con ratón, pantalla táctil y teclado sin añadir un listener de `keydown`. La propiedad `disabled` evita acciones imposibles, y `role="status"` permite anunciar los cambios de cantidad sin mover el foco.

