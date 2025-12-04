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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD57HPD7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIHxiYac8VuROMVat0RbLoJFsC5oZeDpQWq3NLAm5Pp%2FkAiEA2I1Pk4Xmc1%2Fgd%2FM96nWD1AX12j7p17vEkcg2mmRu%2Fcwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDwxyuS%2FiSYmwbysvCrcAzntbC6gH%2F10lI8sPAYgxYgu3OUnEBnVOR01qd8E0DCKFryuEpwEemrkG874p0J9dbJutqes6T%2FhxX2xxPD2%2F9lJep7PMbnTu4UNxs1MnxfD%2FCxzo6lRpqbaRGOX4dIadiis%2FuZYHsT8KGTOMEgi24VjYZua%2F6EzlmhTadFfa1UWJdi5Wd55T3UUvLpunOfDlYDdKBj9ShjHGns5OaVe3e2TEhlxQKWWAt%2BKTAg1A06LSkFwZXPUAzR48038V5M1ZzGGZE%2FvdETHHRoMx4cHnhh%2F%2BwF0nuv9k6Rl8s%2Bfin0h7vJtnLZceClI0F9%2Bh2Gt0hPjVpm%2BfizyCLA%2Fo7ucn17uodIEj%2FDSXcr%2FnTF6IDeKz5MC%2BQLvq8bcbQ21CfVWdJffFuY130NBcIB3eUy%2FSeSkUaWNrB2J%2BmbvPISnYnB2kenwy9AaKvrIyQTRTrfa6RN6xB7F8S0u6hWQ1IdRxJ6GaDhPrFGGcYedfgUQgVZcLwjc5UuOwDfJGTiKjCyFSD0Beq4iw3IrEXLFEfc9DDPghNCRJivPp71P5jN4ZxRmL7NnD8Pv5FLM6ZJ9GqiFZPESVw38B1V6aWojTGabJorEfXluac7GHfL32DlF7rFat4UMkRiXj7ACnHP5MPKUw8kGOqUBHoE4Xn%2F3VNG8GVJAt8VTi2CExI%2B%2Ffn2bLnHA7B42F%2BOoEesXMxCVMfHearLaAituwxLqH6Hmwr0eQCl7YzXsXMd3jRoZ4tloXEQvTYX5cDheU%2FK4mBKUeyT%2B5chxPS0yrd4Vls%2BeyaDhZ03ZIPKk%2Bt98G1P84E0744UPKGYl0wjJxX%2BG8c0qrvy3dn1GSu8%2Bdt9dxjLUXmGUdHy4FbU%2F8%2F74VZqG&X-Amz-Signature=24f735281a0aedfd9e5f320d85a5cb16088285a30fdb32f05f0d608b5f584114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVJJ4AAD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDcR8z8c5SZa%2Fy8dKFJLwVvvie5wETUnfKVVz7qYWGR1wIhANbpZtTazeABmpC9bbc3WOJMuJ4e3IgCCrP0tNl0Sy7LKv8DCDkQABoMNjM3NDIzMTgzODA1IgxPpv9Em0AlKQNgdY8q3ANo%2FmWqhUpWcz9VWT3RnT2%2BG4ZVXyZRNu7XoiV%2B0itqhHBJZeg1hfFmxizosV2i3XqwgKXg7NO56eyCDBXzh7rQkNjE4sBPG98MXP%2BY0qM5re5xsbCFMIKOl%2FcrON%2FCGVAVMCsa0oPnNQ0s6%2BqSMqEsFeyPd2%2FTHxtZtRbJuOWbVdlHJZ4ILBK13xBGVvJjagh3QS8sRzqLPKgjkmv9Mbunj2oxxB%2FXbsvIcz2hKMJ2lFlPPyx%2Fo%2BEDsbvEaqv4p5YizUKPE2MLvoWVH7F2iKsl4Eeu%2F19zKf7FYJtyoWnaxVMlotyu4iGhH2PAar8Ikt59BrjlD7L24U4HzniFH4mKiqHMBtrfiUwKj%2B6qN6cGYSeJdLye2MiUccj%2FP1QAMHyMWsk0p2fIut783YeunQpqHMlnoDfYTt4lK%2BmHhEX3oFDt4UYUzLcSitcy2eXcTM8eouz0D9vTiVVo1OXhbMH40IU6LyJnImh8kpDTd0vKKf5l7FN5bN5lUKC3%2BWoE0fZIvfjkBt7W%2F02RIUjVEcCY1I%2FMt9iNc5mLTOqPTyDwTAzvsiEfi9%2BO38e3wYe5EDQqqW%2BqK25qfHmSZBFmScYJb4caQhwYp30XNzmIA0dCYGOaf5Y2UDL0N9JZejCllcPJBjqkAS03%2FL2%2B3msktiXWaXfu3%2BxXkGVV%2Fni6cpJ38x64fjdom7XU9qwqTvVItkdaShECDvjmm8%2B0zOpffCsoyo0SZ9akmoI29w%2FBsAVtiFsCXcybiZ9gCFDW9WsMaYu0fHW661IrqsKVQT%2BMWfZW287N%2Boy2oKtbhZRfIAQzoB2N7jgSbWy8929f77z5wRFJA%2B9rBZ90MRLDMnXuhvcED13scWrt4GQl&X-Amz-Signature=ade53d93f2e63756db1d786206a11fe0c34f7a3ec02a21e9351c95e35bbed671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

