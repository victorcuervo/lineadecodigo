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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P42O4YE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpeXlWi5gPpfVZ5XiN8YSvqRPROtBpRAiUGJu7k0iBeAIgdJTTtEcs0jwfKwFwa6i2CbfXFhFfVWQkMuFqRuetFQgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQoN43mWznCUUjw9SrcAylfusJUNdQDFAo1kS%2B6G8hMc7jPYzh6BZ%2BplM9sSaAkm2xDEWAHnuWO0XRTVscTSNRYhhIjelCR%2Bpa4dsw0asQy%2B6%2FlOdxMB6GJlvA%2BOIXkK8ipSEv5NzcxzWzgNrOHr8mATSqvsz46s7ucEcqKPiKnyQK30HftlaEXRYJhls7LvbCnyNEVUjUtjgvXBPnQdVo0Ze742h4aSYmvsMjOkAy8vLgijEUKxRuTkszctgbunTBC6WKuGT9%2FpGEhtt6jngqX%2BstwIId3aT9MMEuRkmUeFOG0ft8k5PEJa4YNe5cMxsQwIjkXH3Y3IdM3T3G7bX6hNFqK%2BVTr8g9Nxe%2BoP4NilTSOW2Zmk0skcB8sNzVXXy1XbEu%2F%2B1pN3JaQyf%2F8IjEC2XSfqHQk8GfHzVBDZzM%2FwlsaYuyUUx71kAjbCKJBWONMBr1N4vbLzQWscvTWVghXGVkaIgoUhTWQSV85B6%2BKllRviOIDn%2BSXN7UAcm2TfGpm%2BYEeA4%2BjClzh98865koC0TeUpmOpTF%2BYz5uDu5fcB711XvCsV1pKh%2F0nR9Y08WgVbVFNZlbAHPMzfbPZHqJEjXtca4xDRaDtrfl6EJ23fLpIUi%2BkgmsizedzUxXY8WLSbp2b6S7a7nn7MNG81skGOqUBvjqSWvW%2Fu9VUy7PcUSIM%2BzaT9HZt%2BjOuuGNk7xZOrHXOOlsH2qDVcsDERlbKrTjtRSXFsBCC0AUxkNmKYlBVG%2FmrGH29Fk3RvZD2zljvpsK8YP085vYDZ24g0wTYvijFzwydDLXlbYFNQNi3Xc%2F7h4kWq9MKr6%2FF2Y7TwolKzF%2FNTwT%2FDRHPEWV6NeLDB8zGUzUWFaE2Sy1IuGYWr8%2F%2FJm9ZnT21&X-Amz-Signature=1a156d3ba8ebba0cef67be8d8c35f1f4edcae2a329a456c7a61d16a66965868a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R6JPORT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD5UBSk8VqNr9c5DaF2ehVnwRjb97ZQIp%2Beewd0cPNyQIgMQRRqOmbf2OTXhfCEsjB5ivbtd4AU9PJhXolZCURA0sqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfrLKW7s9tJIYWdICrcAxDdwSpHeP08GVu%2BYghbC%2BIPygn7erfSBeplxAtsn0pyxbBa6xoQ3bQ3YTASuZarUIalQt9x0NiO9ds38JYWrI2UR7HHo0adjiOkbSPQHf8QkAsdbTv%2FmBaHdsIn4DrMycKlF%2FK1YWYEoXiFGpUjjtzRBtFGEyUrLZ3knD6QZPx44Cp7uqdHFHmXhrvDTshcRyNdpyfyMiBA%2FCIkPTLHhFOAq6fOW3sVC9UVAiaNML%2B4QiChuKdm7SNp%2Fbss3CJWVcllVKGtXjMkYxuykZh3rgvA17Yxj8vJZdJzK4lqCQtMJQlJq13Y6axLPUtHhWS4f7joeM4YuL6iWGLHIUPhx0xc9D7HRdD2ZAXss%2B8A0BCeRw0vljrihrx%2BfzF0mrwjJG2%2BoggAqx%2BpPp8eeHAEMwbsHEE5hAUVgRFoOgL9Nt%2BHwN3o2pHBQBT3J4JU0bSnX8vgvPnJTj9HHJ8DBfJN7LjgYVL5jBwlX7HRd1%2BFA51JkFuRXS9qxK1GteDXDlNT8HQVxlz4Mgo6s%2BfCV5VfBk9Aw%2BMmevpQnV6mWsVV0LnvAW%2BnedZPO0M%2FoadD4Ay9mlWtFjgvZu5aRGyX%2B%2FxYtfQEvxjH3BjAWbIwlu%2BSri%2Fm3fvMC49Xy%2BAAZBM%2FMK241skGOqUBtqEO7cDUazKi7aVJbmzseGiWpHch%2BltJw%2BoviDtSquYOZlO3JlKvTMJozat%2B2beA9pAp0GBy%2BwyWrvmV71zM0J3h9KdCBSWXn6iIb%2BBoh0W6RJkJiogcOhLGcBEAwesFduWR6vfNrgNk1lkU9sjqvRkHhD%2B5I25X5kkICuNbKPdKqdMV%2BczDaa%2FgrOPy%2BXA91hFLDiTCOB6m5JpFW6xMLQx8W2LD&X-Amz-Signature=4ca5e7a0671f66aedbd1cec37ba2c6099b119436e1642cb30d622a435b168234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

