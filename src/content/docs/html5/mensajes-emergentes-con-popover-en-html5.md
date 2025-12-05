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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB6XZTT5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbX5BTurOMJx5b5xyoF16yeOpcPxjcD33V%2Ftr5CCJGMAiEA0FqbS2Ur8Unvo3LxenelK15%2B4PUVbKNHZdFeiDWYGqMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEqVNBHCAEDSG%2BFZ%2BCrcAy86DHDu2%2BckDPShhfnJVhakvw7jHwDK1euiN1eFYRY%2Fnny%2FVZ1RmXjadUu0Opl7BArfMOfSNXVLVcWH3QtZB1q0%2B%2F2T%2FV%2Fi0F%2BejG%2Fy5mOq%2BdOjm2%2B76XEEg%2FKYnn%2Bu1bwAYLorg%2BJ%2Bw7prxUOd%2BmKw9x%2FsAqQNzaSDnBh%2F26KjSPdMYl7lEzHPXPt4ZOZ6IJDIFF5Q%2BN%2BRaMyIRD4lRHmeYZhdALsdqYyWSQEd3Phd70LtI8MecmuwATjxJTkcd6s0JOX%2BMLw6ywb6MLlBhfeh%2B2%2FTQJGym5n0QYlqw6mNiehFvPRkXU0oV68hLeaYxD30HHszSctrdmIf%2FoK77RG1VGSyaiK4xoT6lH0%2FPxRXtBUx1wooQgg9dkng4g9uyK%2FUWJfEECq1KwcdAprCDNsjVVT7y1GSF%2FMJr%2BBW3CCQtwiaxt0UIRR7zViFaGQE2fMFOjZJKbs09OtJPbN%2BSR%2FJgmKWaU31JeywzwAgmIbyM5VrOHBXSQdLZ8us0%2FQjeG4nMPoGFLJvKayS4Yif%2BgdBHM6FK7EcfVEmTbkRs6d5wy98ux3vlgsZTXgL5Lmqpv5SOczW9%2FWe5l2PTiKMZBKE1hT%2BjkcoseX2KL8qCeJ77ghBGVbQb5bmjyHjMNOwyckGOqUBf%2FVREQMQw3TlncMZK4PWZIFsETdh8L152JJNukfR5zUOKkxpLOMu%2FD7ziow1cLKBR9B6M4%2Fq%2FpgMxq7ZKCUcatAU6CyOLwH7J9UFvZg%2Bhi%2B0mPrR5RLrGfEptbufm5fYfsJNvHaddaYUukLQCjxLsHzewaF3RaY8hyj6n82AgTysCy%2BNqBmcaCceH%2BPbslu520ki0OXSQw9Y7EBRNFFYegUIrjMr&X-Amz-Signature=c41e1beb2f5588b920b56166c7e556bb25c58e8a9aca4b2645f2e73012eac5c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNYEKLNU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhqL9x5rtLzi5hIDsYnBZYpk8IK7pVeE5VZo5Kr56l9AiBE3VcdmSA%2B7OH6KaxlrmJYw3bsZD%2FIBaFqWgDze%2ByvlCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMyTc9KnH6AKpFbxwbKtwDZzOCV0ozg3W%2ByiADbcVsZGWIUPXJijnXlM%2BOyI%2BQ%2Bp9EIiLKkJkEDBIbyyfMiX1JQX3FjIABrNajqJXMItEkk7N5ZDBjPpWjlNOng4kuwik%2FaNLgxwbtXxR7Sdh6Bmopm0RgFl7Hs1Fvd%2BIb%2BUkkGHqbYG7faPkDMr3%2FoXOvUIkan4qLURrSYtTuHgLhIG2r4l2RKd4R5IwMjo8D7v8fQrl%2BBwBUFMM9g1KLudm73%2FGh94xix2OoQJ0fMl7y%2BrXEJ9XcPrQp53poMHIP3FygTNznNzX9Y9gooU5ems7naWn4Ryj0UKVLxVNhrjLwqvetuAjxL8Cqsgo9NEcw6PZmTe%2BwvDS%2FsuUEFTThWcoG7Dzg1JOhEC0ra%2Bpw3HzMUz2iNklwH4byIyZaO40UvNSV7SnhgyMZhH0twF2zsdWAy%2FHtPEmBpbYmheEhcQDLXhhq1T3BKqG3VxD4EnLCmpEvd9wm8XziAEKVBghICqHrhzrQzB88Yj1UB74Ms9mwZny1sH08TdmtfldKyVdpcE5%2FvhOetooROAsHfbRrfrdMCOGmcer%2BWc0OQtaw%2FA76zUU79vCnVC9edPFYD7dXBloChNWWXEHkRu4nrx7L9TPZnlTB%2BGUQ%2FrIu5ZJ4zQEw7LDJyQY6pgHm69iFl8o04Dv%2B1g8JYq%2Fsk7kiTXpjxsrmfn3Ej4v3MBssqXjV%2B5YJEYATxhIOBXwO884SpJsWnIKIXWKzVKBvwoMg0Nt5tFve4SJ6MoFzimTQ6%2FFKNERE7EDwkkoqYOP4x9i1ERmt%2BwRSga5CIsY57Xn%2F4XSGZm6L0f%2FhIoqo9GeGj2V0p%2F7gLg9x0uKHJL0frvx4SPPwaqWFMG7%2F0U4RpyEeTXfg&X-Amz-Signature=1432425241bd9c80319825bfad2f06d46f9da14818486c76ec72afb14a063e91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

