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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPSSKRPM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEHfOJwov2XlXhirp1OB3%2FREv7ddZizYRaJ2wb3Si8BQAiA0f510VI2G5OQh5GrBQrnYIoJViEdO9SjgJNs%2BhpuzYSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM3DR9B4N4vwOMTJMeKtwD7AmbHB3TMt32mdZAC%2BibySLyzhOB457UKa6p4rX7ZSm2EkbQ3GkwcTRreTn9RmnhpUD2zJDFXOrdwsqDiN3gF0A7mSpybogSG0rSOZ09N8iuXTvvLaiBU9ns9Kkcpe6IEfNUkFdVDGIHc2iNRemg0a8yfVh0%2BRGtdMCaGDiUdmsfAFjnk7igxYqgjmiRf7JrpAdDzNGqpUL%2ByGNZpZuQEdduqXd%2BuDYX1DFmsCVXMjQYsHOH95fjzM7HoT%2Fbde6CN1ayQ5JP0yMp3bu74q6NCx2CTpqRi4ZmpQK%2BceBJE1u%2FNILzjJpi7uxvk2IIUylSDZBdbwUOf7YG40lrBxqIjnhSFCBCCk%2B%2Bip9W1trO7j5ZSwkYvaExUkYhT11QBvn43LnRBY4iD%2BlssMpCeN9v5k1PhzLraY3Fw%2B8%2FGttY3%2F58pUtXHjX%2BjePfxS5w%2F1sWVzr70dk4AGsgYcDzaeLkpK0hRNyBduHmyAZxBaluwmaRe4JCe17WV2Hn5rNyZDXRwCUHdoJosYlJ61mbKgaGDfptvdMS3F%2B3%2FY5HaQO%2BqEIlVgOzSqSaTp9eJIq4qyKB4pw%2B2JVYIjv%2FR3GG9RZ4HyM1Q7huO4QSZcgsrJoXzjeY%2Fu%2BDDVknpIuyxI0woa%2FAyQY6pgHjkiUFJLApzf7MYED9MfKRTE3Ny7cm0qB4RFOSx6jK5R%2FpM%2BQWXvwO5GJT%2Fh8OMpRxDARhzCjUT0wccfbnlC0DjZVDkSmzqpi1Xl3i6CYSNu%2FLwhUHqdM8etx6MGoU8HFzA70xvfPe7Ppt91MXlUQE%2FVErAAFUrZYSbYWQ%2FKu0PFFojZq%2F57OW%2FGtdK8p%2FfxTMG4syYglIjGJgEJjRa3gpKNo6CBob&X-Amz-Signature=476b1b2700cb7a98276abbd93ea3e288c3d473223f3ac0147d29d52671afe191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642EN5ELT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFyEKnhMrKskGeuIah0PCyuci4Xcp%2FXhR6oKm5SQez9wAiBA%2FXEUQAv2pyV2ifhWiz7GbqQe88tddptXrGhJiRJCair%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMilwnOCLuEwqCb7UNKtwDewHV4KozZoBqy%2FMUGkqq5Zzht7OSGVB2qApu0oM9R2IGC4KwqsjPZ3pqyPEB7Ot5KKNTpwkYW3j3jY73ykkUbXBShMAI8Z5OpIrhKdl13AXFqNdyGFEsFOHkyAXwjOGh3XdetjEEJpY03MxuAwEr5ly2SUy9U38dQkQoqCz99s0FidQGmIO8yXNmJVGR5hGYPIF8lWpMXoeZ0A6cZ9%2Br0Q7e9xvuyUArQejjALlVcA2KrWcrR4gS38hpuEIB%2BLE4QwOnB0UnWxxNSgESyedVjNctikqOfKljeEKC3ku24q6xIKDFIi7bP3phCJXLsJJ%2BydpVFRkXl3DTYa00FWEgJnzJe7A7D018RKA4jt9KugIpUKjEV0BYCIYe1A3KVS6PL5Vtmed6hNEJm5oAfQoULKeSqBqxwD%2FBofJwEe%2B1lLSkX0aWA5kqdV6yoy1HHkZw0sSb7NtAp1pipOyyKGj0UFCRV6xHZeSfv2uB0yxHRjIhaWq5m62vR4QPkA2YJbuyBIqhqXleXpryROSk6Qd5VOnkHig3WUQnVZA3DG9nvf6v3noECIBTzL3romODSOab9yzwzUvKpGi3eb1%2FN9UmfpYN1RWplqpGQzEfGbLtKram4aylFx8FZ0moQJUwoa%2FAyQY6pgEgojZ2THk1LNtQYvYFJfp54IxcKqBRpY7SeDtXcokz4VYhIvQoP%2FkkYVfvr6sXRrkT9hAsWWBSjNQuST%2FCn7z1Dz9UNyNxA9GaCiU407Ga7eiAnFdMcfc8xEoal4pn6djkW7tcaNK%2FazQoGv6HnT%2BgaKyE5SpB%2FlW5OLzPugem4dSf%2BPT5IRsl%2BldSROJd2LFDomKZ0Wu0kaRMExdiRLJcBfyNNVAZ&X-Amz-Signature=98aaf43161a9d78177e16a7a2c58a6cb06f1420b4212fdd1f4441da49a96fbb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

