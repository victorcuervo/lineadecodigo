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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S57LYNBF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T053907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDTuVA0oF98B3WzhfuzkF5IEBSQtYZN3aFXYlOdCb6L4gIhALUqXwBpiTds%2BzaWbP9NFUvZFK2bY1S4dZhXbf0NxY6OKv8DCCIQABoMNjM3NDIzMTgzODA1IgxITKgqfbRLPPKz5DYq3AOuebdOj0bDr87kzC%2FesUonGAeT2WnV%2Besg1A4toO2emex%2FiieKmdQxFR3Ejq8w36MsGz8jfsJFhmN9hP24QF5V7XCUBNfbwUheA3M2tvEIYicMMQiz7UPL28r3axb%2FND7BIg86CDK1WwIbgtloeNsjJ80H8aT2kGFpWGFQ9LY1BypFULXvUiUQLtKoWbsDIB1VvQi43NEwq7lH%2BsfypbcCUm9Jl5cKivp%2BPyQt5wyQm9ThyvMRfMkevcDU9QK7zwQJMv%2FQWhzWXyjMa1%2FE%2B4v9mxIr4URmnun7CKl1EvF%2Fv5ldTPr0BlE8Hk6t1QOAaKZA8YUbA9tANXPWVyLf6g9FnqKWdWtiPjb5R5C59DP0ixQIqqFlL8zcTFLKaGBXPvGifEMJqMtxnBQT9C8DzdJDLwNhtHITiFv77%2B4nMXhJHMnXHJa2GWliBDab6lDCMc6aQH1MWy9eROpaCB88o8Kr4X5hB8quJfOfPJGzUrRLauaJosFeYiw9FDfKDQo4iCWlD%2Ba5iNG8zyMMrVD8pHfBGuWVp6h2iN%2F0id6E0jxPxJZnsqgI6w2cALKeMW0SvNZYIkZrNrmzF7XicZzthhxHagG9m9yF2Z8asYSyvgLSktf2PjbQwBPZMPvBPjClob7JBjqkAXWF2I7dOzikS3Xbm59j0VHsW3jCIafmoNpmN7z4vpiS%2BCyyfAx0tc1KyBpiUpTKNivFqDufDLiAaUb87CgRaJsx3A2ODfRFtadg7nSkTaVTTU6qsZoY%2FcsiyZlY1L84P6%2FX0xBrbmett2XOe02EGDP%2BQcHVyfYVlkpAnqDblpbiiiAOKV7wcqV%2BGNczrAd0JIksAC5eslSXeuv1Ed5GOwNeLL1H&X-Amz-Signature=407c2066bbe5f55196d3b61280ac9f6894b0d759b90f4e0b59d839aa81c4c1b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RSOFW5L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T053907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCW4t6S4lqycdCJFsvd6pKAhTHUG%2Fxw7LkRxAFbdvQTHwIgV0oBg0vstkM1dbMeTrJXZZWuCzbnZFaeVWc1R630Nokq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLqAYyG2hRGfs6b7ryrcA0KMYiNK82aBBzBAKDA%2FKb6J0icSK8VRy%2FPyNBa1blHNDJbQkbs9I3grwI24FX2n%2FNbj%2BAPVccfbpAkG7nv9I52Lq7e%2FVM3N7Ae7f5fUt3MTHfaXKGi9deITlhZ9VDKRfhUyIW5enDydRgM9oVw7O%2Bo3r7gfqG5xIvea697tjaNZYNbRaQ2eENUBcL6BPIAIUWrF5iy%2BRaRwWq0mPFsPe2%2FB3SuSHxtmIasGtmZgFLbeNGSni85dh1bTWA0FVhKFTLZxLjOvNs7O1ONajsTZC7LF5avIMO67DhrHLqsL8BxPu77U2PgRkXLYVqJk0%2Foa%2FUvdhguuvKS1Ojqp1ImT7iOcrQ7wOut037zeAARfmvispuKnaVYZxQ1HroNqc%2B5GQdCH8bazbW2h6YdiaDkBHWmM9%2FyQOG4zRMt%2FQFlAIBRC%2FxV3hmWBDJ0uvSCYwh%2BHKctPu%2BnzjTVheX5ZCVoqeN6UK7FtHc8e4SviG5dI%2FQBaY1%2F4KUo9fBVgHSfc3t4oUXmblIrh1X7ssJ4MZEwuZaB9UqwOyr%2BcyjfMoXlm1KswtZ3cj3Y1wTSQIYwZuZO6%2BomS0be7iL0Whp9KsVgA8l0KUfqX1Khz680cuWmYmYzZMkN3zNZejV0xdNE%2FMLmWvskGOqUBzmzWCbh1EJsD0lHUAKzALDS3VmloRbaUanomunZCkGk%2BRbl38Ux9XZDsJWyRkmWgKv9VqWUGRGJZRrRDkIaJeCdN0riGXpi7GiADvZqxmI6WM3i1QsCrrFhENug5QociOdpKUYiZdIR9RfNXMuBYJbEqL7aA4SZv1689uV3jLiLCcAho7IYyHu7H6kpaM2Qs2YrR9y%2Blbkx%2Fw6vG%2BJ37RzKwy9fy&X-Amz-Signature=fe13f786df4287804bf2888255c058528e84e4d93eaee09606f0b9b763b41571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

