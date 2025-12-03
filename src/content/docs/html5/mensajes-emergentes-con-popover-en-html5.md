---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6BGEGVE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFVYtLK3saUMSoUKp44rT7b%2BsHpuEvvr%2BDiglGTeeOS0AiBN370P4NHfwVVFkqupPSlqWsE7FYdfl4VbhQ1rCeBJ%2Byr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMf1qsHuobcM2amMpyKtwDl%2BCm%2Blyw22KDfRroJoOqOnST%2BlbloeVRozSjwGC2UcPyFSBBI6Z1%2BuXBcQmNqDQSVNLfapTLuv3nj2BUnoPX9Ch2jmLsaW109c0FOVS8L4tsV%2B6Vr2xIughG3WIZk4deVWczyenN2UF%2FLS%2BTwL%2BR8S4LFy67YA3xlDDLBb35Cyk4xsQZ%2FU%2B9SlMz%2BSuQ02bMJqIfRt8nLLYoyI94oc1bdQfm8pvIfaSYSbEaDNUsfO2Ks0Y8CG4J%2FHWwx2xS4OLP16dFSYOnhSXqL6EZPQk1IDwwkKtQEBLJKazqBdAhgPyUSjJ3ZS6Y%2BEG5zRpvrda%2BeuxTVGfDED4PoWtr%2BZqjDxNpmV8X%2FfYmrlZ12M%2B%2BypyNYIjLiX2vlW5QzLuWAwZL03pX8Gd8Z2e%2Btgj7v5f8wvzIgY9OsmwFW2bOGAcTMoVxQdk0kbD5Hgcyf69ro7%2BgsDPppUD9Hm%2F6SqdOciFMiM4VLJw2WpBFrvyPjGnPM0IxY9FDWwJLdRx%2Fls74R9cVoQCG6g151N%2BF3OOjXPnZOsEaw9jF5NCPHVbEqGzRsRSEsXFGcA7vmQ%2BRklSweQX6mHH6Baa69m9YRIT8S0EnIGYRUsyfzUOwFuQoP2kAk1a0GagcrLFigttflF8wp%2FjCyQY6pgECKXbOH9zlDLAnaVOPWv8yQEApzeYIsNBaDZohxivKrDck09OVjHbXFa%2Bc7jTCkm2mVseC6nJWTOmi%2B5TdjkilSVbRpLqX28gu4VplwZLOhSaVRPHbpq73D3AZk5jUWN59qSD5aXAzBKDrE4gJ9YSQjxQUDe6Vw7%2FXxuMXLLGBQ8ilRoZH9TbSp95ICMJSRbONeI8m7KyGqcj7y4xteRVc2xHSraGh&X-Amz-Signature=a4308e87ce2847d62df4b250561987534f699dc94c717116183dae64e9bbcdb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGTX22DP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIEHVBNJeBy340jFuuRrIVAuF3NEL3a90tERSWoNPlRQ6AiEArgr%2Fn56E6Xqs5F6p%2F%2BkvYUrUXaUqz5%2FN4SF8et5gGA4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGroTJWEIvx1JyzW2SrcAz%2FTPu%2BE%2BjbTVPodIzwoC5o4g%2FQ2uYMgv1o0GXddSaSHMZn3OM%2BzZiWNN4NEQiPRXPUO8V2kTPKd2ckAIEJR0fNmxd9BSngTMxHuF5oMG8bEPhCqo41j8aak%2FsOCJpnjWf%2BU%2Bjb1Ib%2BksRSnvA0oXI0UGmwMn1bKLLBV0vxGwQqBMIVkdIglrtyrMdpt01J8Y6M4ng8GsAZRlE%2BBp7X%2FU08H7Qos7YQv7qnwyPDjiK3iPwn%2BoZfNBK0%2BEhR1kkVJhig6htVeyAASkpayB3bvpZ1xxfDfIdggCS8D4g4Z2W2erK7Wnq2S4I3%2BDi4EOaltRCmh0bOsep%2FxMQNVhm9SLyx3itaGz180E54iMwnDiiquWU3x1QZKGu5VZFP0p78J%2FTX0V3QQxorUu0XFawuKwROZFPJtpfzhiLtH9rRBB86A8eSMLbajiEL8uPaLm7YwT3OKDs7TcmjKfDQWxjtR%2F0%2FrMbQe2Z%2B4nrFxGJ9NQ%2FAE9PM%2BROSuQRw1gLiokW3WFHoeTMevxS1PXvSJsdMfCx2gQflLKml9OScV9zr9%2BORM0lQV%2BQO1beJF5QW9cWsj5Am2C59LKMHA%2F04Hw5Bs1K7VVMQqd86ntmESWHKPuRmEYQJBd%2BCc1WiQsgxZMMb3wskGOqUBICE3Dakekp0EmZyc9RuvI5QFYz2ouebGEzpaMjN2OkXHm2EQpE4cRf1RiWjDcj2jbMZkwHAv8iYlcsYOPrQi3t15z2QgIM%2BxRkT3qIdOW1agwVf0kxin%2B2cnAG97CKT32vV4awQgpgvohfHIazj9JQMLiX7VnYsZ9R43kvIvFRDz5N9g6Ozggc6gCOiAD2oXP7wbPZwUGp2yHGJ9mes7%2FH%2FBDJ%2Bi&X-Amz-Signature=d3f34d9bd560f8e14b3a25317721666116555fbf14c335e6ef9ca0d3be3a5eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

