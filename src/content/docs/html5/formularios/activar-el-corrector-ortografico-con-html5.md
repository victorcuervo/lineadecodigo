---
title: "Activar el corrector ortográfico con HTML5"
description: "Descubre cómo activar el corrector ortográfico con HTML5 y controla esta función en tus formularios. Mejora la experiencia del usuario y potencia tu web."
date: 2012-03-06
updatedDate: 2026-01-18
tags: ["textarea","spellcheck"]
slug: html5/formularios/activar-el-corrector-ortografico-con-html5
author: victor_cuervo
type: doc
topic: html5
id: 5513dbc8-656b-46d6-8e38-816cf75db05d
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Basicos/corrector-ortografico.html
---

La verdad es que casi todos los navegadores modernos ya incluyen dentro de sus plataformas un corrector ortográfico. Algo que no sucedía en las versiones más antiguas.


Una de las cosas que podemos hacer gracias a [HTML5](https://www.manualweb.net/html5/) es la de activar o desactivar el corrector ortográfico sobre un determinado elemento. Es decir, pasamos a tener control de esta característica del navegador.


## El atributo spellcheck


El atributo que nos da el control sobre el corrector ortográfico con [HTML5](https://www.manualweb.net/html5/) es `spellcheck`. El atributo `spellcheck` está presente en todos los elementos del lenguaje [HTML5](https://www.manualweb.net/html5/). Los valores que puede tomar este atributo son `"true"` y `"false"`. En el primer caso es para activar el corrector ortográfico y en el segundo caso es para deshabilitarlo. Por defecto, el valor que tiene este atributo es `"true"`.


Así, si queremos inhabilitar el corrector ortográfico sobre un área de texto escribiríamos lo siguiente:


```html
<textarea spellcheck="false"></textarea>
```


## Modificar el corrector con Javascript


Pero no solo podemos jugar con los valores de este atributo en el código [HTML5](https://www.manualweb.net/html5/), si no que de forma dinámica, mediante [Javascript](https://www.manualweb.net/javascript/), podemos modificar sus valores.


De esta forma vamos a añadir unos botones para habilitar y deshabilitar el corrector.


```html
<button id="habilitar">Habilitar Corrector</button>
<button id="deshabilitar">Deshabilitar Corrector</button>
<textarea id="mitexto"></textarea>
```


Ahora lo que haremos será capturar los eventos click de dichos botones para activar y desactivar el corrector respectivamente.


```javascript
document.getElementById("habilitar").addEventListener("click", function() {
  document.getElementById("mitexto").spellcheck = true;
});

document.getElementById("deshabilitar").addEventListener("click", function() {
  document.getElementById("mitexto").spellcheck = false;
});
```


Vemos que sobre el elemento [textarea](https://www.w3api.com/HTML/textarea/), del cual obtenemos la referencia con [.getElementById](https://www.w3api.com/DOM/.getElementById()), manipulamos su atributo spellcheck asignándole `"true"` o `"false"`.

