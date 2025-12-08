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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UVIOAI7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAg%2BVCHhpoVeIQboWZNZ5AQcNyEWzlR8Ga%2BdfqL0kgT9AiAnHeSAMr%2Bm5iHPMO2G1LLM7zvfirw5VZI9ZqukScdqPSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrRb4hIqtTbr0IJ6IKtwDbW8442%2BjgEfNy0QaXJc2pYYaXKpo3o%2BJ2D7J3dFHvPF135rkDirK6BRPWxwHVCUgV%2BMNGiqUzT9kS7lasIMhtfj0ghpScofpam5QDi4XATqfOnEZtx5USSdCWrZ%2FRV59flw7xo7leDFy%2BDobBeZXK6c8UrFqc6zFBqyBchgDDlypJch%2FU4LmeA9SiWnnWpb1b0%2BpacBvm9B9EOdvbP7FQmES%2Fm%2BrbAoc%2Ff8BNBlsH4JRz0MBM%2F1SXd01%2FYBSP9Pa1oCTJn7GlTgdZNHjGD7IRsAl5hwQIrS2MtBeRHj5uZd2VW5bMLkJXTLoxua1Hpjxh%2Fgy5jnIlu%2B4u6BNmbX36Sq2nI0%2BIFTQb7pzt2fzR%2FiBLrqS6mAtGW1q5J336yPo%2Fk9qPU%2BsL0MHxEPBNLyHvQpoRh51aPmZI%2BAjcjHJpQoR5tqOppC6bSYuhSsc5eiN167OrBfRp2h4u4nd50a8sKQJH%2B%2FZZmlSaya%2FvlKk%2FlI57hyntHPpf9tFhj4FZjHaR02%2FZrwdRyVttbJFwTF4OfIX%2BV2d7UGhOpEaGwWcEkenRKjH51RbDMB8yD69AKn%2BnhKoqTI48FUPKGTu%2BaNUCHm6dvzYiJ7eZZHsnZl7cfXFcsaTAYx1ZrFmh5Mwr6LYyQY6pgHlMtWiPIrIW0yNCUDS3yijPP63GQCfgsmhWxB28Z7SgXX1BQ9SBhvcb04w0u4QQ7LrqcwyTgT%2BYrylvywpWgFQpqXosKsnCFQ26KVgp9iCTKLSkBnMuP16ZUdjffeZWVnS6RpDgAMXY19THZDMNt7av1ys6YtwBLxUC8mXH4560431e0VOt5s04XHcEjsQfZ11Ceam2gqwHShNscyMt3qVJmmJ6kA7&X-Amz-Signature=7f1797de4bf5b02e8d5ead952cd2f031581070d74442000c7fe8d340c2dc732b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QYT4YEH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaXgrwXI8vh2luWX9o%2Fm%2FJhLcZOXFaHHhG6oxE14cVSAIgfuCLJ11u0uLMKFarnfiQdmmnVwavYqFUG2bAjvpkO3kqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0CYaDevpN%2Bwtng7ircA3y%2BjBGfpxdXwAVdPLgqeL74PoTTU6dIo6snat7ipmoy3qXfVW9nHM46wbJwfGAkNErj4WlxBoukUbHfB6Ip8F1hBDcQ19wkHUSYIc%2B%2BDX2iUqZ16sDPRQP6%2FMJkwJflDN65pTgIytp6Mc%2F50J66ahwpltxkytO45OAqt9tEinOX0LW0T6gs17GBQpjn5oDNBZMqOhJHn5nj0VmN49zldcJ0KtdXTQap8rqhmDMOdKQVqyeJn2TjqeQnJ3%2Fs2TUGWVUcW0fE23j6jQ7O5iHksqenOWLGY2bO4IqHufGiliJqxce2ChdFEi%2FJRFvl99Vt0McSTfLy7Pyhqkq0f%2FSMIQu7h3FhAXuE%2BPhkmF8WOU6%2Fs3j8yaQs8h6d4LCE2gFbmQAOYV1wCRkIFeteJxfEn54bGnyCvIcrlf13en2lYJ0w2RfqhpQ9Jc1%2F6wgjdGxw2XnXYsoSv2DgB9S565hefSOQAx6sxxGtOdgq%2BGZT39fb1bwmHQyCHWJHZtZ498zRgMa%2FInYV1AhGy9QLMWovHKdV0uq7VarlsjUfN0IZK7TAp1ZeUsK3eeny6hPb9zg1bdzftazrMpZJdl0sJyLePzdSsETeuChbt%2B4mbhkIP8r8zm5icFZgPbEttc7tMM6h2MkGOqUBxmcu%2FVmHUZX4toGTx1J2FbeTOHWpM8bZ6Q0DA%2BTgDkOYQiQ8gvcx2CsF0xEuar2B23LnOFynx%2FTLCuP6O5u7enH%2BMrQnRI0T4M%2Br%2FS9vxl%2BcbMbcz%2FJXXcdzvHFhJaLkQYkCQGK%2FYWeVHXzKNOHAyOGFAHfPWzry5iIsyV%2Bb9Zl883RCuAdRZHDHfr62DRM57aSuw%2FB14xZNR0x%2BQrbraoW4ry2D&X-Amz-Signature=6b66f652e23eda2d239b1df68763798b906be817b2a9957122c0a68a899c096e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

