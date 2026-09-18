---
title: "Formato para enlaces a teléfonos con CSS"
description: "Formato para enlaces a teléfonos con CSS mediante selectores de atributo, ::before y estilos accesibles. Añade un icono y mejora su apariencia."
date: 2020-11-23
updatedDate: 2026-09-18
tags: ["a","href","tel","content","before","margin-right","color","text-decoration"]
slug: css/contenido-y-pseudoelementos/formato-para-enlaces-a-telefonos-con-css
type: doc
topic: css
id: 816fc6d3-5699-4d3f-8242-729fe6e2c04c
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_css/blob/master/enlaces/enlaces-telefono.html
---

Los enlaces telefónicos permiten iniciar una llamada al pulsarlos, especialmente desde un móvil. En este ejemplo veremos cómo dar formato para enlaces a teléfonos con `CSS`: cambiaremos su color, eliminaremos el subrayado y añadiremos un icono de teléfono mediante un pseudoelemento.


Ya explicamos [cómo crear un enlace que realiza una llamada telefónica](http://lineadecodigo.com/html/enlaces-a-telefonos/). Aquí partiremos de ese enlace y nos centraremos en identificarlo y personalizarlo con estilos.


## Crear un enlace a un teléfono


El enlace se escribe en [HTML](https://lineadecodigo.com/html/) mediante el elemento `<a>` y el esquema de URI `tel:`. A diferencia de una dirección web, el valor de `href` contiene el número de teléfono:


```html
<a href="tel:+34695685920">Llamar al +34 695 68 59 20</a>
```


Es importante utilizar `tel:` y no `tel://`: se trata de un esquema de URI y no requiere dos barras. En el valor de `href` conviene emplear el formato internacional con el prefijo del país, mientras que el texto visible puede incluir espacios para facilitar la lectura.


## Seleccionar los enlaces telefónicos con CSS


Para aplicar estilos únicamente a los enlaces telefónicos podemos usar un selector de atributo. El operador `^=` selecciona los elementos cuyo atributo comienza por el valor indicado:


```css
a[href^="tel:"] {
  /* Estilos del enlace telefónico */
}
```


Este selector permite tener varios enlaces en la página sin añadir una clase específica a cada uno. Solo afectará a los elementos `<a>` cuyo atributo `href` empiece por `tel:`.


## Cambiar el color y eliminar el subrayado


El primer paso consiste en modificar las propiedades `color` y `text-decoration`. Así mostramos el enlace en naranja y eliminamos el subrayado predeterminado:


```css
a[href^="tel:"] {
  color: orange;
  text-decoration: none;
}
```


Eliminar el subrayado puede hacer que el enlace resulte menos reconocible. Para mantener una señal visual clara, podemos recuperarlo cuando el usuario pasa el puntero o navega con el teclado:


```css
a[href^="tel:"]:hover,
a[href^="tel:"]:focus-visible {
  text-decoration: underline;
}
```


El estado `:focus-visible` facilita la identificación del enlace durante la navegación mediante teclado.


## Añadir un icono de teléfono con before


Para colocar contenido antes del texto utilizamos el pseudoelemento `::before`. La sintaxis moderna emplea dos puntos dobles, aunque la forma histórica `:before` continúa siendo compatible con los navegadores.


```css
a[href^="tel:"]::before {
  content: "☎";
  margin-right: 0.5em;
}
```


La propiedad `content` inserta el símbolo de teléfono y `margin-right` añade separación entre el icono y el número. La unidad `em` hace que el espacio sea proporcional al tamaño del texto.


El icono es decorativo: el texto visible ya indica que el enlace sirve para llamar. Por ello no debemos depender únicamente del símbolo o del color para comunicar la función del enlace.


## Código CSS completo


La combinación de los estilos anteriores queda así:


```css
a[href^="tel:"] {
  color: orange;
  text-decoration: none;
}

a[href^="tel:"]::before {
  content: "☎";
  margin-right: 0.5em;
}

a[href^="tel:"]:hover,
a[href^="tel:"]:focus-visible {
  text-decoration: underline;
}
```

