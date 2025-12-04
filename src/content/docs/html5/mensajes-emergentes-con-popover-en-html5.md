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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LLEBCBT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDcnnRps9h%2BV7c5of8WDeBm9ORPO5AiwTA1%2Bd8YQ8c3ygIhALFJlDjyasXuj%2BxvRN8dtkZrB9UHrYCnTRq3aXnmMKkiKv8DCEYQABoMNjM3NDIzMTgzODA1Igw%2BnpgP5mkl0LAuhF0q3AMbdC2gmwES6ViKr67jVXz9LYqMx7W0tnRYbiHy6KfwFU8VO6smAzwZMPLbkDJ%2Fbn0dlM3eEpUQYbeY60c8wGwlVJipp%2FcQft2nvA2ou3i45u4S3L0mA%2FjL9gZMqyaEs2HSAHcYI0%2FE63n8OWDelkY4YMM2GHt%2F101ZydG8Er3bhDnZz8X7ue92Ueta%2F2XNzbAgYwR3zO8cTSS5lcxA3z8vaCOCUx7rhOsAMlqowjvqIuKyFDQ%2FiQH4Wc9qu8NGWvdVhHqtr%2FXKQbjpQmuAl7l%2F706X%2BVDToambsl5R%2B25GDtFQC4Ctf57etncWXVWWcx1VHMipVlRxULbmuNg4KiqBrbDMeaFIw0fMcrcbf3Ap9M7wa3ULan%2F7zUVAYiuMiWNK2Qx323K1PEYSjJEHAVgPYIiiXeRS8lAFCqRzFKSCr8gPVSNy1xbxKQ%2FTNuUDOCf7jjnVqWv4jWb9M0ZU%2FGVDD1A7uZC0NwFyJF3Zp%2FFj2l7DU4wDU8UHBkIcHv%2BI37FMWaueP8BIOtBTqgb6%2FH8QLIWjC6hg7XkdWu3MrXNaNdq0Q%2FHvpxnUDHgLNsHX4qUV60gM4Yr%2B6dJFL6R7pc14Gr9AnksiWNBe3qSiZucOkXHvT%2F%2FJzeHXbQB8HjCvg8bJBjqkAbdo7bgcCBvr7LILY1f6gCe0jVt2ghL04S30P3xTkqAujcYZu0bRow2K%2FqhWzjUKKJjEK3VsbZBbQM3U41vtr%2B5zmbDm0jOzaX0q1eIrkSlpBoWLqc2jDW8h%2BElBj5%2Bq0%2FWmUknilI2mKCgi0HplOI2Iy1dE7mgpZ1YQgLvb65P9oz3rTHdEYzWXKMc6kzGc9%2BKZX7b7ibxT%2FY%2BvxCYsBjwrNsBK&X-Amz-Signature=87e09c318b0992fa3a068b90805c61d6294991c42183fd0837853fd3b2248940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G5Y2YX5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIEuSw%2FLGNN93mH4N0C0%2Fd5EHtM4gBZn4uc10KXqBpMhXAiEAhZVw5RkYX5npGO2n0W3BVO04PVj6k%2FqcqrIv9IS7u4Iq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNkz3GGWZMyafcyXRyrcA%2FMdSGbKS9qTaM2D7B7MFoL%2Fcb9sqOEaoxyFWGyDT5Z7atkksdcBpjyP%2FrDRkE44XoRHuiECGrh656ZjWS2BBEg87POJx5ECCMYOppUcX8LttWT8wSCp6VHM8TP7tRDqbju1BujHGyJEbvs8cV0GcVGZbN%2FdrSQzk1y9%2Bex%2BEAxWNJlWCbJRkjhFt%2BDJEE1jnwl2yz%2F4mtLbpJN7dASQzDlRVegfSRcQPhtk7w9VqKWOQFcHWa9cCj9GzayMGlraXc%2FB01YibhYnB90t2%2BnJZNlfveT8kQz38uzxrRO0y1%2BQ0C%2BtcSkvPXUvHAJD03%2FI9Hx%2Fh6u11ASfDxwA7ByoicvBxUJ9XQYylSSOLUnuGjGUQ4EJveO%2BdIIwPu7OWzBqw1aIsVwToQ51Das5207Qkqt2fKhiYD6zgJQW0du1FetsNtlXE6a3q4GGDmQJIRatr2dM62Ssk6kcMjJohh7SlxW7FDxjP1Oefw8wZ0LgAvrWpUhX5NOissuTRcwLSGwpKwFPK3jUOfRm4xlY4W34Dz1T2%2BM8DVoGd97Tg47%2FVSQW%2BIut81dWFvOb%2FSvITOMunYVSXD2c5Y2%2BVXK3v70hsE05hp%2FVuvnPB0kXTOgQbgx1i7pRlu8OcAtvNRpJMOmDxskGOqUBBEGNAklNE4VBLKhQ62G48MjsE7DZIUf5HPTFnqTPvOGfAjQqyFPiiU%2FXAmX3muj8BW4YYs6c8Mu1QDTMppj%2FwtW4Y3lPVWBVYbwYf9oEEYGif3jlYuJ40rOOYWbJbW4ZcGEfXogNBEkLQlSzX2z7Y1hka%2B7X%2BlpDP6ORS2M7Q0i0vdY%2F6%2BsnY5fkZOiLxWkuE29c%2FyPo3kdVhIotueJoMWekNXfC&X-Amz-Signature=05b0c4dbfb3ecbd86553fba06f469a6694d5677fc3078a90e2a40dd6cac19488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

