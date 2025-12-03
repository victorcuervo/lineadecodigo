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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHEDO3DX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T155113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIGzWAk3dkJyqc0HIPJdodqqqfWcepj%2FCl9z0Q6mNlhQlAiEAprd2JqTJa46y3pSnr7Y1lvkqTQOFihuCs8nnRlKHG9wq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDHz0Ppd4tcsedun87ircA8ikr57kLqQKjJaUmOd%2FA2XFeMnQ6ww36ijBDUGQqYnFBcN5dh4R431VMySQjc9LpLClfWIGuUx2JX5PFJjNfXsnk95NNpsQcaIsOu5aT1ERjJypmMapbq8wJvbdqzteVkt8Fsz6nE3VkSvCk1chodcesB%2Bv%2BvUphXV7p5L4iE%2FGHqWxAe9DrOXol7UoZjf99w%2BsjcSj%2BUCVj6POqkd8sgigfYK97FIkY1bxcMRGyC8irinv%2FxtmK9Gfg42DDf%2BOgLW8NW7FrZxlo5z5eNLw7DSHSq5Z18n9%2FVLbwQ7YDiMPbstDMG9Zlrn%2BUxyN%2BBMKBE0urynLZXTtf53mYBspEZItloGyFwED%2B6oXwfwrFdrrcQSAvEsVPiTSoiHjoTsBWQiEkpnP51pVbjFcoIuWkE2Hzuf033TOWuxSMCOj%2BhsDTZFXfYNOYRrK0Xd8KZ5qGHqTqgxpzYdLAy%2FL%2BSTzvKQIL%2BYJ%2BqBLo5gjIEbPwhNdzXW5v8f0a4t2cjDT1G734u%2FGTL1s08Fhk7Nl%2FJtHkLiOf00%2Boa8GprFvEkLwCkP54LTKOMyE7SaN37tSJCyOb6p1vhNBxLKKBh2DRRU5N%2F98LfcxxiUoCQqASfJIZFHybuI2aaADfrdcBIhUMMOlwckGOqUBVJ5XsimhvSSoqTS68xjVQQWiw9LY52rjLBUSas2UwLMqeu770YEeU6oD2ifQ5hTDdfblMaGCYwNCzCJ0RTDmpzAHdGA9kzUay0Kzs99IsJHWmxjDqw5A43dTykdENUSSfFs3SezxLyeLsyzi2jaeEfQeFx1t92S6MIKAwQi1FLTSkQRp65dzPBsoU3s2gWgbVwCLTYlZ1zkO%2FCGpLKNLwZo1OAQK&X-Amz-Signature=bffa6cb33b1a3b2bf6b6d49095280f1f6f6e3de13b25bb3e265e298022cfa15d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAPNPR3O%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T155113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIG7Ow4SM9yV%2BiMXd75k7rwLePqd6QEj%2BuUN9u5nM2HbSAiAdZly8wDeQzDTfWJBn1lcYhHws6EYlVzWYeHSod6csdir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMk25OhfF9p6zTnRFyKtwDJsiouuu1Z4e7xOZJ4ZaBVzHmyKFJXlUMGetXFLprYun%2B2CGl%2FeaRSxGFlRPAD6btLqMmNO1pmMii0sauKN28XTdPDAu4RMtxY4Vg8S2fYgtvefohlwzgiOjKMTvs%2F%2FBEQb%2FK6qIc96C9U3SnQ%2BGqUvCJxulwCtsBQJiBx2jm4xxbJKcTJas3y%2Fn6iYkRaME3a9fRsh8tAEfAPH2fB9nUoC8YV6ICQWIWX%2BTHTfN79oYjumQho38Bcpdg3ZjNc4GXera7OLO9Gh0nyMHvKEJPzFS7aIkrmruI7udXAj5uR%2BPNRFVbhr%2Bl9B9fjlbqsYTS0oXE1eDvpUSmJf54UBQlZFAZx3buv6%2FSy%2BNxyZlLeC0KaI8yKXvAlMV5PTc4hS8gyIe3sO90BZZnNDMuPz87sK8oc13UceFmXvMSeAqPlsU3tURcdMJVR1KdO1MjVRMTeugI78aM1UwvSaTmLcxtY7SWZ711kKqtUjuxYHAtXKEFK3KTGaJZ6%2F%2F0jQ6%2F3%2B2tPfdpiZTr8x4xqmDFW2uDB7jMxBWwNNl3VT%2F0JehgdAcomisRtx8m0GxV8CNSGnwwo12VZitpWu6nXAblUGYRKXXXOccPU8O%2F24CsvxTM7%2BN4oJWGCKV%2F%2BCjLDR0wuqbByQY6pgHn08lpVTJMXl7FmxZ8AhW9rLavGOGBiSRE%2F9iXSp9BkFyIp7JM0wokWK0NvPYz9Ks9%2B4W2v4Sw2lhh6ANdMdJW2OLb3oM6fFgTBl4PL8THNjySwPW%2FEkYy4py6LhNxmCsdCmRaYR6Jo5iWp%2BWwcrWiazvvat0je4h01oMZb75ZtirjxkFhTnsO63WydDKKvd2IeznpW4rQUpGPrD8QgANkq1sCsS1j&X-Amz-Signature=f6b8a936608949dc10c3faae6a6405d7083ddf2465be9da58990eb6ce5de86a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

