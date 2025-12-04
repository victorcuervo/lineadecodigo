---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR554IEI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIG5xQswyt6mS9Ims2J%2FNL%2B93BmDJFlVVl6Fwwke3HhYYAiBJ8OLPP7SkQuDQohhopz9RGsYC8yU6FRqGN61RV8G4GCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMv0B%2FcCLPXfYSM%2FIYKtwDkv7jYgIFK0dafJmhL%2Fpn0pkMxKUMmv0LZMm1SqaGp7rCPPlKBzEdGs7qfHlM8fsQ%2FG%2FT926X2xu87NyMhPf7tz%2F%2F4ic3hRzVLG3EkuHmHYlIgz38wC6u1J0LwYeDOaDi4lg12X42jBiUkeouxEPb3a7Bn%2FNLx3ZEIiDuSm%2B8eJcUhw99zua4xsIiqIzj%2FGfF5rQdaVLthy1MM3qhCGkb6QdxDbLY0Jqv5PsTI748qvjsDLQrUfQx9DyA0hBdGIPnxpM7M480iuESZKPa2STUusn6PUy43gSGD9lg1ozdsViv0dPr0u5VnveH5OM%2BJRpjhRkU%2Bfnp0fNp6Y25Lzmx%2F4b8Mu1b0ry4Z4jHa2mLVAXkD0Raxs1kVsbP1Bnjp06hhyJf9bnKDNokRY0JTA6PvqAniFnYX7KJIhXAMGtpiMkIclTLT2dYq4cLvPwk8Q03mhGnyPPMU%2BS%2F9XrNDljqNP4hCoG3QfmAUHfp4C4stRlVZWQZDk1LjELlDogIOWIlkojfaChtcrK6tmXe9daSjVqnC6UFQbxVi0vd7q6bi7Lknza23bu%2FAhKU1zii3li6PZ96YbugMHT74VGPW4oi4AIZGny%2BdZg9k0Wx9SLYFq1V2Y1NxRqoMsAqofswg4TGyQY6pgFY9U8m4ZDSdd94369tLvASDpoasb2ghSMFF6ccRJ6w01OzxKvSnHttRL9ziUjiAy2wbg0AO%2FVCJztnD9%2FSX7x8vQ3JtWCr7JKvdBwEKrj57dT6JBmGjOBzsDagNVPfhU%2F%2FrZhKKLNt0Ib%2FyDG5pNUjvapjyyj%2BgYLthzwdJNotDKLwpIxnLbBxbCbqluTaovTcDsNwfBa44GJhTWTKpdxldoyStB7x&X-Amz-Signature=41442d2f2b4c8a3508ccbe43843d3f37b2eac0dfae64b595adaa9893066ea7a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIM3XPBB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDtTitzxlvzMZ4Qjskg8JGdUZAFxjCfxiZQXafwjPRsGwIge%2FQTK%2BiLzbzno5XZ4%2F3r8gJXkh1RUDs4ev4nIwrk%2BnMq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDAbXW%2BpqfmUiDDV9SyrcA8NEgXM%2BGSM5vjELjooMcrSKdGhsAa2KMeGjkkJpphDC08hCczvu97%2B3dqNrDExQVp5tWm3VRqWA9L6%2BSTYEW8qjPhMkUDp9vBQjL3hL9ByGoNn7zHDdav%2FKpCGRD0r8C0pmTgwNJnSFG4R0p%2Fty9FbU5yhqXuwkz%2F%2BXqk55mzqIIbIjRbZYEtE7kSDJopjSV4oknC6NEME3V1LgL729zaavbAH0Wq58DZrWjgro94SBnUrJi2O3TVmSB7tUZPSI7hT5IsvdGF2dRB35oXlIoulIa3xruqDA1q59%2ByR7%2FQ5bAW3wRq%2F1sI1ntZqLCNblKWZV5K6vQdjmkmIZ7LnpB%2FhffIDsdyY2kJfpJd8z%2Ft89rEFPAr%2FsUzYyQOKZkD1lRP7xg%2FCctbOJLCE1N4tMRDNVG8Lla%2Bc%2BJ170ji4TPfkdwRuuv%2BFHthA%2FAnkNocJuvb0QzQ40TjK7%2FGF2Xj9QkgKqo7hG26L8QWTddOl7vHIlJixPNu0Na%2BHxyicLxobUeZHRqMC3vQEiMV3tzZO32580vPI40w%2Bv3qFox8Ut4foZf8BxahRq7uB%2BKZiGF%2BQXhj%2F3hQvRAg3ON%2BpYFW0TZQBbd1xKWZ4QtYi1u6ZjDCN5leEew5giQDqOb%2BFxMKuExskGOqUBRknHJQpT%2B4lke5Oy9PvyzSTt2gkYF4NECPio0IcHeRU2b4cJ3ACUgX9K%2BENl2dRPoqDjDt14EpmcDJXBwmXCWn3p61s88J2hbNgb2zEfKBjx1lQPSnPr%2F%2BSI1Xc3%2F2k54mzC3ZW7BLq4OByxYhPI96kJK7pMxpLAd9Q2iHWwwQy3lkSDm56jOP9G68Spibn6W9ie54vm%2BiacRWJbS3bQg%2Bj18t4z&X-Amz-Signature=8af2577d98ef387f50d024409a90836e5a0f7f3f0a4405f611f9374fd1da26d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

