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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JMKYCGY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbRcjcAXOlNOLqG2EkzpwDsdc1mYcOXerua0sorWcDMAiEA0HD6y64%2F6DpUKTkfi%2FlfS514vH1zutb4dFqqhN%2Fw0gEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJyKeho%2Fd0ep%2B6ctkircA73CPOj%2FDg%2B%2BSk3Spd4NqY%2BS3ihPupf82sKmH6fdP1E4dh3pV0irAY15qqSKK61EpQM4L5RTY%2FV9U4EvZbaM7%2BFX087T8U7VVLi7%2FBr0duo0GL8UZvfMacG1IkKTh3IIs70ftAZ%2BqsAHmSDts%2BYaWVUroRYtzsCoQ2F2BJ1Dqd%2BL0DHQGvtXj7mNuIlKlulaS5djHHie3JE0MqqYtdNplporsLgZtlRsTh9eU%2FwunG00aGAYpRhrW0aoseMibjX7kl%2B6zppkN1uZNBGlFtbrhhFrkdSMmlXKpDBYa9t7VVtJrKt4VlVcXULlp73MW%2BeWd%2BZBLIxuyOGtJ7Dy18xleJviFDCu3lpayRbJ4%2BFf8e0jNYkeAPE1MCHm0Y1UMCR6Lo44SxXJR4gHJvFOOMmVrDRr5N6rw74Zj4JVJ285ysyef8TjyIl%2BPuwaP39XAYdckcyXrnDtI1KWJxf5HGV%2FaiA1kHJG76A9eLboK6egRqbSRkHOcJNJx9dgccr2h0cAeOcYBJGmAmmFbVmA3FM8cjrxIfB5zGnf0FXHeASbXPzIDcDLX64t%2B7yRggkz4vRoGlJOWO1XrnkVQ8JQ7pYDrWwtWS6helGZ%2FdA4G06Uc2AtV1qX4RwcWyTe5rF1MJHV0skGOqUB%2BvDzIzWyLffvwOIXFG1qLwS%2FJuQ8wbzCfRulXNxaZEsgnXyIJgN%2BQCiNA8UXL1PlUoN%2FJu7MceHrKEZ8R7R3JONxBcupEUr4EMj7NbtrfulUciXeajBdWD7ixfdY9vyI%2F5hUXq6Jp39PK06bm0%2Bh0qsCG4GGhVJ82Ry55vH%2BPxLHRT%2FAhy23VVj7jYV52OWjY0wpK7UtezKQYdQYjuEAo6l2gFOS&X-Amz-Signature=d9513a9576626c6f1120be881cd1bfae84980510b9414c62d5334cb0ad520796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAKGTCZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS96fsntKjg94VB4pOG6tYxdAE7njQdk2u%2FciArykD5gIgOK286nNm5g2Yh8HA8uVUR1GG8f%2BirMTcOaIormNzFCsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDN0GGv5rKq51vwC1NyrcA9OowCtk5RM7T%2BJBDjJBDqagD%2BeJ7iZMb2oEsLE%2B7ZssxTuUeGQ9wYEKP%2BvRC26UsrGS9n2XSEdpUG70Dan53uBuVXI2eC5hgR5FV%2Bm2tPMtbE3fW6bKBONe2PVD4Ttb3d8E0FvWlIzgJp6dkAQh%2Fczslv3vMfxUooUVZSRpgINQSgHEcAv9Q1cSY6iDsFoqniwjwGNn0XcmSQ%2FmZqwG%2FRtiEC8OSBVXsUZyXewO1S65kP2UiH4CbYhuV0p%2BqijL8ybxkYtkDMmXJv7719lWJtF5S46N0YsxX5SuGak7xR%2Fi7cdFCHNT0gMuOcRe7mYa1gk6saWnJefBoeEihsc7Hxym3JMImUskBlzCgauM%2ByVwWZj2UXzN6b2Zs8pJNA2V9%2BEc2yZwBs77ocwvNaCq7Fwn5LzYpdpkT4NgEo%2B9YYZzg0DX7vHhCmIspxlB9ULsaek5GDpnYsFakyApz1AfkDfTxG7M8v2tQ%2FQ7FH%2FEW1jO%2FATFNfN6sVNuA%2FKy289QQWZwoVj8eiPa5bzYf6DbDJDsiNbIXGWbK3MNqeA%2BndsavmFlzrV2gcRmT3nsyi3MHk1SCHzDeHaSdN6qmXu0bd3fZEJ2DhwnKuC96jjjmwg8MsTYjrAxeFV6XmRkMNPU0skGOqUBsnf9hoAaJIMj5IjMULyqfS0AdTyldb%2BqylaOcT%2BovAB50K8JCtQS0hDSwK0eOj9UnkBLngSJHJOlXZ3nE9mV2ktO9%2Bn7IluimcUlVaKPG60wXq6s8oDXoIkOaJsALWhFKNssjIzC2EWVxXRdcgTkGioGNW3rcBGwE4Au%2F3DdGJSCMZUgenZPLReLoWcGanv1TJLtIDO6xUOt%2BKjSB25zhGhDrs2d&X-Amz-Signature=b3a65ec0983d4ab51878d8ce021bdeb9e2526a67373f61e5c90fe1d5239a0167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

