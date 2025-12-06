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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6JPYQVN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHLRi%2FptN%2BCrqWQh1f65aTUiPtXSFuNY1x93KNrK%2BT%2BAiEA0M4LRdx3k96FYx2%2B7eapnjZz4ROwJkzZ1pwCBI6TDj8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHGtB9%2F1E22ddJjOuyrcA5qR554AR9kHMWBI20pq8CTmbLkohuwOijK%2BR4OBJfbpzwrr0zf5hbCfdE3%2BsgvrZ%2B2uk0lzEqdA10opOcjriYc30T7FH5%2BFT5PeTB76ynBeat6HEKKEB1pI2hxuniMMllS7Id2%2B96FRN8HJ44bh%2B98bZi6Srz8XykD2yMi5eMRQVt6PLFOrrPOS6mlBdeJf3jVRCumtz%2B%2B2u1ngz3UXnU%2BxVnltUCRYwFH3%2B7hgBwOOmgHcoI3p%2F5mmwqc1usPR4Oo2dmJn6ATUrPxq2494CoSdb4wi6z90JXDTT2fud9j%2FotUV2WVkDDr59yfTedv%2FCcSF8ybt6Snf3%2B0yK6xkY5JESBnTt61pUwENUM97O7wfNx9BmwKlpsN%2BOzLEnFJMSI1J3eUl9LsD5aEkk00l%2BAx72dfLdh7MbofLQ01yckQae2B7RddYRKsIugGGcv9R3cNFCtl1cZIGKGjgJP%2FKZGfRh8pyEZh3du6tbMie%2B148Ya9vqhfl1WKIOngZ8Yk7tN3u2uo2F8XhJNiZd7BTEpphDPdbo2I8k4%2FCOeXnN5qVWBQzWkD%2FTryClIF70imP%2BFRIdeq2NtPRsx3GoUvDSjG00EAj%2BLT4%2Fu18ZDR%2Bagn045GP9GEBuv%2FAIWphMNHG0ckGOqUB7HHX%2FUScGW1Tg0Mq8MZjIP2DTffxVPhkIPrRW3zqBVHZHOF7Unh7M4%2BB0Ca%2B%2FsKcMVDlrO8RfO5jQIl3ox7XZKBbxhmvItsSG2CrIEuBxjeoZCMFOC%2BttCyP5EqR8JV4DjXvViKPRdIFovyNhTqXbTUfNqxZ1i3csPqQM9yF%2BilrzxVmjDZ1Zk2bXp1vz8mwYJOH8okUZQ%2Fmh016A6VcC%2Frp6KgI&X-Amz-Signature=974ae7e44e83afcd008d970f7de93296b2f691c8207b19beaf52e5f82181ebec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SHUDQK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeKlHcZmrmBWS%2FbM2ATmeIgU6NhO%2F%2BdZ1qHyo7W2yhbAiEA0iUszst6V%2F75Lt%2B0FqDJihUD1%2F39iCgarwAVBnVlAzsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPIX5y8h6FOVUhf%2BiCrcA1DEPXAMTzMOE%2BiHJMaWI42SCtsQ8mzc%2FKllggNZFrjKnykb1WQH3%2BLv9F7iKyEV%2FBnnROy%2B746nkVPcJ7Z%2BQfzlHrKIShG%2F7MYL44xWTBlliBpsAmjmy%2FX8V8ihYZbP63lDTSt3xvR5dhN3eV3q2rz7UGASp6ozdFcfozNwUQR2KCv%2FpzwoEKsjUI9kGOiIylIHwvBHmIVNu%2BHAoSB08dWccd%2FDDyLY4KRxduHjdkDKCLH%2FEx%2FLubM2HEGpSwZs1p1ja40oRja0KIzcOkGN6fuRDsjQbO2ad7zEIR1wQ97cTmZvxDNWFiBm3ceGNEpbIh0PlaBs5rG%2BVZ9aoHbxy3yCKxrGNuepREXOnnGZ5BB3hSnIHwYQoBlbeNC1dAzIgToKpH1EuR3pGmaWcyt%2B1yJ9oQO5tLt%2FZhSX%2Fe4ObI6z9s7jD7taI02fHlkGu5Vc7Y5MMsk%2FKfH5zPjGP5mqxhd%2BzLAPVQoJV1ue0Dh%2Br8cq3kOitDsyl3cjh4%2BFV8EqyypowBqGsSRKIjfDYH81DihDasqbAsZh%2Bi%2FRkdBocRFsoBfC75qCiEmJ9tV3Ro%2FrF6Le94b3hnideN76SUI0y3ShOdfnpJgllpNHBNeo2w1HVWW2srZqTpnBV3N3MI7H0ckGOqUBNq%2FI09PIXJuUwaf8oDiT0szaS21xhWMxh6BHRmZAj4CkoXVeoQN1W5UWD1meFpeDEA%2F32zz2MCwxigXmm0pZyWN%2BwdGta%2Bzok8a6HMjicOiqSoYt9wOn9r8l3t%2FS31peLoliS64DFRGhRd%2FKZzeWZi3l%2F0g11tcd%2FYwBr8TgsfwoA7o55aYpsITD4hPGV0TWAXwaMxw1sbny3MOQEKdacIq4AALR&X-Amz-Signature=af31a9145ee00e2542c7f7ce00a5ab00bef5c1aa1827b2b74d3b0617b1aef5d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

