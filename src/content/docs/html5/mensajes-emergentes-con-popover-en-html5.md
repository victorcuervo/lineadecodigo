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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBXDYJUK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQYsKkx5fDXJKGH%2BdGnB8h5NLaME3gHXRMeSUUqTzDxAIgLHZCeyyIcUnWzwQrdtufiMmSGuQoPLtPeJ1dLdosGUoq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKPCW7Uu7OAKUdKqCSrcA3EPpEW9jYzWjQ2%2FnU8YdXUXw5whoL%2BpSUI8crXTEvbJ7LUv2v5et8LHm0twzgftuFQBN9X549Uu4HQv9Pl4Zey1s8OoSRwllSBVRbMXCzCZzFwK%2FZfASkWJGoMAOAIJoDphYdrvi0fIOrkAQ4uNosRtHtSbMcBfyAvGlvNiI1S8QPj4fxBIrehAOdBod%2Bto5aS%2FJkPKXUoBXcXeNA1Xb%2BbYZsBSBZGaNAu66PJ7SyK7NPLLKo5ETw5aolMIr9j16deDBfKxZuMeXYHU1yplzFMY1sYTseSp2Abi40EsgKBBiF%2B%2FWDlzJsj2foeo3elTv49H5YVUwuvUk9M1s%2BQ2n7So7ech3rV9uqjic1uaObpxo53CH5ReSXB%2Ff2vccCgeEqd0kYwhTWEGeOFk3AOK1%2FTO4wnEGgtf2DFy3VzytBmsMvFesNomYGvaJkVRObYo2YFEXhsQxzHGvOBBmr9KOnSZ9YSLsIdJIp14Au7Vn10nP4x%2FPq%2BlQl%2FNpRRINrPjF3h9h0fk59336pzKVdQptfqyem0VkHJSbH%2Fg5c%2Fa8VquVaP%2FWc9zgzG1W%2FwYCPfVoZZrarA0p0PcSE7p%2B%2FWcFfz16b7Q5yToqeXy7QMfKBFzohRczwWv7BEKxjyjMLrDzskGOqUBdlPaSApYVDE%2FlbgsfccZiBK1Jhxaj3IB9I5UxZza3ZZH7ScOK%2B%2F8QhpW479OZ0HOaIrfl7adkuYVbqKbjl%2B49r8BLUVcyJnELce%2BVgNmpjiBJuZfwSd0sTXNsT1PHO05mSouMfp0IwjngJuFO6bNCdX3n2HsdWrveVh6I9soYTrfF2LEOybBqKFD3mbTmb4c5bKAz7I4CDJT6F363JtRmrJu8%2Ba7&X-Amz-Signature=1031ad36767fa46e20639ac24d7aa0fc8fd86d421ea2b66c4d5555f7cb471e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUFQ4YM4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5py8FS1agouW4%2F92u4rHYW567Mo1rCW5S5%2BB14FfHiAiEAs3EjVteBjVjVVW9a8T8ffMkRa9k1UMp1SBVQCkQAy0oq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKp00NyW%2BNfWZafDkSrcA5kkU%2B2UPZYtn5UlU4KRP17dAyNb6sj%2Fx4LFlI3NUWTSDq5XuXCr1St3h1gJ2bxsC4pYbz0ST5gqmN23hqWHEwkgSS2rWt85djLiHTPh%2FqcEelE1idQWRpaO0Egt4UAyI34Y2PWXXPsqMblwcpSoXWuljLupxMhPRde4EUhTVkPtAyLNRLiqKr3LWCYxPCQZY%2Bgzz88UYczSBKcqqwU8aR4XmhQP479z8H0jyvweUpJF2r2Dvrx%2BNa4R9u8oUDm44gKX6dFrn1e7RidE%2BAcsAFXH60Sr3H3gwcaPXntI9VAfcp2D6KOWLjV3RgypxOG%2Brrj6lMgC%2F6QDrSurN5%2FWxrqrZLJ%2F6AqxKxTlLA9bdbhbKH6fWCztU82FkbVb8hAzhDUwDiUirck%2BvBE9XmVMVyBFjP1HEOykmkylTnxhMEd1bKCibo2aqj3EiFaT1EM3ZZEyibd6rqiJFB0qm%2BjnXiY7YmWl69BFnjhHW%2BaGxE0yEIC%2FAKGnjEvJQhpa4m%2B4amt6JxBUbKG54G2eZ50%2FVZq5mlAQADCdIShD76%2BoXgWFZLtVkDeYNaqSLSwg9OzHqWKM6JKf5Xckep0IU9iPgQtsv8UoGkSp3mrPsWrJnFlAuQTTIvV%2FE5zZZMx6MM7DzskGOqUBDyjIOI5YVgkkQ4x02pMwi3v9IfBTXpAIdkzFR9Ki3%2BzTpAdUX800x1RJV5OQGCKjDnDnUq4J0Jw9obqHr0WPk0oYf46NUQVhPqSc1N%2Ba7CGbReSKaFzibEsYTQtGKOsOzpv3kP7AQYOMrK2igdRUxXoDg1fspJOt4jvCLxaeQSeT2tfD0hkMlAcaVPR%2Bu55cO%2BNeoDk561N5dh6Y7it9jOOrrjZD&X-Amz-Signature=919f567e3f3bfe15fb19c7eed0760d35b7311814ccfa8cf15b17353d79ddead3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

