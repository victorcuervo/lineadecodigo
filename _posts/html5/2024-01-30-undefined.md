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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJAET6I5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQC9PMYvAE2sMw41zJYwmpiVwyN2soQ74Fr68hIVP9LvJgIgJ%2B41Qzo4icgaaQUECEtU%2BRcRusbmfe%2BbbZqDZAJfoogq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDG4rzAjMOKtxnv5HRyrcAzPnmefM89FNEaUIdVbguHPxQ7KSyQML8Bn0V2syaAJbwNTrWnnu81ooe4xfLK2cl4O6VnNebjZ9AOwmWGJzVKl%2B0eFeQlKhWL%2B9SDEMuSDtlxAcMJYq8FAHvMewkI8M4crJCgI5C5vCY3BkE7JL8u0l%2Fy9sP8cMLYzI0z4bVx%2FMyCIXJIzOOan7FRWQjP28D5tjLXx44TSbPyWGyJYXYCm8nc4LhjkcltPfh1ltg4eLcBWEB4y5pXWX9Rg2Ry5vfvk%2BYVjSC0MEjCan5lxtXFsEs2%2BtjbNP6XeucrRag2PNKK4a1dMS7uHk7EKuMAmy8m5NRxuWSQA67Znl4Hh%2BIA2YuuzMNqLgNQ3VUKGDvFJP5tEn5YEJHJlbvXn5Fx9UEaUHyW%2B8Hf3Z3WKd7t136XWif3YlPIfw7OZ8P93mByiLz%2FfQyZE%2BTgec%2FOCFQaGsuUTxvJ%2FPeeL5yN4vV3QY%2FnmT1ktNOt2D%2BKdu%2FMPl8P%2FLO1OYPFI8cveULy3jbJRglvF6iRP8hRGczIVUKkOqLnDajyYbqwhwfkXWA7hF5uMvXsZLjPpq%2FmbyALGCFiXGXc9Hfu217MXMLVn6RdFMxrhUG9UUOPJmr1GZ0hsP9QCh5Ze2%2B95mEbi8T9kAMPzUv8kGOqUBMLR46Pi%2FCO9IiSTHx8RlCwN%2FkV42Ga2HG%2FNbYej6LczMg5xgdecbZfI8XwJv0rw46xCP6rzOia8qfRJ1ZW8dI%2BxnwEed0X9TVS3JRjU8fNrIwLyJqjCrfULwvuapdYyMsLgskt8swASfj1%2FsNXjJypEnU9BpCPPonASqdGVetWlS5omW7mJz9dQMjR%2BbnRy%2Fn37cCTS2%2FgzPdouElvXB4oJnfrwE&X-Amz-Signature=8e5f54b20e67366392a7e61cc41b660929cf976388ab3a34bf995f2b62ba249d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646HWRCOF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIFLTOuQh5vKsAlOcHDbUwQrXSaQI9dgkrrR0ipwJVKZhAiEAitdVPhrB2xjBAQBo5HskJMy3MQ63%2FJN8yyhxZKSiehAq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDC%2F7jSQvEJwBm6Nl0SrcA6Ava%2FFSecyxrt70RsEdxbuM9nnQO%2BSLsXGryMIr2hCdiFtOd7xmfsJ12fBv%2FvDgslX768m5Aj6vhH0Rd%2BevR30twz6%2F%2FY5xYbgIjupn7GGUIj4Ab2g2gV3KeesqzUfO%2BSSG4MP4LI6a4D0ytAdbsG8hp9BGFNL%2FyoYdXgMhBLXsrD0mHrTtbgHbchxGAFCGkxE6wemLcLNr62XWN5%2FgrM774yuyrHAIdPxn%2F4tGtXAzoovOtVKJtsS2zyk8x5s4tLWJ1JLkgIW%2BfyqP%2B549jTWsjTK2U100PtqKDJ2og%2BD%2FK2Akuejc3015zD%2BuwAhPhFOtsATXuK6pzU6R7H72YwptQtc4R2T23XlIAeD46WRwiEHhSm%2FprcR6SYI6E6uR6m%2Fj0TOvJjBZAFhEoJiosIYeC%2Bb9j%2Ftjqha2%2BVWb%2F6loekLLT6WCQQremDvyCZDCQIBrwRB0dOoO4JS5vLcWEXl%2BK8JHLuRkaF97UO%2BWuE9lVFgyv6PyskIUCuvAEIuX4rveJ7PitCS5mpJoxk%2Fax9%2FvAuoGfqJtDDUT4xz0ZNAqtvAVkO6j09KyEQF7QHxhKmDwQQOiSzbk3RF3D0dAOivTP8SRZmvftF%2FcL38mmnemtkZ1YTGAKQrTtxUQMMvUv8kGOqUBhJS4h3yGKHlCHOrN6qIEQ4sH6EAP2%2BvRw8eRtu77jKvT3rH7nxgw%2BTQViuEkstrTjOi%2Fyf1GzKa4vwRB590HKBOuuVDMLceIDRRIn2qoNxwn8iqBiTNOgy%2FXenB0z1RQiHRWMwhqy1Bht%2FrvZVxYrnFveBCPOhkIlPOQPDEot%2BWoHl12u9ZNz0B7SkRCDzAgaI%2BkbJQRQNArD0%2Bd5ICxtIeSqLbB&X-Amz-Signature=8e91840cfb16ac5c38bcbddc3ea546de2bfffe972cef1c6e1161e414aa30bd7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

