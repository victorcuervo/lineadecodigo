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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGY74IOX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDo7RLVueQQGTPPaJXpskfPvq3JHP%2F2UgcKvkAoLbwUNgIgPIdbyWKjRHINlFRmfqZdTm8f0pw058%2BTNtErq4xH%2BkEq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDPHk3ai89WhYmdwAyyrcA%2BDZfglTAwLPApInATlmDNH2FIxoBHagaHHvxQQrNHqjf9ZjZoCsNKEQsFV6VNMsbGl7rWoP5d5Iz9zj6x%2F%2FdiD8hIkfcfreNOZ%2FRYeGSn7PJ4L%2FYgGavLYWAo2zpz3qrLgrIp44SJgKdCCZ6abham8DU%2FgqMsdDticYovqPiHQK%2F%2F%2BriZc%2BDi3R4ska6Mt%2B3z2tAqSTMBX4nJ4DBZhTLhKTjXZW53%2F6euX7xAfcYjNZnDm3os%2FwOex5ruYHcfK0z9Rk0RTVe5MdAAXK8hUq8T31TfytQDBDa%2FscFCEvnEKrkDYA7EqqTpvNwgfNEi%2BWLO91gbLfSxPR1oXr3lctlKyaWCiu09fvSEbagPNfZJ0i47k1fOw2eBhtnjC03cbSyeEg%2FjooahzW08ITsFrc%2Btv%2FTKUDYeHYZqTrRQNaCd21CK8b1UYgHgyf9xsgc%2BrdyWWyFJjsx5fQwvtD0igfIbiBy5WDgykLAkn1AOP%2FkBy%2BtXQbf4d6Mv7BNk%2B%2F%2FqgENAssWeXYbdGUX375%2B%2Fct%2Btjc6euZx7CFkvXPIW3Me31TX%2F12RsK26FbVulnhJiK8oDkaMTvKtgYVsZNB5Hw1%2BpPO9vZhOZ8XpHeFnPzyapCGa6cr9W7774CebN5lMKG1w8kGOqUBoS3PbbxWOp69N9%2Fq7dTe1tbTCOGX8LyC564Bq4OT%2BYGQiaKwfbg7y1uWar7nzR2X4F8x0D%2BZLNtoavwG2yd5ABPhz4BUVeysEhHV7VXP%2Bk1qhQOF19juxDedn1wieuR5NWUo2tG0P9QsrsUm04L2La3MOWHitlsIz%2Fax4pKbRM5A4m%2BNJdRWu7VOHh%2FeWUF8IFA0rH0vyV6CGoI9bl8X6O6azrGp&X-Amz-Signature=27cd806cd984956c50492053a8902a5b913222146a9171d301adefe82746a04a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPESSHRD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQD18gV%2BsYpXdKq0bGuxI5q9JAruxuSCvLX83uXIk%2FosPwIgVpuoiXx2DmR%2F6hhPJkmb1d9lZENxUmlhwbr2BV9GbaEq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOOGFG9ZoiHJq2NNoyrcA10va72QYHsAIwAuNywS4b%2BGKuIg7aZbNfUk3R%2BNOcBUGqr3Fx2pZS34YAdxgILUt5GnU4Efi63LkJPstkBKSLBT2DSXseMdn6mez0CHXPmkiTq2FDBQ%2FF%2BXnH%2FkDSwi1I%2FqQB7OxxOPcfDjQkIKd8oc7wMxu%2FNc0h2fT8auNQVONxlcMH%2B8hmIJbY52Ifwx%2FJMj7bD1uupJQ9J1zIheavEzMJyJFyGuIeD5bP7QQQdthLur4L%2B0ct8cn%2BpM%2FVp3gDjMf2Hu19uFqJaUlNuxZF2BLQrk1ctBLXTFNG6hn8c8iaAsAl0ozdToHYZqL2a5obADNVvDB%2BgDWwkN88ROtSJ8dT%2B5NcDyj2X0V0YVgFi7D25ou8XwpbB12SBgWBmsIrL8y4II19AmuBQDQNIR53u44yhkd6cnf6BsI63cpfINqYfZTKdbqrENGqXInq3d2ABNi6q1WVgoUvNwLJCgNHtxkb%2BV6BGmOm950S0M25iGk2tih6DnQoprHGghD3iCbCcHi8a8KQu2Ijpy78YINrUvI4tjry6PVrDhPxbPUYhbTfkZbl8yZVlqIO%2B7owJNWE4U4fBHOHgmaJTf6tpC8RY2IjxdkYs%2B50pLcNlMLaEnxzLpWd7xawVfBLoTMPy0w8kGOqUBIIT3%2BPOzhlgbnmqPBAaV%2BxcDhdTB9l%2FGpfr2JIwHjLPYx9gjHc3L05l00932bpF0HEBzs8Kb04t13PbVyesPKZ8N53tMg%2BrpP7HBfKb7a2RpoiictDxfuiGN7yIyGMpftp0sFoC0UJ6YyHNvnJZKWmC2vydwSU8pLF99b4EJ8YVRdBFxdInt898LLaxOJpbizrVTE%2BP%2FyeApIIaQYuT4g6kBc5nX&X-Amz-Signature=4d803eccf09c54cd45126c594eeb9a9221511dcde916c2abf6504643d7e17685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

