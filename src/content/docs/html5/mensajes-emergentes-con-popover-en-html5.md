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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OCRVHNX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEkSWooUVULn7oavZEg6CQlM66pdifeEUwOwQWT0aa1wIgPkh4VkuMAVDAOXa5E3EehgpL4PWtUK2170bktOx3jCIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDISauKPgarKGLoN6kCrcAzbGzoluaj3VXNBORoT7wtejs16%2BXmvHvJTuU4HHhc%2FaKFIvm3EkwevPJDXPy3t7bFEls3OtVGyL0l8x9DXf0sJWMl73xguQjR3ifuBAFXeLJMpP0TnkEll0iPdOntlvl1b8FJBHxYgNIuT33kQjerUBdJ7IUQr%2BcQo9E5P%2Fwq0xjLdAvypy51wlh%2Fg82QUwnbhTsmXcZJk3O%2B3yjpRaLAeztYwLRJoZmTczBWXxmZpkAyG%2BZ3KZ%2FNerWh3ZVweO%2Fguhq7KCKgiIjHAFext47FnVOqi5DINGOuHwsFcFGYbQQtMIN0Xl%2Fa%2BCRxqFx566Pitq2%2BQncKEftBMHJ9Kw%2B%2FyKzd3j5baaB7TzYgAvAJxWMz5oxpX7UbuoRKeuyPx80HKhJ%2F3GF5wFtGJoZfool1GoHX%2BKc0oZILU5qj1Ex5X4JgGrswoqvnRq4%2FFvUW%2FY8FLTw2RNiuVanwqYkLFIQn9GdhfpCqrOaDpxss1WTEPHc0UQTT%2B723BX8fTSXOMFj76YqB2XbooHHv9PzAvir0MN2I0%2BvaIrB0hzgow%2FpYq4EHFjujS8jb1SznH8vGGQ8PDqu1MB3DZlzfv3jSsVdZ8pMOTEzV80LYVlv3UadFJqls7qwKbRvgLOnKtzMIzrz8kGOqUBR5EEJC8aBPtuW7zyKTsNYs2E5mlyuJA0o0o9XT2FGNrIHfZ%2BHILSGF9e5ykxnYKGU%2FlTItw8XguzQzCwBS78rOUbhL3j12eZmXZ5C9X7V2arhP1PE4dcXdhym9zLxuiylycFGJaJVS1HAQ5gC6URtiHXKJYZ%2FcRB9KT4LT2J2EDMLXRbn%2F4ubgY%2BvDgp7hdUEpcpwQ7%2F5mm1eko8SfuCTabQlqlv&X-Amz-Signature=f4b0a05b5dc01a4c55754a5ee872769f3f2ee3f7f3ee6a6b6d32913194cd805a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LY5JIH7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQConiNwq26VejIEjiiwXGUTsARL1VqVNc1nzqoavMNifAIgbsR7UfQULzGB2NoNMjcAiSj1EuokqbMs2oJlrFeqvLoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOAviK8bJIbZohM8WCrcA2dbFUqHWA%2FzY9SFCDKv%2BFBo3Opwks5jS2IFwkTaxaxpo6rj2vNsAXMdpz7lTcAhbyYWul7NBY6IH%2Bwy6Uv%2FX2Pmokhs31jQ61ZQj9%2FNTGFVpTOefGF2eW%2FfnQz3JhyLeMNeofIuMKVp%2FuvHJVpkIq2yRegCXG5QXAfynh4%2B1gWyKDLDU%2Flkf8sYhG082qN2UAez2KTT3DFyrAWlja9ogfav%2Fa8UCSopjlsArSU0%2BxnACv4kgPtgC2mkqBfi50TsBRLgKTF2JFmff%2F6Lb2BRfAkkhH8wvNt0vfObZ8IKmhgAtfvVA0Ng2o0q7%2BkeOx9jWxknndxhoeIKvRziOihkyM3townpz%2BvgW9qiFphru5FD05h8AQ5LJ0zeY%2FoJeQ%2Fwt3Ts5SPzQZ3vHT7jCyuNjGvjMn4Yx2e8KHE2QS8%2FD87Yk0M1GqjYpoJOdkdIrIbNBBzRabyObEtIOcbukYwUEUEcJWHTpG64axdkMg1qq3o7SrWOv9oyXF4t3MWWBfVuaZ7SFvJIbuJYxt7GOIBuSmZz0GMKOGyQA9vfQWVi%2FFT7c19v8knWgKf%2FPhykV1rM5x9rYJdLSdokSng4Wt78moPY%2B%2BQx7klLl3ZnuJF5p4mrsk2g6u0hzj6PAK6sMLLrz8kGOqUBwu7JHnvqf5RR1gzJs5jIUWbZ77QaEjrd4Nrt%2FI5Nlk%2B8GERL6EaDZebiRSzdK64Q3osFng09BzD%2BE8v44%2FhfH7v5s9uGaAhsGqiaJU5YIeGXAlNxV%2FpOQExkSuNOxFj8GCLWuFg92VZtE3yyuUYY%2BCaBejRYRBIT0XEHjSpEq2CrmqU%2BpG7SWCA4Cu19iP5wIseuLbZaIwwgcjWjMlMIr0Oz1oLn&X-Amz-Signature=2cae7a55afa0b71029d1b1ed19080291e5e36e73a52b36624ee2d96efcc98c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

