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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ISR74B7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCGLMsHp5rra%2FnoIvkZp%2FgWv6fR8nEwk7ui5MyyFnSz4AIhAMOlPO60N1C3m0KtB0Tz4lRnBucJnlG965JTyxxIGU5AKv8DCCcQABoMNjM3NDIzMTgzODA1IgwAVyLR1KuzBWTGKGQq3AOY%2Fe3w%2FGE0%2Bu%2B9mmqqjTFPyh15%2BbORE2nXQ%2FAr9TuJapgNSBR9Om2zTUu3bMSoEFm2rG43V%2FFv4ILC6ii3k8R%2B8Zsll2ncqLeoC%2F5iWrE6FmQg1C0pIHECKAhfH6WDTS%2BiXO%2BoO6w5hdwzpKdkAf%2BLxB9mtN7AsPINycX6UcSh2kWnQ9q0oaYBlq9MIaCTCGeVVlwTpPtM8Kh55udvUeU8sRPcfqm%2BFzVIoVgga9oLsQxKf%2FCDp%2BNW76V3IiBPbiASCMfVPtQuB0VTFs%2FzKIbAdZ0glfeLYJqZI%2Bd6XLJbzgFJcmhtQyN3DRKL5jGcDUQdholjFDIPn5pT4bdtH%2Fbac8fhZpbRvnEvrCwfPiU9X2LBXsLXoydhTGbc29j7dRtgx%2FNBbBNk0%2Br33Cs9EcwliO0QbwItgKXibCstyNP4SI%2FVnyWxaHpNYYmnmGkhRDK6MVZvF5h9NI0efjv9kmbnVSSHiGNidhGBbDx%2BKHM09xe5TyrWRsWtrwcgKfgy9PHFNwASxvA5qn4EgJiqmNhg0q1IksYQWi9DRAVvWJiz4IE1%2B2k3ayV0sl2q7PYdjOfqgf5mhB%2B%2FcIBeGukiei2dtTN%2F8p6lGtaqoRApKkJ4DFrmAYOoF5tGGXLtzjDkmr%2FJBjqkASA2Iv1B6Y6glhsPV%2FAXFZIzQZUp9VjT8yP%2FMbKn14z039TPciAwMTYg6AZclbQtJcU8%2BzBimIBkTzdU26%2BRwBoKaOo5MIRHtrQiy1KGddA8ipSFKIno%2Bwks2fPx%2BHVc5bi90%2FJn0FuKw98VB%2BS8DH7SUw8g767r7Ch%2F2IwxCfGExjTwtdb99KyCUvJwaLgyFWK4eIQTzAF5rsO9AvyA8ViWYOUi&X-Amz-Signature=b3cba91f5aa1e008b861b4fad1cf78d538527b65739d5523287fa9b3d94c333d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF53PEEH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEXM8tRDwY7YuCQqpgcdxu0vNbKZR%2BBCXR9D1C9wxfJQAiA5AHcnR0l%2FTE2sQLuPDwoTQp84hBNr014Q0qAGHXKWWSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM8xf8PxAPM3HVzAe6KtwD0Taq09jIqJMmoGlPE9QuJYJVhUbz42WL9aDlmT5hb6ZC37mV%2FzG87WSQEz6gPIk%2BFd0hdEbNzRguILOy0dEJAXvknS571WuPyJFW3Zexez6DVc9JVOIKPd48sGyoBpG7yqa1wWAhaQQalgsxTDzHYnGfFBy2lS9t0Y%2Fc7yuk8fKujIGtmarY7TCj2cSqknGdEmzZ4a76a2eD38KvFu87v1%2BBdOwno6fKBh3wNxwNx3Yn6CFQg4%2B7D3aSARgO8zBouI7yYDYO%2BI9796lHzNp7GxCbIRND7jwWiZVYPolIxFj3leXJinpj0yT30yOsd1skcXeJJpM7QAQ2dU9qjBnloBnuM%2FlS9K42muVIHAgw7pspgA6LPnQku8NvCaab4k12eOdX85zTRfyvjmHrYOoX%2BPrCCAP9O4iEE3cN7FqK1bF3BHIjDybLFhBvKOXRfZuaac70CQMq6n52M5GNpF%2FQ3U1GAuzB%2Fy5vOOlkm%2FNOGjXAQFW6RRqzwc8zIMt4v2WMx1tOWrOAgSHsFbWln%2Bps9vD3Lk51bTT1YyOJCrpd2Eg0CYdprql8Kiy4ZuekkS8cx7RoFEs1uXr6fJgF85MGYEGOCpwXrahMHRCTB5s%2BX4smbah7mgFAtQPvttEw2Zu%2FyQY6pgHmfv6j4lLSnPe4EbuiK4%2B2CVibG%2Bw3LtsoR%2BqLBR%2FVKAyZzokdjFGHZvn0HH1Ki4aUSN43veyrl%2BGqlOdePGzXCXNMpSbqjmAMGqXN9gQtnLHHDHf%2FKVINymjlTcf%2BjiAShSFjjAEFSpOg2zKSxUsd0S3hv8r0VpMDvUf14tOhSpNWiIm0tymLKMMpNYp51N2v2UueN0QhrR1%2B5KPEQHp4JMH7JFk0&X-Amz-Signature=79a05e29c5b0f26788962f91bcf01cf4fad023d62045457d7dcb1fe54d7adf41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

