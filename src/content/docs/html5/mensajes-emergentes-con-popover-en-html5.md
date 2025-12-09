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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNYSRDL7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyWEr%2BDlPkRWJmU2mLuXbILEVuaOl%2Fi%2F%2FMvxiJRqACJAiA9Hfu2f7VgawE2x9ideDFLB3v%2FhpV%2BzchhKUJZqHSy9SqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbXZW9VZSWGz8EEOzKtwD%2BOJWcTECu8fLcUVNuDpkaqpM0vZJJUxolgpAfnEZqjLjErIZzKKB1EC5ejwDuNRPDo7NPLapurnKawLgsDeSvCHWImlxA1zziZ%2B2RHQd1WRoWrxDSfgZZNReUhy5KWrn6X6vNjZYawmnPCYMeFbiqxmFXfeFZjtOQu8VRQSTh4YY2kVgAS%2BWDHDjlGGGCux29wEGsR0Iw0ZxlwmaS2qgeYFo0ueKi6rW5%2BjLt2OaW5FWVbZlaw6g%2BDpuRClhCfurQt8Fs3DTU0q15uQGVC9clbyCaHwR4HhnoR3vmHZpLrgl0Z8BEY7oGHlDeW%2BAG5uhEPMXZ2jBUBXqvNM%2Fllf%2FITCp%2By1hxmFGiQu8DQm3phI81%2FdqpTP7vuUvTFPO0lGJTyzYKUJYgxcWxkUPU8IsbXf2ybmg4joamopPgFWMF%2FlfY7ShETuIUkExTm8AOKPLMiDjEjXZEe1R75%2FqrRa%2Fx45Kt5YCaUgcez8AlWeR%2BsTmVDc3%2BUC5%2BGgayx7Zbvila7SGq4kIwnriFczIn1fV7SAWTgNn%2FxNw9UYpm%2FSrM4FMTnIMZy2EuX2Lhujbu51yg%2Bwb%2BXFTQ5EcAysiGw3fEaUYeBC39mYliTsWIt2uJ4Mr8RgFDJ3VsCwNFvcwgKXfyQY6pgE4p2qLclwIhrg6d4H8AZMwOzGnEueTRDvR%2F4frXAlg%2B8%2FAAyysAqHtE4E56tHE9ek2VC3Z252NGNEQw5dGyEig5NqGGSiDl3ZRtJu1QvEoInha8ZQEwobwOJ9pO2sixit9hwk4hZe4qttlpZZK%2BQbtN%2BBzxdh6kjC7vrdM1oopsH0khCmV3m4RI%2BLDQd7NMWkRjGZ2wTsft1yuU45GNXyYAQFR4JT3&X-Amz-Signature=f50d8e20210aa7abe885c4f916ea9cb51a25704d593a5b9a0fead5c49f7d9ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4V6UNU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDPLmCViQ4%2FmV9M%2B%2FlSGDNvminWN3PQXT%2FkYGIHtsXWgIgJpcHd4PTk7viSkh3%2BvIVspfuI1uowGo75Nh1eqGr5wQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt53QBfB5LzHojmmCrcA5m6SA2cY77DxnNehu466jROtx29s3w5uc0R65GcJskfHEqpvoDg0biSo6kxHHhM%2BrTU4q5KH3M1XojotnvTR4jDLzHPmF1eiclyVAu2n%2B4hArRsEaMGSKAFBnN%2F7FkS%2B6PGX1Jo2mKvg1oGkrOg8FqptEToyiFjBLjuuPdUV%2FClJqwRXUbNOHfpZ%2Bo3CbkNq6iYidiEEXHC8JkMfXA8Df4g5uDFvx2jdgFJ7E8j3zij3OZsEnG481FTS55jbOlzLM9FXlF6%2Fbhd4ouXKHe8EaoVTwbios0LLpTqT1tL%2BR0VOCfX1wNplh8M9F%2FDc3VWFMR34bDtgIDctC4Sc6uzl4chzzFd%2BXl4kYt2C0ypt%2Bx9z%2BDjZZq9PB7IevQJOT45h8o4WJ2S397UY4hl3%2Fwd%2Fio85RuXDpYiDRpvY8keVxhjRuN%2BLbN3q2DL%2F6Qw2%2BIDqBFGwV5YbmaP6RY3Lt384cGr%2B9Wjp4%2F2e6u4GmWn80GfbKRfHM4qzwro%2FHIgYlT9Ea0i9%2FLUa2g%2B6v3bz6CuYmH0n0p3ln8G4Ed6i40yH9uT7odjpvGKvUr2EZcqkbi5DwtaOEyrqenAH18KGBFTnWSbIxKW5L7s08l%2FsHYXB7%2F03Dj%2BcWEBVFVjL60eMNGk38kGOqUBKc0ZLklJO1bRE9tDOSog8y1RbZ35XCEAkTKrVqR2XYHfYdJ9r4brnS3G8UCp7BirHzmMfaIJpZkIT26HZRaifSO0OyFjUDUUFSuH4rwuC1Pg4w3aXfnPVhqF5kVnWvTP4SE4MSsBJj9mkMKywwLKWMt4Cvm5LnDVAPM9wn73LdySvQm4Pt2%2FjqBAnDqSDUS%2BqEFBAbv7PI%2BbNY%2FLLz5LJuFkjeFL&X-Amz-Signature=8c8211aaa60fe327d959c5dd7b2b14926e70cc722f961365e5371b6a55a3d17f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

