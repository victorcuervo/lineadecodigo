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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU2QOLEK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsIsi3xMOcpt2Sd1a8nmuhwx668hXSaZ7n15InTuywzAiEAjU5TDVb%2B2UombNNoeOuoTI2HEzi67PMZ5BQzdhGvacUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDF1YQ%2BCZOrRlGrrkcSrcAwEq1KTEnOyjjt78PZ4LXAwRpaZmtjXQgC51d2zQmJM6gEaLKXaeW4vfJ5sP%2BmfZKmErec%2BO3Lyxw7zeaGQtJBuyGqNSKX%2FDQ81gI%2BiT5zuFlLYbnE8x%2BkF7qmToBJ3jZNWyRrZbO3n6to1W1S7JReyk9LxZW7kvRxHtIIcW%2FQJm%2FMTtlpF1Mx2wp2rFnTTyBz08WBz2qNYDiRyp9rztJhj6Ff8cv6G4a0E0xWUGDtd7N4MUiCDktEKdBBOOSP4aq%2FUnxpQr9LOiM5TXJl0Z92ll8vuN1nNjFazBoa7gJgeWnJ9RHNwaf1u5WVwGZQ%2FlrjqbR7ImXhOK2wpvtXEONLAx5%2BzQG0R5vAsV1eW%2BWc%2FIxWpCHk1FXeBmuwUW%2F5mrd%2FpRpYTyfrNIC2SS392tEFrRuDjrFfA0zdgCoOKyijpHXFnNth2Iua1ypvmBXsaT4L7ts5cDZ85tQCP0IZwmITYXhkJ8M2%2BnAgGajUusi9avP1mzTvYdRWIKPMlO4UPjCPQ3FMnVtXME9C1ncxJBxhYxn6hE7A8VJznGCawdbbXPQ7SOoR83TwETHNs9h5aDI7ASR3hgt6oFP9ixSF7xy%2BBhY2BUTPvU5X6G88fUsPl%2FVUDwtDpGGy55NqDWMMTM0ckGOqUBdy7MdnmQ%2BpELnukaXPTQ%2FxfjKVEgmqMc8KrAwVq%2BtyDTJQ8%2Fs8cuo3vV6l1SDxAhLkvVRfW%2B9x8wHMMNsYz04jyOvtKwZClhf%2BS8%2BSSCvp9sSsnK%2BELmea8hcU4UCKzetXchQLq4YFqn2wnqxIMNvEMaS9K4G%2FkKdSPL2GDxdej2MbO%2FYIrNEYMOu6Ch%2FrCV70ZGvxbiAx8P5WUqspQlFYpBEl7a&X-Amz-Signature=a9d220337374d7b3140a453fbced6d54a327c6bae9d797767ba4551f2a1da25f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGCSFWZO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD4Nxojx5wslclUSyrr5livijPs5laXq7dngfPENRQwwIgSwPHM68Tu6qNTsFSY4dZFubpmuX2LX0xLFmn7swo9P4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBzsdwd5iUu5KCA8%2BCrcA5n9VjWO4N7dHWU0FK1yGBkFuTcrCbQsLjQwtTGxpak6hXhCuHn0OC7EVWKYbyJt0WrqLbK2r3wR%2BK%2BmPAtRYPSqY4X7yI8pxaHeKCXIgib%2BjCg2qgGPTrFwqx13nBpv3ba%2FcWkujAH2bu37DRanBKVYQsq6fVC6OTzj%2FPhBUxDcyVdYC99BaggbxjEArNBI3V5oMj7jlMYjW52caAtvIhtANntSDnbnZi3KJH899XazcIvseVBuFRodZexykMOoH3HO8k5icVuPbL5uFfYpCWDCYWhsOXKw%2Bse%2F4F%2FTZwAmDbgY1A3kUTrC07B1%2FuCvcgoE3vp9W2b73SO9kd0R1VapTFY3ZshzFLPuWeGR4hSQuwKZYyAQxJlBHaMigCXpul5k1nYTMXbyD4D7FOtdOcQl8FZukm4an9GCYWGw%2FXg1NmE9mEO37Ls7W2tLUUVs4WA7zFlPJXrZkLpZJUfKqIf9uGm1S4k0ql1BeSyoGzymW2u1EjLdjRHBnfOdCU%2FrKHW5haiyjS%2BfyZx5pEW7AG%2Fg6DC2NODW5hWYaOfbSblwNJ6qOlrDfKx6f3ITqKXC%2Bj%2B3ODIgmLCUAPTSYamxEPKK7Q%2Bc7UY7kt5nQD4keH5HCSn4ZxGeZ5sNV7kOMN%2FD0ckGOqUBsvnWtEqQh15tZFiyIxuvJKIQd%2F4Bu8DOolKEGoefvRcvjDrKA%2FdEwrT4gPWt21QFrNavBHGw13GIhmkoshZIpvKPFn2o3RaNR2hW%2Bcv1SlTNXX5zdXIaPfgGkp4PKO722ciHRJWcEfohUhkxs4UAEykgxyT6z5lqk8gj4DEgFn%2BacOmHKKC719Bdna7mlnTXxrpiGSXB2%2F7T7%2Bf%2FvCoef2ptF9NO&X-Amz-Signature=48f72cf0520771cd6874d036790aeb846e6e34c053b1552bc9a6a79cd9565c09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

