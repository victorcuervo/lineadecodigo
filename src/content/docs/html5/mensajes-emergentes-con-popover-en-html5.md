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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB5C3LHD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcrrzORqyF5WJMGqnWI5k1tKBIbViHMwJf%2ByV1JIvpdQIhANBH9yoEAosPTOYB%2FL30Hkizubc9iu74MZqsSpkqkrEMKv8DCGAQABoMNjM3NDIzMTgzODA1Igw6pIeMIbYFjanE7uYq3AMj9dsd3W4tXh6uQPypQmYH%2B0fAHRJQuOiFPhR6T7bS2Y%2Ffc7vXjb3es1BOShN0j6IIprOfrKzdUFcSN7sll%2FEIe3XLfHAFogo8FQMEip1PnXl22dPl1mQD0i6cSszcH50uTqPJKay86oFUxFeBsqdWhE2dzB%2BAnLGq5GvC6%2BR4TnvqPDOn0mbkRYuI4muOgjNX4La2taoV4eQfJknCaJlUoqAC70JGixIFA1AMrNJcPpJPFiH600EyuC1qFhEAQMY%2BJkfaxX%2F1qzjMADmKhszzrhIdfJf7gnpQWtlXI8Bl4UH3wFS%2F1akwTRyLMJUZWn%2B6idjq6R4x2BfeAhvloEmcpNg%2BP2s0jsX1yvPxg6W4Ow8dkbiLq8AE7kjrnagYiCkM9fQNR43XGKLqshutoSrFxVFQBMaqaJyBMv2BV0nFLoGxHI8p93fHy9N7vTvjzSTv4lXBKBHZX7qMG%2F5wUUprxpWxeLCuyD%2BERw3oyJ9kPJMq2ob8Q1cfFJyiB%2B4ekz3nebfKPE3pvayJelXJEtUUv4l%2FiozcqURTLJjCp%2BF9BJgqHwKiSaJCHOD4hGf63ogm47T2hK3bRyUoBZpSjaOgA%2BSQm8qEiYUwoVO%2BZyDuLWpYpY2jf1bkptuHyTCc68vJBjqkAbSOR1XDzdGej0Uxw2b%2F7JP6Uh%2B2h5MNVlYNE6ySGBzHZiS%2Fa41MwK3kN6PtU%2BPYqfAw2Mt1SvkQc0JS15jsXmhDNwtFr75HAZ1R6lckvIDZqzb8L7tfcpd7eG186eVwEnCr2DUIf5G18NcpHk6U5TRxIPJB85ZxlL062hC0asF%2FobHz1tUNHULSyLnQhrps7RSQZe2hqsy9xLvHbohn15TO2B9A&X-Amz-Signature=a4f584de198d964633e8df5dba4827d03c9b3753581f3795c88a1478c583f850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDEJZXYQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBa8VYz9T3E%2Fz0Ox5aL7A9SBcfivOzhf086AfnvPmrugIhAN5vw0HctKMCwS6vn2Jburhi6u4bjGfCMlMXPxzL1f9%2BKv8DCGEQABoMNjM3NDIzMTgzODA1IgyzUhXwnZN8RZjilSwq3ANnDXYXRPbxNzRdsPMtUUW%2BmoyZKiL%2FlN0yKJcv%2BJBonihNAVdYXiKyK2JVJTFFwlMEAah3LX1l4RR3wlDp7V%2FAKHQhhazZIhZSblFJiw8QsEcgkdQNbyfCgOT6OX%2Bn57%2BwQu3VdG6SITZa92BRiTYnNSW3KNrQnFZlzwhvu4Dl4l6lffSsKxBXtkFjsDZC9ev%2B%2Fn1EQIbGUK37CcEBVug4gL24iKWlqlUTaWNyyi%2F93LhMCgzJeXq1ifi2RpN%2FCQUuW6%2BrX8WbdWK5mOfU0%2B%2BPAQRDqvuMKfkAhSSrgNZy2jh2emZWKt%2BvrrexuoO89IW4EoUsGtE1LQcEOtveTJ3k%2FKQpjclNunO2uV2MsJ2pYwoTV108Zu5JFTMKUVV251fv20CarREa%2F%2Bv%2Bxzlp%2Fly%2BwTakqnpUN3RYM9KujcxCklUi5KZNxm275df8MlkzLiwJcKn%2BNjBQXGWwVZZLsnYt2NppEPQ%2F4iJZHJno1cs4GlaYPOjO%2BlAShFFYyCDN9rjaYD%2FlqrsT3b5PD8oz7uKBFWvSGa2yBnvZgsqXKklnenys07HQ%2FxUdXQ0iOiLKmtH1EACPxPrzua8JS53cHLW%2FADQgRyZ7o1xF%2F%2B7cC4jJaShOncCzg03KKF48LDC29cvJBjqkAYPsBR3PkUMpB%2BSDiq1XRlgRAMimYv3G2rt%2F%2FJZnNP4P8ZeTSkLTHHB1Qsgv9IbWK6Yyx4DHTdWNydHP1S2103BtxZw3iHQIHwm9HdrSjz3xuQU1UEM4BRGdO5l9W5mVeuDbuQTjfSt5QgkV8g3arc3zn5CSYM3xM8FfvLQvkWfHK2ydACjXiGPvU1%2F7dxA77Piy5a2UBo5YXkiFk0EnkSuJzZEE&X-Amz-Signature=e8fb0bf4a3a13db4654c1fd8cd4c55d42b0d845dd46f0c96512b88ab4cc8c688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

