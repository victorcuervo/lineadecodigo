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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCKAVSDO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCnT%2BKdJASrtLGn2LTKznb0M%2BPaWIcwR9Y1sPE69drL1wIgeF8D%2FRoljg8PkwOFwgJ1%2B4XTGnaLQF4R3jwmt2rm4QQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAByjn9975PreSsk5yrcAyjCE%2F0r%2B%2B3MN3ZyPJZBKH6kWRBuxQo8QuRgbOqPSb9NS014mF%2BOKCzb%2FzsnE4uMMLi47msedtYbu8AIPBwjP5L08jnRWd63IjVly2aV6aPGiqE%2BzEIMma0R3fEq341CoWuUd0r9JykHY%2BmL0boGn90wWka2N%2B4YrEdqYiIRpsfYVcrThItP5YVNr7qrCRwGPOv5en0j3O6vWME6REoMld1zSNTzxOJpX9YQU%2F5pxwYetdjaLdXB2zhSI9Uw1RiQ8J%2FlpWr%2B4Sd2YB5ka%2FIFG0R4FUgAQUx3JReRI91MtjAQC2fH%2FLeXd%2F1fFHrtq5xFlpeh9ZSKdw2whTaJU16fkcJSbBlmC5rH74cUcD5AQ5u%2BB5Ikm9aV7bV%2FMQhJl59nblPkkOETzCktGi%2FWrvCDoZ8wqe8dH1Q7YqRNg8%2FUSYIkqJT2HNqlKS%2FljCLKhDmpaM%2BHMqHPnf%2BMNb1YUd97mYARWI41lGUBl52k32Y92G0VB%2BYUNva6e5uVjf9BF%2Bt0wNXuoXO44xZViFjK%2FJRUwTgUtvMH3MSDOGh0bYW7yDDgxSaxLMm7BRJ8Orws%2B816RW%2BKkhOMme%2BSa1VrvepbAKLw%2FZrT1Sl%2FjHi%2BY%2FMPMDJlqKV9WuZF0mAFxrO5MMSUvskGOqUBT15ZZZOuu6Th1FCuS%2FWH3AZMKSfqVbAMT4toT5Z3j6nw5IV6B7bbR54r1PkYSoISx8E2m8RCS4gNaORFHfcaGf%2B0EdhcfoQcIrCfp4qihwsj2qHsEcr4tWEnvcihCAnh3xfxnEvzzKYR%2FhGKVQbD2kQ39vBrkVFThUw03WDiuy8dIwkL%2Bi0pTx%2BEV6PcYxCPVVBR2kf7NPbGgLnKFpdpLu%2FNw5J%2F&X-Amz-Signature=4b941be5b26960a23a8028fa5923480a2577a5c0cab68a9e6c9818e72f029b3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZHW4PQK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDmlZIZoS3NPraiO%2FsyaD1RYxoK9btLL53HJjBihbROWAiBrhRk6MdSwWAmWYb%2B0wNUoSEFPDiSTnL9pju7cjdGSAir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMBoJvXjWJxX4vGB2AKtwDTPs9QTuZm6t5UNK1en%2Bh1jPACdV4QdNEZ%2BRe376Mpqj5ZuzoLsJZNMwlG6Iu84ZOUJiSKXs7KJ7Ak1YLeDLSZmVO98FgMuIA%2BqQIy3%2BolT3bYtrP0xaNENKLuePX4lHEuH1ed1NUmxzZ72Um%2B775RpNwew%2Fm5bwBtMDHQGUUy7TT7u2NlAiidrNewpYtbcjsnHD0pzpNlrje9V9kFejiPirruIsmmV60oGoUJOZJFNOuj%2BeYdKJPNfipxVgSE%2BLOBxoY%2FzA%2B2%2BWgt3jjyY0GZ%2FkgxIUlu2yitmZTNN9xNWM%2FiB9NH1t0YHWwovzynD9m63oNyoyX6gXKEjPJIpN2ZD906AWFwnB3DdO%2Fj2AegZ7ZAucfVWteYatx6KHuRB2VZwIvGcY3lkt%2FNUcgcQufD0hy6%2BXERyt%2BDhpP%2FUGgSfWwScHwNe5lmmfwoIKX2rt0Luk3nDsqNpcuS7F3lOUOEmkMF4NlI7Pb54YrTiDBBRKnXDaexoq2w%2B%2BwlA4Fk%2FdRnL%2Fsvjcc1fwUPgpWjxaZ1HgswfBYnt2GPWpiWEpkkebvYMSoU%2B3s5RD%2BN9Tqfm2wDLvQk0FY9LcWtvgtamwWvq17CDsD68xIQxWU8mkZplHnyhljkj9u7wcXr00w75S%2ByQY6pgHl28UAMHVTia0%2BKk7tPx0%2Fl6OVhC9kfR2RUkFyIi7MupM7iw5ohrihkb2QtcOZ%2FcDVrVTGm0MZGtp0YH4DVI8JnsIxRH4UxjbO3ahsYOv7lAz0M%2BsuN%2FuSZ%2BtVjKMqg7yd%2BRPQ77zD6H3EcJL%2F8iyUblqSLmnXspL04qRQZQOxZEyaYGkGR6U4vbgHbws0F%2BaM6brjZuCYMRnBDpFJF%2B6x3vJvcxqn&X-Amz-Signature=a5f0d40b3537b01a121273b8d3075bcca6612fc9cea91f821abefff1abef975c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

