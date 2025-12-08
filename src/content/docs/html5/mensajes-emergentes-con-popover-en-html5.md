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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MGW6JYD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhSr%2ByapXeVNgStH306QqmLzgWIv%2BG%2B1vvBW99r4G%2F%2BQIhAK6FzLcwjzE8Fp2%2FfrFtMgsTXJse0SxWlqDnuSqAavQ7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxtqce8kbWKkARqOQAq3AMRbALDVenfNDn5rXS450Pv6JUfcaJfGTHQ6%2Ft4c8KZ5Ou%2BmXEcX%2BKJwwRdUqY%2F0KA2U0fpZ0MHpgBuzpdgtVyWdSYi1fFMms2miRAc6gErdxT8Pz9XgY%2B9FpJjsIMFtL3I4uaH3DWxOQYT5Q29QJHsbOXB5uJsnfW%2FxbL9yrt9xD5A4%2BJ9COQrwX0nBilpRdkYUsm89%2FnAtvpWxQSN08K8A0O97FY%2BPuNTMkvoPuAHC6YqXSCv9rg9%2FBQ9pSohg9ijmYFeotCTi5lQXIFUn0QkEQsWeHQDRnY%2B4PQCWt9IfW7IFdCG36FeWgC%2FuAz29%2BJn18Xye0NMbW%2BlfUgV5q1UKdIshi9sTel7DzWcWyzbNBpS7X0tSdf0YNPUnvwaG%2Fkz%2FECZ%2FOUm%2F6ZXT4zIKLqTHPdL6mK5qjjgq9zukZJbdQnScOCUQl8IX0vDiAfBvjcpYqdF86652GUtiULtF488lZmLM92PwwikU5sy0eQU72Lr4Y6yKB5cFN9jTZi3XlbM6Ayo463tXqoU2Fw1ctOpUTiddHtDBi6gqJP1e7vEDrTLXAOWMHrfnatVxDO4tPocyCJWKjRxFyQUWppn4SqbgHT5U33h4vAsJ9GF%2B1UFog3V3CyykhK57va1kTDe0djJBjqkAdGop%2FFa%2FibZbSR3F60fLneMLeaJobApTF2tyhUp1UpV7QRi0HbuEHwC6dYh%2BeAUlkOiJ5xX37iNtZUGpOtADVj4TT4EerEPmaBDWPpDYy%2FDGd9sdlv8fWmjP8r2iYvYTcrwnRoWEI6Xgj0bKFgWiwes%2BK5YdwWW7icBPbU3cG6oS2e0nuyYSKrwcnLMlrXpbJgGcK538u8fPyZ1VTSeRB%2FVSMBb&X-Amz-Signature=bf54765502d6da1a2fa84791a64cb8348e4e3e2ac4200d27bc16044c5c44454e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIBHS3TP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGNcg7SHV3sitwx4XDvrRJa1LK4XULVo7RZOESXJzlfwIgeD5pYLs1REp%2FlJo3Y%2BveMQhuUbalrttzfkcQh%2B6JAwwqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOVb6qHpEA%2Fr8JAECrcA7mAGPkz15BjhvF74xme6NqYuWITv%2BzRBtthWOPZWYHceJvuvTC9oAsbHa33IaqJ3EtkSyc0qG0F7qZK5USULIsQ2T9wR3LY4WwHauqP9YWdY90XB6DrXv%2BIaJj22uPcEEkp5Jml1yxogJCIoSVxrA7rRgkjPrXHhJkWTXYEy2hR%2BdURct2fBGELD2EY3BbOTzcPbsbyetm%2Fnu05YLN4qZC9GAiVeMcT1NJIsAzWU39KhJhevKHegzAjc0%2Bs3BNce%2FI2AvFfmOoYOhe7Z5iPVC2HUgNTUTuDin8kEFIInJWKWh9l5mr6KzC1%2BY3UNpbjN0hWGQnSgDAecBkxjt5waxsbZN7%2BHhZymlVVcnhAn03fpZj6XFeJumqiRA7NVEBNgu1O7Ac%2Fi13Q%2Fm7pvByDCcff5pzUG4XgSzuEbc7sy8qDYB8YhlcErMa6TKp69OUUpEZnJLh3KM6qNGYkvYAMDHLuABB%2FQ4%2FssNGbWTUSqtCKEvmLXnyJVeeAMqU%2BwYuLL0uVTZVNGWiusY9pM%2FQbL4udsRR776JgjhQ8lCLoBC1swpsbXLksHMhIyJG1y9dOl0cZVdpntVAW%2Fak6nIDQvaHOUpL29FVGyZlx7Bnet10FYNOLVIjrfWGl43A8MObR2MkGOqUB4HHCpgJZA14NQJBwl1vCTBBlinUOPjba73MM8q9UGp9Mb2wQ1XkLchBuz9gnUDJ0yOQ5OInhVwxnJAPAfUIejW1g2xw%2F3KliAyksmltjVYbtJeOzgV4Wn0571vyQjirzPgZfrbWtF6jnkI0GJsbTszVFu5zFUR2LD%2FzIu%2FAZEkWpeplMhtq0Cx6C08LBjUJjfbu3IUhaXYWx4uex7I7bkU79zuKQ&X-Amz-Signature=47ad021bbe17478490aeb4233e5bff246b62d7ca64631daeb6baa2fe761b48b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

