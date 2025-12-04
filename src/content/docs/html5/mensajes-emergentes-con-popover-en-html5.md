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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UWYC45I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuu5mi4Xt1d2GFZthaqcO3mY7UzBaE%2Bu7zoFpRwnrfBQIhAKUgYcsVwIinlF69BO8YzO9hL1atHQUiaLhNpIg56pJKKv8DCE8QABoMNjM3NDIzMTgzODA1IgyzfnvudchWwGJ12HYq3AO68%2BSkGhXwwyuTPnCjHBRs0x%2BxLiiWLumpA03hRrQnjmRHG6sBeCV%2B3Yp6%2BwcwE40u87qCdlnTfYG2UOn364w5tEJvQiK63moO7vo05GuCczRoKRxODeQ6rQU5KlQV8PZFeKUFlF0N1CDwqPvDu44csEPcdVFFT4gZPvw2s51b%2BtHG%2BWbsD7BbP0LpOak6gmo3q2D4EhXf%2FmVvnXoA9unY4%2Bw1oPibwNCPeIqRy4gNQooycNYK9piLCV8LviYDoEmvKE8ec9DfEVnFiQRLJE1Oj1oe%2B7dN8qhnx0bsFHwiHAHKe9Ej3Z2N3wGn3X4VHYXtA4JKIvk21me5eiKeeYEb6YyohM5kyf04Cg18OINvpIKNivvMi07eNkrcZclxtrCN%2BLLghceDzQR%2BQYENfzxqbQOWL18nV%2BXhuYbn3341GGaEoa%2BX1cCVj54bTgmW1WdwnV3ZMPA3XjE9KkEPgtsMCBPclpaDFXuVXrSvvERNqL4%2F1q6Ge2jyKdGAyAqTOh9XkkLu9XDA3FgWFiIGYFiZSWw76bB%2FvsuzoQHeGhtc2Lyz7%2FwdsPjMvD2BRRzMv0o9BIZTZuJf%2BmwlxR1MafT7ZV6vW%2B%2BKDb8IEuvdTEWHTSm8mtGokwrJHU6sxDD%2Bi8jJBjqkATZsToMfAkRG8V%2BVYmK0oCLAFdZofS4glHiC%2Bg0j8Nops2pEfH8H7R%2B%2BM8%2FU34DFODTVeQx6vsz7p7%2FBxGnO%2FjujCj%2Bw3yiDh3OveVyueMUnZIvyeYGCzzjy1%2BluTxQmUVluCkqGwum0xnz731rG%2Bxr7sKDXNs1ybV1guLDJJbxpjUwoMcSMLdH8J1sj7BB3c4FtIqfrcXfyCEVRfYdnVnadwMJk&X-Amz-Signature=826e2d21b1cbc333bf3ed712fbe7302139f2ca3c29243c0d514c6f826274f7f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIHO2W4E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bdk%2FuhVyUhU%2BW3J2cTaInSAeqeAOzY%2FRNhxqMOQxKkwIhAJ5Nnu6iCO2urec9Jq3UWLm8y4ml%2BMuA3AVtiteHQE%2FiKv8DCE8QABoMNjM3NDIzMTgzODA1Igwp9iI7LyThAVQTdYAq3AN%2FH4vJpwp0JYXpDxnl9DnADB8OfkdQYCX8s3czd%2B4VxlJ0p4P%2FJuP4XQwiSJYA%2FMazs7%2B7FPUAEHnAAvnffMTsZC3LgR4HrEPFR%2BHuEfyxvnA184sjMxHbInOSXawImcECxtemZPiaVXS%2B6WmdaXKOQmEL%2B2IcGDynuocN6kdzptm2gm3qledyZ5RioVoRpbT9Yn9D64%2BTbmSuDo3KsIKjbvnte4okvXAC9g370NUrzBMhdO2CUE6rvyfVUY142s1KgxT5NB5a960N25B8OS%2FHRooSUaHkZajxJzKnCAvVwKTE%2BkXRSa3eg17Cp1ELEdBihMh4CAt%2B5lGdNdbaFaqtUnVGJjJZWjoj8Mm%2BciofapcWWx9j%2FYiQ1CUz0aH09LcGoGtUSDTLnwQlJx4l2vJ%2FED7ubT28acvIgHCsIIePAuEWJ2gH8WgTO%2Fr7mTLmK7i0pygNMNxLwdmU7tzpMPgwogyNxtksjy5jU1yNqGqJIGqNfpK4MN6AIbUNH6qSJTiURrxcDslDHiuc2eF%2BZykSdPWlITrnS9D1vKqP4%2BfJZeS1iXNyH4hzp3RpNbpH1dVIHFj4CND9SPVreV6QBxAZKtwjnP%2BfK%2BTIF6XuA7BCgZ7nVbIWpxWkwb%2FdfDCejMjJBjqkAVqex%2BM05CUjaT7iV28euFFXzHe1Z7CENfDBj8ndJiogvBoLCu5VOxMh%2BQ%2BRXWFdyyZjQzdHJFyWA4mXC4PfKzsATT3InMuTVzEQdYBBvC5oprwc8Fqn2Im1Tu03dAcRF67AkjiY%2BSmYOMecX9yKmQbcO2yM9W8pdZQztPcltNMmZhH6HlBeM7PDTgE%2FTTQ%2Btv5Y%2BhZCcZ6qLkOahIT3rnloDCyq&X-Amz-Signature=10252e7646cda03f5edae448e8e14699a03b77536179c3e15bfd04d4311332e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

