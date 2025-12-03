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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RM7QTGT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T120658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDj%2FbpfK1cVSF4VMAUOO2kAU%2Bm%2BRGNza%2BaUe2I2odaeLwIhAMTJ86uwHusT1u8VjpkM9y2Mv7aPZfgIQywa0xmNQkZaKv8DCC0QABoMNjM3NDIzMTgzODA1IgwNUOWKKnytOZG91NAq3AOr%2Ba3NGbh0cq5xJ6MXNTP55%2B9PQHRksgdMGaNed95PkskQTXYDB7izDhuCSaPhaZRifb9sSWSoh6%2FdEcLx8mkbj58pZrRyDkLPpUhRuhyvkCWXeKYPMdYeiR2aZWd4CdbGibYW3jWOLyraxGVI7e5kM7QnsXfDUwKnFmfrrP9qWyArQp2s4L%2F%2FpDuPTIH0n2KWTZVOGsMEyN37fRxqaCxv39Rasifduj0hZRUhC20OVDlyrsti4SGD2yKGNCt1O25uLHrZR4Mo%2BTG9ZyvbT2a1Y1BegBbcS5COGJ%2FW9C24WDrUcNMO3BPXtIdo%2BJUC0C3nTxSZgQvyY51OC475b5EOITp8RjHlo13IwP4hR2YNFrLZLH%2FEAf%2FyNSZM1UJebF2Jh4BYwTdC7NBnrQue%2FPifSLnr2h51POAvNti99fJlwXBS1MvNUV3Hw9RzULanCOori4sPamBAmpCTnJIy%2BVg47haCWh3DyKKnIdnh%2BVPd8kl0SSvGWZZWgrKXuoXYZG4xN2eTQteXuiQ3gU%2B4eP5i7TWd7afWffuTpt%2FnUUtoVfgnvJL614DNd3FUMWCNxNt8MX9TTingFd8F0mIQTIj4Na%2FTmsY50oL2m%2BVL3wqu1NIFqE%2BbYyheCZV4XjD1zMDJBjqkAS4j%2F2fTJoWCNwkyYjXKi8ekhQWKznYWHtlpRxgdTCZC1rpQuTuFahWPAn7%2BEy8RjahayIlP%2FvDF9wvkXUFoLtIGhJnY3C2PAC32E2RF5NyMsT%2BZP2iLbQsttg12xiKlbponn3fI4%2FiHa6HlN6DdDdjUtAjqy5YpAUsjPutGThH0ywxhk5Fcag33Ii7X5K%2FKyOnYzA4JwHVJuX9AfIhXYmuFdPON&X-Amz-Signature=a5831bd803d7f6e0a9ad017b3b284159cd2d0e01b2c74b79ef6352bc0fbefed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JRKS6Q3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T120658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFTymWmFj0Evo00miTrWPDVh9jMWcx7JMUBFAkrFzDt5AiAvsnrPTrVdLj7%2BaoHvoZN9h8Gw%2BkSVL6%2FWzWqKKShZJCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMB5feqsJUN%2BEGqGgAKtwDqvYVazkv7CKbouSVHCEde48hljb%2FQjOG8LTk%2FVd4WEVfoixy1O%2FEFN%2F%2Fct3shNMkbM1s9rz1feEJ2Xi3bvIYS%2FW8o49nzJIn0Uvab6UP9AkVIa4eQ4HiOz8%2BXP7wz19LSJN70b26q2Wol8cq4n%2FG4TZK3M5hFZ396NZZhzejBxwOwRN13tL8q6aIRuiQ6F6XfeAeU7NuTc%2Fr2GyAexEMm91MtXpgBNXPHZxSV%2BKxEAPqv0alz6LEm7oNBaRM0HQ%2F91YOyBfdSlwxEQ98fc7O1mdRgruefxtO16G4mSGH0D3xm7b3icm6V7GqYv1XyFIujgtt28%2B5zxd83dtxVur5T2MBhe2G%2FAqU0P3p9GS%2FGbBNIhvER%2F9EB6Zg%2FTbvetb8LqODMy9aanJu4%2FxSfKZBV33Ka6F7f0mqD9qjIUFhBxyclOWV6slzVWCGa1y8OrR8yBi%2FA75EPxNEsPfv2cqq81f8Elr0bZztEJbI%2BsN%2FylegJzZCg93Txn0YcNOpMVgpSTBBnOrA3cQstN5jaTch1KiK%2FrWwNjNzYsmwzhgQ133Av9e8hn2aIUyF8tFbdHWtfGGLfDpDbhVzKhYHZSGxs3lhVMkoopC1THw6l8DPnWT5iTCwY1dPwIckJHMwu83AyQY6pgElBMP%2B4X77nEckKSgCwl326Hu8wvTBsMUCQ4Q2kPXm%2Fvr3gs20MvhiGAw%2B7PSXijuR6gEbqSvC7zlkDe7R%2FbJwMZoOhBF5KT9XcMIex8BWkpnbXdnImjPE0lzQFxsSejgJ%2Be9qNhPo6HA7OIhb8VZPCEbfByAY3f7vVTaYcZBnDNhbmcuM5LaONANVcRrcQfSHYbAkXcvO%2B8QFTwjRQpLmjxwi6Wow&X-Amz-Signature=1a8d335cfa8a21f64e578a29708c1e331c10d2cd714a91b795bb1a4fd642686b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

