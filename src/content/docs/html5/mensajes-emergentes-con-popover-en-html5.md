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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWNT2R3X%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPRZ6OoF%2BsOpP3HdrjFmOetUcVsNmN9ryUbjYgucJENAiBdZRXDBvSHQQF5AKALJzUXckP6OZEwWU1WnJJ%2FWL4pKir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMDb3eKljessLK6rymKtwDrX8u%2BUjgt0UEHYCfmUIKUkue1txexW%2BbJ5FSwu7Z8viBuFnX2Y4FyE8YspZVGoi4bknyu%2BETT7pgGzuPzkQJiuz%2B6lU7T8YmFz1%2Bi9YI0PU5PJVSMDx%2FfdcQ4Rb2%2BHImpleqI%2BFFR6dyLjVIMZ9q%2BnjTF0p03iEniNf9qPpnNgob%2FbtQY4lt0BLPZW9XoJ5WNo6mNza2H2oaGMFUyzjl%2BJCrsn8%2F1JdaipfyoOD2nK7XIulAkwWzivHAn229cr0OIPH%2BGfiiT4QzoME7SWrlCTuCM36QBpNyoHOzPyBRyzBmJWhl%2B%2Fo0790EnZVDYgslpkEFS8kk18jysQ4%2FSuE%2F4%2BMpQIxU6DDczIAOJ%2BNyBejanUOOZ7vY%2Bqekt%2BRw5PMz%2F795Sx2QTT8D%2FQVvS6lScystWH6OqUm%2BWc9JDd6E%2FCd%2F2Mn52gj9K%2BAcynAXLEy5v%2Ffi5RnzPp%2F1jHr72vtsVwp7p8dpnYUjlEmMsbYx5O4V5rq7KYZbAl4K%2BvWMWtTpqT3qGPOn1FUaqDb5r3aTl3odW2EwqCiFNlV0Rr9wNcfu2ZXPAR%2BGaRP6ynWnlxT8G5tUtSWlHMOjYeBJilNRPOIdFycirXkQSVPqaG5FXxwslxNXfNxSrB5QygUwo6bQyQY6pgGDBbEXc3c4%2FMh8Ag%2BQ6e%2Bw26rHGWHXsGf0%2F3nOKpmhGjrmflkaomItwLTkQ4N%2Fonw%2FeBNJNIQrFcLQ25wxCfO0cuQr5KddW31%2FqY9V1ywgGIdRQiv%2BM0sZhwwUiepeHo4L24tPfdXJAuflo7Q6Fn8PXwwD2q%2BQUarHVCqkP%2FlsaozgceBgf1ID3EO%2B1zJU8QIvE5c1Yry0iPKe0xlP%2BeofK6PfCwPy&X-Amz-Signature=49cf2cc1c714fbf4f4c75916b166e5e08ccd09101fe0ae3bd0cbd4da83d93c29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKW7ICRR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV1aaGD9Ma64EXzFqxWOpvQJ0L%2FALJOAHUjcANKPYbrQIgSNmbtgwmQWo2E5kb4ccg1DtWC8GCpPD9g2Fbs5cT21cq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDA0k8G96D7hOBtxeeyrcA%2BPNMCO6d5DUkNK3zEXj95TgI1K2nt33TgzkTv0MykAhLuqITP5xLmPGQOQjY%2BlBkgumr5%2FDFP%2BqmWtfTDF3ckfSK3IrsnT15QCWQoBKoh5yEMYAzGMfzCXkpaPQuHUsFJ0Zy1MKYE6Oog1ZDVwbFQb6orKXZKDlwvq9Hp6cSsKonBljaIoG%2BdS20FO1VVOEd6xNfriuZPsbG339nT1fMr1HWT%2FtwJv9TwMGvoeaREjaHTYETfqzj0pcLER9nndW4vkiJSUbigRfnAYc1yCC83e59%2Fi7qG7GFNNNVqIUZ4Piee9xjE1Fsccq%2FvIGFTmlyzkKcBThRlNaNWOCAbxdcNEVuL1k0lkmqx%2BjnbAeKlXYdEB1yWtYuU7t7%2FLjtv%2BtmPZzpxb2VDiHmbInldCjow9DmD1jbZr5JuDWudpd0b%2Fo0d8ekzZtFimN01GSaB2rzDjXjv4WGUZgO%2FD9Tz0Eknq3J1kE35csFTNhmlUNVwLNNpoba6zCYfI3LgGJd8grwXFrDsZdcaZoamEqC0VnVPb5pBjCFSR3VZDQXMELQ%2FGJA9ZBw6qV97lW237hfP8e8gTYHHiJgLPoQMDzyBk%2B%2BroZ1fXY%2BvG%2Fgn13IYofhS8oZqtalKbdStZu6G7CMKKm0MkGOqUBCQn2Z5mjfAAJcsqnbRzGK0CiVHY3mfeQsM3YbMH3TM7rUUPIszx1yWO0ZYmeEenS3FVJWOJYRmxNO5%2BuCg5l4OzAlDnCKP%2BJxZ3ZAj2sdvdsmLY6xQ9ZoPCbXOhyQGAcQdrI%2FZXTy5x2B2scrkEF2XR4YLXBSoEQoobab8%2BROD0A6NQHL85xBNWy8u7EhiWg46sIPjIg5SA6%2F0AA4ogFQIeO%2Bfbl&X-Amz-Signature=eec8bd855a0ebcf7c965aa32497f976b64300af4ec743c993ccb6183f041b474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

