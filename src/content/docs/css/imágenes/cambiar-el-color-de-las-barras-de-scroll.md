---
title: "Cambiar el color de las barras de scroll"
description: "Análisis de las diferentes propiedades que nos permiten configurar las hojas de estilo CSS para cambiar el color de las barras de scroll."
date: 2007-11-26
updatedDate: 2026-01-08
tags: ["color","formulario","textarea","scrollbar","scroll"]
slug: css/imagenes/cambiar-el-color-de-las-barras-de-scroll
author: victor_cuervo
type: doc
id: 234e6446-dcd1-4fe1-b4c2-c0e9d37b0219
download: https://github.com/victorcuervo/lineadecodigo_css/blob/master/colores/color-barras-scroll.html
---

Si queremos cambiar el color de las barras de scroll de nuestra página podemos utilizar propiedades [CSS](http://www.manualweb.net/css/). Si bien tenemos que tener en cuenta que estas propiedades no están soportadas por el estándar [CSS](http://www.manualweb.net/css/) de la [W3C](http://www.w3c.org/). Es decir, depende del navegador web que estemos utilizando y del soporte que se tenga sobre estos elementos. [Utilizando la página CanIUse podemos comprobar que el soporte de estas propiedades](https://caniuse.com/mdn-css_properties_scrollbar-3dlight-color). Podemos ver que se realiza solo en el navegador Internet Explorer desde **Internet Explorer 5.5** hasta **Internet Explorer 11**. Las propiedades [CSS](http://www.manualweb.net/css/) de scroll que podemos utilizar son las siguientes: - **scrollbar-3dlight-color**, color del borde que hace el efecto 3D en la barra de scroll.

- **scrollbar-arrow-color**, color de las flechas.
- **scrollbar-base-color**, es el color genérico a utilizar por la barra de scroll. Podríamos utilizar únicamente este para dar color a la barra.
- **scrollbar-darkshadow-color**, sombra de la barra de progreso.
- **scrollbar-face-color**, el color de lo que es realmente la barra de progreso. Es decir, del bloque que se mueve por la barra.
- **scrollbar-highlight-color**, el color del fondo de la barra.
- **scrollbar-shadow-color**, son los dos botones sobre los que podemos pulsar para desplazar la barra.
- **scrollbar-track-color**, es el color de fondo de la barra de scroll.

A las [propiedades las asignaremos un color](https://lineadecodigo.com/tag/css-color/) dentro de un área de código [CSS](http://www.manualweb.net/css/). Quedará como el código que sigue:


```css
body {
  scrollbar-face-color: fuchsia;
  scrollbar-highlight-color: yellow;
  scrollbar-3dlight-color: orange;
  scrollbar-darkshadow-color: darkblue;
  scrollbar-shadow-color: gray;
  scrollbar-arrow-color: yellow;
  scrollbar-track-color: aqua;
}
```


Vemos que las propiedades las asignamos al elemento [`body`](http://w3api.com/HTML/body/) del lenguaje [HTML](https://www.manualweb.net/html/), para que de esta manera afecte a todos los elementos con scroll de la página. Solo nos quedará añadir a nuestra página un elemento que tenga scroll. Para ello utilizamos un [`textarea`](http://w3api.com/HTML/textarea/).


```html
<textarea rows="15">
...
</textarea>
```


Hay que indicar, que no hemos encontrados un navegador que aplique esto al scroll de la propia página. Aunque se pueda quedar en anecdótico, siempre es interesante las cosas que se han hecho para dar estilo y en concreto este caso que nos permite cambiar el color de las barras de scroll.

