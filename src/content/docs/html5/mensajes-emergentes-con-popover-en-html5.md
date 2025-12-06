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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TTPWKV3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQjBueq3pBRvjuPmlEs67vLbG8vIBuQghlzHH3QQbUVAiAvi0ZtRD2hD56GEtNsrUBMIdCXD0YhBMXGYB%2FA%2BTrsuir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM4TWK1Js0orkk68h2KtwDOPdT2lWzGfSG73IxeeB6pNUny3uwmxxb6geaxflNOe%2FGuIrpY1Kb7%2FoXeAxpTB7X8O%2F%2BSdzLAP4r7BpZa4BuvAQkK%2F9cY8rRiFHXF2zUG8R%2FxAA71SU45%2FmN2F4mCCCJ7T3FVeC7H34uTcyH4yGE1cAZZ6rIpLBGua8FIw1w3a04OxmFQ%2BJQl9Zpx1qe8mZsdbYpaf3X5CBQVsUs0e5ymu7zrcZG72qKfKssOyI1LgJV6Xf%2BcI6QnBmXwrQL5UFdi5WHq7d%2FuyXqXWxBVSBanuWSCmUIu0sIbguAsW%2FgfO%2FK7ad2YiVvfZuqL%2BUD%2BoAxjEYYWXWj2aaJHXQb73egnapdRVCXYJqDZUL0EDtLnp%2B4TqlRGcIInjHw0TaN3TzzztTY56m0gpcqpVqTSa56%2FWqT%2FcGt8eDaS2AL5HpDywLEgJ2wOIp%2FFDSFKpFG%2BDh88zB9Vy%2F%2Fh0xEc6vMJD%2FA6VBwBLKus2zcwJMLcO7UeXNJqtc%2FcpUpN9Dap9n5L7%2FXWZ1OVdwFrvzcD4Kh06NAwzHGHh3bprgmt6QnfULSOYqcxkhgdFEYqWTpK%2BrSEGTMh7fcG3muhPgX%2BHRkbyCMFxSqTnMw8Wp07fknXG0NRMNZSGFngqE%2FC6RT5s0wxqbQyQY6pgHAf1ugPzwwaCZWUAMnVqtaBZIUhbk1OpblPuZaX7K8ycFaCZIGILmORUotw7BLJ8XamhNrEusrdSoEp88l3mr4a1wZqKJvdpjcEvJOiqZwpljk9rI296ikTRzvJP0z44f0GNcGF08pyfGPnvAJrdhfk9jRIjVrmWGRNtLC8x8ULT7Xiv91tKhLjMGRUpA1O8rcfhD1Z%2F6SHD8ogrdbDs9k0ZCX9dwE&X-Amz-Signature=1941caa9cb6198378cf6d014a2de206bdbcea375ded772e701d6e75a8dfd429c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUQCSVYN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUFLUeWHt43H8lfbgwR7NQKBiN6JcxzLf0wmA2rYQhMgIgEXXwumK5ea1ci03lHwBpVHXpOU9P7FjGk5cdEQPwNdAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIYd7kT8MBOYt%2B9kMircA5FguUCpENgEg6yiMrZiRdon15GhYJYGFj32BNFD68R2mYXck2HefjacMnkZwDBPb6yQP496Cp%2B25RByePcbWj4eJrNG1u4Adho9BEKMakfsNrlOCWEM8bt6%2FHPdyp75W4TkVjXKnF%2BNMhQZ8NVYQFVCjToOtzeNpYsSiUIEI7quRs0OSzYQfGcDIMSHkM5Uwr2fFHgorGVlrHICQippK5uxAEd%2FE06%2FrlCzAOXMZvK1lGIkKca%2FBV6vUGkbYzPzp%2FVtU1xLnnqhbYHVtZmdFpAct5wDER2HKay40ETf1vh0reltvb0N3DaSu%2FrmiTN14FwRLSPEOh0Cmz0WCygS%2FWEsKo%2FbAr%2BS7fBXcwueUXtBsWKmMRVMPt883PJ7uQi4w7E5lehTCHZVIfafRbfGmezjfG44dzXJ0NKQSasJ5ttd0o2RLWLpC%2BkhfCL8EttYcnHCQlnkyTjldiqa23jno6pBcPdZZ%2F6N7vzdx5cpHxp4jh5zNi7Guy%2B%2FOmzjNIFhNK9pCkb2KISmElZShTcWCcLMTrQtSnHPlOUB9i%2FGIiPCk1Gx0KcgFwT4OhdLCXGvrnXPAlVuSljJa%2BBuvxT6rJJZ8uiZlT9okGPBzGKR9M9dKy9KZbVn2qInXWAQMJ%2Bm0MkGOqUBgAg8VK4aEM1AA1FsgFovXv90qoZIhnZKUNtorO6Vm4Lf6E2ls2C78T9QDatPUJ8X5mFegDdFVWr9tTPmJ43mB4CI5TGoIhcQ7RkpHwpeh9HYlXNZxXMw2SO46Ki%2F4OZgQXGMyjTkSCiNix1Z%2BKIESZe6lAaS9Mt6mymrjTWKkJKIkuOg%2FFBMw4EMSGLrCMtkwji0gJ2L5H%2B3ui0tcl80xLrBr1hi&X-Amz-Signature=32c028d550cb9dd75f287e5ab03dbf46ccb327e9689ba14f6b74d8927c16db76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

