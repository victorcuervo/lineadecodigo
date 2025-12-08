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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWV4RMKX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrdx6cyddpPdxUrOGthCkLA7Qrf2FRd0Bc5Mk8K15ttAIgQpDgIOvxOZ3Q3Lv%2FjWcHrll%2FHkPbnn%2BBCmkAMSlAV8UqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKKDYGPPDP0bINQa9CrcAzLf7xLe6olmhx%2F%2F2jyhDOnYeeiEIutpzSmrynB9GMyj8t6HTQMv%2FdqdnNjkBiAat0asHj%2BpnglFG10auGEAGwGzkkmc9sShF9peHgLRqB%2Fmubj0syNrZcb4CdfSJyZDepT%2FkevSZ%2Fd3tI9Tv1vGcj26crV%2B%2FBEGgyKw72%2FmTiDiXBFjYoLCk%2BOMoOASDuTo%2BAoHUvmRyAQlD1cFoINt0z3Cbbx5yg47VPxw2FeIuM1VRRN3GihuzhMXC3ufkr27aUy9VfkiKlxIES4ZczVNnptjSC8goAq%2B2XsECKF8cscZCMxzu0WEP7%2FsBdwgJyYe9C0eG8Sp5PSHQ%2Bjq0O1hqtWefzta9k%2FVbVcPorNLyhjIwNRpPfV0OJB%2BQIkWfo49z8iQarT36uLd53z5tIELS%2FKyWyMqdinh8HaR%2FRc7EdFx13McnzBYjIadcY9HL%2F5hiLfKKh3idDxAMPXqI89XS9oklZvQVICxKup92T089CFVqvkIzzU44J6aXNLB1Ej9G7%2FkkGPR%2BarpiPWUCNNjRJ0vdlUvDFDamudnELP%2Fi4W%2BdHt8fBIK1%2Fi1j5pzZ7BM12%2BJdBewSrHOn8cI%2FzXUGiX4hQbzMYy4HbLKuZCa1FhFH26yZP7ZgNyRkZd9MLmz3MkGOqUB4LW6TpbLRdF4btBGZt7DPRfBBo%2BYWUZHm9tM5GunMzjYzVEeY9ax48yFBWiXcOQIFoqp7IfVAH0qa0jvDyb7TfUMJQAjPzNPMb4hVxSoW04xXdSuvr7wiBiUzW9SojtW%2Fa7KEAY7F%2BZjJEkJ43eeUejzh%2F4oCUR7JGaG664cFC31ZHIDMrRQyhv329%2B8CnuHBfJkC28d20HJWVmHbH%2BvSuMQf1E9&X-Amz-Signature=2bc25e4571a15c2a2365f807f8e704d7b29ccf552d516f29a0b4bfddc4c0897e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TEQY2HB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaqhEc%2F51GShxLP9Zy2C9kSlMnSNOKpXZorIWG3%2BbShAiEAm1DUr%2B5pSqjxAc9gr6dWA74VBuDSrHSWTG22igUksKwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMGFMPOPGQajsQuLCrcA9oOxeR485cDPHq2%2BN4z5qftFdjBvnl3rAFMdr%2BS59xvUXHRisPPhE1rjDmzSZD8elyaJzYB%2B4%2FHKKYpAN%2Bi5c%2B1JFaXuY%2FiDi8Q%2BrG2JzcVTW%2FN6dpw2nN2vyVvFPvPosSmd6fe%2BhtB4I%2F6Jcic9lQgM%2FW5tw2JRThl4ufml3A28YBp6%2BEblYSTri9a2YLwVjZDX3nKUj4a1h7Qv8xXz27vppHrbiZeXmAJnSCm9Be2fuybg68GCQ93C8rQP5csi7xxdpzO61QzOkj%2B%2BYir4BvflyQH5S19ZSnWUm4tmbz30tIH1MCSsSrG4CIE0W4smJ8IBYZUBeoT06Q661Me5lSzf2kAYNmAlc7HMtrMkawucBBoP9mESaPR7JWXk8yDvc0KiK7Mrwk53x0gqA9s5OqHWZA%2BUUkVdQ1omUFaypLv5mdQas5K%2Fk7PJ%2Fsz3HM5F63F23S9CnUplmR6H%2BL%2FfoqqsNT%2B%2FS%2FedBVACwuQJKIVG%2FHgb6CCjm%2BIYVku74EKI4tmStE010xG9U7XAFdC3YBE9V61zy2LXo%2FMxF%2FRteRmp%2FucywwaeYPRzsjxZmPslt4%2FePAv%2B0CKv%2FV9nK5RpmWdIrIK4nu%2FN01quUGlBUORce7nm4lDi4xrQF0pMLKz3MkGOqUB2vc43B3bUP%2Fdf0Bx1p3q5LAvLly3SEEZIwNmI9z4qZbLsiPLQJYjEqXHwN8ZNKzFEMWncBxm%2Ff7bXdFhtUc2iQY74GHJhD9dVacryRkmk33InQnmWitmy0zVuIg2s5%2Fzq88s7Ya69eESP1h3k5dqBBb5RDND4TVg36Tf7zNmVhNzqLcBz9e7DBhOK1oWen19S8j1hc0QaUutkePKBDDFS3mZByMg&X-Amz-Signature=7708305e024174aedfa78f9104f5281e7618571d5496d67cbbcd62affe04dd27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

