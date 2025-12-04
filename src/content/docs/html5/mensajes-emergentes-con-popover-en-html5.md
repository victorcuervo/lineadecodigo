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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XACO3HR7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIE3vfqEvWJh4RO2Vlbgkb5jZKDOqV01zwqJvL1O6Xmy%2BAiAN%2BCARuxG5aOty8DfA%2FVYQN1rSWfBRCVQSIDgLT8vH4Cr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMSChNhMZeWLf%2Bc4c9KtwD0e6%2FqdTkgVumwsxiKVgY9TvmJPcKglFtt%2Buc4c3lcBrQO7Ig%2BEOj5PiL7IytjQkZXpY2sV0luWI0kqX%2FtpzNc8dxrTKVv1LM2GfxKGN8Fv5ibpp%2FJuCLZ6rSZRwTK8O9W4FtUtC9awDp8WySm%2FGKMuYQwJkQZ%2BZLgRlnT2tzRm4dIpyPckcfh4CjhFRKiAFtcyV7uWYEKcpccRsT5oua7Eu%2FnP4QsptcG%2Frg%2FabaTuwpnrAoyDWlzwv20%2FCYtFm%2BFLgGlONoOGt2nUKDdX%2FhoBHySLwboQmGR9uiGRCTazNibW4lMHpZCZxLEhEO9n4RMBYn4fNX01VhMriIgAEGli4pxXZXRYGfey6%2BAYFLr%2F2XAuu%2BjhD7g%2FcnUzLFN1ogbTSAdD82azZbwztlcVHGuEfnM87FKsfbMsEbnmB5VKDTFjWNRvF1o2QTfZwxGb5p%2F1RJPPHbDY%2BxQMqch2UHy01j0n6RARtqeSo3fidYbC%2FW10SNVuNfcWo%2B8Pj1A6P0BXJrCZtkathXxecFI8d9SydydQiLl6GYwwCAbuYV6%2FfvlD2adsrGYcysgjUfgBE6BlZFytX0AxKrS4MjhumSkI2oUQf%2BiPc64ztykTW0mypkYvx7tERdc3%2BrDoIwtoPGyQY6pgGZ4dxURNMw84Y%2FBJGOiZYPe%2BNKAxAWh9Jmq4XIUMX9hDIDBXCWc6C1nUeQhb2HAOYolyP2x2pqvHNOZoJxBEMI61lh0pd0sERHdcPUepXabrrMyMI3BwJLX5D7Bqt2h%2F3KKGuiRbQLrh8exymzyZL%2B67tpqoAYnPDSsIHL6hJ7WJQ32h7%2B%2FkE3ZHJ%2Fv4M8Qq8iOUnfzpS9mFEZw28wYt1uJccp96h3&X-Amz-Signature=781a96dcb257c4bce95cdae3d951d2bb892e4ae1f1f97addfb29f9048e081fa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNO56DZN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIB7XZFlVkxLVLD6gcjJogIYIemMf3Bq1oCXjSNXglPMEAiEAs65e9EznRZtyQIO%2B6D5Y0wc3RAKLDRLoqN1a6tCpqh8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDIDLfNQ8uPOsFXQGayrcA5dtL%2FMlmqvloYE4ulXTBJv6N0IcM2qk1xr6O4aW2gJTHkOgLJEGUFuT6i4e%2BxuIrtWjGHyWFrcgZ8RzP70pGGgz3wiE3ynVGQWUEzx%2BLdT5LA6VtInMlJ8V6kYd%2BC%2FMspcZOI4pTI%2B86f11eeKOEd1r8Wnu7UlXpOMqlj2kTFFCKLinZf3%2BKQW1eELqcJNw7g97bSn5wRLWWr7JmKApt1zKRg1RO9dVuXl3P8qX7dCJHtSvfw%2B41kXi3evRs1jlJPiuuMbqzurRsyU0cjaOH5CjIgG312Wza0frUEeeo%2BJ%2B2fYrD3UCO83r%2FZwo85Xzz2Guahi8V9oA2mgQbit2WFoQpB%2BmpzbSGP9Qw%2BhO17hIwf%2FAgk%2B4KRRkT4GLklOplwzEJMB8%2Fj0Ntelud7OwQXPj9KdPwafjKGICSiFBZ1O7Z%2FejCQ81Vn6Ee0mIUZaOVj2u7Bk%2BhxZx%2FMMOrbMWVQkX6scbfa7uH53wl66Vl%2B97KMaHKwmnM6QWribnVA42R6KVonj%2F%2Fy38cInekRcn%2BDBRzYdhlaQ8YC%2BPRoI1olw5T9Bgv2KVxZ5iEs4KXXgF8b3AhjzNZppNB%2F8QsupevcZR0RcS%2FyPgQq6KD9i9aOdTHN%2BztIW5LYE9P0yrMMyDxskGOqUBKqu3r2BmMKrxUD9jmx%2BVHpB4f0R7odaO0fRqbCGQJ1wYf56tcEVSaFiuRj1Zyo5fKW8FQvZLCeyfueE4V9a93cvPTn06629dUXSMQ%2BWdOQiB55TyoW8eulbi2mfHup8eQijtaNzygRymWDVgyOVHp4uy14tg%2F5TNKYQUIdwdVdBoAlTztOWOQp7GIxAnedi8pVa%2FrBCiOu%2B%2BGZ3Kh20dS2TVBXlr&X-Amz-Signature=30faf0dd028fa2815e53de92c5664b1603de24fdfa76db5f0cb3aaa6f60ae628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

