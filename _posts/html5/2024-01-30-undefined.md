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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3YDCD3N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T043651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIEc0GtBGNaLOhTm9OQ6c4a7ijLjqvgaaK2v5WsgFLlXqAiAQMHWLQbypK%2BYhneP21b%2F%2FnZSgQLZ05pjDHQ%2B%2BjFDmsyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMWfl%2BtKzff9wHigQJKtwDwpZfleyOZeX0h4cVc9vw1pESzAB%2BguEFTFCdN3cFW5J6mITlglRW8gySZjQAbVIneJrwh0s0NuexCRy702C%2FKsagL%2B1BZh%2FLvbZyLPKXFRVe%2BWUdA110T0I0oMhwRXwsP2C1WERuzTsfteiQl53bW%2ByDlpjYB1W3DbC1OiAsrbcUCXkTWX4vao6vqm%2BBaslL1LhDKWZkzh0nTdnrG8awliShkLQiTNn1xtU0XLi39VWcOowSpjKgWLjZksr5x8Bt%2B0da2hVdOULq%2F2M60%2FfpPo7t%2BBPPfXqqtcKeUeoexF3%2BqZGmI9Y8MHknlUfYV0TQK3FJhpOnYfVXfY9zSQCKZus%2FGvsaRCGLeZxbIxJQidQQ802RGDyKP3omA%2Fah3NfpR4SGS1SrXyotsOy%2FfAowQGCJvuVHym85P2YVp3Ujr3sAYiD33q8Pk9GHuOgd0r8ALjpuqGCd3SJBlu6%2Borv9jtXDj98DLWcrlfj%2B%2Bpu9Wi2ZMMDDYu0igD1vB2ObdWbRrZ6hoKYQXkgXrilj5Y0aLkO35cymeKRBTxI0Dptamaoo67sjN1%2F4%2BdlQ6d7YIJM97W8qGsQ1PTZOoUzkmX3OM0jkKshmbD1TWw1sRXzgvO1hxGhzEHFqiJZwBkYw3JS%2ByQY6pgFFwltsYe4ufA%2BOJrwKrlONLg9C%2FtPkVbNo2ZOW8rwltjmy0izez0baIY1QBsgsRLyup6PcvNhcXQCD9o0hHLG27vIaUzC3c0ucmEESBcyumcnbA3qgC6NwBbr9qUs53mC7S9euaVf1%2FNWItnDqNNUxaZln5EUVRSvp7Vi81C%2FTHfVPRDtlLJtmcqaOssd8%2FGl%2FUGiW23IujgUKs3hL9vo1Pujqt0eQ&X-Amz-Signature=c1971ab649d5ffbbf12f618daa61f9164f9f87f48f137444d3c4aadaf3349e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQOOMJA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T043651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIE2TeJmKgDXcW%2F3L%2FrOnR5Dr%2Bm%2FBS2fZwDEHWV8UyIprAiEAgmD14RbMLBzchB5925tmO45XdkwXB5fQpMKKaQdAmawq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMfF3V0sSslN0KreCCrcA%2BDLHtS1yA3l0CdB5Ojtgo2UPPZEViWGSIB5u88Bzss1WRKcJbWhhoDWN5Dn%2BjJRCPHXaMWR5uw6RE33Q8I6Frx3%2BlXQxUSZ9zir%2BqMLyLk8citGjIQxVdiKLVKNiHEE8Nky%2FtRIaBr1IQD1V%2B8sjGGgnvzbz4XtVdxUyZBtPkZxxrYsR6hT8Lim3PgOIAHiJse6P%2F79pwGcJo9yQea6pNpdMi8Sti7MOpv%2FGsyUrpkTkbvisL9PPFEnv%2B%2BmSUFPaFnZ152%2FSKHU6cN31JWmeUFFaWZU%2BfUNVHZWJQVph4ylIFDixyEyZHMMAdulkW6NWq0KPl1ZSlH8ocxPN8Q0iHFSZJ8AvGT6ZvqZoe4dsMgxBUJkUx09pIVgInY9CGjBU91RGxFXOEPeGJi4RuOpiWDt7%2FCnlrueCSc1VNPC%2BLSA%2FpR%2FklqSmevGIYibshLeBTD1ptSmjelGBZkj7zv%2BDyRpFCd4pyb0KOQqY5JWtWRKzqPihx3Y%2BsgZWRjoKkYSqLsEFp3y8ZemE9U%2FzMi0c1ANfFai8%2FlDZ5qJPjveYWz6bwBlJCUayXeajcEMDb5qQhJ13y5ja5cOVycKOoTZDpcAgD7wY97iSgA7ZjMmE3QQ0%2Bucc%2BpnWCEhnRO2MKWWvskGOqUByqqfCLiGVQJzftNMGVpkHSx70M0RZML0TIr7nlxmd6EnB%2B9DhrUxZ%2BwYQe49VyGPi8IHRLbNNoRUJu%2BNLX5T65kz3gQ1o8bukrRy9WAYy%2FkTUlIw7%2Bu1ZQF%2FWpYFM7103T7lbj9yiLMWYT6gue1Lm9VZZaDi8DCIewRi5eNblJX0eDdce0cuoW8sgoyE%2B2zBIVTAwb9Z%2FxakMYTEGocvpz4PjTYm&X-Amz-Signature=91ad9d1dcc797d2e6b5e0efc0a81c12d5e1bb636b73841ee2ad317115357165b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

