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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXRFZ7HY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEnN2XBKQkM1IUO0hhhk8miVfHx3KTMeiHTchmkANp6AiEAxYSgdde3BHJckI1BjhrucU%2Bk%2BPLWmgjEREViuFxdItoq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOy2is4SgoDha1pK6yrcA17299fv3uxZaDW1bv7Tgs9%2BCXVbDxczVirneiuweKqh8Vdf0ArzypDLh0Y%2Bcsqu8YWZ11I%2BvX%2FmTIvDfyejWdxj1esDKLrOk25uSaUefDAwAqA1YHBWnW0QMoj4wtFJUTKwMbbLA5WQj32O5TBpHzSqY8SGqW2WjP3d6EAz%2FuDhIk89Qtuv%2BgDF4wPTQzdWRvYlP3VY8HqS1rFwqNpRGt627l548LMUiKbOilyTuPApFJh4779WTREEB1m9FHvhhaG4G58UxCOPgOjXKNYLPmOFBjpJQ0RjwGn9eAif9rzN4zltamu9bd2afI1ta0a%2FbEwPWs51fogCXRaaC7bmvCS%2B3h0t%2FtEccO%2B0xZCJ%2FYJ1T4hgzhZWV4F%2FbGV1aoGfj4RIkqCm4wmUisHj1RxhxbBqRuvYzd%2BoA8r77%2B1s1RH2pxXw9gP%2B7o94UqDjyDLv3C7Y8zHbsbyL32%2BsC0Z7ylWW4JighwUR8lhPf%2B%2BP4HDRZjTDnEuIBhl7T3dg5xr2qzYlSeqgHAIdFV%2FdIj0HEy4G5t%2FFrSrqmEDXwCTRHR7CLyD%2BJX%2BtxDRbozPwKGKwrtNRm9XN0unvFPaIjnVXGWCNTxYc23ojZEiKUkwIQB4xqRBMs6LkHHd0gKXHMKqMyMkGOqUBRNwsF8J4Car6w6lOWCAonx4XvcJqOUfh%2Ba86D1o3mDFlG4g6ZcvtIakq42L1yeKKSOwuqtgzrIzMrAZv1oH6AbpNaSRlquyWHMWbHJYSfNSkkHHP0TVbeqV7CZTihW3cHasMALhfeLS%2BQDHvWMJn77RrXAwn4%2FJBgMeA2npcXEbhkI%2FfB52q0lRuJj9BwRU8ajuRno5yvxi34IWX4LyZGcAw5WV8&X-Amz-Signature=dc5e0ff9eef56665348aa1033af625218d149a91d0cbb32aaba54ece1607210d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665444HMXN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlv4%2BOcy08OuH4sNskWmMBB1nonFh94LLqQD%2F4kZWe9AiBmYI9c4aPZ%2FUBsQwNjwySYJm0nQjLrxghjpQoAjJRdcCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM6KjbghCHTrCA%2FhWHKtwDi3wkGyNkqiCjR73SPLLp3zC%2FJhzuiECTuXmUIci8pgz9AP16F4V%2FwbKmf7xMdKoU2COBTgrZrAx7A%2F1V9Fw4dvYH6diiMCSGvirVDCf6bwlArg08nra2AgoQKqsXfZXEN9ONN7vD8jtYL2d29h%2BONypPh2LBp4eh5W8kTjcDmhXqp%2FaTR%2BNbqSv7us8URb5qTBr8Xwit1KIAVD%2BichYzNam4BP%2F%2Fq0J9qF7oz8m6BVlmj74IV8A9SfjUJ4RedtC%2FQmqnl4JiXG5vSljTJ%2F9RBZyPlxB%2BJtm%2BeGxgpde4dfiwXSWRYYyBqfUS3JKvVEtP2CvOylmizXl7NYUlrSUiyVNdg%2FIvQxf3njsuSuCEkweI8R%2BExUR7%2B8vT4A%2BrAHAZ5%2B1DYcV6VE7UJXwlYB1SAiGcSQJWm1ZA4TnhZrNbnX5%2FAhG7KFCH%2FocZr5W3%2FJNHUwMau7bzTtBPW9eHnut9qKhafkJ%2BxpfF6u0kiKVc3mosaJ9qZqAkOudvGQCA12wzYxeljb%2F%2B9qCeM9XyZuL0BW2BFgasngAAQnGcQnrBQJIBlGmN8RVqJo9sWLHgy8W%2FCaK26f1kvol3ENrrLrp1ERTcPcvZ19xppLDIo8NAyFgqnQc2f%2FVlBXPDn9Qw1YzIyQY6pgEDShk2gJ3lk5fHkbo%2Fqovf1jCS9R1NIpI4PIXJCKO2RoJyPO9dhU0viApdhDRo6mTz03c4FKa1AZSdeuWR6ENXtRncnobsdqJyxBgHXGutW37vxSYr3f9VOYKLn0LESWn7kX55OeQsh4s5w7FYflBpfVZnjerd2zlGh2cZqR3t95vWrb3DsKoGg7Y2JksAj1keLjtNK%2BKqkeewg5Sfk9gz3IZRh09Q&X-Amz-Signature=4e6342d8e20a411dbf6b810214d23038365da3bb137a31e250764acccdf02228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

