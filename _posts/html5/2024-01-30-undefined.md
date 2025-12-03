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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUB2ADZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHuvgZtWSq22O6OrsVFHOKD%2BWu%2FvjacLrEA9uojVImHlAiAZevuZwTZ0d4noz0DF1IFejZghAVQaD3%2FlqnqA3X2b2ir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM8W5BISxmqow3lm5IKtwD1dq932YIqJhtOgAH9bTGl79pO3WvgBjT57dD%2FvIN16nl%2BiALhY5pnUipdF4jHpOWuUXd%2FIesMwVa4Bh5Z5EkI3dYtx%2B6QBEZIWoDEVsWgzvq5QZHWSZkJGd00HyGmodLpURSPQOwdBIDfvmElZU%2BFrQ%2F3FEcZtjYeu9vSNnwqwDR00xmS49FmFkTZml26G06qMhVA8It1gm%2FDe7rxQoPXLWijqnsEA2PazmNvtS0DxY80J3%2BZ6O1IBxTjbBukQqhiKfgwqeaygjlQCkVc0K%2F48gSIaBuch%2BYrQUu5dnxNu7uru8igNa%2FpVOrT%2FEjeg4gEXD7bqyLRGlsMSkyd1O7ABVT8%2FKxI%2FdN5K1yeWa7s685T0qRtRV%2FrEuC24kMykWDfqn%2BN9nojEA0%2FwHcpiSsoqjBuYRwwqVF1KWqWNiyDwanP%2FQhKzV1C7wxrXjY2sU6PSRjvuVLm%2FR4CUNgddpvBKn%2BXy41GfJOaxY8rXsKXKjbF8HFy6Ak7b0la2%2FfMBf626yGdq3eIh8dPBQP%2FIzeuxHPOW6FUj2lrKaT7bFP1sGp5Ob6bU02d8UfRZbuX0axkZ4JdbeuU86Vu2AsG9j1gVwWjtDLIjFhOb%2BuUCjA22tgTIciTpHbs0o84Zwwi5W%2ByQY6pgGq9p%2FGh0gk9AsL4uHQ99rKlrBuVUIjsTGFkDlGkErnRWI5EvK9JvmvDA0qnz43LUx1eKoly0n5ufIVo9n0pzn7oENr1EZBf3Codb4OV7KqS%2FchI9WuqNicWapS9cPTJe98GGZyZfJn30FneK7euUMaP1yYuefQQojeQVV1hnWy6xobioQkjD7Km6dhbH3oB36GAItH6INdXNIfJ3p9QskzCs4Je2uz&X-Amz-Signature=ca5d66b17f490d5cc5cce3ad85f4265848d42718a066dc8c40e7487ec7c04193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V562LOZP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGRlJERetJ%2FmL2ySiLT%2BKUxbgXrt34bNnmb1kT3Hr3M5AiAPjr23NdEedSCnhCAwCdqvN2XQ%2FyT9J2xesJAq7jG8TCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMqsFQl1OiAgy9o3EiKtwD0DTrfGd1lsz9NF4YtpkxSDNrnUOnkaWEjrE0bgRhQ41ekTgPl7eQmRVWJLIh04o2m7HBcbz%2BTcWEI9ExAAPjb4Ey%2FOG%2FblpcGVPg3bx6UJImloVfxWOArF5a6sMxg18aC%2BtykiD90DMQjuLuAL4TLDUI9N0nGAfPtMAA5w6Y18oRIx6s4YgZ39Ovxptz55hTG0BIQVsaLqXAvGXcYcHzQYsfATuFnTHnXo%2FPUiPXZSVxRs8dh%2FYx432p0qG6KZi9%2Bh3HtSUPSAk1CkA%2BC5U7Q7VMrV3yoPOGwn5XpJ8XjYUJfCEf8uioX9jG7U3JbqA43LJ29nWMaOqpFCoKYpA7WwklLyaWhncG%2FN6ORtu1RYvsfdYn1PLBQKTOLp64gDyHI%2B%2BCjZY2tzsgH38OSqvRW2QLCBBqOA9dV6icja9U%2F4hyVJo0ox9hxxvTcw8EFEM%2FK7KuVyaGL%2Bz1p8LTN0O7vKfVwulRgzbNstI6TirDhx7f6N08KcazCztpEdtUeo9QOCfnFap2oeQPf5ZR8QssU%2BxpLPcxIi2fk2RLGhhTUMCSfqE6RSrJSZw8ZsX5R1YPCcN6%2B%2BD15VRubv6KKoVgDlOGXa1wH3fK9CyXCmo4%2BcIeBUclmUQOFQIJbF4wspa%2ByQY6pgEzHMA%2BRix2ShJF9BTWWkL7I4VtbYENAKWn7TM4ZPenDBfojGHbhvkaP5KTT1Tz6C%2BsD9SFn1CoikJpgX%2BixETmGTMy%2BtOJQj1u8dyGuBi91v6TEzswWQFHmKQiNSU3kjtwYJ92rf6AnFRGmZjG1XaGJNXeIHBo8eMsGkc%2BZzaQkPlsTowZdzO8gQBNFWK7jC1uZ61hvMdjbNOb9TsnDgrYWfuOC0VP&X-Amz-Signature=8b966d424376d60b63b816125a37caa7bdd1b05cc3b4ca5535dbb59432e0c741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

