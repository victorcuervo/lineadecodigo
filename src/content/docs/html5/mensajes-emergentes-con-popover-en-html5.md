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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BKRTMBL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjgtkQo85oiK%2BnY79XBR3DC3Zvb3mfV9nKoPzijsR7XAiBj%2B1JFCxJDMeNjzp8G0MC0qJLCjMSt3ObYu5AtnVYCjCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCIGs91NsovFaweZAKtwDLOlR2kAlM6NHVddGGAsbqRXRZ%2FHCEdxPbGZ2b3yicmCFTMW9bUdnVNYnTCDuceMpRhSHu7cLHVhf9F2TrTDS5v%2Bm6XmLoUFMUt0xOOYHtmyFWjqre2A1uA2B72CeZNuDv7ofTrcet%2BF0G%2FwEGQG8BGKHoFvDFEJIUcxW0NEWNeWugyLHmRMzuChL4Dkk4u4bfqOcdoBps59KSEa0%2B8eBu58Hr7RBN%2Fdej%2ByoPu3xiIPLDxSHHPqNPQTaehsbtWFDMF71IjDN4MvFBxGvgce1wAFigndTUSdb%2BUfFLH6e4MN4j%2BkaegQzmD%2B5aL2q4CPHtYxZFbmQcJrkstUkaIfei%2F%2BiDG77GhlYiS70WeAi53ur8f5jrizOiQqBPNQbkgIwAIx2DBBhid7SpbRMX47VtKuOEMMlrbVyVuNjcWXLINDjgz1hgNZGyk1JrUPsJGuovFt%2FDH9lVipzfcc5t%2Fm%2B21x0vq2ymuTAZmaDx4g7%2Frn5w9J9bNYsCMp6qQHYvhH9sMxsTqfJ3R2oFIVi%2FCWoqZv1WM0ikai1AAm%2FYGZ2vyAOox%2BqICX%2BVDIF9e5bKW0q%2FMg7PPuCL%2FYNYo4h81jA4PEn8GiYqPGFH9wln2MIk1FZ4KWNSE5er1K5bV0w94TYyQY6pgHAz4n82AoeatB6840AiNatlmCZWOI8ub8nWz748TJhH2Yoy3luxqKD2I6FPg9lIcSxgJxzQPPSDpclHuQgGDDvCVH3zJ6YmSrgSjDYX08%2F4zYAvMEJm6VpvtLImHp8LacdbUXFQQ80bDvLr%2BHiDjdVCrtnYAcReOQt6ZctlIq8V%2FHZICOipjY9yp6glPLxZkRfmxhwoz%2B97%2BLV0XKDyUTWJvF5Zjdo&X-Amz-Signature=49b5db6f00f03c1894235652b2bfe89981c5323e01e790491f24ac63a3d5d496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2MG3FAG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzuvJDZvtl5IxNh58ddTrPygJEN933mJF4D5xR1J%2F53AiEAx0MuzFOa6vxksMrqejzY3NgZ23xBBt1rY7AmTw%2FtKkMqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGRHF7ZyoBKBFXyZyrcA5c7H19T%2FKTzv2cC2biePMff%2F2%2FAxmRZKDRqCe%2F3Zkxi%2BTikIOAAos0eMJfC4e3UpMKWqF5RgaNCqRFdQLE%2FNjA5EInN0YFCRsrpK3IklTgoGtiIA2H2SizsgVePkSWmIx0jfH3n5fQmcJvBezoy6ufR7vnf4DVJ%2F%2FCeWiAAv%2Ft%2B2oaekNdXuX0f5PoMjWRygV06FxiZ85jSa95i4BJ8x211K5hKgdmSXfYJoyHqsm7sBACuTfqL%2BWWByPZ3E7iau%2FNSF1KhKajvgFNEFvSoJ%2FNEWFI4lto1xjk6ewEhRL6XtPoblqR2T5JNv3E6x3%2Bp1QcEnDk41Z5Kon6NsBzR9rMTcICTIbiY9FepgDE0jdD5zX5P9QifsKqplbSOgbPs5yKIr6h%2FyJdHJYQjbglxMrFEEDRet%2BHgraNrv%2BESWzzINW0iwZYw54DfbZK6R3fpK1vGEhQimVa6gVCMV1%2B4fUhVjZmOSIwIk1qFnugfLNEI13rTGpnw4FZZQINu%2BKKTnVRRH04jELf1nWIMBJrfHlT3jaPq8KdDCccZxWrDKd3jkL2hXFvgEWmEScDnpLj0eLsf6EKhmHSXUgZVqwR3FH7W9sAK5T4PIbwFhJJdZJFmJ%2BSDPdGJEoN0EIqoMKyF2MkGOqUBiXWkz5IhDjOs8acFWkfk9OzphVLnp43Uc%2B5ZbjdR41QpVR5qZ1P0Bm976FLgiITKtWjBTI%2BglmUqUxQl1umzyNn4AQwyiOHJT0pYLsaNb5OrLYDXLEWuTK%2BGZVoyMbNpT%2FckYtwT539B6w1ODNubtUAIqqSrxgwiHlZjYPHDNeuVOd1pedAfqde6LCLfVnqbx6Tk75QChKGtRg%2BgIYThaKby5M1t&X-Amz-Signature=16290f4490ca3f494bb421a5794102f3db78ddc137907c3163e0bf763ea43870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

