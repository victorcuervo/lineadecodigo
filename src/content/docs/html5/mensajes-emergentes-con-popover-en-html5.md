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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MXTAF3N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaRpmP9bFFQ4uEaE4610VWRBS3C%2BRoUo6oF9SCyNiZ0gIgR70Cy5EmSnerksMebi95iRNGnJYXQDbfZ8o%2FLgVVPhEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5zPMj2ewlCrSyTGCrcA7m2qF%2FWpduUEz9ak80EpTLEXNMEmmjsEWvW1BvP6ggI6S7VeMHjvbihfYyvODTmyccg9MsWb38COGG9BYPa5rnMliff3S5sKf2GDFw57JJzVJ5%2BDf9IyqXLrhzux9CL3%2FizQi3lvS691t7LrYvs7zqOixvTSLUxM%2FiuXuFLqeOfyZfgGyMT%2BZoFOufxFc1JwAjVg%2BlO0kJjCU8tQMUp4zjzCXQ1xzrMAGNyJrQ5F%2FrqdrDgMIdwXjtiKDXaEXNi2Z%2BlMYjH%2Bcy0tnhsZFBcS44bmTGAbk8jnqs4ZxzS7VIVDxFEL7a0kmQTYP47eLkRYc%2FpE28cY4X59mch7oiD24vfY4FPYgiku5GgPkRxQIbMEBsRzjn3SX9kovZJayds2axPllIB2F6wJn4MLVKAWIcmkzN6lsezQ3hXSvhRCmbVaxv2ExTML8%2BAHl2Q4U%2BjNP011YKiQWJFOjpYyy7nrrSabBInsBuslBZ6YFuWw8gAAzQV25LQ%2BFx8Yr0v9yGUrEy28FokfKvxHZZJ4axbiHR5RLf2Xp2xLpjYFZ8XmDfo80Bp80CD6wwYuxcDdnCABnpGAqoOEi7u6INMmNR%2Fwc18rBbrYfzYrtujpeniamXKfY4y6WyzKySHxxj9MLD%2B0skGOqUBGMfRLSzvX54tBkCgGplHZEeZcEr5THDvFFCCEZ%2FgRcVFuamINvvmV3VIVD6cWhhLxy3%2Fo15AJ%2BETX7UvHX91KcFWUtMIzN78Tux0SdwAWbNEj9zS2Nt2z%2FePYegT3%2FMUM%2BnhPzm9LhwSTLkZOwQOuJ2bQd%2BB2umPbLC4NnksReTwPvodr%2F4jWrqyPQTZNlNzsiRofiVjI313AvuXFmao3ro%2B%2BCB5&X-Amz-Signature=90eb8c9b99acd966d918371971a6c4c94b98f773ecf19e3305fe63420bed5d6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEKNM7V%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdRr%2BTX4iTgyUFuN84n3hcxBqp5xtB8QUFoYCyMx%2Bc4AiBMtG6DrdvXFYIQ6bz2%2FOcBg6Z1NllAveisFhsdJJKf7CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG2GmJlHZWz3PUhUsKtwDFFLi1rIhZb0jZ8OvjFei6U%2FBW3jVBpZuJbIoi4uFCNDqM0lvxOJVkBwh6GPEDPBhBrwWZzpJQbzgei8n0ZjjNinvIJe8ldb68Fr1GHuW2mxR%2B4pOTQuSOBnIWc%2F7PDuyiTIMw%2BPjN1O%2Bib7q33t7GO28tMrOf1zmqhAR9UNFhkBkQ6l2AkuKRKAdIOFrxbRhQxE%2F9HvJO77nb8jAjeDxcNSK1FY6hiTizxtT8xXi7bv4y5yaRl%2FsVIz6XjnC5ZuQJ2RSzHDLpGp39No7A74M95%2FYPfEqzYnnksyoTwP82GsITf4SgwaH20Z6XLjelPZsf4je%2BwYWkT23Fz8C%2FgSDtN9ltqYjqglWTvaxjh%2BeKqdvWeBFJvriMqo%2FYDRRL96T4N9qSw18aTdE5NotjjZ1Ua6t5VpOJ%2FrBZJZA%2FVPoD63vToVYo1upZfwdLde%2BErFLE0Tko%2B3DeNOqtjypQmrngxlquXUEEgA85fgHGr5m5W4cQkPa1oJ90bciMhgCw8Nu29SDGtgpIUVcCpuWNomiCaCNxaxmx8qwKhfz5WM962XslKC1NyrymyvklFNkykDsIL%2Bvko36PvyWxQhulsTLZZuD6%2FWVgJvCpE1ILjWM70MtJsnx1F9O%2FLnQMbIwo%2F3SyQY6pgF21ycW%2B6AQ7NaRsAd4N65TvV7FQ2UypG98%2FSQwR2Q33RL3B3Sygx7Wdv2Ma7ckEiV5XRxLVGCnwCRcZbmsuyzBBmxX9I0jvq2ygGkRn%2FYlKDGxNFah05jtOSgiyBV8%2B6MLzrpi4RUT5CwZYLse38aU9ufLN4ZT7v2RRku4EiQQt3ID85fFcHnqO%2FkUdTc9Jq2wwHVJlteVT3ss3JoAAoPHJIyl1yNu&X-Amz-Signature=d48bf6b0b714692be1f4ce4962580da7ecd3899c9bfcc314ffde6742571baed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

