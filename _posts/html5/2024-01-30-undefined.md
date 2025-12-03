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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UK5Y6CH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIB%2BD6BO4xbIfrDv%2FTBSTiU9E37lwKiZ3ue4WEcZR4AydAiEAn6d60EUz9BXTs9vu0JTut0%2FiYPkBzLEsIiDt99DDvocq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDLhzB6vCHl5N18DhyrcA7Adoon00VGTBtVRfYEOFdW%2FriUgRKBdAyMCT311lgnK6IpvbaiHGG3sK0rOx9MSAB8GEwM%2FaCYCRlwU8q2WpwN5CkYM8TNqwzsuwYb8OmsoOCnNk2gjX7JKeA2c%2BH%2FtfUneROl1XH764SsMeJjZKZT0rTaK5Hd55jy5z%2F%2FsIMBCYQTy5jkAfrBzjg6wcvf%2Bzj0S6hYz58aoI5zM8U1yZjrRfS66MHiC42Tra2G6qWqJaUYWiAvpmxIwiHKpBiswuNqJVCHvM7pTfZCkxdMPLYUaEcZ7ipXtwY7mVnOriYMew4AeVe1PFsdSHHhL6338TWldUG9XByNy9rrsvrOg4EUoscUNvkyr%2FwgOnqEYO5sNuvFf%2FLsoDuXqDqV5qU1KVPEKsNgaNriJABL3RoJf9ssWlqF9wFwjFU6nCExmu1RWx7TbkBzKvoTTG5ksJ0G7y05T4f9k3apeZ84bRCIKpbPbcDuzv7ivXN%2FIaGlb6O1hLb4jKV%2BlVihurIKiWwFksHtfK6Mha4ewE7B3%2FgFLkAcDKsgT85t2UXwHiRLCwT0%2BaH5WUrrmelR1LISN7hMvEofIgnyAl5ihfN250GTSoiFhp%2FDMPfq4G9IueKDi0VqqnTbOax2PdSfB2uD2MMfawckGOqUByDExDXuFtmSfp533dXd660piJcRV%2FgdzEEGov8qIWsl7AxwoY%2FKA1lfVQA0RVdCxTiUmdGuGer4Ikk5u67XusTEJZ7icR8mUjF8gH5qSF8Yb9PoNK6P2UGb5NlrCqQnOek2DvbRn6ROpFHwgFWebn%2BAQF0WWc4vGxCK2pWMWMdHrZlv89XSo9McNX6wHX3EekTDNES3CAdP2qdcQl8cmF03jeWQd&X-Amz-Signature=5142f5eba6553c35ceb28eeb4650287dec0f5685092f598a2f6a8699fff1939f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NIJQ74Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDlAhLRAOeZ8I7nJiL4Q6Fo4Jv7J54whKsQ8osJoyEcNgIhAI3C8aMIADCE6aPO3s7wHpd3rdBzyKA%2FKq29yIKLMQ9NKv8DCDIQABoMNjM3NDIzMTgzODA1Igxkhl3k%2Fb2O%2FMvW69wq3APUxnuGGV4AhR%2BHwuhwUrHosh7X6wy7Ap3Rd9YFKu33yZB2%2FHO4UJs9O8svwOLMCR0Mqbs6ZITrIfpX2%2BLGl6oupCeNkoaANDR58WrWWFO94BpOkuXM%2FxwF5vPXrLOxvGzntiW642TmiU64Uo88Ek34A280RW%2FwnFOMXAnvsXIJ5VM5%2FPBp2onnl8ggkBX0pqMrtMVDwGCMLFzkpNzRcIz8canigqB9V0oeyqn43PsCRs0Z97atihQIROYGBWnXwfrE1%2FC%2FIbMK276tZ0SyhVzRT14KjdC66ViNruxXSskNFJsMMJt8irV1SeCK%2FZV6YTyK3ZqtrRiPZRdrDsw%2FbDJeEzuQo72A%2BtDIRkxg%2FPRAmHtmkFGteeoDLSGbKMQvPUmIELSyKEe8s7G6hiAeTnkrcV5QAKGYdY7eclnNXUzSJ4VixcYQpusJ%2BalS5wA9CBRpFjbI%2FNxL51jGimfvhtYMGIyX1sSM1ivfgqxW8Uk4HzlBaTd52ryGQN%2BPGwCP1TSCDsPvsKlF%2BqEqQ1snvdk9H79FqO4PzpZK3pc6IU%2FnfIpwzjcOrkTZpb1y%2BNng%2FZF1Rv9zfgLaseCXYOrGTtnVE%2B9RyonPwAkEOsKuFtXUyXcaRV2xxpqLiRE5OzCc2sHJBjqkASx%2FFx1KCgOz3FUsCi8cV5%2B%2BAsjBKVfsxR1N5v%2Fbtmo5kl16Hb%2Bh5VrCnuCNfBidwgZ8qjIugqOnPcP9cznaVo9ahSP8KgJO6oGZ25qe%2FxJwYcMix18D7skvm8PA92tKRPyu0O8UJ3w07F7NoBa4msPa4AalucEFw1xiRBP9HoexjXYp8WG5IznXpmHOTXlMl1GrO6nGdbNvcvPwePs8jmRXqzZf&X-Amz-Signature=81b2b27d1240b38fe3e057d967f7f0537e086721b50cc131fce623db7928c1ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

