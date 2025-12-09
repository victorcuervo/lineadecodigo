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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HBMDRZT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2F0pGtP7JGgvQ3jDX7sdk1xm5%2Fy62rcWWUYCoA3D68NAiAZCaRtJdOocOCgFDube3IcX9DfRpiOp8%2FelhjMnZOuaiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb%2FEGly3PRjZSftNkKtwDSZtyayOmW0wHqXs2PzyZChVGC82Uf1KZBzsNX%2F4q3m3kJO0b7vBuiswkygMNefyPYClNCS7sR3yVCvfjrFkL8Tj3PrziloALJV%2FrD%2FcpdaRD83IeG%2FMx0fpmWlawp6tq6dUBEXBbI%2BWvEP98pJei7p4KRPf1xxdG%2FaNYBeN5jXhOar%2F%2FcsNP44a7re%2FnMypKSOu0OBimtscrCTTigdooMuS7zOMD1fC0DOjjUDJlymIGWc9ZT0nhYHT8VH7I3qXEDJkDRX8a4mGLO1qQCsF52JvLIIU2BBpPzt05Y2RNuP4iR5WXYKWOQEGscQhdGDBSUQZp%2BhQjsdxwHV2mLwY%2FcQ65cqmbCxquFiSxKLtK4rlnk%2F%2F7uea8TPJv3GZQwmNY7AwpmPouSRjasoT7y2OKzvTxVXXU4DuPPefNMbyPKNmS5U%2Bh8rTXgii9SF51%2FqIkxm5f9X3rFwloM4P5XEj4ITCkhj54%2BJ0Y84%2FQ0vtMpfw%2BracnJAf5PE2AWA%2B8jRF%2BfV91VaeyOspvbdXxDYdlxtGlze5t89BHCCiGCptrNhQnxqFBRFiwq1syKZ9rG1uhgtQngDcnOlothlIyUYZvPoTDorf9jMhMpRAKfvWZrS9cK2QJq3miiVrwYWww4eXeyQY6pgFk9IDCeyc0ydD7kVfdPhv43pFV2aMLGR7QL715vS2MuRi97hPeU5IykkUFwhCKjfa24pnJWy%2BMyVioD6VksMuhdZhU8fR79ZizzzG%2BWXWsODsFcS%2FwHvFqYMHaxOll0kd8b1GkeJ5PggzlSXofwrkPpCo9DQnNqMsdkQ2QY07OxaEgn83mDihAhBKQSHC4sjobMHgS4%2FvYwS0XpteLwnvUbs1dd80K&X-Amz-Signature=b170269c65ac5ba7b6dcf43d767c5242c70ce8e55af7810c54d68ce37c5d5486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL3ZIFKT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGPK6jnP9Aw4fSe6lRpKh8lEIm%2BI7tb8wx%2B4J3Mqf1awIhAIDK01ICUdVSBxKL4kDhbSC2I%2FFYfj5ww8kB4hcNHp9DKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLNM65VUL%2By%2BCfQ80q3APNxI80XqdRa9lKVzB8u39H9VLJCubkn1GdJ5EVbVGk7oZ9hHcvlb8OCDPkwvDfFMZVG83HYumc%2FongwBU0zhkzpzihOwk7obrfNu8YMiEmGpKpaxeCmuUHJKoiW5ByhjG%2FWs5LnJN%2FJx9WDWNii4tcS49%2Bt%2FC4rqCF%2BA8GPdUvzMjvjZDZ3DmhdGNk8en9RxF5V9eKTNS55EPg%2F7yKMysXgjzRl8T2cSe0xHFnkd7N%2FxM9rYTG2y%2B%2BjV04OUzd79YccSWcRQ7NumPu%2Fe3nIYx4sckR1BxV0fVo9ZNWfe2B3qP2NENoFZHpwdrgIF2aO2Zc6SM8WHvmr5aer2%2BUvybvA0velSJjVKvKGHBZHighr14ELA3%2B027MFOpBnFB0Wk9tG%2F1Gfi%2Bhea45%2Bkc498vEjj1VBH6Y2zyNOk94i2BiKErrdvuLOnWoGM3WeKBAZtNzIEsB7vGwTTfNCJCPg6Q9VsXQ2WAdDxKJkv31SiHbXU%2F5qU0LsJBMCrJVmfo%2B6YoXlMy%2FZphzkrIYXmQ6p8y1PaBKxjOiBbwY7%2Ba17nHtsnNlJLKJ%2FXoyb24gKi8%2F%2FkxA1j3ob%2B%2F3SCu5BRB6rkzYMYdZECYPXrB3%2B1Ah8kJsrWC1MgABIUCObqTnBzCY5d7JBjqkAc9TnLgJmMEZ%2BIrRX9OyauAL%2BuLm9RsM53UM2O7gvphXjNQaklbyh%2BjRH%2BeEbv9FyXAz53NNWAcn8rC0iP6uiBpDkyubJl7rk%2B4CbYWVXiCJ5g5diW7dkGARDrA0i45fLAQhdjUqYnQIYl1zIAHg7Lly36npBWvXr0ATTsItsrf5diZG%2BjKbB3blX5FcdbCK%2BFrKKRVBLF1jPFuG2M7Gh9JkqnK4&X-Amz-Signature=53d4adc2d07c516f5a1a196edd0b728f6a1158ae4dca79f9566b65153fbe46bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

