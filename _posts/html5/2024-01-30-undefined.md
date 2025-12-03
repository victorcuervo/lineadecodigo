---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTAFKBN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDtaqX9JWQRp0%2Bw59DWYXw%2FNyZaxw17h3leLuTwMHYnBAIgKeOzZ7ok4bxMCGRgYDC0OImMm5fIDLjgh49JsPD5JcEq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDMsVYVgwMyYZStWv6CrcA%2BFTx%2FE%2B3NkAem%2BmHt18djA1jh4Yp6e1MKgGGkALHzEIMAFVSHGR2J73aUxP0%2BGZ9XhDHJBbAG7Ig3luhWUWwL%2BW%2BK0JRQesQ1KlQe6pQRYmWLsBygdaI4SYF6WNgmFAY3S3aRok0wJXAOnQGFFm0Y%2FluRNhpfG3GLbJkTl9FKiVR%2Bo0DIfrZWvbwD39WJTrjAzWaNSuoSdHZIv5uHOLFfs7%2FG4WXFbaNwPhinp5%2BFT2gIUB6zMPthyp01BLhhkI%2B4uD00%2FFqs5geX%2BvjSb6U%2BaoNPDr%2F5Suw2yZ%2FogjITRcy9jt3kTW56SyFIXGeySWrGOMlJ%2FePDjqHDw%2FusYlGdZHiGtjKUJ8isJeGrMRVpGecgtPB3V%2BqGOSN%2Fku8NkIWC1s8zGHRAQhfaEOSS8EBeWhYjPFxEa3bKYInVL40y0KvS7d5IVv8q1tDffC7ejGGojUQN7aRz0ISbIpLUnUEVLxFO%2BqQB%2BT9e8zM%2F5RD77dKIUH8PvJSlVcuIP%2Bo1frKQd%2FyahQMpMa9SBH7qLfjSs4416ORQw7K%2BhjroI1DHYd3dbCbGpKkKIroDgtqE2l3x%2F9Y3v7h%2Bp2fc%2FdFPq7sLZYg92Ry6bKMZR2ThQcbVSjxIepLk81EJ5kagImMK66v8kGOqUBqAzNa9jlTCWEMTKpUd2esmkT%2BspvF7CWSGtG1RT20jt2xaHDw16CYjcWQGii%2Fpy1fvkgNaYy%2BYBBLTLmgXkeDRt%2Bby0LZCR1Y0QxVzi8TUZyWNZO34dyZaBJjPZ6pXAok%2Bwe%2Bz3UXXI25ZEjZV3I%2BSJjOskLGCGnVmGrl2P%2FT0A%2BQYc3soP8Ymf%2BO8Li2GpLW80PT7R6C4gBjLiQaiWGannowhJo&X-Amz-Signature=3f5b33ba4061422718d2d834d784635b8edfe28da784fe61987ada768759ea11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5XZ54QX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCfAEOTYnGLU3lT1iZsyD0ZfpXkT67s5CLhS3ckAoVnbAIgJ5wl%2FU1iZbxYN5egQwnHU7pceOYBjs3WP2ef0MY6cWUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDMTWtFFee49kcv6d8yrcA8%2B0ILrjPKl2NALLRZr7xPYfptVWoiNuEKuTmiPGNilHavzpqJkWB4koegQvKnDApKEhffu%2BrEtorhRNmYX4jLdCQAGQJ6XHg5Infbvtbr1F5ZY3i2ZdXwpYKprrjCp8Bj%2BK6P%2F%2FbR9tXtS7v8kbOhkAxtfIFIX8pHdJXYPxl4OJFMsQ31qiXmoN1ruubD%2B%2FuzYfOqdbwu%2FAU6fw9DvxKt58pSu%2FWpIh2Sj0a9pW15gNd86Lpx70PvynOmGhAZjoApccOHbUcZzvCNdQ%2BeSO09NyOnKamju%2BEnrnKxcb11UK3cFhjF%2BvEjJOxits0a3hAPc4aNDs6wTbezJTc%2BDkOp5%2BR6VIeVQPY5TBXZqziKvQ2jGIvbQMlZn8lsja%2Fwnz9pnQsN%2FUlspOtewy6CcROVPTE%2BYeKyEj7hBfrx13aJnxL4ok2xCE%2BWwKmLccBNKkhb%2BIT%2FumvIC8RJK6ragvn1mcQl%2BpE9aPBgqQzDp2353S%2Bx0NJ85eAmmXpk6uD0LiIJxPb3HsJUPQwz7P9P%2FWvIo%2Bd9XLagGAYUFO%2FRQs8QTXX8kxQylIgaRxqohdZl%2F1FL7R4D0KhcLfMlFbT3zlAJl%2FsbnRgdPkssv9O7m6fQ1SIvU6F98UWQ%2FImal2MPO5v8kGOqUB5EKxr7ZErkbRjqsQ5fpbOd57sFHcmJ7aTNqM1BZa2DVN34QFIqpcUHrhJSmJ9AIpIzXBPZVIUMjfzKbU19kuFByoaL7KV1sP4JdQC47XOYU7%2Fv9Kfq4vccAerQRSlEAT4d9%2BgJW7W7ZpZBZ4tjc0sab7MQBFvcrxlhxGMaSo7O2ttA0Vq9UAjVo5hzMmfnzVTrOEWPkllGNJOdVKRljoof0YmkUs&X-Amz-Signature=d9c7f63b92f568a728db26d1ae2ae998e0f49cd08c16e267a4a6c98b7f1176b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

