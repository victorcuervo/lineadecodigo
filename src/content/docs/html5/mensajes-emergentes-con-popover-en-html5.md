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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IN5J3PB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEYEltQ7h22EMPEcbp%2Bnf%2F3rjL1f2799udgcveSuy7P1AiEAxZ2qrYBJP5AgJShu5YaLuRWAJiiipteSOekWxW4iFSUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFLr%2Bw%2BTjjBFIDq7DircAwIqM4YTFqXh2qvQ6j73uj4b%2B3FA1XCCf9Ky0vXQ%2B7wGExE3iXNUWpxAOWIxqIWlGwa5cOyEopJVV4Iil%2F13SbHU5kl2pCY%2FMcf6S0VUvzOle4vpDunxDC4kxnyQeNpFABMRADl78m%2FdH5vqWJfdWkeEAy7Eg%2BWWuwVJ44y7dhBNVLQgGIbhXAqjUCQ%2FhebNxZQUwD09uN7WQWqRKhpmzwhmzjqJj2vVknKyIrg5T5iMuaeFkT9k7eP3j0Nhjb5NeKpftQfqLciuA%2BlDxKddkokC%2FO6jSkXE9Ar3UqODVNhpx13Q5qsNmHIElrK72l%2BsoSCGjn%2FRhere1CpjYE%2BIZGBIUyCub8FXR1EoqItxrWiEVEMsj43hL9%2FaflJ%2BnKmZBW4RN2WeW9M82TDDpLVO2f5ySTWhz3Fy2LKtPxTnafYfHB3kzxuEKlIIfw5kp9peEsYWAcO6I7LDlTy9qbGhsoHe8rrOX3JFIn8wvSjOFEAcaSe%2FOjzrqKvTkg93thrWcCrbHCF1kR%2Bh0jJD%2BrDkOFgnfs0obC6rD0d03ac0H4Q5AKXDTWuv%2BcuLkIq8z9WVF%2BU8I2BO43p%2FdVZS4a7qeYt0AoLPc244RCZEZ1b3LngVME5updMoW1vXd2fEMOXTw8kGOqUBkL9VT2BqJB0UyVLMhSuyo78h2YpBqssceKEpUd4rmHd0IwmMwPWkYLy%2BrjDevpmffjT%2F9hM3KurVxKzRYkb11HfQLUcOQuGVV0tfA9neYRFMqvsqSl1qkjs510fK984Hf6zq8ruHWYswSAq36cftlzfBhMIgjxf%2FGNdfI0JxGF%2F%2FrCj34ZL9NVBvoCjDQBqcPrQu6HZFrtrSIkM2KUl%2Fgr17oed8&X-Amz-Signature=3e8fc3ed52d2477e773549ccf2adde1e1ee686470abbc89610ff474db6a1e282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2KPSLE6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIE8SnaMS2YGwDoBFPClSjsAlhGv9jqpwyAxLWi8Z6%2Bf0AiEAntCScT1%2B%2BhnZSc2oAHBJlr%2FXvmW8Er343h1XbVB0E6Qq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGlHmZGadgIxTOrUbCrcA3A3IE4L5bijUw%2FXgcI7sHk41%2BoKMHSrvFi%2Fgf%2Fy1UzSBFi%2FQ55iXsShFahnVZgLHYbp0Qmdzi77YjV6Mkbw%2FiWZNBa13PBsp842qpF5Ff0k0ZPlmquu9Mejr9tONOAY0JCEFPX2GETdlK7nvT5l%2FJ5sYdFNHzEfpKjhhS44XglK%2FXHflfGmiai99jtxZq5h6mL0FjUJGhvW7qmk5iwv3m8xxhnURgf2OiCJrKUmXD1DN3Hzgp1lYB%2F9baIFpGNQrmfx84EytnEqBhehEwfoBN9q%2Fi1f%2FpTlimFWCHLnDT74o%2Bzd4kItzi4PkCxbPrt9Rgm70pKkdn4vHvmPTyw0UH7%2BHLC0DrRFTAXTPi8l%2F6%2BGS4QT96TqC8xqhC9Vba2jc2z9J7Uud%2BdKDYM3IUanRqyCCqrzjWwZHs93RTbfxNYhA4B5qkAA0WXC8iCBoA1rBf3gvTMAEax4G4s6C14UQxnSwH%2BNqXKY5x6sXzHhSTsMbnv5v31SXFU9y2y30qySn%2Fw5f4n7LdoC8SNNlqWsQpNaEkNK%2BZh9OvDvQP9HTBgYneiIzNNGpyJxmEjyRxK3IO%2B%2F05YkJJzZRbL34J5%2Fx4c1Y2%2BoaRPnYps4fU25OEfn015LwloyKgvDjxzjMOPTw8kGOqUBru17GhZiYWQAkzrlXDx0NV8IZP%2B5khFzlx%2BwZsuKjBQIt8YpVtcY9Bt9llvZjDMoyHUMPky9pzOTc2PeQT4aP3jPYSATeY2mOZQw%2BurftrC1KafKDjME3uL6YliGf91Syzi1pn6XMBnS4eVHb7pZ3%2BoCqq9AMnxqQmhVSZm5b%2F26Xg05dO3dpzgnU2IIMJflxN1eGSVbfXCBeKER9VkbD7EutqNT&X-Amz-Signature=6eec4b20730e7a3081041d10370e80ce5ca510df3deb6f2eba4519df5f8214ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

