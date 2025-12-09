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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JUGZVH4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR2KJPNfsvu0q0ZDNXYXOffVUwKrnSY6S4ynn3Zve4%2FAiAWd9E1Z%2Be02gsHkm37xvrqWgoQaA94vb3Z9dG8yke4fCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUU5RSh3cT0%2F6gjKpKtwDtEGk%2BkmcslXClW46qst7Cr%2F5Y%2Flze4mBP53nKf1JwDJFSsCCTMNNEE2woAQzP1kyIcrCGFQ6rO8QoM6ntjBgyt79JTZ%2B%2B8FR%2Bk4IOg2pG2LBfKtig9WEDg8olUv1Plc37UnH48sQVCHdgwg5O0QfTEFJNgyjljQ3XHa2QY1lk0hxYR5%2FtwvoWIwL0o64%2B6MQ2jqgiZjRvdHIAw2JfB4DrbkArzFHKvSDGmHjCLd5TGOlDxlrijLghUyYsU1xqkpSVE2xd48a8GcYp35eGXqKvvcdnQTblNg93O0W535M8xlnmAhEUfVY1tYQLgnZzpeKloE%2Bluv11uHGJst324H4eQr8AhNxKAeQXllhm5%2ByVny7NRsKURk1FmErKznM65UIsbTR71xZP2IIfsVjam2Avc7%2FHs4gp61SUYhLXL%2F6sVT%2FSQCT0QcfrTLFa9Kr9mUD2RqUXZMkjHdzFu%2F1rI%2FZn5vPDtDDHUR4frZy9q9fA4a2MebZt6dMYmr3Px6gUH5bBsi1X%2F3Tr0%2Fb%2BnXcdchOkYF0oTJ8L4pC8f58zVw5f%2BEkvlMn4p005ffPnc43f6IhwbF2R0PTwGxMK1HYZ3tSDaZIzccaQyC6G6kpczBJjvpRmO8YukVCqK25CXUwq8PdyQY6pgGqcQR132w%2FpUeg%2Fq%2FgE%2BuIAVxYSRlw31L92to8neuN9TtZZce12o83FsQvv3H2t4%2FnB6egkCps9YwCnC%2BarId7ls5NCXV9j%2BfzcB4ILRxsNdZ%2BShP8KBItKAbGZAhpsNJIdrJdkr%2F91Nft0KZ%2FBlgVcuNvWqdLQSc3%2BFPJbb8zLbZRZVG79V4GjYKinXMrP%2FgF8%2FnsPVVn70W9yx5nB91TRUK7kvve&X-Amz-Signature=1fc5325de585d7ae18b89301f05d953f73ce9e9a69dedbc44192294b6039105f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7F5QLZC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9ynVWPyfPnotZmeCrsIitYwl7QTrScNT4RZ4ADMN48AiAMvofxB9uAghH0%2BXukPYows%2BsfatV4DtDfeK5i8W9dyCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdXELLcWJi1QIruIwKtwDDf3Z67dhvtDCugKNG2ocgTeCsoFOC3Ts5nAUAydHAS7%2B1XK4u2oY1ovQldobjmgqxHXDMNz0qMYknoStGS9lHVzQ7GYJXbUQ4sPmKFqO03qpR81KTpl85VajQWJvpRbJwacK0%2FKtFYcZP5qdMsReOPIuMBP4Dx5N8CLrwP%2BlexbkVhZtFmtQ7BoJ5CBh5zePDnLBQif5vRd2sdoQIbdyzHv7SPwNKqMI4VfhU0%2B8SDX2itEbmhJKGAmPZ%2BDDcl53B2D%2BBPrbKDRZPcoaxzBsFcHDUlCzeUn%2BRPAbgzZyVr04ArAL1R9SSV2eiQh6K%2BE84YPxTrZ6Xe5YDjSF8zZMod9%2Fqf7Tdqvlr2mkJeu6MHaxxHKdNSsrVIaCadiG22ZiLgOoBT0p2P9F5NTdWkgc5SenTxbKzo0LPMbKpx%2FZ3JvmVIidg2PHwacUdDSfJqBDmilh3dxj0jb3hDnAGXylgGyLwhkVzs60chIYBDV%2F%2Bk88AN6dGjmg%2FeOj4TMmOrPnimc1zYFasosiDMqhuRyZVJOsHx%2FpCTFPvmg8ICdx4cm3wrPAvWPkvIHayq3gMQ1gOGQNH3ntrs%2BJLP0mrkddeVnga8B7mHE2kOacx3LULuDp1%2Ffwov1HJlb3rjMwvMPdyQY6pgHjvet3RZDvbDZFAMNTl1sJlljLQ8p0ryi51G5qkt3QbB5rbuLvM9digBGMhfDaZEQ5rPjwlS1ispM4arGnornY5XNwZ%2BTr8caar%2FbyNgYsdifNBQSmceaQELFdIkCBg9zPdxtchDvHZyK2ETYd7JtIBBmzxpdm1byWT1oyhfkjuyYZ6Ii%2BGNYCp2P3TjjrdLGUfBnfYH0VLSIQREhikNj5tYknKik%2F&X-Amz-Signature=19d0307167bee20ee45ef217a18767de530235ab1a97184b0859297b7f267057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

