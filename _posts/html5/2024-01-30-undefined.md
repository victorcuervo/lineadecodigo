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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWEECHOH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T095705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIBic18CZoUAZb02asqbZF5y3inY5HdZOxVauhpYDA9dHAiAIUTJ0PZL26VYtNiwlws0QMYGl5tCESSujOsAEppSbNSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMJHKI2LjROZbTr6IeKtwDfyPDsRBU2WkTr%2FzYnnz58HIA31jUmnlXcJ6O2TAnm4E7Y6DSZph%2B3YTeSG7M76w7HR4SiiW7jsyvy%2BHlh7uERWH56I6Ax03mbhXiIlRC6iX%2FKFPIYv%2FZ%2FvKa8SAbymFe8C8k5ZsOG%2BE0%2B3mIeujHAnJ4%2FJeaUBCCWG0FOGaFjcltUUVu9fUCQi18h20FAlF5cYyQ5SjgKC4mJOBUXu8ZTc%2Bd49h6i8qnqhW1nVMQGXLrhotymcAER5G71WRHQU9i8PBG4vD0gASQUOWap5eUeomk3ns8xDiJ0kEPx40yNm0YtYyfeTupSPGHgFEXedCO6fS2s8%2BrnQIHYOpQToeVlddiLgd8JXBertFS9yF3b0khxk%2Fd%2Fu502RoqmzMpeXP3fkrKnXjK%2Ft5LDe801wCFVZjlx6z4Xvsoc0Q%2Fh0iVpNwZdkOgVW8QcQwgY89uOXyqnlRqjHEhfMRDEydMpEwM1Kg7KzJRojfKagLj6EiUPNwgKBPWrS5IT1s%2FDs0D89ViSdk6bv5y0%2BnzXit9G6HzPIKhJYo4dr4DwpJWCjMi0T%2FLWWJt8IRaSMmZNgK4jv9lrsAF60ma9g539RaAUMeX8SqnJhMO7o1Kks9Sl%2FznKsMIg0%2FjEc9ESDndckgw0%2FW%2FyQY6pgEXBilhjR4QI%2FnkN5W2pffKyOOYwRPzbfLPiQAsoRSJq%2BZjC0eM%2FFXr4qWM2qaT5YrU%2FO%2BxpRaoSiqdMuK%2BnBLH36Kfy58OSiexJv47JssE4n1qgityZ4XpVJsFsgUkbBoWrlXcN%2BI2nZhyjgEd8FbLcb836TuwJ2pxwfpN7BKRYooG0tssjQVci%2F%2B12tGCWziaiUqs7x1%2BZpQPTizzu1auulO%2F6jfI&X-Amz-Signature=19c1ef77a5525883b93d8731e8b3446bc5c36c433ded23e59e0cf61f99bd7fe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG7SF42O%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T095705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBjqM2eP4caQ2fAUZqvwym8QoWgTGo5u41G3KUJQRlMCAiEA9%2BKMZpCMBglt9pgrrgE9OOJmIxBOn3zLsLlzl6s2zO8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOw6rtF%2FCa%2BQll2Q1CrcA9Vm5r3udBMP%2FstFY2NG92%2BcVYBROWoqD4BxqV2nNrLfsbwl%2B51KQ5D37bZ6OiMaa1r2jzyks3ruD1627fQYA34%2FoFp9l1F6aQzwhP9V%2BtNWFg1evgqoZ7kzsxp818nwaXkj5VVKMlNL6hWaedCohatQmCXwst93Fqfd18SBNVdZ1qSc2AeISNE1Awy3UnNVRYyMNV%2BHCmCTzlIIomGZr23kp357JtcDbiJr9XHf37svS21sfk9VH5rTef%2FBOlmKlkMXI5xtX6Jbt8%2F%2Fr4KgZ8XYP0PTaF1yESappKPaGJ0Ogb%2F6g2x%2FjbezWC1lPFbPaxqkpqr7Wx9wlrSW8Vs0ptvA7W6x5krSRCDOI0iqZa%2Br%2BeTAlAWfum4zV1sNFMxk9hZ%2B2Y%2BCTQlRVQ2BlEL96LsglVInLXcH4aW3I9AD%2BanWCBRbxvFxKyglA0CAUH4t%2FLn35j4YsURFF2wkawFtDtXF7e5YDZdVMcy9JvXHwmfIBjcHY73Za%2FFDw9VBLW6LfUYq%2B%2BQSqZG41vm17zhs2DN6e6VrsBKxT6ksfuwwm8WTktWrcOsYSI%2BsW3yU3KXn380ct%2FI8IpHWRMlKbgJM1ocuTOb0Lprw3CnBUFoi8nRRyxnhRvmHI6v3cQCyMKT2v8kGOqUBBQ8lyAOD2e8KyanHXxY9ZDZp8Faotgj%2FqQy3GJNJCiA0Z4TGhny%2BwtJZA9U4GiLIRMIvTA%2BsaY%2Fc0bwBIv7JY%2B%2Bo0fmAZw9toTOvaANh9lZn1hVrscujWNOPE1lqkLFx9vKjp8q2Fe4UxF54y8zLvmnchC93NrCUBZS%2F%2BleviLJWgW6%2BjDALTM1hfgNA8Abs0Y1Pg6FGHVOCv%2FySUx5iEIo2hpFu&X-Amz-Signature=cc652cb217458c8b7067d9576b7005658568cb846d04d2c28cd75fe524395943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

