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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMXZGO3Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGl4wuA1pAiLiwhYpT18IVR5U%2FXALfW5hPcmDymfaq9XAiEA%2B0GeZ4tCJJTxrDuPc5DpKtQn7siQEgJvgh79DYPIkdAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPlGH527oTd%2FqCU8RCrcAyL%2FeponfNRGygZl0a8eC3zYMNK%2Bg1sMIxKIt%2BA99UcHSt%2FeQ5ycQ3Chb5wxzZPHljoVXUqn17WvM1iwzX7Y81jxk7MV4CtMRTe4Qza5envw1X6AhgA3rRoZAZ0qrE9h2dwvf%2FIPoKOC7Q%2BjMzoO%2BXJfUVRWpgB12Po%2F3nQslU2otXELJEJg3T3bcvhzHTv%2Fd3wK0xjrFSScI%2FvdUZJgFAjnUoz7Ik2ATmSJdoRaXfooptn4wDVoDABEU%2FxmtLamgfJ%2B80U%2BG9dbEQ7Gp2v5Q5S5K2A%2FFeGTzVOjvvRrOHw0uTpN0sOe4BFMMlmLgQAD8oVc%2Bvv45H0faABV3fTQrC623Td9yiD41Pv4pye%2Bmd%2BgG4HlSqJknvSAeWdANIWqAVOXXbVyl1hbcy9ieIVbWIc6B%2FWYmzJkdXm915Ob%2BLrAin0Iet4kgDE7ZPf4719xxHZw7ymxLiwJMlJemr9ZJf%2BwvVokFKUdjQ7sP4Ef%2BjwuOK%2FRqfzLkem8QM7tGK2plOVqTqSGxWoEOYG80%2FdPwZlCx5T%2FIt1PCehUvEw4SUOOsU%2Baz4LMZpnlDCYafO06Ue9FGMK24g%2BL5MAS%2FNwhHJu5DRDEV8juIVHHRHcLwNpN3kbbPM%2BLy0laIBFdMMbKxckGOqUBU5Fgn4Oni8vvkDHfAMaROImirR5QOB8ZTGFUVpaIQ9QFKlnRAw0H1rCi3ycQSMiJXg38ox5pgpMrDnQ4TbYkV2I6XNAG8rNjAYo9z1MwEx0%2BOx%2FfDH8HtbmcUuFJ058EKzFP95I0dutU8pDJBffVOeOoa7NxVH%2B6kuAFGGNl1M2WNWWr%2BzeTogmBzPeukeI0KwsQXhLx7Yel2Kvx254T97bErWHf&X-Amz-Signature=e1b13a21a48fbcf4db8ed0787e6653f32562b034f7eec74ee927b4bed5746dd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO557WMS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCJ6b0N%2BcmEaVYicjPIfbMB8QJ9e0Qz3SiERVod8FmBGwIhAN7NlrMlMYF28k1u56IQhph%2BFaF3AG7rQCqzsZjXTgY5Kv8DCEQQABoMNjM3NDIzMTgzODA1Igwj6cN0xyByeMP5Hw0q3AOFopoFaFPn1iXExioswooE9EBe%2Fzuig8gttZw%2Bi%2Bv0fYEOopMiwYo3ryzihHh%2FVFIc44%2Faw3gHfjs87QUgj8kjgBdeCbyPxMk%2F9xK0E6jkJ933r8UrymgGTXUSRuoxnn%2FuvuFa4akZ3p0K3QxT84bkmprI%2FTETmFCW7cC2lo%2FAIFsHnr5f3YKJmIZ3YjGp3M5X0Lw8WXLGnYAqvMVubLoVEQY%2FUZoPgj9PJ0DntTbfJvD%2FKaxvVfAOLOlT%2B3R%2F3t1%2F0Kp2sbolI3Y0ZaG%2FtavKgVpDqFX6N%2FoDxi3twO%2B1Ci6hiPB6RsrUOA5oIjkHx4VvtUCR1TTWmEjQ2wvrZtA2Nsznse9bDX9W9hasw8a27W7MvP%2Be5zaSlBiro5bg3%2FopAMtw%2BojMQL5uZECskrR0xmXZ7CaB1mkXthBn90nY3JdW%2BTBiovGOpzQ%2B4qZLZA63dlYhv4TIdtM2A7Bq4BxZzPoMZS4K%2FyuK3tVFJMGl7RkA7bmL2sJTfF3%2B9M%2Fw0CtnLtbSIV58kpH7BeW3x%2FcIfiBXaSet9vxKn76Frs1T6L6yJqWyo%2Bsnuh93PT4MQkYO78z%2F6US621fE6eEdPhn080YVukjt6gk3BVw%2B1GLXB2CkYxOrexNBhmqkBjD4yMXJBjqkAVMYLvPcQ4fc%2BuvYFn2x1up2db50H%2FyJjs2bODBKGPcqgryDVro5JRn2WJoJI7PratdwuTJ4aLUu0xl9mp%2BnPMJ25B93QRcXWfY9QTZYB9L8EbEafpz7U1Dx9T3lMcdzuSzVskKKoblBPe1NLIU6UxiSnRq13SwmU1C9JlYsIwaiivdeA1%2F48GgUdhmEl%2FpPKNDYPyGMPayxKu1mW%2FiXrubP83fQ&X-Amz-Signature=83f68cfce9316ee8faa23adce9f18fce05ff3b8570a287477fe232c211bb7f0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

