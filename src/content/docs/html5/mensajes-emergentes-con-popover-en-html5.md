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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV3J6MVH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDc9g4se6kuoZc6Ye1FLtvIAXe%2FaYV1ch%2BAk0r8TU0VbAiAK6irqQbEgg%2FrQrBxyy6NYtqL0i%2FVCfo8dJ4Lys%2FcpCiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMstcxZb7C%2B5RCd7xCKtwDagMSRlwFHhUTyEIaEcLnGDvYjwjD2v4YazEbsYasrNbQt%2BmQAknAfGrqqTBgRkGCWwH7ichnSc4OELudvf9QzYf3UoXA2h59AU%2FkYSJdOtf7ZzxcgN4KyJVWTAk8XBvgOx6yPN3uKZRaPTgh5X8UOrdxbDMxJ3jRZkBoVqspM5f51r0Lut2wOOMMtg8RvXdMQNCs2h5dh9njwdm2OygYTRsYWd2oB8%2Bi%2BN2COT40dO%2FuVJFUVazYtrU9XBK2DQpgmN8FHLaUSc4czopWnrbs%2B3%2Fh4L5Ei6lddJ9jQEKNTcAmuJpyhHKBu%2BE5lIY0AfMknK2uPlqW7pM32mpMRgapCUdMI9B37QiO60sAjQFkuhymzVyBBfJSN0Q0iFaw%2BBqvAUGMfEbrXnDpzDrswHc4BykPlvfxeFvBtTRwLwlZtAgMOX7f89SWTJnlNiYDm9hqq2yQWIV%2F4qjk9bAlVtBARn5SCsZOhivjZKO5k2w1adrJ%2FB2IanlBrMrxsmf4Pfs%2FXue8H6shE82C%2B0cQqAnW256iJel45N7c0M3Iv1y9ZBwH%2FTb241hcYsUNtyUdFV7JwwMALgju13lg5n%2F%2FnFhilCiDK7e4komaXCsdXe5sZ%2FQ6M5%2BtdCmj7DbLANIwsMjXyQY6pgE3B23O0m3Dnt72lam3eO9JDzx%2FyoZqsYKXPv9HD3Usl3HEGQ2436wBHACkS8RkyB0jkTxoNhI%2BtqUWu9ujldl8tXDOhYrRi9jkh6YSAzIGKwlR0satl9G04nsMYgU1u2YBdrSpkyX7bOTUrb%2Fbz1%2BezS24F%2F57J026rjjOyyHrdOkhVLtQMXfiGyOF%2BemDp8c3ZCIzhYtdn4IutIG5MaTUy%2F1sZMhc&X-Amz-Signature=e1b9ceb27154622232e78edf0bb58f78637d44eabc8aca0db67ac9a671cfb1b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EGFG3RY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDurpFZrYXGJw3iex3HjzlcNAnGQZ8AzoKsz2d%2B7V%2FoswIhAJ9A38xYY5eABG0HbWB%2B2vDEttMn5Hhqr3RYSyZb1BzwKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMR93TqcC4jGGPFHIq3ANscQ55yqrtsQCArt3wTvkQDvqZPLvPe2tuV82H4JeDwxobAIR7l3NlFQ4mQOTCYjnHhF0%2BWaMtT8ZEaKXVm7mBifpoRa4OkqAOFibdyzKmJ2Yqusl9Tdk%2BNemvTR7dGl6kmEnCfI1N7omd2vrkZ7p2jZ2n8AkuE0KNJjLYpPzjo3fW0vU%2FOwwE2BY9gMJUNLVTjMg%2FVVsndZ2RLMXw5aey4m7FtVQdCO7ODvuvEyDK125jIMHo4Qio7NBrRzUeUbfc8umZ5SKWUHmsZB6WJQclGOMZHVLMlDPUYR93a733l2JjksLpTAQsySJtvzHzkB%2FADo0fbevNekTMb%2FkDMiah8nsmbo6xuz%2Bnbs3qLP2bPfmorKQfbYR1PRHiKISoUD9qfqeHztKT%2F6OpYFDExMEnKRrG6PAXEAShXNHwXRwcUBIhgZiAMUsurYVtz7306sGOrG6e3ZeGuU%2B6g%2B7%2FOW5q2L%2BaQL8gkAyHgesD2HWR0C2nzuTiTqMRaFMYEBy6Nt0sEBom9eg2sYhZows4DQWcl%2FAtSN%2B5d5WubatotY3CTF1jfxPcayIPocPfspIPyOLSxei8SVd8FSAglgF%2B%2Bwf1xEjo%2FvuwD8dKfzrL6bf9e6x%2FFJ4jZdFVka%2BQLjCAyNfJBjqkASr8%2FPAQlG8yg%2Fx5bXgID5k8KaWZ5qdMtnGGbMErX61446GC1PFhHHDdtZGkGuMyYB11l6%2BbtiTl5cwT69Ceu6EIdCsYkbZGd180MYfEGDKwcIHvOFs2DaWNtiuRr0q0XwntqDJsuTjt2PxRhKDa%2BhSjXS0OJ%2FrDXcEeo%2BiJTsSplFuUFSuM%2BzQo73E5dLKhdBXOx2%2FyE4Zpz4FEwsAUYB07gIY2&X-Amz-Signature=09a4a82e892424c73711ae46c69af2b52a938da20b61a412bdd20c88815baa6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

