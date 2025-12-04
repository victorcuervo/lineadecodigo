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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NM3CFKA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIAa9qV5WavqFnEmtSuUm2rUScPCEF6YkDwn5WkmdeOt3AiBDzIk1hRUppr2ScrQ7n5H2SECZ1YXBAAVCHDWesMjQjCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM6KOyacKMyFCX2o3RKtwD%2FQiAWPkF5yX%2F43ZIXlY0Sftkr3nEQCGe0pjJ0x31GhvQKLHz%2FQBLX1mzUkbIEJh3p5o9hwwrySSEVllsJ5WSarI5SKpCH8LzN7vn0NOgri9jLZMCOqbaDn4z%2FrG1fh2Y7JV7yAux1xPzo4Bx8VgAgzkINg18hur12Yy1wmjns2NEjS22YgGcfljoIYj%2F6D2OJke3iMp02dw7TgMxQr9tw1f7DQNLerWEeMydqmnTymjLVlLJl%2FoUEZ2nEI%2Bt7OrKCxiskD2WkvxWKvXxh241FiQtGlI1cYDsfzdEptwZ3B5qhx6FzCstmXRj%2FtnCzPvZVO8nRsgOZ0wn7b9oH%2Fq45WbLLi8V3Ge%2FnvB4Ru%2B0FdF7RLx4mCwB5Xhk6rBEIW5WMA045ZvGtslCSNVv475%2BlYKywQD3m8xy7mubbg6eTxUpEwQ%2Bi49dVxWe7CI5OwjCFgP%2BQjhCRrSKsL%2FWpDksV6RDt4tIF31paKZa3jgx6nQg5wgM9uP1oFW4xQ5evP1YmPHO6pzgBz56N5pwBw6dYZhjQ4wmsJ7DZTDkAoGg9zW%2F62CvrBnVi9ihWgMdycFI8zYthTdYJaPG2zan2W0wMtD%2BjsBT069cijqVfYwX6ZglM3uOkdoCqJwRc7gw%2F5TDyQY6pgHpnfgzU3ABcTo2vsPNUtVhxzzM40X0otIUwNaJqE9dNtBS8BsNWxtHPgLynJVuOzJyjc%2B0kGfaDckx0qTzFRl1v%2FBRmqghoHWqd7Yb4XbaFJMlW%2BfvF0KwWh4bpuI7TUQW0z3plhLq0r1Oc%2Fs7gHP9SX9fxv67XKfX0XHxsJxEReXJV9hjwUIVz7OJymOMk3cLqrUEC2QtDLg2LNNNDMGHZkjh9b73&X-Amz-Signature=1e4f8595abee2c8e816a16af94825a89dc5a64c8ddc117a6293fb2e3af539307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHC4KWUA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCICcekHgVbLEy3b193yYWMU%2BFzPp7zRUUaaHFQO09Fp2QAiAU%2B4twRDNaJ3L6rrdVvBd0OOMu1yFzr%2Beha321JjljYSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMk%2BPkjKAPKI6bg3wyKtwDyF5JQ%2BLZAbI0HEo4a5bZ1%2FUAh3ob3RzPgOHN6NYW7o8vbCVt0iy3Bwv6QzGhS1yrjOOn3JEizHnxYsIgTWGUbmDtxjDh3QqZp1E2e6OCjHLJZtHxDA0x9%2BF9uFpKDcfdDQb4gjBb7ua2s389Wu%2F3AcJ7ODe7%2Fcy0%2BQZAA72VGMy0o3ef1f4iBS1L9UttRqFpznbucspGq1aIYo9y7C8mjJf%2Bl0oHie9ABQIu6KlC0zIbSeY0Va0AS6ug8iTt%2FqLCnisNpSJu9PqPv1fTl7WLh%2Btq8CuWuxKhrqinYyHQH9mo2Em6oyrE%2F82okmb6svEEhnJW5dnDvG8K8wSerFllvaZbnj2g%2BDzdN7Jf5pIBLtdDUYD0f8P2U%2Bt7O9eO%2BB89GA36np7u8J5yTub%2FGTj8dTgRfzMUd4OLhM3%2BVA9yHZo3ltlat0J6GCGs0muIVm42FWFtbctbN%2BI%2Fo4TW%2FJ%2BIJgjuMlRRcG3BVgLRleeLNK9atQKpID84u1zqGkWNyH0lNR%2BPJHFGeK2Czh0xylbDFQzmqGzQKcSX3iq3Te%2B8W%2BltAZc3k0VZ8qk6%2BgISZiURT%2FRSTYVLQbB%2FGjw%2F5eIUZQIsH9E%2BCg%2F7cZtrAI7e2HgbW2zLL4lMWfJtHmIwiJXDyQY6pgGO0thIvHRIF1B%2BEuzt3%2B%2BGP79g9E34gqEqzcnzNxrmqADX8eRDKQZDDTl7MwTLi%2Bc9pFLtzpbSXDQYIeWnTcP7KNOFeVzg64dSIaYou41JhJrSRJI6CebdyMrv4NxRrBKGBZI%2F%2Fi4JEmOfv%2FdGxI3wC4Ld3%2B82GAim99C9wiHlRj5NMZXrMRzZXXaqSn8FiTe8kXH8r2djurlDXouGMaOC9r8ks6K%2B&X-Amz-Signature=6eb659556ab82edcf5022bd348ad7264768d0aade3bad1514d8e308a30714982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

