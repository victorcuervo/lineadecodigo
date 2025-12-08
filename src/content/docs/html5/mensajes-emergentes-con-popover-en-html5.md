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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WIOOYHK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzkH%2F28V9AuEmc%2FGVrmexBQaPMqTuJ6f8DtoxDMdGBoQIgS3bqcr0qaC9xruaaNMgAuUxJVk6mrl2ndUqXyoe1V%2BwqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqLh2%2FiXvTSRyeRQircAyZpfNxvZO33ghKg%2BNSCJOpJ8N%2B%2BYReVlJf%2BSV8mU1N37yITed9E6VLpRpF%2BiSNPhV0lMVB1OS5OEMfpPXxu%2FBAx16%2Bbe0Ydhnu4sYWX%2FvSiQhfoH4yEkijnm%2FJIZqJMssPqQRgSiR8x9WxxOyPzWBmL3m9A4XklZ5fVH2YHYTtqtsowp%2B400tekGyXEQVH88YgZMWPzQaDxuN3WU0nOLIw5yhwHEmRMNA2AK3383z%2FOcCj2oRqk5Rg0RZBEGa6eHDOOyw%2B71aiMBp9C9icFXWYwt9BIRj0FiqD6uBEJ6a49NO042CJxxwg6rEYqbe5RgHNBUBNcyXdeWRS6kAyIyf49ewfuqPCr1ia0AOi66iHNwx9VGiluu9ql0GAeYPDbcnlexeLd6bLFjtiOthu5gTTC9zsycEZbHWjuckMuCkA7mPb6orrRcVfUlv1AYnl9UlabxpUTtj%2BzodUC1Flv318A3sNAvE5rhtbMZm%2B7pXWsTF5ZAXYcM%2BFfa%2Bpw%2F96KmAXxRH9nLaZf%2FujeO2vDiedGc3KvCJEStb1GJFakf%2F58maEX1Z8K0WOSorpnpA18wnFzklS%2F9WJS%2FSSbHKU9QrmGKsLQjyTG7ooTs7UVif%2B14wp79gBzaYeEI6eEMMeH3MkGOqUB7uRntGBG1NxDdueXushfnreE3reiJERDvRiA%2B2T7%2BY3ta%2BIbNccjrfK3QedRFOMG1wjL9Go2YO7UZDjLkrFejQWjj5RXT6OWzLQvZGWAxcXcR6Ut4KDd0hBCrdKMdOHdS1LhV1Vfb0PxCWefLHbWwz48fi6yqNhrQgahJm%2FX%2FX00IQYi%2ByWRfwEPlkiT%2FOOEsg4Bza9J%2BZu4VrBlS1ltd43lKb7A&X-Amz-Signature=53c39db7b9adfc9a9e5c6e965cfe5c920967cd9b08271c11c1562c49fde0dc32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6FU63K4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCVicbCEPUtCWm6Y5gJrAudPPykZVOYwn9BDqjZXRm6AIgUVLbSbhCDX19CZUg29%2F1PWzFX%2F8DC4Xv2cMzhepxCjwqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsTcdOdvWhVWLkugSrcAwoHc3VyWVy42OptEHj%2FkaF3V6VDgBvB2QGnVNvXniZfNIf0%2BIObWYM3va9OjR9opR7JzhDCZPh%2FscoZAcd5M0vMDbpfmKA5PEhSOYUGSP9mgh4WqcztmyyOqhoopNaA7j79g%2FjREK3HuVM3fUqGIAYyJdFIT9vFtPvUEiIlXZpzfnT6jNSIF2UjuP4EkQF5254oiSTImHRNdakFWD%2F41t7CE%2Ffj5%2FfiCcMQlydfSObSByz7ZfYzHbqaXv5AkEsg%2BAtcAl9%2FBuwKVATS4qImpalcgDWrvoMylnx3eA51vfTcwzLbzDMWwdhB2ryefET4V7zZnIVEG%2BIdcrZhDYYle36YfTzizxJcod4YLPt3ZhXjXVK%2FF1%2F5TUSp1u3JKuHrGzJ%2FIiPQnuPxkWGcKiGqLs59vhANiTWpy1caBiChzYRGjjCs1CZSJ8m8xucTSVDgSU0EmkoLGQsw4l6vyD4w3DN8xCMMTu1jZ4FxTbuhd7i5Hv%2F4WYHGE4T9f5Zt6E1lcodlHVF3a5GAh0OEWSuwy2w3gtvZVOxhUu7rnywqKYubXR0uQU1NnjR30AfsyJs%2BKxBtwbRXbL88PMGgd1aRPv15Vtd1s6fb6S2k%2BYMMjwm3euwmmETPwi2lgDoYMJyH3MkGOqUB4loCubl%2FDwNje1ki5Jze21qyHX4rDFpJivaTviIFwjGdnQpT2NwhBDCoqc86xRw2cBtmqfXcXRPQ5bnqdW4hjyyZTAOg1w%2B8bxv%2FtyOoTwrMijtklFHkuYncGS4ySb4d%2BCjx%2FjWnRi52G3lElvcK701AuaMdPQ5gWwdZOKV%2Bx673JqNPFimO3Ab4BXZi%2BjxvNr99t67n3khp3ItdjJtaOb5m7htJ&X-Amz-Signature=29c2d0dfff21fee1cbe9e5fb0f98f2f58077a6f6a9e84870c2abf71e0a0ea595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

