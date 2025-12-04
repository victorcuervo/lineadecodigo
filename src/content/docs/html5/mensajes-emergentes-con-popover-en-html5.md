---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665U46NEI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDC4pbVCbeKZDxOGBkV9IfPi6LugIcy6%2BNHEHK1LTvn0wIhAPV7WnaeZnuPb5mE6PzG%2Bq%2FZJ5QrS55EdWWTHzRYMxEFKv8DCD4QABoMNjM3NDIzMTgzODA1IgzY0quwDp%2FRWe9iNWMq3ANYd09Wnmv7WEZxgH4dA%2BQLzHhlooYMk8M0TU%2FSqVjGLuelbnwg8z2nU3hDeTlDh9N8kHTEfsEAwMTw%2FfV76Os%2BL2xt9N7nQBTLDD6MT%2F7QOnlwLR%2Fvqh22h9b0qnFlS%2BM9aqIkAC82FnHsUXf%2B2M%2BgF4NZzNoD6b06QjtNw33OfrQZ8lG3vS%2B2fx6j4vg%2BecNZfjB5SZb5iHt93iB01jtDcIeA6otBv%2F6O%2FtOcpFE19U%2F46obfVIjK1zOTKcvWeX254qWBEyk0JofBvO%2Bz3Yui8sBc%2FmE0kzfLGo%2BrJiFzSnRFfUqkBjvgCTyPNHZPqqn3p2zhTVVbHvC1h3q9pXxriUyHFeUJspBE9w6D3YU3bx7BL%2BbjbPvmsRH3J%2BZ%2BUK0%2B7LEsYbBCHiuUInrqyRGCCaL1yyLYvCvVmAQHBaw7grrXFg7P8E6r%2BDZq5U5Y8sHUXAq9asxzyXw6UtS3DYdTP%2Bkrc0ebNX%2FE2SjvbYQKDAaove7pfh1TeTHh9rGifRYq2ZyhgsGPvDetmjxRH6FfoMOGmecbeb07yc6T0gpoGSNmDAoj8c32FqxTG0WRtCGbfrounwuvEbPKxBICAsXNxMub2c2ggI0LYxIlfAp2G35YIcrCJau7CH033DDArcTJBjqkAbxeSTCgHPjGLIAa0I%2B4YJFVq%2B%2F37A3ZpPhKt5ruPNIm8wtJd8qFM0WplnDC%2F47S4tWatukmBijMd0mXMa%2FRDWlIs8YRxUwbIT1Yo0tdXBsNZrT0WB2efVVpxYHvq5rs7AvFlrbFtBNt4v19FdKRjPg%2Fl34qTJRkbljmHg9MZElWLjDdcPwMRVd9dTeNsiL9yCg3GPfY3UiVhBg6wOkf4%2B9PBidh&X-Amz-Signature=0f8f6efc225c120413b3551a2083e803910a19dc21bf0397c948259c83577868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPTGJXN7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDqJxf%2FaTDOhfY%2BMAxUnh5I2udkboNVhf1p17kJx4McpAIhALVO08lQz9YV%2BAFCyYKlcMF4kjY%2BV6ke%2BFLL6aiQABMhKv8DCD4QABoMNjM3NDIzMTgzODA1IgxiVpuK4QkkC57yZXAq3AOSh6huxT%2F0m8Gpr%2Fp6abSRd0Q%2BVz7ybfw6R6%2FCDZr6S%2B6l1cXV1eFtLsXm3Bxz9j0hWvrK%2FCxMrIUmesKn2W1XZMtCz%2B5wrmOYZVrXshPoxdKRr8iLiDiMPB4G0uf4h%2BctRPp4EdquTcK7h1kK1KxCHcgAnUhUHFDCPzV6VsB6DPPFetDwHmCaBWJOQDhfN40p18I5776E7n%2F1NQEJXEZ%2FXGHYWdoH5v52rdxUKIyEumtKoc4N0V0RLg5y1gBXzWuGrAf5W1HwP7z%2BET4h5v0txfgqLJYEPJUO1ga134d6aSn4r6XTc3FxfzNs%2B6RYy23F2hYcuJTLtYNXD6XT5iBV%2FAhNr7nFUTu1ZiiLgWLlsBgWXVUzR83PJSm8zaaZIGpuQqKjA9fGMbRNNzeXX7FSKC1uBhyRYmlkGNOdp4%2BO9eVrMGhV9njM04LirV4x%2B91jQ6CnNSTJ7wj%2FEv1xXYznaLPVQNN%2FEOvDTqgtgXp4bTw3BDcOc4yQgmyLbQJHLkWt146M%2FDZVrZx%2FNkU2a1UPv4Ki5%2Fh5lGXhV4z%2BTUcXASaeSIebo5Mg8iko4QLroAo9ktJeukrd7sTwAxf0zTDg8na2MHOmH7Y2pggRoq05h6TGoWYPNvAK6BPX%2FTDsrcTJBjqkAVGgPS7Ogg3gA7fqS7ybQ7jMNrXiKJn5MmwC01H9aLKOTgYapT4sDkHMJ5KZ9KKgUslTWZ535Ioqo9Kwl%2BwEt09k%2BO5tKhipCNayJMYum1w9cSSJiXtPpBYobCtrSC6DeVNjlWPSLXeE2Ur7ebLOEAl8kAhM2JuJbqkTJkw4QLSAjc5CQ3ryaLv0K3sWKLzcWdjYcINst0uMAjNs3FZ8cI3IJK0E&X-Amz-Signature=404950a0f2ce00e23d880fd605b1d4573beb2232dfa3289738ab7fc4d2e8d3f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

