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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SAHIRMC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCycEagQa7R0iADu%2BehaASm2PLGBRhDrOgx05xmc2dMrwIhAM%2FaTWT9HeTNahD%2FDbX%2FTMSuab1O5GFEn79XkfRJ9uqHKv8DCHQQABoMNjM3NDIzMTgzODA1Igy%2BYludo97VW3M%2Fjbcq3AMrbEkQ1fWxtaUimFDlWx5GcwdwBum6ygV4wysSk9YFgdGNSSM4LqpNVYw1JStg0VfsQHhh0zAe5raBiqXT%2BeS2ZbcUCv9v7kYD53vkqTPySmqR4hLpPjCpmz0WJbSxvbxsf7kSqkcfZNpC6QT9R5HGAUPWR%2FBcAi5JFaVYfF2PAOnv3u%2BRqO1rMp6sUB3bVxa75ztw%2F%2BLdEokm%2Ft3SZKolm0KrMQknac5Yc5MsMBU%2FW75iI3R1Kie%2BvQsM7bnWhK4WQ%2B65P%2Ft13Z70PxMh6Ir5SKjfXhGK0iWOb8BqWeWbgQgqBXHRLlzD%2F4YuQ8oTtqQIZ7s7B91wfpKsJ9HgMgxZeH8C%2FnTfsWzYvsgQL4ddYscRj9fXTm134opuvL0%2BOvYxsQMfJNroaMNqCxxkpEriMCB%2FM%2F98eWGA%2FraW9FyEPpo4ler7gY3O6mlB2qiFi0X1UDnz2SsZkuoYwlk9UBmG53kfbj7tVN1hI63OijKpyenunwM7e78qPvddXR0AEwFRmbvGG2XZXTEHjhFyep4ZnxI3TG1yOgvJtZRRgK77jcnSmbYarOUs6bvjGXykBHRwExGbTkDADxmvmuaxadr4LjxOX5mclo406SLUMgi1%2FhRqAlAjtRDYpgr%2F5jCZidDJBjqkAbIEKNoYSLuwDabRR3n9sR4frK%2BZdAo5aJWQv%2Fi3TwWKnbzwf%2FGWUhA24pOnKTruSqSkwCi8YH8mthIYYuw8LWnJke9pArriVovRN9AB%2BveTomvtC3vrQsRtr7vlcLGhmb0wdLr2XLrhdQvMgLmSE%2BOkpTd1Rv%2BrAdvIz9rqGVUFOcWGPg3k1rQGwHJjzBgnq5%2BUw2%2FInGU2%2FqkkoZgnvsDxuEnu&X-Amz-Signature=3a43fd0cb386294b884a9dc3218ef12e5390ccc5812c8c0f442acde8390fd56a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPGNZK5H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhSEWj4R5yR8qWUxloDgoEiSVspwsy%2FMvbrwle4dO%2B%2FAIhAMjikt9BhnFHUzBRIza%2BqTR84YRVX8maO0ceMKH989eOKv8DCHQQABoMNjM3NDIzMTgzODA1IgwmDbdZh40iOpYSNRwq3ANcKPsYT5ilbO%2FA7pd4nQZRUudsqkzsn5NJaLu%2F8YbFCK4ZGeU3BN9JiRKML6e2DoRSO9kTrliqjfnb%2FbvUJOIZAOl1%2B4rMVTe4yPubpfQVpx3dTyd6siHVFIIyWVR6w4G7ioG6MrNr02j6RKEnYMKA49kEY85poMqZWQ99wk0gOv3GVi%2Bz9K33LZOkIGeM6KUG2W51YkW6y%2Bln%2B9cJILqRMsJYX17lmKydQ37m5ZWNwn7BUheSfLxQ60N21CQdYIopNEBKy3taOD8tsSeJjc%2FP7RsJScwl1IitMP6lcjP6c0blom%2FN0nDbpaCrfc0PHY1iuH3JbnGf%2Bky%2FK%2F8i3WS%2FZzgecI0a%2BxWj0JXSbyq8bx5Sei%2Bp%2FuInkk6B%2BkS14Sb0AU2tF1F6FdlkT%2BkQJAe6p%2BgGil5X%2FpAa4b%2BM8bc7SrP60AXGJfUU1av%2F%2BGr1xUJvxw7iVq%2BP%2BIARy6V8yNeAMAVSnchNGod%2FIIJXbqiKFmHM%2Flje0EMl57JtTg2b%2BZAd%2B2pHjHi3A3jgs6jRUvjhuLU7zyPw0ayBEoRicEvIuUin8BVBzMZ5P%2Fn9%2FvWhd9%2BR7zff4sGKA16nnnvP5A8kL6pujSqYoNIcLJ58jSMPIo2S5NQrn65%2F1WJnbjCcidDJBjqkAcVs4aOcytRw%2BoOJFEUJ89EPos3Oq2j%2F775BluzjCLwJTHZAqfF0VFI82F3X9Of7%2BoTCQsHTEVQ7zqUqUGr%2FvTLiwhwKZC5dHUvWTOmzUMKurRyPawEaOTDzeI3omxP5%2FcNL8yNZ1vTQy6YBjm%2F2TiCKHghZGOpj7hg8%2FxoiiUYZXsA%2FFQXpQ%2BtWW6DZsmLC62cuE2KpFbzhBCLyCfY%2FA2mnSUE%2B&X-Amz-Signature=669f912fa5cf257d16120468101232d89396e3633b0be2ac07db62aadb4e0dcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

