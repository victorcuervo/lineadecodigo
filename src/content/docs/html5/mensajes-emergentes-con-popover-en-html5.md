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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KRQGDK4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWuWeNGNBa%2B%2B2imskaja%2Bs0PuJJJPPR83oYg43lH3wPAIgSToVmSS311ObUI0IGhmXPVZ5efOWEGo1Z0nVXsEInXEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvwlr5XaVcQjjgJnSrcA0oo%2BCZAqdYpFF%2F%2B32PSoDyj2LIvlwQnFmG%2BxJBCA3SeNnyOxbWK5SoTfasqF3OSIkYJ7cW%2FNTERDu0FYHcTZWM%2By1URV9K0lCHbCtRedyG%2FKhHBj%2F62nZEdZZZW0%2FIUWJrP%2FosoGRhNeymTOwj63YEjOySaTR2gARinNk%2BMkooscd2OLaAlQ2%2FNEaZjMvLAwVQgaUczt8fByXWh952KWdHsm7KMk3lzESXUYDG4aa8OneN8zypY8QHJueQ%2Fy%2BywjYVgdoooc41ssfhgEuiY864QqJZCeGL5RdVYfTU6GW5cDjtCeabxi5kRv7WK5MdjagvSCZt%2Bn602mGf4u6GrE9xEc7Lrm%2FfYL1af%2FP7h7noRiScyP69%2B5laFGpCLwu9fduPvgU5T8tnh4nwLu9fnuhkKrSbzKJpJPnZmiZ2UcHVx%2Bezjr%2FtRbX0KQo9ajRxZS7w826tbVevZWfKM%2BYl6jvz4tLTZKB6HWglPn5on15yuKohuo0Mypd7n51p%2BwlGYdgWARylloTyXWNjM1IlmkBBBFKOE0RBBqfkle38RXu%2F0AjA%2BaiuplXLElqhrV%2FG5QLgiGjHss9q6nDjGFShBaykR920kaGqOldryHRF3SNg40NjZ%2F3xXJYkojuL%2FMNCU2ckGOqUB6NZMzgTs0RpFXNMthPMhhCrcivNXJl5ZySHpfylUFL2PGmaHsEybZ5zdpCn7%2BiZLM6g75X%2Bg98LSq4%2Fkpyki0wXv6tfCLi%2Bn2qUGVTJHy4Zkp%2F89iKGioMoipSLNsghTDCVYZkxHrpPp8ESZNa69zA6IMSa8eHMiYuLKOG3Nk6OWk3R0YYTn1fYFPQqW4%2BdY42f2Wx3lETlh%2BXkPMfEiW3MMr7H%2F&X-Amz-Signature=c526e073630a09de8dbdd847095a6d9d449df6248ebb2298041810cb0788e4d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOXPCET%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChYb%2FHrtO8FL3wYbRRYHEudVjDtqkps%2BzniuDcK30cIQIhAI8z%2Fpfe%2B3uE2C7vZz%2FFfJVsrS5Yno55Z3sAc9a6Ydx4KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiQhx%2BitIaoyPVw%2B0q3APxYplwpGdjB730cR1vPNn%2BoMwEceqCdalZehYPLU94xoXipaNgypVJ%2BzatncYo467qDdMbyI%2FWU%2BPHorGnMDeQqleeAT6X5H%2FAiLkmW1fyeQRjp2qdHx74Xc0z8S60BYQWJSqbdlxg6G8kXzx1MiDq2pACQ0a%2FeBc0GBh0fOTFyxc4wiu0W15E8Xi0BidVUciDoGMIoIvX5lrvSLd4VoQZ0%2BYy7cZ0t4IPJDe7Y%2FXxVTKCB5wL1fd4KMP9oS5Ae9LVKy86eOsab5L2ucHe1dRk1RzhGiwUSecR0fzuTOXlX5ZYOpLtr1wG%2BEyfVBuZV8O1P2N9uVMa1fPuYctRu%2F678qZeiXl28ndK3c9I%2Fjgl23fOSwDUQpe5s%2BzvUZ5MHcpCyfM5nhtPr6QNgWKWCO%2F1%2FMHZlZRpElLWpQblAMAvRf79BP122KpUDtkGnFLaTWOi%2Fp0t9HOE4AZI9cfWuRyKOFZm0YrBAMP3dnqk3AywAKII70kCBAmPABzoO%2BbvwiFoUlR2oW09K4iW6nFq1CpG94trHmY2j%2F90rfqg4XZDLukoFADMKvhxQWd%2FFLQDUllO35hFQyNz6babEMWGGqPg9xyqFceGj%2BoDZXOZ0Vh94gl%2FYWAq8kSiX49APTD%2Fk9nJBjqkAS1nVKdzTfOjZrSL81qzF7n0Qt%2Fq%2FupDm%2BbEpJDOy6hNuhsRZGGRzcK%2BMIqFacY%2B2ZsdGJ0ICSvPR4Dt7HsUyCRFl4PsOtqG84Im8xGCwhXj8af8njbe6c%2BtT3kRmbghKIrUx%2BCNHiz%2BE18DyT1ddpwMvs9XAbo%2BJrn5noVkQRJdZZbWEGtAWkwuuM6TxC1rQmuilC8bu3PO9or84PzQGcr%2F%2F4nT&X-Amz-Signature=57c2ea325bda34ca96d246e8d821b852c0da322fc46f7a756adf65ae258722bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

