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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KPB44UX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BsKJBw8TSj7IwiePnSKqRE9OjviaHmpk1glSAuhs8QwIhAMuJV0DL0wFViL%2Fvj%2F9igzc8YSGr%2FmToSnc1d9PXxNPEKv8DCGAQABoMNjM3NDIzMTgzODA1IgzgbMi%2Fw9tUme4kNVoq3AN2WkG9geRuXHIdxkTOFg%2Byh%2BHZr6EN0RQ4utyXt8XonOFI7rY%2Fw4QpRvygW6FWyn89A7DthrmTrpz7c%2FqJYugeH7wkaaCwq0ZpQV9vUYkIvzNeSIEx6bxjN2ULzqrSEP%2FEawD5gcW530flzJ54Up6VS%2F7bcF9ZQI%2FUUB3sIJmK3KHV6ke4Iq15uNQ%2FJmTh%2B4QBO30kcxiPUCZXVkYgGAJ7BP7l1LUG48TJWdB7cJN8mF32vsWFA6od7KleKSWd3%2BeQKAfve%2FlEYAW8qvbW9YnCk0XQgSQqH%2FO3KEeyvjSQVUsnfDX4lR54xNIzOAqqhwh4T8ma0904xV83H28I0NLwPE97WG6yra2tEgjZ1GQANus6cp%2FxXyujzgGSVzeXPVQ6zHzLW0WfmYbz4ZGF3vbRN72sIPJxcid7BoRPcOcrQi%2Bsg3kY5dC%2Bz47cQQXvi%2BEsgAJIJkkPG1RgfWgEE5ebSyVO2pSMDhzpkQgV6qr8mXD0%2BXwvrV%2Fxai6VCZWwkJm3hIgcyVJy3MAR5KaXkw2ooC3RBYYwi8OohPV2tdQ2YmhPQngXi9MB2vIaxlgmBR5BHuF3h1%2BqkA56Q3puP98NV4f71x3LScGrEx%2FcxRU3ql%2FdLUsXM3NxlwwgKDD%2B6cvJBjqkAaJS6HWHLpBZqr2GC5pu0xx4Y5VfQzoHo1ZgGPz58PqsdKt4G9Rhy6HnwJe5nS8xGD2F78BHVULJF%2BA4%2FHdUaQhKgugo3TODc5E6hoMn6QkKZoQr6H4QbSxCJ5WET7%2BsphFqQuu%2Bhp7ZJAYGwHaraBMBlZBQftrsmZZ%2BPI%2BKGAmx%2Fh79kUaCyWY%2FK66qk9tvWHvXKi9e8EQmt67Uem9ndbHBtZue&X-Amz-Signature=05b4070e03613e16b210fe408a4e5480c66bb124086678d4a7c6970e7bfa0320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAMSCXIN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuh1U74ERZpkcB9uPf8snFOQGbb1K0VhVSlwqvwiATMAiEAoflAHMRgo2rsE1LYMaWmMpTV7ekQsFukwBDTM7nMBIAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP%2FJel%2BgYBPup7Ku3yrcA%2B7aPGLfublX8XYC73jVg9ALUJa8%2FESXzOM2%2FQm8naK7JXuU2hFs9JJzHYKipFNbi%2BgNacY%2BCJyDHf3KC12WMTkfjVsg4tsWGJ3qryd2%2BMT9RcPmayAlM1ueFSW3eQ98ow543u8vDHmMqguRltXOn%2Fp2VyjAxocRmzNHwa%2BbBkGgj45My7mYq0DqsdqmUzYDP6CPmr6b1rCl9bXSLgeSYn1xnBpAs0DOnba0%2Fgq%2BVMJ%2FYXuE%2Bbb7mHRA%2FCawI2YEQXn9mlXHEndnHrQAhnymVfwvfrCYkV6iCBSvCYDbKHF2S76yRVv1HB3Dc2wZVZzC7zt2BZe%2BnyooxRQB8bX5yk4LGNie2S7yaBlRyzM1a1lgZVXnw1RwzqAQDFWJ4vHCLl8FJPhZewgm1klw78ofh3gofA1erguNmgRTZJV3eEIJRpnuETy%2FZ1wY%2FyprHAZuXpmQEPl2jl3ILxNPRkTrLaAUCB5Ey2YsjUOvtBbHltszUAByVxihZL1Xl0upNTQvInZYM42aJ40iNLUjDOREn3yO2s1%2FgneMmxnumtX3sggxlmQK5NGJpu%2FVblB1VBd7lH064WXIriuzhl%2F8BcPfwahdROwcZv9l1qhCIqoS4HKrbRZ6CF30aOZHpozvMMb%2Fy8kGOqUBv6qf%2FjZCdFkqdo7byKPKDGUX48gMBbyOCphq0PKAO%2FqpenCH4zKUlq3sMpcmjK4be42euy4mG0e04ZUpQ%2FiPEJLbxbOIm5zHKm7zYgXZa1QQC%2Fr088wPl76M%2FBvzB%2BaLQ5C7Jl3sLS7ygJWVEXSbkLmpzS7jLZpLQOCErarQ%2FGGswF6bRy%2B%2BvP5hYjQDTFmMJyOXB2y04%2F%2F6RvAXQ1xIdXAaskDp&X-Amz-Signature=d186f8d92245c0035e535f9b8cbaa88a5305bf4b924b76e14cce102e2b5f1f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

