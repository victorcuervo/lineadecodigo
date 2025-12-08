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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKMSWPBO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDENMg%2B3ddI%2B81Hfuh5ZZJQU7tyxauSQjGW1XkHYCtJxwIgV1ayCoqY2uMs9C97b5VGQxgYM9tu1HIFPhkYUmzb59YqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtIvCMMS6x7NLixEyrcA5QhGX2fEFu61ZbxbhjgLjXEjuR8bAf1vmHJS7BILHMeeIYiV7R9TM%2B5pp3Cz7JAiNEjHk9btUUuk7Ai%2Ba%2BOwr081D7K0x9d8%2BlprjWY4SJqTfg9u6W10S2PFigQZCRL7ep%2FhHx2K8kiW%2Fbuctl%2BpquXTthx3m6Cm8qShNEt5pOsWWJkSVHsArg4JJ%2BnFzS7cDV%2BR9%2BDBSXYqIN5PvSs9TpiGU3eJnSQWQEzWgQm9exZ6cxLsK%2Fp6WlJg95pla4lCW%2FOe7CLvGDdbIBT3sWOX9SmTiZz4U%2FZOuub0UuCldRvCPZ2dEQrICCE%2B8XU%2BCxcTIaE%2BKTm9uf%2F%2Fm5gEJI4A0NRqIc5mv3xdduRQ1TFefj0Apj7gD2kMpAEav2Mh3oF6Ky%2Fhp%2FbumAAGrnNWYz8XLjLSFY%2B1tVFTM%2B%2FyCAHvLJ1XQcMJe7wy6EzYMIAVWPxH7%2FMj%2F46Y9KMeJwc6uXPmvTPWo%2B5aY8g%2FfFOXP4EL2ctObD6SzNzNvhTyueeRKafFH%2BGt0m0pX6l17FoxqyO98t921VWNoq%2FRu5rjp9eCYEdLAretvV1IG%2BiOqy1%2FPIT8dnX4AavjC2NEQuqc42GltmL1381Ga8jjjVyUa8vKfYYMsJuSdU4zwK%2BX0RhMKPQ2ckGOqUB72QjAFoSRtEShFCbb974kpvln1uNzqZVEm%2BtNNmJAIEMLHsJzGKP3yU%2FXLnrNtqzYiwGHfed6BQVROdBq0F2kytaSAXyo9eaMjQHnAxbnqjjSyOvcmuZj8qKPWQ2vkveW%2BO%2Bxf%2F9APosQsNA1nQl%2Bl3UssNYNC1PiS8kyUk53B%2Fq61gevaArg5aDpORRoe1lRZh1MPsRVOlE1pzbh%2FtLdcmXVGwe&X-Amz-Signature=fd7ca4db0bf6d9ed8c1cc58b515778c6adf6ebfc55e54087a79d6ae41f0a96c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNBKNYQ5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BFzLIb4iUJB%2BTBUk5QtX%2BEm9euQZN8vtPqLkHF5O%2FcAiEA52qRuMVicWjQDTB%2BIqYVs5X6FKM8M3f8zSayJY8ugHYqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BKAMRzM1Q5CrncVyrcA5nr47NBMIYX8LNWXr1pFFXuS%2FxbUMUP05yaxzacvFLFNLrMKQfULFuq6ZoJWNqusfiMfjju3%2BmxmNtmQBqDzQd9mdbcB5MiTXJTNx71hl5cwk9nP8JK2Zo%2BPLJ%2BSYsRMnSgNMoKL6vyFRxRvOGWl31lF9SWpu4oqyp7T7BRrtbjkIxXpXVnTrxtlGKxdg4TjP1exZkrCyftny8YtAr%2BS51Lv7uESwJHY3EYF8c75hwgaxaoj5iZsbRu7md4qRNJB0OeS1ZHOETb4ZvhEmiwnqow40iY6Nuspt5Nh8IghGRcuBqaJRgnIuIlIBPIoNzkfNmdby%2B3iyo7aoK26FZ%2BvLj6jPZadm3o3EkhJDQ9DLMM0BerfUOgu9Jg9N5pzuIn%2B9j2hudFLnba%2BC%2Bh8S%2B6wazm25jwPCgCSZoShDfOGqOmmgtBjnzDMcMAFEV6pRQbUoMfO5bFtN6LBU%2FuXLlpmfMT4a1S%2BGpijiW%2Bsjl7nS1eSzpzLR68%2FZvhbBZxROG7KEYij8petOHXeumFT7YUlzYOxV4BPXZW%2BBTfyJ5d8aLjWXcEpir3o6fwVY7kmjVMrZ91OUf8zA6nFsThxlNLjdp26qO5M49BxgNHdc76yMOPDAeUHI0Bosa7QTU8MInQ2ckGOqUBhzRt2SjcVEYJx0Jund1PtWqFWehEVwUTQjbb%2FSWrXXwpYvp9sUlr9WEmNROH1rOPK6NYmcv40skxIReIXL4ces%2FqvCw%2FApGYLwzPZicyDWMknRZXzqdW6ahZ0FIgAV9%2F4b1FgbRYSsQMBVYrEKxiXovzBaAX4lr%2BgntuQMkLYcGOohjH1%2BQJ2B3dTC4RfgvNtxyAh3N7MyCzhqm%2Fc4DwApczd0Er&X-Amz-Signature=928cd6fba6d80bb85a5ec418123637f14255a2e05fe31e0fea37b03ebe2d26e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

