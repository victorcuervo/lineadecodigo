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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VKUFOWR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T114144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH%2BmD%2ByiLpmViyKfIoUdW1kkIvl5lkXlADDkEmmNXrZgIhAIfZif1VAXaZAHbabqn%2F4yhwF6vM%2FeYUo1ZUTN%2Fn8TSPKv8DCFoQABoMNjM3NDIzMTgzODA1IgwdK2os77s0l7VlHzQq3AOxBA3412BvmfpAdZWFav59UZTEbZbJ5aMLrxaP6mxZ6VcBhDoB%2BHreGqa0YiJR%2FgsPtr7VGSa3tLd4IN0Hpv1GYBGf1Fy2OP3MLiCQGeaqCv8pvEmCAB3yhEarAG0JlKDrj0vE519vVx60wUxjFFHdfmxSFRm8S%2BN2kIpdxxEABdxB4TrKFPk%2F4EAyE9Z12QPfkAcX%2FD0vwzNS%2FIc4XfEmAZmUt3fCxm%2BrgbZQtIHFFxHBX9%2FjE1s1XnX2V9bMoSJtQims3DWRKGf50o8FkvzKu%2FUoZ4GsbaveoIVRMona9fl%2F7FuFqgke95DkKVHdjwV3BwJ61hhJcy%2Fuv6DSkTJVDYSNTDod9UWCUvlr3sn0sVr44Rkv5XpPx0j2UxhaFmsG7KtYsC9YTcSUVLMHGeToshi0mB8WRwj2wwRcxJVOIB2PG4%2FnCny3DDToNHylXVnUJ4xWUVzSid6l1dpSCtnRey5iWgLz9c4%2F10LNh4Ere7hvkZDlfdqKgDOKmXcRZcK2pizmTyJ3PYLXKNxpVpwIXtrjbae4JHZY2n59jCo%2BiHB7%2FYjojAgLY60NLeQYwjJZrUXWyxSWZLjQ3x9bbrxie%2FAzKVKKBGiQvN%2FmGbk1urtKkBxonZfr%2FgDxDjD4x8rJBjqkAYM7bxuWXVjQWtXNRs4iMAxv8AW8dN5BuljE%2BiBf8Zsn2zOvBtJ8pmnp5rs9xg%2FFCO8xNIX333gWVk8%2FwQ23ava3yeSXWie5hKmGmbyHNTyqau5Wr%2BYZGMkxVsDrj1768hOw7GZ0GWabxWLU5k9j5bCOjEAwwreBjlBX7QheUXAclNgNv0c%2BZ29wJ7HwfCl0pVm47l1Lux1aL%2Bz7MCwEeFPNZ7Mn&X-Amz-Signature=08f8bcb5e4ccea185d0f8cd2c5881c76adae7ad4fa8e746db3f7ebbac1d4ac97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIDQAX22%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T114144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcB3wXZCcnsPn6p1ZRR0o5YaIFYhRr3ISRiInkiLcYIAiBWWO58e042B98PiSprNLorsBUfbm2yVpFMkzY6R8pK1Cr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMglVn2WyD5MvCslpAKtwDviIlKcgletJnvkarmUFLdfNXgZj4KnUsc7J9cbdXvcqlGalO0LcsEWWvEpDlXDtJX8pyh1bjQ2pPPNvEpTyrjiKajcmH4GhoL%2FHkTjXhrvKMKBdC5bAXeFYpS3byMTv3Z5Ja%2BFmCnBz25dxpaGic4U9RHMVm6T0lMdFaW0W%2F7ndffJawmUImf6qvk7qlkgF0%2FeujOz9exs44aZ5SLutpMy4054M2LeZFURPk36DLoxP4Dav17pqLtEnDDKNURDHCBVP8Zrj4j3V7IVP7FZWWAlboRdpC6wj6xhWeUS5tka21n1FxJF8szvNYqI4zWNX4EXT0SvrblsKZl3DyKkh%2FAKoHpDnN3eohTaxcMQfdvG94rY2oOnOSYlu21%2B4he4mOVEuEEqUYkbfe04kleGpt22ieJihe%2FiQ4esij3kJn2p9%2Bp0Y0aMtqVKW8m7HBx2sk0aaRZpSdezxp9iF3GfzTx%2FWskE16qgXguCpBjxY01Jj7czmeETayF0bWlYpMeCmcvq8uEIvqjM051zJ14%2BUGbAXxFMwroT%2FFBu%2BIiszsHDlfmNhf4T8sfqR0ayBUQ%2BpL27SrRPKwtGxIzFRURwYvHs0%2BUFaZpe7jwZdhdwq2OCwzURDrEzLxLtuzzIUwn8bKyQY6pgGhav1Y2JlsUdruhTmIr16nLPRSD0lShmSeHvnxYvoRLqPL1mKRw4hBYkbSb8uTXfYuuIQ2tpJ6WX8Xx2%2FWObfgGxqzEqlWczt4sB2iW7X4y7cdq2B1w4gMdRyVsKGCI%2BwZUlfBp%2FU3V5HF6FXE%2BYTMVKpjkyPz0TJGgFdyoSvW28hiOm1dspsUUQdBP9DqqECx6WMOiqrhNvCeIpTrZOuI58mogf8d&X-Amz-Signature=3e954f009512dfcec03541090c3cf459656d40eb2a64285c345b951beab423d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

