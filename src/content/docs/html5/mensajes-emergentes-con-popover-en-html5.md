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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHOZNRR3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxHtdM%2BcwIdNuD3r0vrCJgAZfboNO1iM%2FR%2FJ3kCgQsxAiEA5kl%2Bp0kqnfIKBJL76Ajm1sYBBjWZZNRaxnFKjrldossq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDGyK9REQuyiAFEWMircAzke%2B1IpZWnZdMvdZi1nYvB4Dooh80J0SFGoddCYFBzp0xjjK0aU5qLmM31fh3wto5H%2BGFBQpHSNoNwpNKATw%2BWlqxhHnkJg01%2F6CSzKFdGxBMspz%2FD6Yfvs8g3KgntmgGBaMFQ9%2FkFiFf%2FAKs3qYgevBVxtTxlBf2VkhfDFjMh3%2FErnICVkOSVVOV3zB79SuuY0gfUDLGvAZVQT4MXBIKN5QpISDr56q%2FBthU8oh8zzp%2BcJAjXv8urF4XXdMcpz0W1K8nc%2BJI05AxyAxSph7Bbf%2F2lQaSmlXQtyDI92hCwDM2MV4zRV5StLTAdq7PVncSs9HQR83fUv6WZ7DDHLSCiM4TMAd9ij9QXoZrG30oxoHiwV83ATdg2eMuz0Zh4hFXdGv4Fm%2BEJ07DZ%2FvdDwBGBCYHNAog21O9EVp6rT%2BYnPYEyNdBXR%2B6Z5ZpZqtCjyumAsIF32lH6G%2BYm49IZUKdKN4hMTuCYrx%2FqXsFWNe5Xv%2B%2BI3EfAetiwVFGizKSh8FGmt%2BFr%2FqFCyougCs5xJe%2BLInUZZqEhBL7b3BBvMLAvB9paIuJ%2FWGAWasSQvh6q6U1795QyUmBDAaSWEgzIIVr9voTL2y62jx1j9fzxrxZLhWAchxGs%2Fvq%2FHWR5sMLSMyMkGOqUBuzP%2F%2BKKW1lqunOU7gtGdo60Rjvc7Soqea1hhfe89SqsVrGFeCYdTZaDVyybm92lOA67VNVEjcCXmTwoh9weO4WlFSQgAm%2B%2BFNQR6ULpLQVQoB3BViQHlFoYqZzS6VQtNbxFfPlRhj%2BQbCB2WmZ3kfJhLwZ6LJScHi5HDNyqMfq872BQjj3DfdRlRJ0YeqsWzf3oyJ8Ky4zoHi9hu%2B%2Bmg1vxn0e3G&X-Amz-Signature=a23262f1cdcd37f11c613ebc8c8f376b19e206484814f66f32e3c5cb19cce3fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG3JLHZD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKP4iSX352YicLL0RnwLWH1RFAQOe%2FAuwyP4Wiii9zVQIgUpqd%2FqbR0ysJNAR7vwMu%2BKhp8kZTxitME88zfG5WwDMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCBls8xv8ZlU1zmypCrcA8GOeZTfymDxAtIYbrSTA4sziYNOEK3hIaSoh%2BUcSqepFYDcgojrQmP6n%2BhjiiAGNBVbMYPMzE6dYccrC9hfpVLfl152VPjRdUMCpS%2FXVWrc%2FfUsGqSG3DHUjc1j6AJc6%2FTz69SV6ooQsbds4IqHQivPH9ag5wrrSyBIZZkZSX2siLuUbMmS%2FVeA899jHuMeV2o37SvfC73c52Eywg1bqLs9saa9mSjnvOOCcpv%2FXZum3aeY2I7pEpN5XFfrDXB3CUWGwbraIlDzOZN5XlqDf1kQWXYR2FcB%2BEdT2%2BCT3pNfF%2Fal8R7RojhuZe%2BNdcWQwTa63J58oGQTVgH1%2F6XWBUhJPHyXKHGMA2D9HbRywV%2FZA6xpMY%2BC%2FENHg5wfk2SjcyFZhDW721oX7W3oTPz%2FoJJ2JS6y9n9qyj9a285vPflbZNkjGgZSPEC2yKCgy99eC8orTywk%2BMpXK%2BLRkBulVq%2B0S3DFfXPbUcG0FXiPctYgyRX39EYqylOS%2Bqd9bL%2Bx3UVFW8JvzeXxSL54%2BRYG08BtHSfT3PNvrXko%2FyjPSwOy5VlygPZhHIyw79Y%2Bgf5Aue4hZdJKx5Tymr%2FPm9TT9OtZJv3BCBSu353KJ5KT0jxwBztk3vkRDN%2FflBPrMMyMyMkGOqUBLoxh7lkvOEaghMApv1vXUnpi66jvdRk5KoX7u6Rd8BxKTIRCI0Ihi3OZdO0GUgEYsmIis1WmouZKrr9uELK%2Fdy%2ByBCQL%2BiSHULHxzieU4PCloCEpeKYzf7wLOSYGvd1LOlNOUPTZjfhIOvZfV279XRLi2ikIF6uHOcDnDelVM3Q4Fx01k52A%2BwsDEE4ODgARW%2B77W%2FHvV0h2NguwxFoTWKkXfW4t&X-Amz-Signature=e22669c869a535dcc3201a9fb08e40f85330f717e2e6792a8e2a0c723460afea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

