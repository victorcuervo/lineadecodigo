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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF4DBTMF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIEDP5IJKgLWQiirhzhSiFNPHX4vpcYHeLKThgp9SN%2BwBAiBBaPz18fpHlmaWlwOxvyobCYXU4SBjv7E0fPgrCYoiMir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM56n8%2FrR6TrWC5TPVKtwDWRigEYZfbjL41kVAMhR5XmnZRLerG2BKxhfNz0VtxGBTOoqxWpN5On6EAyyOLH8EyED2xkIIHPC2TCmNg2hOrVMXmB%2BW6LNAxvWyE2sgZvggYLEqBY0ynJHEiF68C3efzORouAeSja17URXpu7MGBzVA73EMD8d8H81nYuT2kRgQ%2Fj774WPV8ZMw1fUEVyM429rArA%2BgwxqmBXGFovyPTJ8bZ9sDGbNE3TcF%2FRyMD6JEWY4snqaVCZq%2FIjtNY%2FrgbLRAiJ7rr99w2dJewY8rHVF9kvhwKODQ3c6JJ2UqC15gYEOKSnO%2F0oIfND3tEqxiOU60zGtmbxXL9AI5so8p7%2B3NO%2BXdJr24VAXpagiT0mO%2F2Y4K9rU6%2BRtM0AMMr0LpGt0Kgo3ObGdt8PrPgBuUu42Uuim%2BAEgELNp8mpLi7%2FnkwM3FIQpDMPLGPwiLml%2BtWOxUhgHrx1OOmidsT1N8en0UeXm%2BmRuF2gBgVW%2FLPOpzLKqAAH2gcPQ7OPooVlRr0KgZ0HVEG6p8SMWQb6f2n%2BDHAKcqw%2F7sXr5qVtpVn%2BCvwU4ybRyTjEoVksHlWjM5pBwxe%2FQIRhB2VoiopfTEm0zZ0GHsBXgnFFnfffRsm9v4nvYY4FxVw687ibsw8pDEyQY6pgHq9lYBWhFkTVph%2BJDQEpFg0FT1u3a4do5Ec4B2Jj6EvcTOlbHw89jMS0tpEpZ%2BqdJMZ5qRaep5l9Rsd0Dzbga4%2BZIp00UoOHC5aF6pl%2Bc%2F8jn4J6wzGhZYi9%2F3DvJ%2FdNCFexvOwFO9tC6F%2BSxfByF9yEHvcFO1d6KvZiE2qx3Jp417DAdwdkkZh9Sp1wyakSh4N0zHFhgxkQo9KwKa5nZ3fMTZ7Len&X-Amz-Signature=077e6d75341d0b0ac785c181c0b5d651e02e32aef9c5522c578fabd344f00819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTNMMKMU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIE2RiMvgIJ%2Fx6M0X3o07sfW37x2al%2BVfxDR2cc9oIrvdAiBOua6uqqX7pGVQi048sljkhm7SmxktOz29hc5tgwmLZir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMbueRBvTqvvKMjLorKtwDDX8IElwZpe0R62bxNgJ82YUj%2Fcaux2d6qmxY3ykQ%2BM1mrArvXLlBGR2EQ6eHSrmHICl6YbHY6ThJj7m%2BAyBFuFWIeDZRcDI0AoeIBAlyVfwhokHRxTk2mbTjpKJTbWm7cSGikhNR8tjfpcf8ejI4KPZnuSLOeDhaBaL9ge3uDUa6YCzmcgRm0XjBLSr4Yg%2Bvg88NAREy79njjvGFqQSZBj4%2B3LRyjQ19%2BFKWfJAI850ZGrj3wefudtj%2Bzt3QoIft5tkF3nIljPOH647VerymU2vSKXsUz1vsZDaRtu12PQQcuLOWEb75TlqiTmGuuuFxLbSkcxuYu%2Fm0KA3gRi1aFgkitezp%2BR2gGoDeeCUEXHLIwj2N17w7rh1bi4jEVPB8eaxfCenq8o9fCJPozeo11VMiSddliiPkF4X9WA4uHDl2slhSOViZxcyHoqo1OT1PI5M6YzsmRCurkLY1Li%2BcYz9h057E5GOhnooM5p%2Fa%2BZYiVUkMGxDLnt1dW85SulB76fP2va%2FX6dFyMxAprhGAXMz6g46sjN0lNAhtEBBmCloIEqqT0WvkOSzWK4IlDzBWF%2FpRMRko8B%2Fjrg0kf9tWMQd%2Bpd9FCD97d0a6N7bh6UU4unm0I6OgrahJxakwnJHEyQY6pgEQHEP6pvenGcRlpd%2BsNL1bl7tr8Q8sxPV8xhGlgkDS0SOwI2Nwx0X154wrU2ATqcLQsQGIDm4rghXIJz2NDG1qc%2Bqau%2FSpnLmRX%2FdazKQ%2BkN9Ri1D2HHSq%2FZk%2FGuDkNT1CcxdpBXsJnOT8PS198TIYWz9HcW9smUd2EneJqxEowNsqwlk8WtWpekzNagu%2B%2FeS24qxyJrRbFsYPEWYv59tMuZgOpQ%2Bq&X-Amz-Signature=e00b5d07b48ed95854204d9111d5007e0713fa2650a286eafcdc30167936e357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

