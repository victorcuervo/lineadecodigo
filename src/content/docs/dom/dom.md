---
title: "DOM"
description: "El DOM es una representación en árbol que permite manipular dinámicamente contenido y estructura de páginas web."
date: 2026-01-12
updatedDate: 2026-01-12
tags: []
slug: dom
type: category
topic: dom
id: 2e5a9dfb-adca-80ab-89d3-d4b5180d01c7
author: victor_cuervo
---

El **DOM** (Document Object Model) o **Modelo de Objetos del Documento** es una representación en forma de árbol de la estructura de una página web que permite a los desarrolladores interactuar y manipular dinámicamente el contenido, la estructura y los estilos mediante [Javascript](https://www.manualweb.net/javascript/).


## ¿Qué es el DOM?


El DOM es una interfaz de programación que representa documentos [HTML](https://www.manualweb.net/html/) y XML como una estructura jerárquica de nodos. Cada elemento HTML se convierte en un nodo del DOM que puede ser accedido y modificado mediante código.


Los navegadores web interpretan el código HTML y construyen automáticamente el DOM cuando cargan una página. Esta representación permite que Javascript pueda leer y modificar todos los elementos del documento de forma dinámica.


## Estructura jerárquica del DOM


El DOM organiza los elementos en una estructura de árbol donde:

- El **nodo raíz** es el documento completo
- Los **elementos HTML** son nodos que pueden contener otros nodos
- Los **atributos** son propiedades de los elementos
- El **contenido de texto** son nodos hijos de los elementos

Por ejemplo, este código HTML:


```html
<div id="contenedor">
  <h1>Título</h1>
  <p>Párrafo de texto</p>
</div>
```


Se convierte en una estructura DOM donde el `div` es el padre de `h1` y `p`, que son sus nodos hijos.


## Manipulación del DOM con Javascript


El DOM proporciona métodos y propiedades para interactuar con los elementos de la página. Los más utilizados son:


```javascript
// Seleccionar elementos
const elemento = document.getElementById("contenedor");
const parrafos = document.getElementsByTagName("p");
const items = document.querySelectorAll(".clase");

// Modificar contenido
elemento.textContent = "Nuevo texto";
elemento.innerHTML = "<strong>Texto en negrita</strong>";

// Modificar atributos
elemento.setAttribute("class", "nuevo-estilo");
[elemento.style](http://elemento.style/).color = "blue";
```


## Eventos del DOM


El DOM también gestiona los eventos de usuario como clics, movimientos del ratón o pulsaciones de teclado:


```javascript
const boton = document.getElementById("miBoton");

boton.addEventListener("click", function() {
  alert("Has hecho clic en el botón");
});
```


## Ventajas del uso del DOM

- **Interactividad**: Permite crear páginas web dinámicas y reactivas
- **Actualización sin recarga**: Modifica el contenido sin necesidad de recargar la página
- **Accesibilidad programática**: Todos los elementos son accesibles mediante código
- **Estandarización**: Es un estándar del W3C implementado en todos los navegadores modernos

## Diferencia entre HTML y DOM


Mientras que HTML es el código fuente estático que escribimos, el DOM es la representación en memoria que el navegador crea. El DOM puede ser modificado por Javascript, mientras que el HTML original permanece sin cambios.

