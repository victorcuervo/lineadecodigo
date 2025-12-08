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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLD2E3HE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC10PSwctnydprKbtubAD983IFpZS0LPC4pKIhLb3StHAiEA%2BmwwAlSGWvXv%2FELiv1%2F91%2BS9gpm7raC73MTZBmQx67oqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdXJoFsQ5TnIW%2FpBircAx7bTSz4jfs%2BHnwlHFBFsneQsUg79F74l9nphWeuf5J%2BQAF2vL7DrG44KtLWSCcBiNkXMPl8t8H2uX9tE0fpVrzRB7GrijysqUdoch8%2BgUWLTDUgyaMUGzXsZawqX6hZVX5jBO9C8o8r8V7O%2BrykX6cIb%2Flflb7fJu%2FAMgiyje0XfmRDkuVPGPP%2FMlbLkd0%2BuKHidwLZTNU2dofr6GoxYdmD9ROOo2tcUCl6DTlChto5qI5OGIT%2FGz1sNn8Wt0KITDqzuPrYb6y3zbJt1Z4izICp67ONw%2Bml13WCTmql4t9bAtfpx8sS5lTmWd6M72pE5RZ60lvg8hRebFAFALthcOaFtISgK0X0VQq%2BwWI5qZQq2vY99m%2BkXdVk5zI7HF61pUGiOTxHbfPIUAscpBxXfEV54P%2F57y1x8KyzwzrclYuhKKH5AkDlipcf7BSWvbWTvAoSpwCyuDQj4IlFGG%2Fa%2BbOjJ9TM11%2FeAPFMmJdNG95GPTQOlvmhsf3bvqyrNLgeO2tzSmO7456YIm6z%2BW0B5F9cm0qgszJmMkoWGkKTHY%2FxLKi%2BQtpv2KgJ%2F0D8l0%2BQCz1fBSLKJ0HkIhQFLk%2F0jSfwQ9PkyobfkyHqfmYddc8PedeN9GZejAHp3tz7MOnt2ckGOqUBx9wMrC5Nc6O9%2BmV%2FmzU%2FRLcqd3t3cwOLku%2Bqa%2BmAHdz1MXVtYFNhCSbBsl6hudM7hQbu2GMNSBqPEmWmN6hGnwtwFPKI7hfD66lhQ18Xxm08BhslI1j9Tqp0La7Z8z2in1KlBN7c52H6xE4Wrc1gi0Z8psNuTen4uGq9LNtsnhzRUTkOD5HrxSeUWQMdyIIcrcnxnufpGzBJZulyx81UabcEkn6y&X-Amz-Signature=0c1fc5fc1aebb4fc57b74ea87290f5e098beaf3ec10550e372da743bfa6f18f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG7WT35X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmwKcQhw1n4llLnMqCwF%2Bin%2F4UwKYX%2Bu0UGFVVR0FMtAiEA7YHR8nEymqSVVZkgqYWXSTNgqr0bvK8tfpqExHt%2BoNwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhR2SNooHTu%2FApXEyrcA4EnCRW%2Fs3UMyNUY%2Fn0xHPkMyxk9gC%2Fjr5cy92MMutfTqM5bQ61ZzWqSCBFGK%2BE8NsB9BIPlVNV4TTmnmAYe4a8mIpel7O4oy4E4VekXbsB3cZESc0LePhkkhW4Tp66CoB8dNMDy06AOGijhuVOd6sw7%2BSshkFku2NljEFrrpiddgO9HD46Q8dh%2BC6rwr3oAA5FKxSBWyi9M5i6tH3uF6Hl5wMiSZR4DrVTrR26A7YbpLQgx9Mi%2B99wYqe3FQQVS03S9cVOXjZMDXRRQUiOsiCuCdBLB5O91B0xP1ZY6rSCjOCM7gVNyOBe9NYTGBtxgz2XtN14Gkfo4QbHP2lmU2eCBqf7JCs1Iyg7udgFFOw9nMNqbb8evUBBwvyl4L6%2FrdezqaYeHYVB%2FU20w02TfwCouHRvky9BDQ2oHo60nM%2BOGTb8OC03%2FhiBAhFjsMB8dAexIqVEhQRBohRjewBW4TQIUYtyKZiNtg9HN9OBHoFK6nrob7n77tvsZkp%2FS1cTEGDugtu614Aahqe8OG2m81UhTJTLGMUngaURfWTFriDRq8ZUrQslbkPN4GRqttGhs2AepFSfhhBVTIjUE9m8KrOCUHFbH3M%2BhwB75ZlbXuKW20S%2F2ipcVn%2F5kS3aJMLDu2ckGOqUBHwnTqmJR9kJ6HQFONLiUAJSipUh%2F2EjgTMzfLF3yPB2K9TNN2I9FFoGEH06jgmRQIYIG0P%2FfRlpJ6AU7OaAyMCpYLgPIbWno4gM%2FYmYWrcv%2BpKkRIX9wg%2BF6R6ibrmQH49R3%2FQJznVoFFdN7jkjg5Bc2fsqXmvml2d5I%2F0dAWSibVcUuRIsISmprpCwplKOX3BMRFFB1XjJgf7a43gxoQVb11%2FcA&X-Amz-Signature=ffed0bddd66509151fe9d60b85bb9ebb16388ed618467828c8ebca766a09b025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

