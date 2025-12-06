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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THEEXIRQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bn7osv6sIQlwICnnTw9Iw91ZHxhGA2jjq7mtnlPMQ7AIhAKo00Anfes3DpkJZ97n0MbPUGJ4yzT4VFHJ5W77PF3cmKv8DCG0QABoMNjM3NDIzMTgzODA1Igy%2F7lwNbVpQsFGbnawq3AOWt9tMVv6Qp4GCHmaUAlbFpOIpbp09lXdpT6HvxIpSaaRBcuxt9ywygj4sgDrLBdB3QiawU3w2VJk4latqBRnOQRL7Zfke1Ls3Ayk0Kc0pgqB9ocuJJQmcrEvJGEta37HK1oflfewNlExvitCt%2FWZUs3MqXo6vLY1iFyz2clTHjzfboOQNf3C3Rp%2B6ZhiJIjJbAz51y%2FqP9ONrBu9XFiVIBsmI7wp3FiK1UAsL0yw%2FNih8PGQXGM8BAyhSsRixY%2F7rtInZJePdvLZHVCgMWbQlH6IxaW4H9S7NAfIOIdOpN7QxJVZDKl%2FF5Dbe%2F%2FKXUa4wO65Vxwuvb7%2FKLE2v9oFpLhMoGpU7oLYrib%2BHTvKBMqaaX4zP%2BX3extl%2BvYvtNknz%2BkJJnmUVVKamxfeJ4aSmkiGc3gf0ni6aBdkMcTbE4xGz4g3HN2TX0E8MjeHYBEi5n0QNEoM5X8zoZcMh6YmGn48LAuB9kA%2Fzo6toI3Itg%2FLwlZQ%2F%2F974xicArCIcuOTUr97uCauY9DObv8iZFWb35QBBWLYfFhkXP8Xpy3AnT2ynqA9TJaZhgj2IyuIbwbRV2c3C7AfLufP6EMoFOei0W5jJL9f8iD3OqibC25j9wBX9cRojG%2BivCZa7yjCd3s7JBjqkAfefu%2FJv6O3w0wBk2IZJRiBoVlls0QxdVYCDSaE0AUpJoR8r15EZ%2BLYqWYdf82IcHnWMxNULbGFqpC6uzbiqNm12d3nZSFhyoah7GOUqJ8bXMN92ObMtTaarJJL%2F03%2BcVHzh%2F5NP2mWTUNLa9OwBHKHoeJBe7n38il49lzQ6%2BnkEAscsOUlm3bzPk2VNk3bZk3%2BvhMAo2x9tQwmkagLI9AfWV7Ti&X-Amz-Signature=9096c3442ed52b19252b967b553c69ab9b76765c94382fef82ad07221f1801ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWANHNMC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6N9cmqL7cePrYl%2FYc7j7ep25DZtcepakc8jz07UW5MwIhANENIotT57JfaPqtd0qyQ%2FFrjfoSeqnxamRC1oCyvY9%2BKv8DCG0QABoMNjM3NDIzMTgzODA1IgzoXDxR2UT74r%2Bvps0q3APuFFT6vdS7bZPXQEnYGKxJeNTuGz9kqytI3FNyWnTKErBY6QWBrr06m00FjVWg71LTL71%2BNA35F0BxwIfVfCMOy%2BrVi58V4M5Rgv4N%2Foo4gCh0rVwVjOEXI6HYjktsp%2FkdHM8Vtkh2Y4zScp8pyooDTMWVG8SG4gBfJvLbPb1hTX3w2Z8VzkKMTdc13I9v9E8PItRdQPJDFkoASkEBMftBYNeZJ0Y4o0Tmw8XhbgjqEzBigWhDkkx9uvMLCcaMptmwPw14klvli4j0jwzt1vZAQJ%2FYRAx3pt%2BSa6pzjl2CQWCxw2nkodRLLXPpAnK2uAfCooSvQvnyB%2B7jyrCWx6im1W7EmN%2Bz%2FaO98F%2B90QaBdxF64hA%2F3Jd0uAsTx8D26ii1ncknV2Caf1VUXU4cYQvEvPLIGflc5ZZv67b5HSXL7DoPPGNpCJeuUQS0D1Jda2wRUzCxJ2ofknptcmwC4CAYPHq5ocjNhoAsF%2FbTS3hHsvLZL0HktE45K2nYRmn145Xi6T5B82J8Cwu6lLNpaRtAW6A1u%2BMMLny0Y1zS3wTah89OVWncSIwTMDwwF3ePBQDLbdpJYjKN6ofpZYzNSQeQcxu7QxRtZfpTeYleUxbIPoBiEhLG%2BEDIRa83%2BDCK3s7JBjqkAVfAeQe3BcCAF20U%2BUjdEfIE7hebZi%2FwNiGk0O4lxePXdKHWJzNqiuI%2BqmnNxXxGZ%2B2o8KVLXUpanYBm%2F8saVCS%2BQ%2FZUdEw4Q7zeUliR7URPxZ2aH3PVILb5FvAHSnoU9cS8%2FtchTLGncMDsN67%2Fqb6bqQyBv0lKJbIqau8Oku5eiOu6TFAdPMU1ZZWcVdG75Dl%2BE44QvlFJmXGtzG8mDGu%2B5ba6&X-Amz-Signature=7eca0fef16d037af563578bdb99e2636a6b4273507236d2d758bb72cc701ae85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

