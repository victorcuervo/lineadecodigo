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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL5AVTUV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmDJT2Kwj6mwYLYQMK7yD70ryCxruR6odxEaG2h22q2AIhAN9USJLnU6xqOy1L1AIREipqhCfvlTwugrElcnD%2Bor73KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzfn%2BtK%2F5QYd4pmkhkq3ANIq9qcmjotO4ssjDbgyoYZxrCV2fVWr7HFvrCGKaEd8XtqrKlkcr0HGkirxpynoGbIaABcj5YkNlvyzPMxLYDt%2FFqN8dK6mCc4%2F2fBNeM8zyqtR3EdjPPeHBkhWWd8zoHmnKdy9yK83oKbblK8gxDMBTgbIsKzgvZ67PYH9Y9yPbotL8bwCiRao8keNBJ0bbyk4BDSymbr7kAiU6F%2Fp76A2EQUSlDEZcVStlH6ZZCXv166o7SnIyFGpX0rjUr1JYC6ITapVXZAHL%2B2B%2BBZj0bYltagaYRQog9XlfffF51HJSiGLgfwlOqokXZY7S%2BrfNvOtWCjHj15zYiW8aKmxV3E983ND4gKUu1%2FpAspBtlLldnCpB6Wkd3IaylyDpxgoZ6yS1fhAwkdatB4vP59qH3D6gR0xzdSe%2BO7ZHho505JhcAkjGTcYxlMquuF1bvNW6VciD1G1gpH7oIlKYDZr0obOpFnM8ALyW%2FCVGeuomVbAuLwqa2oYm3LAnLyK%2BhkY5VjBPqySz4T2Pp4n5X%2FG8JqyvRI3xNhgBpWBD%2BDz0Ki3%2Bv3a57a5P%2FPQJHj8Wv3gMOww3zI6d4HwIxt4tm%2B5lC1ElcMJR3BkigX1XUeJ%2FtQIb9XUQIqSeJJyv4ubDDOjt7JBjqkAerRobz9y7%2Bz1xqWyONjdJV4l%2FcEf%2B1XfCEVUQrRES5UHa%2BrWpWXiGmFTJThYn%2FQAebkAwwuXCtmQghz3p2tWzmFoh4UJwVUTAor1%2Fw3Aq9Rwci7N5s%2Bbm26iTMidtNMaqz4ZAHV2vf5OF0Z3SOXyEwuoruVNHNQ5sU8Sme%2B97rDqSVK0fBLByBIAX8JPJ%2BTdd48EgWu0OG2wEP7KNHdi71cDzj0&X-Amz-Signature=9c977701e1053a7febd60c6b3df2a6f3b515f9e32ffb5b5d99a3e2286ba35c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZPK6PVX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcT10GNyUWqHxBye8QTW2A5jcBUSScfSnZANxpf0A7uAiBgJ6aQ%2Bcc2G97x4L8jL8hwtvhMTqYwaas18F9SAFEJcyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu6JzVedU9FeghYW%2BKtwDf4Xx3Nptc4NeQhnXAUYFv0dqol4ek3K%2FvmcOFglTFTsCyPkFfEYm1WrkUKNnRBNwLoUWYSjiy6G5ecr%2FMZdKjtmtfsY78%2BuNtdNoPw0TuX6YrFccnS4WDLBKcr1GOVyQWXBg5QLuyhKtFbujDwWMyvrIN8rg2dnJVECBrIkVQsD5IAaDf%2FjWmfzEq50Fc%2F98QwXBisRQPT4VPB5iqQbH%2BFyh8YAC0Se5M%2BsNH3URv4eyv477K1iJFygCMgFYDBmyrfXPkknuIaHPnCwMRx0tjDMuycXqvxRZjT3go0zzCoo%2BwS75jcxTjAw11MYWb%2FJ23aTfbyVUR3afx4BIKF0SetvcSwMvHhhDgdsEwQh4m6hhEtwbZhOATvQm75mKMTBOlhmxTmP07c2ccYj4SNZ552lNmjQjxeBbjG1XI%2FIjQUWO4hp0kL3HRKOXCLaZreEDdZS1YUjpljKUWIp8JxgZLDdHlpN%2FMmNlur4eFuBP8GGsHQsgINastDTwWAFpYWPBBSyJgJ4AoGgl%2Fi5xc0po9dfY0fF6fgR5CVjAYufBwDc5tZjNPCMyBGqdnidCsAyBVfEIYrvqPY5b411MkEgETugEtLi286NOIggM6%2BFQIF6NfEjrBaXcXx7Hjv0w%2B63eyQY6pgE%2Ftb%2F9iaU0em6fZOwUIoHwFAv9vdfyLpexd5nLeqWORJ2BEnayk8hzM4DKc74m8G2EQ827vB8yxuBLhWs59OOmgD8EonF%2FE3Q6%2F10r8Q8kDq%2BJIPgqCPQzR3JXn60QphBEeHU%2BKSI8jCcICQty3RD2Go0Yb5S2dXFlFYUTMGydNjXBPqd8pQLEFd3hw61L69%2F3Dmro1SCdy6V2g2rln4Bmle4YVs8c&X-Amz-Signature=8cff692cb38e873cc60f86a0e38289906a94c21e04c4d2d7f0cb1b59f6663fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

