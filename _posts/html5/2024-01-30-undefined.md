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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BU3RJLA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T024434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDcmJ91AhJJ%2Bl9dtyyZfoLgWU6hln5b4SAKdaQHsnQ4VgIgZIufKedPOCUEDGOPfETpp0KYT0hNzhdS%2B5jeTrXSjyQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKwDerttJephY0baiCrcAyHGPmULIYlnfkzkAXN838xpaWATrV457HTRbtCt9HWEBAU12pHT7QedAOUp3Gl%2BAUXlYlWjE4h2vKSBDgiu35aeHYjlbzZ%2FdKQF1247S%2BLclKuuOeImGownb7OuyVMjCo5Nm2%2BOye2Ebsc1Ksw5yIiMKBqWl7DGqEXVFOI5ok49WnxBc3NcKYTADpEN7RmPcQSxxAaien863c7i%2FD9%2BifDpbpKBO6TY6fG9oRgSX4faYfbnazQdhJKSk5a6dof5HoaGcqEgVPy0gn5d9CBff3PRiQzRYBZMHKfo%2B1Fl0MmSI0ozqiZDniP9LrnIqpI5Kp6WjwgxtTERmd9Rd6Az8c7SIzz47WyjPIu1gtZMEeY%2F%2F2JIxs2fGhHf3ew%2FH4qPt8fjBoJCqqQnTulb%2Bg7%2Bk5Qglq0Y20dsyOe%2F12vtG%2FTz0vaR%2BGqTVRZ%2Bf8b6pp%2BKoX3%2FI5lWWrCtbunDB4r3lNbC5BpKHfK63AJuBYQ4AjufLH9F%2BZRH6pkntBCjkqmmqrIWr1c8bqN7xHy8RY5sHeZcOgT%2BykYqnaz%2F%2BGRKXMpmTfBsN7sa7HDwM9fKepkDPrJvF4lNFlkmkEmz%2Fr7VMEl7vuRKndc%2B1IIi0VDSZJdVdk2pttAjAI9L1u%2BGMNeUvskGOqUB3jtIyFK8XvJWejy%2BmQks%2BG6WDs0GxWne0312waZSGz7nkyuxsEx%2BjRAvC9M0NmR5wt37ZyOh8DMds26V1CJUdG9%2BmZxOEmGemrWWTDaaASHrhah8BVMekO99F7b0yMuzaLGWpEkVeu4pSRGmqZd1NmyYNswYjals2F5Ea%2F%2Fu5flJ70JqZOA3zLORhpwzBF32OFl6Jea3Cy1E%2B9LjmYhM6qAxwlEF&X-Amz-Signature=b9e2ce7201392e92f0a210dfdd8634e1af9dc25adf5833cc5e3a8909d2a9ebb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNVHZ6HS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T024434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFeVbycgVyq4hb3TelWUyt%2Bp6qh0X2jytE%2BpiYx4uSSSAiADfKQkjVwitE%2FfGKNY2ltwkE6Xh7s3NTyHC%2Fgl16RUuir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMOl%2Bt%2Bz26gUXdr%2FtgKtwDXvMqAMSP3Cny5bjC4xXARrEJjyU9Jm3FEnaySZ35LU5Mjuivd07rYeXF0QQ9AbTf5BMKeUgj7UBcc6TLTZyvww%2BAvZH7df08lrHbGORpM%2FvlAg5Tz1tJbiKc2swey%2FfC7fUNl%2BvL%2BfEGWHayta5jeWQjxuBGrApBM1Px3TifalcZALpYW20xxg%2Br8Rk5yqEzMZ8gxdiELZ9gPw6IhKxXNYPVNL35kdNvMHaiWgh8mYQN29xbMU7MG4IyT4PlycCf4qB%2BQ7z%2FK8Fcd4ni8ch7wQS0edCen%2FYdQ5tJYS4LqsvP%2FCYjxbutzXfS9CS7FIkkcejfZiR4OlpQjxCEtyVzbu1waWb%2FR3Wra7O4NblmAx2I744N8gsDU58vULHcyqJA4QsffJ0NMKALJ%2BiZt1CJhOMpLMoku6CyOSUHYEK5l5mbciK3Zl4Ar7r6DD94YbawkN8v2omL%2Bxgjh7u%2Byb5E%2F%2FlGrByweKjF3wPdIE9uzW2E0KCC802ERdgvvDAd%2FGNYty%2BlNDB54mOgF4oqJ5huDhFOwkthjA2CopxRO0XnLgduAJytJ18fL8wssgV%2BGeuzUS3T49pCQ7kltX1IWmm0iT7YrMxeEbGAhMyxYcNy%2BOftyEtoVAmKlNJjqnEw6pa%2ByQY6pgGvXtsGu0lmAFpoBn2NERdFDXTC65o2Cajc1zB9Ebumv3ZUlmUBVf8WYYdKWWaBOMludrH8SLuOtJxQSaFPdGlva3qQXYeOpH0OS3g7Cjh1ZaInpmJV66fZf4dUceJUhxrx0GwOb%2B8Ew%2FIj4CT1oxVZVzJuu%2BvsdzoxLMOkYDN6w2PhzqEf3ZZ%2BWeUXOOq9xXAZaa6UUoFIs0scXOkxgn2pt4iyK9bR&X-Amz-Signature=b50989d473ce310ba29c4e6b1f6801b0e4bf3001371d37c4435a8e53c2eedd7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

