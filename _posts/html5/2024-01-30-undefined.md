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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKBXLKY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T171654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFUzCPSs9T%2B7qlxp9IPQAXx2Rb5v%2BU3VxIxlHPUHFs%2FYAiEAwwE59jGH4gC18bq7Hkxm0HYMZojO7DQBcrGymG2cUf4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDAoLTCgGtPOZInW6nircAxdSiUW6LKGSUaGR5O0dWhGJomM6hDBYWsRaylTv0TWDVJ6nhFW%2Fsrbrdmv%2FLyxJOQWbcyj2Tlk%2BeHM0cuhuF318ErSmwuDDQTwCQjl5TzAY2UBKcvmqWO4ASbq6Z%2F2rbQaReyepn8PdBF4PFbbBqJ767cKJWaCgwcpFPtcZUa0RYTBuMUMHiVkYKSCf75TKrr%2BfQuKiXETcIV2lXSgxOdECzMYBef8XWJrnYxd8GeeJ9mLxgAQskZy6BnDqPPjpECeCXr8Ri9lEZouJVRU3LABEwhCf2RvXzQzxR75%2B8elAU6RAOrdac1vJNLXzIvp%2BTikV7RRzAe6J2r1cK8mA9xWKxdFBXkRx8L0jKMePXi8uT00%2Fh5L9Lvpss4SBewqi%2BnLwSEs%2BNGUWsWlCQHcdy9e3zFDE1ISFnSx9Hu%2B%2Ft8Y%2BNIP8qGY8UfWgpbQ3zhCjk6NbhFBVDXuigkuS4%2FhdHfdX%2FEP8EF3B%2F0rE42iryTyYh%2Bbkx%2B%2BZ8cgg77TdHDb3Ps6Rk%2B6LfKY1xd3IzXBpPLtBDWb%2F8q0vEv5leLVU%2FuLc6j5YcRF8o5lziYu6ejc97kbKgUEi%2FPOrhOcXY6ST0JJMvMbAWd4PKRM6GdvNRqLHFfBlhCX8V3AA4s4bMM7awckGOqUB3NSwOAUuepm8TrTfwgVJzNuKCL16FcfLxL95XsFwIrts7DcX1ofaepFQuChsQW35eTAx4G8ZcGqR%2BKLAeudL%2FtRcsZO%2BoaKaJclOeTTJcBSMGrSSGzSjug69epM0%2FuBF5XY4ZTJMApxkR6hogFWdpZi9OfSOVYQjacIPE%2B%2B8UD0dEPgDaGnqjM4cwWsxDLVDEviK08oLgotgYrTX8yq4EdN%2BX6Qg&X-Amz-Signature=dfd5dca4bd17ea9bdd7c25f2e59db435631249ef26a0ce907f128657bba78788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6A6JRYG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T171654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIB6sfCt%2Fv1fYx1imF6XMHPeqUEf%2FKBLraiJ6nZupuuAUAiEA3l2WvufjJyQbweK991Vcmf1HQyCWLXvwFj5XFNVGw9Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDA48ndZZSzXA3Nt7kircA2dXcu%2BzqXZBUvKPhhOqsFJm3TM5nb5fDV8SLTXPsHmraIuPWchV9XIY%2F6bAMZ3xqBLjbLqQ5IUCX1haauwIg3roixVWIwUF6UTk%2BYdAiafmgdFKYV9%2FTCmtXIy9iTRJmXor2yfVjOy5bktIFdhTrjYO3vsEr6o54tWlhkgSIm32Ohi%2F6wZYnEZLdxS8ytODCcABftev7TdCiBhbYia4x9oQMPXWL4uq3lIvu%2Fgj%2B0PhR8cUkw27mEpQnWA0jMh5f4BFCXaLcLced%2FqTfnk7V5mRmebE8aGEEaRkaI9HMMphqqEDM1v1qgCN0%2BXpUBuuDVXTmT6BnMIU4gBjaPBZ3De2cfjDXPwRLCkZ1JGVpsR9O%2FwvirCo2psCTh7fQGNbY0mRHe%2BM7ivCdmf8xaG0vDz3O5TLcWO8KCCRNfynKakVZ0o7mY2ynnDJvLWfk11ARq7sVH0FM%2F1Sg%2FlPxhjZcEmfV69LS9wMesfp9uMtp7c2bc%2FVvlrzOjfPkh1U%2Bx2CC%2Fgae15ozgC90FH%2BK2Uzn%2B5q2x9WcXb0cv5SbAU9dbfFfcVWqdm0%2B7P89f36UifzMMdYBYaf36r4CKn6%2FdAMYOjFGDiHK1X3BSxBbeKxgL7VE%2Fe%2FDjay1nwer6G9MM3awckGOqUBo%2FBJ0OUk8IsNnWdWbbUOY13r0Px4QXKZPaUmSiWVFZAdhzEuSXryMIm1rJK7WQtd%2BZElb8rseiK5QkjZ%2FZ%2B89TKjyzHYQvjp7Q4qhZ6g3hTpA8GYFY27I0Dd2toSJrRda2IRRwVdUs%2FstdJyAlSW76BjA6IVGW9Sac%2FifrQU9ezILpfmvY6a6qHgCeTDc%2FU9wbz2gtqgHwKsL4dOF2c0roSlDRs9&X-Amz-Signature=d669945521c6f11e32c1af900b64b558821e79c9818212c2c9e83c105eaa9661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

