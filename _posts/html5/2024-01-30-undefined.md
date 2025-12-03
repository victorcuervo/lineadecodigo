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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S3Z52JT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIG4OIWRX%2FdCUPFFXLt3sfJcil5ZEwogTjF7UvVt0xMr4AiAwcbx2o1u%2BwoX0ssNRqfq%2Be4MMvy1%2BhxLlZqaECyS6mSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM75ZlPgOclkXfF9yIKtwD2K4g19I%2BjoneaPgtKRr93A5XTnetJ4eGyvaOKmzJg%2FeZdBQrXBQ3Vzm4ZqZa239W72H5cxNSfITuKwMo6niBA5wEguhA8DBNIgQBwkjzethG3Jl272rohiI%2BBg9m%2FFxUKxCR%2FlMwCimoiQJFmR6xewvh6OTLIMRlY4E4yXUqaR0zS1CDk6ld1TLMVDgdli%2B4dpTIao33ah4cNvpJqqS58z5QqBUT9bwnbOBk2ISQe2LHFj1sLZizkLbT%2FNxLiXRbKnlL0KVRt3%2F4uZFJ3tBySkKfHADezOvlqVQnDJnHTxvPuxhgTh%2BUQGIPJZ1snONk0o9eCYGHaAELwbk5akOICUlx2rEI3nt9FUAVEJ%2F9JPcuLo6kDWnqITVPkTyCkp9I6NX2%2BFEpuiS5XfFy8kae0aWUJQOBhZnxEzHDCeIhSSPoquAFmCJHmdI5OGkjD6oxGR%2F42ymtWSLdQBuWNGxEs9cY8TGDmeDFYsVZUvnxP%2FYktx%2BpcJ4nNmFUfqDQT4tYnVvtgaJDyIGJBb2Tcke2fypCMlY34KV2dB%2FRWqGZHtTWEhSXsxZgXVDcjgI%2F0%2BynHfJuyiZ03V%2Bp%2FVJxomt2xr4%2BpeodhAtFwinkkNt8PYeiTWXhdnQUlEqeM68whsLByQY6pgEhhSM6U4OolQv6eWpD9JYSk3gch48ZFW5sjyI1zpaeIG8NH%2BQxQaNBfpl7iWEbW%2FzD88jobEZQZTmrB00CqmFh0qEo3EouFRNukHeeX%2By5kyJnpc1YP23%2BD3eJXu4VosuUOmMwfKhRBdgZUCDCaW7VvlORIa%2Fs9irnFlvPEb0OZT%2BYqlgOQmwwx50ajW2OSpKaNUbRgBuD2h4Tl0HjjbNq3rrSaR7I&X-Amz-Signature=4f3aba91886fe35d30e53c744d5c07b782c9acc8b9a84aa8b25dd8222f358728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSLZ7SFV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDj39zCuad%2BVGb1HB6nuwOoxDHNyZi0dX0wZ2XXO6dmBAIhAKqvGcNp9u1R2s4fWSu%2FrIcannY3hzBLlZYtbHQgofhKKv8DCDEQABoMNjM3NDIzMTgzODA1Igw%2F%2FiaGwbCei9gRo54q3AOylY8eOjw3IwYxQToak7bV1Dl01pw6ks%2FKoS3V3PPj8OaOxQ16RrHt3ln0h1wpxemI0vfLzsWKNs%2BO1rcOiN0rVAHOcj7e05zSPNeLI7v8YZTW4hwsfaTQJxVs6aCmFJk%2B%2F6hCCENU9G%2FER57CZGzK%2B3ucC%2F29jsQXK6iUlC4mos5KlN9q6coVjmCraBG3Vk4s4pzJWrfBFbWpXaoWndDnB%2BllwHmF7dMPqrXDchW8aZpd7L1Nx4DRZwiLnJA4sB1euMsUsBWHsUrC4%2FX0Y8Lwn5b2EUgyVUSkirhmm7g8bvOXv1zQjVBQBlHknNjIBsNj2quRlpjFQ9MyBZjVRAJFAH6KKrws%2FtFDZKz1LGalpu8qbQAhk%2F074GYGD9u83%2BXnG6sl17cJauBGcr4Z5hOh2MpjEX1rpYOSGVM6Qn4f5lnIF42BGVwz57vJ28lueYaXywzbgrTzZQUXEIyLcZZAethVgAMrIQQXsGQwXIri%2BzlpQFXkejDOWtsidCmZwZDikzhBt1wQfDwSCwGHV5Zt5%2F1akYsdhSRPUX7iPBiiiS3uIM4kldB%2BrhIDxgWz2M5LkfWl9FaK1QTvKJUp0liwFNHWXtyUVKbHaEb5gsRMom8cuq5ASnWQ7%2BP6PjDTwcHJBjqkAX%2F5rOMQIvfweaSy%2B6k6yUcoukToZE7bKi1x1DJhYCNudrHoB11D6CwV%2Bkzm9vMKh5mpdLFrC3v7OjZ9oBRY3vpi%2FpN9Gx1gQxwXz0%2B9Lf1VOwHwlHtT4AZgDe42tL%2BShZM3SboOhvbU%2FH%2Fx9qCTlf3I6K2B2r2Rmv%2BTdkKhnHg8XQMWc60obQK%2F660Va32xdMXxTi%2FOGzJIU%2FV%2BuUs%2FczLnYzmG&X-Amz-Signature=137e06d9ad0075d35fdfd8e4b360c158128dfd59962d3e9655a1ad58c7ff65d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

