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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JFY4M56%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClw%2Bw43z%2B7O1WbPA%2B4DVWfsxfk3PhSpKEjDvpglgos1QIhAKEvjWNOz95V13hh3%2FJZ%2FUiG7iICWpIKy40xj5jV8roaKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2FkqKz8g%2Bt%2F3y76Qq3AP9S0oDvf5bSarLjILuDYD%2BfJ2z5LP8M%2Bgh4ZDmhT1Fdmc1RGEvCkTbphBbW4ObJLPvlv5xLzSMRU1Uvt%2BIKgtIAQBFu09G5lo5e1GBPHZDIv4tGiOyks9H%2B2dxElz0ltauKlgOVK0YqLimrfNm8oWe8sLl41o48Mmk4D6Ou9rlR8YccSP2%2Bygwc50UbWfuUkVjpP%2FepIc9RydcsRx2UthK9KHia8LtHZa2yw6v0FxORtL1Sa89ZtdG7iP8Z%2BVH6bjoOT1HlrQh614z5sKtlw1K6BqpwY873vmTOG7kI%2FZZmfrxXs%2BORCnEwOBsQ2b7Pa%2BGwCMFkeKWGWbPACsfjzmIH4DqAtHeudAyqasQ8uxv29cIDPQTpuZwrOAFNTOJb%2FbfNci%2B9Ehhxh98wUdKLWXDo5NQIhPMwcCEmPWjyGWWVEUvmk%2FTds1zzkU2jcYOxaKkTwL7MRbryBxqWVWDaSgNf7p5uH8Ex4UH7P%2FnyRikvxKu0HQxitak7YGtr9dfzPPjgfn%2BaosF8HFrIEfpsi3sysi3V1pig4VBFyjZ8jwqIQZOIlCLW1Sec70tyUH%2FMStAGvDfBWJfbPOlC%2BRKeqFxF9YG0KsQKTW%2FiCA81Msf%2F18tVBZtNWoVjDlbDTCoh9zJBjqkAY%2F6O5bZR6nHDeOUKGb3y8hpxZIofDKjlPNfbycxneY6cBTv4AdrHj9QliOJRmH1kGiTzM243ytlGhGh%2BMWBARj7MPGCBmdQnGuWX4fMooatKkkyDFvxwoW79bb1zXYnxr738RstvjV1FLKsP7Tbh9PlbohLrJqW2CTbIunu6ziCUOP1l4fJwTs%2F7VXahmJPlExFOS%2F8CbBG82Us0pMO4m7rkcq2&X-Amz-Signature=7026176fad4b4b864ce057e95828ad43150e2f6f3ca3cf208b24449bff60328f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TIEWFEH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC5VMhjpu4swjMmiLFD59y0Qvqoiqcko%2Fs7MrAQnAFtQIgR6zMvy16V%2FC9uxRxLrxBMGhN6YDazRKmCDyExomg%2BrsqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7yJaBCisNexXmq%2FCrcAx1PyDjkQWyGfxYeP%2Foh3ICKCYCJWD7iX8qTVMzKLyphKbY0vgV1zgoAGmvIU6kb5SEl%2FYK7sYjaUHYTC8lvnu8xvU7o0aIWpR1bNRGb2aQl%2FDiK%2FAelai0UBRr%2Feh3qftJPP4FuedOfTnrmyrQOpnL4Ab1Wds%2B0bhkb3V4qzswQXJNTJOwX6q1Y%2BcKhGRwiiL7N2pRIbMh6ec2u3a67nbnu%2F6mgUFjzxJO2Uhj8vqaVUVW%2BlPyLOIqyNb3H7E%2BE3Bdzgcjjakwxg%2B7wc9wIc9uarRV7a69iziRNPcWhZAn4NFid7pnMN7FYL%2BaHCy0sTo%2FWaFC6Z2WigALqaGZfNoqZy%2FopnJA76m8kOSkEZt14EhZRkEarPyRMXhxT2nhqSkwaShxjva307UUnmcV8FwbaR0WBBWo6NtPhM%2BsnOhzPkdz8p%2F%2FWMk4OWE4zWFuufxcYa9bGsFVpq8aD%2BaDCUEgAtN5gt5RCsWnHn%2Fuws8QOEVhjK8wJa50ljE6PjEj9JjQA5%2F6zydAmNMZx2g6%2F6TP1yDiLf2FRhwHmBXog3KoH3sCXaUQnDcMhteVNe%2F8avLoTe4VltxTQVTGISWhGIlspkSX%2F8yu%2BTQA7%2BNG5a2SvRAEjQzYF4ZjK8NkgMN%2BH3MkGOqUBeaS%2FN1mupcE4j%2FIzV%2Be9M0lGf5POdDshyPhsFevuHOmHFr8w9wg7sA%2FlE5nu%2BhcvsUo0gUm9lfuf6onQGRkzCxoodJ7KdFjMc6C6Xsg%2BAHqrr9EbTX%2BK8IWY0hRly5JjtqFkfyhmSGtLKNxaPbmkqXg3NG90E1gdtZMvxcAuCw7kkNwLinu9HviwQwiGnCIz81jpz5mdQwADpQZGIFuJJMrduPg9&X-Amz-Signature=840c59a94f318d87678553786847d2a570e1b10a4eac62b83996a443e6958643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

