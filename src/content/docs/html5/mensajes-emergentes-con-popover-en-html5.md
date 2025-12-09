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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666BSKEWG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETDnbf4gBu6D9S3kxWguJWmm%2FXJZVeyCEAWjffXBHyAAiBgseJi%2Fi%2BphnP0p2ABO1%2FzMit%2FM8ujgvXr2kSyXF4ZaCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb6U7gM64cAauzBbkKtwD75IKT8nNZl%2BT0zVN%2FKMBB9%2FgOhaHLZkm1pGykI4tMWGoTJrD58QlmEFWwQYcikyh843xYnUijJ0FXTtyHsgDy%2Bp%2FBta2%2FjNeC4TTEcEadtmsCjGZzg2P9SAPYpXyV7%2BRcAhu7gP9cJxs4noTl0M9rNwVQN%2FnmiHzMDxqldDWaIIjPUAX8StOKgoxFDLc1p%2Bz6P7aHBJF2GXi%2BDSx0gdKkw2dpd6WWY6IveaRSfO%2FVYFlJJcTzNiQQHCctjiNS%2Fjk5E3fY4Q2Vx0s%2B42n3F8fgcPwhf9NbroHUXsVLcEkSOuQ33t%2BDFQQhhrePnMQ7b%2B4g8Gy9esSoxwXwPnHYPPj76bIbO8Ofu91faklfAH2FonGnP0PuF0eri1V3HipcAwaV10NJ45dlHh%2BJWp17pE%2BkB9sboKWYXeuJr7QqEutqJEY2SMqzZyw42EoCu7Ds3Dp3aHzyZqrGTv9Y4ly6rE3FlDLUMIV%2BfSwcZ9jPP%2F0knuDXsziGYfhwOkUwvWnLSeLKdNrmauihp%2FTFwgUsMW1P6PGkEqLNX6PfVchwOe0KnX1c4Z1XSI2mPkKgnuFeR2Bj%2FsBH1y38tM4esI9FXnnvfm4SOks0%2BNbGxLoO%2B5NJsNhArYJH92DagXaQuEw8K3eyQY6pgER7xpB2ySt6toqmC3wIPsIyM3FS48cqOWYmFn14Y7OyJT4cJ3KkYMtgQzN8scHsQ7i1eK4QpNDEs77R%2F5yw6GdDDChuN8p064wODDWAtIgqUQ%2BQwfqJZpD7VqdPQE8wgP8cXayXmFhfdd1KaBf936sxostOgA%2BtlfIBYNqX71mCnj1E9mAbRCYeZdsFfRS%2F1yOOt3KrgKu8mY7%2FQIucNK%2F1rOWhDyE&X-Amz-Signature=c790c7d6adcf40d4ed14f5957c55fc27daac9d77b420afeb7e6b12c6c8a84ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQMJGG4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAe%2B97ACP5Bq9F0DdR00LWBkTKEdDP2V5lucu7vDR5t8AiBiR56tWJolsnAXnN21Jx8A8r7ffkwd3JxRAl6AWhtu8SqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkUNm60reUKi4Pyf5KtwDfm1xJbaJPWqXa0Sx9iU%2FSt%2F%2BWbUuANWO1HjDcWl2ARRyuP7eJahjLqIBaLQzXaQJ3gVFKiF%2FTEsME%2Bg9fUX6NViSP%2Bo8meb5IRAMcdXKHpklembJBUMCvYG%2BLxq%2FGX0aVPj6QAFavv0I7fqwkxFmDGeyUpS%2ByPdPsMVnSnWu%2FFVatPlW5OHBDHacHidat%2Fae8TiPavbft5n%2BtMUuZ0Hd557EnHAXEbfnAA%2BnDsoEXOgLSMCOopoqfQfo0yF0QugebkVv9pYbUqZn%2B%2F5eSZ1vQOgGRN0MT7pPgi7xLAb%2FAGNmYfcCvgsVbkvijIGRslL8ZYGCplN%2BqXiA%2Fn6g5zM91n3efTVcwtM0LP4P0RVMskaLCJgPswdAf74VVG9S35%2BBdIDFdfV9XDrzr3mV0F%2B1kjnvqPIeGLobmOGc%2F433XM3v4bkhpKnIHCXF6EF0veO9xPjiF0fEN2ss7iPniq05UperBNXbZJazUyYYWsCwaLv1pardbg4mIiDysNsmXAGfPt%2BPO7mpojlf4E6spcRmRX916c80i8d9QssiXIOESYlnWZFiAy22MsbWFf3bSG9%2BgDd7VsjonowQF34snnVXXrUR02tmqk5XK%2Fx%2BympDWQyuUTHWF7b9R8Gapg8w3K3eyQY6pgHOW2fVniDPGvaO1Bcykag9KlWiw9FvalBZTnMGG1%2FeAzcXKId5jC91JB744OOMcCkjAXQZyZk5YRRwLC%2BOwsw25RWVMlog7ldunm4U%2BHmsZVi7UOPxkiGFusM0%2BbK2x3Sc0onQwdTcVXFBK4DbVZ5bgFxdVVSvcYMO9ocsc8AERXGdoo8IsCe5bcQleiIp%2BeFZaiL8W0ZQK%2BSSfXog%2Bd8JW%2BNg4FKl&X-Amz-Signature=1b647a3c9daad84f73dbda5d78e6f0f7602a7f561fe6870a12fb1f2426ceb680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

