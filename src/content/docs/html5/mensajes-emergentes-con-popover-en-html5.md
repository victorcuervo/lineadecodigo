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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABBK75R%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCioGj4%2BJLgr8Hip089QBys9OnJRXKiUPKBHH88iXhxwIgTEeILkE2ZS9v8YbMptl6haVqVzqPVs7Syg2OXnRwIr4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGTTMVp2XbMY9Ag3yrcAzMJHR7AvK9G366Pk9GAz1VqssfG1UzUSRtVGEH9dUor9B11I7JoPlS3iuKKsXxDKZaD7AnjzYrGj7QjMcCfYAqas%2BK5qm8e%2BIrVSqi206wHIov47Ikh17TU2oXyfFUt8l8XIMjybGLQ5hlFEvdMJ48qsmdAFtUiozeGLfIDpSyxP3zTr0SlGpu0HIOVkvI9DbpfWRaQtIzN6cy2YoYGb2lZ3MklRBK%2B2xovoZhLplmUAEWdaHVveU0kHl2fqDTMZSgC7HB3uwL3mqxWUMIzziZxOCJYDrVrbv07r%2BhSc4oUIGuQF9dRvFiqKf4e3a0cSoUJ7qD661wDpB4CA7VG%2FDec7pHHMsZ6BgBBLBZEWycvBrFqJ1knuMY2hl6temW5EFzw3LBX4%2FmgZk2qd8rB22G4vjVjLgbDBvOkQZ3GrQFIsDvpTjISWq92oAGNRCiwwc6HS0yfGP6cpPavfeau24BLq%2Bcq6rT828vrvKy1Tz3jENlNCm%2FIGeO2jkAoz8wsP%2BMUhNNR0aKXa3N6IwdMpxViJXqSG96bBaEeHDV2F8SKl975AicAmTPbyTGPY%2F3npLZLu0KJFXSQ3rKebQjNtJKUhAUld59IAHZM7Sb5aezDnv%2BAk6XqGzl5AXmlMI7t2ckGOqUB%2B03qwSFKbFvMoKrExri2WDKiuECH99k2zQidOE3%2F%2Ff08SazyjsuzpnZRhJZ1OBGW4fq8FWJRQRCjqokG2Y%2BM1AYPgqMq9JeAgcxD%2BJFA14xP2j8VH1izpyQwvEfdol7Xiu2gA%2BT47VY4rIteLJLWMKEcReoe4hBx91ndyuaWlcAbj2niXBVnAejuUbcG8I8wJchNFSwoWo1xrz%2BqEhVF6VC%2FTCS1&X-Amz-Signature=8a35aab795dafffb2f73d3e198dbfbac24c2afdca3c9aa421694110508e98897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLRU4FK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ6xMs9SKpOwaKFJb5Vqv0%2FkLfeqLS1I7mJROevPBcpgIgQzcJr4YZ6e72%2BMFqIDQImPzZfE0m%2BKkVS3bSB2iXxFgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAx9annNEf5%2Bmexl9SrcA8Kye%2Fk8SW9XtCbUV1VtX4%2BuX%2F6r4sHpTo0p8OtNXkdLUksQtRlc4wlmpEJoBOft3NxrtqtUW4e14uctUyz8yjpdYQhs0mgudMrpoYMCVCvH851%2F5lSqQ%2Bi8pk2jBovIlmXUkRmdczPb70FXWpoYDQFu8kWP3lhou2SiHs%2FS9DVwcHOHHmkqb0M4a7Z9QZn%2FQ1I3Z0%2B4Fh7O1v8UmoaB9yvygtZxQp4ZoZ1V27%2FZHYDF%2FD5ozflfFaWLwr5rTqEQ6nu0a7wommIr8KtyWM%2BKXAF%2B7kH40%2BQmSgcHhjAeLuFGTEuuIoXRo7v7DPtkIS1CmYB8%2FqvjC%2Fa3LBq2OSXHmdciHwMUCz5dAQ0IQpoUfGeInOuR6flsWuJYopzK38%2BR%2Fifuu%2BTtkCAdyGodfyd0sMSy2FGWOb4harg0frMOiyp5hwchbdduCaxbWoEvqLUL%2Fz1ov2ctwshtNI6NHY5%2FlKXBpDPtKjrX6jfZ38gFlpj%2B7pC1%2FsbjwXmP38Ts6YgzeU6SpIQip3%2FJttdXn%2FyT4sY3FoUdKFCVlusspJAqJ8sAQI%2BbbIl1r5mwxINKSWk%2B6QBRMSd%2BZ1btNlO%2FaTnguW%2FEIvv1gK3WP3DZRg0W1HTGVfAqugcU%2BXURAztAMKHu2ckGOqUBz5xzRstxu32emhQs5Ms8sRFsFmx%2B6WvpiS8TtodrTnvuv5wXnFXZM54s7lBJ%2BcIXYnbaItZ9%2Fs5y7r6NYvphv6YCUhVJJcRWN%2FUAQdXGlGcTHS72YB0cNWzIMeMuYl%2F0Ei4RJTZuphrmM7M9jz%2BjnWFZwFYD96MoU1yO%2F2u1eIVSvyjpYL%2FtcSE%2F%2BEwr7lhDkUiKjRtwREbDQN9rndbY7oLWQtv8&X-Amz-Signature=8329ac05459ef80a12e9aaf9885da456856e49aae2aade5292acc302b57d8814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

