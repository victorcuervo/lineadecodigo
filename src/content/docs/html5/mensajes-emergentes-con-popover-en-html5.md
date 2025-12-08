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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WPSCVHT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0GTIS5FdPnPnGIblHzfIwhPGOIFBkX8a%2F99Ixi1n9mAiByWpzmmV3DqbOdsBdFMZeZn5EWNbpjQ3w%2Bl7F9hImIdSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtVkL2kiLoIpSJTeoKtwD%2B2rUlC5NXijq66fQ%2FMM6zuKECQuI%2FTEVM0597HJmsSHjkVy%2FPZ6GFUWQV6Mx8gAyRUYnUGDwU0uahpLwjBVhTuOYjrfkNme1t32saBTB1%2B8e0gOWgleCRwhJG2MgXsOH44RvXSnQhxUg8LilNtbKT0EBH79cIVQKR8kJI0VY95%2FW4SStA8PDP7VxePrdz2ZrLCySv7T8KUoeuIsJv43waw%2B81hMQzzwN%2FoHePJhuA0pw%2F9L3sGy1IElFzSptSoqu5%2FRITph6f8TdlWHzzh6aRfKREmn8I8e%2BK1%2Fkmg8e%2Flc%2B3tpEHsxxn4eVU3S3eZlZAaROKtG41J%2B7jsby4frNRjkzBXZ%2BHKbqT%2BAS0rF7CCYjKz7noSaamzPKLFMNZxLU1Q%2FU5xa37sD0cdYAt3tFDmG6eIA4OeyIM%2F2yhmbevNQp%2FzsGmwkk%2B6gXI8resu5WRyHiIazTE89K5hy7qza52IckY0HnQIn9LLIEcMFD4eFntv8JrB5ZJ%2BEYuuFxRx01y5VDI2qjSiZMepIDbTjqwqtlyckG0VHgQju%2Fe0xVllWDa7EoUzWJIRYE792lVjZzYJSV7%2FV5%2FsS4oL8It0CNTTnUUngp4ZfXFms4axfXMIGlqE97twzPBvaXcocwuu3ZyQY6pgGS1X7%2Fi58ZIcwo7l0c%2FSbZWyUZlaB11mRBT2ZfsnYK6YZjLSOhX6QmibgmeezKgQpSi9NqwwmF6MtDEqHK3KvjHWZ5rHpUM0ZytWHHFopO1bE18Keym97CfBFe8nReivje8BpgdU4gP13zKwtNIoBv%2F2%2BkRT2UclHGlWptfQco0yRaKetvvYV3ghmOqvqz%2F7sFsinmhrFzWtuNQUFrr9VN4jKP4EsM&X-Amz-Signature=beb73440674efe60a09655a922e5b34525db4ea9069c4f0b68a8dab72843acb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYKH5ED6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7BYdTU%2FwQ36LhC%2FXe%2F3TGayMlEwbk7yMT4bb0%2BWJ2CwIgL3AZbRCJ9vXgaoSGDJtIIj3YIBCX%2BaFBI83I5LJPvZgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECchIOK3sLkccyR8yrcA89mh32pli6uXTiQ89FrYKSQGQ8aw98BaM%2B3HSTnBih%2FEqCL%2FDdb6fG9HVF3evl%2FmVmYgcHDU8r98e4XelVmjewZLJFh8vW8AdPq2mDfcFknfAzC2vRfD9VxzzEMUlmAyV1xJurNPhTN%2FhLR%2Flm8gFAgafZSAIibrd7cOQu0fL19JUk%2F0dBbZebtStcLrrHazg0Yuo1HB%2FM86DEFwB%2B6LREEaLrT2FKVdYQ%2BDIAbSZieE66it%2BrLisjDAIhDKSn8z0N%2FyXpHf%2B8eu%2B4NJCEoLnoC7SYgMuze7ZH81eYbyiWJvsfk4WW7b%2BEMKp85GC61rFAA7vWip2w3%2BKS8OH004PPNm985Z4eWfd9445zuzxvj%2Fw3YTjKgwS0shdXMP%2FHwYWjh%2FjMkuK5bBLiPjTe90jZXFadHktVcgWTdCmf5uzwAr3eZDi3MuYRHg%2BV5jVDgeK7fYdDoaO0DFSqqmELbKZzX3GMqSz53kd8ISnACt%2FELwxS861b5nd4gHmiZr4F9IdNt5AQSLYT8r60Jd7hnIfaC6Y303Wd2Bdk2qKJMLyl1nylAtWoewZwBlZDgBfVUuUs9Qro5u40ekCPLYvG2qwIzudzxwUC9m157eAwN6ClGr%2BIA1c78c9ciSNVZMKru2ckGOqUB81tqydxy6jibBwD6vn6KJWBjcbTDixksLbLmlDfhkb7kUAMY1R43Xz40XQ304P%2B5V2jBW2zo9lLoq7qPqEDbfNWVBwzhK51M%2BgT8B3qk%2BVsKR9eTxo%2BpyQj3tem1S7G93Fv3rTh9nICVeHF601C9hJjLoOFyMlMOcBQVoMlOoXqrfeON22Bbk7CzYj%2BCzGHLCojyBUE6n%2FZYazWXFTlOVyWZ3fcH&X-Amz-Signature=ce19be078c57e5bffcdf07a97136ff05fdd475cc10758c11da39631ab2c63508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

