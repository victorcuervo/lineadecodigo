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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRUBII3L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIA7PYuzAsvGd3cy8b62%2FcSQBl1Mo515NYv%2FcRArm7I%2BwAiEA%2F3YjagshgCVDDb0knNjdc0N2czYRTxBbTnVbYmQH0Tkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDC4BYcqb7cPOMyB%2FxCrcAyJexP48yELL%2F96A3QK%2BwfLhpM0k3foyA0jg0O8Tsr%2B2DFQIAmqpcs2ek6yhzwIJpsqEvVg5MT7u9jThDol4AxZ6Z%2FKkJK53ArQze7siUyHh6KvRdWl%2B1mn%2FzU9cojLWZIbjocBN408RjIwWbpvlnzdMmMQo5BpF7e3vMvYn2cn0IvgwOJ15c%2FN4%2FClhVZt8ki0QtAuE%2B7WFXTr3Yo1uOV%2FQF30RizGFffcfqjuDrzx5ZG0%2BZgY5viuB%2B75ziLu5g2i1lDoiIFG%2BtaoxfzdPxGDe4SPDg1frQ1GZ1fWIY1h3Znoep3ozeqPaTXE6jBoAMhW3bGvsdyAKEvrfuTXGcvpKTFJXY9f1hreOEBLPjDv2i3%2BzEasCuAY%2BBk4owKPZ38FzbHgrYqCnGzOfo69cKFdbKNkjT0DDlM6MsIPRN%2F%2BYE7GlOJ8uac5nZPc6EjQH5HDSLFG3%2Fqh8O98Qa2MG0LjRG8w%2BEgnySdrF1lwn6lBGQ2j2gmPJfvxkj1wUM4%2F0Vvubp%2FkEcMWIM4OmYjtjYiCgfK3YMBVPl5g9sazdd521LtcHu2q3t96vPUa42HSNVAr6vlZ5FaBli9TFciRUKXfl0viyvhSb2LTlEZ8QTbmh1e%2B2B2k69wkaapfwMIzawckGOqUBnwvPD9cqrk1vpHI5YZwUeliyUUCMZWp0wmbitRryM4QFcU%2BcwztMJMimcs1f3wSvBeIg79Wu%2BBSuXN3LskcUKUhNEc1yLof7hXK8iE5pTLlNWaJGF1Jwvqm18nU0xueyp7ROW4xwHbhPnPna%2FoniVOGAxo1GJuSfQGH4X07z9T2hBvAK10YRqRaq3MmhBOV64aomcO%2FL%2F8e7ZoIWQderjdG%2FE%2F0x&X-Amz-Signature=a9d0d55b841fe7b77d5cc56fe384bacf18c2a0384fcf51ec96bc0494190a9e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GFJWBSR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDJILNqN2FOnw8oxkT9i5MGPzyQhvBIIMno1Jl3CZZAjAIgVV%2B6BzieG78f6AqwvGnCfae0ilNSRI%2Bp2qBiiv1FKXUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPzbx3QAkEPD3i1UYCrcA%2B%2FlzLoWlGUU5t2Xr1IzTmjKwaN5bKrp3I4ZgdE5VLCOojpSbPkTfP2kXVwxEpdzilLj1de5V6QVqk%2B1HJWZoCI07qUK3WxEbGXMLE60aF9quePoCWlu%2BH%2BJvCq9CwtciYNJnJMi3nKYjM529jtGkGTNSttYPyimp7SveCaXzK%2F7XRHc75TP2EG7M%2FwKa34hZuFjluIrXcFglV3876PoMS8hjf3sGVeB2UnSLvCrYy9Wm5CH%2BBCaMzVKgiK0wJy%2FAxXPE9sOIWJUeD0EUD4NXEJ1fGSQKyq4NEo7%2FCUV9LZ%2BlNg1532e50rZGdrVTe%2FTAR7wb8o80UD1wPFDcdhg7LgVHBBB0cSMrURJ5f8wBWrEdSK31Ib7dwkaY8qCIa%2BESiJpxUD3BRxcFSYLCcifnRnEgZW1UdUA%2BJpIdTKqhHVmCTlux3im72xCpVSqaJlrO0q2IqJWM%2Fjj0soUN9mlftIZGA577F3acMB7HuWUF%2B5hVO3FAObu89Bm7Qbg7nZnLf%2FDWsXrV0ig157Zu5HNA5fbyaenRSQi6tcnYTI6w%2Fj2itUroiw%2BfoQpsN3CjuCHooSXYH3sUYZgGS6BdDWwsXIr1KNKFuZGgezI9ipLhjCAraNqtNJOsBtN6nuPMJfbwckGOqUBjETb%2BDK4hDymRVoN3zCgMPzgQ7ym0mh2sUb3sE6CMIDVroEq8a1BEqdstlzUp1MEPyapJnJtAEeUs5oAjMrsAJKUBuj%2F4LLB0dgJQXiy9x8qxa34a9CsOl5In2XoY0%2BhGsOhcjcSjXAwUCtaybOxvfWfytXvsBL0ic8wh%2BOWqUjdvoyGEGi%2Fn%2FK3jnfSIszCBowFcvFmmygRcYj7KXYc2jYQ5%2BmR&X-Amz-Signature=e5d04d8d1cd369f8fcdbe95df926e961450255ac2ed074fe4226c0f1bf141aea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

