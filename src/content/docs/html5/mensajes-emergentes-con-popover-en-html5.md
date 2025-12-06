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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTP7A54H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEE3Mzx71%2FSCLEX5c5%2FirHT%2FFaUuv5voQGdMMngUPKFNAiAOZSh8sfBA2%2FsRhQmagULXpE6OGyaaRruD8VUeqc5HQir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMV5svV250LDkMM4rlKtwD6C%2BC1mbdc6xxJdZYz41n6uNICsaLWNyihkCZsfGKDNCnUb8RcEDn6%2FsSDNeh3WM0ML8w4BsYin2ZSPq77XFsi8Jg2M2mhxYU47aI5udvx%2B1qXtKcJ4emBbWNvFadB98b3UfKIJESywIeD7M%2B9nXNr6F4km7%2BYyOI1h3ZF74NlPP9Tcc7kUFRL4kNCRUm5TMuRisINPGTo%2B1k2fsL4Nqd3Pzm3EJxQlwNIpJWz8dSUwvaUHjlCiIVikDxiFv94zmuzgU7zOIQFOluDFiygTIjrhmdD6fRA%2FclfpVhaWRPQ2t3Og1JvhBfExFH6H19QaPDVVdyKDbyH3pSiQiiHiS92GuIv3kIdZKMdpPAxV1UEiTJGnxGH3zi9EA12%2BkLmMKi9jQ3qZL327bJz%2F1fl6McPpbJ7F1RJyBvXAKq2pGtJFBVus8LnryqX%2FFKkncRHscZaMQbj%2Fr%2FrdLTp8n%2BFksEI6qFnLWGsrNoScxtqj3RzFZMZntJUOVhosy%2B86RPKXB73jdKx4GT7vre3lmA0Yhpr10RESTc0KsIOHLe8RWYDh9ZIDxl4RE9kGxxH5JhFnu2w5lqRKGt9ikjFkAYc9kzpsX63x4CxI3d8BlQ%2Bgo2XmMt3OpnzCVjev9MR5gwg6fQyQY6pgE8zGd5gHdMbR6TLlDPcgmAuZF5T4RLrMf%2BbtrYPSOFmmQyEssw4gW7S9EFw1ctPkfo80gzXjILwoH6G%2BMUab4zM7b62U7rMSU0m8uQmsA4LPFtNU%2BGihmTcudXCebKq8TDj4yoM7hrnZkP9adbycNcg%2B7EfjPTWC%2FzCNegTeBxNWRQdLJWalgbsq4%2BVJJd6j1D6fhlzkbRryDHFONpkvPBCY0pbbH1&X-Amz-Signature=0af0faebe6e6aace3be46a791e28ade1b333f5f4457eb9b0bc6e89794f982b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3RPINBH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv4gzoiTWhE7VcXguVw7cpsHKJ3fGe3X01NA1pE0HIcAIgZSPA6Wlf6PzcfnXvY5yr%2BmCqzdUvJu3soLojs28n5ycq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDAp91k7sazvMPTCe%2ByrcA1fSKe5c1Xt%2BV7XQBdEelV4PypEGFWdj%2FQEqqXc%2B%2BURdlpEjhsYzd%2FfdpK5Wn7GBWlg64OmEH9hNSk8YeGBwMnpwf5Ld4ShjTPoo8Ag%2FKtWuFmXohGVahwH1PplHt4L5CCufhh3gbACFF41tddQJKGZ9SWLYFyge33mavX3JDD05x6amkG1gHO4Gh%2B1ClWJigBic4Eger7SjAIsOeULrfHurBtzGAQ21alLbt5Yqb%2BGc%2BS0CpqyMQ%2BlMe3%2FC3XQgx8JPLT8c7kckifkxXw9H7m%2FU5aUpGS9kCCRNwy%2FSyo%2FtITxxOvqMMwS%2FrRRyTtihmUWKRlHwdiHhdrrNbZMQ87FMODf%2F7PaqAGm7GivsjIgjaImjdYm0hzSUQY%2F0grC8IppdPZbJXl1qQKqPWueYt4pTBMenvjNtu4ssKcv4c%2BJ1v7wwFiC871PGLjsT4TzN5E78j2%2BXfC2hxn4v0WDuHtkKbfMI%2B6q7AB3ihptMt8vGbJBTVMR5ZjltXfiYhH69S%2Bg73oBuIiDlVyDkfeTw71VZIrbzkcQ%2F4VE3f4r0UZrNL5h9PsoXIntYXtkEf8uVV9TNrMEN0073flu%2Bu9Ml5cZkk2kcYf8MsZMcOn95BOy3qLAfOElJhC2e0PsGMKWm0MkGOqUB7hBFwXFvvkMeZSI7XxN3i0xenmB%2Baf5icwAgaEVPSzugP1sfk2tHMAIiVTuMCyUDHjXq7vWnWDXAZM1%2FVehBhjxMEtKjh1OpgkSVoL12hdhxkJil9JjKNfMPg2mqt%2FhuDIEA9G3G4kEnECqpL7tVKJ2g%2F1BjGyzMBg9QYr2sd4jFaD8cpOC2t17EZw%2Bkg0F9G1tTkdguq2hWuLTM5ECiJcs1IX6O&X-Amz-Signature=7b614f8313199d47f31fd5bc8eef81e1fe15b1715814f2bd15dbd705d8e43e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

