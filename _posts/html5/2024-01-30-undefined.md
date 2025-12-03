---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K4F7CBZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T000441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIGR9tBd%2B%2Ff%2FRQTtMvC%2BpWEqK5vITwLweOZ21jQrXk984AiA65hklB4%2F%2B%2FkIxL4fCgGyv5Uqd21AGBFXJfK5%2Fx0s2UCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMA0Cdrw%2FaNPodd57KKtwD5zVKBSHuiTzE1%2FvT%2Fmdw34oALkQL2DLF9YEOTnADvh8xU17xUid0517RxuxTOa6oDoV8NQlae4LFEtxXvNVlolo8HMIYjVKmMOqqdXi7nkoIvr8JvVwN60JrG%2F533C1qVdlH8CToXtq1SQYSN0JzImYWkIeZZpXOKfqVrVuRO7u0vMCcUPJmvM930AEUAVDPNKdyZuHTxABscWM4F7vXosOGcyrV0uZ5YWHulPc3V0KPnrFPsxFmmZsggonb8Ddh39Gbx9Pt464EC4tVF6d2VzhVAkyeXZDMfpnTiYfTxi49bvpdm%2BeFO2Ek2xPellZBA5JCzy%2FYnmomrD%2FcVKshVlSQLsVbAHBsLyE%2FzFtMNCX4WDDj0ihyiY9kCnDE9RR9Rsv4Ho2d%2FR3RT0ZtCKVWM8W2tu58S63OwrUj3e0uPx%2FRSR7BnI9SJb1ZLVJTXI9g9vRl%2FG%2BZ63ZltdmO8g%2FmPHYZoN3bOIfdp0caOmO3B0DedWXKuY35FFDT%2B9lTZFs9Z86leAC3x8ArXrnOhvs2mIJk%2BG73ho8sPMLjKnvf84EmP1kG9uPMnPpUkAq016oUijokTrCtnkWt5OZ9TwwXnPniV09ab4%2B6KFM4BIqd85hkCXjX0u9E4pyEDS4w%2F%2BS9yQY6pgFENMuhG7PcnZqIyc8kOrvciXiRxR%2B%2BMgJ9E2xfrcBPVOS9vCcxVHtPq8w2Upa8AFJ5qoF5pqlRYA9mRlzNJKwHDm%2Fu%2BxjvO0O5EezUMp9crFGpTxQh8pr3N0MeXLZYK8raf%2BwJYlXPII14qcfmMZB5NsE1g5DnI99F3lXDpBNSYxWEqzL9cLMp9qXjxM8cgtgPTFYDiIWRrsi4kMkN3HS0DqZEmn%2FS&X-Amz-Signature=5a9d6f7b6ecdd2b600f87d95567429910c26f168b9ea10703a313228e7afb90e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCOUSBQP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T000441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEju97HNO1MRz%2Fw7g13FDQ%2FBgq5l%2B9%2BNjUide5TzoGQRAiAQpb6RslhPR0LIo0FAkBmsoRs5Pdo%2Brw80BD1eFz2S6ir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM95IMK6Hga0g4CY6lKtwDuRwq1LLEpgUmmSjv49XqCs5NdZXjxgPaiIteP9mTMD%2B6pFcUWJjN4%2FxsdtHpb5ZS3DBxtqQPstu%2FdLXHIAQzextGA8hCEtkwkS31uudUMo%2FszMJMKgpSK3wdhYUEOCOpiGhEecGshVuSEE6Q6d1X7kNxecg4A1Ifh1Wa1SxsUmabF8hE2oxDo0L57L35OMXIinqc9ZA9LBH5%2B199h7gepA8qH6LzxXGn%2FiJUNbm7x7o50yXjdjufk%2FsOrMjkWoO20NAyOfzQzWWxfbPvRT3YkGUDDiX9lAmRCLEfceOS84mbn4fYAosfSHbbGKP4ooKasoViBIOg%2BxvwwEKfVLdgOxzbqF32%2FxD85WTMDFpzjfEuxVIsGoSLJvcXzeOcZ9VhnjiuInlIQ%2FKLNYvVrZX%2FvlW%2F23r8XyPZqwpksBq5mG3cJR15icmtxoTJqI9juGxLkmL6fxoelo%2BIda8UBVh%2FM%2FWiqqLMvZIj%2BWsorxCbXZRWgsKTXMteGZQdBEwzJA%2FXBDDFgcYS9gVHOc0LOQ6Ug3m6t0Hw1Tkm%2FWFIaZQz8Ezhyt35SiihYfsF1V0gKBU0YidlKwLV7%2BZHK2bTTPRf03RUpYokkXSy03brIcg7OFrhLSXcgdD5GJl3UnEw3%2BW9yQY6pgHxuouWWdh9uFvCw8vHUrwNTL7KTvSSgIzpqGHCQuGlxCe2x5SOt5ueOdH0TLbnqDWPzsVZI9D863KPfRHG0QlnEfE0v79wAHip5bFJuSHBQh7%2Bs9nWxRTRR%2FXNMZ3mp80iFk%2FNEITEwjRRR5kcsKt%2FBFhUmLX7TnL9fZPnLA6Z%2Bm1GcFYSiUH9HNDeDP6PROzhZ6vkCVHDhXD1yEXg%2BVqM7fNyvl5I&X-Amz-Signature=189a3ea884a386ecc317a4683ca91a31dc4b369c536be1a90112fc6acdec649a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

