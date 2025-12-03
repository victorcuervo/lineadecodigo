---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CFI3ZOF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCsuPEbeSLPzgjAEtg3C79IhkFVZoHvpYG1TtNW2GOxKQIgD8JeRASgec%2Bm62zX5bkkq%2BtiTEASi5QLXxwxHNdQQ98q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDD09EqWCUbA7xodNkSrcA6eJgbbxSHX2gMwI4qbWwk%2Ffb2DRaIM5dko88bj0uo%2BKRUVcYRBdQCxjnZg%2B6jT%2Bi2o4GdMxYO4BtNNAbNHODFbwM9isAseGsEzgiJ9B%2Fy7xEGiLzLZ%2Bb2WmShhm6x%2B8FIv2BjmJvwgktuZxOtGXAFPr5xmzSz4rjgp1Od9HKUAiBm%2FSYFLBbuk9Jje1kuSchrZRKS07CvL2mBzEfNTkSlCBYeIcvOhcP6Q90edSsGvUB%2F%2BY7N0DjafCG%2FlselK%2BYdBl0ogGbFPo%2BbSrro73kH0tfCrB%2BbhFwG1%2FUvPzgHBVNIRaxkoFbj7%2FD7TVcT0d3LJZGGHnepFXux6zbVAmNapW%2BeMdI7r4m1XxKJkzaDIIqOFEYU5JOZ1l%2FJKNeOwlqzK%2BwbvALbb1uy1BVtmtyUJxhW0VvYaobvBJuC2ems0P98mIPy%2B%2Fo%2FOuNGRu9Y5BgGXB8OR3r3674%2BTl2%2Bb3IwqJFubJz05QpADlHivTrLaZumZ9Cbnd6VhDnAfawPdhGUKaax%2B8C6hxIFsdMEMLwrKjiS0KO4fTaexeuUfnM%2FwKHCUQSfcU5AE54Bc2Kt3pNeA1I3%2FaxM67QsuSb1wnkXZLpDRAZZRf9pz3rLTv7GG%2FiG45OwsYVcSJGtnSMNeUw8kGOqUBuFpjrmeVjXs4CNnt38JoeE1c3tqb0cELX8aiQ%2B6HTtNWErKHpgXIJRE7HF%2F1%2BiS1URRPn9UBFVKj9PfwSSx0BLvETfcJk4Iph%2BUJezz5NWIUx17gFl3j6BAUE0jkDbSSeA1bkxxe3lCGUHQ6Mx1w4HkndN8AkwnauOuaH%2BtOx0RwtWUdd6hyBuPt0QAt9WlThqqHScXiPgFiGKzrS6wtmtpJn3Yd&X-Amz-Signature=9ea5a45ff233bede066d77ca3d29408ed2deae7129cbfbb838661a594742fd28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTLWP633%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIGB0zMV%2F4aGsQnSJcTddn91vn7k3nrcQHWksQb8QAUnhAiEAylVu6StOHPu5ndoESWe1WlADiNsuV7UckiymcwT3Xecq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLdUKyYYcUX7hp663yrcA5j9XwX%2BSpfZPP4n5Kgb%2F01YFjGBbTaS62Z9sRVA%2FOtvIgIYm2iAd26WgtnVISCLGfuZUf4Cw3hgkQX2d6LjBfZh%2BdFHlpsPYgQTvdfLu7U2%2FdM9znDB5U8KsIWe8iy3UeM4DQY%2BlF3f6AdybS9U2Fk1JXuMFYn9SaxaF1H0jiF7aJW5bricFLyH5pjI%2FG6kEZQ%2B4om2GF%2FvtmsY%2FC4rp1V6HWtfUBdCMM9WD8o4MZ3sFUxQ2JfsfcCC1JPV8axBkLVTYuOXn3EfFADIP991HX0moSLfzpLDARAg9xAOJeilnTXJn0I4Zu22%2B6DxiXeuoezSbthVusQt3Z9Qz490AhpICZja2rit6zRAbwwYP3GmBS7M2y6UtpAyKWAA90hI12%2B%2F%2BHohlBZg7FAT%2BeKYauXpA9a3KHC3393dMiCGTvo3GTusKgGqUqVUX2CUNFF3OgUj24B4m%2FlLzv46BmQDZTdb%2BKU0W3JkzD0ShYfFmzAQF%2B3Cm0yAQh4JMkmkPmyy8Irfa%2BMCOwiReM3qq8FX2KtA1vA5e0pO41enSImT9hI0r0Y59GWVHOmE1NV5s6eP8iUPJUX80PipcDc2t08jKxE9MOICLca9bWrx8g4U5Yyov8qyU8T0Fwugoj2NMNaUw8kGOqUBsBViMGk9BW0eW92UhQBazq7wuhXpEanJAV3Bovx6ewkMY0I03bI5Zzviqd80iIDlFgaXZy%2B6eoCCEuTFkrhxgxaV6e0Pt596u9Gjipg9wH5QKWnMSXRo5lBkwR4NvRqBgKkJ6ksM7j712g1CiIbPH6IW9G3mlhJYbHBLyZCPBIfIAdPJDyml7OkV07FEWtDkIub4cvNBfvee2Z45TZFK5FdjqWLh&X-Amz-Signature=9b9bee7b46af058efc7a2bcd630eb944032852b168efc409b008ae8a52a8260a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

