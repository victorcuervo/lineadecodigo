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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666URAPML2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUVfdBVB16yB8siCMNVhaCioNvBdXtbImRO9YmDhehVAiAFmZGm8VI38M%2FCE14dGfk9IMh%2BOMG9OzDGlonUIln5bCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMdOF6XbloKYn0qW77KtwDQHLweXPNbv0Nvsu1b%2B2tj3aiKSus%2FBnp%2F6Q0SdBBQuZO3cYJH2LfwxR4wJY66QGMUFDKtJkTTSAt4HUmGDlinYkqeQkC0iwMVP22H91qd0e3ku8hA%2BZzg5OTMphYxBJ279qTbeHvhqmIu7W9MJcPHGg72XUTEGEZqs7aTVRLjhkyA86v8haOXOZNYenvmkOJTEoY5Y15%2F7NE%2B7ZK%2Bz%2BugeNmbvhM9wqxZHt7U2v5j0rHOWaiN261jbPfrQ2U0jUKV2n3Ga%2BgWgMkPhF1jjKIOkHemnOzLvNpjyLRhXuZqSlYi%2BJ6gNOf%2BbI9cXRmKZzFg2eR%2FNWhihLO6TIKEmKO6CRiH%2FdCXaukNrCaLzzV2WEli59qF%2BvQ3OZu8zx8tGoKtb8Mp3toGyoDRtSqqHQADJG0KSZdUIweeL8L1Hbo1NTOCj27m7%2F3POx7eD1jGR1VEbIjvb72nJL1jIcqgHh8H1nw9dvAerMXoWjXBYHmq%2BiE%2BP8xXG1PrJH3Xi51Hxe0Wb6MrxGSUmCtEcMi%2BOP7SGayTSWMzq6mIFo3QED1RSyerViRncjvtRBRIb%2FoDiVjCTgkhNw%2B%2FXGnc8L0chbx8zsHhJ8iU2aqkNsDNY8bYXCN8g7UvngfoIFwCvww867JyQY6pgHiCRJ2FSxqI1NG0rp0og3GgQCUDCM0EwOtgIYb7bCVZxabG1v5f1H%2FXHAbPUDejwAuEXtTwobkwLnLYwBUOQOoKLkPwBFOTWytiZXumW%2FPGmes%2B5cmd5%2BGuiZdhv72BzHIwhoDt5LYxPqy04Ho%2B7lXGXvabQ1SBdxvI%2F%2FkZ%2BAqc6BFejPvp9xMuwOjj1XTlY1ygS5njiZWMhjdb2YR%2BNUbmF28c6Ne&X-Amz-Signature=d2225c2bef13b9fadf500b54d2fa723b2bb73f0b99e38996bc0e248a67ded21f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYCJH3ML%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnVFZK2oR1DrfY97ixZkLnuU8x7%2B%2FTT%2BY6qyvAv1uRrAiEAk3F9gnY5IEQgBJpvjmP9Pn35uJ%2Fy2Mee0qJ9BNruB%2BYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDMLc%2FscRKTKpZ2cFkCrcA%2FRyzepRXikP75ojgEoWHMuRqpMrnrN2SoCsF%2F8HwXDwaeNVvkI08ZnvUGRVVc8Sov1WF8Q1zr%2B3E5XcvG0vTmLXy%2B4Jp9tH2bTxw8ksMcstcco5bH8%2BqvZLw%2FI7VQwaDBM%2FW8nvtZgl%2FFn%2Fkg9SYvpG4gy6X0MxGGq5etP0MA%2F2o3lgyymXsR6no2LUukKmUPrUI3tiIv503BePgjmijOEM04RYKwBLr04QoPqbpE%2FO24DTzfgxSD%2B7zPQmA5MmKzVKU%2F9if0%2BhJGl70Zs7ibwWhy7X7faeaSluhbxddoRhAEO2YHDHF8q1ECfWkwp25q5JkZ71J2NjV8tqoEfWQFTo67U6RR0m%2FS3UdMEcZYFb8%2FRtF27cs2iz5F8QhQx6xiDUorOijxhJbyyysP9WkXzVuEGMHB57rZtwTh%2BACd1326fK1uo%2BU0EI7rBvAL4z%2B07%2Bvw%2B8Jc6Yg8jbcD4gQIGpaCFaXS0LypdijovcxR1csfzrR8xaVEWIOWeo4uuZfwpuLr0EEvmqi%2BlYGXtmMpOMVLiWuz%2FwGgVHG%2B0I69xVfmFxRq2P86bkJdKdpDV60cWp24rvQwvUP%2B6ZA%2BzE9%2Bo9MRjqAkrGVO8aHJfbOzITleKOQGfp9qDkZVMPMLOoyskGOqUB3GZHCRJQ1tMa3oSXUyanGVAc1DLzNGmgVgDhWXK20p%2FnU%2BWD1ZthBiY1LwhtSenAD58cTJIAuOBhFIfqSH1aXwIHNElnkQHvNTV0cubRj%2FydlNIYMOhahuaVTibodBZLTEDzS4x0Kk8Fx%2F5RY4WSoPjUXAaq0Oe9DBEnVAyCT0%2BapJseisBuyLygP%2FYzH7zV3uVdt1fFwlifY1OyOQZpD1uZzAUF&X-Amz-Signature=fecbbd8912657217c51ac06e048d95d3f71473708bb00fc5a2c4e649f9b82782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

