---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
author: victor_cuervo
---

Los que hemos trabajado en el desarrollo web desde sus principios hemos vivido lo complejo que era gestionar una ventana emergente en una web. En este artículo vamos a ver lo sencillo que es crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) siguiendo un estándar.


### Un poco de historia de los mensajes emergentes


Y es que antes de que se estandarizase, y pudiésemos crear [código en HTML5](https://lineadecodigo.com/categoria/html5/) para poder crear mensajes emergentes, hemos pasado por muchas épocas y alternativas diferentes.


En primer lugar teníamos las **ventanas emergentes o pop-ups** que se abrían mediante JavaScript. Y se podían mandar mensajes mediante funciones como [`alert()`](https://www.w3api.com/DOM/Window/alert/) o [`prompt()`](https://www.w3api.com/DOM/Window/prompt/). Incluso se lanzaban ventanas emergente que se ponían en primer plano y que acababan bloqueando la ventana padre. Estas ventanas eran muy intrusivas, no cumplían ningún estándar de accesibilidad y acabaron siendo bloqueadas por los navegadores.


Después llegaron las librerías [JavaScript](https://www.manualweb.net/javascript/), como el caso de [desarrollos en jQuery](https://lineadecodigo.com/categoria/jquery/), que nos permitían crear ventanas modales, popovers o lightboxes de una forma más elegante, pero seguían siendo soluciones propietarias que no seguían ningún estándar.


Finalmente, con [HTML5](https://www.manualweb.net/html5/) se ha introducido el atributo [`popover`](https://w3api.com/HTML/popover/) que nos permite crear mensajes emergentes de una forma nativa y estandarizada. Esta nueva característica nos ofrece una solución integrada directamente en el [lenguaje HTML](https://lineadecodigo.com/categoria/html5/), sin necesidad de depender de librerías externas. Lo que nos facilita enormemente la creación de mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/).


Además ha introducido otros elementos en [HTML5](https://www.manualweb.net/html5/) como [`dialog`](https://w3api.com/HTML/dialog/) que también nos permiten crean ventanas emergentes de dialogo.


### Casos de uso del elemento popover en HTML5


Antes de crear mensajes emergentes con [`popover`](https://w3api.com/HTML/popover/) en [HTML5](https://www.manualweb.net/html5/) vamos a ver qué casos de usos tenemos para poder aplicar esta solución. Los casos de uso más comunes para utilizar el elemento [`popover`](https://w3api.com/HTML/popover/) en [HTML5](https://www.manualweb.net/html5/) son múltiples y variados, permitiendo mejorar significativamente la experiencia del usuario en diferentes situaciones de interacción con la página web.

- **Menús contextuales** - Ideales para mostrar opciones adicionales o acciones específicas relacionadas con un elemento de la página cuando el usuario interactúa con él. Estos menús pueden contener enlaces, botones o cualquier otro elemento interactivo que permita al usuario realizar acciones contextuales de manera eficiente y natural.
- **Ayuda contextual** - Perfectos para proporcionar información adicional o explicaciones detalladas sobre elementos específicos sin interrumpir el flujo principal de la página. Esta funcionalidad es especialmente útil para mostrar definiciones, consejos o instrucciones paso a paso que ayuden al usuario a comprender mejor el contenido o la funcionalidad de la página.
- **Formularios flotantes** - Útiles para presentar formularios secundarios o campos de entrada adicionales que no necesitan estar siempre visibles en la interfaz principal. Esta aproximación mejora significativamente la experiencia del usuario al mantener la interfaz limpia y ordenada, mostrando información adicional solo cuando es necesaria.
- **Paneles de configuración** - Excelentes para mostrar opciones de configuración o preferencias que el usuario puede ajustar sin necesidad de navegar a otra página. Estos paneles pueden incluir múltiples controles y opciones de personalización, permitiendo a los usuarios modificar sus preferencias de manera rápida y conveniente mientras mantienen el contexto de su actividad principal.

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCWO6ICZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDHDE1%2BTciwnrbRPtXGkbI6tOAMf8wJ%2F4wXLAETgTy37QIgDxQd%2BrtvNpyJYs%2FrKDyx%2FuZlZD0a3YUMqE5Laum0Gwcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKysTE0r7q72THEs5CrcAy5n4SHkvUQn6hfgiI2o2RkhZDQjXL3FBWk1dqlmwgjmbo67POI4HILi62Uqj%2Bx0tL3nECqTsFe3d9u3ufZxkFnvBoiSe%2F4SAaiyESiUhoVE%2BO4xrBliAA9IgCVp22CduPLqgn68V5273oeddI8BvrCcbU5X43SGKOoIKYalNrJCUjeUaunwBSvOOf2bhYrh6l8IaCX9e1BH%2FTSkASlRGfPazcCd1JIergOI9zKH8oVbvrP4ozezSenOmVROwFfdwEBbeNwGJFcF36WB3G6VdKlI5cz2TVPCcthIABZTAARk7EYBU%2BjieWXjZBJXgUxJOOxeABxlP0QyXg3N1HsfZYh%2BfNSEQbeY4YwqYEMoL9d2UB8L8C47kzxKiPGt0d%2FICIZKd9BFQSaIYjPfjWqNNWJZs%2BG9WB3u97lhETFn3SeJpxAqDf9f59M8j1%2Bb4w1aFivXuNJ%2FdenHl2DAOtnVEKBSXL%2BPZw%2FsNthFRHMyuM26qyBQYEktvgaDY1vANcj3ZAk4vqXJ%2BZc8NnSajz%2BtzsquduCoXyh9LjjbhZoIaTQxM19vsuTV70JzsboPSxFzWgHR2Z6Bc7PoweJ23EeFoAFm%2BAu16m%2BmP2ZAEgMeLogYdGvoUN8zcprdrPDsMNWUw8kGOqUBV20tNL1eIWUvDU9pfpB%2FB%2BrW6VWYcFPV17htgHRqdqvv40W774P1Q8ZFQRdf5p3eWqKiwwgJjW2e4SimjXQgXn%2FhIlHcIOK49Vr%2F3aE1X66vOqO8Am0ALKoTSn%2B0XWnTQonKTHK%2B230W5m%2FbRzIZCyqml953H9xMezreknrDEnZWxVTls8KNf0NAk5FCTna%2FpHY%2B6K7sgWUy%2BcHlljx33u83%2FJo%2F&X-Amz-Signature=8a94c21f889d091e9c61f6f966cea9b2437d766efd1b8929ab7ce883de48ad92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Crear mensajes emergentes con popover en HTML5


Ahora ya nos vamos a poner a codificar para poder crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/). Para ello, en [HTML5](https://www.manualweb.net/html5/), aparece el atributo general [`popover`](https://w3api.com/HTML/popover/) que nos sirve para poder crear mensajes emergentes. El funcionamiento de los popover en [HTML5](https://www.manualweb.net/html5/) tienes dos partes: por un lado la forma en la que definimos el contenido del popover y por otro cómo asociamos a un elemento la capacidad de mostrar el popover.


Para poder definir cual es el elemento popover dentro de nuestra [página web en HTML5](https://lineadecodigo.com/categoria/html5/) lo que hacemos es asignarle el atributo global [`popover`](https://w3api.com/HTML/popover/):


```html
<elemento popover="auto|manual|hint" id="identificador"></elemento>
```


Es muy importante que este elemento que tiene el atributo [`popover`](https://w3api.com/HTML/popover/) también tenga informado el atributo [`id`](https://www.w3api.com/HTML/id/) dándole un identificador único en la página. Esto es debido a que el elemento que muestre el popover deberá de indicar el id del elemento que contiene el popover.


Así, podemos crear una capa mediante un elemento [`div`](https://www.w3api.com/HTML/div/) que nos permita el mostrar un contenido con una imagen de la siguiente forma:


```html
<div popover id="pop1">
  <h2>Este es un popover de HTML5</h2>
  <img src="imagen.png" alt="Imagen en Popover">
</div>
```


La siguiente parte para crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) será el asociar a un elemento la capacidad de mostrar el popover cuando se interactue con dicho elemento. Por lo cual tiene que ser un elemento de acción como puede ser un [`button`](https://www.w3api.com/HTML/button/) o un elemento [`input`](https://www.w3api.com/HTML/input/). O bien asociar un comportamiento de interacción a un elemento mediante algún tipo de evento como [`onclick`](https://www.w3api.com/HTML/onclick/), [`onmouseover`](https://www.w3api.com/HTML/onmouseover/),…


En el caso que tengamos un elemento de acción vamos a utilizar el atributo popovertarget. Mediante el atributo [`popovertarget`](https://www.w3api.com/HTML/button/popovertarget/) asociamos el [`id`](https://www.w3api.com/HTML/id/) que contiene el elemento [`popover`](https://w3api.com/HTML/popover/).


```html
<elemento popovertarget="idpopover"></elemento>
```


Por lo que en nuestro caso vamos a asignar a un elemento [`button`](https://www.w3api.com/HTML/button/) la capa que acabamos de crear:


```html
<button popovertarget="pop1">Haz click aquí</button>
```


Vemos que utilizamos el id `“pop1”` que es el id que le habíamos asignado a nuestro elemento [`popover`](https://w3api.com/HTML/popover/).


Otra forma de poder crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) sería mostrar el popover sería mediante [código en Javascript](https://lineadecodigo.com/categoria/javascript/). En este caso tendremos que asociar a un elemento un evento y en dicho evento mostrar el popover mediante el método [`.showPopover()`](https://w3api.com/HTMLDOM/HTMLElement/showPopover/) del elemento [`HTMLElement`](https://w3api.com/HTMLDOM/HTMLElement/).


```javascript
let boton2 = document.getElementById("boton2");
let pop1 = document.getElementById("pop1");

boton2.onclick = function () {            
    pop1.showPopover();
}
```


En ambos casos, al pulsar sobre el botón, se mostrará el popover a pantalla completa.


### Diferencia entre popover y dialog


Ahora que hemos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) mediante el atributo [`popover`](https://w3api.com/HTML/popover/) y que sabemos cómo [gestionar las ventanas emergentes mediante un elemento dialog](https://lineadecodigo.com/html5/mostrar-una-ventana-dialogo-en-html5/), vamos a ver sus diferencias y cuándo utilizar cada uno de ellos.


Las principales diferencias entre el atributo [`popover`](https://w3api.com/HTML/popover/) y el elemento [`dialog`](https://w3api.com/HTML/dialog/) radican en su propósito y comportamiento.


**¿Cuándo utilizar dialog?**


El elemento [`dialog`](https://w3api.com/HTML/dialog/) está diseñado específicamente para interacciones modales que requieren una respuesta explícita del usuario. Es ideal para situaciones donde necesitamos que el usuario tome una decisión importante o complete una acción crítica, como confirmaciones de acciones irreversibles, formularios de registro importantes o ventanas de configuración esenciales. El elemento [`dialog`](https://w3api.com/HTML/dialog/) bloquea intencionadamente la interacción con el resto de la página para asegurar que el usuario se centre en la tarea actual y proporcione la respuesta necesaria antes de continuar.


**¿Cuándo utilizar popover?**


El atributo [`popover`](https://w3api.com/HTML/popover/) está optimizado para presentar contenido informativo o contextual de manera más ligera y flexible. Es la opción perfecta cuando queremos mostrar información adicional, sugerencias, ayuda contextual o menús secundarios sin interrumpir significativamente la experiencia del usuario. A diferencia del [`dialog`](https://w3api.com/HTML/dialog/), el popover mantiene una interacción más natural y fluida con la página principal, permitiendo que el usuario pueda ignorarlo fácilmente si así lo desea y continuar con su actividad principal sin obstáculos. Esta característica lo hace especialmente útil para mejorar la experiencia del usuario sin crear interrupciones innecesarias en el flujo de trabajo.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KPCPOJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIChVBGL7ZqW%2FYDjq0YZzoJRkdMSW0N0eRBmZTn9EYsLHAiEAutGIJKJ4AyhVjruB%2BGRprCjsbBGqub3irGfOvl%2BPl74q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHw8dyRODf%2BgtxffZircA2rcMXAr9D6t82zFBsePimkKzhqBrMqBBJC2X1k%2BIlbkjCpWr7dxqtihMpMJ%2FLq0G1jy5%2BRqf9TJcV1Pa2waEzH3gHMmA24XasbeO2vnwWIAU96uUFL6VR1Rq7tkWiamTp57WSb0SkrsWFcL2Mdj9P06vFICh7si8ePzJiNBfuoIAKFSfm0PhOwxafsiQohGtf52nKtnFXdPMG0W1W2foSqjuJU7bQ%2B3HYpH0rsBsC7sVlRQ4SAJ%2BdX62zjBPtvZcJudWXwtPwjogd%2F7SoE6uHm9XCgniZll6nVFOYCwy0xx3TjGVQzT8mBvnjcA5YW6W%2But%2FPKAW5TgTVtSH96NH7zTVclQzAincA83rIu86hTlzeVL0ohGX1uAQXjgzsQ7VNufq4U3rFwpGj%2BjFApf28nefgfk4ziiV6IdL9F6fz6C3pklfDlDhlYg7m%2Feq65GJgoJEOFb3oAd3DxgdRrigXrC5W%2BWFZhWj6qOb6bq9bO6Ursekqob8c58Wz2k3iNHhq2QnwHsL8baPoB8pLeRorcSAIgqLoUwUnU6LOvXya4u%2BrnL3p8GY07LG0FAI30k16Rxhrd0EViQo6PbaBGXP6ROMS3026q0pTyrRhuvEay4hlcuLgARznnM%2F34EMPWUw8kGOqUBgqbI9oxn%2FEV3yRQxTz8VBhsEtidLvYEfkATO1RL5b9n47hPxpLLQ37Xt2f4a1MFX1%2Bi%2Bz2rUrn9hmAuq2RJpjCGhHiKU6sKI%2BWt%2FRwaZfNV6VQl1gqqxTT9g5MDy6DOwafCXSTvuUoBxH71ZwlJ23D88Gtdqdq9vbSyVsSNO7%2BmYvLlUQ107xRFlqB2mDrYOeTGbsvxK4%2F6lyKF8QlXgWrvgFLIq&X-Amz-Signature=3dfb9289ee3c4fe5005b857b3937a42d750997b979c71c8389288eab917187b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

