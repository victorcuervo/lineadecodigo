---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
slug: /html5/mensajes-emergentes-con-popover-en-html5/
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYNOBZN2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZa8%2BMI04qXUqWuN8%2FM6m1Lpq4s9IhF3UxeTa7PP0TxwIgPqBGNvtj9O79z7gYqph8E2WRl8I4GQ1WjUlMa7B1cooq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKfFx55tTxH6PpGCxCrcA0fij0bW70BCg0taOb65E98lza%2BSTImY6Ns4UzNBxUONPIC%2FVdKrc2NLXFlE2aGQ%2Fj2ZxfRf9iG0Ng3M8ygpC6fJXfQjOS4Fpdt4D4%2BaDhQT5kNcnq%2B6IH7rr7eDYOYiYOuOaw2e4dP80ZLZ7x6bARM%2Bn28Pn6UYeAHbpIBfXhtkTTXehcdD8nMRjk0KFV2SypbTJ5qUQ8pVHYERPGzyHUUqM6sknfA2el7ShAtHxOBuW%2BVqGkzeIxRD1NowdOhTMHnCkgb7OKTvNyuQ4c5NQ6pGmMWGYGBzSbtxIKG%2BmdPT%2Bh65COZPDY4BJGEnhyr7tVty%2BwHZWDI9h88M77SLuHxxU8nCWBHxvh0Ail%2FYph5IN5rBFZCwOUNFWLAShXBG%2BlMF6%2FoNLAKtgDgyb0dPeBnKXWSPYRAaKrkrdYrxXRSKC4WdxGz5673hnboDMz0bkYsfHUhv8nR0jVaYa7HpgLErR1oYwJMEErsg4guF11yJy73CpCUpnCEvm%2B3dTPosbmJfiz6f10M3zk88W63rL7wDPyXMin4zn8w1Xc15d3iHHPBJj7WGp31qekZrdYNKANNCguWZCkyDQ%2FLFQtDMmknlSeehXs2CyNTLqIM4Y2jD4O6dWmnK6mCa0T%2BAMNXC0ckGOqUByGgS%2F9qfLrcygD%2FJxbJYXHMXGIMRYVg9h7J4TU6lY5PnNCyy%2FoaFMHbVygGaNao83%2FVURN68AHiS94%2BO06iKqBf5Hu47P%2F%2BnjuSIwbEDSCWyDKPpHWYSYtJmA5KLcMK2jJUW0Ca1CM%2FyXyV8P6aOUmv8nY9d5NmFwn116e3eE4yS%2BQXFY7IugWQ6pk5jwSW%2BnMYHyhbb5XJo1IxYLcV%2F0mDkBKY2&X-Amz-Signature=8b23edee404328f8a6c8d4fd559c159968e67f11ea541191033ffc25e18ed66c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RILEGFWS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCof0ku0bLR%2BLWg%2FYyHsPLibeite4AtHnfKH3WMpnK8EAIgVRxQVSQ60gOj30o4eOyidnuCTUeYGgyogTOU%2BqCL%2BvYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBdRaHevW5396hm8oyrcA7jSx%2BWhbp3UTIdp1miHgFq60l6P9a7Y%2B8gkA6Hg7IpzZErGhkjBkSHGYNjEAHPiJ0zfhg1v%2F7hXp1HN1yZatGBgBuALFigwXqxmIrS5jGBisyTkghe1%2FexPKsLKNlaOJTkoMEObgBMfm7743k4wJsS4lH9q7XhI5GNT0FqNVfIijrXBLCu7KHbvHC5LujrTdxWPfw5MMMHyAI2HOabHCZUy3TMhgWadtbqyW6%2BkHL1UUMAptQJcDkvehWrjMFUfwZ%2BIttS7f%2Fl9nW19v6Z4bwDvwnOxKWidw%2BS1p%2B8thpTkImHL768iuAPuM2chbBYQ4aR%2FH4y%2B27aqhf1Z0mfihpW5Kmyt8nPgimmQoICY4HF%2BZ9lV7IojwOxixL09u%2BC2it1TtNtgR8WAx7A2yMJGQk2ASVpORvblH04woP6uierZ59QTNawaa3bCcD6C2CjwaCrcBpFzKCKXy1eS1bPRGRFAwsDmfK%2FlnXfrFMQqmbbAx0RDjetl3aanIAOdCnh3TU2ZTjJfmhjYiKiZHIU2U%2BxHDYJdo4ZZ0PKfDK4y55fkD9rSoBUEzhHo%2B%2F%2Fi35QJk9gmR2gsGocwylMySfc7qGOyn6JYM5zPtnqv51nRALTTSH%2Bfu33Z%2B99nsXJMMLfN0ckGOqUBaIycNrWgtNQiPTeVd2ERAglxsqt6x8awe59G%2B5HuF6TqgwWiZwjQM1TfWi1wN5ZxIahRP5gs0hmydDoNkRj5SGQTy%2BKBQVudTgtC7UZ4qKwsEPT0usmHsFQFYSL1ZMLtjjIibMWckr9cGD7x3gbDTH5W8BTbD7PUJnHopdRUcHwrZu50I9aNnbHo%2BY%2FVAQRXsJbuA%2FzB4dqTtpM7AZcHQuiI3lsf&X-Amz-Signature=9cb364c6cfecb21fb40729833988ea985878a75d0cf1e86b053612dd07e94424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

