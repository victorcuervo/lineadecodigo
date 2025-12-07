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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBF54JLM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSo8s3u6kfWRQg%2BKo5t7lHjGRzZxaBib11%2BgmNN0Hd4wIhAI9D2AW0QCZLalPvE9aiYzW8R8swaIBZeORbbeQ1jqpvKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymSr90lCfd5fiSGmQq3APITshGpLsFmZpZmsrHul31nKMWVE05p%2BTVznCDLfqCqvu3PS%2FdnJp3hw4YGNYpCrUxIab1XcNe4eLRK5UjJSzN5x5F86v00rHSlJ97ALJUQbMA0r71a6lhm0VMzjflBy%2B%2F6mlj363jFf95OfwI%2FK5B3z8%2Fdqu%2BhplfmHknHxySqUgIllGhmSg9wGkRNY6F4PwUtZ5L%2FAcCGC9Letckzk1uNLSdtOWQ4vgAnKadyDD6SaxgmPE%2BcQzmUUOaE0O2oWrN3RnyJVhH8Ndg706o13UnwbzdaofxhthvCbTGBLL5QqOLbPly2XG7bZNR7uGrpOvJLcDrdicMhmRAysMfSzokgCRZXnETDqZ%2BFdv2gue9q77zsGGXo%2F%2FdIS5nY7bIVTynapbwmhOmFaKbHq8xFKDzsPuyIPADYrGg4ezzC1gGywdUmKsyhCrV69WHjQoQYt%2Fdcar%2BPgkvVhKktO8DIrbPQXS38urFyD736kz%2FEp3QxAdZia4mkGZAgPaBhVGU4JC1c%2FzlA%2FcxC%2FXuOYZZpzq2wyGyV4ON%2BNpccqUkUh%2BmK9QQWZP6M1g2KscmkBT0opIVucr9u6RqaFBnlnFmn6TzAtKz24oxTUZRBuJerOkXbdQniEBKo30d%2F%2BjslDCNvNbJBjqkAUnAd3bMLb24wYq61SuhRXiomrFcWK0H892NIKAQ2OYsJoTLGbDu%2BKqmZJ5hn7nuHXKO0AzOfZJ4E2jG5yJXFpPMsQc58eH02XtGbamPae0mDF2AuEpf8LZWXEpG6va6pLMmHE7VIl5Q8Ry2b77DyyAE4KLp%2BUfxwzveeXI6stEt10cv16v3Xr3kUsj%2B3gvHbfbacb%2BdJD%2FgLHDzHmnDyxqPAFZ2&X-Amz-Signature=b6d9b8b5c2355cd4a632fde7c61a7c373dd5c9a7e7fe7dd22f29fd92e0a65532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ME4BM4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjyz8Ux%2FY7X5%2BHJlMM%2FdZpfBZ%2B4AWM0j1VM19rr3NPcAiB%2BjL2uaq0SR3RwhuKbFdWllGXO9r4zMSgSBup90fh1HSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7jN0uqlpXdBUPUcuKtwDC9Tl6Q6bPCaiBh%2FVEzc5vrtJLD%2BvtOjU5qexNNaPDJ9m2P%2Fc1kDpF42bTLSwUgc2ETsshlEKFFqFRtjPt3DildcOL0R4Ah4vs1K1ejKhGZfV1bz2lGGJWs3YKgD1nLfAOm9O%2Bh4aq%2BBtKLxCQg6pCk%2Bb1CYOwi0Vduz2DTawY%2BavqX2J2aKlZThh03SrmiY6i24YOLz5PJ4LI14kxlWsxlEGonIz2lWg%2FOFXUBm202OmDZScfNV6KD9Di%2Fqvh0WJ8LjhC6QnbT66ufYkEVhia88P9XDj3OJBGDJnCEZkBEBR9r%2FKIzhSHnqGyOFUuhhtWyZpxzcjif2NKm5bmBYiZq9EZkGx%2BifZsMtnmG6eckZ94RRoxL1IeLbEG9EKSvV6xjd8ZH7Nw7%2Fk9HfKWg%2F9sP%2BwLipGHjDGLjjn08QijV5qmYpvmqpuZLh3gLVP7hYu4tmTghuYIYNwJh96o85kkQkRC5%2Bkw7jGf%2Faxiv7FrdtKJxcWKTJ8mGj1QOBxSHkhVfK37Y6KdQQ7iUD%2FF%2FoV%2BQKASORWk7dv2avk9KdVkz6BQKDS%2Br7sp%2F%2FdzSs64eFHwEmO%2FAdOM7ee6BNTp7HIZ%2FI%2FuLpknyW30L%2BCgDi3Zb0ffT2pd5Yr2GY%2Bsbgw77fWyQY6pgFcxTQWfLdqx5wndwZsYAEJBdyF0UPnKuYDrLb1dfB8bB0NhWRIgcdmtZJmmwDJYfKCzV8kcytrIzKJhBmnBuN8zQxjOJ2UXGEUt7IeC66Ry4%2BEMOZ4XZbaq3QcmUEoYdTMBnOZo0Ocy4A1cyZY9zLppgte5qc2hyZx4xxYDJEDe7RIx7Cf6WVyCrO2HhxUhLDDm54VZRro8NwVe%2BpVsnZwfrCeRjuE&X-Amz-Signature=f9939a0d10bcf78438861feb4eac464a7c5c6884aa3753f927edd87831178beb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

