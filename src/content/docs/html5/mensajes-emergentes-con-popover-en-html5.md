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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2UO4U6J%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKsnsANaqsIHwamTlSncqNia%2Fh9glNBGEg2Nh9RDxbFAiA8jLSaM5k0YnwU7WhSvzYLRGT4pbAQMmYNWsChMtW%2FJyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BA6kPwfy4bfZypPbKtwDZTycKyewIIAKx1%2BJeBAB3ZgZlisD497esCKRKI601Q0mkoQ8jPaiS3VT%2BC25NmPO0Uk%2BpxWg7sFNN90yrGhkrKV7GJehIL31WtltkM5pRy22DH%2FUFtMesV5MiVw1sHMOwoz0qamkn8xl2ouNkJkPKSq%2ByAi6G35dkMRJWwC6ALFmCV%2FVtwfeAwuHgSMMS1hNL%2BSX79yX%2BqBNPEP%2BrerJX9pb%2B8ZHn6KcPt%2FXTYy0Wr2fTYyoBvTXSvp2LcG8dDfS60b7n0cPunK98Ki5xdmKGVs1jzGcn3xxja1D9Plmel0QRLKXvWRqJslLS9SA9LzW9LfUiH95Zbbe8WM3tK4pyFKrjqsv7d%2BRyQru8z7%2FgAubhLn%2BYeZb1Kjz0AAIByxeJ4hpvXXRSYemzpbLmKSiLUil15XaKqKMJNRRM4UsA12yX8NS8fuaK616g1b5JgD%2BMWSYHSmH0gt45AzsPWGF055MBvOA7oY71e3bRy1Ca7X3nIfE6Xgct6jVc6TEdr8Xg8rRCMeA0YFCMyAnEC3ZmWBLAKLJFbz%2BKVWmiQ7EORUpMLX3cYUNiJG4CWmFke9u%2BA93HdZWsKDNMieR4nCanAOPOmkuheSYcwsvRQ7zF%2BArZK1PkYQLWl7UiNYw0ofcyQY6pgHkQ0EVObLHiTxpoSR07Hz6WZkdbz%2FFg9BX4jPeiB52vEbFi%2BWngr6O%2Bf7m9nx4fSFp5n47jqDplRZ4t7lrVpNKTO3jVhd%2FmuODzBxsVDqA2AjNlhSk8pTqoeOZlMU62HDhbL6Zm23pKE0PuPezMiZG10f%2FmY0xcwcJ7%2FyFZg04IkXp2yNhN4CEqhoM3EX3d0Z7yPuB0%2BjdijUXGrVnexPLgLaskhhZ&X-Amz-Signature=918a0a188199334c0442ca525e7116807a8fcfda2404d060dc45678bf5fd303d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFUAJFYV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD99D5CuvyUt5%2FKbH0ZyRIZpxUeLfCy4%2BamJ3fAmW6ocgIgBMVmU3%2Fgr8zFFI9S%2FQQtkmKtkMD%2F%2BpOFH4IpYG4e%2BgQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJxSYrlVku0F8OSwyrcA9ShLlwdfafi5h35WR86R1gdBbBI6YuJ1ViObxC3VGsBUpLVSwj86tY2tGAlghjWN%2FQwh1Qormh0MKjqwgtggLptiDeqrEZmOj2iRP3HiBTf0xuZLzRFrxeL3KIRtsxfyqA1p4UqD0HuAL%2BVXPLvhngLJKjXhn5cr10Y%2B4X9yYAbvCLipV2qGAuL4FGE%2BOG%2B5rMJAhmBf%2F3WveA%2BY3YF3q21jOIHZ8dOg4ZgeA%2BsOjKYC8SYfqINiIQpRT%2BjjYGjfKLS69Qd%2BA%2FM1QDSddjS4w8UFdnyCBI6HWLh52QsBxlA9Rx4jet0i9%2Fkl2TN8PmkIsGAc2t3XAeLcJh8ow%2BSXIZut2XxM6d%2BeN6SeHBQaSPntx7A6Pzn1jz09jTwUs6hnqC7gMzP11FrYLXvuMhGSckXVctMIRRqKF7NYjPv4BahFGKYpmUBUlZBna45N9Nn0DRPK0Wr2i8coGlz6JRuNNs9jVaFYqIaNJzlpXNGL6uDxc3AAo%2B9aaUiO9gQjQIrxRo3FiSF9gbMFsQAXrGP2qgVERWeQUDX9q8vUU5LLCvBqpYY5nfcB3Ox1daElWroHV2ldZ6zFYp2JykkpGYH7W1iKignVzG76Me63uaV9wENloT4FTMGpz9MnDaxMMeG3MkGOqUBxx1LKSU615uptEZZwK4ist2p9w1dK0inFKWOHWEEh647nFDiT8NBMsiMFbmR4Ku%2FYK0Bu8SMJIrswtgiA7HsuG8AtGEf9%2BRr6UfbeBsJnb3Dlrw7dKdNiXN84YfOwCSsTU3JkhsLUpnDsdHdoNFf9afeMPoP%2BY1CU46U7fZmUeamdrA%2B7%2FBbKFMbHbpzx6q1WShBZmEwtVeZklVKEdZhE%2BCXtrQ8&X-Amz-Signature=a93822d6efef163bf813134f16875496f9671425ca32e96a1efb842e0c9cdaa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

