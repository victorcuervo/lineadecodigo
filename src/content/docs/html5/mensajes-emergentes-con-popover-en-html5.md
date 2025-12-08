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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4LDU6W%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgx7co6lquLiywrh5DDz%2FwydxprWTdta1y%2FXC1hXjeCAiAM2DvII44BYOaoqTjL0kcMkCAIlbeDm3EJgwxhxC7sKSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9AXtcPAhmo4UMOXEKtwDkv3%2FmJL7QUieqmXHz7hup%2BIMat9D18nMvQCNEynfkZkniSw%2FWu0cSvAb%2F%2B6X3Dzp6d7r%2B1L5FTivnCWju%2FUtJl2iSq6PJP7ksBMNSHjaD9qsQNUyVhPuRIaeizuMo839MTc5bM5EZtrzCk%2FhmzC5D%2BO%2BLVmOjbK%2FBeg2PUbbGtv%2FENdmLfqyl1mNi14wZtXoWdQfoYUbDsPLHSkA0M4HeHDiaUtybdNdZD02cr0qONn0l%2Fh6SsZvpVFGGjDR7a5GTbD7yhWglNakEg9Ox1KPAV4K8IJpea3%2FQxgyZF6f7GOgyJgVVVooUg7L2Kh%2BssKlJVPvHFJxFcN25ju3BQtHz9nYLuEe%2FQHavRfpUlpSs1S7aIAO2a2b8prs2OI99nU5nCLV0pyb3eeIxdBW9fWkW1Acj1Wor%2BQbc0yTrcUZJX3z7A5POkXcJmdAtGnDxoTKVrGlz8YYPRk3ocosjzsThy5d26Uc86jypW%2FYTHlCEhrg3AIprF8WQuP8zSDXwZUayzAw44wwUvKvSrS%2FV5qXhnjGWOoBYmJl69hESvxpa8GcvTtQKLLreNf1Tv%2F7IEC%2BdG%2Fv%2BXLsIoed6A2zDFGF9ZrM2pzbFun4qQ7TJ1hGsm3EPxv11j4yWpzdYj4wxqHdyQY6pgFbrsRDDjuQE3rd%2FuXza%2BR8TdQDrZGIJZOs%2Fn5siWOsKNwo40q8d%2FZjU8DLcMdfGSkL0UmI5BgFEsSTiGk1H5pfWCNqS4oZi1W6fchFtTgRMXkwwVCJS%2F9vGG2vs6CnebE%2BBvNWf8UBFzECWxFtYYyNMsdI8PUu5gtd8O2qQW6vI3TaFFm25SAHMxksfkWfXQFdT%2B%2BWCyj7wdDXpNp7d%2B%2BEE6aYvh7L&X-Amz-Signature=d1dc99cc97492db1eefb2deb6f82f637150417bbb52d26989a1c583523e26c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653UJD55I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIALDvNUJeksOaulFj5QoNCEKdO9RdlnJPp4to0tqMuDaAiEAuE9J7xpWUJ54FYcG8Q4p8TC60qKcgQnhRQf9UoPpJLgqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4IQWQmDWwH1KTXOSrcA7pnE%2Fix%2BYnoMX1Ya6RuGWmRJJizuD%2FNyQy0zXAS2VTcFub8wa17AIJMKGzJe%2B2yfPAnjnN7SqmPkndAGn3S4BOHY%2FdrovgKy0yEWa9cZPckQAzy0rW2y%2FKCS9sFQ%2BIvG7D7kLVCPo1%2BflijSxULeN0xcLtM7Zb27VFGnQKO1EeGJ9107x0vpb7eiIOPYpEamEAeswvpLhkRnRsXRzKw6L5WUpeiJkSlB48Ptjxm%2BFzPY0hY0errcIIEsbQyeQLvmdrF5vWUJS8gTE%2BFri9WiCVGMUXVSuljARSdctwC0MXQGbg2286VUQJBkfrwgNQgaoMEDopKnEoXks36ZpOLhzblamYO1LX6RZE2oD2Pg21VQKZyxT0Ia69TaaIj2tsk8CisM9pcisojEftC3gWm79n8Ju32M7VBlBsHz14SQGkRSCR7PurAuNaxUkhuSxWwL950mYiBAD236tNtMrC8smAnoRaaxCDdM0E%2BPFUL2BsqmJpXlaaJ2EZYN2R%2FatxBqToR1BwTopWRivR%2BEGRk30c4gUfRqEHn50EBKj5dKNQ4tTkEgNRXwbthBTmmuT90PPJzbuo8Bz20DtgsGqPjKBTjw4ViFHrl1uJx1ne9c85bgu3tNL0CrgtY%2FXQqMIWi3ckGOqUBKgVpiRgmVjF94ym9v6IkMDZ4FNY327I4dplWnlYIDzMFXmeSxhu0e2rjWOQtyhvGojfaw%2BS8ccjxzOUNzLCrHraPM6e%2F9Q37jDr%2F%2B6DXA4F%2Fti6H0y5ANskzbWLho5smp7tDbNPTwTtlnXVgwPqO6f8%2FebEVQGIAmAMHFBdwRItZm9aJbvy%2BeCKEw0nJZEPzGgre23bR%2FLSfiyIDg%2Fi5ccfkAfNL&X-Amz-Signature=ceffd2bb5cd2dcc698518a09bf839903508923f1c8e5441e1e7a8a3644fa47ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

