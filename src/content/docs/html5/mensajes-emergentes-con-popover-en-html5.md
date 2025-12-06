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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UNOCHC4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO%2FyXNdbk6HgauDWVIEu4OD1%2Fka%2FHo2VmixIfJpVbdWQIhALWbdi1M85sWBq3gsuLPPjP%2BoJFL9MxMDvCbEhefQn5jKv8DCHUQABoMNjM3NDIzMTgzODA1IgxseuvW76JZRc5oUbIq3AMvWiQZ6VgcXHyVBuQBerCLHNoKFuLIYlshoWqzAd7s4wjjjujq1xzEg%2BOcJD4XHnLnyRCIVmakdcV9l6PhR5tAbMMI%2BqNwuWk0AD9UqDg9oHLZJt83hUk%2BCF0xUUyGuFklli5Ml4KqHvMDUea1EEq6ILrt3hSEPV5zOdo0zb9YiZ6iVpXxpmqsRNKbVGvWAzdxONfzey2DAjw0PyVmoC5WLwwMFhN7LaYRCYLb7gCxsT6GTCaAa3Znc7klBvHBmYLQlzhST0MNcxZQF2ZkBPE2A7i3SNOg60mi151xQrGshez38nGBedtVzeAh3w4mc1KdeGYZT9SbDARpsrui4twi8U1CGI8n%2B0FZ%2B4eXnuM3Gj1PC914cbdKSRjLvn0hh1s%2FIHJQBxp1%2FoBy1rXYGLHb6iaLy1KHBpVUkcfXj4VmmwBbahygbPvhGsW2eT6w9xziDFsekkiTtfi0erXL5zNeqKPgmzzanGe68by0qryQA8fJAGJ0LGezbGkYSRb5rK6uvG6DqAGXqQqdV%2FuNwuW29LYzzLhxGCUzu1VRP%2F1AfqyYoD%2B5yRyRcM6GaiRDGJ5vD90ZluP3wdPQ40WbgKRmG%2FSrA3bWL553l9xGsl%2BXDcpAI5%2FKsqjJJssDbjC3ptDJBjqkAe1rPJtWnU8e0MeZ1t1o84gVXXyyhEbrMxrenzSo68kgUxhJMoJqj7WC5yKCaI4Vj1F2p49lGH8937QUwHJkWVSAzIUPzWi9P8Z1d61ZJ%2BOThm5SPChuDwUU5Q%2BHKnZbQrP7FniklGLQboME%2BaOPB7SnZIOC7U2p%2B5HU%2B876ftX%2B8IIEwDwyEkXjCTQ0mv2uw%2BS7ST4iwZKPBZaFQHRtUyhiqUnG&X-Amz-Signature=342b74630bc5717b492042634621abe924ddf2558ebea896e883df9bc9d80234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657VGJ4OB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnp899xFYspsOQ7vAz3E6v%2BQvNFvgXaW5Cl4AjZNCrzAiBEScdCbUgBsaYLVk3CY5XC18lpOBgLE9Q6srV5nMzewSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMekBjxn0EwbMkNn7IKtwD4Rxa%2B3YJIvpBZ8w9LMrm5xiQm5%2BU0ewyvIRAUBGmPC9WHkXL54u2vgiHXNMwx5Ad4UKezT17mX6zBaXRxdneBBbtIasqK0%2FOIiBV0tYNxa8l%2Fq%2Fts1iP41pq53m5MWBvHvaU6dXsn4pVqdUckWZFzPfTOfpwYwqbyRPD%2FvNDG4HXSXIbYrBHhAb4Hs58H6vDxrJQuzeCWCBfX20aAlN3d8tTLLTDnlnZsaqpPEUPgldlXWx2CGf8KcCrE9X0KFKc7u5eSxL7kJ8%2F8tDnorHis8DdsAyZAb6nY%2F5KgLiBwAYrG%2FwAHEWC9SRWwXICBu8j7RpaHPjRHzrbveRVExIspB%2B51f7Vyu3dhiAR%2BNhdP0oPKDe8uTYQD8RbYoAnObGkUFyZnQVSmh3oJElaHXA%2BLr2zg%2F%2FHTSx4ja99B29UFp8Cv81MgZakhwpMEUD5BQnE6OaPlQzPoCguHQu3rzq%2FDRsh5vWtSmJVMH%2BrfHVsP3Hhc%2B9Nt1kDoOaA9OMv1yt5b0Cek3oM9sEHeyyPiKENtu2cneatabkZ1Q7VeeQ%2FXiKdeOqvisG9Z%2FdLORYpzFmC3NxCHG9ELqvP3kyN%2Bf09DFV0jQxyJU2u2RoDVx%2Bm4oEE12768tD4WXdMm6Ywo6bQyQY6pgHdhDkBUqfkrCP8V3vdhOS3TBR%2BO3OHXQmwad3gQcARlGQBK8X5a4mNgKHWhjmdOpEhUG7S%2B5J56hrGfso1S%2BaFNzMWR8VCgzffD9V2AeO51XIub%2FaL%2B5QWQjZLVEGh3nRPayB43XNe2BfyRiQ%2FcQolHlbrHHXAixGQEuiV7GtaWnZgfdGLlAOS2x5ynS3%2FDKozn8zr8TGPeJTLShS0mrKLL96bSeAe&X-Amz-Signature=832f2cbedc03501da7c14989e535ba4a582df0d7d0ebb8cc5549843345af622b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

