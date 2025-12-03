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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUEXBLAT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T160823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIHBHALNvVBZTGUv2kCXRCTY9DdSveCn%2BofIcY75CzO4iAiA0wjoLs5EvDtc7Fv0pOX6huY1vLz87Wy2HztqBOoUtWCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMRaS4TNtTzqgcIqTaKtwDr3Dqan24sIthqr%2BRLyrPFg5Fxf5qjzs%2BKQUUFd36euj447VGw1VJDuRtKj2aC1u%2B2wajz1b5A97GQNACUc49xJIqhc8yGPzk1seog%2BlpagwE7B1J1huwTi0uzQRqustCp8YSxXQNyDiTvMcnwJ04ZtFGDwY0QuqS8F42L7WXMwZs7NjxWEP4E4OjfmkWiHICV1JiA6kWVPY%2BGEmZH5alkM%2FkHR%2B9byCoI5G1PmZS7LDX22EomSzSwwmjoMjA6HAF4daxwHKHlW7t7Z6heZrTb%2BFfYj7YFD%2BFsM6KajfFfrb0dFZfF%2Fk438lNV%2F4AYhzOymPw7lANUzAkfImLexYaLr6gW0sB2sxmyS%2FWsT%2BdP0szdFusajg5fJWNq452q5e2OzT2fikaPG5351vX0xz0QZOwo3Q7IxhGhNUhQ3IB7PspdzFXzJEwe9CFBuPhopAn1tBqpaI%2FwchvSK6LuujhvQ%2BpyMgcT0zKKgTZ5zlGLDQG99Rw%2F2gLjh4Ju0OP69wXkS2uPikejFMsavxgYrde4cndoZ85FHlV53Hbxr4KKQnL1rJ7%2B%2F0VLzXcCd7J1gorhPgbLP4p1EGQURlDs%2BP3M9tmmgGxYZ%2B97AyhzxBFHNpbHC47GDHQxkOpxZ8wr6XByQY6pgExntM3zJWtjss24tKf0StkJilmTsBVC%2B4SgwQ%2FjFKVqUFg%2B2VjBJUb438TcTw9BEu14PbzaYoTBx%2FVR5aAEXE0J75nhnJtuvFa7HE%2Fr4Kr0M7GcMbXgp%2BP8GeewSNhO%2Bt0DnURw2Ij%2FmhvX2390R1o7F8dTItCnqp7AC7eZyE4QIJPcV7VwvvSuoIsnzjx0QvX3Fq0EIcnKEEzcIBEgi82reo8Rpzz&X-Amz-Signature=1cb603d32e4ee13804b0b007b50319006ecd80d939d2f89a9581682398a85209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF567GE2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T160822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC7HWRS4GfAKODQ5Ox7RqxMDgepOUahCWwOrK%2BduFsEjAIgD%2F5a0B8K8SQ3%2Bqg%2FBvDVwpFcd4lsVvHDld4pJIsWGIUq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFXNl6nobtc7kLmFLircA0s1d2iCvge0m26b15ea89BlJWre%2B7RuXD2TT3zP17W3p31BntPtI3VjNK1zucF6eSpxBel7E5cH%2FZCNaCATjLJNBStjKsUohZ713gBlQ%2By0fPT60NT8RXuCHlB%2BWLZhBXiyvam09VAkxvGOyAg%2FI%2BUxF3Qr9xs4ZkgJZWI1r9mAhH%2BwlqhST3VxoEAEPscc7OjPOT0TIT9iMwRP6NhsYhAKuT%2BDpmX3VdBKVGwzaYubGo26IYdquhyfdJcC7onYBYWhIF9L6cYrqXyazY%2FlVZk5iaYVC8BsXdOTJS8MGWibNH5FbjtbIDEces0YfsF%2Bwbx3RWybVr%2B27oK4ivBRgwUgdX1tfddY1Yu7Scy0%2FFH1%2FPZg8pm9RBslLbRQE%2BSLh%2B%2FRLHizfDHcY1M0rh%2B%2BDW5KvyFRcZH1TUxyMu7FkJzfWxAUN2U5EdWXvPWQ2hdVYByn0qPFVe0z2rTRb7wfd1MFlHK8Vnh3T0TQ2iskx2u5CVDWaophdZWxIoONk2yyOVa80X4UidJ6qR6puRWgDAq4yLIYWnZzxpCwpwQJB8sKdvMjz%2BF5brQQ8uEZGNuuehCSmIwztQmQSTFUKfD1%2FAk7xp0L5Is7GrS%2FcY157nocGZCHVzQV1pKJiiixMPulwckGOqUBMVOI00heGJSynRCOgBXMfVEOpZkN%2BKdE4%2FzZ6Df5HVChcY0hVJg13YbimlifRd9XlpuWM%2FOZzrAzYqVRxvfU7625rLnfMI20l%2FTiY2KzHOQqrrjql4k6kl3vfNWwKxMvgWvjvBzs9%2FmeEOsuSD15xJoCL5WtH%2FBRGzjjUSBeI8oGa9rom9%2FQIhuutAFs0sVUiCwwRoReDw%2BuPSpa3Zhbzi653wu0&X-Amz-Signature=9c94de3cadcd71c1d19e82801d3770c996b68c3be2fcd603aac60ec8e65aa521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

