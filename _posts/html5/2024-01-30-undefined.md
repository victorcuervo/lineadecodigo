---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6S7B32D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD5NdKqoCJl%2FzmsMtxLiIcdlZWY1DGWEHqYE2Eq4y9OEgIhAIJm2FEzC5isRXMfWATCEZfB9ENJNJpaZEqj42pidLDAKv8DCCIQABoMNjM3NDIzMTgzODA1IgyQGMfseBJoqT%2BzgToq3ANivhlwwVjSRfdpg4MtAr3Tbj%2F3vLnDkdznQhwbmyExnXSs88JnsR5s5VwZi%2BN4XWKxcwzwrn6YXK8jHrcBvLTAlP7bnNprei0OiWQDRW4WhEj5TIimw5bTRfDQ8jqtKgn7242zMJ7u%2Fco5eJ8ndYSF1rJqQa9SY91IPro7AsQZ8I%2FfUGVQrZnBbPgDEe6KoJKsgXoj5iXT2W8%2F9FUsSQC8dgXrpvXh9trj24hhrDrM29MzwXJx5JdJD56cMo7xfddmKKs99tlUaJpgcxmsX9Xl50Kn%2FvT6LZ5WgvxyscPQc6SV%2BK%2BPI2qvu9IhfAlRwF1GtbG3poYL5R8vhm51CUlvOcZ1QpmRxBtzDyIXNhDaBIoXeQdBrVC3N4A3MZSQJraf8ddLcyFzNVzTE2Q2V9GQ1DPgJzpHMv27J4yfrTNzA3FWK7uavs1qInrHPGUdAuAWIYumE0sj%2BdDjWDqjsDw3yxaUaFVARGQ7DYCV50eysEZJj7k%2FNg5Cr2m%2FiYkZ8uGuAbU88CMfgfyXtOqdVmGQ8xCB8O9W97Lq2OvrlAnDbRX6qSp0zXNAYFbyM1sGC7hfhth0ZfuuzQ%2Fyi7eR4qoThG9PnYgwTj%2F4K%2FzZa2wfUuzAg2el9FEodUthDzDjlb7JBjqkAT%2BW9YOqx0vr5PMFXz8sLCcEHZDch45espnL7Gn3bAChQ6iznvnY8UIrBNlLPJnBtdmHNRqdtS6Uryf2nUdP7klvFLfxzhjHfEM4DcB7fHjryXXuVGQ%2BytZfUz3Tr1yYjrJtfhNB7NES3Phh8O72dlF8Bl4F8AT9vkfiWsoCIpRQy3b90ifVpXhB3wXQF3AQRF%2FkcVl3kzNG5NTe%2FnAHEhp%2BtPx6&X-Amz-Signature=3c515d301248e5b22e95bb2772316da5fab1e801ea52d9c46c42925a375387d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PXMLNMH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDDANvTsQHkwAT0sdR9oiIHMNEq0Ke32XoIoCFxnhgNjgIgIjFgbLJ%2BQMbqYWubMoKTKs9V1sGOWCXFjTvAp%2Bz1BAQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHr1u1ojBl0xbr8gLircA2xlOkDpwT4jwhGNBvfjKPf%2FX1E2sarphwb5W0aEnyrGQpQfujAuHXqrSngap75shEiXuTBbzsIcZXbeb3jLzIxY9BBuH9ho%2FswNwSwTz0gI1kR9iqKPVDjham9mnKCrZy7%2FpNUdLTuVc7I9DWH%2F3yduC%2FAD9vlm67SdlPgx8%2FiI%2BVvM8bACKHlZhfb0i%2BKqpzL1cQMpgRYAkdpc6%2BSUWhVTHWraBkNvA%2FbG0OBc8T4l8l0xln2MGeNMs9I3o8ZKAevkQTC9LQeS2rF9pGnACssOQCh%2BytF7%2FvGmhU6iXEQkeIJXnRkG5qDx3kgQwSMjHng%2BCS61K86ZENCh0AQdYvkWJ7vOlV4aBqWof7bCWZsAvf7WDYDyl66pQvFQlyXKR9%2FASgaeHoaBASglhDR10I6%2FtjGS8z6pBUUFIj75WeXXdyEoBxxg0%2FQvgsRly7NOVkDBotUxsPljU0tf2OQWGc5VGyWWAIcpIoBNfcsxN8dyy0FRdYDW3FRKv7vhRzshLjXJPhN5XqOIUCdnkbJqR8qIf2tHyPZW%2BVOvn5iWgGcoQ8LVrb2M8cPCKnuXKYBxg%2BJc58X2A1liQAeHlGvRET56DZ0aO8%2FRo36URYhfBdQMDpeERVEnu5E%2FXwiCMMaUvskGOqUBssPbE%2FbqVu5b902gG7sqzlc8HzwQfZJQMenL7BzM%2Fg5cb06tvlC%2BL5dkRtkJhiSJGeHN%2Bl2OZX2NiW9JyFQtU6bJBcsWolle96fsVmg%2BNqazPdy5Ym5DJ9sZ0biYKbTowHamliE%2Bqnr6B15kAKT3zrETJd5h5FRUz3sSeBVSCw8XgVoYj5zjO0qhpKKN%2BlaW5RlkCT85yQeBMzpiwyBgvEzV7cn0&X-Amz-Signature=88256f0d104d94204ddfc84ea455f6ed2f8389d315557cee2a0da132eb4024b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

