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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWXDO5DP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8Mv5Z%2B%2FOFSoltP8IABXCqrcYdACJblZqL2V%2BB1WChwAiEAgkQ4zBJe%2BY5qnpiCcMzPhVRFZCmYP4YxwnfFH4E%2FfH0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIy0WKlejd48Ws1%2BiircAwI9T2djfKeg5E4nQwL2alX%2FbxWqhPTeU2ZGty5U87H%2BYAEk5S1EnLjSt3Nnf4HSFD21ntz%2BulSKbdbinoI7PufY%2FoP4Tcsn%2FLp6%2FKioNkG3nXzdfmnVX90xGA7BR2Bv66Ixz3GntI%2BZrmGWKE%2FZEuMQkglFQ01BaQ46TeQjH8fNEC01qy%2FhofS5ALt0%2BRVITMi58b8jA0%2BEXjXOUzQe7gax5kzRsnszogBwn9UR4lngTTULBf2sPTHAcO%2Fi%2B7sYnc6W0HDQ5g%2F7Zn8FmVhNyohNpDk4WiGa3H2CUSndUE7raR6EyI%2Fx1nbpbaCXTt7ElRfzYVP3Rn3X%2FB9adDJjMBl%2BlNYOnUDoUWxuc2mo4wus7iEhQ7gwZGLWHvZePQ7zFO7h2HrV%2FY%2FsmWRKPlWkgTPSPwr%2BDqfN8COxj0SW6ocTipT5jwHJWg0a6AnA7I%2BxIP%2BXiCgpg4DCjRZRysBTT8VhzhaOq7yJTkG9fCE4sCQNEtE3ykywAHzf7PpAy0McoVsuBWX1ggee5MBa3gttU%2B23Q7483SQmvfB%2FacqKPoHfj9TFj4jVu8R6tW1ihkHedIi7JGQes%2BjaGEGsNkenLFBwvhq9vFO82cp2hpaE%2B%2FDRooIgV8qjnBgIHAieMNiz0ckGOqUBDpT2BtkMFL%2FFml%2FH9wRL95skTOL3kIGNER2n5jJNXHW2i%2B8dnrSiKTCOYFvPo6pFqpMCqe0CgzH%2FZX1rvdFDbNVbIRgM9Ix8a0zgLmkzT%2BM52W%2FvcJP6LHZyqaY8Kso0NmWm8Q%2FkHvK7qRHKWcZgyxDsmx87Pso%2FpqtTED0myaFiYUvIcBD5UzLnW%2B2WxsOjVsxuXR8ESYE00ybDU5oky3XY1OlO&X-Amz-Signature=7c8b84700cd3de5303ffde8b771b6c026e1f18ca8e07b38fe4be0a4620dd4735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRC7LVJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByvvJ6prgJ9pAjHk5HiVR3ZmJAzKhKQNi3Q%2FhuhybtRAiEAtU%2Bfhgf26YffCkRuFPHB5iQp6U%2Fj5gzcqPfPNBamZLAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFauXeTy%2B%2FtKC3q8xCrcA7Zjbp0%2FpV8BN3ghDE1m0DC6Z5e%2BZyd35Vo%2F7Ud0kfT2FLFRtFljRo1jl5LKyjO2ds3GjR2nwZZhZqCXhSF%2F3mdH1S46hbwhUAcV6wzAlwdHpXaSmsR8n27RiJhzc4YJGlMfGWJ9gooOjzLR4nwMmVTNAibUpDCl8%2FJ3hZUS7GR9emYh7h5GDdeY8iaD8hGSg3ClWUYtSdwX2Ai81yyW8GwnRiDfus8DZvEPM64xfVp30lsdkHCNiAxdq%2F0sRSHYGwWVotkdfV5DZhjLHFYKi4Ccct5T7GQNmYIQlMzoB%2B32yNNJw9kmqvrix9LqjJpJA9CeVYZWLWE0U0hO51eD8wvlu2jvnUDBpAe97bYjL5J0t3%2FNVPV4AD9OLXXvBmSyPRs6xclJuqR9H%2Fo9VZalHUzeKCkMpn1O2zawtbSKqNCASfDXVo5BDjZL%2BAcUwZPR%2Fg8cIk%2Ff69EwQjaTCv4adYqQqVMEQlu3Qo4W0LJn0THWn%2BYU8JKFCmmsVgBf%2FmDCrIXPB3kVSxto5QbOVBPzhAqQcyzYEDY9Y2jdRgsTE9lPDyzLYPj1YRf%2BKePJ0Hc4I9dfEkRJzyeBkSc0kP2HpzD%2BxBogtQx%2B7Lef8wGthRSe9daPb6w58S5atpyRMN7H0ckGOqUBRzfMtlj8G5dlNBaX7GkKrIvr55wsaOHAR0asZAJ1%2BwpKOOqaN9zVswUWKOWeszvuvmPa7HTqcud0mSeDjxkbaDIFYUL4OJOH4eP6Y5yZzIPKqOSieKz7LMqROroJQ04HwaRgF3Kn4lOlYEN7JebtU%2B1vqIeG2FkrPt%2BvQ7Z6Qv780jb9HQ%2Fb3qYTgAbSxzxj6xdGLPR0K0U2yk5oDDqP1dx0Eu6r&X-Amz-Signature=0ab6e66153def2ce781ea62179bb4250abdbb18179d62afa78b7e83c625979f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

