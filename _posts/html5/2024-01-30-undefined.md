---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHAENIO6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBxhPmcB3N1JLJqM6plBLX014Fpa7oFR7QS1%2FLWQSpjGAiEAzYbArnIhw1kwIMCSR9AnOKs3PalTsPO9yqsKfLC2z5Eq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDnpdOo5gFi3uc8gGyrcAz19LFBeny%2BwEX2XOIbARWZCXItp5zqi0U1Iitq0pHUvTOLLWcgnW2%2FapeSYpGunObyJIha%2BkuaizE0mxkk6bNdRTD42wIqj9bOuXHo6PwAHBDgPoXy65eRcJJvcM%2BHE%2B24IP0FmNtnO7WVFg3rt8hrp4XTrI23HUQnw6tvJPC0I30gO2tyeBhCp4fwwoBReq4B%2BzqMAMoMtzEzjthJDeHGG7LtlLHHH6kjLBo1pMGHcvBbfrPfUqfsNzp%2BuwoNYYRu0Fblw3M%2BK%2BwG2Wvwq%2FIJ3zETUXlUNUqRm%2FrUKw9macxuv5jl5ys1j8wDzBgs40E5XUMJejsKANZCCuCMzw0cu1ZpCfFCHAKvnx7PM3iDJgLdXXvJxVcehFi5SSY6Ytt%2BuCyabeYEd%2BP1UU7uESx2UFhwfy3Fvz8ReGFGtJ%2F2VYf4nZfgC7CX%2BRE%2B%2F5DLluYTKogDWcPSxgqkIKibviIj7eiOQ9kzTWckNcxn0%2Bbi%2FnM14lfJ7pMq%2Ft8VbulP1qP0xSdcmF0Eh%2FZJrcoLHXPBWfqa3lrnBTd%2Bh54PBEVp9n4bqQrdtn96OTi6l2AlNTkTKtLhYqhL4K0QggvvOfoJldorL%2Ffg%2BKtD6klryHc4MRxab0CqTdPrsM4YGMIbpwMkGOqUBeTBssjm4VJNhUeI1aSq5xV%2BYEB12bZdmwQMvzYQD2vpzCMLEOAcEWs%2FssbGLYSlV4EMA%2FrD8XmnRONK5eMt62wzPg7N1Df7aDb2krD%2F0EBC8wIbK%2Bt0CHVhcOXtYBV%2BggG5WISov3ssOnehX3rsRiUOgVnmjMLn2QgXHq81MYeTjUXAkegcQcyF6HaeHjQA8C0jWyhIixLLY2mlAdQp4cLvfhaAu&X-Amz-Signature=d1058a4861e4e340a592747e8589c5550a7fd75d62c0509b94bf3ef358fe4594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEQ6VBUA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDuFXZLa2%2BekO9QAF3aelpAd%2FrgUnwxK0Yj2uuyDvHs2wIgJuW5TQDN5YiqxnLNH7D0KKvCYetguazb3pU8oVE57y0q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAcnGHhwJxZRRyLJPircA8s6x48sKcCzXwHKD1GvZLg%2Fkm26qx8bi5Q8T0X8q3oAUJjx5kQwnjU9jitMaPmdSvyDSXRwOlghTNziYzUkJhjHer3x4gZ2RkMcbljrnLLrYRW6gIiJLnD3Gws2rsUUVN5xW%2BGycdXsXmTIWXaTpMUFOpb5jFT3xmMUmTcvetST6Y0Eoc%2FqopOycFAz2i9scU946KBAyRDm55xpn9R7OtVgLabAFqtFcM4yj97La88ZDdJCIMYE%2FfJzq7IvYbLklIU%2FPW9zP%2BPCqAz5W8GW%2F9FCYhczCcj0wnAJg%2FjxGASqTPxswV7u8yyq6T5nwBpFg7wwBVQ1UfraGk3duE%2FolIkxXg8Yoi8R4WVmHrH8mz1u6%2BtDYn7KPBN3Ohesf51AIPViZMVzDdX1dEf4nthrV1X5yar6qZ014%2BsHr%2FU0w9x%2B3BU2o08zrzdbXOovnccPbw4TiLiUsbciAlipfHOs3xWH8jjL0YQ%2BuujFvpvfWsIClg9mpNAophraupOldWzHV0NfwLpxYEz8uyvkDt95xOlHCDrxi1m3T3%2BPY%2BPLXlPv3cSy5p8c5cb9d2E9%2BYWp9Jcq9KCZ3yD9sBRDXUUB2zusYgy8V45uzUCkQgpxAcwHEDGUiw21XdvCLqr%2FMMPpwMkGOqUBE4Ne2Sr7vg2gGxpcQYZv8AxRGWxaQ3OZkMJ63%2BatoLsCUOEIvdSN478NBb1NMqVMdH%2FxC0lsxc7OjMyuNhhW1D40sPRRp88oQoM%2BprsK2MZ%2Bh09%2B9OPq%2FrhL%2BEbIWfC3AQ7dE1scY%2FVaEpAfhOtuTDxqAiwEEqb%2FEbXUE7JGY2y1A8aUcF2dcM1KKoJv3q2yeeJzeHKiGmIzBEp6Cmwd7T1tYyqq&X-Amz-Signature=e9c5dacb0fd91147ca89bb4fc13bb0c661f33f0015bcb69b6d3103ca7a3a6afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

