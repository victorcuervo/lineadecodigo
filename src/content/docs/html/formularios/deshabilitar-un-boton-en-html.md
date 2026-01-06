---
title: "Deshabilitar un botón en HTML"
description: "Cómo utilizar el atributo disabled sobre un elemento button o input para poder deshabilitar un botón en HTML y así no poder interactuar."
date: 2024-01-18
updatedDate: 2026-01-06
tags: ["input","button","disabled"]
slug: html/formularios/deshabilitar-un-boton-en-html
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/formularios/deshabilitar-boton.html
topic: html
---

Un ejemplo muy sencillo y básico para aquellas personas que se adentran en el mundo del [HTML](https://lineadecodigo.com/html/) es saber cómo podemos deshabilitar un botón en [HTML](https://lineadecodigo.com/html/) dentro de un formulario.


Lo primero que tenemos que saber es cómo poner un botón dentro de un formulario. Para poder poner un botón tenemos dos elementos a poder utilizar dentro de un [`form`](https://www.w3api.com/HTML/form/). El primero es el elemento [`button`](https://www.w3api.com/HTML/button/) y la segunda es utilizar un elemento [`input`](https://www.w3api.com/HTML/input/) de tipo “button”.


```html
<button type="button">Soy un botón</button>
<input type="button" value="Soy un botón" disabled>
```


Vemos que la principal diferencia es que el elemento [`button`](https://www.w3api.com/HTML/button/) tiene etiqueta de inicio y de fin y por lo tanto el texto del botón va en el contenido, mientras que el elemento [`input`](https://www.w3api.com/HTML/input/) solo tiene una etiqueta y el texto va en el atributo [`value`](https://www.w3api.com/HTML/input/value/).


Ahora, para deshabilitar un botón, simplemente tenemos que utilizar el atributo [`disabled`](https://www.w3api.com/HTML/button/disabled/) dentro del elemento [`button`](https://www.w3api.com/HTML/button/) o [`input`](https://www.w3api.com/HTML/input/) de nuestro formulario. De este modo, el botón estará deshabilitado y el usuario no podrá interactuar con él.


Aquí hay un ejemplo de cómo se vería en el código con el elemento [`button`](https://www.w3api.com/HTML/button/):


```html
<button type="button" disabled>Soy un botón</button>
```


En este caso, "Soy un botón" estaría deshabilitado y los usuarios no podrían interactuar con él. Lo mismo se aplica para el elemento [`input`](https://www.w3api.com/HTML/input/) que también tiene su atributo [`disabled`](https://www.w3api.com/HTML/input/disabled/).  El código sería muy parecido:


```html
<input type="button" value="Soy un botón" disabled>
```


Este botón también estaría deshabilitado y los usuarios no podrían interactuar con él.


Es importante señalar que aunque el botón esté deshabilitado y los usuarios no puedan interactuar con él, el botón todavía se mostrará en la página. Sin embargo, su apariencia será diferente para indicar que está deshabilitado. Por lo general, los [navegadores web](https://www.ayudaenlaweb.com/navegadores/), hacen que los botones deshabilitados se muestran en un color más claro y no responden a los clicks.


Con esto ya hemos visto como podemos deshabilitar un botón en [HTML](https://lineadecodigo.com/html/).

