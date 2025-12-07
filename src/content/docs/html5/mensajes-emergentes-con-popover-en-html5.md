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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGSQZ7TJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4Ge4gLbh08%2FOUxjjLZZ95Ckbh4HdzXVT3uzYpwlZ%2F4AiB2dqkHmYwQYxNb8ZsDzo0l6SEFoL6BiHi1nShvKO5tJCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNFgvgw1KXMjvJ5ovKtwDw8V7e4tvaBRs4f4L2%2BaYQK1tA0Zqwzl%2BD%2FpfE3ecxTVZdf964AaHtD7aatHpAhcWo4m3hjxXRtzfme%2FOPyt7%2FXqli9S6T3cdUjec9cNR3PQzYglJO2zwQzA%2Bf%2Bkl%2BEXFqj7ZP%2FSUTQgBlN6z6cg4Nh4OHWWJy%2FyutqdhU9N8chahq0zHeEZYvM0vgd5oNszM0r7Msrxx0tipEqfeYDNOEymEns7hnEGdkH4M0oc51th70iQFvXS4dklML%2BdWnH%2B35B%2Fj%2FlULY3m2utsxEvykaA2WFqD%2BwvyznVz3kXdz2gQeU1j3TLwj3FsvV1z%2FqDP%2BcJqAPUzLrcwFedGMuAqTjPvd%2BWe7ws72EM5PWZu%2BsYK6O2ZXPVSXsyY5wMLrPHM3shdwwwN1Z%2FKWBsSyboUBXu4%2BGcPrhLiqryRJ%2Bm8nAumO50VLTmPUUlCUIQ8oUf9Z9thh6cz5IQe2vXVYhydlo94Dm6jIicxPRK%2Bky5CD0zT6eHYMsa9%2B8G9Jix8D%2BBqHFHVYvNcoeE%2BDK4UpVSJ1CPpOA0EpRpPhnTMHlXld83y6dJsamIGP2bZ2qiKpDQSnV3sAwBEoHiYTakTqsrpq5zTm%2BedWAMYPRjSM6dWrH4uCxS9WQ6u3VUqZ874w2P3SyQY6pgH18RQUEN%2F1gQ4KZeeRk63ZdleJDQjGJm5lMfZ6rvyLlA7fx4lVCIjWaYVmW30uYuZaIN3NpvUrArlVsmBQrwFca285ZwNfqC0JlaTEFIw5YDuiN3Y7uwlB6k6y%2F2r%2B6usFnNixpryCco709KJ9eJAqIaW%2Fy8%2FtuOVS1OPzpmG8e9i1ACZET6shOmrLh5N5eLHTObV40dSE4ubN776fkO6yb%2BHBfejT&X-Amz-Signature=ba2f8d1afe3f4c6799edf946cc09b45a585b02b5b5f5d0b488a4d39496af8ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRM22FPR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPpP9s90wNZ3l38DlMMkXzf%2BcPdmIWOShIjJOh0sb9iAiEAsUSGJvKGpUdTFAwlOXBsrT0E51Q1Y915g8ZRaEmjTWYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDp4QR1suub9bkIzkyrcA3VbWeFBRDML4xTh5NKVMfdV1qUFEWAgraBcMKcDuJulARYfurTrhC1M6TAU3Cc83oN66v0UJkHmGnKTVK%2FhSsIbNJvQZzGT%2Bp7joEIB1zsnkqRH6PprMg5kKXeEAO54L%2FccyBpNNuttmEqKmBeD5%2B9SvVYp9ue0SmI6ALzoQt%2FrjR8AvKrS%2BumcW8fQsGYXz5A3lnlmfQDQp6yVZwJDiBbRzDpd1kLTggS5N9RiPi1KMus1ZDdqqck%2BM7c4QlOlRSCT81wWph5VQ4b3n06QyYnW4ggEueTrRz5ujZ94GX9F5JTlT0Uvc8qcUPt2Eq5uw61O4RE458MOAa3ATBpLdcouyfNEcR4YNBRp%2B3XHlc20uswArEX5Fcl6xgRmiI5%2Fbxh7pN7yuQIFjp99P0GUZKK%2BLFZ7d3Cxya2466wl1ZsRNK3lRg1RA3tD0PGLw5H0myVTq9RQXOHLLWOQ%2BzPAXMyzCMuPmsOwwlKtD9MKcD0KhmgMeTuiKL59LR%2Fv9176q1gs6QYhPyZhE7JGGVql8fmRXTvOXky57DWZL%2F3tljlQ20rRmWc3%2BT0W%2BnbDjqQQb1ujU5TAdPU39zYwrsLKUejKUOnZTeu9r%2FRiUIw%2BYuB%2FwJu2imKTlXOuLCm2MMj90skGOqUBaaRikgFgLd%2BukLCaJDPLCYItse3JmVp%2Bid4LmsDsMS0Uu29CfSGq46P3RRLFCdyE2YZj6Lu3wVE%2F22bGivsDyKZuvMUXeOlWBMSOIw2hOLnwD%2BpLano8ekAKBz3vXgC%2F5qtZm7t%2Bb3EdDaDT0mE3wUVNyZmKuCtxFrQ3ylUMv31x0wkkm%2FZz3ov58kanCev2CKG6L0GJh4wzn8AQlMctIs80Ydv6&X-Amz-Signature=1fa04c6c2dda7e9ee37ee343a4b35162e7c6debcfacf96aa2253b669b9c90662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

