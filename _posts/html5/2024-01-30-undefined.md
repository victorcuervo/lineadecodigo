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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RW253IR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIFsVBPeiarzcn%2Fefbet0%2BA070parvKZYpBdvogy2P%2B3FAiA1l66ua0yspUFGOykEjmDW%2B6zve6g2BRzZuqaiqr0Vmyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMmFlEMnEMbPOZ55gPKtwDl8HzctyqIKckm6EJcUXufK2maSVSJMNkYVGP3IUUJ5Fk0TTcAe%2By2Jdnqdzyih5eDstkWXjgxL7T9enrjzRDt%2Fzj%2Bg1JN5H%2BA0Y5esolg%2BYDJ04ZeieFLGh0heBOfHEXHpu67EsdHc1yE9x9RWyMe60jvoAj5kM98FX746gPH51xXxk8NwI0k%2BPbv4AfZiZw07%2FLN0qjNfV1sm5vemJiIJP%2BtYBXXnv1DqMf1aThB%2FBdg%2F%2FEa1BQr8SseScOnuO%2FFNizghNPx64aiTYcqqE2MVGid%2FLtp11h%2BHlZ5us0nOP0hYexPrxUUbdQXllR9RWvsNUjK2lAzZhxhhIP1TO%2BJjddlK5l7MEcPJ1kLi72dzuslBcjA27h%2FpdFDkvKUCUpizzTUh2s5OqyyO4ZVFnO232QwS40RxutkZH82QvaPT%2BS8ZFn8YjFXSwoQYe%2F8pdQfVf%2BWzACjMOduy0166jTKFgBq6K6zJT7qxq5bP7HNriPmz0E9af6StexnQM3hy7GCUgSMjKxzhg3WiKLmRxBgaWsAeGDrouMplL3BvYXd%2FKEqi2PFWXl44mVqqVyc68xYzl0%2B3hzU5uGfy1x0gvpzOZgOTS8gLOFxtWxH7Jr1QSLKyUlwAJ6zDgMmL0wo7q%2FyQY6pgEGgEpA%2Be7i48%2F4fPKu4JFJsD6zzHaCa2%2B%2BcYInEkgg%2BB4I5S1KGRC%2B6REBQfsHMOojPLYBHIFGbJvi1xIEvuohBRkIOrXBFUnCmEiytjRN%2FkroGdqJ80eLUZNdUXpCxfrrL3myS9DrBvYoa6bgVDtNpoGP1HNqL1WFdHgWxO5IaD0odYrC6lQFAoYUJrKNd3jL6MoRLGrsw2uAd3QM86ENfg1KucSi&X-Amz-Signature=fd6f5d00ca3984f1e0df1788560fce6646ba975d204b46004df7708da9698b44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUETXCXJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCMaLKIKuj672A4LKTVt9fH8xOWQjGFu0FgTV2E2vvICwIhAOLM4XBQZpac9xwRbgtN2O3IYjlTZrrU7neKMInIPukkKv8DCCgQABoMNjM3NDIzMTgzODA1IgxeIwDz4qrPdiO2Ub8q3AMrhrsGgyLHJW1ybawlQKsZ1mu8gV4jJBlNyB0%2BlZYkXPR1QRmBoi1C5G50psOaWeOSIxAFKrFMFuMrgX%2BNeHkVqSg2bWcKaq5GszbfMgGc7PBagcAq%2FqQup5SLWtRnKHmQPbV0BEyFrOSIhFlaFYObvoAqXoxlYzPTOx65WOMQNSsVtK%2BvTwttOnShcFegTDm7Vh5sKzT7BJduduxAoXtUl%2FWSb8zx99l9XejKWcDg31jWV8k%2BUCVi%2BhtwF%2BS3qxcHWLR1RQr2eyF1fngqRXpgnv%2BC9UxJfcszmJNr4hbsQpHHPQ6HmjivWK%2B%2F%2F1Ah235W9z61kAZB1HLNGFaB8uKyCTqNWR1hE75Ky4EllTU5ymhCj7Nm0c208V52q0a26eEyFpo8mffegYWyMD0nqdCzHya1fDTpFN7CiXgLRhQR0ji7LnMBJJLatz0IuvnwR77SAaFhU0cE4bP2JigDJwY2901obHA9%2BGmQRVI81yPIx3EKjT9STxNpsBEyPRVfgX%2BMnT5R1geVD9qss9ALYY41U5B1WcdBHOoqBJ7oC4aFWElkDSPC5%2BE4%2B5SSlmJQiolIhqvp8DSoCQl91XsOWTbQWwGZM1Ik8Y6UNEZq4dwlpSnlegTzTkxcbbVJQjDSuL%2FJBjqkATJyTGykcY9bYFBh1wOyzphnUmpnuq9oKhJyBEcLf%2FKus9InVqvICPhnLNF%2F9c%2FPGjaHHNcHty1Pl22SdmrAJzwHUpMSGzTTeyo0S55Xxu2wwN3tNMZWVpW3%2Fe7GTxvD3qeUre8aDdBWXI%2BWMpxjdDxE71Q1amp8iwjEkhOFsC4H6eRknzEJaAC77lAuW%2BCXJKNignqKQTv%2Fs0OUwBe%2Bpdw6xgQ0&X-Amz-Signature=c985a2510c4beff9f9f0858534e6c3274f75d6bcf649885f8560651dfa8dd35e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

