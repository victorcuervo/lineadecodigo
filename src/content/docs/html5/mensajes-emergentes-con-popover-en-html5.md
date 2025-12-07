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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KTYA74T%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqLmnVvVsHZ6AR%2FjVMfKNyDSTfPC6LfeXGCPl1VaqxSwIhANDwB0rSOC%2BPv%2BI77FajUEjdPAHox9yknO%2BU5ECpM6E6KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDVc862dVf5%2BqydKcq3AOzuVxWszcTx26360Siej6wpqrU4ajPPfCJBgmHmepDktiSH5i2yy4gREfOlJAlEk%2BVItssbb1p6eHbxMs6hjI%2B9IbXafLM953wJaQH81%2BQUmBCreMAL7y%2BaBZwz65cOd0Yn0%2F2qqSC%2FmHnQ9UqgM54uGwVtTzGEYHy57%2FX1DAE%2BPdk9es4D%2FSXbzqM3G33wjD3AfWvxARSq9knKgSpN0U%2Bk421WB43QTM6knMd%2FxOroyK0fZ55kcl8koiiJJQ0zWeanMx5aNhgNxVUjVBgl0b7sU2Hmr947wwnXMdvYRyMecDrTOzFTv0yKJ5FExLm%2FjoWZOeyPo0dRNM5er95N3UzaSFOoURHPkOIeCOQs2%2FwBNZLTOdJ8se%2F9EXxAgxzLEHXVGAEqNW%2BIGvCOTz2UuiDHCBKLbcxbH9Jl9HUK4kEr9BuVap1sRwZDKVxAzQv2RX4BvippFxqK%2F0Octp0Eg91%2BCsLUHS4cD%2BFFr6XVPtqbCOds4STQ%2BBLKdSoYYA2Ma83jwoylg2xnCRRpxMLst9oBVuh4M%2Fz7bgLJiZYZENgTJ2hl15PCTi%2Biutg7AgYt%2B%2FT6%2BFO7uFexzY2DUQlnTINe80X6knq00k%2FTB9xDcL8r50VAmzgHXskE3uZvTCAm9XJBjqkAYd1YQSuGFBNUTaA7tFmta%2BrX1eE1jPvGzL16eyMGzlvyiESVJQ0COeIRSotqnMT0ORLsHBpWG18ZqjUuMdzEkOZfpf45EyPVBRVOzDskZYx8jYFBLmsrWBpUYLPVsnCftWNMp4im0UaHVEwCF%2FhWB4DuFAU9EziHcQCdaHCZrRIphhm13teJHXjIGcMWP7uv6vZZP2ZBXZqBOiXebrAwNOk%2B1VF&X-Amz-Signature=ad9c19f2d678ddb67803c1cdb7a8d94cb7cdda2fc4dc605da7fda1db93075e0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NXV33VK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxGqfNSlXo3w56K6UncWl2OAxm7Q3jae20%2FmNGhJ4gWAIhAIuuJsr8tpRfW7MpFPG3i2oo9h3MLVaP2RxkuBkGIr6dKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM5upNGAZwbWgagu0q3AO6ZDgVFTi3JJ4BkQYh3eLoNNUGjHM%2Fp7aPngi%2FGgkX3gtk3ZUdjrinmtjOG5DJ6Mad%2Btnuj40nbxOAdgGstgqIIBxWr3OS7LfcWwyNQTJMvSkBgCteRpq4cS1ip1FuHBuU3JeItFajq5tHoR4udgUraqIcEKDrk1V5PlP8TU5n55S3AXr5xHXGEXSkX8cIqjUPusNh%2FmOuVDBFHHKu3zcwI63V8T55UkkQ3e5p5xxoWFBnfpamIs4v82Npb3bSfQInjC4hGKRR9isZb6S3CcFaYb1iSENLIgRzf7phr4%2BMuWwqnxxq5tpn%2Bw2tiUpB7hjepRFZrf4kFw6CiI2MgWfztPVUKjz5aRB4B2ED0687jJXlXg3%2BvVI4TBa3mYHmdXQH4QZd0BF1coqc%2F8kwERSZyIckFNE3xoiGmocHX%2B8kKGf8SDwRQwp8uDFixEYQBTdrjLrqqHgbQ1OY0Uw3NCyE94W2XqhcBFwdyz1vfOzXq3cpXI9CWslJJltvi2HI6buJ4f4ZPbNHoMiJcUjWfS9eijRsbrPyc7IF6pWIBUaCs%2BFE%2Bb7NCEi2WvOdb%2BZL%2B8z3U5zv%2B%2B%2FyMHHb2ezxeX4T5tPFfnolUAqCoXadV%2FGAhZ6Q5Sx%2Ff0jL%2BS%2FgHjD7mdXJBjqkAdKC6hQtnroFhAgpNbhB6u%2F%2BjUgVW%2Fe3WTCQg1Ox00W257t4msBU5FYnQUFHRJ%2BpVFl0cPtP7UkQQMCjaWDrrl%2Fs%2Fp3uGpz20DhBQibRsQr%2F5DJu1iy9fHlzw5i%2F2eYoEUtFfbmj4P6ANLV0Hw8vZ2nzvzc6JZGJ9R0Ai3kIr%2FS06qS%2BOTv7pq7ac2WBhIX9vbJRzbxJLXHztLyedYJpn97FOswJ&X-Amz-Signature=95b6c37626187f117679843ae006769da72574d10bc75eb7e6d699952b2a6b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

