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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5RVSFNT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T174829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCSbtWKsYRNWUl7jLpjt1xLDvJe6y686AC9FHkqEjO5jwIgRlXT4vfonePSaNVgqvcAmEdhdTTekBTQtb%2BY3gb7FDsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDO2oSiINhj0dACachyrcA0vXpIbBg6PusxlyoSuwO4jCzY8Km8e4ee%2Fz3hFE0%2Bk4Y6%2FW2O7OAY0v603hysfKbHi4RZ8ya%2B2uf8wEwJVzC1rvvTH%2BwfFzwhu2mXFXw7Ql8v05d8vMhllI6q%2FwuZniF471IjBed2ntxvUmjeVhBWTRfsswpRE53D58GfctxnoG1XHdpPk4zpHSsaon%2BHP0AReL5ypHcZdak4UPxVJMo3CQNSraS5%2FHIpCjJw5x%2B7yamhHp0%2BngMJiOtdVFj%2FUkmZUw48Ic5iBTTnWFr31LZxCT4%2BQiKYa4IOSAXSAwQIEgMa0YVArCn2jR%2F8wpS%2BUgVnPXLenL2xYWi6PgBt15De5UAi%2B64OliNVYlNSLAlARXMrfJkb5twOW3cjlH57zHa7JsNo59MZ20rUkY0toVVCTCQd4eLklRKcqYXe7cvHagmDWHa7jBL20Ep48c9Cmq12F9yzEPfILvr0LHLYLSSgl5wePC9DFk26nN7xHGKOAD4XNP2OofefcsjssZtkBxC71TIxk0OnB88ZlQwFG4QNm3N3MKaYXIsSykffkStFYOJbaF6GdFX94RMXa%2FKmeNDfikDAgUkAVoIGfRAhimXxdvL582LARQ8DYSajQUYzUJIfxu%2F2kLh%2Fd9ALbpMJjawckGOqUBOCnJTdgakzXM8gVCuVWnu3UEJQqc0M56wvOMS8TtTtGC0umZhNL9S26j9Vl%2FmE%2BK3f6F6lzBjfWkUpsKfs6CG6IOchjgElQlsZ9GShpzKdZVFujmuUD19mRurB%2B1YnOOQz%2F%2Bb5tMO1wUCGg1U4d%2BS35kW4Zb9JQ8EgEWXWUvKa5luS6oFWTYPhyohvIyIowLTfgQ0EP9f165nS5xnQJt0hAc0oga&X-Amz-Signature=54966e66f1d2a41f53b40e59aee8897037b007c8d9488b432eaf5ad732da563c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWDGBRBS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T174828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGKByh9Re2IC4hn8gNno3dqFdpf5znnVKpRYsc3eUQbvAiEA3rGrJcLmHKoyLijja5%2B474fv%2FoDMJ1vOfWwe2Xat%2BQIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCSs17l%2BL2JU3lfizSrcA3usViyyaLB7htBnFFDdFkRHU7AgOEm2FOJ%2FTGctCq%2F8oXWwG8ddekZtLDpuG9Od%2BR9lh0tbXeQ6QAvtUK%2FITYLZwl3ltQ%2BUpzgBj6TgMLGkE4i57QccqaPvF854%2FrVEeqLAQixE0DVJxQ2d0Ysosy6nrqugbISeT6mksLoSwyDUj98e4RDQe8ieHn3SKhKVUKTvmd7tKjBhb9VIiZXLb9PKLuk%2B0anaJQ4sm3o8d2InI9PXXzxHjmVQyvqHo3Is9cKdwnvY3K7aq6bQIx5%2ByhYD%2F5B9tiumBuGrDa5PRyFSdRAsEvcsOg4EAbNB6c%2FmN5s4egtbSVGph4BhygNG6QB64V16fiCtfOF3GuzAu6WCxUC8qahMO3VRPwGCt5yXVOUu0ecag3Pn3RM1qOCBEPzQDfh8WoB3Z09vJazleltC%2FXQjBlsnvJhq6yyQZoDF3P5SchWDM8LnWBNb1v79pLlcaTFsH5naJzZzWqkv92bhv8WQqCz7Sn%2Beu3SW687it0s9LB82VnXYw9qo3a3mN0C4t0rK3jMoir%2BEA8mk9uvXbQL5Z9OmLDIwoNQWDD0ArJczcgnVjv8va1sx3n6t1NtXKEPJHk1E6lqLO30vGaSqzWh1MvVZOr11o%2BEHMKXawckGOqUBJfObsNdcSV5l37gA0QqablpsFyuZDPL%2B8L9Z8j19MSlxHcuIvJPzfkTCgQUQMyd7Yu%2FZSQxwB4OIcQbc%2FEsXGVRvLNMo8qDdfkyN%2FVPdxC72Ae8NmPALe4rSvk2IQoyYB9KCh3gFjVjpjkvxb6noLZspwu5gKt%2Bvl2%2FNa8LyTRhXwKDiVj3%2BW%2FDE4vexfcCFl73xjvr6n5AFByapSnQy9WSy0CBe&X-Amz-Signature=e134267439550ea51da07d46bd16d917aba70e072737b88de77bce980ddbef0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

