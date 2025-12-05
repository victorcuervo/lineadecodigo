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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657H4AD7Y%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCz%2FhfxzN2tcmM57yDPBqtAb8pwBL2M2g%2B6Mx0P7uPiQIhAJIJHhnLWwnXK3%2BXCtnvd%2FEueK37tIaQzpMYaRXozlyxKv8DCFUQABoMNjM3NDIzMTgzODA1Igy6YRleWfNXwogHUbIq3ANMFvbNL1LnF7V1IIW5Izl%2FEs09WY8heVMNIvp%2FLzmBPmJT3s%2FmFunFHFpbr%2F8L%2F3x9ZiYCUgSK98Qid%2FCkvXyq1OPeE%2BRToT7GiCQnniEFYOxbuAZxzwHR9yP9eTLvVWjv77zy2Qm8JnGtmqUqYf29K7wwsc6c%2F3igueXJQwhAdeADtAhnfv57bwvVBtFFT1AKaElJAJfxLfhWfJMMg9IQV7gnP9sADuc5QfBrpmyz54OjACHWDw2DhEbupoX02OLMTKSTGnBJkBhFYx5zqlArOXt4Uzp8UNF3o1Zl6GqANuU409tmgKVkYUxpsmovq%2BWnWPmrCozMMlaa3tU89VVb4rRc8aFNq391CiwyuNLhgXCfRIVFw79TbL9XN3YrWGW%2FZcxwZx0bqdZdOO0EkQWzDzCW2YCw%2F4fM1zsP6tVgVB0%2B84cZ0X6gkMViz27zQ5JWeY0TdTQxoyqmx0O0m2pBzu2uyYCGQspcKpYqIcMa%2BeA1l0ftzZopaMn74x1PVD8BNXMnYOgvrsqaUTkm8Di21GH2GuHLcSDNAcvx9UJFU82ljhTfvKJr4YySNtCkAMIAiRjBG0RYiOV%2F9dxEGn5zuBfDat1yeUPyTETf%2FZJzSk9XswlXG7TxfZqixTDkssnJBjqkAS%2Bi8VcJDWghLe6Hic4CVAw2l%2FXzu3vGqCNDSSGat3wx4iTgLhaACr%2BZmghW8qDXSctcYY%2Fp%2BK3s08XmhSWOSDJGBj4YlmP2NAHEy%2FexJUCi4Qb5zsz1dzEPozlY5ypmN89aK4jlWttJqJOyIr1%2FwTr5iAFlqYlEVmMQZmcjLtWEEQ9c2j0zRobUj5yZhb64Quj5VgyW2ZrxzF8dTS2cn8j%2BGWY4&X-Amz-Signature=cce2025b71832c0a7271506f3e84871e79a07c1d665f748d29c8325a5b80ffe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7FMS5X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHmnO2Ys1WMkwvN%2BBdSroIeEDkNf58suTSf%2Fvuo6tRUAiBVFNuBSVM9RNl13kQ1JICn4JoNmDgfckhtKHCJrrgBpCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM2S%2BKY8DBOD69wpZvKtwD9onQlCW%2F1rPe%2FY7n%2B5sAPSBziZhtD1GVQdjDQ7g8i7I7mDuzcZ%2FJ4xxxmk2uFrQx1yKh9Dz8qc4hM8GeP60hwqcHorr%2FxtEdGwpHJI3Wb%2FYZRpMy4Hfus8MXhQxzRt%2FszZGf1pi0SWi%2FqoHv4fIgErJ%2BARCHn1PxDm2VSIAG9IUXgdouyhmVvElqU7aLOcc4O5OohwP6razD11sfdRJsAJWMj0AIsk39JV0SW9fk9qXCooBriNkcj%2B0QPsA4UBP7lOfgxtnTFETglSJe5%2FqNs6ixNSWOaprim71S10AEZ5IFdQwpMBVYpxHC6iOqjGy3z9IYkpZzf%2B0%2BWXzJlWEs6Kv82T0lahko52TEyZaAqeTIbeHyz8ctNP0fLXXNFkG%2Be1ohwNdbgjmVc41brqwbedGvQQIKvDRl%2F4Mh58Lq%2BKTIOpoCtzoZYoraNLr5mvjVx79iQnwtu8zEWI9PHdQjPi0w7zpo7MCbjl%2FeC47EYqfgLs6khSXOj4LyG1GX2pbTckiNw7tEfgezBIx90OW0OfPGg%2BPUaTtHyRpUAeJ1cN%2Bs4J4ZtLvJpZdYCREfDN7a15dMHCOI%2FFLkCm5ySQI%2FtdPq%2BRh9oZwU0xjKE2MdHaDj4rYR2doQDA%2Bn0Uow2qrJyQY6pgFC4k5HxWJXY5fXGmOYsqpciQxFSv3HvapmWk34%2FY6G9Kr5aOvObeohEpbBy0bNWI8Jb5ILkKzqCeLX8Lw%2BfVeBJxLOAJwg0l9U55Dg7mfPhB5dC4FmSqY%2FyCQzHtdttPatS6fbJ0qYLgpy%2F9Dcy296axROqb5P4aUtqKdrMPYOq3KcFtQBL3F2BGGs6yIQxqL0ibZf4hwQ7HjJMb1znQDwOeUB0e6T&X-Amz-Signature=d60cf3cd4f09bed362f41474c412ec0415f613fbbee5f267974ce5c52cefc2a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

