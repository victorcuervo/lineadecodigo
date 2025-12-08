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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633JJP4BS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBab6K7H9jhBblQATg0%2FYNcc6NS37CgRUORrqf%2B6p%2BoaAiEArNxGFx2C7D6o4mQ2Yu7P4sa9cgpUDXEymL%2B0m3HMQRoqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOHvGm3BSPtzvYcnCrcA13o4hIe6g2p1yYvCz9OR7dJBPK8JIUErFzdsebx46KfLHRpJaPvMHg95MDLIhNUjUPj%2FUIqRJ4Y4lTfNBszrVf2mgG6vSne5qhPtSL8Yu%2Fmhxl7XK%2FRtSovqaa2wFn%2Fns3DvlB6s%2B19DCByMKHvWldvhnqZTQFKwWhebULgb24D1ahdTCiwtXPe5vgy8wd6kef4%2FX%2BrDOX%2BF%2F14GTAcJE8B43UbaZFGLMpVczhECylSGFF%2BgU%2BOxxGoAHrYK86XeYtmWwvzX8sa%2FcPzh%2FlsqV98uqopIdT3zIeiwaGnyYtPRccIhh8kD0H%2B4tkxfMdT8tsJQ3lW2yOK9Pqx%2BejsSKrRdxgDfGiujJSce7dl2FiWgTkAE086hdl%2FAGaeKMxwR2kKA3VxfHXB7GLIxWCgyxxYeSEWsWRgOJlor8wCDEUQ%2FArmik6l8dIJ0nN2pCuccRnh8Z6Jp6PAuxwMcQT4Orh5gbTWXnSEoNZ3NvRA3nHWPKAEuuuk9fT%2FBciVfkDm%2BBt67hSA7sePTGDoJKXi6ykx4FZCRnrI0JghcQUcHYk7ynsFnurpBj6%2FRH1sPb9CjU5ApmvEazDS2bObG7hdqtfm%2BCL%2BaVy9xrWcYHs5TaZarn1rjKD4Z5OYNnkTML3C3ckGOqUBBmcrAqCVtEJPu%2BgqiNUMzStuvQSqQVZiwd4tQ5udYYQHU9gdUhS6LKAlYMuQYIEcmTYORnnTxvfL1WalVmWLEpRZh39EMd2Qx1UIvrmCIMsOuDLb8%2BmwpWZsmuAdu9Cn4%2FDQzGlYxKUDYg1vvU4aoZSx1czkln0uZJ3Kb4MqsqLk4FRJqf6%2BzEY72tlkU8pAlowlka%2Fugy2seeFrBtGxtWd07729&X-Amz-Signature=4ded5355cefca037e6713e01d8df469e486b0cf279488909fe4ed56fd7a0f9f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466677HI3Z3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz3uWijhp3Dfq2cyhfYjMiFj1ppIUeSNNplDuWewRX2QIgHgKQTNwRInKBg1w57stle9VtmVJpQUWGSuqe0jbYx%2B4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEzOblC2AxVe2QsSyrcA9bo16yC%2Fc7ANA%2BuA2Y9NpPxpP7W%2FDODr9PIqux1869lbyEBi2tL2r2MB2rpOvtYgTgI0KbVgB0Lwv52SPu0J0E1aRuI9dlZxr6tE2hNSdVyssGHVcRNG4JckzI0DKXcS4c5NGHy70G%2BXoMPY3eYxEj8cJy8YlXx%2F5q5UGoMjhPegPRfnGTlMYdvmxtb0aQJPjSg8rtHEijFUrJJOgHaFYFoZvVn7PxoK2Oyok7j4YhTrHyjdsDka4SoUBYfpST71ifFz2ZTIypCMGzRhEldOlP38Kz9AgdVT2cWy5Py486UyXPJk3KRA%2F9IgdXht3JaEF4O9O9MQx5Cc9ZVSa7IV4cpydF6GB4SpAGw9WWAcN20lcxZGTh9RDT70ojjxAviWrt663NwRJ3aco4BCGbk3%2BOk1TO0%2BqGiTYAJCORZsW85qsYFZ6dzV5sofz0c5PiugcsX%2Ba6XpFWH%2FeD3%2BCDJt7ZFlKHXwouxa11OsDTn193lMqX%2FsjU4%2BYVjV63FW2qDwNd1h4LpMUSMVwPDhIL6lkDUaQ%2F4AKNzi6CvVIKXZBymlQyYWsdSDbxZ%2BOfv6RAPfOdB%2B0StUlJp22Qx7NBiRcq5R5V4OffoGHD%2BNfp2ajR%2BoPrYSPdNgctTlEzxMJHD3ckGOqUBUIGe%2FG%2F9YyJdGb07rp%2B0gbJ9LFWyKDYJfq22w5AmW%2BEXt%2B56I8jWI%2BEHJW8Ef9h7SKaNtvjh3KocNs9bT1Dp1SmNgLLUpno7ojySgKhoQRqiScbGbYouoqqupy5Ea59LJ6%2FiVxEIZ%2F%2ByEESACmsHFsVkObUZAGyxkeWeM3Vx6mpGLqf5jVYIqgdQA%2BCKZroEvduCVNlUmHogy5Pfa%2FpAtv3KU77z&X-Amz-Signature=4281850d661b6a011035d7e29c79f5e4a4fbd64e5df4f675e08884102be11439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

