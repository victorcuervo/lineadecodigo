---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN6MMFSI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCiLqP7%2F%2BFnHez9fyJIIZGd7E1KVr4lXlIiUFWQQOKd4wIgUkCaZRWpqij6BZpyr%2F9NY2Tq5JNWisAyE92Ejb2K3k8q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDPosicJf3UzTZY32DCrcA63xs1knz%2BaONEfee0fsO90iQeK1O7bjQEWd3%2FXDqLxhXAbzh7EmUwJ8Rt%2BE77YQ%2B97rqhaP3oBtQZv4LT9VW02YBBK9FuiKyazt1xCyjpG%2FyuLtzrJWoFbiKL8GY1cmDEZ2KmRzX420lvhdAUZb7utLskuU%2FTfdDDEGSGT0iPn3xZ6pG6beAi85IJSpDfKgf98Xu2TXYsT6%2BwZ6uLfDAkJ0cgglkq4a2Qc0A1gnkDJjOa1qChihgGhQD6ttFIYfv%2B1st7g1wyYyxMTmUrOWT7s4RHswvRk66btNHBFrNhZJU9PqejQV9tlU27S7672sD6HxhFqnX5fXOOD9Flda550iOyGb1vOJkTbrJsazOTVDq9zhG01Ps5ky1033QXpNuB6IWvTDQKxDsskaPiey476iyvZvc6Ut%2FLZnWv0VaF8h%2BXWuqBoGhlevia4sxd%2F4LfenIPXucxYQeLVXRYQt%2BAZJ6%2BoPY5732tvOfFf5cUT7d0k2fZZmQXOegCT4Mr8MW9zGv1oMvSduzk8O%2FSxH4y80i9YlDx7C7uruZfqSeK7f6kXehH7opxWn8AUojFJR8VD9ktQoZ3fF4o3V80Z5CpU07hIdclcwoRMTsYlwzjgzXCxNUbefQlakpH6aMNKqxckGOqUBV%2Fl2MD5A8nrF7qdj%2BpC5P1uwhZtfVZPp6tYYiSV3%2FfCHtQPkPnbY3fxHJLfZtrkBQXkZBqtVR%2B21j2SWG%2Fq2TvkOnk1uoQV6gV2RJJ1mN1f%2BBX7aTSGFHXRD9CXtTn2fKueH%2BUF3EO1AZnCQjJM5Djn26uOVTD7GTGUUNK49l6Lc71h6a7idsSdl90xhBkLHYrjhpAAxMfTjBPp%2Bpm88pmXIz%2BcT&X-Amz-Signature=116eebe89ca0383f9b27dbeb0328616bad9c5c644b7d82acbb73204597831ce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMFMQDAU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDM84%2Bs1HshQf1mLUHdbSwXRlgloEnfBpvxo%2B6RDw8fOwIhAIuTkXcNbUzjRjzA%2F59MlEKs%2FOLwMxgRfxEdC7FQegX%2BKv8DCEMQABoMNjM3NDIzMTgzODA1IgzTOMMwZqw4xdDgKy8q3APl73cksf08XScKENXQzCQwhfnoFwYdXhYbcmkjuMaRiwkC10COOX8c8X949qk%2BMCAarIk6mrYiiwxtcHI8KaCX6sbGegXnnbP0Wq1BvZgg4HdynpSCO%2F%2F2tahyhGFTbNli4aIc%2FCub%2FuI68mBe1CY0guhwMwpo%2FoPVmOYIqSFxD2O2WbplGoNRZcKmtTX8Wo2EXKugRm2iQohRLLQNmNi%2BWP6II0Ddo4MA44IT5%2FRZ8UoxFDIxJq%2BS6VPxipqwBkdOPiHpwTt0oSnw0mPwp6VZDyj0s0AL0spllJx0ImimGdlX0XjJqzk9dzQtlVo7CnSoaDKjEWYxL0YsN%2BuMxsDaImxcbBv3A6QvydycnpOD%2BxVMssIfzO2gwv34prlsIwOMXmzzK5%2Bs6tMWpIgqPgfz6rU1qi3XzF%2BATm2rBqNjtNjngaZxjfXcuoiv5Fuk1poWzEmOYXNfDBiFUoZSWwjEHWUb0YJcO%2Fczd%2B9xEWF7IfAF5nzQMmm8gb5TZds8oaWbIC7oQtD9TDMuPWyArzNhPuM3jyaD8u1ZvGkPO14lP1UjZuQliGjYJQgmytZQ5QDHkTckubmYseKJ%2ByvQXEDhEwVV7c29dVUeXvxOUTiTEgO0AhAchc3vyXObSDCLqsXJBjqkAfFrFGSepoC4qAxi4hY4QbdkT3cmgvJNh1vJE4tIwU2ZjSqempfsMUz%2BwysJmKat%2FeBRghlSxqBbPKtNunsPCNMpqhcw3PJD8pekZXQiGsvbkwX9N%2BHgcIQeM9LhIUy5IthRSrZ6D%2FxUSgnCel%2Bv1Dr5wWXap02uUBv9%2B2SVaFr%2B%2BFPSbrC%2FxsoMHXzijaxWREbIMI86uD9m3d1uolf6KjMlK4MZ&X-Amz-Signature=f49a9f3c925d268dc4715f4970942337dc473a0083708cb4cbce4cc05681865a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

