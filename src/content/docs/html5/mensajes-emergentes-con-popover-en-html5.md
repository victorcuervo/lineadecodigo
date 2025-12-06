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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDB3LT5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4N282Id4F1clsIBWZaqW1iohKXl5d358WVoEH6WZOdQIhAKaUK0S2qN1UfkaYJqAtI1iew0GBQT06H4vuptRASUpqKv8DCHUQABoMNjM3NDIzMTgzODA1Igx8impbkz%2BpjKP6L00q3ANXrT8vujlPnhrLg6U66AA%2BsWHhOBgG9vT05ULzBUOnYGBeQNv55akbO5GM2f%2BxPBX4mdg9JjTVwf8Sl2CQfj1wfvryhXkxX%2BwOXqTcmMuhAx8afx7QBLpj%2FO1XPZZDrMA8zsps%2BLu25GLMcs%2BtskTVL9KKyV6%2ByH%2BoE6Fbl7KBdss1N9SPJK0A%2FkHkVhoPihYHgoI36%2BtPUpfT9X2vwuonrW2cO%2B3evBlTPtE6%2B1b1uar74fQ2Z8vdSLCkpJFFAPD0fZJyYsEunPLs7LDekHJmEanjxWhDfckwui2VSjRxN9EoDtbkK4N2n3ddnS%2Bnu9ysHRvpfHKSaVsMEcHUJs%2FySZIdjrFNvvb89tYGeowXdKMBbRbyqlkBCxFQIIjUxQOZrjzT%2BR3Z73HGsqGojDqbiynZVdQFySIqt06gsLZN%2Fs8jzmD3TCNy98Lmz6H9PtuVLvVDbq5TaHdYDsdnTjH00ZxisKWRhS0dHL7FYpPJ%2FdJoueIfvCUHRF9s1nZqjvOLUQMGOOHzo%2FsX1woLjPWHUvrKdw9XwTQXyeUrd7H4TmORECyYwliVJNOfKi665ifmNfqrkx4L3THWNbzGmdZFvXfFBBOONz%2BHpfd7bpD%2FpRQ1tbhicECoRFzy7TCNp9DJBjqkAfA%2BPZ1NfT9Bd27iC22dd14%2FQ5g4%2Fxf5d508D4Ucp2Jy42E45l2QRi5ITPzYUqwDVd%2BK7ACAcnrPwH9AJki0XRiox363OAibUvJ%2F3%2BWiSIXvBbFiZIqU0fA55N6WIsS7mCGkVwrQQfM6mDNUwqe6SF6g5JF5kYFjUyb%2BTFIGyKyNOhYKIJSE%2BZ%2BhW%2BdHr%2B7XNaESgMKRjpv4zJJjF%2B1qoWZo3M9Y&X-Amz-Signature=3b21c7ad7a3794ad80a9c702e9174315b53c3cac990cbbc3f35f848a344cd46d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSC3XIK2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCICGy%2BskHqLAyplxaIkHWheHP%2Fr5dFXHwfvazdURGf4rUAh9jaPgGZWRtrHAVZgNJMKZ%2FmwzfkPSeuCcrr%2FwWoKhIKv8DCHUQABoMNjM3NDIzMTgzODA1Igyb3O7D%2F6jGGFPG20Aq3ANOWoXGLLyhzFku2rmrR1LPrJxZ1aAE%2FSRWOljs7Gd1uEH%2BsFiDFpO7F%2FfpEig%2BCo2tT4V6Y0xpj0v%2FSoq14dXms3BYf5j4CJIveof%2BUYzjPrUwKiAMQ9KFdIlQHxy%2Bg6bEdZZjU%2BXI%2F%2BvWD3TXWe7NGIkyxEexSFyZ8McYnvZ5oQOUiisH4XLllOK4goeODviCwDt02biHlM%2FsQy5sI5aK7UeppLZB5yvecOq6eWedfKhdU9lj3tE4HZO4R%2F3nbJ2Xz99HN7OBsyMLm0G5hW%2FwiCx%2BhMw6yfxutg%2FI4%2FbgqgVDG4OZpgbBeZK93tduauptXMQS0ce4zpLmpImp0nnKyavmNwJhT5KupL4%2F83laLuR9zujLdmns4%2BhiqMLlKGVxT3zvQ0T7z7dR%2B4GUSU%2FXitWHEmtEAxkD1MQjHEOCRHAdwWiTmc1dt%2FToS2R4E49hdZceG9p3IiK6YsZJbJJoYGASr2AZ%2FPLXWZDh49dOrKNBTuxmdw2rRc8TI1lLX7fnlvK%2B8JeTkYasvkHP1pWKFmyqSmMpoDTZ61Y1JyGnOrrMRusMXqeeGaRP%2FaUgnFIACBeEnSEemwl6NVk%2BDekbACZPEc1jXRuK8itb5AOgzyTzCCF%2BE1xfR5DC0DDFptDJBjqnAZszpOmkYXdg6HFUYNtxeDSZr2RRCIkNxTQhHniPHFzrxyyndSGcUJzACqU%2Bx8r%2F6InHkbJ4xZ9k0UxR%2Bv0U%2FlqXS6yY7j8hvyZqxrcpiQluyrJMiLsTpzCgs6Td4DoOtF7qAdI2olvVa0zHYau7MNUc2tm1aixjikX6He9cyWzpzcVOPBV8M%2BMpy7JebM%2FmWVh0Bk9fIl6USmaJgtWnqFiTwqxevTMD&X-Amz-Signature=06be96d9555fbcba7cac60f7344f5baa22c0fc51891ea58489f5de2a593be121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

