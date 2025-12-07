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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCDERQLS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbrjcfLXM6jkX7rdOsNxS6GFyDIaXZIg%2FhGZlDBPMl%2BQIgJiYI%2BcxvmE7V9WgnkH8U35UVl%2F6WW5qpAsNgo5jBl%2BsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLqE6EYKUB68%2BYArSrcA4vXHzxvRQuI0yDNK5ij27rIZxGJMkKs5ItDEhgmNEaJJWLohW1%2BS3oxlqmsP4%2BKYYlPbpDmr0%2Bc8kTESmRSv6fCIiVPHaH3IUEuZhcfzbdkOHOhr2XnV1rUjfykenHCgYOkHVaKic3cMSWcp%2Fg7loGjKdyzU2k1QOX%2FlI0Sea5vnUIXh1fHmizJOy4ggKMjPRtalXK%2Fd9Vwm6vy4UPNffgVpIIFP%2FKjYcDvJXN%2BLK2XKdvV%2BWyEQVnN13XEh4B%2FjI1ejYQGY704dhLnxeym%2Bp2uUieOGXbiP7EUFcKNInnozfPOV4vubVXoS8dOsXKBUYfpgQZF9jaXmH9yIrhf1HBXi8%2F60D06DFgEAazHWca1%2FOdfwQ4p6SbvqAsdMUcfHsmyk3NV1WJ0UVAOuMSRaEw29sWxsXumgd0XIYWT5J%2FjQ0dl49VSD7ywm95ZdklZ%2BnSVQxU6AqXdVLgqzQqcGUjP04nKa0IP6TD6GJc6mFLZRg92jFyLwneO8xpIUrc1GmUmFBdFLwQrPKtxpRfYXcMgemr4LNo81y2DXrLWQISbGLQWrWh79EsMqPiISVipgfN516M2bbKWB3efTy%2B7%2Bph%2FL6v5vz9NW0ZLLqWoKuaE9Eg6PIisUNQiuKJCMNj90skGOqUBy4MSm1FU78nJhOJMpitdu2cu7M8Szl%2B35hT4f1nuyyCKHhaAzy%2BUZ%2BZHp9uzIgzCDrOBpXcMbuUBApPU6ulxN%2FEt5OE9fxnAnjZQn6lI4VQnQTrPTqNjgrErqwPFTAuoXl7sC0ipYaMIhTNqC5H5RM6nI7l9DYMOZvXwLN6j7EunlN3TyJiFbHRINMy%2B9y9Te4RQNYczF3CN8ETlIVoiwxz2kr2N&X-Amz-Signature=cb2aa2926d7ed0b06013bf753bf84d6eaec96d3ac8d5991a58f829d8609f17b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEPKFYYE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQQ%2FzSi3IEXc%2BxFyPdPHXB%2BmOOanQ5RcQDgZF7x%2FGu%2BAiEA5bZ%2FU3h0X9qY0XVbr5khnk%2FFOxNXKOt2fcekZTw8q2IqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8tFQ5%2BohUFpCvRtSrcA5PFBn%2FHRFQaxcfV7x4HAW9Jm8%2BbSvX%2BnjMvZOqB9hGU%2BBpOQSx8vuwksJu5VZBEXcCs2vFqSBsjJ2tGkpca1Qx%2FjTv046rpQ9UJV7lWSuUHn5E0zDtWZmo3cON44a7aeCcQjOgKkcyam7O9%2FNh9%2BzxujskXgA9iZLeOfHL3dQN793ZgB8v2Ie1gud0xqHaW667i6Ruz4WQea7bjXwXU%2BqKpn%2FfeyWxfk0vHutDryoEctN0HhOOd%2BpKYIDfMOhvpASEGP%2Fd9RoJkKA5GUeBZNRU8FoRF2Crx0YY737VHRFOeypyJRgOJEgo8bFCtSu4n0LQwSWiEoljx6LTkleQqvj7TwkdetNAmzmM79d3zJeab8uT%2BKaXR74JEHibclZzJCriAsw8ax5CSt9Gv2RINSc567xiVZ8BQX3kr5Xn6NxtH584HsRlPP626QYD771mgRkIUin26bfKNuVZZKJu%2FznQrCtgLHFjTIy4KpPeHsz%2Fpdvel1fMY1iX7QL98SV272UsqA%2FL9bHf0BoQ2DqNT%2BGUjMkQ0vS404ztbS2OHSWPVy5bb8zJuaZboU3dE9qVuxsHvoglFn5eP4I3KhixlYWCJsxlqZ%2B20A5Q8OdhRCxsKEZP288vOhA%2FE1JiCMLD%2B0skGOqUBI7gAba0eB86zbkALVDKy9gh9KRIVmiaMoLguq46Y1h0NKgO8BiUbfUNoJLgz0H03lciAzPW2ctbhALn%2BWGXnYDSUfG9tG9iCpwtIUa37uK5kfem%2FvleSAsz3aXzRVTkI67hWO05mMXic3tLOQ%2FOPz6k6FHYwfYARO4AAUZAps07vmuwxL3KvHyPx5Vrf4uW2A%2F6mIAq3ikwaY4SH9mplj%2BPrwOsa&X-Amz-Signature=abe363b942ff3ad103fdecf4e46ce180ed0a21d210987a68feb141d380557afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

