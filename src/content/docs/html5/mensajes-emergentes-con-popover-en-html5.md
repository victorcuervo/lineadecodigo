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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEIXPGFU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXshyC0dwu7YlUfb3hWDiXH1x2W0a4%2BalMt8fzOn%2F4HAIhAPnJ6%2B3YmV%2FnqVkutwb4yn%2BsYKOqKBpw4wqClDakqT5ZKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDDc3V7%2BZWY87DcEEq3ANfe26DIkARp09MoJ9jrJx%2FMsttzm5ZpqxgoJjxyWytV5xMkdwmU76Sr1V61UtWE3D9KAW3uUaqvxNFg25FscTrWNiR9LgDkpGN6JugwSZuqcCZ9RKChIMLlgJvev4AWWEeJGUpT%2FZU44K%2FjQqW7%2BH3XjKObREYwuj6dir7PFT%2Bk3nl68xrFdwrrG59y6S9h1HcixlTFdpudVx%2FL%2FWpWUQ4gpZi9d5cPn5UdGARTeCYZEk1iap8ITdVzclOAbf8ovoQQFdTb0pCM4qzvj%2F4ca3fE3aOGGLdBDl6kpFTBqnV9ZEdjuuUgqff4JHUJK2iADWMQ%2FFhDj%2FGJQ8X%2FotEk%2FHeKEXN16j2ojQl3IYs34vbPYKT8sUO3TJ9VTpVchFo%2FORSJpdnZa2lVCNknm7Z7ByUgQiM1cO3C0cjOzomVGwqn9AsUMcRoWY9jIZvn3BJDHdhnAYmppz%2B6L%2BhyAtc6h2zE3a%2Fg%2F31V1V0PeioGjGezjYG2MzJSTJpDAliPYtHcmjsxBFl5HnXcg1Zd5mF%2BkpGk2PRgGl7pOYBDtdJAQZ51lo1LtKguCqAxn26iJz%2BG2HUYIRUfxEJ7Gvxjj%2Bia2OkOwbW5BoMleiL2hg4mVR32U4FgEup5TfQei%2BSRTDFyd7JBjqkAYxbkiqEUw5wZ%2BsB0Ze%2BPhif8vzSyXlB219poA%2FhoG2h5%2BwKwYu5BqpBfpS9c0ZrffsrEMJyDFxpx8aUDCBNGdTYPnNg9eny0CVXW4r4R%2F8rAsAOI8pLYqTmZT60tDHGLXLbJ1vYlXyXQsiSBdBG66bVLgWZm4hZMLtEGZxGQlhOWWaMikfYMTRBOi66Fgc4wg80dimgUPZPTo6lNTz4QWVY51f7&X-Amz-Signature=309c1d7460f908a2ce156257fcd295c8765cd934907602ed523a6087816ce07d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKPR35EM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpnkyxzWKvmFL50%2FD2crOMTIceEI1HVyo%2BM%2Fmqj%2BqeAAIhAML4WXXqoNl02ECA2I5LEMBVTwuiO1ut2nBRMsKVG9J6KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqZQ%2Ffk%2B5Yz4RcRyQq3AM8UABvWmx6DALtLnQsMHpulvZgoi2Ybx0%2BYgvxYjKj%2BapVlxnv3st03gbaJ2vByXn7Zt7%2B526olZQSSC3wAnw%2F4rE6DRPtfniinrAFgFrP2sOhndn34T3K2wPig5Yo523hA7SjwNS5kAKmRxqMrHqeKI1GZPAWUM%2FVDK%2B3xHAFWI1aQPpganu69DRp%2FCAThzaE7SmcD3Qts1GO1TYfbQ%2BCE4GNuMpe55VXgbdvsIPhpL2ouk%2Bdx5EPwVgjvIPZGkkqfMCw2k7RX0zm7e7knbtSFBQJ7qYevEW9HNDxyiyB%2FcIjsnz7cAD2OCHkrP%2BnvxE%2F6B92y%2FdMWTJKXaAET7xChnW8x%2BMBBF3mU0UfYA3a82Y4mnGM3MPFSbzio%2F4WxaKPEJt9TxWNx9cwwhgR2VltIjnFcYb0mRFyZURwVcjOQiofjxBTE5vlCkJqOcvtfR7gYMju%2FvEObhuQg1E%2FRfB6Jq2sF4%2BM4SlCmN%2B197GfLsXHSTmdEoaBopeYtuxiunZzOTboSdsqAz6auMMS4h%2FF1b7ybsrFDWBnl9yyqurwD6WkJlCaUTkV7%2FeLOZUhcIpal27Q32Ax3UFPwGgzVAkBBKJUx6Z5B1H4xyE8GkcRtoKBMEYUswWdZBF9GzDEyd7JBjqkAaeZx%2BgJ5mwmS4bXzQXRfADC5iRa4ruaOFpwryiDOOo%2Bg1KUY%2BLQepX5k1Bin2WD7IYkDFaiuVm%2FVf9Uglvrh75ka16uxoPNQJGyzaYqYR0NacUaNlxXBH834smKWy67xDYc26bZQNNgEkJ9bdsWDSVQVxSmLn6dPo9gV9mkPtvZnFbLdlj75p9L2jDGOHM9UEHb8LA9sGRKBpnsgH8zwy2i9rLo&X-Amz-Signature=2c682dace66f250f179ea7d4a0c8db9f22babf3a86ad03a672b340b1bd2d3276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

