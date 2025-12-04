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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI3EXOBC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIici5KX79Qb54D2lBS0b2VYtq7tcnbdr6G9OfDmm9pAiEAlMLKbrLyB8zADP%2FLiJT0ciH4PR%2BWA%2BHgZVmn39sWs%2BYq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDBIzujXLEb6%2BTwZTSCrcAxj0PZmBFq0Ia1VOb6o5REsJlljuysyZCmFKEoyxeSpA1tSjB8%2FaDrmTZx%2BHyHvHA9hK942xi5510Ce5KPFwTGwdKLodF014lV8WuLVLNoZrnfM1hZMtJJumpYO7OQdsWHy0S3VBTGkzRx2anfeF1ANkrBOgUU7PKFKcuk7t8EOavUX5QAYE0q1I%2Bt1SqRX3FmHse7Bs4%2BCS48VE722sEj8ruiHn6IaSH3liGJba7%2FL6SkIVV8B6sx5J0X4vuxrkVS6rq%2Bd82XCFFFNeqqwMa4PbZ4%2BOlMNLL8p7edobVn8uOTGwSxS%2BFfH4mQDWWYbV19nfiX2Ebe9H2OGrMBW9yfinLbt5kl4WzeNYFS7ZOpNyYeX6jGTvsj30Wuiol0CKDTMb%2BM4kvC%2BCti2t6%2FuxUQu011%2FQThGi0nj4AfODA3BDikQtek5YgSSkp9waC4wCo5X9MGsJgjJM76kGrQqMabcB2PX3UJnD1UuvLp8LF4VmijlmhtTsunyXYdqGF9nncPUEAzMnFFxzVRyWx0Oa6w5HRr91JnavW3Rs3E6aSZo5D1G86pxRQNtf95FjaZAXMTPmnQho0qz7BXRHYVHy0McS5pX2bB8hnNAXDw7UY91%2BQLmDbQZYh9VIzOH7MNLbxskGOqUBJ98Q31Bmg85LeAZi3tgKrSnGQ78eulp2KrMGrpY4VtzP%2B1EOqV3mT3Om7WDAWpri3MbpauNv7w%2Bi%2BSCyfSNa2cZshYDPIJevicWFf6wcq8uXpwOSHHibgoHGQ47dkbi1AAkI32G9Fk2qzVyuFvg2HOt0OSAP%2FyOrX7fxthwDrwSY7XxQQ9ub5llaXZlkkYE4nuRpBNgs7EW5A1YXhjt%2FhtqHZemU&X-Amz-Signature=adb328f60ac7ae7ebb6b4900a6438aae08394ab934a904215922fdc4f20336a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP5HKH2L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzQ%2B5nqnX6cS0hLw52HY4zX2tFbgjSBOV7VLWwDFJPGgIgSiZGdbWyZGc94uAEaowuolTDmLUVniO2hS6MSOfweVkq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNdihmFxbB330TfLFCrcA%2FhbRd6K5aU88FsXNRlIwyyeimh3ZYr4McgTa%2BCuEulUFvmBwC5cvcysdKo6tVgcHj7JK9tvMGxmnO2ETDf7AEQULaCFquajloO1U8WvJ7nfUowqowSzYPKTx8F4t3joCsCrQtazzU8mv0wTvUFdI1D5ogbVxuXM5niMN7E7KgmKFE9QkUHcqB8XATz%2FbyC7y0nlqYCToWNq0oFnQ0VTqAyr9Kowd8k88TqpiVuqbcrfoQyFuU3vhdP2Oq5t7S0Yr%2Fafzz%2Fv2J%2BlVSgTh1m2APrkhHJNbGmcMseaMIeEnhBGne%2B1OZMQMGefbeYpFFb2HAjMn3XCsAXvcBvzaVJRnJzGUVH9LQzwrKVsJbxwpyq08GKbeInUt3fbiKgDPbHLfBS2xXaH5HkKK46i5q3GSZt7E7MNWjvfXiF7YifE1clr%2FEXfD4Hfxo0GhYs5oUO62Gl%2BdPrwJF9%2FhtR%2BHUvwJvwDzZQvJSVs%2Fwf%2B9WN8zRPkf%2FVHPyKyC85X5RwnyRiStr8YRscAeMaA5NhUj91E%2BjzNQSNJLGyED30zrF89DxkHEXw9FTu8CFIkhZS0ZCsucMS8S0rJznZk0la3mx40PQwu8KsCps9%2FcCsorvRXL0Ax1QCG688V8XA39UPhMM3cxskGOqUBdq%2FXn2BIUmFeX0XaFnjA7D39LpBqbReo%2Fs88SmYjab2a1jJL0taAG2mtIW6Q%2BiDux%2B5RUOrPhnc4HHUgN8Wb%2B3tY3QeTXOsaH88veqUV6rY8Xu82IYu%2BwCZsNXbiEWqUI7TmD6KzQVjPxOUmOt9IIp4C01%2FgaJkoIBEA75TMwy2CMqftd0NFWE2JA481LrobJrDFHc%2FikEp%2Bb%2FzBLL4yvKI5rfJA&X-Amz-Signature=a1082286ab11638979c866068c6b777e5644611feadb677b56179d87bad6b417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

