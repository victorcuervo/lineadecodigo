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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6OVZWD6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIC1C3vfYJfLKtjSmAQZVX3wLex4LYI%2FUi2LMveQzwTY%2BAiAfpqgwZc45mS82D9e9BuSuWUAFVHYRKcMSLyOEh8BVzir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMUs7qM595qG3KErFKKtwD0eLvKXBhgikWa2hcolxLQ7TMMbpJdMQNz7bu%2F3ahJ2X%2BszFZXnma6g65oYbuHXY8yny2OHY82Zj4tpcHmwng0IQYD9BS8%2B1rY%2Bc%2BremRuXHtOZPK7e%2BlwRIEQXABmsufwtz1fAT8GLrbcwCZfKSTK8YYAl6RLntauCMo8oYc08z60a3RSwwi83UgXp%2BZSTpsZyquHesBd0jRNS0ahg%2Bl%2BxxQMLkJ3JlFZarzxl2WGCPr0XhrGAw5ltRh%2FUAk6k8cZCNMKQsNmnmBuW6s3i6wZy2YD2iHE7NRWBhUo24LRolefVnD4Ql%2FxTK8Eymc9aoYvBjdzbF8ovNFOM4CCILK3ZTG3gZzq841hnRaiYk22vNf6jWY4rvVmV4uY9ZvgMCqu7lxPJFag57X98FsdhMJcz2bLU3vcVJmOG%2FV9s7w0PDK0%2FnZlDrrz3VB%2FISVAeueKWEKAhKZQFZizqw1EOfTlCx5rVDUJfd%2FBmLskj8OALqqskUCpTqAAKFR55hVj%2FlvI9ehgQbKHqXHNXUp4GUe2gMBpkHjfMYLEqUbaJlQsn9TWqPvc3tyl%2FPgqe2XOUCfplwZD8SYH1aBXtdcctJPNuwq8XTKLjRTVIr761HvT%2BvVWP7k2eQcLbwEjdYwifPDyQY6pgEUcqoEPMCrfeiKdk38OkzMWIYoPYJp%2Fse1Dntw1%2Btx%2BXr7ATpl%2FMyyO6i%2Bco%2FvbbvPGvyI3Ox%2B4lMgozeyKsrFNje1zSEqDDHex%2FFzRes057Dq0rm5Lus6wPzK6GxaBJJp167d1bdahEaqCh7IZt78KfjDCcBF7vPIpAQUMu6%2Fmla5n7fs580jhs8YkfpOYu0NUdQ5fGtDkVaE%2BOBN3EOlyr3V6WbX&X-Amz-Signature=2f6413bc03e70302fce456a414bf670929fd3b2bea5a2fe3b2ffd3d6d5eb33ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQLUIVTG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHf1gMTvc82Mv2wvSQvHU2Bj1dj7RnJcVjjPblEF3MmHAiAngZdLFOYxFnI0JgCXhROA9nck4XeXZyROW2lZGqsg7yr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM3y9S2%2Fr6c0IEnIAaKtwDy2pAu70nyiKxyVpdJ%2Fln4KPQuq0Z9y5V7V4akOCnZ1K7QLAuJHdHmrfX%2BUkVH1oaG0icifsaNnLhV6khO4CUuIR%2FGmTTt%2FzdHJroaVx0I1UzvaF5EARIUGW21c2EDAIal5HHz%2BiAoO7sKam3vSHO5Qv2BN%2BwBTQ0Tdi1hlZYzTPIENbPuxGAVtilUSk2%2BILtFv4sIAdwCR5K%2BOn9M3Y6bMp7dpR8PSS35PVcgk3MseXbu0BpPLt8Bn6noQCzSfPOwLTBHnd5lotVwC21zb3fY0HpO2v0bwMw6dzAKkonKrcuUuMqtDmVcd18IFafq9%2FtZDAVKdXn3D9gx2pBLRX5xqn84PWAe7QAkwpwu6QY%2B1Afw0LuvMO0S5SbhFogNsGloM5Y4kGvJLN%2FKV%2F5sTEXC70rGrMmjy6cr1JPJA%2FVpB0Melirog9deie5u0cBsk0xHWlJ19KUaqiZesO0s4Z9SIoAiC%2F6uiHXuOfjKdnOHH7gjIgu5UYoWqbxmN2XzJVFaA50r3%2F3hSV8QoeWCanQ%2BcbuVQfUcGgr7j%2B%2BJaM%2BHQ2JGnrOkzh5WzZLIn1JrMpMzchVZBE0WONbf63nVOkrbfWrOjTWmtVe0iBuqz%2F2nbddpsWm9ngS4yxSv5cwxvLDyQY6pgESiAokkoipqEGTxH57aKoM%2FnRm909LIgTW1CY03pLVbVLYNw%2FsW%2BfmdFagwQFi6RF1FafeS7iVtHDpfP3fcTKMr4v5lhvFYdP8dvvnqX%2BBegnsDvOxc5TGjpopZ9vv3BXCU%2F6InQPVr710RGV0VrF8FcVpctdyx9g8ehvGLsxYdhe6qPn7ypdF7iA7ZMxAD4Bqw0n%2BF6vELUz0hjzWenQ9%2FUJyaiFU&X-Amz-Signature=e2d0a28bb91ed215233e08eba0a19a7d8a978dca7f7a85165d18c59dc03fb38b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

