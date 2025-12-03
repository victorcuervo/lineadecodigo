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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUS5235O%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T034002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDIybwVXzyxRn0NYOIvMdOjBhC9EcKHTkcmBi%2Bk3yPOKAIgcB%2FkGr3TV2VoVI7KFEDGY%2F4ZR1y7Ze6M36Y63KCGiWAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOlayTbB1t30gv%2BYMircA8Mu7Ec6jfviUN5GeIS2wjQLXsEu1Ri2vnSAyvZzFssl%2FoALINbyMiRk5f58%2Bd6G18ZpsE8%2FtRglOKdKvFbItW73MqAuXjRT0G%2FV%2BjmD9jT8E1K2ot6Dhxc4H8QMhLMfRabg4%2Bfkt%2BrOa6M4IMcJCPNfDCwsG7jPGq1DaBQSmqAcdVFnBUjOaSfyKBi%2BlBKU4aIQKFJqOR8O2RCS77yvk0BnE5TdmDWp3TUPmIdElQNYfALlVRr5bWWBCgVIRLyUSeTnEYKgj9TvnvpcQKWWRicLAW8z4e0Ze5c2sdFiXyWXgcEcDzNPSVGS7J2K%2BJAnjtBCGa2J2CYmgrHxcZPvNuGvLz8wrazjJKJudpsXByIXixt8yg8F0AiVCPtvJvgNIJV5YO8zXGeKOXPbr%2BjLH8ghcYaRUew2%2F%2FYhZDX2l7UfoHdXupvXX50zQzjD9dhUhFVmRx5sKmk%2FpVQ8flS2QUZFX5no65M0zUxiyBTDYvwZCJOOJL61pyxkHbi664Gu9rIHt1%2BD%2BYtmIHPKHiIaxYNA0ve0OiQFRi2HULvX8WURf%2FfiLGuWJx0rd6K2qeRtZqZeqzTu66M4WA5oR2zPjto7M2QnPpZHEmHA3JkMw39foEN5xgarT%2BxkdRUDMKCWvskGOqUBANTqJSEVTAvBC%2BaqfUZK9c2klHtfavqULbozOl90RJcJ85cnMBGT%2BQSeIWATjHkXneYp6BjhKs2qsvNu3zTcjGbM22EeOUrM7TfbzPFqmSWR1L2oxxl0%2Fd9OJBiguTP3ElF2dbOnDhXOSXq4tGvsJANw7WX1P2JX4N8UyjtVXs8EbwriYNyjxf32beW7joBSPSSEddP8RI6xLYH7osBoiE4mBOVE&X-Amz-Signature=ceed1163095bad85da46df65c86475f848c75700a373588335474979161c2053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPLFMZJM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T034001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC1Zq3DmXF2YQ%2B5JPCVm1%2Fxq7HfG1mdYQ3ErMZ0lqck6gIgRucoRLPh6lW4yqw%2BBVKd3HhYU2K%2B19aPhEtTcGfLonkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMjciGHy1z5eHOmJFSrcA%2B%2F1RaHSWcSBiF%2FDNkkZBhrEG7y8Uf4pfzSlQ%2Bo4xStW4Iib00OSREbaEfTknWU9utloD6OyzgEMz22MOwQk7JoxWK%2Fvxa4xKMTa8DTRU4lNpyzv6eqbZdWXngakATV8bCCHRBjSm7JJF9j59KwghgK%2F8e4ghCgcE91UXu1nLK%2BMqYs0iRs%2B9oTG3ilhCYay9hzxalxm4kzcLdbHbNzddM%2BHgGLYwVMEMeeYazayWHC%2FXkelFwHASKs%2BaO9V59esZi3sDNuSbiG6kfwziT%2BXiC0ch09FdxBXfjfAKHCEd2Vigt2sd4N%2FF%2BjWiHOW5vBY%2FMuEN28pMJzHtB%2FhUMCZWBLqRpUrLHh3xMR0dOUIuoieeU3Yt9lfImj49bxYSs3bWQqQEEmQCfh40V48mDyN9u%2BkwRF3tsMEQubg6f9JUPMcy1rHHqPJ%2BWVFV7zfmgyoG1CrMh0GD1Eqh45ROOVP89%2FO44EBzJ1iSnm8Q1Hk8tr5ZUXl%2FUsXQXFM4yA8KNGvvspMa6X%2BdPHEZlkn5YFvKPZpqlB9Z%2Btym4MH6E%2BD7JpACpzMhVOMOxY3z5%2BTXVnb7l3xqw5fZYpFviQ0A7qzagIKInkObztl15icRNnbWLDpILWZstxVFGNd3I2IMOSVvskGOqUBJ%2Fwd7zY46b%2FbGZd4fJhujkb%2FVrDJcvjFWn7EWjGhpaig7bJwt0BCvX%2FsoIsz1CTBYGcjrC4sOEsI%2BbfbCN%2Fy82NTwBE4rpQLpCbj4a50JdJ%2B1s%2BPuo8La%2BbA52vDsCqaZNKHG6Sehalo3iIVFyVW9mktyPgYRKsJBCQsP8Wx1M%2FrF7JB1lVki%2FaAU9DJ5%2F%2BQI28TSX%2BgvjEsVXhcmG4EuPXwCTT6&X-Amz-Signature=77b5500e910a4e077575896065b2eb9beb9cdf837799806be6259f9f36cef881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

