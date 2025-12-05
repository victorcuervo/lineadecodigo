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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XES2NWM6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7XFBsHq%2BXhjiBpj9iW9PDfvy9ps6vy74iM57fkP5ZagIhAPul0eaHM%2FbJHrWAyDrHoVrjpE3UTdCDA008HPmIf%2FDJKv8DCGAQABoMNjM3NDIzMTgzODA1IgxQLwhHxZrulBeRgtoq3ANHkPEtBqi3MlE%2FdKuHU6mY0OK2HXoyqebKPvxdBPiA3olzCzRiNcMAvvHy2ZHmxHhax4UGPycle0M%2Bv7k%2B2uXPdrJV7rxm5Gds01jC%2BLfO%2F50DHYJE9dCJkiFhkYUoR7%2BFGHQTKFKQxtju0CKfsBZTqpVmnrnDXa4Hjo8qzu9M2vlO7ahiaTb4PFzafcj3VM7pbzlJYTlXLR%2F%2Fl70DWvGxDQZ3tI1iG89p%2FMQo6JPdidtNTgVIu%2FXcgCzJ8Kf3gzlyatPUmhq1EDXXWVfo6aJaR9gYLZ%2B80U5eUDeG733hO6qo0%2F%2FMhYKmjUMb%2FukeyYLmioJ3BNnbhk3wIbR%2B%2BSM1TYp3sYrDpH73ktSf0DWrR31SEtdksPbBDYgw%2FB0ReUZGKFrs%2BW2m0BhvzGRyY5cfKZaGmBTug3TaXbJKh9OAVY5xQEa%2FRylAyO1T6tQuGYSmmy%2BTuA9rtgm%2Bl8prMG7wdPOFVDcUj2owHTXM3Ajgrp5nosXuYv6F030V4I1%2BtQTyjRa8ZrsPWKKm86Ud5y1PH836goZ91pTGzbUtR1eJQeEZvpjWBfFPgsn35NWD93JrN2f4WuRF%2FBC8mMf%2Brm0erx%2BjbYY2O1G9cMh0SdCPf0ZCCiIJWVfesn4oEzDQ7MvJBjqkAXr46Y0olhunyEZhR5eofKyrRlD0u3KrQWsBX7usxsIjBqo2U8gzswFAaLNGAt4t7OjBdxl9UzWGi0hmIOqaDeW5Uc7apfx76Ex7wmVLVyAjIyhU8gZ9dts2kiE2fJ5gggCr5OGIfKVjaECrUmeRflolB2odtzliQ0YTCIqYyQIIZ8OlwZ5e5gkmLCxS7SEHaHmtMoyE5BYzQU9NstcsU1ZzQdkU&X-Amz-Signature=8942ec5acd34c631da37a01ee874f588845dfd145e71db5df3a67045348abbbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMFPOLLW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECtHC1BMwuxgQBcrM6CJt3uNGSbDcM00hcTQ8lf1skFAiBy1dRGNrzIHGMaOpC%2F%2FV4BL7HKlsVUTAhYB6TehzNJaSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMU3GqSEmIFMbM75oiKtwDXtTg7pfdGwWvXycsXdw%2B0W7%2F7YM5jEBw7V7PeO%2F6RJPQRWPnyNQoi7JroHBkwpjBBuSW83fZlUSUXUROKEXLfVxERmkY2QAyOVpl1et6Pw7PwMcM6QjrDmFMqrYk8jQaWc2e5LC6pdcWzX1MhX5WftFHHb49c79jhiNCfTia6xSCeX%2BLGAHviUHZc%2BgkIMYsg3mvr4UyExOuS98OQ6EV0ZYFujoB6DKF1a25JlsSLU2rsSmgN1kgTV7aiivELPH7n%2F57V9NPANFqqcrrBslfRIL7Jj%2B97ScnH3bnw4%2FhKFWiCfBZuAgMG1J8mMymYgt4R8ceXdIN6BckUK3PnZycHabfDQa0fkyJcxS9%2FGe1f22BFZHMK3Sejl4iZUO8eno3D9rcVKX4sxchigF5l4tLQeGOh0LtpaQacjmE3fqI%2F6d5zuDfgriQldaph%2BegjkBlhNw5Rr%2BXMkZAQLArh8EEM6Y7%2B2odVjRtcDLDf86HGrwWXeHZ18CQlzaqbvxaAu8h2dXqEYpAbjxWabTnqFPo%2BY2rXwhZ4KoOqHC49hRgSvzl4He%2BFRLbyApfStjKTzMLxwZdktsb4buI8Wlf4Gu0qXOpaVntAt2Rw71PHmW8ax7m8mOGVUgkCgAfM%2FQwi%2FPLyQY6pgFM1tmiDVk3hahWT6OaANUhQYpZjFACs8FC0oF3yOia6R02siPvgPzp08VLN7HCHHJq3FwnCHtyn9JR4KeTLmt6XekleNTw8BJ7ueAIQ0F4Ld452oUaA1MiHLOi7WbieEqykzBB2G1h6AfLBI69nNIHW%2FnyRaXViu9r0g%2BFTXKbBBpQnkqJWbJ1AIyZl6KsktkEf85%2FWJGDIZ8ChyyjYKavNXBnmo3Z&X-Amz-Signature=7e7ebf50d3ba96c7cfc6ff21595987730efb8a2d1344c1efc0b5a914ef15f8ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

