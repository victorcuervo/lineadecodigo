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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6D6FVUH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCRnR7GHg5XRwdCImaJBLtQIwaNGqiqoTe6zfR5fDFYUgIhAIwDgltWgynE%2B2NNXkw7AaDNIk4Hod70F5xCLEA6YTmTKv8DCCkQABoMNjM3NDIzMTgzODA1IgxpI5JSVfnuaGQ2t14q3APEvBk%2BCzc5SCpALOtFNHJKWMLPnOhmmSvPGX0JuUCA2AzoVs9ktsnCDJ3TQTMDuxMqQAX6bCyaGlkpLOTn0K8kR%2FbpENDYWmHZ%2BWPhBfRkgrK8n7JBitcdRtzd0u%2FQqwC7IRe%2B9vbs%2FqxlLcrWPKzPnszERUQw12%2BI1VkPhWk8fH6AZZJPMSgYbeUGWTdIxFG7eAQNlupTqP6XPH6xRkC1KRDNmowpFlwJi5y447hb77T6c%2Fv5q8R%2FUugnvUAQR1mRZnHKu4%2FBRngscxDrdCkay1fl0mnmS2n2ZKGLxh7BWhtOtUSO%2B5lUSCEhqksCaBXZJeLR8dKIIrHgufrefZcdF7KskDVFFWG%2FZFlgKsF4Bk22i4lebgxmoxw88%2BgygH8%2FbRNwlF67oc%2BUFve8D%2BvvfMHpaBjuVZNNhbm2mc06p8%2Bl6ftULuMWqerduFUDV%2BeOwWHLa8Z%2FJXrkHicNZHdoEqGCOPz5gl922RPMYNXXuvLPQHE2aTJRzOZPb%2Bv3wzxTY65YlltZHYFIRL2b7f7Di6rlhnQNaV8ZKBqc0yDjhBT9we%2FhuhOmbWRo6lyA1%2FvTtK3%2BZhx%2Fw1K7r7zmW3ioOAKUrbq2hhRbFi3S4XSFfkzoc%2BIkNOlCpVASVjDz1L%2FJBjqkAUASHDaX%2BCVlx1zX7ccrX%2FnWYk4NwIRs9C8nKHWn5eHhODqA3X%2BG8UVd5uxFSi592fz9S2oBU7fNUaBMBqZKO8ztzIGx0p1govE%2F2R8yn5kxW2JyKlwpLL%2BJcu0cmyGB1FJQIrPnbugcINLK2IkbGcKeO5m3yb8xeSYkfUMMzlhmI5rQ4jNA%2F7AM60EwzSCxDDfLE%2Fa1kI0Sqhyvwm2Ppb0Y%2BARV&X-Amz-Signature=6c847576e39fcfacf6bfe000eb837c835d5117c7685a60f4b9ca4013e8d0386c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XAB6OZW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDqz4o62%2FR0FzpqJosb4UVfwjZjm%2F5jdpStOWQyEUGZmwIhAJW2V89kuVT434WkNYZvF4gPp4lbFN%2F4piZmCEbYzkKVKv8DCCkQABoMNjM3NDIzMTgzODA1Igy7wg78IMhUuQuqMogq3AP1UDtv3gt9dfEZCEjxpnADHcvaDrRTugebgAaWjJKa8PsYSGzfx9WI5EoKTtfLsy3CDVAG%2F%2B0dym17uczbaatjmiBCx8yVWmr9Gc0ZIYJ2zgcAwycAckLN9118mR8RXvD2LAZ3X5qub7eAbbAwZmo33G3C6c9nAi5MIRLizcpEDDHIur7%2BOCLmkasPf7cSBM%2BuzJrZn4s%2FvM94xv5ev5%2FJ8wmyLbWvy6qRhyDJONMJUr%2BGw4OSyDfq1uJ8WH50AZPTv%2BSFUFJcSu8ROPJy7sf9ay%2B639HSY1%2BQ2rq7H9H9zyw8NLY7rO51yIAK9%2F9RMHz%2FoxqW0NqX7xNNYN4pkOODoejtyN3j75eRzYZFzm8%2B0pGFyCWgej%2FjS97R0I9h6GGCbzlwsj3YAxF%2FFWeuFdLb61jFcGcgyDB5WAQEdJmSEekoGh5c2e6MLjP91eG%2BOj54q7Vp%2BMi62jzV6iDzAJKegXpW%2BXoPnXMEtTi%2BYBpR1rfWHE%2FcFCZs9qezcmWcarUZTptnDACdP3l5cw5nc74n2l1dHqj%2BD1YFoFZ4whwVeYTYMMtxRVCytdzFemcZ%2FgwICXjEinr2u1%2B10KTB4pta2RjtH74aQ2mddF8sk%2FUCHjA56%2BdwRkIiV5aejjDr1L%2FJBjqkAaXPhbYZA0mnXAiFaG7Eb2BoRqDkBruCJUynmKtyLHKiDZoa4pqglcJ%2ByRLkgHo%2BPKqdxJP0cNIy7jsabHlkgW32rPgLelIrxfk0GTOgAOmUFrAkVKYB%2FEFnv%2FPD3ask9lMFmWmJHnTqqzMhslSl9WZSWpjQXRqiYzmEWg3NGQdSjy21FKOFVhZsbDX5PAqpu1191cH0zlHuYIs09RREdPKYi7Vu&X-Amz-Signature=d57f1216a87b49cf23f782081c1cc0886ae75bb54af506bccb2ea41b68d1467b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

