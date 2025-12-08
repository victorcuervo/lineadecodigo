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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GWRG64S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCczuyi8TQkKCDshonhQayjTMh9ZUjWupvVWuT5c5ovsQIhAKkbTClli%2B7Eg8L84LVgg9MSpkIaRhPdYAdgcygf1RyPKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuCzvFpwFqNNcJ%2Fo0q3AMjdIBq%2BP8yODGCkBmMe5Uhkt2HUIbue%2BVQ4L1Wsi5QUCrlRu%2Bp4VY%2FbJ8iZY8lNyYp21blUcMiiFExGzgK2uAJ6iZZfevP2gb3aAYT%2BJn14v6k66lKMFVW7dgna3mF5nyhGHiwgIfZN8RzDmhZkoeFeiOzy4endnCtACEFK1mz3RnZY0x73BdFoSebRl6Ov7Zn1MaEv9YHB%2B4jPf9DHvS%2FKbYS5%2BvIDlFFlkER4bViooS04OcID%2Fl0X325RRsCIBeOidj9wrkGA9DFPXIGUWtjPj%2F7JC3TJircWgvd4UmFr3j0NfJTSo8QyuvbgKW3LFnCS1s1Gi2L3chON4W74cw%2FgFrH8HI2ioqcs9a%2FwwL2KIzVNgpjN4NWbyB3Uhjk4ka3Bu1PYg8p3E8eVRDVX%2FEkqAJ%2BZOx3Q6opj51gJf1me4qNicB4fgcJ%2F%2FNiJ00h3L4nbuS4f%2FU06QctTTAGKyXmuUu9rgl1LqypvRRAzs8uZ1ydNG8QmK4E1Z9MIuMm%2FKKDFwZ9iM0hHm6aIQVPnV6ZR1Zb24dUzK1u%2B5lf2%2FpFf%2BcVIqCyIjiu0sW8Z3BYal96S1KtAecoVlQqpLY59o7uV3y%2BSvzyG8I8hR%2BAcPvViHv24O9JU7Dl9Sx3jzC87dnJBjqkAfdOSUKquzXM5YhjanFx0XTJBNsrfUa%2B35ldDmGcDgX%2Bl5nONd8nZ9YKboqRzaQTgBWdAA0m8MqLL6%2FiK0NZrsjvIi2c4QMoImZuDDVYr4ebIefEfB2kat5TOXFnnTl4yVz4IqXLZ45f97Sl8gFcZ7x%2FajW3qNSm026GJsC57F1zc0nuH2rQ0PtEyCdxAaXhxzPFJiYew6XOVPSTNHgubGJ9zzVo&X-Amz-Signature=06ab50ae06eef307f747c818786ddb463de3ed19ae68b2e028278860a56d8deb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHUWO6GC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF17Jgg5gecRFaJUKd9D5JeYVqLWQSw34SxtkZYzqO2QAiEAgqyMOD5yAc9qj9RHypQqjJ%2Bcs8dGUB80yKqUIzSow70qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONni6va2gh9c2vQwCrcAyt9Vi3iNHUe%2FUpa%2BUNXapfcIWy8hc9rBGchow0q%2Be5eA48hrBJq5WWjaC9WQWzius%2B%2FwxAwqkqbTeF1G6g4Io3MKo7IEgSgwYVWxRBXesxEF8Dw%2B0N4RqnBJ%2F4A7CLWPfmKHCOocM9Fradn8HBt%2F4%2BcCCBGZPVDwl0Uat%2BfB%2F1HBrFwMwG4yJgYg9FncFUKjljxxBq4nCfGOFDW2wrcL5rash9MVYVYCLwokT5STMW99ssd1NVGEdu4EdxCV7dsviXVK0H2w44epb3gdkTwc8usztYcHSGPjfcfjDsN5Ew6lqf0XY%2FZSuXvQu%2Bh5yxufNmwmMkx6SMUL8ybi%2Fj3y3SVTbQr1p%2FXLB27%2FZXViTJYcpBRBQjL7w1hX%2B%2F%2BewpXkO0HRs50gY6L3tOJaIq8R%2Bfm97GmQZLVQK%2BtjUbYW4KENddTj%2BfD7HbudeNMDrKvVr3WiBa2ByErLp7aF08C1S2RbjOW0Jt8OWUSWIpt9aX8e0jgNnrw49zL1cOpEtvBLmSNtMHBSk1nGKu2t5MvpyYOvN0T%2Fx0oEiOcIuMU6trcziyTY39kc1w8B3wuHzdzepCUieTU4WRnVf6prSEN3p3szG%2FEQiHAVAa7KSw4OefPrSVgZBfe6ikANi%2FJMP%2Ft2ckGOqUBDMR7PX6hkSTs1T7rqYgyk6XRxQ2iUz4H8348vTSS4md3i6YQHZ48ccBzUmsvbRKU67iv%2FVSyZ2msCP8y9p1UWMsDTUP1nREZOdXWanpNx%2FROLPkrye5P0HBG08NaRbKmuczU2TdkrGz6YbzQrbwtESCHSB5HwfO9jX%2BW2GId0tF%2BRCenO0VlQ5g%2Fo%2BluQ5R4yekBee7noTQ3XS%2Be109hlXPorVjU&X-Amz-Signature=3ae766696e1602c97b4a40ed2a4e9ce0f8d14ddcf35d9c4554a205167415f7d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

