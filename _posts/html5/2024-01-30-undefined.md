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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675BXHZIK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIDuMGt0ADgBS0vcx5k%2BTUpK7ouS47vuG9lmXwuwDnIIaAiBE4AWnhFDwijQlfiJgUPeKB9%2FElOn96V%2BT1sGKBsrnjSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMXK7CVP%2BlvxXvlENRKtwDmoHr0nX4jHUsmkLEvqHtv%2F5Bll3a4zi5mf9EI5G1FMINu4Pki7U8rc0LcyWhKuVCI7i%2FSNsptvT7I5zeYwhr9mgrEJmdM4191p6pGA4C%2Bf9bLpmNtW3%2BbV7eSG2ypK5yJqGjUqmyBguymfy24tn0efsj2mQ02oESd8FxKuG4KeF7aQYtsfeTw1JRKg3Gt4mPR6O%2BMHW%2FOFy5kx9kUJEBtDBb8RPnxOhw7JXouIQfJJI1YY1HT3ao9CIVxaSKpwbL2%2B%2F0q4KOb%2FmkEq6JP%2FAzACBqEIiI6aPWXf%2BFb%2BhmsUyLqEWdoFzW3ZbSTddnsAEkLgjHCRz%2FmrzEovtCbGnFDnyS%2Flu1AIt%2FXgpPxIxFRDlNWEY2rQ1fu36Y1Q%2FX2T4CejIpNdps3sipnMiIl3cFEhiUqMSjdaRQ2eMNQ8nV6BG4hte47%2BhNG4sDHEYCR6Zi3Wv80o%2FLMIq1E9HlxnbqMSu9gpGeZP07p78%2FIZDgkpB9ILLSdRkXWLgPpe3Ac3%2BIhi9ZUFpZOcyvTwaGxbLzuas1w7hL9POX4E3QQ%2FY2f6s3LjwDfL%2FpQSNOE06psbjbD%2BnMkoMVOHooz1hZ86Q%2BZ%2B1mqhsXdhazQeu6kTewu%2Bcwy5mwk87yoE5f4EswlsHByQY6pgHgMhFcvFubDHp91xibjXTA1DCsEOqjpsXfx4yJbtRpBibVKxFy%2ByBwqU4Wvu4LVxya5rFPvLEpz3FKuxn3X4%2FETcWDCFzc6qfIyg1MiVtQUzUJvLPCDPMvPWlx1YBfvXNk6N31BAupZ7%2BcspJjh8mLf%2BdfPBy600tBTopzWJTbP0Zz5%2FPlGAHNelFRNg8qpcosY11PknQfV1kCOL4vY2Ggrjl8sA2V&X-Amz-Signature=46ea69104dfff39496ceb32a1e48bc81527da91824fbe83d0b8265f0bb082402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5FZHOR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIDT6vCsJDhGHu6pEBTPq6CiVO9EgoBdaYVF%2Ba35MnbzvAiEAqoat4hBValUV0WJ7HDwqyXuGLGB8pybzbGsNllgtoCIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGhBWCqpsVct7g%2Fr1SrcAw13S54iypehqdYwLWlQftMbzoWV0kVjj2Ov8Ooruoas1OCysIAljOsmiIAIRTecAGuLRUWcC35kD7yy1nNATxTdLlv%2BvjIiaHmskqbPlZlEPOtShI4uA3VESOg3HOQxnG5%2FIRP2B8Ue%2BoRa4JwrVA%2FiloI919%2FCLaA7Q9g1PEUB9zIbr246v0neePcPu6XaeyyIt%2FMe2h5lNSw0oPxcR29scQhBKrwIbOLQCDTt4u46%2FehVz552%2FjORZhuNDW3EEGUV%2FR9niveRyW68soqM7Cf%2BiD1X451cNoOhL8f7F1yzX7FJKel2%2Bk%2BYkKVaVR9RLrYR7CP3vnC%2B2ES7d4vfgB1aHr7zlLM9cakGeBv9YdB5wiVEN4SopsVGUl5rSEm0viz3vJG3qDxhCkWQsNlAahazhZQ1EmZHCYTPnxUgv59Y%2FM1uUAZ6lH9y029D4QfDdpz0%2B7sXUs2MSvFgXFL0vhlppghMkTMPwyuy4nJ7keOCBWo9gLWRot5SxTwmuidyAumQCoFVZN%2BQTuZaa9WJah1Hk4RPacCq2ERbeA9WHeQYI5k2%2BFdTfK7lohXGlEmdSBERfsLy2UDq7KI8dtq398JwKw1TTMxT24YzjmQz7oP9kHC5GKOBB3w%2BHbKIMJvBwckGOqUB0UfSkv0ukl7jegcaDFpQHM95RcRM9vxIlBt8RGrfBWZkdced1NXgDU122PtFv4aLMgKaSf8oBagUvuyzoJUc4iITYBxraDDY1FVn0QKAfftJIME77yYwViD%2FZqLcnGXOqgwGSyiSoUWmtI1357yucpBiocdi4uwWcnTDSSf0%2FdgIU4b%2Fdg2zAw%2F9xkgMGdX7PREem5%2BUdbjX281DBokKY1E7hMrs&X-Amz-Signature=7502f9e1b16da8315dbb67c7cac428b569ec11ec2c6a5e5ef99480e22e10f217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

