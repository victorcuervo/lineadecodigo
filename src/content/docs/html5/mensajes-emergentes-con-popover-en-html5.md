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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X2NSEYV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGrPt%2FapDn2QP38CCQE3AybyjosjY2cEj8aS7hrOzzZAIhAOiVKRAn%2FAHDHDoVLqx%2F03y7bwjW1FHydIUhpfKj8OPWKv8DCHIQABoMNjM3NDIzMTgzODA1IgzpP9%2FdFQXJ%2FY%2Fjn6kq3AN4pL3nB0KXu%2BOoY1QZ21gLaNE8SxcIiWpneyk2GYE12RMJxYXsM3G9HdHoFZI%2FdbjEEAR5kMFDo0dCR5wyGc8A6OYr95EfDXtN7IoMxfN0yYakk040%2Bpmk04MtT1i4WJO3HGX%2B1Nw93fd3hIESurL0oU%2F%2Br1TLO3Dag5MtNeEpt%2FZdCfz7WLdUh2TUW%2F9XfRPUSrBCHxLsXwtndTDyQ4P7%2BBFPd8Gq7BiQRGK%2FqlxTRhKj85m%2FZPnSyXfeHireU67YDCUZG1a%2FJ2fERaThT3QfgDUsu9%2BZNvfXoeaoaDkwpF7lJ5WT3L7Aeyx7b6c7jjCcsXYmqOgt%2BFVfWXfIA2El5TyOT1PNk4s6PWhoHjVP1ukQ1sVKs5hKSSXll8esndoAA912nl2Z54KgqrF42CXNdnQWG%2BfVyWSotXYhG5CcHluQc5p1JOAHif4xeRixztFBwwv4FRUaKGr2%2FmzRkzPXFPOK%2F%2BcG0p1d394guvRbLDJNUtKZOuIBRWjLuKNkribrkNZXcnIk1IIcFv4Z4prbL7oxHypr7fb4%2FFEW2zvLFp4NhrWXu2mWsTbW7UCyVkTkr1IaXUZsF4eiU3xNk9eosS2G%2B98yCnnHIZRsuaJO9BAMd5TyFizAEFN4qDD168%2FJBjqkAZudyecUUJIH7VpbQfEywZmQzr9nl%2BS2O%2FDSIut69rpj0R4IdBjmM71IHU5LU558Ndf%2FNkXh0NqXJpLELICfrnlye%2FHvMlpT%2BMYbRmn9Xc2YvWB%2BL%2FVT%2BF4itPDVa2Yql5cDKFkTYuq0YErPO1a7qyWSFIN1O3%2FQLvMIZS0OqID1ij3ppO3KcKMB6OfJJJjLI%2F0Fics7Ef176zrc0ujKvB98rqx8&X-Amz-Signature=fe863d65bb99962ab152525c62a38e1b80bbafe715765b2dbfa4ef41f4ee8959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUV7PL6U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBs1WC318Zhe%2F0KrTgxKEzKnkAAFpIrcQ62cVsy6q%2FfIAiEAhAYhDjlKfT%2BRrmRcWSrJOwfEjdQxSdRLpi07TyuoorYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNFS9dVp%2Bar0KocJ0SrcAx4Sa5Mz4OIwmmHCh0Ya5hIqqlGUbHFIdH0cIB%2ByicPiVCvcrYQ3DgquUGJce2TskpWx9FQ2UbWxvzL%2B4HIzXfNy0hEhtyGM6Zc6DGW7bfwPK1c28GAPcMrmp1d21iSqw%2FTUqOVqhSDrdJh%2BAnSoIAZDs9o6OZj6dgqgtLwqZ3QC882j2pC%2Bg7uBiEM0VXXx0gv8P5%2FwQzdQiCaPlhebkJ2ysvxk7xlgrk030LwRog9m055yOzSNgNzRV92wEoFYkpXrCvyPwgOKzDTZfxuLBhVnKFLrHI8AZ8k2%2Bln0nQKa%2BqpTUZr4wZgWAW%2BkUsOcHKyzUZncUELuIf58PxAUzvh%2FN0VK0Ln1KK8%2FqRIlCei69ly3PqkrZjEvgEcrcCWntOG6ByfDmN9axXRiF1es6mxCzbJ2zqDpXBhpHNeMJQdc7Cx2b5Ii%2FeV%2FX2Wt3Z1pNVpe%2BzfNTw2m6UPgbJDBPS5awQzLkzF2dWBZqG5%2Bswz4NK%2FiCFIDqU7tdoHgiJNI1I6jSrN1HRCvczsrtWPifT7wwVdYYrCMURBpyPUNG2m0zLNSJc3me8V65hAlqeMaS2Cq6BJi0tuGZP%2Fh6%2Fii4xeJOZjLjmzRj9sMOfqt9MkS4Yj1rbk4lO1V9GTTML%2Frz8kGOqUBTBWOznYVIDDazLxtjxhSFl01S7yZ3zf%2BdXc%2BH6AtpTffSaKwSrLLx1Xa0dyzQN1wrrG5LzVKz7Fv4W5l2QaYqlqYzbxrmxMGeQcNp8z1ZcWK%2FiB3%2FHL7UQhaL9hMkFRjAZ%2B2xIKxhSeKUbJ7WSv3lK6sC73skF0ZrFsppFsAObvNJac4eVrewlqmf8LrYxyAzVdZ72JdMsOFt0IHbJxsPwU3CA6Q&X-Amz-Signature=6f1a6e2eea31a8d73628a8faf07e640ede7713f752825e1644393ca211bccd59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

