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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL26AUMZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFsJhqh9XyJJXarzgzvcJi3TVOT001L95omuFvwQnsECAiAhc3%2Bti66Jn962yd%2FRs78SIt2rtFErptNDrWiS%2Byip9Cr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMIH4J5oKWtv%2F9vLnIKtwDA6zl8NaxCfUSp7iAsS6jgjxK9D%2FOUzzm6EJNBCJOc53X8iCeex%2Bhu1E4T%2Bctis04sVnLWdtd8fhQohiBHtqun23ycmn2uEBjKwPEOT4XXiCaT3TiQDERlhiOJDjg8yONkeT%2FYW8GXAX936ES1vgYAgxopa4AiW2rBWlRUdqFckDxYqiDT4TFzqXLpc9aFXDXlM1K5lDqV88FrNBE3fZBTLhz74CB1rMO5ZToWQFJLfuQ6WpsXZ9Lik%2BjO3ieMJSzbkQKAAbWn0Ne1yUrlm0V3iO6VDCphaU9BNPQe7JNQCP0mKjUb3wM5dWzBVWCsk8nqD6n%2FGTrUN0RhvxaiLhBkRTZEyzgqud%2BhroAMDuCrKv%2B%2FYZnFZwZ%2Frsspl5Q%2Fn9vog305pZd%2B%2B7b5rfQnTe2MV9rfmtq%2BmoKVfBKy2Q3Y7LwssqpXbg4TDilqChbFb9rHAnf0tGDhACiUDxo3DJiHXY2FuKHSaiRw%2BvP1WAKvMDmB1Bbbv3B1awmZFikxcbBrBaF%2FprKcAGUoIMdNQckcy9V0BHn1RRpYh4fr3hbbhiezbBymQ%2FP5zk0n0kQqOXU%2F8IWZeU%2FZE4P4L%2FYMvObZAqUOgTFO0sIOgbBvjtcNb94fwx%2FptTlsXTGcDcwxPjCyQY6pgG%2FzTZ6W023058GMZ6eApBcbUY3zW7v6rEbUGzQ5UWJ0LywtID%2FNdoSybH3BstEU%2FtCowwe3SeTLegKSa0W8sJe0GoQmYrvcluRClYS5%2B%2FjuojnlbxR0YLNkqui0sHPmTTUxvGEj5hKmUYlaWyoQuQ%2BuNnrXdiywfmQ4rSbd22o%2FC1RGOCcFQiKPKxHu2LMKwDEMTYRWJX1C%2BmEyh%2BXzXP35SafD%2FXF&X-Amz-Signature=82c0652cc7cc546fa76b864984ba0f2be51ff37a6719a3fc6c0d90552d2d7234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBJGK5C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCnuhp1wJYwx%2BjUjUojMuA40qrT9bEQbyTE93kjCDEG%2FwIhAOex0qO%2BtPelzxbHBYpn6C15GbRFKp3wkydqhiPTgoF2Kv8DCDgQABoMNjM3NDIzMTgzODA1IgwHy4eMxnNvTkLe3L0q3AMRQNsonGdhz3p3rdFKCnn07VPi610bsGxRR1GH8H93d0QW7fbyRNYXWuwkBoZqapE92qIFQQ4TsID0G4szo0f0xA1cZpt7WKom3CJZe6WP9i6DGkLNQCfszIrrQldGhMajb5I9gxEXsKrWFY%2BdegsmAfOpEVtSKkANBhEdWEY0BBM%2FbiHwYLaTxw9xgiZlS7EwTaPjHn%2BpKYmlQh3Llr2tTHpnixk7P41pu8mtRcmQRbe0Ds6WAwylSBxmRwlZLH8slFKcoHX%2FSd3ewY5AKNAiN%2B%2FdCyL9HXq6YFLOyu6oMAd%2BjJz0B9ovZnrDduEobfw33ddPBYwGgs8XQz%2ByH20oo1wKR5gac4eju70XURo3liV%2F4mpUJSoNGQZW9R4ZfZ1H6OhFsweN2JSkbkov25rdMlnDw0LHVrLG4txb4CwyN9JaQg7NzKsgVXM9nN1nOxRygcB3dHxgO4qzvUSYsp3oLh0xnzf500BuciPr9OysLYFJcOobsu7Jos9lIIlWI7IssTuJbMGvfUdyEuD0oQESHwMWkOKtlklkPr2iamEGrfRALMW4bour89MbpgV2OqtTcItVxK3E5k9OHDRd723mEDjewf9gaJK6SzU3eEYszNjwo8DAO7JwPBdwKjDl98LJBjqkAclXV0M9cneSxX%2Bn0wQ2PUkkSoB%2B3cyoRuAoHXeUr2LvlF%2F96nlg%2Fb%2Bw0i9rRlIlorW%2FIy7nVkJWl%2FDy2eZKieCCG3DSB1TSphOwVm9Mjj7t%2BB3EDP1sIvJ0t5%2FKLj9koFvUof2usTuunD0mQ8KX6p%2Bdmngb50EqZ7HpYWYXGaEJ1sNbO%2Bgur04x%2BjP38t7fopkHw5%2FQr%2BPQtdMKPtT3mTh%2FUTMK&X-Amz-Signature=c885c32dff6c3eb40d8525927e63b299d6c7b296d5a0593e35e1f1cc1c00ae64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

