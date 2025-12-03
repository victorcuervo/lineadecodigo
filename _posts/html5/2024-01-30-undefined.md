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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7W3VILV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T131046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDY8ycqywAKVIrYRYC9a2z54DOgBZSUzHHallk3Z4DYXgIgUmIOGYOMlD7KIfgX0xrzjmUwswuJFNV9R0%2Fo3DJ%2Fs%2BYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGIW%2F1IDAkYUuP%2BwYSrcA%2F38%2BX%2BKMGHmQ5EzqpXMZd8HOha8706MFrt9uATNCqxGV2MM1NJB%2FB4uvxD7vN%2FYjjBjYSc%2FgNaRXDGAwYM4vVrwdXpF1zGba7Z2a0%2BdFlNUCoZ9HbDbYyzKIakrE5PBUwjot8FVs256aixHvNnNFZRb6l59YlOqZWDYtvy5ZlWxDC3k069%2Fst3A%2BjN0ucchnnHSTfbczMhjeLCcqe%2FhCC0iMSfokEJ%2Fv5JAmMAYCUYROb%2B3qP2SRuYW33hpxbUHkIjWypcqdf7RAb79wkNTvo4dU3FRt5Vgj6Eijxov4NhzAqN1mdqp1jF3cuhZ9Mv4ybpwaQeQR%2BApta%2F5KVDb5UD6Lo2maTWTfSDXL7v8SWBYn4qu%2BOvRsiWWrKQCfHCUDo1kSOx1qv7WOWIPASWb9%2FRiiNHnkXwhueW0pPVvlQHE%2BYv5NXhKD2Hvj31OckMkJhghT%2FMO7tAUGO2gg7Bdsv6AEx%2F2hMQyktFleCHmzOhrYFgZYAizkvQ072InRnjUEDuaoikGITBjBRMIgrjDm7%2BO%2Bc1bdslaJZ6qhCquGfvDT5otw0BgvSvPEVgnY8o1aoDD3i6UoDw8PobFVm0RAgbt4G0yy1yaRiR0YaIIoZ4z8Dv0XDgXQwMTi6OqMLfpwMkGOqUBt%2B9ZHJurHZyuuUVkbSsZlebuNDzOnUFpPG26ZwmKHzOx5OpnPw7plr5Q7Mb5OCFizSiAr7ZjLVJ3bpwL5lkoGc3del2YjOIMJvhjRK6mM18CIEM1q%2BzjYzD4wwKGh6%2BYPU6l2D4JuJktOOHZzYs0ix2jVmbkjqZndcYWI406nxGzo%2FO4LUzeNrVH8J8lVcLl36OF1nox1z0%2FDCVQrtyqffbpU8FH&X-Amz-Signature=bb468348a3648c8f8b75ce796e471e7d419475b4d58506bc9f95777d9de88949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4RGXDBZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T131046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIHDB1pDqEalA1nZZARYSXL1Fx5lqfPMx8vCs%2Fi9OFcjjAiEAmePAYj3uyIdYp7%2F%2F0o8vKAqyy6DYgLsmH8e4Z3wxpo4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDIkUdxFZLPErlQNnTyrcAx2Mwi%2FfJ54SVk78uiG9qiyZlIB8ralF2Z0Nzh35VC8WNBXBkIddi7S4ov%2BdgftqRmC0TpMqdsHmrXdr24Ry0weDrW%2FfmkaT8%2BcYoUT0wsNEfrTN7To3ZqDFP3ckBRCULUs8qkyqWGDUuv8%2Ft0lqwS7P5Ra9oNqULIKR1gvRUXMEAJDOMKT2QaObOeoaF3U3WGD5TWXf4wwFu9bzbTtYwoSAVy5PHMI2c%2Fl3pkuZGlQVx1IaAdSC4TeY3LM8UVQnj%2BKXQg1PqwcvbY1FibI7c8pJrve5txs9PFHtew7edfAF0oXTAQVRa7mIoqN7hebDhBTDI2h2hEoSKwjyIfY0wmttKt1k%2BZ4fV2TwRd4u6Vo5Pq3JClgEAa6yiUSQ0Y1DZizsXJBZU%2FXF2vwwzULyLwMWFathTZBv%2Bko2r57ORS1qJrkjsWs%2Fzmecd3Yhnm28d9OdvE4n0NJv4w7%2BLnutZmkahmLtCaj4%2BoIuIBoC2HRSftvzV00K7aGIEjjTyhyKvbwSGTUKJ1MI9n%2Bk%2FWzFKU7dX0qe6PIYxElvUaY09pxt7S5o8LuBXA6ZXxpkrAf0ekjV2v1brHuvJX8gDvmdE098xeiD77cQyC%2FCEj0%2BngwwP2kVNZM6DPUk74XzMProwMkGOqUBwboWVQNvGfqqe4aINKiMgBQKErtA4o4WFan8Cln0mam%2Fu8rMW8I3XlFx5M6%2B%2Beg4GL24qLaBhzIGu%2BFbYI10AnSbX4vstbk5caeZ0yzpSa3ln%2BijxPfjHjV9SsFZUR9hFiOIJNO9dswPwNH9Bcrzr80uhIVeTusbzG%2FR7KHy9VyL%2FozNuOzDXsBvnE7X3fp7DybieDdSP0H2SFjbkauC6Edtuk5q&X-Amz-Signature=ee41ecd14f26748bcba967d3147fdec23b0708a3fb338a2504685de9b3f8b6e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

