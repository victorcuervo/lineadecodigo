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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4QT7UQ6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCID2O%2FSJ34tMzCRYaf9tKWg3%2FmGePgjDBdj1rfvaitKuUAiEAxKaDFxmuZDStrzLWPsoC0nZRG%2FOMjKjWVj74Pd36DS4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPfu0AkrhrC97z%2BR7yrcAwZ3gu%2Bbfd3diByL6U3ONdSLk%2BA49JyUeXs06U2vj1u1acgliR3Jkf04W34Fy69Pk7HBlFe12PE7PKMYgvCQ1Eh7%2Bp%2ByVPs0FvVV6iQPa%2Fs792wQgrNgXg25cYuLZF2MRDmbs6yQkjUyCKfNtUfPSQjsQF%2Bsl%2Fb5WCb3D7t%2Fl0R%2FGk6JrN3JsWWdHpmnTlkVzT6QW%2BQrsD2%2F1rN0MLlM7FaDCHdNWYFn9h4eSuU4OOIDQFfX4IAwjRs8tlWzprWorT2mivyf46BfTVNAz2OfvY9CV5VC%2FLZpi%2B2JHcod8A3ImW2I5CTL5z%2BgYLjw%2F5J%2BJOVn4VhVa96bEkGPCGo8eeiQ%2FHE5U5cW6Ux08UEiAUpwK0hvnLAvx1Jp2xdTeA48ovoHhZGIsQNJahzLUDuc%2BEAk%2BI%2FxXASr5XUP6V8J4dLHyP8bZ6UQLyMH1Dx6K4vgrjChTlT%2FMvHQeBO7zNDv8n7427NfyqaRSMDo7wkmfs%2F9x%2FJ3QD%2FBzDtpyJBsvWWsRhxbQ%2Byx8EHDql%2BRbREtlOaQixRzoQgy9fYbMVw6RDWukB4HTw%2FIp5ROfVSVWSxHIP15j3lEdarXLjJLHaGzfin9mdGUuV6fFrHpXd6IUG4jJ5dN7iVqJ6CH5Om2MM%2FNwMkGOqUBIganla5t%2BXhk2qOSswz4CxfjzehqoP%2F7H4dk3XsblNOW2AsO7lcj%2Fry61ncJZ9e%2Ba5QXym2RkzXOVxGD4JvSYduPZDUI0R3a4L8M9U%2B5kLGtHS9sRDeP%2FXg4Kp%2BpFY7k2pKiLsrGEf60qR%2FxzVprQetNnCzc0Rzo2RrtHwabwHp7ktSsgJacl8346dADS7QUONJGs9n9i7ksDPfknbUgx3Awcgsg&X-Amz-Signature=03f6da0a5f0266ff3897400e1f8cff40b5bb17d4565b7ecf8753ae3e07bc5aab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSJT4WP6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHLOEGXFFZjXcyb56kV7jHM3ahcAHagfPgQ5SRj4%2B63YAiBsdRrQjjN6GgoV2z3F9xpOtJ1pHXJrX9cWsZq1D1TbnCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMpEsb6G1CVWNEHIVRKtwDc98Ji5tN8JX8G4yhbZC45tEh%2BAGAEMx%2BxXqVYc9sOv6ppoavUb5v0Hbd4JyJTO6lp9CYvY32bmQtcO8OE1Uw4%2Bayf4W3%2BYOj2DnU56ResimTCxhXHcPS6dmohXBWjsFThiSTIszYqZQ0EMzvS%2BNa10VGeENmS6bGtfLxdp9gPwi8ElJqAsVBM%2BUeC2zlFCIqPj8Orif%2BolUSkS13AflzMdtYjL8wQjRTwXYWkN%2BRH5vSBfF3yuCl10wAPQvuYX2Ft%2FTnQU%2BRxox6m1cCyR2XSDVxoS6dZvWHHONEwMc%2F4HBBbk3Bx94u2qh5roVHclkuGV1ei2l40GCFESSRNybcni8kTGrQsBzF%2FL77v1P3jjsTfubF31LVuOGMkb8W4PqDT3UzfDIxWQPuwKb61hikFsK%2BKPzErNTAy0ZQ4bS8istAMJ%2BstzVS%2FMx0P3W5o9pePzcxXoyeVlicktiZVqZSkXkq2bNXFK283zLbR18r%2Bg8KpOI3lOSHJ8NuXFoPptjaEreMesM4RpV09B59o8xqZD%2BULsRIgxPPL9OueRvh0GjRU69O8msVpwIy7ADK%2BNavKOhmbolrB7fE2rQ9gPnE3yH5OyFEOPmzZ626T9v3ZwF7HXbsS5kfXTk8y78wzc3AyQY6pgF7TZO2ktxzKFvVJ9rgRlYer9TCg17nm9eo1%2BUwiDRHH6OFDTM3TRdHppEq%2Fy5%2BNULg5GXNRNui%2Bbq%2BEeJev0iFjBOltxFFZlb1zJsxbfdG9Mg6DlgKIAv%2F%2BjrrwnnIvipE1bor2wbjmTDRhdM%2FZhHR%2FDR8aJoSPhbyCum9dLOPTJDbwfvGRCxUZ89B5DxDCfS74DtCpgwRi7sjoBetqxQLCeTXxRIW&X-Amz-Signature=313a822138b852a2e8aff226c050255482eb518b26d1333d2299e057c1c3e51d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

