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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMIWI4K3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbescj%2BQNwfJ3jVuZ%2F7Otxhj87IH%2FME1JZi9D31bz0HAIhAIg7nJwN0eYx3SjLJ4itvVmqGwc%2B%2FDxxV5cmHhy67uieKv8DCHUQABoMNjM3NDIzMTgzODA1Igz8iBL7C1rUlzEZKOEq3ANIe20KbCz6Hoo3KIlbi9aJc9%2FK8SnsUiFxPPaTZyuc36gx0eGRkUfrsbhXg7iOnNhbv2AVYLUv7LjGyCEojCiSBeM2oZwhRMzh7sN43I%2BzhLP9wY3cCJdjVyCV0hy0SXQWyVPn%2B7PsS6SkU3MwU%2Bj6IHXpQWJ5iuAO4BfU2ZERiPF%2BCpzCfuD2XyQoRZzagr%2FzNnzxDIzjWHDEn1peWhC9IZzSHedVviIbiI%2B3Ba2agXrmYGsVwmRn9IFeMTC8pTIdtD%2BU6t1O6JeAb3WmiGveV1SabuHzK2RJ21SbQnSt8OW7BfVuPKgLpOVKvRkWrfrg0KpkwIgW6mWRFhtuUdntBUqrndp2fcvyI7W6uPZD2SbU%2BkX%2F0L8t7LuzQwj9jM2sYfwSc01BbbMiaWiK%2F787EaqQz1wiiktqmo3l%2FyLe%2Bez%2FCDJZr8j6kAUZXl8QxqA4GE4JzV15bCOIzayx9oQa1Q%2F0OqUQnj74WJjEpgQ32vg837nu4jNl8WuhFMCbXxfv719i5tMO20mlEGTWJgZIplRAuqrXK4wJKeFSFuafczRr4%2FoSGSxMhQyM%2BtzrJtdHCZdgCojgBKLRTEcHQrqb3aqJqDrsIUv4sluOXV0d%2Bedj%2FMdi4ih0dL9xqjDjptDJBjqkAQih9MS%2BQD8YwOUjsxfmqKgeUDOD5eSeUiS38ycM8HA8fns1Klk%2B%2Fw8OcJU6iFT3kX0f6BE6bj6HF5sDn4fwADDtFepCx%2Fy9ZwHfM47%2FPearrUMaBU4CfIbcx9vaz7uL8I3yMCcjLcfAeb6tA2tfl6RimkkunCXcI2EP71y8cbQl2RKMnT4vya1Jqo5f0W%2BKgF8W%2FXbreJz3846AMPBvCuDWn%2BsB&X-Amz-Signature=395fa52079e65809899c1b228d44eeeaca1829b493aaa03534831dc61ca362ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFWJNQNJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSvl2sfvFOPbqPKwlyfP9OLDNUCLimiDFzn4tV5NN%2BaAiAkdM8d8fUB4tJlOdgHDbfdSpSVJNU6FCQ4e8DacaTDLSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMxvEHERNXYEZibzPPKtwDgdI9QNEY4%2BMiKM852Ox8OGSDJ8UXL21mgBGjEkWyXTCIYzsi5cA4E8Oi6EB%2BNlcMGQX5ZEu4KCW3dbLlMwFZZ4tA%2FKAqoaFuMGSa%2B5SCYoOcdcsNbgQg0iYsZKGwvA%2B2pTj%2FiBXVAgLr8ZR8A%2F3jk96de9xWVn%2FZIUw%2FuujjYrhmfCYxn5Gn1vmcyKSXz4xaIPZYl0L1jYccIXXCVlVnCWHDLZrjzn%2FkN%2FVVr1hVbBJWxTr%2B3XR5VeavNqmGBgPRDU090YbGnXwo3dDUvE0f%2FnOHSKQLKGdnUR9TZaKJ2Lfls1tYznADbFDykVtxm5JlNCRAMmuQ8HF1WtIGm3xFyPZJrnjjs5lIwFu%2FQJQj3A45tJTDSmriJYePQBTPBFoGXNcC%2BEzJv9Y2EBrN3lS9%2B%2BYdGKZqidE4UFrF%2B2G6cjCse0I6lrCEr7e3txUpOMZJ3SRBo1OGq5V%2BcVbaCoVu1lkh6VjINlyw5gt56oh%2BnC8z58KqJA9vgcGwV2yJSXigF1o6v0PIBw4cYilnWRcNZBwsJa3dzbhEJD2eeghIih2sE2RbvvbKcdwUPHNL%2BpJJJ76AfV%2Bt95EbD1zz1ljGQLqlWonhVwgrv7D%2Buk7a%2FSPIG0T1fXch%2By%2BBcMYwhKfQyQY6pgEUpAtfl4NB%2BSyQxes9tpzItEIR1glUvDPsWXSA2UW5Yzq%2B4Ulll5aWNnMtVR4pQ6DtFyLv%2B6ucyMq%2F8RqnbqcQDvQDD3%2B8wSuH8IZDcsRUFmkjFaKrZRslJvd11xnNiUTrsNVPQ%2F1fCsrm1QOG7owINDh0kaCaRDLGdRHC7%2B4N5hswdDtwO%2FUNS1tjpeRiQQY2qST7DNBV88Uy1y1oklJVRSVnsZzc&X-Amz-Signature=b77fa8da806586de7ca3514d86112cc5d90c4425aa65f915aebb46a4787f6bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

