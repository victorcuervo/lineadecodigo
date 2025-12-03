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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWUCTZRL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIA64RxUnuF4wZ049LN2DxtBBmThHCi5%2B7Yv6%2BqpOSABWAiEA5VWG9I3MzogGHqqmWbF5wOU9nHi0%2FJccbPBMslV8uocq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDCJIBd8q472pIu8e4SrcA1Rll6TJPWojwQYm2yjmtO%2FqVMcprcl2%2B%2FHHAFPKULYCNarXyXu2EEw4vzKBwEzklRRUuk0loyb%2B55A8jIWdHDF2CzBjaOmu%2FqK6qjagiTybulwn2L5DrhLVA%2BuP89PwqjStJB1JoKvKTV%2FRoIRYfXCZhM7w8gDN8sLcebJqPPCgFt94aEHdYq3PjL18vJxt7al7iPP1yJya1dE5iz%2Bxz8ri71izOQmZ8lHPKenRek0N%2FJifYD19fa9gF29RCcWOztjTd2TCVxYeqII9urgubPhD3joTkAtC6tTxomY63zu4To5dX9uGs%2BWb1GxfPOAACtUgtLpNNJdKrXVsWr0V5dfsPk%2BQZnLxVFWlFU7KyJ40I%2Bxj0VGtstlT6bMGFff7TiKpX20en5TGCRoKe2xigYHpeuTm95hY8kvxN09hLd1AYpB8U6K5dc%2Bcmq83HmfM7YjSjTF1yQ7vSSGGQXoDGVjrMCYoX%2BcRqV57Iyu1j7BztELFMic1i%2BFV7iBRBn6dUqseNrT4mncA41e%2B4ZyrFa3auIOM3SpKFHOXGuWpS72ni3wOBzRopFrD6LFyNZEnRLt42nqUq44gLKneRbncQ14a%2BilSq7u7j6h7yNeHc0TLhT6Yr%2BSagjhh2vipMO%2BuwMkGOqUB0QXosl0sd57mkqd9aIE8KAV3X2jacMZam1ZnqgX%2FLj0yZdQ9%2FNU7renR2uG70lv9Xcz5tYM9pJhNHHJ9GXs5u1ElxPvf5zlaPzJnV2Uad9WPPoRmpzxJPDrkN%2B7%2BUewebKJGIwl7XTkbeEr3E979KzhunY1yMgzo8vxFAE1Tcir%2BD3wNPKKMNhDmptBIh78AEiUw0f6%2FkEJMmh3ewDLLiZa0diH0&X-Amz-Signature=5a18702041317ae357db69f4d74c356b9c94d756cf8d7cd537c70e5e17a8382f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3FNSY5A%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDxnM21Y9b5QjxDe0ugfJgHImj1C9S1HhgBEv%2F2HbyHTAIhANUq9VAC6dQpMaT0xj8JH82EiyRjxgMMTdJmMmgvKzS4Kv8DCCwQABoMNjM3NDIzMTgzODA1Igwg8D8nzxS%2BFbGJWzMq3APGm3UKSTvM5N5EOdFdoRVhzV5vIKF7hJudsACZ316OJWEI9gwa0phaTW9auvNXRUMcaUncxr%2FAk4uMrEbljzZmHp%2BtaY%2Fl7IB1Psq3CgnXWo6lbH3ErPJi%2BvSge7oLNHeL1ArCFB%2FKtfVVzZJBFiMUgWxyIVb3J3HiHt7ArcMAr8zOuQ7XBoLcQ7%2BS%2BkWPMHyxsS%2Fl2AWQBW51yZp%2FZEurN0o6vVSqOazLd7VyWKh%2Fj86ns5ZkaW%2FvLud7gGttrp%2Bip8z%2B6Nov2oV1yxWYIMwLOdQVyE5wvkCI02bNowCuYa1wu1anSkneegLs1o%2BsKqwIiuPJX4j5VqJr2KyYWi06J1HMVQEYt7WKyYimUDK0TbnUDiwJqVNNk41k0zSSA%2BspPAP%2BdfHMhVTLilUOmU4YW4UOMPXBqsa4beJ1tEVXBC4eqwDiTELuIXzF2eZziwZKK40yMWaGUXZiCq4LRT9vrrn%2FHQvflkgHhhtZOzXNw3foC6sncDxCzdKAsKoRx70odz9e%2BaY5JSE0IOFWlwtgiR%2BquLzHzRmpPwC5vk9Q9BK0iBdjlgxdBI04kCUQzwu4z6hwryyMyLS6bXGBzcTwQ%2FCA8wupeo5FoylGkNnJakIi1tfDP1DALH8iDjDVrsDJBjqkAa%2FLyLuSFiQILMuN94E5KOpAqOetOxY1hVsbFMvlGLst%2Ff%2BLQfOyEU3PflFaG1ZpxMnM0lOlMkBDzRM9Qtlo5vGgZt5TP%2BukT7Qss8wcJYSNgUhzPzavHpzg7kaVeucPO%2Bpqe2t9VjnvwQWyGKEkA4JoS4bU4mnI4gA5ha5rtWRuYMcfd1QgAC2oWcOltH%2B%2FLQYO8RrAXsn2oSjeo18ThPE62uhP&X-Amz-Signature=8fa04c986adae927f5721c6c175b880d6b2f0526f9066775cf41ec96e040af3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

