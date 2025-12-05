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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAOJENSP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4HiN8nLkdropYg1pxOIg85CoZZ2EE7r7gUeQp5ZPmaAiEAlIFieAf42iU6ngHQA99BHe8Sa9tnFxpHWxD6%2F2IFqTUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJYDK%2FsZufJFu0so0CrcA%2BMp6zRVQAeX9kZkNpaMONVD7Vmb4pDUOzuC7%2BkA2jpQWtDnRx4K%2FVYL8bnPp26xUjk0MQqtpFhWd5H%2Bi3USZmYIVnMNl6IknjAork%2BE79l6sevCoFnuNDKRS8VTBe1yymgzKamR5kDrwgdUza5I6WoMbX%2ByvsjrkvZsDHd0zzqC%2BJ5mEwUEL5lphtNlYfsz0bADdHbRmbwjiyz04nPoKGfwrL28aJkZ%2BqCyGuIoy30KeZMHDKe77FtgX4vCuN%2B8Oo8NsqhOIKGn26YUXb7DnF6YHyCLPrbLi0mKMkAWO2gAXrgF8UkQ76LiNC9o0EhJOjzBaK0k7SRtUGebX9AUTqPREGUhmuy3b5tAhFodbiJe3I8F53nKFDkUPkDz9QXcV3O2pmZD3Pb6j2MoJAdEbrsyfKCG%2B0OYBw%2FSyTuUlnWmbaEcOcR7cr2wPH0K%2B8CJPa3AeuOYY0pkmsMGXieTXyvFLFk9iS%2FtdPdMF4mDO1ejeF0R6iBln20QtICNQR3XSBDSR2JyYpeUFUeNFBfZ2nN1DcSF316TM57oDR3lK6sqZJBFXTLkJyvBroco9pXvZFUId05g%2BgoWU%2BFdwfoGf6xln%2FOz6ITYlIa%2BTSVZDlg%2F%2FeHNWatgXjluFlJ1MMX2y8kGOqUBx5Fk9aUaj6cg0kOzdQQJTGZHb%2FM5eGx26Z%2FpT724oeL1McuzvjdZAayCJ%2Bw9dUulJeHmiVEF2P95Qjs%2BboESKHUidacd46LmIfQoeMusPJkmV5xKezwpTw61YKisgrxE%2B6XS3EBvglCa02Aotm5NvAF%2FdRPWZ9pJOO5A9OgnW0Hmeiz0QZSxZt3An%2FcBIrw4Rz17jG%2Be0lu6AB8wwM2I54uBtZt%2B&X-Amz-Signature=651cdf79b317861aa6a5a9222050927a817b12573d4e084f51d4517ac8d770ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GEMV24T%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6zFebRbH%2FWPnOqtPacYh2k6czSeOOG099oEXF16mxrgIhAMRZIF5%2Ff8eGbFLYBHiH10GgEOxy03HrprpaZyv86iCSKv8DCGEQABoMNjM3NDIzMTgzODA1Igyfo%2Fk9r23S74oYoicq3AMPzILsDGvgLjurFBwfgC39jh3%2BkRMR3qiRXKu9OfJTPpmD4vwQ80%2FEwvTRregJ4clNUlR0z3GTs3Y8r0Qo9tH6VVduggTqRqs2h3BTOAXH3xuSlomOY7Sg1dz%2BhNjgOsSAZoIEWeXgmN2049LsTozd%2B8Q6XUOqy67YmA28Im5ibEV4Uy4LDrV%2FB4lpIx%2FAQrbrUDHsLKVl3a8zYQiGNVv7lyyeRX5ckGGVWxxWxYTv89HAnqRHBeAX5Gyxb3QiibfopsRBMJ9oCWid5f4bjl46zdbeGIO9o95oyuAcErEbVWu55qYIFTZRTatZe9zglXJ5HxMvwMSFfCbtFYcYNFqWMIrhJTn9Nz%2BSjWT9HABBSmKl9xTYqsrIe8PQRNy3WiV9AsjoAhnNi4kaWYZ2VTlwR4RaVTwXHGhuIG6d0o9%2FaTjbL5YAn0lPOnwV0%2FhqZrKPtEjl74FyqlH4Km9sHGTPQKbWMSGR%2BLL2PcFBDzNpqracBNQW49gU8IzfAV58fgyltqXlVQV1doo2Oeg1GNWvka897CurabzmRxr3sC48E9coTn%2Be0yXvlKWzi8jOL106rge09sbytIN3Sy2GHcWtm5%2BiNqRpgcEaFiVRhv7jraNyQRmw3efQC%2BTK5zC098vJBjqkAf2wWjTiJIq3Pen5smjIUiez8P3nMc%2BqodVBzTKjmgYckbVjmecSl2J4p2y9ZrFcLHjOtZ%2BAMelEf8hxjbAuYpOqGgr6W27x1ypk5V7W%2BiY0IVo%2Fsu50EpV01Su0iSmUSF56N1ZQwGNPIJOY93jcRIyY1V390bmO92fDpR7ZnHDY%2BjUB5qyMp13MAUJcgWZ6LNcE0tE0NKkqGOmkV%2FwJTiCd1o3v&X-Amz-Signature=02a43b05ae583ba03ac2b2a0d2dfe8c4080a078c2ba7ca73ede3f865cb1dde01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

