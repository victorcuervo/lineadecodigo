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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FQCH3RY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEZek7ojO4%2FYovJO3EN5Ay%2Bei7SONatE05Ioh%2FN9wiUVAiEAu6WRLdul9LRR3qtEiRfKNH0EnOuHmjFF66zQhIDVpMsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBlx1UXabpWNbqEDmCrcA4Z8NY%2Bvl1P0VNJVI%2BE5Rls9MwVBlIRK6BMpm5v7iY7I2Knsd1PA7CaQfnsdVwjdSV32UGyDT0Rroa8tBAtjieEKmzHNZrj7gIOpeC5kbKiCvJfqThJmq64DGvmXdrU1OsK4bGpHavECnwg4q%2FpfXVt1csnQPkSGbJ2MaO7BLFCnsB6tV4eby04KSKD5MyXKogpGTsGn0SDRChygJvMN9%2FLNMYCRAj4tXP2LnQKEoSFXQz6eFm%2F%2Fr5Zn%2BGzc9MYFrWUSVv%2Fdp6ekpGHDV6E473wS%2FbviX6Sf3zh9wOwxiCPClZv3Y4GQgwA00QZJP4DWwlkPk%2FpdLNxg%2B6zGkX2x7Uh116J3A2kafRBesbURRtp1ecFp%2BKVPuD3WBu7kH%2BRwxm6uwp3jVbrzSknweXTrKwXKyYfU%2BupxRcNoFwrgcIhx%2BaXDws9lzm%2BYnZd2zVhldBdMgBmmJ1Ego2WnlKBKSF8vAZX4mkay1rolCdq6pXZXduazc3qKDqvcWS%2BqFMYq9uc4IbG%2Fj%2BDrP3lyHsUs5LQmnQ8ubUS6Pldd9PxRu5pogRyB3dTQKtI7QMYqXT8duNhi%2BIChBCE8P0x7i2G7TSV7pR3IXc5WWXcSm32y6Cpl8sKjK50IN4XfaVThMIKWvskGOqUBwWHtu%2FVMlB0Glzj7ZgBboY4k%2Fc%2FoopBFfazjSSUmxCZCm8aHx0hjO7ryu7pF3Dey9FezCLOZJwME%2FDZnb7aKeSCNoa6%2BhYelZ77b2UbzsV2nvD2MHpRHKGuBBu0Mm86skjkGJ3APYiDKPHNT6fOQN1QJfJ%2B%2FFeBm3AmLX6yFHZsTS%2BtP7crebWiosiItXn0OurguFNQw5OHxOom6OUiaKHD1ZGC%2B&X-Amz-Signature=f2d021d0bb3ebe8586ce04c8abf163a80fdcb6055b896fa698e47b3c01433d54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UEUAS77%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD4gukMIRSLjmMrR%2Faq2kpAknRxQukAVIjcqssoVj5bNQIhANEI9uHLwQqmcmgZ7ZUMuOhUfTUZS9g7Xoxu0lwhQwd%2BKv8DCCIQABoMNjM3NDIzMTgzODA1IgyzciMOwRMa7yzykOwq3AOe%2FjAy09d3sB6iDtod4aRn%2FwbDCY3q27dBBBdQWgVao%2BROCcOFbeX8NFITi8VMDVYAEYtoj7hu5xV%2BuZMlMn3toE7ffGTZR5Pj6IY9E1m%2FGg24YfQltmxErLtPwymWOrfjn%2FR3hq7pqG3GvHngO6yKOa%2F8Wpbm9QQLppQKpZF5Etmlg8do9erX5%2FRE1fUYNDC%2FE2dgRs4F9IPLqfSajgVIowiZXDAp3S%2BmjpVxp3I6pnpNDtmQtRD5Agof6RMI%2FnoiqKvVc3euhR8PNReD1g67Tf9ziCjFhuIKMkxIm6GUT0i9zV0nNv%2Fa4jM21HT21I4IVYJy5Wcx2zxS%2BTpAuugZ88LAGdyxbnv5zl6Z%2B1u3r5ZlqLEb7Cv2Na5omkgtYpoOItUWjOCeIkNyoJwV%2BedJSkegzvnH3tL7CNFRJ0dep7gXIkIaL8%2Bs%2Flvy%2BtOxpw93w77b4XAoOSX1t4o48wCEaQn02es1h9rAM%2FIgaO9GU3CZOCLlTttE1GKH%2FoGsOYX3waZUVUbNXo3f0CgCyzUJ9euNyqk%2BqajHepHqf6Tkdho6SZOdYfRqCEkIrEN41cgF%2B92fvviC11Av8fAna%2BHQTU%2Fmd90Gr0XoMtJF6C9X6LSQmFm0Uypa9i1umjDJlL7JBjqkATHrpWZkbtl3TqWaGdTMEU11dvg6bdsxxvI2X%2FM9zLUlqYcceAzsH8do%2F17e69CnFLU9tiS4Byz4CZCbUoClxWQhbJ6PxY8BfFWC0T%2BK9Ky0%2BDLDGbeALkgK2FooQ88mrlQLGx%2BzatGxER%2FLO4amccT9EV9TU79OUabcdYJFPd%2B6XLAWXZALD1pCth3sDkEb2Nk3vj1wBxYUeuqjXAj7q88n5nCO&X-Amz-Signature=f1e7da4e6a4914cdff0607a8d7024f695142e96233c90ecf27fea76810b5962d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

