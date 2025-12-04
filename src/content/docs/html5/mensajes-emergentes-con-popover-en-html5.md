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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT7OYZ4A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDvDtor8ZUktuTu2NFzblTCpg4qbgioYEN82i2oLQmM4QIgfIHlHGZFpE0NHugnu7TvY%2FdHUZuD%2B%2BOOlZqHl6o5kI4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLlRuvPYYhWz8El4WCrcAztREGccbQgyKjaoZEbKCWcy3z3%2B62IXFpdWhcpX9q8QDet4Oe6Nb3gTJtwnlr9Ze3eG2Q2vdinItgCSRhBr3so2uYzUj1YLjpRRtNWWZMRhsTqYM1mb%2FV%2FSnyGvd7MPmtv0EekphbwQMbq55MkXZGS2gm4Ml3rVDi1rBldlsQ%2FQpZan2ThAZwq3H4S%2Fv%2FSuvVmhJ%2B8lPIQyqPBYSlXsvNeOsNQo2jXjDTHR3LPmFUU5qNVasCpyslgUGbosRynE8%2BXsJxEeADYakYWj%2B8C%2BeNjXobj%2FQAsImVPZp%2B%2FCSS%2F6smJiHb3YVjg40SIvfz%2BOf0tv3G3gCVjQESPCAfn1aZq8h59fmfXzk6epOrSBuWEi%2Fcw8DUPAmpncLlTjoITIXzrt7C%2B9eFIrlC3tYbBOpz%2B7abyI6XhH%2BPoxkPM7PnOdR5VqZrsTgd%2FeesKwzeFnBBgHr4%2Bh4VqQmKvXwJdGGyuqraFhZZneHfgqvOL00N1%2B9Mu2Abxt1P%2FCH6zu232WdmKYnTVt7MEuAWyU%2FZfdhTDNI%2FKM11YcTo3VFT0UQN1MXFciWQka%2FA4s0vmZe4vUKjOZ1XoOblLEICeoI68HploAj9DaCQ5n1ThyB2eeyBLmmFxAa3fP2H5h%2BvIVMNOqxckGOqUBRSJwTo3AVUO4%2F%2FWrc74mVmV4NXfKj7EDmq%2FWd8P6qgR1k%2FtfXHkjknzUt0kEyAMMi3%2B%2B0HfgJ5PlvZVsigoaYlwMWCvKHrD%2BVY2Q0df72C2UapY17gU%2BruFDnBoWMbaf8rhA5HuEEf9ShyczOFnKcqmJ7MqedDFCdkrAAxS8TTWcAOC5pIhtwGW9HtO7TdWikHosX82%2BA8paSBALKGjIXY5qDfAh&X-Amz-Signature=ff06aa35a0fc29f3a3b7ec06c45dd4cfc778fda6f8ecd86260dd5762c8b57747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAYVV3H7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIHtLzcIVStexsZcFbkxrOWLxZ7gW6U%2FeGUGjTYzc2dBBAiA8t0EwgM5yBM1v96trK%2BfGsYCVlC53ZXsCNjBtT9elayr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMeDhV%2Bx%2FiQ1MvROqqKtwDypC7Mbb93jyxQ8OcnmiIm7PIagXuCesp5Mb6g0llro9Cvtlw6MWxq9fFbj8Fh09VN7Rn2GziVbQypsmgxHE8dlqMR%2BRqHCGdmvkasY%2BKG4%2FcA9wWZBS%2ByftsDZ%2FyMxcPecvytG9mppqL3kqZ1nrEw5ZmwGjICj04nAGlJLDKJWpKXKfZ3PIRy2rZpS2MnQQyPpnjVkGN1PFhITp7MOSDnWgqeaQAwWThtLzCmejgFofr73Em8usbZ3Mr1g4BmfjIx5Oyw%2BF9WVOuPRi6NPq3yUwV0sESMLY1WGx8XEQu4HZJtKP25oHxZdmOkLemnoFsA9YFKtUGMCsCA3c5b1q41DwPXN3ugB66Tii8Tdg5ZhQIzVwTBfqUaeqQ7KwbINumy1Ymh49J6ADpAU2by5vjeNds0GmPCX14ZWg6MMqEwmQCNqNkitfcfqoopUlWuFR1lAjb55OSoTkJ2zOFuQ%2FLtxASFcbUBfAWBDMGPGqG%2F7RofSHsO6TR6wgbuTBbSzIGwn608ehSg%2Fc4LoIwxozxIuQ4xpEQwv6o%2FGV%2Fr2AHY3gGzPwGzuklsZ4wWvGslVapuao0vlVOIKEwxzK%2B%2B6mYNeDP%2Bg2zcexscu4HpXHG%2FRU96vnhK6STYDuF2mMwuavFyQY6pgHcPMzujMO3r1Gvg%2FaTqOEzrFn7EvLGA6VGncd1YT4IUjh5om1rck6dLdlO0at7tT6aqK11n5j5ZBMZpCafwHvbkIfrzmsp4mxqACgPKFhFrB5Bw0km9B60Q9OUYqRAiqPp3JCdieBwL4VG2SckVro8mQpXRxICC4qv1dAhJxFc27TerrpPyMSzQ3zD%2FauXti%2BuAuo%2FhZgaw9lEKPzo3zq5qrusg1g3&X-Amz-Signature=67b81eb495d09098e3bc6ea946553b8672c78a18f2cff80c90f547b5725bd3bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

