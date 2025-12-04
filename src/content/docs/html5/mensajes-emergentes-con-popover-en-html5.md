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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DRLUTU6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F4dzZHr6SBzS8c9SB%2BW%2BpVZKmMx%2B9K5McLnW%2BNuqfzwIgAOEx1AQIp%2BzjJED9%2Fs4DLqWAdZzYt74%2BWtZCD8mU22kq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEMFBsPNHTNjXgfJJSrcA6CAtcA3k4ZB3FfXZn61JquSl8kkqcPvVi0lkWdpbJADXtByDu6xWWuNIZCgRpOYranQwnQdfHHqc8hF7cEctvaAsxrBSf7VAPyJuAZ9kXfcuI6EA4%2BEz81kQnM0XxAtbStmQXlDG2RAS0UJ%2FkVPsTRGJNG07BnJTTcF1BC1w3hdZThYKoMGvxx5FCopKlVjueRPaD%2Fr0NdUyeNdy3z6C6sy5oesLaPtp0IUM9vWK3D%2FGo4n64Tk%2F%2FFbLQgH4Fs%2FmpD1nrbGcVVTdH6B7zFylxGpc2TFtQN4g6ARp1Kb4i5CPrUeYpG5pa%2BROR0viOuRRtsmv6dQgCdPuTlHwNS1ovGf8gozbRmIAmzvB4kQ9SB%2F8Ynff6KBZsjsbusSXDlbTaKxlQIFMbz6xkXqzvSq%2F%2B2k%2Ftbf1ESUHyybEq7t809mWAKoU2gxo4vCQlqrlwY1%2FxNyjTy3jKbhZ342Z7YlHTEHDGT115Hb0s%2BSwcHoq0nTHwJYthxhPEuMHwqHhzrNfWv06ue2Vhk257WUeHLhcnaclQIXNiVqzZvEuEqC5HEVUNUAKLqXHKy3DO74Viu8ouSKQMV4xA%2FTa9hk0P3VV9%2BH8ln7lbhDRPxrM3IPOVa5bUdqDLQHTlLOWhY3MLSMyMkGOqUB5aI5EkEeiZj2u9RLGeQjaZ%2BBBXRDewmB0Skrb0W8FhlxxvE2suOrxO1lzV7VQWF11fCabLK%2FGbn%2F8DJfMKN57ZoVlmf9z2gGTw0VK2QAFUncYvg%2BvVYeX9nmC9C9rInVFxQtzQY4ySkVkGm1UtEfF2Dq3P2Hwr2DnOLl5hVI5FYalaXUvAjqa7WQNY%2FD7DqF1XvZMQG1eM3Niue%2FgIYofrTWynd1&X-Amz-Signature=33c724a53adb0235fa76bd531f8b5b1c13902f81df604fda0e8be6fddfab7e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S4WAN5Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChIFB1NiQBRJgmS1j7mU7R4otNzwtKgjx4HrF%2Buv8ebAIhAKDxkL5vysOlMaR9FJIFFC0rTQMfDalEVwdvXfh000WwKv8DCE8QABoMNjM3NDIzMTgzODA1IgxzW%2Bm8Gn7Zsi01DBQq3ANVSdNyBHI%2BkhmaYVLAufd3RMsfA1BWIAK7yF5aBpTNhoNQnSNYdyLKdDd%2B8swYoQH9b67F6VjOjST5JPoeSHDLp5rsdmSqOpylgDrzegBVRSnTHRQVNgVOGitSnCwqwCAah3RKKpol%2BWszp1hVBOgwgdX6UpMfZ5%2FrrEwF%2FPH7K3uBtllGDVw0i9QwSuy7zoWCIitXrJ7DEovQImAcEQqAWAw%2FXxndVvyK%2FCywSBi8Ma4VQfcisZrAUPcN9FAlDVTrZKCmOPFgv9RTZQcPC1zvoYI7yz2ikE68TSGtiCL3LtbQfkztHo%2FEV7Z0PXFuwfYoGqLhbgF7fJzRHBOQN57faNEVFdTj7ZejKW2bfacjnyRx2gX9UT1TZvHfftFG%2BZkO2fZ7ghY5wJ3wQBL7TT%2BJ5ST55z3wdbphfYwQYxNPCFbORxlWqVr%2B7eRtunxoRAEnR8VrWINd9lTytZ%2FMT3DIBEgqQRhgu2ni6MbWKYf%2B0uO5TqS%2BDCrg3EbdXcKf6abO22JvasL%2BKHNDVgITiIJ3uebFERNOG51aLzyuSCEgIupWQxU0abWnx36dW6bQnpX%2BzbM9fIJuE5TPmURlUIWLwe%2FzCB4DgLnBK1cnZFeF4PsuGNaU97%2B3fTqKbDDfjMjJBjqkAdOpyUW3XV3THkPvxTOpKvBADr5kRxZWLsUrqnLi%2F0taK0uJ5yjB1S%2FnnUhmQu2rMQHeNTvG2WwkhBV31N0J%2F%2FhfwSehYGBdTZUYwGRchTHOgebuMWnoqZEgF%2BddqrrHbVo0TSnthTJC5Nh3cW7ISm6eEoqLx2b6f%2FBj8DiN7FjW%2F5QyTQnzhr53r1waJOnIsQEqmmpbVdhdWqqYAaTEGMp326db&X-Amz-Signature=d982c11e44b44c30c8ac1a7498a16b4d65a786bfb237563d95f31ca4191a9a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

