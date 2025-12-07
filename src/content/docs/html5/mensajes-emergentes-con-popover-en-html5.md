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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4RSCJMS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FHs%2F6D47%2B5kkcTWf0QWYcIhArp4vprV854jD1LPyuDgIgGs1pnHpz8G5bVT7PlSHOGdcdFTAXJbPKV5gfcFTbm4cqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILlVNnBWG0WQEkTWyrcA5tqkJzDANOx3x1R90hfGufGg5WZH2gZEQNaKywQ48GRiQ82M5nR4H033QZJeUzPU4KcnSBa1paMz8bvR2asVyIiLSPu3ykqn5tQYKFXJ%2Blvm32P9Lc4QYGjcjNiSwofbFlfTE9lqilgcciq6PEiwSQHS6fYW%2BnZLdnid5%2FXgPAAycB04Df1HJUqIeAZ8hKY6SAcfRBXdzdLn3DpvOUBs6TUITXuSSCIf1pHqDnRlmA%2BvfAkwrgQH0SNB72jF9jsFkxWrZA8r3ALFhSI3dM44LZOCvbmAXA0RR%2FZhzgjpo0UVqikRCjCgSlFOmpz%2FPUwzkeam6atFRngO2T1NTcR0zYef1%2BwwWCCf1zOx38Y%2FGPqTBggktrNlLgWWvQYgo%2BZW1GG%2FSFJFM7X22w%2FzdBh5CE2GpYO5rEBFT3fHSbvenNmchlBJla%2F5uSXGqTMZ1EffER%2Bk3dvL%2BaaSMF9TicgsorWw7zGBcten3%2Flh%2F8K3x%2BkCM2mWEMCtGhi8g497UtbH9GmAEViO%2BBnBO9w9ZnctZfeX55TBsGGOFzIcaHRSPCOjphJz1Z6mvHtBRKORJ2SaJeEC373H4d3cucYoZDpTuotMKxgMRogBVK9WU63ibRc6KnHVWQBHJ6VjVxDMLaZ1ckGOqUBCrX0%2FwJ%2FUnXeeBTQX0QBLFdD%2FTfN0GBJww0eXFj0nzx%2FsblqFBYvq%2BbAZ5nmPMWDpx%2BcZJx4TjYjZzPBid3lyvJjdpearK%2FnjIIaQ%2FlMTluN9E90cl997OCqu4IkoaN9HN%2BJf8e4ytX2heHEVuq0kbj2ikvkeEtBj6yHOj4yyEKLMHgahU9KEx7hXsARaXD%2FT816uOkIKKZM3zyqx9ur6w%2BoV6Nd&X-Amz-Signature=ec65be7d2e275b8d21641beb9a410c56b7a2ec1410f59a755fa7235b25b426d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656WJHBKN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1QTKF0skBgYYIsR%2F6xV0omL8hK7dMqNJ%2FYsNuy7zHigIhAO4Q1Zo%2Fb8mO26%2FUkvqrWlNoNnQHc3XDWe9k0522DkyXKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzohuV%2F5Qrk8LP6n6Uq3ANidzpkMaSfXsXuF6M83BXhsKidR5D2PxZ8UwCB%2F9aKmNPaTjCAqTLoYLMtMxSc796x9jgAWshTzS4YcrsNnI2G6iz%2FeUZxbzG3%2BtJzk4apV9PyAO%2BGvsSfJ8TP4Y3H7Ub2ZXUo5XePMTNtrS8zy7nLU1Mz3ERpw45Zwvt9SjNDilppLFo%2BO0ZDdhtMBF2k05Do3iFc1crVI6bo7Y1iVMyld8YMCRTRujg0cttrHzpk%2FC80iGywAb2fsx1gLKvLbyFmQWnKZ9TQNWu54DgK0vY14%2BxKDCCJrmBCvZmvgeD0rFIMslLKSvTwfsd9UlBxASbFVu1Xuo4KjBUpNZTZq08WjRyy%2FefBqO65NeCu%2FoFouQg%2FRf43iW0JdIXI2kJmEi7OJM4%2BGhXt4hgevp29%2B8Ornsf9H%2FVtHnr61alnfxFYbTE1Z6UDMLRtW%2FzexcxG02S%2B2U%2FqM7cIUz%2BDuD%2BadHO6cKhbb6POcf6DPG0Fw7y7ewHOfgxB3XU4FrA0bB45JkUz%2Bwv8bFWKR0rEwNVGdvrrt0vTFTBKDuSdYfnMGjpuSSgw75gRcFFZflqaNdm0f%2By6WwrT1m56cQx7bndg6TjIwCnOsSC5z0%2BlS5awcxPManYeTjlR%2BJ37nLYTIzDImdXJBjqkAVhURG6XNgUQi5Buv%2BsS6bozOnXPf2NrgxiBZTPr6iKLaAofeDUM%2FoJc0DAEHeZFFdSBXYZMdX%2BTJy9jTPSxGhqIDwbbYHrlHsVUVEEbCmEyxGeHKQyE3QY2Poi6nwu7TGG%2FTXjxAwce2987Yymas8MqZDru%2FnOstoNv1gg5bI%2BW67srE7AGd4M18FXo%2BKQ7UsWL%2BdLWezx2odK6yqDjDSYKJPGa&X-Amz-Signature=eae8fe84acfe7547c084a09f92c8507b909b7fda7e3e75bb25b9809430e35a47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

