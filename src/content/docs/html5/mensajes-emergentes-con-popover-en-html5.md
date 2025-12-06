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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVE3VJYX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtCYnQlFFObnEgV%2FxCaDhBqzPWnfQa8XBLukCTbB7JOAiEAu6DOqGo7OxvdFzejK%2FACvfJdkIDsiQ5xHKgdbqkcJj4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOFWvSCvTlONmKI3CSrcAyUkhBZuFBpkMoWTq4d6ZybDzd0RpLeEWft12mHUtfYtqBL0cAgw6oVcDIwyzQufdMPD3CfoNqvPZd3pHW2SkIyywSA%2FMilOSiqEcNxKhjK0qnj2sU04FEbGqu9pCQK%2BLkX%2F6%2BPl5mJ%2FOI3gyCeYtwX4X6GT3%2Bb44VMQLdDQB7ofSIS4UukCE%2FgavHONM0sl9BvuxUTrgK8QQs0JrRg3UoatdhKiEbYaJgkHNCSv51me5TIbpthar2uwO%2B%2BflYtieffa0Rd27Qoh8ts7KHN5m6Rdq28sBz0xF9NNdIM2LuZsOiX2GrreHdK7kNBjilvuVSCSG7ZtHIHeNpU71InomVHA2VhSKmvX325BgyWFpJP%2F%2B4tYexg12%2FnC4CSscc9%2BaG7CU3P9HhCln0Tx9Z2h0mHc%2F4i2us9aD0PWGjGs6h4Lbm5GbKfwTYSEtqd5xIgjLxI8NGvW3BM%2BnblXV9mDmz3rytzArSJthKSKI1rCjcm6UZs0vgeuChTta2y0NUMOWv%2B1egnopCSfUTtjBAbwUokW6NY5V6bwQD30uK5%2Fn3k%2FJBMli%2B%2BhVb2aLD7LcuTCQpz%2BOWL0i58Lj%2F9t8Ui84i63kBmpQlTP42uTZQcZbW2BH7xBm0lTfAhglLDEMMvK0ckGOqUB65Nz149bTCyN4jFoaS%2FK%2BGgsnfiguJiJo%2Be0r%2F47CSkVLLYHrzOl1%2B9a8nsoTNHXTVvJiqFvzDNOCit1GaYyNnEvEYxBORjx4QxDylMdXCLrFz1%2FOePLuPiSeg2jifoZm%2BBpsa65ll2NaTq4AZGMxWVE6qVuVZ0yNME4vQjPN0TEqg6VO1vCpy5%2FBad94VKXrPQlf9cinbGuVG6uyeqRRhl25q2c&X-Amz-Signature=c97ab08a981f8d742d81c8c156caab6e96e46f43fd7a24dc400bca5f0039111a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIJPXHFK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAa8oXzJtcAh4Z9rSEurdzfOvSjoEA4zcaXP%2FGG5updDAiAY2dSkrnP34t50a%2FEOQZz%2BnOYtVEBxtc326XgFicdxWir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMhg4AJReEhh1NR2WwKtwDoMa8obXQNlZnQT6epJQWBMrKOCkVKheSkEBVy6QDcgQTdR6wu4%2BCnduk7A13m%2F0u3OsT2eJDGsNqsMYjfVc95C0H%2BasFK63xFra%2Ff5ApN2lEeYAz0%2BmIoLfB5bHlc9lIG2w6LwY%2F%2Bl%2FyFCTq%2BbpB2ff2yKHLcD%2BVHdmDryByyNlBKn3GIv%2F0bkRw39IISUMB2KY3UfeR0lEqLRcOPJXNMaumJleirGFr1%2BD00zdHLee4OrGfzV9vehHYNXlIR18PYW5Y4IJ2AJxRH3r5hpHEeYc2r1gIF2MVGSl%2BDT4Srt2fciqH4S5j9b24Y36oH5AsrZ6cQkHBEH9CCr52w7Wz7gp4fqcl51W3I4rH%2B16I7oi80oK2osMq9zAo51wEdz8YwHOJL0i%2B576zF5Ijjes1UiRZ2nNYtWOB3bVDVmemnFhh9FnuEH8mJDl9cNprqqNinR9vtwHz9p8WXCwwKXr4n%2F0LPY%2BWCMeor%2F5ysAIa3z9XKOIgtNBr3C4Dz8EA8fVl2Q%2F3gVyy6%2BMtSw16aE%2BFUmd%2FaBBm0DL3qy2yMRKZN6skSb0u6PkYc58MJHIHHlmWBV3Lc5yOk6g1rEDBJAFiF0BYwc70Ni30pkXYWc4ViW3FTjB7o3XiWXGUnQ0wwsnRyQY6pgEmwIGOYWM9uEtMMX5HVVa6m%2BR5o59DBJZJGw76oP5nUXPc7tIAko5zc1fx6HdwODR5J6pNdMJ9ASO77K1L4gfkWvrpM5VvrZBsTNHeTmuEK27SYp2auaLk%2B4M2rvJ9YVvQ0yPMsXnwJcZiOzHf0OzqoRuHcltFzJ66gmAlYzqYVCGa1miwI4Yk1yJ9SkMnEcdnN1f6pgUXS7MNYaSWWYQX0VgD%2Blmk&X-Amz-Signature=95cd89a6155ce8676f6acbb8dd385ffd67f3580ba5830b07a5e8fc21cd5ab9fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

