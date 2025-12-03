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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IH5PNJN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIDzjM2Xq7TKFVTwloC1qwmv%2BCt%2FlBvc6X6RFCHFlDMqUAiBgeODSbWgS8%2FvLgFupOozCEwELibmW4NwSqgNSXf1ckSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMmH0uhWRDrAYxbyDUKtwDJsCyAu0j8BUosCz2YK7TQc0ApOTbcISah%2BRGYwO%2Bb0SE935C02xWZ1lQeRERGsRImEvjeoWFAOKJxPv7X4MzMpp8nD%2Ba4bCATNEyB2dTgRXXGEolL3CiGI4vxvbOWteAMWfWrkqrd0ly8PLv6CV4LPDpXDXn6neSb0mXrrR%2BWMFeNJ7cyTikkzR2cEArxUJ5BB0xBeyzGo%2BnywNSv49LKbH%2Bh%2FYx6D7pphdxzaxJRXx%2FzFqMpnolHU5Oyn27OILQZQjNY2zKLQWZt5kK53ZbuYZFWdWodxr05ZVOA4eXZrg8%2FhTyKkKV4LA82FRTLSUPk%2BNqlylrrIzNGkSXCxb38%2BEw7p1JlUKvnf4XY9NbtA8j3Z9oPuH8UnkT9sM3epAAH0xTyvvj1G0Dk5%2BZ%2FXdOCRKePKx8Y2FrIfs%2FqFhbb5NQgIyAhgf4Sf90Ji3Yk8eeESg8Ft2H37oLtUtgV1hslUHQOcY12RDs5MA5y0hMMi4tY3I9oLL91g5VxkEo4euqnT7JhQYitf8Pb%2FEtJT8c2O0btPMPcajAQcUfdZtL94pVy22cBE8W219ZfeiRkriACxmiJsSibMBeSFX7CZNv7K7k7bCSKG4x2bLtKRQHqm1%2Fb8ece7lox2IoTX0wjcHByQY6pgEbD5eFHRl28p50xbSDqnI1TjQuGjuGRlQAbih0%2FJlNcCt4Y5seKSu%2FBCfZDWJ4C8faOd0s4V1I8Th56GbhjZSe0bTKo9n979jYx6iJQs9d1YZLCl2goYFmBbICLydLzquafMdvusyq8NW7K%2BdI24ywozk5lAa7J3Dbb2I0lU2wpMgG10Bwc5JnUfBG7sQCi8gpC9c2K7D2AXLvLCLNP77shz33ezW%2B&X-Amz-Signature=f5b52ebb02b6c15d57454ccfdcd110167db36160684ae6a0569a162303808fc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H6CM4MX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIE7Fhuei57KTwFZ7gu9rswbAgMOdV7BdY%2FLegSFYLd%2BtAiAmgIgWIEwvPlwYOEPzbAxykZJbL%2BusIHtwxfbM50Xw%2Fir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMGsy4ZK%2FK9g4dZ2mBKtwDqf8%2B2OO0A5XiDPVoMKUHFHEEyBZRAlyTsYjKILL15k3wOM9lWAlQTCo9amXGUPmHG0Fak0Z15li8ZG8NUYnyw7ppihqTWy8Uydb2BpqFtigYltRBPuV82eC0StasyMREfIBDthhWbcm2QwbLRbV8dR9kCDQYBz8dXCMAgiZIKCSafBzz%2FJftoHF8ZNyTuLPx8imI4TGN3ktd3ohgsub2g7L9uHBbmGnRvonXcfqTPVuov65%2BENimDBRSY1WasOBDbS3rluLPoaGaH9uODN%2Fnx2W48t92cbQcBjlcJX1IlpXO7JFQ0Fi6lF%2BkxhD2tbP7uzU6HPrR891bSpcwDpVh65HwBdG0t%2BBNLt3cLAhsmLCVR7p%2BJ58XJYtqInzyulO%2FJPA0B23iVTo5luhGFJLnUMFXwX0mh3v%2FdcRQ1HC2oCeUqHxPLwY1%2F0n2A3i2hyBVHjsSfmGBHL2tDOA6hnMOeX9nI6hbp2QWmY7bt6wnflKsqyXC0Hi6lbPEKj76i3mHvJ2Rr2L9%2BzXe0l0FL2xxkkGrQTcpW%2FwJEjqdLPV28h%2BclaIAuZ7dpeZeLJH8SAzlr5XBwc6eKC1dRCn%2FGqpV3qjWMySdYnKiPxnwfL4XWyJOADjBiZElJjGuCxww%2FMDByQY6pgHLtYYEcK9IweNUK3CA4%2BDA5c2n0cRu%2FL5G4fmV238%2FK%2BpqIkWKYnNlUWN9uC4t7bpnPJ5lHYQsme6nrKgyOs2wXsWxpaGfBY%2BQoxL8odJ80lAixS2Bfc93bxJMM8yJTCtnd84LOvVaXL2tS%2B2DOqLDmC2nli60OdmQlkse7VhO2KW%2BmdLu756B0FYLms%2BxiTxJ1i2KrVu1tkPYaXKuboXt%2Btn%2F5zCX&X-Amz-Signature=0f44b9c0e9bdda492b45214f307553012dd9f9dc6e5d2281ff8ed1842702f244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

