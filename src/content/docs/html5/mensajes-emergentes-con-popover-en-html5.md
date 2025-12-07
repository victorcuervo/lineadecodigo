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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L2K246W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFA6u3%2FAh6rz%2BXJ7vm6SNeJm4yrxkhRnFv9lPFY9YVyxAiEAt5MGmllRIpGpuuxWKqBJYahJmNx04jpBiwru6rrXlZYqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeDm5mDbHx3ksU%2F0CrcA1WzqCzxw0Vsoi37JDru%2B5fF3N2faUOI6DRDNzG4d2%2BwXpkNSg9j0e3xC3xUQ%2B8BtHaobZUEU7WLcRKSgB7dDKCx%2FMtaONQPPvE1O4SmGin8Pcg5mtvFeuwLnIbKWCda1%2FPhOfWKc8hASmeUjbSzgstjK%2Ffs2TSZ8DzuOQCdMhKml0CngA1%2FK47UeCMXC%2FW0A%2F0%2FUj2sP0vOaPWy1dXPw974CDkRsLuLiFEvOIg1gli5Q2BBqOw%2B1Jt9lanv0k5QRPzYHlxlPnpVjQ52SDMfKbcQVN9C7o3kMsThdIxVmCD8eqnAhHJlUCbGMS%2B34ZGzRr%2Fm4TIra1zB2jvcbhhV6CSNlyeY83BjJDjGzGznS8vp%2BQEIuRRsRVqqABzEG4L5EeAx%2FjxTBMgF9iE8%2FscYoaqdlei1bD%2BgLBkr6vCVqtbP5zUY7xD8qqX7DrHQ%2FFKB6jwkJtkJGdAOqeLOuLWjT4B2Mk7cAr9AYmGgi5VLCDiKUm62frg4PE6As1b8upA%2B1WCJo%2BsvAjuGXfkm19sOSQGuTLm2JJ%2FNiyhDcVFUTj0LAN%2FuA20bBnD60x1eaqNaWhTbgoT46ZJtEoO8tBDIn%2FHPiIyDmFrZZErHHw1NrqoMKuFwMv7s2eeK94elMKqF2MkGOqUBYVj4I%2ByHfBjnZvif2yQtTL%2Bcjax8t2u4gksk2VujcDekj6AMg4WYIlP7sLYqsdFqGs60%2BoWTsdDYjkxvPrGk4ARxjeqV1xC3MCIo6JK2oBSVa79vvfsYo9u%2BsPfUXY87lzHZSESDiuRSdOd%2B27TM5ycq7mjSdFixATHQHXG8yOuaOczb3THKQ2BXjvT05WmPJOIHcRcYAgU9LcseEXNgNKCLETXg&X-Amz-Signature=b929e04a44e7ee96c01818bed7f599e6911cb3fe37a8876a4a1e683285c48140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OUJ2Z6M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkGUEcrXkWi74l1ZGE%2FXYg2%2FCzqhPGtCsiFK2zcIgC0AiBgoNMeINkLUS913uSyU8Qwo3ooDvuH5Y2RrmE%2Bgde1QiqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvdTiIwbVecEvVTIyKtwDjXoLsSD9p%2BggydK3TEZ2WQxivmKOKaNyy9YcPfhT3METxd%2BqgFf2esuTQBmo5oapGEFEElappqDrP%2BLyFgOcvswWIbKGPHiXS4uvZsvNOAYhDXtd8gCE3%2BEJatIauI5YsvT4YlIXEcahCqZed%2FVXHzbmKlTpJ5QKbkrMwTz7r%2Bg8Rvvsbg%2FzUhIIkgZAkCVpcfY08BaoNZON%2BEx5VK19BENSFi%2BphC3Qo0L89LG%2BF78eN7oD7pwYpivdNf6%2B4zwll6w0kikCp1HZpf3DFk%2B9PXoQ6M7DXu%2FYaAuKNqw1y8jYRlIi%2BHmR7RuydWunFhJL78kFI5dOCurVxR1%2F9JgOHWPnTc340sdCEaUwwWEKTh4AuHBatfpWCZISny12gtlyZLxwK5CRDdw1SViQnWVwXPmccu2iDzfSSQ0gFG2%2F%2Fi8i9INStdCbGYFqlT7yuAh3MWpN4jv4SkN99KJBtVsUY6dRcuTnscM8ZDMIQ4BGk%2FoDL7UKszZnyuM1PbDKdC44jitwjIlQqZoLW%2Fb6G6U6dzH%2BZnH8Oft%2FVKmJA8HBCHSb9Z0ewLL%2Fe9UN4EL5q573ahlqdX397tVuStbd9PPBMrGIkOHwcZ7QV5jJHsF233IcWH6LaVoVtPmtQmIwmYXYyQY6pgHLOSjYGyvvdPYdZFWTRxiv4wCEVKYNT0HcN%2F5XIggPLOUnQ16B3PW59IpJIAL8fK7eD8lE4L8sh%2B3iHa%2BDQ1q4rPhp8DVRwghZOLct1Y7CH%2BseNKE%2BMl%2BoDWT2QrDnZBuIGIzOmBGheSPvEQFs01%2BSvnaqutNgvLQ0nBv1%2Fn5Q%2FrSrbUolr9vAdCqn1mbiflg%2BqdESH56F2DC68QIUgdG0dnu9XmT2&X-Amz-Signature=4b9330747db2618559e305897f7c207212f310ce4108e4c13ddeca1667ab799e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

