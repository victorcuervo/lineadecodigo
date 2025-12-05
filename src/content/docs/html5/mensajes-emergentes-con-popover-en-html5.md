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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNO6PBGD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHW%2Fuae3vuxQCsFnVC91kz%2BbLCQrXexD2Q5wBhVhUoXAiEA02a60P8YCSKw%2FDDGNKElJ6P0cqavTS%2F%2Flh3wDiroDjIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCspaHhF2rfcqGBnaCrcA3m2u6MTqYYkRFHdg3uS2AgVI1wVuelLLaBuW4W23qHlGHB31G3Q5PqXEU%2BbvmmrHJJ8ZVZ7GDozzgQc%2ByKVrHZqwx4TVqSSOwuf3712VwEyUXq0Vchhz7oxNDSvdNjxVi6f%2Bd6LekBw41q3oWsdOpXZfRlpPrE6ubogX%2BsotR%2FU%2BqwLFx8nUex5CjnQckbJ1oUyDXprqYyO4k5GicF4WKk7hHgdzTCdYEfOjd4jD9GDLwwproxMDZ5vUIMs1%2BceFV%2B5wBg88sIoNYVH0fIbzwBxT0Zg6UPtxBSuwycWnqx3%2FWBLK3KjCHUkJ3MjyM8w%2FcO%2BhdtPvITL9BLF%2BSrvScz3FIg5SgoD%2B%2BV1FbhTGOBl%2BX1rEC4er%2BRfX%2FowWhvhyGPl%2FEUxxkZD1%2BXUQPSH%2BuU97KDJfPCEMsCVG%2Bureb6ovfBBFxJo1zO2AZsN4Rus5OsLPTT3V7rqYs9Hwwb%2Bs7osvttCJXub9SoI38R0KLO3V1zeZ%2BbyxLSROeI1fd%2BP7h%2Fn1vt1JdkQCVBaFEYRtBnlP%2FyxZqn3rovN%2Fld6u41%2BabU4c0TYfA6R%2Bzngcsug8V3ZUUZzJvomBRJOQpL5INufMdydPQQZWqql%2BKogxa%2FT2IacokiXI1YVIBXKMJ6yyckGOqUBOcumO5bmEqErzYFjgFaF6QVMxuJwW30eIrsqiyKk20HxvKk7qlx4mzDfh3HAgNZ8jhwIn%2BYMkgywDVgoAfJMK46zdzWbdnRY6wBRYUrNMIjoY3WdQFESCoZ6laShACk3L%2BkKkmV1q9BF%2FSMqDJZRQI4eTu2ZIqGewW%2Bru4fJeuSLiKg81t3tRnkHzD7EbiReh6xaUWtkEw%2BgsXaGltrjjP9jQpyT&X-Amz-Signature=d0cab70382aa75db59fd4d2cce5d61dab6b923bf880783ab72f7a73ff0ba6c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJP2M3L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHyVMy7n7hGSiJHzmnbTASrIn7SEolDyUXUnb7w3%2FOwYCIEIzJ%2B2mOf7Kg30C4MD5v4H6IoLt5jDha7FP51Sy0jGjKv8DCFUQABoMNjM3NDIzMTgzODA1IgwVN9%2F7IKGj4ocl6xMq3AO7d4fixo5MHPQeSMvUNARO91F9Le3maUSnxgwwD1bIYjQ0ni8mf%2FeMHA5tgcFhRe2se2m3rHIukhh%2FFMfItcpj4gOEyPkC%2FHdKb725dYfkp19cHZV66ujiFTQLyusxV%2FQsNxua5ZePLecb7g9BU1oACPTpQQrmnfCg9ymjOQjaEaVUtkR88QpDxhV8yBTVoDDxGPowJ%2FSZdNqQ33XMWo3%2FJVGlyKuGsxhAl12rXasXhpy2KNlsgDqVk3%2BsOqM1B7wlcjjVOLm4k%2FYNTNc1s0uLuAEfy%2BH0PYQBcn4JDYITyPBCIidV8KVR4sLPPh8jdbUuweFLDPEQxZJHn%2Fu9ayRlM8G%2FXVFXWXwTy17aiYbkK01vO0vyjn4b4ISYvlWL2203bO%2BZr54GhnLNFWqEZoFDESmuXRdg%2BnD0M3Sd30WCsxpRQsVeafD1JULG5%2BjTzOnl8zrglMJB3FKgOHxoIKHvl56EU3eyEic7Q0ypo9ABdfmuBNnvf4XBo50J79PYst%2F6AlE%2F%2BQddl%2BUjCCuUuex6mej7xcZ3Cbg0UiNi0FdWnl5HrZnsnKm7XcqIBTymgXYhx%2BWyb7Ld6FW6%2F8nomV1tptHcGAs7C23CmgUUquq6xBjVKKEl%2FsU%2Bep1ilzDErMnJBjqnAYJmxCAG8K%2BKFEvvhbOmWmD5eK50rOWT5w%2F6cfd2niuIR%2FvD1KAb%2FMFJJjWEDwPlJgqnkksQR2e9k6hyNLkSXs7mf6eqrYKM6Xtr4ewagi11%2BnDCpgyiaXouVqLGXXHu5nT93aHDAM9OMmLn3Zb2zzeoNoq%2BK81Y6SQj1IgH19%2BPnYCFZGJU93bTeUdiXu%2BV%2F1LFiTEGpPY7f5FyJmbmH00NRnpyKy0e&X-Amz-Signature=37159249c018e5174a33f21a8ac05caaeb8ad93a561149a586373a86003dfeb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

