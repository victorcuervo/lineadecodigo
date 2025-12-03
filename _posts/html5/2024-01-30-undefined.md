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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G634HCZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEclyggyaBmK%2FxRbeXUnGBf%2FMRQ%2BdbM3d8U4l2j%2F%2FRiVAiEAkmttEMvYmzAsG9Gs10QiygArj4HzCuu8YcCFj6SH7nYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDEvPilJWVleQscfwJCrcA91oTwCTXcz5iFJroQuBPqMzpQc5uziBx%2F%2FLT2wnDyQ%2Bv259mgfOLMWe6igivN5%2B8ShD45%2FUzqpgKhzc4SN67xVvpM3MQYszK4sfnzZDuunUgl6L5pOI0rHwiMGWR8p%2BfLz0KxcLaK3NCMR%2FJvpGpddbh3BP0u7rczwiDSzBBhGdflcYRhtyOyzUluGmXhhD5xqWObVBNLGhfmtXQryviqxTRrEF43bHFI5%2Fy%2BEu3Achrwf2eL3gesKfTKbfLqfJArt%2B3RkC7YrP77vzuJdo6GTLX53bcs7jwkxfrImg%2Biv7G7d8N658mcrmeDdylWDqFStfAGz6Za5bNd5zLU7saad4xSwkHYOAzfLnZ5pyiHWiySZMn2Z3a%2FxkjoLfPIEE9RJberH9Wy69jKGFjKk1S4a%2BqKkQMLm5j63bOfJRGGywg5wsASkBepEE51of9sHTEdFUcAdpKu6NQfTommMuVgWZ6TVN3KZHK5kDBk8izSWTpbifWf2TC0FBGQo2CLlJczKgsu47JVeAdi5LGwNYIQUuo9tBZArFIeVpoRbtHDx7wQg9Pqk4TWQ2duvptINKNt6mYDwQ6YgsmoTahcaBzwCbX5nu2e%2FyCWiLPfWpr6B70ZNuBhQ5Svx8pBOLMNeWvskGOqUBXjdkiFyFdla7M8YnoIGv%2FX%2B6M3CUH6lckWAZSgPOpRxLPW7nxyLAl1gN60SWSj8tIEOnDqsDvOqo6CFGymP6VquauVCH2of%2F%2Bjes%2FF4Hh0s9XJlybv0LN%2BXJuWMi9%2FfDuwA1MkKd4cSJUFmg3GuxCpNMhHPWU8AMwjIGKdGGZCT32NhGKpWpXtFGg8tIUIqcd%2B1Zg6E02ggLi8shZqcnj1UHZC0e&X-Amz-Signature=2c493637e8e4462fb2868224e02abc06e57effe0092bc14753a7d2a4e3b31440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B7XL4E5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDuWIExzO1onEM5heP%2FapSAJZUl5hBhNnYZkCf2FEks%2FgIgNFFvb81lkCh27aGNmgrckOa%2BrHuyvXMQ5VFPLZnedcMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMKMv9fbyudENXrTzyrcA0Nsk6MHtm6LtPGUmhUeYnU7OJ3r%2BTab%2Fzwfr0bkZArwthJ3hcRQsuYQBza%2FztfuSiJNJRO2C1tjES7RdzjZlsv51WFsqpbtK9%2B128x9w1fqEzsUDJmwz8k8%2BeBbrXH%2FqJHBr8V5BKr0vBAktyavrsg1tS5WSI%2ByCmiEggL24mImEHXao0fL8EbEoAAOsJdTknoH0OsCFgOLjcZy7LY4arQXE73j%2BjIIfpfs%2F63t77guLLbFmzk%2B7WSsqcoY0wLrVu4YLuNjVJI9AdSliz%2BOFEay08gWzkABRiKX3PVOWWSFygxbwhkTff4T8Gc9XLd0RkeRBL2Y0obSs%2FZLefVDBmImxw7anu83saRpjvezVgfyOqhER%2BS3kOxhOW8l7xNKU8feUZIWUm0aB54bAyDGv86H70lPndjmNYPpkJy8%2BPvFpWx523KUIfdxg5tUfJEH3guSAq40eDPmPkr7QqfrhenQC5dnw7l38eI5%2FVCN3jMlcPF%2BQmHsruC09q5dIpX2brEs7AY9HehwV3eb8Dln5owchybQtBrealAAdgk%2FE36iJ2cNlp6s%2FwzfWTeCw2KZpdS4GKpJjSNnNtGNL9txaezOU3b1tfQTXra%2FWe0bfbCbJia2BuArcAf3M2qrMLOUvskGOqUBzkWZ%2B8t%2BTcFH%2F5CzJfbDUG%2BUrwJO6W%2Bbh41Q1kLdTyyBDxGY7eLnCt26F327MLN1K9ZrxSEFjnx020%2FtLBBGOXpoclZBLXPAcMwyr6ad5D2LX1qTnLsOzvw1xEPAO%2FJYmuQk3yQ1k8vIOXIAeJ6vz8phkHVuQyJ0obFZUAQd0aJthIG%2F5ZGBUUtAARzX9Hb6QZvn6MG9rsBH5s0DH1AcUvPifgH0&X-Amz-Signature=b744fcac51e9dba214d4846b38c15c49389a8508cc3f266ecc4f221650cfad5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

