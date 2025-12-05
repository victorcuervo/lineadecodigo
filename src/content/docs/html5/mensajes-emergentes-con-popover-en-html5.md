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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZNB2GYN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOPc38Hh6vVbvzb0MNoSJThsvDTz%2Fajlr2gfsFqBbH2AIgCV5puRPWipxwF0Ylx6dw%2B3RdWnhRWZfU3ivLRCwXthgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOQBK7RMdwqA5QrOByrcA43Ob1xtzBz8qmkuBU9HiF7jS5279IS0UQXnWr4UtfKXRlJiXmI4IMjob%2BG1exIfOrQ6wysFSfQ8oIvHMGNTxWVe0ydVWuL1NJ0VVeIFqtbdHBHqqFqR3P8VIzCkgIi9nOtoSvYgSYhX4KDgvJ5nN2QzCIBX1qLAMl4gkrqyc6BwFnAcMnB2%2F%2Bli%2BHao5VKUHFcR1QD7gJUBMBkwAoJr4eDTo1xRVSbiu8nYWAQ6lT0Oo%2BIZaXNOeMFhiy%2BDSx6Q4XPGd%2BKIXDO0v%2FUHiEgOIWfQrvhHkbX1xoZfH8ybks24rJtwTSsMVgZx4CEVS6fGd0zECkB8lQcHIgFtdG5Wtvup6DxKYwlhl2KmfbyFvAFD048WAEA07boYJ6aV3j4Tt1kTffRtRPVfmJXvCCZI5Co1hMnlkC3GNF%2Fi7QYEOuIMLgz0%2BVTceKCNTl0B0LRVPZaiOUev0kVCQa1LlvkaQlETOCKGwy98E5W5WwPuNlzGzI0QyIahnInbYheyN1qyLOo2tb8fz4UGhpYQv5%2Fo3XFt%2B7qPJkczdjq9bMRxELMoqdvFG0zVTrfkala19Xga1nyqcrNvWNElNOKFAfOw9XmWiZsUWYkQ%2BULCRCl2mvnBOZ79V2Utp1DBlrqxMJ7ty8kGOqUByUr6oSnnXcUzH7GJ8Yma70fAQFQUd%2F%2Bhjm6J2bR2y0WeWFJS6seooKmYs73jzkh%2BsTnFxtNurAVxjzLX%2B2hJDNfIc%2B6ddgrT6Mmru31gPQX8%2BgMl0QJkL01SBEEfmyxmKyX93ZZhW%2FsJzR8wI%2BsujtlAKCq3tBsZceSWPao3dp%2Fiyuk0zATFMsaD4bgCCAgoGh%2FNBLH%2FLW0uBaCzW3Xtg6YG%2BvkI&X-Amz-Signature=63dc3e53e48802182c155e349c935f5fc6605c0079c66cc6296cb94df38a1767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPRXMHR7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbD6WwxSZzPElbpS6kzBjTjympKwCATQD5ZTCHOBk7tAiAgXBh3nqn70MCOX4P%2B5d2qIVNo%2FtM1B2R9Ekq7RAj0WSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM3uj4H0yuSitbqvGqKtwDY4sk2Knd%2By%2FkbvRbE7%2BYcICqKbwdFRxrv4u9HUCT9XXH%2FQoFixf89jmtu6MAu9ynbLF9KtBt0wxh2hCT9G0WTKgkdUXaCaGRcZDD359y7aLCwlri%2FkPIohDz5XPE6syRirQDT3NxfQh6hatrHQ3DpSBcpuK8JtMBHRxhblg0vxMPdk91MGUuURS00GRZlP1a%2BJ98J4o6Up034bvne1a9jzhHcA9rYijlZELsiRnI%2FKU3RylNtiWJ%2BTColYQJ0M1v2Wy09F7f3f%2FFE%2FvuI4oxUk5T7mrSd%2BZKbejzlbJfvw8H3BFdRai3647qoUKLVl%2FgEElC0EkNbsrzTFBVJny3E0zolW2fM6GuGMjACrrdXNZT0VFUdlLVXgSc89UEriht9bd9cmEtEWcHIMstB6T02Aqp6kJSEJKjWklqaZZhcBtDeg0gDhsGCBAw7GlIeHzGVkHDUJE6r%2BgKc4o7fMQ94t2xrysdYKqsIDbJrn1cpl1Las0LehFIFx0ZjEPmZtowwwEqZ2wGjJrZYX5ysjAyScj9MYPWAws3FcjSQKe0kuMKwhueFGHeFLnNJaX7U9%2BUr4PZtP7IAThIYrebNoGtljGz7hWXlZtigRjLG4chq7gbrGGuExp4V6mz3gkwjfDLyQY6pgEbDMnROnHR82wq1EQiOgeiIpkfTSbSdgJowizxymR8yN4D4ZZSASdTvBsS4NCtK8UlwoDPpCtsn3HwH%2BcObFBR2FEIyLUkGzSASe2v%2BBBOuQEF13W8%2Blp3nuA8kCdnSHK7Ot09gi%2B3a9ak4Y3%2FiujX1%2FUTu%2FVI3zTgiQ84WHC08QEBaOoA8Hdl5VNCpTBcwxHuuKzDkX2NAzjlmdaw5gDMWcwyNK3h&X-Amz-Signature=020d8cd7b9813de150477f2c25bf87e90c52cff168fc39f8cb0d4988ea9d9491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

