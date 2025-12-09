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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CFR7GPO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHIcf0QLEjmAkt%2Bx6HAzXhtWhy6XlF6yGHUP9BjzSGpQIhAJIQPLTmcVd7N%2BlvBIW%2B45uktdVtJA286s46LOPWqTZRKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7c4k3bs7GtHgdZmcq3AM3AInpR5HIqDfGfKE%2Ftnr7ZzdAxDTqnMtkN9kLq%2BTlSvjKMzu0DDUGVL7qUrid0FRcyQZD9Quu5v%2FknlBrbiKjpUtp9JjU4w30XuLWw9ep3HXFXxFMbFW88AKILQne8NzVZNIU5heAJm5kXEOko%2BrTpQdiIEBncpCIAApUfGpEGP2lQy1%2BlMRsfu25OhS81qPEZwA8ptYdI%2BGJfj6D0YKDOxg%2BljWAL4lwt4CD8JYDsQ2CTpo0pi%2FEQwUhnO9%2FNrKqWFP6z6XTaYAmf%2BJB3NoQb2jGn0Z%2FwD2DkYfRNyg7AmHJQnmPPYbyVSnegGmzYN6s%2BmQ2y0defajdrUWVYfGGf7B%2FoNQrDm0titiABYc5rdEe6cqBIACZd09YFcCScvWCjFrHZD24uau25ZZTsTOkBPxyANINkY%2FYujokeNQem4KiHH9KMfjGOf0GjpCUejMoFe%2F7AQnNx2pzxlgxoMO%2BI2RO8CyiBXdGU8w4m1PpXPDVDq5rGC4YznTo4J%2BpHrZ8WqAQ86MRwhAQwvPIte27PKYyx5V4%2Fu5X2X3neC17rFwsIUD0HJK%2FsZ1FHPNvSmTOrPBBF8uTRvdZFz6wJZ68LT4nqtufCeeGO%2BLz%2FwRNh9yl6f6%2BD%2FvO3M7WfDCPrt7JBjqkAW3lguI1v%2FkuenivUOurUj8arxkBEHNcCjdZUVuAB7D28oSaupiqcDzVZEJa2gwRb0UpjZbeqILEf5sAMngcUEcptZmcd4iTBXTQOe%2F1FMe8OAtV80j%2FPGqfhwu5wMMgxLR22IuvVt30Gx70CkWKD5xeu1bir48b8F5k2xMYqJKhW8iy3vGYfonraDdW3DRjYDh9pfORFzXLfycCerdgA9lqtJ%2F9&X-Amz-Signature=3c0b72bfd48fc1f434114c821ed3c539aed0402ff943698f81e7c9fa97f90700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRSUU3MD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoV1ctXJpOoF3SKMzKFM3RH2cFPIF99Ksrk6%2BWL%2FnrBAiEA1I2WMkRM7HCcvL2eDKpIt1EYByWz6hV01C1fJepiKBgqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9nBc60E%2F4fek6OZyrcAy2n%2FNzdLzWE18J4bNGVyyj3q38VKqOGGuzmcPRtNARan5xL%2FC4evNxisa%2Bvpy86q9VxVba4Sa9rPWMZjXb3VVyChwu2PS%2B4Rutv4HqDR%2BBWBxqK6E0U4C7f9gWmATsrOCR90hLrZvbD%2FbZOECOYIH7%2BN7TlAZx18AgSUtx6Z%2BY%2B%2Fi%2FwyVFwScVcmpiW34Psl1PlPe5jeYEUHRZ5mzWD5tUjXWtNN7KtPM776f7yibmjxDXnmo3n%2FZvo5jw35D%2FHmD0xXRLPG4jS%2F4%2FBMkqcF%2FWfM4wN5TvoWxDCKAAmDCYnw0k2QK6n0z7DKZa77%2BtDa13IIPpJFbV5AkhRc3aMceHWBC8uCURIofJobw7H9G9XE1g4QGox1k52oy3p9895%2FMlqHB4H%2FYmDwSamEvVcYqqJA%2BqnuJiohmCOKiArdrlGVq%2BUVmMtkRZWony8dMMpnZU0xPuO%2FMeIvYej5PQaz9jHeJWOwPz2sA%2FoMwdeczQl%2B1sMh2BJtuOYMCBtInPrH5kD35QYt%2BjMNz64jtB%2FhQEg6wrFuq0EUdpwCMOQquJYXNaPM70Lv%2FfmQ%2B%2BkkqOHn5ZWHjt8mYX5x9tHOye76iPDy78b4fVK5P9zEmRLOYZn28%2FAHxa0KxLbARtVMPGt3skGOqUB8ZCndk9se0zMjGyNAUNCGUAJjFGMT%2Frt98S0GxlcH7T94bIoxLm0RwxNW7x5qDvNKQas%2Fn2hZysuoxxzrNnzvmnZmpIqFYrKcDFZoZI0VFBU15JacLTLMvP0cLQC20qRFjU34tH3k4nmixWgbov8BTFUQ%2Fqc5Tq5KjwooS%2FAcxr3Cvkhr06i3GanGKQytoRG%2FCtJVxRlaGjnVgJP67DLe%2FRI4sL7&X-Amz-Signature=6ec63b88dd038c61a3e2edfd4fe436512ae4baac6f7e9996cd81264c3b9a4892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

