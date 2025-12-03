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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7KPOXTW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEKFa0NDycyRRtRNgFl0ACP7%2FYt3%2F0nR0VV8DhjweO9wAiEAqpFaZxbwLmENKr4VvesO3ayqGlJVPmofwlhxa2h4Bzcq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHrcxIpWVFk%2B6d334SrcA9u4LhhmsXQNYpHTeemjYPgmKsSl5CmclO5UCTbuxQK%2F1eEaO2ssezEjdIn9Is7Hp5ksFtZ4ycn7CpTUbJ8tEMmDI%2FEVgpOzKTVXxaadKgXBBMG%2F6asJoGCEkieEdnRPmBPmnLOMHksFrKhJOpZZusJyXfbEcZzr1WZCPzcds%2BBPwvoD42q8ccONwq4CP19eDDyeqHn7gwMWIylbOBKLWXi6sykUj1iaTq%2BvM81AHw86XJKe0bro%2BLWMyPgOXIADmA8lQmT0NAGqwoPy4sYR6lNIr32SHBwvMUDmlWiVbM47oddw%2BrJz8RZilkqxolfOa9qiqp13lNaoz4scQMrkHXBe6nZalaZwHO6sMeHaHvaTzz1UPeZ9RNkaWWFSCZdcgVrC1uI%2FdeCkYMl%2FQEApZhvsd8JpPUSrTB2pzjjA5hJRXS3wQb8%2FITK1%2Fkjigh6m4djLskgS3Wc0gn%2FWatBu45HV2rYEvNeMUEEMiw61bH4WgN5qA%2BR0PjtD1tCrEyiwgnqGuJ3SF%2BSRdfqvzSjNJ6hNbuoyk0jjTlkKEsqc7kuHvyYi7QUOeM9OAzerCpcYrPu%2BFIdFlQwXPFCzeM1ejVq7s67JiDZqKPvVF1tJn8XJ8nqcPf6TPI%2F1ikH%2BMMqHwckGOqUBcW293qL5HYcArGioeDyaU2D71R%2F0qccs2YAaTpByNrc3LR0Jm%2FaVw2NneL9bd1k4j5hqUoW09iLLKMt2qB%2B4WUk4RR6jB3OxVTrIpa0oTb%2FXF1nMXzvGuQ3gE5gyCZSxjXDv83O9yzlgmR%2B%2BSZEoCtAZH4NJSfQ9fv3aI0YPFZcB6RBiGVQohxSSZzkKzpWuLSNcuzwaY7Hlt4bqOU6rH0eqj%2Fk4&X-Amz-Signature=53b904f0b4066c510c2ea3bcb052582b4073a1d6fbc8d50359fd3965d12233ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MUEXIRU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDJ1TccEz5ciOr27hNq6KJeNJeZ%2BpwZqFecY0%2BefUDGTAiEAuwCsfm6UShQSLsamln3nhhVlSempUQ8CRqMBnJXWHNIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDN%2Bujs%2FNJkpflvIsxSrcA4FgIsyTu%2BYAE2NnqbLs8D0P%2BdM33trXmd62PglM7Pcp2C6y32f3X0FoprZjbQj%2FwyIilmUfJPD7u%2ByfOVQCDwynRGY1%2F7D6AiH6ybiFdv3KwVcZ8e2w7aLFnSFLGIcliybtlT%2BRAEOTiYC%2BkPdfdRo4T1SRlgZLLMDOW%2BwZ3MJyS%2BP2Wnnhdn8thkFnUn47kOA3%2FTBNBMPhXV9ab3NOPSmeqHubeneNgiqvdCZc7jPRUgE3i4aajtNyWG1wyxVAT9ToJ9z3TEEt47jJy6qmBSeUnQl6IcZaFW4LRPqQ7m0HASxQaUnmOhlicsy8tR%2B%2F4D6hOJHSavMiPnrZ29ZgPSvZ7Y0Op7FSukqcbPEjltwiJQNxk8SmjA%2BQFc7EnhgK0QuRlb%2FBMtYJBHrS5a2qaPUM3PONT7lehG7RKhYur5g3rVt8cZUn57eQhb2H45Q170ukTTJjnI0R6hNTcJxeKdfm%2F5bzgbw5jy%2BKbUFAwt7wBc0PC4r8XI7BkMXC4HNrGcuYH3IJWpV6J2LOiCJRrpsUjxRDtkWeaBVFoprcnE7JxFm8XyRcdaMQT5Dux4%2BIwKpY%2FXaJdBd9v9xMYqZLvFnkibe3MsRq5UM5aEm68dJJy5hDHoKumCZllULaMJqHwckGOqUB33fPF0ao51y6mn2RmH2m4T7HopKhVkY9s%2FYjfpVfKWnX0f1uwiWMrBgPi%2BNMMsiztnTidueqrXivjPaVSmPfXP8gv1lPNn2%2BoWvKFlzRiXkMtNgmIgKaJ1uAKxQpIZVov2Il5QX6bf6T%2FkutGG9U8gkkNkM4POdd3rVEkwYjC8RQT7HGzyVyAuhIpGcH47xxw49mwi2WNo8Znv6w6ds7NXHDx9s%2F&X-Amz-Signature=8b53863749da22d05cd80fa765bdd9bdaa1250dbab7a186071bf7e357b39eae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

