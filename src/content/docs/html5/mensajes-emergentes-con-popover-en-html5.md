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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PY6STCR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3PPvvSsB4LyIMTCUhULO1llVz7Q9A0HhVytnL%2FEwPGQIgWC3VZgolRcCKiiHPf3MY2lVY%2BdVEYNEsFo8rBZiPxogq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLNKGH7jtWxp%2FoQfXircAx5AIJvv25XBi6%2FIcTpioLz9FPXocldKOk3o%2FBNXqZIqFldobOTsDc4QzkyhcGG%2FiVHVFhVZ%2BJwpIIroLnqoprcQmwom8%2FWq%2FXthgeviPMByi552ZwwB5F5Amn1x%2FgTaJcfX74HfAR5YgYJXJaZT1wHXdWE0R6pJVBe8yodVKgsU3iU3IAm7Wehzt%2FFghbEq2yEEAAExF6c4TuEjS6IX3PHP2BRWiOV5Iwn5b0Lf%2BQ0fkJ8Ew7Vf3aON2HLTs8ddf68HBeJzuiML5I3bGUBZgcZibz%2FrO7F0%2BrVLdiPeJiyp8Lqgzua9Cie8jea2IT2A%2BtWKwY0vOh%2B1ZvIUFk4w2EP6Rii9OQ7uRPyH8Xh82r1EN4HeH90nA4SfrCeSuAcKMmNBH%2B%2BcgEqfwfdQ7iazKxWfupdU0VyCpUrypfww8aEucdhIH878%2B5xmEr9oEhlA6XCmC8Ikyw%2Fis7wL0uzXtwxuQhC0cCIG%2Boqx8dt5bV5gefkHT5XON%2FKZJMjl7LcY8rTgCi22viyLWEIeabwYIDrw6jfB1D%2FMCv2gWXgZfD9s%2FLGSy6KOP62S0KnbmG%2FQSLPe%2B%2FQysTc2zdQjwUgqtdzo0kKZwFxncRiyWyH8SU7lFvSKSLxsb3V9nwE5MKXGzckGOqUB8yO7WsRdmcZXtlJh8on42lhFxdliGF%2BWH%2BkuFiZw0wRzuQRMjH0xdeIZqJY2yimJo5%2FTVjuEFIslXJzVGcLmWuWRkt%2BXqe9mMrzs1n2vIJZIkAxuuPr00UFRlMt0AUaLD%2B88GUB5m22ulCqDILhDoGQdUnni1jYZ0FR3xKVMQVkK%2F2WH1oFxxqlnntkgSk888tiet%2B9fPu6ihIRNFvPz9wX0oRuj&X-Amz-Signature=9c03a75c6e4d59e0daedf414dd85b2979a8cef443209fff4d566526ba57be0dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643Y6QFUU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPMEHHvMhrF36cYMxiEQUgiWPuIWK21FxD%2BrKGEy%2BMXgIhAN0PXjN9iEnM4qKRC8ENfn0kZNji9mf%2Fv%2B1Ns9A5BSQMKv8DCGgQABoMNjM3NDIzMTgzODA1Igx1Z1kirXoZAGx5xkoq3AMzc2iTJFZkYVfBOOpk4Y%2F3oVEXla20orFibzX0qsNQ72HqrIWYbI4xIfOZEOOUc5roSwjFOHZOnHlsilYSRY9UhtEfqDgq8mFltTEcGlevoSGAgZ5OYP2gQEormsjn3ftoFytC%2FRxeBeJO8DUIE%2FbfJ4swUbShpnbjL90etLmm7wCvK5SoPQH9HEuMOosk100UkV0xw2oUvabDp%2Bp78aEsCGvDuLlbppw49qBkTj%2FQ1ZTD8Z6o%2F2%2F7i0bS9MUu0QHU4qVfjyHreHVKkyu2GYTM1BMXiYs%2BUHNv2lezwLe3dOhcmI1GdHY7wJ5fQe%2BF4ptdYcy5QTGeU12p17HgyBGzD1pA22HiQtksQuof7Y8pWclCJR16U%2Fxr04GbJPa%2F97omvMPGE%2B5W%2B6tbIk0uJFdQwamESp%2BRsXe%2BPxpz81b1mGiZhDKhscJ7P7fOGhJdiEvjSjJB46TfqHB0wjHG57Tsdzq941rxcKUNQm8jVourWn5zjHDyml78RH8wDDX0q%2BTgIsGfNY%2BriEupROoT5Zg7ybOH%2FgjGgq5BHQDTx4v1rVZceIAejHaqzvFWBdgoZ4T4qoinAlYo1xIznUSOQ%2BICIQZ56O9szvw%2FKiDk6k0RO24TvZG%2BWdSI76xMTTDHxs3JBjqkAdfNf%2FxlWwpaD2ZHyx8XF0n2vJdvoOohsWbsToeZnG8PnSMOQcbb7FsneEyP1c%2FwQ0fWMHddZcrQhqSfUwmO69bdAdwo%2BaK%2FivFn8dwM43PtVWhY6BmRVOEnpNXWfZQ4jXOq9qpQ9kTUNZx4JRDk%2FVwREuBCFx5tsqUdblQkp6LOaNcKqKbRNofmkls6%2FZTOJIF1TkRc2u5z%2B4kTqCKVu3J52TxV&X-Amz-Signature=5ad3204a082d04235d394d14a38c7088d62d97db63472d71ffb4e6088bd13156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

