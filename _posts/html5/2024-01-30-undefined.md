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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6L4H5O%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCjVz%2B0VRpSkKRk93qmmMwAgDxtEeAPtFklsx2kaoIotAIhAKEBYLvLIyEa8%2BFRDI20URqnPY14s%2FsyH4dpK0oNs%2F%2FKKv8DCCsQABoMNjM3NDIzMTgzODA1Igy076msQ3y9RAv5TjIq3AOkHtp6BuSD1sB8B1pJFpjK%2BZ6KhsNkBA61CfPMysagt2ipp%2BhXhz%2BQSfdQBhaF%2Bpp8%2FoQP1xgUI%2BsPE%2FGFzzvUdtlI%2FuIFNsjOsbYtIgjqOnAGzIPUizcQQsvlfM%2Bi0XtC%2FXLWuUyIkRmRI9bTZC4PVT1%2B%2FcBlVbOXqyWuBkgvOvhMZgDVHwIuaej4cH4tIUaL0rMYC2A44O9oZ3MVnABUcUbKTzNOPey%2ByxmoKeFbWDq9Z2OuAJ8qWZ1%2FHHXj0i1syN2eHdKahUml6YnRcjpkQaf7T8DYWCgLNDg4gniEI3A1DRIAkTFw7e7pCUqRsqvztqLCtxD5uPOZ4MgFRYhgR6T8yld7XFmpPSLJZRpV46W%2BIWvoM%2BLHPYtnf3bf1JCXcqg16LKSIETBVd%2B%2B3%2F9d4AzCyqU5Z9EBaEZR%2FBPLHobfuNm7RTqNkh5tvptK7mMObLsvYOXxkta%2F1aHHStAdTHbcX4s3On%2Feyu5cE6QN69h9J927qMdo0n%2BGCu4cTTLO4%2Bbt85DWWDNLdcy1LicHOLcUmKXHlVyN6Zorvw10dwu7MiAH4bFeztykKGIh4HKhLYnM1mrpUYs7M2zMI6ugeJiN5YVcSi7EsnvpUXWGclgQNSgMh%2B8tplLBWDCvk8DJBjqkAUzfj58AyNT0fQcJy%2BmecFtDHfRsPATRQdeafnTFqAM3QRHKhrNZJNoP2LV4wMvbL4WbJgj9f398AWPjSACsewbxd%2BCSppB11t0JdV%2BYvRapJ4YmQH1rDu92LqRqGWevoR1j0yxEwxd8EFrTm9dbUr6pTe5KDTJTRx0cdKMOIZHPgYr3KOSp9ARxf5ri7Alx%2F56unCCVGvStVkuHZWSA4p6wIPfZ&X-Amz-Signature=3e49ace2b05258d1544bbe5981a883718c8e378a09f997e952f1cee9c4bb684f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IVEVE22%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCiwF9Y6HfJCCgmZCzbDJ1ITQqjDnPqyIndqgAhhkgftAIhAJs3tUoXAtjqe%2BoWEE7uMew9PVlKNsDWRsc0Ic%2FbNLZ9Kv8DCCsQABoMNjM3NDIzMTgzODA1Igx8bI6x0pFa4Z4O7WQq3AMKkdJrI3rxnNfiZwRIyWqcm9DFkNS%2FTf1Le3RxYnwMdfT4IhJdctkm2FU6ptNI6pn0OfWJBENxbiFL0OGWDBEYqQF6HfSf5sLb%2FsH28TJ1y5P5dHzLK8t%2F75VQ5IJLB0cUdwUysRTEilGCdLOR7X2xpTTR8vUjzQmnf7kDKdMBf5Kp21QG5So3Q8JYdSM4GITF2wllEn13OvuX0469R7DvruAoMEI98n4HleMK%2BU6gWFWO2TxIu63WpVs0XGt2yCqXJ2tpqLDVmKKQM7UiElP79Jz8uzADtCSs540nBJRbW4zwu%2Ft7HyEHiZQlAGRyNgR8agczq5qxtRKV0tadzIQ4lPrVaL0%2B7u5ikfAw3HXrygvTQgmXunrSKEo6h1Xf5OtjFgm0rTEU7vKLSQirU5nR71KSF%2BKTgUC6OU2XniF2ZmEC4wZGSv%2BYObJlON8ztfn1PqXlgiYI29vhXF%2Fga0agMKcG06Or%2BfWt3gyfBGoNNFiDAptX%2BzsoczmWnaYWfWM3UguXb%2Bb2UJULvyQ0bBXDbBUPWWoYmGrhkab67qf2ig%2FHcQL738%2FmYjonCoOJdCdbPn48Z6WV0HLIiuIbqoIOiWgKJXHtu0KZPAi93aQu3gxNhcXj%2Feycoq4KIzCMlMDJBjqkAZkPz2OjratNSUrwrFFxyDeSsMaW5DcKtZbC3kzRhDX6MNlYVtvriN1BOxJuPoFTECxNX2OZ4EyPj3RZySCK%2BqsXkI76NIdumCH2D4senge3s522Zhk8sF04Ao87jDMp%2Fh5qLdyqShNadOkRsRSG3dj%2BWSqKLBjd%2BLZsxfrAgaXdpbYQrMTlQGtTWyZEZFdbq7iKpxY1a2sK97awGGcunbn%2FadYR&X-Amz-Signature=2507d766126e77ac321872f976d9cd2770ee1949b25d5278fcb01618d2b78bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

