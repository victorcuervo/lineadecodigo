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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOSDVIBA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIAHaKFEAx4X%2BCUqrS5wWHwgFIFJ07aCFpGlCcRgY%2BE5SAiEA%2FpVZBbk9faw%2BiLeqC0V8LWRdr47UcjfyFv8Ebpn1YL8q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDJDPO28h8x%2FFAZPhGyrcAwo4qwQjSuvOD1gussrbWC6Kzjrx6YHpO9ecykacVoFvB0jm%2Fdr2nNJCxXfs2BeKBVf4Xup2ou3zSARVms1Nl%2BQttrJxPm0Guw%2FlyZeCEkxAlrVMCqo1EgqPM81ZqxufpnMUeH5WohY9dM%2F92hFyLsNgw2yH%2FBVuX1AOoB2Hw6xrWu96YWIjPm3lwYV3G1%2FX34k1z8dBuxBgoTrdOEQGwaxKh4xsS6xIBmlcdJtAllcrFOmowsBiloB90dOBqoPvRM7ZJgAoFO9Waf7ExZt98r3Du%2FcvQ3H%2FJhz%2FC153wxk9h9EGoU3SowNY%2BBXy8bN2H9likSt0qXwdBYLi12T4jpZcCfSxLqk2BSKLutSMgMPC%2BAgTO6yN6IuVtCcF27cElJdjzGVECYDAM0VhFSoS7kQn6PB5A6YqsFLcn9TOkxThEHNNWsN2FpurpZvnZjI3991PxTvtJNluXe78nvMQSz%2Fg4p7Gg9HtrGb1f6wIJH8O3O6caW3vaWkeF1pRHblW7gP6AlIYGKP%2FcYb7zMIhtQTvuCcrmdtv7JNFZzkdNd4TnWacCZGc1hwPC%2BPQjuvnTjNG0bHNeVhCqmUTj8uiHQBfT1ygarcFLzsDxQOJYlQswjlxav2rh7YVcJmcMIr%2FvckGOqUB4FuD51QhOxwDMRb8OwR0zwwXlTSI%2FukK8%2BETlNPzt2WNhk3xlJm3MMOos3fd2NpWZ29NaWLbQ%2F1fzbTzkM1GAKfiEZja%2B8Fi30cGQY9SCoECQ289lrSMzM8th2kLK2ltZynqAS1zivrDyLPRZi5cQHmT1G0muMZqhx3MDhsN8%2FnZYKatr3kEDH07MsUxKTh17%2F7%2BH7P1jbBGSTyrE324jYdSiwPY&X-Amz-Signature=b0901fdc577a698e2504b7496b6699758d3b11a90065b4e917d0586343ce71e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YMZTC5Y%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDGynVDu3obqB9JuLot0l2HhWkJFRdxeq7%2B9FdMKEyWSwIgCWHVw1iBhNp9EZLKKqHczuJKkoWBqqObTuqaPfxayX4q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDJSp0FZPPPbzOcooaCrcA5w5%2Fgs%2B4DhHyN412WCsi8QznG%2Fcb022W7Ch6JmK84J92r1P5pJYcpiFQw8z1XogSmFfKnYG1ciPMCJKFSrRgKp6YGksXb00l%2BoOuWOToyMcIkUF0cfT7%2FeInDYW3knQJlCO2zA%2FnKmFMeG4QIPm5jKZ56srDLxv8w%2BhjZcl5Z0ihoVr7rubPbLHEICBEDagmqDRREsVrmgB0MiyWq5UKeDVdLvXzPg8UgOnaMwtnRi3b2Ru9vdr%2BjSzDsAGXfeue5WV5xVBp3V4QUcKah2kdfLzklqGwR8p3PaIHbyAd98He6%2F3R1EtaSLIm3Tnjb2Bq%2FRIySIeCy85yx7PfgOfww3H%2FOjtkJ91RW8%2FJ5%2BWLL0RL8OHiLXbJPCENxHFuTAXbwW2setaby0yfV1eyGQgVRsU%2BUtl5vGTHDgtmWU%2FeUYvdtTs2r5KvOhCgOi9bWT0n8dGyFOgye0qOq9U5w852i0h3uABujEed9P6J%2BQn%2Fr4CxAEwrIVIH%2FKh048mCATD%2F6z7nVCHS1Zix13tDIcJ6Yw4dKaoc3dK1U2jTRNtScyK7zjFvUSzMV80XdtqjItME3atXshed0WVXzRgSKY9ySk1aZcjpYe%2BH%2Bv6TLTkdMxB5euKmYQEe2svY2FnMOL%2BvckGOqUBY7oOqBTZqgYyp2qpKEFB5Y72RD6Orl0C9MsbeZkU%2FhTDGFyvMxPQZmEfqk3FtmK5MMS0DOHeComNIVuEnt072iY9AXlbSA03jOebD9d1%2B3RrjjbDnqiERPoXPCmk6YFvnx36W%2FGc8krlTU0pbUIDIIz5%2BrLTFotmDpGGiAx5CLN78p1FbTpGv67AQ1yDYvR9iYs%2FRk0HjI6eC7ztaqDU%2FBYfo0nW&X-Amz-Signature=eb7d7d5c7f828aa9882d06a8f1a4e5066e954d68d8e1d73a6df9b7a85bfd6f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

