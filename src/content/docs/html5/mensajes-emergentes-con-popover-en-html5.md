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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOU4OVDN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHUKzt%2FWdkeQI9GCFxhxLJwXE9jLKnqZJ1z5KxFBWH2ZAiEAujDxqkQSIm7hj2g2h7j9z0NxRb3ThxZYPO9TzKgg97Qq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOWqFDjVS1ko16vxYircAxyTWRXN%2BMP7mur4ohpWlrH9VxZ3EWI4HAazbJHptcymwax%2FNJX08OWSGl%2FfmCzVANqUevFTjuzHyHIuIXhBQuWV56YHmRWuHjqENmhiqG2Oo36sQhljAhSFguygOZhyJ5SaPvznrfJrgmsBX%2F70YBS7opB3yKCNjbv7e40CBo0cn3TUfvLs6Vfn7PY%2BYOrY5o89gpDPtvnRFxtGnErU%2B4Ravvyf4x8n3GYtEWrlwKokWq4Wwi9TgTEjRP3Y5VKqnL8YZFRsNI%2FJ338%2B%2B6IozU7mU47FkxAXiuNS5tlGx8lLCvPJm8BGgA80rNk1rA64rh5UqeJ2fuW%2FUhTvDNP37i9CUc%2F7JrvBQuIKaJr3biNYLJEdJ1oSm88iUbn00VGtNDJVLipN1Jg4VjeyrlCKt%2B9waUfcbRAkq8TGxu68ARXZuNquud8p4pwr5QSnueNxZl2E3mFp6pOCVQjmOWcidDZJSL7hfueaTowxii20N6SXUVsaWBKm9t77%2FADsu%2FvFQWSBZe3qHIpzFZeKmoaGoJdc43uEN%2FL1LInF1NwT4likKG%2BLAjHmoheAb9MOxAovTRryTL0%2FMRGUxhwwgLhtqQVyy8IGJBJCRt5Y23ShRWVlCJdSWOYj7tCS8G4QML7yw8kGOqUBUAfA4E8G4OyNYGdpUJioRDnUsoZ3nVAAthRwHzL6CUOTMXPFzOU3ZsnGuk%2FJTkm%2BZjWl46YtHi5qVLBcOwEtKiGzyisKEHbZox5NMtY%2FsEFnVyYQ76FWakErzUJQC%2FIoVORYcOQAXvjIluFyBpa%2FrwUMz7f8om1pO1vbkQtipnzboZDHKyeoV%2F1bb%2FBqFpyhjrdej7SreGvGg3y18qo%2Bz0DQ6a22&X-Amz-Signature=96156babeaf79b0eb8c68aeb81f14307004acdab57337adc01cf91173a23a703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCINJERD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC54JkeiQRcFAkIeA%2BJMIic7yz3krlol5iVmir5vTdurQIgB0opWc%2FU0eZx5I0nvF7C00F1eppr6D6QWjLh2tyCWkQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDDj%2Fdza1NYnC0G1m2yrcA3lq1H4KquyXh1%2BSXLv82XXjhR0EHZpEhmIcue8d4oMWrXoeR0Qo8VSjJ62EtcTLVXxNgHRCu79WwtIMF4BG2d2DEmHljv2yM1nCP0pvqz%2FUHin%2F%2BWtu78d%2FSPcXEQnRNrwEjENMS3UJ1WACua3T64llBnkQJ7IsS9fIcHqRd%2Bon5n9dmdZexOVidxAClr%2Fjo8%2BiXn4AjOu8ooQD5JeP1jmenPUTDAnkMd90zXLyZHewUQQ9aYymBiDUTC0EpVKk%2FTp%2F2Iox09DJCcJA8mlMV1Qx1YY6QiUgWR2Ek5T3K10468oqfkpINPO8niDjadwVKSiAXhrjQla8YuwbQ3u8aTFPluK%2Fplxq7tYZ5atKZ3UtlrzUC8TITyCds737l9RC5LBBC1Ax3paTR2%2BvoSb8dvy0KwU21rTQarZ%2FGwD5YqY9wXWWl03ROE1kOCAOs7%2Fsg61MNuwFiXB%2BWNWS3BoUly5DIq2JUZgh4uvsYOA%2BgTU65lX3kFSBZfWP2tb5WweTT2ApCdlHHz%2BKdOGsMLf2PdTzl1bqk3b0EW5lCF4bxFgClXSfycNIcjjzAQ8ttKybdW8JJBWW7BXfqvyydDsIK5Fza7Dka1qDKiHG%2FYzUnpIiVJ1IlSxrURaUOGYkMLvyw8kGOqUB5nNH65oYcU3KumZnFvv4X%2BWoKa0KNegDXpJtSOqjikcneBoLsGKt6ZMaBnJTLTpyP7XCzNZOLC6aPAPPTbSdcHTeHx9H%2Bau4NfWiY%2Fwg4UIcIwlMMVOqtPnjKv%2B1VC7xUQ5Q5hnECad7k8FBQIeJ8gBa1AiLRrVq8wH4ghwLsC2q%2B%2FtxwSkT4Bm7eGKeLCVTOQz5bOCJ7gJbK5fF16TLpIQ2hid1&X-Amz-Signature=3c35f5c8d5cf79482d868c7b1a1777ab6906e12d4a485551ada6dfa73436aa06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

