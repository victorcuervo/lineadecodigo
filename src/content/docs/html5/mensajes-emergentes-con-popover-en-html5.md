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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGC6DEBZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMZ69dU%2F3qhIN56iCZmAjotkL8fLD5J4ZZINZAc3ob8AiB8ydto4sabO2yqonkwBYmlbhPI8YWmi8VQA5jN2e5igyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMuYU9QqgTc5Tk8vu%2FKtwD38AzSAKFDUMtsncvHTZcJEja3CE4hBVSbdBVzRv7gD4v5czZn02DYfBLZAdAFQQKgWAsFpFxw9hakifot0g%2BHIn9HT1xpykyB%2FcoDeuKWV7Kse%2Bg%2Bk%2FNSWobPypTmyk%2Frs2XSKOu7%2Fq53VxLYy8b1GB%2BbkLj9RkoHumMFtC61DJt%2BnK3qzhGYmxU%2FQKesrO1xAb3PY4VyfcCvoDrsEyW5gMFyTJ%2Bxeo7dAmy%2B2WYTsvVogSwPXMiYCn2mq3msDAO8f1bU06V07Tgz9lUnmS%2FwlvC2QYUzVvX3u3bfVNMxngPrCqjRyJTuhfz2Hytpei%2BmNt92CqbBWFFOw%2Fo4%2BEHHHf9IvLiROfUnSJwSTl98arNqA%2BHV9rqHpmtr7M4ai7%2FCQjCUGVseCO9Ew1MpZ5ehsrghgAr1yc1%2FYFkSkBC6NFGheIdoFqZt7L7n0LF5aVaZIbflT8hx1Q%2Fi%2Bbyi0QLasWb0h5%2Fkh%2Fy64f4E%2BxctNTw%2FLLTG1LBuZiApRoWd1iY5oG%2BglYFQIk56Mx0OxlQ82wJRxlHWRa99tUJW%2FCbst3zjOVZ5eMEJisvZi0pVvOB3weVzSlC5sMz1XAgzy46IywyEhTuPsObuYFJlwe%2FEg095NtR6cx7v8%2Fa13wwqKvJyQY6pgGQTweEePmcwmuQG7aTD73SfLNgWu38MfbcfifkpoBIgkbwDQTFALbuf8iiNArpvKNoBB%2FW%2FTRWsh6Eh8BgnntEmEOnY4Zx96eHkzn5H5DFQJ6u9ZHhf3r7uRz5FaoPxkfVaYxtlMISOSL9kloAFdGCl0bd7hcMPhGRBxZY9n163kywdSg%2FtX1Di%2BiGDGXFUevkOo3TnPxtx8ZAgnNkn%2Br5bSAyU4IY&X-Amz-Signature=d5167a0ff0956ba61fc842e26bbdac910c809fdd6c167c0b2715496203af7d68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRM673TI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF51hLaIA9yfPdaqLXgn0nSqJp8m%2Bc6lnuxL2LW4r%2BQCAiBcGtGFxVy4nP35DbJq4SNuVkCqKYdRMnPl58NsexUaqCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMzP2PhwkRQAx%2BEQ8GKtwDKnaNPXL2ZbaEHWQqol7YxCmh9JsgNxvFxfwa5aqaeuyomoGefPiK89Ld4G8I0k%2FdtEsA%2FB9GEgypeY3qAwQ7GgW0sjffQMHsxdQ3OCo0T8hIhSil9uhfWL2WYBKIZpxDVDYr8uCaRvWNaLX6YWbbnrm2QXz75cXNr8b%2FRaDiosdjqVYzTGEQ5XBT9H7Iz%2F88Ds0JeE8algR1JN4Ax4FHAsoprrjQ4nLhiidUAT9S3VLzjEI379VTc7CIgg8F%2FIdBmZR5DoGJhJ6optfOld0kTnqBGrn%2FabNVYw8uh%2BuFZQJ%2BmnDj0RhwpDYSSDwJ7Hmov1A7qHEOqaJpixzHcrx1OJkQMEpcMOwY7EleO%2BP849BWgd0uzza6zooBaUj2KE%2B5iKVxCMO7J%2Fjk7hqgXgxipcnaAEum4VtsojK%2ByBRx83Lv1VcflyFV%2FolPqpH0OfW5W8c%2BscSPPeVyModd5%2BhrAStZrZ6CxWMujSj3d8RQbPVC66K94isIps0TWk%2BD2YOzSiBq9WbC2KH7MVkRxEb9jh2Rw4M4QPWEoq0b0wX%2FzEYjT5slQvBbQqnpzRne2yQNb%2BsCLUYzyitK9UB6JStbKOEo0XubmMaPhUA6CL8KctyrA%2FhscR35cOWjEq4w6qrJyQY6pgENGPs6SZaTTXJvMwoddmGj7a251YkVeR%2B1CMcKIRVkrfaKWGEyoqKRwCPI%2FcRQ8n%2BvnWmgm2UpX48TMV3kx67udcvlCc9D%2BblN1Ii%2B75mxGHTl7aVBHcFS3qBwwXmo0ZMn8gTHvRY6fbmfE8uTaRc4IrD8GmpG3rtJQD9CfjwYQMDzSbrNHrFj4y7eSp%2Fy8PIqjGv4SExvTAYddHtKfl7PIK%2BvZVkh&X-Amz-Signature=c0cdde0257cea73751088e1aed2170697b1fcbfdaf6d5ab717157a833a2891a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

