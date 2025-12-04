---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR3PZTR3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCjh471MJruDrocEkAl4TL3tuUbhIlODNTM6QxdGoacQwIhALbjIgL%2BPlxhblTfGWkIXMACjQQztcjUQqdyoMyPni8bKv8DCD0QABoMNjM3NDIzMTgzODA1IgxQKvVuAbPwsZnymNgq3ANBFyvYXpu5yBvNe%2B1zalHIeAe%2FoPMFgVNKyVFZGuG%2FlMnfnZr76McvV19VgNfAGyZkbE6jULdT%2FcIzzOvVe%2Fvr5SvjsSqA3%2B06grw%2FbGRbjLRXlZa%2BYQc1eorrm7CcjUg40SCetanIkShQYpSnBgcbZD678OvYtInoAZWPDEGIp7qm9%2BRyWqbKU7ON9phj%2Bxet2UpyTJdrOTYYrcpuNr%2Bc596YZbeblYo9CcLqn9yeovO3zjx8EMCRwFfE%2F1Gkz4qO29tBEXuT42SJjVCe0S5UjDmhtr1l3UTNJ%2Bj%2FpZw4gjd0hTFRSshcNW2kekA6Jh8QmB0RZvhLJsCbv2d6BAoRWZUTmsOsT55w%2B9ya6y8pAldvKrzVfIcejQ%2FoZumfXu7arYgbBD4rL5SYM8XiQOsPZHWDMFraaNL9%2BeP9lVFTwcMJ28eH9wDEBNPaD5pnRqbrp5ZN2g8YRu%2F%2FEnbjB3ARSDwJMEfRb5sAVbsVZZ3xyhbohHlmMJ%2F6N1chel64JlsYyouCXkO9vag87vxsgrSrnsei8CKgvuMEyDhPfKqOH1R3pZwttVSHeGiQNohGrOnFLFWJmE1l4wp5hEpgtdrWB36sPCG35j4YQ977walUhsMCAKiQUM7IKgs9TzCTkcTJBjqkATRemyJATebykLPUmpR1OYFTnCLsX%2FQQ1ubp8ZDgtECuuHdIJwuI5zK5B%2Bv%2FQ8Yi11YmXYds%2Fp8gg8AWMhYxwStium2fshDt5wad3keT%2BGb0EdzN%2B5Um8ZD8ZSv7%2FiedYXCAi7XaTDmkpVvR4ubb2fOmQOsIsX4j9pE%2FaCWaRrfGCdVO%2FO8w33Hl74X4TUlLC4%2B%2BieP9bGFTi3BJfNvVibKgof67&X-Amz-Signature=d68a8b7189cbb35276f1e18480fe6d6cbdf83447d87ce7cab5a241520700ce23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2HQ6DC2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDpAzSfL1F1S6PZTOq48UcaqUMsAGVcn9fNo98hAEWoeAIhAIsiEySUEqBd0201BXPrPqokZRjZqnwwl8TupIK7kysCKv8DCD0QABoMNjM3NDIzMTgzODA1Igw8UgmmTwWKPk4muecq3APvlP69etqjVuCs1o76OpLEt9yGNkkYf%2BqIuHuDR7eZiMr21NsRgAqUlyEtUtx9HNcZfdZAx7SNDsDk2r3q%2FE92vZxFgwUAXCwoaKqWeLrA2XeUHTlFV9AVxVw0UKNYVIAjx1uKVgfGifRLmf11edsRHtPM%2FUSJ4LedNJVeD60N04xA80RjjcLcaD1EHNyVZZHB%2FKfYNxIZZYRvlvpAymn9FIm5Q71jrGr6DKOv005TZNDIbeT2YgitOhlwAGGG7%2BQ5hmOBasQj4IKaeDRuCt48c7vb1TtI7EnDyYYGTqc6p3H0BsGIODCk3oyd%2FD%2Bi98Sr3DGB%2Ful0uS9WZ4I4hTZBP6vdw68t%2B1%2Fqj6zuM4kh0P%2FKBqL79LN7u6mN8FyFbvzX7ZtEvE%2FSZa7hit%2Bp2bWIcy%2F7L95NixtoJ6EFSdH3os8l%2BGiEQtUmk40rHAeAikNWADrCLdDb9QCiCF6Zmym8ycE5%2Bj%2F%2FBTv8BiqPfgcYezHEfXThVWCogz6zcJzLBkIlMaZk5nJ1wKvCQO%2FbEtgiZ17zCQonrtJk2lZ5%2Bt%2BolkGOrnENqGIR5JfnLFGf28Xns0TqkTiKGSIVDi%2B%2BBjDhqe6SeBa6i1u%2BDDwcA3Nau6WC%2BClP%2FpDsLHI3CTCkkMTJBjqkAdgW2WKK%2F8LtsinNj%2BCkTPfatZxJ%2FQON%2BzR4x0QlQ8zaMPKXKjJgE%2FC1roBy899Or4Y3twewW6Gc77FVyzhHpI%2B42amK6lfW5sC9HgAvc8CB7aDtXxff0w9BR528uKTX7dxEKGpz%2BMUEDTESQ%2F9DDLuDeQEZFviepKYsbq4ta2nI%2BAubRHzPMAVtP8tFrkmh4%2FWftdzLBEyGsdy3rRJLu7ul46gN&X-Amz-Signature=0972e6681a58828b84bea2a6cad937e55735010498d8bf0ae9552efd416688a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

