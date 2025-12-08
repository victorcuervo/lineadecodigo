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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJYKWJD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEUGO0gS%2FfRERzQ9B4tH8lwbl6vmcbAGwXRVbYdaqovAiAot0LsDV4nKA7bafyciDIwMpnypwNY6qYxclvF8wYFjSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJpdQiZ5Sdn74Dp8RKtwD0H02UBH2YDc7eLNVsyi2Zt6fIXFforEPcYPZLidisNyOB48u4E5Goh70hcel1NJFAnXV5vunPAtN7n2ZB1kpk80M4fMVwW%2FVEWkXeB7kpzJXvScQMElFYDUqYdBeNq%2BTEEwoVMb4qPT%2BD1wmt7ouLJuEXsrEkD9mk2kVHyhJ0GsibSlbPSSvNhGI1jFHEAHMkFPOj1RMFNThcE34Za3YUzdH1fI1MTOTq%2Fb%2FIncmh0h51OvaeEPeJ5HQtfCbDDM6bXGY3XK5nvMx8AzdJ1DQxsa5o7c%2Fsst7xoAE9UQ9wYzhyEV0ngcqHBn2CHaw8ETKP80rjYJcsvOumO9mbyte66GxUg1akjjAK%2F4XIFHrcdak1gGPh6EjpKdxpNLxoMjyb3cJwjgOem2eSZ7NtwKbEAg7YWmWfz6btrOn54ponVCrlYODcMsoAD2tLwmOe%2Bbxi6msjowGed91aRivaX4jhWsVOaXdn%2FducQ8v8j%2F%2B51yNWUTR3GRrp%2FGSZvW4qkxBSBh7wLgSzyQisbfKRl3FvQ%2BRfIe2O9Sqc7oIVCEpAFhZ9xnLrVbEgI4xIJARjzSOT9hNjjiB6UaXjuFc4jceZ1emZ3%2BTv%2BddVJVpZbJV%2F9Ij1DRBL18y4jjT4zUwwqHYyQY6pgFs8DY9ky29vxZRClJs2oA7hJbND4HFjIEfTzWJHIIgEgSNASEQeRYxvNBd6peHNWVtcmTTuBX85mxzn%2FhTUJeIevt7dT%2BdItMBMMDCuTHRN30aFo773Ok%2Fegixe3RL%2Biw7M8zcC5xVjbmFQR9QKjGSYZ7ZAX9PWEb7vJ3AbbAOIWtp8oE1%2BHukv664GH3pAVoVbwYpefCs%2Fgdnb9e75GrXB9KNka%2BI&X-Amz-Signature=16902c22f0efebbec9ed1a78fab5c499ab51b799484a117c8dd84dd91ebcaef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2SMW7C7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhJWsWcE71CFMHkr%2BcGJF8NUFGoFkR%2FIjifi3qsQ4cGAiEA34TPQeGJkR8yn4iB3ZOIBJJ21uaJVDeKdl2Q3GtmFFEqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQohqKx3o1bBMGVUyrcAwauMa1XEpOglaAzwhajhpQmLvjVr5el%2FsVaUu037AI4fNnNMs077QTGPU9Zq9FkppNWeQga3nbKVUN3bLsuiF9keSV7IKHKiDSuwIIQqsYVZwz2HehYhfgDRoc2dVo4sZIMmTJIfnrRbLdJEdm%2FmPlrrs9MRFlZw7RxkUlgF%2BI2SUOz8jSPvSadtvA23R24l3FZCqELp5R20V%2B15S6yh1cM278lgSu5cf%2FECEjtxcOyGHLSK8BPgNQUxwCMnUAk%2B4TIP27I21jbNpFo0RCBahAUTAqevLtQEWv8szem9c%2FytyrJlY0vhNJJtzH%2BmfQXYN6ucNsiP4T7hYHMVBx2GpuTmZOL7DYVqmYrARsK3tKCc914BTuEosVEyxfi2KyihKXRd4UD%2BIw0IuDev7BaEaR2P5rJPEQVrl3QXYU%2BQi72Blgf%2B%2FqilCGbk61oJxx%2FCjKjaso%2B9ELlgWUAfQ%2BpUKAs002AMLxwVaKACR5RcAg7KNyWX69yH6l%2Fg5VlrscYFDGwBdDcDqbY4T%2FHfs9Dun4v2WiVszMLZTtG3ImUvfMBwiK22cz1Pyl6oZAm%2BYGcq%2BSKnPE1EnyXyqO8shFuUwSFfLMxaZm4745%2Bn9laHcy54OZJMzMRF2EH7JA0MM%2Bh2MkGOqUB%2FoFpJUR%2BPlNkJiVGv10Y%2FDHsEYbF5CPW2s%2BAGJLw%2FAjmTPa9BbSD4ihLKWqWXN%2F15vUey1tLSVR8JRm6i0nmZqSw5WQLj0fumfACzqV60Jc9%2BpShuRXSgxiEXIj%2BD4uLdDNdRv2n2RAD1ibZnaRuij7gBGrLqhEZuLxXSTkSxnoU%2BK59ulSrBZthM7YdhcENZr0cLRo3%2B7Fie6LCb5ibmt8k%2Bn%2FW&X-Amz-Signature=74141052a3c0d3d9aeca7608a6ae9af384277c21263e30c70f66cec5f91445fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

