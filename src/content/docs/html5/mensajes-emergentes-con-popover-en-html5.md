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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZDOL5K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYBFI4XUrePp7i0rdyr95XKqsVaAch6W4P6UOWe3jLYwIhAM38aopCi%2F5626I7H%2B6WYFRKLLJXdPv1vm57AnkJOM1iKv8DCGwQABoMNjM3NDIzMTgzODA1Igyfom59%2BMGFPPmVcnYq3AP6Z3gU0pNVfUUuMnGK7AuhZKV2gocJwmJ6skXARqo3pVlgRx1mTDAajTKLrKLwWPikBQqO9oQ8KbnlH%2BhjYUE0HEdzhl%2FuylzmKbc25sQ0qLZGhqxihsqAB%2FWgNBRox1SyyFEgcQoQPmb8DuEEZI8i5OzwUzsc6k0qpJH543tWl73eOYVlberV9hAlN1KvyYiN3o8PwKlkvz2KWIAFxDit2K%2BST4eFSRG%2FXlpUwumvFYqfPDVajo6EPh4Lu3RX8Xy6VFfBj9fj5xIQfNicTaJ3xffdQbXePXtowsISTapFJ9jHEOhyHa9qVcpFyN3MV%2B8m9xF%2F4F43WbKgFRvq1FLaV41IRc3JfWBkyrOi5jpguTLdXvXxIAj1OUC5wnxSauomWPpXbs20bW8225N2a7CIwGsZONOSkF36o34XWxfVTITN7J1xXWCsDRK0t0TSe0QVEisr5B2RhJkfUyzgtGXhznV7F10qCjVx6OBUfiPzRyeikzzmUN1JNbkZqbckhrzlavLyufWQKReTT6LKNb%2FW5qxmZ23tXH2i6HAdiw7uvJA1D4IsB%2Bpsq3Fa3UqwSmYq%2B8A63bvZweI5XwgRMVf52laajye1XJYQ4co3%2BPXlJpNSEMhpBhFSM3TgvTDvw87JBjqkAURu%2BgoS0AoKT9AYEC5xOhxbHtQci3nldCOSPeBHtuuG4%2BKhIyKXffOq9du1%2Be6RgJTO0tiwPUhHf5fOpJUj6eZ9V6A%2Bwvvk0O7SSUbrrIF7wHFZajnUiKO7GZ0a%2B%2BAvwmR5Joyh2fB7cISXmlglPw30MdavV6R9ulRAKlXmrhM%2FWbP1cXRfkXMgXCs1QfwOB8%2BawsFxbVXapxHo%2FzfSDhP9uqQ%2B&X-Amz-Signature=a8813bab4427c7e731103b672f75513cc37d9d09f49b71b12dde3e10e78dc5df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2RPH6YA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1Xk8EVc5J3Y%2F4rOwdELMNVD9e3wAVsx%2F3W6rXhLkacAiEAt%2Fj%2F4lCGVz3Fqy9phny4xnV%2FLXsS4YqJbHkdBlm4Z7Yq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJfXXNh4ONHFNz%2BqaCrcA9eGflLNBWn7t%2BTU4nSLLjsKyFMyPOrqC53Fw%2Frr98tpGvnt9DuB0i98PsrTzghu5%2BqwNiUlKe44DCEphVNrR0WX4ctO%2Fh1G56oAk8VdJ9Q34A9EkG%2FWuCT%2FSgEdNpvt0c0Pfj8UB4EmXscwFNw5GE%2BfdQYaszt1KKlCq%2FwwKU2Iu5BKHmanHZXcx4pM1O6uhde1zViF%2FgOQrfPUMvcqUa3yjBuLAr2kdk1gelsWh5qpP%2F%2FgQI4ybo%2Fp76yIHyE4TXDn1rhcSLhc5s4noMzNDVdVbrMpeWTKxEtQtRrTtu8o1qoVq4eZbj2xrVBWAZ4KQKMB4xY7Gc2TPjEYonptSJs1m4BCBMoShN%2FyWuHvR04XthbbB2T0AS%2BoAq3p1BRk8fKZHaf1tCcQxEYeHmCx859%2F25JSfLVjAJNbxwQ%2BNEDZ8s%2BiNvR9ORYdT%2BpHg691sikGVI6fTVSvySDMSib3eL%2BDMhcHjF0%2FG%2BaWRMNPZp9aCNmrN9NUHcZm9ka5FROFFEzKBRz3%2Ba3S9teunfgOoJVYYJKybhkK8WaRVR50iAuyt5c9TReDrHSHterT3150IipdEiNQN6L7qlBPxS%2FjoIZDXKbuncMYLY%2F2hyXk%2BfAA%2FoThUJv936nW3TP%2FMNvDzskGOqUBClnlRNhGaFyPZU8LT3aYMrM%2BGlijnNQ%2FqiNC0r2Lq9EpMqjy8%2FkZfQ4sdONsryGqpUFqeb8g8Ki8If5A0K%2Bh54XFQmktPfmHd7Ki20O9fA472lrni3Q6BSKTvIrqPQa7wMQV%2Fk%2FqgQv%2FCl1R%2BNpW7eMDpBIHf43xT%2FaB%2F0JBQ2Bt%2FIY%2FuPOV1%2FEsJ74tBDD90W2BYXUPKQM25L2Rh%2FGCy3864FN2&X-Amz-Signature=b36f22156e93ce178bf849475472eaec7028adef8eee1715ec2b44cac2847315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

