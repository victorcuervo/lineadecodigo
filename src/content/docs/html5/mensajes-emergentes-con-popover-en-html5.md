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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYEJXJC7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBgmpz9q1QRitFIpwuq8M3xl4muN6R7MXD2102DO38DAIhAJkfa0lSWvpAViw9r6Csfes3pNoq%2Bfuv3V3%2Flw4XBbOdKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAQDF7jNceuX%2FYjZoq3AOGM0FpPzhFyIONA5MxYQ%2BQoOOT5cXa76ihNJW8Cv27nA0k4Bz%2BhYMu07sLNdHUX4b8EU%2FPIICWVOgtiqVGZI0i%2FHxLIeopPOIyZJrxLHtvC5TghzK5FgRefcH3cCkqbLZLCZqRX%2BzeppWkki2hFCdwDtpW9w%2BQzZq9gEh7rit8NzTiNQb%2FyVzhHon6bZFrDXjjz30ekyGQ%2BqU69bMxM5YorIzojWTffALt3gu63iDy9Y1ZGtwbZ0a8kPBZc0AJhVPSoaW9ceHRXmghP9S8T3Z7fkTW%2FyWKqWy9YHgJ2TCandzA7vSmnkUco7d1kjDGd97F2opZjtvM3t8cDl2LK58Qm2afK0Rzh5V2tV%2FytWj4ZF7aNprbqUSEXO%2BicvaNxFGtozrS2%2BRs8AomRUv8LFoJjFI9D1ExeXLfoCfe9FBhc6Nd%2FvkOKattMsjWhAXZZOpXs8ZPb%2FhaOikV2GEV%2BkrufioiaQ%2BDL4f8qRiMW%2B2l7dI8OR4baA9TmttJGMkE02JPht9iOok2h1VP40PvCI05jaGWLZfJ9aEKQzSCS1rgYODRNIpG6XABKWQU0nfrY7BhwzcYgAUWHHbLvNgys1KgneDJ7pGThHV8CA6VrdQOIm%2BCsbhWCF1ZLo66ozCB7dnJBjqkAbl8AxnCXrCl6vpc6t8Edo%2FK4fTqKO8ZSmqDwxYwgWg2FSK0ivStUDj%2B0GAEi2s86f6JZ%2F7dAZd5b8wMQo9hJWJajx41ZtmTL26MTiaSOjyxKksY8yMlb%2BCTNZ4wVZgvTsRjc6xbNbongT96h0qKEyIojVgUFasxoyc3m1KIUqrYa2vqoDTYqqYbR3i2CteQdaUECN0AnIxv%2F028RhewPMs2e%2Bzj&X-Amz-Signature=b28485019b6efea52e7daced44a85e6d5dd035832adb70b46e65c9cf334cbc45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYMAJDNL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIFTmFOoKAD9553%2BfWF0SYxkc%2BKrgV9IrFm5%2BXrY%2BqMwIgDFj2ToBsanAboB2fX8wGwHFl7lO3%2Bqh7onWevaFyXvoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5CILhMEEgOeoafaCrcA4DfRkrKb9AFgTlGgh45k5xdsCTAXF6klgdnPMokdypjSQ5sHxESCog8U4l0vT5E36FB7Yg1sY4z3SyCRIqNJM31ZZsjeul13l5WRAiI76qaoADgE5TcnmArGZqcdz7UiFDuDsArjyerR5eI4WHNv6FRz6tfpdXkO9x%2F4V8fwZW%2Fhi6G2R6fE94Vzb2NrCM7uW8fOIfT7XSPO3MGwDtIy6MV6YmYN24ISWmluGw9SWe3Q3ny9siHllP8HLfoPWbln0edsVAo12KlCTgKZRYTd%2BwgAdGYqiS0VR9Nb1gFnhiUuEy5pDo%2F4vG85i1c27RqcNB0yfitEOyyRbXkXn5VI1fseMoJKRMRIDTU9pgwY22E5Y%2Bma%2Fi3X2FR9upKIqNkfsrHMAWZuYeIcf2SK8aR2EtEjqbC2x%2F0zleCeIdHeU%2B5YxMRoUt5%2Bgs7R3kZZ3bLqAlcrl3lwyZa%2B3QeyIo%2ByE%2FXmJETAEW8EK1%2Fr0bibuAJ%2F4oyf6iJzYAKyMRieWZojxZt4iZ7mHHbE67Uo5MBnjki%2Fpn6%2BMXfo0EuGfmCnPS5U4ua3Anmrp5w5Qetndl9hzipGgElL7gs8CO5ZDEScvvj8EA%2BQdKUYCCVUEyU3Yne5sWPQP%2F20SNuMU1vMPTy2skGOqUBZl%2BtDQLCxMGFf1hK3Yi%2F%2FJ6VigJoddwU1tnTrUUBD1kc0C%2B5KcdEt08HdPYa0UT8pHb9Cv2f3wjYkzNLqoYmKyrD1VqJtD3Z%2BNTjjsaw%2B%2F3udbzz9CHgdkLH6jIHnzLk3eI2ipDaKE%2FKq6SGhaOMTcvbiyF%2Fa3uHhvWvwGjWtS8uPF89zVS3zccoQ8Lhu8iTNxM1tH2RXZPDXTpOuHuxgo72lasi&X-Amz-Signature=e99d280b4f1231f772490892a6bcfda601ce8afbcdc33e64e9b17db72c078d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

