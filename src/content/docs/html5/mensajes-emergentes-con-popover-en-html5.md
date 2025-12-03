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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XILAQFZU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIHeExPtFY8uO7iOCUs4uFHO%2BGE1rS4q85Jrbiw%2F8Dk5ZAiEAhukEWtHKxzwB%2BJtx8W2QU6VCuBXpKOcCkm1aB3rcTawq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJijGPHfw1xO6CcAbCrcAw%2Fx4PVcJrh1effuAJjq27%2BmMG3PcK7IVWI1DDgj5euZKq2yi5FszKAKy3SRNb51I82eEg7Avz8w0G4Onb9Qr%2FbHDVMnzuCSRGk29PC6OegvPZZDhLH92HH%2BLhtPJ7lB7upGPh7PcqzCfabYSQ5yvyXOigbN1m9gksfYJ1dKoGlcZhPTY%2By98KTN74QDvPns3Kyl7TPXoqSeQscdIqwRF%2Fy%2F5EZjo2%2Bil6zOHeMolU5tH6kuEv6Ya2oekXQYishWxPWPvW378CQ9cXNVe%2Btw9dTPc5O9Bih5HRpvPS5pL44UWy%2Fsfp1H%2BB%2BOLVC4ln%2FwI9yd6CnMR5bNdsa6DFf95vUZingGktyM2kbvra1cBQflVGlobGpef61HiDZPQyQru23F0nnmllHI62swwmKb%2BvUJmEcuzI42d5GA%2B2e%2BNJDKREudsl94uXzYED5fK7SAXCMicZAT%2B9%2B4GdQBj66WHKDzmdDLJxXoVq7Yoyrpd%2F3RknPOJJQ53E46Xd4kWHGR%2FGspRHsES6ThaK4LjczbpIfPOzC2o7QNSpxbCswbvjw8pgSQ1ji4sX5c177xyTFjpmLnnewdpZsl9v%2FpedcCLzwojAHay%2BY0kAbffvTTroqispVgpmTY3%2BsVrCmPMIi%2BwskGOqUB0jWFq7YNMlOEalmqdfS7h2P3cjLRCBknk8Yg%2FqECLZXHON6LRRsXLgq9s67O9HLIH8HnNmB63CoWmdCY53wntSNS2JC89GR1BMJcClXaU2smmiXQmVl1I0h6MwXzh7x2MMUyiKFBbFOqPO54vwnz1YbYz3F78GhSLzj0%2FukndJ%2FTPoVYJlj2XDNXj%2FlKnAwHAtVGCKxWKZuUmgtJI%2FeJKEopgDNl&X-Amz-Signature=32c2692f0aa14443a689b2b248937721e103c4a0e0ccb2b99ab221a43cfa5f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW2AX332%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIF0iP%2BKBqmolZnvYfNSXPKbBmgixlw3aj%2BahQXmR3CYUAiEAsJcT0dJRqFXi1YmnGUGDskHF66ccDs2EhXGy%2BUE2cz4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDEnCrd1JcWn8XYaJaircA0otmsH2vUbe4lXMEtg3niFaT%2BN4EE%2BR7ReZH2KCzcqj7VkNsjB3wIcjzVvBS6lq2%2BbVkwco%2FmsWdgjfQlgGGnRs%2BFceD9NA%2Bm8qYlWahkD9DUwGdOxSIZDi%2BF%2FJS2XcJc5B%2F6bdp5b7YD%2ByWaAjIdfLLK1VWFIIrRrhAVyYVrXi5l7zQtOjJSwgP6C9R2N9%2BWU2wgF0CYJKlCYYr%2FHW%2BLM%2BZiFiuokmLvmZoSPh6MkdpbAT%2F91npjbT83wxY1UdSE2%2Biw1AfAV%2BcY6j6PZrwQCCl50u7cTS0z10fgj%2FqVIQ7gWnV1JJdNKmgUghryDSqGpDs8mu2ttgpiwCOrSGfFEodthFeW44o431nXpR1x%2Fx9u8TMD8ig2jsR%2B2qSGNa%2BZII6BSLtxBMNpRaFprYTh373DDjXWsY0EN8w6FFb4bXn0eT6rtD%2Bip3Qf4g%2FUvCblKF88kYIutCMZRgcbXS8Y4aShxO96LZE8O1BpDnQ%2B%2BmepzAw413atjHeZFnWQmdJjTy%2FDLRWLYZaSN9DP2MO7nzZgNCOvFpJzTtayBishj1SxkLeW%2FidnMpg2ehd4lm0JcmBlHmkqkOxJ9bL8rTciWwjzae4HX%2BIDC36kcxJArQfjJ6tw%2BUB9%2B7Pu3xMKa9wskGOqUBPjNN3sD9WqHKfd5G2yvBZMbz2hiA7KoW3faCUYd4qf3%2B1mYLvzG01Wk1L9sWAi3NXNyfNWA1qTC9OWPWkPxlfy0SrBlnCxZL6ceOYZTbfNY8xTBFVZ%2Bz26GbvFE7IlJpvf7ySyESnW5VHVDor4ZVTfmB3MtRwSoxoe37pBL6PUmYQ5vuNhWry%2BmD0YvPHwMPzI5sN2Dj7TwSPlEB7t8r1ZfdpYlV&X-Amz-Signature=5b125781555325dcfcd32e18b7019f4b97b324dbf2b65e25f5575c6294b1af4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

