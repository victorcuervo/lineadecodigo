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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642YBYLC7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFG4a55ziIcpLqku6s3YXX8utyH2ayCF2tv2LM%2FRPobbAiBQU2L7Goi%2Fy80GLgHjwMEcvjTu%2B%2BlZoWbYQa07j1POoSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIvGwhpg%2BuHnWLmvfKtwDd%2F5hlzEJE%2B0pwTPZkk0ZwHKVxQrKDm8gbLcyfsOY%2BRni4%2FkLM%2F4P8ULB2qbGkCchW0O%2BHI8Z6Sr8s9ImPUeA%2BGBOVWZ29u0jhqsSnRacn1RlN5uCxG4TwbcPt%2BVZlwWyec6fTX2JheOSvTE1qFvy%2F6cMoNpk%2FacXJsmdDBeBWfr0I4Rz2lOl7riBtbS3P0EgGD%2F7t5FOC8kDfOVUrYV5H4I8fvhhBsivm5F2rFpt%2B1Cu7w%2BZhxBCpiPj32rrMqhvW9rJ4ZrGnL4%2B1w%2Bi%2Fy0He0uqYcqlmjweoPHJqzIH3Quy91Poe51fcro5AnJr3EFJ%2FX7UZ0RlLurvfVrGcYnN5OQmRysluyo0qbWxPc7lY11Ni2kZQqsJeu%2BwcHyIAxuRLBIxWiKMh6e1qjtGO2ZIFUSwik1utwBZ9clo7E4ZuZhAOFQDvGe18YTq9AsAiBopwFG0E%2BfL1LZ1zEbRWchqOpQyCLSSWGhD0pOiu%2FH4KRwQcvZFZVgvULafeWwOEIhtk6JbQs1zr%2B2CAWWmBzTvtWTJ7BPiq%2FQJg6EAckSVUwKLXXgQOduH98XQZcsLQZvQd7FdOlga825KqXU8VJcBuhSy4kGSkLtSh9H8AT%2FSmkK0rkIEgtYy5%2FH4tC8wwfTayQY6pgGEacs5Oin8EO9ciI5WlBuS7z2qsLJL38joY6THTFvD85vfD0YXJzBeDxfaEudJBEz5szrO8UZ9ETQq6YOXNTk6jLaAkdVatSl8v32WYXKXSypjTN%2B6H%2FQ%2Bs3NPkiliXmSxk0k48JwrTNUJjGxyCK2B5z6qsLVRRkscebHOuVTx76X%2BXaPIvn%2BcKIajUkPGMS4UzorhQs%2Fqb9OJE2bcqGx4%2B%2BT%2F%2BXlN&X-Amz-Signature=4955314d29a30d6e45c9ff3fe318f9363d1da93cb3369ae124cd24073c757a15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRYJ3M4H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsOhEjYwz5hDl4ftYAdO%2FxMFNURg9yE%2Bb6mdqA1IqkXAiBUN1pa8W4Yi2eSVOwt%2BgjU4MxSKsThPcsoLu64ygC6FiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhFoox6ZzD8LPMe%2B0KtwDot4H%2FEZ3Y8ZoSc%2FTYFHx0Gy0negjuPyeQ0dBGOVcoYbMXKENcGa9aXpo0EEQK4FMEAd1kiZb2584y8bCffr58GqKDOPWBvxHiuB0zE4d%2FJ5MxFh%2FY1XA3IHK8%2FCiS8h9m7S8aeEp0aX0MugNbHvh9i5wCj3HZ6vvXdcrAb2rRYXO2nfyV4Z1TD7F5KceXswDHGgqG4YtPAvaw2zNZg8nZVpmGMGpNMVEko9oamka6G1ougM%2FYQn7h%2BqtMPLJof5Lg9R61g%2FuSefCNuZKNjDdxMmhwdGEEWyCkQj5sTK9inBEFugVr37MkplSqF5y1BgBqqObH1DBlHNMmotwQ9zVIO72cNkyhvBrJ699nbLdoulSDQObjBqQv3FUFnLQibq47MDrAH0k3q3PEAaxC%2Feqk73z6E5me8%2Fnc9Jlvyb4VRkmgAnLQIIehByedTcayBdDAd3HvIP3%2BAnzHc9jQhSWmUXV%2BGKQJEYWIbJRUg1BovBfA4ym1zEYMr8VUuZlXUgiq6QWUQVNM2EOHvxbcSa3czDrt8Wkz1Ozs3VtOGaB3sRtH2%2B%2F3fonE8vzz%2F69M6iRzpk3nEi7WiHi%2FKb9RfarsLpNVLtm9b5RU24VKgwU3L427bSAKQ7IKQ7p6yswk%2FTayQY6pgGZBYmVqEtWV7Lp7IwEgpGEmG6b5WyqROronhpWQGOXajunq5CxCtL0Wj%2Bfnxf3psB2t8l1kxOmMPhLPmueq0FiVs1PKz9bZ8JfHFao%2FutL6LhkszsmkQPb0i70EbE8sQTWTE%2BseOJAyqDb8pOlI7lLN7fTSyLPUZXkrQLKmMwx9gAOGiyNh9zRJXDTLJqfMVE67OGodudKMgj3mZZR%2B4zo1B4nzxJO&X-Amz-Signature=5c66d6215b4e6a3c128b4260ea517d3eee4dfa1894e7f4a1009009d062102145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

