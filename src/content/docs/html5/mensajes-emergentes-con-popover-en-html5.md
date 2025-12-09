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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNJU5A2A%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz52O%2FGgZwfBdvopbhRDp7rWiJqhW7rAKvgMqT3XSOqwIgZdMLDFUjW4qwBP%2B27Gp2sOjuYoBFbj4tZU1scTLYViAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3ge4xK393PUIffeSrcA3RbGAdXtn9QHzXyE1UagVdV3LEe8s9KAnWdFlUCfL2Ala%2BwwZUO6EmC9ieURFqtEWHaxZe3drf0wB6%2BIWtenO0UOQmYF7CLEE0qwmuEdoB3KWr9R4kRfjdodMq%2FVYv9ZulYrMbBYTqEJDsnQ7gV0BQ2Gip0dHAssAipLKGlkMtlbczoltL6yLiZ49rdqGyLi3cBz4q6t2na7tGo4ZvJ7WiVv0JMcgyQYmWseA0sfYHNVi2qSgIfykqJJGLebpcW2KpBXYPuq%2FWl7xjsEJiWS1zSTCN9BpiZ2K2B%2Bk9Iv1pD%2BS5uT7M31ulvBeGRw2tumgSO9i0x8SNTiQWdhqUKor85iphfx9Cgw6a8OWOPjzMpuJn%2BxaSAOgQyoTJHe0y2r35DnZWJawmNPNv6X6kz8pyHJe7ChN7llSP7HBgtBfd%2B6ByLavHq977BKQXvC4SyvF5muEXnMcJKW81Jza%2FDFrJry8dx1fmvU1HMYdTOkL6YZJk7BCrGPzTKwLWjdXORWSqbhb0FiaV9hYVDjmepvF2%2FHKNIuZAW57jNgRxbhfaxvUIYu0t9YtV%2BsmfHb2SclwI0fOg0LPUgzeTjMyf%2FnfWh3Iij7oYyZvKH8zeAPuabtjzZ2gQ%2F7vGsT9EoMLjE38kGOqUBgs0QYvesbvj15g34RArmjf7KVllb9hZOD5VOrDtsh0cUf8lZgtsrg88Aa4xjtVCLOPsNQnI2v29%2Bq40u7%2Bq4jPN%2Fl4iVr7IxrbwLVehmvUDJaIUF8J2Qtm2eLZCHM3G0lUQ3718A4xz%2F2ntKFEZpgCdBDkmIN2NE4kHAQnI75ELGA8vrXFgTVQp98mEbnQN63cT7GxxLFN%2BPPNIuJfkD4jv%2FYmd6&X-Amz-Signature=c572ea0f7cec76def718e4a430a8b7e8566a6378db3b9119765690084c94311f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627OXM65E%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHuLeALArPahHWnxC%2FV0Ko3NbmpMv33HV2gPp4nQ%2FL4QIgN7%2F925zM6G1mt0V3HYQPx52gtS157qt5wnAcfOZVV0cqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYVlTchaiCPt%2B137ircA6cyjjgP97Ws7%2FVO%2B52Sm3k6L2aFBBd9LMKKhTZd%2BUQYJlalMczIg%2Fl893bDso%2FAv6%2BTC4rFE%2B0HUdb%2F8xImU2rgcK1AIfrno6i4F9d8tYPbE3x9kLFKiqzZ0rmE2aIVe0N0rD8yrZqZQJ6isiucRTBf8pQW7oKCmAhN7nGRVGkP4qOqM887b5lHKDat8eoFO6SF5mbLZoI86LHFhgOUjw%2B0cWjyMrJA2kwHxTBT7VlDBTzWWGgG2B%2BRrJ%2BPcY%2FPKbGzSXBxLjtzWm34jiV5IE6xxIsfdYTCq9QvzLJbwLFHibJvMw1XSLu3IeaBTfoWWWOXVXUPLeHIXEejYgG48CoZVAH1XwCJQAAUK31oMXbUF9dSUZaSrl3ikrM6GleXnZAC4%2FZzRSCTwEMeeG1V0k9NMNa5%2Fcj2%2Ffp0fY%2FWYe9s7s4bei7wXXBamFVxGPlgtksPFpZmYQ2h3Pf3IepvKQz563vRF7p1WZff4fJy6SKdi61qGMmbQ5vqaf1hmBs62FIa2z7H1stsD7eOhcSto88IxxBK5aykA5T6r98JXZVBJblSEW5phH6twIdo9mdqzBOSovd9D8LD3esFxEuvzEbdmB7%2FNdTbfJlqcfq756wnbH0eejINofkL567XMLfE38kGOqUBQdBrzNjKVd%2FBXTHtO4gr79hi4td7vrfH8g78cEg3HI2pSL6yzy41x5Sf2chPcgL33wIeuhVzsFZfknU4%2BlYRnS%2F2UL3NkRhOn5ZXm00ir%2Bu2mYGuLMG%2FJXQqgWOUyzBw1yrFuWJoCVmpOcXculadkUTmZhpxDDO4FcJIj%2Bit1%2FOOzwgkr1eT%2FPHn9lhIbxYR3SNq68wt4zG4PxNwRw8JyuUlcUC2&X-Amz-Signature=4bf294afcb837e39bfa752d6ab75db0d1c29aa70b475291090918a481931e59b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

