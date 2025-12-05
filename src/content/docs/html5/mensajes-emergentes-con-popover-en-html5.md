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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCR7CXJU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzk2l1Il%2BAvjCHTVvTdHro%2FmxBLaflZ0UcuyHSR6o4wgIgGuGsvFr8OtvZO2ql%2FnsaclXDZ0BeqWNuFv8TiHhbnO8q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLf3BuJa1H3pYDtykSrcAxIvLUBbhc%2Bjxu9CZ03nb29RZ%2FD%2FBBll3Mz7tExy70pSTPeUsSPiSCwEkVuoyiP1%2FQOD17j1p0HM8FA%2FVA7yxtTYJnUIV5JhluDyqWZIB1v5%2B9HzeSwwd8Z%2BrETVmUOpFF97aScDx3LJ8%2FBCcnwtgVMYSobbuejPQmWFQCBN859Ff8F%2Bn51CwhBAwn1BQ7galgXMUsO%2BahTa%2FSxZM8KPiAmxHeS8o%2B%2Fyuj6ogF6heoMKUlLl3nPIZzkLBMf0kv1pyBw7Qc0g473dyCJHkgrURlD0N5MMA3kHTL3eNyVCugnC61dDZ786I1kUz5XhYH40WQKDKAk%2FgiTTWo7QW0T4QIU1MWdcuf99bkjoCH%2BVQheWMvqh%2BW%2FABcM2vC98sAeiIlMldpY3qaER84F%2Fq3AnMs2iBraDnu%2BOHeyO5bOINyago8545AW0nnPbjKZN95w44MoLXvTiKb%2B9RRCvTyx2c7XROuMoaB6iGcpFMoYH0b%2Fw1KG27xh%2BDr0wYTzsmGVz2P5DgBKEWBoWaE2eubJlV4ImDYc4mbCVJDkdIRjUjouIXBz%2B0ZgGkg%2B763a8whel4GOZ4z%2BSu8luPah23kC5Fg4vURrdG3J2EuZd0rjnwZaZXJZ7IW32hsbrMYClML3GyskGOqUBpfFZDt27p4jMKp9XZzP9Y2YbiODEUYyuoNohDYYd6TQ5GFoR%2Fw25IlevWiVvhpy2wprwvy71%2BOttY1CmepmVhEbd03Y7rqPN65ELOTtp1a7YZ6m0RV6eEkQC8uoOR0uJt7YJKnr9PhVoVjc1rv4vU%2BFTlx0lNLIEyuiuGy5X8b0Y18fSCNERbSRINxIqtJzRAM8DhOLrUEJJZ8NAHEYeVYvwy%2BFh&X-Amz-Signature=74c85ccae8124befaf72685e11f47c8025ea9755fd4faee476fbe3894d36a278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GWS2KWM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGupCrV44WanMlod2c78ECCu7w965pgvYoca%2FxilY6scAiEAgnqPZjJBsE9nIc3YG9cSgKAk%2FZaISjXTIl%2FbbR9bIlkq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDP3FOL0Vn9ma3khYzyrcAwYByY1EbNAaRTd9R0FjPseN7qgl%2FE60Jq8reGzC4Mv4yFN%2Fj5tfkPCLNFVlSGbSW9Gzqsd9BndNidMHxs%2Fr%2FsuiwQJ6yv1xSONzWl7CxuxB37lAoKJpbYEAT6WV%2Bbzu9ObO02Ee8i7mpBynGAYH8%2BHqvaje8i2b0sqMokohoACkOv2L5UuuW6LxFvI8Cw0MpRTGNz1fyGqAf10QnFZuxzGYGPWDSuJhtIvW2Cy3FMImTYBTRE1XZWzZYoL0%2BFCs6hhGpPozehF43Rp9eEF59AP6VrmmG7utHAOXors3ftYCut5X8%2BZbX26TmQLlpWwt4XOQcZlFHCHBMGLiYS6cjpnyVMMics6k%2FgP8wDnvUmml%2BUMJ9vnGNTCI6P8v%2Bne662TFcjnjgZ57M9WkcEUkQUezYHblQM5sYMUbUy9guxYc40GFHBEtOWYiWpqQ%2FbGO2oTHhEle%2BGPFfRif%2BhWrUiSq4BRRzoS4h0BwQv%2Bv1KrfOy1ixtonkTRGNUlXi4Ulp4iKpnAqIVXQbfv7p9hQN4vriorrolJ%2Fx3OYecIAbBJ9WeJoRwLKjcVjkG6FmrNn3SFMiBk8PlrgdZ%2FB7hNlHURzfT8MFy1PSfJ0wdjD5a8HB4xQMatf6j9WUR1pMK%2FGyskGOqUB2eLJC7LTtC9gnpvnhHlJo1yWepNgvNf%2FtXvCLbTSZOOQtdCgmQU71sFSZUrgAYn0kpUkkNhUAqQ%2FnB3hgpNTfVyzECBr2PBH4HVs%2FLOpXqpYThdnBjsoVpH0AivebIF%2BGDjCo%2BjS%2FiKOrsbi6sQzI%2Fn619TqD2vv3R%2BRkx0rHqWVKkdrifVuo903kwDZVDxIKuBOoQ5WXehQr1%2BVU8YaHF1FKcRp&X-Amz-Signature=0379425256b4a5d7adf021ea54984370ab53257e60e526924322c3bee60947d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

