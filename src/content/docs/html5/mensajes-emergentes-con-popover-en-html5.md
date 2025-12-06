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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YLKWYGQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLWvlUpxgfJnz24uvk%2FTr39ndSlnWWT3n9IM9MUhm%2BvAiEA%2FF5%2BU5QQ6ZDCucHCPzX6%2FguFvcRUPrkUQMGwwVxblboq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMwPtE8b9i%2BIkaHjmircA%2Fx2UJkPd8SHBUFNIS1S7%2BSpbwnl4lOtl7MeMri3j%2BMa7Catjv7bo6i9tU1nEnUIRnASAsoElcA9q%2By74GorqSMXwhIdM%2BV5u%2BWswL07t0bGeung88eR7YVUpneDqrFR3JtYoLEBl9hq%2Bd0a6KJPHxdBBYxneMtvNqzkzQBWQdX7BpQew75aJwSqIcu25k4bpehtx8rDjkfokkwAI%2BXvutYkm698YscDhSc%2BjgJ3MSaU%2FaESppI73XVfIwUfxkDZ7EOp%2Bq2Aaoz5oj5BpDqgVZHrU8wMgvD2JbERZSBS3MhSEknEAmFan54P5m8HcDet3AC054MN9SkmJszSyaaMbuOeDTH92cWIdWUrZgiGC8%2F8MQbPSL1%2FItgp%2B4fPu3d%2Fc%2FQ8S7oivDzJXuUYxapmBSXzn3nKN1jAxIjVLcOvnteQ3B8JmGlexkE6V5ol7OvlL8qE4IdFYkv1ATOpEbWgnHe%2FZfy9u77X4RGlnMG%2Bk11DbV0TDcNYqSRil69s0tpOl%2FdnPwmAeDprDy8VIoGv00paIZtJdUgA2HdVvkz0ZCUVtD225ANcg08vE33w4ehKk%2FUUwb3YiXY4n%2FTKh6Rzh1SrvBwXe%2FjS%2F0sVghz5t4tMdwH%2Fav%2F7sEFJgI2bMM29z8kGOqUBMThXbIH%2Be9WLBG5vpK6o0L4sKt4Qwg8OqQVmV8mqVq%2FKYESsd8Wt6uq0rLrh5555%2FvcF%2BciLPkdZ0mTphNSYHmMh%2B6SRk7MIG6kNC7zWmZobfaSsLKuWLFC1LF%2BpAHjvJTb5SuDFkQQKvq9VMi%2ByojvjH1bQJj0S7sR1Heib5xWncI5aO9VaPyVwMAiMDsmTMwQQrGrMjl8cExHcqzdJW1RF3qzW&X-Amz-Signature=23abbc7837eaa96b7633a126dbbc0c1f9c10789c984c8c35dfc4317ce88f5ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JKXKXEV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxp6bo3XqJuN96g6la%2FQNM2RjnkKkpYPSEvalZEPPAqAiBjXX5mHe3WZ3sXsbmDSsP1hQkn5K0MdOFUHcdbIc401ir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMyejazJSuWhmS62SlKtwDwuAPhO6uRCRoWWo6kgk8FOrQrGd2fMEXaNjULUxZQl%2F4sm8w1gv1Fl59c5d3IvqP6pQv7QQKXnhlIj4J0UvKpCu0X9EFfzn7WYLaeD9VgI3KnyHazK76hdzJDX7i95YkJWTugcjFgEHodIZjnHsfX8oGQjezpu404cnyOI7VSijah4rK3S0h3RCcU37JxlwIrAYahyeLZZmVP%2FoygCQz1DG%2BEy%2BjV3l2z50PFzPR%2FJAAZionFeQKcRrTbF4QmU28vC17TdkxUQmrByN%2BnkJjavK0BPRaKi2DETerYnm2rrapqHFNmaUI8Ysy99yXEL6nS9COeC%2FSb0vwOarMIWU4%2Bfp1%2F17Tr7MuOfjeorzTMlVW3OWPLw3tEHuXBXf5z2nNmVmnoE7gBZy25mmX%2B%2FOXsXH0WVHeP4Y%2FiM2JHVNHg2w6GgHhssBmUD0F2E7fRUZFVVpPSWCPEL5LIztcEoqWvyXwGEEt8%2BzR5PRvZv5j%2BoLDX7N9XE87giHwWG%2Fg8pcihOlgBHfoN8TMSjoqUstEHPUSs78G5xx0fFfXTheLUh3BT85%2BJWoXWORAF5rz1EeZB2kmrTaqRv1jQ7xXvFXPTabbJgu8w%2Bx9kNu1CkOVYbm%2FPM7gQ8DKc5p9GZYw3bzPyQY6pgEzteBRBwIZwgBtuUJdIJv5clbvd%2BJOt81wPq%2BXXl%2FpkKxswq3QBlflndzysiT%2B5QU1uCpAhQIx1ygkppSu6H4jaC5QbJSkLmdUV33leSvh8l31yUl95j5jR1U3Mn%2FynFWAQbvfnykKqlDiteKgpEiOaIzgftoZqKNT46k6Sv%2BaYJpkrcCAFeWXNJtRqK4MEeX0%2BT78HE7u%2FbijnhC7GvcEnrpSQgnM&X-Amz-Signature=299d856d48a06ea1f02e6fcd95cd863f6e10f9d7ce873349d63ba8838e777a3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

