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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSPQ6I56%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAio0I%2FaL7UvCl%2F2kJgqejtGE%2FZz%2FVOAgP5RV0g6k%2BfAIgUZanoNuDVptBT%2FJiFQumU57R2j03%2BhzP5v5rtpN4giAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2BCXvcDcS3lNPxo8SrcAz8y5pdM0hTePLgcBaO2951lWGm5532L2K8mepw1z7vWwIjxiwtM8fqrq00mx4qCDIuVIEO7wd9%2BUz6IOP7qk8urRWJN3ygdPelaMOGwYYVSKyc2u0ftOt288KWV8Yg0KfhBFlvXIQjHhi6Nix57LcRCmGW96rdxIqYANpcy3xwjKd8xiVn0naFtWhLhYYqASbfcWKgw8MOpBT%2FIGhcnJaB06TmJ0616lM%2F%2FvQzveKIyT2stCLRUTURFgnYB9Sbcw%2BT2%2Fep8kuybRrqqGxwg0qhyNASnARk%2F6Vuws3%2BjMQC71pAF%2B4ady8IQKv84ZPUtZrYIvEe21fkDxZsu0uQmpDcD6fTaRwjNLKMd6cyEDLNRznkKVozJUcfzDT63mLBhpTGbhq0bShdJTaS1shfQltb3qO6SZYERxZQKNy0kKXdXI5wXoUjREuw%2BzKEJ6OajARXObsxmb6GkeQhUzl17TXISH2FJpT%2FpbZ2q2tivlzVSk1yAfZbRuHCwcz7nrxyA3C1fBYueFOKnAgGbbWwsjSd%2BaO6xsgl1RZSkaGaGlrTwjtf4y7xHeDuS%2FE6PFMta2W6ZQ96c2%2BF8VeUh5AspgSPYHuMRsDIhKBxGisui4fXzjRfGw9zliY%2FA74tIML2Q28kGOqUBcBihKaB1BblCq0Cm72apNMEISx%2FltRf8VadLlibCrNPod1H%2BAGUGZoJUxKbSFib3L6Sd%2B7MoOUCDaS83YegMRTDr1FJfWPpJyaQHqDAv%2BY35wL3%2BQYIE%2FF0U7BJNUL4khxOrk0iXQUCSSO0cQvCyS5gjqvcScBZNAvOIX%2B%2FQ0dgQWklzlAqhIGoFEZOVY%2BiVhAv0kYrTzEgseHUUZuzJ0v%2FRe5lp&X-Amz-Signature=8aaf797547279c9956e11cd5cc3359c4a2857ee0a79cf7315c0a46f6d4fd7066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7IUN2P5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL0gDDSGs%2B%2BRkcl2O%2B2Ps%2FN64URKbBMzyyXJSmM8kS1gIhAPWMlSpmZR79TWsY7MnnQs2wMwF0NWR%2B0CyBRCcduXwyKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJ1U1ntZ539%2FHyA4Qq3AOhKzo2s9qpcWFtvQFodeUsAdyBV3mdPFEqw2MeTkkSaqrVNg50gFRUdbr68%2FZC0iBa%2B%2FeZm7YGRNDbypQwYQz5B%2FN1VruW4zoTmk5nwNpDZq4%2FO3RClHsi%2B7UyTL0Szqzo3UG1fQlmRRlZIhJ0ouREedDHbMA3Qtzelys4z46ojjsuSazpu%2FndUUHL3aTRX8w%2Bhv%2BkmHTamNef3%2FVdpO%2FY94om8g35t0p7aeN%2FxFFSaDLFQQSvKzsfKkPs5rXva9ZYpqdVG2eZEQ%2FVWa8D4nWlTR%2B47Jj%2FLptATSf2mPPjXw2sv95GGF9HzOs%2FgtKFeQOiyHMKXe6isUk1iKkxhPMEOISFgGK%2Fvnpvc%2BVCfsCxRh1oZ%2FZYnWiZkGpgAX1cguGHQPdft725sjNmcLaiZ1TioegLqZ2EU%2Fi1TweRNoG4az2B10cvFlbcjcUTLZ6ImdUPa7YX01HPGth%2FlqgqWl1qnmAeiMt8nbIsYpdhNt%2FWZVyt2YzqYoADnUHiVsGWRCrLwdI0D8tRJ6b34ME10RfRfsIfEQ1f%2F6ywRB8QCOVeqyCgeJK9J50RV%2Fa3jJDO8we3z48a1auHRsXPbM%2FqX7MrcEUjX2%2FqrKd2cF6pBzGYbNXXrpD%2Bbo7jjMADsTDcj9vJBjqkAfCOiCmmFNhGzhR5B6Oe038ls3EhtaKjxcoFUoQh02y6zCnaLOvClMqnn9EMIuK2eJrSSySP8C%2F6HrdNDwPMvqzuR4ESKBVJCt7ddSL0uKPXSq1HIJFELGoQJFlZuUTScoFnadssHAlqf0xJzBqcPHtaDOX%2Fm5daHtEAjwFi6lGd8FN8WC46jvkrovM7wCqXJz5tAv6VP9eOVgG3y0gNovDEa8qG&X-Amz-Signature=6fd57e42091ac1477b8900d6bb4cbb28a5a8072a992da4123fc5c41f8823c185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

