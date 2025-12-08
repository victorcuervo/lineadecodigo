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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHX3ZJRP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHop1bXPxESm9vSv4ZIi3M8oaYdJHsnY2951r3HXeQ0RAiEA6nBTleaO00VOxE8Z9m3Xsfse4yzyR9gN5pHINLQ%2BGuQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCCHMHEy%2BOL2v1SFSrcA9B0vjbQbWfeRWS7%2FMMxp3HYLKfwcwBNnmJDbY5k825R73iZWxyr3TZzFbywhSDhBCzFWG7pCNo8%2Ftecs1QyPiajGNfX5l1su09avCPo8JjcwuNMe7oyjBlEk8y8GZyePXeUs%2BEjDBoHgnP1Z6XXzj%2F28Xf2saxdRGgYQa6vxLeBCJ4FuRiiNQydnBxuAXj4AvWkRNoNjDCDACmOv41KzS%2FH%2BZcjxfcu8JuhiWd0ZMlvcKFQDs04nNzua6o7PrzZOFSKCfID2J56%2BBfdlwogBoIUc%2FNediygERlk5Cif9vI%2F52aTifVCNTnmLofadji8cjV6RplgxtXjUfgillLJbh838yWumQRFq9xe30uyKlsMm5SI%2BpSHH9oQJ6KUbyFf9uYYYB1Xwnx2pdAkkfSL3I2fCZU7DQKonMovdQ%2FRKIF3jvd5br3OOSTE7%2BX%2FPsRwVUrQ8f3NqinZS5Q%2Bh2h4VC4PPaYExCzjT3%2BIgJSW78lp6aPUbvmRQd7dewGKzlLJNRhI3du3w6YYMlCeZTvdGOAlG4ThHeJCZ2ZoLEYLe3DKENtCGrZW7ABaTNyQC%2BCepJMf83uXEOPUAYxP5tdLjE1jCmGl%2Fv2Qga8yS0uIzkb2ClhK5o9NKxlAcdR0MOKU2ckGOqUB%2FH8png0HfKIdUQuUgbTRAL2z7NizIqGIIw7ClOEdKU5a4W5zLVGnUOStYtGmmuLKUmFFGmhmQK%2B3lr1fhdN%2B1xk0dmGLm4NT9iPjLF022K94LY6%2FfD22bOu%2FSqic4CQqeS1mHPB7YmSecAmu15OFrrfH2cg5Zr30XPDBD87a%2FI4VLOdiYpmxqbjYyoNzMIBr%2BwLMsXrCi2nyqaVsgWf2Xu%2BeojVy&X-Amz-Signature=8846d318e5b2b13b775c1ac4d7782715bbc72e656363988ad4fc2d4d7e134673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJWJYDSA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV07a%2F%2BMaQpI5RBEuHtC85Tkqcw4y2DWX%2FgG9bD9W3XgIhAOFWeh3Dci1RsygElS3yyEPl3kgoo3cPG2XtP6scVjCVKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHrj%2BgEQFNEYz9B4Aq3AN2qtjkPULvzSnegOONGvXyG5ICglYQT9hmh0FETI%2Fm9mmQS3SrGo01dFlYb7nw2HrdFvgTtpE4NOKfW72bFZunEYqX3p8TUWdAwMy74utKyJuv6X7fCqOZMqlod1xlZq65o0n9W71VjQVjMpBnein4Quy6Wx0Wk5xhAmNydRHQsP6byZFzHLydczfGjo2FxZkw%2Fu7Xx0CH%2FwQlTt22g8c98v8tt4IBGSHHNHMk%2FOHk%2BbMYejXGd5%2B%2B%2FAijhM9yluMiwSfoMmsEdmjcOVL%2BSaVFr17Kdmx%2FQjwanJp0%2FRKiTsMZbzvHwrT3jrcIOfrFot%2FuLYxoi8mpKlf57e3tIkGlkZeK6JUrKM3QIMguy6haipnfhtv9VlKO2QSniQblfp3rtI1LbiXrCKmjRE%2F2ifq7VOgn%2BrhX%2BLcGVShGMMPOE3A2ZY%2BHbDjJREfpZrIPWYumGERQMTJb6S34%2BzbgBpwGITD1Zg59J9eWCaHbho07zvEpjeJqDxwHroZLci0YB%2FM6HR0cCFkgj2UNz7XZYmxLHV%2B2xgkppyVi18CqpUX1hTJOAmXMPvrd%2BdUUk5s%2FvpkpYehw%2BOv5fX2eGGBUKEW%2Fh5nR3L%2BfMP7gGzER0zNci2IAEF3D46safvrJ%2BDD%2Fk9nJBjqkARN1iXhyiW0hoY9%2BUHXLsnp%2F1NoKNkTOlKPxcHnLyAInuJ7QBRaF%2BQAp3Ppn8s61e3gdVoMzTtv4uPht8%2BBmPrPdJkPBcfUphLSfSniTFLzEvxurl2GSuUcx3JQ9Z9hUT0sPF6%2B7yQs8pGYRBaQ7uhmXkyVTxFIE4E2fdnovJj45li9Nm%2FpYKHUUii%2BNTzf4vE1ZayvVyVdV4miloLIGvpmMYBzY&X-Amz-Signature=9ba9e68680f664cf8f46a727c9165fb7977d05c0f8f47f9c95577d06aa470ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

