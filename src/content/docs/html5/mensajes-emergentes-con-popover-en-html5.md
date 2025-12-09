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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSML7QJK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1nDpQ8P2T2Jg8yNH0sdjgph0%2F0Di5zobpcxLWlAeZQQIhAKvHDVAXp3aWVEqLwBn6kE6VMc7U1DWriRss%2BgY%2BUeqsKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxJkNf6aJLSYGf5oMq3AMyygunPNmt1BNokoAQbBmTFK7suiZ3gqJieYRBPa8oY0hX41Bv%2BWi5IZ9%2FkVW9nbWzMfQ2eQFd34g%2FoKUXWqM9hI72Z4qmPSIrYanyRyuhizYJAyRymd94QFhngrRmO56ts2BGK8vMro2D4DvAWCCw0NvRnu8Q0zwBm5zhAmEY5%2F1BfE9SZMk1rSs2jGB4%2FfbhTgYq5ycV7Ixk%2FGQGhJqYjXbFEai3KuWWJAzzW%2Bp6WD6scUV9AXMiTOw7Wa5%2BY85AsEf%2Bg8OWHahTDUU3M4mYIuu9ngmjaZBSLib2EApt5qbnET0HJjHXeq1tnndRaSkDri%2BmWolQcSdnnf%2Fvrdnbf5D3g0%2FdCLmUV1OLFY7w1oHb35EWTcqRwo7P8D2Zt5YRbSogqFwzvgvZEJisc6HRVejfD%2F7vupgDCIDfPjlPgKiVHM1yvAM14spwBuua4kWaj%2Fcl1TN4406Q%2F9IxWGA1h7PPBueYLkr4iAbgAlH9PGObFIkkE3RHKgMts7WBt8mVYBnHR0chZoP%2B2iv60fxcXv65G%2FSDw799tUIKPUznoWFoTQRh3%2Fj7bwUYGyaYbGNDZIZff0IMzXn44ADufN%2FH0vGy%2BNRDitjLxQ9tJG0O53e3%2BatdhAyM0RMw%2FDCpwt3JBjqkAdOQoVqQT%2BJ4NrlOP8sY22l0O96mduOymiPeTB1tYsgKr6M05hn5D5txh5UulvOpiJjw%2BazmNAhfl1auTsMKjgCB4Ve9u2PDVSCeJezCwMcsEHqh87DwGWFVKyX4l%2BeYCyACyfSKVJ%2Bg5jNS7PHMRCB6UvtuF7ETTwJjDI1ltiXfGPVgyn6FOg%2Bp3SBywR63tbm9V0VdCr%2B4oYdG4GfuHByE0DC7&X-Amz-Signature=5e0bf87bd91fcfe25d80edd18b1b367bff3ea2c317c0b34e9f886302fb900e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USSKCOA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoeboyBasLhBPIMRhm9Z1XGZYwy7HokhhLaqzdVvaKyAiBbg%2BVSlbViADH1jmW7PpLc97BX4zytoeZafc4DfLUn2iqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJFTwAlneyccv8RAfKtwDr9iZVTNHEGJAgBV5b0DrIB0nkJoc7G7jke%2FsV2nsoRE8Awrz3r52tXi1xJL0otKzZ0ZLA6Vi4OsmvX72EX5GLj11w1e6y%2B77RowDiFbOB%2FbZvAq8dgdRSgZ4OwJe9uRQvljuktLXBP6qbv6gGcPUqsvwy%2F%2BetU9H284b8hm39rOI8Rvk%2BJl5BFEeZYeQOqeISWySzqbsVr1eDv%2F%2BxEeN0p6NnJMlr1%2FZmcgxn1%2FURu4bhwiwgWj05GCFa1HzFT%2FBzpB8Ig4IFeSn2ytMls%2BxtxtEs5VY4yt0WPyQi%2BRMJxgiDeWOfQfH8yJ4ZHfT9fXTpnRP011N44FnxU5eWbLFE639Zl7xXf5qzn2pMKt7FTiwaT%2BvoPD02cos0%2BZMGOLkAGC2McymvYtbn6E9GJdmXNbHWXpXvkD5Dtne8sJSgbPpziMIN4nY1%2F9jgUPSVtfkULLY84YG48%2Bwl%2B%2BLAmUS9hQJ9loVe3ATujUxD5gd8rKL1I6fkqLkyhWSqWigXfeNoZDpsIoJXdwz%2FqOe2Wf5ZDEP3erZoE21CrXvjChHYmY2jrGyQF9fIU1AQ%2BS0AhyQ3qanN45ZFCr5kl8jDAgID6qOJ148nFYVaiyTpzl9RcDhv7faCgbmQkMohzsw%2FsLdyQY6pgELnWHN%2F3fMi2APiFlzLl33Yq8hznK63Qg1spwc4mT%2FdaLUCYvrVF0RE%2F6j%2BJ5OTv5OoFPoVe5GL8xhVzYZ39W3DuxDWgCwcQRBkfVj7JCjftYp7g0Psp65q5kFWX8XyeDN9Rbt9v8%2Brlo%2FoSGcYuxkud9mOfuQB3HuBi6mjKGvs6NFeGbLtB9LJWVhAhQdgiQAQXdIAQprq%2BpkX7OlK63gHV0EKXGo&X-Amz-Signature=a2ec2a134bb8bf26b16bb91c39122f2ee0a8c2f7d5b35dac9320bad843404cf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

