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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZE272I2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIEGhvI7i9surCHRQLdnfAoWIcCb65gJlgKMSg5Lpgc%2BrAiEA7AS93yOsetaMwCiizHNOPT0mdQPVlQt6uQkV%2FipCO84q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDKD6YmTwEH549AW80ircA7SHWb3MtyhNcntWXs8%2BiSMT5wx4zgJa5CoRiiZtBZR6BSoXDn6x91SCoIBWRWAff1TBz6ZIrdu2LJnzfziSsvrJJCynRqNnJvCrIPf8knetauYfpdYvCqkPOgx3Wg4BVhb97ifTWlL1Yos4KCqqoVqxFDAU2pPp53elf8y1PwXj2MwRUgeCeK0AM0nZzuAS3WCo1l0GNqf%2B4CLCoYAUWoMyMQxC4uO2bV%2F%2Bpr1NwZJJt7aXYvLAEmEvHHvi9bVbMzM%2FpkXI0Ddw9PzwymcCjrCf%2Flsv2wf3mcqKQm9nBbIZBmqUTYb9qJM1%2BmVNahbghqzFDYb7L5ArxZv1dt3I9MTAJk0mNGxK1H%2BWVUvBoJTuj3X%2BS%2B88tJrdke4zoQn80ghvUjzUTbwadU8qdIOpmOanm4Pxp%2FYWqB0lg5Vlm0JBGNwtWZo9W8uIk5515hJV2oos5ezKQ2EbyoJpvE26XFHcDPGEqlxDymdjppA5zqGuEuLZOB%2BECWZKcSPFxlm1kJQXbGagNFjWtStl5lMPGKjFtJpEmHDRgGm%2F7%2BaK2u%2BIkHmZv7J1U%2BrOmUbaxqRgf44TPvA33h0SrjBKxYBRAGflZIV7%2FGyTYpNly30BiltCYdAbfBy6ZuPIfCfcMLO5v8kGOqUBjrrr1fj4jXQxN9U%2BfnrwT%2B4J6AUJ9XYyTTbfiTuVLT7EICLSly5MbhM032mbfMlFYZiDNelQU5RUaVO0lxHkWfc8xehVqhohPxQfFuoBjr3RuwxtG4eAHEVVdPdVxr6VqoOV7F5VfMCONG%2Bw1uDeEhVTsdUgCojysaYtBDKAzQDU%2FKdl%2Bp7eT%2FZSvq5EinYA0PWjyUiDoAJkHYq%2BJCNOMaabCrD%2B&X-Amz-Signature=4d71833e33af97d0fb11e973b87da4fff28682ce015e98156360864b83e5a3b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLK33WRD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIEzgD%2Bnpm50wbuYeG%2BHe4WA%2F6fjXx8L5ZzQRUogMQIMnAiBoDmzBkupsmCtVK9frQW%2B%2FE12miRT%2F281IDXbC1ywFPSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMIkIEO%2BPGIdDcwXn0KtwDAsh0eKsOy5hSEvFyoMkmL5FQCmP3%2FKoePgS7Lf6my6eURf6jBb5Zb8rXuueBLwdhY29%2Bb56kipcMOX%2Fhn8BWzWAZ2hJTv543tF5MRUsQ1Lj4kQVkYpBInLC6O6XrgIyDtMoYsI03iydtfwZtvtRMttB2OWF6zqUP758oabRcYN%2BJoQKBCHge%2BdS207cNcvxXz0D2RwNaPJVE%2BJQfIsFIZAfgbIKWAkgtmq1GP2GXfNBJ7fiunt5XqNY4JR1bXAS%2FA%2BjEoqh9EQ8Vv9JWwh0EdpOCLR4gEvJv8jKHzESSxrw7fIXpKAp4qkny2rrJsNZH4%2BrFRJ%2B76wmNkHoz%2BQWFRXiC4S7cO7JI4Pshv6u7oeHYk1%2FNAUzJcvfeXvPkp087WbO1M0qvO2Wvlm%2B651LCLMzznVsenQAa4wdull%2FRC8C3tXjuYXqYRT9dwvXESpJJdM1IxqpcPmMBvDyQWiXNlDXi%2FossfSuHYG9IQXl8nBAP%2FiaK%2BS4DyknkbC3TWVEYVh6M0ys8cXyXp5prPnwz67cscG%2BfuDOU6JImLxyNSYceKC%2BadI786pub08DmGh1o%2FB%2F5sf3ZDwwa3Uqf9itHO0E7Mcop5B5hWKdb2m2RrM3OB64Lp2kQJUBUrjwwh7m%2FyQY6pgGLDkY6EXyWJ8fiT9nCY9RWGVTB8oA4rc9dffBtbD7dJamnUnExyu9O1NzUGRAJzyPq724E%2FVtWpWBXIdZceemif2ff7qp9OTtF1M8n61g%2BG%2Fn3KZ26%2BiwLjtDaU1prh4qr5GhI2Ne%2FmlbT2sLxxmURJH9VcU0mJTQq0kyYqn91eG7Phli73VViZVM%2FS5%2B43PxsJzWT3IIi%2Bc9xQAxC9b6H72ZsXYez&X-Amz-Signature=1153df9a1988765a5e7a8df09773ebc976d86864bc20bf0c6ac6461de1cfdf27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

