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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IMDEBP5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T111942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCf4EXZ8J7KizWIYyds%2FSPkdqD3BhqI6xGUt2TMNC7XkQIgLtH1MMiYPm8I%2BdQh6jaf4RYHPP1Pw7Xp%2FmhQ8enHaW0q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDG6rxc8qQr0S26sp3ircAx4VgTPtyRMBqKAvY6E6zlS6IueKNR7VBC8qrXJjLudff9SZ8hOCJhYHaCP2iylxxoHe4r7XjzCBnxb5EQc21ck6xuN%2BST7r5gX%2Fgh%2FITqHTQmbkas9z7Nfjf2bR34xbtgGyO2zuiPH3KNpQWSE%2FS9DyHbx2I841oUlRwQwOp98sFhTmu6q6kzcLvx1LmPXxnwpJ9Hy971T0D%2BaAcrS0IRUykg4M2TMbfs91lScARwQ52w63M4EUiN02ssOwu8XHsV8jbp5bw%2B6Jn%2Fr6aPstodx7utdw0aE4Q2m7u%2FeRsiOTN4t0k8irlcK47myl7vlb%2BzchUXWQ7esFwbQdjGLAiUmgBlPFvExFXyyOtf1vLooHeg5ZnfXCg%2FMKbMO5xA5x8jPFs5K0XbyESZpeLJxzuDfBvmdbNIJz5uTXXZjZ2sfDySBlE6lTOvl42gokJKk1nmCPoKRemrfsB5N6cClh%2BHlEsk91Omz5Bcq1FCozq2ayVtTG1e2jGAhxLcKZmpCPAuIk1crBvSfhM0BrAcEIfwFErxoBucklgiW6qE3geNcv%2Fni1ydBA9KwdLr%2FfvBLLi5Er%2BlAkLi4y%2B5VzenjWjHU5Aqo7MrZB6EmsFBqamwapHYDOZErGTQ4UX%2F1lMPGuwMkGOqUB4ncjfQ4K5xwSrI5AEBvSVY8OfZ8VEN8esM160JyAUnWyhK1PisosOZfS5Einga0IWMKF1jAqElMIYC1zt3a9yXbHKE6NHbYFjggt3wIk%2FQzr5yqahom0Bt0VMxKI12yJgUilAlZzjo3bKkR2khVg5L%2FOXF15mO2hoflSIf5QozQBw66aObLrC9e7fILmGogVqj%2FE6h6hEuivoyx%2FwXAyOKiYWyL%2B&X-Amz-Signature=14b7bda8d0f7a3372f18aad3810f492520eb7f2f9fa6b086749e223d88f012b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWKCCR5M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T111942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDD6SyDoKbp0YzEzit6o7O%2FwYwM6Nnnca01Q6qquJ7hjAIgSgbrUFOrYyFA4wLZ1VGU7nxA5R6cfcp0AAOe53Z9YHQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMRUTdcfUBCS2FF6EyrcA8RAylKTvHbYg1U8lAP6k8D5wFxrhhsKcgq6X%2FtVbJ8Ww1J7QMyoBxdkoDTfpKVPU8bMdRl%2BalSNthORtjp485iDE1tDNv0SVKZP0N7GqCQt8GOdX3WSFeEmQghG%2FiRV9KSfyq5%2FHZIkjdHhGuqHl9unA7mGZ0XfD89raLH9fDSwqdnlOahR%2Bx6Vj0z8RCVfEoL5xUzD%2FXWjR2MDQqOsnRmWOgKIBBt0WvwURNJC7%2FZDC%2BaLgXyu3izAL6%2FLv7SBWmP%2Bs%2BlIAavEhsqEVl1yhRiTpAjaM2rTFbMVXVhaj2dHWjM7reXUF4Xd6WF0KprONa3z3oZZYGB%2BaQx1iGG5a%2B7VaP1%2F4WKNTkVewCoiqNtEpQHh10wlZc6ZKF6K8YterKP88FQGjzTG6o41r5Dla3hAmxdH%2BO%2F1DILhd76EwfqWfmITvxiUqXKmlW38ehMV%2FjWsINr0W4YNQDXeBT8V21HLcJEF0j806vF7auSyXd6Mz0DJwV16RhBafDGZgjWKu%2F54TH5LMSvse%2F%2B1l0aDeHJ0NROeMKcPufqJtJBEXgrsos7XDNZmliJs%2BURO%2FPmQ87%2B0Zqv9orN%2FsNN9opx2tS%2FeiTuNqv4p3cSoj81oAC8WUdwQ8VlL7vPXpPLUMPeuwMkGOqUBdBpPXo28BNal1XSTS3ex3gr9REgzyM8puXEMi1gJfsYsFCfcnE%2FlAWve6XLCcGHp4zL5G2cbVPDV2TOxHOxpMOFjNLi%2FQwmV3NlOnSfhbMsIL2jLeCXzZhDSg22E2IL%2F6SRy8XizUTxOsPSZPs4LrP5inqrOSz3wQLq8u1Jix4LZ%2BD%2BbyvwM4BfbJ9KM9UXhUOpkW6s%2B4u3nQq6ouBF9btLCu1rI&X-Amz-Signature=cc640b3c8ddb57575beeeb09ed77b31cdc734c6784584f37802767a053df1d0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

