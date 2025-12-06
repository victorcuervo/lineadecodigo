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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIJA5AOU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPYcwn8bie%2B0UuUNzGbK%2FxMucF0ikFsUg5ULnq98dJ1QIgEa0OMQa44nByC2F4knsFhO0aatXRE3dIfxLx5FQEs6kq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOV33lg85Rh4qVQpQCrcAzNHP4keotKB4ll6nUXO8t1eSjZ8g9h84ANPdRdzzBPn%2Bl1sehlBFaLq%2B638o9uhxVG0wDcFEhB28PwHcwytgUP27yNRjezrsE3iP4tAHK5kIS%2BdGr6%2B6TSKQofMySvUgdYUsGJI2hvz%2Fhs7mRH20N432ycmbeZMi8DXhpsDAonNJYT6otBYn6blDbjdRRB37qP87xFUsHi0ooQ1T%2FVI9bbCBdMfUgdDequkAoWvm75ZX9vH2QsedweG8Zr1T3%2BYcg0ftBzj5bS6NDQf5ml1%2FFdVcDBAqVR4IoKnNYFCXijNe3Pun4gbghRlHm3epiwp%2B%2Fbks92o2LStyQpPXCUgzXZGvr9KzdAiDgRttaVOhgSQvLg7qBzeVEvQM56xBe%2BtDy%2FYLIADrBJLdi46mktYp2yjmpvK9QmGZ4aewELw1uwHqLymehl9KQ67SfZMG5KWAAwGXgWaySgpo9SbgWd6rAIzc3d8uyCR1xQ2%2BTxhBqTCH05%2FreKvgLydIFGQztnhcjmT6XACL%2B2qEwjB97T6AXIVZXl2rspfbjQ2o1bZDBoQ1t%2FAvMj9ErwijuBbqpq4%2FYgf7S%2FaeCxmGLPsNvUSNxSA0gelMJovTGWDpLajVaIPlHqJucD4ZYDPOO1yMNjE0ckGOqUBhXGkm95431XcvSQI8iwKUlOrH0zb5i5IlVqq9uJFrQ6a0RG3r7ioNTvyUTiX8WjRE%2F2waEGj43GG9Li2o22L9hkBmDkBqKviiRsY2jgZEpmZdLxdwZrAVxPyAK1u49TeRP3aYf8bzmGKMgakZXgx%2FhUPTxeQNDJ1PIB%2B7nvOTqoAuXUt2PhzqGg41jFmiuK%2F%2Bay3pE4S%2BZyGjCp7KNP91uw3zdiq&X-Amz-Signature=e0908ae12b91b7e549c526099845387be598d63ff8a63171163c14064809250d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6IDYBRE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz8eZRIkIrEQCN3av3fBMu5k%2F0D2NiKTbXZeDxMpgtJgIgb5OYNwjo8xDcGXsfASb1P9ooI8BeMaTRtpw5L1d9giAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMML%2F7SdMY7pqLfDnCrcAwPCD01CjF2xO2dh4IJOC54BhROPEcwGDd%2BFPpknNpQPNasDHkqYEDkzLaV88Z6ysK%2BCVZbyMybFXsNKJM9U4uvfhCdBzC%2BfA9eJEHwGlfS0wGgWfEtMNQmlohSlesU1ntQTxYStMhve6syMSWGM6LTbHuhUnam4PKwjNMKO47sI5PLF8NKhSeFKcPwVf0qovvN34lW2J%2FGC4I2EP3SaHPKkMrErl38hmiUKzxQrJJdRxp5r0Z3crjwYpwXRyf4vTc6V8FO4tqq8IcS6ioB1pSMUbuRYsjQFdvOgzZ4aqkn4X7vA8FnEbT1iZKWk8ORfAc%2BIcNRVySQl5JE45y6hCvWfsG%2F8F6oW%2FAZdJWan%2FIG9NrmTKwV7H8Bq%2FjSuClad6sXgNbReNbC2QKWnG4YhXLlfKpYjdIyUD4xUToYnD%2BAcMNHazAvGQQBmTDgVgBh8tt8aUtpD3toxKfizpfyd0URUMMYJ%2BkPtyKeUR%2FKOUqzWKKecBdb3IjH1YK7%2B5D6ucnSaBttO%2F6SnCyJ5GX8w1V89t04vumqHSJ%2Fnw7PQIQz78lK5gOz69aJuWhYFKgv0%2FYk04I%2BXLk9WwBp9UG3DiE67jBRxjfo83Mdh86XaCutX%2FKk6wLzhnXjcAL0lMKnE0ckGOqUByzj2fykWvfnrIhRFR9F%2BwMrm%2BiFmpi2ZVurfH8QqFCsVW3DR9Bnj3tpgpmXnlp317ZCQJ8S6MbM3p4dbWaMjBjZXB5S%2BViWtuTMa82%2Bg%2B0Pq8S8C2OnaBxcUI1Ewm4UQOpKSYwYX14S5g9Y4uHyfd%2BTCyD8hMYsZOB1iz0DmJCYyUGPjdr7kZPn7uR%2FUdJ3zjiUOPNpDWiSjSzXFehrrtB7%2Fsu78&X-Amz-Signature=f9e0fd98528d71ae0edacb209a76a3f6fb7ded91b29b6ebc29589c6c5e4053df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

