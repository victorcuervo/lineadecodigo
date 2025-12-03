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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JS6X5EN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIB3rmTK%2B5Izc%2Fa2rapY6SVTPo9ceHbjOkiU64rPGm42dAiBJtD6ixx1Q8xTWu6Am0Jzp0E1uIbNq7wwleJdfG9Ricir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMqutpl95E0dkxBYMXKtwDMPTgAaGfV2ot6zgXK2ROZImHoo11iV7ydQdGWTDnDoVqUaMH3PK3bTNPMJ6X20t4HsFhUFHTQ7KxAtTIiTbqGsbPawb4nXeLFdSR0uLiXCgWQDyumbRyhya5aWndWBaIqMrHI4NmVb4Ole26wtFGCfeOKATQ2iXS2rpUCSU6iTwRSc5Uup70ZpReqZZVkEAxTnh0L40x021mEHkd9CDRYsriBFbe%2FHUMDraIO%2BxgKTrn9v7SygvsgoMj0fCW9E7KOJbfkFXL%2FHyjfVMzTDJZDYZCejK2bIkec80SinRAXytSQnpeuq9l2mLckuzC1qY8KoBycEsfGM5oxyY89OscC3i7FguL1bCLO0qv22Usy%2FAMwM7%2F6pnZn8l5NzN%2BPOm%2F6CBcNK80Psm0Q2OLyNnqbajPMwS3gVf7wdMg4lf0RpdbQCXrFPxfUY53Z2qCTKtKx6J1ETo%2BIQxdDzsAauI8LaRFKnMJ2XCOHVSs6GpMY0sNqLGk0QFoZugNnXj5jL8BGBGUMamTanbfgSNQwcIrbmOIyADgWq8UuNe%2FiU0BzkDzrEELtTZ1I%2B74aal2gzvQG5%2FO37q9lxapZvy6juZS%2FURdfuUDJfDcWBGBwoYbRK7niXZ3QC3cvgZ9XLowt%2BnAyQY6pgFOFnwNUvrepL7qrRZDbnjpb%2BHBAjJduistqJ4muhuc3BkFSS0cPPvErI2SMfZOvKB6G0kaL99DBcKob1PA4NYC4T39fAMvXAc0sD%2FunzxYMTRqnSHLC4HaikVNl0kvkdfGtL07i8wmFxcb9M%2B2r7srMnPRxxPYq2kucWM7%2B%2F4xX9rEG4PGdGmo5q%2FurZllXr87yIm9lHKRlYjC1X3dKbjuTE27j0mT&X-Amz-Signature=93bb7ea1c0ad4fb416c62feafc31497293e80698c8431335d176323e209628dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJQRZSL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFwlDGOGJizDKctHBckh%2BMFN0Mcj2cJN2k4%2Bus6EzcS%2BAiEA63TA8FzbSxEQj7LgXf7gjVQZog37QHm1qvr0jYxNjUgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPiexXNBuxlcBjnFFircAz1DcewitZKaoqPtkwmxrG1RyT1iMs2gT97Wnk%2F00Drmcfbd0kSwSsG3dyJbiRNudE3PGt5v4XdCXTJaB1BZHX%2Bp2%2B%2BK3LD3KGTGamVIOgtPcDij1hLgoVk%2FkHdqu3pjcieTYQhhCz58JxT66ODyCqzbODZu4m1wjLGvUea1zFZdw0%2Fsg0z4MjZgeZZQJvodTx1XuEd5MRM5e4rrEO%2Fq52tNquSaE%2FUyRyE4FJobExM7g51TqWuO3OU0Lp6OazhQ01eJdKrs6x6dLa9CkeOOg75OrGLVihjiN0qDSLRfLcLdULN2uy8qDBndX35uSOsQoE35wwjwdYceRFLL4%2Fw9wuSeFF6BWo3kdvPlW9%2Fyw2YReRWc82JzRm1ZrBa3xCEGgdeIf6GS54F5W5Ea1TlIYyWOJj1mUniq%2B%2FIhCTbvdIReDdfW72fU7RExQhv6y0ywg%2BMPAzybnTJzrmDJdJIhnfvzF3ScErvwR3xFgg1yoMsRHBec25J80cS3DuV3B1VW6BuDygn0FBwr15u4DFFQfU9cOozJhIJRZxZXUcr4AHwCq3ydEIelhsPYPVbQ4kKOVAGTueSBPgM46enb2u%2FxyzOp6wMXQCk0u3r%2F9Nk0kK5ON%2BuNNE%2FtPx2lwDP0MJ%2FpwMkGOqUBpQmwt6z2003aGnyJmbdMlMtyifQkLZmtRQtNMDk9tilmarc5Od7N3venMntlLJl%2FXFOIlhp270auBWsElGyBA6qaLgpHlPNgskXY4F47CIw1KaeUzZlt0QO7whkmWgZOEUZepME2kEpT6C%2B6dHS1fcHQv0FuvuE80lMCP7dGDT%2Bl3FB6JA5R1FWH9zERB3hs%2BVIjN2kIRVSYY9XYZwKUYk69WSZI&X-Amz-Signature=72c27fc303b95d82859efa0aec7450f674429f20c8620f8b0f1fe621e2ce7bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

