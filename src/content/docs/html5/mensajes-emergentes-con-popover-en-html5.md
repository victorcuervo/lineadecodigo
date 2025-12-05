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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXW3AJ6U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR4XIMfS8HiDAa5lOr6%2FLPvFCWBdjoL4zbflxrPYi47QIgYwVd%2BbbiOkRNgLtoM36FlowB%2BroXXEZbgN8%2B26hFDRQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJCuhN8gUH5FS2h%2BVircA9FGsmYX39ZHkob0Hbq0TwhZbhLV91wIpPlEbrkuptQ9Q74P7dfo%2BXlaEWcVL9gu0AQgeFgQKtha3eQkB8MoG8ig5oahRW7OPXWbvPWHOQELT6%2BIvkVn27FFtmQXq7gHBkUo4WesNnD4FprLTlVcNvVIbjl8VXY0oqPYJmycSg5I4tmBlb9s8DxUhoLnIBkRfIdzlKGlrM9V74xgpQy15vWA%2BAx9J8YR8ejblXy4ZeNPlRL6L95o96nLgihwKDxgtEw58UjT4L3FF4x4aDMpP98BhkJggolbmbule2%2BG8spiaK7%2BBtDxlPtAJOnOjBU0wqYY8P9CvH%2BpdluF2300Jh%2Bt3StK26H2lWEaWFw4eyUWraqmcB0GLsfyEWM4RI5vFzzcYU%2FsUAY%2Fh0tGRrDKepUz4oriIN0Xmze5J0zlEABEp2SuMK66Z0ICd%2F7pGOseCQoz8AKMWB7qXTz10ENnKD9fxIImdi0b9CB2NAlJjHC7hOvg97giHFKcLadjb%2FQescvtxFqX3oX0myCfSRsRgwx%2Bl2ZO%2BEnP2mVVA5mdXjhzSRcXKSc6M9AHTAldIdRkFDmud84U%2F%2BelzT83AHRyWIgyiMVP9247%2FBRcJ4AN%2Bzj0GEYU5GcyQ0YK3mIXMNfly8kGOqUBl%2BmO5DP8tKJdQEtcuY3lsd4H5L7JuyHtohe1hxTo4I6fJvyTC9Pur%2F0AER05LYGIlAfD%2F%2FMXqf8G4Gm%2BBxVHmti6%2B7UxDVvrilnk396nAiPgyXy3%2FYE8NUMX70qU2W3f15rh0cS4O0NePYUMbpAy8mKrNYMl9Z%2FeuKW7l4yQtD%2BtCh9jO%2BfGKg41LIAUghnDrSs165eHKooX%2Fsg88ssGIC1TXWdd&X-Amz-Signature=8315deda3f4a7c43b4b678121937e41c4b432f400a06a6709526eaab3bc486d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5DCQK7F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCgNckYgiQxKcLfQcHwjEeROc%2BwBBhpzqsq2lX0mtOTAiEAwQfDk6%2BHUSUomhT9r7F%2F%2BkVMsXQc7sDE0xCRf3UHxpsq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPIRJShEY97uJ5PytCrcA7hcNS1pMWp4yHOzPP1Ri%2BgQRapwG%2FAv%2F%2FU0OwYwwQ4z57aPiEk7R4%2BLWQg27erT6uWEipT%2FAiFnIPeKIEHR0t09GFSfO%2F1rj4OHFfHMcAPuYUDdD%2BHMVIXJ3JHlmDsnIaBujlxNqU%2BLWKkQwgUWGE%2BiEK1cGI%2FZUthyRliTGGwTLpiHEHQDeZUiqF%2B8o%2FkZQkdT%2BoezKvjwZhBrsOzSw8%2BAILzRoRF1tZ5wzLcrlmGMVSzD2rSnsBc9DMZ74J7X7FMtzQo2GTZukk2eExSuZCrraAzGFppDgaOBVu3aEzCJwyLoGvboUKLqGzcSpgn%2BcyPnNtDcYSakKaJcZqP8mdttDDnLIwFG6xBnpOd%2B8aCYDN6fdD6nHh0c0ZbNb1Jr2mITSwwqJ2gdHdn%2Bjr%2FsP8tF7sXz9RnyIF3m61vMdXShFBXcsJlHFUK6FLodeMLKrvsdyMxVfgozpyMTCDRwI0cmq7BNCpKBCfYhw1hQF83I8CQxvIfeRHt4O1EMJOVPT8%2FdRRDUaDmcTH8NEex3sVcwwqi9XVwotLtdHHba7L0WL%2FdWjxrmx%2BMJqRUqyJm62Wb8BZsu0YKKdp2wc9HZwnBK3CYP8l318QbTLvF%2FJYC9xj2stNUayC7jQi%2FoMK7oy8kGOqUBWPL3FSDFv%2BKa4sGhU30YdaBKb8jvvedTBkPR8r1KiLDe4kEKHmcp%2B1nsGhBKcxkEgFw6pK11Kb%2FCA2J6lf1IBIK6nNQJBbEj5%2BZgindUf1091iSbb7NaY%2BGbJzRGwA64MKBLzlB1EeUEoM702g9DZ877mIjgTwo%2BG0XKexJP4ydW%2FMvv8E9WBivSftEc6S4yfsQY7YgaU0Cqlm8m8Q8xufD847iD&X-Amz-Signature=3291e3f593d4e1dc12dc1b6d54fff5814ea66e57f8a048ec96432146389751fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

