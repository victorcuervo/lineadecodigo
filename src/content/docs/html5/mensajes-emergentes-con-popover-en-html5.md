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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7BSLHX4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxRrNqm0Ti%2FrtCChBvd2NmFE3MAUEvUWvNCMp4FUz%2FoAiEA84q%2FUrpIWvQ0ARNfJ9CvdN1qDtEtODgalI3Ofq5l%2BJEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDC%2FoDmISYJF7QR7%2BqSrcAyWqiQaYv1ZTZkX2hIOWinpDx6qK2zcBz0lS5QtgHwbFKI6NZI8TOuAFJOrnUrDTg%2BhZyDIBsTaLG1h1JEq4OpQ8bR5jemXZmqJHtfCjv6c%2BSe1vN9bpdrPgZMtaGA1a%2Bh0897VQe9Xx9Qa3SRywkykNrZCLWjvrmsMOGAzYSf6JhG5yuKa7iRyGhlA2rLTsYtfkhIl4n8yPTmZJVpF1BB8Wx9%2FTMcUjjKGpnzkSd%2B8tdoeXgcs%2BB4T910oEuYAbEVbpJCsvMmSvFSwO0ne5nfLnIxxuW0luWyiSHmQw4L3%2B0vNW5k%2B4myczdH0gzmBDXwzD28DVWiuLbgHaqwHPldEIRYyhLc1jR%2FZWiRUCg%2BsuX2tFZ%2FJz5TfhAASImBH2rzUlq5BFk%2BckcAtfHbjimm709IT7wAvetMQKLyxp7LoIoFzkWvkzy6XAp9U0Z1ArnP6RWSYFwBGOKHOnMnxH%2BzrWJDJOZPEYsj9pXn3FlYT%2F77pLuumU%2F37vVrCKdFpFWRNcZfWvreqqM6FU%2B8VSJdx418%2FSeXfZTYQJN2oQry6v%2BbXMq7gnzAZB9YobV1hXWGdcFQuM5V1Cdbkvtyq6Oe84N22LWCJHzcE7ygULpPSDKnTu%2FB2j9xLU87fJMO6J0MkGOqUBKcdl4reqsi%2BR%2BWccVmRNzoIPiF600lmPp8QMx8JvvgpR%2B9Q%2Bey3RSZc9LbUVzxmOS%2FL%2Bie9KzbWHt6URe9GnC8MGrb%2BssPxz97EZaMAaaIrCf%2BxUp0mVeosSAQCHzULSONKPfPU2X50ZKiLyQOgGa%2F6HI0UlJX654J6IXCLZnd%2FOM%2F7f8aX6sUV5z9vhmko8GYPxDbCvxw7JIV20117%2Biqk5mBhp&X-Amz-Signature=8e382de5f6f2b8a3f547f8db834a53190e38f6142d710f2de9112373a7e3d88a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXPD3FE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGR27x1MiwhzGIvxglF7Qp8kTYlPoOlT2w8xodD%2FASGjAiBQTtTsqp118O8eM87hhSkRs1%2FyNLaJOygZ4KGG9CelpSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMD03PCN6AhJH6hp2%2FKtwDz9pjt4R5LS2bNDO669nYNOIkOrlOhTUB1lgwiyJ4F%2FErGdaEZmgRPl9RMrejqTBkeNYd%2BV62J8KLt7uj4%2BODXrvi8K29MI%2FqgLWvvbcQfJrPOJMBZ5VPbuSLArCKnmpsbw9shTIqZxCd4d7ZCA6umQTYB6vu7JG1r2NFzcTrBCLzij6mOMvaFbB0gvLnjYv6BtpNlpzQs4KPqH2EcIkV5HUP4iw9PaiP54GqaOTvK98X%2BZPdCxOgvEJuidn6RjTHFxx6kvMv4avNeaN2bOyGOmiirR%2FKUPw6okbEyQDyq%2F2Ud62zvH6rmZrLr0rG84iBTbMyJqpSbe0bY5SqhInDig3ZXYuwlEPPQNnK9g2%2FUqmblMiTi6PwZ3CGvb5WZUCtJF5cj9QLgS%2BGnOOyC6TF34333%2Fp%2B27h0TgKzwKlliM%2BHGJK%2BElDEwGA4L3mqNZ58TdvS%2Fq3t5SrQpKZPFMKBUegaqWgp%2FxTASVRtCms6YKyaziTs0o%2BasdrUfhreZKOiKZ1q7FUaTWGiEyn1FC7ptiJO89T79CYz5NUoyNEtxN3AsJQgxzzePPZ%2BQFtLY6gi1iGFEXNKtiD44ho%2BfqYQdtZqP0WOnQZ5Tg0Fzooja1myiLRIc72uDF1Q7iMwmonQyQY6pgE55LSjyKiZvJ3REX%2F1Nwz5Lhu5%2BMSpzX1jD2cAB6rUAYDCuv2ntAAuk9BHAAtTWY%2Bny%2B3xMbShRSPVosV5g2pFlXLlVqNdLUnupYIYEHxNHOVm4nRDqzvVRAFrsLRlwJZRuU9zuC0hmuwb7x0g4TzMR%2FE2xa2IjA4MulP1zbPs3GiEIXUx3Gj5H%2FDke0TWwHt3xVvTQfrsZIQIZ1h%2BONpYBvX93wTT&X-Amz-Signature=df4a17e684ef92457666e50fb22c40ead4adfddd730fe5808357f115bb40b16e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

