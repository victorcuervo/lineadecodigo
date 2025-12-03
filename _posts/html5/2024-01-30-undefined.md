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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJTIFG4H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCWPfI4yi02ralTrHAjlBdN5JzYg7bHmQ%2BNb2iNmHN%2FPAIgM42BV2JTEDcJ%2B9rL%2Bypg%2BtxTlP5e%2BDPnxGtCAC8%2BTxYq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHD9DkcFPHegSkys9SrcA4bKfYC4XVQC9DlvgYtEpM7x75x9A1g%2Bzk1NAt6nuiVPu3d0qhI3sSfU%2Ft4Mend%2FP7CYq5PofQ8x4rqytX6w%2Bcu9NPnMF4X8L7wIqa6yG%2BTECixXWDbsesfDuP3sBRHhfqv%2FG20B43eELShMnUfdV2mC9pp7wxJM2HAOQGzI%2FQmo%2BYCVZslVFYJopMFG6RXYQz7oubkhVBrPsoNRDsuwWwo2e2Gc2HlwSR0yATexmFPv0S9A1NFvDF6AkfS9f17qWRKvdtjUtYaVlgxIyLh4PNJiXpnYVXmz%2FCQ0mU5iPd0fCT%2FFxVKZJP7rToHWhzPVxKrA22e0lzbArq9Oo7OSk3mVdJI1CbVCfP9IsKWzIqV9P6xDqctFmeiLjK3r4HI5Hr36ud9PT4ZMcQBqj9WaDpxJ6DZ1WSyoCb7dkyNxahBBy5bSGQQhENxcG6vSM%2FyLnWwhSSJvGREoQxLf7ay9XO%2FRmPHif1zEyLkSipwHZU0%2FNtWlKKTKDKlOWrwOo0lDuAOSIDMq%2B5KjnbJMeqTim%2BxQVRnUTjgAGDEYTUnGsyvV4laSzDu%2BhQq1Ypjs2bRlrJE33ZIJUaVs50OE7B2w%2BC%2FPifDjLUWFdI8L5gD18L22aaxPEzLWT6cC1E9wML25v8kGOqUBe57zEfIIbia%2FKbTp7%2F0OSQQRFORe71txUngS3hqPHy8Pm%2F9KpZzBE7s%2FYLdzF3qCK6WjAotoTXrtPhr45KDWuitKAqtPl2jUwgt7P8F0Id90adrB5nnoOHIjv%2BJlEIGFKziYkwyDM74HuI0ueHQT0timY7%2FzKk%2Fyjeo5TGz36oR37%2FUmeIPKNR%2BwPtzxQE222FR4Dz%2FPftE5AkSJKC5IoprRpxpy&X-Amz-Signature=4104d88014a56ca1891871835336a361c0af4d830cf827cf4f27e3183d93e1fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OCQYK7E%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICXsqQel0Op9QEwJjAQUZAEWY0c1X2IF0BQ%2BFlWCsyBnAiB9a6r1V1l%2FfhSLbEfiuta%2FP3DBJJeGfyGryMGOB8%2FVcyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMOhLfP9EPVdHNJb86KtwDUEZmh1Gsgbbyl80dRp9wM%2FrSRC8GXYL%2FkQ93slP8AWr7pzncY7ydaPepnS0YmDuyHypp7gn1kZRSojF9Z3%2FUkMHWmisYee1HEhDAcb9vJ2iMA5tE5g72IqxHnszM7ZB64paGMKxlsh3P%2FN6AebkJd56hIovwkRJD%2BOI4nJ%2FhZ9vvjS6eeQstZNnxgCvIfdHjh6gF5cfB9ugEeVABAKLXzmnlxR4tb3vl8Kxa6B89lTBMtS3r7klyqVdpPWc481JK7odwTAfu1e0jNyFY2GP2NAREZr%2BxWvkNmx49fS24Fm4v2TZAc1J3ZSDidxO31nnqsmJ4M3uy5HlMXt1Nv8gA2fL1WmdsTkkzP%2Fi5yKxwviE1bMcCO2ZkdKLAX7ApadadFK15hKYBwAoDc%2BRx%2Fg5qxiHEyKosnru83FxNwcoX3SPjaysx6dTamRp79wexadhgHmwaEAR5KzIr4%2BUdu81oUfuKdCQjeNJPyYKxQwAadnQNdEiSGUtxeQMowFCMnpoz3QQCaNq3pSSvVFqPuwEzHMwuPzyXofb5NXUNy%2BhOK1lgYF9YFIcTXZjEid7nUAf1Zfv0WZiP%2FivQ4Jw8U1BzPa4xmKwvdAfyZ4YxDuNFdfO4c41Cw0CVVbAOGYIw0rm%2FyQY6pgEkjt7ossMHpK8nAXq6iSGvN0RZ4neuihPoyWatz%2FNlso3KOyw1JFH%2FCjX1vZEiB35M1D7%2FSoUJviVPXQKvVjUurJV1laWJxowwRyzSwQCM3aKvYikQCqlqn33axNzaRDHRCAvsrx0rE53o2E8NmwVvmnBT7B6QMjsRFoKcTjGhqmobc8KdWaTq%2BLkFQTlPNMeOGpfkzZHKSf%2F1YKdmNymE8FjDdKW4&X-Amz-Signature=fcf598d79b1652f9fa8e7534620a05eb111ca477b0476c6c97d9c090de195c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

