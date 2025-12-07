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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3XBCSJE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz4cv0BxX6rv5TvopRsbzhQzwlvkJbo3%2FOkyG5mGGtwQIhALs4UH19am1TTBAxqyqz83YoG5yxPkgUGkBuMPeZcoofKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBM64ndS5XuuvX3PUq3AO0%2FnWI%2BQlfi4SsN3TYC4agNq6tNY4AG9%2FrHQn5LxehdHVbpEbYEtoQb2oxP2hK0ObCxjGjCBwaVgOibZI%2F3FEITQwlDBy0MziBwkaJnM6G5G%2BX3SaK2Ea0zpvM7ngBGgDrWuCjE2zdAe%2Bxu27x93TUVTVmjQSrUu%2FQYncTAeVZum49FShiXkRGhAP5ufob85tz6UqFCInz%2BLDwzocG4awYKqhA%2FFWjEupMbTGfA6O8flCfMsVNdK7rtnwitXJsiTBAxcgVUbntgH7lLOJVxA2Joe6nWEL88H9GmAJP5NpXqoFCwmeOQaG%2B5w72jGE5Yzc9Ri2YcMAhnk8qT8qmSJisGjmbm7Hf%2BhIHZ3DSBI8i1CT9tC%2F6%2F2jpasdHWIAwREeO2UHZaWQaYy33AvUXPJDjPX4o%2FiX8dc5fBGENbHMBepHMc9NsVgmc3%2FzY38GSIKAdM3vve1Is2NA%2BFr7N21wn365gYgVw4aPJ3%2BO%2FmnSzL3ovSZiEP8V9abAHpaupaR3tt3Cdx6%2B7X1%2FWNuqsHwbDorlCUaxxnijcboFr0c1A99k%2BvJTVPQCElPunzYxKhV4dRWSzPaMQwsy4MZC68CkffDH0oxu9GEcq6s3rC5ZC6T%2FI%2FM9MvgyqBzmqazDwo9TJBjqkATVNLqQ129VK95Ljz7ka%2FlNHRjHxgAnM1aawwmEJgHwy7yr5O2x1llWaT2TVczZcmBORhN4wcMvFsy2DBUrhlptSg9gx5xpbK01CqojCJ2tU%2FSt9O3YVx%2B2HiE8fb1Zgk0XqY0jxW%2Bm98kBh9MCST%2BC0VdzkfhIoir8FkG0a5MtUhI5qUCBnFB%2FwnKHqauYzf%2BXNet87PVMrFEk3GHMtHc4FhBNj&X-Amz-Signature=bc8a34fbc004dd39dc5a39f7a577e77b1e0e59ea6647e785b2af5fee43ec502e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SGSXCLI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD87beT4kNQlN3Y4rhxvWC3i0cb3O7nPmwWVDHXnVUIKwIgd81B696VQ17E0CmqqEzzYeaHxqbwyvAEUjkFEg42K4sqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5DGq1KxHAalztjaCrcA8XQWehuAzKmdsm2EykBYm2HX91TGJjvN6Qz8aE%2BYQQANZeCi1LSV6gpPDJJFEmzQg9isLRGIiaOdVU02XdSniBBm8S2ydajTA5plog%2Fob%2FbJy4uNyTOLCmIXd0MG7MIdKtR8lY8PDR85Ntf8saBP%2Fi2fra0hBf%2BbJ2b3fhJb5tfT3V74pJUYG1ZLTmXbwr6SnNEht3x3FaQ2cl7421j0lbw1lxd2OXFkV2h5m2M7zltNRncf0u3oE0uym8FE3WyTBCa8fUv%2BkHAvz0j%2Fg3FCZtDysO9ATMdZhtf246b9L3z8QCdo%2B%2BDnZsjLVi7yfE0nHziMulzwA4wM2u8oty7EnuGhVHiASIw7eueBYOp7M8okzwvWRo7hxvNX8Z4ye3IjmuZtDi%2BxfBP4637GhnOCguyEaiEIrMN3AnB6aQMnycbKKq%2FN0SJD1oQyIRSm1Qa%2BT9%2B0Y9g%2BNVsYgL8gyA2EAAg72Qn7wxreSBB%2FyIcARVATZQrdGliaF4V9cKf6VjR47o%2F9HasC9%2Bbo46wxSSuA2e9zi3vVD5PkxF0S6KlYXBWsqfDP6ixnxk4wpENtvluLeIy%2ByKXgmhofjK%2Fr1Nq5AXU8Hzp%2BeG73yqpaFE5LrNRsonXQT5NKjh85fB%2FMJGd1MkGOqUBFSUt4eLPJsqSLh6SY8wf2EzJdmlJcb5SzK5wWMnMoCK1xyrdHoHWw6fsnKb01z6gqODtlP32xBusOVV8fnJjefG%2F96bWg2xGhQrvYWYLV3qF%2BEJx44c9WIk%2BLlFmTjyTwCpCMsnN6q9wxnbdqgscRJ8CNOzcs5y2ygi2LFOyYEA%2BZOLeX%2Flfl8mz7RV7EtR%2Fv0aM0Ja0BW20Nd6xFIa%2Fsp4O1YKu&X-Amz-Signature=b69a0931711629349ad474c59ad4a4f92ccf4c17f7b979dec1a107d734c00918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

