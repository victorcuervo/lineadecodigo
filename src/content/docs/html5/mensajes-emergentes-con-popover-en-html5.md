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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU6THNSA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC70dQolLsyvgXp6qVOF7xX7JW5oHcoxLHJhkzBs%2BidQwIgEcQfx%2F5WjJWTYQwCsbU6oaljl6WgsM5DQrFFSF5u88sq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDASjdt2tCQutRIS%2FyyrcA9xfdJHVXmTwVi72aPg9fzvhChNxTC2U6oUA41Wn5GhP2PFYoEKjOg6CceViS2DjO4zfzcwAoRbUH4h9W7pPZ8dCal1v9B7WDndBe8tr8QqI0vcoh8q3vowKofccbadLJJRF82xus%2BH4DofY7xiRcFU8eK7BFjSv%2FnmKUWscn%2BxzsYRfH87cj8XHjQ8bsc2TOCcLcxwkCXhv%2BF8kxBkNvRkjW%2BPfnZu%2B8cgT7cQ4akrRbcjSOzzBsXV5pIzTJx1fyJQgsKViruja7DW18SgEtX%2FrLmdIBDUr0zW0EDblpzYOmrEEr%2BJ1rRpWjreEV9ZI4FGHc2Pwf%2F50DhsC3hrGxQ%2FhcnQnDGOuzkSGvA8nrgVpFbzuhqnbkhMGFDHegZWUCNe4APG4asUPWw4Rpm8UII1FMcnfWYNIcIFQV2ThY047kUjjog9n1ofF4WLQ8U39gUUsCSImgL3xI%2B26lsAISH6FFVlwUuFDLnzhbT%2Be2iAN5JgUIXnbPqI1HdYG4ykfiCHeXrIhFOgoUZoxNC1leiPWdIuH3ax99ByCVEfWAIviYEmURqFwPDu%2BicGRPG7f7PRAsaG1SizJqSzmbruYVSOdt8C9Rcc3xn8hfghsF1ZH5rTl2Dr3v1YshtUOMOWQxMkGOqUBaYv%2BCYej4%2Fe4cbZ7VAuhX7RSzQPvkFdu8S6TzmbFFJ8KgRc%2B%2F0riACQc0ZCrcX2XyEtlxxRGv7TNpcBQKLyIrNUpi5sY97OriESKVU2oDE7DlgTryoe9aLuOXhVcfLqidP1s2ZaqkKQB2j9YdQMcRRrK%2B%2FHwbGoyRFYB9zMg2YBuWX9HqQYcfxx6AR4Si4znJ23UqIAClVyPLVvOc0fvqH2YdFX4&X-Amz-Signature=610e9b6ffd45f6b0f98a5e6c6da12b7e64575e9587a4b6a4749e7490e7091a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FW4GKHW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFleiVvq%2FQguiTTHZG9dLGqiVBc7xMQvyFUDCOJ3F95qAiEA30m8djDcNmcUz%2BN2MLLg8poKc9BLyFmidttKjiZx2y0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIKniD7eKUvrgnFD8CrcA635ct2vi9hSjbQ%2BgyDXTSgH9vUak1t38LheSdm%2F9c1I32N7qzeEqEO82dy2fh%2FI%2BkyNXn0aOiLyOrGXwApk8PwGCQsnMkpOEs%2BxdRK3lVajwTxVQVeesAHWrDN9BWAL%2FvUFOr%2FTCjDsG96%2BVLZrMsOwwibs4tnIt5Ovx0%2FzynQSxZPI1VKvzJWPEV9jp3nv4Nf9YJIgcyYzziC8p3hWwc5p3Wfg1pbKgwpdU%2FS%2B8%2FYZqzhCOiDG6byg1TVJvVL3tlD8%2B5t3peNKx1GHDJ1Eo%2B8oYtX5aj8Yfn%2FVwGPDpk4ZbGC74dyilXb3i9NEXcuDB1T%2BAT5zDCx88xW1EjehBq0XP7OxX819V0lpJm96cH2U1hqSjiNCeyj1DQlN40cWxK7U0jF5XyWIVogEbcQzEXm%2Bu4cnH7Dxmc8dNC5Ht7EtQDO2ZJDghLIqFCwyFcL3NH1%2BI4i3E4aIOieYRDRDDmJpayxHgUbhK6AgHPMQgj5QJBvRZZ5EE11wL3NrHVjzGh1gKu1YGkyCTHVIW9HScX%2BtdntHLAMQTHqF2TLwR%2BfOfflbTnShAYlh0og2FO%2BWV8JVy4uUNtrtGliKtis9LuszpM3%2BxGSkjqqQ%2FYdjS4SMDDBxjT21Ft4i0rQ%2BMLSQxMkGOqUB9Z%2FMEguw5%2BRfgwWUnd%2BCfjMYNoL2vLpf%2FPDdU%2Fr29Qmafh5DUqHWlJ5G99IQsqr9w31PCXgZgbPXuhL%2Fb2T1Tohnb9RvQSs9JdFgrspEVwnY2BZJMPZZ1zvcScCoX0xRFN6Xbkt7e9wCxXOsbszsnSPrwKzHqz9BfqJEOpbiB5zonvSAjVBuczxiMjnbEyDfk4DOn2rz2XbBLcK%2FWhTp5r0EsYq%2F&X-Amz-Signature=2574699f8b019ad2d07eabfe10cfa3c88f00d3daa934bce78c372265558acdfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

