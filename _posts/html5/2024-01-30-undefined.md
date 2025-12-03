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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZUXVS6G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEA7JhSJFDbYZCYYv8XGsm9mD5kV3eadNIPQt1ZrTzt%2FAiEA%2F1xWBdYOroZtLLK%2Ba4SD6lh1CLbWWRKgpnxCwu%2F%2FVFQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMUSg0yuUfIpXDvVNyrcA%2BaftDd7mZKKCFq%2FG65AOanXwr%2BZzTCrIOoRuJJr02NfTunM0PDH%2BSJHqMsxnPRJRHJFjswpsBWAsj7Xq3Q7xChZJQWeebwnAi6iJNB6y7hHu2oaXDsgvckaR4AKkc7ug2K2BLsJSgFq6p2seh2yPB7hB%2Fqc0TbOkx75kYg3YcV7aAF1G5Gh3Hgodt7KBmp0eJVoYDpC7aZWk7MNxOhg0xaVfvZ%2FBgtRNtwYQMytwMae9XRcEdfuiqJTLEJYjcRrQNeCJTsAQk0dfaEeFHd%2FocQpPx5bySXcB7HAanNFzE07jVLU%2F9JKI55tVPq7acyQ3Olxz8wAVeNx6WZCmxKi4DVPU5UqDbQ8UMPc8vIYNckxtzM4V5TBb3jZPSjNlsiKc3EFJMlm4hV38K5C%2F1OsxW9oY9Sum7UNSb3zj9DqPYT6uYLD0jLyFQhA7TNtbec7u1Q3k8p9jNIbVxBPnysef3N%2FVnsmfuNRi3mmTckcAYB7fA0p8K573d65r9WcVj%2B0I%2B5h%2BqSJmUuxa2owE%2FN%2F070XtMTMOf9n6%2B%2FVQvaHXk5FylBoV2p0zcCxc6IllcplHTaPeKudCDCmE4GoY1bK2l2%2FuSJqoH%2Bag8QXI1vbni2uz2WykARJtxP0uAWdMIaUwMkGOqUBQnEBL0MGUy9EcQJo1yYnblkmnBSAwJzZD33ABE%2B39ghsRjwJpXdTcMyoFypU%2BqKeNWVkcADqLlNA1ybGp2r%2B41hSBsEB%2FagUm4FyiVr0K25neOl2P%2FnxqBVfeynUy5L%2B%2BqW5LAzKn2kP%2BwH7sH8c%2Bm0OIglKSWeYc%2BVtC35RxuHgbgls256TccpvaDajCTnjl4VgVc9p7los89evYTRmXO0usbQZ&X-Amz-Signature=c85ad9e31144c4aa04e16cca655204899d8035b5ca94c317ff6945bd66fb1ea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VWVE3V5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD58c3mm74hbzbhf%2FPnNYjrOZeMQZn4%2FXs9PZ2p97TjiAIgLAprTxU9RZdBbmz5CtYOMgI1jMyECXX%2FHctXDK1VEGQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDF%2BcZAVxxurULXlMmircA2F8JMc5k75jvl8%2BLnYj729%2BWahEowODOhvrxHpY8%2BAThigFk0Xljlcb9JoB8pBFkRqzIQMOFLdt2D8CjrgT720W1hkNN%2F7dIbwGQCGGsWSjqWh0eAuZLoDwjRD8ChoddXSlQF%2F4mFsl6CVf%2BCvGNTbz1SYxUvb%2FYtRZZeM7%2F2tDBK7%2FeIxzbok2LFVNByZ6JMYf%2Fh8BEpmhXLm9cl4RDA5Cis48kEO06SIImxiH%2FQ%2Fyx6V43ZtmpSKM00qOmFrNydsp%2FMsbSRn3%2FKbd%2ForBiznaFJluV%2BQxKAKjsLkKgR%2BuaMANYrhUMswMX4WRCldacEihPstkQ5NuhEsaXdW5Zv3Uf2TbEWklHUYNlY116%2F%2BPJmKvln2cuzEt%2BZwslcHTDzBvNwduyfMDWK%2BAX%2BHNpPk354CMw9XvorUSaowrWJQVUOv5w7m62idRn%2BkQTnjfIBz0PbMNqKxzAamEhdpvlLR2IVEy3v3G%2FPq6ZsArxCf3E0wy3n7BJz579H8EtvvqtgArQeRDjL10sG8ajwicBd3FKIwGckQF37hnWfAsFI%2FMkmpEiXB74DzPcm2WmrWRbt9Z0QOcjc9x8sW8N35sBSvISQj1LtgFDb6e115kb1utvOAfAfOrN8uwreyiMNKSwMkGOqUBo7jLHA2B20VGmiHlVT%2B2HsnS9%2FmefJpey7roqWdoFYPfECA4rnV%2Fom9WeJ6Y130f65UgQUc%2BGplpdDLomZJoM67tudZKL4JkuBs1hswIUswaek6WJg2pxrVzQGO9bJvdLIIArCZu9nqToiYuYL3%2BD9CqUvBGj3qMc6gJy0d4HufP8S7cehlTj2jR67GxHQbfRFv38tXhYtI%2FiGhqNG58FLjPLhv6&X-Amz-Signature=385e2922aa211861b9238d1372ae52111e0931ba749fe08305a749b930a82c4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

