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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKG4ELSX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICValYFfpSwYhFt%2F%2BVjDvOLWExx%2BahRgBBOZlqV3JTddAiEA%2BBNTcT6864ZK7A%2B%2B9B3vep4qjAEMXIND04TjNGBnjiMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIBB6mMTesyzVbaydSrcA9c%2F52bY6hzh3NmlCtVMnWkHPEr0bSlfrDyvPbGQXgiev38B4tVVFDAlikwodPm3%2Bnhli%2FyB5qacBCfHJZAAi%2BgyckOJR2LFhLZPsi%2FJN2AJVxd0j0ZX1KD2ZgkWR6%2BJbq4efvRrvFm85J9EOPbY%2FFO%2BNQg4veHPGBgzzha1F6L02ZSOzxV%2B0tf0ugEXODlyaSF5xhv6wR5gHxB4TspGTokSGaIkj0yfx1IsflW%2FBky%2Ftv%2BaNGZug2FQ2%2BuGKGr0KZVce47xT0n8BzuGYyHa34fGvJthZwfuY5KLj6bSh5xl%2FXgOzd9GSfi3f5qapJwx%2FXabXaT2EQ1zPFOT24z2F63pl8ridJBSDztBBvwEWKJZxMg3HnVTIAMp0c59vIEPAVepaBAIZMbDD0nIff1sBpsZqmRE9bleNf%2BUn3wRcyq6fyJPvgzWdbrpmbXUasU%2F74Xi9kDKlleiVoUoTNgIlH2qmV%2BUaqK1HG7DVtfXOK6c6s%2BEOczJBB6UpkpQ%2BVJDtgc0A9FklPFu5XIclKnRf6hLfCmYMFVqdqeZrzvDkqeh8fG4FMLuKVcUFzT6%2Feyqw1PTLg4bKTmDjK0tATKnTLh1gR0F4pseaUjC6TTltxESOjRI87Vo%2FcbFKgGeMI6K0MkGOqUBabZAg6qsmA86v5nUpUWDCh5MFF0hiF%2BoSRHcpi6uTfeTqswwoMr3dUWcdwBUoJXae%2BtKOy7YJV6q%2BNOfXe4fgVw3dsWO5Kjqzh5Lbf9UWh1Mo2KzW%2B5oQzQpcUGd4VGyhLf%2BKrLaCpq0KAiHSilBLdlsJgv6KcEyrSGeTdOCuKHGO2h8bpRjmjcA7pp6VGFeetRSpMrcq9SgqM2yZNhdSJjvZzj7&X-Amz-Signature=f0913211da45c4a8f5b1cd83a58d78a00ab17c317d5c7f60502d767e8d6f1f09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJIXM3JN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoqeehThZhj6CDPvgBA9DHdS67REeWf5mf8K2NPx%2FA%2BQIgVEHe4g%2BSZIR4hHCBPWO%2B9FY8OxYWoPzfr3SWBjxXWK0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDP7O8BFEfhR8hWEYKircA7JrNok4l1eCHfi6hx6lT3XGXtb55Xk0qhV%2BmyCxmbEIZ39WSNT3JRS2yAbmbIW0HXeY%2BR80NnCMuOgAvBuYAnrMyc47wfVU1czFQG3AYmnQkyg8KfFBPOSScIQ%2FAJgmmaSxe2yDuaTADxg2fsXL%2F0LbyXEmHFlL9n1qBDKvv1O7eKbGhL8Tf%2Fn1qYsJKpYawcoNulrXiNyMhIiTzeiFbJVh4uHrYmwd61szl9AOI%2F2xCyCoVBXll3499jVJAHmVGah1iFIfeP6TNcwwMIDeXbx0fL0QDqgsKpebKf6WVb1wqIwELQ9b2zxsbl034pSDIIBRkevWYXLLW99HIEzauxRM1WTW5c%2FL0UZx%2FTkbJYq6VC0UtSdoP7lXYMu9xiMcCJndnd78Jx1dF65IEwnDmz4erLAmh2TSQe%2BA2g5%2BHoe0NZJHDJ%2BhcUL0yX5XCnb90EmzKIh9UvbkPLX3V3YxQANje%2BnqKcUzTt2qRsq9vXFHgQqlhVRP2kp2lJzfLSOJJDFR6GfOUwTayOnnBNE7ggZW%2BrtGElIQzAVrBRRyGh9f75exe5lKh6PUd4LBCqQmZuZ9HuRFpiOzK56BzvOgE8WmCdx6bPWKF%2Ffg%2FKdCEXPIeL7HXQ6UazWBr1FDMIWK0MkGOqUBvwIyMe2oovoF9m45sqfisdVEfxSNA4vXNWWcqv81fNDUwWnCJM%2FJEcHdYc4jePOn9mR2TSsciVRxjWrzOcy19BfUdxLUpfNR3odm4CU3bGc3GWClZ24nnIJqJyeux6Js0sQt%2FmLfDgErtHiF0Ei2VXV6%2Bjw0CtuTOaglvg3iCNQG3esg%2Bpv5ukyoHXpOs4qKi%2BKGiu72M8Fw2p9wvD06c2747vN0&X-Amz-Signature=0511c9193f9bdcdeb47e3b76cbeff8573950e248f00bfb9c4a35734644f3ac6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

