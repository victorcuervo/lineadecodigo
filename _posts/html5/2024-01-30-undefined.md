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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMSKXKO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T050428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICKxqc4JWFmxCr5vT5%2FegFUsSqyVuY%2BGHzTqqT6F7PXjAiBFTaL3dAze6lgX4zVnO7qgl%2BnhUMpLLR8bd0SP17YR5yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMlXW2tarHDYdsDPIgKtwDWWOJvL%2BJueBsojdmiugED8IgdtmGHBwtc85TZdlsQlqK7Nb9uJUZSDZmvvbZ74GzLLX23SnxcxECjAfdoVA1oRP4ZzYgcb04Cer%2B1%2FWnzlx%2BYl2Qav2oezA%2FulsEB61Z62y0bdG7iScUr%2FQ8tDNcdEW%2FsF8Y9Ue8H1EperQwvR%2FXZu%2B0Euu1n3EUtl24kXQgeFR8iUw%2FgRkbMa74dU0yc8nlZvn6TkeNJ1ZjAJMSWHIrcwcHQxUtNKz7OVaiWpvPSJdoSxRDqXxfcrfzgU2JWhNRIMwzngzTfEg5OM1QcpRze47Fz1pvhZDRrS84aa46DVytr12iS31r4ZzdIrQp%2BssjqwjL8kROWpReIFBVPtRLOC7HHTbaRN9IXez8k0dsm2ofYOjo8qAm%2FpI1KspiafTUUIjSdRNUp7vY%2FdV5bswPJ9sK2egcKcWsiTd1kko5UDNh9zxHQ7oImbJHbAek78awgDTOlTSgfkX3yHY1Re2VLfgFqyKyAsNrzUGIcoG5vg%2F7e5Upgj81zsWfxrUMwMycUcmjgzT9UmrGCmaMuPlImStXg1bhukVV2%2F9dlcuMeuP1bTkPlP6LlzLAvaVGRdbyZtcw8GTvkwgAk8We%2B2pnbeXnOgN%2FRp1sytUwyJS%2ByQY6pgH9OyW%2BDZDGuxv1La%2Be8%2B77YlJmFZBml45BNpjIM3amg5SvA5oi6gm1P6%2FPTZT5eY8pNC2QRCMzUDdquFguIeap3cFt1GFavDg0wQsfdYLiMms2afOp7Ale%2BW29ZQIrqEIQ3aKqvok1Pg3icAArli0i8Oh5yqvBPfhO3kK4CGAa7suGVbEs%2BV7CM1Lb5fPlXWoFXxipMm7LzzBGOvDmA2aPKbyD0xfO&X-Amz-Signature=d701e48053f006caa733f5d78cb39b29270b77b02e81beee34f56c7097a92065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BBFW4PF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T050427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCphetzzra2McxP%2BcaQsMKdTlLdG1MvkqMuAAmeT4hJ9wIgJMOtj4p%2FeYqJn1PdBxwdIEJd3qMLESl4cgcIFqzZk6Mq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMQ8qJdcqfGdsEZszyrcAyezN22p%2FlKYBkUWvZkj23hKrRgQEQRi%2BPDehDhuqdZ2wL7EmK8d40n4L1MVr7e3FQrVsNfhopXuflCN7JZh82Kh4L5t0ZPz1nf2UBHvP%2BqoMXoa5r82Q5Nec7szS42Yxc%2F8v%2Bh8riLMWDWnG%2FQngu9C47Yewu5LHxxcMJKSTHUsvx3yM%2FliJeaIPZ%2Bmvqodot5gCl5L5wvTbpb6RJAuGlo1qNnzvKiq7dncy7SYAHxYv09mnlW71Jc%2FMJn0Xj6Rgkbnh5CzXfFCRsqtXBIXvMCL4Z6kQ6UWddpnY%2Fsug3p%2FViKOAtR1pxGVEITJgVnlQZCGa3w31cF8ZPJW1N%2FzRPzYJiwGABBrLwx15d1mDzb3oG2zWNWoXmth6qSvtodN%2BiN8NAIgHdIfm1sa8q%2BOmZOaH6JmUE%2FgW%2FhmAfEB63roBBYN1XCvJBe0DJ2BH2QujRyPKk5ohNqx200m2eMjUFXwOtg%2B2O50iCf7g4tu2hsrKonMa3B0XQML9PYA65qMR5%2BhPNkrA2lGKNXZ2bWejX1vJ4bqxG82AOUoRgIe2sxj9aCtxC7huw2pfG07fvPFiX6F1msWk%2B2uiHb%2FLDzytPv%2BJZZqoiRrFHCrHOkEuc8EPgQRhvXSuSl2YD6bMLGUvskGOqUBvYyoYu3cNUybdlgZ5JnDPL8Wr%2FomxlzC3TomfYVZZ3Q9QJrjuMR8wd1Zkn0J2eao1bNu94lrdV23LqlU6I5jqJP0CRXNscVPHi7jAX5owMBpKVptC2lwQQNiDTz8PUfgtNBaTldNytw9EC2QJ5R8itCLhWv4Oj28vHew9UBoTDIp5M4BFX0zWRr4iKaHKx690xOtlPXJ49p0ooTedYRPVlLwL%2BXf&X-Amz-Signature=c04e17f4fd23b6cc275de7b9357e092b202699c38e59841c0270fb95a3cb5d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

