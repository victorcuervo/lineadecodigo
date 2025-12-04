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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAOFZOB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDgeSqbuH4GiG120jNxUCnXcDy6ed3IK%2Fpo8HXGYp6PTAIhAPShTv5%2Fhj9oUUD4%2BfA7ZEdHRZQVsseZ0RjJffksGapMKv8DCEAQABoMNjM3NDIzMTgzODA1IgyZinsBKMqgIWALRoAq3ANzGb%2BXGyoADp2V6pE%2B37UfH9UdPAi4EYl0FVQIPFAXe8nDlEl3uywdDY3Biqfakcq7EcgBKLn6B6qb1e88kptW2N2YyntguI9zV8eGBdLmG40YR%2FAoXsWklY29EiELtB8zHmKgfrxjb23fAyUlfTURl08ciaTS%2FH57%2BBOoYQYM59vAsSwB2535TUI1%2FiMwXMyhQroh2al5CG4WH0FYLjRZt3iWw177gqwJJ%2Fm2YLL8rRdEzRvmeSIa0wOM5qbYLKRDIYG2a%2BQ6UyD7UqVf9N2b6zJs1GgZJHfhxzTp3LlhybIHSpwLLuviu%2FLz%2BiQ2HMvltAoeJYQniGd4R8LEOdTQu3bmfDmEN6gojudqlwFOK3J254vHcowaaLYvfHxbE%2FpovVukZcMzv4AxaXnr1d5ZtLzWKm1LZ%2BWwoaAPccBtTUNsVMEyBzq1lw51jNaYb7AYI38eq%2BQ9Q%2FPJLrbVcdZWTabmcZGADJhHXJ5I9uhqKyu1PZDeLrW5CtlYhqKUxF7M5eYai5MUnksSaqINafeb3H8KZVVlApixaPX6R%2FNkclEn9az%2Bo8%2FfydOPv017EBpUIn%2FliGgA054RyyowjxOfVCtPV6bh8GcSVcLLp1TXntldIL%2BU55wI%2FUGKXjDq58TJBjqkAddJm1GfJ9NqPIad3u%2Fv%2FH%2Fjmc4RZBea4Yhqpd22NSWhnA3GZ%2BTaThdUvLwMWiHeMHOSUCZmYRKlGnKQhrR0UTS6YVelQhDidGcBhX5tgMFSjMA3s6VFZ9wBMsBjUWhZ2RB%2B7RsU8GiqLctD8KgL8OctrM%2B2G8Qy1xjCJA%2Fkg1IgEKh4ouPPp7ON0AaTXGAP0fK2FoTry5ct%2Bv1wOiM6laQLbEX9&X-Amz-Signature=dcaf59b15c19f315e9214f9e77f8b89fdaf25e80d7bf2b11f7276f531034b5f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFLWV4Z7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDbhuGzPTxSC2HWwB853GZ61usmZTiSL3rTyHTT9cvoiwIgNF9HydGzwhzqpBmIpoAjdyOycqZTeO7HTZPtFavFqucq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHcbB%2FFiIb0WVqACCyrcA%2FlgZ%2Fm1piZ8RPfKI0uDlImbUf3FHUta%2FugHzALznQqV5El%2BgG%2FYibPVNL1xC8e0ATan9ZMxxx3zQ%2FUcJ2BPcAPWJ3c2TCwlt4If8z0qjIwVpuwyPpsqMU%2BHdLdY%2FiTMMhekrJEE%2BGZbqOROs%2FvK5G%2FjBS6GrSqQXWjkiZEHdE1os5zp8Ux8TumUQLDdGMq1Lyhuty3VXVEeE0iEqWrZUKtW%2BPPhGE%2FN7aEXUUE0koYbiEvWCTE9x0dvKTzHmGOnN0jj9z%2Blhe7l4pQvQVvD%2BbdQQCop0f8e09N%2B3zN6%2BpJz35wXLaE95860XVTzXWt5N6JjgXO9hXWeCfNdCZujHfsFpjRa07MNxahQDQb6N9DqVZqIa6oLIGxyuL6%2BQkDqdjVlHcKXOTreaNh4aMc1tg%2BEtjmbZyh6TVAamQFsHgAwHKsW7m%2FnUNnOtMIbVhNiim61lSwQzVOXq8%2FRYOCOWGIavlbxTzx%2FQI3YIwzeH8U3pcorAiciQK1sKfmo8D4fR%2Fx%2B2z6LTOiFJ3PpkosU9y6ZB3gSGj9q3ZVzRLP9LY4Q77z7xNNbt3u%2BtNycAHejWg2Oy6i%2F3tLQ%2Bn73sqR9QRTYv%2Fbk7sKfoQK2WLDqJrcxPqdxXSqffxPrlQLBMLfoxMkGOqUBKWM11OIiOkoMKGtD4wcHVtaRLBfio4GFTl%2B7tLV8wS%2BCTNG2gqYFJ%2Fm4T%2FCLsipPOkHzKGejcADMJit%2BAi7qjTPAbs3HK1FI1QvYOQvTH9to42tgfkXOl9yo6T1H0tF5gudpXjGPnwNS9rA8ESgD52yv87XKrypY0U9jsGud5MxD7X0xxuYrH3UFvmPgZhpLf131b1tM1F9QIIxVXkKVPIFf5kgv&X-Amz-Signature=46e07cae220449fe4b3928e88b9e877210d28b805e6488401df95e1047c5295e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

