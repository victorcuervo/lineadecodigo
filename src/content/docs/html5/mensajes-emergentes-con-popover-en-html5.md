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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAKRJSSP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfqUzHhCQQmxE9Hved3ll7DvZrY0DoIWqrJwJAstokRQIhAJstQkIA6z2Zby7%2BE9JvpMW95qjCJjP3cECX42w7Gg9bKv8DCHIQABoMNjM3NDIzMTgzODA1IgwDDS5qnWyRlgTsVesq3APgMfAoRgiVW9M0%2BZbcqvlRbixhcaPZOYCAfCRrOu7njgMfh5S5gJ%2FCKMomddsddV0LW64U0lCpZeXJVH2nlrJMyNrRd7KnajuBcqOQIiGp07kGQuopM6%2By1KDZufBK%2Bjpla3p1fET4yMhtwz5cZt6Xpwl%2FjLxaFJSwA3ui0oz41w0QqLPu64grko3k8y43I1EyRU1S%2Fe%2FrkDD%2BejeIeukVfQ7RXYVXYz2FKUV4%2BmJ%2B5KrEn3%2BFT2DS35OXCzWVWQuHFlMMaigqyWfoUY%2FG79vywdSzIfuVaseeb9IPq5BK27raFNcyMRCo3s8lXRpBdL0wT2%2FDDX4XRsn4bQuDkRX14no0GjUxYY491OlYH1jvP6Xj77KY9qO4ZJ2XyS%2BuUZUN8iawNrtYaPzXqEL%2BMLm33jWpkpyzIs%2FkpafxjTBfsRmLvKgLrFgfvRe62vGJOwTQfjBbqXu3w6RiGr9dSzXhhuzOnnqPcRHvzrEgM3qSPDEefeonXRRSeHu5KN9VaHBpVOVxl%2BrA%2FoWEZBe9TnFOMUiTzq%2BfGF90xMmq4hH1NwioUy2tTl6szlpbC20W%2FkAnh4DcoH2mH7jXGwzPQ17BJ6VZp63C5v9%2BDzsJRi0k%2FLOHud%2FGBtnvhJG%2BRDD26s%2FJBjqkAelVbrdZl1KjWHJn0JcBa34GHohkZ%2BSeP9M11rhgFJoXgCA5fdE3%2Bw66gdKZquG%2BDIomD6j9vtnpFpUUW7xQnwtaeuv4cG2g6RGH8MolC%2FaIj7mPiG5JX4fRtBmYd5U8HVzITsFtKdnfEAs%2FyKmONQvJyDB6Kcb3hEu30WRrsuni0JnSiod4bdpHVjRNpDH1nRC9y22eotZBcc%2FcXYRAIFhsF6IY&X-Amz-Signature=ddc45cefbc15f5894574c7b96782390f7ae139fdca4af5e904bbeb6e447d3fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URPMS77S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOxC0BZd3Acu%2Bs19JVVqrAEkreDwh5b4dhQqQ6nFbgmAiEAh7IWYGMKrPw0pxQphVxcTDkJaXCE3yi98SPQNHZvFZIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJC2AamrlPm6XYoQ7CrcA4idxhZy72ZnZMtPMepxUzGzVcIefBGEsCpuaufFLoz72g0z5ydUX1cW%2FqGjMgjj77bM%2Fu0mIB%2BqtJxsPsgXTRqo0G8x7GDszunMLRyiM36%2BxOlIpofHuQ4WPjc%2BoTo5JF3rQgmVtOepublxenFb1XACYUafCMBhztgDSmsq1xUUEkIMxO4Z7Q0af9NdYcazNZsuX8H3c6TRY%2F1Ofv1PAdyKFM4EvhIBuZTV8nOt5dvhbq6kezN92LU2eKroMvgF2LYnSEHkN%2FaTHBK5y%2FrNL%2BN9au9lvB8XDpiI6JC2LseUBYzuzEVG8epIc4ae1mca9BaSz17seFVYdzXRx2L6pVN7QUQW7fpf27Ooff5q9INtohzVDN%2Bhj9zeVmVHWWjbmxWbnMkwrJn4KdwJ%2FgdWvu%2BfROwWzv5Z5d92XTbqPTkzS%2ByYfm3m8YKnVOXeEM5meA2%2FoH6Ot6YksOPrIIqY415GN5oyZk0XdaMYR25VI5plX9VmV%2FaKpyrZAernPoJqj8f8VSuwBqCOZfKghsyXEk3O3EAcfBwuVtDy8kfTTMzJnT1oazwONrHj5hQPmc%2FyoDTTmIVL5mLYxs7gY42Xo3%2B9D23%2FPsHZmFktUZzZAVFtrHN2RtZoJsZgj3p5MIXrz8kGOqUBSEcdosdW96M3kam7Ef%2FimrrHO6zoxw05a0kXrMcHhiq9gXdsgG%2BseimIXeqwgES6fteYTNCAu1bl%2FcFHXYlauEsJrH5TXtPzQ3JAAZxrVHfWZykXl2C8zVuef3UoA2ldaTE%2FtJ%2F1Es2FAWQjz3rXQ%2FknWT%2BDV4ZB5o9aXzNO%2BCub2Pc9rU6WknHx%2Fh%2FcUXDNQFtLKHQJiOHHf3lXbmefI4j8Aj5W&X-Amz-Signature=1c4cab21101e49ceb8c338ba124c094658795356814e958f637f80bc51458e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

