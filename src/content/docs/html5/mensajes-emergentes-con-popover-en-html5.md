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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6MNIV4O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCICx7Ewo%2BOb5YylmWyzy5y0tYrF98r5BcHYmLRIg41qQ2AiEAjPAXzOvNh4wR9B0TJV%2FkTGjjPF1VtXv2zOq3UpUnZZsq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBJozBlT5CLKK3LC0ircA%2FtOXoP9A6rCsK%2BWuoGgCb8OekTE9MOKymsf2wNAdFaXxGE3DBryL9DIhVrfBrxI8zt3%2FX9T0ES0x2rL0OLCdwiCkEx%2BLrYqAWE8ALoc0oi8CnUM0C1jA3gLzBPaloErY5ys%2F3sxgRfkR9GzlhWlZ4xA%2Fg8aPyZZkWMP%2B7xXTsaJxJk1z7H6J3H0w5woM%2BJ%2BNi1OK9hW30954%2BXmVm3tpnt28gUGm1KmDYX8MwMwsyb96qCFa2Q%2BtfmagMeenxDxSjRKw4QhGeRIFI79KNgvaFh4BBImNb%2Fe9vZ5faxzN7LC6V52kG5m5zl7Q7yvE8lcTzEPTMFswUpyCxfzHtgrIsnYL508CfgD7T%2Bbx0QvHQ9jCe3pERoItC%2F5tMLGGK4kJqUDlTXhB5nM5SBjUeCiCSQfiJXvKMVAzp20M5pclW2MEyOze4Q9xo3%2Fzfw%2BMUXvhBsBxn2qYNwIDvLXS2w7ZtK9tSNr8M07lq3HBHoPXX%2BDsyNjM6PTIlHxjUeOxOIQuZSlm15ou1YnMRb7xHhVpka7WA0YSOI1C5WgqMbp4v2%2F6RthPk21gwE18aA6rjf9EdH38zUYGFGChLf0PSTiBvGSspbtru0%2BHvvlUqZ01qWA%2B83YY6pS%2B7qDaX5VMOSUw8kGOqUBM%2F2B%2FsuLf1VLri9C59YiK1nFLCWkkSIKIXrmVgXJkoujX%2FYmbRcxFAxPtAhfTauTYDgHPC08vk3mhO9165LkHl7r%2F59m85OUSBMJbzWFLbuBL9KiJdefV2phGxwgWrH8igWah5lCiZE4o%2BVkXn29fEKaknBFiOWfO8hVmsH2hhcUtTdlsxAuDreBSpjwROrDpRsjDji2VtBS5J2HHZH2oEj0BKeE&X-Amz-Signature=318b6f6c72f9d096c7cdc4fd9731d6ce6b7266871d83eef0602ba1e893549d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJYDY7OG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDfqlCHPBvnT7Gnc3Nn5E6aQ6LNtz5O2bISDnJ9dDrCagIhAO4WshjzOL%2FpKAOKPZ0LpTYRz5Rgl1RIaX4Yg4IXh4ctKv8DCDkQABoMNjM3NDIzMTgzODA1Igxsr2HchSjmSCvcz%2BEq3APTiZgdEH2R%2F8lTGQVisGXfmcTq3R7xIY26G95i%2B6Py%2BeOcjw6k2ucD4YGyRo1v4jleHMC5GGMf23sfEs5gXf6l4Xhnq%2BVVMLQRgOVtHiWd0AaGaiqpekKEJD6sxAgNZoVgO59nOB2lzicyfdy5VDICsbf%2BuUIUeVYQzNm8CU3v5NHsKNG0jLkFWJkCKZJ55Wvzk5Hg37d8DH9updHLXJ5pifVGOXWv7SJbu3zrriOsQCqrB1iMs1setHBheYHgr7FCvuL3fbs%2Bkz5plovHvcrty7SK7SnpnWtOS9y6%2FC1jEn3AvJmkpQz482m5R5B4V9QbnKdw%2B950Wn5eNiA16cXXa7F8xjtpuENKstS3IZ3Ne6F699ZLj3sKR9XG1vMj8j%2BTL2mlHvKALFZ35g4H0Wrtd35Jx3BGAOzbas95acqG6ENok69OdVqLWpjPyzMRWGwJqKf8Fq9kH4UjcyWETnQPZ%2FncLs0OqIDGkyEdvn9FagcMzVRMfx7NrZlsBLI2oR%2Bn4HLcm%2FHOlt8BRxSI1iHMI6US7MBrouRat4SoPWRpmU5NOQjI0opNLFIQahtwfW%2BfWqepKvP4YUbLuMzONF3ba1pqpBfvpqyCtfxBc1jF1o2rvpivqRasvhplDDDFlMPJBjqkAXkaXS14Hk6Lri%2F4ATgxU1fvmUsmge2fVBiVEWhjV6HJRLvLGeTrouhCfuIA3NI4GAx%2FjsWk5QIaMgdCDNidpNpZK%2BiMMAr9Hfe0DaacZk5I0ingSIATbBzpFvJHy1ucZeDlIR976s5vAoTDoXtpUxoE7s8S8z4rCmQMfgadqL6CCbblCW18QRgtbJZt1ksuFGdDClVp4McfJsA2L%2FzPy7xGi7D5&X-Amz-Signature=3f3b7dfad49f04d142b0099e3ec82233408bfc0b4f0300f34bd631223aed1ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

