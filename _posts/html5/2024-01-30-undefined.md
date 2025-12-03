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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZLPYFLG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDzCkbnjNYa3OHdqtMBsLC2%2FGQfMg%2BrcFMYNsfzGVPHUgIhAPZXW4QnVctFy9GXesLBSIdPC2mQ3ywgxwiwrMSvt1OWKv8DCCIQABoMNjM3NDIzMTgzODA1Igz0r6UXw%2B7GjWjmCp4q3AOrPbm5hTHhqZ25v%2B7ZhCBzddL8GLpXnK%2FNqGhYPCtvFU6fgh82PO%2FtOlRHYZDajDm%2F%2FhUSjUtmpUrNWJVlE0PKt2%2FyPcV0IA7Np7%2B7bO1AkHlNBfSsm2hfFntbrzwpFFXPpLcHniuVmSsVP%2B7si59UAAuC5rEFHdlwX4CxPfoJAKSof4XR4ijRP5mCYy%2FV3Xo5OZJL6KNZ74FPfgo9icJJvZv%2Bo91H5%2Be9zQgiGnup4YWeMt1nLjJB9GH99cuLXI9tAMTvLFCxvlhiJT%2B5c6SLGh18r4QVr7VH3Hxv6dq468L53NQxhpAfq%2BjyL3sqaVF144gmG14%2FXfQ1qN4UsK4tFSvMz2xodC%2FCHXyBwJUPBrB%2B6fZLW%2FsBaXKjlweWRJxpGRjl0vbANU6F%2BZ%2FGM8vWcuoLK1kgEY4bOAWM5XFIRab75HIBHnuzY%2B3cGCvk9KQNuuALyJ3MyhD5WRJOETylmrscD1Q%2B106GW6LJQikO%2BA1ROfekGAwmrULkIe9NZICRmzP4ugqg2QFXN9n3tgCnyjJvDJtGxVVvHmtHyH9Kn2eM54Cznp7Sw8m4KHlbbMWDFqP1PEXl8vyYvP5kzs6fT3fROqBzHlsvFCZh7VEV5gurpSVMO35P%2Bc8vVjDXlL7JBjqkAc77D2GYXv%2FwJUR1yJbRYImionpK3mvVr0b5oDOQdeY3sMp4Gs0fUJoj3RpREi42B0u8htjghBoySCi2KlFAlXt7VvdgIbvXRzZ0OmYlIvl5x2K3t4fuS%2Ff8%2BoOwok3OXqElVZ9tQGT7n3eM8CVPrl5VHfnvSV49vtBVfA4PkQk3hIZXFiaC0Uoz%2B0Naif9rGJNxPk7Dd%2BFgCqp1IRMCiGonjHBC&X-Amz-Signature=6b8acfbfe7c279ff8cf99a460bdf175e7771887fa55ae4e4c34adf13227a13e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSPSGOK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIFmofwiuQAC6D8jRriXGBpgr%2BszIJVM8pED40lEbRR2HAiEA8kcMtFT%2BXB8mTfhjrCWcgOBCvFKS4jjK08XGFKlabT8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFZ7RFTpN33DkU5s2ircA7qFJPBF%2FbRXm6nZcV4o5EhopFFGk8aBg%2FoA4aD1A5x70wWoFfAj2hMCOQxR2waf2eltHHzUaR5Mw6jHN0fVp8krrunuBCpLIPbPDEshFICzM5O7pNknsbSt77QBNp8NOx7OeIchiFgfM9jjMVUts14yqexfVId3Ic160ge1wWTAXKkrk6ijZk8PtcyKwXaGh7F9ajGRQLjeauEb%2FN5SMDIPLMZRyd0uj%2FUtxuAFcGXbDzSg5wC%2BJoaGd2DvCCeJae9JJZStSNCETKfCG7J8fGIIg7PxudwmGr%2BPb%2Fdxi6agLHdc0pslr%2FIHuZB3T6tBycVsTlrIVrNd77Wtuk5g0YWKn4E9S26IkMTNvNtAYFqKajXli381jFvQzMwRjfAEW2v07wtmWRHpfYwB8raPnih4zl1hODN56DvEZzY5VOBu5ZFYYt%2FRpgsQ8rQLQLYQSzuqtPE%2Fge%2Byvy%2BPdHMYM3gyRRWNY4fsyuo0luiAyIQMfQ5CUsECxTEw7u6tR3dK6O%2FsD7taUdc5p3T1E9i0%2FWMHOFfcvBrS0RiphjCsPJEtbwS62mCFat90qlM%2FlfT5NzUxH%2B9bCrIwNvYBMv1H7sZpNDi%2F8Etu06XxV2AePFWb1QLY6f5VhVqLuggCMNeWvskGOqUBd7P6VtviBvvAU3yPD4NbPzh%2BXr%2FcrylN8VVTXkZiii6hK4byUfOpaMh7fcwfcZJNGtuy9Jr0%2Bih4LcZJsvTnCp0q15SHbU3ELqVXtYhWxF1mSvdLYMImoBkEx3mZgSYEGHaK%2F4cQcmwD4JmWbR5lks6OefIcOvZ69aeYqU3Io6Ir2Yvyf1mmWHVdSEnsEd0IY0QXKC%2F14Adqh513ruq7%2BRjlqQKa&X-Amz-Signature=c7c7532e7b619e6f023b79a95065fd04dd39b86b298cace762e13ff856b58e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

