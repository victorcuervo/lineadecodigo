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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VX2ECU5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDY7nfk%2FrjkIpMa0F63TwJKwMh61OhdDv0VF10yZhPKIgIhALUafGX9wpGwIh%2BclLQtsRiovfyiLyckl%2FvA7MaYLd31Kv8DCDwQABoMNjM3NDIzMTgzODA1IgzRT%2B6y21IGIM7pIhUq3AOA7GsqtkF6hP1YfYreD1d6d3woxg0Kkp5hHOAoZMxhCelA%2BKZBaj%2FB6ruRWLc3EnDBsxWen2elwpn6O8cJ7S%2FeFyVSDfSrIXbbJnsIAzceO8BrWiAkb9IypyoVqLE4N4OhFLdi8bL%2FCaGONIuWU5ABmudbdNRi3PFZGuQDI9MnENmDEcLzdxOnCTT0s9yGn0lz9gI8CEgJSXGnSQnwwkNg63otZejJeNcYSthyHnby5jcDLnV4t2WLU83Xo63s%2BU2%2Bj0vOEscGy0el%2FsKcW%2FRfNDh6ce5Q8Nty7oIiNftO2j1ydOMuLLrQF6h4YLG0wJEUKdq1xzxSq1BjBWfjspZxR7pHKJC7N14uEObzQtM0EMWfz%2BBd0tiH7tWg3KilFXS991otYSNRSLeVDQ7krlV9HDLv97HgojzfbmPJo2qJ5fU2FCdR5Aa5xot1y3Ihh1LJnfKwNy22vFsaXrINH1x3XBeXKdJnoOsQUr7R3J9m18gsBab7uSXIFuIjj%2FQjHxlA8CnCWB3Pzo3yyjZbc2zMPFNZowBokBKWlC9LylrIEWS7hnNFvdNUB%2BNhSo%2FMHvr6ua%2FAbjiR%2FmBgzX%2FwlQCHkGb8xoWaWOO0xc2s31eB2LVjq%2B%2BnWMNE%2FrPR6DDp88PJBjqkATU01w7xyIHOui13uc2Y0NAx%2B6HAIl29nLN50i2Y%2FQx1Z7Q03veAdbm9Zx1AJUBQWPRw3xj38mte38TuCL%2FjoYGd2YekxJ%2FptcbAoFtHGX1ylMwrSl6F9npqGmTgj1qV2NVnHM0PRR%2BJMH4mbD9x%2F5GVDGHbfXxXWwI3Gm1Kpw2gqLjpma0y%2BB%2BLvkXDtcNOiz5imIMHIbTXU%2F4PS6gE8QUqy0ZI&X-Amz-Signature=8755d251cec15516fe1ebd8c6c537fab191d2d1a4e58d536c3291910cc8c399c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J7VVNE3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC5OuMAr6onMO3wOdxOaCmjYmH6Kr8sy%2F27rNdIqoT6ggIhAIKeqNEVBwgfgghqZKaUMNT%2FpmPIGNTiAZe43oVGR42RKv8DCDwQABoMNjM3NDIzMTgzODA1IgziBDGOQt62vVPv7i0q3AOkl1JP2Y8wEEXiNZVfGCMGhyzeRSMz4eFvuc89KneFDPY6GZd0bzQaky5bNbMA7AUtQlrAJiCcN%2BcR%2BztjtZT6uVpgNg7kKwjSR3UPrmipPMoVI8i23nqfWppQHAA6Ki97YRZBrQJEEJRkPpurizBujFZ%2B3m3WRFwPlQl%2Bz1SiL7sNmVko2hCQUEZUxWWAF1k8n%2BHmHujMn%2FIxgQfvfshRRoFEcR33NVpT0zGzZ34%2BQJJ34%2BszsL5HjglL%2BAVPeBplCIqd0eqFG4tfffHUmzS8LD6WVuBR6S5S656flYPR%2B4G5fF%2BTOpnMV8u0j%2FMm5kfLaf4pVqe8jq35JHjnZ2bQsdGTrE0NZbI5%2BcLjyRELWfnOv6Y6F8kkZ6dudTO%2F4WGJxL4M2dk4x9HbQBc6pEnExqZYOgaPEw4n3gRqCp5PpCtt%2F1LVOVNniyVE2TFfq%2BySfubzM5ycJFnenT%2FigBpFkS3w1QGiyUijUTxIdmP18v1PmqRe1clnlvGaVLfuCp5a5nOH86xpuxk73oahmQjSBxv%2BPN2FHNBJlKrE4E3Br59%2FGpX4NbwpMWFlPY8C0NZCY%2BOu06U1laVuRNQY6I4AYL2fYFI3xoCWPW5kZs5xO7sn3HL89LE6yPFzNTCK9cPJBjqkAf55mhpkyP1l%2Bpl4VnQBBIJL8Lt0BoplnB1ul3KubskWmgbkmuCRTFO5pveUym%2BPNsTXTtxbGPSM1Az1qaungoaTe9Bde8R7IiT9rtZzMQfDVCf0IpY96cGfu9lnbRXG5LeWUzt7OGM1Mjsovkeu10aabYFFLlqWp1ACRXwfKzI9dCt2VbQCszwPQSonKVUbPV6XhZQbzQTV0Uiqp%2BrpNzqy3%2FFE&X-Amz-Signature=667223b08c43502cf02749ea2247b85cb63b8325db22784f837f00094e6a82db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

