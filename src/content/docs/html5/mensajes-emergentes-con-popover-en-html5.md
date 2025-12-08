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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHTI37V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeDls20PXTZX%2FAefJTOkfKMMRAZxKz7QOhsaayxQG%2FuAiAyegysYuSZvMaZ%2FvRZzDDP4AFEMYKwYlagNZQ6bC%2BWRSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYDLqOCIgnaJbN9dtKtwDJXF%2FlKO6cUPI3oCWc5d1GFOE8uM17PPe9LfyUI0FjvwwMT0kBhSyobmZtEAaZ4N3Zt%2BFosPjdOicA8C1uo4qhOjeS60bB4P4u9iCLO6CI%2BggpmmYmEvVWZWPaN9Yo72G%2BeTSh8bYHCmYWjcyRUdHKSaonEj7%2FnTljQnFnzjexTLU%2BfnT9tYKMsz0GuHNd5SSg%2BNtwuzIiETIgndBpMU2qUOU4uboeceRtcjeUWVkrg7Z8OWEVj7Ea9Ntn0JTYHzh2dis0UKk4BltBMLURSnSQ%2FZCLqKC4r0gmdPSmb9mvklJMJqSm4CKOyMOD1SSrN1BKobgdOLCJyQoaHkVFRsszR6il4aKXgvKjNnrH2M5O8aCzSil%2Bcj7mJxADNCNZGiEBfOkqfBM%2FHEnD%2BQo5SYg40r7wJuJfiWnFH%2BrHbRFM1IKtgb6zcdRu9bz5nDQydcuQm6m8SsiZ44HqSt6a0hDEejyCs8DVyXiIGzeLvzkAFfTfVkZg%2BtKgGacwhZ4tdwLH3SLROnZsTL0chI5ylfPpsc9bSqY2b%2FvZ%2F7COdS4OkXGY1gLhNpFDWQkbhkAHkXhTHYyO8nx5wbT1LKksXRL9R7JFGawqWlGuFgN6ryITJQyQKl%2Fd7NcYyZJhjgwt7PcyQY6pgFSCRUCe2q9YFdUAKKG2SO1b%2BussSp0IwzYb5AvfilZ4l9Nc5UYSV%2BuzW2yjP9U4DNecKJy4Oo9tlE8yT94m3E3ysU7aFor5eiqkDzSlbFFwPEX3EeNlrlusC8lDeAuy0vl708pqSpE7FtC7vNUJz7MD5XlJqPM6RIJs2N2MmbTsbenA%2Fg4%2F7lCCMZfyKxqyAhNY9vLWBFNLMtMzhRBvDI5nekDZIjb&X-Amz-Signature=cfe47975b8b74e865173cf4c8f0e6752ed7f35083091fca311fc8201c2cad063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QTTFJNH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeRI8FRZ8Q1HxmzWdyLheIJaF%2BadNeA%2Fal1kghHMTPiQIhAPZ2mmfz8VMMySZ918r2B1hRWQc52%2BkVuj2Ez%2FUlw%2FkLKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAAl6nTuaaPEfSKhsq3ANb7zYcQcEYA5SPT1ECv%2FQx9E1zM4iBVhHbhaQv1uUh69cywUxl50BNSQMkIjTQFWH6ZQV9CzBUdaHp21u4fTNCABWIVsO2PPuqIJY3ZTlNEpsa4Oy%2BGIo4FxADjjjAWqpZy%2B22m69Pas4MDQbO2giJP3IDiaT2go3xJqaEQgbjTMCAcfMUj4PL0YqcnibHt9qwwcpo5Wtnh6fI%2FNVwF5Z%2BBPPYeB9tl5uGvXWogjLZWNvd4EHUhx7Q4N4%2FdVG6VI6AXNsL0lWRbL1%2FD1jv%2BTU5HIGk%2BwSVm%2FiZumF4BAxBLEgPWCYlnjp%2Fzpz94gt%2BNKk21h83u5LZfVrw7BslMgIg4xVF1df%2BeNI28rIDVVRg3r1XBiunRY%2F%2BIFXnGXtzrSCUn4K4QS1432No6UHJsc%2BB7dyzzGu1wvVYb%2Fq2jUnVpfudlhsovne6jXjbb9MvipyC0rzzmabHJ3kY5Iq2JAV8XWekB7ViQeJndZnkI5uOFu%2FfG7GN7uDFGnReB7NL0U%2FMw%2FLGoLocsoCcfkV7fP19G6y9mlCyNCPvmi037dxVdcK10tSrAMvDumyPIdGDLRTZOddXJjPbE59PjgICVRIRxu08svG0M6z5k8pNVue8qf6Ixsxtx8csVwmGpzCptNzJBjqkASgC25mTemcptnM6qLAtumCg5ReXri3qRtZCM3gH6T4fBwXOkOoAjLvrxYLrUvbJ7F3GczDsbX1I7NkGp9R1i9Aimc8eT8%2FmmVcdPQv2SC3J340GSM7IK5upblZoQ6ofdEmaJYJJYG2syla9DXheSWJvb5H0h47V1GXi4Ghb%2F00nMOVdiyeYtXG45OMwJpPEKhWuKm5CV8iCj5NU7L7ps5UH7asE&X-Amz-Signature=7b19e79d7fb11564c6786405908067c880dbacb59be7d5c1a30972294e8dfd8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

