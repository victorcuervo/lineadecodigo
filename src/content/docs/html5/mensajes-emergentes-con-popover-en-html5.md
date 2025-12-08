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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3OHMPQN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMeR%2BCNgoRiI1DxfGx2CjNjpDxSIrRKMpQO14wEjzxJwIgId6FNQO2Tnc%2BZMTyk6BTTxcROTT08XAQCEjwNnBTCfgqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPowLh3%2Fnv0URZji5CrcA5MoWy1xFv2wvR4ycjikq%2B39KI1goYeGZmc5PtDEtNdb0Ig3piMJBGYEsJPnpPA8mbA38gM6oPLLsoUoTDTMh0YYLljSjWxxbRlkFyQzMS%2FYhl1TskqISZ%2Ba16rjmwCHDKkfQhh13vN6zQrgDscSmfbhBcnzZAmVzX0m6IvibSWsoxafM0y6TPjet5zX0tfiOW2sAYA42NpApLbVHeT8vAyPXXp2uq9mo3vyOjnv%2BIlGOCYZ8bPYn98OSK2tkpibvJsZecBKd54Bh9MgPcRo3yIrBb4YionyYsynhDgVHExL6INEizBkKTxF5rgXqBmz4E4Be7jzEr0ZMa4fVvYUfRnRrx3hK7goVJ3IEKuPd9bXjDU5WbPCK2iyE7gs9eLkdkXbccwKSv7rst18agELtD0gZVZepuwy6off85G%2FS34fjzHlrfzcYZGkgA8ZYXI%2B94d0uCu6USxvMCF14891oEQCk%2BRWCdLhQ0bHI7qbh0%2FTjDfn0%2BiFbd%2FHN0JuIFcvWsqUaA4h5kmLJ%2Byuu80Y%2Bwf6QVSsQm00avE%2B0%2FJAnlPnY5fedNovPlOwUvlbns6NrxnDOyw7bjh8sYxkkCS%2FW19CGmYh%2BMaR2%2FZV%2FGI0YXxBeFVmtTjslibgPMjHMNKh3ckGOqUBPTSRCMR%2Fs0wvrdRrBM7FD%2BeEc0HrunLQ7bHzB7fBSehKrUU%2BXRswU9e14vnHvbd8JiScmxVk9PeayhcEL4LNFQa7fGiD5dznQeLNEwwgzRGfnAROwUwn2%2F6E7%2BqIxYS176u4z0Tv8NU7YR72izhT6Ii1wjEWnjxGmbgkVFYzi1imbWpkAXb1XUUCQ8OiWLyBGmwuz1eTzxiUQJx7ep0BpLSSxRO7&X-Amz-Signature=17f1621d788752a41287ce120e9365e5aec73bfd646d9caf580132797269940f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYGHNN7W%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6oGJtA0NxBHgAgfs2ZIrcKcP3%2BdRrGjVVXmxeG%2FgZ8AiAdowFaG8a5Tui6og8%2BQTKCIw%2FNlEVHQwaclz3kUWhCGiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYD56tx7L8SbaWECEKtwD2bpt0Km2JfnItGWTIkXuJPUO%2BM%2F0Y6aeOynzgbLOSs0kaSf67fA13aYI3FRs3khW7Z%2BN%2BYTYxsyGAK%2Bp1ZmDX6GtM%2FuNsGPTgGy2IfAqJhNZN11e4VhA7bnEx%2BEDkV8%2F6KAwYT76qo%2F31m8NS9WNNCl7KEGJ61fUu23vxk%2B2zY818cXoHmiTgZd%2B%2BbX%2B7NitsmRSuZoHtqnaVMSKXxo2DWuNsMdr2xWPKJbv%2FkWL1pOHgIgR7Piq%2FOKkcmF49gTJTp4Q50acG15cT8U1NrqxMZFStvMWkxu2iqk%2FEBjQGBd8iD0njcjkKsTN914o1kOwuJdT%2F8a92yGLlYoyq%2BPWEctrjjUuL%2Bj47rBQIrdIk5a3ErFxf9AFowXjtJWTzITXeHwCmKt4OG6W8x6MWqxQ8AxNIUjUIHWgKkWjOReaWA4DnO6yUYAHX8Lp3proTUDicWtp%2FBHcHYT%2Fc5Ed9YBHQ%2FxxR%2FEu5guEhWVBWTuwooeeSLmZMNp0fExvu1PIj834kQIZ%2Bpn8mruymv9UQwYgz3xpczIgDkfnfL6EO%2BWsO1nU%2FwcwRFFpYl8b3l79M0nyvwecJNGDV8zBaBggWhAD%2FvSd2RawVC%2FiJzS7fVhneznBEOlskD8Wq4R0OZUw6P%2FcyQY6pgFfZD%2BErb1gt%2F9YwZeYgACa7t8miNEy5D%2FtsZKNaolLNI5h%2F4mbnT5fu6%2BMDJ0cn2mS0XHm4699Z%2Bn5sepmFGbI%2B9dxtVyDouzy4yzNehX7s8llBlk0ebjSgoSZaXVhgG4xvND6AJNNYWdj7w26NEZOPx6OO4xe9poWUXwFX7xFbh59o6X2sIq9cZzit4%2FYI%2FtA74xhAW%2BshpmW4tyBlUsbz85Oki9%2F&X-Amz-Signature=c631197fdd2418bee1318f323ce6af5c51fd6a9bb4f05d1dbad9477facf78d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

