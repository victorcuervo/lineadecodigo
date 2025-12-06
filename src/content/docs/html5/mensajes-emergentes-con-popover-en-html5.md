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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4Z4SUZF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRfl8uoKAZED2TcLy6kKu2iq4J1Xa5AnPpRMgHllQAOgIhAJcn22cOFGZcdDDtUr%2FV3XubItCm2%2FsCGI8cm098fyrfKv8DCG0QABoMNjM3NDIzMTgzODA1IgyRhgRyFyUggCXaGqEq3ANKoLsIo0wgUNWsOaCc8pG6AxPPcOVHZeB47Onj5q0L%2BChQKReo34wNfAZVkoBF0J6UgX1u0xqwxI4qJnJXPx9dCN1mkzDEM%2FpIEVueUJL5JBEJ3VssJhVUQqxp%2BdWjSa5Afe9%2BZpBySXb32IxOfOTp%2B6NSeCmehHJpIiWQyRzfUytKB5fEKBiGNWI8I4ShjKYt0MFCvScZqS071YXkxIKDZEmaaqpWYYCu8XRlKPhPhgA%2FmCOKMVljx9IT1OaaE50dPr2EP%2BokDUMTrEUlkWLxDGdGbSndRwHqpXHlD3xqwGKGvJWBpBPXuflWIkFO2wdhbS1hRLuLYAtCMHmwoMaJRdY%2F%2BIrnHq9%2FnuLuUKSzAxi8cMfBwOqVm35RlR9IairihQtB9XT9pNbKiCxCRcWnzIStPLZp9vNI%2FwC01MWGg959SedlN%2BHdDfYhCMPo8TzZxi8r88ENV714rpsaTIxCRpNiH3YMl3FlXPQYLV6zJLlHjScpywZW82Y%2Fmq9ToXWXvKZk7xgobXd%2FerfBj5IaL4eH78QXiWnl3Oo7kMppY0RZ6Q2TwMd5Tt9Cx0N3l%2BxvNkUECwWThPuJ7dLPFT3OIU2IL8Hl3x6mWQDkeMefr0Z7WQBpJBdUAC78sjCp3s7JBjqkAWH5viVLYvQKfJRGA0%2BcuCOdw7d%2FJOiUnDXb1BZZhR%2BJLnNn1C%2BqV5q%2FN8m15B8te2%2Btb4%2BKk%2B1Z20zGghhZFUZCort4vdcvdLhA%2F%2BNpz%2BD7I7VqIUzVYhws4Kenqx5rpU1W3Snc1VBZCB5rBhSZ3lKro0pqbEr3L1wwvWEosIuKXTwug%2BPxJtCeKULip6P9WLRngBUKaA2w9Qs4%2FMY6XsCew9eG&X-Amz-Signature=d104651a974506c903531e29a37cd6a4f5df136895488802f3838e1c10b4a907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQSQPUTF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsiuZa4ERxGWuQ0SqWsn74ZhSlXb5FexuJ9HP73PSl9wIhAJLQAlViIB3bGcBsBymnPoBmM26zlK5sR6GduTwJ0J73Kv8DCG0QABoMNjM3NDIzMTgzODA1IgwFDwSV7qncVbkWqIkq3ANTrTHdw0V%2Bq4d1%2F6NIrrajn9UEDqxyRTIbLueSPtgA81CZnAtq0mBbzb9gQtN4ddglCFxIgh75EqlsbvCCgxAAw82PLjwsQi6FGgnIPx6vg7DnZ%2BwOf3yWG5lZ8ZCqLoBMr8WxbDXn%2BIgyHjixp8BOwBFQY8PEp%2FXCPoBzzs7suCvwxq5KQVjb5Lz7ohzvGT%2F0NlyvCV4uDnAkj0FfE1XGbBeaKn1daaLcwf1%2BGiKbYM85FH5h%2FxTEppGKB6G67sNSaTMyiq8NljeQu3XDgbjWBQ4V8peZPHnQsO4v9I1AyJhm8fzGAOZj3S2nWQCHmLaOX1vwOStUhzJAuY3skQNxZVSuencH9isqUaVpbG6Eu9W%2FTwSbV6%2FC8oliJOzY%2BkoHrm8vzyM9GcFmPzXadpBvzS%2BmiZ6XbPOE5MVHfTfTQng3rVF4AweHKureFsKQdmMZoIA4l5z8hzAvp0IM5NRwEgo9LJGn%2B3fyMxyWRsCxC%2FCUPnfw6Xx8TT3aN%2BCkidDDjoKWzxht9TqsVUob4Ugdgh2CXqN7%2F%2F14DYH%2F5jDnyfUMVObWQfAiugZqMX8GmDB7MLH1N89AbI196Quq2NUWrlJhgUuCIkfHYtzeXjXUoPZ310ttdZnN7l0%2FqjDx3c7JBjqkAZInaX6Bh1qXhrLiVduS4cKSQyWcPZf9Gtx%2FPpwlWh1SzMNXK6Oy%2F4hi0KyAHiDJ0J1qQwZHRQVI6iikYIcvnwiZeJ7A5OqjONi9XkJwg1yuv2FNvLzqvrk90Uup3gcENmQ6TAA9orWD70RNAaxkF3%2BLw2zc6TULF1uOy%2FrQ0%2BIJ5uAeBqADNDLaXYkx06MlHDM0mJL5SgXTi1D8BiZy7EX%2FWR9a&X-Amz-Signature=90131c69b5560cffbec476cfcbb6dbfa4f6417dc39922b181ef539bc903e0a76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

