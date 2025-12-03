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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6EQHU2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIEy0BBYbdzyUf9iVCxic2wP1DR8rPeGc442HslrJ5pKqAiB3a9sRfsYjqKUIv%2FJfOCse3OMm%2BG%2FTLCa%2BL60WDh5XwSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMZ05C6rcxf8oY9zfsKtwDD75wiYMMLS9E6VI3MwdA0XRXfVSM7j6m8xMYmbsXuXfejM%2BnsXQjvRP3fnsGWU3cmirfRmkF%2F4N%2F14XoLii79TjDv2jyYxfRZmfPdiF7A0Zrqrb4Yd26gr7H7bcKhDV3obQhym%2B9s%2B8sbKnYwW49KkNuiD5edunhy4cOt0SX1PewBOE%2FLlA3rK3GYyNHkBA3VU18%2BFT5NbK%2FtMWPckLW19JJJ5mOpPLfFWY07BKshnjtweBT5Wrc20k5xret7WnduaM%2Bh1ejXjGS5L3sMH%2FHrS72xuZM48WI6MgubPhkIwrM9mCP7BEqwZjI1seRwGE7h%2Bb70r8vL3cld1jViaVpsu6%2FavgEZ3tDIcREvgBAIo2e9LXLCNBBKoPiBjdARZ0buX16ienpEcFW4azDJvL7IQSuM3f6YVVcGRJ1JMZ1S2vx%2FW8oiD5zlL%2FRV554EZvEnz0fWWTfeuRzwW3A50Waf4NLYAb76nQvADrQqRq8cOmVzpRDmp3z2K75J9NSrS%2BqGDPzbEu3bGRYE5etA7tnXBxjuq8WyOfKnyVZSbK2Qn%2FapueuxpI0MRkj6efXmWXrYZ33urxVA3JvLD%2ByLVksNUfy77nwG0DEvd1ccmwsIKN5ILeaHsjnT%2BGl0ncwh5W%2ByQY6pgFCv3CWkIHwkEAx02%2BygS%2F0uLeYkcwHP4DBVD3%2FugcBHBPcEok8QyzMPg%2Bu9UVT4K9L5G1TfcxI%2Bl44F4IFzyIJw9EmuieoHMAXX54C493VZxPogzEQFB7K6HCm6%2FHMYP%2FKFWvDyYt0fHbZAmE5BxTwZXHnG01vJrMVc6CHNesQiM6vqi6Xd%2BHtgSY%2FCkc%2BIkLKGohtTN5byJ1%2BePnusOu2fPN3VCw7&X-Amz-Signature=5a236c693cda07f6b804e1dbb960e727630e3c19d67a82f91e698a1f319c8e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S64IUAN4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFkzr7FwQyn7IwH%2FhhfJUeqrcJWzF8NfnRU6tk%2F7bFMrAiBApIpfLcHfv0bsSrm7VjzMDFH5UAP9C7NC28GntEhvoSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMumOOl6HVuV1hYO3oKtwDgV1%2BSY1x9m4YG07CsZmIaAK9FGSg%2FQ54aEhCYt4esTgvNmpnaR6b0FyScuiYNh%2BqZF4AD6qpsyRQrlkmx9rwkVVwcFxNSkDfBRPK4Fgd2Oi4C58GNXsseidm4S%2B%2B6TweV8RG02lt6%2BjwF04RVrIblwLeVbv5vTUDYq0weKvbozAYNGmiqWx3trCLGR%2Biq7AJb%2Bd7wNn4b3CMctp2d8N4I5wejz%2FtDxHRDA3y3OxMDLL%2BHvh%2F8u19wuRelwYieoRZzMT4kYZm6qmzFqAwdBr6JwhudETJoMdM%2F1x7Pc2wUjoFsGiuOdERpxFPvSRQWpg1zYBITMPDyrwR2KoSmm%2B95UP3%2B1vFNyBwQGlT8clZWHdul9pmNhXFTFM9nNNlRh32b27zn0F%2FNM8%2FJlLvcHMP7eI7UBUHVBTTsm9IcTXad8MFBNnhWZNOsxEscnR6OHyZ%2FYA5pozSESru4PARh5cAjYI2A%2BlGCyy5FOKC6ioExOXtb9n9eru48TuLkhcGv2v5fnxguQdVMA7p79wt6EsiAmq7p%2FoHMOzM5KXNX0XPMM0R5qVLcgKQ%2FrDP5mF3ecGscLpFp3m%2BHSFdFJBfFjCAcO6KUFalL6odh5%2BjaRgSUDxPnjQ4UTpYjis3eq0w1JS%2ByQY6pgHS1jZ0yeKWf3RrKJWeahTm9MAYt8WLxGjpMMq2fto9daipXUQNMiR417iLYR%2FHq1TXDGU7gR2TOWi1hDmuYXp%2BUdhmCcD3jOsCSpRLB3Ytw4weReri4DGBOoaGlGH%2BFk9r6cGrnZQHsTGJ4mwASjM0AF2I5sNi2za3vXGYRyy%2FHemhy79t%2F80soQsr2Pe4k0Hi0WZkTtjYI%2FiAqXxekzOFDUskUYKC&X-Amz-Signature=3fe3f893f63bab40524ed81453b7cd487b80654d3969a97e44dd57895efdc4c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

