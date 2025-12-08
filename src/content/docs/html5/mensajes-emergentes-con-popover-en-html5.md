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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623PLGKPF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtJS1JUoP45zHsY6h0%2BLYOlHQz1DFbB0kHH21pDBVRUAIgLVt3lsWlhxdCsc7vvz4jn%2Br7wem2aUjSmuA5wL1g%2FHEqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEELKUTJzO7BbPjzQyrcA98XwCi2xbghAsBTZbXz%2B4U91YgxUkFpBxUu69AGGsS5VkmXrtAHuVVhlA26B9QdkJCaZwpWSByqwNPEakTn5hiklhENSl5rSyIdHo3jYN9cP50S83VB61r66D8yqi9g1rjLYA5pl5OzsUmjw2Cvrje2JKCC0lI3n%2By679eFi2083F3CECmxZ53FPSNP7AzClix5Z97XakEbWndhBeVmYMxHjV8BR5MFYDxrR2Wj90%2BFTXyfK8SibhgiDkho4lmgnQ1xkplAnj4czV6lijQHEcYXPixiSpspohxzcl73wEjs5bAZz%2F4xA0BF%2Bh0o8jbsMFy3Q%2BaqrR6SaANz2NRtCQweYy39I7VTmRLZURocxz9GnDALMPDScuyg%2BSaieiKHEAzUAL4b%2BMe8mFHVCwQahq0lZRcWL16FF3TXUjK%2BbCXU3mwe%2F%2BnhSmEiZqP9chxxb3KQpI2%2BJ3G%2FyPx9M%2Bseah86w56iKf%2BTGRjCrdEXMGwdjBZVutXASRX5wWvdjsCP01iG2H%2FhnpUfhA7%2F4OMcljOOiCyE%2BWA6umJj7zMnP%2ByGZL3nkK6ORCHzC7a7BTTZqMXjdGJGFYdZKYHnHSR5S%2F2i580TgASucH9dDZSkicxDkejkUZWaiOZItbKwMLa03MkGOqUBswuWAIoUa%2FtQHW74qa2irr4d6vGexd3g%2BTCixMMDed96iRyeWjraGrNJ4CgpFEQ812ReGSw%2B0ekkU7sC%2BI0A%2BbkKG6bLRGRfkfHzPmehZV%2Fj%2B%2Bh8QpuelxTSUtDQhGG1ZwZ7LJT%2Fe7DII6TievWQGsc7oadKLnivFx7vmxEPEXXUcFj5a6NgdWUXO4jGCti0BRUUDAuS2StVpl8k5AeDX7b9mMyN&X-Amz-Signature=5a13bfe92e2650f4af96b6c83c13887af91c5abc45a67a654c2640641361b8df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56PZQ6K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOw3NnT9V8sDkMT7NCD19Vm%2B2pKBVvxBS7uiEaHENjEAiEAqX59LIh5HILL6ng9C0pmaBOoEqr4q8btcxsW9Ja0EnIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8X%2B3zJ3S20VNxBcCrcA6wNWS0Fhm5BNf3s0Ew%2B3ZUhHd74IUfVwN3R05gWJAsEr30V4W%2FMg7MTfOmpkihmyww34g%2F18DOVhG1BFoSHlTeBl1y%2FiD2Yz29Rst4mbORaDyzTsYIHUCHCZ7PRY6aLaZTHVf3aALW%2FrNCx%2BO%2BGpBo3TxO%2Bps9a6NVOTj2jcVQ0nYJenvP%2FYyAvgDEip5O6zTqVxzmFWjfrSEIIjG%2FdaI7rdqrBdJ7JPDgd7JtuL11QFNNgQ0oLRzRYVyclJsQTvSRiBKVgQIqQhJX9K%2BqtzI%2F1VzmXYnT4vHTpUXkRT7a5alwcsLQIo01y3sPRpiYUD4dc%2FUXT6QZIexrfLxHxGW2fjXX8Cvk6fahO8wRisQ86MaCvB1qh6tIuPOSGcnt3TNqq%2BiN5SMgWH3AUBocoUustr3622dhZo05NnDCRNpK6pPvGME6PSU2q40w9bUDFYx4xFc%2F56SFqvn80sFCH5k9TF1n9ntJfFAmPbYwosM9knBC6pnBaaPSFylwLQf7MYNc0TjDNPZutKJq4QWMEsL9tiwrRSJteUhpLgdRYhbOI90PMfWpj7s2dA3chSize0LfFnKs6j4TSKwjpt096U%2B74hfNbK6oyOP%2BicG0oAg%2B15QquuT%2FYg5J9tCf5MMyz3MkGOqUBP5NU5d4GvoZqco38AL2Uzeg3OiqU3RPVtVe%2BMnnCHROhMd2PbTqtlMe%2FBanjfgzpQ%2Bz2Aps8YiL%2FcmDvwM5aPVwBwPtdVR2vI6h1uET6LXI%2FBRdJ%2Fvc6uMI8pvBbRlwOp232fUskp6rr9Vt32NIPJ3nEh4ZT361n9vYGbH9F1hfZGkBNL3yQ2w1WQQ9ZncagwRUj8gJG3k4tvmOEdWaQLDL7vfV0&X-Amz-Signature=1fbc3caa7a3ad65a36e63a1e5569de751ed4c1e12c5c3ddbfb24febd036dbeed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

