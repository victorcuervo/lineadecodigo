---
title: "DOM"
description: "Comprende cómo el DOM representa una página, cómo modificar elementos con JavaScript y cómo responder a eventos mediante un ejemplo práctico."
date: 2026-09-23
updatedDate: 2026-09-23
tags: ["javascript","elementos","eventos","manipulación"]
slug: dom
type: category
topic: dom
id: 22f7c335-239e-4a2f-8059-282b7ed0f68f
author: victor_cuervo
---

## ¿Qué es DOM?


El **DOM (Document Object Model)** es una interfaz de programación que representa un documento [HTML](https://lineadecodigo.com/html/) o [XML](https://lineadecodigo.com/xml/) como una estructura de objetos organizada en forma de árbol. El navegador construye esta representación al interpretar el documento y la expone para que lenguajes como [JavaScript](https://lineadecodigo.com/javascript/) puedan consultar y modificar su contenido, estructura y comportamiento.


Cada parte del documento se convierte en un **nodo**. El documento completo es un nodo `Document`; las etiquetas se representan mediante objetos `Element`; y el texto contenido en ellas se almacena en nodos de texto. Estos objetos mantienen relaciones de parentesco: un elemento puede tener un nodo padre, nodos hijos y nodos hermanos.


Por ejemplo, un `<ul>` puede ser el padre de varios elementos `<li>`. JavaScript puede localizar ese `<ul>`, recorrer sus hijos, añadir otro `<li>` o eliminar uno existente. Cuando se modifica el árbol del DOM, el navegador actualiza la parte visible de la página afectada.


El DOM no es el código [HTML](https://lineadecodigo.com/html/) original ni una característica exclusiva de JavaScript. Es un modelo normalizado mediante APIs web. [JavaScript](https://lineadecodigo.com/javascript/) es el lenguaje utilizado habitualmente en el navegador para trabajar con esas APIs a través de objetos como `document`, `Element` y `EventTarget`.


## Características de DOM

- **Estructura jerárquica:** representa el documento como un árbol de nodos relacionados. Esta organización permite navegar desde un elemento hacia su padre, sus hijos o sus hermanos.
- **Selección de elementos:** `document.querySelector()` obtiene el primer elemento que coincide con un selector [CSS](https://lineadecodigo.com/css/), mientras que `document.querySelectorAll()` devuelve una colección estática con todas las coincidencias. También existen métodos específicos como `getElementById()`.
- **Manipulación del contenido:** propiedades como `textContent` permiten leer o sustituir texto. Para insertar contenido procedente del usuario suele ser preferible `textContent` frente a `innerHTML`, porque no interpreta la cadena como marcado [HTML](https://lineadecodigo.com/html/).
- **Creación y eliminación de nodos:** `document.createElement()` crea elementos, `append()` o `appendChild()` los incorpora al árbol y `remove()` los elimina. Crear un objeto no lo hace visible hasta insertarlo en el documento.
- **Gestión de atributos y clases:** `setAttribute()` modifica atributos, aunque propiedades específicas como `id`, `value` o `disabled` suelen resultar más directas. `classList` permite añadir, quitar, alternar y comprobar clases [CSS](https://lineadecodigo.com/css/).
- **Sistema de eventos:** muchos objetos del DOM implementan `EventTarget`. Con `addEventListener()` se puede ejecutar una función cuando ocurre una interacción, como un clic, el envío de un formulario o la pulsación de una tecla. El objeto del evento contiene información sobre lo sucedido y su destino.
- **DOM dinámico:** los cambios realizados con [JavaScript](https://lineadecodigo.com/javascript/) afectan al modelo que mantiene el navegador, pero no reescriben el archivo [HTML](https://lineadecodigo.com/html/) almacenado en el servidor. Al recargar la página, los cambios desaparecen si no se han guardado en algún sistema persistente.
- **Disponibilidad condicionada por la carga:** un script solo puede seleccionar elementos que ya se hayan interpretado. Por eso suele colocarse al final de `body`, cargarse con `defer` o ejecutarse después del evento `DOMContentLoaded`.

## ¿Por qué aprender DOM?


Conocer el DOM permite convertir un documento estático en una interfaz que responde a las acciones del usuario. La validación de formularios, los menús desplegables, las pestañas, los cuadros de diálogo, los filtros y las listas que se actualizan sin recargar la página dependen de la consulta y manipulación de elementos.


También ayuda a separar responsabilidades. [HTML](https://lineadecodigo.com/html/) define la estructura inicial, [CSS](https://lineadecodigo.com/css/) controla la presentación y JavaScript utiliza el DOM para aplicar cambios de estado. Por ejemplo, en lugar de establecer estilos en línea desde JavaScript, se puede añadir una clase con `classList` y dejar que CSS determine su apariencia.


El modelo de eventos permite conectar la interfaz con la lógica de la aplicación. Un manejador registrado con `addEventListener()` puede leer los datos de un formulario, modificar elementos, solicitar información a un servidor o mostrar el resultado. Comprender conceptos como el elemento objetivo del evento, la propagación y `preventDefault()` facilita controlar interacciones más complejas sin mezclar lógica en atributos HTML.


El DOM también es la base sobre la que trabajan muchas bibliotecas y frameworks de interfaz. Aunque herramientas como React, Vue o Angular abstraen parte de su manipulación, el navegador sigue mostrando un árbol de elementos. Entender ese árbol permite depurar problemas de selección, eventos, accesibilidad y rendimiento utilizando las herramientas de desarrollo.


## Ejemplo de DOM


El siguiente documento crea una lista de tareas. [JavaScript](https://lineadecodigo.com/javascript/) selecciona elementos existentes, escucha el envío del formulario, crea un nuevo nodo y lo incorpora al DOM.


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Lista de tareas con DOM</title>
</head>
<body>
  <h1>Mis tareas</h1>

  <form id="formulario-tarea">
    <label for="nueva-tarea">Nueva tarea</label>
    <input id="nueva-tarea" type="text" required>
    <button type="submit">Añadir</button>
  </form>

  <p id="contador">No hay tareas.</p>
  <ul id="lista-tareas"></ul>

  <script>
    const formulario = document.querySelector("#formulario-tarea");
    const campoTarea = document.querySelector("#nueva-tarea");
    const listaTareas = document.querySelector("#lista-tareas");
    const contador = document.querySelector("#contador");

    formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();

      const descripcion = campoTarea.value.trim();
      if (descripcion === "") {
        return;
      }

      const tarea = document.createElement("li");
      tarea.textContent = descripcion;
      listaTareas.append(tarea);

      const total = listaTareas.children.length;
      contador.textContent = total === 1
        ? "Hay 1 tarea."
        : `Hay ${total} tareas.`;

      formulario.reset();
      campoTarea.focus();
    });
  </script>
</body>
</html>
```


La función `querySelector()` obtiene referencias a los cuatro elementos con los que trabaja el script. Estas referencias permiten modificar los objetos existentes sin buscarlos de nuevo en cada operación.


El evento `submit` se escucha en el formulario, no únicamente en el botón, por lo que el ejemplo funciona tanto al pulsar el botón como al enviar desde el teclado. `preventDefault()` evita la recarga que el navegador realizaría al enviar un formulario de forma convencional.


Después de validar el texto, `createElement("li")` crea un elemento que todavía está desconectado del documento. La asignación mediante `textContent` incorpora la descripción como texto y `append()` añade el nodo a la lista. Finalmente, el número de hijos de `ul` se utiliza para actualizar el contador visible. Cada envío modifica el árbol del DOM y el navegador refleja el cambio inmediatamente.

