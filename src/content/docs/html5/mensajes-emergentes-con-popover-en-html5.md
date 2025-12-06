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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TWTH2WZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCNFvH5S8P8ZeZBPBHL1qMoa5BpcXJiUXqKlD2nDf2OgIhAJ1cuHm%2Bp3BFGCpQPjM6sA9qG6ZMZ%2FhgjQkNnONfvkteKv8DCG0QABoMNjM3NDIzMTgzODA1IgzhjimpchcgDdViYlYq3ANDrw8k4wiKZl4srp4WJqVabgXLQOEZRjdqjrusK2kNAteI65RW3nJyRmmPx6gFw6fFa1v7ba64w2XErh4fbDGf25WxX0dX3peOsYEivxTCih6yOh6u%2BkokTtzgW%2BbiwVexS2uXOHqlBWzjNGV3coBcxnSyzCplflA1fQ68%2Bmu0U24JZmDBPGJH%2BwXWqx0jacSOOcitc2wtTUzfUHPeEg0kXpvZnebyYuzw%2BvYRg3x5iW6fv59t2OJ3pxbKPlJMVl8S6sfPVLDbqfZ3ggtbmXTCNcM8xKsi00LPzetXVjRxv%2FF0sSMeKNu0LS1lu6bh48VY3IIC7LpiqkryndXVFSMxVXpk7wCQRlLOfSW09aoaizq7%2BlmZ67aDV4Rg45eRZrI4fJC4Ai3AbihQn8Y9CsB4W4REutcVVyg3x%2Bdrg1tTyH1AvfUQGcaqwM%2F8etkeLfOvPGnXPfiksGdul4Pr5hGj0pKVlqX%2BIf4TuaM2vObTgl0Qy6Xo%2F0%2FvifYM%2BqfoJFLj1Z%2FvJTsO5yXLliONGJ7lYolMP4SkBg0eFqiabUVrIyAJnDLSU0a3nz9%2FkUk%2F4WFS7CoXkzNc%2BMhYIvKflfn3FphvX0pglQRmo4K26sz15dQLU2DvdpHAurW9ajCI3s7JBjqkAX4fj7VrCwJ8FcS6fLB2YC69uDCE2koNEpxuL7gtxFi2zCXS5ngGJPSv%2BVfmkS53cXrUOVr5%2BUqXDenA9xH5DuvX3kajY9QzjkzeYUUPFRBZceeaK2n%2FufjttMYz9cP%2BVW2OffyFlChb7AcDckUY%2BBBJ5T7H5n%2F0Lh16i0La%2BtN5YlZDDo0i%2F2aVW10FuvpYn5blB0i6HGrAboraeoHwdFtMgOmz&X-Amz-Signature=062afaa6881c667a94c28aa09e0217154479455d169665a77286d394e700ed15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL2JRGCO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu22kLJwxf8tHyYdXwtEUiuBU4QV9jf5ulbItUCUi9SQIgTBc%2FpB3Q01j3koh6Y3uZjna06t2uTsmXqA%2Br3hYL%2B6Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAh23EgYc4tepwPzMCrcA9dgriM4hkEUBwgMMD6mOXccuR8dHJuW%2BG10mi19iGrVkMmkopCSnvonVff31cJOpL277nKroJwcyytK71W6IhgwTiMnnfK5aVfdIzjsX9FA%2BwB8kS7vpbK0T6ftK6re8oCEHPjpnTWrBLaPUxZDGSzL0Nr0ljt5nGXcUTgvEduUQqhG7jmV8Qwmnum04QlyIedSLbXj1DKQMwAZhhi5E%2Bx2s%2BICIpUB6q1M4rTbs5JKGo5ClQf3pmt0m9t8c2U7KJROqXnKQ9TW4LEzxSXOQEGjLKzn%2F1zHhRBY4BKEI1bVeaDwxvFq7B0C9jAiOzPt49aC6U4pAKttNgqPDk54rlLN94s641HWyaYR2T35f8Iv83biOaLnaYlMY%2BTZ8UXPk%2B2hPO6O2qmF4UXpeSFJLeo4VA88sR4qvY0bW4oWiFL%2FRNFscJiLwvTVRKxeU6rQ%2FEcxdBhilr13QxxRHpMFauwEOV%2FcY8TbckRPHmcFn%2F9eK2Vpefu7K4n7pBcl6uRBqODgmTU%2FnCzRsGExyqFmUX%2BUOBwq1IFgAIvgmmp0aZHuXbd8f8xIxIAjdH1NPQfnsaNHsI4%2BBbQyQbkzo4SgkS%2Fi4oJKUEqSRSS1pyQ0VKQ2gf11CACIdWsKNSqFMOndzskGOqUBiKZem99YO1LzrafJbcYznpOKq4Q8eFe27PxZFfIqa04u2XmI8z5xYrV%2FU5cw9Ase8eep7S%2BW3Fs61FST1iK06fJxzESZgDFYT92GxAUXHG45foZ%2BPrL7dV%2B8x9Y0DsBAsf0lrgM5gMADbc%2Fpy20j5r7ergWxADRMht%2FxyOIQ1FWasZEfs13UDWwVZF4qRK4geVQhfOmDqy6mu2nHFNjIEEcoQggd&X-Amz-Signature=6486e118162ecc3fa55d86e09820013dc0b979b0e25f06447d9c38b672d48978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

