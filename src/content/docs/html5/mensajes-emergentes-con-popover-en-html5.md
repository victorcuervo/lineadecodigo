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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNMEGM3O%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0GZkm0LwobWtngk3uaOgjMI17gP35dIv8F1ZEBmoJIAiA%2F5PU61y2R3io8KYe51%2F27fWb8tsthsRqNFoLVI%2BmFjCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM17wDwJYmGPVvqUE3KtwDdSQArNLbRP5ZcFL2cC%2F8pYQMF67LWxX85qS7Lb2bdOxBv2eHfjNf%2BrzS8rj8Y9itG8dVDLghHbtL3O36yo%2BxarPT5JoEw4UeXKoYjEk0ajozcXshYSvMvMVrdNyjIyLuvaq10NrxLjjWgJd8bRquCJFkaBYqX97dAZznQLGosB03EoNtOwOfWF6uEV3YYm%2BxjiflP5HllJ2TwYvA23ymPFnD3QHkVs8ZmH3yJN3Pi%2FGovzTmHDYqmAtj9DZiA9CDhlay%2BZ%2BDEV914GtGl01IKX%2BMCMGGFMnFfUlC2%2Bh6DNDmfPu%2BEvuEcTwPhThy9j%2Ff9CDHroNuICmpfMgH24UwiDYkvczoTwrUN3yamMvjpeOf7aFxiKFB%2BawQ9DNjoXh2wOT5ouVW515OouV6TviGQyuWi854FXVMkUoYg53cj7wFYWy%2FhlScZgli6g6USJ2hayuGkbF3UQwzUzJntOzhg%2Bmd5Z2wtoSf50iex3EYmneLmCNGaYneGqhX03%2FgUxLkkbwmKJg02%2BzRcESNFwTDz4TApYsZXEzwrq%2FzS%2F3Nw9yssvAzpL7uQLXvXiUPjAraEGSc0Nt1MmZyHbfAms9Qa5HYZ7XEbWU70BfcTdzlaiH%2FPwvV5BAK%2BPAk8tcw54ffyQY6pgHRzHTFRNfqAU5CFibRbrwH6ZWz49adhFCaPrMk3ROI6aW06gtGcI%2BGPp9HphmlpguggnYn16L2WurVoyZcLD1HJtTNGKp8YfOSK6s96tn2j%2BJt56xvyf19fKhe3%2FbXkQxGAzH0SD2lZOxIfEQ%2BC2fwgnDcZ4cOvCzY%2Fem28yatkbkcfQ4msko45YX6oYkKPJBeT6nzHXERO0LIHRtpt18vd%2F3V0w12&X-Amz-Signature=4f985b848eaf73ccd60461fa0157adc441202295b4eca1d96dc2ea2706339af9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SUG757B%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICja4gY5Rxc9K7wD2tmPBa3cXxgD%2BLWQaLiXws31rl6BAiEAxxKx4D8qqTh2wMAsS5Ci1Lp4peBMDQISfHTBrMwl%2BTAqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHB7y%2BtLdQLrhG%2BpircA9tX1NIifd%2BLNfUcTFKE%2BaEA9ZIoQaR1RemMF3RDwlkKq3Luj8ryZa9tecy0tbHidSahOVamc0Pdk6z10zyTmmFsZz0KyyJovWI4TxxjpcD3wRlgQ7p01uki6ldvqseoBY3RN%2F%2F0QmXsZbXFdjJIpdWeQHwrOA1v1kB%2BgeoL%2FdE4wtgNezm2y62llwvJ%2BBK1AwI1Z1qcuBiHOLNicl0y6%2FRn6O4IUXKNOBd%2BklBQMYJ8eWCWh11yISrbs4Gcp8NkS20rBk51poBfnoQwMNSfCnHkVQDYmQI91DlfY9MX8QTo0%2FVOn%2FkNMs4Xvo%2Bj%2FOaDJTbUsptsrOEWEYzV3tiWzg234EG%2FNy3FTNp8SNz6BNRm7lwsfEWZXaDLF%2BOdtXvT8Bk%2F%2Fyg3wQRr5r0ex0jGG9sQhEe3rnzBIMbDxcaktzSZdNDRcYTXwOouRYz0sAAovy3Z9SuNyfuwhE3nuJxG%2FPGAJR1JxOvGKTq2I6tiOONwP3h%2BhyaB6Rz6aU3rweuYOAcxeuLOusHil5xCsSssQMvwNtgAUK0k9MBR05Wir0EOWsYA074IliGWaZt63Xqtqck8MqjGt%2F9%2FG8MfH1qjG%2BTWFZ5Tlzx26lJWlnGIM%2FyJpgdjvZeGoCPFYXomMP%2BI38kGOqUBaOe%2Bxeq8Bk1ihx%2ByeoXmaXZApVvi5kRkJk4NDawjn2lC7Ukl2ww%2FsayKfop2KafRNVEVOBoc5GXj5awN4p4YNOm3CfCs1aaus6GrObkpw9vbrVP7rxl7ABzLvRe92JoX7W4tF9pieOEODeOreDw7CZn2QvScnQgICWRKYvLsOZ6yNq7rP6QH4ht6g7PLE5LO6pPOhEIhNByVDN9u7NUEyrA9gg%2F9&X-Amz-Signature=5753bfe3142210d14b5ae710266823dbec2df41885f98da35be81c7c2797e776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

