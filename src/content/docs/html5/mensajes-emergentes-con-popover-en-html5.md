---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GPR7N7C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDGRV95%2Fb9MOJiACRylBVKgk1zFNMQPAMUZPLdLt9kcpAiBvJRzGy6T%2BMR1%2FvpJLKCaX5vyycw6BmmfpXeD8qcdoYyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMcjucXTPvYdUTY1z4KtwDqOMGBKcyt%2BHIO284J72fbMcu7hY35tXYrgr%2BrXS1p1bnKCyCeIaqMoLJdHVrnwNGYVUl3QoSS1UZTWpdqefouwwwnWqA1avkaITrynX8qituEap6Bix2DO6xUMHPIwErJ4LN1XrmH16j1r2P1Qvf4P82vwlFRpIQLc2badeIt7LrIGTinsCrSf7fxsAxgVEAXKzvtFi4zJiwxHxG6ZdYL35se5xRFNyNXnbH86Cu7URlTZUWWQ0a3QqbZLpyVHyaIXG7T%2F9z1zvWJcJD1dUT1BOQKPdH42wOSD645fN5DQlNBB4O%2FH%2BE%2BYT%2FNKoKvQz%2FFgp9ave%2BJ%2BgcoADUTPrNFVGgJJowTNQrNRFQPElRz2o008JOsm08yHz2BLlftBKbGN25pLbLHBWKlO%2Fw4BbM1PEKDspUQg6URMp99jbzuC%2FxfKcbX8pTL5l0fEOxYMu6Nlee%2Fqv4TLXRv%2Bf8uYAfsGFpU%2FejOk1rJhzMt9csqtNSaZ35zDQd%2Bop8yFmlls%2B5KUPTb%2FUWFttA4UtDgFWXMuDXNB1ehCpftvgfpLSNeDhz2ZoM42fm9SKpCljb2Ixvc15o0MLZ6qwAXfLzhS5ODTWrODC%2F%2Bf91WCkncwFoDBRmtaECeyw6jgYltswwzb3CyQY6pgHFMZC6H5BNYvM%2BYrgIpZYjYDtYv3BsZj0HxVGGBk19WryePxfsgzPdpQ7aDgQnk9E8T0wZKvH9udqUbuGuwpEJCqkN9JziAgPGGRlfnpGC9qGmWsuuj0Ft4MNxoXCiRnM%2FwDk9BpTM8cfTGwLt8Qg53ADSkRuoxzZm6vmkHRYOUxZIBcBh%2FcqDqVUVjUZjCErLuAw0Ec8BA8LA5qygPX%2BodumrV7qb&X-Amz-Signature=5959e8bdfa6504d2a3a26abf63177abccf7c8487627c2a410b5296bf84de2dd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466344KRZKK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCBCEndnkGXnSpDR%2B2sIfzMbr3TjJAgsYFVS8wTt7mBkQIgYRT40xjAT9I7WyjQjUcmIF3IjQtE0pJ%2FZVCstZzkTtsq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJ4PMt2eu%2By3%2FMi3zyrcAzzhSUYDzJvXLPwcZwxJWgGJRD8BpzBGLd%2BC%2BHcY%2Fhu%2BJoyr1o847kFl9uUDIycYbUiPllRA5siyTNOXTdTrFSJxXa9lo5mPsnpCoz0944In4leDTg9gZfLC9VmdpuXc%2BCm36HGh3wZtPsxuAWOvcJmlszOy1veMAl%2BHHfuK%2B67u6%2BcKRf1MNn2AGA7F7yRMIX8eVj0peFxasTvZnJgyHryaJqqAlTX93Z%2B8Knxmx8hK%2FY9nRNyxsVdFo7pUuXhAi%2BY0ja7ghWdk9AllRQWWLsZQggid%2FPjdBhllNz5y1OWI7%2BW%2FsKhzhq44BqCPkOgpNjnMMv8vY68Bzgz4G4ufh%2Fhg7MButJuLBlxSbDfDrOJ25fXC1P7Oi7F5cYPad72Ec0eTjgDjm1OdQA8f93jz3uKoSer4M4bO57TzQWjaubCWPgmqnFYzJ%2FzRZze5%2BHmSv1tKgfZXJsW92dpNacXehq9tOJGL5KqHTgwEbgVWA9yHpG%2FG%2BADuBAAObsGGd6ti9Jpuo%2B3z24vgPEmRZOfM65L9ErLMCRobNZtUIJ%2BbQhrH9BvdgHGZWjnbr%2FlsCUNbayoBUeEjK7lx4q3H%2FHO6ocnJLnx73wx%2BA7m8O6mHsCGmh%2F92%2BRY22zyWLG1HMOi9wskGOqUBFejHjf2094QT6OHOLUeAsrvIBdXoZ%2FHkBuZMapak1Dr3JCViXE0iNkpeAYMjf7HhjEEDHgigjj7gH%2Bh61whIr%2Bboy5Qlm2p34u5JgYo8amiXq9qusxKP6oVhcKFP7C6f1yGpkf%2FPLWbTy8P9ngp%2Fqlh9bLFr5YnhFojzHz%2BplUoopLjH%2FgtdYVBFZvXQC4GmY2eCs0O0iG%2FxtZxb%2FgePQjqe6mbq&X-Amz-Signature=3301f853196491bdb0185ec2095e0938d4e8cc13231e965310c8be6697965273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

