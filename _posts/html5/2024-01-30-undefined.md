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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDSKUFIC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFc%2Bgoa0kOII83eX5FtTMWpO6DduEEyhf5bLcRBoatBiAiEAjUj8F6oHfEfBBzbWJVCK%2FbS2ZLetrfm0m0EWVnwwgKMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDM6FVRGZnHiClj4pmyrcA2Tg6aD3jjvdRab1RVcbdtyGwbtSTmTo5iGJJ%2B%2B6vhJ0utBIaT29ATNmEr6WqMHPCZuybJ5C7%2FkhYXfOs5FT7kyxl%2FKTIoUKjskEPfS1Fqa%2BaHO57%2BsZJCikgY%2FI4UNwIY5vI405Hrh1DbDHP5mDNAKSRqIgE7tPMOA02hmdCneAkyFDI1zCgA6Y1%2Fl8qv55Ps4xWChzlAIHByXxHvS6xptY9yiAGXfOqbPeaBYjZdsFmVgHgS0vi3eoZHHWxdzKEbGsBpLxFoJVO7DwmRWSbOsaN01WxR0F1fcrPghorNeO0HzXRa55sPBm1G%2FhzIIZT1Qv%2B8qEDXLbA2c7A4XMkjpKY0MHTW47ZI5dcBaXHMxGozpAPczJKxiOQZfd6MKnqZZW77w%2FfGs0KoRPgjUys0F6uIc7MIo6nAnI8oB%2B5i%2FxYPyfCLD5TrAfzKwi8tD1CmO8HzYDdC7b74mswRW754q6%2FBNQd%2B5Fn5XcCU0QhZ1xtpbiIZLms%2Fbw314gvCi0KfLeBuJxPxy%2FZNnwNac2ujM69uZNzqotn7ld9%2F1%2BgCuKBGi3yAzXAUMJAHjc8svWDxBbbE6ocK9%2Fdmm7A713qPhhnGPPuA%2Fs6SJRCvIhgpjfPdjo%2FvwKl4VY1ycUMMHMwMkGOqUBR7E%2BOy3kWYJv8%2Fxg3B3xE%2FsdElM1lSoWsx9Ut1%2FJed1xtsy0k0e5I5VTTQjQgb3QPT%2BBDie8GQnisgJNSp%2F9OrxkskNcoqzfphjXFZPyVJrUkbqriaOm4POCBtsIUrrtonEpVDXi%2Bpa56LtZJU75dbiXPb9n%2BW9%2BqEu%2BlVnOXPcnvkUMH8WwBLpDOL8EX3HGoxo%2Fg8UtWNOSNS9XQJfGwN3NHeWj&X-Amz-Signature=97359a69fba040f7cd5cf91f714153609db2c4032ecf8ac77011eb92af20edb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RT6DBRK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCik5uUw3S9yR1lttU1iMmVSRc1cm6VSUj%2BH57E99WpJAIgddwUNQhA%2BZd02SIQZmK%2FOtL6ZNQ6tIe3v553eNmyMxQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDL6dcUxBNyPnUsGVzircAwUgCrKZ3g7H%2F4eQoky7v1jxaHU0Twp3yDUT7%2BA13WHL9cppcl5IBl%2BNT2pA3AYiXbWdTUad6fhW%2F2Cat3G64lIk1RXXtzt%2BTV81qVeT3eJgSuzgylAnJ3X6428P6OpTy46eUHb5gU0Vjfzdr2ElaJ8blt7lbEd8wTjs6gOcNwpFRAKlADFQGeFWn6YrV9ZVzEux9Nnto1S5me5MutygoP0tqAIGtLihmv946a8EsAEeFVN%2BxQvsH06q3L3BJl9qLmoevbSXiZCEuWD7XEF3r0NksjAPcRMlbdJT6xLlpdp92qSuISo%2F0AsgAIz7r%2BOWBqzE0OdP%2BTI2eePKikGqi0NH6FZRV%2Bcrqd9a78RN6QcEpU2QwkD2OuZMq10lckH8umsoe9HUJJQIdrWeaDAPQnxJ%2Bny0BsbriHqdzWclrYj0u%2Bul%2B98ZQ5xSr6OcO1sF5ueRRBOY98Fj313CrROWAx4tIXN5NPZzdYQ%2FlN%2F%2BfqyhliShWyCpSl4nK%2FRldOxviJPUcIFVc6gku%2BKjpQUK3lO0CT7tFDNV8C%2FxYlCL8XXs2gCOI5TgY%2BvcEbnBOrcqHkoZ832oQzYA8neP2YeqP3kAghOJTT6nsj8sHudgLPFcyR%2F0x8GVG75u9EP%2BMILNwMkGOqUBF6zCLNzoz%2BQRpqDRiZExbCepjWjr888Fq7UvgIE8S0tuzgrIzHjtMwiDU7S0GMXZlebmX6LRFruS6%2BCYSbf2NTS1FGw0LgRHpmYBgABdSCY5d2vwMEvs45UURZnX2%2BuR1B%2FDIpsDlcIfcVb8uI7j7VRud7MtOX7Ew4keB3WTa5UFDpjZVpozZEEOzOpktSpJ2YE2BhKbFwkTANP3xVDA8VdEkQa5&X-Amz-Signature=4b608a0f41f2b34c0e2d4e8fcf92d3567e410d6de01270eb2c530355e4d02b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

