---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVXY6M45%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDSzBkkxvaVlgw5CkoryiN%2FzpM9eA%2BFag85hyCTx6JkeQIhAI6TP7zTHB7NkyyjaLPfoneuFMwzsEgtzgta7WFnhagGKv8DCDYQABoMNjM3NDIzMTgzODA1IgyDT1947snX5OHwGjAq3ANcXIOU7HbCpsOW3GnyUHHv0TKC%2BiYY%2BX1shmngjNwbtrkGtU5Z7rUxVqSEU7GX0trlPpWDkW1ydGivwbYw2nzxfqRZ6pnYUvCZUaAao%2FgyJBgFnmC07avBzO6qVcTZ5z715gw5lm3dWetLQ3acBr%2BWZt5ao7OOsgCg4wKA5lZHSgsf5fpbXpzUSZFSvbo9szVpxxPqdZcrglgvQasreR%2FWfm9ml88rmkLqVlsBHSanMqSFci42b26M9%2FcuS0XoZTL0L6zxeL%2BS8IMtm8bZmEN4TaKb6x1dwvagVu3Oy0v9VaAZWuONtoTPeWW%2Fav0rfzGB6sW%2BZWOqY7PH0Gex2xL86Q6WZTLnO9L0Oi1fKh7f4FwwzIE%2BKn3Ydtdt1aPTT4YO7yOBTZ0cuwjSM5U7oaAjtiN3AEMRw9%2FdpNXAAZ0hQT4fYLknSqhpSTBH2Q6%2B2rDcnPzVOL5kZpa%2FL%2BXMSY3voXiUfIAa33l9Y8DAZLrJtV4Mk%2FxUHQires%2F2%2FtLWw6Wu75kUwkqpBN2wUpT5nlhnQvD%2BXm67hQdp6iKQfQwZwr%2FsiJ915exJvmfYoTj1VgpZuZGfl%2FqWCpwI%2Fhu4%2Bg2kI4DwsSgQjcr7%2FqM5dP3qs1ZRJjSXpXe6dNvL%2FTCxvcLJBjqkAW6jHv5yQkVsc1%2BhjSixfpFfaesSKlIiVQLXzONP5nGYBJ3%2FiIFklMDh4EIsoHF7pauestTKz53tT97%2B3em%2Fl2OJOm%2BZqvq4T97oEZ7vCr03E%2FmiUm%2BvlU1P43wu5HYKiuiLeNsEF%2FVZfZ6uF1LQEE7aHn7v5V4BTa86iZu%2Fe4%2FiT4oI0GyVeUZkvVMRTsgB8%2Fl8bV2OmvM5NtPNHAZW0aA%2FIlaY&X-Amz-Signature=51682c01f62e941ada7ca1539ae0c284459c891c773fe3e5f6edc2111ecd06e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMPOFQNL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIC9lOe0vAxfBCYw%2Bot2YtI0lexgniSaKt8Z4PNBR2BK3AiANKf26j1RDrB%2B4U29b%2BrzGxK8UOBj9XQMLf9VtjQ2YVyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMTRA8cTPvB0w4d4EYKtwDd52zuf59g2FBLbN0xKcom94NFQBcN3F6lVNEArhBOMVK3%2BkCY%2F7uQBz0xPvtcZGBy8AYKt39g6tjF1f4GzZiWnGKvgC2gPOdBoqpd%2BtX2t%2B%2B%2BB355qL7xmjjOHUXvUBZAKqaXfPit9ELUq9QjH8gzh4gLJCBubAEREiZnfT%2B%2F6PqNNaXEmCV468cFh7GNFcT%2FQoJtGDzG2JtuA%2BwEC6Uc20Kxq%2FkznNuSuvvegtQWeadokdsQ4YT7Y1weyvYBzS356lmQdY2M%2FHxnrClzyobb2SHJfkVIa%2FKDQLKA35SSsuolKrU0%2FsogWpds5i2ej%2BWklUmM3a3w5kGZFgJ%2BCMkswiTc%2F4QIyOmakAearMiAvXycAk69Qa0uzPe8gJCyBN27grRIIhk4Y%2F%2FuA%2FDVB2tMyeVgqpZSKAqLgw%2Bk7xMdTVljYC%2Bf3uUMaF%2FhnxY8xsTmK8ZPCiHAEM24eUgSYQfR47OOMyEdjqpqEHj84Hh4Ql%2BwRtPHKAbSgdEBMlZqRU8EsxCLC5cj%2FkAcaWf%2BSCBvM746rgi%2FyBTCDksDjF6dta2oOW%2FFtEbcaz9BqG%2B0ZiFbbZpJsBPmVD82FXKOvuzHI%2F3jcz8uJSvylyoSQUxEKv6w%2FAUPmdxDBr%2BP44wrr3CyQY6pgGkvXKnfvwdklM8y%2BFFMaKqgVR%2FdHguvdYVFDve%2BH0i8GS6R%2B%2BWofdtItaL6VF3Xj2wQ%2BBco0tKUww4hKxOc%2BJ4wzGTySNjUNOEYo0WQ0sm%2FCvnKzEc8QuAoXUZxpC7wdFERk1n7%2BnjARLwWhwIEZ%2B07YbA%2Bd%2FoRsqbIYr8klX39YVJRNSA2xD7RaqHfa0pXfyae0p%2BYSC4o4m%2B45VkfBzMjuunz4v%2B&X-Amz-Signature=372c3f12e63b262d355a43bb353a501f2b1b81b56cbc3183349180afaa123698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

