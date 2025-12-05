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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF6A2XI4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLiiAcCLvUOp7XRubeBv16jozYywnKy8H20d07H2fMPAIhANnff6oZOCNQjlwMQSB%2B%2Be2dDbYpYbO8fwb7X9MzpziYKv8DCE8QABoMNjM3NDIzMTgzODA1IgwCc%2F6MVtGLDZ%2Fxlpgq3AO6NtL%2B9GTmFeXUBh5or%2FRq2hnIj9RPucqaJTpbugu74InOQOcTBcVMotf%2B85VMWqiL6gTBO6bPpBgfv5OyqON7gWCxDAHzpGNBGTsmfaYJNNaj2HiwW1jEwGdMIB3he9vyApYGXUXV%2Bsez%2BfVFsSt%2BZa%2B2chFp9hnyq4ejfphel%2F4Wn5%2FM3aC1AVT8%2FHaHnSzgUEfGN6VWIRsuD7wOcUVFiZeGhgv9GswFqXcmo%2BwFnPhSZo8KfzyrANAo4vmX2rzbJPo%2BwtBmIqrWHycdKeXF%2FzjjDvsR7dCztN9HgMQa%2FH6Bph9bNsPvgO3h5GWhSsPzsYpN58woN20oD6dhsG3r8qgi373oLnW0WEb7HQH3OrLM30N2gPulEvmN6Cjqr7rvmb1ZgCLAKzo03oEEo6%2FNg%2B9sWYvST9zE9jgU10imtVqVKnfKIxJ4jO5J%2FxoXs4w9wd2rsmQyi%2Fx5bgkjioWPvqQnGzM9GJZQsRp2nO758NlazKEWRRVrtPuxVsaBhO6zaPLsgPCgscocPbCMw%2F4TF%2FoBscZw8h8%2Fy0WAeY5bcCOd0tiBmf597Lcz8LPqICIh0V1%2BakwaQDVHhdMn0ifmc0p7xJz%2BgGmulxzmLF2jwXF7UUmfrDpJytkDKDCKjMjJBjqkAQZn1JsUMP8lIqZE1Rss3SR6q4z%2B6EVxiK3zyLyQyfRCmI6oikNllvuZMQ05ICmNlRS1EIF%2FmPYT34m16k%2Ft5hMktR5kz5CvcOwq8%2FwKYHTnra1fnstkEn5eTORk8GlMDB7GyDGR3hmQMfBXL2ZzdpdhWQDRNuXtA4jcsT8LK%2B9aUnNaGBJYdRSPhm9rcktP2ttQ%2F5BpZnb8JWO4XaVQ7WEKRDSm&X-Amz-Signature=55e6da6efc73aceaadf872a16a2230ba9802cf0386ad9b09c3c020567dbffc4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD7S247L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtFY1e3t5Y%2FMuIGSooBIOT99UpovuID7hBdEKhSVpNvAIhALmho6yqPjfYIkXLhO%2B3Km79DLp2CrF8C%2BbwdJIsktZ%2FKv8DCE8QABoMNjM3NDIzMTgzODA1IgxXg7HydZps73LjmCQq3APWcUPri3V8a35yXBMB%2BsOPa2NhQNmSg80ezk33AvKk6wAZWCr14ygayu4OLk1lLNiV5YIvonVwa2xyTEF%2FR8cPSpAGoyZX1l25bCgYC1bvftplXWqjg7lTi%2BZTnpDmcYc%2B4BQVZxb84KlIFzMebbx0zfvCpAyTOfANZwlQxtY3cUWRLTQmDoJTEQmMVSOYs9yzmF1yaJAQZeim6ah7fQAYr7g0iZt2pdmXrtymTvhTqIxUS9nfrsY1NMjS0qaqs29FKKpNhuCivvpEUOItMDKCiTiyLboPVrGhx%2FVbuCMjBOYkr2W6tW%2Fr%2BO5jfEAPcIVO0pr5jQ8qJ1C8CYq1%2B1tNrdqB1lyZwF9AkYgLBCfNOY%2FfGVMhG8fBxJLjeWPfWlpGM0Zf0XtHzCNfyijCVeOsU7LOlW2jBgkRmrUpOLcAMoNsyHs9DHy5fEL58awLwM24nDYeqX%2FcGGz8Fb2kOOBYiT1ToqwmSrkimeA2sgi4urxmH8cEmUGOpUx6LNdXxIqkMnpuBU315InBlpHEsaetzWL7%2B6pqv8sPFmBgU7g%2Biv3F09%2BBwo3a7Ajn77itNljVcWZEXzqFkDizbmWCD5FjnAwGvJg0PJ1Nn9DaF2GvY1JBYYUrRGHimnOcBDCVjMjJBjqkAU1qWDzIL9lYwTrH%2FHtMU4sgQc68SYb23yhR96GrdPI7%2BYO4%2BleaovgkqQOjv%2FNZh9b0fOGT13xIa%2B2WS7B4s7EaN9A3faIG%2BnlnZjHv%2BmsiTzNopLclMsYCq4Humv2Kc8%2B2ppys3ti5MuCKQaeyU9i1dBnEm7gp%2FJm8%2F3h9HXW2EiZEVsgcmoPUWFA48p3Wqi5Z0TRsJF8QYwFx8mWtTZi391Hh&X-Amz-Signature=74e27f374ee890b179e403cfcf470385a21df5d74ab67f9818b900919304df23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

