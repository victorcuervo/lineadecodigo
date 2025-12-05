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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPMH2LE5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2aBvgoo9eGeRvZ6Renr9J99rT7WQXr1V5I2MauXNMnQIhAOarqG6yLog3AIsaJ8CrsZKP58f7izKUb5tbNFjntinvKv8DCFsQABoMNjM3NDIzMTgzODA1Igy27dg%2Fgv6cwKqA5Pgq3ANck7TArDq%2B9niXbJoLhs7Z9CIRsBgq3q%2BBmNpJMjf8dcauLfn0CusxTHtbJRlNTwPb6VsJQ4ziyzamqpb4ytIhkkuo0xj1fVGGVAwqMeocTle7eMImJCndNAl7SOR33HG181QRDmQ70%2Fv%2FPdkyfO3Qr9BwRQPrPtcLbp6Q1SroEHRXUaoz2jyI%2F8doHRGyt2TPYLO5XLIBdmjbNOf6qrE6s%2BpFUpbfnVAKfkxxwthqxiETY1u7fxncG8GWvV7vYU0qwJXPe3Y%2BVI3TaXbayyuDmz6Y591Gu5uurAkfLuQjyYLPYLqMJsZjqeXEFPQXVYATm2z%2FVoCUff6Q09GRwhzZwWlAdBaAEXhAJ6iFoKrkeAbs%2FWXckqNN9Id0jxF9F8lSDlSlgi2HJ%2FzfENOGI8Jb3NdzkClJtF5o1p5Yi1Wz3PTcXrCsVeILJFHMPxkhMavCIdlyexB8Qw680dz%2BUrKL1E4JOTaqVthwfMaVmhBdIOMZHmPVxyp3SPlPEtjcIpr9wPR1832jcXgBPI16v%2FKzABLkZzXBpS3BdhJf3HMod6GELGCZ6Wr1JftojyT2nMRXs1S8JMMjjsI8hZlVEGxfcypl%2BLCOwX5kES2mCo8cQ%2BTAGODikY66HYi%2BwjDTz8rJBjqkARNaNjnfUhuy0NV8tfcPvSP66%2FH%2BUOmWDhnYreAoq5g5OkjuHcvnjm86ZFmEomY1gjScr6kyYmYvyl3SmLFIAwxDRm%2Bp0E8pO74sDokoFcUms0%2F92tkgYU8TwKqdHhkyveTEZzmssUpAHJ%2BqvRzAx4xAWcaKuIDKVNKB7RqqtMSlFiTUzgAwGw6sDFpOA%2BiesEM68PUHHQYi%2FGegDO%2FZ%2BjmDyquy&X-Amz-Signature=d781e4e071b7df9f3e8197d84f01155fd2a317bd3b4849e26e4f6dad1a4224a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHUMBO5R%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrXL%2F7aCrk3jcVrRQCI2%2FoqUHVDllOY%2B7A5fMtAu%2BVLAIhAOelyP9kAyatHGWNYp9waTgh9THfrVQj%2Fc1AjqBnOgLQKv8DCFsQABoMNjM3NDIzMTgzODA1IgwFIDbPyLjvXh%2FpNMkq3APGi57jyqqfD%2FaKk6j9q1KSkQikQVB1RrHNw1T%2BHS3ahzYmWghSZKpEtOjsUhDc9Q6xwH%2BX044Foc5O%2FeORSQtwSROJSIpspFANyHH2Ms%2BovnhuZirM%2FT5ELDhUnS4yAn3NHShTV4GFPlmXP08wtPq6lCscPXDUGxwy3PU18chfOnbY2qP9lLDvc9W22T4ZQKoBgaj2nAB1%2B9Ard35q3zmsWay3iiOl%2BEGROKOoDv4d2hAmgJ2BEA1YLiOwlPbOEa%2FnYtCUNOcZC0DS%2FSBSxFJL2YEFy%2F6VmgWQ%2FXYeEjgVtRJTcwKibn2zdNyIyXdcQKAAefCX%2BCdXI8Yi4anG0%2FuZu8eY%2B4czYNfId27OJw2VlH00O4WdRvqTAJ4SvwB%2Bi4CgC5dDwVXSufWN9rgUT%2B8UjcLfjXr7dWAKdW2w9FpuXEAzaik9dQo5eBov9KNlqbUGoihVbVEU61ikRWLck4ynz%2BLB8nybjiahXvNf8c%2FfCgforDgveFSDPxkBxbifqMGb9L66VTcAq8sM%2FpmLJcYg4c70vejIOYo8y6FSkmhWQ9G8wYUNDVCYGKVTVRQO4ucgike0QQ7K%2B2pdApHoCTkDdGD0rLcCUJ%2F7EM4jGcdw%2BYO3Ak9UYhtQiBhBEzDm08rJBjqkAT61P4s5bVtNSmKyaBoxJH66Tj5gTGwftkaCWa5SAtQqZoNLPOmwoR6gWEtY7llV7Z2%2FBZ6PRf0b%2FgpMCe4p%2Fidww5bGbgzex6MCsrssDJKzINaRxciP09sf6BgSnN%2BOS5gWvUpCcYEW9GLMvRonwOyXcAE4Gn9H%2BU7EqEjtE2beuKP7VzfDzUsR%2B01fQ%2B6ImAHId3HtY6Y2JFCYc76B8if1%2Fvzf&X-Amz-Signature=94826c2ac397c5c3bcd88c56ba1b039a4a6df3777745be9e86949f59519f8427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

