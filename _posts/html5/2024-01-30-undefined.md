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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BCRHXZ4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGog0C7fxXcRvMLZIrDk9Z8EdISIU9BzDiw24k0Lmj4gAiEAhvodQawCYdlnCvs3eJYpBuKOUh5K5SimAbf2tEe%2BDWUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDO9%2FRFbgyfT9MVS9%2ByrcA4BCeV8XLd0ZTC5V2vuKvvFQKH0Ng2qtd5ssGwkq5b7b6mznVSpZdpHDzDpMFR2yp4rSCY74wANtFR8Oeiui2QKtWQH9z4yaYRosxdzAWmZqDkAG9YHheHXDE1m7vHXd1EuW61WDfWzmqkBUDyxDPYKx87to3ZyyI77ZciELSuCcXINUn3Ygu3AgUPx3%2BCzuPFolMhxON87Y3%2BSyBEGSr6E6brM3ChME1GYJRta%2BC5UerOfOXC4HYnJqDnWE8HkoYSLB%2BvBjJ4t9Bqs3gOJV9DKWNotpGfrpiZdr4zK%2BrpzdOEtseWk4HXUVdXJKuPV17AQs1sxcFzQZLQnUxXvu9PBHS63%2BG3x9XGIpolgJStSsk5cD9EW1HGa0TAchAW4wfZ2TOMP1O0%2FeMvyD0Ru5NrYbyxaTF7BMLYPodnXr4xk7aFEci66P%2BJTAL97wIDwnL56f7%2BvgxzBM6UrlSvaZqBNBLj79aIc78v0iqn3eag9uGGLtMjVTzNJ6g47d%2B7Qul40YjZ7S1aI9biMytsHuXRB0bDtmUomQfl27IJzRpdxqy2x698gxukWmokThtIhdWsypHGh4vkIrnTuFdHzXiXOTByHZ6vShTfLi4cIbIao1%2BgEnyXSxQeEchKfmMNbawckGOqUBuHeKr5CP5%2FgOHzR32yJk80b2JlffqLGDfrMLZQUsQrycKyXpOwD%2B8PaLaFmgR4%2BEsy6K4IQt6Srm%2FIEvccPSahzP9QvJsSF1TUkC8uUm29rvC7KZJfaKiGtwVfFjKZ9A7NV4a%2FMeSknq80FuNaBpd8i5a%2FmtaVvnlgBbaqrJQoeHMoFakb0SwAxRzh834KlGqOV%2BOvhKNOKe0Hajt7gCP2NGQvsP&X-Amz-Signature=36a678afface07fe32dfb2fbff9f27be937011c3e3bec8f68ecf9d5dd017494a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6MTNF44%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCt6W7L5qValUJ8MLNxHgE3wQ11KUwvzIk3o5bqXgwKXgIhAJteEURS8xdMiNYeQnoS4O3MCSKtbUvfpfbP%2BJLcUR5VKv8DCDIQABoMNjM3NDIzMTgzODA1IgwYHU35Zt3RieGSd0Yq3APkmd045V1S6CEyP%2FWYbeHd4zjpnL3vV85fpV8LDbX9pzWOR0plgvAjpLiSnZJjRPpZHhJMNVURsQUuLfKTqqw%2FfV40%2BZ7OpE4AVIfESXUB657t%2BIZA6QVtaJnZJrkk%2FCBXH6FcRo5IX%2FKTXiD23mRhv9BPuy7s%2BpaTZfel9cMyloeElZhugX7hFN5wDinCM4eyHNrhnT8uHkConmJ8qQc%2FyeEOsEgfxOYPthIelJOBnUNifbryZUTWNim6jH8AmS8PI12rvNdYehJC6N3aM2vAW6ARKu8Sk%2BcqGt%2FdDSWbxKmMeO4tJAp9tdPXV9sXAvOMCnzdAeQd8nKMogEtSodazn0YApfum8Angh5IbYlU6tUZ049k86vl3jZxLm0kqMlOLjW0bY%2BC3NQe0qHF3nVmoZpxV2rcOm%2Bhv2XgYNGqnxICFJNrkkyoT4%2Bgbqz9hWCeYFXeGvLDsqroPw8xQ0%2FodURcHOdu0geUn2ExIUXnVbCruJ2npoLx1kxdngZmGHBNZZIcowDLerCYr8lUZ9pHBlyGbVageXGODU2DYWY25VqpqOAAbNCUoI5ZI3odh%2BLaW%2Fup9%2BNdEC2lBaQeZdIShxU%2ByuM9he49G8Ze7077%2BhD%2F0TmyVwfl7SmVjDCl2sHJBjqkAboiy1fSxR9rXUuYmHTuiCy83htx%2F8r8o6yetMSrQwz1NdsrmQvjdfI72ill0DVSkSmSvDDgpZ%2BdjBLtxWf2VOQr7BudPFFtU8Rr1XaNC4mLHpleaTwJqvSlvKglwDjxgGzh7QTTsLZNo8izx2n6la1L4PS3aL9oEbURcDc%2ByJRtvpmoYGwKkgT%2BKfOwrqmEnButpZBqsgUuJZwrXgvKAdNqUKPt&X-Amz-Signature=04929dd8f2b83138948102365faf651429b07665b9a160985b4fa48d087e615c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

