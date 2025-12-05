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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIKC6FJP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcCWYdkS3zo%2BJp33c9zPweZgsTuM662JQkLDC6CDPWQAiEAhLqIkF84rhYuuyDu5UZMk3tS1v5LY3el70rExPS%2FaOIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGcVrnzrIDO0hSSRlircA5qxnqO1cGyDoZXi0ztaB%2FzpluvuIbq1V3CUMbPwCOqNF6A0ry6wzYbr3Au76boeekxdwMrycoiuJJCDU7wSl8Po9lsT1qkqDvpO2sv9MsUNN9kKREJDcycVhFCgi0moVXubEMJ0g%2BEb2USuN%2BCfpPYGS2h84PhEKpF2k3BW1OIRKCbbROGGCbWi1PLD3HkOQuahj6%2FcVxfLVzeazKLKsUhH1TjvpsgBiA0gtZ%2BbSqBjyqPE7N6HAoYkwwIb0Oqt%2FG1Fs6lCNX%2F%2FSv58tt2s58kaO9%2Fhd2hcCgR%2F0xfIzhnzydRMVPQpPdJ4TqANcNxYwiKEpMz4cy0jnF91zxxmOzCL0tdRNJYjG7dCKkuziqRtFabtMe%2BQkYL160VNwp%2B0SNZu6oqyGl69n0%2FWAbZOWrFmBamFkiBBlaAas9ij7u89lhpSE8i5euUaSEtqwAm8oD%2Fp9pI%2FPNf%2Blngco%2Fg2Y%2BziSRBekMHn9HSD6Vdvd9y9fMBMrJQC0owXCGdYJb%2FzwgEPC1KSXKZ%2BBAFB%2FtPggiw5IDNyJl0H88xkNrqlxgMvpkBe53pxcwroYipD%2FV65WWqPTYD85GDwKESguOYMOU99WJjCIt6%2B9gGnAXJUwJWgAzq6e%2Fyahr9ZzKSIMOSMyMkGOqUBWC5gH6TJPx18IUpMe5uZm4ElQ8322g%2F0sU8FOn7ebSRB9zwDdHkWBDU6azlWlm4vS9doxT9F2ztGJmxfv4c9gosjfcEZwrfZ1R%2FWDt5ZIcDMIkdtsKUmnledw1PfLA2mKnkHrNFs6%2BnB536m5A3h4M3yGnSdGOjIC3TstX28MN81th0rqBc7tZBghSSN4f91b5IJXqO5P4jARTRZ0l0wynFDPa8c&X-Amz-Signature=10ea9f291d4259d393afcec68b1d621daeb3fbf36851fc397e6cc4f69730cf5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YAEKB32%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdE8YD2VEaWPrWKswMEBQonk9kOg0FDMg8yd%2BvqVPmrAiEA5dwSqAf75M1tItZTZ%2FQScUOp5rmzisO2vALZAwDgXN8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBQ%2Frkd52QZiAk3L0ircA5%2B4CFS0fHaNcBVgKBsD7ajsHEuVF9dvFiFubJnsO%2BZCZfdNbwAtJXNIKNCwg1zkpo90eQnu2zEnG%2FttK3C28XcCXzD4i3JDq5sPXosbGXSog8MTtGTpad38iXByS%2BuSFeEg8yW4OKerDa6I%2FebhIJYxgnhPZCjqJS9hBhfBrbJmdNv28XW6OL4A%2FQVSISoWZvFoM3R%2FHW8c0VEnzJz3GdiCZ2SC60b29Vzk9myoCAdea74voNoTVLZR4JjRLlCQQkawRIhwVfTQTq21nVqth%2FLxUe931WRrFaV1k6k%2Bltgr8nHkWbp2FfebCh3id9TnCrZDyDvrfJiuJvTBhQRRTXS1%2FFy69Eb8ZRMHv52MAxXe0kBfWlU0NGEziX1HwdSkrZHvZ3Kc5BjOBGeMwb0SBdK2Vpkfh%2BTlZV%2Fz%2FVQNk6NGlFQ0k3EdAx0ivMUq%2FkyUjtKAOtUZG7HYtu05WNp7vc6qvdNGNbKeHfzmKlk7pl1%2BguXNhAFPT%2FxSjMctjPqisJqnPfy9tf5bekh6hgxIfLlBAgaEuLAL677ZY%2F0R8SF3NtjvEWqOItgZ6J0sBmXGmMVR7lUAQHUOHx2yeZuS9NRg9ET8rmFx4PjwYq%2F9sNMUxmUHwbtQ%2FeaUEv7rMPeLyMkGOqUBGv2A4OmurF7Oj%2Bj2%2BORqTLk2u5EAf1Yq5SJhAoXd0pTcIIZk3%2FK61mFNDpkH4y1ItoFGmTCzmodnAMfp%2BQcjsbPPxRC3lkSukipRGBA3DaqcdcHbLYWOPNXqh4szeDk9M1%2Fb5Q3IUFwkp2vcCedn%2B4PAZ0vsuVwSvt%2FGfAbRkye9%2Bh1OfrbchD%2FmnqxMdnqrOMzVyE87vrEWEyK0SGk%2BT83Fmvd0&X-Amz-Signature=e16d2cbb02ee77f7f0d65c1ac6a0ca2e5be72243ec4456433a2709b19e4228e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

