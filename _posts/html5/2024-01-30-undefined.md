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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PVJN722%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T041502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDqO9xlfYuWgBPP7rxckDwXApWUbK2IKfaBYbp8ls6Y8QIhAKDNfKldHz%2F%2FBFiFqVdLkKnhu950ZBU7bltWsz6NeEQoKv8DCCIQABoMNjM3NDIzMTgzODA1IgwY60BuC5jyWT0NviUq3AOBPDW97tsM9tJyKkm27uMSNZexiyWE%2BAgvnN8wnzyOnmsSnxvW3AfM7MPcLTn%2FNKKZK3LKkCLBe%2FIoS2zGSiFLwhe66Y8NrmLQD7z%2BGIt9SXCCMTrOtVs7e7NV%2FBzENA08gUwbPNFSx8ibORmLbIXLBG4xdtQb66uZeVGQa6xP%2F1OoHTS2Eka90RdS2LtLrv1npTDEjBGc3NRmhRQtyTKqbuvG3JaKhnZmtTNT%2FoGg0P1m3svaFlauZuievUHSr%2BzT3xKdoK2BTYhAV4xSX1O%2BT6uFqzytv5SKSxeRYeKRNBvdur6Bhg6U9pfacbnDjtG1dpbugZlLnL2X770QYr517nj2Wr%2B2Nan1eIuB8FIUQexRP2kzHhZea30jAYdxnLMLLqAMqF0Mmcx6Az2wmKxDIDkykenQFb%2B1m8MfrVAzlSRd7r7p4QTQJSeZqKXi1FldyxyEtuf5Xo%2FRIPyX3%2FQxhopRs%2B0jpggYcndQS613oXMqtPM9mncj7M%2BPpVgEW5X2sFK4uk7%2F4X57Fz5hwmnLO3maPj5uurFgFTsySw%2Bqdw7C7OVlAFDIPiw%2Fne2h%2BNsh7XvDSAZZMpPWQ209mZAIm%2FlDIzvvKgNNy7aQ4BAGpDD41BxLmdNK69KhNjDZlb7JBjqkASPivL46lHVvSZWtuXmunXZ8ws8s1m%2F915OcnAkl%2BTJYXz9jtMceswol57V0Fl38Rlxg4jFMsqvSM8fBFZikIQ4MedKbJuJNGbaEYBO44dpCNJ35qdx7BZjwaTOq7CQj4u1fk28YtdiZn7oZGq2XtIHdE8wdfxhOFCNpgZrJzB8Pv7UcGGEd1Fx4WHPjEEewpwF7gwWPvbrRjnn9H2aFcmRcCkNM&X-Amz-Signature=b711ecab996b9f1b18ceb18afbb9ecfd1e553c56215c9b3280dd87df74d1cbef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NIZI5HP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T041502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDThAMOtRKzZBvTY%2FXTzGxKiVTjpvF79z2XgIq8wskPhAiBVMsMaRcGL09v%2FyO%2FBRvyT%2BQqv1JH4W2%2BAH3bCfKdj%2Fir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMGQOgQ5sZbiyPXth3KtwD9yDBa8en5gQp7vK9ypS%2FIDFC0XHBDKIlDxHwpsXHb74CVb82dvOLXSlzSNVAZ89X%2BPSJrETJkP3izxItC55CUhrXjUcAKCgamayI%2BNrV6LAT6mpD3AXUyUlVE4iw3NyyIHyr%2FVjrqsFEzF7XFctePo9rv9zFMvrt%2B8HI0e%2Fd9xaS%2FHEf3tqSXPyNBGBm7oThF0ZYz2u2Nt94uKGxN3yNwWkjyISlPU4PgfMNzVL0mLqRVlJl0DNWOeLuWJgBACfMP78Ri5KS5tvrN3DhTM6CToycMKdignTF2097pBhrsJoA9CH6ltyiuOK7S75IVYECbnGis5CRQQ7zzACHZUaJw%2BcT77RYOu%2FAecIGGr0KxtiGKIRclJ5EYZ64g7%2BrhGeq3GiYS09KoHCxyn%2B8ar5GGR1parZ8VqWucebThJLlqIHxNO7uxxGAdt%2Br63rqSfEymW7Q6QSEFWtaq2XsvBDxTIX1rfNlxvWukbhhCgOibnAcD4FjUfx117dfXMmasKUqHAXI0TkIfBN285tg2d%2B8T2ug0RbblT2TYl2BnMZh6e5vySxF8%2BfPfZEUBYzOpgAxAQVpunKg3aRoeP5gBIrS4DnSeLNubyTFkNibVLgoXWp8K%2FxNKAvTX%2F%2BjjI0wzJa%2ByQY6pgHA%2BSgoCqJZ3sVS9c3QRIFs6ZPZ7HLb4m9URYkhOzrgTU%2BYQcIzbpMGREoV2a0IhhpReCRO8Zpb0R7nXhKzLvFqh7JAzlQ0PL1n1TS02pnygiE6kdGKCpS3IXVQZMnBh%2F4zGyf0qANCkYgsiiRSpvxVoOQrH2O8r%2F%2Bc%2FXoNKuJGDgGHiRLqeR7pPshctJsvCfwsNZWPB%2BPdc1eqX4GyKZkSqtyqlVHx&X-Amz-Signature=914db0ec6fd78081ba2bbb1764e904b05edd2e7a05d10632af960dfc3d07f662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

