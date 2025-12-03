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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K5XWPEP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T125841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDoing5XaP60ns%2F%2By5R%2BOkR171Ok7MFY5TX2l8dF4l4kQIgBGWLNsqKCJB4e0o%2BGrHCi%2BqpGiqXzixDpSJ%2BxVHTiNoq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOl0OzfBrvo2dXgmeyrcA%2FnjCaVEuQHGe5RcxnE%2FwWPlHnpX37h256KvKQPkfgh4hso663jsBu5a%2F93mnfYAHDAKqdLOKUI%2FL1vs%2Ba1iMBX80F0mOkyUsvp3W%2FlLIDrRFUtcvU9msopYQvIuuyt3Fcup2E5VfSqnZ8HjgSfE5nkyb8kC1o1lt0%2BLvSuhJ3lES6c%2FhBg9lfhUrNax2KWO74LfNncMBO6gR319%2FMGNDtYJLEDN62x2NNeRoxBmjbhG0Fx0PToM94OWYbgv6N5%2Feo7%2Ft9gWB1P3VODxnfroOsKEgjY9paLk1EtRKhCYIyoozJc%2FKIxOh4CI0z8Jh8CzYou6tixRgaX0%2BFOLFjgmqnuzxk60d97f8svQNnQTDsXl02Rr1NukejOzCcCGqnTjjQQqR4XXD8LjjTRgD9U5G3BH2WibulWvNp0XjodmHoMMC5XgeeTffvBnZLyKp0YEDSW9nTHQrpYAHwtGnXIgyAsJ5bJwigaMy64bDahGYz0fEVW2VkMZNMf9Ei55Qegp%2BeYZBtXqdGgaVWXSvdptZyfzCnxObwIcRd7gymfWVGOtnBpohwKhd3%2BrMDU%2BzgC9kMAorlgKqfSDbOJDcUTYa06xlYmgal6lOCb5yh0LJg93qotlzDWtx%2B4gcPdOMIXNwMkGOqUBDIOizRP0i5ZwQ0l294VOiStOpkw6UPTQ8zKV5xvacflBr5nOYmNxrHxD0kSSJ5mFASRzWbpZC6gZy%2BgEsqC7YxgpcoLDgrRtDoViHzV7XpkDVGKet2FY6v2CtCtMlwG4AjTClN90w5Y076X7Tfc5PLIWRohmXzHNkVLVZwUOPTvkl0mLXFweRupF%2BE6OqUKA%2FzppKO2UJHCOA2NE1St7QpVE2BnI&X-Amz-Signature=5135c757aa8591d51a36bc3e2a0d2aeffa99598af42b195af79c39b856d62d29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWO6AAXQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T125841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCKSHF2XPdmhI4331iEcZVslVlPM%2FxGt1jKJvuZ8%2FJxhgIhAONLrY%2FnGy6dHbteCJ3oBn9pW8M4VjLVf4x64mKvSayQKv8DCC0QABoMNjM3NDIzMTgzODA1IgwcyUN3IRfJ%2Fi6MmKgq3ANclTrCQGuZHi97iciyRrabkIVasvN2osWdRYjm6CpwMljAGb%2Bb9X36sPQ3EHe%2Bcz57NpMmoMjc8hHm4Jyhxs4bMKKqbr%2BZldhIWWw4msReXqL6BKgqIo1ou6N4A3%2FNHEKYrVEyx%2BA9eJVapm00vpgfkOVW6%2BKDysRcnABOwyOMKud0IsIK7vyXkRhMO6bCyp3o3anl%2BevrcyA5X6UYBCUjU7SyIAr%2FXNye%2BcSX0LqOIoDLboIclq0x4D4wE%2BHxy1eGNjrHTovZgfQ4FMKNtMfuo%2FtT0dAPL6aHv8wouwp2IFtuIqUQa7VLXTN8XyRJXbIabSv4pNQ2diiNlvT30hs3GpovyBxTX5ct3QSfEsHFWHq1lRxoySTZjjp9q%2F4gZO2hdiI%2FpscXhU14mmrRbKpuOVxbnzOXqGv9IzmdGWP5tX%2BqNZhdikd9%2BOGRe08IzL%2BtOTdmmoRr7soM1utlhtD6Qt7rlmIKQ4F1lbS3vhJ%2BfiBaglK5uqCa4CRGBF9IraVaOiNDUxSzvHzDczHuU3ClSah33UtDQU%2BaTWdvQYrWLttwsi79%2B0Ofjo%2FiAXE5OkIC1hs0MEa7qGdOms1AhxvS55yl4WTwoOunzZqtyz0s8RyjCw5lWn8JkHUxXjDBzcDJBjqkARRJDoj2n%2FIAaKTz8G760KtHL%2FpHK8q0N93lRMG%2BkGr38YaDVFwGtLGh8vjazSjPvrI4G2qhlG7B9rze0EWaCvZA6dNTKvL0CtzPJhSc%2BkkfovzD%2FpzpRqgMY4SeVzfcFB5p%2BqXoEzhUIDrHwQ0qRHMekJ3oRxf4fZDrI3TYLzDRQk730760kuu%2Fk9w8imGTASXlITnvpk34w9x5MWi2pgc5qyu2&X-Amz-Signature=92867a0db0e9ab916506236e5ee26014abfd4b89f040a46900a4e73c2f7ebda8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

