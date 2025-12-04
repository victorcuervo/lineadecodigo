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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FBUJ3OM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIARvrnwzDkI2JoqubgpC1XhqYF5UB6ipRKZgHuL%2FAEF8AiEAi4sfum5EXRrUAADQq%2B1EfJMcPUb1WDfA4ANUJjVl4AIq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDJNVmDk%2BORHBYTimCrcA7DDGpfyF7ewVj110%2BJkGabYH8yMtcCYfBr0sViEQm0PVgnNoXtqxPsuwgIv38LUlqYda016176X5Rdum8%2FOuWMsm%2BX6WrJ4ztsYu%2B1mVTtzXYSlvkJf%2BrjypaLoSjFr%2FrMZeU0fsd1W4vr6fB26WhlruOO8RenDPcp5sloz%2FoP8n4KMdeoZlizrmyxn7Hs4ppZJXS3%2FAcyJilC0U24IPBCuvxkioo%2BkrafUYydbqBEZOpCkRT9niAaWyg8buTO7EmWrfwK3%2FLfoq8SwP5iLlFHLWOdqAWRk73O7JvFZZaqFWPd1CZQcF2b%2BDlfsYjTgR4q4cPkRgZW92NnlPYiRfWrmxUtUCQZrlrA2sSAO3TAUn4WWPi60L1kgpGB1UYYRAIORvmf10r5PoYk8PZXyKfDIGuvVWPAQdej7A%2FDcMIKwunfI4LTnmepV3GQUHavT6EanKRbtEscrUrqobXHSPJzfsHIoaN%2Bwhmg7iRxSw4tRWH1QUIEwMNd3%2FHc77KTSqDj6bhcQJL1E8n6ewvRyC7uol9eSV7nSBokDrKU6JcilvZ1VVHlpW96vyOd7kNVBZdbdpxCQOkpXgP3Y9Y7w9hPaMss%2FV5pjIKb58T%2Bb3%2BTv4ruTo9ZQawSjrbysMMWtxMkGOqUBlvQucm3%2BIInzYvAgUQB5EClcASN3ElFq8H9FwwC%2B6UXPMwoSv9KbVc0aQdqj6toSbIuGx0ArlVRF2DBRxWlYWc80GPxoL3JiBvIJ6GYs4HOIkaFCUDyL0XlyTKEaxGpFMG%2BSsbgR9AncH%2BMeXPnHEaBHjX5PFpUqTNcegDtWt714%2FASHegi82WLqPUL21aMbleO2bkuCIJaGStw042caQmrGaU0e&X-Amz-Signature=50319c22eafca2f4f997c3407bc8857be45949ec95e680f7d9bc6dd227898dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2QBSXXC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCH3Bu5YWKG2XGX3LLEGXRaaxShMWT8%2Fsndy5veCzUzBkCIQCZ3x2Se%2FWGidY%2FlkJ2ybwsDRPdIk%2B4vCDTB1D8OLIIQCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMz%2Bk%2FvrZ7VrXtxZ0hKtwDi%2B%2FNnwNHsimvWvqPAjPlnEj7w2Ds6CjtVXIynf7SO9YtDi%2BkJeHY8Q2dObg5a71zVVqj5fkk1IiTYMZsttJKJovQc6V1F3csK0tXKoRDCsrV5ZWSaothwiBQrsO7Q5a2%2Fnyhkt%2BC9cyE%2B%2FVW%2B2qD%2F0L4qgBvKMLXbyhkV7RKY5IDMEFtwMvUEnSVVf2TWUyQk2Cd3r0ZyqPJQ4cfOD%2BbcEodgq%2BlahPBmbyQx7WknQSaHHtvG6WveipB3P3CpGTWLpyrBs2OsOdeNyRoGQN79jSgoiRETit9AZwkQcqbGF3TEbpfHK0eoQvgKDujPJU76RwDvjEssumnJszM0EIvBJ7qFLCMvcT0pLxzhG79WRRzD%2BLgRVbDtnBmxHoDsZfIN1iXQOhqU%2B3cV2UGU8E2GbOnmvQR1Veb0t1qlAtm4D1gzph06yvi4C9Y6W%2BzpepCkLakfFYzEFZutVNYftQxn9ULJOO0T6Xa%2B3X%2Fdyj7CpHUcPT%2BzjVH1e2Dm8%2B6D4s9gflH2o7YyIWJFXYhRnIA42macaZ9WoL3CTOLy%2FhGPJ%2BzrOw8jMiotqTSzXGOdMGP8BF2jpMmFUEEZS%2BKK53FMsKxRHsSXnGcMesWkiV902KuC0B%2BY4bBuke%2BbZ4ww7DEyQY6pgEe5pMcp6jFfFpgLNIWFGen4haXfGqnGClAq5foDH3FOSlyKt9dUgZ%2Fg2h0etAxrPg8oJVzqSUcMY9J6BwCvKUCABWgPWtBofWkxipcuH5YNkHuuGwnBFwdRoY2%2FWXH4S4KlS9DGWantAwh8UUrIaD5AKlt3WyIYvGtCqwyA7NOkOsBfhEJXZCYz9jFqXXJxSs9Tse%2BQoxIwX%2FtD6Ekoy0HKNI6PwPu&X-Amz-Signature=1fb6e38c1f4c65243991d0e876bb215110b32386aed139cd20cca6f2358a6804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

