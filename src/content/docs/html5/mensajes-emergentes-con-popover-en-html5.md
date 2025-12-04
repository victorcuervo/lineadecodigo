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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI5NNOL6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCaSIZdsrqfidpkjnwgKeUBcRLMlfkdMH0Vqk%2BkzvCZTQIhAOw2MPz7CS2pN5NU8uDio%2FYE4JQtl2PJ%2Fb7eMKLR9EHIKv8DCEEQABoMNjM3NDIzMTgzODA1Igz92MbCKAhDIBcFURsq3AMiNAUAUx7fLDTalCVakqtKzGnGywbvY2cmidNDxaT%2BDESZflGarlE9Ntj9fr%2FUTocLe6HTnk0Ap%2Fmag6E%2BKA3ZZJP7ZtmHOL1tK97M9JvFkMurtIaf96PUJVcR2V983m7XLKCXTXGFtOTSY0vseFGtSuCUpkN8SsrXqXUoovaYZXw7VXEHKj1RKqCmsnOIH50gI0P%2FMx7Qu8J5mUygOg27Y%2FrbBweo55S8KPtOW2jVjlQAnD6q3W%2FGY7iGIgL9qwLU2XmjYJ1yY6wkjKIlkHVbR2sbUvMabJSZcveoud8DuP%2FPm5qfF0Y7vpJ4VGmbTFYevennBKdnIkwHDS%2BmqBVK0FP4mQM3WFGCBkmgJ3UfAoDxWdzdoLxG61joNrsySAO9ddzmGLk9J%2Fg0zFrp3%2BVZ9Osn73LI92uWeXjDVpmGDeK6AxrLeVjwK9ZBeaInJUiE0q3zV5MNQAgM4rwR0H5LWPQ9WSs8xYs2vIKGR7pr6b8wS9p7pLP3nj7%2FRAJx5NEbFMemBTXhWBg6W%2FgPeRDyTyLRySkmH7%2BZtP1KWhWApOCNqzj6q90NtuMs%2BICuyLM1AQzw84Y%2FwgyEhKyz%2FCdkFwJWfEmqkzYgCYckdUerBEkiZMENbS6isZv96jDXhcXJBjqkAZw90swhtiBPKuIwBwxbmofC6jFOEHpvWInAcF%2F5ZyZRCcJM9ca%2FMwc12Byr9f9JcLlljOQ5quPBfQezRB37Cav2yZpJSLnVfP3CNz5pBrTjFxJLQ8tXCnSJtjkPMuAglVAhL35hx3efQ%2FA2r6XomYCEMr32DA2pRsGY7sB9mppc01uxeuWMMz8tmhXYCVqiNPaEOl1x08%2FO%2FfZlbBDscenB9pID&X-Amz-Signature=e31b742b11e4074bb97f365f77a742e83a1ac957a7cd18c0f89d6b2f69afe1dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IDUMSOY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIEgioulFO24IJon5WZcgDdV%2F%2BJCuMf5tOofeQm4pCjhcAiEApBi47Z%2FOXSUshgsQB1Vlz8KgjtZK%2B%2BZ5YmCC0xf0phEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIcELASBhuJafPhiiCrcA6jrOBw0ZUzZWfF%2Fb%2FCT%2BwYYsIQJ%2BJ3u9FLzg0Yc12%2B6WtXY%2BZTn9snUABIsYEXmXAzuZBWz8WuqXXtKf6m8e5XS%2BbKS8pYiklq8FC0SxRQzCCc3xtJVkKp5K3b4JuQBXmhSHIwxWIs%2F%2FaYyLaaAwnzlnUKUSGhVlsrKCrJONkPMb63rQ8YyXPb2IfqeBc9QGldbA0bf2T7rCiArUuJqPwkDYAqqVRQDpHuEL47Qo4oi6f3vRoUUxOWoL%2FfCqgcI2tNsFNf0VuEodsslS6%2F041TYLuv00YSDvnE53ho6XZ88%2BfmFGRaF7h%2BdIelhpW3PTc10wFKcQNOcTgjjqqOwzvNKCiHXRLLWwZ%2FMNQ%2FVz%2FLW1cZg2V4KMqnfbBGb8SStp5wciY8sEH%2FzhOq9t4Gd9OQE4GQtnh6eBBL%2F8w736nbZ4UbdRRDA8YEbxJoeBPT2J1lYVy1nt0szK1KbonyGSGVp6Guw3Nkorj%2BABjIw35ZuOzo5U1tDLl7se0u4Nzng%2BmsBrR8XHI3CL47OXIC8GGDpMjSvs0SM3UqxMlGhMvRZoTF%2BK7tmYQ0vZW5LIJj5TaQEn8x5CTIlJ0GlAcgd96ZctIMmWa%2Bt%2F9VKGQz8O%2BwPfu3spZfQpCUTLn%2BnMM2GxckGOqUBv5dzJkID5MowQso0%2FKZlLo77T5UYtQzUfi0wJqSsjzV948Kzf9fZRvyoK4eqApjlR9uoVRGZW%2BxxPQYPyNqdqUVUB6wMCn9derqzsr%2FnluWankvQQ8SLBQNum2XEjq1zmDSZq6W2xL0QM0xFYZbEm4N%2B3KSGAAITvi%2Fhs9Ag0g3lHgzsrd%2BPmhVsEcNxqukZe2ivcsBpql0SU67cHddXI05v1Y65&X-Amz-Signature=7e4568d7830f9e01b9bd5ea7c0e5110df8f17b37c5c6560b357b647317748fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

