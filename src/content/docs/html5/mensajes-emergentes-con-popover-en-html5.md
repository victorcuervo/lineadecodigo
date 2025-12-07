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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XELU6QGK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTUepuG%2FI12fOmMIIIXIf0yYUgrtxTSJiREZGGTp7CiAiEAnUZuTV%2BUBIkjqYN4ZEwhE55%2FVPgq7gepTwvFFtPcV18qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzPXmaQbJx6x%2F%2Fu9ircA6zu6I0puJV9gc8xHRTizzSZbWGeSn%2BBMZyGv%2BpHyhyCeKXkcWBx49uql%2FCB23EHFc2Txborgbiq8bGt7lMqKu9scsFKzvlf7y4G%2F%2FI4O%2Bhj4OcezKy5JkATqgDJvOm5%2BpmsemT3U9NvRU3r73KalNQCwBxEfTnEF5W%2BVaWrbR5KBm2Gy21ZmVPzohdj5W8KaVD6s0BpIG83B7hwV5kJqk3eW1hjyyizTSRoB%2BIXVzJarnEKsKrt2m5A8Gs4OlihKPQHpzk1YaOslcj%2FcrgFxcLLmwQkNmQPr5nxfB8yc4V0SzKluN6CB1pa7%2BuaNWH5aavYJo1c2wtE3AyShdzwxSZY%2F2aRmpPMmoQ3ikQaM4y5FjxyLitcie4BLxadBXfesrMoFi0KacNDFBb0F7X4JyOi%2BBVl7fMTmlzf1Ndn%2BZzwoaHed%2FDvzVqfskqSdV1M8n6TQAiSauJgvHFYpx5Q8E1Hx9b5I4jrTfTcm1gAvBzcg7JLEma1ooDtdIyzaZAob0y8fES7BNcG0mCoiTU7TU85%2BzkdA9tjlUZJpCKJymRNZhGLsXkgcMh1tr%2FtDOAGkoQJIKuT33Q%2BlyZm88mzrmtOmw9VMYzMlRm7XXqOFSsLnk9pp8Wdqa2rk1cTMK2Z1ckGOqUBv4X4%2FamHVQ%2FaFXHqYiYFW0EIfh35HVfwIFI%2BBcEyUg%2F5e4k2yBZrLnlDrT1zG5MCqrN7xSwxDZBqpyk0YVHcXwa1wP3qAYmtcRF7LjhxLKC7XR3VEY6idzMOi1OgQQjQgmNEULPoP3bhHrM0uiELqowYCAKSqOfVkNsJUdsm0dg%2BvzLcrIUw4kl0cb9nM0L9ASgITEN8wt%2BEIm2JFr1pY%2BXsG3FC&X-Amz-Signature=1ddadb7dae1c08c9dcc5731664b7b765699999cafd2ec7bcd9a931f60d1be596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQRYJQL2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYU5zlmLbcZ94vlGfx1c3Ut6Nh1n9wAXjC28IyaqYNzAiEArtvcuUzM4vVRA1K2eiZlIJMRSVnAonysCmmxe%2FN%2F3VYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0%2BV4okPz%2BLaR4ZaircA9pN4Z1eAX%2FX4adl3h9qiR%2F0h7ykz0DDLYx57PZWE8uru%2FvhyDn7CE7QdicSqhG%2Fy5O5%2BmnrqB1QO4mP1Sd8f3V5T0%2Fy6Fv3ZBKeHxAAiR8n%2FPbTcOgIInKdxsl4xfPojqy6rNotWSPRGnkvly4BciiYQ7u7mGotrQWaOXnAwd0fomvaTvCgcFNpPVGBPKQy%2B1TYHvxhNl06ZlsYXX3%2B2JcJRvziTTvizolYJnw9BRKkKj04CShHocSl%2BPIAjeBkCNfDzQCOAQnq73Gso3KWHJu0IGXMnaCMxc5A2A2B95ocI6tkV7FuWpQb8xN%2BOXxzIK3qnU%2Bvdl8x2AsCjKKDT35Dko%2BrVXEXXsTL3r3el%2FJpxP3RDIfTAfZ7s7Ces8uSogly7nDqBBlBy8A367lNjI9zX3RFhYPgwOmoWVuFBKdCKiu3Nalwenwh26%2B1%2FfdwIl%2FWBJeYwNVDFRsXSDBj5NZg7P%2FL0qiyNl0x2Q2SQN3yQfm47NUW6Gem51UzF5P08zAbRAM5pF90xiIyi2zjsi6xhr7XlGLf9aEVEIc%2F4%2FJYOK1ehnXRdbgtxHdjjI4%2FJRWwNcHr0oM2qxZ22Tpel29syq7RQooK92nYISyGgqPcnolkH6AA9fLRyMq2MKua1ckGOqUB5F79LgNumaetpfoUd%2BeHwkO5hOhYSKWmlywG%2BB7FVkEp%2FolvNak2BsW%2F4NO3hZvXES3ubQex%2FW5d08J2%2BxE3ImFTaGkvOXFTq9aomZYCWlT8PNHHuX%2B2iJ3Le%2FX1riS5X15mD4vxGXzf0ESPDmMP4jqozfWkwJAdIAmUEarESkxeuOuAllYk2Z9JxWl36%2FKFBl8BCqXjHW9cEG5J6yR5nnjVrcck&X-Amz-Signature=7b6adf68696f02113e2197a4d0e621fb433d98e6d9002948e8ff7a1b4d848070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

