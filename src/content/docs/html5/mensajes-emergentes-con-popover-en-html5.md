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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GE66EB5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8WlKhDqPaT7Usb3YZYSITj7swXpslgr4vEoVNU9%2FYaAiBMm5ndv06UliSl7f86MTyjfOCFNU2BAMuXU%2FmX76y8liqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcTROIAiq5678%2FKk5KtwDc4CHOwUpWuTdRbEyCH5u5HPHr33uXZ%2FlJx80DccNHhVbtqVzz1cZxTNxsfbYcHiS4VbPXnsRzAcdLUp731UTx9yyjoQi7se7PkXyx6Tx2TZGZoz01%2FRAFu8zYcmku%2Fhp5K1JinhaZ4OUU2Oo7Fqef6zO2RI78iUeH4I%2BPs%2F%2BbqHbrnGgH6qUyXgTrVb7W0YJhA3%2FPqXFgMcqWKhHOq19B5%2B%2Fh9BDbFUvwCmfG033ledGi87isneBvSwkO%2BXozmUz45mVkPkhJmIkE2ajYE5hOy4NZ8ozKgk%2FCKRPaHQNTtrSeC4o2vX6%2FCAoGwJcBf%2FRqJhBA98cWZ9Tk8yMJbceuPURJaiTAr9nIVU4%2BcG1bPYZ0Ppgj%2BJWf3P4UgGuSVi%2Btbro2u6cfxhv3Wj63gQpcCxJqxf7WpAg2m7RMJ7C%2ByzWlib%2FOAng6uO1MKM7spjI5rZdzaDVAKjBM2XAVlFCXmehx9ZpLo4OIGtMz8QiP6C53RSMPmjYe4MY1w6o3sWtCwUP7Q6x26lhsVhC%2FQQldcvfe0%2FpE9PPhpK6%2FVU6L%2FxDoa7jU%2Br4vILBkk5mv3GXcCI9PiUXiuwYh%2F%2Bctlutqbp%2BREJAow48l3YdiQA%2FcUtLizh%2FR2r6Ujj1syYww%2F3SyQY6pgHLh5yNvRhGZCfAdRAu8UJIgwXStTtgw482p0YU4qDluQ7eVaC3Mnv8LVTm2Jhs%2F8cGUuyU%2FH%2FBLVsJwhlTNmWvQX7Djvtv%2BFAUTjiz9JEkiGerEuk073MEOsaxk9SFPE1K6jv55nVbsQn3JxLA44kNF6KhHpY9y0nEaP8OAhCpGJQBKWGKvyNms3MapWCe3bTRT6QIqHZzGv5QOdtqKArPIrtLbr4w&X-Amz-Signature=1ba295d2d70efd5a3dcd94818e39003d3f8cd22145b5634f524f24e4f0379d9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STSHSTCA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDp%2BDEDA%2FCC374feOlIXKEDKK%2Fw8TFNawRQ91%2BWOcgI0AiEAitA1eOBzaWJbLpBH0lwMivAUkQEzXhRG5kf2W9QHhZQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANe6ppl4XpQjgOqdircA%2BpqPgVaMGUyfEGwQgiXPOB4SBcQuAyxSXMYA0gFfwtyhl%2FPNO6H%2FkhyeZnZApfTjuKznT0mdKB33Z8SQGPt3NX26Eu%2FDgwD9R2hD%2FQ0DT39vfyDtwk1J6QIKod9lCMuIQTLF5hKQCy4kiVrC%2BTEPXU%2FZIESl5G8%2FCMpo8RyGlw%2Bc3XwsAqShO7N7OZk2K8F0op9GwJIBgYGLVjkyvowfMn%2F%2BxA3ZJwll%2B%2FwjXRZg5ty%2Fl%2FX%2BQIdRcXsywkI5SfdaXlmpLkCC7Qxte1h7%2FWztiUWZTjwZLYvgdDxAKkuwEmafQSiLEDDA5Hjrsy7tXwoCnHJq6zJd32T6pnloou3u9jrs41lkhgJh3RhrphEEhrqMjqe80J2wJ0KdoGKhkp8H2i%2Fppa2bMKrZphpE2Rk2vnSa%2Fgv0nhO1K1j1Zj1q%2B7aMIFWp852sN4OyqGLxXbZDIcLv2QHEK24gPVugdJ0fQt4902nkHn56TH%2B3BRppakscYgbOcsIBUhbfdCVAfxLUSQMwGMUj%2BoNt9nAmjcvX%2FSHTwl75dPoz%2F5YLyh%2BJwpoxf5OPW3X7NBXn3x7XrY1dfzU54aTqsS3K%2FEaVzvRjUcuvQ5WQaj1AESPTT4RAOEfDOPHnZ2iDgi8zGbeMPT90skGOqUBNNbsLS0B6fV5tcMQ8WQQgjC4borNmDLu%2BvMToW0n46%2F0KLskzlNR73cCbK%2Ba7%2BaJFeJ8%2Ft0DmpZcI9izkvCaYC7siPalwxLNb7KTRNIAAlhdiQTzuhynmI5ASmBOVOOn7U9cvYYQiBXYvmt3%2FPVbavLZ%2Fa7Ry%2FDidKNhU0kh7ZLJ5fn%2FtLIvIVf2GL1sODkQZ9XXqZxGlO7eLf4kuRv8IBwH%2FucK&X-Amz-Signature=94abebd648c797fa3aa56b84335717b5497b42696a77565e09ddf79473d9b1d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

