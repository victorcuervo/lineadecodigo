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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROFIV23D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCHmeUsRwqlm484x4GhGlsi3Ekdp8Z9R%2Fn135ePsNKgbwIhAJbHkH9XP5HvVPxQ6hlfFjztQuj3hZ2501lBGTtZ6A91Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzTcGO44Gf%2B3T9DDEYq3APFHnk%2BIif5AG%2BdmY0zL0xKQ5iHT2GIZZNzLqjBVkrB9Z6YWmbok59MgLCzFOqVAf5xoLr3epEicrVPDhdIwIJWPe%2F0adTKAOc%2BqJfBaH3d2sS8T4jbciBHO8iemCS7xJjsQBCHbRaSROgXovMgAPkDwX69dEcbiDna5mGjcPqzaZiq5vy%2BINSz2f683jTsdRtwziw3Jbmt%2B4%2FsphiVhtMZjgDODEF4ZDY2cSiAJphVyYpMEwWTKwYQ74vJvw97ECu%2BIhUJzW7a1%2F%2FvgSEWGTwY5KLJoNf7JwXwwj00GXwQF%2BO8%2BzWAZNmwoQWWYVho1evgu6IPN4OCnBx2LDoKJH7fPO6nammCbTladz1dnVtGbr6L8aF7c%2By6oXkrPMTy0umZE7Z%2FnMWtlyfEzft701TiHFPcx3fsOwPczpanci8xWmZ1B0FChZ3CdUv4FzssQbkoiNqIRJdjmYa%2BtjAorino4VXT%2FNZ%2BQIKHQAO6LYJ%2BNTiEnsqHx%2B9dP%2ByRhdmTRiCWjpEZ46Ss2Ce3MtzHF9WZuVm1EljiikWOBIHWpVY%2BQlKVqNAT%2BfgXULSD%2B68mmOMRISI%2FVAd1kRcX%2F8p9oyY6ohVazp%2BspOY7nIVUjyeI1MDRPcxPrwkDvKnfqjDr2sHJBjqkAbOpok7OYJ7%2BPLISy1DLUrfA1XdUKySGTAw4uUXNHKIEyFrmQaYQTnjCATk9nL7JUNrrRNEMPCVwZXMILtjgBgNL53gzS5bkG5GjTf2QbVt%2FoGouGMG4qRvpiH%2Fn%2Fnr6CmyicVKT2ygFGsxGyNZnXgTdplSXzJ27LaIWl5RUce2rc2YXlx2JuBE2uErJaOIQx%2BSvDCiBqF7uHiLdzJixVe%2BMzHV3&X-Amz-Signature=52bda41ce17c87cc83bfbea2e894fa59bfba99393834c801b6fd6505ec7c3174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOR47CJC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAknjxnYUlccc54XGUqLrt9hg91sLV7Sppn9FciM6iiHAiEAhPB1t%2FQGCNajpkru6QpNJ23%2Bjxi7PJfDB2LRLY4jwXwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDORgVZgLhjcwcfNHnCrcA8OOPIxRk2FLJrSE9vBmgZeqGYA01sNRODVEB65nVxiHJbVcO0SzWd7NdkenQ3tiP2EK70SyO4057dUpxUa%2FLF6YhEoK28D0pmtOoKDYeHRnW5YijvoditsIHoI2FPA2OSpV9vA8RGpW8YKDjAzH0v5iHznXsE2uqyqQPHO64mJM%2FSkQwwKWqnQXGNx2PGz2lD3UreNeVs3JUbzm1aEs12L8tYtpNRxmD8wTf77zbDL8CrvAjc%2BtW9LXhA9ghVfPR6CBH8z14vu5YBcW8z7yDw4UwAWz4wZNRdT50SBNMG6Cu95EPoLO5%2FJZ0N0vVb7zfOetW%2BeJCqkHwl2%2FWRVvxAOkSh6ReUCgpAsjgC%2FgEK0iyrLAmtLLU6qsEYpV%2FpxqYJIWf7mkfMBETpQzlZpTYmANTmi%2FmauHMAnSQc6l5X8P83Aoxh0pXj%2Bt96Hi4nNACORjDqX5hsonJF6JpGT62jubz7b3XmyO%2BjMsC%2FihChShz2ZJaSpw8fYExovFQsE02Xzk5ho5rQ4E%2FDqcQlvq4DF1B7u88CXr%2BZuE4mkTfgfS8zQpE%2F2cZkRZhSh7Kw1Qj%2BDCdmE56rfmwpfZXZ6e86I06ISuEYwroBkgeV3bmoyPVMkZgUdc4QqCEjekMInawckGOqUBwtwEYSZSm6hj9eKLe7jzjH8AoW0aFjoZs%2B6pwxBRBBIWUhrKxnFVZpebj0vnns32HakYWthCexZ3DCfBXnU6F7xz0lsQo43Ql8%2F2gZEr9vrNXr58AXzDYSHBChsTdZ1p9IyNNgRLijJoT7yFB%2B0bDHQNR054HZyw7Be1WnWVYqlcPIzzxwNPTIjD9P2O06JqWca2wkfpqNPiq9o97GaPOWmUeKAP&X-Amz-Signature=13a4af155685e8542a34d9d10439d7f1a6d36c8b42d86b3d39c9a64f75f4393b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

