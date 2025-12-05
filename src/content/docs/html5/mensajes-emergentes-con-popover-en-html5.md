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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJLDD6T6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxHaOXaEPWEutDqMHOncgkvEQ1m81RvdscjcVJbYEdYAiB%2FAsUBs5mRBe9px3by%2BI%2FUjtXBzNp1a5gCEAkSxMnf8ir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMseQiJv5dBTXDoifsKtwDzMiB3EaQt1KMDgqKlmTLp8w6R8gt0uCOcA7CMnPzYfF6JhcAMn0LBFqKk%2Fyz4KLT7hYIid6nqfbg7uBh87W3Wn91c3zJczsoWszYi3MDPkXtfk%2BVbrHEgCanTSmh%2Byg12kGZfscaTQmQpeavgnsZZTwRYxR%2FhPyPFgg5qgqmga4c2adtMpn%2FZgUTq%2BCFS1OdhVZrITFcVUhrQsjmUB7jQnD5P9RhHjKUDVVK0ER20lPIfvaz9r3i2cazKbSlLwczEVglGTe6dMqOTjXSplJ%2Fa42qyg1YYy%2BOhZ1pLcAiK9MyyjTq9zhVQ1YJN4Rh0s1KsOHFIWsZByrab2sZKSsN97vYGZ6Hd5063ztJHncLOBgI%2B3zkFoFQ5Uv%2B8Z8SMPupn3FvDyaB0s61aCXPEflSTEmshUbtibDemFVB9WOeELin7seRYayvEkzDQ3aMbPsREwjMRBMr1W40Ex8dWsnJD9Mzroxu2%2Bd09iNRN%2BRLb%2BaOiMgE8IpRHfyC0CqBykW5GfL4B%2Bu8ouemW4GZiEiCLNM9IF1Tuz0h1gHgknI3IMgNJw%2BBw%2BxDqIuK13C5FLO8FJyQHaVC%2F%2B%2FFsxQHCw7dtyVnu3J1G4kh5Cj9sjUX8MVOlc3sywgTHoPUwCMw0YvNyQY6pgGyErL1CqnuOkMtwFG7GB5Afu6ueP46TVvs2h%2Bz7OBimxNg9QPDz2rlAifIT4tewMjPscePcS2UgR1VvWM5MvYFVWtDOiASW0b%2BwkGg0sKFLL5hVXHoDCQkcMW1gvPesT4oiFA5HVUeWspoHqcTHA39MlNmBL8oKza7tNNPTG0CleQYFgpIDfljPaoNfKSCUnG%2FcTArWhJyUmESm%2F6wxHrXY4kfXywZ&X-Amz-Signature=6e6553758970868f190834bacb482308a4415e6453cdf288b35627e5fc6b3a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652MSZG4U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDI4sej%2F1jkFKW%2B84E3tZSXaoJhOganjv%2Bo4Eeu32bSXAiBesYktllwvq6Q6tzGdTc5Vkuu8jrpDZxYhvDyUF9S%2Bcyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMr%2F7caP0ygWteOLzFKtwDu%2FVk%2BmGGqoPZIncJUacu1is1y0BpfZOa%2BIuXm5ZqoEfrMnvrzCkaSb2vTPKqs3kEf63u8mljlIKXURld2XKsMLqkpBYLwY8llmNZBeZtE3nOMAt1TkeqalKGVeWSLdqgQp3gKcM73ItVhU%2FCsSFqx%2F4QHDArFwdBTIbWX8e1jbP10kslooxyo46rsvRVCEZlJn%2Ft%2BKgUWDYb5EswwjDop8avFrQJGkb6C7aJfnilWbY1EPVIu%2BcX4rpzjqCIg791Q%2Bej2BMzYlIMRE6nJaWapaKZ48OR%2FZ%2FAqi1jYwbwIC7ilqd2AkvVsXnyTvr0EbX%2B5caBnve44lbZigPEIiEx5%2F3RZtUiJnKL0%2B8GsSpbkz9vnJ2f8CV338y4QqNtVg%2Fl%2B0%2By5RO6a5FyoCp1MsVwrbIbyGqcqR01o6jXMfp8sfn1eyGlXnEH3g9Af5aPuj6490wRzlgRQRykFEiVOlFiCZ36tQ%2BcHTBj5uxSsEy2sGyoblRXpL%2BtlIxZfyVPHy%2BCCxRHtlZ%2BIXYnoZaPNOMPuavue6bRjqWe5EGZ1K6TF26vpkpY9urOKoJNRMha5aYUz1qFpNlOsh5leQfU82GtVibmWU9g7BMb8ZVAyE%2FBDZGKh1UaIICWbKaSnzswi4nNyQY6pgFY2905qGVmFvK4wE5hQK2m%2Fw3Ns3XPW74QosuuJ1s7dk0sVgq%2BOYyAW1ZImbi6OhNoRti%2BT%2Fq%2FOiws99SQxVMyQJM1%2F0%2FYHLOP4GTOexsIpvnDnVNOIXnQIbAggQ3HPfTb%2FO7Jmutp56GJSsLRwr%2Bd7vlHdThR4q3A3ybIf526%2F6xIiDoZri08%2F49ii4xI9Z3KzQ9Aj%2B6sUv7XjtWhr6E6opkTxmHE&X-Amz-Signature=367dca8ed4baed8ee2153a2b3a242e201cc35ad6aaf63605de97e93823f3d30f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

