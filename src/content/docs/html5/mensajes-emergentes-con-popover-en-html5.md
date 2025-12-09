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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IQ2BOGF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD83iBW5rQT7FXYWqZcKpxXEKnSEvhh47OwFcZjq%2BSnEQIhAMVdELAsTonZYe9hsMlFGogRaY5hsRaJ5%2FwBv%2BNhnZOFKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn4IPm%2FmH%2BZ0lMKh4q3AMLyO3TMUYJxesAmajCDhwjMaCon9y%2B4L5wUQfS%2F%2B2ytz1o1WBbIng%2F%2FaiOY4Z%2FbnIoqgU4viEwNTt9XwZX5SiaWI%2F65bk7ZX2ZCLNXgjkdIH6jdPpTuRQitOX4TrwApkh4RxgM73etSfDGpcdoc7wYgxdgk6Ir9lriMIApGc%2BeeJzsHdHXLns77SpWmp7T%2FJsM2AFVHBIMF6%2F2PGvM%2BZ47cIr0Wi5wNvZ9%2FPsumhosTrtKdXEIo3ed7RPAAFVUOIqt7oUVYIp95%2BADLqNMEfzNo7V1BF3ZACYkoYifK1SgNlttywuyaepylCn%2F%2FOBgkpjss8wX0IaF8Ae5MiM14SvJDnYHlgk%2FBx2UI4yPXQ4RGGPIAIKR4Cm5Gy26jObHvsJKW9x5CZ34ZoWahXRYU4LqR%2FUiMoHq6xHOygkMciy16i%2BLTgumwC%2FPDBfNB2ZdKdg3bKCHGmCTSO1MU0QaXIkW3B9lUAzNjR9jTB1uxpPSPsKQjuC5mVoQ%2F3toihfSoun%2FErqMFqusFRsyXGmlm1%2Bl1coP41EdbOGyLpZg08%2Fro0QRQu9psJuleRK12LwciqRwyBr0FBq7LASTIxenR2p4mBF0ghs030kmAHZNa%2BIdllbMJrt5kbNa8tBNETCKiN%2FJBjqkATB5r3kLmS74KkMceEWUun8T%2B8an7hfyXB5xkSsaK9ja9lZzJ%2BPj0ZH773NNELotlZtWW1NyHnCL3Rl%2BbiP7HYFNnspy2yZVqdFBK6IclvlYxwIo9MTyaHIHIQZVQBQg7X%2FKt9lyy01ZDaKhYnKB%2BagbaooV%2FKQSMApL7c9%2BDSpleaaKpS9rLZKp%2BWUFHXS85fC1lJ3tjY6RkwcWwsgpe5V9GY2J&X-Amz-Signature=f6404f176db9930ac4daa26927f262473ea031643b455c0b2d564d51964cf613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG5WTUBI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTZigb3gyeQv2ngeDXQJB0wrKwpr25OV7u1ItcWUcLoQIhALGkhDOd4iRe%2Bvpzz6NXLisT6b0572pD%2BB4pRCTXYXqMKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwamJf01PRgyy7uv8Aq3AObNcVZTi54fRyNwTSQ743mTCZQA30mZ0Wrztm0J7lwKW7rij167084at3tscJp%2FGLW2GlzykdfO0Q3DaN6nkN2eni8ajZrlK3vo6Q2YbyQGyUxZ864%2FvLkoXH3Rz23QwQRGtHuEJf3YALaT1wvu9TfKSrPj9FmCfi1%2BDe%2FTn%2FLaRpq3Rl6SHeU7bC06rMYZ6ntEzBvZzr6%2FD7iyZ%2FBxKYPbe0oroPMBSfOKSXSLT4Wyhnfx6w9Ezc9mGEfKW5he5PQRrQeEPxz843K7Rh4gViWmFvcwvoCp%2BB%2Fm2gvQ%2F3QZTHek9WEJQE4ziWpaHGmr2ugKrlm4BqO6FUKNgnDsn2qbcEVmPCSlCprL8kcq4sK8mWSEdAJWHwFCnwxs6BIFG3jwjwZjmnC2E45FuGV0dHjkMa8qds9ymvNY7bjGo7pLvykT64VUu%2Fo8Jugv%2B13J2Qahni0FJmBB%2BqASX69ZtJO7BMqmo3GbojrMoUc9MgseorxgCYy4LoJjJ4qk8ytS2L3SJYWKpxQjWK22S964P71AyyZy1gATFT5%2B0INMtQihbvzUz0AAihUmHr%2FCf0PiNmwKVLCWoyqMweyFhhmF95M175C88XFOuVVtWnTluASYFmY6iPeUoACqhA4tDCYh9%2FJBjqkAb%2BScNL96NNZH5Vn2xk6xDoMI%2F3kp%2F%2B57QMMoksHRAgyK55bd8iB%2BMuEELm5tqLEvsYCnEBZfQKtEhIWhau7ZXcI%2FZO%2B83SA4GkZ29%2Fmvxn%2F252j6HMPrB1em0nbdItp%2Bzl%2FlS4ETyCt6aC3PvyUjNm7Uv1MUbuU3%2BP3GgkxipB3LU%2B0RvnKOfEyj%2F3%2B1TsRzzVVuMg2rV8ceDrcIqv6OOMYnt98&X-Amz-Signature=ee82c06264753e59c53b56eaff67a06d1c2d7ae2e1ec6544d051e244d1ae09f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

