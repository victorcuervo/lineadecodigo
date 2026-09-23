---
title: "Elementos"
description: "Comprende qué son los elementos DOM, cómo seleccionarlos y modificar atributos, propiedades y contenido con JavaScript mediante un ejemplo práctico."
date: 2026-09-23
updatedDate: 2026-09-23
tags: []
slug: dom/elementos
type: category
topic: dom
id: 864f960e-4ff5-4df9-a632-d6a25145bd63
author: victor_cuervo
---

## ¿Qué son los elementos DOM?


Los **elementos DOM** son objetos que representan las etiquetas de un documento [HTML](https://lineadecodigo.com/html/) o [XML](https://lineadecodigo.com/xml/) dentro del **árbol del Document Object Model**. El navegador crea estos objetos al interpretar el documento y permite trabajar con ellos mediante la interfaz `Element`.


Un elemento es un tipo concreto de **nodo**. Todos los elementos son nodos, pero no todos los nodos son elementos: el documento, el texto contenido en una etiqueta y los comentarios también son nodos. Por ejemplo, una etiqueta `p` se representa mediante un objeto `HTMLParagraphElement`, que hereda funciones y propiedades de interfaces más generales como `HTMLElement`, `Element` y `Node`.


Desde [JavaScript](https://lineadecodigo.com/javascript/) se obtiene una referencia a un elemento mediante métodos de selección. Esa referencia permite consultar o modificar su contenido, atributos, clases, posición en el árbol y estado. Los cambios se aplican al [DOM](https://lineadecodigo.com/dom/) que mantiene el navegador y, cuando afectan a la presentación, se reflejan en la página.


## Características de los elementos DOM

- **Identidad y tipo:** cada objeto mantiene información como `tagName`, `id` y sus clases. `tagName` indica la etiqueta representada y suele devolver su nombre en mayúsculas en documentos [HTML](https://lineadecodigo.com/html/).
- **Selección mediante selectores:** `querySelector()` devuelve el primer elemento que coincide con un selector [CSS](https://lineadecodigo.com/css/), mientras que `querySelectorAll()` devuelve una colección estática de coincidencias. `getElementById()` es una alternativa específica para seleccionar por identificador.
- **Relaciones dentro del árbol:** propiedades como `parentElement`, `children`, `firstElementChild`, `nextElementSibling` y `previousElementSibling` permiten navegar entre elementos sin incluir nodos de texto o comentarios.
- **Contenido textual:** `textContent` permite leer o sustituir el texto de un elemento y sus descendientes. No interpreta el valor como marcado [HTML](https://lineadecodigo.com/html/), por lo que es la opción adecuada cuando el contenido debe tratarse como texto.
- **Atributos:** `getAttribute()`, `setAttribute()`, `hasAttribute()` y `removeAttribute()` trabajan con los atributos escritos en el elemento. Para atributos personalizados `data-*`, la propiedad `dataset` ofrece un acceso más cómodo.
- **Propiedades del objeto:** valores como `value`, `checked` o `disabled` reflejan el estado actual de controles de formulario. Un atributo define normalmente el valor inicial, mientras que la propiedad puede cambiar durante la interacción del usuario.
- **Clases:** `classList` permite añadir, eliminar, alternar o comprobar clases sin reconstruir manualmente el atributo `class`.
- **Creación e inserción:** `document.createElement()` crea un elemento desconectado. Métodos como `append()`, `prepend()`, `before()` y `after()` lo insertan en una posición concreta del [DOM](https://lineadecodigo.com/dom/).
- **Eventos:** los elementos implementan `EventTarget`, por lo que pueden registrar manejadores con `addEventListener()` y responder a acciones como clics, escritura o envío de formularios.

## ¿Por qué aprender los elementos DOM?


Trabajar con elementos [DOM](https://lineadecodigo.com/dom/) permite leer y actualizar una interfaz sin recargar completamente la página. Es la base de operaciones habituales como mostrar resultados, validar formularios, habilitar botones, crear filas, actualizar contadores o cambiar el estado visual de un componente.


Distinguir entre nodos y elementos evita errores al recorrer el árbol. `childNodes`, por ejemplo, puede incluir espacios y saltos de línea como nodos de texto, mientras que `children` devuelve únicamente elementos. Elegir la propiedad adecuada hace que el código sea más predecible.


La diferencia entre atributos y propiedades también afecta al comportamiento de los formularios. El atributo `value` describe el valor inicial de un campo, pero la propiedad `value` contiene el valor que existe en ese momento. Leer la propiedad permite obtener lo que realmente ha escrito el usuario.


Comprender los selectores ayuda a localizar elementos de forma precisa y a reutilizar conocimientos de [CSS](https://lineadecodigo.com/css/). También facilita depurar aplicaciones creadas con bibliotecas o frameworks: aunque una herramienta gestione la actualización de la interfaz, el resultado final sigue siendo un árbol de elementos que el navegador representa y expone en sus herramientas de desarrollo.


## Ejemplo de elementos DOM


Este ejemplo selecciona los elementos de una tarjeta de perfil y modifica su texto, sus atributos, sus clases y el estado de un botón.


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Elementos DOM</title>
</head>
<body>
  <article id="perfil" data-estado="inactivo">
    <h1 class="nombre">Perfil sin actualizar</h1>
    <p class="descripcion">Pulsa el botón para cargar los datos.</p>
    <button id="actualizar-perfil" type="button">Actualizar perfil</button>
  </article>

  <script>
    const perfil = document.querySelector("#perfil");
    const nombre = perfil.querySelector(".nombre");
    const descripcion = perfil.querySelector(".descripcion");
    const boton = document.querySelector("#actualizar-perfil");

    boton.addEventListener("click", () => {
      nombre.textContent = "Ana García";
      descripcion.textContent = "Desarrolladora frontend";

      perfil.dataset.estado = "activo";
      perfil.classList.add("perfil-activo");
      perfil.setAttribute("aria-label", "Perfil de Ana García");

      boton.disabled = true;
      boton.textContent = "Perfil actualizado";
    });
  </script>
</body>
</html>
```


La función `document.querySelector()` localiza la tarjeta y el botón en el documento. Después, `perfil.querySelector()` limita la búsqueda del nombre y la descripción a los descendientes de `article`, una práctica útil cuando existen componentes con clases repetidas.


Al pulsar el botón, `textContent` sustituye los textos visibles. `dataset.estado` actualiza el atributo `data-estado`, `classList.add()` incorpora una clase y `setAttribute()` añade una etiqueta accesible al perfil.


La propiedad `disabled` cambia el estado real del botón y evita nuevos clics. Esta operación muestra la diferencia entre un atributo consultado como texto y una propiedad del objeto que representa el estado actual del control.

