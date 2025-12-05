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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5ARGXI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkGwNKGaPdPmfriFdQ8kKr4fbSqkLTViy3q8gLI8gxaAiEA9hwZtCTHGjJzmmNJeGWMMBpZjpcXV%2BZAuQ87pvca7gAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDC0xuRqGD6zg8neebyrcA7fJnwhz%2BC7QxIkUiqcnvm4lOoacoxxmV%2BX5PtlABsB13vCnoZox9Cg84XKZqtd6HayGa1VEasgffE2t2iUYgJtjB%2BraFYhjraV757hNanzpYR92ui5A7fSU8yxapCmuUrTNTN37MiiM1UTnrwu1%2FVwrPhciPVqtvKA%2FGazcLn5K5r8SK029UQP5gMilV2idYixkJvelNbgDV7jYcjKEpjoNUoBKo53q5V7t8IAif5cNuGrMgHj6jp9Zfy8CQRBlNVS1te6AS64NoQnYRA2klKP6xRM6gjA924LnhMx8QpXNXRxOX58evU%2F%2BhbfMCYZ6Gb%2BpQuz9GhydhTuLBV29nVXUOc0Ls071nynh7t1EKmIq3GgC3YURSJwfAanK%2FkEhDTFYQKQKyLFp2m7pvScvNI3UyZcL4oy4Uu1VvkmEjw9L%2F95AEZVOJPpf8lX3nTrox5PsBbJsLBVQk05hs2%2BZcLpxpcbzDuA3csFgS2Pev%2BJtoB9XJhcJzsOWDX8H7oUFd6Wr5diRW4S0JOFNXjnnATQOqdRfjhaH%2B3XH16olspKEioav%2BSaIdI90EL9SVZbcA0K7tFn4qoikd9snxWQG1c4aBX2tmqKZ0IttEVi0LBJGJO9aR4PNv7gqQLpZMJ7uy8kGOqUBIQE6Z6955IJhrzM7enIYj%2FpIbGdDrI5qs58tSuitW%2B8Cz5Dz9tm9p6fyWbUIpOycXcawVtX17yI7qkqdNIef2nLkK3u85eUe2RPlNl%2BaTSmZkKh97ZBTf7r907XFK1DI7iaI%2FQW%2Fu7dXE%2FI1sUY%2F62i6SqkRLoV6T0MSmj2f7D0ARaS09vOVLlYZLHYuFWnRk4xD68agswsOUHOVfAizlfELU%2BRc&X-Amz-Signature=e2de39cdb269b233b2d1cb3e6aa2021cdb434f716a99e7c4049e2cd5874b5ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D7O6JUD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1uzTdwiiO13h5DwoFUzMbu5dj4J%2FSZnK%2FGqhoU33KVAiEA3E3ny8MeTkMDl%2BaEdw%2Bb%2FsnNVVSJiJ%2FFhWkSsKtp7ssq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDD9xT2KS2Bx504Fd2SrcA7CA1z6NI0BD1B6UaLz1xb1C4rue2AN%2FzOm5Ltzb2NC3WP%2BlBzzlLG6bQHnF%2BWGGrEzMn6VSGHd%2F%2FnqfLZq9RxtsNHepfhir89jG5%2Bvu0PaGs5iYbSmkDw6LXLvxi07V7VJJKrjoFbtd0NKyjrgHdIelJ3p9E1Y9tiSIuzFRZ5iUN7%2FnvIC%2BwY0Dlp8C8nir6zH3M4WlZTvqYvS%2BNax%2Bjrr7B%2BPHflJwHcmZtgShYuloINTiRum5w80emC7XN9z3racyXVKVBDJ%2FIZLZXpAO0DqqA3U5gdVxH4WguKQbiuvhoESHyVlOenQVtyl5q6eAqnooUabEL01WBftoIbHnlPOct%2B2Y1d8sOO7EnaXJGNLlWBstKsjh8c9X%2FBIXSGvty1hAnhSFdwtWiUYM9vLNlcXJ0RY%2FveYHYhX7CCvWEFNl%2BH72E3BTbZKrPhtQxOFOXOHvBFVgnQSRBIURnFmk2YogzvdemRU20sO%2F6GwsYmq2r9sq5JN%2BaMJEUT1JNZW14%2FN6pJ6UK0ki%2BVc2x2%2FZcuEhT6tZ14NUnAr6%2BPm32HZlRerEthfQTnN9RsfXnLxXm05Gwoigr3Jep92dajkgXqlsGoKRnnmP32OINNTg5YAydwNe%2FqzQmo8wHVbcMLLty8kGOqUB0WfTtRrjex2mCc9yK1Olc1SSdZBvIkzlJz%2FBRSl0lmjGuW2ZU3nSnp2PeFCdrRZ21ZwKn9L%2BrZXpEkRanGL5IaS%2Ba21lKbUQdXRkb3Bh3kqo%2FbdRePOFwTVMyZtxpuUyrdf%2F7O3bQJodFsV18UPRQAWP9VBTIwH1OnBTDGFrfGvUojUE6fOBI3XfDJV07B90pAjqVtoQ57d91fa3ZC06koiRlHmP&X-Amz-Signature=6bcd1c58b44f0b088bed549a3dca6af87f20a47621e7bde186a37ceafbbfd070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

