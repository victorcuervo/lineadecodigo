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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656OG73EB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQGdmh0Cnon0apgwHBvvXqaw7OgzD1uo5266mh7Gh56gIgF7iDWNYryIQ%2BWCGVz%2F7eiL6%2BNLfh5G5MpEd7sJcwgm4qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR6jjCJKi9WDUy8wSrcA%2Bv8vY16lAiUCQ8PoyaWcSPKUMn3p3TOFhAarxiYEtHmeFDjYq0NKbmaWP2NQemOrJQbdLDF0b%2FYgk2Y%2FzXpndp3UflyYwYqmDydNR0GfP4qiY6eoJYk2lFF5zWEW%2FiogY0DgMl9rU1tjOvyhqFpEqygqDCD0v%2Fk5F4vBLW8ZdjXuUqfTOQV8aklbQ5w1Vl0GrpRbWu8MnSP3X0gzyZQvI8H3YjJoDujKczkgY2bYEnQ3eOyjP%2F%2FKITgcvusyQc3dlWrsUKMlkny10vK1qNKyhLWFB2MfEzAtDuXcdn7NY8fyx6QC7kFeabtm7ppycKnC9hahp98NfDC242lg%2BR7duzFyCIQLAS%2BCor0qCs2qqmzDjXJE4ltr3GXSsh%2B5hm8Ej%2BTGShZa8cERLwKgC%2B5p%2Boaa8fqzWy4gGqPTl3muUgLzpK793zxYex85G90bBYmMFh6fUobwkLUm9%2BZll2FK0AHvI%2Fgm1%2BLB8%2B4RYkFp1N5iMmr9EPAdtzOsJAu%2B9BYCwrr6XU46zwmQAt90u0%2B6qfZsPByMT%2F7GZYKGH909WLZI3w6lhVu98cCIS64lnLKBGMwBfnDerCo2BGKZzokh6J3evphgd9ZtdeMnTSBb9BAGUld5RTSkFr%2BEeAyMMzk28kGOqUBn0xIVFfNFXgAmnnRYEs94Qbmls%2FsX74HEryAHbj5YpxsedFSkZ3qZOC9mvNANdc6ogIMDlxRKaazrGe9yvc7lhk%2Buli1T%2BOTP9iSWmoUxTlvEETDjj08JZ455RAtdyf3w7Bel0HGjDgRLMDAYlWM7dkfaJHN%2B9%2Bl40f8F8wK3B%2BB4JAslJDGSNQ9qrSa3%2FUL1rPA3v%2FknPaCmofJ%2F3%2BaUah5JdvH&X-Amz-Signature=b125347642231675e440aa294625406a1d6fbd7d5562d16ffcef56bb3b567539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCVINE7S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICReCnHoS5uB%2BDZBWIsf%2Fsy%2BQHAO2w8Ntl1PIkJIMjUXAiB4C6hlu5sT15t0ulV9Y8s%2FNEs1g%2BMZ9rYL%2FZ0E60UmyiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmYwB8vkRicvEsQRZKtwDCT8rrs6DQ7mK6ZenIEvMTGji6Gbg%2BIbRNJPE9TJW0pqq9j2yuONvjIuOF5NA25M14dW%2FuHSNBeFTwtDfi4W71N9pSsEZaoF8%2FVBC8FZYuTdHc271ZjO8p5B7uRyJqf7rmDVh2nJGeBH7YXpGMcoU0mWaT0P956RnzcPYAlDeppjcW4Rm7jHnR0oRPosABlAZciyiKgI8pKSLTHJ4cG661DTXd9Ytqv5O4vCrsIvKFnjvenzm70oQVBNoCyq4QV%2BD24Sp8bqDl1EgFb0SuykuHeaLSZ9ccp4QtQNlkqAwdHPNGRjQfwfzOxeVDMc5zgctVv6gM32qoy55puN8vUAggDFUgKy6%2B6ZX3t0LnUtK7HgZCcloXbi3IzzGw%2F6UyCibykP3KGsQzxLTucQ02N5SWnkiIyEjTF2lhZ7ICPPYRF0wE0ud9kkrdYCv6QgnGhQhxz2nL60lhnluRfmfMtNUF58%2Bcf%2FOHfUqAYQTkKIxF3wZ6muebQf4%2BvintIrJVQmhqTgvBQmq2HjF8AQp5pDMHxQ8T7%2B2N2kB%2FQ%2F%2FcKkSG%2Fd4WupPnZikZLCG%2Fko9b17kKiRVz4N78aduOBgGdtyYXj6tKirP9aJp%2FAY%2BVV6UBSGumBjNxbYi0e%2BtkGwwsOTbyQY6pgHzC92fXxyGb23I%2BURiOEh5qpxae%2Bzi4IQJVR44uLnTi8UVXh12oKJbKfYHOOpEPEbfuiSa3em7PnnEDF59%2FvTE%2FH9lhDQFGl9bI%2F493Cjy5QlifDlgI1AS4LZRARS3X74w6F2K3HzWYU89Y%2FcLo%2BQr5LE6Xtged9pV45JYPhi63OdCEA9OdzqnCWVugB%2F7FN%2FeZ83HRH18uqkWist58diOMzIi3TJA&X-Amz-Signature=e8a5af37d052aa5625c9441be4f021c79fd56c8c26f21217adaec01954f51430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

