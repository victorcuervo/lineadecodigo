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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRJKBRS2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGKZciv%2F8p7TQMJgv%2BgyFqnihusJPNGgwIhuOIYCuMtCAiEA7hH4oKpA7MNFghyUPPiYXbxEPUuox8%2FmYykWewjMELIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDHKraeiAJgWDML2o1ircA7Bd2xrkReAf7WICyicZK0WjSyJtSgHo4xizgYMhT00tzLqANIEQtK%2Fy%2Bf5iV4nXMKRT03nUKbcGzqaSL2nZ%2BlO9tLB%2FZk7TcklAat3h4A3RDwXdKufsuWwZ8d7SPv8L6ETYiOsVE6VZ0bS1IEI9RtKYVPFqY6lQjfQrS1ma8HqpwoYzLsMdNP7yVsawiItUhgHDSQWO%2F05DsjvrMMnUfDxKEwZ%2BMrdrWDKH%2FLOhNrtCY%2F%2FTCjxR0ep38xKrojICQxjlGtLV%2BV4YFFsZH5rfck3x8%2FybnEE2kgTYWYB6DXquuCPf4wZhSf%2FP4aTfbm9ciZGSZjwX9EJLGS%2F0Rg5QNo98GJoPxT%2FrNSfscw6xnIDUvT82tDC2w5rlH1Vacpqh3cwn2qDaJBnsKPY5aSXQZc%2BDi5HHVd5Jqh4jBjR%2BAI5CXhxUi%2FxB3DYHDgMA4kk5wxgFe59DmKQKPQddhul7IJ5uxuYY0Oq2Rxz%2BCtNBq%2B8XtZqVM09yMC%2BFUC0QEGxZ60ERpq9C9AnW1CdcBz66GT%2FtEGtHgkJmST1qUnF3MKe5YfOpIZRon7NKwkRWwTrR6kgZF92MleDy5yON8T0PbF4Vm%2BHM%2FuT56ZcTjwugXSexG1YQfajqPeeZmXjcMIq%2FxskGOqUBV6I5GqCVOkxOKihO%2FDceMKwYpRyajfHS94rJFHkpKQw5xk1yJObOSuED%2BxkedCUjfFlEsQQgTZqJpefdL1wPrVDraGklc2W2BZFLE6bXZu1FXNpZTuRYZ0BI6B46AQ97eEQo0HtXeLGFaEfvZsGw7FjXGDSCX3PLqUaWOuf50EvovRJow5WS7VtJ6l%2BaJi6Z98xg45lZKJ4Geed03J3SQh%2B29G%2B3&X-Amz-Signature=2464214e01c5287625243ae8a0e5c2a476ccd725faf94a2ba2412af8ee7ddf21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPAQ7GLR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCv%2FQSnSsVgttWwCFnXAK3R6PRfL4Yz8q5LxG81pmhlkQIhAIOyIvVCehu%2BqMqt3XqYYwty9g6RU4Os5RBDNUh6N3G2Kv8DCEgQABoMNjM3NDIzMTgzODA1Igyvlr%2BqDXZlRvOFd44q3APcjCO2YE6YAhkLGy6chlOhH0Q9JP6BB%2FimX41YdGkMadUSO7RtZC0XmUdkd0fLKJCUwnH%2BW6GhSqXqcZbwWPj1F6IzqnBsviY%2F%2Fq6YdQ8516Z1jjh67LezzUnxocP89eJI2FH03y%2FcNirtxFkK2pNIITIOvLKlfrdi16cQbuMBbu7gbtAkrIPT%2F1D6ZC3CdqpgWIKKDq%2FqQrxHGGr47RVizM%2BPiLc%2FDt35sGDTfnPjrIjAKOOYsrGtW1pBHcLPqmmIHRqMZWdBzuJPFV7Viec3oG%2FYY0TblYB9kDtCjKSLqZxAx19ObQ8X9goNsHiOmMC9%2FEJCV%2BkU8cXg1YUpI3lj%2BI41cKF8dBKiCnMyZ9Iu2u5uWueZs6k7oRLXYn8wVw2cisekimRlanK2wHBaLcakbuH4VWH8aV%2F52a4hDHbYtOfyZimWxofqu5h0UL8ukO%2FdCwxCv2H4grJmOk2oQF5r%2BB2NPBy7igS4iKhXfTS2h%2BqMI4alnWTl7j0A0RzyYT6Q9stRtP4MniN1eSmYlRwEvASoT%2Bbi005NrdRVeCoXyk8LI%2B7vq0nmqHtOkJVH7dxTw1e0XcX5sAYPhZR2OBlHr0bxgJajIoLta2HtYHaQHAdSfvKHNYLi%2Fh9Z2TCuvsbJBjqkAffivatAUL5jHOZZ2jLAxV7tR3s%2BeguF0Umwie20jaD0NbXTs5kHLzIXq7daQVt%2BvuMjKv27a5ygifMDj3TPiNWwDYdNz6irX8BRHznjIy0aTwXvttqPtw%2FUM3MapL%2BAGQRiLTz0Mcs2MAXLOb3qv0nlLOPsleXpRsWt%2B6tO4bpM4dtDG53HSmlyPL4%2FeJhn9w%2BEz5V8HYRmOGv2WyqOa%2BP3Wvms&X-Amz-Signature=1d6ae0eb8942cd5fa6c870bc1a18f7db7c1dee941c03736263dd45ff617aaac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

