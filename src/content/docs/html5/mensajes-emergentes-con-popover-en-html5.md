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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6LBT7BD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsPDfYm6SvdoU9YSQDm2F%2BW3P%2B%2FmdzTtpQdqYmjL2xpAiAy%2FZOZSpRzOII2P63jTJb4YuQznkVAwz0EEJ2ljCX7%2BSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM%2FyoQXM6d4MBkNz5RKtwDhJx1oa6HEjFhpOhXbrxW9VrFoS23vF4fLdWTcwpg3y%2FAuTiLwBffpCWmy8GqRnhBpC2H1Pd4EoOwiy7CbzzSS%2FQpnZ9qhJY4V%2BXT6zWTWiXHismbIn5uSYmU%2B%2BkszC8mbMK7FMX8y8Kqibdjui8oMErpuZbfaNJVyM3Szgi4UGPcZaajfhx6ndJx%2B%2BIQY8iz5N%2BlGOkLL82A6Zdpq2Gi7wLfWyBNaSpCPC4TJ9vPrC03HuouU29bnvMz4mestbp8WbZlK4svF26%2BfpnxPXFL5ZwoudOwKUmEme1VZNo7lkFqT3n5Ne%2B%2BXI14TdLO2tN0bsHw07zSew%2FhWYwWmEKuIMmM%2Fqfm2NIiQXWzHerOkTpJK2xtEG5EeMkJV1q4Nmj2dUmyuUhkd2T%2FpUIjhkOlOlPgcJKoqjgd81F8Wocwwols7Sr3kHOYzcDrj2PsXHorVjKc%2BwPMoLDgeyLX5Ep0XBASu%2FU9whsobdswe%2F7OlLVko8iUKAqn4eeZOtZqalZFPZJbxs2DvjZYJMj26eo2r%2BWiB537ago%2Bwqum45IeNnYn84x6%2FXWWv0UkWZVHJFsFzYl3bnOaWmiPO%2FGkP%2BkBqqAatObH4LvNTBRXXD2zl05nM2bOXy0jqvSGy04wmLzPyQY6pgHaxar9ERxYbv0uZx0Hf%2F6FITGhu3kQ7aLJmGoyK%2F7PeVGjlDWqqKTpEafTlPJkKs5LiamDCu2VMI8U1dMjypOt2U%2BxA9J4P3TU8qWKGmFgqLZPgDAYfx19s5rzLIXawnD5%2B3Z7Ia4TkUx9Yjt3WIHCrHDeUvgyQLLBYovBknyPOBiSDP%2FVJZ3c2IgYroJIu7Q3QZq0JlVEPNfU8trEgWlN6fsttxci&X-Amz-Signature=7b2ef426e9fe5dbc740b11385dc85abaa5311d515f6348c927cfa922991d9b04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBZFYHW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyuMSkZdM5TuawQMmbzP7SiQZjbZrM4jMPCm7%2F8lPidAiEAmAFzvWpKqnvXOeOKVMZ%2B1GBR9tOnynfFtCbyGrcLQGkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAsEl0VjTSugbldB1yrcA1%2BsNiqkaHPD1p8OpBR0bu3YRyxLNdnuBOUXajTKq%2FsaKMWoJ4rGuhAhDi7rDOqZegPtwj79Fn1OK%2BmXCspqF%2BjRhdU6VhSX6YcsHz6kxMHzLJEYrRIXFD1Ov%2BvAEckT6acs4iLV56jk%2FPMORrIqSd5OvB9k%2BJOE%2FBnUiUMlC2%2FpX%2BBUnTtpxKWyYKxbld1OCff%2BAvP%2Bw1csu47jdOJCLIIgGDbSWNb0t13zhY9tTTM%2BOxPoHMaHEFIHGA0fLYfC1%2BdafH7oclH24unA2FucUgul4%2Fnix2UNDkejhqLB3n%2BbXQad8e7n5EtItECje3ZidD70xvsBtEnkIzBb%2F05g4uKK5YSClgSIAj3maiPXaYToyTTo2ulPnGlWWAy2qza%2BR%2BSPhv23jF4awdPz%2Fv9SFOlsgxCYyVP1wUezTOoYo%2FyAmJt6VdYOR2BDswJYNH0My7fH06uGnycJzqFgfYvZiLABarp6R97GhKDkvjEmx3JUE7PyU0vFkSqtka%2F7BeupsqKU1nB7gOmZZCqG8QerRkZMN6QIXwr386MRL%2BsdDd2Frta%2BaxkH0pfm9W315RgpcUPUHL2xjHo1X913mt0U21%2BxD9Yo5cuXrC6zg8pGxyPwHm4TckqhmLmAtbQOML68z8kGOqUBPD5P0iRyMY7X9qhRmXBNFNhtvSZA1xtarCWU3qfHzEtcYQ6hIGjEfD0HfBaEbZ6%2FDnCcYHmrrw0%2BUFf%2BtO%2FRGTzJ%2FKwW%2F1DjHXk0JpdWxTRS3fpHdUclKfUQ6hD%2FLQJCAWurxstzVl%2B4bzk%2F0UTyf6%2BfdnJFZp%2BcJ3eyQ%2FapzrZFg%2FPgNem7ZH2pk59Vaa1vvTtrBoXm1XisDAadqAejGROOPan9&X-Amz-Signature=00f3b431a748de25d5d7e065c9146d9a16cc15a407a699526af5f74ad27159b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

