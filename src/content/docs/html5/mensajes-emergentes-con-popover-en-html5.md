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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GRVHRWD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDMxx3m81szjwaF1feIA85Vb%2F7lbvno6vt2L8eJPEfAmgIgHbu8Feet%2FOiKI3iPwsyrTgNwJIqG1gYUuPs%2Bx73hspEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJxWWzOxsf%2FtHRHK2SrcA6u67srdvZ215xTKQACMG3XrD%2FOGTEVMlWvnEH0MlWiQn3LZKUa8Tf%2BQ6DoGbC%2F6MUA7jQKIVsyAqftLVtQoX2uyDY0GgCpk5xmNjZO4pUR8Qd4d%2BZ00aY9OSqIliTJGpVpXkVaTwXtKZb%2BrOybO04AQQ4EEjvCP671CcLsJonhP6tR%2FYFd2Ugn82uvfDpxYdTDBDqgvKuvd98QqnlqJiUtJ6p5xh1Hnl27S7E0QYoTxDe3BNqAbQKQVGc1g219X8Roouqn3wcpaA6OhVvERe0OVN2iExIhp8IKE4DwjHHhReD36FgAHLjKYBO2qTNXDXMfhTmtM2jx8616zr2AKsj8McQmZIbzvTS38lg7%2FxcXLeuAc5VaXJec9rWdMmB7%2B2TIBb1z1f5p0ob%2BL1OJ9Yb4eoEGaCRsreYev3KYvZLRj9xvKYD9D2MMqiCmxzF0KTJS6nxBVp5F1%2BpnPDkxALzn4AgBkv%2FddlsqOKJVPdPs00gkfRfrqCr8LGepg9ObSnKHp%2BwrRpbd%2BYLBosNitQ1kCKlrrDlxkklU76w0T31qdjjE%2BUz8v4asKUw8z30Vu4uv5b5pspw5vhc88oFRF6C%2BDezjhtKyOihREZhl8Snyg%2FoWLGC7MUc%2Bd4L%2FaMOvTw8kGOqUBqPRBrXbIuGFo2mbjP4f4%2BCCg0b%2BBJkFPOU9umvtL0WDWCRcNrMwy9LdibQgQunMNmn8e2CO5Ju1wYyCYg5DXhaihZJlniKZFYo9GR6vYYgjcVl2dCBly%2BMTRtKnKh3MV6bGlVzRMjZ1YX%2BY4s20OGtW9fCT8AGrrCAU%2BnXOr7W1X5S3zBbUTQDka7lOwz2G0Zn%2BdA7%2BUVSSn3%2F%2FBVoK2afpp1o%2F3&X-Amz-Signature=eef4744f37df5f0d653df7f573f904f55e8604fee31effa308dd3978a6650f8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDSUIQZJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCEEA9KcUf8IIdxPERrcTIfP6S14%2FwSFi2x1vRgCrUKkAIhAP66v%2FmA8eN9sX6%2BXTFxlZ6dguJI%2B6U1zM6sJghhw%2F%2B7Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwiVqhbk1UShyNWCJ8q3ANILPgprXBWxrMdfbStgVahYLtDncS0Cj4XN%2B%2BZf8qbPeIJ9XTxd%2F6f0335gF1SbcgBBQmlCpSAFECiXdBBZXoFk0c9bvk%2BqL6hUiAF4FKcvUV7u4ZskEyw8cHb9HUhydG7ZMnvq1CdXvfHDElbOej4YuEFkDGKxB2qDhzAENDabLOfj%2B59%2FG99p4VZB3w8vMo6HpR8GSeJ1Mrj%2FnleZLekDbiPSrUiUiC%2F99H%2Bb0G3gp8ymuOtOBB12yEbfkcMPpJnxDxqSYr9o7cozteL1B%2F2YTwMNZqtz6nghbHcIc7lV8ki5DhKi27URgqoUbXEkK0pePzOkLqeROLK69opzddVxV4%2BNVWTVmceaYgD%2BKpEY%2FQOdKsrrmgN3dZQxEgJFBhC6Zw5s%2F8mhcq9oerc97x1cpn%2Fu5lxAoqZKZqhaNvfEytnB3QaEdzHBMFH7lIw%2FMTsfTgCqGOJxLNydO6%2BSceoC4T5bhBpaHWAQw2SIHQrOWr%2Fhw9VBaY1GxSlEfZM3ugNv2r6Vgv%2B9lBs1A3lx0LpfNbudUbu8rOdn%2BLGHNy5RWok6UlxEvUep4OxqjHVpJ8VtBzBxjgVm5VrZTjmcC87ittMG9lMLZYKgdsnmYEie4v8Tk5mVKl2PaNn2jD008PJBjqkAfhvSyDu%2B%2BRd4t0aOw1gQymPhnyJCDFE9oI%2FU9Cn5cWPpvWZYsPHDEYv1ZNzaBGv8n8ScWe8Mm7poQ8joM2YFJGod7MiagRmIUA09H%2Fv86hY9gSMToLTP2YzTj2LIirVoT%2B%2FbZ%2ForiNE%2BROxsHlLIRBAyPv2zyTqHVAAT8vhH%2Fq6Jzl1Dp2%2BzTcajZjlml9X4w7I6ahbQP1wasbw3%2FxrpdpGW%2BDO&X-Amz-Signature=37cba8af89ca0b65af932c3dc913dfd5c4d842812d25d539a8bf5589ec3dc5d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

