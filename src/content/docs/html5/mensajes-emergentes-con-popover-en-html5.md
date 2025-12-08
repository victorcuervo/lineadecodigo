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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQK4RHR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx9seYOcf7G8biaAs1V3b8a3Y5CaE20TMp1I1AEm6AaAIgV19tGwUwm58jMUageCJPxBY1n3x%2BBbev4QS23SG4nt8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIj11E6v8YJf9Qgj4SrcAw37mr7eClhzevXQczUIBN59IY9ITpcbK0sCKZA5il4DxLLuBxHYdN%2BB4wV8rPE1QTTBjTR4gb%2BlICGQ0uwaC9qE1cHEDD0Sy%2FE1psZ0dihAAEiQ6piX2ZOH2GChE4xeQEjnHMCmEQrX%2FD8xfu31bQxbKogQ3Y%2Be9FkogkAJs0k7K7Cs%2BHMKAdiSAas67SKpHTtNRRjq7SxCffciEcafz7cugel4b8K1wKhlS9SYzk1TFZHLSntCdVDWb6eEZmswveUxw8PvFepYLaYUDD8F7vHRFQ45N1QnTdzJeNs2VWCWVC53gVCFkX7oRxIKk0t5j4dxzo%2FTHpW1mxIselrd0lMthHVateX3SntPlHv7y21Xk3Zy8%2BPBhLAKZtWVO5B2DmxMjY5iAvH%2BiAErCw%2BgCOt2W5OJUZJ%2F%2Bg05HTGDYK7KqA6spOmm8LShOl9L4kmPUxP3FMTH4CsmcDvAEeeAkTqrE7%2FxwGTEfLveBy5AzJKh1Z6qw7FilMblw70vE%2FWUc8TFwcIhPT7lPDfgrCCFr1me7yuZ5PtUP7n89sJLTdMvzzlfH0fSwMeDmU4l9Vrj85KkRl58q8%2FlDxF5l9%2FKWgVD7xH0hGVQJDTt60QcNymUMUkiHvVypKXiY0MvMNWz3MkGOqUBHIIgymyuk29FrhKo9a%2FNvnPBsR7KgcR88wyjWbe2z1PiVgcLMqlBj7vSaYB6y7XOpNhJLU1fv0tYV0gXksKIzlP7SoY72r0N7xa9dXCrPRDw8M0WvCwioUdD5fYElpm3CF2k7BzNWbRB%2FgqjDzRSv64Db%2F4LaJNcbCFCU9pa2Qt5XnytWGCEqyv9ru17hM6uRWj4l1S4B%2F7sZb2sgHU9easI58jY&X-Amz-Signature=13f022587270a4e541dcbccf381ecd6f4d58e4aa8d05af5ad54302c462a0e6ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZOKA3DP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIYfiJosgb2MPED2gI%2FMvE5i5hvZK2fyYRsy0qTq7bbAiAOPEDQEaO3ph0RElLwmcD8Gtb6qoxpJOCyeXhSHqyV0iqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIKAlc7%2B7WR0gZ5XaKtwDl35cunGY0NAUsKpWMP9VByFnrHHapXHDOWFYsVsM%2BdDmlbHe1%2F%2FQ%2FEL0voLuyAgv4zFnb3GfO6bprFudnUbPGdhjVUq5SXNeTEhq0gd0R7S48WdAdHP6NiU4RwEH6YBl8%2BYNZYFksXE1aBNq4x9wvCiyKjGClKNFSZG12oA%2FXcwTiiWxXMUxFSdSKsDX3gvLY48rxLG72wqRYHvDCrGLNmvtzDKkRPB2R15qqkpDdAEraLI6tMGIDk3hYAr8q0%2FhCg%2FHdK7TwtzvDEL460b%2BGnqXDB5KnN5M8KOeMk7FgatRkqi513%2Bj1CnjcfMJHnVqnrkj2wuwcSQpeZYrB%2FN%2FmRqHpquybppA7%2B1xCVL9pe7C1vBvbB9V89tdw2YVmsbTLM0aiE%2BssKzSdsJShqv3rDaXeh9Hdq2JS8mVn2VbclPSjxJvGhCnYj9m1NlPn2c1SO3A1idddIXxtw2M8UFDymsR9%2FMgJETO1A36fTMac0vKvWX%2FChRXURe2Vcjq5kjkRMwqtDfQ3Wp5NmsHtnhVB3Zyqwa6z2G1Aj65K8AtKoU9CYiVPj%2BjC7OubSg3vWhSi0BHGjNRGVPoOUc41CyGUoz%2B9d93Xad8IV5Y0Lv7451iKUCsOMpwNuLzym8w27TcyQY6pgH0F9XbkgjHK7gnlX%2F3atRWJLhyQyTXC2etkaOTPN08xF8a2kNJJIAKb48It9xd%2F2Chkx%2Bs4wlCXpBa7kQKigRya8bc55pNji833wI5lA3Z%2BEddmalgJusigDTtH%2FbaJDyCGu2cFnzHExH9ctVkCMGcPujfP8Z1Vv9FCXQCKCnXVjzjPKJFLMj6A9aH02IuGe7uvwZ3cjDWUEN66o0vOvEic36vG7qM&X-Amz-Signature=bf95f47c9df7b61d31e773c3fc131f7487132bc651d37449f0d4cc04ab747417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

