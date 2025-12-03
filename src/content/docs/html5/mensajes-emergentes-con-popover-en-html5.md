---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3MUJN3Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDjB7%2BoHBV0N4D8SRtNY4g1am0TyjEntydGDRIOmDiWnAiBKN2Wn%2FM79d5hT4OkEA2yrNwCQS2eQcpbKelEXGcLbkSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2Bkl4VUE5xR7YPq51KtwDrL%2BUElKVuHhDeUKpy0rQAiyRJebs1HsVxFZQ8hVj6nl0UsW3eBoDOuKGtMVEundwnKSzgUzcKWB0ojQmNqkOTVnOIhIHa%2BMuT8zfwmade8cH5QRwNMbSKBBQpgTGPgrLvLD%2BuxBrC3zYuVJ1vavcHPYx9RZoUiPmOUcHNL7UtDdaHjVxuJL8%2BEo52LijV%2BzIJDKEKqX9N8A%2F0ZjpHOYFw%2FSlCzOxCyrZtihOB%2BN3uV55r8sTJU5IjcKcXktNYyHsMP3trh93B17O98jrOArCs5AiHMT4xrI%2BTtIGmfi1qnv2MF%2BGfJnuUHvSiuHbZW%2FItAJMe%2BmCi29n5zl7u7buaeMyxmY7ipQKXGzoe7F7gsJX4Mwc682gLuppmPgtrrdWhObiwTdYZ0kSvQR0gOUAZBbiMurBVLldw9yxtTb6Yl5l%2FYLD4dS8AjDhwSo8p7cuxtT%2BrzY7uslmN2HlHPhdf3SkUODSUHrZhqAddg3LhpuJ4bBN3aH3Ya6HxvrqLlBYFpBLPDRTp%2F3%2BLQ4gpQW4xN5qqq6rWwx6S2UjxrSF%2BtS7w4VBySG8q0ThtY%2BHgZDpsMDqPTUVUxMzFzmiFONwa3l10c1hMb13%2FqKTq5xH%2BdwfKjbBYYGPZFs5JuAwnJHCyQY6pgEEkX9xHs4dWvAxOiNfNixkjj7D5KSNspf4bcVKyUDGvVoH3ZZAQJxGna6sYPp%2FrMQucZbYgcasFMtMTcHXjsRVaWwc1J4mUnaaSSrmC10G3OEwzaqdH%2FR5pZTitHwN2cucScDhYkZYkmdw4FyWBQ1lXTUjkqVtnOjaZCnHUs3YSrTo3C5%2B5jvIyZC1MnEEMkshOuR58a%2BCwm4q48TirbdUfGEpa3ei&X-Amz-Signature=2e9beeb4fd93152781b796526a96da6303409d36327093d1f14cf3b91cd0ae07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVMTUL26%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCID40weitejliZBqr6rfF9ITwEwK%2F%2FoOaWQPW4Ig3vzUZAiEAp%2FBK%2FJnHONJWyK%2B3zJsVwQgndJaq5qFySzs5NQKCU9Iq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNI6V5BwljOtsnNG8SrcA0aKCPxT74hD0gAHPp0PwStDbjR%2FgxGUdJXJ5X7jc6XnNQpaUlZtgBe5FR1PHiqj8YXp7L7%2FFJSPBHmV6T8HFOYyhZIHM3UQjZfuBbFyYIERcYwco9r8ca2wZCIDsxfWgI7wkHgZWKBRshxPboln%2FhoGZ9tFPKbDl98ZXi0AR%2Fxwz2rT2yOilIbDufPMj2T7wp9nUKQTcWTHPgTjXdgTXMvFXUZ7B%2B0Hq0YMXGDuNRh65%2B3i4qqC35gOPO1oo%2B9jXJimRwILuGmqzEJb4Vi9axkYsHyfJrdPEzykpWwH%2BJVPjKDuAjmaiiYw7n8LGvWyvB0QSNz0ApERxyr71pgYFO65iU4M3ruOWg%2F14MJYgKtoNBicc%2BCDV0%2B5L8%2BF2TCmJlGTjsAXSWRlaFeTdSJ94FugEw2ilu%2BoFtPwCHbz8e6mKvBzQ7CihwWS5bJHhdJS%2FJT6J89kgefbFMy9%2BuWsY8OTNIk8FgqeqCpo5YlZP%2BNa%2BV8uPVPB9xnlRZO2QaACNxqVFxRHHF57GNhr4qnSsh9TRdgb%2BzJ4qRqH%2B8Gy%2BNsRwDPF5f%2B6n6jyWowGV5py68pSnKWpuiqxGXIbGg5WGOobUQVbFStvYFIrhyGvJWu0IZO1mlt6pdYcRPgxMLyRwskGOqUBI8VSfyeOueuqWHBBvSfMP1ZLI7X7hnzOI7NCQh9s7BOu%2Fy2JKI%2FjPAAcj1BKs%2BRpku3rr834xB%2BY%2BoFj7L35k9zp6WS3Dj8c0QACXoMGN8SeUAcpubJ4qkXHTQvpiqMTKe%2BYdyiE18qEAILXxle8K2Xyr2WBK3%2FPAjVSUeXn0NsBNMyX%2FdK%2FuGkQdmgcgPH3r07D2Hpc%2F%2FPnXgBL2PZa6UOGZMbI&X-Amz-Signature=59efb8a7a9de37dae831a0e073238b07906305be11eaa8dca13977449b52be23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

