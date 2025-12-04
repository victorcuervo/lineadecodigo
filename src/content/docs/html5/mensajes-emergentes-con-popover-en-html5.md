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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS4EG7MC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIAlnVMnwbqev4Hxt8uOV5j3VrTdngJEeLY0bsAi79xOdAiEA4M4jcdjYEYc2z6vYv%2BipE3Ej2qYI9dl2FMskA1OS8hgq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOzD05xY5rtd%2BldG0CrcA8P%2FyRcQfHrrj%2BdPJgAXPoFoDmyagUE61HDzQlTEVFdBIKzdbqlAjOZt3vwDD%2BKr8YGb%2BALKPNoBzl2ZhpXfQDTGu%2BfDX6BQmm1keKLBLoz0TqYK%2FaeLr%2F1QfNX2D82Q2wSJXS8kwahPzA7WzBK0KE2RaDw1VgFZSsadkLqSCSzTU1J9fkaTj%2BDmjLQpxfVAtnqqTvqTqSKDC4QAGROHV%2FcejGR3Ad2itLJJqIjny8AxnReO8Dmtnged6XyJWjNhtImSqOrIUdbz1AYDkFAREO9mXJXjn8sn32ZRoQvBK12SeyEKUVaDnyMQyBFcfMuv9vNplTPH0HFwidXwsPtxZ7gfMkykrPhivo81XzF1o2zPQBf8Q1tniH%2FP%2BtYo%2F39zbZESj%2B%2B4IwM1YRXSXX2OY8iApxYQyumyWC4uNHPljXRqCWyBTMwUET3g9pjeqeBcv97Y0p9TuC7w8DgD0elN35PhPq%2FW%2B7HWG1F6%2BJ0aOT5mAYlxBKfc436RokP%2FChDjiHDPLk4xUZA9EAYZJVDrN7uskZUK2pYPH9NLLXwoC57O9WNGjdDwhrG%2FfHG9vq09morjbZckjebZ2sQfdeY%2BFwiuYCWS5U5tMFOFVwVcqCzn4winEJoJH34s9Q3xMJ7zw8kGOqUBh%2FZES3g%2BnZ9Wr4IdM7iV%2Bpa4ddiWJduTKDf5ga7K%2FssqQv9tDVoOW6XesmKYCoL0sQUQgO9wrGDsOcl8ZBuFT7V%2FhPr8M1uFFZ3ANRfqUla28EWaz83JjiHE1VGkoftyxKOXKB3Qs76LnL%2FQQjbYPCPB9620VjjgUjKzR47wrrqwspqmD2OWQPbOErvr9LYFm5rLhD1M2BTK9Z1BIoTAjLJY0Hg2&X-Amz-Signature=b04a15a0facf91f116527a02fcec5cb8406f2f71d2b60b1f6fa178581fed44d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UEB2FZC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDGTic%2BdigZR%2Bs3%2FSPuJB%2BKuja834QxpL5nARlRnr3s4QIhANpwkGNZ0FwLxR%2F173W2LfB4HwHWMApEOdeOUbpWRzqiKv8DCDwQABoMNjM3NDIzMTgzODA1Igw%2FHZc06jhTh3V29pcq3ANrqGpgZEdbHwQYVWhD112okOlF7oz0WPnZ31YO3sVZNhGRsKLdLT6G20tQf8CrMiUBl9JoAQK2mthjNPowRVHDaDMQI9gl6zgd9lkXjwSu%2FI6TCH4AIT%2FGqAsvoebookO5DtJf60jowkSd4zFrhcoifPfBVplRFakQ1Vqp%2FLbLj7IoW8TzTfkS4m4Nxb5GpLav1LojIwrXliLDQul7M%2BECoUf7%2FeIdRl2WmRQAoFA%2BDAbZh3R3RuMI2XoRSq%2BduSDWEgZB%2Fyb%2FWDQ3CqY%2BqNXdaa7JLEi5D91YZTAGdEUIDz8rxfyk9B%2BY%2FL7ZbZH7q4G56vWqc1uWmDAA1shnxMD8wghmbmKZUnNnbZCtgtm8T%2FINHU8z%2F48TBDw4U6tCYJ0IrzMEsmB4W1wMcPP5Ee6ikAOQxiVqd9q%2BEmjZxHG0ftk0mE7hsjVtAk0VlnAxclbSR3VO65HjoVRQP%2F133y%2FFwX0ijZjVUONHE7cRinXClnPZIoR2DMroMOxODUwIYhjGiUzWxVG5C9wPxQimgo%2BQHmaJrcD8pWsDHIQCa3qVib4DX%2B%2FhLYvzDRpZ13RSgAKmt8CQJiaThRqppMYvSCODI0hZZieWM58PxZbUAABZzZYTpXck%2BmtIXfLd5jDl8sPJBjqkARLtoFOHbc4i1ttT%2F%2F9uU9WEbyfuWVvh6HXYOZtJO5qhSQhrMs65NEaJryndn4LXPhidmfkk8fIZdDwaZgk%2FCWrpTunFEYZHe4V8FNoC6OgzxM5Cg3h5h9e2eN8Ft53e9hoqVtFRGlCmADHL8el%2FExrC1OrFjZDgxVlWsrZbPIFNj4K%2F0dOC1rcUkrmAzgIzWA2oLA6qFHnhoYFDh8Edwzx%2BpivE&X-Amz-Signature=e978f85d43dc5bb7306700202c68c296e9201ceedc2755ec4b9fbd3d89886e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

