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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGGRI5OJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDmjEd%2BqVrJPBwBwgkA4%2B%2FALus1ESza5WLacPMeOR06MgIgb6FPnnyEg5U2yXVulvRo4KX03gg5hTR8vzml7JuXKR4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDH1hd4mzQwT2KDEHlCrcA3eMnpqhG4FQXHOPAVWc8D4lL0rUuy318Q2S5g1r79qoHqgHWkjJqbrMvD7wUD9D9TQOPCU19JVKLJyGvtjpMfcFphr2FO6Ib%2BiDFzqMrWBImjoNEA4WvphO8mNKGQQwGv97MEdD%2BsT3xW66q66D3ouuPkhT0LbEMcWmAIe94m6Zy5FFt%2Fwp3LND9jxiIyVnJoSASzkh9yV04OiF9oTgC0MyR5LqqcVVoaOrdtnqa3TR%2Baeqr4V9YCNPp8OGsCU1Fb5jL15u0KxuEqgnOHlClHx0o7p6REX84MYjFGys78NaBMrUSy2tNzOw%2FTHgIsmVZ5DHfPUVDDrjdFq7PvYH1jmAwGnwPgBL%2BwF4uPfGzDl%2F6DPH%2FGCuIqYXxfJZ1Mq%2BcXY11vuwoDIPUoMy7lG%2FVgRbrBrYtv8iw7i6AYP8SROhmdPPayudwmaMReqPBlrV53XplAG6PNxnBKaySngFnA2tBXFyiGyvl1e3VwptsO288T8IgjjNXHAdEkMRCIBLEGjrN8a5ZxbsDRhov16jTy%2BbPE8tL7SBg1ucPVcEAi71rO0NSvWGbpgcZlLkdRNehh12NVCMNiSokuFeOY0c6EjGanzJ5ehVbbnt%2F7WkcmnwqReEdRL9mB6hUSCLMPjcwskGOqUBecsDwbMB5iUTYVNYz48C%2FQFL%2FsbanpGlSzWhasOIJHYAjFMVdwlu0fiz73Ih8u1yFr0vfCzvWPba6Gj%2FdMOJqF3uGm%2FInXCZAqO%2FGrcLq2HLl9MdpfcEgZl1HoD1PhUYw602yjQKSPshPBTILueXyZDxegFhgAX6CryNVxNxvRCL6LFDLWEPdTYRFzDap80wRmRTLYf0rTAbTRQrNSYwxjSy9cKb&X-Amz-Signature=42f2e1cf65ac661fc278b423d87b56a8aecb383d88fe0029dcc30d520c911028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DL5CSIW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD3WjsjMpE1foAKBtSyv2G%2BCwki5LZqvxk00JHC6AUKKAIgL04fzlWfXG8toMk8Cv%2BG0pusKEF5U8UCqMu6RWQGC88q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJ46GohW3H5uY5ArFCrcA%2FhRWIoMENJAotKO%2BMdE%2BT6off16GGbQ5IJFvPF%2BGHGf6jPE3rMn%2Bw498eVbvAp96QGEUK6ra2wKFiWeUzXOmrGjo4s310ZX9xilndQeT6FRWmR7TWZjmD%2BMwZihZKx%2BFj7xdshqcsWZ%2FtCDMmXil2LLVAnXztf4OZMC1s6UTEVcULpx1Qe6LFu%2F%2FiYnSZWC%2FNtLH6AtUloPw%2B%2Fc4aTynGa6Jtl3sHvrNbPxctWYBxRi7Elg05QDvl78TiIW8IwT5vEucsgzPLZalAMZOfmvDBmlEw6ZLNbfE7gvMVJdhoYXARuJ6wHoRC1xVk%2FPkUo15%2B0cExg%2F5vQOAN2hvZCq8jzdWHlyLcQ4XlAG8bE1H6cda4%2B2bk8edfC2uXaIx%2BQ9AdKOeHUvXpeHAQFbq13kYGU3Iv4%2BY6Mrz2KY5cl%2BBeLyaCp3TTzB2am2vfzKhVST00uFsRhQ9eoV7YsFQ41eF8IRTlGbBVfTMiD%2FDzmhSQlW5JqRXDCHT9l5NInDW3h97tO6g38HKTWXN5sFLYLOQg18q9g07KY8YIsT%2Bq%2FuYqRj7nYHH1g1pKNwcBr7aRHxV9GbrOGXl3CDTNWwdNoRp6a4mm4FP8HbgGNlLcCjZzOQhnxEfOXbGH%2B48uvgMIncwskGOqUBI2KMxyMCF3QnbgaX5SY4mLBFAxqj73yp5NzvwO6bynzU4F47Iqo04U3cDxAuzKCC3KX4lq1J0oeGPskIGN59HUV%2FT629fc0sElZhpWvZV3YBL8Tt6KzLqPBVAm6fYUb%2Bbz1gyuGfUtfdwa%2B9jl7u8RkHwm5pHckokLjpWtAb1PuqoQ%2BJH6R9%2FsG4JJ8XqwJyySAIBesvK%2BV3lDuqi4ZbPZDs55hz&X-Amz-Signature=65d446887d30f1a6afd0994ef6bc5a7daef6d994c2da3459c7dc1d1ba5f97057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

