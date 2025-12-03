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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FU77YHZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDgQtfbrGa1cZD2Bl6Yzp6rLhxZafPbhCwDSrbwiYukJQIgTgduHtKfRnMBsMSWMDVghx8drfyzw7xExGYtzaYsSGIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHvTOYQbCD4%2BpXP%2BwCrcA8YY3AihieOZp0F%2Bn4nUBs%2BWvFFWMrzRBVdGky%2BH1wXZBc0ifBGiCamrSIWvG481hg3q8iDU2TOBFplf63lCbCehdDtjvasdlCdheWO0MFqucG3wbYxgI5eg%2BzE7L0Q6cNfm580A8oLbHHKwiddvQmAdWkiU4JEBtfs9VOQfRC%2BbPaglL8VjvRJYikxXKQu77gkb2rCy4jXLNez0ErTafEa9SofEhzT923GW62uIFDq8jOoCJ9VaqGu3mSccNHZfWM2v6WTwlIB3NcY%2FF2LxYRJHbJSoEz0aQKmFjW84xC6Ly7%2FWobpoG0WTV7aXaKhqFvvRnXTLuyip6O0keyr1B%2BXlMHnOepose0BNC5gfqgovpdOkLzDnRUKX38ddAANjxoQPFxEvF4Xrr5w36tAM08hzQ2V%2BfX1qtywN9oUk2j1dLsg2IKvXOwOnFwfIz7Miy4x0wrzaON29IKJhhX74glxbmkQ86sJCsIj5Ugbvd8uwFUUoeshBgk3Nr7YYnxacgqyV7IONJFjKaExS0l8GQQt3spdng%2F5c%2B2aU884su1DFraJPOFMS%2BiWiXrkemJagiXXgxoXPyLQEdQfh1mNnovOofdpVmMbIUikxgm1QMV4K5D7PrjDDifX1qsXFMMGIwckGOqUBHlPvA6TjI27xVwKXJAAj13MRzIiNV8Bhn7qI8Le1MCxrH%2Bx5B0hUo7gZQIWlSBZJgpPdq4s8N2zPe5P84o9jiCiTJ763OzSjvG4zwlufQa3EcVrlwBJ0bRID6GXzRg38jFLy%2B0UBbAIuSvrH1d8H9UgQRNjiFGyowdkU2PX1SexF2ho196%2Ben%2ByaMdJizvwBSU%2FjeAisFTbkmcBYWPUUrSZRp0yO&X-Amz-Signature=6eade07cc8257a711b1700e666459dc7fa17805b12ab13489bb91866758fc8cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I3FCHKU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIGp3o8kSsgB%2Fe8O%2FZnTnzMDoD8gWgRfjYcFbDlOyYu5LAiAwRhsH7fAYl0%2F%2F7immPkKXDJvzTdiaZPJ%2BNTWU0QInSSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMqOULNclvOiW53X7NKtwDMVmVBByOFdNIeSOwauckyjzK7cCyKgyuqoY7jgymrJAWjabYd28au6Y63yG5aH40vXP2SULfy45Sf2U2aNXyrwN%2Fs2R1biQbddDm2YI4Zfvlxie4Y3fVQo7PWE7P9Z8Csj8AO%2FgHsq6oylbAFgmlSjGRCGCWzNyWuz4K7ZQUH1O7k5NoqlhBQBfnBDB4tJc8FQO13yzsBhtvq1XA6XftDCBzCgj%2FZFZFKNSA7SGenP6vb0I2ilVu49Tt3SR1wV0Y2lx9XUYICESiFJwGOPsFaGlqQizV4SzfcE1jMd0omqyXldQy7BvNwR73C2QWLLZjlalcv5ZtwwFKtoqsTY4qZTWAwY4BWV6Otok9WVlTEw71xTOTjMW1muo7hDuXd0hf1Rg2N%2Fjw1vbo8rulske7cnbdTFdko6GuAqHohr17ncowdaivSbpPtZzNL3My5ZU9ssjo2jaJOstP6NSG4cq4ZdBQ4nLs9%2Bhcbrs5%2FHgrsbv0E0XuKvnouiwlk4NkIWVp1FJhiPT5MxjPW%2BwE1A%2B4EK78iXlLvmLzpTEXVp%2Bu1SWxjuAQgOmL8iTDAvF0jj95K83v8OWgQsSAaZLrdKd7QI7aTaa137GjWUSydrctFfEhxnnX2kD0n2NOjygw%2FobByQY6pgHdukBUTp1rK7MPloez0BsdBNqtGj1MB4szq9TP%2F9y2IbKGUBa2l8CBEGOt4%2FYionW9lRbdKCj2Y5qQh7nCExA5UVoyywyY3EG23bsfY7vWKI6ceCNnRd9n0So2PfIq0xJR%2FTN2NWgC49fDGApzbdfMZaHlEck%2FILzWfB%2FXDcRbmH3or%2B8w4j6HKTZjMWse8f9vT5CUg7jnra%2BG1%2B6WZ94dPB%2FKbqZk&X-Amz-Signature=3870f74d6b0aecd2ab70826d8bd01cf19b9193a49acf0fe6b264cc25b9e3f291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

