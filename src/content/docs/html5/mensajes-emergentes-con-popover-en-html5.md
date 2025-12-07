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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7EO2RTW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo6PkU0tAGKnyu6mgtvu1DYfCKSIaSYLRnKShw4zr%2BXgIgAq4ove9KCDfHw7lO4IkXvnDlPazow%2FSfxOJ1GdFkEZwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtsziETjZKNhQaaYCrcAwZOZEaiIm4oxFUsC3Y9RjI67ddzp%2B5m%2B4fIA49oeIU6H7EfXHo9Lg096bdZUHIjOodzBCeKS%2FgIFCRJ%2BeAYUtzPZDjU%2FC1o%2BgqQgmCFNsxq7BCo%2FpMIEzF3d8WJ5irZXC0coYMy%2Bf99300PHqAoG7VHbP5RfEkA8dBMCWQJCEbFRzB%2FWCRCZ2ZYeXpBrHLjRIp55bjA5ExfVElvEF2hTZpKePvadFb71mXP9rjGBByXtsWX2r7HoFg1CRyWdBu0qjqfDhh%2Bn8oxL8%2Fwg2jhbfOwzS8g2zx03EFHa%2FnYRPlZlpfxFq2As6wSmWS2RDIf93i%2FKvseI%2BOpMs5Pq1oXexEBp%2BJq24hcNuxlE4uSlI53X3Zt6LVJMNSFMqTn0NoVJGSUnmV3Oss1Z7QotfxZY%2BNwaL%2F0%2BFwMYRsgJoF0uyU9iy5v4%2Bpwr2QzY%2FyHkEbAY0mclXZNqfExOLdih7sJ272on5c9Nt4BPmps9nENzFvULmR22CCEQ%2BK2Yx6cb0FgUfyu1M%2FCwbs94K14BRwb41t5Gy8yQwv02I0VA%2FKX9MEWop%2FHgozmniHUuvixGZYDW0fbt0E4nOg7kHJFMlZtywSPtzJnm9Ffy94x%2FkTW%2Ft9ERqQZ%2BDFxTmp0naXHMJOo18kGOqUBPildsjI%2FHVQ8UvJsu9hVVS%2FIDJaC3QGrD4jMgzdRaDsVhyk6L6juv537Xr0I50D2UqWxqXhVsFliqRIE3S832YnxakD4DED1uohZIuJLussCAWPXkp2qgFDoUcDkEEh1q9osU2T8p9rrbNyqrArJsFPMAGITSVhDsCn5umlBNNYwbKpsTJyWevk12HVcdbRC7YS7kJGHirYHPs38OLLeVW9D%2B%2Ftq&X-Amz-Signature=3f0105c93582f30f7dbc4ea4901e00eca51211f009354989ef4d8309ff0d58f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUIKMIHJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk4qUWR10ddf9c%2B%2B%2F%2BjBAR2%2FArzE%2F5mHXMn%2FhyyQ3GgAIhAKEsKaJU5I%2B%2FHFqQT6v3HQkT%2B6yXAHJgG7ujA14vEEcfKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwsxo6pOvZ5zRVA5%2Bcq3AOdxbV5NTs0%2BQb%2FN5%2FjFxcdXCtscfqbXBrD7ryko94aDJFLqYJ%2F7H8TMtaepe8lqXOX25covPeYPPbjngweNBWhYAtLisQPzN1wmt%2B27ulPWRK0AuFTm%2BmLQi5IscMX7ye1FOSfHXY9EoJZuInv5Iaf8bkbvsmOD54kOOO7aAchSYmad192BizB%2FwJXC1BjvZguI%2BxeIgshP2rVX4X8Cwq9v%2BuBZ7GUit3BofGx6Az6JyLT4s8i%2FlFrAXS%2FhieGW1xH%2F8hKhcRAct68oj7ei%2FccoiZTWXU1mQWTCaWCLJyaTFlzPlZU%2FcMsAqyWmEc%2Bxqq5%2BLM9wFxAWJSJWNyZStZ2ANb4vzaHe%2FmW%2B5BTJlglGYhwDVnpYM9jenoQeW8QSE5%2FQtAvuXUxBSqo%2FLvHnx02qwQV1IIagQEX7m4izPTvcwoMWOBdLJRJVU9uJbbkmFJAtY67Jr9c8uQGpXoFfkwmw3gDG8jd1Sn%2FkIl491HlgG%2B5AjTrErmn3%2FrLdYNi7%2Bz%2BeK3ZE7Q5jbBG%2FynmEZ50tBQj7tyNndwaRVBltvCk%2BIaem4OqGgdYWaq2WqBU0HOyoRO0KRHRdExCTfeDCkecis6nyNbt%2FdFhZ6tCIO59IbkLFYcnqlrvv2wPYTCDqdfJBjqkAaFUuSMG%2BRQ6KzzGydKzDdxteebH58fZq6fl1ETliRDwdHtbPPYMQImHl0CfE%2FE4qOb0K6hF%2Ft0Xn7RHmCi1NwIqalZcuib77iRsEuziZTcOKXj9nW2u3Zr%2BnROYWfJlXCA9RIOeYv4NdbmQpOM86yQqskgMysFA7Kk0wAAI43IP5p0%2FcXmlyWZvpod%2B1FbSoQFesowKNSag0i0sak7MTt98kiuY&X-Amz-Signature=470c683fa224852d05eaaba065688caf4bb02a7c82481ae8be8b72e4d64cd517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

