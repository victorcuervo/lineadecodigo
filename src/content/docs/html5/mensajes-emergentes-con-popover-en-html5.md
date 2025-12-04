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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKOTVIUF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCICTqLO%2BPajoSxhIBONLLmm4cucD7XPJTorT5dzxNLxcwAiA9V7oSBNULvRtO%2FDyRE20dvcxwnwReC8bX7lKDqQ%2F8FCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMxyCENtU%2B8Ue0LJPKKtwDZ5jtEZunqHRdndPs4y4Dv3IzuVcx4Wo1B41nDDNVjlZ6dBV1IMG0PIS1SvwTmkSSxxiHpxGwfBeJBzReiec3H3bitmkOfg9V2zqmuLJaGr85JL5F9CfGL6lzynF2ga9sfyO2lq9Ogz7qoIVeb9ptfBZ9ST2MPkNS%2FDbNYY4cnZiA2q4s4FmmlYnfuW0PHU38ZH5tznH8Zx17QJxzv8BxIxLYa1%2Bpcv7mmdMm6dWRz3YqQofGmPfB3sll6ZGXtikhly19O%2B2ccAFUl2lV4D9SLEaek2G%2BN78UFtiDZxGpVeiJPTou%2FqAR9GEGbP%2BYu8QLb%2FDZeM0UW%2BVykEANnhlNeDRwDy%2BiCIeVtOn%2Bbg6eTi0m8eagfptOYv%2FaGGhG4nvFr%2FL6Gijam2QR6TjKRZNO3ju6ZYxfYZwE7ctMKmLlmo6g0d7uJB7z6Zfw0q8FOm9b1vL4aA5l7Szn8FGUJjKzjNC8UCjO99%2B98ujeG%2FN4gKalGUfvvNFaKot3O1AFqgUCdvMyTlETPM0ehmxrHjOf2AscbmBQR%2FijLiVhqMpR5QS0JNlCoIt8RoqPGQYLTBODggobK5NgLkV%2FPW1ZDruIgI0tcuu0LBNOO1%2FgOI796ilbayablUk4DvquDTUwloTGyQY6pgHVjRyKnlkPprli67zgHXUlLhfs4sYWhZmNp6vaSlyKIbDDrBnhZ5H88IZxB%2F%2FOrSGQUxEbnnk8lj1%2FA0tw%2BE3240xZdpqd%2FaP%2Fy%2Fbn%2B2vUZwUOmOvc3Su4a8fAEA91Wc1HqDGPBYinw5P0UH9X6sc%2F62aZs9rlJdz8zhwBnnafwIu9h%2B8Ym6Xc46IqMtAcwL8JdBHkxprf%2F6GDnbrthW4Y%2FvXWUrhQ&X-Amz-Signature=8fde3b8b9cc05256a422a795aa4e8b5774ce91e8f9b71b50070fab322ccac421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQIYLBTY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCAkQdhUnjxzVUmjpK6zzK5ko7zs47xVEDFK%2F6n9N%2Ff2AIgFq4Z9ohaAjgElZa9Umk1H2bjr3dUKjOcnBobMKGH4HAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMDywYaM6h3AYuGCXCrcA1SJ%2BmhVztXbZdADtSlCM4ZhVl0qDuzmvmlzqGPTB1h6RkiTpoYwiADSrexQcLFRnbHy51CEwrUCOpsC6KuT0tT9S%2BBcBT0qVo%2FCnsooJ0yfpjxgn5kkXWNCH3Ur6zarA1PCsr0LqjzffFgYQZvoUs%2BNCVtBzpFlOCPeX2oPKg8r8QQiIMfNNIA4f1EYNl81YlsBaao3qgT61eUp9J5MOT0OQxZ7AnsIMmWtJ9WtiYp%2FK9urNH4qeTSkAw3BMczKVXxiMlxAt3%2FMbNIqevUKSPkdIrlKFQQtyGvhv3JgVeMPNx2KFwli7A6fcatzpxoocxBpaV5859EUGrIWBhWfXxQYpfLSBQXQT4BpOnre9faATgvP97rjyQqXLnKqS5UTVQfCTVO3HovR5gnZamUJsbs0%2BMNukqouzRxFYFVpdcFbxi5xcklL%2BujZQXRF4YvxjT4Y5JwYtuVbnhCRbWTJJ8zABvLwuqtSv3arbpVFR0ERVZNA0jM6r1XwayD32T0%2BUCsiJOkrwZ0EsvW1vmtcU2ueMiRq9GgEtiekGM%2FEPcaiYFm6GZymoAaDzO2uYUv9NaG47WAuC%2BEUdgjoOyIxXnZiFjj31%2B%2BPrMFeXgF%2B607kMXz49jSre1ps0bMzMMKExskGOqUBnGbBpx6Es8cO2eVYe4aROQOEa4wcSOydh3AICxGocn3KlUwPGhni9n0%2BbZ7SwN17mbBhbIuxJXa5%2FfD7Z0ITXP4jMM8JGnhl8MTOqvoaQjHeSID06I%2FkLtkv3awZ6ls6YaBPj6lfIulyajS7DXyD8KCcGfQ8dfEX0wEZDBW27qLRUr2t4Qj0F%2Ff6eC4ucC0KloTnl8yqggxc4sq2fxwPzHbgjgS9&X-Amz-Signature=b5c89bd148d0d25b2aada85ce42d5f48c3cd5cc9835ab41939dfdc6564822387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

