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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLJBZQHN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGigQFJZvhrBxnqqUcztU6SKw32Pfnuzu0jIFxxc6MOgIhAKb6x%2Bqy9o%2BXh07qKiX7LQy5JlF0QuMzUNqe9fd4Eu66Kv8DCE8QABoMNjM3NDIzMTgzODA1Igy76RUGJhVjw1yaA%2FIq3AMwXIaWuBOPmr0fp4oWVm69Xi6QM8kOdXqnvS1SeN2iItvyhabqSN%2F8ybGzblIuo%2FVT77w25xm7XoNvfLLR3vCbJW%2F8N9Be82E8OPZQo4RBTTbXfjtTflA3PMmIXCSM9Oorx8j%2FjEXs7v2n47UBToqJtRZs8%2FhaACNkeCV9n%2Bygx9p2CsVLNjIVcH3msq1vdHwU4PZ%2Ff9CkDZWnNGIShIonQxaq01BzPSz%2FJlZigOP05oYHUy16Q4ldkdN67gykATMw0MFktPJ1ihqKJzZI1OrctdAHTceuSl6vRPV73kwQb9bCw3yo4rNeOA5oDyIqtrPdTFT0sI6E3cnf4K4ISmVpffxkRAHOtBf0chExZUzmbsUN%2BfDI6UtRxmrVBNJwAj9GBAm4dhYWg3w03ecj5fVAGgeqf8XVab4EDKi6im1OL91G%2BWgK8bYHNT4hV8gP17L8uP%2FK4yw22cSrI2nnpNypi995o68KaVsdeKzevjMUka62iZYBNj%2BhWU%2BSZNUvhaWTYvtxz2pQkratGP3N0vEgnDL72NIRrm%2BgPz7dO%2Fed2K7fCwBV8R%2F0JVM7MdaNsrSZDmkSnRVhYd%2FCAhyu%2BGAYh4OlB72OYTvXEc0Pnu4uTfytETULF7fFu1U1%2BjD%2Fi8jJBjqkASC7ighg7DQZgC1RGLTeO506p28Ja%2FcUHbq1tmkmCuE7Yx2gKntTiZRLDFleMl1zZBp7zTwbh8ruGO5K8qBCXjcyH%2BV8st4xk6JDi%2BA9e3FgfXFajp9bp5QgySFWUruvRNjvpNAvkauxBYnIpz0AUga0Nkje%2Fd6OJN1VXSlCea%2FQtsIIvRtgf3Xv5T7UWhco5EzZjoFhQ4cehfBVKHlohRm2b3K2&X-Amz-Signature=480ecc00d5f444ad7cd693fe0cb2bb3148a18795ca1341721b2a8739ad734646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM44OPNQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfAmbiKn33rc3H0UwqjoRZgaRC2P0N18iWvuYXhBi6fgIhAP17S1V5n8B2HVdSFUX28JQ03%2FaArOtUHBqiwn%2BVGmZ5Kv8DCE8QABoMNjM3NDIzMTgzODA1IgxCkQ98I2uJ0KFqQNYq3APMgojNQunTuLIu3M91CQScGVHPI4ZOg0jp9HYld7GljYr5ab1pZ1p7YW0WqX7tMWU%2BIh%2FcHTyXMspqsZmNoOBhAm3kztxijafPXdQwTYH8hmzF1W%2FFh%2BKXL3%2By3j3k6LIMbwh943KbS%2BA2H26TlSsMYBQDY7HuH4Z2msSqoQB1n0B3r1HM9Whr9CJQxWQ5mD1EMPVaa4tFLHZfafe1BO%2F%2BnP9UWMAjyXlQmRch2LTq%2FBBHboeVZ%2FhEk5MxjesYLsw%2BmFTe%2FVzeSProahtFxOaNVT%2FudLcSxc4Vdy%2BO%2Bi%2Br0obO5SwTnISo9sMf1P3D2YrGjYDJDqQvqJYJBuOsedphMaX%2FHScMI6iXXP9gXSc6Ks5tmS95cuEKSyIg6B%2B7jUU2XTLv%2Fv5PRbtYc1pa6hPFrVqrxCxo6GTpeNWWksJ92vWfukh11HfUUeQ2%2F83Z9Jo%2F4IaYtJT7gFcGcGFw1vKxMsfAL5qoOFzplW1ErnWEgS6xab5WIf%2Bk4Xaqfo%2F1DLoipKNzp6dirxG2nPwwOpZuMXojyoz8A3Di4pjOeDOeA4ToQ5hC%2B%2Bp%2F1%2BPet7W6lg0xkaOYiFJnD02RMbRlw5ISy4zv3BbClEEsDBk3Hj9WSRCy3gZ4E0tptbGsNzCXjMjJBjqkAQgwb1weh0bS88lTlEw%2F3sHxI%2Bf71Rb5e3KZ1z0MGTT7pK2xqbkdpFocD5irwsEjXRtzI8rorMLozI8ipO%2BKltDiiv5mYb5R8z588L1towyKbrRBwGqShWz6P2G%2FjLsmMtS3%2BAWd%2BPqW5c7Oae12ZhGfhZkFH1iMGIcQoC4nrGOWQOTOuT2botCMTM6RjydHnzTqdUiiRKrq7s4ysr3J%2FJUr%2BrXX&X-Amz-Signature=3020a896d673b442f6580195da46d07676e3d6a6e06e26517acb53813da9c023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

