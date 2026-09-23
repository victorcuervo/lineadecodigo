---
title: "Contenido"
description: "Comprende cómo leer y modificar contenido DOM con textContent, innerHTML y creación de elementos, aplicando criterios de seguridad con un ejemplo práctico."
date: 2026-09-23
updatedDate: 2026-09-23
tags: ["javascript","elementos","texto","innerhtml"]
slug: dom/contenido
type: category
topic: dom
id: 3e4a9dfb-adca-806f-a9a4-f559b2ce67b6
author: victor_cuervo
---

## ¿Qué es Contenido DOM?


El **contenido DOM** es el conjunto de texto, elementos y otros nodos que contiene un documento representado mediante el [Document Object Model](https://lineadecodigo.com/dom/). Cuando el navegador procesa un documento [HTML](https://lineadecodigo.com/html/) —o un documento [XML](https://lineadecodigo.com/xml/)— crea una estructura en forma de árbol: `document` es el punto de entrada y cada etiqueta, fragmento de texto o comentario se convierte en un nodo relacionado con padres, hijos y hermanos.


Esta representación está activa en memoria y puede diferir del código fuente original. Por ejemplo, un script puede cambiar el texto de un párrafo, añadir un elemento o eliminar una lista sin recargar la página. [JavaScript](https://lineadecodigo.com/javascript/) accede a esa estructura mediante propiedades y métodos del [DOM](https://lineadecodigo.com/dom/).


Para trabajar con el contenido conviene distinguir tres operaciones: leer o sustituir texto, interpretar una cadena como marcado y crear nodos de forma explícita. Propiedades como `textContent`, `innerText` e `innerHTML` resuelven necesidades distintas; elegir la adecuada evita resultados inesperados y riesgos de seguridad.


## Características de Contenido DOM

- **`textContent`** **trabaja con texto sin interpretar marcado.** Devuelve el contenido textual de un nodo y sus descendientes. Al asignarle `"<strong>Hola</strong>"`, los signos y etiquetas se muestran como texto, no se crea un elemento `strong`.
- **`innerText`** **refleja el texto renderizado.** Tiene en cuenta aspectos visuales, como elementos ocultos y saltos de línea generados por el diseño. Como puede requerir calcular la presentación definida por [CSS](https://lineadecodigo.com/css/), `textContent` suele ser más predecible para leer o actualizar datos que no dependen de la apariencia.
- **`innerHTML`** **lee o reemplaza marcado.** El navegador analiza la cadena asignada y genera nuevos nodos. Es útil cuando el marcado es conocido y controlado, pero no debe recibir directamente datos introducidos por usuarios o procedentes de una fuente no fiable: podría permitir una inyección de código, incluida una vulnerabilidad XSS.
- **Los nodos pueden crearse sin construir cadenas.** `document.createElement()` crea un elemento, `document.createTextNode()` crea texto y métodos como `append()`, `prepend()` o `replaceChildren()` los insertan en la jerarquía. Esta aproximación separa estructura y datos y resulta segura para texto no confiable.
- **El contenido depende del tipo de nodo.** Un elemento puede tener nodos hijos; un nodo de texto almacena caracteres. En controles de formulario como `input` o `textarea`, el dato actual se consulta normalmente mediante `value`, no con `textContent`.
- **Modificar un contenedor puede reemplazar sus descendientes.** Asignar `textContent` o `innerHTML` elimina los nodos hijos anteriores. Esto también descarta las referencias y manejadores asociados a esos descendientes, por lo que conviene actualizar solo la parte necesaria.

## ¿Por qué aprender Contenido DOM?


Comprender estas operaciones permite construir interfaces que responden a las acciones del usuario: mostrar validaciones, actualizar contadores, incorporar resultados de una petición, generar listas o cambiar mensajes de estado sin recargar el documento completo.


La distinción entre texto y marcado ayuda a escoger una API adecuada. Si el objetivo es mostrar un nombre escrito en un formulario, `textContent` evita que se interprete como código. Si hay que añadir una estructura con varios elementos, crear nodos mediante `createElement()` facilita asignar atributos, conservar referencias y registrar eventos de manera explícita. `innerHTML` queda reservado para fragmentos controlados o correctamente saneados.


También permite detectar errores habituales. Usar `textContent` sobre un campo no devuelve su valor actual; reemplazar el contenido de un contenedor puede borrar elementos que tenían eventos; y concatenar datos externos dentro de una cadena de marcado puede abrir una vía de XSS. Conocer el árbol [DOM](https://lineadecodigo.com/dom/) ayuda a localizar el nodo correcto y a modificar únicamente la rama necesaria.


## Ejemplo de Contenido DOM


El siguiente documento toma un mensaje escrito por el usuario, lo muestra como vista previa y lo añade a un historial. El ejemplo usa texto y creación explícita de elementos para que la entrada no se interprete como marcado.


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Ejemplo de contenido DOM</title>
</head>
<body>
  <form id="formulario-mensaje">
    <label for="mensaje">Mensaje</label>
    <input id="mensaje" name="mensaje" required>
    <button type="submit">Añadir</button>
  </form>

  <p>Vista previa: <span id="vista-previa"></span></p>
  <ul id="historial"></ul>

  <script>
    const formulario = document.querySelector("#formulario-mensaje");
    const campoMensaje = document.querySelector("#mensaje");
    const vistaPrevia = document.querySelector("#vista-previa");
    const historial = document.querySelector("#historial");

    formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();

      const mensaje = campoMensaje.value.trim();
      if (mensaje === "") return;

      vistaPrevia.textContent = mensaje;

      const elementoLista = document.createElement("li");
      const etiqueta = document.createElement("strong");
      etiqueta.textContent = "Mensaje: ";

      elementoLista.append(
        etiqueta,
        document.createTextNode(mensaje)
      );
      historial.append(elementoLista);

      formulario.reset();
      campoMensaje.focus();
    });
  </script>
</body>
</html>
```


El método `querySelector()` obtiene referencias a los elementos existentes. Al enviar el formulario, `value` recupera la entrada y `textContent` actualiza la vista previa como texto literal.


Para el historial, `createElement()` crea un nuevo `li` y un `strong`; `createTextNode()` convierte el mensaje en un nodo de texto, y `append()` inserta los nodos en el orden indicado. Si una persona escribe `<em>Hola</em>`, la página mostrará esa cadena literalmente en vez de crear una etiqueta. Evitar `innerHTML` en este caso impide que una entrada no confiable sea interpretada como marcado ejecutable.

