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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW55UGYJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDabQCYsw72pa7%2FrohbuBFMiN4be0v9mDCwYoFP63DVMwIhAPeLGji8hOSRw9%2FQ%2BzpQfJdlZg83q2ce1L%2FAzAiDeHgoKv8DCHoQABoMNjM3NDIzMTgzODA1Igw9Fdvw%2BTIdjvcVA9sq3AN7wF90t9U96i9zHuh7LTa%2BC5ntOBSOAm2ABJNaJEBXdMEJcnlsGK6ewQOJTXmw3S29qbVzvjGlLynJDwZ4Xepd1SkPICOH8EC8Q6zqo7qGKUB3GpVK57h8NWta6kA7rlj7Q7cMbqdWJ6u9TJrjGaGA9XmWjHJQNCeO%2FWrr0ToD1gv9L1KnZuB3oTMiCGH7s3amSYQ2TOYPsXSBYFsozmk1AX9QW%2B7gaW5HWSYd1Z9ADLAqyQXpkkKBPNicAjWR5MyZONSmYTgReeUwdSjxTVIzD8Te5dyzUj02h6M7KFm%2FAcl65s%2BMm5lnA5hRiysqVhz1WQpWpTUj9UKxHPZeQJIsLbdsd%2FsOa5Mms5OaY8M9SYmXW4YntTJE71TC6S9usuYlezxhzr81%2FX%2Fvfrvr8fSpYDV64Rq1lgkssYQ%2FgBuSeObelSrQPrKw1qLRkZRdJCtCqngAhxmVA82Ea0c7zcR0GQtw1%2FpcXIjcyRbN2fkKP3bxb1%2Fkk5Lb%2BYFcMoYshL%2B77kaFlR6%2FPGwD2gsjrup4vNDKN48cZ9oQ5VrSaxvfxWe89gNSuX1hgno83HUbEYeC1ZYJbPsNF2alHRSW6AuBr7K2HMBh9yRNcrugRw7Quie9kHUnrYMkzu2HejCvw9HJBjqkAVXwwTfjzt%2BUyOSSybDEbTJMa16OvPyr4%2BxaVs5S9R7UTnwpQfqcXtRgqeXLoc3fPbklCTmGtdg1p%2BeD7uZv7cSzDyNgyz%2B5Krs1tfijDDOchyhx9QE8C%2FW9POl%2BualgofPFtaBjRnBugL9vHQfbAISEckHQ%2BWu%2FrgfPe9w2fdPCywsIer1ni4B%2FkNpOiuB7Uvx9c509jdrEvpm7tleCvNFMB5N5&X-Amz-Signature=63b98b57bd3d8282478e1bbc25506fe9d152a06b6c145c734ed353d0a32fbfdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O5BNUZF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BSPKJd8IBgGv%2FxXhDXSLF0Knf%2FZy0Fth0rHJIWWaUkwIhALpOqS%2FRaAiwO90%2FG62HtQq9hu3izsDvvF6Es02xWs8PKv8DCHoQABoMNjM3NDIzMTgzODA1Igxf%2BkK84rnnpKCItukq3APNzN27NGktC9NmtOAPkZe%2FubbxthKQEenBWPpIRzUpZkFyrVnPqcqRYFpTWKu%2BuBnfmJJ4g7hhICvLsTRM9JiZ9WD1dDLNZIuC963UkGuKjz%2BMUEltNV8Y%2FAsFiM0u%2Bs7%2FygmsVHK5uhtqXtDVnY0wUEPk8vkM0kCOVw%2BL8d%2ByQKaVca4NUvxfiFxMbHmqkpPKjfOtmk1bst%2FqxokdXuWSgMTsQiLE%2BrQ1ct0YRdHPr5zTfFPmMI0ge7euCorPq2%2BaukedgNR66%2B6jWBnkKVWtj3iTqHsPRa5AyAMgtXlIvihq5bhvjegG5JbnDp3GV4Cd3P1C5XoEIYjqKji%2Fdobmc%2FOe3bR0OlYw9gXX%2BympkOmCTsaDSV1FmbEThmbI9SXaFsDaweu7Md9InUt6ukOp2TpmHx%2Brfv4IKLCb7vzg13YihhOJEmQfpkJ9qYqdu8YAu6qi1QIbO%2FkpthlegNIeckdGiRImTb1N37odXI%2FoGOQOLEr%2BO0HeefhfTZUYyTFmEbt1i07IyGGL%2FH9XKub8HHCENBwFPTde7fAS7SziyWvIqZ2wuZh5WgNmG2rvscnT%2F5XpLNFqX5ZmM8Rnq%2B3xUOw%2FQ9mFX8H0HobJMT6fIdZfMEcpfjf0HGwfLjCzyNHJBjqkAWKq1XbmoL6knoysNNzwpoqppygS%2Bw%2FIKNxkvr30y7hvOVdPNr50PtkSq1JSRmRdU6eF9kyst96cGn2WUXBChZEuu56Z72lJcB6kxR91idf6kuy1rqUOHtR879ngWmoImhlc474T5RdvtwcuudCHmDjPitnzXufneFzu%2B%2Fipy53gc%2F%2FNsyLPOGA%2BnOnCcY31MZrl2MAnqhDtZlF1tkbVh27Ya8Ja&X-Amz-Signature=0edc0ad6a556780159879035fd2357b91309a3d0ab9b0f4197ddd95569a590cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

