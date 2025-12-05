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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3RKA4LZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1og9zieaWLHV8AJ9TqzqDxK4MB7GJTtAEWJ6oNbmgOAiBU4KirI26%2FBpcuIh8wOTVlfk%2FNJJ0UEtHqPYiicAyMwCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMRUxlwntUFs5cuoh8KtwDEP13UI%2FzfSXUvJcV3wG5RNjsAr8z0Qora%2BHOAB7FmqiBpXCLBzSlhVGl2eNmwrtDl65cHk9hE0f1UB7j1i06PAWs7R9eBMiEWN8ye9qa1OIt%2FtcZIkO9VY3viAaTau4QGAjWbZeuxe%2FVtU4L%2FkXqnFNl75rUHEInbAKD8DSnnLXbq5iA9ysL16Wqo5pCjQttWBHPuhMvviBwOGzx9DUSrSdQumXV26Hv0Ey3DgNt421EwiAhBfgskxnK0ygTww4ZpAcbMyz9w8kTuOvbE48XCVjL%2BDWnJ6BymiP09Z9jH1audDEebkKiFI7Le7x93ou3B5RUYUImtO%2BHMeIQ6PRot5wY23c%2Be7V%2FipGZigHwMvQR25jFrhwU2YoAWU0ZPLnXLiG5KsdqByw1bNIDsK2OQRw9pgKNEv3DdoRBCKf%2BpwwqNwKcQwol%2FEECcG%2FkqL%2FhfqlTBwOnhHoe4bYyGP355JY34YXUSOoT%2BvptawSXfcGcUb860niQrSuja5gwn8XfFAn65KxFppHG1FqrkLDOsXI4pDx9PsIdc4OAx2jv6g6zniBVrp76nfpvK%2B8zqfZLi4SSkEXYJqLa%2BpbAkjMt%2FephjMJ7pilBL7qGEOXgYhTyxv%2FjwpeptaEBwN8w8pPNyQY6pgGlL5DP1n2MhlIOMZkZIAyXmdmHcNV926%2Bi2dc%2FDfBXZ7x1CM88dZB2qbRXqT0pT04pyZHuH3aIWwrrNteqjLhqKV4kQ7xi3hZOFp3MeX2pg%2B%2Fna6Y7n8FPMdZ%2FjD2e9ptIFb5ckdkg59WmINfuhFvmamscFSQ2nL5yNn05impAg%2Bw6ITAsBfPwTj8IBRdB1tO3f9p2tA6kL2gnjNijhZbyoO6mOt%2Bv&X-Amz-Signature=7ba66941496288e2fb46b8f00d5b0c9a36a1f2d9f5a0c6f940694786076b8141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHD3N3B%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDskoYOn1jtu565zeGLvvBSM3H9sBcXxVZIV95khtT89AiBbsQOciN8VuU30bPGzMJL2DrgkkoaFUR8mkzwQxkUl%2FSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMRLTLYKXL7PaWglkOKtwDisX%2FJrwSTnoCGvj%2BlogGgHafDWqqi%2FupLNZI%2FzZa%2Bs1jjvfwgfH%2F81yetd8CXSvRbcUnGjPawmQapViJrmwxZfddqeNH3obcdthF7aol3000jajJMebdZ%2BwtEhGNdnt5aKdTU8KPVIFooguf7kjyhVhjTAsmS6wFFjkTrdzNWyU967uJ9V6sQxGJG4LIHkNxbmTawAp9U90baDNpODFCmldRRMCzR%2FocrDvgGtnhATj8yWbF%2FWlhFe1%2Fi6CFq0Xmn9P30jUF4WzOSufoLbFokpc%2FUQtRwM%2BXtzbXfsFBFy1x9zUrqWNn5kPFINf9MrSoxWzBDtVgSEnpK29Ud5xQhRZkVqJ0pvcFTx1Hcg9zLtzGTPTTuD%2Fzty3ROogaKL3yZcjtcjIzdrpf0Rgz3oU4GXDTuJ9IzxUlw6RdTqO5zDX4P7saG1hqhcHu8HjpzAg1UdTyV0h%2FnlQZYqq8Qu5QoJKvLF5TJPqsmlyGUbz0mnwQy7XN%2Byi%2F5%2F7080%2BFYHqqFGdgWxW7lGgyO68A9q59eGauISMVzi46iUe3z1wqoJsdVcNWhtNcUtxw%2Bmq9dlJBHKhfIUTPFJxExbMPA29KBO2Mz7Ac98GNBPZIUbw7a14zbEf4oobsKe9v7fEww4rNyQY6pgEIXw5%2BLw0l1m3Z6e4tCMz55J3U3Eh4YWo0ddD4onbIv8zJ63IyNEZALwUDI2R%2FCiV2Qal5xEJeEJgU99QpVA4dDE4nResO0fqRaC79wIb1kcZ2l0wAUIM2p4qGUzPrwYR5hzj1KDmA1n5aD9MS4Sz8Nfp1xVuWy%2FItVtXiN1ndGbrk9jUUc%2Fsido4hcrEiyGtmgZD0vQDxio9xlx%2BANME9je%2F4JknD&X-Amz-Signature=a3bd34b00d6d796140e84b7228e8de1fd75a8b067715f4df55345a58a6c1b56c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

