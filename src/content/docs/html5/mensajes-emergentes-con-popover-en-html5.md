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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4OP5WRG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGMNhw0PH2cAdDhMuCyPlzXI2RFrphdANvX4a7oh%2Fj1AiBzFiHnG3P9A1YVTyb5DpuFwqS5QmZkFWKG20OKeI0wGiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkhAL0wC6Fv2BkTJzKtwDsKLfoLy5j%2FHOc%2Fy1Mk%2BZ4gl24vkjIb5sD5n3xREfFx37nKTdzRLtHSm8mjmFveDnaHoUaZ3KaY%2BDehxaEdZTnQyf1%2BX3uVMESzjk51kCXCa9L1scKz0%2B8HeGdTbdjrcU6RbTriuf7ZKna6j4HApRcuYrPTvOJK%2FZV8B7DJdZwNyU0C966%2BkldOmU1ftzkoT86atnFgr5qhqPHD0spRdGe2Tiq0NBmyQBU4TXe3yDgRJNuXEduMNd2TGm4t5vOa1PzQQ%2FerxpR5PBAeULlBelrvjlX6SpXbu7t7y0fN2L%2FTJ4cFULhv7m1DM33xv6eg0FUhCqE5MhHxiE3yh0rbouJzTcfqRWii0yxYN6VVNR%2BhgutdnvmO1kUNkY643zXevADRPiDMPOXWVEdSps7TkdmEX1wJMQAyRhvNzDDNZiZla9oSH32tdwCCeqqu8S5Ij73tMCMeP3iUh2M1k2r2A2hp10C0N10xcNoHEU1YHOv0X3MN6OiJywZf7xCO%2FLgK1go3DWvgiCsIyn3qkCgj0luVpS4UmHtRZ6Lg5F2qs%2FNbZU2UVc43mPy7F10lhUUazypaLgkPHxLng57qLCJFbyFDkJA7L2K5CUuY65rrPy6yvM7JNEv2gDARBQteww9ZzUyQY6pgEUvOJXrQkaQPbEHOAQG8ziRh8xtZofa%2BRYTmiegQEHYOyHMCYisyIRcIDqcbSGcKN%2F3%2BkzgqpdKq7LJ4MJuN5fQmfdtLrUbGkkQMq15TSJOmGhj4kVnMr50cvtMtX5kondIdX4CHD9kFT31IJvNXT6hrzzJBXDRmwBNBoF3sVs85XEQNcvI4G2wae1bU1wev4URVo1T2BBS8N73lO8n9yY7QbOHSPI&X-Amz-Signature=8592701d9e41aa213c9d82c86886cf009e4c8d54bf1146cd368a7d2477758b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3EQHBG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkaJoA1g3iUkDogaSW7X2Q03DKF40E19x8K3OQWuN37AIhAI2jwZmNF67b%2F2PTqoGcrUllZU4p5yzG9Ccv32VmCZSNKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOcHgHQXGqpGN4G40q3AP7PDFlgVe0t8TGmIC7VOmtw8OHBeRiBGA%2BDjUiKFrmdVDgeMdv5rA3HhEOYa%2BIYJhixIA7bPVee5HnTUOKBCj4YDG9hOkzJsiLa09wwexcx2kAgZmNCi%2BJcfmCYnG4v6SKPE8dwv%2FR7z1D%2FH29jyLMXPydL5WxAZjKyznLDRFNipt3JDZEH0nrHjnx2dfJClueGAyorIv0Rs7uAMdar2VjvF7GjoUMaxzwWvlvIW4zpjcOmukdq4j4xCF0jnczBLLkbeplD0ytX%2FXW0cb%2BZb8PaaN0mhh0o6p1NH%2BykLzjPieOdG7oENlVPp8PtGJ7%2FlkB5Ndi89jGdWMurHd60%2BRCCnjdZKb%2FRXdoa0zoSguVNSQ2U37LnLB66LKpktXM0PvsknLI9hK0Ge%2F9GM8Tw5ca3Z%2FrbFc9WRFMPy%2FiJEy0B9AyFQPvXfzSDlVUVVPFvdbs3xm%2F4ZiAnX3py5iT3MQs5J1wc35L3PcZBqmLvuA0cSTq1XFcCcpIz9U7CdxIEqYhI4KGBVxqyOWae4dJaf3I%2B8luN8s0%2Fou4nbbwpA7SP3hX7thZA%2BVIvv77X4g8%2BYZ5QGbHJboGo1zQ8J2qwqj%2BDNNhAy7tZmlr5cO31PXB6LYLFyOhyu%2BcUZt5YjDDodTJBjqkAb5rMz8wF1Dk3aC2ae6dHRiHsSpzvl7nvva8NUSAaEDtXoUdBkpgrbtgVuU%2BLRqLUwwVDLZmj2qffHSN9hTE6kxe0iNNJDuJvJnZ1Jd2slhKSClip0WtccYwQTAdBDKDi%2F1ekcaSb3ejd3bY1PbN0SdAfnXYTr9Bo1SsYIaLdG3mRcyMf5yB5PUJD2aD8J7e%2Fk1KR85aW3XnqIXa8o3ZPE37dXzQ&X-Amz-Signature=4b9de07dc1f0913b5d76c85f8f1e3d0172b904f7e702850049478320b4f1c446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

