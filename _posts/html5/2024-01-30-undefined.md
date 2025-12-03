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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MK6ZSQK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGE2yMxSXccJMWWFjSXfqcndd8NVpa8jBmiTwTQnR7YnAiEApX7phLTikTm2bR5%2BgpUOIGRqoQAld4GUCHgsBlDJYJoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKAs%2Bw11nWwsuviSHircAx5LIr9HpRqe7tNlOtPZD9o7eRxF2u3mr1WdPREy2zah6SRE9NboLA3BqXKdVsnBSjFjsRCw02y6lmFLTavQRMTaDHKcj2lc1xNznXDF7F0C4w%2BHrRE4yvUjHKpLiBP%2Fr91lFeQNA9mf5GSoUt3QTYgfpft9wsHx4m%2F4trguPgbS1nvrY5potgXcWqObrDbk0J5zZLi8sRI0wWuov96uzsPNFokD24lEuYqAbheVfrJySf1tfkvIP58%2BENdYr8%2BBk4Nwstt%2BIIfm36CCi58L3df6YieKoUps8OAfOa34KNOkbU%2FTWYrQ6Www14qeIxXG%2BGotDyVgGNiiG333GiH1BHais30MVGXL4cT9GWKc%2BsFmzXaiX2%2FAX7RQkBVz%2FlhxqjmMFBy4%2FjkzALDyPCcCBETD4jfVUt6gQuhb2xZYoNSQRM88bv4hXeiqrE75Vat4BuJqlnorubgAs21dIjD%2BguGujhm6rkhjR%2B9nt%2B%2FT36zmgw5DyDied7951A%2BCD1C8uSppVgcO3x3fMav3%2BIMPIPRdwAQuu5Rd%2FJaQiQasP3ZupxLs5rbwcUfcOnUuiJgh0cLoPPP%2FtVb%2Baai9MfdarCha1v28kK18IVTYBC6Miyqfdqil5L1EkYwAonTAMJr2v8kGOqUBREEXvgbqDUKb2HQec1nbb1A37kg5U2QzMSthX1y9h1mwk9P7wqJ5cEtsCGIdZyq2ow7ERqY8Tv4QeDIQgvH6PkNA9pAJqEbSQUHSMFLTYNaynIQkjbAzzLV%2BCFsjEKx1odVeC8yi2r%2Fa90DXRwY57lgJ9pBoD45ZKxIgmnl59qw%2F2msQ3%2B05CTdKs4tEh0Af0reTyr5SPNgp3%2BTF24z%2FH%2Bq00kw9&X-Amz-Signature=470fb6c1f1efa75a1038b0895fa4aa62d1c437a8450c3ee6b052ee4394ae9269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653EY3M76%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDLU2dhXC9ZnUmX7JS0KWGvYuTZLbFu%2F28EvX4Cll7hrwIhAIO6YUXK9CoOEDp9Aatq7WFpsKk%2BS7gEVlFMHQCwjs8OKv8DCCoQABoMNjM3NDIzMTgzODA1IgyK1d0PQnBke7ID8Igq3AOKYigpKPj1uaTibQRpgTm4bCxXWultoa8zSX7nzASY0i%2B1AoQ2ZI%2B1lpDzXZYQ%2Bgy9DasX%2Ft12mEKn78MieAG87cHR6zdhWAX4md%2BwARBnpbzNmAcSQJBW%2BL9ee3mEJcRAEtwvRCB2mB05XZxg47OZHH5Tr9RbxnZU9pXcpA7NzA5S2CHuoy6yrcUK05pdPBtXZfvp0D7B8a4ErJpusE4CYVBTst3NyAwhplALAl9xt8d%2BHnLYD6F4pHyOhptjcC%2FJnhKm1mDOvIeqSYsvPbFRXBG7x76baquuiGxpslaX8gAmV7JK2jAOCDNZOh31bFUhkaIa3JiagkmGkjxxQIz7IV1iY5CGb7XClG%2FCTXlnorC%2FcbNEssrHayRvDbTU9PcDmR9LGw%2BPzc9d2hWPSL9OSiMc%2F58vH4WsZcA9rTxaNBo%2FOmgF5Oa9ks6c5ZwVzQ8Eb6pyz7ms36FDQ2owOejnaxu4uzPoaMM%2FcxUOgraYPfGbUc1ZWDSsCaXwHpPb0oy0Tu9Ixjvqur7%2Bd1vjDN4OYcr1FJXbP%2BaeW2IeUooXcctP%2F5Yo0isqbu64RaGzSyn%2F0WPdFGG1q3IXALzQMasZZv0yPrNQwVqWr1lfV84xuQQcC8qo6bYfYBX9DjCY9r%2FJBjqkASRgxUHs2e9T0nKbaeA25UHSr%2B1cduiOGonc74v1%2F7Q28vT6BmSLM73M94zZBv2hyD1Cfy7sh2B8PjZfsbRpIhApoAmcjAU3vgaXfy18xJ2sluCFlzMphyqxQPtPQ9FH43DWqFK5czWTCha7yzgCXl2hViG9oxwJAo0Q1eiZdEo2gwT1DKTTPmZ9sJFfQlynpo%2FGWliiDX3zo3pWZg6dDPRX7ty0&X-Amz-Signature=c16f6c92162f712f0051f7dde2259b906f2ed19143c4f037640412deb80f7334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

