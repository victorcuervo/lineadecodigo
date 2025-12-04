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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYPDUBZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIG%2B%2B6JQLLcaD2tY%2Bp6C0lo9CZlgdBjAoYchUrAcga5KZAiBQXM4E6AtEMHlcachy2K%2BQF5LkTvStqd9TyGajgrvfUyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMhQ8BqHXPl6vuiwe1KtwDc0mc%2FZ7mn8V9Qr4ixltp3uLrGyJs4STP9hZS0QF4x4rLcPMddjGRsrg0HtOylbyRasl5BQ6wo%2BVOHiucGiXryeSML6qJXRXVCzCLJxn90MS79ikCntiR9H0IBXvEGTKvxNgOCyslDrxCy4PwMb77Q0Q9KSD8RNpkIC23DzVpEYha32nE2XeF7lMpPqoS9PnbGUjCZxduxA2JMkyz4a2PeyuEb6Ncwjun7gcJrivgkhKaMSDmMUtTp8gSYnBNlMVQ2dblnBxvwLhol0dTs21jP3CQOU0cHtSCmC4iUZ9LBxDsMVW9BySOb4KioL084Pn3xiC1xYbVD4kYwbqyM8CohPjScRKu49NfL6d6ImWbo7SuhyHd8Ei6NDBMpBTpVaoyBjBTD0XXbY%2FUpdjR%2B1pHWgdG04wS%2BMuK7vbstjL81lzihsWTKs6VDSBgzUIHVdbWig1xSHS8lvSKvYhTr1MiWGIHIDlJlHe%2FjYF2m8I6ZstFQzBveN7U0C%2BNxIexWpCBKPbwGRK9Yec4kEmhitofQul8DLMyQlSRTlVpnSGQVn1lyqUr1IAIAnxWUJjBzSkuD46%2FcQMr96OahREfYKWAWsZBFg1t74EJ6f18JbPlMGBJO1LYaryLa3rQb1UwiJDEyQY6pgE7NoY%2BEdYSoG9JS47d7yZ2YhhJCjWA4AkaFml8Jjj4oNuSSESuJFbMjJpFjHL6qKnbSWuPxgguDRhlDmx1ycv5z6dY0gOE5i7fBPFVaD7jdMD1rFKJjxKeAxvzxpr7s7YEw2BwrvFdWnYJpU%2F3O9F0VJfTyjtrzJCudFWSVEHsumC9TxkUzzQsGzawsaG8N%2F48zj2d1NDirpYSWiy5bAtiS5WrEeS7&X-Amz-Signature=13edd6b9cdeeb4b4325333c44a665ffad1c1265b22dfbf828014c3371f08fc58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YYTHAWH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDxyw%2BfqlAAALV4ShoKZeZ%2FTBqVThlc%2FEl4wzKyqTwrAQIhANl0yqC7XZQdTknklxK%2FkkKo1zaWWElpWRcxKTqGuzL0Kv8DCD0QABoMNjM3NDIzMTgzODA1Igw2f4XNFIBSTKS31%2FUq3AM3quhEAIwsQvbcae9zfRQIRkZraZJ5KqTXTdKqv2AM33xHyMDEBSsuLMh%2FQ%2BBP8TnQb22wHPAYlicOWTt8LNTPk%2FKPuJcuxLqvgK1EaRLNV8hqqWBJwNbJJeVyIi9MDLM8ry%2BLPoH2yHihC%2BZR67F29kL3cZ1nOTsPBsCsSjHB%2BI3RT0kuAZdPLrxTUOuWYJ%2FG13F%2FfgoAQEW3pIEY3ettXdHcXPOMNSc3WL7JUsdWYvdmJylraC%2Fz4wLG84iFBng8rS5kjbL5CnLDkwJwrhCb9LVz%2BDyNK2TVMikEJzUme2v35%2BwrzQ32oPALfBXBlPF1F31xccWYlfcpy2LoX8wJbqZQ4wFV29aUreAHcC7JdfmVKnnKAH55%2F6HL4GsZamTYDJLjGTM%2BQkFmZDsI76cs314ETx62yUW%2B6%2BjblwIGNGW6xP01mQQC9pU%2F4Q21wCQ9gWTPQexd8e9YYQ4jDQTl9yEW08GUA4fGdfGixLwFn%2BK%2FP%2BHEhrwa6v64bUa8bIUFfKGFIbZ%2BvmplbQc9%2BYKwpWjwtHIPAq3lgb8OH1ger7h26BGk8%2FyHcvQw7ibQQSDx3kTlLiQ3XRW5%2B8bkfqZzurd5LiXqIDMED3F57qwNhjkBrjz68kHKtMyzrzDckMTJBjqkAaN9nt2WS3QnPYvulXHbRxc9OHIbi9NKFPw4fO0jOQFyi1R%2FR1%2F8kDWq%2FCn%2FwrRdDg6EyJzJmA6dP73VmsY1ilD4kpNiDmDqQH65G%2FLBuzBC6OJnkGB3bnbH74eBP2bCxTI%2FQxi9jqF49Pt0WkGjnYr5T9GSg%2Bo2zTS4sTc%2Fet5rZq1tn%2BmBNc9IlzIXR%2BDEoarcNnZvBC2stiMDXbobg2ZfDnAl&X-Amz-Signature=34f6a89ec48cd08c6f87c78a736180095f2f7c1184066559b1179f78b63a9b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

