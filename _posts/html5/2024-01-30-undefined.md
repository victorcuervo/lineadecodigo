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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMUBORT6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T104126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIG9aXiBcY%2BiO5xA36UcEd%2FL%2B6EPaUYO1iaqe4w%2BNVdLKAiEApw1qS7oNhx1QXniU8kyhE5801BcdtwW%2B1mxscimXheQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOv5Xz5byWtPuWR5dSrcA5eqrh2P8Nsj8uhWZlU%2BthxXwamYWwk1n04SkMFQ6QU4z1oVGOU1jmkYYVtWKUfO9vOuLHUSCAulXo7g5I7sfi0JyQkKxbnoHNYsJ8Ign1jkAvYtmuhhbmuz%2F%2FHszpug1xr1g506S%2FTc7goFSIH9WYzSzbkL2OQNJI4qM%2B8ID9UPP4893fO%2FB4N5AX41DfGdGFpAHGLYrroirr8xvd1kUnPNQ0O1TSOpg28fz3NLOJigfKjXdC2einl2HdZmGpWKtuHlMZkDU9k%2FKuZcgxFFO4v0CYVEsKkvNUDc6mOgENG%2BaGW38nBYfJFquS1DaITwg5Zi5UK%2Fr194bNrsPhAco84PNLPvwQ3XBYdJx0OsIE8KfSyqnPkBH%2Ffwg44ygJvRrB8RQXes5QA0JsNp2mwlEWmXIdzUTRMAVsaonjmvqNkMEwhZB0KV3fbL3yUP3smeOSGPJOWbrCLngkgqb6AlzhCsDhLftPHDR79dR7FDDqx5RbfIok51Y0oDTrC%2BUpyGos9Ylof14YnoOTEqJ6SiE8APyAameNhe2TqtrGWrbl5r6ajx35XnWlhLCGNG2GFZiXAG6VFnt0HV4rTNin1kcMU3ZYz4yvBDZPkuQtPmkdNSXr%2BQB9tZHyOwa9V9MPSSwMkGOqUBIm%2BxfzMO17O65ifR6yq9z5b7twiWBrBwaoHToSxio2WA9SHvPdDvHT7zraQZkD0mmGEtVc3YcQO4rT3B9GyD9sr2rcFiKcHQKxo1ZK76qkj4Pe6PytKwKDiZZ2S4qN7U9Jh5JCrVjxXGrghIACaJMXB2Ud%2BN0qyFNDvYM9ZKc%2BT10Hmv3%2F%2FQCQ95wyR2DkFF43EFC2g9QABKv5%2FRcIUzaZwpT4oD&X-Amz-Signature=013061e4cf9ebd541df122211c29db70318c018add2c9e013a251e76416a0e85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTYS7FZD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T104124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIB9XcdpgyYUAzBSbFis%2B0u4wwDLSwQsGemtRvCsColr6AiBk3SdSh5Y%2FaIwJZtWZBWTDAYlLcBVZNsyHzEWtutfgOir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMVI2zBzS18HkI8PE4KtwDb7w38jn%2B3G1PYhDoplv2XBHJvWdrfWBhMKQiljmySpf4I30BcUwP0vWh%2Fhr59dCtJD72XNLmXiuOo8QKa4vURaM2xXdSmce9%2BrSmSjBWJ1rO26k7grAmiKDJjMKRtTUEsOlbRiNM3kHgPDFPjDW9%2BuCzjF9AqR0dzX%2FD3eZh3k%2B5MfNsCYX%2FHLjA5c1goeQCsWFcjHM26JZAo50QAuHKuwDZcnjLEe%2BbwZiVs8XCewHlq6EXdPb0Bt%2FMLNSYczFegGQQY8sakKIX7f12ihMQ1dQwzipZOKcwGQVZJM%2FKNnXaK5CgzlnmnECAoOfr%2BSK9re6ca9F2HTaCHQS%2BTivHJNbQ0QRJjW2%2Bl8kFUiMddw2BNADHPViAuDNumY1ER%2BXmm%2F0Uw4%2FZzZDzbbZYSK4bqda8BOaJl6D%2FYbi%2F%2FI2NDHmYt0PEknZzGwwL9BwQc84tkyXbanrWOPEWYSIG0FbXScwXFb1paZHSiWE9l%2BqYWtYOxI%2F8iFqpbjnyT1I%2FWJeA3%2FjEEaftl%2F0d7KnX0A7xHEcvu9VAFN0Ls0%2B2NZjWMflT9aTN8DeVoyuxjLojAfjqz%2B3QB0vWJRFkEpKGgL57mr6%2FQRzETCiosNcw3tfMrene4CzXvmgQrehF5s4w25LAyQY6pgFcNFQeZlfPj%2BAPcMfqSuww9I1057AoxT%2BG%2FWbBbTGmU2aaFUg7SD46PlFkksjOAsDON6nIHbSAjPmJ%2B9ta1N2mEpom8i%2Bu8nuf3uPm%2BESDF3VW1f16zSvuie7%2B1Pwmqw6WC75JG1zmr16939PhYLZWqAWqsdDY8WeQCj1FwdxJHX3lGCLwVnJWBHJBYxiT2awUo%2Fd2NxprMSzyDyrWDIT2OPHkV2j%2B&X-Amz-Signature=2b0c08e5d1e5c8f3002eea4cecb2acc37f5f8e5a52a5b2452fd7432766b71711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

