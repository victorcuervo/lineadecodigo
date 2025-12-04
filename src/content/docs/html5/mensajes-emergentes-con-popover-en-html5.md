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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMB2VICE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEM0be5n%2B4hqfjgVzXd4Bw2icGfvXnmS9AIpDsYHs4chAiEArv9bSsoL3HteSCxgLyzZkYAPW1LroMxg9B33NbPQASwq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGxoMdN2m03F6KdEOircA1mPavqs%2BjR0%2BNIT7wHQLUEcqw8m4Qq0hlLV0TTzsxbocT5k3%2BflJ504BFGC6%2FWnwHaU2%2BXO4m0zM6dZIRq2EXHdVC8CPsBS2xcG0HrdTJeUtcE3vdnLa4DjgJ%2Flw%2BDL2X%2F%2BminqoS2xH8tusr3aL6KPk8C2LEm%2FPjfldZZUnY90woWgPVKxJQ7RM4gR%2FZW1FpnWGAFu3%2BjjHztptvvjWdrYzqmFVkiev0PZQ1hXC3tls5YoVyGymsFJ2ARsrkz2%2BB02ZOyu426IBokyLe0zdSLYc%2FYqUUd0DVH%2Fhw5DxwaW%2F%2B%2BCsXEpRmNFYIWJl6la7CHSSHA4IvRTDWWXIPe8gPz8SAadbIQhgTOJ1TpbSvj3EimKu4A3LYJZpLX5ABEKobnL6%2FhbM8ECYSWnB%2Bw77uFGnOnr1YsGk7bcIxgEkANZwNvtKImg8lWaaOThbMlh4kFThxDANREWsqnDk9JaQFJchPvbFz7JbEzqt99bUAB9vPlbR8gEyXw%2BwR87oQn1aFOBLKWOCCzb3nii%2B98iFzgFVVdoUebnFhMMc776dnfEAvCW0q8C20d0O4GU5vfWnKMEuu4lQddP4GeVj3U%2FMEA0df9mQJ18AJwcZHAZqiL182k0weZoXnlDO90GMLHKxckGOqUBO6GZTc7LX0%2B4NVyIJv61tbT1KzoYbbbLrClDHtS6pD6l8RP3qBKQw6uXRr6IhGpihWIiVYa%2FnUP%2FA%2B0cgyGChhG3ERR2HhRvjqBivQdWNJJKjuGzSW6CKytZe57LZ2Q2vlKVqRlNecIS%2Byr4Z4slsErlYwQazI21W7loJQ%2BLNVPIVQyZfWIjpcC0GV1i60hxGhXp9wuEBYNZuW20ftb50w64RDmg&X-Amz-Signature=087a61d0af9a900af2ed805b5b965e67d089143eb5633cc069ed3106401551b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WQFHJ62%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD6DhoTdNgC%2BvX%2FlfaecTgqpPb0VILRGI4aETYgAOQIPAIgN9pMnMgeLlFF2Vt6mCFb8Va7qE4X6fZk%2Fi53m%2FfC4Dwq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNU67M3ABuIoIQfpBircAwp8uLMDB3BKcSOXPPododX9U37aPLqcIMpighi3%2FuodXVBJzTBT%2FYugjn3KDRqbe%2FBw4HbSM5o748co%2F7MC%2F%2F3Z8mXPd1Oft17tBfxmd7DhpkQFBv8ARZ1C%2FnHh5iJtdJtdoZ8KQxtXwf5EucO5n0f8OxtBA9NUvxDFFm4W8gbkNDstJ5XU25JIelD41LKx1xNpqCo74XKDR7rJpJVA%2B999Zsx%2F3cUYkFE4SQE2zKo8%2FOslzWEeE5gESMhjneMvAYag1iBfL5EgZnhVAGNN0Z82ECaTszFV0h3rqkAbj7grqmASKA7%2Fy6pm17qNsB9V4UImJEJwq2QAj3sejt1lkQS5rNmUifGxUrKVuu%2FdYnqBiTW6JRgRf2f0%2BpEn%2B2ni8PjyiKQ5F%2BzX5XvHKcVJ%2FFxBTr1uzSxK5FjUQ3ClRkY1DVhNyEfp1atKXFlRkrRUJFc0vKdJw6EXDpVs1ZCDZPRnxAH1pcjd9VRqh9EHM4OZE%2FWUpjpaIF1vKRCr6TnU3wfUcEzf3kSTJ09pbfiz7LKXOfehBh30gPvpIKijLcBKQQn57u2jFrfscOp%2FgwXPrwOdpmEVAzfnE2sRcwu%2FFLmCHZ03nrOfaIuLVRk3NXDcLpaidFo5sLK4aXDSMITKxckGOqUB7VFnBfURUH2IOHa5t0kb4a%2FmWp5xksPZR3Vh1i6OFackDklfPLWxnSNVwzwxh0Bfkll%2BE89LnRnIIuMVZQtVYZpL2hjw3lRW2rHIsaP8gan7Ik%2FHGASoQqhrP7GhI4IVCZcuVFf%2B5oWsYWJDuMZije6BRZdE1qFRpQv8YkoXgopuQkDzKN0qqjIEq7I663gGveM9oUViI%2BxZTG1RKclcSQzaNa1F&X-Amz-Signature=d62a63afb70f92502bfee210dbcc060fd43bc08df465db2eee30fb580b03610c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

