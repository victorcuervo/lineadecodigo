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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKWY3FG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCFbSYbk15GWKLdc5xlotvr2mAfGkCQEV%2Fn48ZGsJK4wIhAPXcsRZfzUSRO4XQrO0bVjc%2F37Oz27Akkpxyn%2BciWUKfKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW2%2Fi2o5d5Kh1PJhsq3AMq08xIUAjZClYFJP93yfFa07XujetGCbp6bPqUyFqHxtgClpK082Za6F0mE1Eq4qwILShk9Sf%2F%2BE%2Fz9cuovrSlOIvKoxGonAMPGrobKdz%2F5WqCMe692OcoQrlimeLvAW8DkPdAYMdRQeBhgsBxF%2FeDg7E1FhEVhzDDMqYRf2wdTjuwzfen5n57qUllpd0POY8hLWXoAeTQ%2B5YOxFQR2xiL6dcqciQsAytqIuAFDMcGoyohAXbA557hYJCGhYo0EfxH9pRMrhifPV%2B0UtnzfesDI1%2FN6%2BDwir75OrU2NlfecyYz6Eid3eqwksGV6lZ68Oh3cxJ0HSsjbneoU2E9Pr8SE%2FAhHX9bTh953qUT5UUBWCflExaHDhasaG%2FHyS3HeMWz2eKKkXMKemq4F6nnX8JDzGph3IpGqjBh9aNBeEOdxO26lTH8s2uhzxk2qucI0FbBxxRjxbkqZF2ZqlzPvqykxewPPjbbMGF40BfFIgmp16mTODW92u2NNFma%2FKzMcmwliQJ6e2e9owaTD5ID9oNAvysvQ9AxGXj6PEAsWxxkxMk2jANh8nOJ5mfyM1c%2B5vbWbG7f9IAiJZHEdT%2BZySl7bIljKogu6bd8ZjdaHCe9rPYyBdlPpVSzrA3KbzDGgN3JBjqkAd8hwrGXA6jj8mTroVfy5uiVJoqqzPqxHaYJzdlKNzJbFAjFrQcfva0%2BdMO4dhAaVMR6V%2F8fF96lb8nEiz%2Fopd5Y8au1ASowQR1MNoQXV%2B7oT%2F%2FGGlPiFVnDZZ1B4ridmH8TAqu5QiO4vdkLL%2FbdUqorP%2FEHPmj2oPNq8mIKJYSkoa%2By8Xbitrz%2B%2B3aBbb%2BbzZPpmhodz2bJF72vZ4XTywg6vNZU&X-Amz-Signature=3167510c0426e7a83318ee549f5eb315a12a81dbaac33c3014ec363e74acb341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRBYURL4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1VwGTzWRyVAck0u4c8x3gVQxH8nuqK8DG9%2Bg29BpvyAiEA3eykLx2%2Bk5vT3tMel9QVF%2BiYpX%2FaOybCL6Ictc1PFvwqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfXprMzNG6ih64smCrcAzaIMg3RNF3XIRBxd40WPo5%2FA6wYprj9qU2cgbAt59yZ258TgUV8QvLwGhg7updzbQuT%2F8ILptW3mKx%2FnBcY3BHNex%2BS6wljr8j49SMwWPDbwyV%2FfGrQkrgO%2B%2FhCJrAL%2FD1nZ1jjjJtyvUBH83NgiqTlDcswcsu%2BbqNljKdaYIl12Hcvg0%2FRTCfxtgEvGj50HN517t2iF9SUI3HM4wBqCIzIpqdUyavxuTfghERMJBVK7KSnKChQOMvKPiPDlwi%2FBoSj5wJMJqXGz68%2BBD%2B3Y%2FapLJ4DVn%2FCaJQZMaRcUia2T2g3pBhCF%2F%2BvRz%2FCOHpIXGfYAeK1IXYCY34Thlu4DLP%2FL8cAVpTNRexz0uaFEL2BhKADfHu055yRLeH0JODMfEdq5qZ7p7X%2FJyuqKqfc679nPcny%2FnKCDAXJktZUHiGXmJUJFlo8oM8DrzyViq6%2B3d8pSvwrA6HUrI0TFz%2FCe2lSDRpTFcf13MlhdObcxyzUfiVy1vwiSDm3db6E4aKxINNnTquScFuFRU3vxNqY7dAEcClKyAl84x0L2vEqYuEfAgv1G1vEt7EC%2BqPH4truHt30CnVcZOH%2BY6TJ8tSnYJBxCeSEYE8RXCqyWr7oEspKTHgjGzaAN1qfJnbYMLmA3ckGOqUB0pH4bIons5r1ua0Dz56ilctR1PRGJANmpzLZBspYUPfEVKiAMFdfJ7i7CsJ2JW5EPRCqDToZUeQ8lUw4nfUbv%2FKoFT1qVjfqzHJ37532f0TEh1G%2BJxt0P9wImY6sJDlZXyFi%2BZ66buyGPtwVXarOGJD0s7%2B9cQ%2BSjVfMOrO0oyfqjk8VkMuMGuEBS1rUZPMGH9BzMsyIisbmW90Qq9pPLA34H3FU&X-Amz-Signature=a5d066704e6eaf95c2cf85dedd15195c55dbc56154ed9d31449d4335f7016372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

