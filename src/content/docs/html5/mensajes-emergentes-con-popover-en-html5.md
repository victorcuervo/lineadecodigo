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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T6QBHY7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBrSaEGmO9QbP89KnnThrIX6%2FIBdUNzac4E7WNumHmBgIgagO%2BHfahHi5SVd1WFlXO3L2QMjG8Qe4GPmTb%2Bd3cuCoq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDAFo1G%2FHaJr9lL%2FFAircA%2BjjSU%2F6x1i9h8iAlVtacSq9zuk7EgqlTX3z8qMEt8vImFDaP1rA8A3V2eflz%2BAAeEIj0zFAF39lLggn5bGm1XQXFz2fbGk438DIi7uFy9Pzjiml%2BqPduKhGgSUcJMo8DdWFOKBw%2FUKj8sPu3ZHk0UsJfdu%2F%2FqeoUifdnoCQWJ78guPQk7zeROkP%2BidzrGu8XkNc9Ozlb0FeLcdw6AkbzmSSRiARAVnc6u24b4QcdejbrpMmSPNYUzfb%2BL7bx8uScdnyVa1S%2FijgLrJVcncdY02D%2BCQ2e%2BLhbpRAHjM5xHChzK3W663fqhJ4f87htVyXwpKB0bancb57J0n44vSKOykppU1ibu5dtNYEdaKD0WQzAgbhymEFPhqmcAUZKfCpywKWFIRG%2BPlrgOmVhWVnJAD%2BV18oaSxdPh0%2FafCU7PdU7kSuU7Irs3T8lnunu81J43ooSIRixHtQF6gIVg1Vi2Q8ycJH7KA2vkWo6R%2Beu%2Bq%2B5%2FnvSjSct4Ke7nVEIts2AXgnuONDOEyZJJmXZA%2B7dTun8LkoudHHthfRkiY3JhzT4O0UwI2oA%2FTTdg9k7NMUHqxCU55jas4DNk42Rux%2BdqTrg5tcKYbIAHht56ccVWSXoqzQLz%2BLxZLPQ%2FGmMJDsy8kGOqUB0hssw6Ic0ubY9yumguCw4anveNRjQSGIlCQaj%2F%2FT6VPRRbp%2BpxPGKFuptmZhOlbR6un%2FNleYTl%2Fa0Fq3nMUJ9HrjOf3fm6gq%2BHWrQ81YYUVLYGAWtDuW%2FlbgERq3bfw2xZ3fojTkl73pczLjQh9rYA1tW2pS9OfXGFxG1RPbopHrquNGQRGuYENeQjYrn%2FMbJ8Zy1gij56Napn%2FWAgt8Jo%2FYdhWS&X-Amz-Signature=6a2ef147660106d42b12a870bebd14246471e18b91895e965ab83023cbaed9fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TG3XOUM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV0th%2BlHE%2FnSOvxakJ2pxMrqC5oTXKh3q4o%2BmMvuLV9AIgHhmlTgw7h4wz5%2FZ6ZMSq%2FwpKa0R6pjIpI%2BTQshu09FUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPXJiZUwr35ZVHUdYyrcA0ln9nPnVQFydbZHAqA3TMxl5cBXqZTJjVdxW3fffBX9KjLgW8%2Bvff4d5SuU3rWZOKzXX2qilTyhxDCoD2e8Rhje8pIDw0%2BLRLEHKkBbqQr1K1mLVMyF9MWdUt3sth3VDniMytWTUv7q%2Fp%2F81%2BRP%2B74FR554WosqoCKWnEMQHXE2I%2BbTf0coxvnwh6tBJEVMLa4SBq40%2BgCqnqs5FvXSkQWfxcCK3UCklbhV9VyLlGeinhQur%2BbUhpAbxKmMF9E5djVQktvup%2FY1XlGmTKgKt4KFVdzQ5VA9FLNjj2owwiycdP0kSJk4bcUsHYNYctJBu7ovuWH%2FZqp8kkAcgze4v1%2BGSwz887MzLsPjh7Rapy2z0gUeEmdxA5poL15XLLLKkyaKT0MtygEbIccq7%2F7ZBdyDF3LF0wXCPgq3EwBp7dNGco0b%2BTz9utK0GQgnK31h14rF6efzVI2BRIyFuSmAz7zavNrmaMjLdfHTWZYu5jIi5vw3dKGLiOCNRbWTriZZ37XF4dEVy7Cj0TibCrDCydJKDs%2F3ADA4WlehoR%2Bhvpbh535sp1%2B0I1mi1FOtlsjetvM7Wg%2Ftk%2BzYUL5k0b%2F3v1%2FNhSQBFo35bMUJ0ZBQ0%2BBSuLJEAL5OcPwuy5D4MJL4y8kGOqUBMf0SQ30rWR3p7AsSFe7Utei0ULfVJClw4uv6bPwWA800JDn%2Bx9VppIHTf6BPG9s5612fZsgSHaDTmzgJj8ShRKeE9iMYBQjlFfryduTY1OjceuiLEZPtikz2YPyJOC92%2FWiupwO3ycc2mETkjKgmcFkQw%2BCG90Pji4aDwWMpisVJ11EC27E8G6F9u%2BcOmVdXcYtoWrlNXZjGPVbcdsBTQmbjaW94&X-Amz-Signature=cdc99a7c1b58a6854b87f7edd7c633219bc627a07dc372b8b24a6a87e4865616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

