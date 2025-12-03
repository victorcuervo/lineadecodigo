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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPILGB4V%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T125725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICCvz2TCVIm3x9xYI1rGNI82akHxiBaYupjPNKWrd6EXAiEArtO79I9sfWnRX%2FS2MRjl7dJGYsHfteM4AxoP1DIx368q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBH0Rnzsu9dMl%2F4cqCrcA1CBIZlB6zdPW5wvQZRU3A%2B8gNEXNC%2FxB2j6ST2MTmApz%2FneQ2JeCr9jrox1%2By6KRYmb2fQiqeIXPM%2FRvFM%2Fh7JOyiM8fA9Tjxj5gswIR0jnGufjwCEnKgQLiWH0pRt4iBVot948nXnMIkk2fKJfJTyzNeKvwORS5Zyqy8tXPT0rgg2dBIlZiLAyFY69z%2BNQCm%2B8QpRuFQ9kR3Qt5zeakaYuToWDWVs9yqor9zkzEVl6EalDADtOs3MxjFirPU9H1UUuiwaTi6buycl5CyQlVMX%2BtVDb3NTjSyRD7SHA%2FD3OhqfvIt0s0%2FcPWnwpvfzHrAJGcE9lQBRgR3xdx%2Bh78s%2FsfOOqKo1jIxiJGkEbaEW18cSw8tVX2lfkZo%2Fsc44kBoe0hqh2GrV2Fok9l7I4l7PutYd4uRRXXOgx97Io2I3k3AEfBaq6dL8SNCMuFEyjcV2kSP5J%2B9idR8uuOyExDOpytV2cvDl6XH3VncniY09%2BzvgIfdc3DrszoGH2W3LNbPzHfuq3nYsWfNYvOWfI5vmCN31Y81EXS4vXs2U4g1mZ0fGSGSocldRsaTTNHMzBIWhtBJtiWGRhx7OiqdCGeuMdK4za206OGji3XLYiwEts5KHc52CjFHNTeupEMLrNwMkGOqUB2ghYZqbS6JA391XeXHzk1wmgzXM0iBIpsL0yTD4zrGjXlAxC%2BUbHLvQ8yBkTYh1gEkfBN7ojNoICsh877urU%2FE9uoDA24YaDKMZqnVmQVknVDDtZ6r0mp8%2Fo1dcottuMbf0iH3k4c8IaK8O3W96cSW986bzeDT4Juj9kW7unqp%2FiAIPOZluuq5wYq2iRqxtIhKTFkjWIgJk1pA8yf7SZ6a1ZQ0wr&X-Amz-Signature=f05879000b8ae0ff12fbe3fe51f93c9d0a95f256a42049ccec02f6e4c50f3272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RQLPEB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T125725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHExutxmZdbfKB0L99%2BVmATdt49d0GXlMTY%2Fb633t3o2AiB%2B3CH7HItPISzs87teIhi9gdrlisqgVZxf9pY0FtsxTir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMAiifz%2BK70%2B%2B4PGlMKtwD16%2BQtDdWV8rkgcwx2HvyWw8L6n2IX0W29CxN4NQSdJgU9qk0VJXrjsF5e4dSLjKAWRjA2CMbmneiS2rVcuksCMEuzkfFf4B70J2njyGRutogM9d1vKVMDegAZ3OnMa40eTKcKg32SBrP2I%2BOTXp0DC%2FffyoqdLmUJBsawe5M0HEkiJVSbvle7c2F6WcIqy7RiLYfmBTXr956p75pT8H3st14ZM484tedkZ54F%2FucQ7StpU%2FU8oecZsNArArhFjqQNfwOTHxP7zLe8bFpXFWH9d4liNpM32A90HIGB16jF3efDz%2BaNxla8tofXx6bgbrz7rCU7I79rau%2BOfkNYawa2wGoa24la3ciZzRsUoKXfc4dTOCVmkrjd1O3LdTCMkmzwTZ60RcZTFG3OWAVTRvNq%2BgseQosFuHneEot74RVZ7Epu1%2FPhfTd75L55c5HY82v3VqCfp%2Fg1iylcPFYZz2hfJQt7kMtSme1v4sUd2G9yx3VlB31tdWTIqWa5mjCkkpHpbxR5iow6cHp4FGlN2h9fDBIlZmlOWh%2FRvgwF53SF0NdLkvU5%2F82xM0oZUXCyRFmXt0YHwKf%2FgAcuaQphxi1Bf%2BcESFPEi1ujq5XA05ycJiIG7UB5dJ7eidOevAwu8zAyQY6pgEQ8hofe5l2a0q4B5eG6lBwWyPM0G%2Fyau3GuMg4JytF3RBDEOq5a3ssh2ACiUjSIz0O8shu1%2FQrDoZwF4vBwB4xA%2FKxJAM7xTis6inn6Rf9xjkc0yAC9Lcm%2BKNmC3cNp8eY1IZntkJ29q01Q8WXZ6bAQba8wbSqhhMyZCsSBNyOO6hEm8l6g1Nmra5B4tANtWwHOdRKjSB%2FilYobwzVlKwG4dJVqATo&X-Amz-Signature=b3ea789bf0666f40cb6a26eff18d99b99fd0469695f1e24ce130d83bbdbf8272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

