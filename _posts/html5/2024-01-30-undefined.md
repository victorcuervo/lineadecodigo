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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y4TNF66%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T003119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGCDB3zifMCFlDa0vTCXZ9HrJF7Zm0Ao8pK8fFJ6h%2BLfAiEAovxnuGi7I%2F%2Fx5Y%2FOfsrnA6yvSGfJXiaCTMecHLQB0EUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDPQCz4nz5jaDkq%2FafSrcA%2FO1c9dYOoZJzVOl%2F8pjfzbb316WHLL%2FhEvrUN%2F42i07eQrkL%2FKN4eSLKSZvzcDyEh5ttyKUarXKNCOYB6%2BAha8DVl07FuQ1FVkfmQEp868dl7K1z0HKdF%2BS3df8fZAQbe8wGZ28aHvK1bktdJ%2F6Uzqdm6L%2B7duKBQyVvwfU5UYZ58YYecOiWbu7AVWFafzhJi24Mr1zx7XYTd%2B7o6AXhBL5N5eBl1cGbSLbbLT6ZuGUM5Qz0xXg36k%2BTDe7%2Bq1ryUgXhboFoJnM%2B%2FoEgc8wFzP8vwSwkwJk8kkdYSvh5lwEf4U5AlprJRat0eGVn8XQV26k6eai5J9bBzapKOb0Lqe0SaS768URt7eTzHbg%2FMJ30SqMzHTrUjMf8qwpbAmvMn7QnfmOQ%2BZ0Qe%2FcNVOf7z83uyZxRCQfCrEWCn60R3b7dmC9KSp7yGagJ3%2BRYg1MJ5uUX7XNxuDmBnR%2FAwoS2xvxhThCT574YHxjZb5Kxma%2BjKn5anM3C7%2BbCF9GN124XXt02Rt4o6V1%2Bp2IGpS7tWLrZaL0xcnQmMHz4v3%2Bi%2BahdUYEPfvEPdQv1Jwa3fHlzDscBN3wyleDDGp1cWf4ni4D2IhdIomORLUX7OSxyByo9pEClyER8216Siz2MPX%2BvckGOqUBPVi5Mg4tZ0n3s75aJ5vUSwEJpNghbpMGWSggOBMiYStsgVI%2FXpHPC6fRZFo4LXKACGOq5703mUslBo9tRjV7YCtguZ9I4YOhapAQQ96eTYSRwwOCtOXm6F5pFsqISdw9WEp8bGlj8402m6R4OqN1aZvsVNYYydqEqNJ3mtMa3mf5glpXOtLpQcPtyloQymLSP0jXgnPdpaPH9gG4tIi3sDUXjPM%2F&X-Amz-Signature=bfb5df6a9f4969172a6cb96d2a72339dab0ffc275dbf0199012165ecf36a22de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLWDU5IV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T003119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGzORy3aiTf7pqD2onJ5t4KsQqoaGoKKaalit%2BcN0AtbAiArg%2Bq328QT91%2FRsGsf2d7FHuv9ms89WRLiinPsN4dk5Sr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMfwVlaM5R7k33QISWKtwDLry9nSABs9dUXEtx9zOg8OHEoM9xW4e9q905wEFWRXWuDV2XfmVIf0fmli%2F0HvgcAN5lSnfWx%2B%2FkEeTtbWfXFOzlcbxc76ozcxa3czPtxQUoojO7PbzxOqmukQEiK9f1JQAS5gbM2kWLO9CaZ9O2zaPHBLYlI5tDbCwRfAloD102yeS0%2BQkrYEQ9tVi2Vu7fEVDuQIILk22xG8DxgSrW2MJfvEh4dZVcA0HiX6ybKVv6Ju5XARDMzK3Ar5q7r%2FPSjUlXPiiLJxC7VfIRihtRtKEZqOVP1qeZLKDv7cdJ3zf2y9eoZZVT9%2FEDq6yzeymx7qMruUMC%2FHcgfqlN%2FU6C3romsmhjenw0UrY%2FW1mjixARmxZMKmddIm6P2j4HfNUnl%2FRaAhTyW4FDG971pA0koUC7VWtyyrfxmsqeJ6floaGkRnalrFIJtcDiEWhJrOfoFBT1nd8tR0VkjzHgk93vuPTkt7pWfdZSjfXKGNw7wklUENAfnQo58HKwnjpIDfjoQiFLQv8iNazecLvwwz9Js9VmsOIh1qRewhdaIkKmY6wOoBoftL83xoBrRg6VOyt1nxjBpmk5ubJ%2BzX%2F6QrAYblli2NF9dt6bsYdsPTIVIAy%2FXoXmNnfUvyAyKUYw2f69yQY6pgHs4aCc7puzwlwJHwGH1%2BgULHRIMJZJcX1IfjhUD3hXds0FeA5aVDmkMmjIRp%2BNWdCwUKrE36JAPSZkBlw%2FV8nIv%2FqTrRdrvEAgxsZGgC1qx3TtW4rKr%2BwnzPWTIikwnHSWzIhuQ5CJrKv9%2FTJTRkEvmJ2SYZ%2BqAe5PFZPwzxDDWgQ7Mz8%2FYdDr4ER5fFZ9%2BQ5ZqJPvQVu7HSmkxofQM%2Brgm7iS2QIA&X-Amz-Signature=0ffc70b1ff1b0a50acf528e9ce1ec053800da2f62b7f7a94d93c8091cdb92ec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

