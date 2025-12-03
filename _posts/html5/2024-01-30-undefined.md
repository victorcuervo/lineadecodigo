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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPWTJ3R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCNa6Up7mJAa9N5qM0hLuV6BCPLdXskRg4jKOj6ipoRBQIge3L%2B%2FfRNdV3LQxICx0p4wvpoSeLCgNHzpQ2eNSsz3Jcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMpgvyysQxw1ouEbwircA6%2Bl2zIruz%2BcWmRleduKXkPLrVCTuCCoxEVgtHeq5W6PpZDCHVhIB8L9Zs%2B2gNM3abka2EtREepRtEZAJONg0DtmpJyzhn4dEw0MEQJpJiHCJDzzqi2tXiM98iNxvOCJPKUgARTtNHK6apisONz1JxsBswRWQRgf0MovSwszYm%2BZkduDgoOQGwS8%2B7Qget68A2uu4Y6gO6b6Qxv%2B4eUaQSrSxWokI%2BdRXK7qKeOLkF%2BSsBnvada2alLgBgrH8oK%2ByWooqWGg%2F%2B2WJp0GqRwURijkJTjzsPfqcrFf2X95rfWD7M2u2N6BmQEI36ens%2B6BmlA0yIqDXBG3F0nK8gjJNXPAkuu9EE1qka8t8G6cagZA3wLSech3FP4EqOxKUAbQTtTFLYdKwKBRtUPkboSa7%2F2%2FgHRePuIBSk09mPuyh4rqotjSeqR0cNfj87Nc82Fqvtjy4imZiCjC%2FxBJ84bn%2BG40FluprGc4sGftx89bFy5kBYL0M3Z5H6hscBf8kAHnF1%2F8s%2BCqLA%2FfGCZXVW2q%2BbQHYU%2B3JB66WFvAiq8fK9wxFr2BoMmyhP7IG9KyLAdgE2inpyG%2FeXkKPCOlRYfnOF8aKnIlac2V30EZx3li1l5y%2FFA%2FDNlaamN3rq0yMJeWvskGOqUBPlWme6VNxwXIpXAGsntUX4stb6e4LxOp8C%2FHucIxQHKEpdGd4kpeTdjaJAwnOr3X2ebSueHH%2FSX5vUjI2kv4%2FFMMsBn3STg4szmE0kTAn8sW3Cx4sZu4E9UBN1j8NVTqaUoWm3%2Fom9ueqZNzYAW%2Bd4lAhrok1gt6746bzO5hnq2NM0ZAD%2BbXzOHwJWoHN5u0VXnANL%2BL5eia6lRIGcGrSx6GtBsc&X-Amz-Signature=b72a934e506a303c21f901c1cab702afab6ea9499a9379fc0a79d12dcdec4ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBRODUIM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDHGrf03Zrbv2QWFIQONd9tnMVQgNssmW2GUTk%2FHPRbywIhAMfkzSjHDTqPUKZqsJ7DieZwEUR%2BS1eGDvi%2FQ0Ep2L3mKv8DCCIQABoMNjM3NDIzMTgzODA1IgwJfdC6DMCOnZVtf2kq3AP4TnBkHBrP4hyBfjFUJ70oywvBrcJkTabHIYLyt7s1%2FURfOe54%2BTkVyk0SuE76FuR7io3Kmld7OOaEr8%2FMV47WjYMccWmf4Z0nWY4EP%2F54Fe4BytUCBZXe0r3z0B8T3CJ%2Bc3%2B4WzKv%2BVCkJmZAdsbJn0qAlHfGN%2BmcGuC59rtvW5XxUEE9To4393DXbhLgBKM3G74EZzYsvhND2t3Z2NQvP8YzT2yooUCWRjowN2p5NmLbMbv9um3hXs03nSc71td5p6EN3rRQbteo7%2BCFdBXunhOJR3a6spf85kwR1fSbudUH%2BIsHzeDxFoAkKMyqBO1x%2FMH2ATbCJm951i%2FF3C%2FXJLLzcGnuysiVWAMaTSawcLFmZH4MbkWYsTS1YcSVufOoqPzvCfy88lQCwNt9THd828V%2BvdbBhN00VHIwLKuOpWbtK0SryR4uyez6Y7oJidJ0Lz9pg5D7LHe%2BbsTKK%2BBT%2FswYvsI3pxSntxru3100q1PASI6igw6uw5Co1CdZZrg11IWhb8tW0BR3b6EcdJiXAdSm1UCMIBdCZ0KpNR5lzhl0ubfQuHrb15K4M5l0vY8%2Bws7ASyXaMNVhiFLjJWt3pBGMs0%2F6sQ8aVtvC4m8fafyrkMG3uIn9sxd0rDDUlL7JBjqkAS5HTwBgMfkwOsq2TMZ2q0%2FcO9gaPojvvQjV8xIjp5vXXAbjSLT%2BsKpr72wSehsVTUrg9LeJwTOg1nETHWdLEqEesQOuQe9DhVSiLRoc6Ob6F3yTWN3vDvrWU1vovrfhH7vV%2FHhkh83LjW80dukBsuKM026uqZuAIsXAZIIEI%2BmshBJxNZDtkY24QHQpUBTWo0TOBZEnhj2sUScsg95VYkBSsoVZ&X-Amz-Signature=5e68d8bc7f449863eedf54afed6cb1621245704fd8009dc55cfc04d273790cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

