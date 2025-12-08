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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PLJ7UCW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXop28JhkVQJrlzuFK31HkPSSP2rc8RfWDa4N2YSxflgIhAKqsK9u1LIhJFpU06RYP5uBqfKPuqrZ1V97qwVAL%2BAKuKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw119RXAfLjijgRMH8q3APm7UYA2bt8wDUdjLvEw6kfjxN1uf7YUg2VASJV3S4SROU43r49WhwcPQXmh5UBwHHZxXwiFgYhvbu02nZXXYSR3jHmiuzGNwsxoezyB%2FjPO1p7eEeK%2BPNqVJ1GcOydd3GGwXRq1eBNgrda%2BYr13fH%2BzZF5%2FbW9hm7Gq7qUbdClvoK3IPzQ7Dv22JxS5OSuVRgPqoVqnvt9JVWmenrN71HckPD9Ih16usFH8xxHpygJGsoAIVFrEAH1SHLOYXR0SRG4s5xfUlFSHDVtoCQqvAIxBGGupHPiuh7yMP77iRY8Bq44OlnBLqAYIJPcmb3ZNTWRU%2BXRhh7yaJjdMGL7UvTMYUyUgq6kN8cXvpUCbB248cqyJPB8%2Fy7fiqoBvfjdW66Q0dkHPE4hjEMcvqfF483Fh8lxrCo9BhUYgRw3w1DI%2BW7wsRxRRtwEkXskAFfW4go9TnwoS2gBMLv1wIZ2je951Es0ufvgE0QpP7iNSTYjk16dwTHgD5blWHTGu1IyBJ83%2BVrXU7uenJzOKg1w32rIUoFTIk2ozgoBbB5XXt3OHvRyI0TXvFk1kALqS5wAwiWGDlTbn1W%2BAUdbFZy3MaiV9apo7RcincdapBUZzBF%2BNbxUVxEGkXwxTkzYCjCXh9zJBjqkATmszAkmrEoNOFjT1kOcVS23xPElRrH5pQbSvOD32LkfawTgxcIoUBwgZwMTTs5jJ%2BYQbmE3%2FzedO%2F4hWBMIq8co1LaWG%2BSvHVfTR8obWL0KgoX8W2tOmDVm8GhWYcdV6WOCwBfcyZkIpVPmK6lVMNFETqlmKnJyzANyVcT7TCbbAasYIXRqnWNiSoOTVjz67BeWFGzenkpCWh%2BBcMKl%2BtKMTPWh&X-Amz-Signature=cae2cb84d7140215801c891839ad3699ada87aa2de6c68002e865a5bbc695637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU2TLVPF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgNfeIGckjOBkdQpns1DLXXCMaR9Qjygbwxg%2F9f2POZAIgLzUluBBuoiujkw3Co5DxPwruaNllMzCe66X3S5Gf4wYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeghko%2BYh8FBwjhKCrcA7RSi977LZ%2FrolZpSXPZLNChA%2F57%2BFLiaU%2F8x80mfetxmofYoibBmQznvaXtVKJTGeTKNROsQ9hC1tTn8Ag7lPBTFCEmJ2xeQ0WKkoqqJ%2BtjTo6JlByy7QZ2FzqhPjxgUmWKV7c1WiMeoSxYXac1DVMgBHWAplolRrtl3Pfk%2FZ%2FT94yDEpDjvDTLZsxp7GwFtMGvqMfxNTr8H3vrKeHSRF6LJGs34kDdPWry5YXrOisdE7D5F3z%2B7THfaJ5qn%2FRb7cRbovCJXPkfu1Jn8YEnMosT3ikWKX%2Bi0In80Xdzi0iaID1QFAHb%2FWP%2FrG2p2T46H5R8E8GLR2yHaEQO0wIs7Kd%2F2QwaDeNSzczJg1gv4cuQpuNWfyoyrTff%2FbnsqZeGuMC%2BKSi%2BsEDSwNMXdAsDzzAxAmldvnEr%2Bsm0NltL5iJUR%2FbHB8R47fwGXulD3VnzkUAt6O9S6bvlFjqxWCaAGYxfYJKAb%2FcDJLucEL4D3FneuHKB1xCfwjg6yaKJ2f3ARHUc9pAOp1SJ9LrXOWLZbeGMWgGjFVWXQ3JJwKCGBakm6Di9aObzvGHKrOI%2Fj7Z%2FlmY3TN%2BypWLDgAE0WdW4wPvtWqDNOUSCY%2FJrGZUt5XlxpAJiNr7U3hvJ5NWsMOWG3MkGOqUBx2tVrvl8C5T%2FE3s%2Fa8zwOzn9d71UOpwTWgeuwoOks3751Mifrc3i%2FNLOPFW1XfZos6FGYL%2FH6OPocvFBL27QNzgMpwnOP1X53%2FR%2Br6CR5t%2BqyB%2BTM6qwQf82AK33IOUjmQhAOdzSyxWxZEeVNJpZz%2BPqjI8FUdZkmXNYfQ0c95aD1hr09D9zt1LIY1cd2uifyCoImkoxGeabEldD3qmm%2Fn0o%2FIlS&X-Amz-Signature=da50f3eb844ad4fef93dce5a5d12b97027a2e6e02cd53ffddeb2eef347534ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

