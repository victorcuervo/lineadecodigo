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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ACIFRP7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCegg5ZCqDmyQbXLP2dn9rZm25OSxu9cCvIlhQeIacM2AIhANbrXv16CDUhfaEFToPKTfiLzX7RvwgRwZ0yYkRCTV%2FkKv8DCCkQABoMNjM3NDIzMTgzODA1Igy2h2wq6Xd3%2BT4HW%2Bwq3APUFBWxDjongIuwrbVAWZ4MMIOAU1vRg772tcwfjn%2FI%2FGU2MpqFMrGQc3utuCrAq%2BZKpzwd4VMRYKt85IaaBKFr265uSzqV2Uyb2aqLNB0kKkG4pG%2BZVCyaFj5RNdpixwSch4QI%2FHnfXYj0P1OnBGvHZ3cXPIE1ozWM1Qj71xwUT9eA2b7iXxO4tI%2FBMKRQl071QGzUmjR%2FAuRNEN1gzM3tUUWQf%2B76ac%2F7UhzG1E0lHcXkm4z8tWQs02DSykgkUvwhqbm3Z7ZUF%2F9JnpYaZKMmsBugAifice5g9GXPKQNI%2BfOZgZlhuNO422fDpGuGmnqp9Pl6rhiwhDCpvVho7k%2BH0nw5pr9j%2BPKW7t%2FWxLEV4Y1qw2%2BCrixOZ1BYcscSOYh%2BBG5pVrmmoZ77qxtHdBzrFoUADvgg4P74hd4JC4xojlKySNYuIi8BwTz1PWkgkoHZH5qH%2FC9zaLWb7uk%2FTRjfhhBChi05b7GbjvhhW5eGO3YWCPYZFT7rGiWzbgZ7dpSOdkhW5YHfRvWS2WZHkK2knICoNwXSjAEb0YG9B3UptJRLwboYgZt1tJsqOQU3xL%2BC8MIoKmlsOWYPpS2wdT2EzEHtN%2BqwXCXRKslbNCI5sMdqecSPVujvDvoAFTDr1b%2FJBjqkAWGmVN2UkAsjuUx9khyAuE%2Fcv6I%2F7EMSV8%2F%2BboLvvk6U8x%2FmFq%2Fk53geL628A2zz0QHKMJ8ri4K3Es5NiHEeyZmIzR%2BRpK1O2FWmihTUBRhsvuhL3GHnfP0Bd6vFye0xUU6fNI9SUD1QBp5u4X%2BGrwW7W4peDw3YnJM5Cv3KqOQiqjS7GFILEVxkflu8iPVZSQtYSPfmbFZoxjENjvg1Bnjot%2FIR&X-Amz-Signature=ebb71ddd2827b9a276530af4a5123eb09c871a719b258e0966fd69c24f143ace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDYEUXGA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIFxeyPrMLlZ9TKgtdRvQVJaJ7XLnkPAvzLqa6xMwgHPpAiBD%2Bxt8DEJgzl1%2Bkf4ms7TLZcdMmjka2S%2BybbdIM9U4vyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM%2FZbRDI74OpLRZviFKtwDRc%2FiG9a%2BCWs8hkj4QwedYcgxe94zZ5Ipyj5fKIOLu1HVUyQkqUsdJkcpuFZv3XC33ccfqUrUDLL6CJPzrY5THsSnw4IzewV2dlYo%2FdojlG2rvTXUU0ABRbOF4VX07PVm569q%2FkNVIJYAEEFlx4qhKTSsQcmHs9x4XyGClnDobm6iukC0peZuc2lUPi%2FOSDPVWy1y8uG%2FLrUqDy31SCFgociuPp%2BkpmM8O7J9patIe0oWP9AV1maOZodxnhCtuTPvkpEjuYJNxXjh4GiYwT9IgeAKzWfIg6gDqNwRtxH2E%2FTWqzI36nmFTY%2BclnXKoV253%2BIF8OPPCjxa8z71izBG1jy%2BF46t6LzeQQCTC3TYA84kd4HE%2FP%2F33hSswaU8uAxh7q35RGNXLCLaNAkjcXcaQie7anHkdt7QnA5wyDsEgORKOcjv4LGmDc7QSJrARm1EZidGPwDs7dBZbFi2K7Lmdtjl%2FZx1AQTm1W6AhIJRgIvFn%2BIRRG0vG7t6VVVI7hjwZCSx92%2B3KXyanB6WrStUmppHQ4Nh4smElgQqeTKANuiTxHjgaQ0xhy2geG2UkvCVFbB80s2O0oS4D65Khe3BsvlWmiF0x2EjKkn6%2FDpm%2FlapCckLs09TSnb0uEww6tS%2FyQY6pgGeVvfGcEDB%2Bpao%2FowAIVac%2FZ3WBA%2FzdvJSNAs9M6n83kmqqQFPiFvM%2FDAQVctVEVNinHfpwAnOz%2F8tesR2couR3%2BjI9x1EgMZUfM4dV9NV71lJ7sndcuLu3pmvyNAHRtdT%2FxRhk8ern2AjMLUpp5mJbsn0pCBrFLO3t9Tvyh2kj%2Fm2dJoZFaaCUMpJ6TVUB50WACfWPwdwtAVlhnoAnHapjAnaWots&X-Amz-Signature=ce8a3e4df8cd1a5f24d1a50a696091187881c47159f080c5d4379b0626e43a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

