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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3VNCDUF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIFQ6aR5ZIyF5PsljyRNNdEyJlX4K4ay01ExApmCpdcgXAiEAozLm7VksNlPqBjIeycxmeW83s1mQgsWIGycbI57q67wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDkVSB89FMOsbdfmZSrcA4yqGS5VELr%2BcLq0KYlE9vwNIoQAaiIGWGrubK8bwoJZWUzm3LnpQnygMKwg%2F54ht9%2Bo6JL57C8vdEEL8fDIyQ9ed32h9jc%2BqT8Xedf3mm%2B4jD%2BuHvVQdlhTPGqzGiYXCAr6k06T1ow4jAzdfphmq3GZqhWJZ5i8GeRFhWVWqpPQiROBLqi8VeEF%2FEi59lZUSgv8xoXyZzvUMKhEqmVAo9UJgBeRvQbz66JBqHUIffx1IxpY267tcOKW56GgAMq5xDrkTt5IBV3M%2BD4oWZ%2Fx6buK%2F7yV5Woos7emG0BJCnKJH%2FvomPJaD8TdhLiNeA2nV5qdJ0RLC01S6Xx2uOY1Ij6B7EZCMdbj9%2B1qitoMFiKa%2BeIsAY7geuwbHDT7mS4bGB7tH%2F3hZBxY8UcCbm0vw4Pu6h74gVy79hJREQHJkUalcyVUG2RLMeGGUCmuLNpbquZRmo8QRpX%2Bgi24Sr91gQfg3eO0KnhTtLfE7OUwh83woVVlM%2FpYuzB8geMYKC9ewDAPozVoKGBtvirPiJ6B%2FJL%2F0yK5iyjsjaees8VOx1vmYEoATF4aVyoBhzUWTwWvWkgJTBi74qVBLkBIWMK5XEx5Z62IMiVUcvJXMPiVTsMqPa8iGN0skHdU1lNVMKKWvskGOqUB3BmGvPKEkwnDWPbe6ecxdS0qrGJqTMJRXRWj1k%2F0ywZ55HmFtDa3ZFfENVBKEddK%2FEKknObEMqS1p9H2nQPBYh964GaeyOwDdwNe1E%2BjcQKLE99sOxcrnXGV%2FDwq6EXM2%2FLgZ%2F1XEqg2LPfZaRDFpH2O8gIgkFbUWlALQhrOCDpCnR3bBk9mOLI0TM85y1GqHdLkdqJjRV42fkMgOwg9GN6QWfbm&X-Amz-Signature=c135e776121b2fb64921b9f0ef560bad6cb4cbea8750b40a0ee72d3ddf0836da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PD4IHQT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAs5Q232qRlGie%2FvOPQo6p4ZaJUIyHuQYBw1TjzYvdLZAiEA7yuC%2BmthSrApkboAMCkDWs%2BYrXzNOz3yZak088E%2FxXMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDF%2BrG3SZ7Iro%2B637SircA0W8LzCdk5Nl0kURNh%2BGDQwQeTIsZ8Uc0rjX99p%2BBaYZBhDByF%2F7BR2qLXbZxg2ZVsuN2Dwew2pvC3qQBDnNWJp%2Fma9%2FbvDpxxXt5FVdDdbXsTs2r1p8%2FqPdQgdaqLsjP%2FZdRB2aZ2kDNAuA3z2K1RvIeLRyTJ5KaXHZg9WgEef%2FOYbv1ISmFjIK5H7oYz%2FVnRSb4fIABJHfgZpniaPoerSJvLNpBy5GWhB6rRRlSxyVOKKN5i5pP8Y9%2FLZ%2F3qyyrYsUCb1Laghaf%2BtrSCcN73i%2BNr6BTljbUfBWr79%2BzSc%2Fr0q33ouWo%2B4mG2gn%2FLI28D55j0WyhDnOX5n8tc4YG8kXdomoJb4PRhk3vP7ifdqHrukOrTUbM95hnhFPAlxDXpEk77691W1Ygih0tokfZKpP1LoN%2Fl3SwMk%2BRkxZt%2FaZHfYOEXtl9CIdDoUwDtNAxjFsT02OnyNPUflfgBdHwy2kvXocjBM9ZGch4EqA7kW8i3Qkn%2BRMcOI7z6vkzfGRFapkcsJcYnLv0euSRyGl%2FhpqBpGXBQnppNRkd9%2FbEfNymwU%2BeLnIH03OxBnfwYRMkppLp9zT95zDiueXj4Ho%2Bjbl8AIBogLvFhnz0yOuiTx1Gsz4gWqFlRet28OGMLKWvskGOqUBBrgNxd1FLrdmK0TyrgNlI8rcR7WhTmjIO91ApOw5HgQYEQ08zGUdQJBzwT1rCtZVm4YnkGpDBRHuPXzaUhrFF4ldHl7K3Zl2sCDQybEilZ4sbZG6S%2BJpUJlljyXmJtC5VVDKqcEkcKRyxR4%2Bbzlnch0cIwqc%2BHVbDBj0%2FVG%2Bxh73FEcBXABvo8vU11w2AaGOngwGkB7La0slaoCmm0Vf1ToBVQY5&X-Amz-Signature=48aa0c55aa7138af3e45334be65b4deb043e97ce5347f1027baaaf70fbd7e11c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

