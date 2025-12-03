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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OT7CZDR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T151626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCsG88jj6RzUqH%2BLtyU9Nhe1LkMQQirQsRlM%2Bc0jLVsJwIgPM9IKvosiEAbEa%2BrSPU6eFjRpRnN5a47szq4Fr%2Btmgsq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDMkBqm6HyWiRcDvu8ircA5wDmxgUqqhSEtozbkhwAWnEALrSoqPaX94Jdm%2F%2FXLon7i%2FN5i%2FxnjcbVRTvMxjjc7IfROevmT2HXedsBFiCkjDH1pPP7RSEIndi1sRyaxgR6P3Q7jLVGNEui4trI9gO9VURq08%2FMIOcrMY20JbzgPJECVQwZa5y3THsU3o2dutjtEqKSpGyFbtw1Wq6rEdHE83CbcRXUcUUQWmmGExIwgdNTwA9xoRT6zQMvnzIQgLPg8lvGqdJVbkT2QUTzpHszJU3l5%2FQrJhpTTpe%2BGWIPFYQ3rgPaMkRcFj7DwcfHbV0Ofhc%2B%2BvIcBWVRQlUR6c3%2BuMY7O1j59oh5Hk4wM04JpVIenh6IhOoU1ct63RzpYMThPImsUtAFRgPsGWYbrTMjrWIe9jq18DUxTLO5oYSUUh9vDbzWRURKNZQ49rpm9%2BFSX5fJdUJDoeQ2JR70ELDFFJ399eBF9BbRQ6%2BTr0PvUvmoMlFf%2Bk%2F7Ka6pAveYuLzTjbh6B4Sji520hIELbV%2FDhr9RplNZVpTsJPDuuYnymiqUEz9m2oAgvCnpTgmFFt5HqPslu6n%2FjChHngjjBw1bfdvt1Si421fLfja2zR2xtBVQLIZOSxrYoaFK7snvZD0TlQowP33i9Lju3ZDMJumwckGOqUBkLYF5mcozAjK8QDJqiCJC8QktxqUtXzqTYAxA5NRx1qmbIM9MRXK%2Be%2F1H1jvTJAuCUilq3%2FQUxjeXtMpTfk9I%2FQcTkwsjSxUWDOpHquYcvgAodi0jMgvPIARJhBkuSjZtwK2thaOoW7anQjffcIulAGATf4DboalcwJWjVwSrVY2KCGuXiP0z52hNq5TR44octaudqJ2D23x00%2Bn7Fou%2F3P6i4bh&X-Amz-Signature=04a1551a713235a63880a158a6e43a3ad8c33aa8d78d7881546db1bb3ef427ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNU6UNOP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T151623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQD6DIrglKEGyQtl%2BsTuaqzT1d2rNvSGzY26AzaL%2FI4yiwIgQUoQJMjcpO8yZ8QwFkj0145U2tYQ3JcWfxF7JSevgbMq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDMF3qJnL0EOvIpo5bircA0rhbf5ldYMnkWHUVNC8Acr6LqfrLp1IfwOQvCjOpnZgudBv%2B85AydFyKIPMkga6WAc%2BkzVj0AYQjJnRzYk345M0%2BwI1%2FZoKi8nuwyV5IBhC0yoRZfnZcOwaOF4N4IY7FWmAfJ4%2F7i8cBw%2BDHGNhiFisLAIHbGz2%2B4Ams7o6v%2FLtMXvTYVjKZIXxn5CCevWOkvmK%2Bt%2B9y0Cm8prVX7ENQReEbO%2BPeSSNkhL1Uvl0RybxIPEkc7W6c4428aBQNx79DRWK%2FFdQfEIMyFXqXQ0kv2Q2P10QUaBwYes0FOLHhK%2FOcwLkOzRrCOd0SP%2Bog29oZ5k6eyMYyjpTiUS1MecLHcgjrB3SKhMLkg6Ce44%2Fs6MB%2B31gwtFUDtAwqIcySODBaeaZ3ngHI1rPH6UHf%2BFe9D%2BjQ3fztfMwQXYuNON6taXV62qp6jcDNMHwzlU9I6%2BCPQxyEgUj0KxZvsauKpPRKJFc9VYEXiLElKGi6XQSVz24JkAf7bS4HUEOOFsdK03MxXPnj%2Br%2BskDYVGrTe0PCUr8YQFrW%2B5JPY5t91g2KTlIsVlc79JIvawIJAOJLU2n7Wg%2BkiVw1K2XbBsvoLCb8Saus1TUkn%2Fy3yOGS7YKjSOK2aD9xwtPd1gCz62pYMOKmwckGOqUBwvi2jQsIebfs4RuaUFTqUsvy0fEfdgtVNg91DNKmAgkgOrTHdpDNkC%2B5ksEUMLqYl5DY2lS4pbz9t6phSiXLexviKSfg3zjKbATXVsY46nDmDl8k5MTltJruo%2F8nUPId2r56apM4ph4SMALw0cvTYHQC%2F2goBB2%2FlVNwnEys8ffl0gZ5HSKxq6m4yUMi4ft0xC5UefB89roPC3RYt1ING9K%2FqLUM&X-Amz-Signature=e811dbd30f23664ad07d772c412082b2a4c6df4b4c023492b1a85d19fd28d900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

