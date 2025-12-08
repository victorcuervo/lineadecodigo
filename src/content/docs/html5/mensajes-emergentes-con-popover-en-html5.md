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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDGQLR64%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5cc%2FNi68XiN%2FM24NZ905SaKOjv6bYnnseGlFmKxq%2BKgIgFz1M5hzN94U1vX5HlO6KXD9C6%2BKQ7zWph2ehPtT3BpMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVOlqNiVvT%2B9oDTQSrcAwGZKJutMj7n0CA8gpxtBXsjex4gzhplUFARGsa9v%2BoNDZRr8lSvHM9XJ3PEIFA%2Bd1bT%2BC4e%2Bwwo4MnsDLZDyiQoASEaJmw1lNcoRIoG4rxIIl1l6GXpk9hBxXZlTqNtNQfNwaG77WjBXQPKPWQgvxi6QM5E%2FjLpkQZthCi7H9TTl6AU05rM7LWmcOvJin%2BN8SuGQ%2FDhofKpN35DaRO9janCwWZurnmQ%2BURgHOEa5zHXUk%2FwbvceqL5HUj5l9raMXVE1r3pA%2B%2BXzgDyyTT11awom1S5CzdWAEPWcZDuFXpvpHFwoxgNx%2BVxk6C4fDW3x1C%2FtO152JfEzXZIe9q7fEOftIhPYyItzLMA1ZDxeBohKWoK2BPwagk3PnCmqejt9Ca9Jl41TO7gu%2FhxXfOfA8WdayEVTS4Abu1ObtXMNZ1YJVvnl4V951RFIUdGjITUgjYYEuaeHznTQmhOMay%2BvpoIDS0xBrU0lkxwljqLn79Jj2Zr%2FxHPgT9FWL2rgW9gvpaJ5XLCQXUOfp8Y%2BU49aa3ug7m7Y%2BmU%2FxPG5%2BWJxyf58sUQ618f0LjjlDgTlPlqvIFQw0pdmW%2BT0L1TyMJJp2R6SquOA6z1OGRAKrgyHUYjsOKylA3RTGQdxDPvBMPuz2ckGOqUBZhuKsj2DcxfoGcI9eswZc%2FPV8aAkoH%2FIlAFyKYqpmprlkRp6efDv%2BTNy49K352F%2ByS8mui%2BaVC%2FzaZed2YRhTHC5qiPXrREXpi3GCKzvaxM0C3XBj0VPUpltBbU29wZ4nxyq%2FrGH5J4%2F8dOribp6TzIFsGfT%2BJFbqzo3RnpJR5k5Z3Q%2BfnahkArnvCSaCK7JuSMdkx1%2BT%2B2Y8pJTXpqQxr89j6Kl&X-Amz-Signature=ae39c3b3f138f7e3fa206752f3ce7707248ff7157c53cac3b58983b40af9fce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFYD4UGU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjZYVdFqWdpyWyjs07Btx0Qw%2FT1WhOnMuH6ChL7GGnHwIgNyatrIMD6c5qV7jEBtXv5audGomAFfoIF9TkMMn1J3kqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBOq91LY4LxMELxTCrcAy7DhdO1sy2S7YEl2CpO3X7h0rGGJr1oT6t3zQxE6aOuqUlEgBrrUBm9bUZB5DIWGVyCYMuH1q8aT4pNddjHECUMnQyCyuyrvRmf8GxBxjqnK0k6f%2FSas4%2BqFNkzBFYIm06csXraYjz2oqbyTpeFSFFDOUadaYB97ImVvsLnkE3Ie%2FOOCqvoRKSR08h7M%2BghXB7tjT7TB%2FoGJUV8y3QGcOuAG%2FkWHHUzoiwP%2FALCoFL3oszYTU99VSSs1vklvH6rrxuYh4SI3eLYRNENjmXWpV%2BTvHMuxafeUoTZAuWEclggX3O1wMF0Yz8JIG59hC4tL%2FA7MVgVz4Xuauxiwap0aruJYK5XZ%2FX9Lp2iSSLQYqXvJ%2B2EYdC7JT5cS6j6gjZJEALflBi3P1L6hKwB27RUUCJQkFDp3Nf6IJUHksl90xjLzUy9ErCkyW0EHgrPyt828mIFsCEw5tJASuFC4PsqHUHQnQrJmtD26iio2Tad84QY%2BLlOcbmRAXGGKS%2Fv9Mh2Hl73gqycxzA0L09wNTEwQffnTKLZG4sTEPBjlUv2pRjzy1CKj57ffT03%2B3JlnWnDhE2V%2FjO6pw0yVpo%2B%2Bz51ahGLzpnz6c0sbqRn7JSlCm0o6kJdqhBxUTHpGOvsMP2z2ckGOqUBQs5ox4YBw6hhYtYTuzgJJCrk4v5ZUuEjl0aARA4Penor8%2BL6Z3zegc4n1DG63%2F47qgFSM2go9M6FSs9jnHdL8MTNGsBVz%2BJSkENBoNzpqjUEyIITm0bcMmrMuJNYzWnrIjcmHMTYHl1KRhf%2BVrolvU51G4t1WsaRHWrYvf4XSE%2FuGnN4OkMxRs1qECoQCfz%2BpRU%2BpHz95OWLeQJOvb6QpUWzKksf&X-Amz-Signature=9c572ee605313403fc99fc8d58639380d4a31e74de8a004267afa84f85d984b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

