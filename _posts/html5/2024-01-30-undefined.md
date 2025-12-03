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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGSTEXAR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T115428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCizsV1mGI6%2FQxYguj2ENv0ghnD3jPxbHhmQIrkL9VP7QIgczfUlmtokOlH1riTR8GCHRw8XivV%2F5Jaeqek4eUInRUq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHsJqzh3rpMAvMVuhCrcA8IpJdKoRWx2irdou%2Fx3BqolyC1pcmE%2FDFav5ZYh7mq5i%2BhCuGeCNG1JiI7Bl0VJPG5sm0mlAFwD%2Fwhm4%2FGAUV8l2Y67CXD4Y802kNGgsV8ovJPcQiKW6MuKoF9wmS%2BSVjX0zP2T0JAxYgsxcuZkrgo6v0o%2FVLNtQR1W2hcvQPo86NSjtiQQYFGrBPTdP9xzEsAew2j50CpvyakEKxGjKawlZKsic4WXA%2FmBati6qRBxpZDj6RTkMcGe1PltxeNHaAYl6hDbJWXrpVY6thhtMQNpnJ9uZpEi6BAkZQ%2FJgYj0zvcBbzKE%2BMxN6JoizM31h6%2FFi2MHU%2BusWhN6fUtnRpD%2BAL%2F1768JszqZRMheShd62pBPWi3aBuIjxdJw5SIH7%2FotShGrxh8B%2BeKL5Rjag4Z%2FESOBBVz0v1OPpbWdNaXvE%2FCZKzub83bTWBi94m6yDjIihXLfUFBcweyj2%2B7CihI9K0swn0Pnf%2Bl1lyWb%2BPQfoXNSN0qVVYD2FugxjPVfiIF8ozHKQYTnNC%2B3PmX7n%2FrikK%2BMT3%2BBz9FJ3fQnc4HwDSoBNE8PaMCoA4%2FAtd7SVUCJrnoDUc8LbJvlkm%2BPv%2BAF%2Bfu%2BQUtNr7FbPqevD4jVbJUohmm4smfIfx8JMO6twMkGOqUBakOU011DlgVI32thY5GRxD9NPQ1iA9Fqf4%2F1%2Fs7GhNkG2aniXmKc0Y21AYHOdAfzHclvpbsFCgpz%2F6OZUz5AwJoug8ubeftcBAm6nwhCFjzdB5q13AjmSQ%2BmCFPe8ENRsvofkcfSFAY62wzbpwHYN5AXRWPljuAZz3157wu4fGrWumCAHE6GqePxDE8Ff8ITPig6tLXW3Br75RHGroFAKfBWiliy&X-Amz-Signature=3f9d23f5657ea326074a12b728b3bd5df969a17d45b408ce9fc1aad06def2039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDSOHW3Z%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T115427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCARV0tqJgO3v7GBHGqPKxiPS8tB3mraTfSmf9p9BH5yQIgDIbHZJno6Kk%2FyAagw6qNsJV2mzLxJna3Y%2F9xGCW40VYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDObQ7Mre1yZWbMWXhircA9yD7wSfi%2B%2B7Oz4KWvGXjgnDpTvGBEVtBiYP%2F%2FFDhmgNYIW%2FIH9Vyavnr5b4PE7SIEjkn1pDaLWNdzVFRtCMucP1XS3xkLSP8kPRhWmXCkIYE8ccUW21ODIy9gEROPeU%2FFnnAB3lpFDzYUI5ZpQjG9KdfM4Ltn1LBV97Jd1%2FcMjO1jvcYY%2BHv1CAyCxsyVCbML2Y3VrGLk%2F7G2tf%2FY9Dm7Aecsi88P%2F7M%2FvzX1cRuA7XBuCYayxkbar5ELQFxR40Z5Fv7UKveFSUiHZH4dz4Z2xUFnYtTZJYe5HIhfiWaVjWDTEwZUAhdmURLgSxJMTRqLhCLQmGjSuWwaqT57rckUiWNBz3xFX9ccRuNPqZjzrfAwNNYR2KY6qu55gSTUaJNcpzUNwjgIeAiCWdTwllY98xBKTavdO4kfpAQ5k0yZx5SbZFyfmLXUW5nYg8DedvQv5S7WqnU0EgFhyG7LxKoxek%2FW90JOKG0hHqNSpEImykRa2YJbE7aznWGKH8rtc6x9r5Ts0lYspyHbvRY4VVY6madnxRP5lnycBz%2BnlTaKD6WWlnORSNrOCzCHhWvkRd3q%2FF%2BLvmHNuhpGKapgxCFFmQBx565kpQ%2Bb9Ao%2Fj1dpw5oJ4%2Bu6fSt3J9whahMKCuwMkGOqUBbQCMwKZi%2B5%2ByHHyQfJ0QzS42gMohNsiYm%2BsLrljIlmipD8Tu%2BokhCMZ5iEIS37jlQO%2BEoeaRi%2FR8zDXcUXZ%2FFUKIHv05vi30I6XiX1SaUd%2FNmhigSFvStSGVdCCohtkz3saUPt618Yy0At7ieFhadc%2FVeJ5DjQrNwvSxpYf3J4OkLMob9qP099loRnn4uRKL0ltjT7rICTqPxXo4rhQG5nrTd0hk&X-Amz-Signature=ae44c621951f76d41016fa579f3ed608304f603612da59115cd6cbe9ed922062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

