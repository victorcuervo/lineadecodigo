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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAEYEGSQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD8%2BZGi1EYfn2NhHMdGgikiz%2BOxgR78XNWrRnUpUVNQvwIgRmfC4TZCysuysn6rWZX5B5piU0IjtrE3PdE7JyVhOCEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDCgWHh2LPZi6bR1izyrcA6c5Jzt8SapM%2BFjQnDyX%2FbvCh661ib6MIQGLl3E4oVLVjMVcRaz%2BBWI2TTKx4VJWZkXaw4wsckCIl%2FU5A2S1K96iiSGjojQnja6yBS9040luQDGEcFZAgloVQgO4E9Sw0%2FGmVSx60k0OFFHlTIEPLHQRgLdk3ZrwTzin%2Fd5aCJN8jeyXaNqZowMt5lIob%2Bt8uT01iRGTCY0QxuebvQy2xG6mYQsiANbpokMl%2F76ahrAlD2ZC9jpQlRs3Bj%2FiaVH%2BKX7I5I1cDUuFvmSQFJYTeJU7dBw0ZpqOgP98fvDYyxh6ceB%2Ft248aT79pD5N830D7p6kg0lVvYitmwjCQwJ3g3FTyZtH9ZaQjDxRY4hRUnMDxzp0UnlqwgIfYvxTcvDaYCn0AF5Ox%2BbnxJTKzmLF6NucVodLDs4nFHFs05upSXmKRE5XVmO57y5NkeGDmb6FVLduOV2JG6jbD2lwFTTCuZH0Fo5XZAVKdv00NKCXVG%2FQeWJbQ7cnVEfH1GxpN6ALOxJ66hohXnaFlTfqrsSkV8rSiOW7A%2Bx%2Bzox%2F%2F0k6Pr4YQvkyEF2pBDtGkW1yf%2BE17G9J%2F6Bc%2Fk2G5l482sqqpNvtb2t1swJpN3q5Wn8UhSx2yvbSPc1IO5LWQnGgMKquwMkGOqUBCjoLvOLVJeCxuVNQBy%2BcwHqp34RAoh8IShU67ek1KJALRaQUkIG3ByuOB01gY7%2BPKs%2Fz5qjmAIIoRTdjR4biSj5i5c3k3P2Qs3Mb4NcrK8x%2F0cRCWuTayG25urycaKbwp1jP%2B%2Fol7CghBSk83GUDT4lgVQ3jFXV9TgcpEjFCtg6KtYLkR2g69jnT23aX9hp%2BKg4UdQxfKt1mfe%2F1KC%2F0c1u9OjPd&X-Amz-Signature=607b21d89a1652d21d63b2ba4d1e9c37e542f8d475b0756da639ff1f06dbca2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKNS3FAV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDV2cA1hI7jrf%2FBSf3LCyaho0vx1DPZHonR1YRTskkMCAIhAKQTPDatYu42Z2KO%2BevUYuxiIztvYhiczudsTjS3nViUKv8DCCwQABoMNjM3NDIzMTgzODA1Igz04I3YECu3zasTqkcq3ANi%2FpdiQsBLCHCuY9JUxaUyf0ynbkO9bU1h0rfGTskgHwdZmD92lHWSuKxApS%2BpRHN%2F0Psrwr5Z7qsPfIggdKKnqxR%2BMlmn0G8q52q2vuFY0cxxydP%2BH%2FCTxDnCDClMwUsTR7wZLkWPIyf%2FzlzKFjyQ7eSh8QzwJt9o5lwCcZMRGRBAznE5mPECBBP2DdUqaFLCNp71QqrCYLJsrOpSQ%2FYeJMAX9XehMtgxxkEEtVM%2Bz3mlpjFthdc0N%2FPprgQt6z1qYoOJbKv7qpuK2xPqb6DylsV5fBTmUlr19FzqJ02bXXlSacgn4tV%2FUPmJ64aNuYijEikKO3lqBUdVeb65xxOVKx4kNPA7xRsSVmNXsWlIvOsjNlGw9ASp5E3XkmpSbA80sWLpMDr%2BhTopd4wVppLTRokDovXDTgPu10VKmFZ58pOUVORgwOYb76wzA8P4fPk8lNkaU1cRCD1ABztVUKg0EZbADwJS8oiDQNoi8bY29Fdje1ocJ5njzk5Il%2BqSlh6%2FJ%2BWifhCPxIvJifNjM13grsqBFZ227QtvnlmutKRScB6anxDFI8WEInAISFXy9ZAYRa1J6hBF9FfGI84Xf%2FGq7Wj8Jl%2FoIv7PSLhflF%2F1jNlSod5ldJErdSZc8jC2r8DJBjqkAfjQmGpbWokf1urvbZ%2BS4fMGvviL69EygCnl4AHC96qCuRXuBCz2X2VtEYWNmjvwVD5L1M5ur4asUbMurl%2BvkJK7S9VqeQWQQjDC8cAPwKF1iR2O5sBwFI7IRyskK217V4%2B7lt5njd5iX00H0hwkoD2PwSULXYZ8rETFY9TDHxPyP7DYILfM0UAj99UZrvKueOe%2BQHVcuXRYgDTM2sIdR6Wp5j%2BJ&X-Amz-Signature=c422939f2beb016d8bfad1c0a80a1370ee70c4937ed754b8ae5dfb4666348857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

