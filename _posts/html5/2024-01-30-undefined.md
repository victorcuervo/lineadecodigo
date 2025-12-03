---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRW5NRG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T041946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC0DMyw9xh5bdZRtTUTtrZ1oDIWQjteZyMZJJAPAWKinAIhAKxiae8lWq9ULP%2B8myk7ihqCxjkKVPn4recuUHw42g4qKv8DCCIQABoMNjM3NDIzMTgzODA1Igxyehu%2BfErglo7Hp0cq3AOdyN%2Bas5OFtgn1ecmuNLq4A5vwXawXI22Gao8TIyLl7%2BsWqIV9rniS%2FXP5VC4Zxe5t4%2FWvN39Yvgx%2FJr9r6rkAGBw4vKAzXtsE6DJBgd%2FPaRZMQAhG6NR301xWzaTkJdKc4MSX01h9DEHGafETP%2Bb3uiuxsS2qIFc9XQHbmmbT%2Fu6ONuvsBiKi%2Fu2BwdnMl5MZnlQPXLR0Po9c8Ox89ijg3NH6stsBlA%2FLbNc22cDT8YsjZflX7NGamzUCDqGBuTV3eaiZVc9UAU9MytXfsLb8w5%2F1OQ3QiAOgf8Yit1OF3wANmPIm5SWsGXO3mZs2HmpNjzJbkC3E90xfiZkchHKWeJvOJJsQnv4qyi5wzPMLDFmGDzOZqU%2Bh%2F5qN1iIv41kZs5iciK4eaHpNQHiBN5PVHEGROs3jtIvylvEEbBYXlF0KlB56fleUrXlmGEVHpkCJiyHWppOK4oKw%2FexJi5jj13FLVvk%2BBf8xc5HdosIpgUoFUmYneh5pc%2F8anpycQ5vfUwXAIM0VGJTs5pB1dMKjaAblVT9n7INXEqg4sKkVz4h%2ByKtyppEzdOHoQGXrJcvZZDzhJIfm8Q1GbS3VSlgVF95RHhabNZVxoByHMjQd9bGyk%2Blqy6LN2YnqbzDSlL7JBjqkASzuZD7xqTiSzu%2F4llQfIUbJT03T710hU2iB4lDH5qrN95SkWXu9rpX1%2FPhn9d%2FjdLG8VLXV9ctJQiWPlSoGqXnhIUPgVt5OhKVTHuBrMutzXr1rACsrNVZ9U2mdMMEF0s%2BYApTI7rKWGTutT%2FXSBSiF4iEAHMF1Zd1rsU6JvBMXh9hPKrCAdXAAKusnFk4UKdejgrg1Go2oF2q0g8kP6SvsqDTs&X-Amz-Signature=2b9f407264599fe359183ae2cbe5c8fbecbd660d83c33e44078c49fde5954f31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ3XYYEB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T041946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDdFXXLSr3yYVjVlcV2EePy5GkYp00nNpH4GOOOmVJiiAIgMgMwXi7%2Fi0nRGSPpjtAyb2Hxuc66zdD2V%2BfIxEW5xzsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMwHIFHaStU01P%2BizSrcA%2FBtyBUltYsShI1omZsMNvQ65lBlPrhwZ9KtiOXK2ar7gVtSiJidD3saYg7QgQLOTGxvUG5MI3re8a0D4C9IpMNuNJAkWg4O6TW%2F3oMpXtXx4pLsILNGTyCdjYh%2Fp%2Ff1eOadTUUy1GbSHGVB3PNoGsGDCfTtwp972ZH0Pa8TmH96MfUR4I7vD7%2F2j5n37X8v0M%2FS4PmTFiayFfhjpuWGOOi6OZV4ObU0OIdEuTL02yh5t3OinSBx5UpWXL0B1cwMny%2Fz5Z90mHxKQ%2Bj1yP72BSbBUp6XLvgoUAZOBau9UlIEnMQBb28nyRIJUUqGN1wlHu%2BrAxM6oUZxk5IWemOBUxwXw9kJVGLIKoRPffdHISOh%2FAxO7Lxudg%2FL2zUGp8CfJVCgTbN8cHhw1nUpyxN%2BYxSd4JteL8BImSyV6aVvRiCucJ8GSEk2GfuGYaCl0f4Mx69%2FuSf6jE6lXZ4wP99PSQbzBrUiP17us23XZcY2yFxWf95Cih1%2FnycqUxrNSPhk5aYhS%2Bscr0GBHfK8D2NqeaVQzcs%2BFoNiH7y%2BJRDrsc76Wy0mqvqpQdpZtaU7s90odbK3%2BXo4xKpeBOx9rYIIKhWvRRVKF2myh%2FEFK0SA0eEGu8lQeh89IW64GtcJMLCUvskGOqUBvwYoUaT5BIIUfqe9X5nyhhbQWZHWwDq3wWG0rzF0jsyUkZaTIWXWO8%2BrTkXSOLzNghheuvD4gArEVIOtMzOJUXGn9fPotFN8wzQkd9TRDzyHoXAX631czAhFz4osTWQWKJdPGo78JNPI0Umc0rS%2FXw%2FANQsUNDXv2kC3Ms9S%2F51K63u7PGpuA7nSPP7n%2FTU3p%2ByW06FEZ%2BSyX7TLVVOKHPs1%2BN6g&X-Amz-Signature=72cf7402ec2192280df04e8b26337eb007aedd2054168b07b334a076fb3535bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

