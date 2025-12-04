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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644QWLVFX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIA5ZZlf6D731ULNhxRmlgdzmH%2FHNLSZi53EPYmf7zB6mAiBa%2BNqy3OxPJ9mLN9NrACwkQrHBD7B2RebmtUSMVKl0lSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMeXG96Oth6ah5vXXgKtwDQ8qhfS1Mf6z69QJYlusG9iqyVl7%2FXm6MBqVvYjMqc62P0U7FMuLFRcGYG5jZK8jfySAjxNTOqB13hwXGTkLyk0mU5uUF8yQCeg%2F1bABrUy1DdAs4982emOar8YuwARaPMs3rdwTFrpyqgycZ0Zq7wU4kOrxPC%2F5rCyRVrZGFDZtJaShnYcW%2FozCeHjWIwf5K0eJrASccYYAGOXsHzH57945nm6oaEeuLsqYQXxvLWxklgketMWE2mN%2F6nnc7AIYDVvOaY20g0QnDxnUIxSyI4oPy7c2Z9XZAbx6H1qdy6Tcaxq%2B4TgZHS8uSbylpNd4qo9z8lg%2FQcVicqjPhAvGfixKzNS7Xk1KUQ4YVsWz9vq%2FAQrK9zXqpwIZOGsws%2F8iF1f3NebvAB8V6o8U1Qg2LE3TIM5IhbE5RLyCpWk90912ZPn9ejoXL%2BPRssysGIoDTbBheiMuBdoChyOtK2xVIgsC19EDjaVTEUBucFOnnyajfmc5U0FvAqBfO30a48j92rOu7zMp2DOiU7wwDc5e%2F8Cg0rjkhaT0hRr%2B5mq2SUT3uxCRUxIICvxOHB00mS5jsl4%2BbkvOTN7L9y20uVMnXe%2F3LuKCfctul1aTRKsGrZ%2BNegfcTDUyBoY4Jc8Iw4NTDyQY6pgHHZIBUE39DQT3YEnWsKdV0W0IJX5eMLpWbUOiAGdMThDhcdYtMvsh9bGUbiYB8reyOuF0uXeqghyHMa5tCVmPVwvcJEPLUJRHLlFVXUa%2BdO43buKDIZbRfKGOGMgWJIezKPqoz6ekqSFKbVwsXOj0NSsJsaz2rnJd%2BpfXQWRnti51Sfg%2Fbj%2Ff%2FRh0oZH%2BwkAYbY0SzzJz0CdL%2FWQ3xOGEjF1ewFQ4b&X-Amz-Signature=d8b6b462e070b9ba39db4f1b9ed47b794f70ce883736091b2a0fc1016761e007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSLJOFOI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDs3p3o7nZQqYO92KFeKNvxaBCNPI1fgLMnwRnfoWeafAIhAI0ra8yqUH5zZ9etwwgY9M9pOSu8BLD%2F7n4xpfK%2B%2Bkh9Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwNIJIjtJEyXAwfBKkq3APJGqfNEbILAxDnWZE5%2F8v%2BBF4AU1T4RqNE8%2F0E%2B0nnYYwKm9aI%2Bm0NY8fl%2BG1VDO425PQk8iBWzAUUENj8RxgUqH4CYRDEQfTpMYAMO83l9qpPZ3gmBhB76PfWAB8rJQaAT%2FJdownzfQ1SCBpnWq0je6j3Zi65Ae8%2FDvE69YnoEbwn7468%2FhMWT7g%2FQCkb%2BIJ7EMCY2dLIHiXuNvkuOyDkIzk%2BGp1VpYQeEGCHqUPpyBW5mPgnjVC5nrekFsStY85g5oplbbnPJY45umDhhxLdYTmOeVXYJe0aiqIuPknNXEXs7czlyNObfm48b2F0n32t6B0%2FgKwIkbg6LZkf5A4C9G64Mj%2BIUb2l7SiX6%2Bk%2BrFmmn3z76de0VFGtqe5VglodE2H31%2Fj06TVjAP9KoNnfVXvJe%2B7eqe0Y4MB9qfst7y%2FFkRhsQbPHmekLStyU0QBsXJ2FMLKRviY6aqS8%2FcEXgW%2F88P%2ByjX4fqimOqXgGqTRSbY59Z7QKPp%2B9lw%2F1WGsy82Sh7bdn6fWQtRYugyCCKuBvsIfxwylppqc9iMEqHJjnrAnnFQltgIiHy%2B5N6NYKkyq2OJ8m65M5QC1XCIfS%2BGU%2BDY8LrvQEjsbLEmGiN3dXb%2FcqOy8vP7DRrjDv08PJBjqkAffH4R6ptwY0aJPDAbBnG5EYFL6KBs1bOveksZ4ZeebWAzAbu6U2Uyt5HXlaR0iIT%2FyF62TkzmIF%2FWfU11yYkWkUR2nP7fbxGSu8tlo1SzPfwRTCQRalOX%2FIZsAAFmFkvYJ%2F%2BSbviM6couQrajezn157brlNJ8iAPU8AkK6ufW5WHsKolhxLSWo8MMn45VxEuztX1luOXQqnOyKzYiiGD7uWmYPe&X-Amz-Signature=2763859cccaa0caf5d7e771fa4505363012b8612fab6efd26acd40c1fef8fa67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

