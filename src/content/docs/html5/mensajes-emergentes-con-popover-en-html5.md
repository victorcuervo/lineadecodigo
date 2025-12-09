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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFPLQLB4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T020347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTC0PI9B7ZeIt6juyWEU0O4HPBcYmER1LhIBDw341f6gIhAIipt3sp%2BtMF%2FgqtZWa2DHwXIgqS3PkrWiYk0S5QNYGuKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3eFI5owYth%2Bcn4yYq3AN810uqNNZMkwrAZh%2BOjRpWCCj%2Bs%2FSBv136IEpw%2Bh1O1sKyy9KofRZF223Boe1GLS7GFsJw%2FJq5jTdv1NMUMkvP7T%2FxBvPy6h%2B8RecPjrSn4y5qMZHvDXUG621eQIf8TeqN0pCWuqMc25dVQZyTMpGwWGZ5PbtI98VAzopcq5bH%2FVHI8nMN8fQrsvrkeBSmIwYaWQnqlwLZn5vy9o7I3RpYUgeOgd2wQImvvqQx%2Bk0MgzH%2B103oK35mG3bAJnRneWtkdSwqLZW1VeLSmuDE5FqL192b4%2FHHpeqA8ABs%2BrFzvErMJ5rZ3O5fpv6Xf0w1PK5VcNgOvkPxMFeRnc1ZwsU65je1%2Fb6eXNas7naAmP7qvrGPGXHTmzPXmAZZy9qZLha8JmKngjhVpo7rucvv3p5EpWlHHBjW1HAKRmE%2BLLsvf47U62s1JZCzoBx5sMtILdMXPGuMv%2Fi6OVN58OzZ6rNbvYRBsI4uG7Degc3QTVL2eKbSONMhpWyy3RamBUUt4F01eFRhD0XqT90Eh%2FdHCu8rK0%2By7L0%2FmbwD31qxXMwtmSHrBjwgs0xMUm49sVT2qWQR2iZBS%2FJ0KaW98eIzGlacy0JPZMRD2M1tepb4EfXxE4mWZA1CT5csr8FrozCS6d3JBjqkAdh71VIDlj9UqNGXSw%2B%2F0QJLX8cIHA%2BFzo5ctFzO8nQ1MaYwDqUngmnENy2bOGaynQeK4svwWL2ZclhkDoe9wuDumSF0K2V6MwOP1pKjlwiwIL%2BKr3zG1Yuk98YmSWUySiPTc0WiazR%2BIh68BXMZ8qc2%2FhJHeAJPuv2%2FAqdqU%2FH9HLpSDKldXboBjvoSb6ehq%2BBqIi66SnGc%2BL2XZ2bcR3Vx%2BSmM&X-Amz-Signature=44da723c864a826628215bb985fc7f5ba700912f1c9dea94a70bc6bb9060c6e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK44VZU4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T020347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMoxgTKD4eEJFczAHroLUTXsXp3WfTfUzmIte8vwhAkAiByi%2BMG2Hor4uEClpY%2FSlrYKjbjNrbraJl5QOQfKUJqEyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FDgaCJri7E0u1IuWKtwDqcvw7wO28vz0Je%2FO2gXINdQQMOtCQz2o2NjbnRRKdBRKxNLhuyCVstA0QSs2ajyWXotQcshQYX5di9JZAkyuNhyqew4yJPFH5xlxnvKKir5nbr8sJpA0QFyLwmLTBUmLd93aaUJtfkxXqqz2LL0LwlJjpMUuUtgJO8SHEhm%2FR2MNyg7S6WGFqdsmteLKXFIJxJJVYcYeu7zHjQo4TlvSJ4MFzLEMhAXKqTBbEkccJOJN%2FMVMu9aTHYl%2Fs3Vcp2cifAFREwUdPKxvlvgvuGCdK%2BK7WmWLPS3r%2FP7dQAKweF7Me0az3gxwApSt%2BrELiVO%2FT%2Fr6QNpu4F6NaIMzFSerW8kE151UPGSrSlDQ5wH7KBkhboIW0Q%2F4LInfIwlFLRVL0eHUmTNgxR43oe7c86hhGBI1NdvAuEqdWtPiuDVPSCjBDmTX8WLkE%2BekarTxQbOC557%2FPaG%2Fujkp6dEAERlpNUWWGfrZh%2BrHlzkiZHh9qZLpUh511Z2f52A2F%2B1Dd8Bu70yKwB6hhe7viqclDvBbonMjJW8UPCNQswU7eeCGS5a8bPqrWWD%2ByCLN1tKpxcBH0upx9b4XRWIq4XeJhZw5AKHm6hWfrwZ1bWFZdtH%2F7OquOdurJ8RKGAd4xy8w9OndyQY6pgHQbwfT4ShCZ6XlmRGk2bWLR5C%2FSreD%2Fk6pOMdYEIrQWTP%2FkwfhQUehvOnCLxQZpiVDLLu3hOzHssyPUhIsIBq3pFpslpvvobPBVPaF%2BhvSF%2BudGh73%2BjdDMC%2FiJ729VKVvfNvIDURfUmJptL6qMfhg5jTNmoHFQmP4ykAGDeVqPmkR4x%2FVJm7BCwJB7GSstajpei9G%2Bz9Om64ZlrzN8Hd18WKPMV0W&X-Amz-Signature=28de43a4a34c316bc945142e11fcb766cba2918371226dd51f7927c33b33e903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

