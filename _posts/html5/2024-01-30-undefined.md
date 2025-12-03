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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SDJJ2JZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIGuWdukJ7cWIUHDWfG1a%2BhkdJ7mg9e8V%2BPkNp4Jah732AiAj83aj0SeI46TIohE2am97piFzzHKZqJmMpjCcaO9SJCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMcaB1wwcXaiB045INKtwDq9yndfHlv9hy%2FYjAmIcraqAq66igE6NunorvyJJTaP52qjk%2BSm0kbAK%2FWOhL5tJGZwEjG5S0r2vqAHKxj%2BoaY%2Fc4jbv0jih3RdTKQU6nv6V3mPAvzdIAC%2Ba%2BGew9%2F0HQbt3LZBLuYezi9JQMbgbTOWEOhQD1OTtIQc4sG0xKOfkEJIWJY3CyVAxj%2BD2AU2d24116IrvGh2nvBToAe7OZ%2FswFSbyP5KvhDZwkOKxxbso2Fc%2BvLtzkBlBvFlNunWakEoJ%2FjU7dceAmUw7Z5EL9TDjfqMXC%2BSIjevGUUIbR7gCfshs1Meon%2BasJD8kms9HXADl3bqL%2BOvyYHT1zTJjJm3DMiK8KEbLOFfhzMgkmk3k6b%2BGVsKOdetoOXkvx8mMX%2BR4Dgg8YGBSrmy8N2voC%2FcGjHMyJZopBMUX5sD8Timd5HF3Hej9%2FSftiF1qwsmQ1BjKsp9vvgb%2BwRMEeWKhsLi8vENlkbUBg2y5MbiziOjbhvl2L2TO1fdVLn9q%2BwaYdRkytIgsE7Ctac9iqBXqyDxjQMk6BzG08W%2FWs1MWKUa8b%2B0BVyoZ3A2J3ZQVktZVdBikgxuncF5CDpB5nRdZZ9JOiAaB2a3XYukJj6khTsmLs573q2z4rsL8bA1owj%2BnAyQY6pgE%2F5ENyXnscc8JcaTP0HEf6IJzRnr6vOcSj65Xhne2a8rgbZDE8z8JIQmBrKricJtpgqwtb6JUmgG%2FWIIf%2BvKbUNoSD6oIPdH7a4ZPfg0akE9gA7aZErtrx9GQzwf%2Be0TGJzxkmtKzKKhjem09QhWYVulbWhUZiHXVLMd2MPvfB%2BdNzQ19Q9s1JC1%2BM4EebVxaq3OGS%2F7Sl76DyEdg1zI5FFUwLqcXN&X-Amz-Signature=570ca723c1286bb60c0aacc391ef505ba1807d332c91b25883b6500bc6ef986b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEWOR77M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIA7P49bxhNoLh%2BNxv3L2kU0kz3uAaRskmsrMUQShUbg%2FAiEA5speGi%2Fqw9NAXzT9j85u2OCN1mmIsqvhd%2FRg7kEHp4cq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMyrypJnosfCRIcfYircA9MoY6SlBPt2RSeRJUEbXjtLGO%2Fayvs6%2BRMA6naM84PAP%2FJ9mzUq1%2BaJ%2FEhLan650nHfvmGtgV7aPXecDhrK15mFkX5%2F3sEDfg3UmVyGFwHOuqVdL%2FHMVJwVq3y90QJrMdO5Axb0eGtf2FPV1AyvhdI7YgiiDfwtkDvMLAiZDZXm2Oyvqfvk4G0Rb%2Bom4S4KNOIY5cVUylB7vNKfGZekSsb3mKKsX66dUdcaOokr47TwLMGK6nyzHDgwsvwKHSyFgVHOBYlooQixGY3z1hVbypvYw%2BbxAMzgsvLvfo3AKNBVN7fqjJgnQhkabbDxBj5o%2F20dH%2B2hjfkkBWux1YlbdDGkHc2dIQVMyQIdzymx5QBvC%2FHMFlBFYGZGkUuroGGzSlk1I09%2Bs5lmvfrwkutck%2B%2FIoH44qNg5ql3gkNdLe7k5g7Rt4EEWnrz2PBcXwLuUpfwUjUPyOa45qEKgjpKvdtLkWsTUBF0DFE1YR0UgZ%2FuT8Ylv2UHV9l%2BTtrS6PaXbx0NSkt02D1F9q30kLdwxwi9LOD6XI2YHg8Gf0w4dNBfkZATPUST9T%2BHpqcUAJ8L2L1mVR1ynY8l29zcJo2cRAc6wHwNABul2u1gh6sNVsbnIrmnr9yEjSbUqM%2FkuMLjpwMkGOqUB6OEaWJQSzWM%2FXOcWot8iIz4%2BawdIqjPtMU4tnFz31s015hlPD7xua8EzxemhpPHyKd3jckx0LvPEKCJBZ0yM6gZPrMAMOGq626qvU4ODMrNgrJmAA76z4s2uOwNa%2BId2AOx2NYZe4uDvQ%2BHER%2Btt%2FyVNBQ8KLU6du3motRoisJxDyEMQj9avokRd%2FrsTPVjrjS%2FNtH2UXU1dYtRPZfUKJjN9Em35&X-Amz-Signature=944da7ce51b252834d7f0528074f6cf429fbbf731a6daca453647b605b14bb3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

