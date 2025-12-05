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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IUYY4XA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF17ZQarBS%2FhJF5MV4Kmizz3rBgl2KI4W%2BV7lxujuufAIgOAek8kCHfQYHvJ4HnaGNA3wG5vAtPCvF2SlqKa%2F72Jwq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPVFt6ZQbU0MgWRpACrcA7Rt8hpuSbK7fnAQ0XBh3Gdt9eObg6nOS2vx6JOlA8z5Oji7zgidpaGXx1Vgb5ttHBl%2FxDswzDqOsFQkIPGZFfFabqt40U5CiTrnjLfk6TM%2FiXQCKZRNrw9K5h2TlPWLcOkcUbTR4Kjv6u7ONGs7btczLBb7S2f5IR4uS4LKk5SiNUs56L0zq3WSBEESuFLbkLfAifVggPO4LbmOhevy%2BOCvym6jtPajT7MfEreovgzeCrNFS0y7ZW2ZOOMjBeV1aIoGgpMd81HJyZ6th%2F8fRhFdWB4Gus%2BNyii7ZOgWJfHA6gM%2F7cCcm8dzvJ3SZb31QQshrHAsKOiJcqouk9KzP3ajzSl1Fh8Iw1Ye1F9cxa0X%2BpSsktzJ3j7MjViF36Qvz3tjY%2BPKoZrnTZsoMH%2FDa4%2B4x3ehSFvBTwhSibDGl6%2FHW4XJzWAqP%2BBc2efAlm%2BIUIA0RV4SBH1LTJJltpAhRdgbcbnCPZLKk4An6ERd%2B6gBZBJFbbJl%2BOsy3AMdSnCX%2B5ezgyr5YjElsib%2F%2Fxx4hwNlxq8MyKE8zTaBhX1q1Aqw0aBTJ%2BHWEbY55Hz%2BIYb06ynKmg3tw5AhvE7M1Zy7AkXgk07CCH1bznOmpbf2ON3m%2BUK828rPmxKGkOtmML3vy8kGOqUBwKYGZWsIKKqpgudbsWOoe11kKZ2HjD84SOu30rTSRzJH7nTx3%2F9GV%2B2wo%2FJDb6hmYRiWljR9esUDcCfIX7TPhTDaaStoHD8gNvxPi7bdbrgVWl46nuvVJjsOf%2BwslfgjrK7dy%2FWNLMBYdVMcHgeaylDlz%2Bh1GaO36FhLlvkq4fXBkYBZDvdqdKSA7OlTPqNh9mFYCkeOyBgPrfopulaMhCHN7eo9&X-Amz-Signature=0c418439693943421d9ebb4036fb0d00a4c784d2da0b198fb8f09caf3b1e475a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXQIANA7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSC1R1YjiENNVnAtvRceJwV8F0fy9y3zaxQ6jXd7waZAiEAidIiH5veQY3dfMWFl1TYZt0PrA5Pj%2FI%2B0JsQJ8Bxu8Eq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKNtOC%2Fi8qxUDkf3PyrcA%2FH%2FtQJ%2B0oulKGBTUB6Htv1tA9Ti3Mi%2Fwt988tJdCB%2ByZB%2BL30JRsi1tdEr6Uld8STvMcJK%2BeFm%2FiURzOodGI4m1%2F8ef6wrD4IYoQO4htFFpMAeh%2BtRsX7n5tpuTHf1HRZZKNbpwum6ISQcC58iwhqGmbBoN3%2Bd8pDSuHfB4HYKdOm%2Fgub1%2BbrBYzJOwNn9Cpr4GnoTe4BHhv5acevBtd2Kr1Xos9NFQRgq69W02Xvy42fZjjJVZ85NYJUi%2Bj1WhJHjENPnXtT%2BjHyvwOX9kCm80nMyqKCecChLui3bFVGESKQqN%2FPwWvEJagxRkuMFljBZkFpTEVTxKVKVY6LBBy1FBdP8tGqyPWY0jlYTZJKXZMUKHw%2BiqTfQ%2Fxbl1FUfYDS9UIDDAXOtWE9dYDCA%2Fht%2Bjn9iCs5Uwh8qyoqqRb04fl%2BKXarEXe2Hxco81ONDXbbxyooPsrj9wd18gbnYYKVU8AaGt7OPaUp623LNN9fb9LdoYwrJ0fGVGzW7lVlJMeFOQfenbYZ1v6Imz2gk2LnEq%2By%2FVzCnxsY%2FNOXdsdQsypVscNntjf7zplzfjuGVgQQW53bb5JDtSLjbTbOiek3IvmR9TcQLzRdaVfAu39g07ifJHjUc6P6PusSwgMNfhy8kGOqUBt%2BAwACm1EU0YP5LVwRFmTTCZPj4zKgGfQUY3rMXmUDiZQh6nG%2FaoHFQq9qUOvDgi04sPtxcxcBHHiqRMCJ%2FMihM1picLfPDyYvxkt5caX77hNqYCqpWGauEIGqfE%2BsJF9y5CXO2ZYZtov%2FUbZXS8So5SDDpImcOpWmq%2FGPwi79HTV9NIqus4aBIVaKAo3M8w4Cv1T%2BHCckT%2FjaswsB1CBz1mSe2Y&X-Amz-Signature=05d1843be61da6b67545c0ba5fde0d4da3aa60515d85cbb72a724d70da225cf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

