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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY7YVGDA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T065404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCK2tcqS33lT%2BKsp1fDDM1WvahsKGLufCV%2BHKolnoYo%2FAIhALlPeOK2K8Db%2BwNhQugI0CpYY2njoEmB1lAsKtUESBDaKv8DCCgQABoMNjM3NDIzMTgzODA1IgzRK4yaiIuUvEjogH8q3APTfITvWirGuZ4uO2TGeySM%2BdPDFdMpQrz1cq9mj5y%2FxUCFSALfvwbNdk8syH%2F1ssQQf9V%2BtS1KAWY2j4WduIXb%2BEvrkOC3ByXQbb900N6ucTKV4cmvtjaOnDNCcXc32aN7ZfzTj9Gtc2MxUJjomxPfyC9YNmSleveXURPr61xU5mdPhTGChowpwOX%2FxZF%2B4ue4BuNmekHV3WXGEHym6d3hdHg1uapHt6wSreiLcNRHsLFsg%2BJngv7ESKhHHg%2BWAJTZBDuJl3uZn16ytrb9g9OX9X%2Fld6uGgVEt8MIe3FP21JmHxBatDDM7z3cqv%2Bq0Va2sMN%2B7dcbQ36RGGYLxE1Sm3B3evM2NM9CmNWgsiWWBEusqq28WwV9lAbqEAiTxGyDhWF3IMutoZjBaMT4dELtwCOyEkKT7o14VEmpvGI1niTnug7rewW3LuxzsrAVFuyVK60anB8fPp5JRPSCvVmW%2F2lYWQyOs7HEPORqkMudsdVbQ0W9mWgt7gJLu1HQX%2Bld7n2MuxjTybTXm6dmgKmtGBzTq3cFbZEGYQzLZiFh0OrtpItP9YPhYjS5%2BLF86M%2BWKkh0seReAaLkjk8AMFz43yYsOVUIU3EXTDx25%2BCSwDcgm5y%2FJpxJ5b2SL4DDYub%2FJBjqkAeuazcWGA8mIfnczVLKLI1dsyCyzSeWmpJUjJISNOe3fB%2B%2F%2BQ1nybnynsrcEkL1CiKrwBlW3%2FS5YffBcinWhuM7cHIAlXul3xprpV7JHUyl9QDE03ysJJPVEHVlCOYPnfz8z75JIwA6xMib%2B0Jo7RZQJLj%2FXYiiQda%2FiK6yP%2BF5WWe1JammSF%2Bj8uS4bZhZxbcNxuk25MDlVl7Ek1PdeKupuiVhi&X-Amz-Signature=8edc2fe9133cdd21254a19f431f22ac27813253d2e7ecc4ea16722805d11558f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQ3RVOS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T065403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIEsgGjXH0UnZXsZcI9xke%2B%2FLquEhIs8N6Vs%2BqQfzTIOQAiEAkY1S1EzmxJ4YKStAqxNik9ThFBNmR5hOBQ6z05DG5%2Bcq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDNOOzSc%2FhDRQ18bx%2BCrcA79M7iHIyG4a%2B9sfifd970InftIDckcDU4ZFNcviEgZosKfKlLfkdr4BiBCtkLV7D2tmKhHltOQ2STf1ZZhI2kIk30USgzcxO1ZNN%2BAWhaB%2B0gKmqLovcZlye6Fb5ZO958ep2gyLKgzahiCpODZJ0GjzQlRc9KiCrAaLhOQsh7NZXlx0BFb2pmxxfzGp%2BEoLpZX9%2Bqqw6eDuQqUDw5oL9asQdAVvcV1A%2BrbtRjyNaoh1%2FDABNx8icv2Eb9%2F3%2Boq71SKZSx8pT1xYnteL2vHedAcVyAv1MFMrpRv3O8h2CTr8h4sClOA5pKNQGuAtn4iI9iTtmV%2FJ4hPMs8XsngELT16p%2BLgUlcsCsvuK2WEiRQ8OACC%2BZMdbJSF8RTsjyAJMLlJ1CXWw2QDCMEelCYL941CVwSKTupicmpbVW8TxyI13K7yDXm5Fcq%2BK8kwkm%2Fd7xLZ5Rv2H5MALhUECG2tiy2meG8Q19hrrzm0KL1%2FwWkbw%2FXl2IMkxu46B5x8XHmJU8es81PNw0boDg%2Bg3PF8nMldSkEKq703feQ%2BE0ay9iEtz3d2GxOZ%2FpL0866ZtXbhSi13lutkctGArozAH3kO8fvI%2F3ZxuuwMADH2MV0rrAoPgpcurbyDAqlLZ6uuCMOm5v8kGOqUBM0YY6%2FLxEVF%2BM%2FBpXpk%2FZQ%2FAPnfSrFJOnH0GdP1m3vqI6Ke6RjuN2IiN%2FKiHzh5Fj%2B%2BEgHbJKeZcwwXn0%2FxYqJe4JIQa6nt1zo6vIY%2FKeNv%2FYSumqxuYxXaHJSuC57ASU29YtUXJJa0USEc%2Bkib0FE79y75pDuh3OKT%2FxHdBNRqOU%2B4WV3Ea1OAUNHEyKBRxZfheXPAOg%2F63OhFmtHYhLbz0PAHN&X-Amz-Signature=f79f9b6b517eb0f8111563acc990575d8d3d19b1b8639d485803bac222d25c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

