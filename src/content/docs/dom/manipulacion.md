---
title: "Manipulación"
description: "Domina la manipulación de contenido DOM: seleccionar, crear, insertar, reemplazar y eliminar nodos y texto con métodos seguros y un ejemplo práctico."
date: 2026-09-23
updatedDate: 2026-09-23
tags: ["javascript","elementos","texto"]
slug: dom/manipulacion
type: category
topic: dom
id: 3e4a9dfb-adca-807d-9183-e20cce461328
author: victor_cuervo
---

## ¿Qué es la manipulación de contenido DOM?


La **manipulación de contenido DOM** consiste en leer y modificar mediante programación los nodos que forman un documento cargado en el navegador. El [Document Object Model](https://lineadecodigo.com/dom/) representa el [HTML](https://lineadecodigo.com/html/) como un árbol de objetos: los elementos, los fragmentos de texto y los comentarios son nodos relacionados mediante una jerarquía de padres, hijos y hermanos.


Con [JavaScript](https://lineadecodigo.com/javascript/) se puede localizar una parte de ese árbol y cambiarla sin recargar la página completa. Las operaciones habituales son seleccionar elementos, actualizar texto o atributos, crear nodos, insertarlos en una posición concreta, reemplazarlos y eliminarlos.


El [DOM](https://lineadecodigo.com/dom/) es una representación activa en memoria. Por eso, una modificación cambia inmediatamente el documento que el usuario está viendo, aunque no altere el archivo original almacenado en el servidor. Si se necesita conservar el cambio después de cerrar o recargar la página, los datos deben guardarse por separado, por ejemplo en una API o en el almacenamiento del navegador.


## Características de la manipulación de contenido DOM

- **La selección precede a la modificación.** `querySelector()` devuelve el primer elemento que coincide con un selector y `querySelectorAll()` devuelve una colección estática de coincidencias. También existen métodos específicos como `getElementById()`.
- **Texto y marcado se tratan de forma diferente.** `textContent` lee o sustituye texto literal. `innerHTML` analiza una cadena como marcado y reemplaza los descendientes del elemento; no debe recibir contenido no confiable porque puede introducir vulnerabilidades XSS.
- **Los nodos pueden construirse explícitamente.** `createElement()` crea elementos y `createTextNode()` crea nodos de texto. Después pueden configurarse propiedades, atributos, clases y eventos antes de insertarlos en el documento.
- **Existen varias posiciones de inserción.** `append()` y `prepend()` añaden contenido al final o al principio de un elemento. `before()` y `after()` insertan nodos alrededor del elemento de referencia. Si se inserta un nodo que ya pertenece al documento, se mueve; no se duplica.
- **El contenido puede reemplazarse o eliminarse.** `replaceWith()` sustituye un nodo, `replaceChildren()` reemplaza los hijos de un elemento y `remove()` separa el nodo de su padre.
- **La clonación es explícita.** `cloneNode(true)` copia un nodo con todos sus descendientes; con `false`, copia solo el nodo indicado. Los manejadores registrados mediante `addEventListener()` no se copian, y los identificadores duplicados pueden producir selecciones ambiguas.
- **Las referencias pueden quedar desconectadas.** Una variable puede seguir apuntando a un nodo después de retirarlo del documento. La propiedad `isConnected` permite comprobar si ese nodo continúa unido al árbol visible.
- **Los cambios de clases suelen ser preferibles para la presentación.** `classList.add()`, `remove()`, `toggle()` y `replace()` permiten cambiar estados visuales sin mezclar reglas de [CSS](https://lineadecodigo.com/css/) con la lógica de la aplicación.

## ¿Por qué aprender manipulación de contenido DOM?


Estas operaciones permiten crear interfaces dinámicas con APIs nativas del navegador. Se utilizan para representar resultados de una búsqueda, añadir filas a una tabla, mostrar errores de validación, actualizar contadores, abrir componentes o retirar elementos que ya no son necesarios.


Conocer la diferencia entre actualizar un nodo existente y reconstruir un contenedor completo ayuda a conservar el estado de la interfaz. Reemplazar todo mediante `innerHTML` puede destruir referencias, selección de texto, foco y eventos asociados a los descendientes. Una actualización localizada modifica solo la rama afectada y suele producir un código más fácil de mantener.


También mejora la seguridad. Los datos introducidos por una persona o recibidos desde una API deben incorporarse como texto mediante `textContent` o `createTextNode()`, salvo que hayan sido saneados específicamente para usarse como marcado. Esta decisión evita que el navegador interprete esos datos como etiquetas o scripts.


La manipulación del árbol está relacionada con los eventos: una acción del usuario provoca un cambio y el documento refleja el nuevo estado. Entender ambas partes permite implementar componentes interactivos sin depender de una biblioteca externa y facilita comprender cómo trabajan las bibliotecas que abstraen el [DOM](https://lineadecodigo.com/dom/).


## Ejemplo de manipulación de contenido DOM


Este ejemplo implementa una lista de tareas. Permite crear elementos, cambiar su estado y eliminarlos mediante un único manejador de eventos en la lista.


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Manipulación de contenido DOM</title>
  <style>
    .completada { text-decoration: line-through; }
  </style>
</head>
<body>
  <form id="formulario-tarea">
    <label for="nueva-tarea">Nueva tarea</label>
    <input id="nueva-tarea" required>
    <button type="submit">Añadir</button>
  </form>

  <ul id="lista-tareas"></ul>

  <script>
    const formulario = document.querySelector("#formulario-tarea");
    const campoTarea = document.querySelector("#nueva-tarea");
    const listaTareas = document.querySelector("#lista-tareas");

    formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();

      const textoTarea = campoTarea.value.trim();
      if (textoTarea === "") return;

      const tarea = document.createElement("li");
      const descripcion = document.createElement("span");
      const botonEliminar = document.createElement("button");

      descripcion.textContent = textoTarea;
      botonEliminar.type = "button";
      botonEliminar.textContent = "Eliminar";
      botonEliminar.dataset.accion = "eliminar";

      tarea.append(descripcion, " ", botonEliminar);
      listaTareas.append(tarea);

      formulario.reset();
      campoTarea.focus();
    });

    listaTareas.addEventListener("click", (evento) => {
      const tarea = evento.target.closest("li");
      if (!tarea) return;

      if (evento.target.dataset.accion === "eliminar") {
        tarea.remove();
        return;
      }

      tarea.classList.toggle("completada");
    });
  </script>
</body>
</html>
```


Al enviar el formulario, `createElement()` construye el `li`, el texto y el botón. `textContent` incorpora la entrada como texto literal, por lo que una cadena con etiquetas no se interpreta como marcado. `append()` compone la tarea y la inserta en la lista.


El evento `click` se registra en `ul` en vez de añadirse a cada tarea. Esta técnica, denominada **delegación de eventos**, aprovecha la propagación del evento desde el elemento pulsado hasta su contenedor. `closest("li")` localiza la tarea correspondiente; `classList.toggle()` cambia su estado visual y `remove()` la elimina del árbol [DOM](https://lineadecodigo.com/dom/).

