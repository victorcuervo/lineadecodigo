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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXCETBEI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCTiGpZBzVGo4wriFOsKKXHAOoRCWMfDzStdfyYd8ijgAIhAL1X53Rv1JXZ94DwUJjndUV%2FEn%2FJFdSPx81mKwx33ZPlKv8DCDgQABoMNjM3NDIzMTgzODA1IgyKEh%2FnFKnhDIhGc60q3ANIWKpx9lXa9O2JllslMlGkGl7jMCg3aWsqSnO05crKAtqHrI4h6yUef%2FGXG5jGVAE45nxcPC7AV2zCugF3HrHT%2FzDUDWKs0l%2FHGdvnEbn5TJ11gikeJ3Re0LduloMn2NRvOen2%2F244zRP0n8cAuFRZS9Quql2o6VxK2QUAqoBckZ%2Fw%2BXRdeRTe4HBMpU0q6k7nCrtJn9XIN%2BpMW5k0Yf%2Bj17TV1TcV5uEAhb1nyjhWHwfhV8UJUOMOlT5%2FCFRkpubcpBoqFcr1cksRcbjUAbSWyHT2OjJ8wOaoPCvsxKm3TwyqzR0V7iYFzebgljOLwh6i0Ae9Sbyx%2FaBfWnB3jqwGjtG3EUODSzEUxlx63TzYaSO2JCuEFqwWTmiELfW%2F95UIp1oXMOBVjX4zxNnmAg9I5ylvIVQHJ%2B9aQnlcg8ZPgPWw0ktqWzdKron%2FXGc%2FqfgAW3phJMvfYwCrGfYqPxJ52sqitKIKVZOFejfU5SB0t5Sev2KvWLAGqadvNTVJs5C3Ge6ErDyDvLFHImY%2B2kEjwHLETEFPC98vqXZgXLCxdDUJ9aJ0pEirAauTy9Rt0cuVTStpg5T2MUsC0473Pp3tJqvYsU%2Bdp%2FLdvmn7ciGqEPIWb%2BZUyZBo5DzI%2BzDV%2BMLJBjqkAcjvAhMjZdr2jtHOQG4LPW0Ds7kpFe%2Bpp4B6cem0iQUgIxstky%2FaEtA4%2FFcYex0Q%2BXMaEnKowbwcmVhi9rDUqs0mWNL%2BGbkl5AQ2HrRT44p6IX%2BSsb5KWvlopEQh2SuMkJeQtrraoAdb4opyIcUvkfs%2BKOR8HxBEqtwZRCqjN3NL3179YUwVd%2B5u%2FhJrZ%2Fjm%2FRlqB2SKw0kQRh3X5PrhuYl3HAFB&X-Amz-Signature=74ae9b9518bd7870bbfddf8ad5c41b93f82c477dd4c198aba7574224a662f824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2AWFWW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBC5gBqT0Uu71o%2BZY3LtQYiwtPiVVgIGYlKMDO2GeAcsAiAUfH4mMzdkKHLfkSvSFfG612ncjvUvtazNPHfR%2FvA%2Bsyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM8okotguL%2BjYtIRlCKtwDOIoLRd0VoYOvRODjxVcBypiuyTAiisbk1VW7VzwcwwfuLCtGln7HYXJ3yfx5mbBMK5I69jONSSt0Y1JGHkV6eGbbLpVe2kLrJWYpUwz7ldJOSsjkfbk%2Bim%2BCx6kFs1pn3R1OcNnN6L7wGeEiBeJItHAzDFGg5LHUfARRLDXWY9OxZYelp%2Fk268YN0gA171A93EmRiIymkQAzXezP4pU47qxQdlnNNfEL08wKVX%2F5Am8J4PiDg6xgtSiLBX2am7ohliklwVU1InkHzqjNhxmwcWYWIHjWpgfc50iH%2Fo6XXztt5R%2BgfzcDaeBAGytLKK2BruAxTpGw1Lk5wUcTEAZzQiCE%2FhnmT%2BKsaeBH6yK50I8ooagVJx%2FaqfcHCV5GBY%2FCOhPXPAYfHVrqkrk%2BCBQd6H9RPwRtSnkjQcRmFBibakRnUKtJBNcxMQAbbDPYyLkzLxqTX3w1M30OYnWb4N2Rf30JBYin1s%2FdsNAqIS%2B3qSIcFY%2FbxbC8D7JcOgeZ%2F0o6yOtNv4Le7s6TnH4FcHfsvqpCUWaOzKS%2FPAOyDnEckS5ShuZfsWcAohi0A7vH5K6JDv%2BXA0DqA1F%2Bj6sebY6a6LFxNWeqstcdBlhn1d%2FlrFxyQ3C5Hlqxy5QqJXcwofjCyQY6pgHaAlfuVtGB1AEkqzvY76pdHLPCkTPMuvc%2BTamLgf2WMFX7%2F9%2BruoGZuS%2FjkQvSeKrgoBM2iBRH%2F%2BJ4CZDcIL140DTj7wNyKRMph7MImjjT41y7vvCG%2BVymyR9t%2Bu7mpI5AbEOtZG0rFeaKWIryzM0C%2BQXbUWOsdlR0FDXOsBPzysZOjxGOfqVd0tZTmPch5%2B%2B%2Bf2nM%2Fe2swf%2BbghyqSKsg64eLDcel&X-Amz-Signature=891c987c197d29a446702636e8568afb33cd985016cccb7db60a2814da5622a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

