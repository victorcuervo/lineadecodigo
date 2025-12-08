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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675X5YZV2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkZGvxF0MDvRZTVX%2BKhH1Ca6t33gw1SmVLLjNUos8zpAiBsMiYEFyJpB7luLdls8h6dxKLtvcFwhRHx1MycQge%2FfCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B4EU647iO%2FD%2FoDJ3KtwDLwUIV8qqm4bAcpWaT%2FpvgZDo3p%2FPmH%2F6%2B3Wcj%2FfUht1iRt%2FK5GOyu5E2dF3APX3tWzJMOaIf6U7W4pUorrDhz1HUTqwtchK79X9Rm6a8ozAFJUErBPsoXTqatsCRtyhV1twRlHz8KZpH1O4BqU3QX1JuU2PpM88zBFSPQOVo6uWPdifdGleQlbBq3MLMBUYWQLnKNmCDi%2BWuB3jV4LKTiVUeVXNoQDafN3Fzb3CCrS6YdamZ1Up6V4YConG6lazED5UnR7LnVPkYw0v2IiD64RmL1btDCMFmyeIZdWleu%2FCSlAZ2eYfb8HR5e6y%2Fl2UhIV3SxS7nFC8UVHVQfp%2BqI6DILDQc1YZqIgqJLvOIIwhaNErmH2kp3CTfFv9qtNH40PJj5MN8X4G6y0NSpbpohWctZETWgZx%2FYtUX2QisgY0Rxn5S6j4RgdRa%2BUfh9camOopdUHKcG0lcerkNVJU4joQ%2Be8w0EhAbH4e%2BGHvYMIszNqaM7uNgrCfP767o9%2FG6XOBceccgdRKt9FF%2B5yqZoeDr2J80qUrSeY%2BZr8%2BfkNM7dBwNWHR4J8xbp5hq9o3o46tha%2Fc8gkvK4gccvlr1pxXC64pWxRIBcSUEIEDKNVtelVMkOk%2BMmt%2FKShgwh7TZyQY6pgHRBzfG7G1HcUURsBX68vpw68K8CNfuI5w0Hua7IdcpDLdS22wHqiVgeIgZabuJ0eopfDsTtsB3Rox75xLOIxW4h2QIuBoY3Kr%2B%2BBHEPOV5NbC9qr9wAmFpXZWaeZ0lJesNjv9mjdGUNF6ovlGasynJVPSmCULS95fIahnnm%2FhsKtoRRD%2BVFUq69WBHzpLzEddKCcRlDXEsCZN1DwXZlxzUs3SFT%2B4m&X-Amz-Signature=5d1f3017bfb8c3d3f57f28906b57ba1ad3878d7c9f4ef60f47a44f5a867f0ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4E7YX7F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwQSQ%2Bh%2Foz4fmzs7MA8X9pwxsmFg5%2FGjaqgp3UyFk3EAiBHlqRjQRAEdtZNldZkHlKk8cI%2BeamZiXnEuDosMro4TCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPGC84MJzWS9FMUgTKtwD8sx9yoGh98hE7urOH7VluwU3R%2BDCsdFdQawPMs8EgXLRh%2BAG9ku6dxPrl%2Bt5g3Pe4O6%2F2sMNPBNu4MygUOjdxFqMeKRMF%2BRVBj6Gvu8P4edeFhseSFpJ13lQWlGuDadQTzjkKKQaLwsoPeRnwIZkUhiycaS4YhQ%2FuNjb8hHylyQTKZWDp%2F4%2FmrryX%2FumEKybNxR33nvuWjtnT1Xh0OVhd5LR%2FamGgak74VU3XpxdHEhwVonDuEkzGOiNr2M%2Fzz5XkDEeY3X8QI0LBG15zg6d%2FFh3OoRWHNrw5umnWoT9E8UMMrDeWrzj8YjYBJEcdZh%2Fdgxqn8MHDolTj%2BuIWy17cXFt0tmMqgT07C0fpoFhWhWy11dBnzYLO%2BHvE5x775HGWj5cseYrGtu2k%2FscNUMcZUAJy%2F%2FUo4nbz1tuAhdRyNmHzSyAefHGA2mB%2BYOuf5ZGttxuW1edKaMNDcCorQmh1gQatsFdp2aErbadIgg8z6mz%2BgG%2FHgcTEdptLe4s%2FquUPXWxO2ualWuNOXM7naHXf2CoSNZ6yFevgqK6OuVYDzgXZB6POMXGhff2XtXKPEa6S09WcMhmyfiyBv6vwrJUNsyfoWm1IX6K0xevQwcMBOiqNxwkURTviS40XFQworTZyQY6pgGqcNtaI0Bld%2BXcFHsV8W96xgiXjCf4uvb2OcLrECcWwUi9eJl6UsITmX3yq3ERH7EQcPuty4iSrQI2yK%2FXVVSnbU82%2BGz93lLOPSTXI13x1bGtOP97iw7uwUL5LOrovXKj%2BRjinZLfilFEEx6UghDkmLo7t1xmTh6sruKv2%2F44WuTajxlTte%2FoJ%2FjK3Lr%2BS5M9VRPxlIp3oU8vkRqFforgjpKPXLf%2F&X-Amz-Signature=b1b7b94399807331864ba27b4ed3536f46d05d3c37dc88dfaff4129a8e747961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

