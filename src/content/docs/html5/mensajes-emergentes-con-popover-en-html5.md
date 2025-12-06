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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ANQUE3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2kllzsiBoO7lK9RSElmqoTgbYu4SuY7EB%2BslqdMNoPAiA3xQkz2TMJ8kLkvchu8GExNTIZzi8gsRMvTvDA3kEIICr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIME9%2B7WMTiREXOhg4TKtwD2pB4d1p1QVrc2LdbDiKqbfOV1%2BcJEJ4fu5XjsHWFvpqS%2FpxP2ss3ZxfrHKgLSAYmouj1qD4NVQCd0a5n8iRXKFmdCvjk4owLfxYG21JkUX%2FG6PtEBjvP52y2ef1t0as%2FqVUQpFH5plxkj33VNRycZqU%2FCZ%2FYhdtthFet0qA9XrTUxHPds3nOuDO5%2FDLHXWHqjqfvFDsVRTsJkA1y6%2FhRH9C7JUbddZGFn6dJEpEszQwnWhRiJwYjJ4ql4hLWRIRFE2j0Ox35%2B2bZIKHYQZngUC4rg%2Fb4tONBgwKLtWk7lDKuNdtSFDC4348D4uqVKmPADyLvFL8hhlIBQXlcFSKlmEs3SlfAO6wb%2BXVktpYDBuh1Sb1WzANgWpSptqyMSgs9O8LHjzh%2Bfw83eVNkAm6puMmuLlOVwuzoivNIm56PXNemKP0PumDacfzCOI5niquA7In0FVAc%2FoiT5ICJq3TJgA6DN13C8%2F3W1jP6XbP41zhImq2NyfZMnr41xxHV3HtWPH8B3LyyDAkMzB7oXjkod9LSZc2sB36q886BvPo1SnLnbc6ygziqx4wxjRdt1ZcDbDwtnKReob4a8iof4mXw6aBhIZj3pAQxWXQUKkVIfk%2BiGaAmvc5k1vHxXAkwndPSyQY6pgEqsqJ18r416Ipqb6xDnogyDck5wnvO2RuL6rtUkzv5Ph6EKnpFpztlJBvjB9Sv%2F9qHlBwSRbkYWayQgEboxcf%2F5nC2aLe2OsPI%2BCKPVyyWygZWJzD857WNMlZxjtAOSEBcBu8C7gBZEE0O2bT2JAL1QR8XW8lFDxwr%2BV92WCoqwcxlhGM9rYqnJsu3VYHwHY%2F1eNTzQnoBuveT8q45m6O%2BG0bZN%2FXp&X-Amz-Signature=1dde67faaa590edf603b512e444dc121ee47a946ebacf65c3d66ca45fbf2ae0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBDOQPVF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAuo%2BlN1cdu%2FdLqm2g6ECrxuYkX71nETaOSEF3DcU76AiBIWbaXoIeKTtbWHyYHYEBuFC1K8SYoFBr2DydMNMKYfCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM7SWfLNirVRxpOX3cKtwDWDrgFfpfeHlz6cv7WB7aLBCQw3pdBfuXzSXFqSTfVHMfr%2B2m9fSwcoD32%2B60tY3oZGEQoEMy%2BCxvIem%2BAczh5eYs7Px1OlAy5A6WYuj3JHuIXx2%2B5MzypX9Y5guy4zvXDhLujPj2k5Y%2B0pNFTLQXc1ijTmp2M%2FVsDbecz0Bvd5pnIOh31gGPfnBvuWyK0S9N7yeEdXGYNYV4RbT7txHdeaoRZ1vYor2hrYi33KUO9SLkndnbiOsOglQyLhfW0EYnvLsQQBFuLgPhXBikMDZ%2B1MmWF1bO9p%2Fa2f3MAe69nqHZtyVZcvOXJpQExN%2B1826a42ZXMSihb%2FDxMKLb0N9LFR5IVq7vnuj0U4e8mjZBCOMOAPAvTp6BD%2BY1FhuEPAbCv65ToI5hipzwfRYPslB%2FiUdHuZSJ2iizGYvnjmBjhi1qvNWTU1NGzLDz652%2FHCzwqCf5ObjCR4y89%2FnXozoe7Ei4A0B2rLdLD5OMTp%2FofLgraUh6rDhab9IB1FwowwN6hIcheQCo9Ef2YrZm%2BzayIA6QVxMuFTozc%2FXU1YKZU47s8xMvznYpFsMdmZzlQCEyz%2FXR%2Fjcj5f%2BxhC267EyOW9XxwstgyE%2BFC0gPsFSZXVab%2Fe3ImZw%2BJoqro8Iw09TSyQY6pgH9GLJeDCCrwM5JzLG4WvzmO5Rus03gt%2BtBKYlRhYySHGubbAGck19TXOJb2x1SDUHBAv1Ccmu1w0RmntMjVwSZzfqlaGOF%2Ft3yvb5WBHt7lnf%2BTz4nzzfXgDvPCnomlpirkUgwN9FikespGyzbVMEg4fDZIX1D6f6JwhGu%2BekBHmNiVE7ASsgdEvgAE4EN465RMCgLHcJY3OPBpO5x1WvQGFq4ROKu&X-Amz-Signature=80291722a2eca8e84282611481179bef56aaf4cea91b41e6fc09b4067e95dbf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

