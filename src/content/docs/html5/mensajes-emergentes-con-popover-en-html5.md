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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3PJPO6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BYcgYKxnluvymrGozig%2Bx5UfA6T23fNkxWe1bEw2b0gIgDoNb76ujX1fgZHapbzx6j9%2FPpLfKvEipPui%2Fh9rGIy8qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9vcSPApniwx5PYwCrcA2JrbJc5rCouUpipGRHLr3SPqxqFglKhvBQn4OVlo59%2FxtH19P335Kj0768qMwzt6A0LHon4OtS%2FI3ECtzwkEs2ePngiYG4f1bXgH9cQ%2FBDav7NmyNe%2BqxEWuHAP358u%2BBg%2Bve5GRA1llGbrwrDNVHuQJs2%2FmwYkAxK3OeefjfRpvZfGXlN%2BHL8mt7PIkCJLEil2TfVnfeQjjdtGEcOtUH8LANhG30uqYQplh6Qj%2F%2BZI6PtFnNPji8T63dm8%2BtYrCIdQzES4NGiu160yjtHySDL8wB6M6rZSo3%2Bd862XRZv8XORotqv61d8GliF6TiHncufPg8lu7RXrUFJILWst73zR3oqLBs7I%2Fx6L1I6bl7XaZhZlSKzHA94JhJ8YcSOme%2B%2BJbD%2FurMm3ZFAhCmup7SQUdgVZIMmadjEr1vOdmsJJrp6gZLngzqOpLhnVddJ1PSGPJARu28So99Yg8N0VXUGeMe7c2mxTS4ikphevAi8MtOET%2F1LagmLqWpIxSn4w%2FlbInev%2FvbOakbCdstOK61fPM12L9tbR8Z275qAO9OXP%2BUo4mZ0Rt6CXMvgUZmeX85%2BPynTtalFaskLHz5vJ7LY13Nrq%2BxpG5x7MAeAZCWB%2B93C25ALb765ZB4sqMMOh2MkGOqUBN8%2BlWQYZjl4npU61%2Bz6jF6nkWBTbmfEkzexj%2Bvthp0J5lhQd5b48rms3Vb2IBXvABSdH61iUHkwSzFh3y9vPdlGp2C7tdQ0CE%2BLCFlg1CtmRyiQ1%2BrtA9tXXmMlfbkQ4IyQKVTUGLWbLWqOB9%2FUJOX%2BPWoD0AjE4WK1uf6n2Nsg2onUA642hoOCO2qu0RnR1rQ9QJGy%2BOksxYHMrKqIEuuByRFwQ&X-Amz-Signature=0b1b272664f0341a40a5965bfe810c3b0f36ab057fc21ca0e5c6bb154856c139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2KS55AP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnqrGkwUBxRpJPbnqJ9nN2bFkBHv%2FcwvHL9Raht%2FBl9AIgTsxomwllUCZjLWrLKDGK1cl4g7DvfiSLbDVUXZQ9lL0qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBqLwc4fRr6rmG03SrcA7ac%2Bn1dtsA9nMiuvlD5aSn0PLTu370d62YuAdI3iYOLpEW8ievfl9HCsN2MvrG6ncXCLCxVtoMCYjpDWJz3qLGavtz67g26hQdWW8DDGaBwZFpkNC9HD%2FcmTtdqpNy20RJEq94B9n0d2rbCiKa3hF5lRBAMWyTc%2FyFslKDM9ccyIr%2BTKKKQaVu%2FFQCRwdBRcppMc8WZb%2B12BGk8a37HOzY6hALw50TrR6vYBVNKfcHGmNfV2VhuuoteHZJj2EJO%2Flhq7dtZjtGmRR%2BPnam03QDpAnbLiLAL%2Btq144R%2FLq08E4jUA9nOOJ4uttZRwApc8Lxdnl0y5rA6AX%2Fpu0XkZ4lihDl9HXzu5xae5EB7tRigZfuY7V3XjsE1xZdQFh8dPmHTWTrDyE9kn58fuByB6QzbIzjueV6ee63IYz70H634iM0o8gI%2FqScOot3pFTC22Fyt6XJNNRMQ2QUA1FBTTt2SDBJjDK8e29kHSnjBvBDZ%2BcLv8whNtvsV2eL2q92SWL4pOSV7uLErLvBoxG0Pj7FZcothySip1UuHcUKCeILtWJuA3T5PKyfA%2BCKX691m83NMxN%2BcYe3iCt5ksXkH2mNnrzUbEcGW9L%2FCeCGwscwjiSEzttowmNzI4X87MICi2MkGOqUBcvTbfIoYi5fIY0nDVrSjag6s4CHz%2B%2Bc9njXA%2FeuVSR%2BD6LiDXjfLMJFZtQG2jefR0cfPSExjrd6F9zQ4zObMp5bn4pA8qIJ9Y7RRbEstvxpFtRpIHB%2FoOW%2FOVy0aaI5PzQwzgRSBcS%2Bk7o%2BTUbsduvt2TscINYO6XIEMT%2BgyUUhqtwEpLqzUBUaKfedyjTl1UCKm0zTDYzOCG1DekDrjYwyBToa7&X-Amz-Signature=38fa9fe86771f599e742cdebe513946ad2c92b559c029119bc6d8ba1f57c4cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

