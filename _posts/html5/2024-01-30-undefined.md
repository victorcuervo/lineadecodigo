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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ZLXMZI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDsPvtBjtYIundAgctdjDLjTmMXBTkivSr6DeIzCfZycAiEAkeakO8jTCf8cN4xCqYIzI3sJ4Yncf%2B%2FFm3Y%2Bh7S%2Bnskq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDO%2BPzj5lvjGbSPHuCrcAxbOaFugQUEUnkAHeB1BoNVK%2BNerRWU5uczjnyCbOwV9czQ%2B0pC%2BxFZ9xVdyWQov4GcjbVme7%2BqCVcJoI2eHGf4T7Zxvg3uT%2FO2kafXbYV4UjjswBZ1yDlYsVlH%2Fxk15aH2ahobNS9w6st0pDcAhw3hYoT77LZKbcM8zCP8JCthodjRvKjjkrgIMONZJFsGL52pWPuMpINc%2Bk%2Bd49C%2Fxm1am6fPnnhPc1pppSLvaASICwowkxiwHDC4S%2BY1diOdm3009Y3JlyGMOVYs4jWVzAiLgjVMylxvRYM3gpSUjFG6aKEPLBdLvR%2Bjd5AApNB1YZjQDb82zr3Bl4JNrAjPk3Ke5sx4fiFLa7gIdobqAV3bIIl1TT%2BWIuF3sY0PPk6C0JeeLuk8bsjvd4ePBd7iylugjfa6RZ3%2BDy8%2BU1%2BEJ8WXN1S66%2FucJfd2%2BOvf2Vuq8jdfkPv1FJSSv9Ni6FAWP0tSlzJDf5YJLEfYwt29STyVq5Gw5ESTDpFZRrURCxi%2BmmI1oGVTY6DprigxTVpVPKhndyIE2kuAAHsxsc1Rd7RKtIkx94PiIgKfrVrhZCUqxhlM8NAiaTb3vZJzY7htgh9cn8NE8ASLdG9MwI2Bd3Fevl3SDS0cg5EN%2B1tzgMMf1v8kGOqUB8j6nNpS%2B8BZ%2Bhn7fGOt15ZeUCEVYDbVkkGxCgTUflPLwUOH9%2B0wUU9ao%2BEvE5ZA86vXy8hJ3wwPyI5c0NP3G8OkwizAcvFyObZctQMSG8CtObB0i8bSKPDac6Y0aJFWBbtzTM2DT%2FoVI%2FL1umI9O48AzwwyTAOwxzQKNqijKeQkogXoW05uS%2FaPnjNvj1JX4TRSz04XYS1U28HFTK62YTWRMtQ%2Bu&X-Amz-Signature=843b5fe816bc182ad163254fad8fff28aa93e2f42c2b18d7c618513fd039bf42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRM5S4ML%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDXsZFe2myG0CXwYEl7d7c0NIg5euHzKJJQ8Wv9ncsJrQIhAMvEWOnQ3VFySXhuafFo2Jun76HBkUVeV6EmR73cdt2BKv8DCCoQABoMNjM3NDIzMTgzODA1Igz9oNpRIyolirDRQVUq3APT4XTlVmp7jD%2Fo%2FlP70OG1xUYWvnzxaRkjxkdb8itrZp5nXN%2Bj6fPG%2FJztV3E76pBXqmqlrq2mVbQWhIgE0VcMB9oEpXPv8zGYuCvqFQ81o477Ck8bcBuk6fMWCTXfr6b9Jsqijna3Z5QIZu0HiQHnLsXGmZwSemGa1Yq7xy9Y1LEHqlSlpjZKygyEd%2FHrEnHE6OeHIPjQZvqQBWkiYnuJo2QMtx%2BbtwGXwXm5Tfa9WuTt8c%2B4n7hKFq8S8JFyER1omH86ySdGkapTuRUxjZMbYRneaKUJZyiUTmrUvWNwXzABe1KA%2FuJdFzdTX0OutWQqcaeAMV855dkCJqEeaOXLSEVzQdITMYwvnEDd0WdY78PBpLI8KQ6ZRVi7MPq3PtxODxBfNKqWFT1iw0k9YEUtHuClvYN5YDljz7yuRbdeVWNALqaGN3LVSswzq%2FUysiFaiTk3Tm66ExF8lUQG%2FpJ8L0dSocazHKGvZhEJTVESqYmaSY%2B4uC37M%2BXcMYDN%2BEdch8SXvpo8pxlR6p9AUvD6oGMa0l9XBW31%2Bv5yyKRlYglSXc%2FH1QdYqOHly4M%2BNQj1jgyDeSB72qR%2Bh%2FFb7uI63NdWD0y%2BJcjVY8B%2F4Z0wFn5GOeCCD%2FPbLZm5nTDD9r%2FJBjqkAd4XOICGxsWthcxs6mOxxGeGSmEjsncXvL1X6RzqYAf%2BHgzV9Bc865YI1F3xLAbv4UUXxWWtVWImDz4WWRh8GVopCi2lmsZmP5uNJb8f%2Bq%2FyQxQUn7thRVEYnjLR4ZuvekXJFJPtGZWyVwNmgj9jpqn5hpKOC%2BmTUWWfibvrtT7FkBcpwRdreZBy5ou885nnCMVRL4vrKWZ15l%2F11mgrqQwbYWxE&X-Amz-Signature=d325cb98c9dfde7ea5c27988b06672277458097090275eaada4048c323b2a09c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

