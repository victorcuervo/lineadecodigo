---
title: "Mostrar elementos HTML"
description: "Como manipular las entidades para que podamos mostrar elementos HTML sin que se lleguen a ejecutar."
date: 2007-07-19
updatedDate: 2026-01-06
tags: []
slug: html/entidades/mostrar-elementos-html
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-81e8-ac99-e2ac5a60b1d2
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/texto/mostrar-elementos-html.html
---

Si estamos escribiendo artículos técnicos sobre [HTML](https://www.manualweb.net/html/) nos encontraremos con un pequeño inconveniente. Y es que si ponemos directamente la etiqueta tal cual es en [HTML](https://www.manualweb.net/html/), esta, no será mostrada por el navegador, sino que el navegador intentará ejecutarla para cumplir la funcionalidad. Por ejemplo, imaginemos que queremos contar que la [etiqueta BR](https://www.w3api.com/HTML/br/) sirve para crear un salto de línea. Si nuestro código es el siguiente:


```html
<br></br> - Sirve para poner un salto de línea
```


Cuando el navegador ejecute el código, leerá la [etiqueta BR](https://www.w3api.com/HTML/br/) y, efectivamente, nos creará un salto de línea. Pero no mostrará el texto que estábamos buscando. Es por ello, que con ciertos elementos utilizados dentro del lenguaje [HTML](https://www.manualweb.net/html/), como son los menor que <, mayor que >, ampersand &,... deberemos de utilizar entidades. Tenemos que conocer las entidades que representan a estos caracteres, así. 

- &lt; - menor que
- &gt; - mayor que
- &amp; - ampersand

De esta manera, nuestro código para explicar la utilidad de la [etiqueta BR](https://www.w3api.com/HTML/b/R) sería el siguiente:


```html
&lt;br&gt; - Sirve para poner un salto de línea
```

