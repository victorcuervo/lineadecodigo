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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX7UIUK4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAcbtHb4ysG6iB6RhcYA0r%2BcdVw9g4juJs236ameyXuwIgTDbajl1VW0iZw67TdWWPNaAUfR%2FVcQEw03BML20Is4YqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpqfn%2Fvo2WS2kEmmCrcA36tXJsfyHnr3%2Fvi2%2BOKRdGnjhtvplGNHfNV5v%2BhtH8vt3BgysH8RKrg9wD%2BUiYxrFZTo9NHQqPYwdjQX8aMBtacV%2BEWdfDa7zLMH6PiPqDT0wYY0P4qwzMlCsZtGlJnnD%2B4pvjD5YdjDtzu8me6vshe3xQDXL7%2BK%2BNPwZyzxXdhLfLE%2BgdRieqVvCFacpX1wUxq9%2F5Mn9jy16kIonOxfpp%2BHg8EOoUNGJ8GKiBvKZNX0LzMeYPaB%2FP%2FcE5jCSohKqKZqbxjQGQ3Js8KgVuqqdoG%2F4xQwMOgA26d3x7IoiN0%2Bx0RoVkXTppzWPTjDKTPjzQtRrUomxrRNH3KBYPNoHKPaBJzERVYzlOBKjf%2BYpR5MzmGX6t58LbyTEW6rcdgfSHoAD18h8t3Tt%2F731RwHj9JGL6ntn2ZBVL8hi8bDx0RSFUrtGR%2FOPTLkkaRNJ0iVyU7Ny40jjw3%2Fy5G0K%2F9gx2bDlaGrU%2BhPfqEfKhIFJWTAajzPuq4%2BAGqsfISkMAg4lnA5GxWUmciveJhRVy%2BYlZQQR%2FUOiVsNjokB1n0n%2FcJZpPk3zv3bb8ji%2FwtZyII%2FUu6N7ZM9YKeioVsiSOpEEZDcvkTrMEgKGVB05ZFvtte1O5IafgHIVJ821lpMOWP28kGOqUB6EH%2FTHqYwTRn5bdJ5AmzPyVuVIZjFh21f3zYWjiCvvxlKdYHT3cxpbI7XMLfFTZ%2FPq9ORzkSTFwdPF33dZy1Pf5RhkE6DHdGywp%2FMt4wih9lm1JUq4UKjgDP5360lkbzGP56gK%2FwVOeMyJXijYDbBEOlsheLyD86LF%2B9bRtl7yIwUZe8mzSiUBWV7r8%2BiWBPGt5IWln5dVXHJhOGRmYVKQQREg2T&X-Amz-Signature=c53c109b8627b45b0974d1032f0bc27b362d46e744299042a5f663cd90fab45a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4ZY7EYU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBifSsL%2BHMVTmbr8z9voDtltX8b6oVwLPjZPLC3Fp1LcAiBvVzwGZqkOde%2FCbs3Uc7P%2Fc5k9UJ2rsxc1YcAMdMnFziqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXsiMAgFvV2qeh0vTKtwD4nTuN9QmrUaV6nBXA5ww8yJij1%2BSmAx068Q2oy2TfK%2BJOJY3n1B86ZThm21e7Zd2e1enfHHOzv%2BgllBdZwpLdfhsjkHQ2mW3td4qP0VJyaaINLRJrhOUD%2BwSd4OY7lheXBbBiRrgbqwq2cf0duxGcKkL7uTgWKA2x5jt%2FwBs75cE9v2d%2FxkAhmimu7zTjKbj0GrlaT2knGqaWx734PKvm34RU7GhmnUUc%2BF1MZdvz9Esz%2BmCufomMLBrGJNkO6vN%2B47V95ZNU%2FcNELfIQk5YVEpCNMulPJIAGWBXVdK83z2Polo63PpUiMKYFvIchz5r9Xu4cdFGdmkvtfafq4NgvNnmG0CduxZLo6Ua6sVBUVEYu8Ib75FlDyUlP92vetiW87ZxgxZcInTyowZWyjvkC6f2OVrHq1eDj04AB6FJk%2BCEpQ9SghvEro7l9xfRNB1qXZySbSHk8hhk43CPRUjZLDoG8HW4EFE7K0UEg1%2FJjloLziyHwdQ7Vm9QYsZzSLh5MH%2BEq14Mrggp34z1DSnajQO3XL1ZlAHPUU9p4hGhZORSWkdwamz33MrAWhm4m8PDu6zGa2Vw3%2Fq2n5S%2BxiZ8mDsHeYiNc%2FyfHWKX7rh4JDrtCXcKUEhm%2F8b0TNkw6I%2FbyQY6pgGcvQNsPm5jOD8Ql7Kwl9BpyeWAJKTbZDjCsN6N0M%2FaOUOJjrfaOeTqsT3Vu2VMxv9%2Fc%2B5%2BRBWanlWHdCfljo4605qLBnllaySxFFesMmgxUyFqV4I6vOdRCtXTjHNH19AoaioaLZK4fA56jSv4n%2FC1QBPmscLlE1gVivnFvKW9VyAKaTtXkc7Q%2BFNglbjZBOKR0vIWUNOV72l0xegQSEWFaF%2BvBo65&X-Amz-Signature=3939a5a9a17728fcab05dd9b8a4cd6d40368b3ee4411506f71335bc22e03211b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

