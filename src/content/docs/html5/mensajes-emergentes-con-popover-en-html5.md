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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UELIZVVU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T222443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFktCsOI4CACnPWhK2wbaL93EdO6ZUd8DiZerBcnukZOAiAaOyM3FGKVIabsh00TRjqa5i1Jrfg1pMcOUn0EfHy4Iyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM37Z6V34u9ytanme%2BKtwDyE9kGcrdNJKGgZ%2BQ%2BXlm7x9sLMCp16ji1KNAsGktX9YpriFwTKUJ54zj78SLW5S1dxB2%2FsvWW%2BOYYQwxKZG6ekVxWijE%2BKh%2FxzTLd0jvmbTvEARD2ymPCgP5OORyuKIU3wIjhSsOEooEBEFi%2BzVI5%2FoGYK6MmxBjLea0vGFjaEd%2B%2FMnThuqGQU0MycWtOztSH3l7c6guIRe9sFCWryydZ5D1AE0e794R5H56GgETHA%2FV6gDnzl1OFq%2BWPbNO7yETD9oDDXw7jba87ILUtpoA1IgH2lY6DF9Iqc2tL3cW%2BNnQhDTScju57fxFta%2BNhHbAO%2Flmdnj3zK4ojeOWkwT4kTybAbsYxNaRqi%2BowRO2Y2uWfD%2BJmI%2BuyE61FxZQ9XA7JduIYN1l91V7NP5JPc9hgJ5w42LGXzFDAXFMqIn5WNf9OSdsjIhy%2Bwnx2VViYpA30xakx4E3drdXbmlKRRTZ7muYsJWILIbbLn6OrzT6bz1f%2BANzNy83sIBk5n4UDGYHd1j%2Bxilusmqx4HVOQ5%2B8sYgSLdq3YF1Rtyd%2Fs5ZDIxAND7O76Zl%2BRKwEx6KgC%2BHx0yubd1a82%2BlCsxFtoKI%2FETVFtpS5IXh%2BuY6NiFy9f0DZhd1ItmhexziaTI0wp4jNyQY6pgFxrht%2BoTvQ%2FS5APl8eGHIA7%2F6PKfTDNAr9kJhtuFsZMVADKQBs7h2oyxvtejVmEc700Mq0DDxDim1lo7lko2KfTJ4hm5ZTHwoqBw8p5pCyFAs%2BOsMTgRRbMGTsc7M5vHWPBrAIYBz51ABdlFO5KnivzN%2BIdlV1nt%2BaTcG%2FQWtZ1TqB7sSYIIJhjeywNsV2z10zxkqk6rOyPh9u%2FaAqRcLIM9R6bLFv&X-Amz-Signature=6d708aeefe2a66a7cdbd395994fa843386f0b0b2254a71fd39d7bf4d3246a8c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUDRB46U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T222443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWLfPhSO%2F8EkBDBIfA1PVyg1Hjw6VBPodz6HNTfioVQgIhAIW8s7nfaxZUkM8JNEUuoz76KFo9hKX34cy9bC9uxizHKv8DCGYQABoMNjM3NDIzMTgzODA1Igyvz3GdgCZWDB%2B4tQ4q3APHGRvrRjUoIondGTVHZTlfeExAAN7hwePutwWiio0d7B0dzrOn7JCVG%2Fm0j%2BqoHk%2Fnrt%2BhWM1tcfC1J4Y17Ir2cimkSqd6e1DUyypp3a9tqt7jm99fDz%2FZFwtjTSfZX%2BAeuNb7RxfmmEUa2I73DkYobmSDgSLz4QksEBc8QipNTXpIitU5GglvKyVLxB83OX2A4q4VbRN%2B63Xq%2BPsAVpn7q3%2FGttPCDUir%2Bg2yjuzFM87UuK%2Fet3AMjJ5j3%2F1RbeuR6p7Zh67i6Dbyy%2BUCG5H%2BhpRWgdxPVgT%2FLPqV%2BT2CS970NnygdNfqB8Yb4tejW0QE0zO8YJTbE0JMrHDPqNRjdN%2FPS5FrOgvxXToNTxucN%2Ff4eaTmTk5Z3F8n3QaTwtvOIQ3G4v0eKO7pDylw4hCvGsZYm7L4y3sMixs%2B8Tav4PcbLY%2FzQhMLwPgLYSU9Tbv%2BRL1za9S29ZWcXlqYoxuZbpzM5aqNzTJhpXa8OkpJnkZTVX%2BbLMZW7UZkqPUTmFE5Jruo99uMiAyILlo564iotPtfo%2B%2F2wXRP7ji3qlAQF6r2nSZhQEN00ZLShRifUtxhz3vFe3%2FnmeP5pRg%2BYg3gYpcw%2B%2BABmUL0M7%2FipoB18FIguT2CXPTvTN%2BEDjDohs3JBjqkAeMgth%2BJKMUTD7aopOJHENtiVxTkaXAIhLjJRLq%2FMQpbC1JGQVgI5hT9w34sp2znHMjb%2FCIm85AgEVsSq9GMEdIokoHb9d1ANhEYHw4sqlgwVaDfZHSnr5fF%2Fh%2BAJZTN%2B8OPGq7ItSE24o%2B4xG4%2Bff8Kmh3l%2BTtEmI%2FVFKfHiLjzwl9Rcj966sLCsQiHQDNabdPYl4CucvQE7GkqGQ4mwjHPpKqd&X-Amz-Signature=1203aad846d159023d9bb9d7fc9797d0fab1804ffeb80f562c0125dd556d0e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

