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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DXVZCDT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICfknuK%2BTsbG9oVl9NDvZy3nsFXWhDsH5nheUrWTG9prAiEApThcT5eNe%2BD8jr3zv3ZKvUM5o2jkRtrPqqpG5UuiYr8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAH1MNIlHHLQJ9CLBCrcA6iHEk1II4M7GrvPg7UpztT8Ah4gcE7civHAvyNFnET2z2L%2Fc7XCxkWis%2FN4e5AbTwXJf%2BqYf7lJYMFG47vZh8N3ZozQGPCoIuk5hvHYxgxqtKOkGmsPYgso2W00IEAtuTP0rYkNXBirmlSwXN181ywPQ%2FqL2naVuEbUn6cMsfqPpz%2BrV%2BbJsrcUNFD7GL94RtSHAM0OmzzKWp97ewBH9QntWcgROVDvcBAELKK%2Fe0LMAKTsWOnhc5MGafC5xRQvpMYkeMZqA79IpvLM6fQa%2FuljQkEbLpveC6wW83un0DGCsdGhRgiEPmBQ8SU%2Bdi8np%2BBCbS8iTUcwWuCETcVAg6ff8j2eShp7eyzCztK3EMYvN0FV7iZPX5D2FhSd%2BnuokuVwK%2FjUWc2sy6qJmjkqM3DS2lcctep1picmtG%2FsDf8n6ANb8Wqas7wsWoUINkG3H2Orask6jhonjBrRV0zW7FXPq9jPnNGI5nTE3hXLuiSTmM4H%2B%2BXTxwSdC%2FxgZif%2BzO3UYircYh14VlfPHZdbiiG2n4EwV53iClQYnDPQ%2FSnLy097YVFHsZTj7AWpMV0lP6j212rJsjSV6GyReOmbU3WplPx%2BzY5%2FWhQCeKMbzcBWchcOkyViwa%2FsUX6ZMNTMwMkGOqUBgDSUpqONxeILezMRnIv%2BcKfFUUQNMPzv1ZyAA3A2UG8%2F6s0Ax1Thci%2BAm5tL04Jjs5cVtYROrL5n5Ycv1%2BGnWRTxI4IJGMK7L%2BcWnQ60m1aaURyOFGA2hAmNwyViISZM4hlc2LCX3d%2FjbDXy5SG0cB9LXX6cdDfYaj1he8oNL1DnwbR0A1N2OQ0R0hkyiSGvWJLpvSJZ1IPfkEMXIAQHdkL2RtMS&X-Amz-Signature=3cc4ffc88217ddade042cf7495ec9a0284417f66250d235ebd823d8962b0a30a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVHSNC7P%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICRN0J13PuODUAOKIOBDGiIPTcgqnxlI5Wk6Dt4L2f6QAiA5iZc6amc7Ij31QA83DJVdIHKUB72CCBgqnfonGRocpCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMWZgFn0WuWklXniMtKtwDZty%2B2n%2BKmjRxsQ74Tt%2FtQimdVVCfJHEOlKS7hDB88M%2B7%2F9r8gMYXiFRfpdOUc7s95h3QVMspk8Tl4HtflljOBG3ZwkjR4%2BULum%2FenpfTOg5K14BqzvW%2BqTw9oFHKts6OdbSku7jdTqHdF%2F3fDhObMIzpNKeutQirWzLj9WyWApnaZKgSczT3nt7rtFMQgRizr2F4nNeQ6dtquwT%2FSFXiDoJ5PckyfgSE10%2FqhLks2kmc0pTYYnLVbjF7xOm%2BUzZxqtYoalvi%2BtPQWNrPKUjrm4hZZ8RyAVMf42zaLVPQLLFiYh33bvfc8u2dosAOnfYeL2OvATZUkfcNwTdFVy248lLpCTDwQqO1xqSBVGZIjWLI7fjtNeNOvVIxzYOAbhBw5gujJYzOpkSoSo3YNq%2BOImM31iNreRRYG%2FWIoCmuHTb2h3j%2B3Ww%2BXDDHP56WGoqBW0efI8x2G3mwTmvrA2Mx%2B7Fg41qFQrHjNDs%2FZhEz%2BmZimHn6fxQ0ANGsbeYElE8smdSw5wVKbyYlJFLQiZqzpuW4z34rMcLQ8kcpoNKVHnE58u%2BPNSKuJdMRylCCBI%2BJWhSn3y7jRGlYjoy7ZRbTyf4RzIPiWtsXW9BG1lHDkTZd0nEGn3B%2F6RDfVogwjc3AyQY6pgG2R5jC2aZ708qzUGSXxNMRrVfaU%2F%2F9DudfJ4cDr8aejHNJoQBilZEZ4ozUVUqD8f971DtfR%2BE6YiplMWQynIc1mKrsTSAk%2Bv1LUgPDBCSTnigIOf47uB7gqS2xnS%2BU5ZkODElC09MrYhKhja4CjUJAAlOrPsOAMuT%2BEcTikLIw7ul7MA76t3hhmt%2F70AtugvuyBuw5lgd2UKa8%2FG0nwf%2BIE1WkRgJL&X-Amz-Signature=7934900f3a3e889e400992c5a6cdf7641ab69cbd21fa62a7689869bcafeb229d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

