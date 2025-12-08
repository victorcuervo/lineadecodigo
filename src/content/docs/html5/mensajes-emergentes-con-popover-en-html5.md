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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666QZ4OWR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FTuLp%2FmyBPq9yPFGVZhzHbnE5UDpcmR5OSfRPFXEtEAiA0AU1yX5SPDno7orUIn%2FR5Oyu%2FAorGH9en3Smj90k3HSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCu0PWaeZ5JjLy2NWKtwD9IvxIlo2R%2FVwAp13xXnuG5MXD%2FnmwXoP0zS22hdvFuFGLyHeDWQQmFvbIyPzurquFPYG8M0Jg4JHuKq1NQaZrOWJRuuaKBxFUypnmC4GZ6fIf6jm%2BchaXUwF8QU%2BFw4TRMbuZ4biOVKfTwUfkG4rJ6N61i9LWCGxSO9qlZEYTpqh5z4gSwc9AIMKdDL02%2Br9jtm0WK1R50S7cWJRKjM6NXD1Hgi3a%2Bmj5Cqp1k7k%2Bbz%2FPw31z%2BE%2FPFeJl5CYEJsbHn5vHSUaddtHKyWZu%2FnOCrQoC54qLj2kpEfT3fMzLRLjCODc0c%2F8g5pZLSWUuInqZFRBzOveEPCHRCUSrEGqhLCjqjKQSIOjaldDE5TJeQ6uDnNny7siPq2a7D2PFAyPzsgV5a59tfPcR6ymtRGgMilNjKKjJvLAYS5Ed1VUKBEdGLEoKFHYX%2F6rgut9lW7H8QJRneyovfmgHewyJuWe%2BDJ8nXPNrF57aaCCpqkb6%2FFr7Y7ul6t8Ukx0JLg4yuAM3HePjoki0mZXUp%2B1xUyswIMXecushGPZC6LvByolN6lQQ65c20Xt2Gc7NcTnfnN%2FU3tj67p5%2FWC2RewLM8q1d%2Fm8k5dTJmE3BOGA9Cmn56IDzWwSYed9S6OELUswqu%2FYyQY6pgEPnrkDsWbHvLddjwWgxt2NJmUsam81SAb2%2F0wL9xxN%2FxeWvqrWhOyOVh%2FCBWkQ42lvH%2FCgj1T91M7LMyvXS8cg%2BKLJlxK4u%2F%2BgimTiXt2sdeW1Oz%2FOOqU61qT4arVxTYnQ3o3EfIWmSFzj9f0ScVCyqKFNC%2FPugfPcnLOUi7e%2FX5M%2BIiDCGcBLZfC7xT7g7gbEQT8zWpHtaXg3xewA7xy%2FAZ7wrav1&X-Amz-Signature=d813401406ad5c7a193a98cf50a28af256a51b2d0af3cd85b0f63b07e6d961f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UES4HHSZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXAXdCvm%2FNEoDfoZegrku3ypHW7wPHmxQeVCKTb1hcuAiAJRzeQOUXJPTmG66EpdNqn3DygFesDVLmUi%2FxRBq4mZCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6dGNCQH4Ujrt%2FWCCKtwDyumwmAFISg2snLI2zs8RO2plDESrPtpy%2FmWtjnAbz9%2F%2F0i0Ve8S7GGqYExJI5z3W6%2Bgyhk0XTGTeyIJz%2FyAvluOxsh7RIRkrV6TZd5t3SeomaN78XddNeyngGUsQgR3VUonB681%2FiuNCjLoG82gX1V3V%2BDqrJV0PmU463DbEbjKtGiTZF%2B0gqtXbZZWTjCxP9kMTi7qJIGoqpz%2BIX6ROkT7NN6jpKo%2F0FGrkQ2lM1wAf%2B2tnFuAXKoP5eoujR3sfriRisawdddheCE8iYeRa0eopM%2FAqDp7qYqIEhHcjBmE3OoZvRniZnzoPdEeANjz0p7sXx3iRG8HKN%2FqA01yCxcjmCi0WCdTTnkwSjdw1AU%2BA4pn6dO0hKFI7SH2uEvIO8wiZD8GPSvLp1OcwmYKi1K2tN%2BGtzfyXU5qKOjTlFRYfeGJJ2WfC4EUPidQfegqNmJtw6gXZc8qtboq%2FyS9YbwDyAgMcdx4Slh5bv7McQzWRM%2FLWVLXs%2B9Sr63J6hswz%2BZWRt4A1mXTWcRdJ%2FgP%2BE9Ym8lAlz1GBhOpMxUrKgV9VZJQGakFACoaY5F7zsy3gsji5CAHZW1EA3bdg923IySmyVP%2B9fk%2F2aoudjsuWX6OE70MqvNYy4a%2FEMeEwpu7YyQY6pgHBcSuD%2B1hT%2Bdd2HZ4foM56VFvb92jqJTnGeUFWtRxSzzbiXhhUlDVm2FQ6Emkgy%2BLJdvpJgku5ZNq0j5tO02O58uuykB9MzZSwfVbJqIi9brLncBDm%2BeivxSsNLISvf7KJuiUfGWN3EU1FDNVT7%2FNJ9MBTHYwV4mQ9c8C4y6x9%2FRHuQ6BCUznbOSF2Hk%2FTFPaZVucH6N07J5Yr6VcDSdFqwRXx13Hm&X-Amz-Signature=237fc0721a37eaba2a2ac678412963a3085d9241fdc57af8fe43de8f102ad19c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

