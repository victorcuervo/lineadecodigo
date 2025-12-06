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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GMNWPA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3%2FZ%2FeQXrjoJPL45KT6grgkR0cphN4SnfXwR9xoG1NlAiEAg6DG0GQn2hW3Ov5mQSmmQYvJ4MVb58FPr3akqKoDeC4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCmnuSz5xZEyQfQGDSrcAyLeghoRyJYxO7%2FB21SELsyBIoAHRm2aom6qJMPPT6FKHLt5Eld2AHT2jLJojQvodgS1goyHTrHKGELaCP1QywZJ9i7tHRGzB4vjvHFOmniR%2FNaSSHVoUFeam%2FeEW5azBjQm6Zl0ydCRTjKwKQ63NbmEvXvBmisDalqcSMSrf6aOkhYZ%2B%2B2T0VKK0oZ8uGxuWaKkW54io5pyGxoPdOgeLrjR6TzDI73%2FbkByViQvbURZ4bMMAdSX9nuHmjPcZsbno3pDNTahyk2mGyRRPBY7eeP7t%2BBsAs%2Bh665Y5jKXPYp6RsxngykbhqxySEpAc95cjr0KJ8e6NfO86K7jwa7erazYIWWf0cwRm51IPkL6VUhwPxHRWelpjFez3aVXOvk8PFjEGHZGSmMv5cFzCc9xDV0S9qxP5FxXCajDaIvRhpIB8m2P4s4FM88aftsw%2FqkJMsN02GLqHidwCozfTctfKnxRd6M8G4kATvO0c9h%2BLqAGni3ExXi7VLkpyL%2FrHhODEDklBFr13%2FclRDw4cRgUEeFN%2BjhauWQH%2BgEXmkYKoS6lyGbCkz3cvUbo04RgW%2Bk80%2Fx2OGrAZ2RSjGf4hIa7x4fOLv9qm6dA0zPAuiMshVuC55sjl3hKrhk451dtMNem0MkGOqUBmFDDr6kuPoVa95AUDthG%2BHwxEAE1omqPdqYFlbtB4xRQ4Su0QFxsfYAFLR1InFKi65bCTLKlRzq%2F5QrNOJMGO0KCKtc9XfB%2FopD0eNYT82P4C8ik5Apex0%2Fp5MscgN67yp7uDW%2FEphJNByVrhxMt6TTHNeT8t8ntqpbciJVy0bsc6mNqb%2FPfbo7Ga5%2BlXzZ3fl%2FeoYqTuVUPIdyDAKmUodsAgc80&X-Amz-Signature=fd3ec357526616ad8dda2d7c992f3b9a4fbdd0f642e248c73d4559637a84f943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666SOVNT4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBD85EsBFZrf6yfUNICrb%2FAwLt7AKxJ76AS%2FllWSeMdAiEAiPLGbBMfj%2Br4cVOVdF5WM4aRnUQ9%2B1TiOXvDwldfjz0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBdM2xT44iON5D2f4yrcA3jkjVsO4EXrnATG6BY%2BjjfeRGLyIgbK20EvLHPIx6RFE6Ft2mFfBxj8MwsicOJXpDVkBnH7M5WG2XUr8eBVYbJ5KDc3%2Bde%2B5jgM2BkepdSeu8Xde8f0uObeOsUPxpO6ZK%2BL0nl0LrzpW2xAEIKDFJ%2F%2BQbR1pH8FD4XVJdypxsaL5zHQ82DVVxDxff7psShlXRBqRHQpTfWd%2FhYusSaLQGRn3E%2FBlcPZYYy5ch68Lrnr5LBhgNCPNjXMV64VPhGpCw0J5XNCPXb6kwPIFzWX%2BERHrNsiKyJlVRIEO74wzEmlzVpCpowBfK9P5roGwgaFOBjBtT6E%2Byc2Yd7meYigvQkTngqMCmX5VxlSQyu1YAw3CqMtwiGjz17fMEp9jOA%2BYT3Rjz6w%2FdVnrFVJdbJG4kSP6R6jlRh%2FndQqw5g0SaQBZawiCTkFSVFUFd%2FlVl2ODGOHhQ7DRvgCPIY8ONQPt3Np8AY9yGEw2Npe41lhkw3g34euAnmCFm%2F%2B%2B6kFvjQ7VoIa%2FJKhB%2BznltVAwQpoCatIawtIqVNRdWTyEgjsNxF%2FVf%2FiJgLmUHv5bR2GHNXdo6zVnKV%2BYINWjNbY8BT8iuFR7GZPsXDu%2BGpd9Xp52H%2F099t5cq0%2FlPbylskyMLD%2F0MkGOqUBzzzylWT2VZic6SEWR%2BDGibaqazxV9SNpFaG%2FZfULyU14i%2FitN76SZPkbB%2Bp0uE4u6gbXifnsobXwic4faKndWCdkdOe9am6M1fd2hJEF84SoQUAfWIlSeELz9WVp9kl9dBYcO%2BfJ5qRtShFOSMHnBvocNOkybkVkxiHc6wN5pTBYh2YuD5pdq%2FfjWvH2tZTb3xcbbyzNBiFf5djMcLMfdKWDCq4j&X-Amz-Signature=5bd2ab902aba956bf4180f95acd36dd22bf1c2fbf8e50da61819f801a37ccd03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

