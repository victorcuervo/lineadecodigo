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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZAD3UEM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfBZq8rRhJi2FgAlYMxY%2FiFdEZzfGzyV82tsEgSY9KVwIgRLzp0ybMidw%2B232ndaZwXRbKtAsx%2Fa1d6utQGqQup9Mq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCbJymJp0jYbn4wuxircA1S68MkXyJUf5SnLIMsLLK7O5KxFOymSWFht3hLxtd0PKhb0bZEOLBBB5Fej8UQAojOuSeHFlMuwdZpScKQBxziCVjvLk%2Biy3drsvx2ZcXo6iAps8D45TfYk53GNi%2B1wyDGMcOmjslIhcTTrmeim9ceDjpNz5RQnITJr%2FV2Fp29txCLT2LzZDJ74NfpdEh5Hk5Slx6cMHtDwRuQ7vwgCCRMDLmaUED%2BL1zzXxH7nYCWc9XCMh7c7qSUzyF3vkP%2F4xcdHZusmwwxKjFp9e3evOz%2FpJuUSHcbrgrILauAH8Zv0zcqlR%2FDwjqGJz7ImbGb4gCA4AkKITlw6tYSMcLGStpZ6xVLN0vTiNxvSVORJSc82Crve5UJoBaVVDwpoxmPuzrrJ1AJfdfE61cS0kHQAfAnkpRr0oaAGq%2BHNqTL1O8xIV6qInLoX6RYmGwIH1A4UvgtITfQzWPMVk2vneazbp3xqUG8meixg19CrNPB%2FnocNyJWjnNCfijemQAcHImOy4sLc15ReRLTS32mgaqREfbUx%2F51ViOYz2h1cJZPpjTZD%2B8%2FV7XALP%2FZ3dw7IdwaSmYF6PQs5UvnzOpJC5Hac%2FWQqgcznDWPyuJChfFPzIFyPBeWhuqNtuIY6GaBPMLeRzckGOqUBQ%2BZjizkpBHYyKmjPSinhbyyYRu07xHuL1kdg%2F9Dtittm%2F3qq%2Bn34OokOyQfkNujWHZ5j%2BPTU4rxrjWfN8ADvMNTsTP0Wtd864NAEmggJq8EzMUpDrkMaC5%2F%2FEwaEn9HfChcisjBu1iTwEZFWs%2B0ASpIl5czTPaudzmjIhGBiQcvzkQTcfuy%2BEP7RcBJT94gLu9JEpV25IxNZ0coIGp7JgOk5%2BCYQ&X-Amz-Signature=4c01c3162cc86ad55110176a048c7fc19b6df6fe89c760e7e23c422b5531b0bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIHNF4A%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ4zRs6xwU%2Fg%2Fxj4Qrm3bk2xHfWNHH7eRfnJPZ0d%2BKbAIhAOGF3us8wKbHmq%2FM2lJ2xL6wPj2Cge54NAJW81atYHuwKv8DCGYQABoMNjM3NDIzMTgzODA1IgwIbsYkWjv2UkTnuNYq3AMHPqx9T5qPmIN78qdBcrFGvMYsPLvnmNJda6uvyjAPJU82LkFB4jOzwkUytktYKQWPgD0sXjazYVQwn4hqmo8PQQSCrR8AOnz3vh0zyX7nKfMWtl7d1KFNdVexVMMKW2eOb0VE%2F6dghAnzJh4wpHoOoIhWCOOjRQE%2BTMHeTKryz6c6S%2BhlB7bZCYv5W833PCfhTi2Jc85%2B8s0fjJHTqpR%2F0rqVbRTQPI5f60qmQ%2FfzxkYBTGszOs45JqH00n9Kv3%2Bk02HyWTC9FfTKULm8RY3Sii7vFZ%2BZDq7APlI%2Bw2zECqPogxio9QaNaDuazagMUh4ku0sVl%2BzNUSNQFh%2BHAtUZcHzzpzAN3KtnhiYgKIW4H9XN%2F3jcM6ZYGK37kjV6FOe9jI1%2BhFaQhI3POFbTCyntB4%2BnlKu9Eo6V98%2FvuXRXcG4dEpShm2Ya48K0dI15ERN0LHLcXTmuk6%2BEmC6Uv3z7VToBZPeWn4pacU4uTZcTtIP6xsd7iqIqRwEAtXpdggNxj6GUBsey0hQ5Do7ZjA76AmgiT5OYy7qidoFnP6N0j3aiVV%2FOCKS5%2F2vtvltY%2BX9fmEMaOEFgbmE%2BIbT%2B3DI4sINaUyQ0LpYs%2FYVO4Gd7C%2BsQU9FpYvh3uBI%2BvTC4jc3JBjqkAZjOM5Mm3WGxzvpyyFRWnwTmynd3%2Fq%2B17g0chx55UJhBmLGpa530i98i7LW7K4d1307pKlysVfAy2Z1tt1CIHqwE3pP6Vb7cKHs4ND%2Fa9dgIztS3PzGYpY17MSxFrYBw3Pd6ce83XodPhZSu2W%2FwlQWatTK9FeQRk6OcaicMdaNcsKF2fnGl7v3o4rjOC8D5YACs5mNNII1SrO2tX1TKRmLuMPqP&X-Amz-Signature=258253d80213168e38f9b81b501d862499fb9f58e9832fbc42dd7072567ee5ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

