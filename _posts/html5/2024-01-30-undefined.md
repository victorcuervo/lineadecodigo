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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCMQJW6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDkWACoQh5TRE68IWMgVjSg3jzzYyKCdRqIQoioTFY9YAIgVPOIH7Uef9KXeh5bJXYtUQzVu6cdsQvjUEfycrpfxcYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDK%2B7eLPormq57G9DUircA2CJTbb1FbfuYgbQs3s0725gaRCq04tEJP5%2FwAMjaRy%2FC5vNpNY7rEG1K9D6M04FPhn%2BgoOnYuOtcBmbeW%2Fnu2LvB2doTwsZ2lX75gCnKXMDJpYV4JhlIf2tqXzw2r8SYqqWJ%2BWvuSR3L6VdLLg3OXHkrYk2SBy9%2FZ7EriK3LUn3pQMqPc33n7cbAD1oQ5ZdhalaIa8RiBphEkb0WDG4n8nvWWOsEne5Tg4AXzhykIGIGxKktn38goHIbu6V0Xvj%2BEG0qZf1%2FDYJTklgI%2BkomLZkMeIn8IEuHvN9ye5TGY%2F0TSufxVvIcMHgnhvLTeqTjBBwhUXy788Em5nHb3tjg8LVygM8QclwYybxyu5FTPS2%2F6fquvDP8BUikfZhc%2Fd2oi22scnomjhJil2qMrYfiMyjBoSRYn%2BTLL3d0r6P8%2BxWG4gIEE%2F%2FpdiigodwjMp8jC6fVmi%2BYvPqmyIsK0GzJ4va%2BV6RmUQROz%2FpJwcXdkCaASiNFOB%2BXm%2Fl3zwd12eAZX3H6Di3NxLjvwwaA%2Fiz4OumEDphvwAPfjNJgJIKgvMq9wb%2F11xxt2eZK9saB1kAukdWr5l1cedvAELpRJNQSQ61UJQoEgpL4crNNChfKVsXLRSMENRf2vLCE04GML%2BuwMkGOqUBb2ZRi71n2aoC8QdWV5ehjS1BouGfAWYMy1vTta2Ile0fN3encF%2F%2BC8wrHDrfnKptM342m2MXP29qn1I0Cqj2jItF%2FfQJ%2FwHkootcuoyuftCsSFXRzCddifrDzn19rUwh4dKh8IhOr15c%2Fkgvb8W40g0YYk4LZnLGh2iVHwD0DFDzeOLkbnhApdy5Fo02l6fg6lVfyD8ujxNvWCgdrC7cNypjh7FO&X-Amz-Signature=7e3b37a6bc261e10f482b7e0b4621d95bbdab3c956de089e7360c7f489cb2404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3IFGJF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICvR6xc2W%2B2kwH6HlYSklUQsMS5i73vxprsWvYLo9eSGAiEAyF0bU%2Bk8TRO%2B%2FUM%2FgzlghG5RuEEtqoRgvRL47qr8j3Yq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHAhDLfcEEYA%2BhVJjCrcAx1fKb06iUrpqAmSDpfoeQJcGCo8q7%2BAUTMTPuh0xolm3%2BIOTwjmdAONfT2lr3apTXjKZlNVhakatzf7Z4XJ%2BShBm1uKhV9YtGxXsqh6ltj%2Fv12oXWrWKQdr2ugHKzSp18w5ZrzBbVwNehFRs7fXiMs%2BNJxOBqZ4VVmFIuJqKPAaAA81%2FWlsRSX2%2BbH5NkrJAHZNUywhQ3Te8UWOVT2C8SZt3qwlP7WIrF4T228K4b8RLEMONEsOI%2FsQY1swZVgbt7CNCu9%2FYqWEVKWcf9mv%2BCOgB2XTHf4bW35vuEiNpYAKxFlV3AUAwPwieBnSBPs0xxLloPgbB7tO69MQOJMBtV68CFB3xPGYTNM7kIv%2BCEt9lC0M8F6WX8L0xkHGwLLj%2FKpiS5frX0T3tPQb4nIGYggBXUeLvXesyjOy%2ByyJY46tWKjQ1SMWmpFCiJVq1RkcbAeVocxAR5wsTryOmo%2Fkeg%2F%2BPjD0x2KO2Wnul1BBM4p13w28MrMREHyoocVpBloe%2FyDkivZ5M7ZPxzDmGu0hspl%2BfQMVLINKMNF7OWqvelU1kp77f063bnrZjELmbUzcjM4uSJXZxuBoQcidnrpSH%2FdU3beUPs1XecEbcKl61p5xzywPrGbzAI5FiDyqMKyuwMkGOqUBEj5BLHpwYMPTFfm8DaLDLhjWrkP%2Fk74PIhs3aYtw7E0ZTdZfeAZeBXvLRd3tf0f595aDAZ0IZ9ct59ka78qyGcyZyo537C4%2BMC9CoLMjPJKd67t3lPQpOiYwrQhQNd5YW1k7Q4c61Tz1fplcUN43MoYf0An4xHnMXkGNW0RGtL6UBwpZP1CkMGj%2FvNeva4QrD0eC72hd6g01HYDBegormN3LS3cn&X-Amz-Signature=e3fbe35b918ec095236ef3fe2a2c5a9ad9a7be40739e3fbf49e40db756734183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

