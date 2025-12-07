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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6FPRIXS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOhNSFC2gsH%2FoqaSdxc3eV8FoPqPTskvgrZDpVYhJUvAiAdwGoPav6BxgDc0wHXdXGhJ46pBlMK4qfqtaIZLk3XSSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM57TcIgltteKWLAwvKtwD1iJ9IU6BRarvXrALnANjg294fjJv6qpvtZqcEk2nz09t2Nlbm4P4%2B88YG%2FmzEgvn6jnMNgWf7m7O3DudYUSVkbO1NSp9BACm6kkF4LwoAZgqsrDqJl0zbnHnC94E8w5VhDwzlHFQPmStg54l25L5adzXpSeS7z8rgu%2FUv94oQX2LUz5xPLODXUOfrfs2ZIBwE1%2FS3z5QXoPnqKHlkcGGRQbSrV86YYy5ccuXKKnhEs%2FchvgcdliFc%2F9%2FClR4Pp%2FPAEnUFe1SJEJ4mXgZ2MCpL1hCbO9asQayNTyymgDKLirLAalWo5Cnv957WavN%2BK07KUibBAeGulRHpLigHwmo1BESPbgA9euYmYjs9N8QxYHXlG%2FjF5%2BN6ZfnVw7lZ0YvHlhZOLOSoWYcXgC75CzVvTqIDnpqPHkVEhwWyUNsidAespvoN6jhKlbgnVZ4yxsCj8gzVkI7sDi5wtgjQBO2AL3v6UT0b8rpNz6Qlq8em0lc%2BFU%2BaLREYLv3zFDNsvVKHSwcS%2Botjazv1KSUmge8N6CZSkezztXESXhohvX%2FT%2BkHCB1K%2FMzZh2mrYb5uCxEoWm6ESK%2FXWLmv58Oamj2jKb3LWFXBP62%2FFry3%2BKnSNa%2B5N5HAiIrV26XAIbswov3SyQY6pgGalDluycftFPApXmyQdF4rM3%2BqB6%2FZTRlfvfegTOAvEsZ3zxouQiCzDhv85BlzdPv8EO8PVXYGX9r1o9dxmoCOc4N2R5s4HPQogcMKtgIBaeRidUf5n7rQdNk0CQ%2F%2BI2ZABrm9im%2BZQkJd%2BKqg%2Fe9uJst5PdCQmk25i%2F5ex9Bvijmoa6ASZGIW71q%2FT3Y8mXkji84OIhwahMQePup7Xyk9EM3L793M&X-Amz-Signature=e335317a024a8929b13af7853b9df610ce2b1d3f887c4093fd985ec2b2b884f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S5KLN5O%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnaVzuq02OmmAbL9im0UtKEsZrr%2FjmhKuSFkKaQCpjMAiBP4GBsrST0izteV6KDtB%2BJSwpcdjkwIsbHWLast03YGCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZy4jheZx9rIpFEfVKtwD2Jjp%2BIlJoEPCdv%2BrM9eF32%2FgUOgkjIEL2yn09kD6OBA7hNoWlQ6k8TD9l3GUjjnR4jhTnopFLrQCNdtfU0nhyoGejFT5Rpuku7UXzGMuU3OvjRuaIIfZEw4DtDOdggWzDRXcAia45opvSYyVEtHW6J3TYsE5nkes2Rhv9s02Bkb6F2bAkjEwUKyAMr82o1GyNYmh5i7q7MHnmUXrUkG3HNHUNmr1G5PqsDpLVfV33BSMHMLtePmUHH5%2FQ9Ay7QugTZo71SSJ1Xv8hcDZrySHt4fBqEKh%2BT87RAq8AzPRIq6NkBo2LV0JxQfcv8dDYs2fNiuFzyNc3aAG%2F9K4Q4JhKGHqReLsmxkZqTFYgGipnYbD0PwrFxdswkdUzXdQJyQ9MLzF53OxSKYHCSYf5OnrauvqpYLT%2Fz8nl12loiHdGnQ%2BzEjIwSnK%2FQ8DrULByP%2FwRjrIJgA5soGVUi%2BF4pJURv%2BFCuRqa3J4IGIHzs%2BYWQeZgULYKX6W8pr3M8ooO9sFB4JxnfPz1YTOZIEzw1EVSSdUdtTgeWhK1N%2BAY%2Fwix5QTPfEpEjfloWBJYvaa4L34eNP%2F4tNb%2B2%2Fv2wlOchZSpXjysftrSIGNO44A4CFa9HnAi4%2FjIHgP0AJhrcgwlv3SyQY6pgHbKbGoU7Dqm7eThPh9o72bwJtq14nCdYLvv46UGz8cPCpdIaiK31RmUhQGoHqUyFwlL%2BWKx6ANZSRwXcDG3%2B%2BdvEY9sK%2B8gfHAREEnbqmY2sqD9mGVgYhb41OZY0P59eKg869NssAbxnn8uB7WNCjFaEaFVfc%2FmCuBDFaf6STBFSqRPqM4eO8xAvdoPxfeX4DF3HgxlTsaAObzZIsltIGc6hbE64xm&X-Amz-Signature=3cbc8e2dcac830767852f21195b2dbcd6be9eb67d6b69c01f107a43472052415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

