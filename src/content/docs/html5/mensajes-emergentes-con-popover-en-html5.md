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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S5ACYVH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBSmPm8CFXd2Bs0QtHfr3JxDSsaDhSlTSwC%2Fi5UkCMUJAiEAh3lVH%2BSyVKzOHGISlJD7uONdJKTOmLXRkAOT2JyyzB8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDO45EMAiWOg%2FREU15CrcAyZqXA7gCR3IAYk1%2F4y6OSS4Q1JkmQ3q8UZDJAFRca9MgYFRpzR7yelIKm4DbZcQjQEZwM%2Fx8fSPMRxCq9VuUju1TBf%2B8tPiPCTk5lu4slA%2B3aI3EEO7lkLVMK39LaHSDuSiqiwbkS6Bju2uj9evV7F5%2BIA8app3yxGNZGfXPU00wA51f2DfKlnsXS3qVUHI6h7hLALKSohvAyWjVroojHKPw38mhGy7F8SqDeD1tdjg%2BjCYV4OskdAZBcR%2Fa%2Bsn5WrTy6nxde8yMGRp4G7BVoMwAMBQpJXXLbIJmRcLwE%2BEZVLfXTHC2asSwKFFEBf0x5T3b3sV1ThNJBMOM%2FsHTa6uDL38dePb7ZTyXTJFTvkvknmTqbKJSzIHXYmM6r1A9MY9v91el2aqjvbdhNv3YBrYwCmyj922SyZhxhwHXZTz%2BOfaHzZaYf6Bqu%2Bc6gFqiEfLriT%2BIjFq%2BguLXrJ6KLlnGOjEmHB4117%2BkFuSz%2FYSNr1JL77KvOs9rp6NCio8tRFjmV3A7BjyjBegXgg4dAbIxQcGk5q31lZzSErWsuNY8Eln7DSYbku1OhW27uDlmq5iTWZR1YpoCeealf6Lj89PBOWfyWlekgeNnzNvKMFbd878vQR3AFnU3UufMIXnxckGOqUB2BPqjSj%2B1u525xUfDHlmtCeDzRJU6KpnbESkAu8XAxBFiHMg4mSRcA9fvW8TNMlyIXXrhpcZuXi1FWSsmOoX3u2wQm0v68zfxGMTfddbJeBxuldHlBMVD0jKaP9gwBJBg4Bmgm4IhbEqRH%2Fofgy3v19Vl2YjJVAiPpCbMyQUW%2BJjydb8cj9Fj0DOuXGq115Q1vs6bJQlKzxJlhBRVFKSNv1UsceJ&X-Amz-Signature=bbfa668aacfedbc27254701016fafb91ab16d78eaf4df649662f0608c46f357b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVM55F2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCKpH70eG%2FfPBRFBhscEOFcn5WkBMJiz7KBDD3nfOouegIhANZtIStW59xEVYF5gubby%2FJ73oDqHD4zsV9gg4YqhyR0Kv8DCEUQABoMNjM3NDIzMTgzODA1IgzLT8KkEyu8znTAewUq3APTgjbyqErdOu2%2F9RZexfvSN8z%2BOTpygXQal0YgAVVOA%2BOmN1dKJ7axNs4NXhkr4AeVfOOFG8UtGxs6KlOSMY41k0ffOyjCzLmEjQJtteNeKMJODZjZLv7aO%2FGIaYLGWQrFhJrzW89cKwP8zlT5DJdmA91%2FwjGtNj0wN3KaLblFV%2F8rSdrm9PFA%2BD1OIzExmRdV11EQhn87ufnsE8WSOIJJGELIhI9MVbdGUx2lp3HPu0LB7LDOH1LGLS4UxPAtVyraHWgzM2AlfnVsTM6%2F7HUfBx%2FKPb%2BMsCIcKlWRG0d9NO76sG%2BMvT4CKi%2FR5Hi4wZqfMQYzfYImNBO%2F7G%2B1cSiSSa618aqXEf5Yk4WoGdPXV855SpT6xHm98qFhDvGmXl54WFbnjIshnOzTBJVv0%2FYsvuTWnBPxVUp6UVDjlkQnvZUnQitcFOcU8YuY6vZ87wVsm%2BxWWkMJtlrhqqnVwm914NeIVeqHSmmZK1fowZ8exbf4BEXpQEH5Z4tFpeNphAnF2CUF112q6Z%2BSmH0%2BeWQMwbKoFqEXekcDM%2BLO1ys02vpZhu4KMVNSK4g%2BjBCHbjRVHhQFGYXJAd0xm289qUL3uq%2FHSyU4paRm3WyaYrBiH%2FVI1%2BlSNBcD7j0x5zCW58XJBjqkAREttg%2BDEaO6i22aNL1%2BsSjGu9O4WQ7k1pnVO3UmDr%2Flb79bQP9mFFvG9An1O92QaesXLCKjaNuB4%2FFkQfj%2B4S7zGgSallj5tXX3bOfTVg0XvLRimwwaho7QyZlbz6%2BMLPx48ZNvsG2n9RubXHeN%2FtQREO5IhvC3IDedGLHqwStVFvOJpfSr5uAx3kZGTYisjkqI2LkyEP7mwOJpbI4TCcy7QOgA&X-Amz-Signature=587e0e3242e8108425749e1a4bb1def9fbd2140a48a23cbe41b10c0580cbaf7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

