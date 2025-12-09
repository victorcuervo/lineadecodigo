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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W73DHPX2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiOV%2FIFQ80GqqPU5g6BXC6J3ygzJEhKMDwVxhLPnEIBAiEAhwO7vpIeJJoTubEIZ2fn3UlGr%2Fm%2BgGq5WwKWt%2Fc%2FfosqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtIfD13%2FaVCUJpxQCrcA%2BBxCRC4MENH5Y4afRjUrHpuvDazM051tE6bZL2ZrY6atS1W%2FMnjjUOeT3kjekfv9N389UivpAtanbprL7GvEOQykClgVxwWoDi6XrBaN5MODGo3a%2FKYSC49mIYmya8dGfUaC1FQeKvv8QQiqV5KwVe2aqdp%2Fc55kKQs2rIYeDGjM91ayXTZTul5grDnNYKO5jNAZphuIhIShcKkI%2B9fOmSIIsKzzrIophE1xEFjZIdPT41qleWFXsZ4Kon0%2FpoRmUQYNRFWnNJfqYCL2mSZ6FtZm6pUpBqs8KshK4eADa2m1WSNS5%2Foanf57yI2YLiiH%2FyJJk8V9epVTeM1YIVKZv4G6Stxy1nWyLP4CC8QNNGgVES4w4KTi6tcwPsRPr44d138DUT%2BOs3yZW3pRAHnslpmGkPybbIxZntnuj9zpfoPia4Kd8AR%2BJup9iEuLyT1Md5EgDw6GEGPhu3njEwLwRKeRo%2BtFt4iWiyRzkcmuEVrD6B%2BhGwgI57Zb8RKm4A3ciU%2BZsRkWQdbWHAGTNyZTrUgtrWqMWeq4nAcvPFsKs9rCTiDj%2Br6B5kVgKokuCc9K5wdQc9HoD8I%2BePet1ujRPyjGcAIjwA8F2ipKWfBZzzR59dAQ90TuCnfPlBdMOit3skGOqUBLuU3MfcXHgEZ7qvWu4jUdMG8lqZqGlDQY2wX89uYywRyuV5Tj%2BFuXBV%2FzUP6AcNECvxVphroRbAtyJgJgYDIF14flG1fNwfK0ixc%2BG1NKRvtVwU1eiTd8mBH7wLcPK6Z%2BqG0BISpearmT6JN1cqL6DJCIqE24uvgZk7CHTZl4A9nLPP3Dx%2FFT04djM4Lp%2FrdXeaeiZNAtVBQ%2BCr1YenfoHmuVA5T&X-Amz-Signature=9e7b525210040a649cc377a5887f53ab54fcee1e9d266c2318fb53b3bc9483b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC3YSPY5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWFRZy%2FNAjay858OZqq8piXyKlhuHseDoTYpPrZfWGegIhANsKGQ6fg4HMZlwwOW580yZH1ZeawQIzZvEqJ8MK7oLwKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9jKQNQFJo0VmlCTYq3AMck%2B9PD%2Bhlz9ThbtNhdMzhr%2B%2FFZLpx1WaMwWvLyCxIj%2Fm%2BiMdoUHWbWwC9uNMURAQS%2FzIQ4y1mID04OzE5cfHuigjgKtpvmmaG8OJ%2BQHMeLzRnD0hf4lKRtPz4juITdwSMRYOzb5WhFxc5OiP%2BsfELk84p4brLUQ%2Bk%2FrnVcDBh9fvpeQ42ZwbqV%2BPC7c%2FSYDrDYzzXjJwpgWTJKJr0GzSqXjIT888lWj1OZB7%2B5OYaCXDbdv5ybY4Rh%2F22kEFSYnMh8FBsQ88jJ%2B%2F06NJjMpgJNsN9yZVLK1iYgoDDcQDX9y26YcJtgEON9fhGYNT11QfJKVXn46wwRGabCDJnZsiskvJLqVdzhnFAqu%2FU%2B9OFvMpSM9XoLgd8m0VcfibbF3Yxedjpkj4vLZK1hOsfuc1eWdZe4s7lapYeW6OMUeDoVkTnouP54sKL9%2FU12csxipxdfeFRNUjFK578aFGRpwkCIN1R1M%2FLNOWUMbKFbbCej%2B6KFSM%2Bv2tIvThZSe86o046%2BjThz6qQdoVCM574hzTZxRN0kRn13K6zrbzhBlrDi446r23u%2BoJhT3jZYCIShOdjjUGiAUKpSf3mhPH99yS38JRdSf0hbsTFlP4ifaJ%2Ba8LyEHw992aYjmE3%2FzDFrd7JBjqkAfLPw3Y2CC6gZhbi9vh70h9f8%2FLtZLCVHvR%2FAQBvgvTYp0HakjEzji7XXtSUVBNyhu0SLVnuZC%2BSTZo2GX9WrFmwh2XyyOrZK4IQyog8IHbFAAeqP8xPchYL6sW366Sk4vZE7pEMQORJJ8ZCnnotZukn09dMLOShk4yoKDRp35%2FkML5mnMolxMpJt6MjT%2BIi6KBXduA75FbsgYDP0h%2FDfdpMjOmc&X-Amz-Signature=eff49d1449f7776e533ef44c309771685a7d6e1caff21f542a19eb76f023bd19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

