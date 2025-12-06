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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BTMA7DJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICC8w6EXtWDqhELz7rJUR7EhnnYLfQ8n24zRcSzHflONAiEA%2B12rDYcQFsO9kIh%2FYWXlivC1etfOfESG2kq2ZfZzl7cq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMoOQPPidpnlW1Kr2ircA1y%2FG8jPaXk%2BXXViEML2g3lFpk9ofQ%2B3Dj%2BMpeR9n9VLB0mN69D1nwbq7PkaqwMWy6lMhqzIr%2BEC8sSuA9D3FFA%2BhJ%2FAg2ymmLdQnzN5n%2Bn%2BOiKUkZsxviRmMfP1DAM4MYIlbMCmqb2zjYEE8FfmkrrAvfNNVziFUSIr7HFToo1yWyzdiLlsDDQuG82ySY%2BK2i5FCAk7WPT94HTCL%2FU%2FqeuqoM005dQp%2BOCPszCmA6zxVbukToX4TAI%2FiLZsD0Ji3W3TwYbt1ms8iYypFyyet1YjRWspwTGZSIt70%2FbcufEw%2FYT6vu%2FJx%2BoGYLWRLP5Spk7gPPtupH%2FaIXLL9dcdqfJkf1hwgc%2BPlV5%2Fu8d4rbBqhdaisuKwcMQ8SuhU5iabOdAoAbYm2%2BWG2gqylxjkxNcQuUKDscJC2vKmBrL2ncWdL1gV5qtEj2VOlpV8QZIMJvMQv2tSMeSuRvuIndrRjMNmW21YIAzN7LE8GSQiZ3Bf4iluCC9CzVP8b3z0DSfzQ7166f4OZhjmpKsE8KWGED%2B25kTKg6M97f%2FZPtZl34KubmmJCtMd00Bpul1IGP%2BW4xJOXDlbc%2BOFniU2%2BI2c4rP6xV7d8uX7GpAk%2FuvBa123Ld83l3sxH9v%2FzAf4MOvDzskGOqUBbLoVxwuhGyvjjF9r14Jnkrfn44pZydDfUx6LdiEKj7%2ByZG8KAOeFFjBU6FdP81%2Bi6%2BwKZRtYDHUnqq0R1G4WY1x1YU6CwiNNKAzqh1a9zmvSODLUWYiPq53CZu7rlIyA%2FFR4Gh7nyKBq8ZlkcFzOW3%2F%2FywByTU5EBlke2PMkpc%2FZ56fLq89o9c%2FbJRyjwuq9zMYWpmEFzrWCPZv0PPtWma4l%2FsVD&X-Amz-Signature=4e1ec8b03a3295b9f20940dadd28721ab2f5cb17f370de74a40f03ca5e052330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TBB5IE6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPwTtngwuASaJZmyPlAP2HHhYM0T6neFfAnXSLZajEvwIhAIVuL9LpcrQeQwO8Xyngtl367JmmzfbmiZRuXQoRdtkaKv8DCG0QABoMNjM3NDIzMTgzODA1Igwf4l%2BrbtUvGWTZQycq3AN0tSWty%2FUoTTuSH9X%2FppkJHIsLsTh%2BLK9VVMQqf%2FGg6%2FaMxrJhrQlHCnzcmwVMHqF19F5KQR9RrDxOvEqecUV3iUl%2BHuwzEfnP6ezKfZ%2ByzuyiGX2sEjTuEGjPxcK%2B2HelvYNNoqNu7sLmx4wi1q9G6nzsGx88ldnAqMvu7G%2BuuNKE%2Bhi6CeYn%2FgTEDAEbdfQBwlz3GhQ610OPd2MnCxBjcCa%2BtNlCofPVqclRnXI0wwDDyjbp33%2BEOu17K%2Fqnm9ZoWJ%2BAdmGgCJMXAth3liQUaU%2B5q3q0aQH3FzO0q3U2yHewbEjHyDzYzAgjRLIpKo%2Fp1j5vPUnI5vU16x7I37EmKyRJoZOG%2F0jTN3SW2tOmREIE1sNtKny%2Fwv2ERCURuwWzhHm4W2WozITNUX%2BaYNyl%2BX2TYOpXQj7SOsOUSNBYmg83BoFDZfX0L0JOG%2FUfRJUw90YqqbsfeeU7pZRu%2BU29DZi1AN6gByZVcgM4KwEKR%2BIk7c%2FqxKWzmL3uawbgZkJ2bNE8WescU9g4r7x%2F1n9IJRpGRlSgqre%2FVgE75GuJPUB7sK8XCbPIz8AAtcXny9CX6godf9mftqMPLyOp10x6BMaI%2FTSUI3%2FbkpkJxy5BktxxpDvMald0sYttTTCww87JBjqkAVHbaOmZIj5m9fSj06dLr6bEuX6qgqZMN0AT%2BiUw8vJo4rZ2FR3Mbes5VTUWuvoavW%2F7pgMOZhoXLzsXMFarmXj6U4jjPe1MrHczChMdy7GT%2FImDc%2F1Z8HFcDje4Fsj5VEzc82qF7fAjjbv%2BjjO4ZE7vi3Csz%2FeFeisnifUvsprB%2F%2FmUONMd5k9pCVG1maaT2rwaoKX9pU3pX0IBocxCyfsC75DR&X-Amz-Signature=08f548382823f2aa2e4005bd0c3fd768d71d0a0e2c1990255875d1b9f53fe740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

