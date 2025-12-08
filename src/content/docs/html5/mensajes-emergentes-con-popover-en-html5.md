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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SQL7JQ3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxZIXyc0HWGVrTIhEre5wRRfdPBRUufwBhVsmuLQvtoQIgLD8DOHLIdYFHL%2FmNTA5wdSagUns1zFwDrmjuSb%2FLD%2FYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnIZqNuzShPxMwR1SrcA81NckRxAXel859Nytlglxgv6z2OAtjj04ad%2FzRf5p%2FgLy2jc5abooF7XJ4EkI8FXleVg7UY0B8N2rpC%2FY42n5ifkSQBctXsbVum9pgTUY4K2iduPTfKTR5TVpI69OXxjh6YcbaSMsqKzdlN7nkhX0WboRhwHxO4w4fK0lkg2RU0hftI30gC6FZiadlIOm2EzjwUdmC%2F0Dsyl2W99HXt2eqKDCogheomA6dHYe5%2F74K4hxrK%2BcciM%2Bc2FeHycPJN%2B0LBzShGaiZjzgQGT6aHiwceOYrAq1ezRSXeBditKd2HeLW30PE7gPjJH4k2r1PUSZ2yf1hnnJ695W3Vkr3Xv5wq9b%2BV1ZUaQUbmiUD2YGsrLdIMaKb8N5Mb462HTBelD%2BEe8%2BCZR4ZzRuZadWpun57TCtLiJbiQioseF0mgwCalDOtdlvHIuNKd0%2BUhmY8FByJOWgLkl%2B4BqdsSW%2FYEfCJY5stpa6gMhCeBxiMqflBbdXbsdA9AMoy3NxwsLPbDYEjU3DnWY%2F3oyherU6r%2F84PPWIzfC9zye6Cby2w%2BoVwThc8AbdKXVfFchwu887MEAp6j%2ByK91Q7JO7Gup2Uy7X30qYWKKdMloSAbFxAymREN2%2BM8Zz44wKrZvovUMM%2Fk28kGOqUBdgw0EBR7qEJguioaB3Q1R8%2FSaJKMMS%2BdljyfjTlQDb40ynPX6Q6q2Pk%2BmAiPOS1zX6k22grUYHu2TMIxKXtjkcEAoZgsaz7zD04j4y34tUupSUyopEHY2iX1mLjHGwhPfMl2EmoQ2CoFPfQ8vfSMr9qfcdxuQRDDRaKg%2BafvI%2FaAfC3cjRb8VB7%2B72%2FT9RGPmTfJVGO4782CrFdvtGx8YLpzZTDd&X-Amz-Signature=75a9028e0355c38911793b6fb46f217280d00718ca8cdb034b7c77a0117db06f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQXBIAX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGG5tPFPuEtUdblRNJU0cgdmBYTMcJznB1qRa6HiakL4AiBgDyJG%2BK4i38Xy3Z8BbMfz6vSfqJ6qSnR%2FMD56Ded3mCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPLMwj%2FcC7uhhRGzRKtwD3kn6CPuR%2FRlXIRyzpxtzicvmlKSBFyMbk8bzMX64EVtXfbCSJlKwV5uZvwbnP9tbdxZtTKYL3wCu6TXBgvavC8wcdrwtVGnGluPpcXZBG75tWx0TbRHHpIEdc%2Fe7ynOLQtU8zA%2FZf93KyLHD%2B9YnpcNZ8FYk8hr%2Bfee8geh76EKNB5tFdQLEoYLbTV4ahwosPlDjqlrL7%2B1L%2FacxE7jdJYRCVMmU4%2FqHze48Z0RxaNKO21c4kw6hQn46%2FxOP%2Blm%2B6x%2BsnkdE1o8kjM4H9H4BGVJcvy%2BGmt1Dh8ML63FtpLoduY%2F6m3mRqH1wTho1FHtMArzq%2F809u9kB1JFwfxKpDP1EVHTj6JnkXrDG8wnJXAZpVyT1ecqq30oawc1sOEruO4AXDU6SwAxDSm1Oc69I%2B2qIT%2B9caMfiEsGG7UV04wIU%2FaVUNJJYhmWQM3sgtEPaJhqsCbSSS7YBfoF6gjWp4fxL4GEDo4NwKzBZgKcCyN5zSrE2Bt4bEQm4HSReVl90BLwd8kpJJBsacaH83dtwiPZ%2BFDYB3%2FWTa6MQeynnLEw%2FtB90Gn46hfuiGT2D%2FDrCr862hS9UaRY%2F%2FVyKwZ33JF2XURfZowVzjUG5B0bLSgJwNSzzt%2Fw7d39vFOowtuTbyQY6pgHrCahdvxD%2FGaWLxo2fRYBkTJ9eeZ6mbFJv%2FJ1yxAgtxU1J7Uu8RH6APoiO6tWZMhqLxvhqFH5uHXcNZ9ZhmDthWaSucPTbtltbGKa6bWpS6lV60Os89nw70O9PJ0WBd3VKjqcybj5QMUOrV2O4IkWaV2LxeBzUzsio5KXDHXhadr2cM%2Bakhd02rAoNPvhWVVQf5XzSaeB85FXCXc0jz%2F3DkX3%2FlviY&X-Amz-Signature=2cef107a9f5f39cc46031d820f5bb622313776b2f78592ec9b2b7fa9673c838b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

