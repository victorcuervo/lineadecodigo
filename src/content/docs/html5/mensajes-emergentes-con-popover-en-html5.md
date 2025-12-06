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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664NN4B7E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIUZENiSDH6O96R0RAQsFDSc27WN95KV2CR3BL57oADAiA75Y0S6Hs2PS5eTIztTUAmKzsQZVT%2Fzy1IrnH0wdw1Xir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM2lmMETkBxdecboitKtwDnS3PvVZ9HVGMusRbLSXH%2B2bgnqbRWOJtfNnrIRB%2BGugw%2FEB%2BVMj0ByFswNIDHEsuz5UQ8fdkHQqP%2FNKuahqJum2WXZVobuEwB9Zi8SlBXefe%2BHMgtbc%2FghPQhdOaSJnx5gORo7Z6lai9ETVm2Q8EaUAhgAJkQ84uGBC00z%2FPMuLI35TqBjLtEpuyFazozDjlkzheehd%2FJ12sPVmD26SH3DiEiNPxYAf3nvr7HrLqpBf91JZXREjPkCfNkFd3qguNsuKuzCtvOh05d5264LjbmjfGjoL35Tv8%2B8vOU6RjzMtxmbPbyZDuT%2F382UbY%2FKCSDpkBVbs5EDvio2Eqf5LQzyBqktui28VxF9UUgyl28oxOFzB16VZ66yTZP%2FiokfxWjVNDQW75m6vejHHxuW7cucb95y4pPnPbPnHgtNiOZTQrU5%2B%2FM11k9tTdm%2F6PnBhL6NdJSesO45Q%2FXrgz9C4PKK75xed0sZHw5qOQSYGlZFUB76M2t4PmiN3BiUYymebWk1SG5HT28k%2B3I61RrH7eygjRH1BehZSAL4xOAsI16CQvGr7ysqmQXLsE15tdQRzOU0V7nqGLXAR7QH5472yEpQfiOGlan%2FmbpgAp33W%2B9zOPnRfALgeQ5yC3LSIwqsfRyQY6pgGu3klsiPjmOUGscEvlNhTctUI8orzj9EGs9Wh0rP17Ombg%2F0wOD%2F6KOFXNEev86hTZoi%2B9anr5JccvHx8qosL8ZvuRRcZLJLENmRPP11N2W2RpqpwYL1xKzuc8yE63vq6InGhfN1OBDuLsFDb537W%2B43fAGhqPNjOy1hZ0i7leTGOuFp%2B3N%2FR%2BjKfn3IeZXyHmcrrFaKM87wUIk9Bu1%2FlPKw3uRI%2B1&X-Amz-Signature=4f8b0b4f38afd855e360fa54b33143c9dfa6eb1411b71cf4557a2a594796535d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB3SXTHO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvyOyyxajImXSyp12%2Brzavxwj7z6KY%2B4%2FBTfBxx7DxbQIhAPvTWXxwSBmLMwng96BeAeWPRAejD38eJMS8whaoa49YKv8DCHoQABoMNjM3NDIzMTgzODA1IgyXZKdMbqAqAvDjlY4q3AO1jwRG2mDY1IZmWADZ4JU1EbwBlQ2hQ7wPkVEVbrkzZG6dJz2V9Hs05ClhUmH9w4ojLAFokuWldKAmArMrrUaKiTJYcs0hJS869WIKKMTH4JOQ%2BSgzjPOdd5DXXYjVY%2FeeQFTkeX4coZ6jbBtiRIKwfnAZ2QOE2%2BnC8nNkETOOjhjJTQ61A7HDb2mbcCb5MIYaW1%2FBaT9hrkfE9Cl4jbZ6RXEibnLO%2BjLo7FyWoYuIMNY4rXxuFVn%2BqOcNKv0QGGON4cXIo%2BSPqOzB06AeaXAXnpes1LGgK6hdCa1XcPe2qgWmMyELOlisaThVg4F%2FZNyWrMTU9OR9%2F7A%2FrjVLmFuq6RKc8eXyNoTfOZzo%2Fd0EfEMvRgpYMrIgG8%2BrFjN%2BaHJSaGWwJ41IKb3RFGcAvO26skwKmYfH%2F74rQcCkPubZUW5yIbc2WW4CVAMV4Zt4yD0iRT6rH5D8u3pHcxZvI5ERZd5MPQwpwIM%2BtSXBS86XUdJsVr13y%2F0gt1mvVi3vwpoQVMUlHg6T5lXsIUK5uncfMBkKGT4WHsDsjByA9oEDHTZiqY3Xbk%2FAoNd56ltXR2EZz%2FUZKUHdzrzpISAfwwld3nIlybwXGJKbezEGxtMQfuhOVmH1L2ASyMRQCTDkydHJBjqkARQTgor9TJsbt5JQn5jHn1hsG9%2FCh%2Bgjm0tmxqhG1naAty9svbsW6cI9%2BsPkFRr%2FJSP6cV%2BsjRNCCtDc4ffzNo7YjS7is%2BV2cg9%2BOAqRS5GWTbUyE47x52XG93kZxHBZvdWTIAnwJuI8QzFFTaZ%2BCzdp03nxnE238pyYwmd%2FW4oi9ZbbOycbWQQC7X%2BaJq4BUPKYWS6PJJzeJm0GaD3mnbHvdi4l&X-Amz-Signature=6a2cd82fe30b7e6340036a6d82e1ab055157b1d09041d4e6b422a2163ffd7b32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

