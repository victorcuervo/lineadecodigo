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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4GUAMSM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDzQhRtLS0qXtmxl9QYUdkzPhh10u4QeR9Dal4lv%2F%2BzAiEAuVQwfi%2F2OYcIdk17ELcO9UbYDSv63OKSL2OGMHXPXsIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKjUmaD%2FhXcrREVusircA548w%2F4U3Q9t%2Fp1VIKi4Qa0kko%2B3kvi%2FxZ%2FVDN578RYxROqMjVsj8JQh4C%2FIFzeVYHwb5jSHZjfL38VDHOFRHZ84bAGF3UwKGTwS%2B5NlbJePP%2FTCC3laX3VnvOTowAeYozcimBSktrC5Z%2BB1pLu7sT9rKKbENKOctPgJeEsAWhrudaSMzBo3qe9XV6F8%2FCiB2crOtqcRYUq4vWCPqwTUT0R7bqFMe5danJIl9tAZ3h%2FgCreRWmL5WWjSDyDgnEon4JQ0ooHX14vqkzAtH7XDm7%2FnQNDKpamqzb%2BbcaLHwaavegxvJS4WXkvKjgPJS8g9vANoi0QXkCdWHnc3%2Fd5Iw9M202w2Rws9OVRneRpIp8XnJJ2Y54pvDaLpu2wLe8UjuHlGEtNAfzOJWl0YyBZRg3XgKb2S1YpqHEMC1sX0tCRX0j0SuNIjEsnjdRO0tix8YaPYhdckNrN2z3zeVgO0GpW%2F4al2j0QuZwJWaRFjfCI1jl80aboCmPL8lFV8UKkYSm4SxhxC9m8rojGdF8RWbBbQdz4oBRjsizASqho%2BsfpmacmsvJb3y2Ba%2BeqG3frMNwnOVy47H8F29rdC4j0qRfn2MFbb2f3b9VWYUjdZZzhAk4vZiiFjPeGzL1P0MN%2FD0ckGOqUBwuATXPrraTVnpDmJdq%2B7N3UQVIWEzsh6s2%2BkKRH01M7mmJ8Jx7pf5EbwZbyqxnSj9Y9D%2BbhsBDCVUOPArreBUu4kmNxfP4hFtcD7P9LzcJb0gPwIPEmaUk29e4eZ423XfJJsaciNTfdWbyga0fgYupbwPZjzbIaH2ORd07mum%2B3fiSsnb4qyOlnECMNZ52J6OKawzsQLlUmPDFSSmV8qhB9BS7fU&X-Amz-Signature=7b6bfc0eb49c9c73a80db3d46803b8547750e5aa7d1b4bc07f1c0e5713ecb44b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ENJ6V2K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhipvOOTcOTajqYteOro4fgTbsFPy5dvnP2CpLcuCk6AiEA%2FgAOt8jufxLChxOc7xYtAv%2FWPpu5lEFOQLYAGTbkSCsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDC1MOHCGuJw71Q0GsyrcA%2B05c39bYHeyHPrikteQQFnkEegMUcqBjB%2FC4sRkNk7Xzx4WZLPQb4sRiwS1NQRZj38HolqjUWgvZ7KrwIijsmIKxizbnCh6vNB1DljU%2FpUWvludjy3oyOtCZgUriKT3R8yBa7kBcPb6GIP6rEbhawskH2ZSvlyC4hoO7pZ1nQNLraRIqKmV2TL51F03qcqsm%2BbpzJ91BCFpIAIGbpDlPZ2oBunYjEbdu0rWegn8to8DRBrMjO%2BLa6q%2BGv3zR0pYQEOI0zt8OC4tCTzEcMicfRdHw9CtxtDdQdXJCiqnK1G%2B5JQRVH3WgG%2BZZg4b9OO0JmXvjjjqqbyN8tQnM2MQKx5rPGKQvbhxwKGhi0KATOL2kH9YsYN6lEDbXMbdWy%2BUzVwUYG1y6FBnwpzD0WvmPZ01kzdIdW4xf8lTx6Z0atN3OoRfiq%2FUskm0SiJZRCaDSSPF%2Fzg8pPLzzph7uuD1QezANecmPOYoVm0iVLju5GdKLPciEszHI8l%2Fd8qGJoA%2F1JN0gl2LZU07ORal77V480GE3nGcYRIhQKly8jjswzt7kpfvyJpA9ai88ugli806kh9pPswjQhev8p9DJH19Mt69hipLhMtHjIVid3NLtRdkWAIpYh4uSiIA8vz0MOLD0ckGOqUBGLFhjhadhCSNQiiC2LwPBJiOVD9Tb%2B2vAQC2oLFIQBH8iuezwDqz5svtuWicGtm7c%2BTSUoYq24ScUVXPQdQdqIsRVxgWQTXCzO%2Fuzl7zHRuzYW3pnOYxaZWA0XeK9OM4eddzF9Q8NgIhH6oWAO4YIJiInkHp2oE1fkuPgWtIVJ4L3gKRCmThblblrXNWSJF17p7o%2Fl%2FVv5FWWnk%2FUGdVZT9FeMh%2F&X-Amz-Signature=087781393d01f91c0e270fb4c7680018746573e7f9fa51823fb86f43a26c0d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

