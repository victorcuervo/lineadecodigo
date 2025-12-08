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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OY35XOE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6z88Z2ln3M8GPncGH7P9UbbEVmd2QY9PJrZ%2B17LN%2F6QIhAMV%2BzJw3Vi9%2BxYlrtBQ7QadWTIrb2FlQY01MxlvLxcdTKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FGbOwHi3uReme56wq3APKNCE6p1ck7Coz%2Fs%2F%2BLjAHJMidbAAHbZrZxry%2BdkRVUwdIxTl7ODUPbhStljxzOJ14u7MsrsaISua3rh9eU%2BBNIdUP3m7KDWkSLYIR8CxhHfocLT%2B9Xse511FrpRw%2BiuEJmhQBzKmy3v4zYnllAP075ZwwYSStPDQq1GgF6%2BM8Iu2No4Z%2BsITfbiSA1qlKrpzlWhnei%2Fjopazq%2BQPQg4cnumGfbNtvvlrR%2BxnC4Zsu2TGHWI%2FMahqis5%2BG%2FE6EhCT4g4C8kE721e%2BUpb3LB0Zxw31UxaUqRBc9u%2BzQ%2FD0D4qzH%2FeOCfQpCF0B1xOYjRjJXdJDKBwhnGI%2BoSgJITFYekKGdjWWxkTAOKNl8Oa6dChfb%2BqVP1VkVwO2hCF8Kioe8C8%2BE9AjsP7kLOyJyb9ejqgJQOx0rAkxSOUZ8%2BxDy6O9lEcthFc4GlGpj0FldhUmDYv2izQB5Hmc6w5xM3tM4EcCrc%2BvcVLbKaHVeK9wMKrIN9q%2F0N3NsumGL4zAazNmHDBG3jkxx3KXglHSbmhAPaBoFwOcFph%2B6mD1sjDHqlzHUnMi6B9BznTVm1%2F71J%2B80mdn6hmCwOZ3i0ABPAM92hzA95tXN0b2rarlQHD8y0IPak9UtP5Q13wBCWDDK3NzJBjqkAR8qpPw478BuS5uuz7WRevH%2FMphdg%2BHQkh069iqIiKmLeaxqT5C0iZ%2Bebx%2BoGoa8oQ2HOJGO1vvw30sdKWZJTav1BbNVmcdf1wh0GjfrbWc4vSw1xe0XlzE%2FkT3OWUhAFToXJ73YK2AdomyHrB7vdv%2BQc%2Fu4QfyqFQEGsflSOPjYbW9LS6vbNRNobTU7ZDZRPyuNV%2BY8IyJjUCBCFsUOns5YxlWT&X-Amz-Signature=ccffd412e2efb8dc35d0292158d75365981b122e07da17acc65644fecbb58cf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSDP7GB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSOLy0nAtPfmdU%2FeOyyrZKv9H8%2FdyIh1HUScig7ms86AiA1T5gTXQz5bjE9aqrApocyPuydRRFL0GA81sAFURwRGyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMux0WVH9SammfidGhKtwDQaNwX6L5Spzrbz0BrNkEBOgNAr%2BhzC4AXhCnVnCmmYJhUq%2B57dyq%2FmVjieElrCqNDp6nAD7ggUkOVAy7sBgHtcUy%2FQtjmuSKMkIeNioxgOEgEdxisN3alAzigsZtRxre9CZE12BOTOMj92q%2B2H279nBP%2BhjIV589UraPFLlb5kF6HUbrVBUKku4GWKqrPjDvzsrVxGgDIW5KbgUpPrV9aSETBKrtjtrEnthzKd1NxoXMnNCQzRUXhUzgTt7dUV6YbKWJzmKKGf74q4l%2Bdl0u8yQWvkjNZ%2B8tkeqbOqryt9ICDZqto8hevBtYyoabA4P09unwWdsAniSrJ9z5iPkkO1jR0kn66yk0XnjXN6miCtxNFzOGEm85BQzIyU8%2BRVn34ACn6y%2FBFkSDkvhwauxoQ3XNV7r9SWRgtstqnYuMmYngXRscKCZET8o1MUHYCif%2Bug7fSKgBLYEkrIo999ZDA3ZMKTJJzvW5KuDXU4545OCxi48oz5xscwTVxdaC94PI4m8TLcv8hO09RWqGSe6noSf6G%2BUSwymCbtFWYdDueBXf%2BhWa3DZhEc6Z6r6zhi67w0XLxMqABhFCXAOb4Ifxqj8dRlHOr659o%2BUSHOPJSdI%2FxYkTp4kmWRQVAYgw%2FtzcyQY6pgGBYjFZzqzgRCejyvhrXTu3jY%2BmX8U2dasxXlxBtaVYDa%2ByHmTsSV43SI0r4ZdTrv%2FNjqnZUiifKh9fwdIwmXzr6iZMQ1pZRevsq2Fp0D%2BGFn4u6heMmYvcHh0jvXPEvrB2vIPahciCtI3rfuA6%2BNBVZJcogeNAoaZMdt%2FHuN7agTiFa%2BT7vm3LZjTrfAqv8C4tybWRsMWkxaFCMPQg6s%2F1FyGa5q2t&X-Amz-Signature=2ddca757a20082aee7c10ff2855630ecca41028fb3a1b49db918e2d69a295abe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

