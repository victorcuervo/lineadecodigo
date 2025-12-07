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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STFA3ENN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuK7pzrujU80XmYzAhez2M0mX3Y%2B9l64Z2Liu%2Fww%2Bf5AiA1hFXjzi2jYcyXRpcy6kzMe86CXbkEMQ5ZOg0iTjDCTSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkDJz29%2Fz0lIkLZ60KtwDwgUO23MUKNBJ1SjKSIFHfguqyzEnoFFP%2FWUAuDR79o8NyeLcX0zhldLknJsix6F9mrZE2E7jrOluC3MP70DZ5w0yM0yQvmnHPejsMNQA6pwglVAws3kD2hcrm7raeKhfMlVepFO5qClKIHny8UJpaX64UVBGYDEFh2nhKlaAiaw%2B2dHdfvpoACUfAEScUrl9lz%2BtAqY5X%2BCiJC7TajavgiaCBCj2aOsbJLVyWVthvI0BAJLk%2FyKAtuRh8dNO0%2BZbAwNEG%2BELwOdjbTdGC1nLN5AHzPd%2BXF5S3kHRbJpIqqulyntM6zoyeootnVfezJgjZAywt1GQ%2By1q5lJQI3hT%2FlaDmdaQVD2WOlFsLh9mynEU4OOl6nL2ajFoA%2FcZ%2FuQo6ilYqtQzOywAB5IU1n%2FH4kGNzzK2w4kEtifgr993%2FgLn%2BiBlO7shrUfOcwneCB7UbXGbOnATk1m4BwDkkj4HklT%2BJSgbLDs4%2FiDfAInDrCEWXMs9Q9mUDvSS0dFWgxrp%2FBsZCu8l46M7sRBX7qz%2FO72LZK%2FMUrqG1UAVUyuAC3XnjkmaLOyD4WyXLfL55shgD%2Bv6WkG1hXkAkccuL6wA%2BoUJzoaap2D4cMjLop0a3dlCMN5d2gcqG9USrtYw7Z7UyQY6pgFl47tC1cmrRDDryP0sIv33F%2Fs%2BoBKhMpbpOJgQBMY7w7xj33UdVE3lupoxnbLNJHkp0NNj1NDh0JT5BJslalF6pR54P38SF2SYk6w1DhGSzGIpRI%2FBgLGSdCmjGT4m8AV3n0ZseD%2BgLogz023N9MId28qpfXqVRoE0qNIixiqxSElRHSBkAt2IlqP%2FQVH6hXoTg3eomMNmaaL5uEdZCffiJctHBWY7&X-Amz-Signature=e637b94e47d0aa83571cbf996e1132fff3c1f55a3fad38ee7577171e1112f187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2K3LXZS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxsiDwbVPdluOMEYB1b8j6d456lMu9nZBVKHKEg%2FYX%2FAiEAhGUrrVbF1h1LOEc3HwOPNSwDK5R5Jz%2FAA%2Fo48XHI4KkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXcmdm5%2BVzeF8H%2FHCrcA5clFGXBghU3VCL25oncYxaC8C7sQBtlqOoOs4dUNGUp2k4tK4eOFrmUADwiViL6nm5VS0xUlgJlDxOXmH7CuCcnx%2FX%2Be4124Dl5u9InQxnzBbDbxREzJsZJxt%2Fq75yns3FDUopyDz998BgRonTe59tNkUrwTRl9jVb0hhNHntcfG0HBvMr4FixK0g%2Bz4PtCbHnuGBmTJbYgxcgGrRtvQiMpRtwx0%2F%2F0mkQjshts4WMOxU6nY6SjgZp6ytN9kXIC5IMipUdjtotbJpnW7f0jEkhhMsBT99eUKGTC3o%2BADcp77Z5ijQFm1fAu7JWoxHRQv5Hg2wa37KZndjhi%2Fw7eCuKzw6mQmIIrwUZdxPAy4nTdER7QN29V9xe%2FJZxLklAtYiWNlgFmEFb3BJSm8MBN4xJlVq9DZEsB3an%2BW0HmnpQwIQHAvLRbQNRVo6wcl6KTz%2FEiWF18YMkYhVrCmhvT%2B78V%2B0ZIcVmo%2BrfYSoidm9aGtxlYwG%2FGG%2F439ryMcHd6Lft4nCCdBSFo5QKrGjKfDQW7LfsQNjgAqxHlfQ1GFLVCiJLs29zmyxrxl1VM%2BRVAZmqNma51cwXc%2FKse5RiVTpeiqMrgycK3usBRyMf1C5Nlw%2FYxaCI4M2kTp8SyMJmf1MkGOqUBKAwCf22nyIvgDLHTKwx9QmNpsyEtOf0XuXprxpG4S1OflsuwfFmcXIG7LEKlmTG90MirILnft%2BulomIiuklFwKWexYNO3kMoMCEe%2FtVDB9B86IbUkzgMXFKo3IJoInkeEmi3jowC4m8HOZ79%2B6UzeFcS%2BMp0q6sT147%2BgnKtTjAV9k4BW7dCNXQmtrMblxITfp6Z5DYVeTDeONAeLYK%2BgMod5EjC&X-Amz-Signature=9bd2aac55d0a602fe7ad87385019e862517f505437a27f8c798fc54fcd29e990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

