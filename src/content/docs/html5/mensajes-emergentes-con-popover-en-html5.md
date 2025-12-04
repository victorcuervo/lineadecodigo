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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REVOKHNY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQD6MPu%2FXQQhnxQA3QiEzelZGtIyBHqKCnnQXOH1Mivk0QIhAMyKpGsaSws0R9OJnrY6jjWR9tijd50d6VRNU8XtmY%2FqKv8DCDwQABoMNjM3NDIzMTgzODA1Igw51MI%2BhXU5pFfl6Nkq3AMpYwJ0zwHJgAEN57PfCG7Ku6VhefyJefdbE86o%2BIE%2FFxW2OvEfeMwXCdITQpQeIQNiyDwDKKKV53yAHeTi5flHMdWEu%2F8mrS8FHSFsN2aPii7W9FZZ0axAHUbkAgg8Q0R7PavnFX7woSx%2BzZW0EPmW9kLDMngia59Se09OA%2BDynfEoYaOfGh3Yyy12hwwEM0NbmixtynBzLzjkr4dO9ufNY8HMAmVRQoiI1A1A0gQ5K5DUca%2FUVbhyh%2Fe5TUxC68NPUbjGOXNjMm%2B9aJm5%2BqK9Hg53hKUuRPm8tgf3w2d%2BGCR3V%2FaoZ1JxIwHxr43l%2F%2BWh7UdeIg9wx3NbgtdpHSCIMhr6EAPTSbP32wf%2B0i4DACEZf4iAULEw%2BGEHwVFjO2el0qoV4oaVhVTN1xnR0kE4RvWd6FFPJAS9eIePYY38fFFA9Nj4RxfoQE52CWKhrTobJIN3%2FTOshMEm7Tay5RMtW3Bdc5%2B9w%2B4FCdla%2B6yFcqsV15baWitEGYEVFgCg9oYR14O0J3JHNomFqwBCX1LCCMksoIhmWY%2BAiSUW%2BTDhWDFjDbOsqIjLDAlNXqsLiyfQW6JmlCT3F0oqDdnT%2BkOcsYpQzG1%2F5r4alSyeA289hHRS88Dm15RHb1pZWDDO8sPJBjqkAYVXffdga%2BIAsmF9L8iPZHd8Q9G%2B4wLUTAOIioSi32K1kK0N6FufLc6dA8AhaS1nnOM3YrYcuj0S7U2YjlhED%2BMK%2FzLQcRitXbjkHQ8GCpCILlIbHkboEqApTm%2F6GfIzAdkY4cnsOQSJDHgka9O19I7kxVntDAj49AyKKU4OR%2BaWOI0Phc951R6zkEu1QQAWKwiaB5JtC8OoU4Zckp5txvM%2BXwCH&X-Amz-Signature=7eda2af4bf3a1a4d360b06856ae6f4c3debc8866d9f1a9b12c663a5389701249&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UXSV6YW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIEy9DMvJ0Fh1TMjVwwNIOFPFp6jpnRNWisXfE0cY7EBXAiA51p0k9qYfHt%2BYXJofUy9OAUeNg4QDfg6AQGQctYTM9Sr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM3f1%2FL0EByO%2FDaHiPKtwD8p7exss6T6kLalOtEhMMeGIGF738cEFT%2BtCABe81zukVbEIfVVHit4HhyJZetQXM0foIZXW5s4QoioxMndCrUhnta4J%2FHNti4PuIhQSZ44tzfcnpd7YkHnRka%2BEEMJppbMGavMqT4nNIgDAOaT0aek9519GRYcZkxIRoAYg1BTDIVhwg5%2B%2FHVXDdE2q2byVR2CNpBVn3sqpngbE14aCmZssyzT6wxICfcIV8lCYQnXraNh9xCiWZeRKRTae2woA3DZt5ECmnOrN6LF%2Bdb7jNL19B95esMsCX%2BIqLnjSZT182Y2K5frdWE%2B8Ouj%2BB1U0iR9grCbZFrTVQ3NQClcfayU3d1fm9do9%2FyQISxEp9A32LlD7gav3pNbrCtS0v9cGrfwmdrHoNKPVUAnjbjIWkaPW3NUkb3%2F5BSJ4HDaKcuPRWPBtN03D%2BGLn6SBPpiaOignBNYjnLAK1lOOeS9ZL%2Brt5twXIELw6x08eH4Xwyku1KwFwiY9%2BxgKaF5tlqlFnvzE9Z%2F%2Fje4LWIj3rftOJai5j40Yz3novzWXsbj6lFv%2B%2FwAyEV22o7llUWNINcbbp9H0VuNE3eNMRuOGzL8cXQ9prGB4weQm4WpwWR%2F0htqkNQ8wsBLiT1FlpGHdQwxfPDyQY6pgFBrCHXO4QqMwJ2lfbyuoDNJZjkfXOJRaJbQB%2Bf19oUIXQ2p0Ak2ezzHK757XAWSFaDycetQHQ6m721ZS2jKbbMhJ%2B1Yaz4U2ujj4MLdJ8hHHqHXDu4AXF3STMLol2YrsCxT6k2Ehi8I%2Bs6nYmzecQidd0hOdlkfT6rLLDHxcF9vO4VbnL8whhPYYWo2f%2F5rxrEpjf3JpKQB2ZY4WBkD%2B5oGf%2BMLJAj&X-Amz-Signature=9ac089787872ac4af3d7295ed8d3b467ca7edbd78c0dd69e9238af162b252377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

