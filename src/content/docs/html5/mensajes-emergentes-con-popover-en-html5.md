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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJWJBDTB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICj2zPzw3XtQyXyBQMUooXtFvyFFLoOjvPTZ65yzhW3vAiEA%2FAE383mJGRGCLD6xdCy4Z8coj4ZZhnZiK58A%2FMpD0XAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC98TckeyoEZIszsSSrcA0Dz1s1rFccI0npmkAj3NP6%2F7ZYzADzZdXKXAln52O5fsXwC69erv%2BN8Zv4IlQmSpAYEq8pyWW7geUnofKcy1ISXFk%2B3HORLmoWVvuKQjvhyDVHq8A0QlRijg2hWaLOzKJ54IC%2F5IZ1cCp3A3V7VjW9K9XqxHWvW7F9iuNkIQwzomkOFvtvV5kzddPvY6pRp4aNG%2F1Z5WvG9WmdctpvBtM8x39sikRwhnnu28WRYgm%2FRRS618qVZJ70fMRYzlHVfrwmZ7ZL%2F2E4Yp%2F%2F2OX%2BT4un6BIa6h6Wx%2BweJbnYfD3TttXnEedjY%2Fi5oKFlfkUpFcbMKng092AvGjsnGZwpQg8gz3ktgWSkSzkbKkUSMQWCnNNM5Xdpp10JfNzM3kvaHV0oIruEEcTX6dCwKEekMHm4uaPJIDZDrXUZV0szvEgIrAragWdlhM%2BznhZ49m8gdG694LVEEYh0RvXp3SHBeuuK%2B5M6MQw2tULzh8WLZxzoYYtZQ2yPc0u9hIDKoiHAvGc5EM9ZRqzbirpdqhZW4sIB82d8FuhsXy137Chb9q8dCVKbubpr0i7aYRERB1zHnn4BM1y0USn7h58v0rDkAGXlk3gPfoV4rd%2BYe55zpPV7OspvGcwfg7dRYNDlNMMyd1MkGOqUBzEqKVZBh2jaCcS0NpT0Ob5y2kjB37bvMW0SpQk7CPWNie0Bae1gV7ANA%2FayAlX1vynacZN6uyFj4C2fNcAZT6lIPYVJVCYersvNJZk76hktaSzgh2GOc%2FPAqZVYncjFJr1vwlDp7v96aLu9FobMG6Q4hodY2CGIz%2B%2Fh4JzWDJQZBJJxz2rq%2BzrWYxH9La2qZKdeb09E1KZD1OSEWJGrO%2B8nMg1s5&X-Amz-Signature=4af2fc062a37019f07d5e654a2d3893846a76baea9518254b3e9a96509d5c7a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666BP4TME%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDR6%2Bdj8ha4l9dXLeyRIeu8dpCxaPVnVvqR6%2FJlzAWYRAiEAhBbFJCmG2Q%2BiSf6PMMOX5YQU4XkUsFAaN%2Bgyu9wIFgQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeUHn3UbWYwOrKDASrcAz2tgEN%2BLbqgJnLhfT3qQyxoDMvDF33ceIhEQBDiCPfb4p3V9%2Ble5LgN9mdQST%2BWIiVWY4VyZ7u7rt508x5Uc4Rk2QCVx0dUgx5sBnBmwXfv6I%2B34UbUG9ORwJ3CssdxeFrRsMp1UVAMCf7KqnGKNuV%2FJFxTe0rOqE2N1Hg1C2uYBcc55y4iygnL8wvFM%2FEM%2F7zAQFxovovMm3Z61xHzMbExEvWTJ8WDNLR%2FEHQlTA0Qdz82lk%2FgbG%2BPkSPS0gQbW%2BfCzz6Cy%2B0UlNpSMMDUPrb1Zq8eOfyBnODaHnqKJnhIsTi4UENwYogKyyJXj4%2F6XlBXOpFt4vz7LsmMCCaaQlJIVlTqpI%2FBCvL3MBOHU0ELTJbaw8Ie3xDGcK6cnNwtI9HcgH%2FlKwJ6K1yei%2FWVM8J51FcPWwXdySaO6bsL22ZCILowpDKWf4VEDHDKQL1V9boI6JZUA6AY6Eb1Yn5ddyiMWe3sy4GyYseA%2B8xLNXZ1ng%2FMVWUuqoLZaqZNx6fJ%2FbQ17c82B%2BqiMKlRmBmgQdPvYuurrF2PQrS2wizjdh%2BfgDGnrAgG7%2FPgP9fjkrV11cLaE3SpJ1F5UiOVzHIH50s6%2Ffjc0uZa0fJcgHqqZI4Ec0w9%2FhCp9n8GeNUBMMSZ1MkGOqUB4WG%2FjgYxKo8ONepNyNSy9HL4c0XmGj%2BBHqOwd3OKLKvUXjFJfN6Hl14B9j%2BsQLY%2BaY1KiBWjz5ZXUnSQ5T5pzUz4L1eVxgdtlj6vbIdPRlDNwb6%2B5b7JcFHdCCRh4iMJxfX%2BJkOl%2F%2BV1hqRZUs8L2M%2BZdsNJnARTH6RpymeQqJzpkgbW3GWqYvFM8uDQBzhH%2FtIA%2Bs227xBPqkGO6QTIHWnjgk7T&X-Amz-Signature=32cf6008e6bf5a312f635bff7889ea529d0083399da28a4dd068436d561c7fe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

