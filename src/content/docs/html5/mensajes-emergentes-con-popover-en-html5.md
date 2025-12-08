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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOXJ3V4E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ1oGvumeTWuu0wvyzHcZzrrVMnRCbhB8fbYGxZASoYQIhAJrktEXJBKDNjC8ngNFWCYG%2F7lTL3jg4Ato%2FEIJWt3WzKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDSvIJNporkJsKmbMq3ANB0voRlsYeTrZqiEEllFltchC3mBdGg7Y90DRBTg0xyBJpddVL2rxV01QZDqwc5FMy58IQSpvXv0T0jPaSJV3tMCDZu9HjOASOIYXuCIEzTCb8ziUI2tjh4QX%2B7SLnJ5RV%2Bn9%2FZdgkWgtdclLFNPV4lkl4e8r%2F%2BNFC58vs%2Fm3ffaUACBj0qYGgctg2sLu08sLvoJ7%2B0pgkpVyOJPxTm2J5exm57chv%2FmW8IYyg0iWlId4cfcev12qc0q5HUXqlRkOqIDoZakG9kpw%2F1HhOIMyozCOZSZ%2FdOwU%2Baf4BafnrxVr1lRlpNy2mtD99rWNPUOUsdb%2Bc2x4SzMRCcJtA9iwq%2BXf%2FQVw1m%2BVNZlGMhaK0kyYdCPoXqsMLByi93xNue74yhzbMsOfzTjBDnL7hhrlsHgQrKxHFu6k%2FRZmDySoWHUAaWV53m6UN91V7mvD2AukmTkSr5jOkGTUab5Fi8N2fCqreb6cChbHs5UEJzjNvXdD3CWUgpRF5IXP5QNLNPSz7wVG82TTK%2BAE6J9eQYqaA44mei8fxq5J9pSd5BJ3HO4%2B8x%2BDWDGFa9FDDySnXXielVH%2F6ilm9QJAY8pwkSkzatdIUObl%2Bs4IGSiIo365R2vtsC96oxOYW5Gg1MjCkitzJBjqkARaxTGRCDM9MGuUGx1LM1oDmr5X6gQwv6SAyXieGqO2NMgwIvIQgsSKvMIMP17hT781CuW0s4Xkm27I7daPEtQFbgRKJT2xn1SPebFvFG%2FxfOS5hOJj%2FuZmi1qG3GPQFicNSarjfUxob%2BD72fPJxDH2vg%2FgTEdwfW08JO%2ByXWxPDzgapKdEtAu5uGxoKd7s5C6J2ZYxbFTXT%2F6WJ5DOZIGKAZ%2BQJ&X-Amz-Signature=949e45a9376de9c76d0019dfcf3a68ede1b40d48fa93f61529418b9deb988424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FFCNHA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJYYCO4mzu3NmPduZi4%2BIx7rb6kgIz8Nc4FwzKvrFfLAIgcBsdJrnJKmTcB%2FLUHRmDfCIiFvFqjBXEtFxydvSQHD8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLtSJ7A9vvttG3LICrcA7Cj9bU6K9dLnVGmA61bK7%2F%2BbCvO8Jie%2BfeHaxWMKU8vD73mZ%2F7g5%2F4cfUMGy08Ix4ZANwpd2HDQZw%2BHQHyPBgZkNLduy5v3pO%2BciiKQL%2Bw0Pul7jhVqPfg6%2FPogeBT53suAIaef0L4rZjJOegP4CQMpMWEI2tjL8rCf8l1iV1gP9yaxdyFl6zjZUIAP10UGiZV%2F06DpAXG0WQVsTccKi2fYpSwg28wLTcmAJc42%2BQCCqQEwXDmwduC5yJk0Nw7h9%2B7Bv%2FiC1yrLlP%2F8d7Ya1PqbRAR3gU04n4ChoCI0t3DZBo%2B9eOoLl3c%2FQBnERWiFYRgdiMlZqEXebjb7NaFhYUAYBm9VTjjFvZbgzBTeiSZiUGFSmjVaq%2F8WLo1Kbf1lf0S6kvTLD7ljeH8NfBxe%2FU6dH3Ue%2F3hxe25lLwPdBEDkrjcM3NGm%2BM0BpTAsb13tr3LRMD0sX%2Fd4b%2BHk%2FxZ8bu6ky7y31xtbUUTdjNfvmjqfQ5Cu8USd8nIcknDfvc0gNRZ8tVO6pr2%2FaWyS34Alj4BwMncbpujPDPt32TPxl2%2BHqCJ0%2Fy56UnBUy3Jmcb4rN7a5htnClLAron%2B2k9ITbUU6VVAloaFmAl6xZzb%2BR8MEtuE%2F0OnUWB5SwkjbMIGH3MkGOqUBpxDkXLiahTiZAon%2FxrvTa7vimUSEztUs62AT4XO%2BlD2KKIBs5Dk%2BvKHaaPepzKPMzK%2F4TL6WseKlL55EtHTRQ4AAvYPKUZzdSOyJLprRKc9PErOgoXyobtDuy77wRI6S5HwxjRPrHJ0mg4KpvqzIsfRVndwf8a7HSX0Mwwy5fv9LxH6M%2Fyxn%2FvALreFS1y60%2F%2Bybg7N8k4Qlv7e%2BncUcdWOHPxE2&X-Amz-Signature=2abb4507ccf542971169b1e8b5ac21d4de1eb4fd92a32278498ab8a5b6eeee25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

