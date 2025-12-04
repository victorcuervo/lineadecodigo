---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2GBA62Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDBZc%2BwKByBfnB0zUtJyqyqduDKSqF%2F7TFodYyPoFtZPgIgYEfEXvXZHA8iMCJdMt%2F6RCmKmyDyDDRflcIklprrGMUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKj4laVWwnChsZgC9CrcA6aqBBqVEM68Kp4deHJ5UWSPuQTWXb7nD44Ts5C2g2uVbCPovAooPjTz7443%2BQ7mPBa3UNJkbR97UN8YbSMpzJCtE8evhPKR8dZdw%2B2zfyGXXczNu4L85YH4lFBpDMDHWC95T4xhCCE5%2BYEpZW%2Bx%2FndNv2%2FZIsrTOYd7ILOYilrq68DD%2Fy6vluogArKfDSo5skWLxWGAHgPtuI1PP8yOkUkeZD1yAxHf0q84U0nh0Vw7Jlnr0QqDy0RSJH%2FX%2BabELH1kYxUxoLXNz3YecpC3Re7kijkZuFwTdUtDSmsfMRUddmyDvaZ%2FxWVJtaHt8Hc4MnA3oj9op0Jwl8yR4KQkCF%2FQweUfr%2FBdqLOS7t9RL7za%2BzjbLUO68neUUPRUYlebJ%2BVAk5H2rC2tOH0LY9JvtvXOkS09oj18ONvgtPb0y%2B9CsGFZpbup3ki321u%2FTr9LjlfCofuA3yTLSaZBAisRX0wOVY%2B4yrGsimoEy32ISrk9vC1NXVJ1FzLjS8QIphGWouMZelohGaVeSRjKIW4XLbjGsbJKT3VaTbAuD8Bh64x%2BzfiZVb%2BbltbRkU5q7253O5iqmbHJJvJjyAp%2FA4E9rsdKBLHblmFDhZWBR4Uc89bTi8QUeHOZXwUFPy%2F0MJy%2FxskGOqUBbpgy0C7F1c%2F%2BMBR6cFcFVslRWpR%2B3LBHsAQbshkdRfKkD8DPwps5MxnMlB3iy%2F5HFbTHqIAwBITq%2BxpEY0mwZv3em7c747Y1%2B%2FsA6wDCOYzaRvlc516AW%2FxrZCQfOLyyHKRYsMbtDc%2BDojtO1fdyh4YzvZZrjncz6yrLXluirOJFGyB1hvyveXN4TPKLexx4gIp5TQvt7Ffl7HLyDAbvq3bXONVf&X-Amz-Signature=0c26d0d010741afc05c11724c01f802a02f664da24ba43c37246f4e36f0029b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EKTHV73%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIDqCs9MUKWvQxRPGIS9Q7P2xzrUr4JpusH%2By%2B1yFv1R2AiEApyGkVjv8ogFAwpCmHy%2FOSlrjyg1%2B3AJRRW9yTs5t8Agq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGxwO%2BE0PxaMSeyfgyrcAxqPw3bM6sANbHjdKuWxgRWAT4pw7v6FTy7aNvSTGVfPiYjGygw2UXM4pvGVqp%2BPFxkxDVUccSOezBtPEYDiYB7xI7GUy7LEkVP6daPEBGpNLpSM8QCTykqjqwIhlhU9p9zX15KQmSYAvEgiflj5sArNLCb75pjysrlBa2sck1up81qU1nV305uoanrjcFghzybBANZu1Uy41niZSh0Nk0ljiEsUaOgAEaY%2F58aQq79TfC7xaAsUBKd2AeQFnvLcDcGzmSTMPekir%2FUbfi%2BKGaPsS8ARGQkNQxPJhQO0zQygn9vWSjMK41d1V%2FPyraDD6qXitJWFZjd3krZ%2Bdiq0lSVOfkkD3J%2Fb1HbaSNy%2FBH5a%2F5R8HWrdIQ78xNRe2W3E4zpv2d2V81b909gEPazlL0ETVCmMstMTsApfzbO7mDLysMdS8d7WCasTI4i3zmvZN9uVmeMuoEr2wqQgGtMJu6UzjAw84hdZSecKddZA5%2FwZ6eQOIU%2BMUcRTxrTOKgxv9hzXDiu%2FEPKXK5%2FeOZLUyl7tGSj0fsA0f61%2Bt3apLgnRpObEONXOFMR0a9fLi4s6s07xQfCKUXvqRXNmnHkA1tRa84BqxvuSrAY%2FurgJBqNReWm0Ik2uSGT37bL7MLK%2BxskGOqUBd0bdo3LP2BvkefTgE5elODvjwxVZw%2FDSVpBK%2BaVN%2B%2F3dCXO7I21hUSfxc5BP3AfS8Ri1FgjKuovBXCfUd%2BJBxEOI%2BkmJ%2Bzjd8reSyu8z25rfnNYiWhHKuDwsDHrTbQ87jw6eKf%2FQdo9VZI5cJ4x99Eeu80XnUf9COBzRKfiJxMgsNlNTbUg635BYNIizE5mpnXW1Fn3yfqWbGE8WyXxgMXYp%2FPi%2B&X-Amz-Signature=8ca673973ea4ab27e1db56e6c7fabca42d59704e5175bac8d44c852313a439c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

