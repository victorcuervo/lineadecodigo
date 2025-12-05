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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ7E6ZN4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH61vinrnR8r4ybZDKREi2HxLq5W9318sYr9Vk0BlG95AiEArjtzKhkbRhfraTQkCkxJo13ZJI6wkrYdWO26t%2Bsfmawq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLvpM6uJQmpkyef7%2ByrcA47nMD6IBHtkHxtQMmEzHIzdz4iMKzUhOu1oN%2F7y1BVUCFgaBEG%2FeZAfO59Tv8UOGA6eLf9ewQRu8OS%2FCQJwqGYnWuNo0PZf%2Fadrys8ffcx8a5igkPwV32auWOR2QB35PTIFD1U0RU2MFXvpqlbpi7n%2FXvtwM6Foeq1ENftICxty91pTwrR7Y5XMv6a%2B%2FLLbFMgtwubE18vdZeddEkjoczpyD3WlLla83ElpIZr0ULrNkBhUztPw3W7%2BVjHOgJ2qJuS%2F9e%2FUbr9zOxzXCuoapJnhuoJRPGyn8FrR%2BCOXFh0LrzzzQt819lyfCHF8CCUMqe7zK%2F316%2B8lqjPTI8t7Cpy8RNoFdLLdffC5VWLoxh05mu3FTABn8YBY8Q8qcJRX6hLwrR3AkR4Nb7HICBtXJAcluybCH5gJKjf%2FWdk7L28I%2FJzBw687lGSYUBigoMz28r9SjE%2F9NXdsfeMjIy%2BlGGVn4jjvDQlRWPJoL8Rc6cPcQ13vXz2hcT4Jg4ZQTJeENMlzdgcFfLV9BjdrPgaOLLYzkfiLxP1sX69BWB5dMLcLnZbcVyuXFO9EhF8nT1BBSmlXiu4fR2pFWUjuRPAN3FIOxR6floTH5bVI7WMu76zvsr5z%2BVFuAa%2FzPlcvMMSmyckGOqUBU6Z8Dfa2A6eYvS8x3HucrcbV7CkFOjSBcKpIupa5k6GZLMvo4oVs%2FiBF6wzV50w%2BzaIeMk0w%2B18rCFZCtfMUPO8vO54tIsddS3iYAElg1IoSLMIEWLm0SesR4iXh9hVh6xu182Gjhv9D9Y%2B0PzUvfvIZAe0QiXYr9V7yyRywqoOAoP6DECuQfDyje%2FyjQFX4z3siC2mCB99Bms8QRxrdvsFnyhwI&X-Amz-Signature=00409f5530c1a54abf9857211c7671d71915390cd4b61702d4156803c71232fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7DJNSMV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1mXgs0O8HGnpfAvD88Blk89dBpE757ALeCW%2Bw6i%2BGVAiB3Fg7tYmaltuK16RIuR280KqEeqlwbBXz9EdNWRxkn6Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMZx9aMp%2FkkWxwoxNdKtwD13rK0nL%2B6mnSCGZyUiXsfm4A7STQJ8ieP22l77pUpj4laNh6sSmzDZ0wrn8GiA%2FAok60ddH7oAP%2FGRc5c7H7TrDOfG4r3y2SK6Z7KJVkSlMKhnFMWf%2FyPcmGx1l8tOZbYLlI8fGXaPrO5hwBkh25YD78f4qDgOwSUbvNL1riO6JYpXY3a6MlUCcyNU3G1nFo0TAwqtTzGBXQPA3aA5l52KZD%2FZrAL63hAUI%2FaUz%2B%2BgpRsL5eqvEYJ%2FCOxpN3oFj16p7RGeCL2940LtnOMWKS2KRUTYPvnduFnV0BNMIjN%2BIoOJ%2Bz%2BG1pznUlhp7lYR0OwkPQm6Q%2B6kc8ooGzsmiIFq32UA95h0yPEHg%2B8D6KGe2T4TmdPGzHhy6abywsO8Gk%2BZ8VIoLE6NAKKfMRh%2BMwgyxdH4kM6%2BQduNV%2BLlOwSZbUWKuERaAQJuOAOULyMmtY6wRsGN733%2BH52bWWal3NFAvMx0Xcz7XiRL2NXuBdcRBCCxkOcQOwypvLW2%2FmHtRPlohDeZQl6gSUfDs%2FkTYhu06W36rCMpkNd%2FTQEyOkCM9BZdSbz%2BVu8yWXDUU1bjo3fzvL1uySlM4vPhOh%2BjdAjDpVL9eBXmMeZC7LvKNpvSc8uhCKNDh0KhOJgkwwuqnJyQY6pgEaCuq8pnbocXTVVqNx0KwP4sQyyCVDEuNiVXLpgywAHj8u7qvnAR7Swf%2BA3X%2B%2BpcH1FzLOr%2F2M5FtMUqAspshvH2Y5weVNRlAPJ7es8PPn%2FI4TtE9QrqRpRfhk9Mht7D3wRARG%2BYhSSgE%2BDyx7JO%2B7runeatbpg1K69cj3BeTLWrNZyCW74%2F9LZgAKe%2B6kWG8yE0FYa03VgRMvK9NGbx8hrAqyg0zk&X-Amz-Signature=abfbe87c966f6b4cf4d549dfd8597b077e59acc26040ee76aa602ac5fcf664ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

