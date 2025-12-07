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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRL4Y74I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T092736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGehgmcmyr52TK562FroPGcw709g6sAxMz0KbQeB%2BRXnAiEA2kx2hF63qqgQ%2Frf%2F6WG50Bvb6qpPQhbZ2YxWTnYp5MEqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAB3x8FTjvcJfhsVircA3eO1OEcFYVey8L5stWDQsE5NCAhGOH3sxVn8AUcsU2qWS04Y26gVtnnmL9WgQH2mqg0Na8lFfwRjsDRAW2KnV0uCR6JxsdURUCqJYKqGhxkIkunoXT2KrQ9mGaSKn9V4fkYzlIXxnRxTF0000nXCcfonWQ7lLpcMpq3YIVNsSv%2FRiy09dSIUh3ou5P6%2FuFyVVHP1wRMPSYU%2FOIqC8i5Ide9XfnFSRdwCKd6rWJRWsObcPeoANaO6yj0mU%2Btdj5ypB9SZUAeqSiH7vFRgrCm4aPZkmqpIV%2BPKnNG9yAAHzfVnC509NGV9ODhiPyDa3LZasaHbqzZw4OdOBeVyn5QS49%2BUHtP845%2FI%2BnL0li9ZBdQnpBGpVHoyBwSJ0GMka2xY6EwiNoAQjtF29%2BnbqCA1E%2FGH6YaE2dQbOfX%2BdR13N5gJSWuEGXk%2FQzLsZbqqV60JPDwF0h0yd%2Bxwpxf7Ks04MTWI5d9%2FqFYBwQvCtXUiTKvVtKXhjdNmicUQhCjSJPCIG2qJHDetoxwFSBcJ3KV82vNPMFdSedmNInh6zDVs5Kv%2FKeonfK%2BP5KQormZ%2FHX1gLt6I8lZqjzOC%2FDsxYpxuwpaFIRUNNZ40AtPuzSzfvrIf6CEwtjeOkK4NPemMOqj1MkGOqUBDJ8HnHnvPXWJsEJDqmWdmf6JLv5RKPGEYJ2DMzQbAqiclRyAypdlgPL%2FrIB5tJUuounFAt6XIq2Xg0SFPq6bmzCEgnBf1KtIOXhr6xScM6KlOzbN7wO0HaPaNqHAdrO7D7ja9PGDeeu8%2FkMaYo4Im5hCVi%2BLCKi8yx8RzCE9dWcAbKoP4n164o4j4SvsUzhFO2Xjp%2FVjuL4jxdD7MDPaCJcRq7W9&X-Amz-Signature=cb2761018b5a02c4c8a7c82ce9511b0e2d601338f211ddb438f292ce68140e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654Q4Z376%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T092736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMeJztaWJREzF3kdZ9w629XzE4sATk%2FToGSS26uVqOgQIgcOrx9K4og%2B9wx3SDj01Z3%2FBaqhLrNPnufNKkCYFTC8oqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGE5YoF2a3Bgz3avnSrcA4xa%2BB57NBD05FlR9LsztkyEZe7lvz0RwnJw0DUInRt9JYF3KM1iEloJrMOAJdZPvF4GVT2ujdZbpBvt%2FITCvbW15V3daTGyvqOuTNwaIFdS6UhqlpDrVj4p%2Ffa7DFpvdyBuKFrY5T%2FWLEsdvQBXQHwnDMIS61kQRrZJ3aKtPP2b%2FzwbF7bmCtsIDvixOVeQgRWDmyS8oLQL0o14Qvsp7iaMHIiAjxgpimaik3fLG75V29HuOW%2Bs8u4bny7oeeYusW%2BRW7JmDbISPqrPYKAOKi8fLPg3BrOejYT%2FqVxtK3MtAo76zsBTpG8P7%2BHjcm67IjBdGumKlDTcl4E81HY2GZbgCK%2FNQyAZqEwSzRPiyPO8mRyn00QH9rzEJ85pikYsjBDHHocN16xs46RulQ0OEEd3Gd084oH3QtgLCob8iBsHOUuQdWAhEvD8%2FYpHDOwNk2xut5cYt1l95RDPoq6jw281P1fPkucZnMA2RJWLfnwMrfw7YD0t062CCqqpuElDoARgdhcp%2B0gxwrYUyzKs7Si%2BmOW%2F6evdYvlSmY4TBIi4Hj1nowzWipt4icG%2F4r9AfyETi8FMkzDzu4krYBa2f%2F5%2Fg4gKLUWXnybSAvdAn050v2NEmXKcXhJtjGaPMKmZ1MkGOqUBLdEkNY9uXz8kUTEIwXQFQcd4kcrK7YavAMi1FXjrTJ6igoEoY2dnpozlcNApTvn2zB0N2%2BmTy7mFG4l%2FEeMrTf22pD2CpqM10foOMhKxEkQOSA700JdkIWQKh7bm0J9PTsn0PEslijxQ1AQiUhOKE8rl34WDX6vNAM4%2B70dIsh%2FLhP4BmtTQ6A5k4rMTYlYmvjPl7G0%2B9Y7wy8SX1dQ64CeeALtK&X-Amz-Signature=3b04ea2009bfae70f5250e5a81ba0109a1e949b73910f8974b43dc6dc50a8821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

