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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL7QIZQN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBUO%2BmbREktQCbodP%2FOxGb0fAV%2B%2B1gZdqWeR2UTgSYYVAiAcfpxE41w6VgLSSQnKkXtmDpdxOLRrlZLsQa10E%2F%2BuGSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMXO%2F2F2ByuB%2B9ATo1KtwDkRMZJrUKhGBvo9hzL6752GOkiWrWC51J1iEC3ARuWb64sNIF3xa2otbTG%2Bto5neZvGyCK0m%2B4mTSH0NMMz0IVROJUDjb5Dzsdnv4gyQlR%2F6BVOjQxK7s3gZR%2FJVJceJWbqbWKcnC%2BbtyHrlN%2BWE%2FloXEgzR%2FHDSrHgP5h5bDwqLXs95h8kR3U6Fqy0BfOTvh30VW0zPZPSPhi4rlvpUvyefY5wa457OpbvMTctGfOVyLqnJqSCE1BB4P5fINQe%2FX%2B4dP0nrIxQpmpBLAaMhZ0WH6ulpRhUQqXJGFX8HLtq876h9hu0OAPj5ckJf1tyygjXylnlykCmIcotheyuvJlAvK%2FifXxHWILt48febN%2FCR3Y0V8YfVHObTGTzTIiEcfhXVrNAiY6VLWVSxka%2B3TOPaiy4m2Uh7y8FXJSoc0DhFawNwUxKCAptqr0ppA1HIASNQ1JZyQSZGafomXO6y6H48aLr05fCXhr1%2Bd5YpcrRDKZlV7PXNUEPhFfaJ7BHvRSkgX5zX%2B2tqwKe8HnOj99k2CYoZnDZZ02VjsA7sjbwU3BLqZwx4IHm8Uh%2B5hDdQF1Bx871A7wtvPdktQJNJGgS0v3Gpqr52S2VFEFPF%2Fc5x4tADk6bvTvkEYDFsw%2BujAyQY6pgGlZZgD60v%2FrM3Pz3dgQjfV%2Fe2NZGVHjPiedD5mZyR94s%2FsdOpFZ%2FZPUy56mlpqmKl8UN9uRzz3eOs0zJxiQEi9pK3Vo%2F4KT7puzm2rxvJXFAVx7GefMaNJXylgRn9VpIQBJBn%2Bxb8ySyOG2M9ZorGsiUXv2NBF3vN5ymCeIoWIZufBrkXe0r5BD%2Fe31kvX6UIe7rgdqtB3JDQQaI4sGpmeqB4flc7v&X-Amz-Signature=c17c370f3e4a132d36204d9ce51cffe77bcfbfde83ea432ec7898dc6964695db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VOOGMSF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBlFSX%2B9NNHxdFUVzHvzd%2Bez8mGpxw9cuPCXscw%2FqPpCAiAie2munKOFHtO0XLRrdf3%2FG0hK6LHi0%2BhXbD1nXSmQgSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMIICuIdoD0zqDAt1qKtwDUowY7pCAkq9B7AKDNFbotMMY92FwkhF%2FraxXCYfQVwEQujpk886PIJ56HU0LEYTIXLhsfnxrNUnzA6izkIzZ%2FqtT0TccutnGFcR0aFg3OxG%2Btjx95CUwQKiq2xq0%2F4XvDMaBBjnLPEqKZXv5onKhhIXybRAU3eJIVeTy5MewQPqquSJcpCHdLC2IxyXKOmheUV%2B5U61A8xNUFf1W7EIIFy3agzwZK9Lkn9BSHYIylSpXSUxWyA4TVUih3a1e9pyGI7R3rtota43jX4e3sn0GtNYZNufeuFm62zTyp8lgwI%2BQ55B9I1RL1%2FmqbcI8TJvV%2FiEkBAuiJqCxWLH6LGcJsVX6N4YO3SmQVCQQ87evYqZPxKplTJgGEOjYdpV0SSDpIC0FVb6j3u%2Byx5xphViBo8inFxqDa%2F6GZLD4RH2%2B6Csa0fgflEiZX7bRxEYHHZjxj7pJ0BT9yyD5yc%2BB1DcK8SHlkpUP1bAnNCxt37jccZvWHU62%2BALYwYhVZM7wSCpVkH%2BC4r1AFYnF8H8aCIjcRcAHG60YK0sdPnjEBz8FqlkGFQb9BYhh0w0t3V6njiXdVltV6qHAAwTGRH%2FAQBub80los2%2F0BhiwEW8fMGpKTNcJNi4Q8ej1SD7D6fAw6OjAyQY6pgFZDKFxTy646JQp16MEuxLG9318z3bDwHgbON6JvUQgXrh8k6zNpueAou7eO9ICWp%2B4oeX9Mz9bBiPAzx21NADtJbNEZASbSWVN2K6DTSpq099WCXHepKFdBidGEJhFXR%2FpmLvoNTvpqsiFzd0M9fmkCI7no2kMAXW0MHwDn1pc1bX3gPkbz%2BkYHsAeS%2BX5DlwZ8QEnQkd0b8%2FQ3RTJGvaTaXyu9pSH&X-Amz-Signature=d6befcb15285284c8d3397d6f94ea649a722a7c4d74cd7d7f593d1fe8322d29c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

