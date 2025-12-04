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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAAIZ37B%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIAcXZskXT4gXr9QtwL%2FnpJrlUSLHiOwngZauB%2BERFP75AiAo9RprR4SH0bTwbzQPYN%2BPVmFSusbNVkYTGSx%2BKwaq1Cr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM8ErD0G%2FfIbsMGKipKtwDPX%2Fl2KX4eBa%2BU7cKJaQq6kUrmi03qNjJAXgOVrXxmkHmRQqooH%2B3jLpzQIy8SKjT8lnNL6BrdEyiMGj3LF%2F%2BS%2BmhpVKM2ONVxHEF1D%2FYCEr3LIp%2B7PHncKrKiqI5rU8DJ%2Bw%2F28sHDtG%2FE9hP8ZGyO7NRsHWSbGZFYbyAHSE09gQDHMWjuaV6T6uiQ5qX9ohd1CDeAS%2FbHeE9WW7UXByg3MK3lRUqZ%2B0fvlP1oyUNjOCP%2BlS3YBdAE0tzVOLOxv3Z9yRg0DOT4ZKdP3i%2FFk3sKqwtAM2vJFioc0gIfyDYStCr5LvLvnoViYo%2Brn2AjekTmSzFwa1x14SPnijFzNFB7RQeiwnNt%2BWyF8miHP6xqDPWD%2Ft6eixdFgVjLwnouSfEigrlDScpyULbtr%2FFYIVJN7Vfkr2aT4Ni5yqrYTMtcygNNWSjrT8khATLykcXieM8evemZTbmDhFLVv9xfAJIIzgrqeQvByLe%2F7X9AnvllmbilmQPqAG0Fenm3OKnZHBYyG3%2F%2BsWKzPTqAS%2Bfb7ienS76tRpN3q6S6q0T5ZzokZ8dayu%2FFJ5uBXmQQwmzVQovHL5orI5bUCbdYhqjDbJLNnhcePoUCTct0htC8cPjZsAVxfn59FjH9cNdrRMw8OjEyQY6pgFHxDcX1J83qVykxnQQ18zhJzvn9DXqS8dHaoZAKhSfhOvOG6VcNRhHaV6rwd9E2iEqP0mEWnXDxHy6zA%2FMkg6%2BWEVMXo%2Fp3KyalBWkGvK%2BbiMxzD3rjpj%2BOwSihRNqDLgrECdgMb9tvsexY11tzstvWLXoI3syaMjLmwS8x0zXElTASunLpKJamFxovwn9RhEM8EKr0MsBTz2ZSy5kHuuLGmuiLIW0&X-Amz-Signature=67d08d61de6430469a4d0b904888400976aefdae16da33bd3130d45bbb7fe8a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWOFLNUF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBWNlbxm8Qfieue9XGbn01R4TsEx3Dcc%2FpoNCfTvAWzrAiB90X3f6MdCzIIkAOoOvgbmbfcoizuQfbn%2BTNUTjAM4aCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMGJ6qW9L1%2BeFqmF%2BUKtwDD1dQseYDwHIGPch8rp5Y0Ubrg8ozAznuwDKuBsK4%2BAVRIwffHGxPu4vKofvhR6kzyX6ka9HYtYz79iiEK9BuO24XvoOGdKMuMJl7DxOoPQckxiC%2FKSnwe4WbTIQP45pey8rrpMzZST6xFeYocqRZpyNYmpGTPDc%2Bx98y5dDQucafxYVEDiAYfnbMxc3zlWFQyz%2FzP7doqH4Cu8sXpid2EdDDQbPYSWKtQs2xqda6VoxK%2BazuKEFML8Fsg73ui%2FA2sj6JZjAJYu4ZsDhtwb97%2Fld0DjuXtvRghKItVFntf0%2FKwR5ZrGD%2BUcYoNCHMjC4TWO8UTyi5riAHFDY%2B%2FXCyIrzgYcBJJQtJk2TMiZF6vsCGYx1HeYV52e1AJWxAMCWojyiqlEcZFj21LrK2OAZo%2BMwM6rWIOTRqOJ%2Fqx02bZLMY5KvXvdnyk43UCg2Wj281VV4xPOc50chWU6S6Id2SZii2O7IQLEZ7%2BbLhWyqaddoCqIUooVhgFDM1mVOTzKZtUga9CBJUIG2mlLBqQeCtwLkMfg0yKsYoMNIjrK3c2oI0sBiC%2Bzn5k9ESsE%2BK6gF4Z5Y5hM5gV5Hb6R%2BZwnQn5aPqcrO3pWtkwtwcZw9lOfuQujmgvQ3E7h4ET2Ywy%2BjEyQY6pgEyt8gWA8HdYy%2BfCyam8k9%2BuNXpdcc8FIJ51Pn546ocF1xNJVBW4W6ERho4h3eQBnhysuo12dsHurEE5%2FxneYcXSlJwPnbbGk0%2BWBRLNf7f6VYMbhG4WiZxELQ8Gj4M7tgWVeo4U%2BZB4%2Fj067Km%2FTz4UpCYAmG4tg3tMzETpYoeRsNDUWoEdVRBkxDE5CXuUyxyX8tuitWQREjqXrcSHSbNYAV0mE4Q&X-Amz-Signature=9bde59505e08683f5d493015159dabe8afe3fa13e9e8263af1b6c963873917e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

