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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G7NVVPO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzV5ebtQc%2FJKn1QBu6MwL0ZmAEaRGA%2BSeqGnZ3Zel12AIhALMXKhHYSLz4%2FZXXw6EYbRGv1TGz4FnmMzJHjLgarieZKv8DCHoQABoMNjM3NDIzMTgzODA1IgwA9vyhFA%2BQkEPtF1Aq3AO7MFu4P49XuWKSCkg%2Bc%2BVrVRdx4%2FY%2F%2BTX%2FF7MSaOlaSt1CkXYZSnAOnfBWgVDS9f9vS3dYdiFy084SDckEwpTTTZ4Ydsow2117Np2nxJNlX0BsucDIpPk1D7uEpHVpbldj%2BvpRa%2BL1Yn1Dsk1BwzotKYE4tiVHRv2d2LT05E8K5oEr1i6vmkV9%2BvfrPFeFAcdivNb9zqhDsecZM%2BXS4JgBLEFwJ98vxkvBVWRlO3My%2BYrmvhm10BqV6wEcXaiJwIkcGxH9Ssirh%2FInf2cvH6qIE0TbezFlglpxGQZdfca8VAL884cLJTrwPUEN7EsN64JUCzwYXrx%2FwQS3YMRP6loEDQv1IoWozLhsywNoGCh0csp8yfnQ%2FNrcYEoO3XFBH9jSoxnpUfKGx2sJ%2Bes5GzI0K2bJbBJJ6Z0cI04G6BYO%2B7EzdIZY%2FnV7eLraWsn7kaABNRQNORvobQpDe0gAuWVoK8go5wBDjTm5wYzvMunROxKET7v7zhWJZ6k%2B91PWO8mO4TkslpbxB7QRyQOKdKZxO1ZJVs7xTAhT5vRhkQ1jc4hOt%2BW34MyZK4dOyjG%2BGq6kIOFKB%2FX0JxBXWWoEjN5alNtCYBS%2FoDHU8kHCL8TEXnK%2BUFaKeUvbfoXDoDCyxdHJBjqkAeu05TKNjuXxRfT67I5ATh87oRtQcoLNWB6R6mgdlCVG3yrD1fMXJx%2BngC8M%2FHgtxXfluhILOUTB9ZgEd5ukKcaexXh%2BQXfeC1UVWN6UCg6%2Bwg16HO%2BXV6kcn6nLsN89CRjdy%2FYp3mGrt1wl78bhIeDp27LbN3%2BkyrWEwKd%2FU0NlO5cDq%2F%2FVTaOmXBk1ApjQkDjDN2hEahU1FAXB%2Bq5UxS7pLSgm&X-Amz-Signature=99cd85e19d397c541e363eab4485e0a7e75295fb6c4299ea941ab4ed3c358483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKVQ245G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5X%2FDOMLOV4xK6YtbTvBTBBIDOqlfgrK%2Bd6d8fNGh%2FXAiAwdnkYTFpCFxds%2FslREmkdh76wY4EI90TsaQDjpeFEqyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMt7fJh%2FU14gJ357ntKtwDeJwi0%2BbI6fC4mrpxmDuhglCnfGG77K5U4mMeLZMeiRz8vyT%2Bmo2Fs6nnsHy9xrg2jUc3EnnDorVDx%2FeZL3wkFgv6B65FWl%2BLZtwXFdfguidrk3l5i9h4bV84jirl9CFDKp5NBzTVywQ%2FpPARHAEBNNfrCCGQPWOjTngESxPLKTf3IMUG7oGxjUuKmoS9Y325Mz3sM5NOiCzq7LGrhX06yrudGAA4wAIb0oGZZ6WcvMXRhhYWi6w7trgGc8fEk%2FT1pEEQy%2BXvgTiL2zWEEPghO3GLq8WB%2B5J8GKHRxKbyjFFbAZkdMmwmM30MQCxQyruN8LsR4LbYAJ60is0Kv9gUsMYCTzbemvs2fUBM%2F2WkLu9lnssolvK9j7Y7rD3lTvjNFyp6gUCxF7F3J6dWiTeoqMWbepouCULuyY8hdITU6Ryik%2BY6YFd4wvYpCNDK6AVurg%2B0jrgus29w9eN%2FsIj0Pm1meRAHt7mzrPIcGGbN456%2BBBJH8C779YbC2o5XgEyCAsbNrMuFpxUTLA8nOHbYOqyODHXh4gg6DmSVSpx5SXolbktTAjbNRF6gTGYol5%2BjHicmFEH1socT6LZtsifdfNjNPc1v5umBBECyEtWXwKCdYrz%2FEdRRa3%2FU%2B0MwqcTRyQY6pgH70djzLh1j7GLgUn6jZLZBAs9itD2crcs4J60xkH%2BXuoXrZZn8SnzAMxnWQA4a2oh9Ik%2FB6uvpP5r1V6fdIav2U5b%2FK29oOaaPq8j4bDyqBcMbN93DY40QHETXrXwThV7XjC8M0r2ZQkjlCQnQYJWQFxHK0OQwUsj0rqKsNpl5KL1rkq218TkjVI2xQ598949K1fFfSXhFXZeLpeMQPYsxoQ0NfTgr&X-Amz-Signature=048911cce450b5768b4ec9a7a20238250c26a35ae88925f11d8e969deac06433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

