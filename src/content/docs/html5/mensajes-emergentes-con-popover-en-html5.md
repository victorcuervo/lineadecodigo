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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCJIEML%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAypQsMQ%2BrTlotNxRuorjID9w86mL%2Bq5EcqIYGvBoVl6AiAQXaRHgU%2B4s2ISxtHReAwQGPTWfIYF%2Bp0mq4Pq96c1sCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMeTjruBDqilcbGMa5KtwD0SZ866cH%2B5lyw8nDst%2BukP93L%2FEJLQX18JAhufG0%2BYkuVe6K0zl3QU17MPpshfQfErJ4%2B%2BztkAQQS4fUS0RaSOTeqxLd9%2FHo8KvLspX%2FE9GHVP27PVmeuk1769VB5kcf207qXqq0ZtXJ0nWRnOfMHy3zrC2enDaNV10WE2vgxdnQ8YE%2F7hkQK0A%2FDI%2F0G4brX2Jl8XsPM7o3CsdLLxuMH5Ulr%2F39ynRQXxEZXDibijsV2DRumC68WT6ep5ROjcBhXG5tDoZ0uQPq%2FWlfItd9%2BDPKcFWIPAjG%2B3kvbKDSsk%2BSB9L8FDgdZwTNG%2BhoA2AVtyZOnPepM6an8g0IZuXDLKUXbH8CXX%2FkgEFM4ZoPvgoSItkpYzfrasmOX8ZSVPwSAmkDrqki1L5JhXe2ACdUpEGCjR5Bm5XveIKlX06HnRthar5%2FDN8CBsE3SAK2d1pF6WVQ43Sc6ykgqSPhvIffg8Fjk896kmxN58aOqnWrHC0B9NgWGTOpSpgbV6Iqa9%2F2jx%2FbXQZLU78Ep4X5%2Bj7ldBFpFCjIurTtH98dCgc7qCy9dhaCALwGnE9JRIneOMO9o1GDJ5b6EvyTXZ9a7LQbaGXm%2FeaQ8U21nzW96x0VTCnG3JGNuJm%2BkrlCBDUw7qbQyQY6pgEsJtrJiOTywogKxb08fn3gI%2B2YbDHin%2BjHWsyYAtMLPcNtfoLXatDTa0JwzP5edadei51kxiU4r68t8TuETb31hSXJPAk1sUMvrPqIWUSVPGCh5vyBVQcUrGeSErVCnkxRknSXqwKJARNmxCFx3TaWM9Qj0a602B27135WGcvAv%2FyqCIDgWAN5%2BbpyMzE63YN5F%2FsjY%2Fvq48L8TBmYVpl9ld%2BDBhgK&X-Amz-Signature=e95996547eebc51ea687d298e9f812056b53d810e671d01ea99ebe201f9694c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGA74ZH7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGmCZIcEjOG0uNNbQBQAckrAdQtYx8NTWNG9OhOzogDgIhAPgQ2nB3ZB3t%2FWVVwje%2FZXfZN1KOtxZTlQF3zZzXQfvZKv8DCHUQABoMNjM3NDIzMTgzODA1IgxcRNRPIDoQbIeFP8Aq3AP2s4FixkDtV6kmGhN6lPGGf5R5vSD3SQg7wReW%2FKyoGKWXfqpYWrlIGA09fWQ5QYbSP381fYybH83tGJmtkwzaMu8PrLWYzLGMp1Qku4REpJonoEWyacZ3HrCrZ5mXxNuF1rKZ9gf3lGLWjgRgq9wKLfNqIzmhRcNs5SlkNqnPte5TF6KMawoakTT0MLTtKSF%2BJ5iOwr6OnThE1cBMGuOf13KZWcq7yyAERyyiiLszjfMV5z9RGSLoej3%2FY2DhoV4ID1zclX3V%2BiPAunuVT%2BKIp5sPIQCCK1zd2yqOw8nn8oQKDQikIqtxDyX8iC7A0hiuh5wQfxK%2BnQ558cxZawUX%2BFy2IinNH%2Bp%2FXAIDxfQ6KT7Ru%2FRF6I8YBJ4HBGkv7cmM8902TzzIDJWLiOsRkAFIKVjeMEmUEHNdQjd%2BXg2btU8WWhea31vI9ngPuIHLeg4BHvRTXRiQKZhIviAzcfnK7bMkGjORACjjVMNlR5pxADVq%2FbRchBZXHh0xkMh02VTcx6J8DOvfbk8w3RaLpLSC78JbsPKV4LbXucP13Rta7ZzUwNBMF5qBYWmTTy6amoo5Fv16R7oUatSTtimXoCiJW8bqyfxdWyGBx1bJ01JdRlQj4KTD1TLbCt7IlTD4ptDJBjqkAbbkE658Fk2hWbYeH8uS%2F1R0QcpgzVtd3eBqi%2BeMTKZ9HTLgbzXFVBs3EV71ofASnO7fsMJwSn2pbxlgKMqgzMCyaMfJuD5GctwvwYnpQbW2sv6mRbd3Q9%2BEglcy513jbtK0u5PlHNT7hC2fa7tYEKaNjkTTv68M1ZmUg9%2Ffm1owZMzFc3z84R%2FuCmzLrZClbWjAitG%2FaJYZNDy%2B%2BYm3TEQrPLYX&X-Amz-Signature=65c32c9be4fb9d6a294e1103b5167b776b7ee6ebd8614d340a499516c269fdbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

