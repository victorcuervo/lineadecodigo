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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBLFBXA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwSeVmRyZFWEUtIn0ZN5A0XGGYC%2BYaOi4lzmhrLLgAdQIhALNluILGaCjAq5%2BQ%2BjPNzSTiepR1vCIv1e%2FVGrdEyLEQKv8DCGsQABoMNjM3NDIzMTgzODA1Igy4k0gOAGG6CTazANIq3AP2MZWpkRZHA6C3VXvYhpmVFeiF2dxwxAwWFIJlBZY1ZQ6M6gKKlSTD8aOjoKWkO%2BshGEC2GNjebuIjF%2Fm4c7tBTtqDZqAa1IrsQze1lhzB21NyfRsNyhsnsP5OX65oRjuhdjr8SXEL0dSXhuAShzUXTkY4gVV3uM5Me9e9EwJ25Pg0AYfzttCdplhxmrOmgkvhYd%2BaWM6fjTKxZCVEul8%2B%2Bxdr0WN1t%2FkqaN%2B792yBcBpyzNuDKDoNZbCWbrhAcDYT5aYuBVexK4Yi4iFdNEb0nZ1XAHm6%2FRqxRF%2FQNUvlmMo%2Fztm%2Bi8kc3d6f4yKTUhhURKK3ts0CUsv4wiBOrOjafMxHdzkx1wle%2FigjEQTdsXmbjiG%2BmiWS22zJXVtNkZC8nXh1WaFtURjlgvmfSWVDthkQfR7sVf5LdJhI5y4gvDsFUsgp8YtEpGjcswZ8ocN3s83A6f1FJvmqYKhaZaNpAzbj5JXj8wtp20V%2FA%2FtYh1IBTnpizJhXiMRdSt8AzBH4vBiBtLeH8FUno6C%2BXhLMdiSTgSVD9Z5nqxzJfJacloHYeUutZz3WEJq4ShMHM9Carlzw3IjtzmqLoa5kKV8azH7c9ifXaVPZgg8BrbI676VgbeJoabzNxI8AOTCVp87JBjqkAWL1Z6qymtf3NoRA2m1%2BIIv9hDmUfCiaFhoAAM353yEvEtfp2kh4usHaVkwd9m8npegssV8bu0q5XZSkOCWfo43IzcKUm3c9UIakZE%2BYm3WUfhy9srfZf9AxuK7KMIBCJ8P1j6PqlHsHUOTHoSCbpDVGhYsLDn0sH5l9%2BI8uyRWEeXxiHt7Ixgy5pyTdW2CSWA1EYRSS30me8IA9FQffRlqYseI9&X-Amz-Signature=2faa9e5ad5512df4dd655bc1204daa2a73e3e5e7c48d0be937cde70b39b2e038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7Z45VD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpy58bXFS1to0d2o4llcqyUxW8ZG%2B4X0Ve2IzgCUV%2BzAiB8TduSdzypuYXNq5CXr4x8vc5uQ8AakuTgj7hViJPYFCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMq7kNIKgrQiwIPdFrKtwDp241y6kxIGaBCggCYcVNhzvErA1WJYbkVKoYw91B1dMcPffm0zxziwLlGsvbLj0b%2FE%2FwtLeq4bvYesxmn3OBj%2BWxC6cPJ7XArYIKGr4M1kMZQp4nOV6EQd%2BijbTBoW%2Fr8rDGaq08PLWPmvY3B7kGqvna1Xx6ycy%2F1PErVfkZB4YbBTXR4xLzAbGxqAY3kaz8x4ham7tfMB6cCTUT1wZ4VTZ%2F%2FCRQ7sg3YMfb4zRaz4nn56PcIWpDU%2Fw573LrvvY2EmpM4%2B0nD2ykjsKEQPdYAhs3ThO9D5V6sPfyfmCuz%2BWBMS7%2B7Kv3dSTPc%2F97MoALXiu%2BswFdyT4PZqwpPSKZ6Od3yj6YDW01AVzhCVjO6FNvCTRotDFnnSWtKNcRXGGLeD5t53DHvsaFxIjj%2FKb8AGqkn0ODHO9n4Hmn8CQ3cm6ZETwS%2FRUNUTGIMv1Sjhd1S%2FUnitLGbbxOXpZSOs9bBuH2YM0y3F89G6zzejio4b%2FQLQ2mYvLP8iVHTL9rsDhmdvBLSg0qIku%2Fc9syW1NCwh%2FPgnIKZhGkKDLUhOhIIQ7ij18Ynqf7Sl5DhYIx%2Fk%2F4SjStz5d55NkIIRGyXm26TsuJn%2BPTYDLuuZ%2BK0x00va1bdDp2agQ6qnQjL5MwoKfOyQY6pgGgDkttkF5h2qQga3%2FIeR9b9mqbfHzGm%2FmedF7UCB185UVB9rjIny1xlHd2JzyzKXmR87RwR1lVgPkJy5tuzw5vZB8FLxWdDJtdsyx3hZZAilN%2BmfHbY4tDbJj6hAMGF5NQVbxmn8Ipbt3c6sgWtIFNwg%2FVaWi12VKgSsUedPrOYM29WUjQySC2gEHbemztvF1PCQo8Rbneu1%2BYS7%2FOJV3tX3dJU6yT&X-Amz-Signature=bbc8057ab7b0b6075b808b51f56ba5d5ef1062cbe485ced8edb5daa8a7aba601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

