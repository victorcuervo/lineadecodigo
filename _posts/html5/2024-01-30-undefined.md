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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FVZZ2HP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T000806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC0lfuninJXVWOdtQ%2Fv7f3RD%2FZ6Yhuy7qXfgoj79wzphQIhAJJQfMPuaHxJrF9GeWnkGfbOrOAhZ52keSxYBmSBYGKNKv8DCCAQABoMNjM3NDIzMTgzODA1IgyiVnW%2BteVj4eyg3xsq3AMaw76UY7IRqeke1FH%2BfrGNx%2BRY2pMn1%2FTDNa79mCUqvIKbZmGS2JVAggJPsYr%2F9RMvE7N4a2n96Ft3kUHg32hkWaAsz%2Bv55xgyyL%2BMMdX4LQP9LRUCNpAuGyME1h0leLiQ4Xz0fEiZC2z5469EQBKA8dBg%2F9a11Nsr2vGCujb6hVauL8UEvoDgTO3O0L2M6VMiZ5lvY2pwLEvkTkbgA2iycJMTC5cpvQJrod3xqbebiAo7YVwUVbSd3APveCjfl6rqCyDGoVrftWe6WfaverLvd1hbdqLFody2P%2BbsAlyK36XR7PGtObXTBLb6crmboIQYhsvFvzl%2BsvYxtz10iPZCzZFm3%2FUjRmJwG03G4xaXfUR1z%2FdPbxsT4wPg2G5cvR%2FAmXGddQnAxWmTrFhiLonsgAB3wLzc92SwAL%2FbMxvhVhWGGIY3Bv%2FH2QrsmKUz%2BpcNZH8zVhBR%2FP49mf0z47H2YWHAwjsSQuHIaRJpDwu9QOm2GIf9SuqBEIeRPGZdTlGRa20PIlcMYYRL1zJritDq1pkvf5DTFRQbN5y6xuQqovOXyh1YhVUiXI%2B0sZrHspl8zYludW%2B2X%2BzOl%2F3KCGpsBtP3lw%2FHRKOzDERAgTDhgTthsY7hrvuue3lskjCl5b3JBjqkAXTaw%2FQwBfH%2FWIejEYkJRQsOcI%2B4ljWTEsiuP7iN2%2BCu%2FSZ6rIiY9kpinCR7dvanTnBNTLdjw1k4jc1q7Ei8OZ8E0xA%2BF388pgUL7CXGKpas1tU%2BjvT8%2Be8k%2FVtf3RKQSSZnWSXcx04h49ob0xJ%2FLn6uOvN9yEGpyt%2FI50QG9sjZruJkWKgTHCQGEvqoa2zRTYaj4UCkmoIRP%2BNRMTdHCucJYi9B&X-Amz-Signature=eb2469e5c450e62fed541a3b3765733dd99d2c5fcd80ba6d30b200c9b5bf8fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WIOQD5Y%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T000806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIGZB%2Frb%2FvSPizvm3ZPWMBBAq5aQxAUr%2Bkwfmpj%2BOfUwKAiBXjLUP3VjWWDa9edTmXpKjYwuL%2Bp4MyZ1Umpg9d188kSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM4Yqjg3bXWwWv0P6SKtwDcpFHsgMm%2F089fy4Tx0h5WgKDGpdVKaRVOGakJKIRbhQjp%2Fl4pDRFDZJcy4HzCqO%2FaxbrnKvrYWg%2BIWbGQZQRUOXG5NcV%2BHAgrKu0BhFSvwuDZS%2BU7lNK%2B8PJAFCeuxP49UDw2xiq%2FyAKeLjHdHNAYOx1tm5%2BA0GmNIiWDwZZ4JgWJH4bRiF9v9P1cFuJk1uD6jgdNxueG2c9deEO0KIdwZlF0sr710aGEu%2BDSvsIzHGcpCgSD1YRGZXf%2BfHYqM0aMGM4rVGUATjomu%2BlI2FExbOFjI0JEAFrmuWYM%2BPmvhDZisdGhmaLthf88KTkzk3N3qbhycpUgK5GAhY%2BftQaD6X%2F4Tk3UKowOSDPFRuf%2FFF2lTSTHfBB%2FoiZHOL5nqo9GcdrYY7wYQZFiPkKrPBHFqArCYwHNJLsOe3NNEASlDwhTelmby4EPxdXrfbIIdpKR7Fh9oE4oKdZt33eh3NSdKGVCrCOgZQy1rcpG0NJY3EXoXVXMcP1SvG1F91WrPYY64PmBzk%2BYtRc3kbvrBZf0poKBT%2BaXurN6vZfL4ZNH3P8I82t%2BoHydxUZpbT79mkZoaGsoap5h%2FVbYKAO99rDYK8E17oASq1QwvlhldXwhRJDEV0p2Ks7j0jv%2FB8wtuW9yQY6pgH7XpzhQqPUxTUMaPHHc4PVRmklluxt70EvdQJg%2BR841eT1654NAXus1P9KnEX%2BcPLjmzZQjsm0S3v011bTL1IPKIt4%2FRy56Wit6FT2aObC1V5DydMFxH8%2FwWsNqiSu99g88kFWYqtyIMeZvwPBYpc43j%2FVNQG%2F9%2FjjEWudyfo7Kiay5x7gihNhCtqdwy8NVZpxc2g35jjE40dH2sO55ykMwNr074bt&X-Amz-Signature=6ea2d3bda241d1260f7ae697c66a1da677999a8f473c06db45ad5279c2b924b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

