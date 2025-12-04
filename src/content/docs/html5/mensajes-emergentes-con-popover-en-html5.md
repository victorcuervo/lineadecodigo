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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN47HXPT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8rFZpIwicnkaGfQj8vUhG%2Fb%2FqntxGnmTPqH5MU9vapAiEAnJ%2Fo71Ez3Ixgdz4qcYterI9nzX%2BAINJfpaXE6xTdWRMq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDHAkPjHeD1hXNFl4EircA%2BYOCh8%2Fzzo7RhD0BRTLg1U9KkAJ8W0L1UU%2FBt0xXRqubDyhWN2TwfqKgm7Faq1dJX9Yre4pa2sOJ%2FD662ZXaoDwDIiVAGQgZaHfqc7uhAf7hu4yRNMrVP778%2Bdv38NTilB%2BLuhwh64EeEk8aXfIHra2afbLcJqLsHr2l%2BMM4Q2%2F6CFPw9Zt5M8dTdBR9oMV61lEOOXuNKzqsXzxc2H4andGc56mhF37Ek3c%2FhCZ10q83GEg6trRq%2F5rm8ZnXqH%2FA%2B6jLeDBHmYyNFRWH2tMfyZdhxJpDTfJf1Dp7LQArMEgcAwHpzVhLsMGTk3CTHu7rzbfG6PEufW6F%2Beo6u%2F4qaAisvARoyAXv25Gpf4KDNWz5LzeuVggJLM3ar0TuEYTN5hJO%2BSIywc6LgPON7XGla2OsOGgLfzaldEXmOYawxN2JKF6Onpn4VTkBI8tI1t1kO2wYIRngTtt4Ew1sys6lCNtG8B3nLjM%2B0rspuBVCNsxS9%2BO3y6XVhn4K%2BxWFul2OsSKtCuCxb8maAXC3FuGn2FNsBJMHD0rjj%2B6U0bIqcY2DrztLmmotrNF0tsJaiQCbL5nTI%2FZlsHUOnf5NUQWC0bmL5OkNVP5e%2By%2BpbaAZP6xd%2F8REo4xfTSBCzZAMMzbxskGOqUB15jYoOrmdhJYs5Xa%2FxhQ7BLm5WeqFXnb%2BoxOrXexqAHudOJNteuP1AvxyOJCWJkwCBvZX6X%2Fr4OMk6EhVWn%2FZKYF1FZ%2BSBnReCRD6k7TKJixCmRi1s3ew4pBZa62TALa0y3Ir6kPgWMMr1H2pzUh2f8RAaKgiIdEIawsgvGR8LH5qPBF6DEcEDvnJ6D7PLQdvRqCdPc4kwgfe5pR3B30xqneAo4R&X-Amz-Signature=8cbe28c90690ecfcabb89c03a89df3027e807f814600e32e998b54c256877ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDBJ2HIC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9ii3Lny4RQSACLnDvpMhVtl8vD2uIcDUHpOjeJCC%2FwQIgGvUA63rxEEqs4HCwBChVsMI8Mr2BOQ4QO5J6X%2Bk%2FWdsq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDIbItdqKxPc1rg%2FFxircA04LqQcBxOKSo4l2%2Bb6k9%2F8M9Sk70dpRFfc0aNIWLkQGdfjWc2NjQYxBXlGvTFZcppyfL4JmRV32COxHS5I6aDtRvlbWyrIw9ZwEX0GXD4tpZ%2Bkmwa4oT2WDSZUNStX6y8NhFq6YqSGoYmb6rQD%2Fdg6%2FA8xKwcAkefJ%2BUZVnGnJKS96ZbxO8ehxSAMMolMVbRB24%2BGlZPZv8ZXcpd0%2B%2BdOvZlfkHoFGpBOosNJgcySNO3wChmKLnLswQtec9Db79F1ifsDYT8wE3AbmlZg1K0ZgdpqpPXPhmPLL858pFhuevI8lEtn%2FMki3scoPDm97G7zAbAslqKJXx3BtEVA1cbrBJyMeen5V7dGh8498hJmA0%2Fj9xOCsqcZIcK4SLoigibVh2tNYmD%2BGCc9NHuARLH8yxH11vJJDSICkg3cxuItW%2FnR4G1%2FA9XBNHyL00e53OE2MCivb5OzDqHISMFxt6RgbkRzJUzs4JKeAjMAEjd7NwiNbZa0xYkcXMQgNlLxa0D%2FP0f6EkUy5HHv8pjvJ39uZaycsfPZMQt4LmhtfCoLrmqswD0DI3pYzcrBG%2BHy3a1ycahAYwYvBmVFUQbIBXCBS732fddTUt9aCIT56vEak73kY49DEIgLtNqZOwMOPcxskGOqUBTrscJoL6a4CUPjXY8nVGefYbBz%2BbNfRNUXrN51kNp%2FX9ZWIogI82aNnTUS3lrTINuv8LRjEdsmPsh3zgTi2e2fiQtxwdZj9jhD%2BuACSJzcUmU0H3W8c63YHr96LkDcuKa4mrCVQydmyDx0OWAovgnmYb2sGQCVraBWzFldhX080Waq9ysaXAuCU7DZu%2FS%2F3tDF5tl9akvu3XvwZqmqvzOlPLd9s1&X-Amz-Signature=265fe83ef54379f1bedebd30a80fe73646be297c0deac78479321cebc94370e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

