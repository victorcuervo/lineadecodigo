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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGXNWGNC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEp4q1o2nfM1GqTIH2AxCit3JskZ48OVVPq9x%2FMP9hlbAiBfPdMcyakv%2F9jbFIJgru%2FJTNhP5ehvjomoS3BlW4sA7yr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMR8vzaofUOjLEdjXMKtwDSm0Zxy6Sp9GUZamJFwJciRWFWZiHVSsI%2F7h4vPWKrrpmn9oJKk7TDcY5no0C1vWZ%2BwHtJPPae%2BBrqxHLBZycH5O4mSMCJQrU1qTnz%2BtfEGtvYEqIlir2AeoVkUPkRCPCVvPstp5VAnbVK6HgR1CHuhKWJRjsz8Lahz5xr3%2FajB%2BiH7UjinhPE0%2BlhRg%2BMIZyOIx2o8%2Fn4tR7%2FYPdXUUzZAPTCczMUzUEOIA5r%2BpyC2fxasTrXn52XIQAtpR6flohLjDm6KlRd2aLrj1VSVNcEd1u%2BJrVEyotGfb%2FyDsy2BUiVcxVHp08VywXfDHd4DmW6YGkTHQ1AASP7XpBeCKIQjJryeVJDuV9hSzAXa1a8i7XSwhcj2Dyg3eiNhESV9hbp0tuUC%2B7HfKN28DGrNvEh2VsIOELVy9UPxDGrYOmeB05mlNw5HbIEV04wJ3BAA1HSKVj%2B94xkUmRcVOoaZp8aqes9Eo5LTAFdacdC8JW9lTWYuo8PRS0zg5WgLF9HhYEpSkM3f4H3c2JaesGP%2BUsy25Spy3tlxbd%2BsxTRdSW15JT4tfSLva7HnnSZjPJrvDQxADsxvtjG%2BJfvV5CmOFtB2Qg1b%2FWTgyJG5MFRvc3iTKUAZacYHRUIZ9S4TQw%2BJLAyQY6pgGoKeQgXn%2BdZuPCFe2OiWe9rofNZMpXLHVocB%2FKoo7UmKBqJMJsflPRp1imG%2BtWxN3i6sttIn7USxwE3GrR1GXWJfKC54UMKzIw34wVDS1McQDMBsdsJVUyWPIUz1niGeiozIWyk4Bejef28m77ueROnNIoZU1J9VtJQOW%2B8G3tAdlAa4FY%2Bzffr3obNlIjaRkv2rdSHsnAKSO4k1%2BliY69y6%2FL5%2Bo7&X-Amz-Signature=4a58d83e7dc9dfce4cd1372578ac9fbe27b2bea9037bfda2cfe2dcd131ad9df5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCD53MK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDLue7EWAcmeXQr8A%2FOHNw%2Fu52ubb0XMZ7jG4P%2FbhMSrgIgVo1h%2FHwsccN6jatVBPdOcoJdSstydP9mddv4Nmfn%2B8oq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCbzD1m%2BFUtLEROVpyrcA%2BaY1tyKEMCqXuhX%2Fdavq6np7UzSFant0doHdnc4X%2FVH4sIvSwCneVO0ngiXRlYz2CQ6ShDUnJbW%2BDgIO0D6nswm6opmyXqhMCxnJLt%2B9xnssbHpHRIhqVPonGKE%2FUuESVTzXMzKIvbSGbuKPt1MOqlOmqzDwbYtOaePmMXWs8l%2F%2FGG%2B1AbbWWubpo8YRzehuwUsIA1oPnAMTMFqwyyngGbhuGFFR1Eyat1QHM4FW97uayxeKsKMuHwJNcC5V70KBWJ%2FVniAfz7KGjyScqM6AOuz7oeuHBnnGU5mZlZ3g40%2B%2FovnWvoU3VAVajz5qB9naqo85g0PiA3ZAwweCxvF%2Blx6%2F%2BElaF7F2QyuYdakVWe13A%2Bo5W7RfXK3o2Gf1mfPms%2Bg8prjlDgYqSp5L8brFXq2mOCV0%2FapyPvWbOH1yLQPN7065VMncfCN5Lw4NXNJJKb1m7t1o6TtDwr1jiG89w0XoVq5yP3BkVBLthGfMVzXB2BV0pE1EEMwY4OwF5x1Tqo%2BI%2BZX3CVhfjVLFX%2BtniuFGVCOXTds1Fvfa9fpKOaWk%2FziOz9DbJmQvV7oeS7Xka%2B3tKYNVFIUDWYunHa5Le25TtNhKzsOrOe87cAbv57lip%2FVPILFrWl%2FDym8MOKSwMkGOqUBUsqqLdtELoQYahQciJMU%2FfOWF0HIhOrkFLRFu3UW6TYzyOP5UlHg%2BUpDHbGGPcwHeaOwDKcIiqeF7JST1i%2BBwSW9lPmiOy9XFAY6dbcs%2BUsk1v%2B6q4Enh%2BgJmpbBAAMtnDZrpDg5yVCVT1%2B%2FOSTC%2FSiDE%2B9QTNZ6vMtZjyqUND7gvcqhEdCk0lDm692htJuGbw1Oh5OEK8keAzzcAbaF85tZl7rk&X-Amz-Signature=38975911a36ece54c2c6f4d1911c89b2ee8854b7d9e892a1c10f8ddc786104e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

