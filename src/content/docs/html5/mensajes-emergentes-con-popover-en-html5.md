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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q33UDBAR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMsIA0XOVGbjy6PoSQDbQ3R9slMmHjc47EtvKSRNiZPAiBuDph5MKjsVR3UhRXuJgVo2xZ1%2BPj%2FfK7JWpqVbupAFCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMdybxzwvM2pnVtIouKtwDnKyuRS%2FnZV%2BrOCa%2BLMhSJOtW9C0bdyHHih2XEiQEshOeClImlqHwepz7P9%2B6qxjdO1E5Nqtjy8m6utwVHcQOgTVzh5FDFVvXOnYg9QdTeJ8A7PzW2yCgdVuoD7qhpsX%2Fl0ufC%2B0TAN03fwqHaBvT3X%2BbE4QhkNxVGTdKEkwAPdtsx91D%2Be9bAqDrRL46YxMiGu4dhHW4NDFnqmWauaEvZQypy7pz1GHKNlHLeH8LuXFpO5GxEvdQpnvtmLlFqoI2HKxet1RPScmhuOoruP5OGfLmuWG26Bst0Ir8%2BbxpsE16YKV3ZVaZmJ5DSf6upyBeGRwyq7Up6do9OrVxWDpW5xT9BCVkCKEvpNGOEmhF0dzIYUVB%2B%2FtNRiYAngocUlkOIiULCOqHGjij6krhlutYV%2FX24XhEgWz%2Bn3ENO2OWqc4FP244XgB47NhvrefR8l61il9QmEbiPGdzXMDlzdnKJ49k7pqOWMAjDRkhBBnXIZwNe2n8GvZZDQWQaa1v7lMfaPZnnkiphhgfAKxd%2Bw3W7%2BfAMtvTsl8qF%2Fp603luUhHEr%2FLNGL9f%2FlIueG6Ade5z%2FCfJj%2F7MAvSpkNSmdndB7FqVRkGVGFBasXJL7XP%2FuJtv8VCr%2FapfzNlMbaYw74zIyQY6pgFqtznj%2FSz4CYlTUEsveigA6LW%2BiEY2H1b3uArzaNcgBoj4FxLD1ETq2D%2Fe1Q0c%2FLLcqYjgCN%2BUb7AKg9NX1VQkIgj26wD8TeTo3n7A3dihPOtACFTZMqOh0cGIpjPu1R8h7%2Bupt8eH%2FVBBqLgHpLhc1bJmV%2FczPuOL1vfWokOElKq4eyeIwPpKOtbKjCzwsKY77J9ogwZIWQgZCn2HhA7MycHOZ2SU&X-Amz-Signature=66e2fd515b82b2bad7b38a0838cf755cfd54a650f0f2ec6ce0ace56597183dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTFYMHRU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjNyCiU%2FSWGKDwC1GoFgVmoIc3Vyc16hNAHapJyldCDAiEA9FgjH%2FsbZgG7lG7uXhWpgrK1WOLG53FBRee7ZErPZ0Yq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPuRyOOKOVfnII2%2BDSrcAzbjVkJdMgecITBLteetCkWRnew2lQCm8pgjQfOiZBVia46xyLJfs71r%2FF2nxSJqg8m3Pf%2BDoPZuaJSJftORQ9wJgmIAC0w6UTJvpzKK1NajgV6CHv%2F5zvnuwK0QflSWZ8jrLMFgBF1EpzF77KnuIuGm9sbK9lbcxDViHBEsafDpenWf9zn3BgJr1dmZruEwewHm%2BHnwJPTLqHQHJhcO%2F%2BD3N1nRTLVWxpN%2BbApFzn1I3BLXwPLGSY8urpwX%2FWyctQC5qSJa2oXMV8WicmcyUOGTWHK19gfRjPbWbAXe8HDU4HV9XUWUk3kgFjdyz8Lei7W%2BrpMY02UtH%2FOmSIP%2FdHmRVVsEHjY3kzJO7lAQwU%2BRqx94Bl8pyWnqecAIc4%2FvVp3owRYuXU6lVdtt7KP2EzLNcQmgm%2BqekUa3NvTNACnJ6QqMlqLjXBN9ecAKNFOuY%2F3UIkaQ%2FcVveoCsCzl%2FeLQzL4b0Dqn3wade%2BW5ANkn3dPygqyu8c6WDAh56jpEZfdmOAqcniHamrgtpgUUIw2%2FMpljyRiKXTYKlFXRRdZoldoLjiEihRgTirGufkSZ7IpXzMQvtjsmlAHK5aFUDqrB5gir8%2FR6MGh%2F3acDxlp43dVYMtj1PiF%2BC1UsyMMKMyMkGOqUBjf%2F9%2B3KmVuNoElWpmL8JAYb1t8isy395V9LmmSFPia7ji6S8eqtOtqMkD5Wchr0Bp6B2zX1JxuJjIFswmRlMasnJQP9yXpxiBPZt%2BPTZ5RIBlNOfou3t1NzykFdyqf3Kwx9nXGZZ9nArLNXJkAqaGmWn80%2BV2ZnKjqi%2FjVoR3dBeSx6hxjJM9fbMS3KhgCyfQvPdbsNToJJxii%2FtqdjdD5hRbKEI&X-Amz-Signature=e5af4455a0c3ddf4c82194b65fc1a674c8560e4320c58cfa32a294c448b8bfd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

