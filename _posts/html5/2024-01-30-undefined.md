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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SK76TBA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAxmc34Xmd2DY4EkhxEjMqthF21VjFqrJNycwJotYVmmAiEA4p4mytOlXaDgdYXBGA1s0ls9ThSvRAlE2AXb5M0NZp4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDPnx04VpRiIbZZP01yrcA5cdw%2FJ%2FmbnudP2%2BGaOnJLlsrzX0SmYS3%2B0Y4yxsJj7QozCj%2FsRO%2FqTyfTaVvJUZUkMaRaOa8%2B4FdBOUnNGq7AlrN2dA0xe9EgvEfvPosqbzt9vvJySGSZKyy%2FeN%2FpD7S%2BwK%2BjbHBjAZFcv3TPEqtPKX5agxUVDM1yF4mbvCXKA8R%2FoE1XsYQL33%2Be2AptlQxJ%2Fa7ylFdVcFqMrLc1JJzprMFKdFTF13p%2FWo2rfxLvj04Zx9VFn7sPfG5%2BNDLerHImtZ4Rtg4MUQ1ZfHO%2FExDM4VnmsdHUpdZjkQlgQa%2FEYtlT%2BDazzZSB2h3mg9bM3mSHbOvXdEKL7J%2Flxt7dXb4a%2FDvAGLV2aTT95bh%2F9nKO%2Bn%2BhBAhF5bDkRwQ4bcf5NE26DBgvU%2FjMWlm28jV0recUK3k6Q9FiybFfxuZOISJAdT6pYsCyDidmOoKled0JLOTnRI6NS9G5auCYYHitD2dSaNNIVCsoFyiQXSGJLcOIixQ0rr5agzst1JMzEBvUJn4mZtzqindgdtIztpG%2B%2FDdhvcwyAdvHfArqO1ysEHlmQdWyJZwxg5SNEzmM0rVXHOXZKuv24mjwgZA2%2BERrJFSanukWk20vrlBAfUw%2Fqza5aO1BYa7vhJsRc9yWuzMNiIwckGOqUB%2FGdaBMd%2BaUMkb76hUutymJKPqTyGGNRfcCyrL44lehyx1%2FkJt9cbrFZ6Rb%2BqSqXOjfhcqgyRIc4B84V39CBQe96rHditRXP5QBeZoXm1KYyYsJqwcEhC3z5H4gs1c88a73b5Ay6vAP0vCWACienZarVcL8PI9idrNEXnw%2BSfUYzIqpAeJ3m7WMf1MoeSEzQ5FBFW9omX1IOlOJ2Bk07tgGE88e6L&X-Amz-Signature=f669a45f59a94e97480211570f48c3c2650eaf2e05e4bea2764bf24dec535c88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQBV2DF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCICDfthEyqeoeleDEG%2FRhtyO5bmf2BAQoFnqciB7NlmfWAiEAkmkmZbTliwWnTd9XknapVxW%2FH%2FUn38tYN2YfrDI77B0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDECEE7LoSux8oLMQbircA6OrSivdQ0eelCDhbOlGLxn3X0o3cozMBHHZyYwxlMQlEtnjxQUCRbSaKtujXS4%2FvpglTBvvBxhvv7tu80vrhRLZpj3L3p2XfgPTozIKy7haXBfWoZY5GHBXV7zHzCoHEMa4tcubQzILlOgfioGB0leqjD5sItYchaFgM%2BggcZCaN1UAKYE744BhC9QZh9WQHY4ZSrNiiFeLnL%2BJBsCeiEsBU0nZf9ldenoiSxhYIbWraJs3nKLH34N3rgNpG576nEymzAnV8f%2F%2Fam7fd6un85luLMurXAxm8rvunbPzGUxXSQA0yruXbHfnvGb1zATJ9wTVTrVcE2Un3KpaeOsi3y3E79l8053cetf2n9v8k9uN7HAbUAB5yXHAi%2BUtM0ehnrM0FenBa61tRfsEqUSfegKEGlSxZrfrcyPQMUW04Nw5NKSP%2F9bxOWN48z7z6koViAP93h3X7IaU8Y3s4DDv%2BIukA4Pu41pHcApEGh%2FzyE7jeoeGEUOJfTXcPRo4VttCdlBLlbfeTm4HFB0oqhFfmC9DT5OsAWr5s8BVOnzc4iuDOyz5AUqxzzWTTGt%2Bv0Pvuvox0r8rk7CI%2FhTCy2%2BfjID3LhZDCNJrgwpBzxrLIm%2BXcg95fdogtQzlWsIZMJ%2BIwckGOqUBgnaeA0Th2VGxsIkXbvbyfDfh9GpIQMLmSeBI6Ke62IUwu9UJC6YrFHf7Jr%2F27qzofX%2Bi4jJUR1ONfnMz%2FddeUIZQSExNCflqenxszkuyPFe%2BvV%2FR%2FusCP18J5K3nNKyojbcx9LtGQEHwO9Ioq12pTez9jsZ%2Bd9Bk1dI9f3RewXEryFCpt4%2B8xqzZt74HVVAHE09cOOOQpxqIOEpFSFowoXGw22fi&X-Amz-Signature=414ec20d658ab8cb12c4a18e787d1f75d9c6c4fd83d185fff4da08a321e999f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

