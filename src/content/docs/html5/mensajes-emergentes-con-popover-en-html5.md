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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAPLJJV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID59rVG6ShXC%2BC0MPUxpEKQrKbuVbHLXfkugXSBlg659AiBKXSIfBPEModh2e%2BmtYSCeCZZDvh0SEbrjJhyxKOF%2FOSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMOZQQ6xAhlsSqOzC9KtwDmUEyHWYM7O2owqJ%2F3EXhPLJxYWQvTbWVZ3gc7W%2FoAQs3R0d0UvFtFGj9P9IAxiyPcMh4AukwICML4KYWlvSOh%2FUnEZhHQAnGfc3jsFCo2gPeFCrcOnXpKpzTJnkUsGkfKpoq0FQD3%2FDsE85rJxuTDxEac2Rm0F%2FBwgxxweDJD3y%2B886gNDGXFHkcthZcOJQD5aXewXJ6N%2BWWYL35mAvGXtNz7B8ystPgHyvl7%2Fg4WBMg%2B0IcofG2Z48cVAEKPhfQkyMiC23FmD9QTPuNJElQmr9nOn4jIa%2FCciSs15vxLotiuRMbNHSsoO3DlhWrYj0h1PpAQHbx99isArof6mlGZcKf3uj%2FvJaXDO39oqWtYOU6FX9C81kkXmKL65PH3jrcpiP64ctm%2BnoS%2F2DtprnbCS0VSlL4dp5X9teDvuK0NsSjcr8lF7xR6EqvccCLyCpduqxmRl1B94u485eQPbmoGexEy2o2LgbtdjbBaNLA%2BfhB1ihUJN7JqH6tboTS8McK2Q9xMqSvYUGYGTGpB2vkw4K0P5vQruzRqzr94lNAcyG8AS4K0YrxTjmSKj9RWAcR7ZqSEUC1xpfAeXHHEe869dCLDmVceSEsEBSE6P4d9ow%2BTkegeNxdm%2BhigyQw7sXRyQY6pgEmBKU1NSUiVUYGcDg80guPPTdkRjD8Qg5f7%2BNFQOB8QvjWDnztUyNsnlTABEg%2FkSPgClGvzxwbsRd3t%2FX4vNAkGikc8uUvFx2JAaLn7jLmF%2FKHrA5i6mniTJ2Jz%2FyPu7rd1%2F9ZIara%2Fnidis9fxWdJB9Fw%2FWGA9GoDhV8vGL%2B6Z1WH7x1C8mf7KFpYtWaWfu2W9O5Rxmcc7DrqywLzaV2nWYvgFoGI&X-Amz-Signature=ff92ff2013e0774cb52ab1a533e28b98b3365a99bf5413056c74d57484bd80dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQPDAWSC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICefFQCHquMGjwkT9Fe62hKeAEwBweREOVffK0tnUlQHAiBGQtXDYCm6fBTy16Az3T8vk5l9JPMDBWq07X6A153Q%2BCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMYilU18DH5mgDN093KtwDURimi3qMQsOB7VlMmg69jXP4PYT9%2B3lwgqfPyLZHvTBbY7qjLvuUhRgk%2Flqfe6vsm9hkjdVpAG4yBHWEAmzHvbRpAtLjgX5ZvXeZ8nYIsk%2BZgS9e6f2daSP5Saa6hZChZIbPamTZrHb6mGqS5wTibxVaTh2H4vjULHQqvJEr%2FJnar%2BfkQ6L64GwSKGLp8w0ZZ16V5xsYi1MlWVaRW%2Bb7Xs3%2Fdi%2FgKFIhbUWqhwEVnDw5%2FUCSvgqMDAxVQsdHsxFbS9Hx5Y0NhoNDM%2BCbTKKF%2B91EOUFaYLpB1naQvpVMJRFVe%2FewfmXwxcvT3S4IbIsEfO96QEheDfrd4r1vinEX2aeIUSFC5Svjn5k92ECByEqP1Ll%2FT0nCYlzk1u3bNIFAM79UnFqeXkUmDCOYZ0jctV61MVm6CY6tafYK95u3BjYhutFTNcRWXXKuJEDkY22cK2b5z2Mi37U9kLMj%2BRt0d5r26So9ZEb8J%2Fbebq5tmvEEeBuPiD1yCoTY0DpGnqyU8PPPBWwiDWWbFXeIyY5o%2BKwFkuLSpNNpE8vmhkKI3mHodE0qjDQsHASABC37aqARBKESB%2B%2FhQypwaHh1Uqd4xdBUvCsgmsz2f2kTfnN9kpWjJjTHCyJjbG8YjsUws8jRyQY6pgEg4leWtcKCgKZrKlj4Z0oHP%2FVRH7WJMAzLEyA4oehFjzJMW5WBzH3ngtnOksBzXMKIwYCl64Osibn%2Fm1UczSx502bULFZxBwufsHv%2FEGOiGD9kssmG86kxnrL6p4i0qwz9C8ZLkSWsHf7KuhuK0c1Zil%2FxxHi71FEJ7VgLZikN2xs3Ueja1zLgDM8h2JCpqS1pb6Sn%2FkiDnxsFbMqwI%2FR9MqusLRnZ&X-Amz-Signature=fabe1c027fe0f8a2ac1f45c3555e79b32f43022533649d39969f7f143c3b8a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

