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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKYGYSXH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAa4Xti5vb2DM5RcVDGZSB7FvYAkh26BZacVEvqxeYM0AiEAhTJh%2BA6sknMCLwlcRXOqnfchZGUZU%2FsfBu1eUN27d1sqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGk9HhXapXFGgjIg2CrcA9WegFHXV3XCBTz%2FYFiXNbAuPgHRdlLaJbbrhbV0YAWR2vgEE7f8JI9t8TyTXecvaMyRmNi2mDuf2QlkvFYDong0QCSVEDQNLH2%2B09s9lZcDH3uiR8C%2BdwFB7c943jfkzr3SlCEjI7rKeRsX8hxdU0ZqwOeBxfUyWvdwJzLij8OjpSVDsUen5Tjb0IwN603Z4B6jxKy7Lzq1MX2j78HInyojxK4AOCmm9P6gJ7z4ChtnDPJtfQF3fh3logxHrWPgVa%2FeXvqtTkUuAm7VktE92hEHfxOpDM4CTYJM3AAHCuRUCXwAi8XIKp1yDcAjJFjr5QD6rnHvR4eBhDRd3YOB9B80PtdhVCYrVzadGpXjfkYnmLkmelbffgy2ujq32KHgYAof%2FtRUDYP6qqMCNUWce92xKJ9jnL%2FrY4VRvBuxiYFQURRtWmKqymc0iUWPpEFaNLg2lnW4v7OVZBgTN5hOTH%2BGpgK%2BlJm%2B2LoWElUCtC25LpwI54l6wUP2V7fKDMhsOfnp2rn%2FIxOvNBKiV%2FvHaZOllXZBw79ojoTgfuuSKPS6aON7jZNhm2bk2C%2FivlUeh22m%2F5qTO5FiOHjscK5jMoNO%2BXpJ5GgjW2vixZp662t2%2FzZqYHgPo9iyZ7ggMKnC3ckGOqUBLyrJqx0R9PUo3DhqKyIOGP90ab8Me6hgHeqmjO5RAPkuspXGlXSU9uksNVHDETdL21CD2tisF9LbayUKiUcbVd0u2owkjgzNlrdnkIAvYJKENBHornRh%2BZYLpdlowA8AyDJWCs1FP1y8wuaVy5sX%2Fo%2FG04J%2FgVeR7aY4Lb7RsKW35t9uqkcD%2FkqrErBdVCB807PwsFvs7Bqm5XglJKBM3bPgNRyc&X-Amz-Signature=e418b0a5fb8c6a35f3959dc7ccbeadb4803436a14ed79110476b9c3bb6cfb31b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJV6OCGD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZzimZYSjxspZK3jXtP%2FJiDEp09MISXZjb%2BuI8mEwONAiEAloncOo6kFtxzjBxJGT8T%2FpB9wwlD432yJZbm4KjrNTQqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7%2FHGRy%2FsAHyaUzkyrcAwu5OGcRn3L34CvzDP2DIKvFbcFp%2BB%2F24oG%2Bw63x8kdALZAMUfmeB3jM39D8zvUlaRnqsiDrQc%2FfEk9h9k0HHy7%2Fyh99nSl9yaNCX47LTz1iJm5B4mmO8fDAp7alfR%2Fh84ErZITw6XcVckJ0o9PtpKQsJ5pHG377DjixBFW9rCUXazNzc3hFrC5kG0Xr3kaKqcni0Sz7sGjZulEqToz1NODA5uRfVuwBiGdmqB47AKMw12T3Do2vBWoadSlrvOKYyMEqha%2BeD6BnFAtwsQJq3lTLCY1i1gVMSEh1Pp7pCJpub20r5hpveNBspEkgfMN7VjSyYaiFPun0uiPBKAxnCLRGeKEC0LoMJEcgJeJUOLOK7qwWnIWoHy%2Bv2pqdE80lCgdLL9tKtlnG%2F8gAxey%2BiqGDq6uQ0jgbJl3uKpcccYvO9uSwQ6%2BzVQw6jpI0Q8aAwG2Pz9I7LSsqdgPej3C5DLxIOA8IW%2Bus0PZsOWGHvcO9TzNTBA%2FbSFVYMeXfcG4ZfqATdZHKxcpYY0iv36zKSRKEL5rVtWKVjDfH5ILxLZ5mQdL4gpFSXURaflU8LeklB7QcsT3eM%2BHCdCOmDta41xS5%2FsPCXPKT5SLBmzC9zMIgAsdjIpEYvDY5xF47MLLC3ckGOqUBPQ%2FZVsjXeariU%2Boj7%2FDy6yWEAeVXoWwgUMWK2ZC2BAL5EYPaftB7oyX%2FOrGapOOHT1O3CRw1iDyFoJ9uWejtLDG0P6qm%2FPeYy6uAGHQvJg6T2yONb%2BxL0NE74eeWL%2BmfJMTFvOMzoGC%2Fy33qJEw77ZQLUFFZoYsf28OeGuk2Pl3ihJFd08%2F028D0ebJvNKARomgOboxuZ4Neo7TF%2BG%2FKjgI7ZjFk&X-Amz-Signature=74a2a2ce2df8bcb333ad3fcbfda340c4283a1a91a28ed827a05a8a7ea94ec202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

