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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674O3QGAM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCwWiuSYt7W08omiFNFSe69nHyHiOJjaGjEVvQHwEK2fgIgd%2FwGVOnoAfkeboWdHeD2BQbbIpdLkyMdAXU8xzi3eP8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMtDOUr1lb%2FKAxZkfyrcA5DaUI9uC%2FnITAdMR177zQ3cpFWhTiRiEPVdTI38kzeh1T3g8qTyrjHaZegOSvGNGldhbiF0ABgk%2Fs1VUiFGqs79tV0B31CxbkKHa803TZudEYo0HDueFD81ZhiE9Ztj%2FID1%2Bf4K6YeAoAEebn0jpu1YWso4kHrv8BlXI37OC3YwLXw4maYxrpL8OJs0P7eO4tbwnUTmXKHPmnid3Y3r9K9wx7u%2FGZYoVG6wm4I6qDTRVzxP7SetEOhVtlKY2lti%2B%2F3Un%2FOrEMCWmxkYcsolGqy21lRJhrsdv8Yy4%2FfZEyRNXPqIQm0%2BDZjZw5tOp7P0itHO0JoM87SM8ycvWr8wsdyHF2d0e1MSLjQP1kIOi62wCZUKvgdo%2FzBmXytpppuQJ39V2QNVvgpDsL7wjW8OsMC5XXCavgSoL5cH8K6o9a12eoeyfbmtyLrSbrAgAcCiiUaXBVIxXOAO7Wfk1aaVixibev3w3XnE79rdH6gOHQuIG%2Fnl0D8uYK4iDLN46vWrsLghfSBYM1F%2FlbZ9XW7RCt%2FkdxjLPmeroGgUBGTjfW6Etbit9qOmjEM35FV7jFrP0mZ1oKFjvOBP8ct3jFzLdJ2Pmn7l01ZjF%2FK5b7l%2Frk1HEtuE6QMthAdTYCgKMLCUvskGOqUB%2BhJgWYiOzxdalYtc406onXBgwGHq9K19QltksxdZU%2BtUTfufTDBJlUpaVR4HBPnx6dA9Znd2oxSbssIacqBAWDhg2JQfG1hoEafWMDMlibsSyMde5Vo71Tm4x%2F%2BCIpbuKH5V%2Bh%2FUTJCWK%2FB9J4qcfOVB7HjwQKVqSexpL7Z5lETqKAncu8H%2FSE9%2FAYMQ9XMyfDmU3ww1rS3A4Uvol04PdTzCgZi6&X-Amz-Signature=2d89e108a4af3380d4483be0e5bc1c9595d325e02e7c16cfb97e8ff520bf8444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJGQQSF6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDdSSAcKjOCl6%2BcrRcEnz0K2ZZevelvZxnZlWeX4RGeegIhAOXiLNzDyKV%2FN9V9xpF1c%2BvWMgTPoQPjfsC4SPw9MiE9Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzajNsfMMBTCLDwWcgq3AOwqYln3Z%2FPcVmRZkedrb5qH0uI5C5tJ0kRR6UM3HIif5k328exWFIFbaHk7eX3JnwQq9%2FeGfCqATc%2BGubz%2F%2BhmtteERZZUOsN4JJM2Uxk3VE4FsuQXOCsnEB3NEdcizyof6nTraPs56v31JGXgoki%2FkzSCtKXeJELsZ%2B2fjYHz7NHCxzrN5km5pH8RjI5%2FhG2jFHojcdsO7yg9sTiccN994L%2BTAj0HX8sLYkf6eBFhFMCn%2FXktyvqMBznJNjTl3dHrvgFJF9bsY%2BQTd6PrmbaAEcf5B%2FnfFyuhQpUjJIX3ndWa8BISpaXraQj%2F%2BSqS0Q79tyb6%2FmqHCya7tEnsW1%2BVJsH7UR8MvpeIj0OgmRQvDEdf3H%2FQDnVmdxHNweq9DSUOAn8o38nFsfei1Ku6OGp6CPjjNI4FVTc4g2HnEw0c5bsbCUvKhES7zfa2O8IloE5AyVQCXjcXYHSO52VHDgY3AGCAoignEpkyMIeFcp8ulIJ7WDqoVORWNpkacCqSBbSA6gXqpblsIc44jRah55wzL7sjk75aTA5%2BrfwMuPxqCvY8nhEwz2Af4%2FHmgeoPASrbqUjA7MzEc357QXXUr38b0kX3LkdkytjNjTwUEiSPLKcpMtSwv9y8Vd2rZTDElL7JBjqkAR8b0iY3xZJ1wRKPAjtJTOCwPMZqfhaaav6HRe2N5sTT%2FZwHyA5tUxeXTfbXRTTlllSMqCCA5Hx%2B4po%2Bw%2BM%2BnU6PpWoznYck%2FonSJBkt%2BTBmiiPEsfDHoaAkq0iV2G8Qg3Y7u9zjdzhR6uKZ31FOqCT470H56wj14AJbbwURqdrbow4EPlubTHNvhe02E7H%2Fk5qB3AovlWWUZnWftWScvURVf23r&X-Amz-Signature=f11517a5e4a7347331baadcf9eabcc7d15fe8fb6889811af7bf368f51463b617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

