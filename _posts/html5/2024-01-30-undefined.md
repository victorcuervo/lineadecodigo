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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXDLG337%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDfrniNdPMGa8Kuw5TRrGaNz7gxLQaVymJEkaQ166Pn6AiEA%2BczCi4XmfKYlCGYefnRSJivQg4yiY52ykPOVQ9J4UEAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGHNuMjCMCFHAkTdWircA%2BbITUnF7H46xwa3IKOWJSrgxeY%2BxekAph9Y62p%2BEteR08zUJDhkrU8%2F6vEDv4IhfK%2F2J%2Fn%2BVDaZcU%2BWeqgjcCUSA4zaFbAmRB84hIXljsbf1BjHcTnNWD7FXvudjm4QOwiiv859npnXV5%2FWveL4SrvX%2BVdKSR%2F1C%2BJQ5HpUGL9uYDU0y5D7PG6i8Uh7uI%2BF4dwD6%2FQG%2F3%2BNxSjK8I9KC%2F5WKRkLnnuvPLpduEAPipkyHuAwuQRUYXWoe9JKHnVB6zXAugf2z4ZqSL41zbt6ApBaHWxnSjJfV0t%2FyxxsEHPCXNJelPpmCRsGAQjg7NTxT09wDxwGE32vraLvYSNP7aASiEHZJ6bGPBYmAdbsozk0kcDhxugftOyDBIvObYxquarQ8Lqn%2Bb3r1TOS0%2FcxSZrvhR0okFHMkujmAZtzfkbXxQlMhgue%2B%2BAT0So%2BMxD5mI0UiIwYS1fgX40UBslY7p4Za%2By1HKgHrUZyD4GC6Dd%2BqxC2de5eXUB%2Fx2jMgZs2%2BXY3Czhr4v4VHKuZXXFh%2B7MdwffSxBnPLDLms7FlpzxeqNpvqj4%2Ba%2FH%2ByKRnBAn8T58kDHco3761wGqY6oKlRhoRa%2BJEqm7TtSVoAxEskzEeMqNg%2Fv42SrebSFhJMJHNwMkGOqUBV7HvAt4iVlQMGipdp5t7NJ%2FoGcVGnXTVeiDeXD4IgjGXlKxbaiaHGZlR8y2TeSKCVT7mevyXPCEWW9IEBEo9Rx%2FV7IIF%2Fk4lRtUiHPAGZy9QYbodwROuSJ1w5Ue9dKnoJfQ2elP5Vc9BXbz8ppEptkj%2FXE6%2Flvl9le9V0pE4I3gJUDG%2BEqqhmb1C7bq80UaarhnTodon%2BMHkK8Hv4WsUGrGAYFMl&X-Amz-Signature=2fcf848143d326ce5a36aab65ba911b4f8986f31909fe5cfefca405dfde9016e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFJXGZQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICiNLgoH9GfH4NN7gpmKMDBp8nVu%2FyqqjCW1p5eAyDk%2FAiEAnEEif8St0kNICg9WQyxPenPuYWsHJ8bv%2FELif32b0nMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKUN%2F6VLJ3F9ab9WqircA3do4A%2BxuDpHukjq8xyNvQHi02IAbS%2B1ofCoIVX2kPB0SQ%2F0yy5Ufw86sYIrcYxgNYOe4GFMlI%2BEJTfJ4HmKQqkMPb2jIlC7RhTEIxNiAlddi9r%2Blb4aNeLP4jmTgZj1087swPkVVPk2hqMRSqkfiwb06vInFquYtpVwLjGfVNxVRJ6ynEqEUsMP6otEkQVPWG%2BDdgYgzj1rzf71A07TTD%2Blve1YujoILffbpR9d4JIotP6nWwtN1rpUBBM1jQMTScEPVjpcjbRkzv%2F5MteL6zpZDmnsoGNnJr3AFjI6J1EeqjkBOVKfzPDktiqjoMXBiuvn4Q%2BTUHFy0ZYeHiiBOR4wWqOaPfSv2LvyzZuGGgQmhoOfxhYZY839kUjV7UzzIg%2FEzN5HFMb9tFi37wcJPf1z2skvpf4Re09FbAvKXc0FnZYaoHHm%2B6L07%2BG6uNcrhIY2iQp7HMYatMI3lcM0JR479RIAdud0znw2cpsJqEuY3U6fDLsyudMBLeZQWRP9wnfKRduYmoRoxxClRU36Uve0ahqqlCKV8my685du65FrFTTZer5jp8PngxujwGeA4hIR9zwxlwc81uCETfBZd1BGEbS0RNBxgW%2FLbWRDdt5NV%2FqhwEflB3J9uVkdMOrMwMkGOqUBiGw2O%2Fupa0IBCWWsnqNXc7E1HeOsQ3X4h2GOvkjit%2Bo7biG2Q1OPgw3T%2FoaChnZDGNdj5nLHgbrl9JTmELBjuY12WOEfQNuV5hjPiW461e9v33QkGC6StK8KJPj7ofjJl2ueNm1Yss7DPl93qE0vHnLsTLzn%2Fd3tHeuI%2BqOYNCUNbIVOVgL%2B7QtGW8m5VLYvSRzxayflgvGdh9jYdqwdoRa1yVnP&X-Amz-Signature=a3b4ab7cc7637be10c78cfb340cdfd0b4f684c009476764ffb57695fe1d6950d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

