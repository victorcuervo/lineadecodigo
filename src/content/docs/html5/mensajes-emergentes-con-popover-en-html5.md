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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ72ZKLI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCnTRR4zpS6EVreWUdSKkP9RuYouzGu3WFeW5A9HM3ZzAIgPysH0ujtTYj%2BqIKhijGM0iILC7FiUohPSC2T28KC3lEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDA4sqRECm8tpMnXuUyrcAzR7UsoJjdOYl35qYposNFGQDTh0j0sU24YeSaPxDC1xFpWfCDHWQZ2%2B30fiBNoerJ%2F69v1n2VDSybofAVJs7S6P30XOgrJNaO6mStC3E8stxsdJaqUzVcUjyJGvwdjkj%2BvRm%2BdJJAiOgB3ICzObKO8QOzG4cJHSnetpRnmBUkaSSl%2B%2F0GbMMddMpZJg7OtvS2tN13djb2GlKHTwyASX9%2FD9ba9sM7eQEMTtRNaC7tpwRtQfO%2FICg6cO3oEP6jD73iRzuuLbMl78LvsJULVVQHAczsrFfqw%2BRdqb4PskgJ7zM8p%2BfbBS6UW2twsC%2BSam2s%2FamTHgVQOA6t%2F7G3P2qmyZ%2FNfGHRZZ0MxHqObxEAFNuMIxcWFt0l6BAJcr6B4dfTSHQx9Uz87cR6MukXecDj4HHTfi5NOCCBbchXFBG9L%2BZSOvXplT%2Bgza1XISfMITZZwR%2FMwf%2F7rVgJDpS3tR1eufGsyZuxuysu0h%2F823WV5HnL2eiHMZdlZ2IrAlrfpZR3XRojVD4oQBu30PE50mX3ArCfbNW5ZWjzoRJCrGSCbAJaHtnQ0ojETlOjE9kt6KQPmjafmUqmw60FR7JGDcN2jaQjiCm23Q217Kqk9MBgiB65nrUzd1N5oIg2zlMLKQxMkGOqUBK6LMUSTrr1TNZ%2BSqzUho%2B9x72XI8JP55u2ks%2FzXo0bd3HcPaqjjh02%2FapM9thpNROKky67Xe1nYyQkjoMWbuPWaNBuyrSmHBw3ptJ41b446rrg2Zc7KrMH39EZfZkaooa8GknC8CKpPA23Wxmub5jkcweuHhK4MwhQxFXFaGl8B4bvvS4UW4seJL4gP6LBRWwaaAZ7oyVheElcYpZmCJNXkMvbtr&X-Amz-Signature=1f17f4b2458b79540a10b619cad404d4de6cc6e7586e53adefb44230ab7cf156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFV5WJ2T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHI5m9mZKRxJl%2BiLE1GgvDiC%2BixhIt7%2BuPnmO7fHlqknAiBeVI36aQne0rHNXefHpa4l8v98h3yHb%2Bx9P%2FBRB97woCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMOT%2FbzjrnEZW7XPsFKtwDR53VxmyEHUTTZHeOTNycIb9UjgCruAe0t%2B6Jjvg6qoy4ttrP5HdLKzWtauP4eXczuSvaMaEZCLHDo%2FIFnxnQyHqb5edEy%2FE%2FpU0fOW7dvzNe0TiVHYedknuFIhiSSHDTfpOgVBn7ph0UE8DccyadWPijWFhC%2FYcW%2BWa4vWac%2BdpwsJtNNNGqaROiyXTt72dE7x%2Flrzc5jTJte3oTIjIslalJxVKggBWDRMxNUqVn5uzVHnLN8As%2FkBTj4kLRmbsnJrvXJBeizKWKCdZL4DMUAwubCYqRPQ0Ze0ddkWzwvPTxAcM0%2FYXIWcGZNOBvLe5eswlbvKhN34rox114E1IOf9cr4hLLn5hIH37lvh2MxutHNXycZJ9V5utJmooBcBB2KAwUr8fCoDG34lYINrmbpOGWXEmhPzac3DCZHiLYlurkieMCAD5NGY%2Bz%2F1SOtuo349LtDbnNqDXIJQfXXmSe0NMnQfgIFwj3uoYSxFL6fn31t5L2a7OBcoF7u1kocC%2FyqB4nBGLCIA0FMlkk1QUe2jS%2FJpVCg%2FYOTWa00KOSiwnlPXW%2B3yCPQl5G25MqecnbxItYYNTZDMEzhahS6BUuPpBcH9I9pf%2FhGBgs0j8Kd9NXk0ZjFvpeGWhlySAwk5DEyQY6pgEVG%2BiLeQ6tPYwOLjkZ8Z5G5oVFuL5guphESnZGigcMHqUP57nWwPXa6iOk2WuaKZonFn8oxR4VMy8sfvrukUX%2FXi0BcASz6qQRCGLelTY4fO2K%2BOIobIh9PjinRT03j%2FCKz0%2BPDfW3pf54hGMlXxRbryEGJR%2FHIuWgtUpFjkk0XdKANKRf%2FIQLwSCH3ZB5FyaAOydl4cDbLiei7EddGnyM0CMx2%2FU6&X-Amz-Signature=ad2f34fdc239f2a25c8a3541876133d8d460352808f2b52d9e593b3cc5481691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

