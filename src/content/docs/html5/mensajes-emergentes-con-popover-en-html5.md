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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBY2MFCE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCap6knsOyA5gUJe6ltpz6xOJLI9vEwgMU072v%2FfypciQIgWesGnbivWC7SWfovFtZ0coQf6f80K2mWdTfbT0H0Wv0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEzVL7S8ydFi6%2BkZlCrcA4iJKdZoAoRDQ8%2BQLuJvr5x1ehP35XTV%2FImUR5bFCU%2BdoF4hOAZ5tczI6fV93xB01alptzW8%2BTM1STPOOMMrsioPN8tE1tD3IEMLPHw9D9F4bGM2b0KymgxgGRqZE6kq%2Fl4sIIWYOC267xv9%2BK0ROrNs4SNAcGogyMRcRUaZd7ZhKS8aXf54qRJkSnviAQJEUXEqR1ixsPYz7SIdCZgPKJsebf2qHBpr6KecRPYe8rB%2FFb9gdUwEwNv4x5uUVkFpFFZ248p1w13NnWFaP9ud7nnGGxzzzmxbMHY7g4jHAQy%2FDk1cVTYbbTyC%2Fs0uYWJcCez9ZWDWqqBSxlDsbLfmBWep5Mtev7JxFzLAid%2Fa5R3WIbtnVqkli3rjA%2BkUxAbmw4Al%2BpQYMtaQQbdoT5El%2B1FzpMD20sW5dMEC80Id19ZfRjdIrqO5g%2FCc1ZL6DEZhHtgB3EE0HrBmxI45fKx5udADWWO4boxIcuu54mb%2F%2F0eJj%2FbQbcCkkwg88%2Blf6F2UQWLW7Edg%2FF3VYj1KDgbF24A%2F7ikHRDnBAlrKChmWfdfALjq%2FjDayAoH4qBQhJw%2BFWEtdfoH7Lj4HCBlmr6ecEpe0IkjyuEHeIE2147PF%2Fx7CHOaw8a3a8RLAe2LuMKShxskGOqUBRZRWq18zNAfdAeK%2BZr7VB%2BHrMS8rbBaiFLO7s%2BeDU2eKUi3uNfOg8CVQ%2FBbR1nvLvoLy%2FYBHtmSI9OFIIOcrUFxNWV%2Fgrme32zALD9fN%2BENjmXH21pP5%2BoGKRKeLIYy5JrqPJg5vQ6BFMC6V%2BAezrKY3Ux2aEAVCG%2FGn2%2BvSulCQ9sFyMnUHQHfQhvnsUsCK%2BZmRS9KGV77IFCH6vV%2BaZcu7HqSk&X-Amz-Signature=15fd34cec3c335c8f19f9790e68bbf4e406bcb0c64bcbcb8eb78ad94f077b7ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NFNWJ5P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIHq%2B2DS6UJ6sO9x2hqUvr9AU6QcNPyUYDu2IKGp1QX0IAiB%2Bu60tHU86W3r%2FFZM1uB00VTt0RTL%2FDSwxbGkQlHibhir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMnkh4bs%2BW7oB184z8KtwDd9lloXHKBTF0bQM3PxKZbtGGhgI1eylfifacWSSTRk7xKERoY%2BEaiPcIH1GLTJGhLGSsPrYHtSpNFHA%2B6OiqHMoT1%2FY1HfPnV%2Bm3XXj3k6mCqpl%2FdhyPxoXZh9lf5mHzCHsujgZYLwr35r%2BICAtzCKdacDBKwyDXPBUJN%2F7VUpw1nbCEwQKdd8Rse7SqdWx8yVFkUnRYswv7pkrprCY1WjZQzl4PzVtR4gbih%2FjscqSgeAzEWvhrjtIT85WMvEw80PBbJp79Fvyx1iR9eX0jHzpL%2FE8esELtokaAybC6CocZDczDkRts1RrSY8BPiSzR6E%2BTPeafjKqTSAZZMbISn68ceg%2BwLXNmaQQIKfjYlH6eMAijtCLgnIkyx4BZSZne1CiVb63MLFJ9WssgtP34OGcI2PoqxTPWm1fir%2B2fRM0%2BI%2BOXGfgj700uGdsUHSK5T8oaZQ9Gw5mltpQhHDTgbOyDaHY2zukOZ5UflA5TwghMoGVcdM4w2bZt6JQYMhW4kDTs9RDu%2B5A86auIBwVD8ySLdb9%2BE44xqKhurzvoEht%2BwuIN0PEDRbCMmTbBodwEzmN4vMvjdHNLWPVN9M4SsHtMFCWfshtWS9Zx%2BdEMF8%2Bo4MGS4wIGaBLJpWMwoKHGyQY6pgFX0f5ZrJsTsGcNRRo4pgbnyaJkhoAsSwoS6IrtnDhSoi0YGfEOoNX3uNaYO3StHwtuOZV8y3TzD9U5Rbjdja9YKr27tuFQUq2CQbZGr8CdJCcFXjpZZ6dZfi%2BgJZAh%2BU%2BP1enw1E7Wv4xva5sP1CyZJAIQZFJC3yjKU6Tzsiwuw1LjK0y%2Bf5UErpFlWBIkxXPb5IDrzH5y0IHV%2BdN92NNqjyCvU5aE&X-Amz-Signature=532bd6ce6696e86d21e44e5cfa6e8f07ec271bf3140a02c01b37ada1e97eaf52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

