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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR42U3TW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6%2BxilVRY%2FcwAOFSEauaLr7gLnqn7n7CTV7szawaFAoAiBO9c0Un23vZoMXSETdqdkN4ASMwEu%2B3P8W2UHHhLl8fCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCDPxouVZbpyDV1pJKtwDrhIjBEC47xNM5h%2FGXmthJ9fQll9aw3d%2BCV23uOy5%2BGGZrj3gOnLZDzGdqpzlRmFcGwXCNQaUyBt%2FfX6Aozhc60ADJBd3wfdx%2FmD4b%2BCNFTAYOLFa1DvtGp4Zduo4xMkOiC4cMmlR0fjWz89Hs7QNsXG7iMjCPqz7peC2EaOJKwEu%2FcqJOu69QcfookL1FEg8qRtxjJhH5O8pJWdMSZbEBJQpllNF98gDVu%2BqDNcbCny9Fw2Ck4r2L6u4FYqn6JXo7aBcUeNcWw%2BRh%2BP2C%2BDbskYTfr%2BlH1du3hyllOUslLvia5su5BYyt9%2BwBLQK9CwYamaqYfz%2FQ%2BnXF8jMJS7%2BA3gpMDVkg2zj4ulk5xX%2FJZVUa5WoO8IfYA3Pj9jB8x%2BM2YxnAxE%2BoHZZDuHqp1LNY7tcOSCwXVGoYDKuKw9QFSRq7h%2FFAl5dKdMMYtwFWcSLsDqfrLIMQCrlsq8mRXj%2BXGkc48WZKH61QIo66k0FQbZpFgQNiGkjMh79Nt%2FalGLd4EvyfealUqYe6veNm4ucIebJjI0u3qhS1oHsNgH1e8ImD11zlnPZ1%2BaCCH7RAwZDvYDd7mK0yiD%2Fdsg0f7JnheyL4bS2%2BdT3m621gltCx6HtPI7SbsKeHArluXUwwMTfyQY6pgEH%2B7u1zvF9oyaaWKMEpsEj80HxO%2Fl7O2JAEf5p%2B9UGCtXT5EWTbcTE6cmQNooPPnLBTpe3eX54ORd9CVCBcOLeIIFStT%2BXEg7qgy1YEwiHORrHQFjBV6cPsm3VMRpgpAE73aCPwRrpPAkmWnfHTgiAgQCopgg0LjrM%2BDsKC2DqNlNLC3W%2FQBXA9Plh%2BQ3Zf18Kc23inmUvgBGl6phatc4ShKWkW34T&X-Amz-Signature=2daf350f7d592e5114b1cbedef0b869e373b137c2a1f18de878b37d34ba84f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUGUZTOH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN6iYnQ%2FCTxZXn4E7IUkfZSgD35yTqkY9QWQsJuTCgwgIgPwyn%2FQjmiXh34qeWsmYD%2B%2FT21xLXhCKcmE9G%2FkUGbkoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiEAuqIYWrnr9j0SSrcA1hItVe7FHeoZu8YzUryAkx8mRKiOPTAln1maMJjHvAKCyllTVoH4yv11WoYGmZaCcHU6exdP%2F2heJ%2FuYl%2F6au7UnTILoqb29fCa0kI471C86orXjOCyxK4N9KI4c%2BKzU5Znzc%2Fz1ES2%2FCs3jfawt152DJVlhl0NVBSHMCP%2BIuUQ3jtKUPysI6utxtDbS1zxALGrL%2F5A2pScZhHhQ21%2FswZqWD7EosSsDVRINgzi1%2FwLDRujNkrCz7BSPKlTDdK3wRF9B4bZQMgapfT6ccxjZhPLHtFQE3VHUipUpz6rvmcBQLHtA79hmUlu%2B2HM84IODdJEAw2uwpzF1d2j0ZOZEJXWFj5MhtgtH5U20kwdnF59IklljIaa%2BQZ2KU7MlylpZc%2FycbwpAo7URVNmmfHl2YwUmS%2BVmzYL3P%2FvUPaCANNOEEG2nBy1eZwDYFueN%2FZRHdPHwjkMi4CY3%2FzI96tLI5%2Fzk9s3qugvnDPq%2FQsx2W3kte1%2FSc95oU1zv%2BijzozZIO1JPnyHHPNv0l%2BnmefFYJrzz2KKmWuR2cG8AAlQ0n5B1H0XIhRRZ%2F7rUzm%2BTRj5bYgtxYmYgsbNa4yJdOmVilCmyz4ZHwnQnigjFdIIOEo2b3X3iFquyiJJCfmPMMTD38kGOqUBcL4ZNRJU%2F0g%2Fch7YiWUvBh7JQm2I9iCF7geqXWT2jPvoTnnc8N3xNmHUfWqW3xSYzzaVRhCZyvLy5XGneiCDYvgj7vtIgyUdtl1nLbve4gNbDp%2BcXBinvxKuMiam6V4jhL1uqisMtKPJ5t6OE%2FhBpPP2OL%2B90vYd5Tk5z%2BbtnVkPa2rWIxuPLDzpYbJWRpRRneYh18ctfPFeLj%2Bq6yIFtHUDLs4I&X-Amz-Signature=64c54f3984d093c4d6ca1be51cdd2e9431a77e87722d3f9f2219cde12467085c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

