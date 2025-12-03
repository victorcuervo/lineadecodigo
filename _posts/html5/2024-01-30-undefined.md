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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOHGVXFH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCKE1WJX9Iph9AXrZPTr7RLYTunyCIZZtN9BadoHlbLlwIgRn3Cp779UXF1tgFjJckz%2FolTWZ9ZTzg0tgF4UQJeOskq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIBTAuCZK9sZiIycjSrcA0fM5sBG82FAsX%2FnoVlHAAXgZ2Fi0vMqenxoxa32mJFYWY0ICzfSFuweX3wfmD6GzFyXyXB7FJDDegm%2FdBLskffWOc1k8ifsHQGFLrIIc1m7KW6n8K8W0Dk94IMnQ8uKbdX0BfoGIxQsze5itiUcI8SHsIoUAUi1zLLGkKnXE4NedA9%2B7LE92%2F5zFX%2FPjmobTzgHeB4Rd9kiQ7bR2xGCf6R%2FYAFI2tjJcwPXtEQWKFe9Yp2Fjyits0jAZQiWetb%2F0u7amk43Pb8%2BbnKc0NbFJtqHcKIfRMpKuCMjQLJfxljda6M7%2FNK0t7gTDCNxfhiZ78bdwDXcoNEtUr546aiUFbmR5%2FXHQ93ohtOCI%2BaOpfZFNON%2FzCvt6cZBTMF39F%2BrJHO20RV%2Fy%2Bq4ulB3PAqs5vkYjVISrCvd17Wusb7xMsc9VhI6RBvDc5DgjLRx5lNe8G4yMaMzZkF5brZJXBihKr1vDtDQ4msl%2F%2FUVqLw18GXz21gpGk6%2BNplFO9MZrgCyOgbr8MdKL7mKDbITibyT8TddcLl17UKnSP80E7xtta%2BNFqqN3Z08RGyc%2FSlKmZcRNSLPxSPht78cgjbyNcRiJXfn6yHVfRpIhBfK0nAKV6RTutAoGsTRSJJllAALMPvBwckGOqUBRFgXFHPwwGHqyBWpEjAPHiGetsCRfsBGNVjDNUYViimeIE2FYdaZylvUMGVzUUl5b2sw1mrIu5RNd7RIqFhzQq%2BKQ1Nzkof3tMb%2Fbtk9smpw8IHGJLt2yMgsS0huTNEWYyU7o2Qnl17RW65tiyEw9YFqXrgK77zpIud5ssJE0hCennEIH%2F%2BcQluPiN3CUaWeqHjzFiP9jJd09imlZZUV18vNYf3A&X-Amz-Signature=7c908080e55442340749035d11fab33e50c2bb9865543047d7f54440b73b771b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPMSARJE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIAfgHAnWnpcWegY5s6Wf5y9j%2FBQTrA6qRTJlIzvEhnkNAiEArKQUkkf9hNzwXY2Auh38bq432XBCUgW8xjuXIGC7yLAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLPE5YhribxTLurlDCrcAxmeaBXI6bhOD4ZjnMk5%2F6pPwK99psqG4f5gBN6KyZWlcMXtJXM8h3OfDqy%2FsimTdjyLlrFRTqvjWNh0qSzjCcCSe3Xuo5fMZPQFzBsFKl3Q07%2B9GbiJbE4y7R4tV8ry%2FaQkr32Jnn83s9NNVkBqsnFDXBA9T6Nc3j9hfKoBaqZ%2BJOnSU1jt0xxallE8ypZR5mG%2BMSYg5qKL2xL%2BCzRcA7iLidOPNYn34q0EayRZ5gCv5PZnpyY3A9SNZVAY7tqs1oyCywkh0S8SSgEnxSuAXJ17uoefEEiHQqaGUaJfAR9xZwt7gcaIGH3Z3o7D%2FjcFwsRTXHYD5I7uXU5fu6ikpZrwDfAAbbs5ymO%2BXTeqLKaihI0DTVP0MVUiCGvkt0x2OdyslnKx%2B%2F3V9YtdPN3jCeI%2BrxzTc8qzDUrL0OvgoGJ5b11l%2BIEgbgiJroaCFTU19vri1YNPKWWBKLmirC1UNWrikgpaEVWwaWnts6oqf%2Bpi9i8rPqcMbO1C13In4j3FKMiF81PVyjbXEoX3EN3dl7tdnyw2X4Trv%2BRWxZRd43Uw%2BG5hruJQ5Bh2DAnJYbqHPu5iuhC4YlaQCOSYQ6vB5pEh6b3K9ie5Fkc%2BRD%2FY3RglUIt6Lo%2FyS3S83IkxMObAwckGOqUBIU3dzghDejX%2BwBMuNVfxJZBh%2BlqlNuli7IySMWhyS4fBTrRAUKtqgTJnrtYRH6M4bxg%2B14kDdswaCzqoZweo%2FxpEDALG3OoegruxBbV6MhGFxWxOHG17TRXynd1U2tOL2vTMVgXTL2eKxszNNODxtL3Lb4ztQs2NM8pIZzakFKKd01duzcREsNBqmBzESwyoOC%2B25LIlJIEDKQt%2Feage7HXynz3f&X-Amz-Signature=76c5fff5b42dcd84d71459418b71f57fad976f10d92c5d0da38ad51301fdc847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

