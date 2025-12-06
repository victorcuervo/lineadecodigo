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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWU4XZC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0dYUzuN4jj9wJFDzHcBxot7oL6oQAgA%2FtbjojM7msVQIhAP2AWRFvsM0hgXAPmCic0QVKOJ6PweVO74y3tSpcESYSKv8DCHUQABoMNjM3NDIzMTgzODA1IgxlWq8STtRGcRpYQGwq3AMFrtv0kOEGf3JQsS1b%2F4fxU0KoBzjEcEWQW5l76opJ0AZfmZCXc7Na21PeL3EhVkvak5OU4jUCMbZsKt%2FM%2BWIaqXDsirtIRshsAmOvZ%2FUXV7%2Fd%2FCu6XHUKw%2F8VIzf76b%2FnY1EvnH36D%2FlBFh9K8tymiGPd%2Bw3pLi6ZduvYZ5zkcI%2FGDiMDubx7jb7ZZTq7FwiVr5srMAl%2BUxRbrB5Xzla4NLFowT%2BAirP7wJTTjuAn5tMfbYOpkLO80PljW1%2FWtKHUSvDuOXsjjONywynp671BimTbH40oFPv7LRmlOrcl6c40pI7KePNRA3UoYrCkt8bW%2FRwu1a4p1dNTpnDoPjnxxUSr%2Bn%2FFoXAxCNx7mGVnkF3rzffSgeksCKfnLa5PmfyqqOUVmYEox23FQDEu91c5F2AjGxcMmeXYODfepGzvSDKYJTpiOLlHfFRDfDOEtmLOZdtiteyY8pxeYsk0bnkgTn31qrcikgJNkAp3mj3sNHfEAnPOyBKfFhdJFQnL1SVppa1vL8KjpVUwqxAoSnSXGGTGKFZoOa2YJ827vCxGHGUMOx3T3Lg1FpIhPlZYrYdijxbmrNyadjLXlo%2F%2B%2F0PufL2sOQtGtCI3Isvl4N3av%2FvuPt%2FO3w%2BI23CQ1jCSp9DJBjqkAa7YDZ%2BLEKtSToO8FFoLiSWjQzdtB%2FqYvK%2BkPEPjhvqd16kFrxinOa9RFs2gABJZCJhO8hE1v2FeVUEIVaVYXMax5t0whdJmbKb72v4OzIm4K6swQYrxHwR0QSWs8IcWDAJtJD6OtnvSQnMbQSmWb9J7%2FeUrCcSYxQYda7NPh3v51tW0D5qctn3KQVjn%2B5MFqbs7I9Dppnp4%2BLYI%2FTi6A1ajgPhw&X-Amz-Signature=1707ffe8fd7254bf6b95d1d48ad3a899bfcf354542c441076fc99c987b24e707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VALFEWPP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrvhmm0LoE779u%2B%2BTn8aZzbRpF8D5tYSUlnEa7mop1BAIhAL0PcV4w4a1NZRnNIPwlaMygptkwQe%2BaPhqy%2FrhyJ5YFKv8DCHUQABoMNjM3NDIzMTgzODA1Igz2Ro3ltMqUNtNtHgMq3AMZU4XTpkHvVA3VK5oi%2BULYu4j9ZAkK0xO6FZGsf%2FWaxFmyYqxcou0rp7y5o5OK841EI%2FUHICePJs0PdFVJsn0qStwZ10nEEFiFN%2B5U%2FhIfjOA1CYZq6T7DRiaDYgZ2eYroGSGqWJ2WdyncAEKckxC0D5bD9lPUa0ekz09We53MvQkGm2qxNBOJLKacCholTzey6i9YoTKvbMWRRciEBZIFbJ0lVtCMKYTkWFl4l4B5BeoI5RE5%2FhNfI%2BcfVjMpGV3JiuGvswFHyXpWyoHD%2BU23JUHK%2BHTApKliV%2BgnFHnz2KRb0krrvf30vv8E%2F0zbXFqX%2FK%2Be4LXCRwRcXUSFb3sEbJs%2Fc3%2BulJJh57%2FR4zebIhkaFmVZBm7laR0ku7gMwf4JLvquct06RIdYLEcM90EYpFV69b8cCxZxeDt5TS2W4%2BnFJBK2uHioISyjxK65tdUeQav%2Fmskgu7sp%2BDr0SjkcGnt8PHtFOQdaHz%2FQb9Ku6od%2FjngRq5%2FpvXZjZGp%2F7LAO2MZCNwMyxXplrxaprbrbKi%2BfAbn3RjpM06HmcOuSeTDKygTwpaFovHeY%2FHkHAD%2BssgST7zM%2FUH3AFvs6pKCG9mfoMlbKrkqfXFwes1Iv3WiV1eKEzayeX8KGvDC9ptDJBjqkAYes24Zg0w5KGHHvT9SEZx9BEEI1hzIld9aR1kU0JNKze3EPi9P0U%2F%2BlhJ%2FFT33%2B3aJKb0XQyfU6X5nxcyktyAiw5uqKTxnu%2B%2FbuX1G9Y0LAW7gGQhjvHABtNvD1g0MoI79h4KnKHOmLT30p7vuRjBwggMxJ2l4OknkG%2BP2Dl2RHJykRXwv4fWiBa9EHpS40ot7N%2BV1Wsbnysal9Vc19I3vRfZxA&X-Amz-Signature=e2464d61aa1904d0a3c9f971a49320947b64b31cf9abe52aa9caca46d2fa1bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

