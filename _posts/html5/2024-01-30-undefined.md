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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OPLRQDO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCNNG3UbPF1eYcm8oBBpNkeydBE3hzTk731qNbzNgcTTwIgQvBtH2BKc3Rl%2F4Ww0qU2opE4K2DKbe8ukDeLGY%2Bbhs0q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCxlLVFHuhOgdaDiIircA5ONPJ0Iwg%2BeF%2B7J9YEZbhM6nIAQUG%2FdDWruU26oAvECEUf7FXCkpf7TxKHyvVuGTDsEpZJkT8Da4bprbBOIg6LDHQO%2FXp7tava6HWN5QTatWzAQJJG1dzg1Z9BOw2brHxOxi%2BmyZ8VAZPr6kwqKFjMUHVxqc6c0mExVsnH5xMT%2BPRG3XqhwKhDkjL0vbepYiJSmk6cMhCmz4XTuT9CdXo0cAd43H%2BHtB8KEjGd97kLQ%2Fb5W14vlDxXfcbS4nHrhBU%2FVXrBNlWDvs%2BiNyucfHafYSvguy7r8lkPFDbyhRTfpMinuM8naIM7Pqd%2ByCVjEuslRTMuNQKJPq0qDcSydAI6wxI1P4lz2MLpU%2BwdF77wZx%2BOR2H70ssjUpGyoRcS2lrFmLE7jTJ2G8duJLmWn%2B%2FMwsXfG0zwO%2Fdpq99ExrwTx3%2FfiT4cdR2Vgt3cXGW5ZvFvRbPVnjWvC1axJW8zD%2FGnp91SXE6v3Q5P8Ug%2ByihHTIAllJj96FMbf1Ozoot%2FNHN37y5u1t4aqfCG1fvY3jhRX2RU1gV1xtX9uhqh%2BvXIVVaIM70yC26WOUARx51kiIpPhtYLI%2F%2FPickVTHtXBzMXqAmiV000Ja7D%2BZwUVyKQW9flMtWmB1%2BwNn32UMJT%2FvckGOqUBfnXyj620YkdciP9ASH6PFM3VX%2FFyIpv1p6SUa53a18ygnJEPzsz3zb7HeFSOf2lzL4c2mcCN5r3fz3nX9vcwX6KFCbtsMGAJGDRK0tjzBS3bTA%2FWTRSMzzuzo23N7qB2krXWtf%2By9fywWua6sv0WPyG0hz5G3fy6avqIlBIxJWZJRlzsuDvLMXe%2BY2z%2BW1x84VLZXpG0BP0tYG0NRY14v%2B0yqVpn&X-Amz-Signature=bf601454b7abfd5493e343b0c9c9bec1b9f4ce645c9dafb2de0cf500a569af55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZTXYLGC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCbYuIugJe5zTOuQMGihNZlyGtE%2FNxC1jLtWT83Rhc74wIhAIjCeK%2FKKrNosJp7sRK9b5gfVNcDgjd%2B7vqzIL3MSrIqKv8DCCEQABoMNjM3NDIzMTgzODA1IgyGVPULu5PIhwedyx8q3AOqGFs%2FJzasy%2FBZ%2B6GaokdUfooaxXRZTYyc6%2F%2FDOn3fY4pG49dJv2ODdDRGlDhoPx%2FL5Nn22HwBHC68TfoEnJ5hkfwvWeLZvJQEqff906GmP939%2B8RsvUkVSwQaxICdOQz%2BgNl4hRoh3DwGmeVrTLXfidw%2Ftg0kITzSp8Iq%2B5orCGzqpsbHSauRv1uQnxQatDohuVvJqyBTWsDkTqY%2FDqZJ%2B8T7qU5E0FwpfxOZ0x1%2BYfneesXlrhKP0ZFNSyxha%2FQboEGQACIjwMTvhO25GWtYbWfz%2FpbQyt7pBtNeE%2FHAsO4fyX27hj5iTBLDLq%2Ba%2B%2F0Z7LiJukhGfzndkYwnb757SaCX95zgFbS%2BRkEn6Dnu2Gi9ijJfXtmeDD4H5z%2Buaf5GvaJH99ea7MtZaV%2BmJ%2BOVUT3W3S4jyNzn3yEF1E3J%2Bq8iQMaldW4rDkVPEjckR%2BBFmZJwqWUuzUCo84P%2BKUsbnbnTPwNyOpGkCUAXgCi5DDDPe9dFXOGOPBnPEbiTyLcduEdPYyoj4GUMrTLVaas9RmeUJlsoMnfBsN%2Bbo%2FT9dq8nxrJ8bqA9z%2Fj518cfPrvSasL6zqz0R3xAgBEUkwLY1AfuspZlXDflnLOr1sMLwU9qi2p57Zy13HRGWjC2%2F73JBjqkAYkpvbqtY%2F%2Fkz512eTG1BJf94k5QDP6z6kuHiz%2BirTh1QdiPDN1ovPTE8SyEJVvO9sviCmpjX%2F%2FZqWYbYELuXagKBX3V9S85Piwl0uJHYfgmcoLatNKW6opkROCqDOnjAPGrghMMRjp0R3bXL8dAy0%2FCaIZth5IRkYcOeppCruOkRf4VsNZQz69IzGGqcyb1HMtCTcpfliP%2F573XE1zFwVX6ddSh&X-Amz-Signature=12c3567c34e94d4504d0d2385bd3abb0b7db97ecc2f953def5c1a7cf678fa911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

