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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO4EOXRM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T134502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb75rAFnVBhSMCPKVNEBNTACkJAjOiBrfp5%2FBx3LbJ2QIgUiPv8wTTVJpXV0xm6%2BrXj49Per%2FvZlX1Gd5KbzVz0uUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJP5fyUJaQFVk4pSfircA1eF%2FefRhGPwB4nW%2BxaPHQrMnLtGdKCxyEIGYLJC9Si2gBovKF3GjAFoliMHUO5w09OVfQccYunNUafcZv%2FPND9T%2B0IkyEE8UWToHTfEojRb%2BJKFxPFZXSdc6HPNTc5i2T62CB9070rvlcc4VqHcuXEv%2Fff%2F8fWZUZ9GVTV6LVwOdnptUZ3kd8ZtkdYb6UIvTdb26szauZJow5H%2F3gEESSgpSDkVanKjeKrrLM8QCfGYrxtOKAtO8L%2FHxfwcL0uhfW%2FqTlWUD%2BrK7kpCLLGmWVLH7yvU6PlcGsGoCyWgjOqIT5swaIVqm9zLk0EkDGr0%2FhJ2GAoz3axU%2BJqXJo12tHD7LHEaqDSgDsswj%2FQFEkKym48m6iYeonos35RmRBOE%2BXg7ChF9C%2B%2Fuu4xOrTjuBQUUZYWO7dFyTIOLtxhgwjXI8p90guKD%2Bs94Ul%2FoxgG2%2Fm%2Bh8KuKyqWDqoeCWYpIHyQjg4NRM%2B9YznzmRjolRzoqKtmFWqDJrIUH%2BClsp3Touj%2B19%2F1M%2F7S8cLz2XyV1FkW141ByyFsx6xm6a0BrnVH9bslhjx5zZMEXHcNdcsGT7%2B%2F9T%2BE5ORc7MNyG6Vj3Rg0i0iiz3r5a2z1sMZ5H0nt2fZqD6tLpqziABW2tMMWm0MkGOqUBuYXj%2BZ7jVzEXTDGv8AzUe7Do0q%2FO1FxyfjiMBjVTnkf05P8zHpGxtVJRoUBg%2FLcD5%2Frh35a%2FtL%2F1au416AiY0lmR29sZjRU7xUhsqko%2FMthZ%2BxySQm56Qi1AMgf8jXw5d0y1YzUnXwpbblxN2Q3Kdctjrn85dirAZVpBgwxQS%2FikQpVJBYX3FGH9Rj20NmQcu1FVGDopK23GdtL97m0cVWRySwMX&X-Amz-Signature=f3d549671d505ddc3c47073d55cb238aea225140537d46c707078d535f4f5672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VALFEWPP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T134502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrvhmm0LoE779u%2B%2BTn8aZzbRpF8D5tYSUlnEa7mop1BAIhAL0PcV4w4a1NZRnNIPwlaMygptkwQe%2BaPhqy%2FrhyJ5YFKv8DCHUQABoMNjM3NDIzMTgzODA1Igz2Ro3ltMqUNtNtHgMq3AMZU4XTpkHvVA3VK5oi%2BULYu4j9ZAkK0xO6FZGsf%2FWaxFmyYqxcou0rp7y5o5OK841EI%2FUHICePJs0PdFVJsn0qStwZ10nEEFiFN%2B5U%2FhIfjOA1CYZq6T7DRiaDYgZ2eYroGSGqWJ2WdyncAEKckxC0D5bD9lPUa0ekz09We53MvQkGm2qxNBOJLKacCholTzey6i9YoTKvbMWRRciEBZIFbJ0lVtCMKYTkWFl4l4B5BeoI5RE5%2FhNfI%2BcfVjMpGV3JiuGvswFHyXpWyoHD%2BU23JUHK%2BHTApKliV%2BgnFHnz2KRb0krrvf30vv8E%2F0zbXFqX%2FK%2Be4LXCRwRcXUSFb3sEbJs%2Fc3%2BulJJh57%2FR4zebIhkaFmVZBm7laR0ku7gMwf4JLvquct06RIdYLEcM90EYpFV69b8cCxZxeDt5TS2W4%2BnFJBK2uHioISyjxK65tdUeQav%2Fmskgu7sp%2BDr0SjkcGnt8PHtFOQdaHz%2FQb9Ku6od%2FjngRq5%2FpvXZjZGp%2F7LAO2MZCNwMyxXplrxaprbrbKi%2BfAbn3RjpM06HmcOuSeTDKygTwpaFovHeY%2FHkHAD%2BssgST7zM%2FUH3AFvs6pKCG9mfoMlbKrkqfXFwes1Iv3WiV1eKEzayeX8KGvDC9ptDJBjqkAYes24Zg0w5KGHHvT9SEZx9BEEI1hzIld9aR1kU0JNKze3EPi9P0U%2F%2BlhJ%2FFT33%2B3aJKb0XQyfU6X5nxcyktyAiw5uqKTxnu%2B%2FbuX1G9Y0LAW7gGQhjvHABtNvD1g0MoI79h4KnKHOmLT30p7vuRjBwggMxJ2l4OknkG%2BP2Dl2RHJykRXwv4fWiBa9EHpS40ot7N%2BV1Wsbnysal9Vc19I3vRfZxA&X-Amz-Signature=8ca7f811ed4c9013d15bc201b57b94a51f903bb1cdd02dffbf7e787622faa9ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

