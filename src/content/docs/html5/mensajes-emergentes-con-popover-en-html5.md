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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5P6DWET%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXyRv9KisNGQ95NN4VnUMKEUKuRpdheBuTWQJVs68%2FggIhALAhyDC04etHOYqDQKwZyZ4ZFgMNdQDFgxt5VJVv%2BC9cKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIV%2FIAFOcCH9dRfiQq3AMjCaGpTJX3ee8rVOn%2Fv0%2BK86aTsDZ9v%2Fkl9aQezCk3hqfOL5T66WpUZFpvl6VYW2CwPtjZA%2FGufgqDP5ydykToltvCP%2Bg6Bj5UYeqgyoLICKFJB63BdPxUTU3QeJHSfYzxVTo%2B9SgKg%2FjXe0%2FZSkcm0uGgQ3I3BVuiznI8U9fmWRW%2BUNFknbEcSWHtbBLsuHOxyL%2BraJBdbz0g0AJkFfBDakX5VYw5v4%2BLeo8kGpIex338eESGoaFYazfsA7CfU6szooUacFvKtpBGAenra7aCp%2B0hqpTxTKZX2EpJel9FL6tqWZZZWxzx%2B3t%2BtNcNnw0rNgYsmrHam4N3Ksu5m0SLJtbUEBo7AZxLPCkiZ1YwngTcD0ItUzu79m1DAu4ylA0WFjQgt1c67ecf54FIQ9NrrcnpNK9%2FKfHb88sZ9rNmxSjN0tJQKC2BiSsm2pqbMEHfcpcrbh9kSAcnL4%2Bz3zA6SqxH%2Bvy%2F0WQaCN1tDeKHjCiwBAtluwwZORA12Qsr3cwK5df0OcJ61VhhVekDpY93ZUWyj%2B%2BrzwjIkMmqWibYTwVYG31eY5CaNn21HPQoVKwDkDClgi0QmwS5PfRb8NCJOwH64cnGuUKW9jPG2pAQ%2Fenv%2FH4taxruUpPgITD%2B6d3JBjqkAfQB8owl7%2FiaOO19wHg8vTb8EBrkIMnQzDGfezNXVBFdqZVMHh6CM7urpQ%2BI9anKS28R%2BwFOwQs2FEO%2Fw6%2FLYpl1gP5eS61L5HnflLHrpDvAe37cvsnS%2FPCaiqTKzYuOXY5brdm9Io9XE6rGayJwYTm3hbePBdMj6o%2FypxCFUjYWJ5Q4TzRijdiDAU5kYdDqsN7MGITMaUeV1HN%2Ba3v4r1A9CpCm&X-Amz-Signature=51d2a7c5f2ce5c440092e24fc18a1249f2a239ba53bc2b12e6c3d106cd225648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CIMHV27%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsWBf3Llr3Qb9t1ft7LG4GVNg9NqAyHoEEp8Y4bQbcTAiAfmWqv%2BFOGory88fuwUG6gZKkaOvTztxZZYZfo%2Bkx33SqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZvtSO6qYBC5eTDqYKtwDkB%2B%2FCCZCY1xHDXqYLGpne7DJ8YXj4I3ARsm0QDNTzf4tfWBLvkckrtokS45UkbWYEFEOf0VPTLPLWHdhyI7xU5e5CTY2B0Nh4VjSHKBMVbaKq6Oecx%2Fij6ILYr3D20dg7RDd9829NMXanCCFLDFWRsQIL70zMBjR2QFPjOdUrrLxrGQS3r3DWL8S9o9gAfJNcR2ahmxn5OFvvNwwaGlsWAdeyaLy7%2FdFPCnJT7tCZ4oVnekAbJ7VfS69BxKSOO1UofDFR7XduLZ03kAbFKE7wB66ECn5SmGrQB4nEGOwneTH5pBIcYM9a4M21j%2BEK4DAYN%2BMCWT1PxZmXHZlQFWPvDlNHIfrVEcVeEMjydwavye99O7cIdhtqW3h1a8qjd%2Fb0IKw3kgYJKs2pFri0i0C4cmXCgNZlop8J5zIF%2FW0HZJqaYgWIDbFIQ%2Bb9XuO0cInhZTwc1HwH5yC%2BlTHWlg2JKhtklKeLMiu4q%2BXHfWV%2BsNm%2FF4Tha1%2F9%2FG03YfLyDRZJUTbkVyLULiLjWBZGZwiQDvbtr7WLO3L4Jk%2F613R6c%2FkmWww0AxvTR0gk0EjrXuN8SkDWiN9DJvGdZaXuK2VSdQxkqfVRhERo5dbCdQyRft4dC5zgtV896kr4%2BkwvOndyQY6pgEYdtnbfJTLbpF1%2Bb%2Bv8%2F1czf9ZqnC%2B2iY9YTPteMazuaqEDD81cGCgLl4N0wBTTW30BJF6NcLU9uyaOdLT4HZPbLqCIs0a12cpNfJZCdEldMZlBoWqDYOflry%2FYbzS5s5tCprO7XYjYF6gMaMfKCZ6DS%2FAdWXW%2F2sGhM6CgAJ2yVXgXk%2F9jFlpldUW1vwpxxrsR6S943A1AkN8psB0DHXwvB4EGda7&X-Amz-Signature=bad87996be0d7091cf29a11021a6c2097b3e1b8d48022768514de5df7821aa07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

