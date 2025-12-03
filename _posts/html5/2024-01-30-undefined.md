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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAKYHJ6S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDPYq9yaLYl7L48aB4M6PNZGscQyQ27BGbggDVhxHknTAiEAojWbq2CQwDkyXuZFZaZ5HYgkkaV3yKZrcLhf%2BJC14pYq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDIuZFSexkB%2FQ4XVB4ircA%2BDZTQRvW02AEcqyGdJiFRXVgehOKiuMsJfkyHgNnLOXKo5B5jHaBOpj63uUyg65n0RoTrqMW4F3Fc5qxBXcjpmBfKBXT%2BcH3saUrDb85U16REZmhkd933EHrQ4hpeUAkHwwy4U70EKP3BMWnrccJQG%2BPZcDEXQdDrROL864FUXF%2FN3GHFNWUlGG5kdtSjsUifebm%2B3%2BVCLDvAESnJ%2B0pdIwnxspO0F0zhFrchXsUBsD1uMVyAWKAId9Lx0X%2FjcRvjVN3nFAiO1wGwRgWDU0ClA6%2FeUGAwrl6xTGlf6lItnqiTQewi7%2Bx5nvYCSJILn6sVr9mP2OwA6wbZzrzEokxWkAGsSkK2k3QUA0hyiNbBoxoRGOYmJitkTvA9jELPLnEX8V0Lg%2Bk202sidrwwPeY3X5r8lw%2F6HAS0QeI4kwrQVhtaogEk8pgq1eOea9LDVBBNbsC44qa5fUSLnuw5A2cu14kbgRd%2B%2Fti92KYV8QBRMvW9Xu5pQ6u7dbP1t39PFTbrNMEHzeuXM02VFrbgAZ%2Fl2LvpTQN%2Bg65%2FAA6INBiHbNelq27vWTDaDO63yGTpAH%2BW4uKnKIrZwkRj6qFo%2BPfIaG6YnqUwfdm8OQCywDLZ0zc8q9KEgaYu%2BQQWRxMMGIwckGOqUBVk0lC09WUiH%2Br5feTuj7Pz9DIQ3wfpr6S9xVVxT03HpHV%2BEfqEy5bIFzVIX9mzGtCPelMgmUfQPe%2BSjq5uzCYSqQiZoRri6iAxshMbu6jau3w9aAiR46oEL7Mc1jH0ytHGLoior4JsTH6yNf5Zx83Zny0946HRArt1myMKf5LxbNUB4Yph3SqcY1AD3PaLylwNAqlPA9w04WPnDt%2F20fm8Qqxzt7&X-Amz-Signature=85fc1d941d6d45a669a3f0ad898e5b92f5586ef584f73cc103612c1f55b0cedc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRDFWUBI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIBbZG4hKf1IOTrl1VFt3g7RFb%2F8%2B4yJ6AfZpe6IZgS3jAiEA7kcJbI0tod5cR23YnVy7nLYniLmZn5op0LWlL9heZkwq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFH9U36A1O7qRtKUeSrcAynV3uDDg8IrSTYDMFuC48gCkSGn2oiBbEtZaMayKFGv3cjCdoaaI%2BolghDGTjBApmh6e%2FRwnF2RCK9Ug1gV6JZ834DVTzAA0aukZNjurJjXwRH7fk40JTLuqKDNVlw9QgJgSHaPSiFtmZxcBN%2FV8kr6FslINGcuuMgqdOh3OZt8sSIpYg354K78G%2B1PevTHrhbH4gGZJWYKpmTOfSHCkglUntuz6dfcjV5M4JsPITDHcXPWruCsYkgrbAaNByjzFBpfIjsECDQhzDnRsOTZSPb%2BzoZIzsrdfxJxbPs6O90OkV1oZttF4BF53TPty15M8sWhxK4V5aiAS6lspZpoA5qQtvRolkEuihkfsOtGC8XMCpaT8zsll36JXiuG1RZ8ELutBchrzvksJhSK6tlYMu%2B9C0%2FCinECWSk5JfrIajaI6k0Nqx51Z%2BA6w47d7aOkYVwbDTi7%2BDC7xPyRsfk0Rh34R81F1kjcTsA8ckat74ghMgB0XrCpfpidG11j%2FUip0HuMbmp%2FTgQafN2ZamZh63FXC40fJMZR16wPKjVFIX4DTRz2vz%2FnLNPx4UnziqnqPqZyYWYHSpH%2BcYm3mIBoPM%2FjWINrmUNtXdOPfiB7TkPG5zybC7adilBh9H37MIyHwckGOqUBvjxJVGNOeHOqT1bDDX3sKsybcCSIviJQ9bLNzuIhxmsgG5xdS0MNvhYer5xS8kjNVTXNNobmInX5fFbYU%2BlWBp2MtbmHjDDUvki6VSsbRSLgt9LQE2vytQTTuKWfSbCH2Gpux6B%2BifmwT%2F8Tm3ePNY%2Fn5vqBdyShvoFr6x0BmMDdK%2FQbPUHcv9JFt9PBtjIgzIC1ZmOnzVtz%2FAQrYjQsFflc1CSm&X-Amz-Signature=51cd00371236586a3bf3ee54195e6d380de7d512f2357df5f312482dbce922d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

