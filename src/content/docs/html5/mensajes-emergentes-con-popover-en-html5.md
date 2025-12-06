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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJBJCGQT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQjrhlsVVDWHXZzkD9aVKSU%2Bh9HCtQjCyGrcvwKzNWpQIgWSv5aaF%2FWYnNLtYsv8O5YM90SenoHCyGdDEvSnXaQ%2FQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDlARHmwFrJKcUNHkyrcA%2F3oAXUWScPFsvigs8KJT1%2Binx4S%2FAS72WfQT0gwFaelATlWYxicmrPagVlqavi7CSaDfk%2BGmCiCmM5Hw0zTk1b4qlZ5%2FofhPxnPFtJ%2BAaQDchUPfqjVXrnnoflArFFzmRAtiEzI1qvhb8BNL%2FhOqQvuxLPgXRSeUbKukEL6lJTbevkowyVCQAmQXjaJAW3iKqhAvJuvzmV5zXodmdrNhEbHZpNaAaDRWoNB36UMp13S7eYiPUJKp2yt8o7yhgiYqzEhabRZJMSvYO0FJWe6dayH8x1PYDFsBQFMPaub8NDSKY%2FoLO%2BdSxoekP7Y5GshS3cfCXfW0pMjJql0QKNLuSlycq%2B9ykYF1qNIjzkfvd%2FKs6UYvN%2B0jPyuV1TyEZU9RebpUjFIEEtSsBntudPLkyfPOO7gH108n6utPS7yHl%2FilZd80iMGQLVygNSCKI31WKM%2BxTYTs5uGiU01i5y%2BDc7Dh%2F%2BYwzVfMCHyt29Z%2FNCNrmSbPB1NPoUSylZApW3J4nj63qTrusqpb2OzFSMADSyp%2F0zxgab%2FNx7UMoEYCJ9BsQ1kpxBdJR%2FQrWFtcuWC2jpEJo%2FpEzynwV0ZBbnq5FaYT8dXc4awDLNv3DKXozbSawiImG1wa59NAbLKML79zskGOqUBoZ6EjUIqHJn9BFb%2Fof2D%2FIFQpYcq7izDU27pU14ABOMQNt%2FY9tDO2ikLY8dg8Hex7RjPnT6%2F7kKOmUib%2Bw58NjiMwPoZ4A9CofZ9oCrHiS1w8h%2BmZVrqG5IFoE7vaULQJSNAv7nNZB2dDQeRjchtQDN0MiGdzRI2QRupFW2EtBUZdpnI0dMvU9aCRD5QhOglQ8E5XuptoxCmeqEsPQaQBgnPeQJC&X-Amz-Signature=6efd4c8a59cf34244afeb97fe013c622d98e25bd2cce4558939e7ca6545c9839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZV6K2EN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuOIaMpPRBmaXB4b6PAKixlqcejKU0i%2FvzbprEYD1j%2FAiEAhDOPXBNHdss1Jl4VXb6YJ2Z58Fb%2FA%2Bx90NsIQTc%2FtAIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJPImJxzot48iikc3SrcAwif5NU7czTqLqusCK%2BBmLaZUPOFqEkUrkvd6Y39Rn51IhjaWpAdLUqRY5FIqgtBKaaR0k%2BAZUNA%2FVxY8A4vSoNLhwELwSTcr79n5i326xLWIZrphVayszRoIGvubZudQunlEsBpKpPQEyvikzDKd9jvj94DUKvYrW5JuSIO84s1yZy426aZ%2Bl6q1P2%2Fgf%2FmyfrFN7Xbo9T3khr%2FzFgDs5F2pNLYh17oecY7ssv%2Fw2x8bv8ljRy22MKUBVk7OW0IpcDH4jbsNsC5glsv6sfzChQg1z0aU2Ukd4CL5s0NVcSJoPFuniHBXTkPQm8TmktjkzHftux2SzFs64gwORKjjohM6%2BLur9Spe%2FXQqs%2FlerBk1JljRVizgwqF%2Fcai6ewPrns6Bz27oZw%2B3IAEatt6zrj0mlgRp%2Fwc%2Faa5tPmU4xsaIYnz1g%2FeZIQ0nOaDjk07aMiPIB5UwbKl0dWRC%2B%2Bc6LMjMtXt0UdLN%2BSib7eFpCgbQA%2FAZOV4hRcIst2e8xOzeBS9aYltQrdrj6lxmBP5MA6Ed97YQXjipLJJgz4RTrM8rD4zI%2FcvNS%2BSoKZIs9dOB1Hqm69Ny62D%2BZVcAfuoX44RC4O5cKlGfhHkTdSUeZwwU6DcIdpX1JixmICRMIf9zskGOqUBeWhKDgMdDKYreZa4kH98%2FtCdf6LWwzw9oRlh%2B9fi58SY%2BSvd%2FBNftON%2BVG3dKFPI6QygdJPM6Ka1Iwubao097SKnBq7NAvfbMqljcqleWurJQc9i7yNwcWxTB%2BxHz17HFqFezSOLs9J7qnuhLqO6CvozzRtw2zCJXAQ3h07LVEO0n6zihy5%2Bp3TbrA1HoxCQ8IE6aXj2NcWOML8kD%2ByfsSmYcWHE&X-Amz-Signature=ad02698fc6c0779c9e2df33923f0013ae2d27325ee9209dfd68cc45df924a5b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

