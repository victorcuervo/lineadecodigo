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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WME52UGS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU82cWYi6j6fdge1M5WebOasuz6JJjQDOy%2BvPwQ6ATsgIgC1d3CUdFO9mySlUcUsophPsoSYdzLFwDiHHNt3%2FB9iwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAuIQ4TpA6woyTX6tSrcAwoxvvFhvEozmB7RWv38BNJzHf8BPpcw6bz2C807t%2F4RY5AFGrmFDD7WkpGA27be6AW8qDCkT%2BMgiyYasLvHnuc18CzeevKf91%2BAa9YwYH2T9%2B4jA0TwojLPdnNvHoMbg7u8IEHN0%2BSSFcilLfWGV2PUNNKBO70o3vNILm4HcJ9pObTPdfuuP6n7x%2BqpXh%2Fj3zAjK5evaK3jcUujEjSyXxB1jTSWEktoNFScOhb8vLwE1dr%2BMlh9stP74zfXwRwofCChkCFAGlP4WuqZImJWPyLYZxoj3QeUMZstsImLHW0hGgNXh6NF2Zgh9M6W7vyKsMqLJEJJxTVp5faJhAJAfkTZjiLD%2BMmhaBHJb%2FtylGQxETJdwFNs93mb01WmmM3ZK1wZ2hrD7cZl7ok8jZaeZowryLV%2Fte1auvTNeVUovmn6xL14ETOMk6%2FxJC6izGNzkQlSBUzG%2BY4lReSoGDvdYQzDh4CmgO27BbwlyF8IJ4PODh14DrGm0z3wVMDxwJLIYV3oC8%2F4ttNLizJxKGO64sLiri1xG6MZpXSdhweYJPIR2vnY4rtuMBqvof%2FPqRJhCESwMn4iExxlzEC2tZZfFTnn4Ptw%2FwGvREbe1pGeCgQLk291ukYY34phKxUCMMWm0MkGOqUBXZzmFeLzdNbWG9SZS09SMJUs6pC%2FLG9vODyVe%2Fy5mbHJBYTqPL7WuCLaHuVUUpMusj6tv7FMb0nD15tpP%2B9dPq26ndgSfjiYUoWgn7fMK7bTon1fpYjG2nbz76MRbIXYeB6JUXiimo%2BeInRSCKctPSoyvFehlpz1lE20yAD9B9UOQYLz4LL2Rsd3c2wguthU0qmOgizSPfO7M1XA3r8CW1BUlh2z&X-Amz-Signature=993dcd802d519ed285d122e8c36d4c21be23cfeeced755d46bc9508f05d0b24e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNLLQHF2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7JrpWkSt0ylS8CopShFBDjwn52BgXTJEG0yslGOfh2AIgE0WYeuLtLD7oZqU3WPAx3PFTSEGunHJoOpveVzhxPPsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPx%2B7EBWh5ZgLscGnCrcA1GOwfvqIEW6C0NpHcsXajhW5bY7EVf6eb0YtKsJJZSxljOTmyZ5n4flh2aH9UQLycxfOuh3WFoS6kU1Wcq9mw%2BW3jjAZQy0Wq%2BIEgRdQTDH7oN6v%2FySzPKS0OShenkO7OwbXQ4KfgVDJjCYduJjVYUrjUOnofvxhiQWKJovjwugznGD%2FhWnEmZGq1%2BUUvw%2FmtLg2G47M8oGNEmQUzJe1PLT0eRS1OTdXtvYZjvunvsFR362YlIhbOfclLzzcZRScFv5iO8BSIr32lUcYKvvCnYVkLgHhk471YfFKWxzsatbnQJ%2F8btzJkI6KLgahJYiu8vkpqLOwOoGT2uxJNKtTadtkeZN9K1rP01fSYH9r9YyFcOF8KjeJEwxi%2FtQTzlsAbu5cuAisoawr%2BijCi%2FXpwfgKsEcuhzK%2Ftq1YUsY0G3WidaA43%2Fj294IJdTD37La1cP3Grgew3Kzuq58QjqwM7ZUIeuS6%2BVl5374WqC6JszXVYTgbhLboxR644n0QLrYFvY0vOPijc3bE1ADDP3XWIbqc2a3tewCdGyvu%2FHunGGokhx%2BkqauCydosyA14eacpIkZUJ2xex3RUHksiz9Rzpe5mIAcV6KpXKNcy2M%2Ba0YvR9yj%2B%2BrE2SdOllmHMPam0MkGOqUBuPopn3npfb9CILh43I5vqEEfvyuybarkRYgmrwHNygAXD7F0Nf9yRqnQ5vYZPFmaGU8fkUcplLGt8UC1oWFWA5MNYfafNsuq6n7KimaK7M%2BpqtS8JgqwlTXtiAc1I1lEXf46BOwMPYgfygeUxB2WdN7EWjRqHf0mhrzasNP%2BlrQaoIXnI5SVHLN7eeUqhrS5EJpi4vz73GC6wtzJOiVJl8qtB7UZ&X-Amz-Signature=eb3ae233c03224c09ec1b27f9e381b10f9e1870f55abc31b89eecb5dc70ffa2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

