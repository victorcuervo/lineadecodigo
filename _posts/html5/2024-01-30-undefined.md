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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3RNKGLN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBEN%2BZUN9xf3su6UyNSJlUs%2Btk8NAM7M%2Fpx0N%2Br7sD25AiAQcq71JLkhUq%2BuIn0%2FXisUs7%2B8wms3L6eVP%2BwgsqrrCyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMM4fKxcHYnd6ZYBKEKtwDbGyhm6H18OWqSX2I8peLqBK0w%2BKayBpP27C07TXzqqBThSo%2BHILy8SJYcmGLyQ8kDerA%2FbeYIhkNrZSRxfA894AqESyCHqGHYjL3dPemFttCie95deS1vHi1YJeWCUABuHTSZbIma7YLOgrFLRU8itkoRXhmhD6WWNUCK62k7ND03KmqGraa6zbFEQ5DghiB1n8%2BIw0V74qX2FQ8HwiS3vWXd%2B%2FAww6VU3d%2F8lfarIuyUTMJSLg3gDogqczmuQFMU7%2B9OP5AgOG6iabPKxyrhnW5Dof%2BBNDoKGgAzuX8kn1PHKj2X8%2BQHsciP%2BG%2FIzQtzdkWHd2zItchM1vwSSd3FjZw8ORougT1Qgzll%2F0krxknkXDN6hcPxLE88AO%2B1D2H6WPaIuT6tcDjTMOlzKe8LXr09OFYZciW4aBD0l%2F%2Byo5jneZRptUoCo5LZeULRlb%2Bc4oHT7%2FNZ%2FnYc8WhzRn1TDEoOSWs%2BT7s0KkzNCy%2BszZuVMjuiichYs2pKFUGnJjpbVvSht%2FlNjD1p2xK4FfpWqBVx%2FWMa5yX30GorjrjfQdmxNPrHVFzbJzrinV9E%2BCfCfAcGJbkEoxslr%2FTc6rNQbu%2FKNfMOCTFSJ%2F8sPhdfHhJgKmtmpSCYxgzr38w1Zu%2FyQY6pgHXg3d%2F23wARrRAPMxhfr08rKaWuiqwlAvRHmleRSh1Y93h41dW50eMePAVYpxYtKoS7lM6DYv%2B%2B62O0sQXaosRIpfbnqctI7gMObsS8saXQ4PMsz3Wr7JyUiXfjdOBpZexZgCCcwZzGIVLBAt6Qj3TRVxSVupDXm9pFU6mAkjoDYJwmCzdwGI4psIFyiXCFOo%2BwnrvVXh8RJka54DL4UG33SnvR4pm&X-Amz-Signature=3541a3e348e74eb33263ffea0c2c1cab1d2284be866517971f7646b22e97f0e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLJL3ZL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDP5S3S%2BlTJfqRo%2Bjt2DNJoiNkaDLx6RRe2mcTk9UER%2BwIhALyNPRrC0ZGWjNQ5z8gGGDErV%2BECPuZyG7HvFQ9jJnD1Kv8DCCcQABoMNjM3NDIzMTgzODA1Igwyy7urIBUBHlmg9ssq3AOOGBKvQe25U7LxHIxh6Plj5VFhOcGzc2tZw9MtC0ESdgfARkCX61d835WbjrPlYn4fz6dp3RXH9G0rMo7FA2BMT1%2BD6WpPkOPR3B5humagWKhK6CltLOoUDlRBQ9xdUcVJ%2Bb0zOT9FGVIMhxQ1wSFjLYMBRFoRr%2F8XoEhPSbrRqsbFoO8Meo6vLJpTltViL23bXb%2FU2RNw%2BPi9M9sam4UzlZ8qSLOpPuWlBGeBYHPObrjEl%2FsOpD%2FKa6Ord5YSZPwTGGlPB1AwY%2FgrA5RBBULuswrgrTfkqRV%2B9XBetfYx5No0dkIqQXJeKcSsVAR0tG2OmTa7%2B80Z3duh7lHiu8Z91rOE3GKvjx627pMtkBaz958cHpNW0grO0z6BKtQNjhnhmSqlU3DngOPr91rCqpLUKhnMNbdRwPOnEGOzf4ijSNrMpMRvLnOTAb06JAAwXjyulXpP%2FXyOaF1EO%2B1ZptMOL0U9D3akuqT%2FF9ak2a73N9ohgqPcF8MLA8s4LoX97vEIGj0ZYvwhuuXS8g0tbyEBwGj6syEjNTr4SBFDIhKoPaldPwq4jSpkjIqMCDdjSvrfHDEawyb0FP4Zn7ZaVcU5Qjekz88Ku1%2BD3%2FsrOt8RXwcOUHfxiHLo%2FJyrAzCqm7%2FJBjqkAWMzNatoSjZAQDT%2BAoTQG%2Bgbsx8%2BcI9BtUGZFKJVZWOa03GqmVLUbE0n22LQiDi5UVIqoO2dInda9E1cA%2FlA3J3swnV92josaqNG3h5e%2FN1qvSyK93FE4ZaYLpPd7F3xkGlRULim27xQTPBLrFaOeTlWKaAETFV9NNFTEmmXN8wpOop5HcIkHqiooaMNSZLW19r%2B%2BiYXOb3ez3l4qGGcBBTvcl8o&X-Amz-Signature=9fa7fcc20595288483caa42fbaca885717de6ab654fd6075754b4dabbbef2b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

