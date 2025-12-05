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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VCDKKLK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhfurEyL0Jhg65NaXH31jMmPHiiUFgSLMnc1OlvuxBdAiEA1H6L2eJVMHMZuycnOiLOR29AA3AgVPcZPjmjJjKd5%2Bkq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDCcbV8yB2MboaMOm1SrcA37Qb2BiPWLO0ZEhMwGMsTsGsxudZyp%2FRezABiRSa2qsJEWxrVwBTwChhA%2BqTTuO2kSZkikRo7X4CLgGL%2F6K8V1mFwbopv%2Fm1%2Bo0bdgvfMeP%2BUs7Wp2XoaMI%2Fpv6ixHH5EOQVc6YZGWCFc8v6GcEuloCfk%2FwnPNvCpYWFV1bAkzAOmTzg4AoDLiGMlsEsKz8XOx%2BZAbsz%2F%2B7qQQjZWmxpT9rfbw4kdGN0oQSp9nbazanJAxASqMoIKzjrF%2FuxjUci%2BuZ1HW%2F%2BlhlTk6IcvgYWDzk89F8fO%2F%2BC5%2F4CcQr8QcYKkyvdC2HEUAv0f4Yb%2Bi5rrSL2kGCRaclhONhTEe42oUKFtww0v2SCXB3Hp4AAPL%2FRwQDF4KSL8CHgCPC51Jq%2F4mKNn5WXn99AnpA1%2FOXcU3aPgWOstzfk4nMmrKNX5TH%2BPuGnmi%2BQ8NBOE1HL%2Flg%2FArTmS%2F0DaaxhI%2FZDFybf7GepGkcvvElWirFGnNtl2J2sCaM4RAkJPQNDJP6MFzdFCyAEB2OAYj%2B0z5IWUoOE8tyElunW23B7Ox3AKb7kxwgEQZawtikv84kGmtmVEqTkq%2B44m2GHThGdt%2B%2BG%2BR8iaVmY8Xcq2ItFtexY0UDAOXxDSok9PgHqn9RPQrPMID9y8kGOqUBhr7HxzK7RT8dgdq8t95OHf0eDdbKs4acGKnfqYlfFx7MKxh%2Bgkx83UZ6OXBvU60xsPQ%2BN47U9I6YiVa7Co7iGECoCWX9zP%2B4KfntR%2B%2BgTiwrvsKRya%2Bsfpad83e2g5%2FoPLfnooQkwcT76WKjue0LLsw8u%2FUB0WwaoAHU4PjD6f7a8rmT6O3HUFJScUwhajxJqs%2FPnikHFYvsPgMOfGAeDLe8k6BV&X-Amz-Signature=5dec96d6d513583dedc1cffb6ee26f4bf0c2d9824d541ede71af893979dddd0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKUIWOCF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJfUQXNRI6uxDui0UANN1IMcEai18VNtX2KJEj0C1luAiBsNIw24gyxzpIZ%2FTDXz68ROshRCVpdaj4fupsX0WOOoCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMRT4F2e490XxQVOPxKtwD9GS0uOwB0zuaDgZGSSYWouEsANGCn6lWQKxhK3DAMfed%2F3hqPFViFiorAa4bbZf3iiVhF2G1BkLmY6Bgx3oQggNZ%2F8828nWp5Uz6XmeuzQj%2FdbE7xdouszc%2FSCZW9s1LFSpyxGjfJLsYdcSAIh3NenRJrewN7iG%2BkgicuapV%2FUz0%2FvLN9N%2BJzKqjkhCQw%2F1bpZhmU9bHMF7DDfHHRPsOmBgc8muvx9krGXKTvuSYbBQIJjr0d3NlKOxMXdRdakUPTb9Eix9W1JCxHo%2Bew61f5evN8mkBOqku37oAGm1lvkEinampAQjZ0cvsMDfPc%2F2knoEFO5D3IDI%2BpOBDhxnSvBM4OXNP6UspxEd4TQqSj%2B1OOZ2eOMvvo2AVq8JVvWWaRUYfYr0IgeKvBTX4PcDbk51M3H7bJL0A0EjcsZramFqlMqoVEvSV8%2Fc3IK0xXlfwcfNbcBvMC5Bi8PhMkSH6UsH5%2FSHFX%2BX4v29VHAJj29i2UCc%2BUF3AmydOiUfiZxkaKaFgrpHgYKyBwk%2B1V4hpTJUX%2F670KlbGUB5Ng5WoxNZRgKCy5bOkSZiWhjfmL3TTYe6g7VMLMDWL%2BWoy8dy%2FQ6bBBcqtqM44%2F%2FYFrQ4Klz2jKtYrHI9wWcDc5Rows%2FbLyQY6pgGyrHqWnniR8VYA7elQNWJ4Wtbxx5cTWdvUxhzVTOxGXAG767jpkgm5UbbjZEwFdldpWxpIzqLItWBbfTjpckSn8iMA4LP0OGKqWNCQSfYIePwZb%2B99LSZZ%2FplDM2alVQMMyEsIq11laCGvewAKyVDzX9yKT11YkDbdrybyy7j9ipUvMYWiXW9E8ww47RFON0uDSbE6cW5SqpiwMIfpbW6QkLHa0zx3&X-Amz-Signature=b0eacd353d0c56a50b0f697250403aa3ff6b9d7173e7f11b8a6b27120c186e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

