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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTSUALT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3e3Eee%2FTCtTHDmbb06Cy0MIOMzEb6Pb7SiS2Ab0%2BclwIgd3U4Wx9kRZy1U%2FUcKJhNgKt1mS39gRwjEuI36gJzURIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDHh%2B%2FnvBZqyYwhl4PCrcAykmnPBR9MXpXcZpoMVKLX2aRTsIaYusj0wLPr29EveX0IrDz7sytZySf1mHds9jqCdQB%2FQwTazVx8CU9cOPVpZNs6xXNSp6e3jI8XPhVVvW%2FnulVSbtcLDWzI%2BJC4cW3wiuOEBaJy9RpphKLmAAEO7C1fvl%2F%2Fs27ecfzzAw%2BjGKniVXrme5BqNBZKDW0BeFMwAnLF4Ri2Wx9kZScmwh8amLvhousILlKLvTohlcKzVBSpB0DV1YBwaTr8CfeggRQ0DB5QJ9KIVgf2WRSQuN1Xbz7MEWnP2k9kFChaZElJG1jpsnN8uKBoxe0l%2FHoYWhArhZZ5kOyyCaJ5Ex0arD%2FklYCiuv9Cu%2FHBqPBBMBew5MWcnFdJT%2BHn23%2FbV4iHJSWBsWKNVsT%2BKT%2B%2Fu8vAEJOitCCNyURQ4%2BTYPow62HSgKd6Y1jFHr%2BMp%2Foks7o6B3J0KJN%2Fe1ugJulM9ZIVy8ntWA%2BO6CvoA8SbIMcCYx7B8Vthjf%2FhKJIwonX9onTd3e%2FpubsDDYrFgJKYqJxABgxsR6LF07n8AeM3bvmxw1bVEAu4TkViLu87TZ0UrD6CsuyI1GlnjkhcFjYAaTcqEouFOVQ7azQ47DL7Hp7FW402FMEUJ0iTBgCUUAeyWRWMLvty8kGOqUBGy7Pjz%2BjEreSiY6BwaGXxckzPA3hcPusjNgewA417WMdh7rTmXX9x7AhnR3QDJ%2BWwL647TtKJkhLjkBZHUqFxgKhIwgyZQx7TQw24nFXs9uJ6vTbF5izd1VeqIyyFXAHp9rNaSixZifWYOopS4HX9VEQhsn1qi0hEbpc3g%2BCZgMs%2F2BIDim7eQZHpwrC%2FeTepJ8V5D%2B2nSdqDmTSYFkzVNd8DJzv&X-Amz-Signature=3e1c1f6913ba1a554d476562674c048e8e6691f948a29e5f0e32d7130a3cfba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIBLP2MH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCy8bU%2B5SYTgpKzLp4Q9Yq2gf1oC%2BL%2F1GPv5N51Aa5ZgIhAMmOo%2FitR9RTokhU2AvVJgD1NrTtwwpyJCYyV%2B%2FzNFfjKv8DCGAQABoMNjM3NDIzMTgzODA1IgxgZMDdckBtx6FF89Iq3APfNs2ug3fbjVH7Fewts6fxrmRCPQSZNur3jC40hxF7jPpCciOQoWH3ME7TORsNzJIgpM%2BfY7vT43G3YZjh11J9ILYp%2BHB7DR4t0Yruf8cBMriVYpUx4h%2B4RCALGzDb9%2B%2F6sjkz99uFbDFa3K54iS2FfqfGv%2BeAPwlujM31FaYoetY6tIBBdtsesNbz6FZ9%2BtfGL8NeB0%2FvedU0Uw90%2Be1YweJ4Dgu2%2BawiQBGjz7VZSdSzsjXWC2X3NO01YZr8hycIHBDcofN0UlaZyCN1eEmAPqBkCggFzQHy%2FKIkSC%2BtY75qOlpFtAuXzE2%2BDsCene1TwIVuvo9FvPGBL5TvxEh4Nze2cFfVaKQSC5OPrASl74BKXJ1AjMDdVp2JiKfAg%2FN4cV%2Bglk%2Fr6Cv7pP24fPnI8pF0NGwKQNhGwdYdkpIPdscneSk%2BQKIguKMSMYiBIQwtJOrkfulz1h9z7vEvpRdqGUodlT40i3fmvJbnbWrCyTKGnPLainev0LJkMMhJCN2fTEhyod84wNy1dZ7lYpUpyc4m3THEscWxS0CD%2Fy0nyqIQFTYuiTKDUNiOVjkhtFY50QN8W58oM%2FfcLhOK0w7%2BmeGgnEcLabUA3sdvxk8onJs7H%2Fheh6%2BtSt77sDC978vJBjqkAQ62kdOXiPe6Wb79kN99qGH5KsE0zCaGYTYBO0PMgnsgHzZZznVom5k1aIHQJOROo4MFk6HORkYqW139vdt4YGLID%2B35wz7Nj0gh7tkfIkx4GsIoRZT3fOp4rzFR0sMibrZu9PJTq7EhI6zRLs%2BFKZ2GMTkk%2BFgyy6502nY0qwQ%2F9bksh3V9%2BSr%2FDxAv2cII4kyk9ETQ8dzC2fflbAfFTBPsAmWu&X-Amz-Signature=0fcbc7bbd55b13bb629c0467c9bcc10bd8c9f8180c7d5e80588775bdb7bae1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

