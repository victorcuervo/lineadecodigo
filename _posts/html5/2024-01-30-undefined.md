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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WEHG5BP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCIRWtveg6o%2BPMslGYH2gZ1fCi3IYdbRKRRZRvBqyd8AAIhAIYfgvR107uV%2B1UzoKUhLE7mKY5uGU3DD%2B4L91kjxoG0Kv8DCDEQABoMNjM3NDIzMTgzODA1Igz%2FFfH9pPJcRHovIRIq3AMmBIhN17gjjojh2FwFm1E01iNHkeG3gXJvUUjczvjyVJN3egh3Qlzp2cQhvKQ6Vi1pv3mpvnk7gSABJn1Iaqbm3AJsYGciz%2BIssGdWHaJa5X8fd4oF8yD3Iy1c2hd2cNQzWCRbNwuiD%2BtAVwBxRQQCECtnwRCN4bumc3H9%2BUZR1jV%2BxJibfb4rD3inQ86RXyvEXglShQDz5v67hOvcdi4NeDR9DOZp%2BFP7zFe%2FQB2J6tSBkWJriua0ZJ3SbbDIwLjnqCao05QtqFvNWSGYSvo2M%2F5rgfZvZZGKFfJGVfG6X4UHycMMXj28me%2Bux3dl6rOOt7fLiwGY0Cl3NMGZmQHpOqKHcZQYS88PtAV5TTPZx2P7chXg%2Bj3UdjrjOIdAAKKpUKdxOynnLCvvGpgwSViynfO5OelN0wpUOzX585Pb%2BTerRqX4dyMHChCroQ%2B4yI%2FXwpklISOF32vKHOOBks%2BcI6pA%2B1Wn6PZNZkJvQ3Zgm%2BJC0NrLkl2YRSDcfviI2tUCRkgilpX63fqXtiS0OfFQvCr2VdBSevMP1cPWEq0iFJfo49%2BZKKl%2BXtneiZyDyu%2FR9lWwf5goR3x77cM4tgpgY9M8FZfJRhvhdMA2Ef%2BlgtYLKkrGQUMII8EtBzDpwcHJBjqkAQdQInzpRmSu%2FzW39WL429VlVznjcgJRwiwVtNuNp2zrG3rUD2xBwqGGyKlGZLWih8mQQO2qvId2Jgi1sh1UfvDfYtK2xaG8yMGc0nHIstv50N2KyjTqprZttwIT0w9HsEex9%2Bb2J4PQ%2BZ%2BhuHHElyF3l87WiwI9xIMSN5b%2FWxCdyw2hclcngJJ%2BWfq2vQrzWbersCsZdSc%2FaH3Kzwx84BtwM7zl&X-Amz-Signature=a3f31db95b4cb09bbc08f5874d7947d123aed072e21beb2ea68d24b5918b0fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672KE55IA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIF4w1HnKH0K6jQxpOjo1v16i3AanhI5n1hf4%2BdMI%2B8M5AiAiaZVnOFNgxN6SG%2F1yAG1Isggbfq7JhaE8URdAhEsAWSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMZHLLhfSLyH3BKherKtwD3NW3MaeC6namkIwaZz9m5ZdheH5BtfdxQ5fmjbIi%2BfJWuCxD3elCgyBjVTluumTPxXWxWWQp4qachk2l0R1%2FmWQk%2FFDv6PRm7JtI8%2Fq8PcFNABGQOnn2r%2B6vd2K1kyP%2Bp5dik%2F%2FnpyMlxXO3ZFLfTyMwnNuDS3o9ZiqPnYvkAqEwftFWFmL2pLxJ01u%2F5HX6vytakPaUt7FROLmLfV2A9ODX1s%2FdXzqOKD0PeWiWZIHUzaRIxXN8AxyCu16VRy1OzhYo23bl3wme6lS3O%2BMHTh%2FoPl2wt%2FwUV0LNeRUJpaEhmY6sX7fc0lRnfC0%2BaqC0erKrZheGoLygdwoAMZ63AaKw5kctUKuLg7NuaPGh9lXAJt6RkaSyJZ9Ifn1vyhxGZsCQghwYbT4JgLQb4dpR7NZ1fQLEuuMFic5edTcDvEfvwHHagfQRM%2BcruN2CLDMXrfIUrKbepumx6zxM53mns1AeqvSOaXojAPCNQLNPLdHPBBs3RKnPIRMZW6VoK9YDhpfcSnQ3%2BUJJgHckLbBo47y5mQzVuaouC2y079x7b%2BChYPuk2vlkpKc1N1XltHe%2F1wzHoBaUMDus4dw5Pq8EFWa%2Fo1%2FgfXH45WeI9gRoqDI%2BIS%2B4vA%2FPJNSWzrkw3cDByQY6pgFHlu7Yx8EHnyNGqnHzrjwJ98eVo%2FTrtnqOFoAeobiCSRgnILKhwnUAPKya62Xg7Y6VsIN2qiwkE8vlHoxMsw7XEMcuOpDTyIvG8B0eAAM3ZLp%2B5m%2FWMyeL0Qv0szfIZx%2FhK%2BerVPHu6%2BYALgWOVgK%2BQoM%2FqG5bvn9MsuT%2FdH5Y9yR07s3xAoqOnMHMI3nFm1Tnbs3qbaioPNJMUZOy57GNJb%2FhKoY7&X-Amz-Signature=4d02c6a6b0009fcbe5749f3393dabc84450985c18b34fa849e3feeae20129e70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

