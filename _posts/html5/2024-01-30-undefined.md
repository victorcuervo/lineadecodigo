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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662XMISP6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIAqCLCPI%2FTk%2FVtPShlEGdNVe5lXH3UXLJ%2FT%2Bd8Wxi7R3AiAO0yjQ0cqVUuOl9L2IbJOePU0%2Ba0w26rVJK%2Fz7O8ejSyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM0c8iKlZgSTD8br%2BHKtwDacN%2F7on4KexGt8oLTvf380lvBVnX4Q4%2BQuYvcsFxBWXAKsFTzKiX4YznTpi3%2Fh2BCUJZOVMohI26YFZoneTlfK9WAQiRxYiScT9TvROd%2Bn6UC%2F%2B%2BdDYnnr93aTZev9P4U8XfVWOHuZUFqlt6ZO1oY2cnRoiQZ193AwtGVQmnDK4e%2FEoXqKuuJpedgwKnahaInpYpc9rJ3fg6Qa7j3QozcnpNiQeSrq0nOtR7eRmvVItOjtyqF0YOc7wv83c%2FJKWAubqiv8UBKkM1tr5TuJPbfbhHG%2B6S8%2Frn2zcLAd281AWiAdubGYOGs7Xap5tyYvSuTYREIOSRswdmLwO15C0qoqV%2Bm%2BRquI%2B09WGp6KtEpLabxJsOs1NzmOpyYU3Q9YPj4k5dS3CyzGuWOlswyJ3ooqnD5TEpoS0XjvYWw2HWJsHDVok3ngmvoddUH2Jb1ZvUXuBgvxXK5OUFpCXDbIIOdpeAysFbKgOrXOKxsw0e3nlIIWXKWpRpH8HIu3Bmck30Q2DgReVlGj11KqfLlWlCFQpfqy10MUL%2F4xXmXDMF0357aOKqILqkmVnNZaJOGNaoRNqCAt8J2XTCg1PtXQzwOh6OdEo%2Fg4PxTt0BbGo0ddBO7rvUf%2F0Cjgzc8nIww8HByQY6pgGkB5t%2FGRb7Mi1ohjhAyUU4wU6Zp%2Bk2DF2Kr7XuTSBzVTDKCVFf%2FHywwob0DL29s9reMJBbO%2F9hNB1mMRfddpGuAoSMOlLNxDzRVIAPGfV0pyciOANglu5ZHuF8hH3yQDjhY8W1Td7JvUHPLD6GBWJhjFWLiyYVQVdfBg1zycdrhfI8%2BeLVnwJM%2BCw8CisWADnlGMoRwIrAAz9uxSfcZK2cV6%2BefXSw&X-Amz-Signature=23e1d2188cb7d084bf2eb480bb199eb722a2b57d5838112284765b7398912354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVU4ZGYA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIDbNX6%2FA434mRboLGAaAU9%2BK%2FI%2BkEPYL9gNyGU%2BkSD9GAiEAzd3dGs1owrVhi84sGPhR547EnMCFdlnHxH2O6JPUBkYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDEITuY27RHX%2FPgtlvCrcA%2BpUTvWXObGAHnAtAdKedo52%2F3D%2FhEdWK0v4xjSy9Or2dO73JHINm4UR17C%2Fgr87vXgXu1i6onbP5knktZlyy%2FrLVDZ5roHgTiY5fD%2B%2B5CDecCO6MKeaNP7sQZ78B5dXFnfXi3mw%2Fw0wGDmwXr1B5svNpp6iASV3V%2BCvoQkjd8khT7JviIIVhJmpFtEaBnP748w%2BqXsFfe7Y1FTMDjkXoDSBkyoHs%2FOulMuXc48zrQXyL6%2FXwSEGuRgqEUp5uHhfXsToc0pgbwHqq43E9dobdBZDRJEFZa1BRNs2qVDlniqX1l9reSM%2FwYzvQaOH%2FvAG%2BkTRsiuKdHX8AGbF5WsC5hQQm4A9fYztiCN5V6bF76jVrmhBtZsNqAyBGjRoPSmvGJVd4nidg%2B3N0sfzVTeEIpB%2Fklf2ogFE7GPeEWz3NzVHAK1fVj9N6AUZ2FxAhgU1VZGOMd%2FeI0pZ8fwgy8NdT6lQHUyEuWN54UK3eHQdWZPn2AWEDa%2FiBJwz8mAH5JL3jIVN4LyJRnEZgYKZBv2tSRuyNmL%2BRDI3UdS325NLeFmvVZmNup87XkkQukzDe73NGNig22StzxlO0g56kLIG0XP5JNJwB1m%2BIcb0gJ3ypTxyFg9%2B7OAC%2FdxawCapMK7BwckGOqUBws4oN0kGNxF%2BTpR%2BoaLCbuSnEVtjg3D3rUUH%2Fro08Hyi2w0XYT%2BLRNoOeCyYLmmtKshpd%2F1AQ0yfdhn9wNq4SBhfNvMF3gcxPC%2BtfeUIUWU4O7Q%2FhVy6foxOqopu7ok%2Beplb36ZBMjK23txHa1f4Ck1vZru5SxS8hWUDgZycLGGNRDYg80l4ddUEjiH1HkDAJH%2B%2FyiIRge3IjomWX%2BdKisb3hFgm&X-Amz-Signature=14a7d4cb1e7081ae74fd23c7216422a6f70c11df9ccd9bb84704fc46c2a2fd7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

