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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5GUOET%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8ZbMb2d4K%2F2FrmV7186Ls4Fl6NDRVT%2Fy%2BjlhBIQNYQAiEAgAiWhI%2FrvM%2B3qcT%2FdC5m6pBJM9%2FQG5d9XECKR0%2BK8kgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmuebEs7fD0D05m8ircAyWjJC2rDtXF0tdaW52VdRNAtTFwUKqP2rhhiDNyPYgcnMS4erB0%2B5vVNG23hbYsoJQdcbnhBk1jCfGhM0QO8GIvkJRqwDeMNhEqbyxQ1zosDNyCHyFycggT%2BLVBt6yw1TQOZIL2aQYIBc8EiAe8IHKUkQ60QS1yq9cAcaJaTn4hrEsT%2FGqWluRJbIf%2FADRfqZv9bBvqDwlH%2BZJOF7mwVNwmhGxhVZ9ZMMaV3WlV4hv7OUsUgq6HQul%2BsiR6f985RaF%2BFU0yO6G14OAVQjNMx4q17wLHzfrzEJND6545GJwV9xM5Gk1UArbLFKoUnoQrSyrYURnCHNozGEgpzlzl3ILa55uCqJjY3zgQLBaEw4Yvhip34YcqGbxeyFDDh2ggBTzJb%2BWDdzhZEVVpSzy9KP7o8CtfdiQGsuMgzQ6NoFo0ek9om5diO%2FfpMg%2FL7p42jpNdHSMTwa9m50lGWTbbioiKI%2BXQo3gSase0E3q39oTW8soNLWM%2F3mIPg321lZu9Hwy9mt2tMvsL1iSLWLrkQnXcmz06gTfAzPhqN7ZXjgOzE0ejU0nrh60KZ7IgyZhA%2BKPQDbKjo8%2FGD5%2Fso2zGNjqY1TfIB%2BGA1hsKPFLNVIbWCjnx2cB1m4UkXenIMKqf1MkGOqUBbb4O%2BmWp5Y0SS7FgF82pO3agK4p2NDA2zZkEJN7FK9JK6iaPysfR7aaRaspdCFh4%2F84LWLrpfCfYFfhixX7jQhwVHbTNGPawYluL7970r9wihtut9CbbCFMXLaIYspioCxVLWI6YS%2BvohGAYKZsct88gchibi4Iq1LY701IceX6AdnCsOKL%2F%2FjLwBiZfsWuwVCVVMkUkdyvXFJ0kQCJ1R91pnZ10&X-Amz-Signature=b498b361c7ffdeebc293bfc74cac63b861c2d2d40b1e32b5b611be1bdd2adaa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GXHV3TG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS2OC%2F%2FlwXTtgXZEywj8oagk25fsCTfpRmTrII6PKpqwIgdd41ZHmXCoI%2FeR1pKogKsOfK%2BB79EE%2Ft%2FDrWOxTAcR0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF797kCYbke1VwHqkircA0kHVR3Ky2hHdcSXMcw%2BSL33kmN0obhHR21fYxsZFn86CFzreyEUpPFbINwteWzWUmsYLPBALCspoh8r9feSateavvv36fOQWC25OqaTGfwTY7c4FBYCX3IWiELXV71%2FTzmJ4vmDH5b7KTtgkJ4LmJaOG3%2FoscO%2BIE8QLvSSFy8yRa8vCS1hBGseEXM%2FYmHLxe3f%2Ffc9x9QUJIiiVHn1vAcqWVt9ERjs45W9czUrhl9PE%2FihlOYR3aLHNLpBL%2F7p8e4iVYdIYW22PvUO8eJ6b2IpDxsbZWSY6jfCaIVRnwQsMWZldcI9njKPfFrAddZEQSLSGNMYEGcCbsPh3mkUboNB6as5iBIRQ2PsEB29acSxd3iEz1pIt1Pzi6Okt2%2Bhu6Y1j4%2FOWhgdF0TNtsqCyAl72EymzDkgm7ntRGmg9nI6Z5ZdBtapqJ6CD7rhfSuJlAG6tb8YNlh9OJvjBpOG8BQruEFu%2F9grw0le6FGAvSwTME1dM27tgjZS6Po7E4DrAPuyEmGpAC9QmPp%2Bm1kdak8qVUxXHtA6wy5EH%2BGcNmyB5bFeDZVhfCfj3D%2B9hOTlY1CLxa%2FQ4KAc7XIeeRKnM%2Fc6llid9D04ICpjNpuaXyjqezPl%2FgGNCRKDexoIMNKd1MkGOqUB27pn4QLxvuLMAj9xTOKcs52cWziz5mrbkDv1selMEV%2B5TdJHYVPWHvZ%2FVLU6Rw4A4stFyZYFd6iaszI7QkU0bRCCMl83YV%2BsoDhRgPwo0vYsk%2B85Q06jp8Td6rz5jrTMBq%2B6qGfarOwp9H6zUAZFSXC5vX0955VL24Iuh2JVsDlggv%2BMY87VtVeMiMXgZeAPFStc4ZIgBuxdJGF3Sz%2BufkKO71a2&X-Amz-Signature=c8d57dbfad99fbf39a67655232b38b3b6efddb053a3b62e18f5d462ab77e1fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

