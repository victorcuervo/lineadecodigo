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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7E76GG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGcVKSsur6BEhxEaHz3xvIuWf5Xy8GHu1yq%2BY%2BMtPjrGAiB%2BBENKct95JTw4UiJC2IhJzmuj%2FRpfbs%2BvpKm9bJagNSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMi8hWzBzQDhd%2BhHRWKtwD5%2FcW2lvwlkLFWG%2F2Ua0%2FvK51xVtokkgdWO9PuyZhy%2BTQqHMRgVXbfGbl7r0Vusj2UVgGzu7TQmn82dsDWGLaNqdTOXecre40AjjE9ewFjhGSGrZmjHTEXNh8ruP%2F6sN0jJU4ieznn2aksiKDfAyYKooNgx4lNOiyM1nj0mVZN03r5QvygNZp3H5GGrGRQbD3TODB38AM3Q%2Bvs9SpK615a%2FZ85xjm8HAGOIF%2F6OZgvoYw6vlfRjzNR6KqtMz9af61BWHutO0S3OXFU%2FViE5Jrw3AdzMSoJDH5P0qHRf3ZQWSvKQYjAXVGbOpAT%2B3Qu8fPLFxPJpE9mQHcW0nHXIMFFhtalI%2FQkH3ubUZVHmXUoxqek5HlgGgHlR3f2aPu9JpOdhtzY99DHq2f21wSm2h%2FWoBejj9UmRvm1%2B1jpc8tik%2FE4BcJYEMo9ARG0S5F8iqBchphHS5v8rgCI5E2TuCdaGkHO3KVUqtQIC9swnDnIWG7aicvtGNGEEp0LGr3e5QBFBaZow8%2BYSvfK8Dym%2Fi4MDcGk1fC8lKz3PjPkjbjbbC8aSG15yx%2BAE5JHV7ZImqiSej9HtWfhQibR2uZBmxs77rSaDLGIv38vFy645WEEsKeOhWuZRV7aEWCzU0wrMnEyQY6pgHb95H6PDvJMWRJ%2F8k7lVBbtEqiFHgdF0CSDjR8EUfDO%2BgVPmKZVgAdCUBNkWV1m0PY3WDvHVSa97UTUtfTcQmBSAd6jmIytlYrM6jkauZ2ItdHq1cj1wgADsM4UJUIXtFMWaS2jOm1IqU16ygnsTJcUvvFpEUd7fxdEdfV50d5tmZvdoPHpGlGsUAgY4O05zAWGYsqWd9js9cahJXWG7X2sc4pBhAR&X-Amz-Signature=43f42f7877b18e988bcd3775a2e2740c3c78cb54d6f1c834586e5369b31672ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXHNKAZ7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDbXUBJFJBbqaP9%2B1UyTsS14OEt5WQ3UqZEG1JlwGiTyAiEAoc1TcnSpV8Dat5QYeZAWXmhagVDAydt1AcXxEU9xldgq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDC097j2jo70hjNtHKSrcA1aiwtJLVGhOZT7i4HQGBS9ZYLxQTXzyeJIuqVqhKy%2BSAHvQmCPqzHIRtznG6qhEY8tSfFzq8cOSyQlWwaT8H7sSTjFZ9%2Bur76C7V8ylwYmC%2BIz9Qut2N8MPg3QD4OBzaIC6HyWeXrb7hbxRBEQFhNNf9oqMdl1Hd6pG7zUE9diMgOI5KTpDjjgCEGFAqN1p4MzVzU6sqYaKdejkkXRZFipz3gbKnnrA4Y2QXZmqJc5%2BIKVIMhmgFD2crIwj%2FN1URanNta9PZGnyL%2BBK2zDiLZAKJlAEVwSObtjYhiwUmcTw1NSUq2AaJRgC04S0M66WKIzKTp%2F2TFLWN%2BdajANXZWouM6J00C0kIaXBACZT%2B5PnuwdtT0fVL7EMSLNvZaGybZtcIJSgQwa0acvnVQu9Ycqv5lDU%2Bu9SRhuP6fRwaOf1yy5ArW9oxHQe3E8ankg%2BFQDNq963VmAcM%2FBrCFCYOjXYhNYVA8pmN9HVjFYbPNY4F7GwKU1OZZikfbGoulqvpd5O57oErKIjxUoGHJ8XZilIthBQSt67VLDPXtZITSTXWc0QC2w6HHkDJC73EHEz%2B2kLeTZ%2BfdXGVOdytgHqp34ucpW6jw8i8D7XGwnfQX0NRmjQtwZEiTGdsxL6MN3MxMkGOqUBYe5g4xI1w%2BrocDYEfOzLnyvl8VHd8KCapAi79xw33xTM%2BFevk82O%2FcXRA14MRjrRd4EEiEmKsuo60vMPHzlWxAyn3A4xXtCrACotXsjwUvDkZco7HIfrEDWmJ39iCmd5uRCl0LIpVXbqpxWsg7yGW8Bn3bjLdUFHq139WFJ72BuB9efIFgwy1F%2FGiQAX6gdcVewww7khKJeK6xYGylrKtJ6AnpXv&X-Amz-Signature=c484aa30a1e6b010311794346f725dd9ee4340f07f8c492d3b59a82bd26062fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

