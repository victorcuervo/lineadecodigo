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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634PRYX3P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHU7YeCMVwg2Cfq7TAI%2FpIAPHUCANl0EbYZsETR8so3VAiBzasnBcuyLqFzYpMQnt310dqymkdOGUIGf0T5anNKOjir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMiIahq9rScggXTUWpKtwDhfOVr7obA28vy%2FhKOgm26fBdGqGP0FS%2BpALOCINqk5dKq%2BJetXoqPchu0zIWC3gE9rCV04SpOKh5l%2BjCtUViQTYVv9VQ4ZyLo6Ft7fDCJEdCmmxMabU%2BTMLoCG%2Fj8XXFWW6AzHJoLYOPFiGz9%2FqAvwYLxFw2EzHve3hKjTYtWtPqJU0M%2FEwH2TOPDl%2FS8r1p6wCLJF%2BTfKW9Z8ARg2l2G9dHTcPcQVcUunu7wob12dE1TZKMCoY187LFj%2BnraQ%2B4uyE9nFNrySJYou1mOVyNiduXjuSui7%2F%2Bs5JNLHrjPB4GFxT2FoA47oF6VGBJ1umnLBCaSlOSc353%2FfMCebbJlUL6o%2F5qodpBlXDduhuOOi7dfWH2AfAupodcNKSWFJIXmhLlHId034rq6JuafB4Jui2nzL51lAdy%2Brdlh%2F5hZ838a%2BfmQr0a2lJjd%2BGk58wmwLrAHebHW8TRCK%2FvK8BGFnZH%2F6P3n9gxiZiW19Xaoa85jr80pX1oxWA4OTjbMk0Vv7v4oSw4lCbUlyXuqHD26Rfvb6enqEP1M2c7VhKGt5SywIqTbp5AJF2t9zfElw%2Fu8v583iOqf4yXAV2J7fNnbsRjhe5JE0r%2FIj8KPF40eToeOxIv5EYgWJSH4PYwnrzPyQY6pgEojVcKkKP8lmU2aIYaeuNJpDnUvZdiHXJVGJfx2Gqg2UcZ9hT40iH8XuJEE60wOSfdZoMZ%2Bjn2Qg8wVb6GcEt7jvNaNaZoFk%2BOdsPDAmjZkNSJe6YkWIIe27jAnqZQhF8jF99%2FLmKgF2JgcgRIpkE3FFVKg8VQTXUkHXmoNoSpBbF8Bg460cuZ1U9Tr46vhkcdSloAapoJz1BJdOzlhudrlEhXVQI8&X-Amz-Signature=f9d36e90347ef100511a708f98cc12736a48e4164887e72f4747457bee1def54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMS6UHSM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXN4TDgG3Cd0Z%2BeC6BAJ9%2Ffcgj0vcEZ7o9iiErfuHojAiAfjk48FX7hAGsEBZmpopBpemDTGrmmtyqWXZ%2BuNxi7MCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMrxMsd9HgpzepKGURKtwDz1ZUnLH2a5faCdIpvD93W0TStbzMMItdiFxAUHOtnfhnzAkzh3IKqs%2FKTUoz49BohZqShcGzOUMnx8ylTPiAly%2BbH1n0cjt9q8okmMQDg8I2zCBdvzxaeO985qkxgedIR5M1HkP3ye3g6fkdRuE9otx4gtw9G%2F8obWadoCKdPDVWIBWq%2BTvBQPFKb9DARTzqS1oATxbcCgFiVZndBrPRnPnyIZw3hKEqrgGK%2BubGtcp7gYTW1KC06kqU%2BYAJ9qU9Rg55s0MDOk6P%2BNzzJ4JtdNdSGf9TD0BhQLBP2PpomFRuNHPzTNAnpKYF6p8AEJJ6M4LyyqttNuYiAeC3sS%2Fx1pMory5IKGZflj6i670uJo0zNBaLV1YssrG28HEKc%2Fm9SPUZN07R0HRc5GM0hsEM3Js7LTBn3Yo4ldMnaNh6oaf6X3pNxyoY4D8wSd0bjg4CymKhFu7i7gQcTGCJgbKgzGtBU%2BhiWeb4YDCez7y8NlnUEafgVIB%2BwtFYjM0F3tCq2xxPf8sXTbN%2FD4Xs74%2Bt5O6%2FmdAho7dvc8YGql%2F3Qjbx1X%2FHJAndOrE3gCnWmnUXXUUTY%2FPIAjDDBWwp2T3zDRAg%2Brsj3O%2FLK8FJEWJDWco%2F19H2KbnYNFMJiDIw7LzPyQY6pgEwnWp1fM4oXPk%2Bot6DpligzuC1egBD4QaBQieOAT8aXVMEF0FAeD2TiBWcOdTQMu7%2FnxAxH5fDr5TAAJYrVyygu%2B48JWr1cJqv4ti0yZob5t8A%2BMvKAlOAIF0GwalEv%2Bkv7D7DAqp%2BKRcHHmz0rOkskqPG4U6o38rg%2FUeHz1Rne%2FNKTZRZyfi%2BlMFbfYLK06zcz%2F%2Fz5jlq9HY%2FazTY9z2cVgkMLyMX&X-Amz-Signature=6463e1b64bf3dbc1d3f7eb1b8d1e2f72eed1db82c05255c1dd3078f372b19fdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

