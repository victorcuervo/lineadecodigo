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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPIMBGOO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3V8UtYUr8Sz%2BDQF3ka%2FfvYDFPt3iBkGppPKcN6dQjaAiBmlIXqS8qg%2Fc26zd5KHOUJZxL%2Bs%2F8cEzUPLiwg64ME2CqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMftefeGh5F5405M%2BGKtwDjrEz9HfFWuKI9jzX84WzGZgNr2ryEmDcCAdI7FKHdE43bim9TSQ4Vx%2Fnsz1vMo2hhWn225vmsyRiRB8C7lijw%2B8rfCbslSK94B3VHmf%2BtyqwoM2PxVnSCiSmcsAIp5ZB%2F6HsgZEIVyECw9CuUJlEMOp%2BeHXDFwO3jGs908rViia7SXWLT6GzkGdCc5p8kwDbPvD5UWmDFZlQShqS3rNo3wql4gSPNJBLNjJbNpoxJbiDwF5GOZ0DYG1r3kdVL80ysqdsjpKerTrmImsoo4ZMrwyf4iwazAwM7wNZxKMOFo2ZPenAkdYnrEEA500o6aqJhixuXdPWL2bBSc1sQD9GyFlk%2BvEfmLaHHrmCJ7Lli0d8bw8EFXcJHL16uGS9rwtcsLrsEF%2F5scpkubnOPbFpB7%2BywNGxhb0PLNcHgB%2FRUI%2FqNZIHbtMJDX%2BXBLkrfAvkCqM2XO93RqMNTOvhJChbOA%2FCvYk53Zt6JjeSAQzJy2sJVuDtDdQQgGVtec8RZLIDxfLHocrRXFoovlMAY7A0t1rhXe5pOrxTrwxquvZ1T19bhEXpG1xlMdStCwZhqZ%2Bv%2F1dZzPvnKX19Vy9HeEr%2BKuuWb3cazdcbWeUUZPqBrSLcZYpad20fS28ZPLYwlZTZyQY6pgG1kkmq5FMUa5uusb84diyNPw33QlreGdJyabFI24OG3mU4LWCgiCHg4Izuqn2lGfDmyfdIrb%2BhFCjJ9J4PXTjsqJ02zr4vT4tqThc5IN0Bb6ezRd2WkrBLzPzBgMyxlBsPzPHD38o2U4n2dLyUBvTNBrMiBT4uup%2FPWKweuDFMgXIFld3ljsGPaeqYUvXr0yM7u5RMsye6wtnOiNo0bVSMkGDRSjmS&X-Amz-Signature=1b4d24d571ecd9532e9317fe935b01c350f8b06f26c57e5e1ba5fd2108d2da99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X55CR3GY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7O42uaNsaGWszQlbvnDj9P%2Fj5MpQ1054BVzBbV8tDbgIhAP7rb5K2QR018KBQLsyAc5pcjN%2FmVg74XRx7%2B7DW9eFDKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTcH4wM4oXuHQOaHAq3AMUWlqajoMeobUfCxDiVVAL6wIB%2B14hRPIG4w9FWDe4Hhu2wA1hyRw98GEYV6tQTUVdPH2fOEZx3ydz8M%2FKLo2o8Aw%2B81tek0F3wCCQciI94%2BVOuihAWDCYme0%2Fhv0wwEzDUbgL7kztiJuYBVz2m%2BoNK4IMEcCrKyO%2BQlYi%2FXY4hXVyMr2kVpbu5eHCtu1kPnY5KYcj%2FefvfEd2Chlvyvh9qOrEdw4JqsfOqMfE6X0dqjazhnBTiJHCj31mqi5T7uO3qeCcQfCOUJv5G5zhDhFCNV%2FHfW1ctIEpAATWLPpCe6XRnkK4%2F088n4OHiiLVAynORpBgNNy4W2HVHUBqCW21Q%2FkFOL8S%2FVTl%2Bf2zxXuzyJVIf1Doh7Ny2%2Fj6rUrLmCCp9TiHIiEwVBexq6z7fdHWCb7sackWZtwQvY9moXQJXFzPzJP8wR0yKlacMF12PFR3hhyY%2BQG7DfRaAGSuFo2T%2BWwHOa5VijWoupRqMq%2F6ZTaWFfmrxUDraygo4sLxDnjG778HVmHMrPp1kWcb2nvKm8LZUzii%2FHwvssla4QByZV4YrBBrf%2BvTM7XBhQgXnjpHFTx128zvnKPnfnM5RPAIReC4J8OAYdC%2FD0GIyYdxxBLG%2Bl9v76MK%2B75B2DDZlNnJBjqkAT05NkSY0FgKOY9ZCoos%2BUr8bEaG9%2FzU6xQp6KDNNqYuoCKvoIh4PZ1KwRdSLIJHbk9w%2By6SHe%2BqUCUCou80jqOPJlll3PAJ4g0OpWZ8ESy5BXP7gYT04dSze37%2FeH%2BN4ukBs7S61YkT2a0lQ5%2F2hGG1Q50e8N6tAEQ56KBvXcte4SCJy74eJjVFYT2V4xNbbmnrFJdk2QyF5HJAZ8PkBP31wi5U&X-Amz-Signature=324bac743bd94d9402b94d8b8f271c601f9318d2ccc1e45b186277345e5e38bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

