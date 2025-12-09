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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U72FVY5Z%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9c0S1FD1DifA5LJXeIKtTO5w2Of%2BU%2B2B%2BvBTGuU8tfAiBUCCl3qJEyiQHHJzoLNgHOEwhEhbBzi%2Bx9VSviEllPnSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWj%2FbtpswazDmbJvTKtwDIhciQx1IZFU6QBd9xWNpiqxvsgjBMtnsb3zuIxVlEcPTVxKf0VLqWP%2FRYIC3hWBleIKodg0Q2U8v04TzI5Pq%2FzEf07qyv2DlubEr%2FYcN02msP54INwv3DHch%2FKn1PO7vJ2nFsceIgRDb8Gjpilt9FL1wC%2BskSPyFMOpqoUiDDaobceDPYMcdBTmNvDpj3konxsI8P4fwOu%2B77iOEUByEmIymCWK9F880AiMVrXVJagschAtQ89kJMYyhFMh75fMOGVgxvncs%2FZLugW%2B6c%2BZYfphZZ2RLTPlki8YC6M1X8aAvPhDDwhFReTm3SCPv5rgTgcwlkUoTvmSXPGXXM5ruz3dDwUAtN9ynC4BzbdACjdho5nLC3ln%2BOtjq2MQJxX7dd59mGNnGLyEjDcl6s5YLioQ11vVYB2GU%2BocBvL6Pl8FbW2OuoOe%2FkAgmVXF3L9MYUThlwMsFRx3RRN%2BbtUzJlvxwgkEn8lrU%2BIVtZm9ELVly%2F1Yf6tYTip0%2Fa3QTIQFJLfnvkH2P3ykRMIiRJot%2BmrC9nO36Zge98C7QSLhcMSDAaSW9IfsaEc%2FNJP52eWVXzh8T0fUyQIgvNH5jJ%2FGEFQzrQiDiV%2FknYlDN5ufW84I2nQ0BkHuou7lN%2FlEw66TfyQY6pgF%2BDAWUzkiHVRvH09tCzItBPCiHbcnGaweuoIsiS8AYbMEwl6NUkU4eBqJcKCBtvUT8DEk%2FEYQ1xUggdhUdGmKNG%2BECOkNURIT4AJnAq1R2GTWFXmC3D%2BDr7XdZF1%2FXx7lrz1oWorIGZpL%2FZR3P%2B1r0yAHFNZM9I8glIqNNIuJ69i5NCinokaYN95j9Tl969UZ8W4ig%2FKnCO6223OY%2FbwrbCYbrSoI%2B&X-Amz-Signature=4cb7dd4c642653ebeeedfa8e89f8710a18f19c462fb7a244ea53c0a280d49142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UGE5FKH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSq5QNF%2FjDS1J6tEL8EmV281QsUCfY2NztLGTKznBUzAiAS4nfA1PIYtMDClqUDcL4a%2BB4ptaLwTq9ta7uHEjViXSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJPt4D11XuZ1gzkfwKtwDJPdYG28Ytf4JZKA8zNWuq%2B%2BMR4hsoJjgSRw9KQkn%2BYVHYKBgArBoSUDR%2B%2FEXTsFOFBm7Rtthg1SnpIqJMEEj5ScAXguGKkU5qepcmzi2M5dlT2PJZ%2BdE7orARcRu7TEjad2tnYRMIDLJ30xcXmd4RWBrDoz0aVR4OhMBRSCHxze67dO23Q%2BqKJkZSIdq%2B6yrYG9GeMkw9Is%2Fb2zNgZccM1o4KnUmw76QlZ%2BlDOyfxcCDOI4ginFwWxVS8jkUC4dLB3YRnwjfo9iA2ogq7sfCn%2BLLL4ROE10W86od21KzJic2RcgGLaIQCsJ9qpkt85ISxcs%2FFULYftmVbtSig38bfXO522fjYgQJ2mAx77mCAF3SS22DelTSy1VWMsjc6CtjPlhU%2FfotnN%2Fsaf5bzIDCTwNWlKyS5OviUVl6RoelTs0Ll6arszVbT%2Fy62OuIOaANd%2FcixjOc%2B4Bf11Ov5GDJitIm0BENROL3ErvqFLoW0xImoZ60uREvK7It%2Bd8aN7BjjF9BvgzlVHyGPP%2BeWCSegChLFRtdeBufo%2BbzlvWCAGDM3KzJ6R0VRsJbOvhd59Y6c7Ohn89ueQ%2Bq%2FXz%2F0EqcERqkT0SDaT6UQ%2FH9R9LGDLKFMbe1dtWe8bLXHowwgKTfyQY6pgGUkZQWqswftXkHbwhPTTuGN3b%2BKvR6h5MeqBZIblEkhTxRADl3qokB5bYAuYDpLIsf0VJZ92PVSTWs4kPLasrW6ujP1eLly7qmlmjCE8VpoTG6oz6N1WW%2BLGlPpcAlNTUhi%2BACB7nXY%2B1H%2FFF8r%2FIS3kLw%2F9xIOo%2Fwx8zMvz7IHY1UNuU7J4soiiAdnpnv6oQzM%2BCw31SoO516f4jHip9%2B7Cbif58c&X-Amz-Signature=08981685a33a6d0f74a6c82fe912d28a1318cd44a4e05d294457147781ef962d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

