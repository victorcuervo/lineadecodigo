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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ7TMKPS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFftkmcI1XQ7mxUmv0PiK%2FtGO0f0X1%2FqxYQcDMYGAoRtAiBRLSPi1Jnm3JRuIxtbpUc3%2BRQ%2FWYFjlksDKzJwBYgZ3yr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMuuHrjVkViJo7M2luKtwDNA7WA%2B3GCvibH8xSrsPrpoe89hgmjEGdC%2Fns8L8UHI%2BTkVYp7mcodFR9vCYdDIDoM1fAR33jJWwZ2VOGmi8eH4L4T2YG8HC7pxj1ZuEkwb4c%2FDWOTkPxsKgZjkqnzXc0tJi%2FvOtGhrWhNXQkV7pCjcKwSzViXidUc7cu%2Bhp32nlTQ5KW%2BKj7XEZXiuGmUhiLiiNyqye2aEP3pD3ARs9zwc01BjyGDSI2QZcpq8uEAz%2BHCPD8xsWuD2gu9Q6MqOVUZw9SCxmvn9ZtyvkD%2BpfMLNAbaHw7zxvmFSE3N29DOPcdYO2hKIZJhvKkxPz0n3iBJPqJ4nbaZ3BMqZpLhii2qPNwq%2BRJWCkl2tciKRfVwJWvX%2B%2B6NDzwk3PICEm1Scn4bbR8amznnWAKwmucBOA4h8vbgD5ESlFsT0CXaUclel0e3tgwjxIqdTw24HXX%2BsP5H0aGXla0zuFI05oqDZAjwNLmojc2pEgecDOmkfQaptD3UIfxcNNVOeFltOeiZ%2FE%2BVEIa7yuves1OirVU%2BZtpzOOxW9YdmWVHascpuAj3tJdve82hitXOXLVlLqM3hAp44oKrcXz%2Br5jfuQoc6eK7BXjp6lY4UXkgEujYx9uhAJE5ztLut6yUfHskIrgwlKjOyQY6pgE1Y31nsTKOJkmfJlp76%2FSGxiQBWPb5WfaJsrRXW3MPuR4GVq6PyhC%2BxteBm8bRCC7w7Lc%2B%2FcAAmh0DDzjN9wxIyCQjU5oGdaGOxJOoLcs1jhmp472xlcPbCQYpmNWyFGJe6E1rkjauaf%2BVVD%2FPv9wcl1Rwtbmn%2FgAeRadUfhv5%2F4JCEWsiQ%2FV7znCb4QLAQWfA1%2FAq4KqYxnSzJkaWLgf%2FJ%2FxWHUJb&X-Amz-Signature=7b45a3ee3b11e4fd204b9a4ea7f7eb5394a4877b0cc2ec145e8fa90989cc5994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WQ62Z6H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUTr%2BPjKUAuwvdPX1E1XdfSlZusxqOyy5Tlt%2BEtYii4gIhAIQ%2FFX9EVfl%2F7XQ1y5f8TeFuYB%2FSKm0agpgSGJc77nCdKv8DCGsQABoMNjM3NDIzMTgzODA1Igw2TD%2BLBgVsR1MfWFIq3AMQZhunQ6ZPAk6H9n94jr5SuF8sC65e2%2BA6YDUzN0UmkshEGaGBWue%2FEsNpTXglubyxTE6bJrdIrtqDi4gl0NPIHLh1BdmXdCs22M2%2BUsK%2BEqxpIlqCzVUhpaBW%2BEYxmtNB2uOQnCt2EUuDD0ukdzSFQrhXK3Je202RZ7HasfXnVWsfgD%2BnTcZdU%2FiGqMwmu9RSi7DPtTyEpjX8YiHFZm93ozSTg5r2MW0ckVWwF6o5uaL7jKISoqieBUod5MhAQ2%2BioKAfwV3BHun%2FU09DLVj9%2BLPE4HUTt3yQhyRIAyAqeWwl927k84IjpNHbpXBpXfmey2%2FcP1Wbyn89x4DlgOA7SLOMR9J08trcm5%2BVQHdZ95Q5toEnsc1DtKb8qcB%2FOfYIuTAQdto00ZRGhht0WfswyqZuH4V%2FJRBH37O6D4omJ7RhWKA7GYcMR506W3c3gx8ROEAMu6sInjcbryIyGIlMobaXHkHV%2FPQ6iMbP3c8n%2FRbeZAoWVf7rkLvK30rUPjVokTJrxXVmqeI2tlewnqR8g0ckvkh%2B%2FUgBM6x3Na69CyQ8vi%2BYG%2FdUt7W%2B3UdR6K5JxtMzmPEwn%2FbBsTsCFLbzkNpW4YRrB5mMrZogUwJcGkxuJx1GJ2X8mBYJ7zDUp87JBjqkAfJcc2Ov2csSUNy9R1jxB9lIap9YoYg9c3O%2Fp9oNDcOz8qbEc9YfBdpc27RwhMSrHkQ8X1%2BQH9pXzW0acRBkzZ6RpQADf7rdmcMpNIaVyYp9%2F2vRDZ3YNNPcjQ7tJpdbFFYQzR9jNN9qemVt7GosLweairEXaWTe9TvUlXI3jF0yAHiGaz1WaKo9v3D%2FpLOSR4tib64efudwaykbRCb8mOxpJ2VI&X-Amz-Signature=0a3c691ccb02a5ebfb0dbb26e29e1a3da672fbcfee815059ca08a3332374c7ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

