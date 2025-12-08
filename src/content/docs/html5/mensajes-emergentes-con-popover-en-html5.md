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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I5WU4L2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiJREd522houw05yuHTpzEErnmKkgMDPPr75i4Tl58pAiEAo7Ar%2Fes4Krtl86IkdYWlVM0nZnGaC3pSL8iwCPs8B50qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0BDlf1Pt9%2FfKb9KCrcA5STRUnhXvKkJ9EskCAI%2FHuxDqJvNZR1WrFsisy24xK%2F9jlHjIEX6FxfsYt0BNpM0IAiNjdXyczHRcNka073AWk3n35BiAyZ%2FdETwGeLiqYHkpNzK8PLwUZTfyGXhBOZcea1gLL%2BNayPPN%2FbZF2g1VAg9m8Ia8fEUirHinG8KZoF2sUhvqiJcREuIPXp6PBpEeqBDjK153a2cQjoNO%2Fu0VFBwRpHrtScw7wW2rSn05gAwzxJllJjMnscbuw8LqmE9nFhllwOp8MQYZDQoGBEpw0uxk51UdXCtDTeY0JWic%2FBch4K7H5YSrLvfdN8gyInqewrlSq2EUPOpu4Toj5nYF9L9cd%2BvzNwH0Y0Ag5ZhWVL3jSljeX3r23tpADTtssweRgL5vmEMjqZRhj9VWhqt6CSi8r9PYsZuhBHciDAP8YF2a3WvyZqL3N3ssX%2BbqmtZYtvl2lgNWQh7Y6hUdiOabTcl9mO%2F539O6Isdrvb3XXqAwUGazuvshS3EDc86GMUUKcC6ezOJ69HYB4YDFViFpokPJvPrrgHYhsJvzj2vGJfeFRaOQetdFPiA182pQ%2FQBYZOTnogxsnuzRiXi8RgHq5rOjqP3RZMDbYQlUfMTquHCwhtfbyYA1wU2BssMP%2FC3ckGOqUBaoQ119AXSiWT%2F6IgbpsMh7bvT29G%2BO0Myii0VikocIwZShrwxmRyp5IHDqYWv5D%2FUbweqkBHcT1lfSl8icqIzDjEXXmPG8a6rGX3Xi6wsNAWrLGIPBXPNPEtT51Fllq4WFyLK5j04iFSJXgFHvBLxidg4Lp3qUUGg605RRiA%2BYKhknGviybdlUPCejGwN4MR5TMsilVum97Jp58yy4A2N6%2B6mr9w&X-Amz-Signature=b7ad527c65f17c6521534d815caff7c011627a52f81f88df7c6401afa2611b4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UALK4ZS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEztOk3sXG7b8g31f9MndgKRc6NcwD5pDnNnwsIbyvv2AiA3xIEeJu98emQXx5rqacj1z7YKqcMJY%2B8WoZpQgB1%2B5yqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSjOXOEx1wezz1xs%2BKtwDi6SHiwUbweJnHKFtNEPeShPW8R6W%2BirMl%2FfCkvFg4HwXvImZJzyiM5xbgu9kJd8C%2BWy6dr%2FWVPVPG6W0%2FcYLO0w6iRU%2B6u6ObVa5UvLcbMrNe7ktPXUj17ipBG1us8Rg6V52TacHLqB%2BLBy6QmA1kHIrQsSoEJBcelmWhcXZv%2BHnCfT37IE0IjksVTDyq04vLXy5EuOMUDAl2qd%2FkM2BZwWi0phfaUTQvxNw7ETP3pcsCrUXiBDdn7OAXr5YY6p%2BLb4m7aB9ESodpc%2B1ojmfhopnRLW6w79p84L4qKq69gIOGJbHWGhOXlT4cWVCq26mdenbUc5aTbpQkAz6yp9MIapiJV4m6fQc1zb8GNPeo4XwrxHKVATrhM%2FRNBilvuTtgjSI4qSfVlfEBCVhF25U2HyfvBa9OK9zoJJ055hQwjWJQZDEPpB68wOm3E1JPnF0QUXoP0QTkKXE8ixL9PJBh1IHftI7oDfLDxgVDm6I3XZfzrPn8WwqDQFJfowmP5%2FANykwyKb4qpvOVbqkHIbnJLWuIaIkNkpzd2HPKMmE9dA7qwEs6CnL5lNYMmqg2fCpfEDMnzJOT%2BHjjd3RlBa4p1dYJDTPKH3%2F%2BkJt3ebsl8jhzxoooYGtm6w7JEAwt8PdyQY6pgEUhFqFl9koy5wOlfYOAZ4jiCWeDTp8ekCp%2BmNj%2BC%2FG%2FPA7uIrfh%2Bp2Q%2BUAfYmigL4UmgSEPgCFUt4lgBK2R2U%2F6PqDYIidgcupD6BN8kyjrnZvB%2BqZUh5j1%2FlR2FhlDwrkQ5GQubqon6ZDyNe7mAuKZA4qwyTKqodECnGe24hl0dL2SGjbti6ig%2Fv9p83NLi4tdN7fbEwTtXpZIUlkSjQdems24xxM&X-Amz-Signature=3e42fed00308db731dac1a18339184d3406d7af983630c2ab181799c576a861a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

