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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE3BJ7M4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaiKsQnpB%2FLv0K0GT5bDZ01vlnU9SAHbeIzid1aTNQaQIgVLTM1twf2igNUvEw4sHSh1KQ4RY83%2B%2FWXgFe%2Ffm%2Fjk0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZQoS%2FHI6CM7V9pdyrcA%2FQYodk3xtXByasUF22ppFvJTe6JlC1zbRMhjzbvtOQcAZeYLVvExcCX9jI%2BjK9vTOHuTJS2%2BSskOb34qMasizyP8aL5VYJnKr3qylNu8AQVNTwmZUbL7qIHSB3KQk1Hla8Sz4nAhZgyinbGb0Aoxb7RhrQWi4BqisqPiQ4k67Fe7S3QEvSd2QqeVB%2F4YIzoZwwZR2R8rDaybztQUhid3wRJhNLulqMqv04DcLSsmum7FC%2F2BokJsVJYurDFr9wYjsesgHL%2Bptv8toqYsD7BKmHXZOzaGDwdtTSOJcUEbKCtJdDM990hYOmH%2FvefvfFL3w5CYMOWDTjhwAXlPN73UMpWCfaxtXo3nnkzUqEFH%2BtJDBOtSmQHv9EeyfXXdiuGMOlNToyX2doH%2B3EClADrI5oUrV33R%2ByveRRomkQTAxTps3aJaPjx3gnlOA69gbW11KcUEHLWF%2BF0j5mQA5vpowNLDV08AO4b9Mhp3Cyv1jkmCdAuSkibYfEy6Q9fwfjixXmW4s0KwWdJx1uCSAMwUcJjL0CT6wAgeVvj7osC2pXbypDLva7t4lZD%2Fo3h1ZUUiqr%2BxWwMIfVJ51DAz3w%2FT%2BnoyllYZO2MajONu8qZ0uKwEVL4LWIFSotNfS9XMLWa1ckGOqUBKkjAa6U%2Fyu%2FLeIFdjoWrFuQ5AECq%2BW5F2rtP5ww7vrzKAZagtYPRxk4UeGqUFayGZH1tvwCwlPcdYwfFT50bTK1Q2NEQcEHlcJFRbgWnLoBSsgbgDMKAtnFDhrdNCZN9IND5sBCoGizhPKB1IN%2BG2Vl6xWZWDQZ16Lz9mJbLLZC%2BFCCj2niQorpm8RBNaUkO%2B8PBsfRYi5fDngasg23BeUztD1B%2F&X-Amz-Signature=696f6ab4f4af16459f11889e29361f3f1a76939149c2ecfc1c35d951f2b3b246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNOEAYCS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOi6LU2Ajme7QHvoMRgdN4Fq00axerLYMiGQQqakr%2B1wIhAN3qzgCm59tV7rIvp1QbRgyMgO2fwFucrqfVZ3hj7GRKKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIXU7Sj1LfKWFgp50q3AOYe2WtRkhoBb7mu%2BDDJMKt6RfyGvgHsSbkCrMfsFwvt4SeG9CkqBbzF%2BVbrLIeD7JLh5x8WJwGX8lsJJEJZvHazsh2%2FrEN%2BbIRbk5LvZGR%2FouYtlcw6zSw0oV6InDKY8cynBZLU20HYqu3g9fHxJfVIfUUok%2F%2B%2BZjO28yEP9xkIyVmNj5vg5HheBlVwAHsy2OX%2BbwqGWlgmRLo5W%2B37we1IRbd2hINoLbaesEdiQXSetp8v6qw2sqsUZYiTVbLACJNmFAFg8abDzxjf00R2ACle6Ms5qNkulRzz%2Fc5Q6Js8do8p%2F6QtOpeKtBodnKO6NGG3dLbzYv%2FpdmNfg8swZPcyV3QFkeQpNoeouxfps8kP8NvgfeSi60lnL5v%2BcvnUOANzciQGk%2F20NY3LtQlRZL3YCEnWMtxf6rJLwKE%2Ff1gn0dZ%2BItetC2k%2BOr65HglE%2BI%2FoGPaSLavFAmo28oCAT01sShFU2WVMXOQNA0ST2jwhdNClyjujIH7TEYDfE2umPHou1XGMnmHKfpdeVBb2IVH6rv%2FDI2lvZusRAoDYecoZuNCkLcU6bJm8m7i%2F2pjQPVyPT8XYgnyCO9icdu0k4nYc60%2B%2F9uEW0fdkOXIGP6FhMfCdTofy3D9PRheaTD7mdXJBjqkAQauVMXsHlTdmLibPjrqBJE7%2B5zbHi3bB9yiQ2vP7lIL5PgDaQdEqoH6ogot9zs%2BuiWXu6c6bmVqRZ1XY9A4G1NLih9cgQthtjVCix8bh%2Fs4jYKE13S4rauqhTVOVxLUUhEizsS0IYXaVDfTy%2B7INe7zCFEa5HV2SDVAAmb8VMbm2W%2FkURisqSVY0g8czRmAxxjgb2AQwMLbPt%2BMxNGoBbf8LtoU&X-Amz-Signature=3e5d0dc38c880d0e1cad0fcb337cd5c367e7da4f4d09306d15ff3597c8b9bc39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

