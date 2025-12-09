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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HYDPTVK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGY5eLiWZUKVjYWqFMuiTkttVmVRPuo8vhPPwWhUI4dAAiEAvlpVoS6Ti4wDS4odNY6ca1FdMkgWWVepSYpqFpB6aP8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNDEtMIGJMC7rqdLyrcA4WHLrtNQ6yFFfyjaYIzkX5bYxvIYW%2BJ6Mxx6Zsz3%2B8rhVxqB20KVzrqXeoL6L0FGgg6Pw02IsiGPqacOQ9rxVaZ6sYCI2uE8kb8YeULEC%2F0m1Q7hly0IsXjGR6m347fN%2BQZwv9TqokyypEEP2ieuj0MVGHGfIYVO7Nx%2B8Gjs%2B21O312KZxz892JVKZMn9UVGklKno3%2FvgQw%2B5vn4WJzJaj%2BtEALjpNQLr8k2iTJRTSthltQ7Zlt2Zve6exiBijl6rE3HfGt6ya4MJXTW6b8S6m4h8ReNytTTQlFzPUV9uX8tW7PI1p0dpb03RJPcg6kFiImHjEZ9BDw8Trq3DCQvfGcyvaRHPY4tfacZ70oMdyDjWYK%2Fhj4QqtTVpcoTt21lyHKDNkZNP5DvQTmY7%2BkgSFUutIXT9yoZNHxQbkDD%2FXp3N5mHA6uXYlNvkTNaWBviH%2FnDk7v1EFr51XHXK5aZM1T1myw8s746UJLQ6E7I3t%2FlQkcso5cSJGp1vRNXKDXS47a3q89NUG5%2FdOg7BEadYGJqmkjGm6mFQXvjBOkCjZkcHp5xWO31QGJc7MFFVGEJO7b%2BKIInsWuP4b4otH%2B0rA1yvgs8%2F3X0Vn9jt%2FLhNzXywTMennRU%2FFTMvI3MO%2Bt3skGOqUBnUD4caJRCanPf%2F3pkBzph82nAwRuLHEE%2FeG9tBTQADIWyF7Q4yzMrAOLGoJiUSMPSqmvltLyXiDb3HNflyHCTHUxDCabHcWNp6DGtk%2FzvB1plYLgjdIMmU4opgB5Wv8MuX8Fbovf0fv8Hwiwgvhrp5%2BijOhMTtf05Bwe2BNCwJ7j4c4dx8X8mQhY7%2FfMhV45VzF5TjCQyQF%2Bj5Wm%2FkXk76xDobvI&X-Amz-Signature=df6afb7a67416db7996eb5f0eb0caabfe85b5bff93a2b63088442472902b2edf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EFGHHUO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBC60XuHDEj5K1xNd8DQIswqFJafipB1dqGGBOzKUE2HAiBNXYsUhG9YPVopB5v4xBUN7J7%2BQi6YGC79fK3IC9iLNiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSNLpTnYAftHjQNUpKtwDsRKWTbofUBwShiJT6e2qJ2NjjC%2BK8g%2FIIV43to%2B%2FPa2y7WzS3L%2BMfj%2BlVN%2Fwfs6xei3py2BP7Mhbv37w22gGU1gdb1%2B%2FjaaP5TrPHuiF5yEO3ojPFnq2ERlSdnNaowA9VmhCS%2Fze%2Bj7iZWZTNKAVrSVl0IZj7s9FdlRxP4%2BWylNsPBylTF76LrpDOvtUn2Hz9xyLFDfpdwM7WbnEoxNfik7f%2B54yNv%2FSQvEmUOBgEu8pZSRtJx6N20lkYW0V1rji7TFrX9QTmuhnaOat4IoGlSaTMibAeBh%2F5cV5GiRtT3fnFaBD6ZVnFejGMvytvhp%2BgsD1fXGn0rw68Bd0aBiYb2Jg5KIXfrv9gfIZYUk8HOtZho4HLSkJQNiHktb5AW3zFTxQRpMsv%2FEWzZNGr7p5fmnAdWqPNtcxhNe5QKfm2VbRpw2sMYAnPMJ1wA3gSjtU6JYXngxM0e3XoAouM9Ht4E3IH74Y36RaW1gLr1K4664zncRtgg57CWHu5NU73sC7YX7BQ%2F8oFqevx2wfAtouXyZrUYWt4enYrY%2FEq1edXSfjQSMLxAcIPy4S%2FN7pfmlHs4OUlQaYnomI%2FGT9H6JQiAiD0jKsPNCORjbc%2BoKAr0Pksd%2BqOVblzegUaXcwl67eyQY6pgGgTCyHAftO45bVta%2BntMlk3554i67RBLciLtmAaKg4HEAI0T6W9lJpUy6p49k5y0Rerhc7UDlkgyKb0GMuRjs9xnoK4LF37Hy6D23W4aAw%2B8pIutvGXMcuxjm%2BvUJMovY7mISRwvfu22jItLZJE6vgwjpYpWwhMh9Ex1f1OPdCkfGDwf7KxCx4IVVj8UTwwvbsenGGwvL3uXt9hbmApZEt5tZZ596V&X-Amz-Signature=faea02d529c5e4d7f8dd5d8c4216b81832a11c6d0cd515e216be3d4a95f40cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

