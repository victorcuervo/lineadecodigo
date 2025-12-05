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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7OMPAM6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq%2FSdzsztaumCvGKyDU5YAUWXc9Br5olFWISW%2BoFKLcQIhAOJovfA%2FxKtF4usCabFaPI4flZMwGCrxDDPmnw2rqtVSKv8DCFsQABoMNjM3NDIzMTgzODA1IgwLlxghvKe3DzByS6Iq3AOrFeXWwswicHNLuhMDPhhH%2BZpO1UaF78DX3npI61AAAcF5Rdj1CERORi0GYiBhS%2FU4HyymE%2BvB85ctkSj5CAIh5NFTnEz07cHxX9saJJpS6TJ4TPZut94nms9avEHiBZJlSxFEWjwq6kz58uoY%2Bkbxrk2zVaNtqY6tWVZ7GdpnmwWmh2DovK5o2bSJq2%2BztpKJykRjsgi6PEgQlyJJ7m1yx%2BJgnmqdx9jCemKXc8PmZ2xhIIZpFKB3zMHiICIymrjJrjvzOf%2FFU%2FGT7JgmrE3UJR3uewYB7uJ1RKBFLfVH3CShbTsCkcJlhJNkOqILJ1682YHYLj%2Bk6Qz5QRmGiToQmoi72m5SKcCpq1k7VMZw%2FWd0LOw0gbqypvlnucXRrpX2sGRr%2BunRhnEUH%2Fc0U24RjKcEyBL9%2FOXOQbtLvVd0GbWVnZ7gI%2BfvcjS%2Bv3mokdLJCehtFDSn36k2jvx9fnkpRBY7AmGV59Vj7ovBynYWlVF%2FH0bdupyF5mvDd6MRxo8XxPLDMuboUnFZ4f99z54xJG1Y79%2Bb2uuCkyXiE64TAi2iJ4hKAx2%2FxoZUq5Yelomsv56TLfSSyog%2BmJ30qwsAl8y3QEtZrybfrGBLw3Mv91Dsbr2RMy2oZZ9vbTDA1crJBjqkAWCFsUveVpOoNHOpntTsvPdVxeJGC%2FCx5gWj8reNQIyuyIn4uhKFDoPlUOAC9%2BP8hU9R5N6%2BfWN6VvQDMVHOSPqSNwf2HMLJECneZaRxFMoKywp2txq6cr%2Fg54CUhuVjwwD46keggpYfEY7EVeL61Zb0OUMwtwA9NevCLn7l%2Bm9sQfslOLZQtK6u2Iv26FxefQAV1amKnh00fSGskjyjicHtPTiC&X-Amz-Signature=f9a8015332d7ed94f653014450337354a4e5d4acf9ff580cd1eeccdfdc4fbe07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3YJ62BC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYRkM8Sn7tW%2FgeFkx3koheMlc73Pjh6RNy4c6c5kCwuAiEApKkuquX4lbbC1vrLtokn7L0DqBmC5lNBcanP%2FzMInakq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFxCeOzJOY67tkTTiCrcAxf0ccThz%2BvuBifwRBowiSLGOUkkwMwPxp3K5fYVFmf2f%2BgaZtk3USRcTGeuryAeOa1sy07HvLqwp%2B%2FrK%2FfffeiiEE38UjmCfsaU126FjNOAN3FLKan1N%2FYjE9607Hde%2FR26wPQi8vKEL0H7RhLsQ2ZHvq3tG0A9cKtRUxjq2sKKbY6M15%2BdruGJfKiD6Fm6AgGsD8zaGMMn32af0RVwoLocaDTL901LcvsoFsTZGJ6S2MxMjolVLtMNI68v3lBfADQTO4U%2BW7K15Ywh4%2FxgA1iId84rUfHzAwHNoWlxSCyQFsSR6PsY60hvTg5SS6O%2FuvQAYDci%2FzMqMPaRHTpAQxKnA0b3I2vR%2B3CNV6eM4WGHHsLFcAhIhOZseQUQg7YNldsRExPgXHGR8pPIXk3SD7fOdbcRFt0D1deEsoT4AP8AK06z6eqLPLIwkRsAYFqLUnK0HDOM4IVWRFQtarLCk5TOpJq4XpZHOcKxx%2B28Rwd48HwA%2BNcnX8uAu6EAM%2BpY2hSDlHMtMxXPSOoZpU9EXq48kbWkS4bR%2B%2FqsVVzaUBIWRrSjLJAZiy%2BNp0zvcQCQ%2FjHf9D4zkXs9XP%2BmP%2BFTZ3wOEa5xcPA92gah308f4%2BiMj2yVig3vydCrjg48MPzWyskGOqUBiQt2ROf93Cx2u1cG0x0ZVaueEWDbunVLHkDS4m0xltpZ0JXXR5GLRgtBo8PnlBLKH5X0k0Kj9UpInN79o8UbNgATrZd7PXD7ecV5hfl08f79J0xZwp8aHRRGtxSEwNbUWmACL%2BlNwXFg5n5L3wBHJLYmaeOn6hwWKrKp5R2MCunfbJfpkD5soknKRwsi7sas78J6IbKGYIiXT1sEAhCrJ7KArb%2Fe&X-Amz-Signature=65879d3e48490b572672dd71fa32779eae57da3bfc9f76f36c60eb80243d366e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

