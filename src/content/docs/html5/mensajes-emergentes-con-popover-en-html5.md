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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPIYU3L4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV1m9%2FGUNmTSo9KnQmTeJFBy4GMfJMgzjKS2bmH6n%2FSAIgXedRDMNCKZb%2FntU4zxMEtZa4A2Jyar602rfOCiiq4e0q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGmcWM6ggFGdRl76FCrcA%2F1IYna5QyxtzRZwJ8NTR16z1GyuU6YEHEB%2Bs8FnGGgJ9ZiGNAaYvrzPr0Sv5RXkI1QrnUz39jURK0EEc3MLcW5%2BVfPnzH3VRXGo67ylZU%2F2qanUm4PWesdh2dBQQqk7EwReZJtFbSmdLHpnHNx5mQorYKtgwRTzPNGL7Kt9DzJh7XgItYMLH6DG3RKKJwbDkA767Ox8uxnZkAfYQf99wwfYw91q%2Fg14iH00WEiAu1JnQ%2Bg5nP1qmyzgFC7S1L%2By6vdMAxJOo0Aj0o9G12EGkzF0g78cYgrJ2FvEz4QhB%2FKE6W%2BYz4xxppJcbAjtXLbVBmD2BqiRg8kWaXxc90aWpes9jxZscx%2FQF%2BUw%2FdBV6K26TZdrydhqu%2FabA%2F6SjC%2BhCeaRoeVk1MCbCbBGHMCQIDbmlXz4m%2B1c86EkI7lWYf3sureQFXYy8%2FwUT0zwLbj6ptOd5Z3aukmH7sH%2FM%2BzrLKoBa49LqP9y2Z9D7mIqMUGSInmJsIlsNB5bzf3P5ZjZEJmNE7AsgnqEFr4kfq3127WGOV%2FcvqsrSXRfhmJBJuPE%2BWN3t0W0%2F7xFP5KqFG1ysKqXs8n79gVaISemHakUzs8ppPrAwGoL%2BXoh4ZxD%2BikegExIABpx7HsmmSLKMM%2Bv0ckGOqUBTdkNzNBGjjS40EzZ2K4PgBVYmThX7RbZGN0PaJLMtjQdWhqNuyV4bTjo3HwzFgUVFSkIQ6Im35D7VXTde6PK2gJAzSf%2Bdbm5J95yTbH%2BG410aRgexIhMMuJ7tqL9WW4oFktwENsEz%2BkGaj9kNBPipH5LK4N5wgvQ3UDo1qkVQ%2F5OJ38x6QMemEs8qw5sqNY9kiInwuJbDEUIEA3GXw6yCN3Zf4JH&X-Amz-Signature=8cf6d3842f9b409882d5b85015e3613758e98b6269566465ca563ac292144d0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQFOJOT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWJYr%2Bj9aOYBPLKJ1IDzzG3Pex2ueaUWIwKrh7pvfUSAiEA55zyT6BDLHzvSXnXxRt8Kcr8wjUvw4uqpixGg1IZnH4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAfA3bBJEp5MW4sg2yrcA0VwtXoWk%2F%2BtLfNvz1Ycx43oXMYDJkI7j7ySjOXPyN9QEAOc4gNqO7sGhModl25VLbaNiHKENbT57vCzOY2wUxSkBKrmtNVr52uYezxoKaJI3D0h8sFZQ9HJpxFtB3m%2BYbRhXcYfD0OGg2Xd7d3zfeGMzNCgyKaEWkzDtAuJ4dxyzI39MJhjujt%2Ffr3%2BmaEyWK8Eb2rwqnaOuBU0QLB1Yn3R846a3ZsDTGH6Zti4KOsUwiUvpQxheIrvndBqQB6zlGPglyj7Gf1w2BD5Z%2BAy3u13MKRGbk2NeTrhvwFIdNqPScZrFi2EsWtzV694Mn3sZguduay1wod8GPNnfRiJ68fujEOrBB%2BrZPKItK6GY5MsxIdLF5QsD%2B4%2FfJAQtZ%2BRMuTRSuWLtNhuTecguA8t6LFT4z1LznoUfjZkNLWQbLk%2Fuv9SbNQVPbPYt8RzJOpupJ1kaMQqv4yoAVSmgT3il6pIgqRtu9ucT3u6bveGAE8zMEbRSQA9B%2Ff703iguFAmivkEki762hmN3ykC%2FD%2FGm3p9zNw%2BObNix6dYJKmR%2F5wA9y%2BydNiK40LOLl4xIcqaXCTPckm1V4zNOhOD9CZcvuJlhP2P%2BYpHY3TEBR8iApFbt80Kw30SLeNXQK1rMMjK0ckGOqUBEduiEiP%2FgRAHloFpgL0f0GYiZyvtlABF2gWOCfnRujpvLOqWvAP7gshXYF7N3u%2Bmq5f1Ffjt%2F9KPsION%2Bwmk%2FnShrbin4t%2FVS%2BVm437xBlug39kdHSKCwVjMtwzyUnWwquQp%2FYcMxLlJTpIIxQ5LR5d0fDWaqPjudZitFVVX6x4s%2BDNCmSStwBiw3eyWN8gN%2Fp4Tx%2BQ9L%2BhrQwioY0k7%2F4VSpj6T&X-Amz-Signature=653a4420787fe3551b9728825c03c8ac736ae886ee839b484ce7dd4248477286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

