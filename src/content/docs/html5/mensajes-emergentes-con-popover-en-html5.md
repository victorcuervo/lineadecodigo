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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA7RKXYO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIDhpyEDeCrOYaJXa0rCNPuseLTrhYI9tgaUMERCM2QARAiEApvkAp%2FxFMZhuHBBZarys%2BRoZCd5DaOBdNmQqBsWW0Tgq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNKU5kAcGw%2BSusAcoircA%2FeKGu0vm%2FVHs6yKcoK3CLh95mCJcYtslamIkQcSt%2FWTJxRwd55tmHRsFFCkwHGHtQuCErYrGnx48aZqmrUQSEbZ4UIxLZ3KOL4zAzzeu1sty6%2Fj0D3%2BV0l%2Bjmp%2BkiItACX1z0WjApwACJg6IgoTmnBFIJWWWLKzZLA%2FxBVHSgPcNqFDqvwUAFRWTDWaPui9WGSc%2FmmcL1Q2tnEst2BuobCMHGNdpK1L2%2BXos%2BaCQ2G9vQkvxxKaF%2BeHwe%2BhL35utogpTGqLv5os0DxTQOhM4mVFxnNjex%2F7YNVNQComV4xZXH%2FEPnkgKnLHFQ2kUtkYlG4AcxVrXJOIeVNok99bbERby2qZdeGVvhKHzBcjxLriCAF6KXQ95KBpcYn6cMMfZ8tc5DY4PXkMxsJFin4Y3kwsBU4myyoworlk%2BYlzs6l4e1UT4NyFwCmmU8mLl%2BYwwj%2BXo5L77SsWrccOhRkJ93vRg%2FiYaTEU%2BeluUtrT4MRfuLtOVYvknY%2FhLZ1qq2fIUulTYBCKdpDczQMCLbXTMjoaUW8FyPkVoq8KEebF%2FkfVfBJBEeL9u5urk1hPoOF%2Fzo7R5j4lKgUL5q7AeFRoAv0h9NcpTSjrJ%2FKjy4VnEa4Pd1kZbjoTevbLUPXSMKyVw8kGOqUBnpaWpurS1F6bRKgnKKbYbhppoWtq8fSKGXKlj%2FU0ep%2Flrsjs%2FzhB7yGixjJQe4KT8errL0gf7X11h6Jbq%2FWS5WjpwSJGE1ukwGwBaiJLCOXxJWJ%2BpCbfg7mPrhMqmautY%2BeL%2FPLqdlp63sPn50jqzBl%2BjY8V6ECPI7BQiypAhDbsfa1QIMqaCnW7vuLkKgYxc%2BVVEKkZI20Nkt7C2t72K29cKtiO&X-Amz-Signature=a3d27d6078c5da8c538923028639ad0292ebd1a28f92206a90cd6920c3534e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYI7TVDH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDX2VH%2BbYzCNO5hrPZlnxtmHTTUstZo7nktt8aHn87pwQIhAPB890fidSt4zDoruYb95jZFYag9ESMrXSbSC3uOE%2BPgKv8DCDkQABoMNjM3NDIzMTgzODA1IgxarFsCgiyk42f7RBIq3APiZbeXrJ0Z%2B%2BgyzzQ4KY0qK%2Bdmr0Di2sIhFevkT7LzHZ2p5dK%2BKRkhr8GqJn6fJgp7TQvHC89ZWqbT41H1aSHjhbb4%2BUlUxR9Vp3yAzWFPIpDwACTEyAIb84tzb9RKogBP%2BsHqhXnoDS2ecOj9Wb0p0QC4hYKrb43wKj%2FTk%2Bua0%2FK6lDtNjjSqwb4ET0kGETmb83pRZ4RdJlKjFmJXx5zOchqDhYEUnBaL6h2l8ggWPMjRtle5WD7bsSluSfxrc6YKskcS2bRH0dYtUorInf%2FERxCVqeUTYYjOJLMCrXNjnvqtzJ%2BosOMlgLz8hJjGqMDFGZicTjvlUn9qxSUtwa9enEOgK6gJ40F%2BCkGsD%2FKeVEQ9k9%2FmnN%2FC7IBYakuzmDq%2FGZiCJw12E%2FJVDtJXhY%2B%2Bv8IaFEg%2FQbljiAQs0mrMz9EcC%2FOFvp0Y4roRDS5hUR7uZ5PHb9j%2BVHBrWl6%2BDwOyCNEg%2B7P%2B%2FARHCzdwXLykeXVvOzWBDRTm5cP9R%2Bsd7lJo%2Bx4%2BkwiywPllyFs4hHbdqejPCKu5SItS9DkWYRLXpeOi%2BHkZe4CrOSTkDV8hlEANzr9wb5QQozd4xYnM81vR0%2FR2lRYiqsoW9kKzwXKSDH7NIknoMFc7k%2Bh0JzCHlcPJBjqkAeRzBJys7uxiQJHLSUigYjMqg9vG4aJcFUTp2lDvPz%2FpDQx7xQBuIHmhsWkwy0Q%2B95EMDrOXrWxrQTLIGFsH5TbpjYLNyQm5L6xbRPhXs2lID9r6IBdLM%2FJWcOwu0Hbot%2BOfUfeieykVRLt5G7A%2Fh8yQ8gGewMO2oFHFvD%2Bdp7bIYk2ytJph3f1f8ON81YKvmdWVRKXxw95WqULqQY9bVfrl6KFJ&X-Amz-Signature=c6fb3ad14e1e4c44767fcb5d8446a7a2d896e2e66d5e17a67c365621524e9751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

