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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYSLH3QO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDI9h05%2FbmfaH5rIVpcW5LvXGSq5tv0nJ%2B%2BrW3zmcVPHQIhALLHjlT8BojnYZl%2F6L8lbHFo%2BP75aSRJSRb54mnInVESKv8DCEEQABoMNjM3NDIzMTgzODA1IgzkjqXEccJGUEQJL0gq3ANKnG%2BBzktM7La87Lk94HzDZZA00JVYscmC19euqzKE9w6nuHgQPhakQk7mM1vn1%2FPxq%2FedW35Y%2BoaPH5RrFsK6Bsw1Lq1C0CGux7yWLGXKguCmDK4dd8HWONCv8rGkZgpjJP2fMu7VvLPV0c1k9Yu3fZyU8U1gA8H0RgM9GSEbRpSJ6csBZ6Crjst8HmFIk2qsULasI1zKRMk2fPV%2FsE2PXYhlRgM%2F7VfOTQIvqdgt7BFQbtcTeuPGZN%2B8V7FZoBsxbFAYpOaFsjw4Ckz5eQTR3cJZ8RiXhUbLSJ%2Bdl5Hq2d5Ya2IszlR0AXs8YNqYrbMpitf73%2BKRtVyc6pSUh4Yy3yhLVqvqxMvT2toj97AyRBwbt9nrCJm0qe4dBZW1oZ53XlU%2BQV1uaYJ3p4c32MQW8q8mKi094s%2FmeVKaAra%2BzmFv%2B%2BjB5w7oyMM3xixR5xQiRco%2Fs6TSp3j2U1EBnIi9Yh9j0ZymVkN4CseaZ1RTlNUftoU7YMt9KWocXgNlCGR1w%2F15%2Bo2I81hexqinIVskeDaPthgegrzmxyOT3GyCt4XuoYrdqjM726gnz%2BNaUX%2BdOnwr99AkcZbI6yoXcjrqzAK4gWmiBI7S8cqn6kooyNFG4GNc0RdnhWmrijC6hcXJBjqkAZDgtQYVXPBkdNitEbUL%2BXb2oWxF7il3rLB19pm9bSBANYppJlkLbRLo57GdP7kowJ7Jz5VeFGwWPBx5Txzwl%2F0CsLE73aj%2Fx0CylFhvbVcc70OYav4QbFVwcE%2BvcyxXBo33a34xurABKKSEqFalJZPOdNMFPsrklsaOs8tO3y1%2BeihXaPiOulrF6Ee0GHtIKBlQ60FiZvVQAsHG6m878tYWWiMU&X-Amz-Signature=e71a2c17c36a0bacc7efecb059a325c441380d12df370ee2eb2f47c465d63dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GOR34V5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCdzw3CoUpqWDwdwcl76OesuDM%2BXPl9nAD3EiXAZPqp4AIgQ6c1EDgiutNthZ3EDarh%2Bi5bYjJXfrYM1ya3lrIas9Iq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIUEV7dphf4TegdxJircA1B1qh07bMEMkqkKUsihg712LT5goYzwy%2FkXUOL%2BsyQhUGJoXte%2FVLckrl3ax1%2BITULuJsd4lfC0A9eH0QgXUnzj5kfck7qAsug1115F2VhWB3732KmRNJYaxt9FN3XlvDuA6rR5GbK9kP1BspnclnqmxeEOv%2Fxvs6RLUF9%2BMZ9zHM%2BVDGL0BFDlCCpgn8ceUDgYqHZcgW3icxRO3MXSjsWYFDxuM7t9INSV1sNDWyuq2q3v3sqyQLAQszCf022SW%2Bfaasu2oEgJ3NIydUiNTA9ZDlKalZNJm7%2Fp%2BkpZV9tueWE73JNyCxvB2eu18tqerm1rjO3EV1JKlnh9%2BhWX6krXsBFDhQ6XaF2o3iW11VPDuIZxnXgq%2FPhBdYZc32yb04KUmhaVq6iwQmJka8s3FNDkYkDXNoZuZLs3W0Luz0TCjEt2RjZk4CchdWgGtpGHc8DprBpz57MFVar6egne8GPFA0fXyihIIfSEnEbQorZz08nuLYXRk5E%2Fi%2Be2Rr5ULBvNqvqdu5gFqRSsBmFSa0MTBXdtPMmIoY%2BHNulYga1hP38l7FJxYhc8A5zfK%2FiL2QMbpos6rLR6cBDcpgouOGEV0p2j7p4whQQAbB5wMyw2jhSB0gXEwDGIAkR5MKKGxckGOqUBuUXr%2BcFq7ffUeHpcxIsFJeQ8E%2FK7lGtqRq537se1MoRDVheSsLSgJtBe4giPBkWk3DGvfmWev2qZKz%2BxQVltumRuX%2BJRU3qKLyjUv6niofLGIesUq0lDAau%2FIbHbhWuXnXp8CO1ezPYmUQTfOuiOsJtk2ITpjJpZ9zJ7AwjIxLbujWjM87QPaRPfd4SrmcB7cxn5W%2B8IPCG%2Bkwr%2B9%2BV5nNO5xg1P&X-Amz-Signature=21a5bbb1f78def1373ed69c561da4d067c5d97b62ed1a4db4269cf77a56b7efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

