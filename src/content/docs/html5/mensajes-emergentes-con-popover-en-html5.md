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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G2OUO4J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGmjyyHW2facJj%2FiBHMSwjh6Jb%2BurmoC2Ia6eTwQBomwIgO3CPmF%2B9qDJJzB8MkyZJ%2FEqJF7M1rx4QByRdKHdoNYUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDN8uon4SbsVN6exFwCrcA5GTtu7X8eszFTanCX4DFTS5zEMzWQHaq9oyL9%2Fxt%2BbOmxfMZVO0jhJLB5eJ18st8u1VrgHEf2ZS51%2FbhAujgEXqIupK9i%2Bv69cs44d0%2F5ZX92khmO0gopf8dy56BXs4lAoSXFWlBxL7RjWS25nvtjyjR3zInH854HV53jLCROwNl28FcfhwHzktLqlLBzigT4HHyT36QNXSD0%2B8AYuB8XUYEw%2BWJ%2FTogSHMvPpChO5j3JB8t2%2Bpj3L7BsUVA0rJ5EO%2F34gnRiIDKLBF0S0Fg623XTvTFpvxVwJTod8LoCuHrCvLEQEmi%2FwHW2%2BMigKocJ6opWecbLngj7ByE768LEj%2BGKTekxPQU8jcNuQwBFx2tMEbZQLMTULERnApJjfiW8RPSMk0FfWjzAdQiPTOYEaPLmrOdTR9XJVOrny9JKlGSEj3pMQxaOTYx5%2BL6dIohMxHO8svy0zHBTFk1%2BssGv7%2BFlLAyZhCbmej9FwqQZqUry8qCStMpU9BvLKn5yqfiTg5%2BXWBqE99d3T%2FqpPIHCrw3Ji0t2liaCXknWiI2DNA8fbocKuP6iW1cZAJ5RU5eotnYP5iYHcMKsbyMx2Gq6%2BKak8%2FhZ0ExVZ3TUu68dI4U3WyDAwJDljsBz9HMJWMyMkGOqUBph67m5eujBcRgLp6rvpMxMRL%2FUXVurMrtPN%2FqHJHcyD4FwsJEWL5loZE02ZRVs9itQdmfblw86Zqtr2cp4m8U1gE9jxrC1J7moiKNeTw%2B5FPrZv%2BlxAQza7uXZ9sSvCaCDF3DzuLj1gIxadQRr%2FishkpmHQaQJv2PZ1uiW6bj2pePpGyXzgyidqUPg4ANl3KQIwcE2epglQnHEMAo%2BofXSynXlGm&X-Amz-Signature=b39fca902a11951fad94297bb73d7ba8feeeccd19171473db97a24e629768a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663625P3RM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEL5z%2F6q65fEZDre4vqrseq3U%2BgDqs93jYW7UNamnNFmAiEAgl29ivxfxHKwpYs82NXnF3AJ6XcOlYmN6lUlC%2FVXzG0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGigqy5NDVkFr0LYeSrcA9eAgGl6yECUgkxDB6aHdGmJaqGWmz9v5QCnHzCTYDI6r9EoX6mRr%2BS0mIVlAerJIWo4VMeX2S7prtg3OsuXMOllXy9%2BfecZxRqdfgm0UV6BQX0QXS9muvIMTjj%2BsPm%2B25k4Tjq%2Fp4b85qff7IJpTivFIo79RvFTFxaLFObAOjV8qej5rfCFuBqE2hnmtrYS0YaRS%2FCjxUN03bH3o7poqnGG%2BXHfeDR3oLH3I1Mibez5xO%2FnoFxN0Mh9aWQH%2B0sMQutm%2FzAKjWM94SKFHNYC2QiUpXW%2B%2BAhy6ilAMlOdvA2nlogrh2iFdrCrdZq23zjM8LeW%2BZO%2F2fI4Khhan3zzxUQdj6VPYZf4NGA6tozQ49SaumB3EGGlHhpZFgfDccbp4sTdhc0nychPI3SRK%2FbFJm3grZRJbZZ2gPG8usPUy2N%2FVZ3qGdr30PpfGAI3X0zdTE5P138kAgnq1aP2wbg6xdZqqf2bN%2FToe545KCmpqeZAe%2FK6WRZBczp4Fi4%2BWGiv3syHkQI43ahnTbBqIAxljcZP8yFia3Of58TSg92687JPbx02Od3aoH28Pckrc8PUBZmecOwO6%2Fktge5MQPi06cAXwcoe1AuNAKeZztXcAjh2oWP5PzP6IlwcSOpdMJSMyMkGOqUBHdmTaSXPDMuYLkWc5LxYznrv5m6165kreaHXcYQGHRL2awA8pTjE3%2F4rNq2tamWKntevqgsqdiS8V2IBme%2FoAD9Wex%2Bwaa2BJw%2BZE%2B0JmSuUGADOzbo9UpV0mUSQkCOO9NVsu79KTQ6v91IkAEc5ubTafVv7sGFLPYpZmP9tF2W7DFPKK6WzfOgxhmpAwBc1I%2BCtD4ctyHDrkEGjvd%2FaCkCVP53R&X-Amz-Signature=c18e2d08fccda51ecd450d1e839b1fb2ab21f99e1cb8e6948ba8bad5762b05c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

