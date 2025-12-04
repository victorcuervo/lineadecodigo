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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIPR57C%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCID3x4PJ%2BJ9M8vK7fSohZRj%2Bt8nxRcNlaOATktJbR%2FeumAiEAxcAKG%2Bp7GIb5R3XRu8SuDUrJGFC9KP1b6ipDTI2HCQMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDGFG4OAHJWLW7xeGKyrcA2QqJxfRfMuhAHAwWhY%2FCSzBhDl5HbM1qd97DQPzsBQcmw%2BpcOwCV5VyAQdHe7NM%2FWPMA4oyf7SYnkgxes9tcYwyDtQUxc0Icj%2FdAcUv5z9s3o7W6d74%2BKjOB%2FN8%2BRB4eBQv0iEFNGASd00Z2lMm1IL2CnXf%2FnwMSave%2Fl52dvOEvCijAfvTly4WV64izJrBJ%2FvqFNYzIPpt0z79XjK9spE7eKIbnkz5kOdrgM0G9ABEuZ7zyjZZsXVGwLiHJOzy7VH9hJYT%2FigHPoR6J5BZjbk4%2BkjHhNY8bZs3%2FIs6dmDdGc9MPrAZZLPG3Cviss5ngr2bLmX04zuB13tWvPiR%2FnwKwr2iqGGReAoitrB8%2FNcmDdmjondqtYV%2Be0zwgnwe61fa0p%2Fd6%2F7AylMzZ8EdOc7zVew5ds4YH8q2fDjxVDUd7uRcCZgKM0BGQxT%2B6vPd5dq05m8dOwuz465BXBnQ1oz%2Fbl25ZIpGMZsRwRuDUgQivWYaGu8rwRTMQ61U%2FisKQa1XmqjZawJC%2BQ4zsmwKhjGnhEK5wNib3g7f9SbGiRUjyAA5qtmzZ%2BLVm6k2uFSdL3U1ZEXcCLTdp%2Bu%2FzwoCySQzle8lyTR5%2FMnFCRXQnLhjW9PAmQGqHKGWTOE%2BMJPoxMkGOqUBu6yJdEaaOTyE9o630DCizHUN2wOmvo%2BZVnRV34zsbEOAlxXJBQQjbNbVpeX86JOr8wdH%2F%2FZppV%2FTHYIqz1FuMz%2FLVqfIrBe3KpRV84akJ%2FeSixrbBE2ctbSP9JZFIHdsQmD47Hx5kbXKPZSVIehaoZ9FgwtyEs2va%2BiX4gDi9RA4a5u%2FnrCOXgLddixdx%2BSjFczEz2VeYbjWkL0BweaQJORJt8IC&X-Amz-Signature=2f8bd669757a526272d01c26071c0bd8c2c830cace4f7479738226a0166ee247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QXJKWZN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIF9vJtip5bNnM9uFCIr0wgcXqOrAZNRwvfB4mzQBexNzAiB6XKgCpVRsWr0AgGi1bXNu22y6ulLGYqCZ8n0v%2BtXvgSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMtkr26qDe7ZKHRKm5KtwDy5CGb2H0gdvd8QTeVOBjesg0cS4bAG8Hzx3g5ezpt3nTjGuiZgg0QSM5sfFcXrBwAHYZyU%2BATqsWR7hXxNf8x5073GXe2UoCai%2BnP9ayBf4CQcPuo8M9lHTOXAG%2FPU61PnsJY0VbzvQacVl6pZCJdEviBE7Z58T6CkwQPUKvI5Too9K%2BF5WBluPLNVJRCBOEzl8MqL5NFq6YoQE52DWc5wtkZ2uSw%2BsMOOerHG3EfTNeae9LX4rLcETzZs9GmLWLdbnxWaUsgpn5JxPW4R7bibA6J%2ByJByWDk1DWGCYfuSUJfnGZMYka1FaKPJ0CrdHQBkQfeXXSSoy57BsrXl%2FGF5oPJE25gxc1PLpL1iO69Kiv93%2FE1hTgwJEzdmo3VKrkH7EGCsA39BSf9yHagJU8yraDQXAUS8v4JArNSt6Xz7w%2BlZkSp%2F9PPuSef5WKoqBn1xpt4hZuim7Rd336bzm3voctrBTIwUxunf9jdHhy4R%2FNuo6Wd%2Bb1M2SRholSyFTYPPKvgjDleX0JJtqRkeHZxS1E0W67iWuRezrbiPvalZ1S7m2cZtO4bHJKbCaJgWPKHPzPGj2t9KjKttvUNmLwvFYwIX%2B2pDqWp3XCIp7JRru2iB6724grFE4FAAQw1OfEyQY6pgHQAvAKFSg2ktfOyuPu4sV4TOf4jft505p8eAz7pIOJshDoULdzFSFrv05u9tTO2TXx2iLTGM%2FBJLREbwi%2BEtwPHgZw8GZXqnLMiC4Y38V9I%2B41j4tqki8EF%2BRVUBdll2%2BmJgYolFodWJAYgj2LHuDgCnoNY3sZiI33PA7XgoBvxRcPOxlsPJewAKin6w6mTygh2b2kUcXS2bMBZfJMFPkvbYYxPCIf&X-Amz-Signature=a7f50d4fc5c72ebd3264c82e53bb0f4dce8c84c8a95d811462a88bf0910513c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

