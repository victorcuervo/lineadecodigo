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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GSVBE64%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0dGULUsSu6m99YSufYoWIsyfSE6Yl8EDcqevpz7LN9AiAdPANw9ycsO83XEt5IeMWYKW0QtD%2FOhG8OkfrbuVOIWSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGRVQ5YYsFechpUG1KtwDgRGJAeBYv9b9H1ujGnNKI12QI3M%2FlJqapC6DT2yPruuKU0y6hiSnhvCo0AoKSrohN7mxfrZhy15mWU7sldIj%2Bqgjp72mcJBR7hEPtIeLuNY%2BQbdjoq4hXVTY40vcn%2FwaGdMt3%2FnokdYZjSXhY08f061WQEcWBOHyT9n9QlGB9qOAYI22bxG%2F4X2c%2BjNf5Wp5%2FwvjGzaUPMq%2BVH%2FeN2w6QAk5W9GDLA%2BRZqodGHIgtYfW1OiO1wKgvZDQxw%2FqEwqDJ7RLomUGWdUCOej4eMXRBMDKwfOrYCLVZUtHzZV%2BPkWCT7ZEf9BSUS94%2BUz1UEvD8Mb6h5DkzrX0x1JIHewYfmA%2Bt1aY1MsSvc7Ve1fhzQ8Xxp5z%2FKDhmwOcrFVVqSCHeuFk0i0BpsaXBFXCOP9mtlzf7sODbaxekGZr1IcDri45vw6mABKGBhXg5t%2FDIkX2bTad8mYK4m9dji0WsiqMAwPfsmLgjKw6ppxMSDtuFE%2FtEpOSCwQsNbF9hezMpUSF3ofyPu2S4K0wne03lhU7C%2BxaWiLDxssrbjwxF3BF609cPWyaj3tOj%2BcPxBAuhMM62dtC79U2kbZ772tCXN2SC4rThKZP0sg2prjIfr22%2Fiwp7wWcfgEIvyT1Jxgw1v3SyQY6pgHTyp4ykb18yrR0ckxN78%2BYpWoANIqv60kdE9jWPCevgxkG72On6HZSDxROrYtf%2Fw44ykBeJo%2FXDdplP2HMdiWQsdOM2Z9nROTOn%2FMSvWV7N30RBD2o%2Bnr3xMnm2wWZMsX7jg9H4Youo%2Bul4Usj0qwdQrtLAVS3UdgStBQljWPoMsn1gTCPprvIIiPdVtB7kLYeU6J2wesE%2BOLE1FnZPIVItKyJTOrF&X-Amz-Signature=2bcc683df9c0810e8f37c9fe75d22e74b8d574da247c2ba99d3033704b7e7fd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F7NXS4T%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5%2Bj00kID3k%2FoeO8T2H%2BJWLJYYmjEOk7A5pRqvNTXlIwIgQ5SsoNlNfklR8t3ObTLdAWQprWDpx1uvtq%2FqVC4Huw8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONRh91acRs1eq7ywyrcA5oERwaQGLIBhn1HPDCb4rOZdT9A9rO5g%2BIVQXEqsTxVg9F%2FLWOqJO0NxgJNfoEoHxlPc26JgQL3hRg%2FIcy0%2Fb8bixwHAgiWNj2KJYLEmxmDOk5tJfhl6riWJFT9zfArxc7Loo4AJQri6yG8jMQ4238Jvv0Q2upj%2BKUMYAYlsAtYpw4gLTTn4jHNi02ZLnFN5qSAS40JihUE3OezH%2BvfjVlpKY%2F7aH0V8WIeoztj9J9INS5RqJ5d9SJzixJ75Iu4dxX04yChakLsyu7Kl8ijjpYE641Z%2BRQRKmMdE%2B7kU6OIz3KXZi2UsXxhJ7di20%2FB3D4vH29aQTs04nP3aKIRTeHkQR%2BVkA%2B7rA3arT2l0rIhI7f7p0Or%2B2Y78N0j8aNmBz%2Bdp6IlchCKTb%2BHSKC%2FVJbXZnVrEkUNZDxC2l3mIF9QonaZnzXN90iGE4TuTLp8VGiPNxd8709wK0YFAQS%2Bh72YavDkWJRJ0fx1fgNBY3AbUnL%2FPotZYmZLueT9AE%2BW1sViYy8pkvMXn%2FOwaudb2HK4iQtujd9ZDouJWoA6fSIe56RrXxehHJE6iMbY7Jj81f%2BhjgRUfB2hW5PnK5tyiseOWHUQmKF7EkwFY66jMj4S0sYnc%2BbKP5oA9uaDMOn90skGOqUBDwUCT25tQWubzJoFAhOeSNB%2F1uw3fkzMQlVDsrwYdYAIcLp6qImytJ3YOW1jnDfEWNilfm8b3bEhtIIeBhwGFWKQgYAIbkODiH%2F6Icaboo09LigwWKuAb4RbVBqctqTCYp7ax4Et4fA0%2Fmh4PEGli4GiNF9WphoMPw3NfbSBHQ3RH2JB8XjRrrUGVwYGEPzZh3z4r11V%2B0RkaCoclSaW9dQaGbi7&X-Amz-Signature=f9d887240936a19569abac02ada322196a2a50d3b3eef3592d80d4a8e80175f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

