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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AHKGLLI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeyyCPQ%2BwhHTgzQuYLL8GPoT%2B762uJG9zeObbwro0y0wIhANFmoMwZAld2eoGpZis7Khfj326apWZRh1O3qhrUDThWKv8DCGwQABoMNjM3NDIzMTgzODA1Igx1y7NhWPJBh8LLmQ0q3AO%2FLeTfMgqyemeCBj1EowtYmvE1doGhsF5d%2Bwgx44NK6wCx2RX2FGcWp0TRVQdMMpBvcSLUwkeYVfu09aPCchuRdaDdEE3B8cuZL4ftEBljlwb%2Fuxjo5XAP1GJvec%2B%2B3ncBcWe2e6dEPsW2XMwBJZdKw%2FRN%2FLyQaA0nQKU5b29WEl9aizxtPK4Iy7VSZxBkicRNcGy0AbgN0OjxUwzI369iCnNxO2Gvlm%2BU5%2BARCztLS0LYEoYgHbVFcj9kqOzIXHN06hud%2FgLDIQOUURGfoVZbi6rngalF4aE6StcnfzANZunS%2BUFCBNzEFbbcM5CbRCiC%2FowCr4ElnhrP7X17akHJ8ATPkDzA8yTiOVjk5JJuRlPvDvKnjupID%2F3TV6vNtp1DdFeqVAsu%2F94i9fsjsW0I5emM9u0VnWUxlyjvw6b0Jdrp74bebN%2B087YkFJEkRyPaqkDrPH%2Blze339zv1da4kS1TcVRxGrr7D0gmJD7idN9dMy%2FKX6nfp0xtd2miyH6n7GSziLBcdamBiP0AKMTTTe7i5xcB2%2FL1kAG1VKzpa8YmG9poyS7KQT%2Fr7QbI5XkzEMDYZOR39CvseobfKDVm7QQHtKBwNkDIyLviwxA3QcYt46mX8xdWHwp4nDTDnp87JBjqkAW4dLu5kQAmZqyqpWbbbrt5rOS9GGRY4Lkl6vWq2FMYe7yw5eo261Jy%2BCbv%2FJNO2Dshj9jkeeU4z7W%2BoBxTTiKlyeQkK65kmy%2B132trjjSKKWvK5bC26woMKyMPR9%2FJcFkOLcJI6oAHGwsb%2FF5c2VEiJelZAIYyo8Hvyh9dK7WzuM9zyWaB089%2Fj%2BDoeQsI%2BnNXz0D7RsxbGRkmX0T0u2iJ1gtz9&X-Amz-Signature=5798a241a658948e6abb333db85dc24348af8c0e6772859945e2b452fbd195f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FPNE5VV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDF9DBi4J%2FJ09MroiCcmrjt43YB%2BrBeNLQNwLMlzQtooAiAefDWsUAMBY7YzHb9JW1SV1SJISFOzxHut9J%2FUHPljwyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMq%2BHCWshYnyHFm%2FzBKtwD6AiNyYlK%2BdSj%2BvEnLeIZNQLplK7g06V6juIgu2ucHI0bS3vQ1soALo91ylsekNuvhsalPlAM5RF5yCU2ejHvvoDpLiZ2WT0MTD9neZ5BsOJzvnhsrqEl1x9QnRAcRzaa1vk4Aoh2zD9eVmUJOUjc1KcxW6GysJizDooSxjzx1qlkooSUodhg8ksNf4p2nG%2B6aaYw3wRZmnVMxdwu4pySgs%2BOE87lNRH%2B%2Fwm0zMBfNNsuingzl19BWx82PULTC%2BKVMZS7zGkx0%2Bi1%2BdM7RXDTJrQ3dKDpGEQk8QahM5tYSPE4KFr1XXzVGUDoeb5CtbqTS2mnkD2lDF3Y%2BtxGQoEpcwId3XqKDkxUQFccXGQFSj0rnzcMONL8GH1rEGoPO0scRluifdEiJm8qqI%2FnRZoTIe19cw%2Fe92BUIhTCa1laerxd3GghZ4cqhbdVB6BtI1%2BRQkksn8Qvb7wE5UOpbC3Q8EMn3arS8%2FbL0h9F37cUIgloDyCvfxQCbm7RCPPwz2M0w7yulpYZOoZ6f7ymq4fPT7LB9A83qjSVG8Ah%2BP%2BwbhGshq%2F9QPIjFvdvtp9ElLgb19VVgc0Yb0e1US8Ym1Yke5tXh706w9Hvzgyz%2F09rpn1Zaz9znXCHD1vDL8owq6fOyQY6pgGx6j%2BkjYyyyJm7C5UN2Cp7JNt8hOvFjozwwdYvrnHpKxuRQ%2BhNen%2FABChZycH3OjB67A1X6YlNeffIra6qk7Wp5oUl47XqOMrMK9h1b4xwe%2F3tnDikPb8Ud2hSMa%2FNuzy5zEf7LGJIxSgnvebbrSfQpcd83eM9GXtd5Bi6bY80VmirqTombz86kTozFfZxpfxKWzEHz5kSFprSnHyYhdyyIy8Ihn4L&X-Amz-Signature=1f8bfb3fe3e63268283375460a3f794da081566bb9bf96f1492125376fe0115f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

