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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU7VC7XU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T043316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCYqXaRhI4e2s28GYnPSnuJuI%2FpWQuB7O2Vnfdhq%2B2p%2BAIhANJ6vy9OeqBKIova2ujBcW4EF6U2M7RoDzxoGprZOEByKv8DCCIQABoMNjM3NDIzMTgzODA1Igz99txt5lBS13NgslYq3APAbx9Ev7KM2nGPKjkDYyZ7flcFP%2BqnJ2dMHbMNuvh%2BzMDffiVtSfUbEPyAf%2Fpi8xcubdfweTdrM9d94%2BLC%2BzuzGaykvMoq44AmlBIhouorq1qp3x8BChqZEh3mR%2FhdEHqIwDcnpppOxFKtOU7aGtWUAM1a09jRggFmQRGWGeCTy7hUcSMlLCVFrbh5xsXE4Kppw7kjAYv9YfQb3%2FKh34WZIXFaqWlh52xQMPMHtUtj8JRBijIRBz4JBZipyBUhZ5HIZ%2FpCPjZ%2F69h9zA1JRXlvOdeH%2F58EJsDhp8fL21W0vOokrwNEbHQvc5nRYwXkd9LbLAIONR9YAU3kRgEeG4C0QyIWw9iH3UChIJy8vILxD2sGgXy4O0i8ll9%2FItiG03hPzK%2FF%2F8IaEbdNn%2F%2FEhGPsMcHI1%2Bnc1cNu1X9jdJR%2FSrmztdJ84jOABR9ggtldpOKHxyHFfD%2B0TwqZqUc7bNhVVBDiFRzJxrmU8K1l7997ydU5uM2RebMub0irLB1I%2FD3OSyKS1hsMqb%2FsI%2Ba1aO9gD%2Bc4S1%2FOa1jMJFjsbHN85oSAeeAZctz2LytFol6Fbt4guYtRE1RmsOTfZQ9xTKqAgQa%2BMsX6qvvLZ1KGkKVQ5bWaUVQODrHV41xuXjC4lr7JBjqkAQvhzQmSny8qCUF5wiZZBkiaDHYcBjt5O%2F2CtJly%2FCKjk6slcJd8iaGIg2WGmyjG%2B46nDqt%2B1Ok7P05Veoc9cX5g6sRFN0vnIcGPJY5Yx9DvJtX0J2p5jglUOSGmXL07bszj3lanvhthQh0FitwyYUOGeff3wPAR2JDNkiPVObMlLf0Nt7GXB2fBKH2Q2H%2FmdhKzu5lpQJbVhA6yzLDjgbtaSHQy&X-Amz-Signature=f84add2ca6dac4d3a6cd4194efb759f3379573a2462adc5abe9b0d3ace9847f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665UVPB6N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T043316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD4xtOFykJrfwV2mJAdYYxWoVcFfrfCGHVs4eWY7yCt9gIgUfy8NZQtJS1N%2FMcZv7Lwlm7gGS2uI37nB58WtSBqcS4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKYrA4pconQqO9%2BLFyrcAyEif6fxa%2B%2FWRUpB%2BF8jYBr%2Fh0tXYtuhbNKnRnMeYgGptnHS0dPox1ZtEUN8hoF3TEQ3a50qKRNS4W7Y4gCIfenyW155DmSIIPqmfSKNEXP0ayGivA1gjXVn0iChC9WV8mAqVakbVA%2B6UdbriW5G2aWreS2%2FhHK0iC61c0j%2FquRtYwWPnrBGU%2FFkxpbigml30iQW4eN%2BZ0NYtjNz61PQcXfnlhRLHpkS4MctA2wvK3J27QWQzqNr9lIg84W%2FjEMl%2FYIXMPI6BmIo4HnhtFZqALyX52E%2FF1mKv1zSh%2F4WvzxyaRyQEcNlSR%2Bh1mTw2klXuadnUIJ5wHsUT7aZXSDhy7ylP35lBcFLh1KIpXUfHAIv5e0Q2uN7pfEGEbbAPdW5%2B84vOKx1%2BjIYQ%2FYWz%2FC2qMx8QqpDca1BNXpKtoScEPHNfNcIIm%2BpiqeI8yFh19R5Ui%2BVuprC9jgdQDytoBjgcwSHLChqy4hZ9oSG0yAu0hCsAS5quCwkdZVcqIdHwYZTD%2FkRl5NzAmmFMwo%2BI1ty%2B%2FcsDW5y%2By13i99AOETqKxHCGrwf0TXhC694VaA6O4L3Qe9Q8bYchXSbO6Qy1ad9U24kc9Ev9PHKwGcZJwPQfuqufAdLeaNG%2BvhbaSajMNGUvskGOqUBZxs8Of0Cz2ThXqi17dle3LjmLbV64OIYKNzZRsdHFErYJuM93V6I5m6DlJwcr5daZ1GHwGLkyo5%2FNmYn8z%2BbtwhufddYFKzHHBQMjdCm85xHv4A1QUmsjQowgv8xgDhkpyJKopSTBTc45FVZsovmm5ue5bWB6TT13R%2BZ2qFSwjvOWGLVYFLXK5WZDpkm3VWdOyYXGkiyaumfUf62IOSELOEVcxq%2B&X-Amz-Signature=c5179fa2d2343ddcb8856340f695b95d6a9023e6762cd5dba9e21874856eb8cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

