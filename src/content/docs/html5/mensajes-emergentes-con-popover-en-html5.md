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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P6ZRLOW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDM6ciqR7VtCbtA8XJtjXX1zvrZpSPUT2z2A62SrBgwAIhAM%2FJ8ZSgM%2BtbNsI3E5IITr8oY38J1OQz7tmYtoknAft8KogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzirOxVFvb4A%2F2oeSMq3APUHJYMO87w3IhTsH8Oct%2F61WkbFMyBbU0hScyR0%2BDdksPTTSxTIKt6NHjSFEmBuny38wU9BfYney4vcyFNfZDokKopvbpCsNoeEOerKItWquSK%2BbzXA%2BQGnq7x97skMZmKaqJh8YR3iPtk1WTx%2FTJt4rTGOYFBxWCJwzTSg9%2Buu3vt9bwKtxpjafvllTNuWmKEczFeoLG2vo1sQxOluw3ppYlRLT%2FoxUwIKo72w2zj7tHSFVNtZ6az%2FhWiqGgbrQVe4dkkluCgaYIYG2%2BvAPA7rH2%2B0bJSHTA4WNSIyP0b0A8bgq5ffjkIwY7rbLHzEM9Kw8lwJZLKd2znt215ud3fVuW3S5ngWAwmNbYjTopyk369VZ3%2FFShsvrLjOqEd0dYkSRo0hjbuUPVQqe%2F%2FfrmjuhuLfi3vxXXn7XGQv7xhY%2BQSnzczkbE%2BzgYc4cGFibSGVutckIDA6n9rx97jLguC%2FF9bRxy%2BCzkXoe2XvLpk8eUzp%2FmiCgSFFvmG1nCl0lkKVWDsl0eQzmT1CFz%2F2bTcccUVk1ia4LKkcX%2FUn6qvtGkd2SJqEf692L5Hqo2xZ1bxGMYiE5cMIlcGcZp5he5rWtN%2B%2BOS5XDekrE2UqIebBLMeD8NeFC5iQieeUzCw0NnJBjqkATW6lEQhpOJhiO3qzuUoBqNWW4CC%2FHhEmxNx9CzA8RQNaFQjnjVyIkg60F632QK04SNXLpp7ksHRNZRpjQrLThvLIg11ppqS3It%2BOpLjb1CFQ3wcVHlk2dFGKDa%2Fs7Xl9gMrqqmOPLUM7G3mfu6EQDONVcDjIc5IhSbEa1G3RcoAYhtAzkB8ArPQJC98PNrw%2FFu%2BxdTQ4gQUkIyXwf3CqCZmwnni&X-Amz-Signature=d6f03f136aa885e2b80fbbfe705997d01d38852d86e177e2b788ca093628a577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSUWMBGB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5VFj8oC4oDKVq%2BxT4oyxeINVz2KmshHzyDphTRtBFZAiEA%2BmtLRvq4w4%2BA9OFD8RROnrYp%2B6IfeMZ4cKSjzr49CewqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZA%2FmRfXxSac88X0CrcA6fmjEsrG%2B%2Fm%2BfZGJdJJexaVuJ2kt1xRZZXMY%2B8bRvkN5RhVngCbdyx0EAtichON6%2BkRZ2dvW4Jeu%2FRq7XdTlt6cLBKE2cz0VIt7%2FTFZ8%2F%2FZayxSQ3vkK3BxRSJIb4bc%2BRFjcGRNioPnrACW29RVQSgTynEwOXwzE8kcncZqb5lAMzdqH1S%2BbtHTpdSzhm%2FEqAYPoseSeUGJX2Hnj8V0GDz1IYbJkaJnAg8avtazFt1xwBxgLmb5ij11K1qtf7JqaB5XuI73xZmRDJ4RnqSB2kfnbT2Ybir6QqXe8fqwvybLR1qoXFzC3C591blZZ41VnQe9EjU3tPy3zRFousk46K6aKuqvKhz8D5m3NQNfT9hBD5jhcFGPApfSe32QjQVzP33jXaWTIHmRHXW5vitA6tNLyFfXNAEcNOVE1CB1WRGW%2BXKL0cFp%2FfBju7IC9cOSodnIJc6ht3dVPnQQwnSiTD4G1aJRwR2u4A2wxB442Dyfq1iMkx0KEJ8Xkw6c7djBlFWEM0kvQYTTmUe%2FzuEyamE8Cb6Ye15MmHHfKo%2F9J4oNy5NrkGWQaykJKBDPDwNRkP5WqHgDZM3DivbL5u6qQIy2D%2Fn9roQxw3rb2vkB9HiRed1ykGtq638Un2EXMJTR2ckGOqUBU5sCxhSU%2BOe0BzT%2B7JYZoe6DVTvq9kbQnNVSZFM8UyaZaem95VVfcSLMAbSd6npydvNFmCpo9S29jP%2BDT%2FJt%2FkzDGER0W284wjvkho4B6dUX%2B0iRBZNEr69RaWt4qOGD8aiV0uS4UyGmzZlmudvB4lBfmO4Hr7hakgtabM3RPQXqmKGojwzIt8nZoxsA2T8C0eC%2Fsxv9ltCZvuhXiiXBpbB2f3E4&X-Amz-Signature=dba963174afba28309fe26e9548ad21932e8206468a952c17dcfd571461f52ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

