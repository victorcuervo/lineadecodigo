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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDOBG6A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDmBy%2B9LIyydIz8C6MDMG0kwC9V5suoCSXBwpPL9O6z5QIgD1EP%2FwibcV848tBdAlF%2F7qbBsddUfXOIXNCSOQ2A6Jkq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDL2GfeCxq%2B4kRkaVUircA2s3Mq4mVqH5eDs4CqcwPbr7Pg%2FbFTKEaVz7L0d7q5gCR1DE%2BQDq9UvxucvbvXbwhBXcVj5mGxNER1X1D5CENGKEIeeXMi59r6l2X2RZ%2FKIxCcXabncc0S9EFsP9R2Yl89d4cFeirH%2BkzD95dwkJpYwTMCcjtJZDZeWqqRkBO0niWgyUarcOHky8f%2BiuYHzi7TfQCcMUytG7Usi%2FkgdLmTqDZ5A510I1ydmJipVJmC5gRE2lO7zhT%2F2DSVl0X6ugJLK1cA6sJgNC0SL8Ydek470iO5LfOZZxHP0Zzx4zq%2FCEG6kSthpRu3%2Fkz3I9at%2BDjA3We2B3L3STrdjUqIRNhyHBl5opGKZB33H4Exnc8TMMqCheV6CZS52hO4yMqIXvJdYYPxbyc3qPHJT1zvigpwX9%2BERjWyKWVEP%2F42efEhbAIjVmzlqdmlT5K9dOxxcg8PCYYFfnXhscJTyi1iLL73RUebnNeXpxcZpSmkuGPUsbnWpgN3%2BFx6eFvNFeJvn0J9%2BHPpg8QnxltPZ1zuxSHDnDSPlfPmob2g3O1MnRi4r1gFfiDWPF3i1XxQ4fV5mdnncV3ckKW7g65QUWKpVwt2VukmutQVdbc7QUVkETr9anOn0ivhtC0hN3XsVEMIPpxMkGOqUBIFY7FdoKuVZKgp9X1rf8JJreTTfWP9m2%2FMuhb0znt4Rz22ptBs6YBtdfM7VFqcf%2FTjh37V%2B9Qv1AtBlMDRXXkxPXOe%2Fu1m0hybZ3zvqQhri20VZLlPV2Vem1kBZ3O326qmTEBqDk8jZhJJELsTPWLP2x75wLMVmj%2BsJC%2BP%2FbCwQc5U3yMhJ%2B3TI4ROmaMoXHBdg0FlP%2B7nIS2hS3ivRVYpnR6YhJ&X-Amz-Signature=e90d5e54eea168c6898eeca27c3377b4ebda77b3a4f3f07acb4015a681f4d6b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5XIHUAG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDZtJf9kP5Qq%2FVkhVNcuaXjMurrfmTGyb0u2YYwzVDmXAiEA0CT1IUcNvONpESYO84gAOZA1%2F182aG%2BfqzIeQJVWYP0q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIgPhshZJvyZDXnwUircA1cgmcwB5TgOUl5PpUFxAvezA%2FHVj%2F%2FsDVNftNpuY6JDthemI9gXRCqoBmkYySLVwhv76nTxTYLx9%2BSFfnfgUNqei%2BJV2n1vnA8f8OgOspbtHtdL85mxdOcq8cOHRfvBsHEobJzoOn%2BLzuylgwIpLlXdOjIYgHcupvGqN4HplCqJs04vDbnUEBMboeoPmNnO%2B1y2DAqf3kdwOTZdmoVf4j%2FckXTHR1S7r%2By%2F9JfGyu8Dwr9NwgDyW7rPoM1ozkHt%2FZ3rBnimsfSmHWgC3bId0tJbmE%2B3xzBTXw3Qxes8Q4%2FoUhzQGtHDTobdXfDfN1DfqcQchqV0mrXtHSKp9tO8YrWGM6eWBGTwR%2FExK0tWR%2BWwEhEryH7MWYYwIrtzTpx9tz79tvmik7GK3c3cBP5wGKGEZa3KWSvBFUGp7dA1ND0Mii1ouLRJl8ilFE1D%2FrN01kpS%2BpEfovRzbpCiaVNgyst4qvlegJnzb3%2FooNmUdbsnacf44Y%2Fs%2BwBqN0ALGxs5ZQuw5KpgSLgK02HXbjsNOOoE74qzY4XjeK5Zp9fvPW9fH7Zl9dzWJ6DDJrAPa%2BVHD3h9xRIvc2pqkBZUVVYuLbGvK3tY5qQlRQVE%2FXgodn%2F%2BNT7j8TaT2ldzZe1%2FMJfoxMkGOqUBvQ8CQjbJkXiVySuOiomrf98qNF5xP5NBe1HBGXK9lE9NtLG5L4ML7nXoZeHAJUH2zzp5ZSqQnwMvN%2FoF%2FkM81awvmK%2BM4ChRa5kRNgR7BsEHroXBgfzgxaPZ%2BIHp9EbuvYfsz%2FDYlYKpots3y4zthSWRbzo7OQMKImupamMjX1t3v%2Fgc1m4WI9OxLneJAUyDbTHr7zpcPQAQWgPvAnvY5kNia77n&X-Amz-Signature=64ec841a11cc5d7a66b52fc725258973bcbf8fe3379d718d11eb1ec0e2c14f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

