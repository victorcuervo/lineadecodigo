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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YN2FWOZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDY37nqEocZrIAO6xFP5jMfY8GA%2F80cI31bJJbJFVZd%2FgIhAMsPKlUrPbN%2BmeU5s6mPpByZNpeRJYYlV2t4SngwLSBWKv8DCD0QABoMNjM3NDIzMTgzODA1IgzmXpTRGsJHXRX9Uu4q3AM4Sytw2LqVg49AARE6szkog3MAXgeoLupPRC%2B39kv8MxwZLA%2ByTwwMIjrlLVObfkrpWdyCaDy8mEOMj4mniTC61odESG4lGu03Qnlzj7aF5nEHxfORZPdU%2BsLnJbr0RxdoxE4OknBkKjwvS%2FH3mFqJlBkNCEkHWloI8HTS2x3H1gjjwFMx%2FCEKfKbSZmC%2Fh4OuNcoTSSev2%2BgzA%2FBwjTca5uEkkAqqCFI%2BuufRNs1MODjrdWouKq3y6WFO7NO2T1fTigkRGlalYeWNk47cZKACSDUUkMIlygsYhlhxTRQ9HXTiZ8RcewyOjUq6Gx4k4uVOl1%2FfWYNxLqkXPeVgaho16DUpkvxF3BtB2Pi9RHoKah1aoKGuWMWu4Ib%2BwFuF1gFARJc6OneL5PW1X0f20aueNNNlElNbmpBOlB51HL%2FqIkcsgId4G0bTMCVzRk0WUFDqyI43cy2Fnjb1uanLZE5YJILAc4Rh4PxwLxY7gFr4YL1xWuK1ClzimfRqZhRjfVivzCgTzO%2BR%2BpFN71v0wO%2Bu3cj3l707Ap%2FKkiqrMzaXPt4K4cJwncJw3pOkh%2FkHePZ73NEnQ88%2F0mvU9NR%2FpY%2BmanGgU4MQV73d%2F2lGpx2iWQ43K2MUVxKv2fxqVjCzkMTJBjqkAQu0bkps84KCqo31fU4ai1Hj26rgGrb5YeE3JCVo146Ddfrhga4r7Y%2FHzYdyBVRRws023nmD5SaQIubL3AvBj6cddlIETdEn1Li%2FJusO0KB6bny%2B4u3%2FWbl6OonNobzAVYO4J%2FPaUoDMZ7ObMoVmw8t5lrXLCw9ycQ2U0aJBbkDlnllnoZ3h3kgz68UIurWiLCyugLqVyiG%2BWDbxVV1SERXpa0Pd&X-Amz-Signature=9c04eb5cba854658d6d5836fd0b1da19d9f52b1c7bd9d2c364f9cdd7f0bc9164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVDWE7PY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIB4yzgqwhBfpSD1lEZaKirYo1EO1uOM1V1iK%2BUHhd02ZAiArn1gbIqxuKpeI%2Fr0cI4qQZ3yneuFerZ8%2BM%2BC%2FQ8Ad2Cr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMrrvNXP6ALr1egCk1KtwD0C5WovUVZe2L7CTZX1PfuUFiKxvWftui61HqGmW9A2T9xhry0q1wYspHwygmRdKaA1sVjJnJJ65ajdGWBxC188sD0sPaZpVT2lRKpdlK1uuNDLT4GC%2B%2Bq%2FYBVmc7Rq%2BhnlVXLH9ByJZBuBOx0lZ1b7z6%2FgoM3%2BVZBM8TjK9tD4WDt8YvN46JnRj10H16o4fZYB96BSlUgwp6vZU0TFR%2BLFeqH39JZjiPdcp1H0Vx8Ggrp7OfgFIPBVhRLKeBxK4OEKBp6tEm7nqZeeZierdFUpmlkELTr1SRYQHWh3PmNDC8OiH7PrVoaCnx4GJjeBVYpJZwTtiDqf6metIzMGDCQb4oHCsZT3w4IqH%2BYMkVYouSV8T8jFgAfl9b6RcL30uDKdWSkzD7Wgm4cnf2TQFXd2ocLBPKzWWg7bnlqlhijoYIVFdwaX00s6MBeC%2FSAJt7eBtin8%2FyGKMYzOeDAhjWvXyKqz7%2BDBe8lvbKd%2F8fmIxij7%2BAwguiEdgWCEXiipoa4g6hibf6jK3nWVooHl5vFWn%2FPCTZ5MPb7RI%2FhITkJ9OLQfU1HcUcpscfDTyNfK6em08FyB6MEmq0uKtoPEjETAN%2BucgCJLBjzgKqbLs%2F%2BrVfIrTpLpbOkrYnXxowipDEyQY6pgGXy3wbuRZjqUX2K4fWYUpuudaYtfBdx%2B2h3YBtOHYD5yfYC4MPbjFSWHY4jj%2BwroTDe6OR1PnklWcgbIngmiB6Q%2FrhAa%2FGQB8KPcbBygk%2Bm62osgWs1ktsuQ2lJkIKrUw83Re%2B3VByHQqepSC%2FfnQCPNn3%2FrpVPKl4J4xXv2H6sWwXcWu1NN%2BEH7zxBUmmu%2FcbC2HRABOy7bvwAlWR0LtpyTINe6it&X-Amz-Signature=0b2b9f4fd378ab91b4009a19e210b3610303d80b2de6452cad1910543ec9b784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

