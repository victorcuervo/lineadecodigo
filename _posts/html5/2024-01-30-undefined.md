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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LOPH6PG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIHGEhGP0udCJAYx8UGDyf%2Fboqg61Y6MascqUtP0B9rPLAiBCj%2BHXBDXjYHU90i762m0XOhki%2FZw51Vt%2FOO2Q8cVE%2FSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMdLnsI2kJYkQP3Hb8KtwDnkpxIvBVR7UJ2ZKWb32k4wriH%2FbEwcqetXzvtckb1AuMMLswrvqs7nwt4xS7blQyta4PN%2BOraheB7QopTzQa3weehi%2Fn2rpBxjSJ6dUjk9h9YavT%2FkjI3RkKHLRWASMtikbr3yy9FuVjPRzni01oAyGtB7UDOdRrghjdYApJoW4nkRLCK1Nnwb%2BaQ%2BrBPHnOnNe61AbeDFry9f%2FdC5upew%2BIOpgR9GU0OisC0snOm%2BlClfUWjqK8oBmNhP4rT05cANdbS7oqvIUzv7fcux978dGyl4AJfwMLR6ItDX%2BoxnD8xps7LkGOwDSVEhqDYL%2FY3ESoCjRXAB0Cid%2FFDv1F5NZYnZw%2BQnbFgqHN1SOAkeOUnzxJ4ydNHu7a18iQ8fBr31k5EvLOysOeQbXUvkF0%2BPj%2BAj3yOej%2BwdodeH1axA%2BVz%2BZeUcvHagVT7tGPJ4xmlG68Tb5MMvpJVKn698pZOiJfwlIo7wr3LCVGU9hkTO0pxAyzNEtyiQvQ605uh4g8eA94w0AGoBMsaZhvG58V9jWTzvnERmS2MlydP5hFEg67C0fu8aV4HI0%2FkALOhsa4ZeF9OkpHloUb9JSXSeWel%2FNc1W3mNcVjSfqk8E%2BsPjUBx8p0SUr65yaUyKcw9MHByQY6pgHNp1rlRdOATMHyqItI7zp60JBZ6nlUOmZ%2Bm2kCyoFK99AHNzm56XiQxR%2FSBW89PbGpKOk69Q0f2nBVT3zhXL6%2BHAo9uoKZa%2BFveSuvDgnogBlSrc3WpQ2R5NodHarQnJf%2Bw17%2F%2FVIQzn9X7LHY1agWVzKWBml4ApL59rkBnBkGuaAYk%2B3PKKuPh8R5cHh0jDyqMYPivnJKaFZb%2B9g%2FLjqiao%2Ff%2BN3y&X-Amz-Signature=f882d6dca22d849f44c7257a1cc3b13b3dd405503815c8493efee8f0ee86312f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTSBUF5Y%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDZ51KPYHlH%2BKfRK37lMaj54iMIaoffm0%2B7YE4uyINh6gIgWiICL0TrZrxqHl%2BpkdHzgph1nyM2WPiKNCQNBvW02Agq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDCj%2FFT%2F%2F%2BY0fh1GSCircAwBvUvggJCMuyLOOoZ2CXMXB%2FkUw04HJ2mCDwEk2GCKdikOtPFSaY%2BEhenksYpktHHqooYcHU0rJ0DU0DcnF9XnmrkpVyhoJvaFbW4jMwCWMCWujssFk%2BbrzEc%2FkXcqKa%2FvcwvmqkoGGW4OrOuvA15YFdL6s5Kh%2FxICGTyFnlAFU2s7%2B%2BpxRuofaEM5%2FGH1Yn44sIdO5uUhg7EOfntCtBz67LJ1eWUWG0cLmgCRgx20WNvoKeSbi7wTQ%2FeK80Hp9oH4kLPyULV9ByzdOZLKVoiw0%2FHbJMorpfDenxF6if8UztWhN%2FSyd%2FZCkEG9XfcLlhs7ZA0th5NPDsWZy3WAHLWGLXUV6L4957gm9hkf8WiAdkmvkTjd4UN2dQEpz5w9Fd1pPMw14mQvpV4VvEZhAPCkHqJ9xVv5FSzcch976g2orBuuCDG%2FkMeOOm7iw9VJDy3mt12h1kETWeNl7wVtnGGxN3VEfg%2FVuAEhHmUMy3noGAFP5eQUEYAdOznkaPSgyl7J%2BaEDklfTnzWQJjvqRK70EOKBQF3SP6lsVTKwGLbCYf%2FHnmor4g3VjrMnW%2B%2F5C11f2FuGebNcbASFknhCBZzXpw2iK85414%2FRE%2BI6Y8S5haOsPzyGBE99W6rtyMNvBwckGOqUBAr%2FjxC3NQ1p%2BuVdKikdvYy%2Fqjw4t9X%2FBhmzy94Zm8LTqNQLEROUDaGn%2FF7Lt%2BD4zxC0%2F5WnTQONjzhzlPJ9m0dwmPxs9V0VrnG7dkxCNUYcodnQ5eddRqsGn4SDMz8Wlve9THjvAz0Ft7DKQ8SWQnbPjMsgLh2h4SlV3zW6lN5po51CgAclKL8U5qQd23%2B0iemd0YWxXslc3%2BJmzyXxaPmipOfGW&X-Amz-Signature=a8a6ac782bd06c927ca608017a8a1d32dde558ff98ead5af0d3612fac241cd2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

