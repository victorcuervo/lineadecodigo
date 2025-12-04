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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQBC2LH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIBMnLArwNq2S5T28QZ%2FT518UXCx7t53VJcoJJqc5upNcAiA7wu5pvfCi4omPOW86Jlo1wU9a4xArVgeMgddz0G%2F81ir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMgIxVNsNNEkmWqAKkKtwDPnmUmgZFwBilMUfITXxkjK%2FtxyhcpO4U2YbYQg%2BPeSR%2FBKBew3a1vuxY4MPuQgV%2B2ZoyaKDUf%2F%2BXWmL5Gh2jUxbk1jHqxElQyoPsjhq7BQp2Rul7MYyJCedIPcUpW%2BsEQui51cgRqeWMQ1UM3a7SlSg4F%2BTwkSkCC6ahedAmLzY%2FfXFG%2BOS8nZup%2BtrghDxSsQ%2FYLJ8B96iCWQrnN3u9szjAYDJY0FySi3CQTXBxbyg2ZSn%2FPT5mgVmP0JKGsuZ6fIuGVrMN4k01tJYMEPIfkDHwfI%2F8Nz80XH%2BrXikK%2FUHApc25UMhVr9Z3yXo7zHXgK51DJOinCACb%2FU7BIS584cGxETUR6S5J92VOF5mQcR2ev5a9PaJNsURhuSBvrmkNlh%2Fu%2FKfeHkd9t6onSii0nHv9wP%2BIO1h7%2B1P7U1vDw3ZZ%2BN%2Fcr4WmxPaqvwkqXUgaam4fyVp9o0wtz%2B%2B%2FyTi1JXJwx%2BpjD8Ufihva6GNdYdq74aMpMT9Dyd7qb%2FJlZ2Nvy3y6EEnPaN6Hl8ajhh5ACDJ0VMm%2Br7g5LH7zHH5mnUnRsIgkUxGuImJLzwlflPA9b36rxAcwh%2FwBPgAzI7T38xVfC1BLm6zclcERNsq%2BpbgjgrbL9vpmBiJAVFQwooPGyQY6pgGqcS16NVsWUd1s1qxPXITVKtrPgdw3GURkOM4InXch9sAUaihJ3luOvpxGyXnKqXoIlYAdV86G%2FBXXHfFDLkqVHZ9A%2Fzm1fMF7An%2Bood5Yamv18ypjEXuzgCyK1N5cS20G7CU3NQajUaAtvIrs1ZCCT%2BcYheGXhEkgB8Cp8Gv%2B3oMraNOITYkhRTfJNLaOJJGqyq%2F2MCY6WgIi%2B5oh76saUHdw9EAb&X-Amz-Signature=a8af5811d35932ae7c0381eb39399fda01d015ace5772782baa38f33f9a85114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDQFKHIO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIBfpJwD5pin%2BywhkSIDhc70PSGkJYaO3J6kKx8LluRFYAiEA054J%2BseTnn1%2B7ng2IfhH%2FqQYX5QK4dU3UKN9cnhUvooq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEj0gmB%2F6YHvwzDyICrcA0HbgCjCSBws8yHDomkHcNm8XYbJgUAVAYu6fseFD7aN50TBiw8yLYH9KPu%2BjhGY3%2Fp%2BxAinKkONf6VrgNU%2FOuaL5gn2OD2BB2MkUE9xGmropJIKja8s%2FeBhm1lxe4jGc9Kj%2B46FqImWcT0yyimc%2FeA32mVXKocE9HAtAXijlePvfHnc3cTNU%2FDLCNyiLeGOLwxXkSy4MImJvqkfQUmjDRLROt8jpWCyIfrzZS%2FOev8DRDWqetC18a2qIHUWhfmpBDjifMnHC8tpniL0G6nkWSml8mrSpBN9W%2Fvhdu2TT6h01Cbqg%2FoDav%2FEomsK5D4VVMJDiq5pUnpTYveKOeulMIC%2F1AFG2Ss9xB4pXb6sKn5nNACWAtQuw2J26zabCYg3MtkqfeTmLia2Yp1GXPT57cMQ6%2FaTF0NoPRx0L79s9c%2BPNAx%2BlElEOEa36iu%2FYlJ44f2n7PzqWIRctH01LSv4raUX18tCSIh2LV9KHR8wJEvX2vx4oLO6MEzcPf%2B%2F1wDvXF5EN6vl6ikRenNCWjbWqnlvtYabWheMgUWXtWGQrqGt0%2BdlwfYF%2Bbs0dkZt7WgnbIBiV0v0mj%2BiQV2A7YE%2FO%2Fgj9FiJsUHahlBOtgkrKJRhuw63kShhfWxjiK9pMOKDxskGOqUB7O%2B4lK%2BCBkartDhVkRgL78%2FAYHrymniTwU%2BstlPxgXzLJCb%2BIbq%2B7JfG4twndEVACOvpLbunDucHI2afKUKcUMo4KUMfoXdg9D1qk7N%2FmCNsqKr61yIfvrwXZrshq%2FsWhkCuhIgKYSK%2FVKNHphbNAzsZgPu5h5q1RfWE5P88wDHiX9lmBhBHMxKvCf8Y9uMObdAppiiIe2B8cLA4E5WC4VwTKzWH&X-Amz-Signature=ed88640fd0b95bfbca20c7afd86bcc213dff712d1fb1331b8b84299a22fdf14a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

