---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYFZUWV3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T055140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQC0QUYKfepIGllITWepyUz5L5MqekhnpfrfD8v1P5TCvwIhAP1JpNaGy9KTpN8lF37GbT95q0nd2Y1ammeNRdfDvdbUKv8DCCcQABoMNjM3NDIzMTgzODA1IgyuIhTIUnNIulIoqiEq3AOP88VbPEgzTmIcoKu1mKx4d%2BB%2BZiIn5sp0uOOwqZCqFbKGdcmL33qsr%2B9oh%2B5r8GiOjPT3DFXU840y7rJh0UJKmeGelkbHe7%2B3BvNTyptEVk8OxcSoIHAtSxdFt9u1zH4s7sFjQpLvc%2BEUGq0mo5jyU0KPQWlJJc9tqnF80BMvSWH9BZy9VzBYRdjzEI3p3K%2FVcYpVCawfml7X7MGqD411sq4U3NBMM4yjlJM%2B%2FWRIhiq%2FCqF17moSUDjqwVv9j7uE6i%2F%2FWh31%2BEe8j8WCu%2Bi9dqdGMFIpEx2Ls6LgBtfPtfMFqdkArkDB4%2FeF4aEnm9GPH5SssQ0YjCeUqM3yOI1n4bTkRbD00tGCVgfz3haO3lyU3nGLosN%2BPd2NiU56y2cx7QlDsqkmS%2FDkxI1dfRceHOr1iUvFVddZzb3WuZS6wF7gmMrfJwiXkFOeJ9IyaQAWTRKfiTOo%2Fd1dT7Q62eejdtZt90Ncu2sdqqmJ%2BL9jbDyy8qP%2FEhgj7kaS2uLxtZGC%2FyHjJJ26XdbYsvW7OzKpIB5owXtHld7q6ZaTfvSF5F%2Ba%2FuOaG5YZXu8uUxlpiniQLCQjKCmbh3dh0rrJdtTb%2FsOpaOg%2BPw3iaZVgjarzYtkT0%2F4zMoNACbBEOTCMmr%2FJBjqkAayA2LuLpSparWvZmgqsptm%2BEJuttuIDdOgfNEIdbkJ1v8g8JXO90W3RetXUn2%2BOhb%2FXBbVnurq5s45zMFgY6hGVLtJExcqfGHGVA4T5%2BzubF5TTYoTuzyyzd93Tx%2ByoUYrAmiFtsczSwx0wfxa7mq2OdOzGxRtLFF6IrtpfjelD78i8rZhCI4AWVtWFbsvAAiG8FldvWd5wjf5hJuT19jFPAN97&X-Amz-Signature=bbdb91a3598784853db8b91a6a7d67a3492a337961af99c2bdbed8e726dbdd56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAIZOMC7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T055140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAPtVIAax3sOxu8FsSsTBUcqjOaCOnWTzxMpQS%2BDid72AiEA3excQKVQ3pET7vTJHFjMNcyuJ23E3pTBQDE4mVfYWiEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDPFbiDKcgucSL7SikSrcA3hcb2YRA1gXCCCYfnepcS0lj4yEKE%2BKTzlCeR9We2uBF9ixvX1FO4VMi6ZI0piskEXnk8Hu5AGqY7lDLay6WqQ%2BwDUExp30SfgfWTa0GB%2FUfts%2Bz9MWJDOUaoZyqm9FLYLjnkqFJG%2Bpk%2B2cIACbR8W5k1%2Bqt%2Fx%2F%2B%2BmMRSO86verjrpAPdpBsIYJyB4dQt%2BD8I2J%2FQXEm8pXSoXXSHO0cuXgk%2F%2F241Q%2BgPGmf%2FfHRoU3Eh3mjTU1ypDFOTxb%2B9FHuaPoRwk72xNTuoxh62R%2BJgDgz4dTdmsN1WCcrTLQTlmI0qGb1qFwZvPxCn5cu3uWygLjFroySxp2O1J3o1nIyBf0CAkeBGsYXuAAlfg4pEpkI8%2Bx7Q22gLz%2BF0THNhbLk9RizHLOCwJi3o4F3QL%2FeHTKsaN9XcCLAoPofw%2Bz5h3alfVP84MAvkGYFbU6oxcfm9v23f4HSY6UcozHO%2F7mmXaCgldwLODWZ9JK78vGqV5FDWG5Pe62JY%2FAIx5mfzsN3xxOig5xAJV4up7YT8kOx5JQKnvD%2BPGh8Uu1LRqqf%2FxQXMnJD8726Seg%2FqNSozsS3xS6foNqcqTbHgctOTgC3n8fb64NhPZqJ6stZpPzwMRlz%2Bh6VtJPvze9Z2gyMP2Zv8kGOqUB8yEGj9DqR7F%2FEaFsG70%2B%2BLqQNxtIM7zNXTRCgLigNLODOX7D%2FtzRRj8s33iQdEVhej2hcrhUDldJBjUiLekEdDRoRGY7Xj2piLEXVrotk7oaMlWThGUGDPDPScOjm8KYDDAcBBYEmX113JBpSk1Rl%2BMVxB5tc3bH%2FnrQ7NWLCzU6QjkwKIRibg8ZZpIk0NJi8%2BzkqW%2FMNJ8a73UwEns9fIQbG%2Fr1&X-Amz-Signature=f149c5722f4ab3024065a8d025709a2f89b448ef68b5af0f1d7e048feb61dba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

