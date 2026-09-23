---
title: "Nodos"
description: "Comprende cómo se organizan los nodos DOM, qué tipos existen, cómo recorrer la jerarquía del documento y cómo crear nodos con JavaScript mediante un ejemplo."
date: 2026-09-23
updatedDate: 2026-09-23
tags: ["DOM Node","Javascript DOM Document","Javascript DOM Element","javascript","elementos"]
slug: dom/nodos
type: category
topic: dom
id: 3e4a9dfb-adca-80f3-b769-c9dee9b6d06f
author: victor_cuervo
---

## ¿Qué son los nodos DOM?


Los **nodos DOM** son los objetos que forman la representación en memoria de un documento [HTML](https://lineadecodigo.com/html/) o [XML](https://lineadecodigo.com/xml/). El navegador organiza estos objetos en un árbol jerárquico para que el contenido, la estructura y otras partes del documento puedan consultarse y modificarse mediante las APIs del [Document Object Model](https://lineadecodigo.com/dom/).


Cada objeto ocupa una posición dentro del árbol y puede mantener relaciones con otros nodos: padre, hijos y hermanos. El objeto `Document` se encuentra en la parte superior. Debajo aparecen el elemento raíz, los demás elementos, sus atributos conceptuales y los nodos de texto que contienen el contenido escrito entre etiquetas.


Un **elemento** es un tipo de nodo, pero no todos los nodos son elementos. Una etiqueta `p` se representa como un nodo de elemento; el texto de su interior es otro nodo distinto de tipo texto. Los comentarios y el propio documento también tienen sus correspondientes tipos de nodo.


Desde [JavaScript](https://lineadecodigo.com/javascript/) se trabaja con la interfaz base `Node` y con interfaces más específicas, como `Element`, `Text` y `Document`. Estas interfaces proporcionan propiedades y métodos para recorrer la jerarquía, crear nodos, insertarlos, reemplazarlos o eliminarlos.


## Características de los nodos DOM

- **Organización en árbol:** cada nodo tiene una posición dentro de una jerarquía. Salvo el nodo raíz, un nodo conectado al documento tiene un padre y puede contener hijos.
- **Tipos de nodo:** `nodeType` identifica la clase de nodo mediante constantes como `Node.ELEMENT_NODE`, `Node.TEXT_NODE` y `Node.COMMENT_NODE`. `nodeName` ofrece un nombre asociado al tipo.
- **Relaciones entre nodos:** `parentNode`, `childNodes`, `firstChild`, `lastChild`, `nextSibling` y `previousSibling` permiten desplazarse por el árbol incluyendo nodos de texto y comentarios.
- **Diferencia entre nodos y elementos:** `childNodes` devuelve todos los nodos hijos, mientras que `children` devuelve únicamente elementos. Los espacios y saltos de línea del código [HTML](https://lineadecodigo.com/html/) pueden convertirse en nodos de texto y aparecer en `childNodes`.
- **Colecciones vivas:** `childNodes` devuelve un `NodeList` vivo. Si se añaden o eliminan hijos, la colección refleja el cambio automáticamente. En cambio, el `NodeList` obtenido mediante `querySelectorAll()` es estático.
- **Creación específica:** `document.createElement()` crea nodos de elemento, `document.createTextNode()` crea nodos de texto y `document.createComment()` crea comentarios.
- **Inserción y eliminación:** `appendChild()`, `insertBefore()`, `replaceChild()` y `removeChild()` operan con nodos. Métodos modernos como `append()`, `prepend()` y `remove()` ofrecen alternativas más directas en muchos casos.
- **Movimiento, no duplicación:** insertar en otra posición un nodo que ya pertenece al DOM lo mueve. Para obtener una copia se utiliza `cloneNode()`, indicando si también deben copiarse sus descendientes.
- **Contenido textual:** `textContent` obtiene o reemplaza el texto de un nodo y sus descendientes. Al asignarle un valor, los hijos existentes se sustituyen por un único nodo de texto.

## ¿Por qué aprender los nodos DOM?


Comprender los nodos permite recorrer y modificar un documento con precisión. Resulta útil al crear contenido dinámico, procesar fragmentos de [HTML](https://lineadecodigo.com/html/), implementar editores, inspeccionar documentos [XML](https://lineadecodigo.com/xml/) o transformar una estructura antes de mostrarla.


La distinción entre `childNodes` y `children` evita errores frecuentes. Si un algoritmo espera solo etiquetas pero recorre todos los nodos, puede encontrar saltos de línea como nodos de texto y producir resultados inesperados. Elegir una API orientada a nodos o a elementos depende de la información que realmente necesita el programa.


Conocer la jerarquía también facilita operaciones como insertar un elemento antes de otro, subir al contenedor padre o localizar hermanos. Estas relaciones permiten modificar una parte concreta del documento sin reconstruir todo su contenido.


Las bibliotecas y frameworks abstraen muchas actualizaciones, pero el navegador sigue trabajando con nodos. Entender cómo se crean, mueven y eliminan ayuda a depurar problemas de renderizado, eventos y rendimiento, y a interpretar la vista del [DOM](https://lineadecodigo.com/dom/) disponible en las herramientas de desarrollo.


## Ejemplo de nodos DOM


El siguiente ejemplo recorre los nodos hijos de una sección, muestra sus tipos y permite añadir un párrafo formado por un nodo de elemento y un nodo de texto.


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Nodos DOM</title>
</head>
<body>
  <section id="contenido">
    <h1>Noticias</h1>
    <p>Contenido inicial del documento.</p>
  </section>

  <button id="agregar" type="button">Añadir párrafo</button>
  <ul id="resultado"></ul>

  <script>
    const contenido = document.querySelector("#contenido");
    const boton = document.querySelector("#agregar");
    const resultado = document.querySelector("#resultado");

    function mostrarNodo(nodo) {
      if (
        nodo.nodeType === Node.TEXT_NODE &&
        nodo.textContent.trim() === ""
      ) {
        return;
      }

      const item = document.createElement("li");

      if (nodo.nodeType === Node.ELEMENT_NODE) {
        item.textContent = `Elemento: ${nodo.nodeName}`;
      } else if (nodo.nodeType === Node.TEXT_NODE) {
        item.textContent = `Texto: ${nodo.textContent.trim()}`;
      } else {
        item.textContent = `Otro nodo: tipo ${nodo.nodeType}`;
      }

      resultado.append(item);
    }

    contenido.childNodes.forEach(mostrarNodo);

    boton.addEventListener("click", () => {
      const parrafo = document.createElement("p");
      const texto = document.createTextNode("Contenido añadido al DOM.");

      parrafo.appendChild(texto);
      contenido.appendChild(parrafo);
      mostrarNodo(parrafo);

      boton.disabled = true;
    });
  </script>
</body>
</html>
```


El método `contenido.childNodes` devuelve tanto los elementos `h1` y `p` como los nodos de texto generados por espacios y saltos de línea. La función ignora los nodos de texto vacíos y utiliza `nodeType` para distinguir los elementos del texto con contenido.


Al pulsar el botón, `createElement()` crea un nodo `p` y `createTextNode()` crea su texto como un objeto independiente. `appendChild()` establece primero la relación entre ambos y después conecta el párrafo con la sección.


El párrafo solo aparece en la página después de insertarlo en un nodo conectado al documento. El botón queda desactivado para que la operación se ejecute una sola vez.

