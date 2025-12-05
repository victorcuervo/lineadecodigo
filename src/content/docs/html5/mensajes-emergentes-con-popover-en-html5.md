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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XBTRCGY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSH0KoMCDw2edcT1%2FVSwcSjIXXLDmEzQ93s9M9r5aIHgIgY6SP%2BIy%2FmB8WIgSaEXt4Ya4HbjTdNBpN%2F7FhC1xNmG4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDM5UFCSJQLg1IDtlXSrcA9CHVLaZO6oSpES2CGoK4YtgrOuiSHXQSUOQW%2FSLlyY9IZI8oXdzA53JjGGBZWVUq%2FXdvemnSf%2BsGe5j%2BIN%2BrlAlWmp5Io14YPQHwzM3s2rVBpA8Dk4zFAtS0EXXFwmTY3%2FHLwnZ%2BxCWSVR9eeT0DE2ercemSH948%2BwfWwhOF7Gq%2FVT5QuhblUvt07Z3Zu7O39TUQlrZ8E74Rc2bFH9F%2B%2Fm6q0zTlfrsBM6PSCT79g3Cr9exxtv%2B6p78Ap0%2BVIOufIo1jePz7X2AyJ8pmRBD%2BmpX3Epg8yZsvHUdnb1%2BNy5XM2JAS7mZIrsgiM1HRDnetW6nmVUgdwdjXj%2F1T6W%2Bhg21g5xFDUsYN2%2BQy6zwwq1CZ9oT9o9GQChe61%2BgWGdIhfI2tCi3dtkZFm%2FhH%2Bv92boiRExiTA%2Bnc9%2FJBMwx6mgDeXq4rPER%2FbY%2FCMkwx7SBvu8TqvUHhKiHGlrbG5p%2F%2FJGtjpfw5m1SDHqFXuTiSfVM8vDBYsOwD78Ef4tvJenFuStmbMTMGWVAEFzmw4gbrXY6ncAkPfJhK0YXJsQL5t%2F5gi0Av8sItW1FIYyl6ZzrJKlho0dE0D3uj90God4ws2yFAEckSReo9o6Vi5u5uZJp7r%2BV%2F2Z0oVFG4ThLMPWryckGOqUBtkKVvzuC25onqacmuB6Fu0IcJBKj14tBfRtEe8FegWtRnGfXYnFlGLfrSxpJ%2Bl7ZJBFHJLGZ9gVxXcWrVZM1lhsrpai2GmJIT2gd0L%2F1%2Bq2yyiLRifMW%2B2yZSX54dGelQ%2Fp8eCGFxSXssVHulfvgRAO2WxMsfjPsbmySNz4ZWe2IRGlYG4sOf2J2hVwa%2Fohf%2BjSMJgmhSDFKLJtVcodY8wKXN5iX&X-Amz-Signature=8da07b39d100721907b8e24df347f96f66e329d89b26599cfd76b7950b547815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SNHK3QB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAsbFSlhL7qz43n9vtF98WO%2FdEKGVngKapxgohKA97oQIhAMKW%2FIaIau%2BV7djvk7Fb8LrXQMpDoPmIVEzPQ7bS4VmGKv8DCFUQABoMNjM3NDIzMTgzODA1Igw6XQaCqLv%2F57FPTegq3AOn64QkYdQRcrR809AxYvBcf67SiY0x%2BIYCkm31dAQPK070VCLaqcr2nwklaTqpNBlbcd6ieI0zVtXs5c274zpuWCq%2B11aReldh0G%2BPfr%2BpEL5g0tEuirrWTJzvTBQQCXWwZKbC%2FuiW%2FzHn2Eu637aXcitIuYzuOoFeN2v7PrXkvjAGQ0dOQimOHaPq4n2jzi8UEXbU%2BqIfnH2WOB%2FVmFg67mLw5VBYQSdJHIeCv8IgMRqekch%2FgQk10bLmadt%2BxEjZbHf0RmCwrv2yL5YxGFI67V1V0TYEfAFotY5MMgSS%2FOOSAy1DY5MAPsUjbzhlXZ9md4kJvJ0CQJ%2FTVxXFFjZCdocmAs25u8Z%2BRisnQ6dPTCtapy%2By4WmSXSjLkQ1S4zkNGMkqOWG43FlQ5%2BLPEr8hnrMQg%2FX55aHxb2zodqN1tseJfKZNnZbzxsZxCMMeKetBA7lhVNdfTQ4dGYF1JfxaH%2F7UZGQcgC0ocHD53dCO%2BuvZo%2FKybyu2JYpcRib5PHXVqPDxUgZzB0m8ajzyO0Ek2iTu5bGDdDgVvZXDLEceloTuUz2pyfIYYyH08ERHBLnZs%2FZVdM9aeUu9q6ycMQCgsvUGOVUbDmmbvzNd%2BjLRvV1ALhVtLmsRWaG9ETDaqsnJBjqkATvy2Da3vy%2FZoYMab8Id7n2nPs11P4r3mvaIfUBULCs%2Bxg%2Bi3hQS58obm9rCje665GEVrz27CB9w9LiJvNtJjtjlyIw%2B84s7zGid94Sh0HbE1RCaCwQL6lC4yBGMYF2m3fSjqDTU4nNLwziIacUDfHfbcbihk3vaKM0XN0H2I6OgFiK9YaBzzUPhjnyoy7SRliG9WuCtJoiSOCU2c70FBGgv0gaH&X-Amz-Signature=01b45d4486a043c9e53e2c93221b739bb0692a8bad8c954116c410e245d34864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

