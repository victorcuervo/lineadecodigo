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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLHRSBCF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrYABNzR7FuoBBZT7ayNMhi%2FDJhzJQGAKn50O5t1zQZAiEA5Z2qIO%2FgkdnXFb%2FUVWQQx%2FY52XgNlMCjIZ7hZMd9fvMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBY3zB4GbLj2Rhe9lCrcA9RUx%2FJ%2F%2B4zOK0IVrJFR5oQX2EuEXGhv55z%2FochyfOqvdNgKlQb%2BN3CH%2Biw%2BUlTDCZuo2JhOQazkCrdUrYppdpbTU7JM%2BcQjuK1yO0UrjGANFDker0UH0skU5%2FTL0QHCmR%2FhsMogjKSDQpIpKweaNzeEZWDDL4ltMhPcbo7%2BgTI9UjxIUrJrj%2FCRjO3VgTrSCjFczU%2F9UymqgMmwusKoHqRqs%2BoH3M0QLY9QbOOzd7Jb8iw2zWWG%2Bkyqc945sEM9soTAwixWkqoBljZX2Gl2LLe5s8JEtm7%2FQ1YF%2B80FBFENRdGb1%2Fkqr1PZzHMiwtMPNtacHFcNTaSTukUKyBW4v6F6YmoMITdvFiNZwpx04Ok4JCS6cyCv9jqCqX8zZz0kUJULDvIQE%2Fqe3P30YHikJrJvDERHkORodFVN1Rnpsc7Fyk08ndhrq0hVPG4SllPbzywlff6SJ9d5zWoKe6px4hM4gBEpfZfFWpaLKFJJZ8aHaWNCAXny19OtCZch5SyjZ8pk%2B%2Fl7xSs1Jm82X34R602saUfZerAoSxDWPzveKQRYY8L%2BmwA16jKEj%2BLUsl1oz5d9CzZNhoz%2FZtSMlMwsMPK5WEmauJMPPnlXEhQD7exqiOBy2I4e%2FtZfkw%2FlMPP90skGOqUBslO1Ga6FtFrdsM6dmsJAmtf8uJV%2BW4UEawbk%2F06lQD3MQLEcLgAAZSNqAz%2BWJgseHgV8ZN7%2Fka3cRkBozPJQVZozLtF6BNcR5B7VpGXYWxKkDojs8AvL53Z9P02iJLTBGpQDeqE1WFrArA1iHtHDlNg9AaqgBJo646pgFJ47h%2FsXwQMiN%2FVeQFcmvlKiWWeTci0V%2BpnWJR%2FByKCDLVoFmwwPiYON&X-Amz-Signature=44fbf4e86bf80859fc8a4845818a2cef9f20aefdf205e092ce04a53f8946a04c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U67R2JU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdTiGX%2Bbyvo2c5QPcGrUXl3JAaB10FAZu%2B32yTL9t7RwIgKIjqh1H08LSUB67fmk0e7O19q5dCEHrMmNgD5Wvq%2BosqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcBOR37JwGZAb%2Bx8CrcAzTvKXlCV0osE7qgraIHXCyIEqh1poaLdxfclmJS4v1otoz95O0hZv3FmrJESEJMFRnxQ59JOA1VlneBan2y83iQubf%2BJvat5kwAZViIzbC%2F0dRaN2mFoNs9TnhkhGcYMM%2F1iQIdn8yeAjOWL5hJ%2BwnXwkuYqy%2FsdRyffLqkKuszq1I%2BsfuMaeQjy7939EGAx%2Fx3hf1nH2IR%2BR%2Bjb5PVMdEupw8L0ZpjzNt7k7KkPNAsaz9aaEqHbRFeUItSDancqx3U4HGReqH5lyR6NTe3CE3GGy%2B9fVLbQWF%2FEmALkbEGvuX21E9RYKBNs59ixDqkf2pe2ep83U4HwC3wY%2B4cf68EdlINyFfdA3i4KezAPdxcDsWoxifl5Cs%2BotFTG%2BYHezteuNhKUGhxNxV8hmCvp4uYIgeFmvIsEb2mgulQRaVkq3r55yxB%2BKO4yanMmGsSKfNLnTcH%2BAakaxmG7%2FUCgQdtVO7bfuKpFASlGg7TWeCY7bp50J3%2BeW5F5R4QR%2FOhGUbMk8%2F5sUuaqM6qxDhmu680FTJSfr522LqUuz1eJGV23Q8d3v0peu2nmdlD7ii%2BTkmMyBAA4nWSzAYa6VXhZ13OTGtxqd%2BHNaCj2OHp4CDvyIErpP1az3PKYhdsMLD%2B0skGOqUB6XRA4fMCcM6EldF3Kstl64AWg%2BnyC19PAJJhq5RzDrJtjjyDENnSXlPiyhWt0kZRtx7GPy82GrF3GIDDZs%2BdjA11Xmsjy2Ue7U%2Bd%2BoLubhtPuLAZs%2BePbb7jI6rK9WLX9HbSaERS7aujWULOorC%2BUWpHerypxpUuMzi%2FUEYgWBA6IEK1ZWdNEmdAETXE3JiJ%2FISdUCyXOg82Y3oWtnlVbE5If59D&X-Amz-Signature=e7ab7af90deda6fc52245484e3b2711affd577c0f31dc2a5255c83212d26c056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

