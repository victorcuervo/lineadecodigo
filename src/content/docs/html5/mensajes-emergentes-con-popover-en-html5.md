---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIUIJK6F%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCWlTlS8Oka2APpCgowf4ez65UAvnDFMRfe%2BOxmUFaluQIgdJHypkW61KYV1t0KH%2F3aBjQYfTys2jcB0KlpgV5nvekq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDHvp7YhVOhwdpUZeayrcA3bI5IMdrQtZboEbJQcN8P14wUCXMKRd8xh9qB%2F17yXWp8ryRI4aqe3R2uMmntugMl2mh3TjqQoiV83uouGccZ8JRZxEGwAnLQo%2B2d4G0ayvPXR%2FTf%2Bc4EwVRexrgdZq2Z3ks357XQ%2FmU28cw0YRaKkiRnrskEaW%2FH4CXBeLhbrvC5nsuIPbCkt8WU%2FG7mROnFfUi8Ugshwbh0OTOczy1oM1ByK%2FqdWix4qFyUH85A%2Bp5GoW44ncY1Jhd9ra5kVa%2Fl%2B9ASS0nc3lrXVbgH9z5sChNY2I6vRIjb5%2BysutfNFysRYABzW%2FdJqC%2B6%2BkAL%2BkmNuvgqQ235ao2rhBFOy4C6pVg8fiU%2FplfcqPRxKrFTzHDwyXDmdAvG2vxai2cHdcJxffABaEs%2BDW8%2FEGe1R0IiJacnMeMaq%2BGSb0Qptp9hMe%2FS52LG5sen8OfczerE%2Bn2S2AfS32N9W0xR9VJNAs%2Fom73HtZvb4tqpu6RtAlFRIqitENFkk535Alj6NpP5ZMrhdJ1P99BE%2Bn1rlNA%2BHC5mARxWIUrRg0Xa5OBzHStUOVE6e8MoDL3L8wAwqOVeAXH29LHWxiSkby0hOuv8WMWxd1J0kYIlG%2Fi9eMjYD6gcA3BsePPjtyy%2FOo6cDVMKK1w8kGOqUBdroWyfX8qByC4mCOWkecuSbjNBu7RsawKh6ygPznDgtYI9xDgnWbhv9QJyu%2BkjOP%2FS3oP8mzvflYEnYJjki%2B8Em4yIhN6PGN%2Fwk4luDfCGsWw3u9bos%2BUXkvJ7ozV5NT2qC86RlOltzbj495kiZeqewtx9XRWU%2FMwMl1oyDovdkfO5w8G7NlCIttyW3tg0DWbRz%2BOUEdN2vkKtwTVns2dKY1gazh&X-Amz-Signature=d47414cd2c8911f3fc7b7f6b0bdaef13bc210c016f5d0bee69e3b830bf8fed4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIHMJXID%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIEqNgq7rrDVqgvmRpWeEI6BvhnqQmYU5L6sIIRcuvvyGAiBWR%2BNpID8MqcAA8usC%2FYmMkyov4tN2ZcVHM6vZBlWKrCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMNhxb1YlRWU4IE4NnKtwDCChXHI45iCQvxEa0Euhk%2B0Bu%2Fr%2B3z8%2Fij%2FMaUh0o4rxPKHS9BlTNiE0n%2FUEPjFcYfMV25HxH8HB0JiltqyrTCv%2B0XiulLE517S3DnJAogMopOxNmR5EkwtK%2BM5CQWLAgfm%2BlmtTXmNs%2F5m37GVF63qM3KWIudTWbCNvKkK7u3%2FNxvSzQ%2FPF%2F%2FviZmu8CdyIjR43QbwANKZNcbtVtxnc5AF2G9hp77IzNk4a66l6p30O36fbDLlG9xhD5wwg8HbtUwXTopXSfRazqdsrFlBzDOoJaUHF%2FIqaC3Ujx1u%2FdHRv7tvpJCj31SYzYgIDxGznyj8ViazhfHaaMUE8tkr1OlU6LPy7%2FAdISgAjgtuz6hsrnug0Co8L4NKmWSBd2NNUkNR2AHa1g4m%2FRh4%2B3zLdlNffdmTkzy6VKNOE%2Bb44s6nL6W%2BpYZ7Bhcyboc6dN6qSnO02hunPesi3zmMoyuZPpsAxk1Qtt%2BRa5ajrQZJterJ3lFK%2Fi8fB7tEQawKkjLfSmi%2FrT0L5s%2B9dWAz6c4HFYdB%2FzAkhf767%2BTKiOb5beWa8nSd8bVWH2dHy55Im4aKLDbbw%2BFt6psryP6V%2FL995uit2kQv6T0Q2AUUeIJAOri8AMu3B92BxaS8lkSFkw27XDyQY6pgHAZ8GUqJUNDKDtGVvx%2Fzpt4BBwzZz7CQzjSgmawGsNwoRf%2BqSAQuzqUvHnt6xxF%2FvcYV0ANsTa3wlIqIwu1Tnk4IylsbjDm5YzwllZkynOvFFSxVOUHdEinl4WKE4eQS%2FBhRw%2B1nZ26N9JFvpcNzqgPdhUJXpuVe5nF2aCX%2Fi32IJzzCmzgkZXxqFdodUVuBm5P1tXbyAVsFx2OyEXpkSYGD1dapjt&X-Amz-Signature=143be525dce8e7cb3f51f12ff06889d4813dc28fe8fb7f91ad391531560abf72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

