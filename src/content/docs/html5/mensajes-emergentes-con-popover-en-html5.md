---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UU5URPR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDd5dReH6dvRsrenE%2FEmJz1NmHMEYyKb0o4R2QsjWHVnAiAag3roPDUZJS%2BSDb1eaOPVSZhuYTIeGuq36jgXxqEveyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMFmK4QOL2GE095kvYKtwDlwsxPdod%2BnIfTj6fzh%2FVBTx4cu4P0ZS6R4Zu%2BD0dor5dKVy1DmkvMc6GcvgP5jL8YaO7cBuWydNCEHaKk%2By3VmlI0gQmd6yliM5iaGasv8%2BiQ9CCMkAoAdAxQWVH4Mctba0gJxZpYyvhcWeMjVAohozDG%2FGks6IecgKTXD0KpbYmR%2FfB6eujHof5aq7%2FFRvq5tZD%2FSZKqMc4EuwOb0Furv%2BlJxXHQiuQVc05mxP9KMTzfCikST81iHyFAxBPjGGArCWy0dS09aFInFDX%2F4KaHmsluNDKRdQA0bL8O%2Fpw2EEFYuubtB3lbbPvWlOAXj8TIPn7CRaW7f54pVpPqdCCj9z51PsUxNfzFLg7%2FApb%2FHVxwlahjZKDsTHBuvMULH9dVoiqQhWwSkgsm9B7%2FTxUuL90EgLdvK3I6ZkmfIdaaAXV%2BECsXxwM8wEyXofbGzcbvovpSXyPK3EBTFnaBlnJz2U3SSEpfAFfWXWS7yzb6pMQIbSw5pm1qTAT1nohLujzOUvXRhUdEkNOurgQXrS0DY1%2Bi8Ainr4aiJmmv2T3EM4wQokZLEMuk7Eft8wlGqIVk8x0dKVhF5viyai73vcurD%2B%2B8DP5%2BM%2FkTYeymLs2hguTsp39bC5qcpcvB%2Bcwmr3CyQY6pgHhVxM%2FzilhPz248K7r1uW3c6EgrzuUe2fbf5O15t%2FCKgU3qC4ZTvR7RpNS%2F5Gj5duOErfoe1uXhMRyajFDuPpHb5v6Xyak0hhzzw5KTLxt5q5Yg7WZPp1ijZRZoD16HeV2d4djmEswDMnGEzK3r0l3HYOu7KbRPuZEUvnkRj6pkjFZTTmtkUFVEl%2BrQhzRHhY8jaD1ZmQgKRGWeTN%2FQBajy2JMirpo&X-Amz-Signature=49fe724f11a7e890e78969d1c8725afa6090051bdcf79e44f82702eec9ce450b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU75MFF6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCdYmTkkFU225A6bCsDdDUcY9bAYWCDXIMXGy1p56CI3AIgGldlsUlB0CwSPsy8TwDyav6og%2Fs8DBKOaJo56Go%2FX9Uq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJvBRzQqxCVufM7FsircAz92LG3%2BQdyjniAwGt98j8ikxkaY1vlLxAyG5egmsY8VBkyr%2BiSSPWJdXUwI2cCoJYxp9IFg8gm2hew%2Fnlecp6G%2BCLB8LK1fgXAbhcSqZdLjc37C6Cu8oKAGSVqweFKrkWGhissOvDwN1jTGcHVhXvKl6mFC%2B9SmPl7dpCJpW4FiF8mRgVg0g%2F4YYU%2BVa8Q2kEkqT5fQ9g3HHy0tL%2B%2FbujODmJcOiB5dhHCisriZg%2FDfGvxaRWLkbfigLLJdmjWgTAxXKtrHyqacKib7LUparWE4DQ%2B4w39xCj7ztv6NwepbJob8MDJTaFA6ZDHsBcdTwHBGlEZuIAUDkzkhdywDAdqaARD%2B1vPE4YI29zwMbdstWe45BPDftjkMQDAmBSE7zRs03yVPmcEmY3JvuFdHJisLo9xDUsFjSE6NViC3H%2FGXesamPeGP%2BEsPEjdHL4M4dSJG2mSNJMB%2FAfdrdNygiC%2Fw1TM7CXSho8fwDS071kT5W9zsfUdnAnz3xi%2Bm8MSth3%2FcLjn9Zszn%2F4EamcKOovqCBfD3mUTKXROGl1PM6dTsvwNOXBiGk0A8ctcHK%2BT3OB%2Fp%2B%2FKOCPN4ho6zNL3RoCI2gnldWZdmS55%2BZTcvHvEfEa7PWycb%2FgMJPquiMJ2%2BwskGOqUBXjzQERIRgwMPgEyU6gGCRgvn2P0SM3L4Tu86Ohv4d0cLcOjMjH6HPL4FWhCQ2ytXo3fYfGOuP2qGtDTTHXysZ8cKVLOa7PMmi4ehEmwweo%2Bi9CNYyuwSJj%2BA7Pw%2Fd9yQD3FsHad93w8DWR7ZclXgy4iilDJyWa7nTttZCcFuUAm5SyNiJoKDXYDoz2dUoGNmVbYd4%2BSgJa7eR51sCPmCG3Zqt3PG&X-Amz-Signature=81e746ef0a6254bed1d9ca918140cc70c7b4c751ec0e4b7138d9c9867f694e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

