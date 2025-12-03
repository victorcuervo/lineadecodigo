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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QZXUYEZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T000126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGrhzKHyIMI7c40GHujxGX%2FV98DbLYg2IZ6vGycjMuVNAiEArRmYOLTaao9LjpTUI%2B6pFCnOkBVg8yzbkLdprFROJjEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJnrokyCpMeTnInvkCrcA%2Bbd0UMlGiJNmRVXWcprHFA25jhI3nKHouQKfZ6NtNIOrpzLTrBCywODNXgDx%2B3mC866cVSNYvjX4z1WQ2oaODn8MBJi1WGNhYaheyTUwrwKnhGgACREVYFXDR9xIT%2FykLpTUroQoFs3D6ibWrOLbOyoDP67oQz9vHLjhz7GgzmyJ8bZhsFmawHDg6BRAFi4FIq0oDZGolAjEpZfXK%2BgCixdpIJRnwjiKxB6YRjO5BGtU3yC%2FQOV6OE49epAFCGqZWEhqIMj08m9vZIdPnNAbM6xcYhSf2zHEx5yBMiemGsbFtwrtHMEx9SDLDau%2BGzC91sqQXKiwH4bp4eBGxCtOJ7vw7WndX6wGkkTx3yDGLiHSSItSXrPzUUrqI8AKcvKgAFyDs0gTuZDYKEh6wJGNKTtWsWtEJfep6cy5Z314JcagOkr2J4Dnjo8QYRfq6H0gkOqBodsN8nC%2FGbkbGuEG6GMqJlLtPs46mzfa8X2JDMdKomYF160owp9QyOvSprHf8Ao%2FghaP3RmIx2obTWsW3Fy6Me9vFc5JJlDIU2Jc1SHDj3j8zNmne9e4Hj2jShtiM3bLgLKXaIbmHdSsgA3L2V2hNzi%2B9TO84o9i9aqKHe4m6Gs%2Bb7%2BCgBMfQlNML%2FkvckGOqUBTmr%2FO%2FfV707TRstrpk7N1b9%2BoQqPCpPAbfrZQd2iYlcYoWNP0E8gRDyZDAF%2FD7uTOvpkZqrwFn6VdR50DdDwx1fBRt3zAwZP3eShs0sGP3jqaZIoBBdbQiuB0tV0w4lRJoHtTJHVdxt91bb%2BTvVbimxBzbTLNalnR1uFsC8SAszQ2T%2FAOPk%2BoCtHMoOxp%2Ba5tQTU2cILVpaVbrrdtpp4INi1tz7v&X-Amz-Signature=50e2752b60193bfb98f90d4b0665244285fa411718fef395b807d28e053040ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2HOOXFH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T000126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAHvLpIvK9Wrbk3K0VCQM71JU4JDjjCuj4nbVs6ZOT2dAiA6F%2BEkp2duLmib12j0TToECO%2BIdWdWbtBFFbF6%2B5CqUyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMyuMw9mXKSxB3FttaKtwDkoBz41C6%2B1kCRUGR82m0mfdYKTQvstSXKF6EYwHmgjkyCBu6OIIk9CkQJk8hR0K0%2BmJ7dCZwiLvT%2FrxZwRkmXxcLevJGPRJHxhxzOd3dgww7ab5qIvPDIQIpteJUlAFvCb6x1c3tBZLL7etYBws4520dyLK97DxO%2B3KoYO%2FJWLvmY%2B5L%2BE5AWui9aoSuOf669F78PnKEH6VGm4hfanawjaNL%2Ffw3%2B1Kzs1fgUA9MFTOf0N8veA44Ofq3cTNBPsYFMa%2FIEXce7BMh2vMl8Ai66Aa2hhampEXDIoiIFMv9BPw8lkw6LifzJsaiuPr3H%2FAFmlGI82WTQhFxbnb1ByROP07EMbjacTY%2B5AuEunqRvke0cIPXhvhxXsT5TwUG4RG1UGB9mr6vsCwz0uSgaK%2BVuhQmhMzZDmKC1P9m%2BJapVKq6nGkHD8c0cUycfNBhDhth3Hjn1kgjWbQFq3Kb0cpeq7OM4ncOZbG0dqSzWAOwmmY%2FLWNIf%2Bd7sZu5MPoUDF2jLcboMEG%2FnD7crwxmeiatHU%2BcfEM6QHwYwarWm0TqkiB6e3S%2F7bdapeYZZw%2BG0LRGYqPeWCj7kaYd2DlOSSsHFZGFWJAd6JOUpoprhXfM%2ByZli4ypKAmvNM051rcwgeW9yQY6pgEGDa5%2BMG9hri9XqwgwNzcfqtt7%2FN97Pu2Xw3DESU5igSCZ1Fna23DCVMvA7vR5eLTpQHDYfXYFgt8mbnZQfvq9jvRcW6KsIpGgDhES1C130uRQxEbiM0mtUpo9XkCC14kgG1m%2Fj9JkQBoEh3wtp9ZeSR%2FHVfi5VLL8F%2F0cY6jmE5c7auYDlNvHOocYIwCI5zbSglI8srXRKJtVq861%2F5gs8WSQqLhH&X-Amz-Signature=4849ff1c20734aa33ec6b84eca32833e52ced362607e941f440a765026d6f5ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

