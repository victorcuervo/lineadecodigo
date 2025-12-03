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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAKYAZOK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCqlfGOL0d6Drl2In0rjosP3QdxtkOBG7Va0ukO3mUVZAIge0SzguYeXAT1RsN6TZZYXXBV11MJT8AiY03PYifwKvwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJ2MlgVKUHk13wrrNSrcAxcFnE3uiNaWYvi9up5XPhXmZzyIlE3Du2yr9rJJMDwLdvnjHmKfOZPA%2Fo4gLqgEJB5Bo%2FRvmFZBxZEMr1fp8MGmzdn%2FuaAgnE98ILmhgVWG%2BHELYar3Vp22SNG%2F3SLsgLVskV632aJGO0Vo7DbPyYKGPRNhnZf7dYR8%2Fjt1hJLtncxCqExB%2BKKwYLSX4o4FMKGUlbjC1R0S6GakLCT2cCyk0YGwk%2BDXTdY1fIzBLnVFz%2FkiJNvsWWmW5mpl4rDu06cBL97gRYRCqjdEgcMwJni7yA8wIOdoKeNLjPAvnfHLrl4gikBjxmaK888WlcIF%2B2osSgjXewrAu%2B9PWr8vE%2BwrJ%2BAHRgLUH4t8AwfhTYtSTWCu7qc2Nx7fqLGySIlWVVWTyMH2CxxeSPNKFU7PIPSMFNTNSuV%2Fi%2FtXzrCFoCyD67uJf8Ap1I8J3cE9MWnzTzXBQcxbHpkspbd90uo6ecH7Hzz5gJ4sH%2FSVyZsdb%2FGjSgZwH9iUJqWm3rBds2OuVGqUP5ODMTzi9oC%2BLZqJ2ovHlr1HdEey7Y5PPX9saqXZ%2FtnI%2BI7R24EvuG7QKt9K%2B%2F71EyAY7ydCy%2FsOVJfV01cCJTI0vJ62bjOxUJEDSFXXgOX6lnB6fLy3z9VTMNWWvskGOqUB%2FxurZI%2FyRnZ0eYeUqgBKY%2FG7QgxFNxzv2FuapFo4fGDZ0FB67xCEwX1fZ%2BcXF%2F8mePuwknFNfpRviq2ZESnDYmziZjZDxsL38VhA1j3yMAfUiivH2g5%2BpTgc9nuAxWP75KZBpkrjC369FhSHCnFc6BEc18rrUrDtAzMqUWLPHE4XSm3IOJBulhPJRh8AepPtqPpnTYA46yX5MSBvZsu8ui6%2FdvmU&X-Amz-Signature=80c8cb7af477cd5bbe6d80ba1ab43cc7c0a18cd730d5616b6a08d0f3c6fe68a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZWAUTV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFMwrb4leoAwWDYqLDVMNYWwWRZm2ogl%2FBLdpG1yWtM9AiAV53QTUbFxVryz%2FG6anhTMTkPmHoE5%2BBfanSYkfWIPyir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMJHuGiJrnM0o%2BBYgUKtwD2%2BIMWlit6KjgvBcKJsjEYjQ9i%2Bd9vK8SFS2gJSmDBzo%2BqHTK7utytC1g6w%2FMRRJy7LHRE157ULtX1bb08M5Vzau%2B%2BG47qCufbabo%2F1rzK9cVQsXCiT3drTo9IRXGFxZIunwJAE3jwvVd1aUz%2B3yuxNE8f8ahSPA7ZRr%2BhX%2FaL%2FVGF1nmtL7QxayiP2viEwF5yEXmJukg0d0eSzLCZ%2BqaHr62lHlIGhl3iz9gV8XPznfSZVU0OIzQQRoFtDkV5W2No6M%2FPSQGpZ6VPeBDeuBvjasasXbnS8oPevDuNXpQNmFzwNGWwdle5vdQa8zY%2BWjNZ9%2B%2Fhpzwb%2FtNsqRCAoFoBcViVC%2B1ondEs9O0zcKS1IHnmhERTqHtzbAdGGh0tqvHxqt%2F1owfMAY4t06fzUPzaaDuiA9uKD5R6G6N9ri0eiCiMgD%2B6HxnR9qyC6%2FTWQFPvGUc32QvTTLg6SpeYT9W0Hdk26DZpdCwt7ugXxWRPB110EBWeVp3Taasatw6HkVZmf7xOiBruIaNT%2BorvQio3%2FUNXdxeZ8hVOLnirhvRb3L1B3wUNUUzL4xXvH2U2%2BYg8Xav7aSJx7nKDrGxLTk2w%2B1mPXTjQLHv9DE4UPaUXeCyvxknlc8GohMIaaww6Ja%2ByQY6pgFtgyNSCpn1Mu8C%2B7UTc2Qfr1PsckvPoTmgB6v1yxxVue11PQqTFV87t%2FsJsVHEJl%2FXRDoCQ3YtyskdYVbxSD3w0HvLXS0rcG1t47J6KY8ifvSaIW8Eb2UXapSmzcD6l61oQ1QrYf%2BryOrm7oAGpnKFRKDB8VzkFrDA04PqR2RlntbILEWWpnZUmbobI87FStSQFpzFf2hz5bYRGbAd17GMwzW6oQVO&X-Amz-Signature=d0508942ac3044fc32668459af29fc8e4c315aa0c0f1d03c285e2c6df08093dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

