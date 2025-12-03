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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4R5S2WC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDYFSh9p30Sre3kk5nal1WIdWlexbaQp047Mv7eP3m6OAIgU%2Fpm2goc1pssDLdEZ6wtBtfUGNKPkjgLYljSQVrcLvsq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDMbHq%2BYfhO5H%2ByD35yrcA4XHbgPk3XMkYBP8zDrE9yL9ZBy66%2Fr3NQ2iAY1NuzU75JEcRotYFKRlhObPV6FCN2xy9uM0rwxTDmiWTgeapy563ZhNwmGsyR92MdtbTqO1GCtF9%2F0e%2BWzIYRqejJQm%2BiA5%2FqGphRf%2FWbVrxTc0J2%2BeQw8tYBF15UA7a3whduIyl%2BzwyVcv74ZulFP5ZirhMnt%2Bt3BCGY%2FN066VDq7%2F1sMFMJzLSCcFTwICKHQ5MLZAm7aBHRFRXAMYaOZzDGk27h6vHF1ylyM2wIiP4drNT9QbyadmpqXXhdXOvQIznBcsQZ051I%2BA4FwN%2FjEvsw%2FDCp5mrTbqV0Avpzuu1V1C26jszZusMfwnYxjR2KreAf6A%2Bd2RwgaqGSh7iMmvjefFEoQnrdsFAMWAKBsBhNse3EPFFIKHHcQruZON1pSdrulDDtnrsoVStQNTEj9TB9Mu%2FqaxFV7Vjq60pq6dRLhFTdl9vN1xY8abyN0BUny5iOH5%2FdoDnHGqbvGM4GMz84ajDhl149JHKWaUCYQx0FX1qcPzEea8tnnuGddmaS8OIbdjLCBrw77anUQqtNjzFsSKH0%2Fnl27H8zX%2BL%2B9zjiYepspkitneAvwbAD5ZdMAaFwIkwgyxQbykH9skpLBTMKX%2BvckGOqUBeFQ79OCWyp%2F07OdUfbHCm6kIxE0AKJDgVqLE2jtZKTr8Yw2gzNpYCmFCCASKQPM7RParyoomMsUq4IQqT%2BBaxKvt1LALbH7AD%2FbAoy%2FjIWe4C%2BTq%2FewhQEs9g%2BKraiO1SXGmQFeFRXjuTetyMsaA4QZTl77rDw0leTD%2BnGt%2BcNd2czVElW60IyugfQvFtU4aNs5QRHjFye1O%2F%2FrLt6YpKy9bhDvY&X-Amz-Signature=6be28dfbcc16c69b2c3415ea0e27cecd06912b30b2eaa1b4d47a738c516ebbf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFLCHMU7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDirZXy8RMhWK6eq709qbqd5zUj%2BOKj3YvnYTrkURuodwIhANUewNraPdhRBcBGX4oZFRYtIgqSQDtT66Mc7X467zwqKv8DCCEQABoMNjM3NDIzMTgzODA1IgwNbYCOMxowGtfW%2BlUq3AMtHLzP7%2FFMVeZYmdnY9Vmrb5msyTC71eoRJpm2ppkIYxgLUv%2FODyf2B%2FakVW8LalCJb0%2F7NWrp%2FkL7eXCJWfBBdhIajntPZLlSPL9U1znXzh4SdLhJsk%2FpLESy0VrTihNL4znsCWyDGCu7P4cp9Bh8G%2Frb3lSiMH6jhkQDAlCTzr0x97MgkWFMm3AXi0Y2IVE9QJ1%2FUMe4jFjWhMA90IpQLAd5kqezEiXPfC%2FfveQFjbE4UZKvDXHDkc2%2F0cAKFKMeFq%2BET2HXDPA45su%2FacVtyidVHy7meGhKK%2FZUqzKKZEYL%2Fw4cQ7VZWGu07H%2FFCEKnWvdJ0BvKZSd3e8zwOm59aL4WJeGYtTEyldOZ35qg7De1W%2BiSwwz%2BAk2o7RfJ6gcdv1Sy42eafxqre6VojyZ4en7e8Slilq5N3DuDuo4LFfIcmdUDnIu547yVZdnjUwGEmyNgHBQLIezkZ5yOHaJKmcF7TyFKJytixLlJaULja2NlC3RD6m%2FkGFoxynMYrGpUtRoj410%2FWwsS%2FOIJ0m61NTS%2BALUV9s98%2FYNT75E0EZ0TJlCgfhU5RSlu9DD6y6yXjeDxwYvUX78OQ7SG1lRRrj2nvxQDDKiMOXCQ0JSkHQdtZAzSFM5CRL8MsDCo%2F73JBjqkAbV8LrjuuO1byTdfjVoVeOl6%2F46IohedqpZZ6zmIpOPyxoF5VNz2W%2BTXxxwkCzw7g4pp0%2Bv5FUtXWnrtyAxDYOqAVd9meTb7K2nflNyzcidsOuWpY1u%2FnlLCYRBPGKbDaGjSBjYjnHuoV0Dwvpi8UyqeV8YpSQGGbY3%2BMWcnU7BkJuhIow3fZVqS7cVD6zSTHcN7cGeV8VbogPUE02gwazZ7xxjQ&X-Amz-Signature=86700e3282d5a52179924d7fe5564247f759aebb002363925b5804e7a513d83a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

