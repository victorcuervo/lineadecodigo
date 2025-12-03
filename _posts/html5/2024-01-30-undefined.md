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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RBOU72L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T041208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHWG8SZyzKQv%2BCdp5PZm5%2B%2BPL%2BsgJIikuldo%2FNsEqNASAiEA%2BUE%2FIQj8WE8dTGCKNDlWMnntQt3K463fAE%2Fi25Uj8Goq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDK6KwmfuCrXEOJ4ZSCrcAwGHY939Y9RS6Qh%2BZOxwyxgEnoXODsXfUMPLPUXxAhmOYVibojO%2B77IaVHde6y%2BwQ25lOfYY0pid5E6o1%2FXkAUbI0i5hYiTELL%2B0VnWhRROosYzv5kN80fZ28Xc%2B%2Ffix2n3Ojf2gswpNKdpcCbJS%2BrqC8ClfPywOYV7z%2FbLi%2BgcgqzoTT3Th7qBQ5nLM6%2F%2BO%2BWfVM4ZR3RCqjqoY3Po5sPbKnIsP9X7I0RId3Mps1Nk6oAV9V1%2BnINOGVlEdDlqL572hW6yJVKtO7h4G%2BRR3%2FaU4mqVVQkKEk94lzVQLTL64znRAYn8jVcjY50lQ77Dot2BT2JUaJLRsHLSGPSbb2gq4Tc7vHjAkwKGBa7HfaplVAYHye9gm5icXg9o7KbSH4WRJGDoHlcRfQ%2BCQGTFZv%2FKioWTE%2FKjLKcTHobEXEPOTrfB4%2BgkDAXLuXvw0AMo5tc21bCZ8Lq4HImB41zL2mq88eLO8TUTfdPxHgwG%2BHY4ZGyabGw01r9%2FOYwHs2mg0DamCqRX6o8zRBSWPdtFDzSwasPY0%2FeZXwPmYDzjHrlV5xtZMgAZL9QTttmRbyH1HXco%2BXfObidFYcQII52iETy0F8jWh39Tn%2B9dEMylwgsNGWYHFHN%2FuJOs%2FU5AhMKihvskGOqUBhtTBU47TrAEpK99Nz5FMDqkRqEgM%2BB1%2Fnx%2Bn0HzVHby%2FZ2LbSjn9RW%2FoFr0fPN8y0d%2B3fJ8o81MxiDnIBHgCXmDQjzi2YSDuIPNh5Ck9teWpipWHT9wmX9Wdj3tiW0%2B7kPTxH074Qy2tLNMXrp0DqBeaz4QgWwHJcZyAHEqPYMLwi%2BF9Z4BlNR8Yx8ANWxJ1bUcgzbG6TJ5WoE13%2FlnVdFA6IFyl&X-Amz-Signature=2bb07fdae2d5ab7b92e50576044e6ecc2f2330f015bbe727a99ccbff60ceae9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZYVJMJX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T041208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHSrCGjZ7ilVAGb5LhnSXVD3wZymFmKXX%2Fgl%2B0VinWOaAiEAsxsHQzvZNGvl%2FahtNYuOoeT4%2BB8ENazec4BjK5wlpOIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLSxv0RS3oqheJ70nSrcA7tFf75Q%2BIEaeUlXz0u8jBuw3M9ZN6Mopk6DIi5Ls7GCIjZPC5nMv4qfsNSkzBs369tEtdxYC4U%2FPdNCbTLYrr%2FC9R6NU84vNR84dx4QkVhhCOlZTlDBUkYnY3sz%2Fz0l9b48ufhWeqAxwywsXcp%2Ftjbe9%2BchjpsaKMYdj6zYTLdNEb9th8r1rIm%2B%2FcNthyc3hvBYPC%2FCVa7QcBqXTBdfmW8OaF4VYh15QtLRDxTGF506UjKcLc2dXDlmo2ecYPAmIPEtKbfmjSXgtDws9MHkJRdo6P5zVSBhGOz7eSJ9dCBHXIYMUXz%2BlFoF2SjBxGcBqGodhYcbcbQK8u%2BskMvHb0BDKRFWLIFsWYCtjAzPWS3o%2FaiRz9UoAsCO2z8RShpVW1pz71Xfspfs%2Bwc27jkRlr5CgnKkZIuBxLgPXDPPoj03iI0NewPQ6KPKnLJzZuOAWaCj5fmbpKGfWQL%2FMu%2Fg6T%2BeWFGo9O%2FCVYODxJYd07xhj763VhO2x1KFS5s23VgBqVfb0eEy4r1ttM8FfEym0UziyrUfpMqVW1prfsolNAFrBZKs4lUYvw4VEVamnbTF30wDbtn%2FnoXsR7EKmChkDTVK2eDkNCWKe%2FvpkmDq0i29rU%2F%2BunsYJx6f1uHiMOiWvskGOqUBJeK9JZkLmjwXShEborwj6ogFO%2B1lGzuFMSaUpQ286rCbvFRJtfwWRtddhWisghwWimMvze6YO49wMWe81OkvZOt8nKe1Eja4rnYd5FHEqqCvrxWZUN7TUy3GC7H7gIWNYTrEJeorFqT9roNwlowAjwGZ5LZEZdZB3A46tblbBjFlFi6Mggslof%2FXdJVl7DmejmB7FDYkwxN3COGrRf6TODr5C9LA&X-Amz-Signature=3f11d19872d36201df815db03195af3d25238d06c87e98ab7e3fba517ba81a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

