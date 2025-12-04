---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLA7JRWL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGXR4o7eUGwiXCDV2Zw7UuvPJVmUVf%2FCjdmgk6%2BL6kdZAiAOLj5FVqCmjdCd58OX1fjtkpN0I6bvB3D0bQKhPoP41Sr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMVvkwEcpqkiMw1N7RKtwD1LUomhH9Bf%2Fjkkq%2F5wTVo5XGU3Zf45wnR91Mv0Sn40%2B6T8X5vV9vPNzZcKTIHoMUHwz9RiLhow43Py3EQIJLf9%2BZIEGBlhRaFMzgVTE%2BCmdKXOuN5bGK1mEEBmtWPPKFtY%2FO95xxdsLbCEpUHuwgHxxEqU9ek2j9OPkEGj7l7wSVQ%2FOZzGdVHb1oEsApNFQZzyuWFFia0B5lUTlgVRR1yZCyP31GmpqSftP80zj6do3gGjRCoxucNgn%2B68hahxjeo3mybQZe3f%2BrU4gsm3wlc%2BRkd7nCOETsT2oJXYXMiOTIaXwlMn6t2WJ8dHxuJK%2FFNtwF%2FYMQ5oQ3KzagdWHf8BQG8p%2BlEdNsA9TwKOXwaVym2DLZ2OpDDgGOGSWzKVkPedUgiQTLeDLkQ4t3b50Lc%2FaOOWa%2B5tLZHF9QutgkVTr2K%2Byj15zBtoPyCePNR%2Bj914nonyf%2Fh7tyJxq09Z9lMdkAxcfFXGY0UY9xOdkklTZzHX%2B%2F7HClmUaNM5VI7i5Fbh18ALf9NxMROo0GaxdSH3wYkh%2FTThTDOg8mtuIfUfaI8b6oBBh6K1Gowi8K4slFyFdCkIwo%2FjaSL6AW2ngH4tH4arIRGF7yfVTSrfFP%2BAMWzbZPrCh%2Bly5MY9sw99TDyQY6pgFRF54%2BkiJEqGIVwQiI7WKekqGEpEbG6BU5bQPGWOrixCTi%2F4pRXVkU1o%2Br6f%2BerD6Fj0lvwfy47AgUQwrtiPvVqSQq2EeKkIuiSdyuldK4p%2BUs42gB2t%2BWHnnuveG8%2FpQCpbcVR26IFv5jDhIsVMi1Z%2By%2FEoXW10DEmJm6k7uDb0U3SBhz%2BMZeExbYuH2fW4olz0W16t98eCygfjzQoGW41Rs4Wwnz&X-Amz-Signature=faf6b71de5a5e1c485dce7e773c33f8a7ca60aa0a80b74ac02e15d23cb1c3c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKEJDII%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBYpW%2FwcmVFA9B3sTkfok9%2BvSj%2BrMxuCs8Yab0b8xd11AiAd5gT7FL7QObou5NAJ91u2zjK9OzzwwQt%2BI6MD%2BdXEpir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM0%2BKtrHPXukJJ%2BpY2KtwDqt8bfiWB14%2BN%2BT3zdNqGdUFwhEy58zpnh%2BxMz2rqJ8EaXvXvqhNSvwLJFuL1l6MZNJRBUvPXNl1zZjLV6fK4qJ4tTjv5fuYcRCAXS%2BX%2FQcjv%2F%2Bf3OWODaFs8eG9dRgWFH4pmadoJOyIJMoeRcmD%2BRVnJxxfj5SlZeXcBrnDf2daptWcVUXnCWAzlu13GN65T84TG%2Bb7rsf3F3iSOL6xYXqdFGJJXRlEhtboTLaKSfhnj3xEgsqgP8igiWf1nYq4MIJYCosoCL%2F09Bf2UA6tQE2VN1EXHSbp%2FvIRROjL2AZTdXN5OuQEnbxMyZp%2Fh8Jj56rvc0kQ9E5C5qyKRpw5V8LgkJe%2F%2F3dZii1tRnCZzvBiw1U2Zn9TNeAzc5A6otNf0wMrWI8%2Fs%2BHvPS9r8vRZgaHkldo9recXaP3ywclwmDGxHUnmPPWE89pxGnxdlN8gphYmH9F5M%2BlEx2yYy76XEVURLbVO1Al8M3vwcp9JMMULAuaOU62h90xjPh%2Bh2FT1bCe23jJ4KIiLFcC9SjjznVrF%2F91rs4YXXrHcA97kwbWhHNZzhyGt%2FHCS2kYtNY0SBlNh%2F1x1xFTjHdMRAWhNohBxcc05mX5MwSGHe49%2Fen5VhFreCyXlKQPZkSAQwwPLDyQY6pgEXXosBw%2FlmJNT7IdPMtkQ8z0X%2BEUtIKwm%2FOf%2BBVo2w%2By4dQAfD1WRq7SvZ%2Fxb5VHWPA7IWHFIjAreqXAW5k8C1ciML508Vn3bXr8TD%2F7oFIcIMNg19%2BITg9XBYp1ylxOq3JnuHtP669rPQI5cA8h%2FndRtIeoGfeJl0mC2JQTXFB%2BE2gr2N7phPIUV6ZbUetZew%2BrgV%2BTNNL9FZ3fo4aknYNR3Ze1z7&X-Amz-Signature=f05aacfb49a4c2d7c80c4e888d227d51293efa11c3bad747dbbcdd9ca5e30ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

