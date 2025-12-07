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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S43YABCG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA8a26i5iXz4kX5gFL8F%2BJVRobS8WSh567yZnw1A4BFwIhAPpJGdfzKpcXSXAlddFG2ZJUFdbdvYsK%2BKyJ4IyOJUAdKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv45SDet0eSDqCOJYq3ANitglSzbMADjcUmza%2FUGqT%2FlpxBE%2BBHbluj4C55vDV6jChec1wkU2DaDRZAUelQ1T0rxR9lHCD56TdRSlFaLeOSg6xUStZOz7x4v9RLeeHsP969fHfoPmrcIQl3dk8v1RC4PmSpqXABE1kSib0mb4nNZ%2BaZP8dnEMPCnaiy3egiCxS24s%2FC0N1nNR0AU5FSfiLVL9X%2BSN%2BDN5ldUc903NgXM%2FX6Q07hiZcmMMKlu2Ua7UBJJse2aML9PUL%2BbB3%2F%2Fg5d16T2AhjFyhMhzK8OkvP3eCG%2B%2BkIdO8VqBUPzo5V7aV7gXZZxI8U5cJ7mHV8kGPYTqqa99wDmrAyZSHXCPr08GkYrtQm75aAZMM6VC4tEfHbOhL2UVcb0cMPqu%2F9Jvqy0YdKTmm01x01h1pwmsUWAJz%2B7FwrpNJ9h8sw6JjvFixsAqo0pXiEZWSSRMJOdLwr591RjqDtgjdSum4AdSv23qpj7UBGYSruZ3JSGTulfyUvXO2mmuGOZ6yvXey50w9d1Atx2W7sCWf%2BFI8nMQhZYyfj0xtBsT8Us3FpMrasNzEN%2FTWEjI%2BsVQm3MidxJbcYHSYs4%2Ba%2FtBNTacQL53EnPecWtciOpisKkR6MSV7J6uqLFBLWkwCgslg8ujDgmtXJBjqkAYLRPaBJbwPdL%2F%2Bka0Qq23%2F6xQIDtYzeV2xr3coHfjsQkDher%2FqsUO%2ByXPGwqHzf%2B1EVM859UIlxaDmRYdi7etBqSKLnSvCO4B0uyDyDqLTKBYaiGyK9RGAhiUoJGFUSwsNKig4eVMzFj4wKrQnxzrmo5mfY0a45vcZHj697TGNEZeNU42EJ3rgUtdA18fVuNg0NwKqtYanx59DrxoV4Lak7MpAq&X-Amz-Signature=fa870c76644c94751973b647911ade82a52b4c0ff7f566a27b5cec7567425be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YOGS3W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw56TmO7oWJ9oEfwMkBf1m0yxxYzArCZqgMS3KeqwubwIgXuY89D7YctSIfO5CuHFA0Xn9vbnbLnoQZsAKVAdlldgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9C9EFMPwhy5eT5UyrcA7egPcnozWfXG5nolgSc2uMJVTnr6fCWU1z3x83SfBjYDhAKJUxOA3aRBhIFxUOeaEl87P7uIyCIbj2it333baV0GuPQyVgall19PVQVtSvVGl5su%2BSI1eFMflftumTb4vgHgSCDRkO6EFKCHPTYvLc5Dlqd7bbdqGhgFcqyLNaLd4AoojgfbU0O8ycQ0YsPm5lhVbuWzDcQVRhk%2FitnfXBZ6J%2FxQ9vPpzob4kdCDUR4TQGySXhhWXdMUz1upZKQGMh3NTUK1IbzA06LqAR9pAoM7RXbXDBIOqjkwIhO5eio1TQ6%2BX3NJYhC%2BYG2xZ0kuAKhQW8uvgButMAbOKns6PPCRAMxffT8MQmiWAEbkoR11RyWetEuz%2Bf%2FdKodASoQuVmQQJJqZnZ2edMK%2BxSgk7WGHtkukdWNZ%2Bj1PJjqRwUMeyQS9qZzFROOkRmtfReBK7HxUwJnCBh6HE6%2FX0wVUnx1t%2BaTzzYzOyd0IWGbdPfFrj1UgLny5nFfPb6pXO24xQlLRHRU4oY%2FIT3k4KwpdBAe6s5iyPLUq4A7APA9B8epwpXBsH42zxWLNt%2B9jn1fnmBt0HOgFZMf0D14tNNbWr%2F6E8upuUKqWSp%2F29e9f5T%2BhpAgdK2XnChdlrp5MKOa1ckGOqUBQGRFnm7czog6R5t55xh%2FAwYkQ6GRgYEKEg0dfxeAR2rMUU6ga9aNYxyLdM2%2FcHWfCGp%2B%2B7FcMzmXKRfSHgosKI5ulBRgX3gigNUK%2Bzu%2Fa9Due0%2BloaNWo%2Fdj23d1qu6XzIglKEvO6ACB289NUNhd%2B%2FWhQqR1thb0x14xCPGJXRdrJLbQh%2FlF31QVg4wZWxWLv%2B7yiWf22yQfgOVZsMWnPAprbVkz&X-Amz-Signature=87445453c8d689642afacdfdf622134edb95f523ce658aabc631b0e548a598aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

