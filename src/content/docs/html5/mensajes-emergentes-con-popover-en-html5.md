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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NC5WCZH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmDGtdunyb3tywdpVNBjhS2oiYNq8l6e5uJ%2BwO0Qm46wIhAJhXxTQwSt4utpTtkpQBhMsBjMfKktQ2zzPvsHWZ6dITKv8DCGwQABoMNjM3NDIzMTgzODA1IgxgXPMUT2QDQlqJxisq3AOrQzBeGT%2BFdQg5%2BOK5qRkPb8uoaeo0gk%2BT6mjS1iNmT6frtXRm%2FI9ddnzUzIsd2TV9oBeJdh35Kd%2FhI5RHDuCMtaCupK6zBEjgleS4vcCzyF%2BEE7fwaKIgAlCuOo9Zl%2BwJ3QquUimhFXtsfWQNKVU%2BdTHjHrYY02Gq1AY%2BPlIVYWexccgANUbkkUiX5IgzpiK%2FWitXYloRHzVQYxFaxo5Zowg3WQDGk3tOernO0EYlUpajrV5hpIdMfOqDrvIPlG9gcXEL%2F4CcoMLIo%2BsEMJpAlbv38xya60F3jXmy4Iiy2m5DCHntrXlCjqshWgOEbtyXHf6VujTGDNqE7hbYqsX55n6hBQpLZZOhrZpcp4qgk%2FJYE2Pfn351%2Frq3hVJL60gPtakjrGZg%2FFdMOWlutM85VAs7dHU5wEBqhJBDgBH6mh1NOcjckTjRs40eipcjrk2HlvYoBiIYlBP08wv74oMaAHUPmLUaqp1YkFqZ4V4TzAxi%2BHGXXrM0gvAdvUh0gy%2F%2By0FwqyBedESxCeUPK7IQJmQUXzTCzp5Lf8kDzn9ytv6TuRgn41EzbcK5dUVF4SOrY6QGhBo1Q9TPkOWxGTaMc3k0AFe1PDVDJoFNSNVrPNTq83ktr%2Frky7a7hzCjp87JBjqkAT9lwDZXdRn9ua4Armla%2BS%2FMobidgHX9AwPjChISN%2BmQbo1Qb%2FgSpQmxcem8Pl1Pa9mbEQTdSvzkrW8Yc1vbi3KJvIwFRPIUXyRWLmHMjjtveK8PqRyIQEi9%2BkDzEUo%2Fd8doXYQAw5oVF11tH8XryAmU5kbdknrGWOdxkeMjjGv2tPwYyN1GB5aM93ExvWSP9%2BEnsmzgzYE2rL1B0hYEc1j4%2BxwD&X-Amz-Signature=a337c24cceb5a9c92582d2bbebb1672ce6da212736a359d7d19d67370aa3823f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULGK7V7N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZmgiUt8YAtD%2BOzsGCnstl77MCSoCRwogcZkR6DHFBLwIgPeU9IrmsZbnxN2iriB0%2B4hrY0gJkRMR%2BOh8hco%2BwWx8q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFrun8zYs%2BP4wwQhWSrcA0YI0PwrH8XQsri5%2BTC6sKLTeFdMMlB4RzkyUyUTy7uKYD9Ur5O5%2F6iDd6QD%2BBWEuCA956t0lcSLShsafccTSz%2FP8i1w6e198Snh%2FOvR6mNfSzvGPZppO4x18G4wG%2FWjM7kBMz3VxdA6jbDD9bhXbgOgV7Ao9HPeyLtctSPAmnEhZzlAr%2BxZN3M0y9vdPPbhNv9gYWxGrKI18FFK3hsKMgjaITSC%2FUS5WsliOCrWBfBYNpVrcc0oLnBcOGZ9B54gu87n35MNJ0rlArBm4SFIKXL7mZ2bP8hV8PUcyM514BBPUC1COrQHSbybPnK%2BqmlpyCATGYZHKHgTkC1EkQIF6JL1KGzzJYOUwaWKuxmS9lekTNI6twH9f6hlUXROyBoGxePmTyf8MoTSFeEsLplgOoCcZvkaJPdYP3011Wx0ik5JaZRNnqBW1drpsxFLEhBR5Df%2BBWbqOohWMLqKIENUzEBXW%2Be%2BbRzPeVYwyKo8kdQcHPHQ2LXV1Zz7zQBYT1BWToE2NjD44uLCz%2FMdG1354DFPwRvBLEdiFLY5zZpGXSlrIy%2FALV%2Br2F22b%2BAtxZrIEtF0CbXQO2V2%2BNlTeSKYxYNFqfy5XjUyREHg27nCpg%2FTyPJSN8oRqP%2B0ixXNMPGnzskGOqUB%2FolRaxQrtTTIoZjYgBGhaY3OIzLKmbQDB6NsU0yszEUNbGlfqoojeBrAPXGL%2FNTlASF11%2B%2FtvWUPmAmCPx0sTeH1OXFJl4rB%2FHJHqMGoGcwXDPqugF7jVdu5Y7uppIh%2BxEi3sZ1i%2BA%2BYcOTkntTM65QUDJqr7ScF%2FVs6iupC%2Bjk6P9TYoTMMhq0tn5%2BMPK7Ll%2BrKERgU5CFmu8BBjP5QfBqEUk%2By&X-Amz-Signature=3249405cc155db56beb5d2e0574bf0466be00f71e6e6f6b974972e8d57e1f4a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

