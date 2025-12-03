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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE7FHOBL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T055021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDh4cFGuth%2BU%2FqAMusKSmVr%2FjBGISDXezFpUxigBnaqJQIgK3Je4cwXuXWDYi%2B0l9UeC4URaLXxoVaYPE9I%2BrvM0zEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBGnLWxjgDx9Fe1wTircA1BPJ54tsjVOv1RLGnjdn8zLXPAUtOhPRigdYRi307G50bm6ne%2FCRm1qg5oVS3U2IQsZihn9Hiq7%2FReQETgwy2uBf9UoRKEmmJv%2Fj4yOh1V7ZykZk5pnhmrYfcaFhuXKv9%2FJkZbfE0kbdItJXjA9QcXkQ4SWas0E6fUv%2Ba7uvum6yVffFpNgXroWE9%2BExSEAXrxufXrFJOoCWjoTwwwaGOEN5b0zfpeADfEXOios8IQmLczaN0QgLtcFCgcLKREhz%2BkrnWCv0X33AJFXuMudfpxqLW4SqIy0zLqQqoii3J5nPBTxZYodGS7xaEMW5%2FpBOBdxDx0imzSxSBAFVX1FLdQaGVmmVPYRanFHAhb0yLC%2FUZEMHkpDpBFWiMXb4tszoJQDqa7vppIFK%2F9stvdCgPrsdIrZ%2BVNnyqxBUO1U8zeWXZMAvq5yFrg0V5wUOlMNBtaWXHrDBmhfgaYO680OFy5KjOpA7iGC4wVN9l1jsq0sQfm6%2Fioiec7MGXjjUsbF0qsJzEF8Q8x1j%2FaRsrFlTHjgF1TXV0Vgs3NUVeD5m2iySehUS%2BOmMjZWthUPVWHpGKslzgAMuH%2FSDbXd5vfXzBH6YP8pBIV%2BkRXeKGUWwkrFW4ko%2BVyzgYbpm5m7MNuav8kGOqUBlmsJoGuaUWgRHY%2FskW4XN8HcpiKOkgcf3fWpEbGBtKTRaJpoMrt0oiMMqUejrPQPg8YfK374liUH1mZMYp77lDzMM3%2BLF%2Bz4aIHBJWt0a2TdJBZMkcwZ324AfKDGEwbPpdwfkxVS46iiBNNoRCTJNIAp5oc6lNclPmLEkMTk%2BlkcJ94lFJUJlSoJaH99FMRUlRN7Klm9u9sFWUt2Nzgz2XyOSi6W&X-Amz-Signature=0ef5af7b5bbbbd67fb30c71d52f0ac1cce85eb636eedd89df02cc2abf5b88e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466267O3SLA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T055021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAR%2FD7FanyeyzISDr15W%2Fyd0g4jzKUDfBNKgbuvKd2DbAiEA0t0KffXlhmCW%2BGD%2BjVAy9YoXhir7kbKkqWl1f8W5dfwq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDF3LEdI4SuWTp4441CrcA1T3W5neE7b13LlOUtgkpbEibBqJ0LTn9jMKxKEazYowXnTYWUG2KXfaxIVc4HQSt8LFnf1HnPiusPYJocXgn4Us%2BsG9pgR5%2BR239r8KpfSoS5LEp95V9tbWZaKX8BNOArgjORJaE2JToCWd12udSLb5QILBJkMto59%2FI%2BtYgan0aLsNRlyhY1EipWHt80G4AKO%2FhlKehw5cwrzmwjDEdXD9h945%2BmprUrK42rcs4cOi3hTX0NxN08xarep2f4aanMaP0n0%2F2pX91s2Hcg8BKSzJzB9x%2BFi87sRcv65P%2B14e%2Fijjp%2B7fUCNBy%2BTF5ZC6wfKlGje6BKX0XOJfg2QCCYoj7URKjXnWukKvKZLL0O%2FGzztTj2b65M6MzZ3boGqIgPp2txmo8CLVjW3fXcXO3p%2B786tcJYWLZsVtwyjk9DY6r%2FhRxkdT3PDMGAk8DexQEs6i28m6U2k1CY1RKPKOzk4g0Pz57c%2FMxt7a9E8noGpw9WDgl2cbRS3J7HE40YIJ22wCp57LnxTAG5R%2F52VVnWlfbIoYIgdjf9rU5H3tZElzswiGaMCuhU2NquOngNAUuk%2FbANV3PHpCrtcABO5gYbOLyeLzaHPNrBj83L%2BGj3qwNLv9hDH2BvD2YPUpMJCav8kGOqUBJ%2FZy5nDTG0tZonIX1aLV0l0CSxuJ1m7OqlJWoWq86vUKO5i8JuoPwpz7YqVbT%2Fvmzb9XtAak7QvFXcUUtIonZRMh8AvKMKH7v8Nk8WOZwub5Tk8Gz0UKVuKaCL2yxZac9ZzyJrbGwHRZ56n59fad5XkzGLGcol%2BDbh3Rr7qjdsi%2F7qzu2X%2BEgp%2FAbvKs2Zj0UpsXaDEeWI5sxbt%2B7rW0cxjvybHA&X-Amz-Signature=190f26a3afaf8eb59f246fdd20e173e63e171cdd31b51e230293f9d69450f11e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

