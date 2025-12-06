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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SEE3LM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEd9jeaw4OzJ%2BlLvFbVC%2BblieGvmHqkn4xD29DCJzNbQIgUrzcQw4qTEm3hnxDiLdQ9hAYhfNP1Fi8eXWiOhDEiBkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFcFFPu%2B0PumAiOGeyrcAxcELE2RJlkrZNBXawd8IgdKrXIWPcAbg%2BuvrejqIMAyz9Z%2BWlCjgZ1DpFvFaJS2Rb8iks320zqtOk2OmXEosIYZoJGzXriNAgNPZeQKws4xZH%2BBUInxxXXAdcx9XecXOsfLkuyLdXwZ4zd22TODgJvtQcpQhG2ua9bI9%2B0YH1Fmbw5Bf9ZwaBWNkKX0qkjl4j%2FrQEs4pPTZA0vYekXdTrsXZV501UV0F9uAlRTuYl4MdGe6zoOqgUnaLwVkBrKHi9uxcI4Ds8eV9JU%2FjT4HK2gVhR5dt5q3RfFlzWb6NXh548rZdB8sEGqEGJrOPRI1qK1kE8DjuuePeo6fShoO4zTyWzu7SJy35IhRFxmuT3cmQSKkicWpiw7D4%2B6c6KQIyTLU%2BDfeP2IGUnd72QejbIUeX3h6%2FVoPnl%2BTOhJSOCfCWwL%2Ffk4qSdSrrBaFNomKENjzHbUSQDWhXjl84R0wzt4BNbGkWTE7tak8w3IiOiP%2B6Shu1o03E2QzEU1%2FKq%2FNRI7GK74Cd%2FUmrHVQL1azwb%2BG653%2Fg4wNGMXVXaiqOGcOiaNmLzjKK%2F8cIqAtl2cYHIgm2de5yArbK6L3RGR3BEDv%2BiifQy6HiVMPidcev9PUT02x%2FIiZnJYq6ibiMK%2FJ0ckGOqUBk4SyAl3siqR0rz1A4bmmkdooMhTdhZrSQG2IdFRd14gcCIWfr6C8eEGqe5x2OW%2BYpEnSEsrtMoVQDCSSuq01VzbUtl3uVwoIyODR%2FHZ7HkgDWWDeWwuz1oWlfw%2FPllOnTYH6A%2BYHjPywUbflp4qzd71BJC5RLWYB61%2BhrOwwyMF3F6KwTp%2B5XqvVsaEMmQvwQwMCKMTxjgnKfUq6knLHAs9%2FIM7%2B&X-Amz-Signature=5a6bd63377f8497ce0341394ae373ded60e1510be35936d8b78d953770d14df7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VXJ7XFG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmAPp2bKTFXZeEk93ZrS%2Fh7ZK53GvZFdnEBtWVlnvtLAiEAvWXP%2F73inr4IYa68vZGIv7ywvHzUTOjLmcY6Z8ZgWXUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFABS4g7aDYtSM1SfircA3a915oRAgcYf32VEekU9%2FDMZSfq6K0N27gVTLOu2uLuN8f1cucxouLYaQ8udYzj8kYC08bxTcErCWT9dlB03bkaFp87XUsNkd%2FJrIT20mS6Jaz3B1acYJEoZ21cA%2FZH7ookuFazB01oPHIHk9peIA5IxmDUBfcXLBXwW8X6q3KOREKCidob48dAuQKe0hYJulmRce2mcpnV4pem3kTUdk3Hzsplc%2Ffx5VFh1CkDABFcJKj1yUXD2%2BaE36A3CHq66%2B8qPJTdNLtAk14Q7%2B3d0EhrhVRKAnab70mpNUJv2JLp0wFJOH25IQ4hcIbaiyJ2wlJ5291M%2FYVgdWCX5uuo%2BHYuc7xwipIuFbUZsC8luI8b2ZyOmBita%2F5AovpsvDBMY0xImrCGCfm8nbGDqDudn%2Fu8P%2Biwb6AKwkNy1wPw%2Bp8PDKvkEyxaU%2FNZ8E%2Frmsu8PLQBDp%2B2LwfDnAEHaUt1OamwaMDg4RnZdzBL8NkMgvLFyFWntttPmhBeMyO%2BMFlHdDT4j%2BDySAqRmDfpUbsdAkNdlqL5LXzzG2a%2BQM1j2DMw3UWx27cPQo3IKId1jkbu7lbsghc%2BRJ4hV%2BiuNTuTsHKZorPCfUnH9BDuCxGo3qoMIjaR6DAv7BAF6kyFMKjH0ckGOqUBJQVvYmumryktu%2B443Gq1Slh2HQ12l5K1fpIB1W2GwINjpRktVL9PhVnfch5Lrp4we%2FSSpJ5gZHqnB%2BnQVWU9WYvNHqMVSsUn6FHyQ6dD87WJdOjEd4XQ0n5Kb%2FjQ%2FVnC7yQEiOmI02CoNPTNbN6JNi2%2FVBpP6rkf1BEK47KiQotEkuds7or4mJBDTwnCdvg5vUhsdtB6jYx%2FhgYn7vke0Hx3EtAe&X-Amz-Signature=5bb5b919a73ea4580544c3c56328358e363bcd6f0f5c8852a8a0be8e0ff46b17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

