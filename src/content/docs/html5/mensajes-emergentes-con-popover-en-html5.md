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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTK2OLKP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV4i2hS%2FMH9st0Qqv6YFaaazT8f%2F%2Bys7ZRzi%2FFDTenrAiB1waf6Rh99YO5Fl7UR02AbABQhEcgOPMemPIZ5waHj4Sr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMmuZhAs2WpozEhOu2KtwDH67p61imTkoQEyOBH3TfdOPAcOsxz3fGzwsfsQfuRXdUFmTVHfy6TOI%2BWZMk%2BRm%2FNWgBGph%2BVTs%2BoDYS%2FAEgLm7VunANvzJq5SgmIqpTtvo%2F7%2BZLCNL%2FpS4PjhMZpqnQB2GuZAVJKOH3EJ2oKTdnWBoIyvMLvhVQjQG4icdDTpqrEsncCEqKNlbd1jt7k0831HtspAXM4qR7dIhVQb94ECn3EuenT1%2B7mxZ0mlCFunC2Sg1SLIQqFSvD%2BfeZpYhkhWjQLR2ujSvLe4uzLXk%2FRlBKf6CVoGLQqF%2BwhvSCYFa22AxiLHv8eOBvybW7hA1YVxOBRDO9Lgl%2FzwX%2BfbUHzGdTWrLRRqjiiq1VDFu2TGpSFXjGEYChTUcm%2FrtQxfBjD9b4spe4CQSr67G17If98D%2F5pzib64QKBzlG3S6nkiZs14CABCZy%2Bomaf6f1Sn6R1w25qb2JmI3LakiH5l%2BT73hUks3v5VivAhuY0dgvpJtaySc9bAZRLc6KHqvjC4dF3SiM40RLXLiHsS5mNfcUXMctHSvUvXnMDZz2Z6oXVPECvJ2C3hytX0QVUhzf5%2Bh%2FNKnLBawzWR9F0qme6j5nn1%2BT3X4hX1nhTs1YH%2FkGFJpYx0FsMiTphIXUhNow8onQyQY6pgGMq5vSfEB%2B15WhOCXeYmhR0%2BER73SnV7bEqmV2jEyFX0KXwdGOsbaIwx1RYG%2BAVnW7xgPYQG%2FwPTvXOQrgj%2BD8Y0JfAgHLbCkuGQiKvD5B4u5HC9GqUIX4peqBRU1mhXlF8ZxJLRf4gB6iY%2BYTDI2fyKYTjLkYw2s3N4t4gOPCei8GBBJooWOzcLpD2r0HeBkf%2BadIMACFiUlZSsl%2B9ZFKBPcS%2ByDs&X-Amz-Signature=865c1331b26b4231b5239bf11baf8fba13d6f1d3f3d5128cbaa71bb2a4b60079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTXD57B4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYYpFkirbZqsg3PzqJqi4ChHJYDRAS7aAO12wxbhqVAQIgUCJ3Q1Da2jeYWfhdsneyFdGZsS1O99VdFeXU0fw%2Fkssq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDAbpUKbwAzDsnXlMZSrcA22qYdbJI8SQVPPaNtDUXMascCsIxI6V2Ne31bbUUNx2SRNanR2kIHV8Mxa5Tnk8sxrm7ehBG5O4ngyx9iMEa809VMH1%2BOTrpMHAcDWsFhfhobBiGynojiJxDqUAoXkvRBENIHTt1jyoBl97RHb3mcp614Gmd2Ugi1G%2F%2Bdr3KqcdpyFF%2BFGT7xA5ryyDQegUoWRYuc%2B%2FtqvsgjIIL3ymo2Ac9dm5OyPwGMNgcxkpiouWK%2B7XoYFURlYgeigTzsgItmZQpeztTCUqadSf5w0iFAldm9FB223VeQTB%2F%2BUK0STK5Z48hAGpZ%2BDToRI5sHMDzxYkZ6BqOemEz26MTWg9Ih3EI%2BGR1AIH8ZoHls0mT92bdz8csjl7Fftop%2BjhPIvx7WDVGuVl9uLbyC2h23iTmBidhWx%2BJ%2BfdIv2WdeY9H6D2DO%2B81jKttB%2Bhg3XM4rRPRyvjXD7iUoZ3rm91YUQjmC0hgMBws5ALGJO%2B40R3vUw1EI6pFhQeo%2F1kyP2JnQUFpz%2Br1tzyr7TEIu4MF9NYypCC8s5J5Pkq7pm4bXpOZeVSksyhnJoyjxhH8lD2MHDqa9jtee%2FjP%2BvFMA%2FE5O68KzEI0iw%2F1z%2FyVqyc48tDHUlLb%2BHmpn%2BJW%2BJRkVGqMNmJ0MkGOqUBigyk0RuDFfTeVSEw1qvOfdqhQ4AQnDPL%2F9Xpo6gzD%2FSYdx9pWHoSDGo%2F9GPm2Y5hjtu%2FPu6%2FtEqwvjr8G0CybLaWh0lfdwRK%2BazIOXQ%2F9dr4Bs2YjQhMS6VqRExF1ZiwSlYdxnuKu6HROGAqNIBrNf%2FanUi5w83a4Xt15cpu0gKLnk3z9lCsSy2RYuTbGU5K521vymLPINpklviezuiJ4lh9bSUn&X-Amz-Signature=d697fb90759f1701eedc9f70c09b45976db30c734b240416ee3a9d90189609d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

