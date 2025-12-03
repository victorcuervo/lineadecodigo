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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4DH5N2S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T095556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICAFUAGR1a%2FoV4ZErKz6WpsgHiLpvI8l9jnXugTyhAOVAiEAjutfVCLXp%2FNwgPWEd8C1c6xhFUEtBh%2FJKbbXSQubk5wq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGNmuYgY4bUxTrh1xircA%2Bohzin1VYrgd85JQwPr3gfeVekSoKV7LfGEaOApJAa5zeTCTLlD6Oh9E%2BS9H9BqtqkcPmkAMlQ%2FoKv6fsoYDox1wjl1v1DK4wTPW2JzKjzjEJlAQST55CgaVYbRFR4yMhMqy4HkEWsC9dLXq6Ho9Apr8U43mIj56h5Ly4r%2Bp2oSh65XIuZUNNP7PuS1ycdQkc%2FC35hjcHC9MrOJiF4yRhBC7ks%2FRRdrc6WsqfEwIEDuNku%2BOb2QOH0hyKCzH4b%2Fwa9J7FrkAT6pi7PwIduUb06NEwlWtCCHXzxwwvBlDIMh8sJMV86tFY2wG%2FPr6fBugos%2F5Cdp%2FlOQ94nufydW7%2B4s2l%2FNickC1x4bcOlVpYIOjoKaTNmyELvd0AKD9P0sdV7YlfvpIqJiBG%2Fk5BSOgN5NaYNsUJbg4SxBcJ%2FOe0%2FXK0ZGrJRiyRS6iNXyytmglrd%2FN6y2sV7FOuedoBcOoNq72aWPSAW%2BXCk8PXX9a5NmxTLeUgpS4qu9DDO4OXUxGQoEoSAD%2FczzQPUB8nAG4FyD%2FSzCCHLr5%2Favh0gZ%2BnTMAwN9IqcUVJNHMwfYzL5GeoOX4%2FEAKsLpjJFG1%2BWapKVBlNKIZrFX9sByWD1YkXnmcbhdaNNFQRCl2x7yMNL1v8kGOqUBpidDmnjvZYX7Asq9fwIpeNQvI7SmemqURNVw240%2BRWUUYu%2FFq%2BSVZjHbM8skDd%2FLOolePK8GaLyd96KNizRnYGLxZa%2FcnmMHBEfostoS%2FdB07w5vI1wZasiES9SknfobYBjedMISbqBC%2Bzrfk7DGP5pq8rXWA39fKbAb5zWXHTawRR7GXlaOIqzOI9CH6WHAjOXVMIST2TSXwvIFY4DSs8B6dAqZ&X-Amz-Signature=b547b10453e27be4e28b1905e27e49f08642742718ac3775a8a55b2e15202d5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M76FUZV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T095554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCTwidmK5dmh4Lvn5R9WPFOgwKKb1fxT%2F0%2B%2FPZBkcq1WwIhAOmchT%2BJWJGi6ug4W%2BRPYxYgDZbR3Z0KiluxKJlvWEu2Kv8DCCoQABoMNjM3NDIzMTgzODA1IgxL6b5BpTNP6cQ%2FwLIq3AN3uHIPn0IqcWlQe13MLkOXUt%2FMaa6Fb%2Fo2s%2F1XmUFsYMWZSPF75Xia4o40cyZDpezMNLkc2OTGed8OAc9YPwkonMe3vuwpvLxkeHYI3NB1jjgKq8OBwO1fDCYx6c4tczWexF7wTyJjQe4CfM%2BRwFjH4edsWbf3PaJqU9TfZVXdmYKfI7Q2DY9Ocn8Or%2BxJdg8AavhJPTzYnBjwiEyO%2BC%2BLzXQyxmRwV%2Fu6atAQe1Dyrr9z7bkIMRDLtOI60wPqAjiYmkT88ReHFMBdwdr7cmlsdbRacjpEc1hSiIrP46BIwMOjR7waIsnETkZ08%2BdDMPzKsVW1O7WYLDgQMNyb%2BEfC9Ngq7C3muzE1eLYDbAR7VpofcfYToCMBNVFoOkeXpu3fZkKDOXVUWDva%2FqmPqyUNn6TVfQbx8Vi2H1bc1XOQH8oW27ilvtxVTuUzXuMII775saw285fNVXujiqBjTqCQa8guh9iZF0aBn6sK9UNNvmLIzfP0Fv2%2BWCSPnUyr7RiN57eDpkRS1PBr7oW1wFHh5uW3eKmPlirHRihXMEwLtbIRa%2FuqigPi80D7gwXprtrFQ53aItWIesz4J6mJHOQWWXHhMroy9a8RV0PHil73SXwjxriIZSFmkEOCczCT9r%2FJBjqkAcHxkv9TibOfOYy%2B3zYi45MprlnErMHYMw3ZbIYOYI8u6x%2Bbwot95ydx38tFWe9%2FjNnFpnPQ2Kj%2BjlXobX%2F5G4xDyd2lDY5aS0%2BBdrKNUKTxav2AFsWLobFx3KQ%2FFDuNAkBJ3KUBxE0MYV1ajCR%2F1hA%2BBpIuR7T8gQiAh4Nb3AqhiQPTmcB3yYXWhS4gmFHMysQqv7HHoL8LukQZsn9eihr0Fev4&X-Amz-Signature=04e008ad5401642b55b3c346f8dcbedc50c2eecdce316076923255885f7eef4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

