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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAG2J7XE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFzYBzQq3IhCcuezb8L9jhQdzta2W4isWst%2F98wHSvwZAiEAzO6%2FSpg%2Bu2PrknDwt26DAunTkHZ6wOylr%2FsL7cib8fQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDPKNoY70OiZoZKBUsCrcA4gPnfGKy5tCQJgxClLsJnJOCgANIkaSR%2FCwHAjmiq%2B2lxsHBXa%2BeO6X%2B2KG5TTfRv%2Fq4zvtca3ekH85B%2Fzb7RZT2EyqnSEVSnz8f9Qre7Yf%2FvUpXmt1cvfHOkBzxsI4zf%2BEi47bWAi14zajUfgFsbIC9lLVbSz1iL6rAi6H8A20nPPUf2EIE3M6qbxr08GP5G%2BhktwDNgj1hDgfJHA0fXegdaHzF7%2BRTUtVaaVAYP3xeeiT9QZkibB6Gp%2Bvd%2FyDGQktc1%2FZrNlvPGGOxLg%2Bb01jWM1WJsccxeHwFLsbACVi3Tth7W4vHQsyWqiBIa6j%2FuHI%2ByIqhVV4%2FqZLj7xN33u1Cb9NMakoiJ5MhH1i01bzJO%2FycIg8f%2FUcBZmj1gZOv6D0cTksgCvvZfZ4L6DBLCgoabO8uhO%2B0MNY6P3X96tLEOjfSKrU8kTsKubsoLR3xDwV%2FLpJnf0cRrMIGj3peY%2Fad%2FYpOaPHNZudj2q7usxQlplrMWI7i2dgkXUj8XW4Dh2UzOcjat4QK0iacuYGxNp5PjJ%2F0G1r5W9Xue8yexVvBgSQgIxf8lKfSSBcIdMdN4%2B6I%2FnQdnijTH86CTL9UeDqEGpijmXvrzMGFQfEWAdzFaDQzf7OdgL%2FOSCUMMW1w8kGOqUB74tip5mZy0FiOcycYd9OGGt6%2F4YbQlol%2Bw4dR0CfOCbVObuAHOtcP%2BJ0K0J4935MxJh%2BxRBcM4nvXuUp5QLVvX1mpu1XUY%2B8NM7fLo33QO0nCrs8jQaE%2Bt53JRGhb7mY7CpFLeyXDL%2F21zgQTNZUa93u9udRegg%2BmIaPDz23Ukb6w8zA125f7GELamRQSOFJbIJbb1M6a6s3MtoeTrlwr0oa7okS&X-Amz-Signature=1d17458f86bfba395198f5ac9fdb65ecc46b88e66d12bad63e72c28e4b5e861b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JDB2CI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIG3N2Oo7Dc5zUlzNX329jMa9AfW0z2N0V%2FrVxjbgAOkQAiAxU8est0u1aW%2BUuSU%2B4NvcRPd%2FwuVq8h7Eppf1FT7PSir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMVaE02lNhNv2jUtsxKtwD%2FJjakwsFhJLbJHJ0UecQRcMP2lgT5kKaN8YL%2BjWxnZar9nscOhO4cZMYf8PHCGNXneziJE0qtIqEcMicsxacxjzWfCBiTV%2F5kkEtHavFBs3C10YaBZC2WBTp9nV3UQ%2F1AuOGgKxNC39MFAo%2BtZDKQDGwhUtf%2BJGb7pdZJxRL8MDYEvG2ev%2Bjg1Aws36%2Bx%2BNUVPoQkGufyDon%2B%2FiwbnWQX4I8qEn1Y%2FJdtG4mARAS%2Fc%2FAFrCAgj4RBX1O8Jc3G79%2FdPvZe8zUVNs8Q%2BJVJ3SYNnfYHzMvSbUmNuJQLsCrtDJdO2BdKaPIlPsX5mgFy6gG749D0Yvjg%2FAuRqdVZU%2FdEDAhbe3%2B3TWtZs%2FcrtADCddVo9s77q%2BI1NsFR%2B32GTM5t3VDAauDfeblRuNmiXaR6owKRcPCwzptrTIFXvY%2Bzd8V6iydGhXIf9UpOQE56HILpX3g5MRIWGF%2B9RZAiXn3gSEKM8AFB1cRBOSviTkzDjVN0kmLYGBX185B7LMf0Meu6wYgRxyVNZWGsM4CUBz8ooowR448wBmTOvPxkZqUxJBy4yJK0WH32VSC%2FkQcD%2BE8x%2FySQynBv4xTfKwC5zsaUDnlYydc3Mhl7wyzD%2F%2B%2FbB3xgCLqtVpCozTVwL4w7NPDyQY6pgGmCWT%2F1h%2B6Er8tESGS%2FNno4GH1JgYZILNheIzHgpGc4o5B5AfAKbikcrSCs4%2BXrB8gkfTq6f%2Bn9o5FwT5kY8a5rt%2BdOGt3ohuQMOHj5PPWtzxlLHAsg07S%2BCfucMlTdzXlISyvhruCj0s84aPVNyyKPAdrbxXb91RG%2BmOuqQiYBgRWp1e79KxkUkVIPfdWun7FPb9XUKfLQRlWaj2ht%2BK0t%2FVNVhox&X-Amz-Signature=2d6fb16a0a752115a8b7edd9c24eb66447aa368fb799cecf0878785fb0f6eb37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

