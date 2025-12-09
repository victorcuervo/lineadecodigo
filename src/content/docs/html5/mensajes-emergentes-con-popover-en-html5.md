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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV4QZ6LA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYYJWvJRt6w3tATCjSbBYbMLuaN8a9fIjRgpSXJ9XlGAiBe7WnFt5TipjC1Qi1o5OgOca%2FXD58aWJypUsFDu%2B%2FZcCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEfIXDsnGsGJM76DTKtwD24q7HSOBGxzwVi4xuAdepW4buoXraJnOCsTMMyXP8xeaa89M26zZaRZrdY9QlUwxEHJ6je8SEZqCJ6ZNn78%2FbHowaK6m2XWuHmrphccss7wfgeceQiOYQXbaKJ7lENkkqAieMqTOaE4eQPJrXaN2LJBKhWNJmeGo3ONbd15Gf4aRJyjam6tdajbf3zWRuG593B4DPPjxIybzs4k4Otia8TAQPNzaZihVjEcVpT7mKG%2B2XU0i4XK7l7BfqXYCC838z6718qq3XN7pI93Z3xfOv1146ZSpAmTuk8xILEIlGt01QzedXaGsUGzbrewIMwyDb%2BRT1I4idfmHWVylzl2B%2FXLnr7awCv3bsjcLVAqK71qyEGhJW6cqKzInTgBKOX%2FkTE8FXv51B748PtDpwc7m1J1DrD5m6wH2QsqQ1eQNFrjJR3Gss3qwgwUAhiALI8DHRRhkQuZqVGNVsP0awzg3hOXXwd1PyOfmnUrg8y1bFr1AscU%2FbnArF86zRNQdHCJO9e%2BW9vCWyg87tpy4EnfWVcu7Sow6LN%2BhZA47EDf1SBj%2BisF%2FNNnZOwkcxqH7KrN5LphcLu5DDI%2BYIRAZ6ECUOVsWXSC9U7dRENrKRvWE4VjCqJ%2BmlZ69fwnDX9YwpsPfyQY6pgGw4t45Tcq04Ovr2H%2FrkcxxhO7CRUM7kvd0oVpPpPGvVKpCDOqtKlULkjUQi1e3ydpfG7ZUnF%2FBAezgeEt6TAnJuQXTTMNLS%2BWjg6EIbRx0v4CUrLqHxUiekL6gPPYO3t8z7ZqAlSH%2BuJRFN%2FQ1TimmnRQev%2B11yPKR%2FD4QIwDGiXSZAV4Km0lHE7hSTr92YVCFGVRwK8M7OY5FpFWoAmDUusv8J5Bd&X-Amz-Signature=5460168bd6f71f88fbf93cb52cca1cb0782524538f6a017dce8d4fae39c55e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647W3SE2M%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmWoZk6n6%2Bb%2BRH0XQuZkk32eiox%2BvAf5ZT0XCSj7JLJAiBwbILRIr%2BRiHWQK6ubL%2FFDFApgiTFFmMV8BK6jhcux5CqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCmpmUU6p8OlLnsO5KtwDdA7W4gE2tUWO6SR8fbucsvEpQd%2BX7wUR6%2FrKvylRRRpdRHRk87y46hqLaAKgsVAiGC7Y9zrp6tabiayOr2dxsdETqpZt8bOabkQpzm2G0ETu%2BpUZa0x%2FsWm3IEfBTVPi6R8NhPQaJK0LXT2FWZgIse14%2Beph9oMxwqO7sJ3SwsAobHHdKa0lIsr1I6ZpXD7ul3BG9BXUeFP9H7pBfv%2B5HhBYtZkNc9%2FW4oK4PrXMjhuy4QO5uMckpFXLrkVeTitRUZo3acMRL%2F0vl%2FrAE7OgBQtJWSHD8ABEVzHszIH1h8wUO0243TsMg8%2Fjr4y4nAWkIv4ms302bDwaMSUpwTSnlvGFeLRG%2FK3W9T3We8SqxdT4YiNsTTBNMPJ8lcgKuSL4CD6c4gyN5FOjor%2FXPm3UZ42HyncpIq1oefUGQQQ0Bcdu1mrP4lREQ9FwNp7xCvnt2%2FXI5LzEUSvKM%2BBGjuDy4RfzvTh3eJKi3EUlTBFisWL8W2Ipo5zmnNiip6DzX%2ByYdLkzlW6eK4NFKAtF6PeKR1L7RQ0lAH2N8vK%2FtIDUdcS7hVpPxvGvPBV3Hg70FavyJmx8dCsf3JGpoXLU5fcYauWj2uIIseMF%2Fj3XBMljtn3QcKow%2FQkzStwttPkwjcTfyQY6pgFWIqEkeFo06TDmYizdM5Tzm7c%2Brg8R%2FIS45CvA0MoxNcFYWArfE49Vayg278k1sD9lZLxi%2FOZON7pQACiG%2Fqxek4DORnKGmuQrzQTxaCuJR6SQIhMdgVGYN1qldbJ2UOBkvv4zzIR6YHnxoYQJcnq1AQ3aSUQ2zGSCzVIBs1fhctFQKLG8ytsUpwH7rxUNjYVMSCz3aIP3MKjd90iqhmDYDSik9FLR&X-Amz-Signature=920a16f445b53170e72be699cec921eedbc676c88228e8352d83dba52df31e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

