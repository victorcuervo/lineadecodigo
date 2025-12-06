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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSNBS2GL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfW8CzNg5lJlf6LyUH6YfMt5nxJE%2BRIrS3ZRXdUM1NCgIgbBAQzGqLX2nTMOspW7yOiLkCK6l94efi%2BTwEUNLQESMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKzK8KvRBN6Pz5NFKCrcA2VZEU%2FZCCG50DBFjwGMCKVpDksvJZgTmDfJvj6y6XZf4dIVubSbJ109w9eK%2B9UEnd8klP9wGNSkj9qxHti6TOEJCIumkxxr3QsgBUwL0iXxbFx%2FTJNd6Bp8Bad%2FrEXtuVNIKNrAoCHUlkz04nSqIZNQ8bdoxD2M0eKEJpiR1NUt2tP7qM8vVjH0f%2BxBvqdZdCPUp9LpwX3VIf%2FeeOl3PqXeY2m64WZePgYAUJITexMzlz8NAtv9adk4alTfLiZnGp17jU7O%2Bry14APMNFO1LjgKfbBV7hsT%2BibXLE5spQikhwDcyOra%2F2h23Mj0F4xvW7pHMDzjHLxioJGU4MZZ0e2VieSBJRWln8u0eekazF7vli9fu6qRKyPn0T8eSgGMNdhKzF67u2cqlchLLjdZBZP7JUkswDeNKwb4IqlU5VCgZf8O2xVpsl5XMx3wLu05ez2y09TpC6jTtxKwJXIoydV%2FxdVhXj0GEzO8n%2FJF74ahsWvusaz3P2uZcoKq3iyK2xQlIZxZ%2BMBjkUMH4%2FbuLx2%2FsUzr0%2FCM2XYThpPQcqlhvwX7aDIa0ZeoX3OQJd89tNAaAeGcOyYuOhoHMKF0H8ERbof38MuOH0nzkJDYd%2BL2kO7BsKtC3ILeArr2MPbqz8kGOqUBnb%2Flh%2B9mn4MgtlfDOXb7a%2BCfoqo%2BegMRrwcmqBK13Co7UY2YuBYQLTryxGCZ1%2FC1XKwiHQw5bTOfTKRfo3rNvr%2FjqYpd05V1TO4yvC2g33W0Xf0LwoR10%2FORVLGomXWinmGxuKLCpweG4s%2BV5ROSTQFuFn26N4D0i3qVrtx2iRcVR2xOTdPE6V2oE9PP2vpuRvwipDHjD9PuQJkZ71axarOmQ0uy&X-Amz-Signature=03d9b19480aa8e866780f957b730b1534924684ccc16876737679dc37c3a1a69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SCUVGKX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC32Ab6m7rAS%2FNvnGr%2BNMEEfJKE6YMaxaatBaQb1QRlTwIgeBS9EKpIBkaPF%2B7L97GP1PNgin2PRa1BfEqb3rEDOhoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMNkKoqJGayi%2F74qjSrcA1hgh0S9yeHVG2gN0qv8%2FdnDDsfnxtTj075HV0VqqCTUynRSUQkGGbbbFpokonI0ivmQEzALb6py5UyPCyHilxdcnBwvT1zAQlvJpBsAS343ct2mE%2FTmXyq7%2FTn0Ht%2B7O874aIl5CjXSjHSChqnzrrhdymRcTKbj8sN4Hif0wNYTq%2BL%2Bv79e84zt3jNcPBDijPV7aN%2Fe1m83CsEkCCCI37j61zLi1reJ1ZnhpPKgspLl0IaGOLexUdU9e3bPdynZWtnK4uKKFW4Ka9EEKVJ6h%2FGC6gf0FMesbzAB%2B8DBDrpH%2FVbq3SCazQGwmpD0CfLEqLD1Hy0RrfZr8pQNck0iOy2zi6VfycymVEKLJzpeRi2w5ztA6fuoeR01INpLp1FApPZx9tDpWlm%2Fsf7eOTXfwFkfva7j4HPVFGVkBiPF9ArVv%2F5gqmdoThb22TjrAm1QiCWDLDCsWJsYJY9hIHRBsb3qeRZ1h7vENZNNuoeJG0k%2Ba%2BDy8okFQAPHS6a5xkATEFe9%2F2UbgO69U2%2Fv07ijVmqYvSvjhDGtqgGNVQSuSBZGpo6wqRllXhFA%2F3OUKiQgicTg3TfAy9ucn2ruVWa3EnClmy1oY3i%2BN298HVXPKmMLkdt4aLWKWeli880NMLzrz8kGOqUBEGpncywiOUlpYPMadzxCESRMv35bWtT4HIqRhRNCV5YczdZyjPSM%2F9JNNjAE5ohBjcltM1AkjRIkt3OxuTKtUqmiU2CyJECfOln232LoOP%2FmGHlNNi1xaGjA%2FA5oeqwC0Jc12wGrXXDIC7UIqFHkYEFs4DnK6ETEBGhEMtG9tA%2By8T0hou%2FQu9u3MuR2%2FQcaerHatHnDRTy6Y5NaefGp7RMZa6Hg&X-Amz-Signature=fa16d3a97f2fdd405dd0d4e4b1aa39941cae6705202e9137bb12066385307a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

