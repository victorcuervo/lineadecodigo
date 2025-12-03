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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVK4KYGF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDDk%2F83cmbmwGC84eh%2FITUFOVaZQPCS%2F5CIBjUhqvqDJAIhAMQarExQETuLTDTCLuGajEkielsv5jkXzqDRs5OwtHExKv8DCC8QABoMNjM3NDIzMTgzODA1Igzq0LiclKL3Mu3rafoq3APOgeQvv%2BlLW16uEkp2b6nM%2Bw3Kk1sb7ue8LhfOxjrpetMoy%2BiYWJIhM2UtYc37cUfOHXy9Vcm8oAPUJH73ItALNPyApIoOE2XMQN%2FVU39sjb%2B6qfHnTt%2BP2GiIp%2FwpZoYmUOV%2BwoC568YGkJO%2Fvx2fDn7sCIT8rN1y4s7GOjs2nrNjpYoyC7q0mDoW%2BZ2pTiOvS9Emz80dQ1LVNx8FpMsOtd5usfM%2BQMIFA5VfOVqCnakibsIEu7aKuJ3i9eJLXzyGJ5BA6b78SiqYuf0GwIjaxz17YcsXPNACty1mZ%2B8h4OFUBYxMmgJWbr1X4leDjefEAjOXrVIEOP3NcpMAWtyd5FeYNwzf22Nnx8XM9Ai2dR9eMsAzIu0P%2FkI7n67nKKve15UTqRBkT%2F4c%2F3VoQf505igwzOWpRvNQezC2QfV71RsfKaj5wM35PXM%2Fyl0bNDXTA1zqc3wNRKk5TjuKmKf8wORZQ2SpMnVnmsfd1eHnVdIjAFhjKfk4mETp6OSQeoJK%2F9oMjRewodPg1e3EPWzeofN76frZte6tlIPl6mTXQdjn26UE7M%2FS3PRC3vviG70HFxAhFEi769mN%2B6y5bEnAyUUA%2BlYuRs10OMyrnExiVWPK1jR9kvG3jrOLZzC3h8HJBjqkAQmuqnfZmIWIfgI5QdM0XeI9yINGjvnKzIinLJjWZAmAUTWougwma6l0ePbLsMZQAGGL%2FhftYATgGPkfuIxFnP%2FWCIMpWKvoizU%2FUBdPRqT7%2Bxde%2BZVxIHap0XX%2BzBr%2FJpiA5sFfcb65uI7OIBfeQ54P6kB24UC3asMl2wY4TcNsM0%2BVR6Yn17u7ChhbkoJnDL7%2B5tN3UO%2BhoF7RhvKVYpKa%2FmYK&X-Amz-Signature=3c6880c105bf744bc5ce8717431b82fcddac5edb42864b2381d556068004068c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFNOKBH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIAKojSodrx%2F35CBbT8rk2aZl4HPtUHVZSxYkZvcHxVEqAiBYWp%2FoqKI8WQ2cQqKlaNZ0pSWuaKNvIVbAG6WZ8FBzqCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMlnQimHFD2n5aPFQVKtwDUZ6amaQASX2dfn9Mr67pFMZfsDLv3ZNHvpMr%2BQvNjx1Wzz3vcHVlglDs%2BbBPRGFmQyD5Cp1IVTC4jXbR9ELUZthnPwX3IIcmsahMCTaVxgWoO6%2BYatHvw1q8mrmnPZcjQ5iyQujy1zar6oJf4%2BKdJUy28fkv0jAa8p8U4b48CaQ8O3e%2BYLpkQFYAMx5tRb7Bh1ayYMtc7e7LQosvV9l%2FM9idFnPBVBqQCvSJ01f9hUNX8hJP%2FqPuyFBY0zjl%2FvYlN6YZEEJjfYQvI5AJxMDxZk0mrQUEPUBs4gFkCphG1c1cQ06rE82iZBNFrkmX04FWTJ1TWDfyTMzvanNxvAfNxDZOh8KmRDyM0wyZ6OtIphg4Le6eHymqgs%2BLh5XLflYd8qyO%2F8gmF5QfBvsiuFonB1vHoKk%2BokaOGzmC7Ez9%2FJ1vzgUvzo6LHf1IoS9ck4p9SWwY6gnCxACi8sYDNozwubcy1NGztf%2F65Cn3XRH6zG41RVVSKD0zmLjHrSzgYt%2BdAAZdVpP%2Fem77ED0aP1nTq28yZuvFGw%2B7vSYo54fQllrs901sgprYioycJtZ9J8S2k0mVKA0njl2Y1qSPkkFSR3ODhxCE6X1qSn7FgO2jMaIycr1eCddzmWEUW28wqofByQY6pgGU0JOXDU9M8syBJd6nEWU1D6AXucC5v8ECngjMaD1Zi9dRZ%2Fv4M8XKSq5cALY7BLTLP9tO65T%2BdvWK9dXDBx4aDIAk733Mm7BxOXxHB07vIkC054aY9PsLbEDrYmEyWF8TY5a5PqjiBz1zb4%2FHOaVQRXJ2EKsaGtoLBVZX%2By9mroIUfHWxvF4Ag2TUJujs5EOLBtw8xsBMZEBYLa0ZIw1mEwSiIRgi&X-Amz-Signature=4f08b59dea64aa4d7d5f245bd44bb0a7cb3977e44be070504f74bcc2dd2e7b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

