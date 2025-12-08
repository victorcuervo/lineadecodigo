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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBYFW2A6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdsLokY3B6mGoRtfShg1%2F9JjcUmLaN1azEyd%2BWoiej9AIhAI0CWL1OQY9gecE5lm4ESXD48sKGeNJvIZrC6Y51FQgRKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfMvlvIxegIhoCR%2Bsq3AOhtN1vjhl91IY1D3PwePwSrNfd2JYc1egcb63IqXDROuroG3lMD8wv01KcgKkWHawKcrpDvdVV8yVHoPbbg0Hr9psZ5Fn7R%2ByGMhxHchA6bgxdAQmAoVChI032cw04FSoIE%2FdfPU5fNfBb8Uuupz98sQbFmaZs5TBiQloa%2Fli3bAWczYbM%2BPS%2Ba%2BQ%2FfvSajdAaF7I0GrfbyeCaHBBNri%2BRo7N%2F8ovhKVSNYNfpA1JJYKgaYSJIDvM6L9u96sj9xe2pis8wMWJ6r4kHiXFbCQWsMjC4lHChkw5DNc1j9q8d71h9WpE5NoLJ1FLkShBkli0GPCaJCmQ5v%2Fml5aLj08UNCaLy0yDox5xZVI6tamxysj6%2BaPKslD%2F%2BpsCUSYC7f6rOulh8Z%2B8NYvZRS81UvrBByiEd84%2FaBB%2FKaiOjZIiMNpuXoyIF3naAAoo8bHiiPFjGzHYrfVlPzty6Gk8PfMPvq6ckAtXcgt%2FYm%2FIIOsq2sMI7Lx2TJSYX%2B%2Fa5yJeadR7F5Wpz0QOxvwDLN2M3y8R8SteJ%2B46pM2O75nd4s5opCjDytT8h2WL5pFnaVjoTxAjTMsfr8FCGOBT0vPFOqLeBm83%2BthIE4focv16CuU1NjCek2%2FqtyRJno1fMFTCK79jJBjqkAZ4MNkVslNRrPjawQlbkd%2FF1QALqr9UB%2B%2BGzJ3M53iWPhAYWtothwPsb1z60ql2yXp6k0jTypZDNs9LqjsSjCM6NjNnHOgYKS%2BBg2ulpaNGNgmkGBS1la2gLO7yZTiLwgn8rzaXzbMBLeuuck9vgaAyec5M8tiw3tZDNDAO%2F63hNUs1Q8npPb%2F%2FKTcmxyZ1L535fLwiXnhIvBL7uMh4kK8cGtTL3&X-Amz-Signature=1246fbbea18ae10b08f7a42a039b3eae28d41ba35553131dbbc25e515029f544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPRC2DCW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTQAUmadqBy9PpHfu175Q4q%2FCk7ED0A8OkND65OvdEBQIhANOzoEe1arjbkHAIX%2BZ8rp9Vd%2BLlealg0TFMEyFojqDrKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd6fPZVBmU%2Ftv6H%2FAq3AN58D61BuC632u3jCQ%2Bausx6DyWAwOM3QBstAYKFGHPi2feqsZ5gjC52mXnGTnj8lv2fuq0PSJiDM%2FFwK9Q6JKhDaTLPWb6cUpbyd14ufs3gtJsKFAOiNrADQ8qT4%2FSI8s37E5aOeuu9AZHgAhE3DUmTrgL2PfR%2BH0%2FuV5jyC%2BWCeEzFUzaWT8XX356xhU6gUsfHnfYGKflv3L0ptI1m4SK%2F2c2pLEra47M%2BVqV1YkqMExhu3xjoGUW8MC%2Fm7BZ5aQURrDErStOx9kRHVC7S6nHwd%2F2G5%2Bgg6pscPU9Sza2SCctZnsXnQ0LdJxT8BFRTD8K0dTtRoInLrsQ310SYf1SFfVIeae972xYFPP7BBdGAEX35Ie8UG4h0d583bS39sdrOcPHzpp6ZPrCyW32ClrSt5ItbcE%2F54pqSdnz1R%2BuB7H6au9OIdx57QaO8lciKmvZch%2FDpztnIgNtf9dTOHhjK%2FoTP8O6oG%2F9Xa9ykf9Xp64%2B5jiFhor1kzDJRGtyqI2BYeks6h5XU8gEvo2FZygpEU4koVToTw3oefBcxmlMP9soTAoXGmlKVoG5JNv%2FpNEHtRDr7Rmh%2BMJhwfcpwpa61JoocwS2ytcGmwohQimPEqufYL8wqdW6HTz6UjDb7tjJBjqkAeJLF6Yw50IxeIlW01YGopCtV%2BgXfVrYSLiLgr4cJ3rcc7d0fmB53FPbrLPMrztGG4IjRwT%2BdS%2B4HBYx%2BX3Zul9WzTBqJnlB0ULRBpABU3kAyVafPp%2FxX9LhKyZkEPh6WkAUSyo0891RYEFRw8i5llateJ2pBXjvwktQIXL1bJdUawx5NyCf%2B4f1gANvE8Pcqz0Whk3z%2Bco71LPPWRZsAb1oLUx1&X-Amz-Signature=e703fcac80b81dfb94f0c988324a0c859c30370563b742331807de06882cbea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

