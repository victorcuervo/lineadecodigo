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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STIOKJD2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPV8%2B%2B2ZTfAsizS4oyUUt0V%2BX2PMvXyRlexJuyedYboAiEAnJZFhr%2Fp30BFVuIVru5NkBAI6P8BvLPBxhww3JigVvQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOTo8pNx4EXOj17RyrcAzqX%2FlgCKUA1SqTMGlvkyeJ09kE6aPcOmx4werGTLprU1ou2bBIrll9p1ZyHNksHWMZ4%2Fmy%2FCz%2BteuR%2BbnXLo6zLooUan9pY9f8yQ7q6xF%2F8EDrQvP1HukLTmrmy7kKT%2FHOBrE67QWKjnZ3hEgw8vmzc%2BrPXE3YU0cpQx81YNEiU6z7AfNxjrcFLsdqXsiMRKWHL2Uz8FsJ8IQmzWnytpwygSfyTDuxsMz4RBO6DBIkQLIOvKO5cJAhpRCWdmYnGiA7aZrPQrAuOqdKoRc4GKNcNfBYGq56J21eIF0VQkXuGr82g0K34WZ8JxIJfVSpQCCY7nR5qCiYSqQGcrrgzi8sMeOqIW1iMlev4oI9f%2BEcBFYiBra4i3EXJqEbYpxtPgwjcLuSMjvm6n97irvDLnsqEWY%2FDAXk1qamj8IhU2LwN5aAU6XwnQcgCoabPAF3JYwAP6R5sUmJPDb7loXKij1rPFLZLXrhL5Fp7aOj4jGgGSoG%2BrTbQtf5V8baCWqFnsVSHZHhsydR7GvNEkvLOurH%2Fp5raJSXtAYAJo6jmzXpRfuZoLs0MvjYbFZi7%2F5D7Qyqi1yPV37nAT7lwoqBJHh4cEKDBsaINwTiqxGOVvHJODBCcDN3bJQrm%2BHHjMJHu2ckGOqUBJRZsaltcSsH%2FsEkStGF371GTf98cYRMw2HKm4UEg7VU37CE3jJrwQBi0V5X3AlNMxAGoYuAWehr7DDvQNjqGpx2P7MhHPDwvSJiQrWm%2BA2KC2x8Ci5u7uji1xddscGXyALK9YDyVFPPNcj9YHgMynJl03%2BR3%2FeydFcULEYVpTGc5kFiFz5ZfzYnJkLPhwtSJQgdvbdRKAH11BbwZG6LDNSJRyhX1&X-Amz-Signature=5d2917a3f5bd0f210e36f2264501f79c1bfe74c4bf33d2e3f2637149ea3e00b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYPVUBIM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHe4QS6O81LimDo7jcItZLbxgsarrBQmb8kPnxwddW2kAiBrDx%2BIIcfAmD4%2FeH9SUZe0rnsnksS4O6N49R4YUzFSIyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDS4DM9BW5Yczq2nUKtwDbFyOWhN6Qy3QYnOCBzUEnveDLc3Oc8IWNgSR65CmhG9A7eBEomiYLWJIDQ9r0HA9PlQdQbmKWn6Mr4SON3UXDwbZz%2FGwKu6SD3VxONBLrTmaP7LIBvHsXds%2Bm4uQe0j1yxT8wh8mGYyyhBKLop2%2BHDtcuwAbMyTccK6U6nyKaRSUmbGxn5XQkJwBNm0yo1whceaedXHnmdfSm1I3lIOsCp5M4%2F3kUwqJin4L7a0y3gw9mBHshvT4PHIz2yD2ftqOIE5dYbo3iIWl73WfoDjKwg1RhEHRmo3DrqfwDLuSCRRd%2F9yIbSODzFyJXyAd%2BlULKAk4DmHuzJl3gDSvg2EMxscvLuoj3cSx4Br0d8%2FB3lxoYNKaO8yBuyyyJG8kO14L05EhF1bO41jjn9ood2MyxDlWr4fe7iTxz%2BJNzTAFil0OFyYje8COmgEe8CAGJAN6%2B421MlDAGGPocKMwxy%2BNTp7CyqaROSZlwhDl2QDHeM0jw1FdBGe9R12HCbwQ%2FGMWinZ6FOaEDWpg5A5yxtGW3HO%2F0PhLsBeD%2BYHukinrE0y42kTvl%2F8lvquTNBhlGdgpssjaJrDgKiLAoAK6JDU1PxbaM4YalEGGURevy%2BV8u8ujTHLIqEzZFxkDgLIwk%2B7ZyQY6pgFW1b6LP%2BcoYG9VhcGcK9Uv6yDPRSbUTvZPEbLQ53u%2BZCy33goFZJM%2F5vVEbAZ5LbsSmMmzPfMdhHuiEfgLfmdjMWwlGrDusn75uylcFYjIAvfGFvPq2WrwPjioYHsdymabBt3Nmys%2Bf0H9Q1cvoJGIRO2IpmOzRHQfJf4Q0QL%2BI3L8pz28WBl%2B2LeXlbVWoOyBKSwMtzdX1PLScyKZ0kH7m6%2FY0TA5&X-Amz-Signature=5d871078afd8c21df9aac79434c6f7656a1b3d411c69c6e6f7637efea7002759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

