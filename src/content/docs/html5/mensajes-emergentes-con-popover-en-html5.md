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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UL5YWS7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6ROjY%2FQ%2FY1AbQvXT4Y7O10luK07xdeBryn1AoD5sXuwIgNBtlUiySVtJ2cMGcnW0QMkk%2FMiz5o4%2BlCgbB6m27lD0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMktXujnDI7RQ85JUSrcA9CvMhhj%2FR4CDHRPN1%2BsDZsn4prbKUwGmZ2xY88LNJrvt7QtjiWD5csi9GDdeIMdEcEJqEzELuuDjE6cpNWm%2FILNxs92O4O19lHWElaD%2BSL51LBuR4DKVJ%2BwiJ1eyilVhf3V6Afsi52hCQYwLMp9rRt8PkOzCb5S9jk7d%2Bj1OLGuNpC358XWZHa5O9hyXHYEX1uisKh6RC9CvE3TXkGQIoouulFh3pvhMzLx6mk%2Fm9lBfxiOk80v%2BY4TiYVMDRHkFwebj7Fzm5v9QR%2B2rAeQO1hZlnHuKDSh6oOGHwlPqkOCJR%2BZJ6DUWrorU70ygOm31NaMLkBWxUJs4Pj%2BoyFVuAy8mcHY3RtOwr6n8iVeq%2Bh50TZwAal%2FjCYnldLaBxbVfGXcW7snc11Kuv2Jifyt%2BZkHoWQWCbXYutAU0V5tOj5XM89AhWWd9FEGt8mzx2AN7wR3f%2FyUO9NhD%2BmzW1pMV2NWeD9cg3FeILfhM1QbkM3R6fespSYN49VzErlXmnXzokcP7GkL8J%2BlHleX1OwGUdmLJGIR9UnwRENbA%2BNMU1djNIhVG%2FNY%2Bk%2B%2BL6VecoZw8Eyv%2FnDDlaZgQB4UAzbtISv%2FQ7PRLMVVKaf1mhnfXzAQfovvL%2FP85AxitdHqMLem0MkGOqUB8ywF7CujlogFolsL4PjGJtZ%2Bs0vxlo4ZDJewXpcFOVrWe1O%2BL6NYNZL7kWwm3FdClcjtZ3N9N3POMkQ6EaK29y6l0ucxZPJNOfB5CMTamEmVYqtL4UWi4h9xuo7BI1vojOb9CX5bJjoUtA5AMAhID8vL7iS5vswbZD8sZS5XBsPyeesXauLkzF9SJDurSrh9fRG4ympbeN0FxzlVwHREOglUyXDl&X-Amz-Signature=b749798aace81dc5555e2e9d88818a672516b1b0d6e63a886badd146873d5b4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UT6K27M%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4ak3rhavh5eToWpWxZux8YMQWfIK8mlZTgIx3UPClIgIhAOEYKFG6O%2FOx7yOQEizrslmaupHW00hbGh%2FUkB76VLE9Kv8DCHQQABoMNjM3NDIzMTgzODA1IgzNyT3TXddjoJBmvmEq3ANOOLyczyZw7xK9MXpzsCjzFnBtlpGeGGMVm6As9mDQ%2FSZNMsAF7RgSGvtHTdddpY1jKLJTG27zvsDLEU5buZA43O0IIgC7zjlptRrDluHjAdnVTk2tGkEOWhngHs0hzRKKFK7BnidyHkU7LeCP9Igr1zX9HQ2uciUHzByvHrlv2B2pJAoxTpoLy%2FJW2OaCL6mhh5I%2FbL9MqirOK7IL1ynC2mXUPmoUUMN6Y3RNwYqmrW7pJKx7ceW%2FhlmeOikt2CdNvT273cDEH0CkIFjN4W4iufnW%2BuMMbxaaUuxJdKxE1LyEWnTvHq4dyhH2b7A1iU%2BCEku6QlGBEuXYoEDkWZdbEoBWqo6EFkT3Hr462iyToExB3pdCIro921obmieIMVpe5RT%2BUwQ0qutUwOK%2F4fs2py4NAonrs5TkakfTreRimOq88RuX2Pzb0FpSNANIKJ4a03tM1daxIRwZZfAWkZTCwC11fiYpU%2F68ZKAu4U%2FTrVxYalQpqk%2BcVCoOqWWnICAXbMx0kUoZLsM5z9Kg9JD6nEn3%2BodIlD1jGP7zAkOvPEdZqx9rEMn%2BLhKk4z%2BusSbRpwyqLpzYhWNUoFtGw4Xb8d%2FGjm0j9v3OULYpBPUR3nNDUudJskMgMcs3xjCjptDJBjqkATEwKk6VqzBeMECUPP1W6%2FWZNrQ6K2NM6eVNQ5eMQ6%2F%2FWHPpyezljmqlyKzm5M5PIY0LW02%2FO1sOtBr3bXfKgeqISTO2IDPdzh26x6cYsKmPAHkReuX0qYCC9bG23cQmUfTOqSgVKckzjHqMlGcvSsd5jCT5A5euG5oH4ec2qPV9nyKK02TmIzAI0dtYHVB5L889TOnUV3Gv6mSF137xB77fKj32&X-Amz-Signature=b5c066a3201797569cf6cebb21ae48fb0c0afe5a8cbba1a34fb2b429c074df27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

