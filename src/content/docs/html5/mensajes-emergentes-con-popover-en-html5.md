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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFHJMONX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIG3ZaF7qBC2n4q3JR%2Fd3jv%2BRWWg4KbnNUmNvde3YmC65AiEAi72YRdhaTo%2BGXmyT54zJRF%2BA7JJW98YayhTWU5BF808q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOjhvSrgPp9JUxWT6ircAxJ6QS58dTGulY0Nnd%2BfOwU0OM4lmpTZpoYLUAN9Vj727objTDaZapZZO0z%2FwSM3n%2BYAvBBW3U5g6MRenJFP0cPUKZc5pGAzpb3xJmjYSeQprVfvLpOhRd71ZdySoKefH86l70FsceT4D88T%2BX9UL5YSYqOfXsBR8lz1dQo2%2BDVuYSSrNpPQ%2BvcpUvXcwjQ3WMt2PMOiF%2BXDu7T02qqzGTT1d4S9yRMEeeiWCiFNZWtaUkECjjIjprsA4ywOCngZlXBuLFtfal1aUo%2B2lhQYo3xQp6%2B%2FvMUi%2F0L9MTjw3tt7Icd7oCo6IMn3nIN7Iandqku1JqWMLKJ5izWNc5eUOdLPLEfSahlmQ8RgjQjVqixbt0xqLwwU1r8sVPpbitzzU9%2FrLM1zBnhugHwzN%2FxrRM6fZIgKATZ2SdSgycei6gDlPm%2BiopznrUMViAxdVQNzvSDgfREVUQ%2BsXR6BLuZmt1d6MfOdvcESRkJs9BhTeR90m5N57SzrTLKh1NDPYqY215pwQyzHWUXK%2BYoC7slDWm0WG4ycMQU9RVzyobt4xhUfksL%2BdWQu9q7n9SAhGXV%2Bdi%2BqAsTli4wlWMucAw%2B2ej2IgHZT4V0AEYNbVw1YlkxviXJer8egGNHNd7HBMI%2F4wskGOqUBcPTCfKdMG8n7c%2BpqpAqyYGYlLZJzVBT7rEJ%2FH0%2B%2BTdVA71aXNt3gPvnA9oGwHML007YE1y8FkdLRKLiLF0hn9NNn%2BisSKkonuxiPU9%2FfJmLdKxQGsjMJOTdWkTjB%2Bz0SXNFMOLGvUXgljaZV58zPMgJbbYQFms%2BiQ3e568wmmAOnJA6F23JzrAR5guf0yWpuUO9WutM5qWtY%2F5YBZ9no2EmShvQ1&X-Amz-Signature=faaed4ceaf798d5a18c205282deeef8abb87b35ec8e1647fa616f2f909a08498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JXDQFQT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGUfdag7%2FIMhoYAnI3%2Bl37kTxSYeCI3%2BdYbIRqoveNgvAiBalUl7XE07RrtXnGVtPF3Gm0uCZzGqBG9mpBCXb2LPvSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM3NmP%2Fu8790gf8cjXKtwDAnzMJ6EzGZs0JIu6FkxwdK1k8P5Ieq%2F0MTxTgthpBPeLrClaIPBozW4LRZDlSvxRoxboHCg6gwrDt79sBbMzyf9DUM5DCVA6QV3fD9eI%2B19ZDr20IywLeQc0YOraO52EZHQeHvK%2FILfGiiqkAfTbFBrQOnnyaGjM0CX8R04914qiV%2BKeG9OqmrCF2ZTkuu3xagxcBq%2FLJroLsp7H6jyFIAL0gRquwo5qb%2FvLYrLE8Fiytjafmq9u6%2FHjfFWWXAm4xKYzyjQfwvVzVedPiSPBt615lU8Pb%2FUILPhE3s5tRSHBGYq%2Ftlt2uSLTVx2OLsRybm6aApBHYzqWpROK14OladlnXjuRHgD8tApPfgdvKwvW8g9LeGWOuhIuzcLZQODuXmez2phY63LBT8qV8TsCMf0EQBlrN5NaLhC6x3fxhAvcT4CdifVAxFbe7rGZEBJwZc23XSDzxgGdRJqyCepDuXzv%2BQCmAIGVzJH%2F8RPAwijB01r1DL15%2F0yDuL8prjwxUGT0bYqOPdn0a1j4CiiV1%2FPTmvObe7uLTyRAqTW35HB8AcvmQmOc3duAFhvMd%2FjbQYNkx39V8LDZFzyIncrzjqv43CtNI%2BADStapQlptFgjYdeVuprEoW%2BCkCM4wlfjCyQY6pgHXX9gBeuI6LsllANKEZXCrcxDxo%2FbSjDrUS1qLy2tTTDxewDTvvaRawbMu3Boi8z4xFPfLwplZHP%2BE8prWpt7dfcbkfwbdQbPk4vIBWL5WaiF81rf0olTQTLVtn85xf7hhfYViPYyaKqafMq644vCPq30QOhdnaosjfGfa0EsnIV8ShRdrdDEGkyaS%2BIK2lJt4s2HER5TRHMmj6Lu0euAl5Irm4pKI&X-Amz-Signature=9d0f0369d082db15e3ceb37111d5450c0422e708ba38de9cc1e6d361ba23d460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

