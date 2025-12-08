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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXVUQHL4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdqo0Ola18hFtf82Ex%2FzxhGchao0ripHa9x9Hp2LkrfwIhAJWBmWuJHQ1n9eBRhX%2Bp81f43J9nXENLwuHsDc0sYYR2KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8hTYnBIUutAuGpmsq3AOKzKlCmHwMordOu0uGx2mXUDiB75%2F4PPr3So1JpEOugFwn7guu%2BIuoNR5TtNtT%2BMz3N9LsFBFgwyBsIwSdhewiw62WCUIMnWwK54%2FBaT%2B55Tv%2F7IqWBIH%2BJbk1PvbQ%2FJ3s2saQe094H0afkgrvokoMuH0CR7Hg7jYXVtACE57AxngcmJnNXnGgz0ZNOe%2FSnFR3zIJUJjZ%2FPRuFI8D2B5eMhMXTL1LMQZL2qtPzR3s%2BYmvYLob4Lc%2FHkpiX7A%2F1bJOF7qk6PmSk394xuhutkkNvjwbnWevRd7ucUyFA5ltKR7lHG7qn8e0QGn%2Fw8WUP5w1mJ9N88hQ7s7Pv%2BvlrdUb550%2Bnr0ox0YFQdRm1b10gaJ%2B7NgLz622gykGBJxTdXuEQtmP8NpQ24MOTErd4Wj7fxOZfi9SOQJWEdT5tKaA9PxYPlDxUeh6aSdFbyCIke6zfWRtuYufp2GXujB5Vmmuvv43%2FwAs4cMaqX875mjqjf84DMM69Rv4mMcPeLjCA%2FsaYIW6rJoib0lTPkec6d801fyQQ5nO5VPj6eBgUfvS7ZL7JDa%2F0VpPvwkKVgeVLStWt2HHTibz4eZlkeeM%2F1DrFRyUb8UlyrrXFNiQPlkuSZ9fFusU9dMnfBaUpgjC%2F3dzJBjqkAcO8gqBvgVfrhoNZMiT%2Fe6zj5sZW%2BCYJJpvGyWOlX%2Bbo6i7rCsKqhXR2mcw%2F1YL6kPcRSvQnWqd9kS5NplxdQPRRy0Twk4KME4dSlyPpvHIfXwZb3frNy6H3ORKzeBqEXgs2C5xKEwHCODnQi3TEiz003EK2P7I8g0E3xNp8Gvy2ff9CXX9InH9Q%2BReac9Iww%2Bn598S%2BUxY4kF0Zrz68%2Ffz9wqXy&X-Amz-Signature=d278a7f98d594a7bfa8cb8e7797e6800fff6f8c088da62eb21d7f13bbd9b5d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQDCQXY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2bmcyOO%2BIdCdd4XJMoZxylbqgrQrAhwc8G7mzvnZhyAiEArGddmbTIxlC3CoIEtG6ihDHOcnbl8sa7zLoU5soENLwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjIsgzLq25MSluvLSrcAxu2v9EEUomx5oWMCBsV2o232XRVnCAtcCLmQ6TthZqsdYZ7tfqsugN3Cx%2FeXBWSORAoHeN6VZyfGULPK2roHXIDMKdnl0c1GZMEkmgwd2X5NgNuLAdbjzsPgkmsOmCmNg5lr0FbgQW607RcEv5f6IFyPnmWncZl4NyVfifuFuxJFy9R9c3E%2BGNVpTn4%2BqYwGY5KkUeMnr7R41GrM8ej4P69Xi%2F1CV9JsTaXKoruqPE3HEPtWioNH3KqnGZdq84I3QoVDWWn2CW%2F9NUBakR%2B3Gbnw8hFI3tykjtsq0z8cOW%2BvHeo4OijI8TD%2F9c8cW1SGEhRhaqEWgWmgNqVvQx8b%2BE8sppl%2FtAqpZzMdTtJ1RGWw2rKhF7QZrCy3RhOMZJLMoYa%2BcoZIclcI87RdDR91ANktM9rn2fGpbzJ4xVFXwSsDY4y4VFGqKoJ6mYH%2FdG%2FkTfZnElimxR4iNk%2FTPgtPFZOT6NWtnKP0i0lFWaMF%2BxSnB%2FvMvJjpH5FlJ67zoejbTTo5jB%2BleJnN8APDWaxvnkpZyoFFYwSEXlDMLsqZlKWdY0sDajqTMIOwV26XPH5v84%2BMXuGKKm2T0kjy1OmQpfHfu%2BfTbAhb4QfmLpQ1fZjzE63yfH6c6KeOebnMMrc3MkGOqUBhrsAtY8tqI%2B2Lk2wbOlfnJRak1yM5Qw1QkgvOM0bs0fEvb09NYDLE1SILM6G4%2B3Qx%2FfNndMVOncmRwlyJdBOHF%2F9GRp1R894FqLf5BGZOVuKpGm6e8c9V%2B3mhN8FkkiAUMpDDaXl0j4W0vvOJn7xBizgPUlM65BVdhvU%2FRbU4BG9F1JXqj%2BIggF7q1wJB7zg%2Bx6D1D0fa%2B2uQphp3%2F%2FSSCExXFUn&X-Amz-Signature=e419090988930918f1ec7fc81ac4aaa0765279cf1e85d1d3433e9e14a5a06444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

