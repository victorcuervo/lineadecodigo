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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGBRQFJE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIEDZuJVPTmDobz8Y34%2BdKlnkfon6dnIqhstXZYqameu3AiAuc5wVntQ0GA2xzCP7hL5t35U5Vbli5ftZnOQy0HKR1yr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM%2B8DJ9C5SFsMTIJd%2BKtwDz978XG29gyTqKbO3vatShehUn0tRyn91Z5r9A5q1Gmi4OOS1rA5Xo3%2BoPiB6zmdQWwRCe%2BfI9OHPNKRXjJmwMJBvUHsStQBsdCPDD05EVbvRbU4cVlaqkzOR7TOL373ZvE3icEk4qeHjiijWwOujZi0Jj9Ph8IkXEvhGcl2puFGMkCk%2BKVw6OWmvIRLn4zuFX3HfXEAC25rlaxnG%2BQpeVoYkntFypQ2DvUKY4Lzr0cl8Oz%2F53soyP5wOp6cGAKA%2BCcKCA2uPzZzXBcDyTGTCQ5RxfKMD7jQvlpyvQFE5b5tkKi2N%2F%2FZ9WQ0uWoX8Z%2B69iPJf3h3skAjVGY8vEJ2sii1TQOyghq2jlLQ2s857irbQ0YV6C1JUaNQbZKcfZabP0XdG4uiTE5TGtH7dZptc4pUedo8N5e8TIKKO8HG%2F9uFihSIMHwYicV14C4Tqik4tbZX9tOLRYLBMW4TxC5xHRbZuwc1R2fX%2Fy8s55Ub46vPpXCentaYfceqYVs1aDNKT6rSIcFqjjrxZDKKhe41Y%2BYTsx4x3JJw0HPwVSCDId5JM%2FXiRzn%2Badh6gFf9Jo30eMoDSSnlQX%2FR7OjWhxRwngI23hawx9vRpz7XDIumI24Zte9DEVyQNg5tTaxMwj4jByQY6pgFqNFPM%2BC19eBe9jGxfR0wxFBpRQfud95jSt6dLUoXohjyvgvs4hkNUnEDg5jaj7B687tHGuGgjFpqD250xBnKKBCYZcWljwJnxHEXaxXiq7YQgJUR9rcGTeYxDFwYODH%2FoTNDf3K8peXC4cPAQGOU1CTXNQa1z0%2FK8Hg7w7D%2FGEDSqUnP%2Bzi0%2F8i%2FYr1FiaDaVyBo9yz0x%2BiuNmsxnpsFBICkSvuTg&X-Amz-Signature=d77c8b63d65a7d4af90d984968c6cfb3dcd58130ad1365393516603eb93e4b92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNRTHFUI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDDa6C31c1q3oR3AS0QCcygXtngRPBQvw1lM9mv5yQL1AIhAKjipCuxgoskctksWA5TNzkFT4lCnVOvVTup516j%2By0GKv8DCC8QABoMNjM3NDIzMTgzODA1Igzov4vKOMt5Kuoga5Eq3APp5MVnUQMhtubWnXd82A5L7LCUFWiak5k4hTxFs9Xw5BZZ4Kcm76w8kJo1A%2Bk04Zv5L9fded1AkMprywbm0KtuwNtigOo2MYeAJoMmXN4q9iynCQDf5ClFSehr%2FZRRbthbk%2FqToF4%2F02V13E4Xscfk4kIVc7Lw1oaCj6msQLWK9JxD89Ug6MhLsOemVnQ0PoX%2B72SlxqIsWeJPNXkdbAKqJmOc%2BeGPfxE1y1Y4TwSoAh8jNI73lp0ocXBm18rjqPWpyerjSQY1j10z%2BJpxiSUEOWcLrnhMbGY02ndbwVWRlEEFp3pTxKC8IiSZbQNsu9U%2FT5YcR02WyC7LPRdLxMjxD9v7r1DIjQzsD6zP%2FsjTQP%2B3Iigcolc5DDpyUVzKIf1Ex8VuVBQZxPgKGQajiyJkCG3nCloMCaFy0ARK6tDP0M3RzACjwLqFAUOmS6D%2Fh%2BOTPutYUI4zckmS4aQFSVgBCKlreP902ttHfGpeMjAW7tKl8uWtNHBBqbubD93T4FcexvhRhBBkm32MNwe4KzcxqEyOawUGlXyl75YULms4YGJDDWC%2BjbsYRfW6Z%2Bt3FbNU1X%2FaJSg8hPHj021sSH9AjKAnZa7nLx6FJiJH%2BpKBMF66POaAwa0AM23gIDCaiMHJBjqkAbDAdgZrWFudlqbK%2FvJBDhoWNID1t5s6rPcE37BLk7%2F%2BiyF%2FO5hT05nNcODMZxWVSl9SM3SNU0b8MSzF9%2Fb3Eol%2BSW%2FEDjFN4yhqj7c%2FGo6zTz9rmUCuKg2WCCDTqGgR7h95mlH56VCkQ5f17abJf81qiSzUDv2oYWikYk8emrfhLoz9Qrb6Wny9eg%2Fhyh6YY2v0ILJWxXFet7jvj6kaRutDyxS%2F&X-Amz-Signature=97745aec6e35879a2be3ab3fb84a52d6108c56ced6ea21e9bc89f8012d6a1081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

