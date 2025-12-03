---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHQV64DP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCU7TdrrIWRZRqDTR56ig7aReXqN0arai7OZ3MpQuNNVQIgJXWMsBc%2BqQnS67YsirO%2BQPq48Yvk180nPB878kidqucq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDMaOnSgE9hiqq33xAircAyo6LxlgYCWuIKGkdnNF2mMaRih7relzy7IC8WJuCZfeOaxtDuO80N8%2BxSvWqfuHyjn3phOFO%2FuJxKBjW4j5h1xONLQdAINej9Se349cTEk7ZSA5zCQ4OAr7Ujglm0FrHvvPY2QGnH5zQIS%2BbAXInHIPLp6h3ezZUFiOeBjXRFNg8xWL%2BgfNXUjigoK%2BUzHuQ7uXICh1inu14aEXOkzuL%2FlqAKNPY8Ci8eMLLyq0mq7Dh2gMsGTqJIdfjRWJs4AZ8d2nIXMvL3YpGhYAsr1YOgHjiwDN48NcUzycCEHz7Cii%2FAqpLN2NPdriDQFBNp8lcSxvit9iE8ZPn7Tv1RR3m0z6un5giqiHlEYkrFh5MRdgseUs7peXVx9JLxRVl1SeotdSW6Es8wl40nuz%2FrgcruMmM5S0B0A0lUFDHhvOXXwL%2BPI46TTEXXp%2FifYyFjlqQ6cb0lu44oQkFvDm1EQAXI5vJFvoRfFvKuHRhiIR25Y3tUq%2BFaScxNdL7WNFhzbdjo%2FlV6ObxiKPQYracNvKwoaB1R88ckjZdGnkSFoqTxxTsrzRgUQbMQUj%2FuiaAvSiCmSm1XR0VbovqiZ%2Bds8IGsCzsE0C325v401%2BlHVC1PLqBZR1QD1X4jZ5DfruMILdwskGOqUBHVEGQ%2FT%2FyZFyoCfIfamyhbKTS1%2B%2BU111FXNmJv3272TCfVlPy5TwAht7Mpx2WBYNExeX1WGo3NGrizEXbs%2FpY0vWzcDfMb9Sb27VvK4i4uR3usvqX2CAPCpT%2BlP%2BrKLzSf4U%2F3LZABqf8%2Fupp9XCruM0PmipSYDyorm0b7V7n%2Bq55Ua83P4DiC3Djo6cU%2F05ov2GraaewH2zSSs8gxJCnraLWlsJ&X-Amz-Signature=25c9d31c8be984bb395b818a39e08405ec4e6f825a418deccf612ef4a1cad970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HXEP3CS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQC9jA2ickaMLCbqw18FnOo7xF6HHzk5PeoQv%2BB8a8hcsAIgCchfTztB1asHCmfWImVio6clpz6RPwNHebKXm3mgAw0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDMzChsnwdWZeLhFhZSrcAy8mz0ZKGFayP1fSUKiB5X%2BF21%2B9aYMfgI1bMqV8JsaQxPr9PNSyVaIkWo%2B0kcPkmxQXUOGNjqWRR0dxF0RSf2Yhlc4h9eR8EghOilwWSCdLJeyIaE1uzIZEnhr8zX0k4e8j3W85xuK2oIoGdmeXvDypheXb1JKbDOm8cs4bRqf0sWFxNwD%2B1QRtOPrqTLfj1vG0ULHjYnHh00xWgVzou1FqcX7sxhu7PeG%2B4uFENNe7TYV584V0pOTyruTYN6K6mGMnKN2z1ibrTJbLE5w7uD4PvHAqinjrLLTr9Zw8dSLiiSs07elGJCR85TCNTe37biQRItFr0cyT6GNTXrCaJVTesbyYmzVHL1iYgJL0c5eiASV4qEIcY8daFZcd14VtnOt67XyxYi9zS9MtU0IEcK6L6EWLildHw837FBU3pgA18wB3ZJ0od22%2FkIuvZw9P9GQBa9x0wm1SzQZzE4N2SBLmOoRuk2j5518XYC6LLUHQuZzItc3VekX%2FZZhbkOmeyNOhCemHUYVTZhML0VsmNSLakqcvLnPrwxh3nIe1dcwoxAXhvGKXqrf8EuyUGVgmw8uXnUv3VfViIIhvQ8N8BtJAea3WAhXW9VL%2F2t3Cl%2Bj1aGcBCr7HwVU6HIB5MKLcwskGOqUB5NqxJqAmtzGfI8DIvimbJelJmrXydKFt%2BvlP%2BZdr%2BMWO52qp6%2FE3khw9hqESNjnK1Cx%2BUeW%2BwV9WFmGQII1Ot3zHvCtUVINcyv56fvrPe90wt%2FiEwnG04rIz%2BTaYvbhMmoEblHcu6YlkoonFXG778v64zFT4s04HkgWu7kRqlwKywUBVb%2F%2BmIZ%2FLH5unlYxvDS4984LwyP2Wm5Zgqmx8CXQOom3R&X-Amz-Signature=653cdedd3d41d5926fe3f5fadc0b95337bc251d4049e4eb8434d3c2c752c94a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

