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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVDZY5E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJlNCsU%2FbnGDTigZZ9rOI81ZSEu752lQ9uG4S37Nu%2BQAiEA1u%2FsC%2BOveZBUiakwPL0u7iHRZIcn0KknQrE%2BBqv40Qwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPsuRK77pG4bhSP%2FxyrcAxAl75wUwTWO270Z2hfmcSw6%2BbpKfZBxRTyygrLuUdqcUB3KGfAfJMu5euPat8Fih9qMJyCacejxSDdhSEUnag0nJs2sc1Vcv4DQZ%2B4yxLSPEMk4oxiG%2BGgGwXiJ1AjyyLGD50MxgpVxe24WQwzhw4uK0nwYT0PS4Um8Rdg6EgqlsEr1g9TWVIjm2AbqlPeza5BVSdsm1c3iu963gAOZrBWAGqNQaffHS32x5MknVQTeeJHK3xQ9kCouJZHrv6r6V%2F0oInd8%2FyRQHxCarog9zjqxfcdWLeQQ6gh7F0dp%2Fz3mugusLMPmUQ%2BbMqv12LlVO6y%2FwDKXKvQBH1%2B2G26oea4aX8FM5jdtByjO4uYkAIO%2BdNYd2i4OZmbiBAW%2Fmh4%2FN0zIu1mvQgjfpaUIKGQeDNK3JhZQ1WsANwBymgWckHqSn1N6zvwl8DKC27miqkzHnu3YqATErAq2bBhzYi%2FVEw4z%2FmXg3k8DX%2FI1NO1NzekgKL4fFzTAr7YGhYE3P6Zly9u44XbiX5zssKEDgKmysYbDqk5dzHEocYBnFagCcf8Ldsazlsy5YcA1kezUV86FNbjsUfnNMkLpD%2FuGlozvU9FzwD2ohkOl5m03CLyOKlv7uPdFblvqQSyHx1woMIrK0ckGOqUBx%2B3s2aQq0THl%2F6yq%2B%2BMsLXgpbO4oJuILcQ%2FqGIkFwOPCaZfd1B5VViAdVqI1n4W%2BFLNnhmEpLarARIhaUcSzw2wv%2BV7OE2GgS7Fm2icVuLhDtXMDk5fIKd512N3%2FtkXAgjLfXp6%2BKwqX1qN3%2FfjabIC%2BiKaBfjGbxJgkNQI6LSAXu8cGGD3xBog%2Bd7tYw%2BuU%2FlAB4GYukqf%2BmO%2BSRwnGkKMDw2Yx&X-Amz-Signature=e300a48dd14d4703937fc4497e5b20887bbee136aeea8b41fabbc5919428c9f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SE435EY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjFi9y0VaQVOa9ujebMReuG1wSzHiSHOGpRNLQbEUh0AIhAMov02Xtku%2Fsw2eRg4W2pMZ4uIywn98cz5eim6q9ewigKv8DCH8QABoMNjM3NDIzMTgzODA1Igym%2F87cT6dBKxkpVCQq3ANl1rDXSYg%2B%2F1u0B6K1fwqvSPy9S%2Fj1cO95kevJ2cXqC3YaQ2t5O0F3GISRpoxTjER3SP8rfu1kyDI7jAc1upvgpT7GQ8X2uorR8g2cuTr0veItxVDapKqjhkey2dxyFjPG1rs8gg1EEeLOUudyKV8KJHYjAiXkTR6UR61hBIi5D9QXFmL0D%2BSDKVtLXkoI%2Brq9VAiEMWBPZ75x0NCBbCWHsZVrGukHJ3n244UmEKXQCqi%2BqzueVdqUB4ElcCZU25sWY%2Bl1c%2BBqM%2BUGzO3XmJPjEr9AxQwjd6I9q1pDjLdC8WEk8lRMjLtYE6Lbmnr0rGqPLw3MjUmVKwLl0drFjvFgvzi%2BY54z7x3ruOFmk%2B0yLKl0cboz715B5KIo9%2BhiQvhbfzax9MCAmAvs%2BVCL4IDU%2BwPuuNCghPKP8AgrgKgY5nzWGwo2XjJ%2BJgcSkXoDKP2OY%2B%2FiMl5Qqfz6R5NONJ%2FQI6J9%2Fwt98Y4Ven9Kw4pxP%2FSnE77KC14X%2FKWUK9mcMkkpdHdoUpI6IrL6f%2Ff5UyToln81%2BFXEXbB2fYcQkprvLcHxm06oBE8EUpnL9BH0y%2BoB5XomTAchDSmYyY%2B4BiAnF%2FVJu%2BVbKvkGz43cSwIszaIDVFWfiHWzKErRUDC009LJBjqkAdEyPkKGO8%2FTvhM5SqogcY22Z62XsAAdoPrHqchGqypdL5XCmv%2BzL1IsHRO%2FYDWVtIqO%2FaNzokUbmbmQqBFX%2BsUEu7XB%2BqIjIxozKID%2Bz0Hy7xvcu0sIZc25BQkzG8W3Viw%2FZo9jpGBlSeIbWJR8M%2Bj%2FG2BFZXC057TEcg7G3v02AaTuG2QSs9KLKGkZAaIxYhA7Ut6yOyplCMzpqYAGBCptH5LT&X-Amz-Signature=079590c6346083242aa44582d3926f182b85168d1c87c800d4166dd8a26e24c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

