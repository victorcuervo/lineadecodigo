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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663LTXE63%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLaSLnvDjDZYoPmEwl90fDmsWsMG%2FqmcplEGoJV2tKdQIgVsXqfj3jUJSnX3y9jTJZjEjyHMNpbE1xag9VbDmPjyEqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzanYdZ3wUh8m0gVCrcA18KnQ6PBQm2u3zulVtqCTkPTcI%2BZ4lSW8Vi2hgxTWdJxKSsP6WFOOM3EFuz4glYmZzG6mCd37gP4P%2B%2FEUv2KoNiwTEhMCDHvjq%2BB1UMTo%2BBJDHKCiuBDG2A7lycOw4sSKigOVCqXXa6M55qUxxfDCCP8NZvwt8XiJUxFi1V6rKya329kDOIeMn9qZ%2BQ3OkXkIZ3SgMNjRXpAenKxXiJ6M1kdPx7HrLX7h%2BiFz%2FDgU3wbfPkx1%2FS73jqBmGQS8IehOfWCtKOufEnnZyEk%2FsPFi1z423Sip46%2FjXp7XLYD7tuUYQR9SYul6DODuMVwNaEbHRMwRDIPxaWtkOktJLx05rBgyoKnd62YG96aoXBw%2Bb5o35C2Ji5LBzStRPgxkznaagcFWAzbdqMWfnnLGmSC7RT7QpphM0bkAIxIpnhQxdFq1EoZQk8kHg7sGeoFZiE84VkjvX5GgnTxW62kLZ6rH5Dd7aHxjavMMo9%2F%2Bc5Ot0oUxivgvgaopJQ0X1J2nOvYo2F03wFPLDEgDbsyYM3QlV3ItEw6O%2FKDhu8tOoN7uBECzbtOd1ARouDJkQYSP8bxQG8CrRBtvAMyyUvABuUvW2efWhE41nZajngtVMbzJldGxRY5g6qOi%2BYZs21MIqI38kGOqUB7C2Tg5UO%2FQqKMTyYDoNhyADmbYks8ZdiemKNW6eoraHRzz%2B9tX%2B2Ykb%2F9feIbBT6VRGrjMksdP%2Fkqd8Gu454Wff4cp9yDvPj0oFMIAxu5rGCAKa8OFHCJI%2Bvl4NO244fYqoJRbIYzOdMjq4OESE7BX3BYaCQf1CPdMXDYEheLRYOUBmGqfWO8rmDJcMvNvmlRs8Br6nL%2FSuvHv7Y9sxkRBQPGoXJ&X-Amz-Signature=0e2989bf1497d64e82d51dda92dd59f7cd1e61ec4a6186c0b842e424529019ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY5PTUMO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYk3jznKwlk1RlUcyWVhZLzLM2y60KV3yc0EFifxu3uAiEAzHGuwMOnSgF8BqiyrmNDUTqdJqQRdQzY%2FTpi%2BhqjEsYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFT%2F2Qtm5CDvkh9JKCrcA3h1jXKs2Uj8%2Ba4ekxlwhcCnzm8p%2FgsF70UqpEIGr2U4es0D0h42GnRcmtdKnzyfmvcuT30kAZNAaEdmkMxrkqIujyakj0b8DHF9UZpJOS0l69FNG477j5Po54op%2F224hc%2BJL7a5BNS4uZmvMrhcCG5GSykT6bSuBIw80JaFiVtZ98UQqasrXZDkb1rL277fH5a%2FK94jpO0cYblhEJe3G%2FOexTy%2FytJceO5XV1RjSrQ8rUp1O%2B%2F%2Fhr6ih%2FbztN2%2BHiiCC6iLg4JSv7%2FNY4c4JSha45fKzSLe71dQHwPuXjLNO8lHLU0ISOxnr%2B6FQEVR4w8d4h0Wv%2Fw5iHDjB%2FhuMUyVuW7UQtltp%2BA5ySopEEyVgAweI7fw1S%2B7IZ10dcLo%2FfnktLYiawyGgaimFbI8bq3uMzo1VdwlAA4ixvUlKVSuqDQdPyVNSYznwIRvTkCS8zt1T8UKhxq8vdDPKjLJqDigMp3uTVVQZFnPdbqyBs6FPuTN8VBamsbSEHr%2BrdBp4jISXOVgOC6%2FsuKNY33jw%2Bam9gl8%2Fw5V6MOt2T3Xf8loaUSua1Wt7%2B4%2FP4vW9RmVuz7nZ9RMCdm7GtOzQk%2FU8YYka5yL%2FDRUSA6zoGJkgrFaNZ8FppZOu5H1eOHdMJeH38kGOqUBWy9mpVNepLerFeaVDXIy37PZ7hEBslgqzttQ4YxgLUbhnYvEg96n2KCT1AKghPok%2BXxbXleX9Xpqf7bNAnEkKoiODz8aPd9UrMh7fWwmS6SqPPCG9wG%2Fa7ErzY%2BDfq3oJDjZ6Q7rd1RBM5rZLXG%2B7vdu8%2FIzYlL6EG%2F4NIyr4HxwYDLbTOQ1ghsehyaMwbhBaR7v8fC%2FhpcXJeS9fFZeahj7vlm9&X-Amz-Signature=7068874390c37bff500058553c3f5e545539d3f0a7361db9c5864503a4607fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

