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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZTH3MBU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCciy2nCecdTCw2Kg8aVRDThZXudoNsG%2FOJ7n58mG2IGAIgKMq32db4ZCf154K7i1Y0Ya2%2BMtzo7Bs9PtyRg1ik70Yq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDB0L7Ym5nVlilnJBxircA%2FkPyUepLDfAMlADs2zSrIvRz9yNhNDnUbsPXfcK4Wk%2FhZlF0qlZsYcBjMuroCbDAtt7x7%2B5QU%2B2MdZUTSzZOnw9TsFPJtFfgvlc6pvARmOB2Xp55qG38lc6Ln81IJKJoZ6tmL8yZVNg%2Fzusnn28DOcf9Ls41G2VuL%2B6ZYBdECdPF7o%2FWKHRP31xzz7ZxW1cgV5YNT0uM%2B4ORCxZIRCPqbAIq2wTjXgsoNRMDRx4qaKJX2dFLy715yBiiXrGiAuEfrHZcOf1%2FOC8NagABa9ToFFNm%2FDND%2BFwiPN%2FFYPAnSX%2BjuvyC2aag7tHDX2pzbJrj5ypkAdux%2Fpd%2BbNwcHFBIlsB81OubLKT0gg0fGqreFVoKLuRL07QShQiyAuRKwUF5POqVm26qMyKL8u5InvmF47K48YEdvYozv%2BA%2FEGuDgQEHpIBNWKY4obS1cX8qBtKdu7OA%2B0zrecUZj3vVIZZaRX520mhA9s7QzAGUKbdSFjGfT0k1AzN49%2B8WOT2ZFjMmbHPVu8S9PnQt0ZyKVErdR%2B4G6lIs4PyfJsjj90Q%2FSACBcrLgeq04%2B%2B2nThGypjL4UArhq7iRvNy6eTvatpZQ5u3Kd%2FI%2BrXF6%2BSsbs2bPR4fHb3zZwjzc2qX8j8mMJuVw8kGOqUB8I6%2FP6ufaCbieEP3tI%2BGfnEsNzYL9QyYCYUs1hN28PWvADL5XW7ydSjhsUwgERGJCiH935rxKVUPyG%2Bfpk8qksreFoYV%2FDBFlE7yV%2BTVCcLm0kA8iRVs4LDzHzu4TkypkPHyYxaLTofyEl4IvbBNrl5Gtr%2BZ6XGSX6LPG2qj5QeCri96MDhiu8M1UQPABnt1mp3OJ1WRmBQFYn0dZ2wu3ZoYfgbk&X-Amz-Signature=1be19db237726e353306694ce5bc54639f07d5b61a49d07390a15bd77868a431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657F45MXI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDeIyqiKP0SwbWhhjgTB4qN%2FXGhmXyxjkgdxTKaoCHm4wIgWqhTezqY%2FgZEnGyJbH%2FV3dOHVLdxoARtjs9XGwpPXLYq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMuB%2Fqyi2W%2F4bPf%2FLyrcAw10VtRnv7R1mOIzznTE5%2BlqUEKXK29fGSsR%2FiM0uV3hJGaAbFos6t5tviKbbJaJFQB1kiAgC8sU9q%2BHhuIYNAhVcQkEP6pwhURu21Rm2ppurhGdi6t8eG%2B%2BRO3D%2FFUsMEgzqUtASTLNJqyFUwDT%2FmXHXR6U118kV3usL7ptk3CIAtInYE0WotkOAZFNrOHWgSwNaG5TlJs8QGbYSCiS%2F35yd4Zt2tutLhnNGKwII%2FGhCnf7zaEgJyqYNHJWsEQYmZCF9jaOqZe81fO5uVprvyFnFxf%2BciubdOX8n4u0zYbfzMrGquXJDsXYYEINVzDpzHbR3pXGU3X4IKPiWs4DO8qOgpIFoLciGBAbSlYGgV95EsHtRQ%2F88ANuBS6IG7gE875S5WWGGH7TusQ%2BHSbZj9TxagWRXXIFBd7%2BUfAGjOMtxXefRbu8LDEmLCFG%2FOil7YquA7OfQl5S5Gq3xBbW97acZRlL%2B3nW3WSq2miCqcM%2BBVThOJqJwTtd5gr9w8iI3jBVNhr5HvuQpbxODkDDdVJa2IvCV39aTc44ZIouacuvMeLzfStsoztLgjy%2FGvbRz5Ww0ZOSvo79CwaVz9sMDrke0jVX1NydMaZYLQRcr%2Bw%2BotySjYqlWTVQWXG6MMGVw8kGOqUBUmdfpGbIgzA3K5m%2FYat6KH8VWfwKRkgwYCmZbOWRsxGrbiu6Y2z289EcxOXv0FfFnzwn45g4GIXDqCD86Gvg%2BYibt4UYYIoAqcHZq0TNHoM4pKnuiNhwRYutY9VSlie9J%2FkrJYdqhb4NfrEvFeEGPxYa7%2FecQq3QrJhBjS5H5EoMtB1Av5hkczsyPJH58jXRyxCeIagr4Mp5rpRgnidzGuxcpQs4&X-Amz-Signature=96caa634bf9bca303261d16b1567f78ad11c076779e8a2dfea9bf3014fc4ea54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

