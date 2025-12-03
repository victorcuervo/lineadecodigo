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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NS74HNI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T011328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCdsIfnz7vFqJjYZdz4PnwmI0RzJ57zY%2BGf%2B%2BoHIbRx0AIgPrD3Z4UwpQPhDaKkDbjSVKczpsdk7huEzbXzvZj%2B2o4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDO4Bj40xd3S56MeKuyrcA%2B794DOAwGKrKj5MQ%2F5OyCJAPk7WHd6%2FLeMewK3RTGmxAywk%2F7EG2O6H%2F0SrtSDsZTiiH%2FnlL5INDvcc5FWcORBwZs7XO2Mxo2JznmLuf0eHvDRiEzMxZMsKRnor2dJ%2FsV7B4OrBalsfFfF7F1hQ9IHJ1P8C4LtncnVaQMLiSE2DvY%2FW%2FRGtwZudxyjo%2B8c9%2FR1IPceEfLjSJUx6S2SVogSX5xrvlmAKs8LvvpiTfhXteCkY%2FydceYpaHu77ZmzfkaZa92W02SW2Z3kcrTv3u3M0qmrBG7X31ADrqyIR6EOBvbh0IX7JT5Dq8z4dkndGAvFHHqiaj3nBKEOI0f2KmeF5tdqmHw3%2BdBokXyhC3tvXnDVR%2BCMjjl1%2BeAKr13Wqxx8DiLF8SKJdmAcS2fgXP8ovKYDuN%2B7TBYLnnSiwmgBvMZhvRYvzX6mVetzGYFM3A42SSjZY1WkU3OHE4iGVeYywtapOO%2BFA%2F6raCJRP2oyyTXwt0OC0n46lJC8Y8uanyqxS8P8VvFEd9zwCfimCxpJ8cg6O8TYWFRNcBnzOxzxItLHTittR9NvxmZJ58o4YOvqUdwXdHpeTMnszjEALvKzUPEfsimZH7DKEGC1abcZnRB5nua3AuSMOAXjpMK%2BWvskGOqUBCfL4NWUj8ZW6zvL0KhheJLXqT3iy9po5TPdsZW4b1XtTJNNOzosQ63PdSXSJfXE0X4%2F7VwFeOfYcRYKbisWYaGL1B%2FDhWGTV%2BePu6to%2FvNfHYlHehVicFTm32ueMyIZPulaGDM7bW02jy5bZF7VUTt3c3iWp1deKmUxtcjHwTd%2B7dz6oTx2xjZbIFpGgO4M9eA%2B8xpwqt0cMDgI6AOApmHqXbqP%2F&X-Amz-Signature=6b60a1071ba9dd1b4ffe4e1857d8636907bddb1a3860ab962bb8fd3ce42eb248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGUVRXAJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T011321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIEUDSa4Lbus4LYUoCIR2XxEw9Zv%2BZ%2Bf0DhbMPWZGXzH6AiAoJ5%2BDpXP2W8w%2BQiET%2BXJGtFnloJqttARWfbygremgZCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMoBM9GvQyHcJY93mrKtwDUPsdxffexSuOjz8zrJwV81dRGzgpEMpcRGlLT%2BKNwBTTJEMzjKskJ30YeeCutMHKxXoKkWBtKb6A8WVYLO%2B9T%2BEvglPVRaPgWH8YQM35k2%2BULpt%2BqKsgA%2FXB%2B3algVBeojuJ5HUlfLmYzXbFUSFCQplTBhqX0uJ1l1QQRHj0v8AD1IYSs2Ji8JXYC%2BVyGHSDgsbuPO0ouNoxTMTpO8mLqqJjYo5ND2IlPzWrY1XmeS%2F6yMDI4kE%2BVU1qJlvOG7zLiJQpHOU7TROYJ%2FOhajQBY22AcVgrlMW4LN7rEjuz2ek4M28H%2BUi9p7kTI8INzI3nl%2B8ZOVgJ6lskJnALoyitH20TG25Ped26iY8YZbwW%2F2UhBimKDEQgdF46ZSQw1TuAJTaxnM4Lm7RkySaH77dX%2FM2Sug42KkyqXadSWKdO9309j5djQ%2BV%2FZCY06jiNCWcIxDEgEyFaizt0FinMgfx7Hgk9lM%2Fk4NUy3jPaZ3PgSwUVaJxpWNzdlGT%2FQ6Pmey94eRm8UnTt8EQGfeUdcjLxwI9RYekJoYBAlbI5JX8cSllIoqbn%2BRSgI5q8qRrb%2BtyRSJZsIjyBCL2VrhEBcSohr7cpVA6lC2YGZt%2B6L2iwKMJ7ms5BnxoRgAXJg2Awo5a%2ByQY6pgEpTHhPHu%2BsPKJ6xwkEQ0HyA%2F1woZYS0PUnsPcihvVFKEpWwMyNE6Rx4fx4UpvI%2BKPky62f7MuEqRvMdAG%2Bjgr%2BqyhOXauIq12ECw1OlJTaouU92jMw%2BmWDU7zsejNuwI5P7R%2BLhzzi6zyU4k%2FKyGeE4IxG7vAzKiraGqYGd0zxP2Qq9Vf%2FMBJ2zrCNjvCBgBJ%2BsPCqz1nYUo2lSEhCTDKw8A1doSnG&X-Amz-Signature=99bb55d52bb2335c07991466cefb2caa75dd35cdb8827b0d31e32c56583db822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

