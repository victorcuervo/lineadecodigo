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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJRBVIV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBc6Z4APg0EfAQWrNY8ZtPgnWhUhnc3cD0kOJWJSz5jlAiEA7L3OlvcvhbxK3bDi9htmorA2exMGEkl7iT87QZVq4pMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDJLh0hoDf2otEzz4xyrcA8eSSbC3sjliB2QXm5TAiXhMWqWa%2Bhw8JOEYsQcQ%2BjldZd09RTtcuZ4jx2181D%2F1q8QjFWHojYqWYlXpAQ9Z%2F7VFdT2SJ1%2Fpu1lTFhjFTwuAcpzMxU54w5lyIdFGEWt3X1HPeJc%2BokYLyHd9Uj72FDSQgahY9RUIC37rRahu6kRbnFFS7q8jZqVTWmY3tn%2BZBnsoP9Q9GLUzbpeYim1ZGbcfY4quNm0bHqhyXC0EFZJVx4yPqtG3qGmtQL0nvY67buz7HuhskHi0MbDlyC4h0SUpIrpxpU5S4rg4lmJ6uonFuLg4gnw%2B%2BPfROtOneHA0WR%2FjO8kMbVt4pUgrmej1wTY0WddxVBrpWISvgSI%2B8T5V4H4dDJV9mEvJv7m6fOe1cqro6pYAZOFdyv17pgL6wWJcVs2%2Bz8pwGNUQBwq9aDRCR2sGDyxcEuRJeolhphgxq%2FHDarh90DCXAWW56tEzFqKW662e64PUQPTKL65H57pwjwmFu21v8xG9NlgJg5UG8faKSk2J4ZBu2REkeZ5PJd429PaxjLJGOlcxToPY9CyfuKioXBWSuFjEecBzcMmbE2A2NnskR21sPqErqMvjTDsHZN4l%2BCs%2FwdvoTmkesrH0XxeqyQMnig1RSI36MKbrwMkGOqUBNjVURxDQd6hr7hgSL9DOlbWhvqCVBOsqk72OiV1qygX3wq31MFDXx%2FWKm0pnyW6kIKC3PLOI9P%2F7t9QnLIdbEIOezhvHGVdu%2FeYcQ04KSG8foYPKT7RhxXL0BgimgTKsDRJ3BsMQxX3O81HJYJeIvJtZt1jGWzqrKGesBzihnNRFaDYOfEkFP8CLsv0BkH1gLtwZCMCqYUh3Ius%2BTBrbRuwk41oj&X-Amz-Signature=55965ac7f7c5d391bff211651f9466d0a4794760670477c9ec5d87857257e146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q2KHQN6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIEeEb0V5%2FN9tqO%2FqoBARgW%2FhDMs2k1KX%2BzmiWolQOpoSAiEAo%2BurwvoS18I7ZFHg%2FYRV4W3Kzid5EeLGrYrFwDnnsCAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDBc1t8jIgQxWQzXbdircAxSQQmaPT8q%2BazwJTUVftlgUysUtfCRfyOWdLOpELE4HEqZloMkyDhTz423UrAL8EJE%2BtLkGRKBTNtAaLqfbS0gHnvttDk%2Fk51F3LbUAGnMmRieBbPImLhVmW%2BiB8gpexAtds9Utyy4JDkinpyFTRR077lIhIsm7Yun2p168Vp9Sk6WkVyPDLdQ9iuOB9L29h3L7aKMuoVW0K75gm%2FjxcVO9Uf0oqTAX5jCAyPRDNV2URy1yjGIJsxV1wW84sJP%2F0oMws2LLN2JX2NStp8pXsSOY3VypJbc5o%2FviPg8DaQFput9z3FodemoPX6%2BcEWOQTI1pEj9Lnsi8I8nzQ3XJXKjjO1192Wl746atQvr%2FsAcfaDqSyoslXgC82UtuHBhJSYN7tRn89Cn7vBi%2BmR5zuDhZBRCQVqsXH07lo4NTfSlhoEsz6yBWPADLo1wb0sw5%2FDp1sDKDMEx5REwzXyWcCXKxIN4wTPnus2eGQfvSq97ALjrZOIiEQdjWlemqbiY0BLxhtNGCGkr3HXVxltJwH27cO%2Frw7Kd3WQTPFsVn7PCEWe8j68mD7CUWSfLX1Absp7%2BvytX544opwDIfMWlGSgNs%2BBTAMgSELsVFBpM8Y5WkBDmnwHwQAezh16FmMK3rwMkGOqUB64K2OsT1Lc5hux2R1ACzAv%2B5FB2tm773AQvsIi1DGnA8oPgKXiG2ldwMKvGdWsTgNFCGTCTaM%2F4IRg9Ff%2B5b2iIGoHu2wX4qQRHmItQsYIcfi8AukeVyTlHAtGNmECQxg096EcxtcsWw649C1h9BbfIzwMhnwysyd49nhkQ1jMXzB6VHidcjSOaNKYSmXE0XoegLpEXXdlU7%2BswTV695DjnG0kY%2F&X-Amz-Signature=d15227b79477c01f529c56954a1b21985dda6fb31e8743b8ec1babe5c501a3e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

