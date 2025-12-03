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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY7YIOQY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCZnrQJwQ0UUskxBwTecdTmW21l%2BEVpO7yGya%2B1ekPN1QIgKiri3VTF%2B1zujzuRbLRKz9j39EnI0HrNvXpBqek70c4q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDHh9S8Z5R9aU6x%2FORyrcA2a3uLohNeXjn%2BrKsZDzbuUdyUUFGfnJ3ozKS88jJztVoP8K%2FbfT%2FPCkGaGhz99flQiTIha3tsJBLqkaXIomnq3l%2FUkvR91EP3gAy4dF7RAG7Yt1W46MC0UEN7xD8SPjZ9NtezMY%2F02zYTAx5nASqZgHq19BYl6v%2BxspPC8gAObabhRE8Mf%2B1jXq8HbXog%2FEQe6rZzPP7RzHk5zJVoJ3ogDOzvzexg45cFypRlf2tq8%2FGO0O%2BvkElXgyjleXspqKuk4wOeqm%2F6BG1Ayrr4Xi29lKJLT2gBuvHDMM%2F2VRjVVpI087wLUNsvbbzRLSju8A6mR9iVdaHeK4Fa00LnIzIja0JCal35SsCGowY0pkgdUeuMMsL3TtJ3MBCuNzB51aQmnFgMEO4snfUf%2BaSRtttve6RxjUrwQ1QYx3Aqs28RIxJ1pecBPYbNvvm%2BGUMQNfzV592Qujh5GgW2Adux4qgP%2BTgeMAsWry3SeDDt0p7ZrO8ctgakkhjvp2LVSuRil6FrF9c%2BUWhsrpSwJZzA%2FG987x%2BGLkExZosj%2Fk6RVixWQC8oN0cPKYMR6bqY5vOncIEJ6nqCg4hnmS5O0NHuOI79LFuCKnkWPU6L924krg9ZfYsP8h36NoNNY01yORMJT%2FvckGOqUBrr5w1PrSsE9KMXbSdhiQYWL%2BHxvS3wj8dfLjo3j0zQz%2B2ZX1ce4P90EHGNVuZm0%2FYUYzFZbWhSx4TE0UN6OluwAQolpA%2BHlkPhKIntwHN3OGrEuuzYu0NAJ1%2BsdgM6l9Peb4Z2ifDxQGyhDmt40UcgCHTl%2FoEqbuP6k2RkF9HxLsfzzokpMXWMxVqCNm56ycIoQC%2BjHY4ctxP8My3qDZc8m9pn4h&X-Amz-Signature=e29feba74c638305468e30fa6b57ec52521f908947ba0d474966ce204e74dff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JYXQHQ5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDSrVmTkETi%2BIo3xOmKM3bSyMisza1BrzoXQpVuRYpEpQIgJPo8X91zN%2BGSgOMugMKKZIZD9FBaNGfgv81iOUadNusq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDEkpXYhtiAi%2FoCXW6yrcAxH7djb0ARsmyM3xzDjqQDBeApLAHc8Q3rYt5wqdg1cpdteh7dZHJ5bsZO5T6uhjrSMJMkAyz8CqiWup1GicuR9N9BQTf%2BrERGmTu70K4iSoUJlqT95CxHYXReO33%2BYxkFd%2FdxU%2BGCTUt9I2Af%2FmnuaNAJMvoGnBYfI6aYo4paKe1m8Q6pSn9FfyvYJZYhl5iER7Rr7%2BM7prRyiEHEBzuUpWIy0z%2Bux1stk5ynNzBKJs8G4FAQbCFdS%2FgQUAsOHv2yc3FRTqUFhi1qOMLIV%2FNPRLI8tjSfE8%2FyAOxHWYeYy9iVRUvZQ5tVj6zf9WB7mS0%2FGw1MX3GJl38lBeGo%2BYQX1XKjcZ4i8Smw9AM3Ks16l496GHk9TdQxHryXEr6avalhcQp6YJG0gBHls9npYku%2BYHe3nUl48qIA%2FyK%2BNSQrf7XSgHWvjexcIVQMvCZHheXeU9MHqVUtvbNeN6pjx4SOJ7mjC%2BsfPIcHYpThNyMtnRJJgl5I7JxN%2FvYEl%2FmAqFhCbqgRUB7lrI2iH%2F6RdQ7KzId1JfiuGrDyb27AQJKLkWHeleWQg%2FecGnv8XwuC3LHkJZvRzPDc8CAPXbu1RJEvv7wqCAsKz3%2F6KePhYOb%2FkLwtzOShPMas9k6qo9MKj%2FvckGOqUBsLLUrXkXLNTHxLvemAWkd%2Buk6OxwJbIPO2OGuYx2HxmWo8PCOkQzRx8pdEByL4WJdNqOSIa8JkFMOHMfnKNQ3MENytGgjN%2B5DZYouFUg8nsH6Ay5evw36mgzJvyKXXt74wfNd0QOG%2B8oQf8xSGrouvSSIXTKmM7JdtKA7Mb68vkUq9iGWUkSuJJg3im6eTcv0EfWGYQTy4C%2FXDAyottYejph8Fz9&X-Amz-Signature=5ab959b364cfad822b529f07bb68236b1ece804af464605b9939b18f65d37822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

