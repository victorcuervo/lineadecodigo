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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HYELYIT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T012905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCv5wcQYEhIIb0Cnuk0EN9ktmEZCx1UVFOoG8Y2dzclZAIhAJFhgrRTNCPb8icl7ePkHt%2F4l%2FBo%2F4QIrCOs1LxwgOXtKv8DCCIQABoMNjM3NDIzMTgzODA1IgzYPWXA1%2Fuc9Yznt4kq3APTQgNVdqIRSop9TDjQDpRK3Dq6GCoyN%2FAPFrq%2BaeAtS8tToB%2BywroaepuHP5PJw%2Bzie1zdHx7rOEp1OzOpK%2Ffkw9daOeDKTm3xJ4CyN6Icy%2FZ7Vtre1BqEcqjwcNQQyWvWPaxxGcKZnoR4UEvqJO%2BoM47hUwmjerpblQGwcxrfvT%2FLfIhTtYG32wr2S8aLDliWSmgDya3o7c3836tKEmqCLxDV%2FUL9qfjU7FlQQGlPNJCHOxOUd1%2BIVFggESMqGnzxSSoFq%2FDI6KV8Po3xOeOK2Grv10gWuelOqIN0oyJmRKERxvK7yGTcIDBKw9yauc7uZGshez84MhKslPVZaAHhXz4HIjmwsrh0%2BAypBYjY2hHUyxecbddeiGmuZ5xJFWxK3Ix%2FL%2BlzTe9uV6s2ASS7zGUe4v%2BCHLwFsLJOv8fH35%2FirUdbgn%2BkVkACUyWZrpy44tO%2Fw4DWuQegCVJJF7F%2FVgALtO1i88ha6cHhimjfs5NNnPaOlFxQNFBGRcTJcrZu82vdWu2mjXSukuujUzh7eB5mGpsuDj2cdjR7EflOtcG1PQsp87Dt30x9hfhXHNoRWO2W7JMCEV3%2FOavnuXOVKolzD7t43v37kssAXC9eFmiI7ebUhrfcXZbV1zCjob7JBjqkAZojVAs%2B0%2BTJCvfE7n4cCkKaS4APYcdrLRH8v9G%2B9p5%2FVOTwSrrkTTDHJgklP05v9ex6869xguVP8s2C%2BX50DmJN%2BekX1F8uhOd7bfw7H7zL8%2B5%2Blqo5SMHnT4OTx6Dv4l1Kkvubdx8yYwrLfoKoohnQq%2Fog2%2BWpyKAYO4nOblaQ8C2cnzbp8o7%2FqV0zzvS5fPeleU1Un%2FQaSyRF7W5vORw8Sc3t&X-Amz-Signature=bbdc78b7be297fcd743f1376963494323c13b360518deae11a63a970d8987f01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TYNE3OP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T012905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD39ni4lOrsnvfOsVOPb6poBIGVk4LB5XoeCB%2B3Ni6J5wIgLV7JCPBf44UbdO34JVB%2F0w5Y5WacUFtz5YeY5rN6ZYMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFWg990PeA%2BFMXqDryrcA2LW%2BLlAHoVDym22WpzwYVZY94BiX%2BzyvD3y2y0bvlkq4eUizVZBVEeL6mTwNxAn3oFSBE3q59vYnkC15Un%2B8Mr3Gz4GO2taA6i%2FYJpUAOLdy1asOUtnjmVhKs8dy6vCDEXud%2BdqcKeakLPDzH6fretkOMhuL%2FLTxQ%2BTP7WTuDkxi97tj58uKbFx5kMqsSnDc12XsdQq0io1DXSXuqxseY0O9Rx74DcmgRj2%2BvCS3FLXgAKckGlASwj%2FfMiTYRbHguladFaoemUm5u%2Br63%2FEm1YlLiDsPyCareKjXdnEfB5%2Fcop3CdET16VFyHUHk17WDMVrUsWdUiaSY3n4I0UNT%2BkPE1G06cLKOFkeFqwF8twn39%2B155bP2ogUsdFssIEgel210zjw5P1sS71UFITT%2BymiDBLp0qw7wA87jmuhm%2B8UblvKG9Gw7Tv8FhplpMQ10paGB9tLC%2FKiMLM%2BnwBgW9IBINAANU3g4bepUGczIALJXjVKO1xCb8u4bCM10ZmwCLFbUIyE6p88R81q6T2AY9An2WfpP5pTxZ8j1JUE93tN3QyIodDFCE5VmOi4vnSroT6que8Uaz37l27GUKV8akbfwyyI0CEmPAII8e4f1S46oDsKgu7Vf87u52XmMPyWvskGOqUBhe%2FSaMhQYIW8oovTDQ1TF1%2FQBaIpQ0hyAlg8uJse%2BXzcr%2BHHDZ44MUdxJu8ysZubl6XAHZGnJ5yyOnbhuXq%2BtsQpmUsBJbc4MS8yX2CfV1%2BJqbgi5Hl9gRJ9PyLJDApTIt%2BF6vA3VjbCUcsBIkztpCCu6SI4Zd352no0RiDjJiJKhYUZrNMJOhoOwufYzWbXW9NmrvCliROepUlQubYkyhT81L9G&X-Amz-Signature=912239b34d5ef75d9b6c9eeb873c5a0d37f09c73402e7398197de226ec3a0fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

