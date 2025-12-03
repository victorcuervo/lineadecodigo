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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LRRKTYZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFfErjEI5dimtO6fWX3VwfX%2FvmA0MIR5YFVYap0SU%2FGoAiEAidtyPa%2F0EvHoUziAC0n86x5gV5cp7S2sDzerLRTZwXgq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDF7Qgz%2FpWizyBcbsDSrcA%2BjAEUJ31b3RwaCvaGroo7tppsWjxn2Jd%2BF3hOb%2BTfs7RfmEzdP28yeHwKUKZplCBCyYwBYZGvpm62QD8vP%2BjehngP8loiFz%2B6IqaJqDnBER1T61CDs0iHAc7ESAdBf8MbtdVRRy3Yy2iAxTKULr76j2kmQXP2X6HW7TF05FXw8W7qqp%2FDvIZsWZBt%2FTbxStRss%2BOK1jDopXhPmbu1enP%2FvwFpJrTOBl5rZXVb9pvmuCAA8wZzxbTwL6F7SmNyLke3GEm1xbzYNcO%2B37qDJfF%2F49H3kjRVepk4ImpUeqkjKyIFpddntYO3uDr9pVLZ46Kp983UqwDqNa2U8y8GVwdDMV%2F%2BrM6y729bSxvMKyKmfhIjPR43JaWkYQN6f4xAE29aLkI5Qq%2FlhfUaaaLlygTKaqo9mzpAKS6iGaWvRGfq39OsasGWS%2FsUD8EMwZusnm%2FStpGngR55FUnSzeq2bB6xrAwjDwHxoLo1cMY3YVQNeD50I1o6sOjCA8yxMRz%2BzLJ76XDu00B5dIuScnQ5sRIqDG%2FmisA4EwkUFhH4f33KCttoi%2Bx%2BnrY6JcFxoj2v21vRWuPjng%2FNciHfXj9MEpzPHwgkCHm3cq23vSpD02kb1FUDwO3UC5cwkhiy3zMNzawckGOqUB%2F0SkjPEcfFhLTfNKBR57LIF%2F3i%2F5nVmYIHSihsXs1dMcYXYEcIbg5sKEmuZnobuiAgykkX4RrpIht2jRAsDosTEm6rHFLJkSz3sIjLvgdDqt6ji0w%2FjNO%2BesFX%2FmAyqhVlOST0povycSclIDlXYZHVYt77ococawUVzoZOtfdi3tNO0kOZ3Yl3gqVSB2RCEflpFslSqYha2W9PXJe%2B2itQAucva9&X-Amz-Signature=c386bb089a0de47a751c841afb3d4a7ec5cfb69c911959b654d044e45dfe6860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DFS6NC2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCKnOEfvLafNI6GK0YAQclgDwM2sOL3VPksNy5TfXkdngIhANiaH5IBgtQ49XU2Nw7LJ2Xcr5sE0f8%2BqJ1HFFfe6pumKv8DCDIQABoMNjM3NDIzMTgzODA1Igy8svhgg54Y45OwRjkq3ANlaFq6gMup63YwxScm1EtulLzd17ZAKLNDTH7vLCNV6xiCFf0SKN%2BIjzb4xSSvqfVEakiVAIHws0XVDXR1%2BMfAsPBL4MbegPvIAx0vS7xDTK4dJagDwzD3rbhQ903oZq8Pxew6NcE00IDopAULBfyBakPp235yM5z6ZcnepQ6GWRfIzvdd3MQ5TMfQbEqDZC6hfJn%2BSJbKbJQEphBbEiK9C20cys69j%2BdY3KKZYpKtzWa1V3skEYblnLNp1XLf8n3kgfNHHf%2Fg%2FkmiMY4YsnjEhXRlKeXKApOmaG%2FiUSjYq0a4li8ahwgEECtK3sR9oUkTLFGBQwWROJtv19kMSuEuKnYR%2FX3kTzqjMA%2BqAoTJgLGiDrR31YRaDKjULXeGtSsUU5ZHqRnA%2BFm0UYgRDzhcJcQtMXWfWKyhvQrpYmaOdUvHtUyPiUFTnxkE5gBFEl5PN7Hm%2BaZa%2B1%2FJ5SCqs%2BOPH%2Bg897aFadZwqptEXXmz03LmVQS3uIXfhOPh73%2BIWVZWYRqjwroiSLYtTMHK4EaGZyfdZhUDyhtCKD0z2jf4p20bb%2ByAdMqBLoqWyb9LSb%2B5Ewm6xJ3OXiqVXQL78e3kSu8dJrLF5rrOA%2Fvcj%2F3QkxDsPT%2BATHfQdVm20TDr2sHJBjqkAe9YDs32C8l2GvaFJxQ7NKcBo9G0s43%2FxZagOCOdm7qi4%2FCHKFpvm3yvlzvr%2Fwta%2BRBst0DR1y%2BWz5DX9AaGqwA7WXPd9saGQJqwVdExx%2Fn9e9b0SZNUrsejoKJV4NgMVftNdjBWyzrwmr7pHn8pUwhqQM2RUhpEYoifWDW7Btyd3XLosnF%2BZIy0LMT%2Frdy%2FhgJThkZtdTuxAs2RxG1H3LcVheHl&X-Amz-Signature=f0dbfcf13dc65513bc807e0f07d77550bcfd60cda5d80e98306dcd82110f6e08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

