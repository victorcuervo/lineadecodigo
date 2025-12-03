---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PMWGZWI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCICLXp3TsC6o86ROBIIF8B3MNo6qZVHmmnCGfkbh08HLgAiEAtLLgvfFTnXYCbaEMwSRdntV7iNS1FtIzsC%2FCYEJ9pjIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDCORZou8A%2Fqv5KNaBSrcA%2B71hNHWmLzwtqgMEBWu76WqNKPfsPrCJlN58LTS8PT%2FFHrOn87q6fJXHXqEzE1CpV7VGfYcz5hY75fPXruW1iaAPqJshbYuO9y2OhGuJCOKDlqDmITlofRMwEWej%2BEni%2BEKr3hvoUa4PQ95M2Y2pNgJgEJ%2B%2FxBD%2BfFWMKrpmgWWYfF3Hu8IWxLxPMhTjzwqQmED8hDjFa%2BzMekMwOq4aMM1M4r6QpfoZ5WhdAGSIUVuxf5BgRKKicpX4byIYL8xHB384e3f3YgGa2xDeDWgrGweixPWpnsxEjf990LiJWlSR0Pqd2%2FxTTpg7KfO4UhOBA2h%2FDj1W4uw58M8O3X1VKHl9IA8PCk3WjmcRXuFHKM9YwCVgj2gI6KCuTnsvpJcfXiA1nUn%2BsALMTQTX7De3gXNNYKY5YW8PTtCWcoDgKavd70FzP%2FLxJkfB%2Fk5xAoiLxPGzJ3hMmlZ5EBi0XKu%2BbjAbut0WJw6KQ%2Bl5zdcjy8mXgDiA%2F%2FqQ1RxL7GxzSQfgY8rpWZjsy8dlbwXGN%2Fr3t9J%2F%2BPr%2FClFw1ODJ4p4yiuiQoebbnQq3etT6QKfQrl2ZpIOlFxuVvp4sIjCMZq3zz%2B3vF2r5scbXjWv1ffd7yQ9Lf1zKgmlILkozOXoMPSZv8kGOqUBDQJ7%2BVXheTOFE6dr9zy4r0YhNfy0IQGKMPSIa38tREZSrsKbLZIS%2FfS5x0EdrsFRoHhswoaFdwwV3whTEV3LVMG%2BbxrKsW%2BqTPGIwbp1vhTdE7h5Ka%2F%2FgmAERthbVI8qUFQkfP%2Fzcz0uTcWHfzNbtksKADlojRouP8BICQmM2L0lpKm0sXtGwhmkl9x8pZxOvy1u7FxAOvxkmupB19lTyFMis%2FOW&X-Amz-Signature=17f844f6351283a7edbf203c62be08b295578d8ebe11eef262286da04ee34fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677EJUQ6R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIA7dMLjgI%2FVjme2jUWeymeYVKB8m4zv3EkV5Owkeq958AiAIYZRVBWj13i6slbQPazDKn%2BBFwpWIFpK%2BX4%2BYByMmcSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMeL0MMtIBsTnHTyRCKtwDM%2BWhGNVeu42dXvmK3iHG0CNRn3Xw3HLV3BR1pREP%2Fz253cHDWw6cWDWg4ObdULEdjraXs0Y4%2BWf5zvzMF%2F1PTlCuzbRZd5CseOyEAgTxZFI%2BOO6oeXovkuMTVw6GK%2F%2BPdmkF5XKoPlqmIsBXJ7ORNrhxSTf%2FQihq%2BqbAbwiJ0uQAkBEh4RzVOnNfy8TlCEj2eVqJwFaP75o1tVSbiDMh%2FqYgi%2FY3LQzhFa%2FY2kMk9A2m3s6R1pgBZ1vOkCVSP1Yk0oOR6%2BXC13qZOTDEZPC1DO57e6FlcOiPG1tuowRJtfEIflPf%2Bo5DdsjW3Tv1h4okzfYBE1FW9SD20eMajRY4GUZL%2F3%2Fdwp7jWnpeDdR%2FLILolJJPpE%2BbSFWe%2Bc9AP8H82MuRIFxOlmJjFIp23HMWnUtrvPfwKlu7xQfcBwnFHRqSP7JAIa9Df7vlakKFDW2svBOuqHvuZJbSSN8yaR2wpBvDKPWgKfHbR1FNqZQMlzUbN4iZjBjCn98w67U28yZdrlGs1iShdEhH2tVsHl3xodXYd1%2Bn1XNEX%2Bgk1Koe2CiIuwAJRBuQ9JOF4e8AdCS1K6P9degV%2B77PRxKb4i7XzGclkrujpPYnpkj5p%2BHO3EgNjnU8BaOvhudySeIw0Jq%2FyQY6pgFe2tBmxNDlv6vEZI0JdIb04886uWWh%2Fml0pkZKKuJkz8eYdf5OiSBcT2luTtnAKnxjolfBhWfGI32M5%2FQoL2YwFG%2B9s4wLOMXxt6FP2rVaWeguHi%2B8MMWCkdsdRAOXoqVZt3rwSbXWIN2Vy9RYFXIYhE6cq0KPykv4F3LMX6ALXAsR5zKmKSfTmAVkQcvjGIOJnmhUKQTAyZ33fPI5%2FiK6jU04uOhv&X-Amz-Signature=f42ea40bfd9d7b49d76badfccfab59bc186eabf951b09a9e0b0a71b69d8e0908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

