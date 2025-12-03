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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GUA6BLG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T131606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBAW72Lc%2FVbJfgy0Rr2ZF7fB1yD4qwqvScREIRkM42X1AiEAwn19%2FmLkSusX3xkk7f31DszxqwvkJPMqpLcw7RvSr%2FYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDB6vhymK%2BfQUw15YxCrcAy5UxiPgMZsWHKuVQHcJj01evGr%2BWJ9yC5bhiOB0sPtK12qFkxxfgjkkYQvwXcH4S7q3RFmTPVEEFEYI0YYcbu3WGUEV9rlyzCojY9%2FGS%2FbG9xtGZyjlLcSeVnSw2gVcukhB%2Bj70KetK8fS5QYbmMLZT%2B01gClMgZkMgc0Q%2BpbOAQ1Dj%2FBXRcg0mEsaDaxXdGw5z510PlAEafFNZZzNSI8FpVr%2BV8nphtTYp7oInCbwsXDDJ2CSfBxhZKtV3vd6uq6aXfEcsnvxXjHceC9691NbWBZbkDoqNaCCERoQnHW1j6XeiUnRotPsqFGw0nMCqnMEJI9jOpPascikPKHGuo2WSbPGBavuy2mSTswKzek4gAj6njm%2FQQHF7EnfQm14omn%2FmM13dz8v7gkNTl%2B4F%2Fgbfd1abI6VPjvxQEwSSm9UJ7ux45bDG8frNknIJmngbVW7rHeO0RZdZpNSDbz8S%2F8h%2FxBH5JPoTXmKx03zM1t58VJC%2F0u0Us7KG4vt81QuZiI1RpC7L5477BxLY9xDqJdrcbcNXfUJXQ4qslgBDXSFiKZ6XBLEyaf0vZi5CMmEa7wUrEfEACe02jT334gJ3xYagmtUpTEWBx3EFAGwKmSmHjjA8%2FnEjqQSZEpOZMKfrwMkGOqUBTtSaoJ0DGkg1kc2vGInfDLFnwQLIIaw0VkmXyA8KqqeJU78LHpc6VI20A%2BOCvTiOwZ%2B%2FXsLy2S31M864q5cH7QIta1K8e1rxixOYtxbySl24Ue4nihbKEFqNNBCUnBGIoMjdAc%2Fha21vHheSub4lqZcPL10VZBwRLfo2TcOTREUkk1RwjC7bvZI3iJVzC17qtXXJe%2FjGEdjW1796ZXDbjmjlPuNk&X-Amz-Signature=844e5ffd45ffdb2b32e874c1fc3b32168906bf98dc53da16cc455f4c5d911e48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NT6EBE7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T131605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIHxMa5%2BuxaNZwX2HDXId9kyVM0a0eUfAm6iALfIHT07XAiEAgXEL4xk8sLB9syKKFMNsP72KtSZuqchVjCeoiAXJ8P4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLz5ZIPe0wkKGJfd4CrcA7EIU%2BS2OsjdVhxaIqM49Ch52yFAywd0J7z3R26xtpxnBMio822QRTrkYYCL5njEKysruhfF82lqnL0%2BxbROq%2BrFgPjJN7R6KFXj71UlCCd2cP9YJTjc9XhSht2l8HQMuHptnLepizfBmx0N%2FA7xXxU4pSgei3tHKglde3wxCdGlrvc6chWCKExLH4tjLCsTyqembkfqTKyg06PXDo3ytOB%2FDSnbmADi94TFnXOA41bHxJb4j6HQ8KZAZ7T9RaeO24gI7phVNyU3FX2rSnPOODjhG7%2BOOBr%2FgAWWOAakk5r5tDWNpmXOl4GvZp4PkpcquMG6VzBsV9z3IUIDvLl6iEuoE34Uyu42WVIfMmXulvdKRzK1IwdbQRrAovj9HNFnoPlQKBCF%2FcdzMGWoj2LERcsCPOKg7fyppS63fPqw3V4wZhAo1%2FcIpZMW%2BQHSKaxZ0rYSG1zgfZ7z2Uz4jjuk9%2FzLh%2FuzBANOVbcSR8gxMjHolsYTvsxO2evJmbsi5oE8x5pCeUElHTfOHyJhexY%2F0R099ZHodYVzHSWBG0zqFqo3B0QYItWpwnCimkybaDVEFECcEhHcamP1cAWYlZPFcnXqfuAwpCwEp6FGOT39ju%2FLvgoULdvEq2TDCqDwMIjqwMkGOqUBEDR66kks%2FU4Ac%2FooCkz3GozbNviMgv%2BIZHVKaK58RPzVHpxWBP%2BY4%2FItF%2BoZhwkBGiP0Kbve5t6LBOvZsLCS7Gn5XkpilYcHGBcNPLtAn4En5Fm95P%2ByBwpgjHG1NFk0osjS450jAXpOG3WusgAwz5ogzd9FQbFpBOpK92mJR8JuMOp%2BXlygaMeuOXd827qHhg6U9UuvL7KJhx0Dur53TCwCWX3V&X-Amz-Signature=9710029172e715ad24c5b82e3029721a8e24ce280d6e5ff805e34a90791e8b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

