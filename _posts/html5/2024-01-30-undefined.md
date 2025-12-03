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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5SR7TWF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T151159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCptckbOnT%2BnYULEn1Taa17qo4UXJJjMWSVbAzsCrLJMAIhAMYqWj6p6F21lHrhK7njcKGPz7CsPyY8JVtKeALvhtNmKv8DCC8QABoMNjM3NDIzMTgzODA1IgyLI8FOp3CSUVmT22Yq3AML6kgm17%2FiFC4rJp10aOjBi5J1J%2BkiRtYTMN2e5y2y8NoHvkD2E%2FQ%2FV%2Bus4Kf2NVljq%2Bu%2Bys0ns7avFVvxBaKnsXViR%2FyV0Cfue8WJRD6iK%2FajgtWYtj%2FhDp5mVLO%2BIys98Ky6EqPgrXvc2%2BoX%2FjNPxnd%2FeQjoAgLhnZ72oJll%2BGyvW9qRuI4yRkmpRyflloXu6O0lXgrg7TY%2BcqEZWkLc0%2Fuh8PjV%2B%2BCBG0%2Fn2REdlOHfffJUNVdFDhnZP3oEZRj5HB%2B63fwIxduhpvGWrd1EPuI6piysD9zaFBKmP8X5H5z0l88O9bB170eMRJq2wZSI7kM7xdhq8yB3LHVckmKYzU19DObUEfPKtAhZUYJxkbVeZu%2FQPlJ%2FtTaER8hoLmSn3VD1LwsdNBccjQVAOz03T55Q4RAW8gtjvBX%2FCOyd4N1fpyfwwWo00QMkFtomPXHVlv5rlFlm5jTpctvDnVsOyW%2BfnXQnoNKkdQ5isC89ML6HgkaRG5RQBoEtuKGsuW2QAAWHugPa3JKiHrtrASDV9%2FaNYOiR4kfRqhTtsIgCsizLBaVmzYrCMuklWOHSBRB7E0PfG9%2BZ62GOygRDLQRCmJz90YbCpAvIZ%2FpmlOEqeC6haqedkJb96wz5tDCdiMHJBjqkAfeUyUYK53TDdG%2BqZvRNpB8el%2B16OkLZRqYGlOLfUhE1iK08m488ty6WDKmr8oz%2F%2Fx4%2BeYx%2BSxCiluomOf6qXuP1mg1I8Udm1J9%2FgwGpc5e1VoO2KUW1Y0vUAuCQQ1SLpxMOHltBcmNAgMlAu%2F3wMudu3ZO04jjz4hzps2pRTcIE769mtJ7yS9UYZ4bj55O1JA%2Bdzg9SS%2B56EI70qE1fkFlCGB1R&X-Amz-Signature=74ff8c2a8724c40161f8789ffecf7f1d651ca4db7d3ca395004c1d5fc9bfe8fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLFRZ3XG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T151159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC8TpZmZaI6Rm7YJkakqcd4WteZU27apcbrWcCIv%2BomdQIgbNvQ3%2FUmEwrXRuGZrrx%2BqlhIpDHLhn3Js4O9iXemEWkq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFHqDdCR5eJy%2F6%2FqjSrcAwetO%2F%2FqM8R5FCwwxs7w2K3dyiYc11pKCq1XypoWZUCyLI0eBAI63doBTgyUcwv3hoNhS6wrEXI5Ft0LTNGiyfawX72Vxfj8dJ7%2BLQ%2FTbg7VqOktoEWiFohF3KPHfMUmkDuCkduu2QGpDxGJqjvErSeMdNeSwselDZDMXwjloqWP5apKUJ91Db4Ae2xaslrXZ0jmw%2FRxvcscqAgbzDPp029OoaG%2Btb4Z7ZQVy%2B7ygYYVwRtQN298BFaW42n7pBkxO885JyXWIko1spCf65waVdWfV9Uj54WAQvQE%2B1fvMdAjr6U1np1EVijWTHPr2RPpr%2BN9IyiaGAyyJu1oXUcEwMwEBDuyxan%2B9r3JVJcYlCqBo7TRbR4vHK2TuOCmEG%2F3Y6IPjF98YlJSrq4zqoVOt5XZg0IRsI%2BuCJoA19U0XtMVtWBa%2FC%2BPHWpOkbtHfH659S8fBg3CahaM0qmMdsnMUth%2B9DvEjO7ZiPqnMLHR7tWW0tz%2F1Wyi22p1np3g%2BW9r8tT13ZqzHj%2FHidEFlxfPjtXxPXYBRggZXJ8z9REr7Gjwm1HzlE7d0dw%2BfFg%2BWuJbAp9Q1ZxP54%2FGRYhBRN3U8Oe8FD8R22SlLEDZx1GOSnkU6IIsIK0XUA5qBSh0MKSHwckGOqUBSOyOOeh2%2F79xnqBw4A1xD9Y6xQuKVkeyvY0ofRSXt%2BsZr0rk27b4%2FZvBDB%2Fiy1rjtTzzjMpf01jwlIA%2ByNhV%2F%2ByvPUlnYp%2FKQVIPxg2XAi8JjpAG8CJf%2BqRyb73O9nypKt9SsC1%2B%2FOjP7sQU1P0ggRMJl5srzoow8F3fYxZiQ2O8njBZsYKpKBj6l3ZccBl5KwONyH41OvVlIvK9ohP6NJG%2BNec3&X-Amz-Signature=590d73b07fff81a3e0eef1e9a90582715d5b80f48941fc05368f6db001c3765f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

