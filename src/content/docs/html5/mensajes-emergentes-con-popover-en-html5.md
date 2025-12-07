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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNAQSH4U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvAE69Ytzmod0cYh4bDOuc21x1fRJX8BPTDtr1q4sSvwIhALBe16%2FkNEFYRgLX%2FxqzfU5InBpDxrBndvrJWD%2BAUvj3KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRXni8%2F8JPZ318zFAq3AOqX9eBt6spZRv9LLsWNo0mTMXoJ9G%2BlT8zvBHTaPUbe2d%2Bifeto15%2Fn6C23YNpFuntqE9XxZSZMmCS2RmY%2FlI%2BlDkeAGOO9gkon9nbIGlLwCtSfw14s7YGpm8hSUIJ%2F4v9%2FEp1Vn8hWlsX6gAC5%2FA8Y8OvXo%2BeABfQ1BephBd5BlxWqoXnr2kaIv9cX33Ng%2Fb77UKmYPbtXptKkl9oL6UVYJjACmW77zjYiFfwNd5sFcDq3VZrGw42sRVtMoagVygXAxWXkqMnuWu%2FvBKE3Ebk40r%2BEq72JjOpCwtMOheKVuYL6NXJ0Z0s0BJ9%2FZXn6lKA1TUKlkQiZYkCMNkmlIdk0MjmimT%2BL0SsUUBV5WIYO7oi3Cvmx%2BSw0thxcLX8zPNzXv8YPQHhyl09aQAd5VgfopLw8p3n3AaP5Dkp3RXkN3TEEEOUHEOnENGH37XQbPhTtO%2FGNVKHojueqSB%2Fr5BwsUuFDmn2qb2SUtgZCebsQDIVJnEZU5x4HPJT8PtYYT%2BHy4jru1dS6d0rr%2BbypxvU8VWIHg2A3W04jIFm2Dds0DpmDcc60rCgUvHqDbNtoX9SbWEQGd4Nf2dwRsmbf3n1boeyK5FooJVozAy3TzpnnoTn6rZ4LjsShnWz8TCWmtXJBjqkAdaUBH8cdQdK%2FTQXBlZCyJJBcsVZB9I21f17MZ9F5Qi0UQyFRt1LcAOyIinF9nAXB6p%2BqCUI65Dr5nqHznfpRQuDkjwGLFg8HqvamrC8aa7GRtwqkuq%2F825qxVSBKPkoAW58UkCJy1WyeKCKem8W4V5lFZFuGPiLcV%2Fx9bb57oAOlx7EkWs8WM6tj5Y%2BMa1OsN3Y7mlw1P1Xowq25ytWo8Fv9uFq&X-Amz-Signature=52c99f7281629113da38d465c26e8f82a500c6bcaa95534c072815fc1435de68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWBXCZKI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXmr2RnjA3Lch%2F0qg5Dn%2Bv%2FtkBfIa9MYGlGAJKzi7cYAIgPWhNoOLSMxsO5comp%2FZshiHBfzD5mHBbQURgZnLzgtIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNy1Zi%2FgG4LErup3PircAz4T5tetnXurWgTYKUeWH4ynp4ee6irItNuV71S0EfKyNAiVRoD%2B9ygz%2FhyQliqvV5%2Fz%2BnCN139Ftzh%2BPpJOkZfug6ks8CDATxDe9Ec4ZjMN7B4pjn4vlueVkmxCPx7uVaz%2Bf5iKThKc5r2ryCPQjLU2I66j8xbdJ9ubTPCoy8fqKddZXFfmfs0iLxwrJjU8bbx9OOuQyda9k8z1LTRgH9jVbxm75YCirB7gOQ83RUruyQ%2B6W3EGns%2B2AaTb%2FXNfcmd2bdKp8K8eEKrDHlGa158wPODEUhyqKpIIYxvRFtWfySJFZEb0NwYyw2zqih5%2BM4T0HeHNUd%2FpIvqSMQSvVDmwFNmREU1RFdw9uoYjiKiM2GaDFEyfunol6XboNrS8QNI%2BnbKdWFVMOczckEN%2BZ%2BgMXIuGyvrYwkPinNcr7p1cTs2Hy4nGL9vq%2B7gwwvtK6kaFgY7RkFtxMeinYZCbkcEwT8FUszKroYAec7HTqYGk70Uxi05uDneQ1%2BU2SgxVg%2FpQhRkwOtB2F%2FcSecIuBo2hjL4kjBm4lPjbxa3%2BNNN3A1ebzIrCpS6%2B%2BoB0VqsH8RYYWfN%2Fvx%2FQqkCtGrm8YhAKZJz4ZosMDwNNcMU8nsyZ2gnPeeFkHiUuwxKKMIua1ckGOqUBkT85CuEmrKRdD3wJD8H%2BXA7qP9XDfjezBadDxorREF9caPWDLMT7is0B8DV5BIeauL20LY9WGJj7l1fAgZBPczLklnFO%2FominF91FNcU8ZS4X9v72IZiWYAnfhui177mbFTqnVNTHZYjqeqfO%2BwC0hWiRmyvzFb10M3HRugdof%2BjCRf9eroIrB7eGqPaqePdJd07wWVLKNPTdO%2BUQPY3x1D4ZQSO&X-Amz-Signature=e4390db847f794ef8477611a781d765fc8860a707d972f2d615306e804d4db55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

