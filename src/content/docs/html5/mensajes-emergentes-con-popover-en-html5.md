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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHTFJEGP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnyj%2Bzf946IZAJJO7DFcx11WKz4aEiaqaaqK%2FTz4hN6QIgVVuT0sXB%2FTcH5W4Itxi8TvIeit60%2BIc3Rdz767cjvEYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBUiQqlIahxlgrop6CrcA3xCeNkxcq1UaaCGWoY3SVoNVjnk9CIFs%2BoL%2BELhwVcBGE%2F%2FvMyn6IJdzHMwkiHqNmcnRRiezKGU4qI63DYsNZNqHd9tUtj%2Ba2Vdrd0QirBzmLiFrgHkg%2FLxRlQxngXadyijUSNAJFQFx0lbYP9FaSVUARefWK5sUR%2FqIqNFQtXFu4UD%2BpsgKX9ziVU8aDV5yZWcQcMVExyUc%2FY4cpzyqjx%2BMyY6xL4HmU2lBAu%2Fe5Xx1kj0HeZ4InEAYlwON7l%2FZA2FQlLVOW9sEptxMG7QxjnLIp42dhn0UDAVUrbFil7RB2xweQSxOzzz9f%2BuEQp33prObVOoLn1V6es7yfX%2FuK%2BcicoPcH%2BO1GZjjjJ%2BfGXq6DVtTa1QPChDIXsJG7xL%2B0ND%2BcizdzWUDCQSB%2FESjs1BX%2FZ4pL7maKlXBCyoIoOmdHJ9mF%2FnQcW%2B8t%2FDipuOg1iKPqO2dIkLT7fQm%2FyGc1RnjWr5peSG1WGH%2BlekaysH4IK%2F31bbOErTL4tom3DliJPV6t9NhPNlWB8G2bcKtjKXFnuybnzDO%2Fw85X75AEtP0ImLDMxwWclIDOLjtNas%2F%2BukacPeRJXwcOpZ3IERzgQROpBAkxDmyf4CL3ctOUDnrtqo8C0cd5xdHjtSML3rz8kGOqUBFLTo%2BCbVdbGvQ7gj54TbLm1i%2BH0E5D3LWVE8pphCFG5RL%2BDXAh27LKSpfS7%2FGcoh99Go6aBwjQAnhGI95H3b3I1dFUBFr6TwfUD%2BA5ptWnTQOWUcOxNqiXxxlv8ZpMdh8lGMFe4T5pA%2BTqX7glGYZuSUyNgnpCVrAsGuDkiIdOy6M7BjXI433zil6Ufe0hCqtfkt2LDn8PYOUZTvs5pDRNZVJkzM&X-Amz-Signature=f44164fc0c9d429ebb042d809105d53bf7c418d2f543b2e27a9ce2e2afb621af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQOUFWXE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3M2Nopr%2BQ1vmjSYU6vDuKcIXhf6T0fClzH73ilPxiPAiA1iwEkCWxMpHw3iFPTCQqmkW%2BNqPalaEdA1vuP1OLDEir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMjVE%2Bx3Ws42C1X%2FQyKtwDh6imRWHE%2B9h0tDaI6D4u7YUkuD4zwY2ylsTdBs%2FlCA5g7SJS2QhOWum7LgA7U9c7Yj8Q9fq9SridpU%2FFBDojnTiGJYfh2AO2EiumYE8LRpD1qTDfy%2FxO1bEePgw2xAS%2BA0cEQVv1bInK7gpXvjph9%2F7Aa8TM4qiSaC37JHSOTlM6mJE%2BVXs%2FPXJCljR99oAZEXayVnUk7qXgSblx%2BaOBPY%2F2Re%2BpmpV%2Fioje0DORz%2FNRec%2F8lq5NzNLLX2P4y0092sD%2FDtGvzdW3zo52la92l8kPmKS0LxPv3hE6NQeYVpW9aVleERE5RwimGoHOmB9EaO6%2BZk%2BXXx8Hhr%2B2Zj9h6AvlMxLQeWhz6cqG18fj1%2BKUk8z34UMAkWDtImG%2FdLTWFLOgaheO7OBka%2FFIWw4uzKsocEvY%2BojWw4SfUIvm33sXGJRpiWWr9ZwqVZ9QKUijZgC7FjD4ntWOHmiJkvZzj%2F9IUVLtyR3AEwVSPE4CsWWe8YCiDAQLLm6QLxDKFRaNYslFgaYoCMEejza3A7hZl7lLmmeIDbsp8a0ZpgMTJL408gcizq1IGxWC9ADxWepfOHlhV0PDyJs3p0%2Br6B44TxfBtf2B9cfZcSXwVPKmnMnQEEa0qLfFmwjynr0wlevPyQY6pgHIz%2BOnJln3PblfaE5MyOKSINgIR30Oi3blZ%2FwJGhYYuPPCs0PNVLVC6%2BDdegi8KxnGDmDW950ZDiPfY26us0Wff8qv1Bt2NZp4uQWaFQEn6o9T%2Bec8JWsT5L7%2BoMEp33ttdWI2ysJIZPR5tA9qZY7uJc3PxP56ySuzu9j5dYem%2BXkxswjDBEsomr1CWZtp7h1epg%2B%2BYW%2FzF3qzaxUMMDybttxXaK%2FL&X-Amz-Signature=6955e5bd3285d9fe6da9115ce45dda010a8938bc58e562c6fae5510b56bacd5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

