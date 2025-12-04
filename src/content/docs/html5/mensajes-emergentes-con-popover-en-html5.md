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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5AO7EF4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDEdtXaGxtk%2FvLAx%2FRoYpYyWyWOPDdCru2JaAhfoYVBdAiEAsLWib%2B6V9xSb3W5r%2BslJVFwzYekPznHwBFLQ3mWWHmQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPGNxsksqBYuva9h9ircAx2P%2B1xRto05JKptRcun7UQx%2FipgZTWj4KUblSd3Y34dht5oPFQ%2BhFGIRkiJ4ykRCULOIgAsh9EwLbWixJ9d9tdSWaqJcLGD2su0g%2FSfDXkOccXiW3Vpcgd3ugabo79egE9NTGdR0pnCvGjcSwaiIxh93zjuOvqG0wLQHIYNsxgKohyLBVNq5Id0Dza%2F8Akh9A5h55GU1GH9Tl3hDhCfk7%2FZ0JNg4VBRNtOc9emAPdMO4JnwOahss%2Fq84OEckJVcL7P2cc21AC63BfPHwTiBlwpagx9NAo%2FEB72ObUsUVXwEX%2FpKPOMdWo7GHcF6FQ8b5bA1unmtxB3y571Uf6gMFKLYVe5gFAQkIAtV4LKMU92uKmMewWsO5Gmcpr1jvx8mVadwCvgFe1jAsWfQuGE30o%2FQpDo7myGN4%2FVdWn4mSJ6cJXA55akZDBAjuuq0P5MBTiX5aGO6TZDOCm9dlTRwf%2F8IRC4I%2BY%2Fkvpc11JTRSN62hhg6HL4XOu1KV%2F8pFuz5vo0jb25XXv7sQPdhdMq%2BsWKvrK9MZJfjJtbUMHZ0VBYgDyo8bHe16L1HxrsYDeFiSnGTiJipNGKTkFBV3RMFS3UtRf4OuGfqFIrV3Jmtn%2FOjAgM%2Bj4P732v7Cl1%2BMIfVw8kGOqUBEmqnnFvsxwXbTAnOjhk0Mk6ZXNJ1d09jMEB6BPA6hh9OKXalWWcYAKgLD6XZ3sDm1w7TvQOZs1cLANRoh%2BnB04ov4jGSg5M15T%2FztME3P%2FF9j37aCupR%2FXRGYNGCR%2FKPJBYhlU%2Fv%2FbpT8ebEjWI9sx0a2Eog8luTPZ0p1NImB9Lm4YD8AQH3JeHHzyWe4gFNi6kUnglqGhNFvbbc4fU4tR74Cetj&X-Amz-Signature=851154e1e692abec6b8dd7f4991f616b1213855540c1d2d68878dc38eb8a15a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HS2RVUD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDGPRNcNqQi5TKHUDG4eLCOgbznnMBH2pMUg76WbrbiNQIgXbtK2LLBnWGLHtXi8a9RlOAny2PDo8G1ruCMJAeACmkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDP7%2FcntQ5qL8Y5oQZCrcA6p4Qn34gLY%2F6dOsFC68b%2BaHMt89WImIZjl02XOTxRT7EZRCwvWtdm717Sl4wQ3uDspi6wJXFF0gPAw1rOWof04sN8Y2q0g0CnWInKiqPfnnGGGCbmR6x2Izsv5bhSfGU3C8SgeL9BP45d%2BPmMHLWF7W7YoOt0WgCDtApUu3Vc0JWFF3aENHt6QME4GwlfeYkn5XiRnhVzU1c8xdm80EK%2BxQIQAvqL7zCKPMPA97yCMgy0sH01EYKZ6Q1ZaYbM155ycd3YsDCchMLwMArtPARF5bz4cPh5TfQZWnwh69rIFTRETPhhAB5U4imi886RiwqPR%2Bi21eJMzBU%2Ffsm0Kb%2BJuomzhm7V2IFHYZEqeXtmE%2FyEjmhBcjTRrkZ2H5J04IZn4P7nETkJHRc73TQM%2BuO1evacgrWoW5dFyNziktMYBOd13rkXbZZksjyvJ7hb9p5tjoOpWz6jiejYiI1VVIpPMvdPd7a2M%2BT1qZLHTY%2FLk3f2ZUNnvFNCteOnf5hTLKw%2Bt1I6JWBaZORPPg5DTnWong22B2inYKpiyT8GiEXvWHbm2mqOD4%2FxAU9xYbcuHAY1MWJmjgumiV1OzlBweW0L1afEopEnbFTUqB77ED6EhN8l9uKUau1c1yxZcLMPvUw8kGOqUBMvbUJWq88b3aGLq2hD7RH5IfEm%2Bl%2FAEK4r3wDu8QNjkiLXz8T5F4A8mO7UnbQSnjNz7WmCSRDMBBGUqnk4IJw2LWc0kpr0mKK8MAgBkknhlZsU1oaasO07A9htDyivbiH4LSPYeg4BULolMxHn%2FQ%2BGNqKKq0UfDRj13aFLHTNtu7YDh7ziqnTTaplbXzxmALYG1rwiktD9mTCBSeGp296y20mUqh&X-Amz-Signature=3280c15a99a8cd1526e254fd011d64ab7f52501de322b094a3314d47a98b3989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

