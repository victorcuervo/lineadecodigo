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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6T7CXJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9ZxxDKeRKaAWFaDnRU44atF5DRKewlOCK1KQCOcZZrwIgdRfvrKCntR8Q30%2BDDN2XfNaTOTW0p%2BNm0t4l5kbREaEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDB5eLw3LFDW1AIktXyrcA2rnWPFtnfP9onizTfdsRL7Lm09p9n5S3lP7hmqo6RYS8oT%2FEbKc0tlFUgu%2Fowh8IQBiFKVeqiET29wO%2BDgtIKwYurZCs0m%2BFV3NMhgDeXLv7TXl%2F3%2FC6MVemj8sxl%2B59qC4Q1QON8UatcXHGll6tA4IVeNavsnNHZ7758vsiImIG82%2FymhRrVqYuAxXjoHOobhvWUvo917pgImGTtyk0hBG06sklrZ9e7Yni%2F40NBvWdSbZ%2Fg5ou%2Bjuw2fhykU23GTrUF1HZsEmR3twa3hOvIhRjQmpLSylSz2Q2KFDuwXTswECqdYEYnMYZOvmW6M173EWFvSBHhVBrDv7mOu1Y7RHvCjL8Pusx6Y3%2BtRNusrIi5a4SYawostoJM%2BreLeluIogp9eVQZ98tnKjae8oQ1%2FkZoCnD5%2FgxHdwG74kf4PvqCYN8jWSKFOx%2FGOOd64X%2BkAPUy3UHmDchfB%2BqPaxd1d%2BL%2BdM%2B%2BvNorNex657KBKXJg7qoP%2Bnj%2FAlR72WIrPZOAN4zlSpaZhY5Qn7KvZaSBTsUqivE7qfRE7C0Ddisl7u%2B3%2BCcmlRFpBb5YiSsqUlFnmv6aMdn%2F95Wjd2hb%2Bbef4w7GnZVffcrehYKoNbDGA26ge8RpzjV%2BOUtU7QMJXH0ckGOqUBcAOfafmuHLC6JpE9%2BEbNM3gpFR38DDbsVRkjfgOTSaZa%2B01UCs446qulm7ojbTX7Vyna6kbJa0kzJKunb2QwQ1nh0j6QFJbiovImbUQB8AOmt3DKFySDILfvRNzlpdv3pN2JYoImdf9PmDYPO%2FpAXwfD99WU%2FQHsU5KXsPRtSNhXY7XC%2BEEDWXX47eigaEHsqCq%2Bqkays3otMw8HtuYiyNReZI%2Fr&X-Amz-Signature=828868e3cf2e122324c4144bc2bd83c93e668ff40d06f51b7ef3fd91a2258ace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657G5U3L7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuoLHQCVXRbn5UCmdv%2Fasg9evPPyNOpOpLxhywLQRjgAiBkJIBBwlfo1mtwRemfP9Qg%2FTTY6hGlxFcLtmbZAHZTgSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMQN45%2BRndhKWkTwG0KtwD9bxznX2iT2lTendUvWjeJADmUMajS3A7yAlPIowj%2BSskxRY8tAL1yV0fjoml%2B14cOrFacr4hBOQv78wIlS2uLy5eEcNZVdDlgriVb2xZYjN8NI82II%2FNhNIyVfBAZDgxGFQG2drt4Yl9gVdiGZBjhhli%2Fh7hws21PbPZp5gZisbNQ4YbItVgxZEaLc55CBRFNra%2BinmQfT0JuT79hhvUzxY6%2FPoJxtugN51pCq5H34cSfJLlu8MLHBfQPfMkCxTUW779HkbQz2EsiGneH%2FNiYMayLYYfyrLCoPZpPVufPMuobB15x0ccPT5KQeSNxH43eRj82vz8Zim%2FoQNmhnWlaI7xmjUEtPbSXoNyjrXFe58tLqzwN4%2FJCOxoUZ1V%2BQEpYbjYvba7qiy3AmKjgk0Bz8c9xvXRhpAr2dM9EIE9%2F5%2FhBTUPbeq6XXJvUo0fTg8q9480M0637zVmbWgdsU%2FXV79xmKNyquQPe0gK5COuHm7fyccbQ15BtKhf8ZrWGGgXM2WzINAI2ocE9Zo77cInIKxa1Z9ZTs5w2TXAtPe7woCow4Wu9bT0Siwy6mVLdiJkNx4WsViODwb4sm6nUpwp1eEJrmWuHAR%2FBnmuV2wHgHFzSkYNjaZzLT8tmfww%2B5%2FSyQY6pgHggwjHrnCAZl034m5fxtSwnuJqmSMgyZCcmBOEIyv8%2FHe8JZUQ%2B1Lmmf%2FO1CnGF6beU8C2am2I7ZvAEuKhCg1ze9AyrqB2PrJ9z8rTnP4%2BUD87U47YfzRxThibEcAK%2B%2FQni0F3kmhxG%2ByIogrrI%2F6CuTcAXf8Cwf6ujaOR61lT3UEWFRGc%2Fi6ECmKFQaY9Z24SPIzRpIrBZCNy7SaoB7hpxRNHa7Zb&X-Amz-Signature=5f312c6c787a082509e1f7895f46561a52888335aeec48e3a075aee59b918695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

