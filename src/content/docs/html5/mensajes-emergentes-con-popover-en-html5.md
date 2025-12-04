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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FD6DN4Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQC90RP%2Bz0RXJjPFzI8ORgxNziyAhSBNxsjZcyTnpLnA8gIgK6v9rbb79H2eQ6AR760BMH0FcbT9uXaTIdK7wIcy0pIq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNKHdNadykwBT7bdlyrcA2g4XndKc6Ul3d%2F3kQoKJZRbk9rAE3QPA9qO%2Bc8rtJRsPxf6zA%2BhV4ECs2Wi8UrAygdKnhnu1y%2B0I0kfFAOiRQ5Eg6pCokx1NSNM98BLt2q%2BBUHa7aumcSJ1Y5Zi4WdNUGIyu8FF9Prj%2B9fqjchGeykaQ33Pyt9VwqQ1xMbHlaDZ65K7XPl99UwfhSFUXAn9qQriVBnVULl%2Bz6AzzGGMtGbeNaJtgUpvYmExrpT1iAeVW81RB38w4%2B8VHDzOntQM2zMetYeYN%2BwXi7Bntk%2B%2Bdlhd2YjWGsYI0aeS%2FJR8hABX30W7q8x3sd3Ic1bPTZc2lPUJ0ktGEL2SR7DM1WzQlfJ6wv5Ap49xir6qh8i3d4069h8%2FBumI5fLDtajzUbKcOY6NJKvwPetQs9a7w%2BGepbEAdRce4WpsZm0f%2BhzNcdBtjn%2BF%2FEMUg2ZBMSsdtmxh92leQqabUoGUS3GGqSlDZ5x3922UQmzZ0zaCgu9%2FlgKf6MaZq7BULnRoSL4UxtuzUmi1%2FkTXoIVAIS4GS1IgvhJZmic%2FdqMvz0bTMMGo6AE1xL3bE45t2%2FT3pzFAPZ0LdtcxoHu654D%2F9v5iv%2Fl0CRomYTS%2FEbZHigHCbCBXT3Zw1DIJ4olrVZ9Djk8WMIG1w8kGOqUBWGW%2FE4NalWYpe3i2a6T%2Bzj0GlkTXyICo2pYTeurm%2FM4SA4oNk3sFmqMreb7cuMc%2F6snrnsGRqmmlwruzWzG3ENErL49FN%2BC4k0jeRowwyiG7vxfi1yWF0TAUvK%2B0B5xrNVA5nB1%2BAMH4w0UabRr5PhgPNccx7aESHvjrm%2BCafsX3ezUmzcHPyDbq272Sbz4s64fxa8kRkVinltYx%2F9ufXHgtUaA7&X-Amz-Signature=302ff9ef3a92c642dd1cdaf0649c435440da5ca9d442b12b32b3740d806a8c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BOCCPSZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGigRQEZzsz2bZAJ7TT5GPjfI2tzx3%2BuHgICoWThD%2FhHAiBwhBxOKVZvMFHW0AsoaO61dm47nitpD6LXY6%2F74SL%2BNCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMvva2YVx%2FcZd%2BfIKjKtwDuraV8SP%2BlQn258Yd%2BvI0bM5w7doZlrQ9shWhWlPOKas2hEjsNH%2FMxhnRFdrBf9dqz5NdD5eT2U43nvozDiiqnNiCvRtZg0VUPm6cKMQRdTJU32QvHqL5JYz6ACyUDs3Y9PdPORcqJeX86cyJ33l7UvnLQy%2BxDYURXArb3jKmSdaa8madZvoBkG4xqmlgL0mTxTSHA3AePF55bVgggHvOlHe2Ut0qU0WsDGqXvk936g0SCu0jbMdU%2BXTSfVKaGAolcvzaYFu9L6dXDZeIpHzCm%2FWfYl4ZRlKDNC1u4LGowB63bieOFF2XYS%2F91Vq6njSkUPK6AHD0cqExf7hC%2FzzJOMMqt6ameSP1kEsV4ue138rjKCqWeEhayq%2FPZoXhRtEVE%2F438gldkvE4DjKpAbkRhORbL1SQGsjb16pOyOqAbhmgsrJJAowNZ%2BAwja6qKRqnKaCeE8xHYTi2yU30V%2BW6fzPF64Ooaz18OoLWzP1VfKrzR85EBN8LSyMnc6i4VP%2BLQQq7w0ZGYEYjnleUwng%2FLbXPARZR4%2B8yZAO7nTc066zu1ruvPTM4i%2BhR8rwRf71CAH4A34osvQIlzOFT9%2BHZddpBU65egySdSoUSw3LRo1D7cA9t9lYTsuZQQRcwk7TDyQY6pgFJ0rLpZiP4HZZ4y2hkhv4BCr6eIWzH3hM84X%2F12dSPcCVM4CGFuDvtGURlZHZKf%2BSk3szYRdCPLXONvO%2BBIGogLn9rf1ImCCWVZ7xxjsKz%2F5eaS%2FyNbGmp7gPphVPnyku8PpaFpGan4RW0trpiDtBstUytl9sBB11zbZl4qraKmUMP4URVeRdc1Yxq7alB7L91mSMamRQiZrzkc9OxkSg9q0LPNAbj&X-Amz-Signature=513f3883feb5e80c529c9f4c96dca7e7fba59cf0beeb5b6d604db98048dfa4c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

