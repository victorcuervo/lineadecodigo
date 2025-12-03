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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKW26TTA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBj66PTiUEcYYCzKBmO0v56taMuJuZY9v4FnmblDyHyCAiBHsc83qgZK%2B3KMVFSH0%2BZTKnRWbFt2UMfavQW38pAjtyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMnVubw3Ck20m0wkgPKtwD%2FJNbePXtq1sejvoqw5DdAzkqjFnn3Hw9r1LzxmD3fGhVO9caA%2BUMWMITB7jSuw84c8oq%2Fb7K8el3Pa586oo9Rp0erOYGmAqhSkXpVs7JI2MT9H%2FE3bPsbTtf9xSM5o8BW%2FePRH6%2FeR5xEVpKQQGH5TjlukOLSyJja%2FKZ2zLbR7rPJAc12AdU%2BBK6DKMwLt4P0q6ysz7n2J72eQMhn764yl9wtaVPtwqeFnmvIzj2K9rLT5vojy%2Fcn5ovBtWT8I%2BsXIGJXdNX26H%2BdpTw%2BAUhDbNLNTBLKV7IyDPnX94T91QxFWD2Mq%2FDKkC5f9Z83qN8utABtGqishNvA3mZPWdALuYSJHf1VCO%2FKuV%2BRJSw33H%2BSTiu%2BxqGLxbkLwI047e%2BmB2NyR3YGBp0k7suqQQ0J1P8kH7NHl%2BOFUNVc4ghzIC%2F%2B67NG1pCY%2BC4gvAv1a38zBa4TNg58FFIwFdeIujCu6oh4n7RP%2B%2Bj8F4kT2UdHrgaNnrNIpK%2FjyvjHh5EQvx8FQx%2FX8Kco9Spy9Q1gkI9mTuHf9yNpRhhp275qZzWH%2F2vb5yArg%2FzhtsqJFm2lJXeIpR4wk95J6wSGLSq427YmTxf1mIrAC1Q%2Brh5ZD%2FBFOmaK%2BMxKQXAwI%2F2vEMwspS%2ByQY6pgFlqm1BTRdIN3eMS4VnPk3IY%2Fg9%2FB5BKXs4scReRWirLrhl%2FCMnln0aJB%2BmHsc5ZdDHTcdh5clZ2TGwLz7Uni7hdPy5lH57gELw6Typ0sTgdEjU3jSApI8imGosGTzkcFV%2BoD%2FgyDaaEorMh551Gs41EmYLr9YRUMgpZ2NkjYTJFTmXQsj34t%2FoIMh66msDyjCaUhYgdWztOQXPwLdxFMnxtmyUcH3X&X-Amz-Signature=dd25e23fe5a777bd30e4e41e243bd97e21d52142330bfe434ce8fc13f672b954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6AMJAI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHZ%2FnhMuyDq3RCFZRXT5xq%2BEoSwZzY1xsrR43EVbN6LNAiAbBhMCkVEZCYMuW%2F33DKFw0D5rVu3guRGNKVIzzsSkyir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMakvNoBYzd6fh%2F%2BI0KtwDJVyN%2F1GFb2voWZ7qLolY%2FxdIlA49EbXicJhySSpsYREEQIiBtW7QmycAJph3MPcd8kT5GJET06oSlLN4AG9duxn1RZQlfjRCp0VCaPpL2QQBl6WHLh6xV3mHIZWZEfDdm35mVGhrdszfNe1fms1fW4oosGFsosAyIJqHK5iqwo3mC1PQlFeOTAyoV8Qmu7g4S6b4GjK8g66kDLbAw4W0S3n4%2B0Fn%2FM7SVcKt%2F0%2BvX96ebXl7312uj1iRgo8nS53bdU2j%2BDgaImzFtigRMISVfVvr3bg94z18Ps4%2BBf0S5IRcmwUbNoFOgTc69jwjY7S3wg8rTY4OX1we26i6TUT7DvPFP5t8dSI3U%2F6OpQtnYnTRcGF4dG78dOOG1N85vZKB%2F4iJl1zRibm3cqHXQYYjjXRm%2BJ4Tg2xrA4cs4pfZBT7RkVJhHSnYh6MTuj3hPFApPjQVA%2BmZu3VrRYVFN9%2Bs3J%2FgZEA63YQrYGnPjDzzJd%2BAuK62vxWbshDP2EVLn%2FIHCSZO9l5lBya3nW3kA%2FiVoV1Y4on4aEn9%2BATE%2FK8Pup2lJnbuUmlFzFCnelGohzMja59rUDBHwyzc9wwybuzeejBYLH7%2Bqlog15gBaTJNH1GCqyuV4oRfo%2BwJYmUw1JS%2ByQY6pgH60t%2BbE6eN8SkLqBbDQi9wHYDoX3PcgU9vrKLdjXKRQRSpvuiI8VgNJAjCEuhCz6QLWeKloS1LJR00cVqDzchSq9ClE0bnum3CgXvVA4yXJTcaATa0Ll00AQhvdo8WTrdR9dCXBl4wz8zvQxEn9O0BNmUYZo1E7fjX2GYqamIz22fGn8yEN6nfTC796jFqKhhYnSWCpbYFgX9i%2F%2FpIBMvXu7n7Irju&X-Amz-Signature=ef68661c1f45c75f0f2cf18af791a559bdccc93b09ecea53b7be58d8d0c360f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

