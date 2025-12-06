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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST73J2PQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2F7%2F07xBjK1ZwWFK%2B0ZzxjEoT73rdggd%2FEn9VSaVP4FAiArlkustY0p7p1JfOMN%2Bmu3BB4YGF9EynXY8c6XJYELGCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMvLkYyAiI05oHQiESKtwDygiqIjIXGbjV4%2FfKqdYPpUbd4OYDjfL57oyXMUz6KTNc1cGNSbAw0F4a9311AxT5pWUdJ8wfliJcDy%2BNmsqMAZf%2F5jLyPgf4m4ZKlhhfd3H946nxv99rgZ7NnF3gIYse%2FiJ1Piesh0j1f9k2X7vkomufiH3sesXd3ykuLxUXYOZcaMb6p%2BkDII2O7fjGy5a%2BqhAPmQ42FwFD%2F8yvawmQawI1BntHMQJbvgFULUNUXb%2B42UfdcS6NoD7WOJedv0HiM7tlUkkKlZcZgSzEfOhXkE7w%2BBoUuyHswTyOG77sH0cFPi0lGd2VqR9spjBP%2BhEIdf%2BMZ0czBTB%2BIyoiLlqo%2F0JKDUqxb5BfY5ZDN%2FmYMXUEctV6PPh3rs0niOXrdiPfT%2B9jdnvO25y7BW29pgYybaiSwLCAE9j1XjcDXW%2BmYliBBQ73njEqFaBqTt5aYIWhWU6aN1KKUuWdAsLPA3JFsW9lDVFE9f1vJtIHPbo9NiIkyVk8BMBSEYCYesAtBgLp%2BA%2BV7Tn01uqnbov8fqd0Eg00QPS52Iq4N6uxjpuyN%2B4TT7iS2rF11n7lBs4tFChI1SPeiitAKUd7xnj5osObJDeE1oJMzY0N6c77U7zJ9fmSbzC4PhZf7uKekhgw6OvPyQY6pgEuQU32WXzJZYvioekz9Qee7fyL8tOwfEJD6PsOYAUZXTzMCDaMWJ9v8KrCB7aSgL5DYBuR%2FBtAl1QZgeQFchu3tZ5VWBlGFf2VNHjeCy7cs%2F6Ho1lxPqRkaX4xzEk8ad%2FAk3POqHsUMCohnDE1sDdzQWoJog%2BwqegpWsNWYl%2FzoGffSvjFXfbokGAGW3CIgV8hwpZBD8BrHgtlCRckzzVcnXxnaRVA&X-Amz-Signature=8a774d4012cafcc91862d7632b062591ac97e436dc2dc2cc46a6ed10625200c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHMOZKIF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyBTjqH9S382zL95ikx9THfZiL43%2FYB%2BwEzCIC7%2BDOSAiEAxZuiz5CZsG%2F5xYkZcGF59eiw%2BoOcpbcTgiyzpAZlnPMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNbL2AAC9bVDVL%2B74CrcA4pVddeVBetZfjDLC78JeM5t3%2B2Cvp2pRJ9MStwGEt0OAcyzNZQfru0WvzDtb3aUAwDEkem41bXvJkGAwRYFcDzOHpYdwiSWPuxPsYfz2bav%2FL%2B9MHkxQLzze5Gk%2Ft2b3m4IWWw%2B0P01RbLI6unBfQHYGGcZMwIcI7hPGtq8VgYQQ7KHabZE9%2BE%2Bn7OYQCa%2BRuZaxJwbfne%2BEh%2BgwgL7obmX1wU5CE%2BwZUnR5RGY%2BHGA2tcfMd%2F4bCIB4jHXjSY%2BU4aN8ypLzbL4AbUIYetu%2BxtcMgZvZzKbkSzDJc%2FIDVZRH6YFTJFIP24vnqtd4e%2BBbIDgS%2Bk2mu754pdoxF7obuE%2FuUZ9PEVuAxpZESvkpuVdnCabr8Rn%2FAF2nMemKgwOpenJIWLIKZG1AxIom55%2BrJ%2B9qOAkscdISEdIut6a6W5nFTSw0qqzkEpSS7RnXfahaYgflYHZc93YDFqjDbwaRlxKt8atNyrzo65Cs9tqTcE2UzUQlPfe79I6dpbwsrO4ugf5NPusQa%2F%2BSBRNhsr2o0qbseGn3SDqh9pKbCI%2F7sRjIqt5mVFn2PEU%2FQNDgtUSbz8dvG9OmFl6oh8oQ2RZYdDzJAS7RQ51MM0q7YaBQdJT6YAWKK1fi35B5NlJMMfrz8kGOqUBW6EbexEwRJ1JL9YErNc43vH2AOzq3%2FkJJ7JmujO4yfvAkqpJgGRXmhQY%2FjVhGgBb1t4Rg%2B5YkjfLolFqsSI7H6Ex088etqZj9inJmzbO%2BtaSid1I5kxw0ZCAcVsu0qqfEKmcFOP75rUPL%2F5E14O3TgbQghqimfJO%2F1ZzZsM5JHCjj8SJ6ffCRDwQSc2QKr2JXetBGU3gKWs073SxJ%2BBvim3erCgC&X-Amz-Signature=4f4d37ed7dde83f25087eafc499db03237071bd96013d7d50e02cb7c5543e6f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

