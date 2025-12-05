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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5TB3RJ7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO0tx7RW5oneoHXI0TX%2FnYAU82CmZWAa1Ynr%2FuA%2BoyCQIgaVLOUUC3gJHC%2B7Vu0BwSBolgqPZtkerNDtx6%2Fz1Rn5Yq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIRs4foOmZkbLljwtSrcA1%2FskeaHhfiCSQ1hUoPJMbvfZUmIpuq4ApyebslANVix0q5dSXyy2U9DlcGprWnes35w5z1BM986DrO8yii%2FEGS7tvvRUEYaOcC2Q%2BmWkwmDcFCB95nilx6z2XrGSoFuDMdb%2FFEQTZuG4rN%2FTCmHKMQgFuzG6Syuu2md%2FxZx1AO9oH3cJRgH6PNWh7oGp1OErcC2mdEIon73v34dR6RJ4XtPIP4qxdlxgn8QwUivZUbBzyM6LIKrTsprV0ogMaX6Gwj%2BGYk974yt8nXkkzJCfA%2BPwWMD%2FPay6uxxTmDmk2X3QjK19Zy1I1IGj95Fx8ied4oN5kLf%2BvzKIzyiQeWwWeSNLgMsO%2B05kEv9otZwTAog6DW7qKFTlSPERiIm40IlgZhveuiooeUpBEbuQouQaserb1yub9jIKF1fJjGMQSpQNPCM0qw8RLr4pk9RmhsfQP3qWHnJ%2FmSwQCXS1WYVSpp91JkHYW5L7U99iGQNC90jP7c0kym1hM0AFu1OJ%2FxcZxiMb%2FdHo7zzMZUsMKujfSbBnRMftnLP2%2FPmJ5Be3njZ6rm8QT9imUI%2FET24Lt%2FiRplpw8LOlxqPyPfHoigSI%2FBTqRxUh0UsSnpBm2i1lhgUy7Hlxoz4hv9x6NwuMKTLyskGOqUBxJnyIFGPBAHpnTTaSHlwvWF6Z9zFe8lQwFgpdwYh3zSbaTWqwZmek0rVPGFilpvILNv2J1aKZ5zpKHn2nsNqbn2gO9csvBJTBsSfub14%2BrnWJLSD5iBtREIyPcD0DXIpGUbypt%2BwrvCqKrmtHAVUUE051JYy2pdy8s0%2B8mAIOzv%2F42s%2B0l2g%2F4GcIdkRhvV33jIro0Z0lf9alP5MREk1Z4STfV9q&X-Amz-Signature=e7befc39ec766d5d76a61fd5c90d77c16c8fe053d73c5f9a2f28b145dd56831e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6IQG3J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDK8l0tCb3wCrKm6b4xtJdNS%2B97qCwixIKH%2BwrG%2BsuxAIhAKj6f6jtjM5wdEMkGlzC2yPnqoaXkLLSyq1Y7fSaPd3xKv8DCFsQABoMNjM3NDIzMTgzODA1IgwQb69rMww9ErBqXBcq3APwYgZ5qTeAWHDgUuctz71%2BMKyjCWX2v2aBsujCQeEbEA1UQ66hoFeOP%2FsUZItkCPm20jiQCkfzArhJMHAUs5XBkADYA8G3%2F5QKAFiZUEJkM1HgXlSYNoyCHcStQvJpJ6CuZGbQBjDPiTGbq6Lw0M4T9B7FsK2%2B%2FmVUN3cTEa8tlTvoPAMqAhGTAlNPWW24XAo%2B%2BG52TS3sKfZahPUSIMyhe5lrkpQMsSIGluJtg8tqxvd%2BgZzlYsVPSQPF535GrHULSF2DR7whPc%2FEoaHl8lfDWP50zy8Riu8tmIklrtA8%2BL6bkDNRjZA4N77%2BHeRA1oI%2B%2F5FkFVdNIgiG5G7XGWA6LryznfmD78ONBdbjKB%2FTc6yz46DZPb%2FyBmAzghwmjZBMyZAY9KjD3Bvq%2BdWIbzouimD9sAKxrpwAS1pCS6UEiYtgQhCMAo5lINONLeGJLHVIZYMfDGxYgFpeASngszSJKzKH9Zb9gUb%2BkdCeZaIWO3kMjcFfMZvh%2FqH3ZmQnFnUIGgOK1SfDLOphSx8V8Pl9YO%2B0nfK22gmpBfYVgLT7BHNcAlNhyU3yvlRgMgrdo%2B1BMRsWFKeQA0SFoc%2F1KR88xZqriOIfP2xApLduNPJRuDLwBDQwNGyYTPT%2FATCI0crJBjqkAQkYqoHwwlK%2BTdN3NYYGYP%2BIk0SPMF0Lzv2nHXBz3cuxt7A5VtG43uYwurCG5d2vML7%2F2aAHhJP2MECBVAGklrP7F9dteyD9jybO2azyfUfBxzpd32SCdhrvFvbl9MoOAiuzB4aY0KglD5%2BiAoIsdQbn8XwLf6wEMiY0Pp3w3suh25b1vTM%2Fbu9cz4dIq%2By97rkAIWlN5gWRe02ir4QhyYs3MohT&X-Amz-Signature=f95c6143f833fb3d550e16b37bd5ae8a60d641e543fb4461ae8daa025fd8185b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

