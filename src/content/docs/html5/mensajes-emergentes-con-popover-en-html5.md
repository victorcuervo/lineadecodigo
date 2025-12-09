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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLPXQAMB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYAikqgLADm%2FIRR17k4VIE9E3dL8eRRrmu8RIYQN2kagIgXite65eqpxLswFs1B8zqz84JOKs72Ce40U8g1tcqPL4qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAH6jYsx%2BWkwH8hZyrcA1LFncfbxDEfdBqFvibN2%2B1uN%2BzIYS26%2Fknw7TZ2pXIWUc9XY8%2FDfTl2CNkkXt2HSEnqR3P9lQTpOa3b35uZw8rBD77TVLXUzAPDMUl15LSb%2F7sw4XALpabR60JwhYc6GnfgUxmwG7ekTEJE7fYi%2F9zSkjP1Wum6LCwDrd1JijCnL916unTBBulfADxiRUhfKJ4706cVDc10ybXlBO%2FPaQRP7cOPs2aNMpCK5AejA8M94kRw0XXRi1Xb3vvEJXFlFdIs5%2BvOknrWP%2FF0EgVELYx4snFtLY%2Fp6kOLaMWd0jkesoyRzdStXzRkXil8dCutK%2FM1mAN3VlqWmPjTXU9oiinI3m3G6c5zgwsu6mbx%2BbL6W78jJpDAQfUI7KLQP7h0kvHmBtpSdGzKyJXtudSFBPlk8fEpmR%2B%2FnPesYXy8OAeXKSG%2FHqTcQgPZyzxVz1JNp2Dz%2BOEUEZomaGFsjynMzHOSDH6jfwHui4Gfz1KP7ikQZM8Nz80QdnT1gG5z%2F4I66jz6wwT3mxgSpYuf47K%2BSYQlWaxTJtRUepSdSpN3G%2BxkofGRKMcytAWW7bpt9xfXCyOtG9QJVhc2dRM%2FsgZpMDwBGIy9QC9RgDt0fTC%2FhMfEvy%2FBsBYykrDn60lpMPGt3skGOqUBrBMkSEC%2F2MrEOZ%2FJfD6GqD4w01ztL5sk4H1nP%2B4OhHU%2FhcRlue8FepTf0sNlWlauUqVvCWaFVz7brQnPQDBFCakBZlvZqDzL%2B%2BqbYxRJ4omAou46q3Cm9luxxZLWkJgd%2Bt18vOgK88h3L2NhJke8y4sr%2FOVh8H7fZ%2FQd0XUPwtoBetLmvM7TInIPMoHK%2FijfcOfwtmiXqL%2BDZX1F7s164uD5y%2F8%2F&X-Amz-Signature=1d6bd4f2b8ef4947b99df01e08624a2e547b72b551c0e7ce06c1ab2b0dd62ec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GE3ZUI2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfWz7jjTAZBKUHvHBzz%2BUnALP9FGF4kz0DHhIbqFjPjAiBaLfJBJTwt%2BgWyIC8MqJfw7VNm2ziMhOi1%2F5BsXdqBxiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJZF4rjieq2w%2FJiB0KtwDLb%2BIvosqaYvKAF4q1nLPFZySevyHIbiiWmGRZAb7yxaRSZTvNBU5LTXbQ5vWzrH5IZUgvhpZKVpXF176V%2FvE0PB%2FjFoyevjJo%2F16B7R2cOaw0%2BtjS8SlZiaRylBs84S83yAb5zMB23bgbG6wWjGBCAjf0lJZ7eqsjpR5kKdjvjH8PXNHEDnNeGrHItbp1aTvj1%2FrjreUliYXxQaxA6wZ0q5k2sxOzar%2BvAYuuSam57z9Na%2FvcL4c16mOrpkmHDdZLfFkduWRUD69FsjR8RrA2XMuYKfOjPnJwvI4Z0rc6ZJUu1jCSAuX8zjdeLE51uv7VMaLWX8hCFj7GTJ9UPyCfXz2GfM2L2LR7XmmJqiWOpkMIEIlww4xkKgcHBiNWIA79vSUFpEZxXeyihEeQmfAd0dKImpqJeP9qQ7vhNF5Kp2z9nH0hBY%2BTTzXCAyNzFlyoIIDBUhpbWmqkBMPt5BqgIepwQqRgpqEgrKADncT5jHv8Eb5xAOzdfhiHwVwIpjxJWFAHbGeSW32NTO06kayykp2fK1lErR01pqGDDCjdD5oG9DqMXpo73CtTdDVTrVEniASRWvI0mDEjIpRTB3u1Xi8MfYWe7%2BnWc5kC5M4sY%2FYniJ8qZisdame2O4wjK7eyQY6pgGuQ5MVD3yGXdB%2BtJpYVGxjGAkP5AKekte9v4Tkin0eXlJ8tyQ02qejOnbdOPXZfb8lhBNhJGCUyQSnlDAOJ01rOm7BcL9qW7mEJ1q3kAzD9fE6pH6y5vLBdGenNJzyPr7N1%2FRduJs76Y%2B%2FvQAIs%2BrJ7ctAeZEB0Wuc5FwZQzbc7cxTJKFtSr7DbG9zTVphJYJnIrT%2FjB1mrsY3ca77dh7lvTfmf2Js&X-Amz-Signature=58b9e0487d4d0f7addb957ca32529f7960271f41d2b18e1c2cb92c6870c46b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

