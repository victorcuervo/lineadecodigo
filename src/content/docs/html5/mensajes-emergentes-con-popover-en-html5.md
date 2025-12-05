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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQ3Z3XB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeVfbI%2Fl4MBPLY0DDYc0rY2M%2FjtxDgXvS2yc59V9SfpAiAy4FDykW%2FFYN4nvrw8JAdgP8SWfR%2BQt4RehPAUTt0HFCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMu1u1hFmJuWu%2B5pIZKtwDkaK6dJEYMZtBBi7XMkmHK5l90TXWIs29vOsVyPogr7Gh1NFsjzjAgO5r2ILXMGTdHdq0e7KwCXAYf3zQzbT6YeR7TLWD2jQ5booPMNGdEgg34nas%2BZXS2jpCK%2FRUZSVcORc%2FJtZZfx1tzX3JifmrgqQ3lZcSJOd68CZi48HEEFTJlTLtycLAm6ED0Z5bpppAJvbGFZtv6c5e0xzBvKnEf4%2F86j6agpzIrdDvA6uJ1dIfELQw%2FS3mTri0YbfDC7n%2FDmetqZhn5cTNymkBA%2FouPqo6C%2Fs%2FXAwlJ70WWS8TTBffq7c%2BkBq2tYBOvVlI6%2BvNg0kf%2FFuNyo1n6VctebZ5Eoe2ghNGlv0aeLRwNjqJEUhi8k0mebP%2Fk5sVWD1LNvSua2t7CROQYpviCOZe%2BkmxB0rddyq5uXV7eqvvAbY5YQhwhC0SQU3LuP8gmdmmx9X4pnCPm7wSraIRFMQ%2BjG67E%2Bwc5Aje8bknj09ao0T%2BJmKKF3YhOaq2C0LqLfg7ZgXKHj9GcFEgTCiQNIkepyY94HnPjZlyewdpDe89NEdyHBSwmm%2BY0ZIqwTI5l0FChgNfoFRONuwvbl3OVN7zAc2BVjy3bOP%2B0B5edTqZ8yGyPhH%2B0oyFShmqVimaB9gw5OfLyQY6pgEdk7hMaRXnc%2BoHMGvGbAPg6KiJvqlS7%2B8RTNDnZmuga6MqySC9DiYoSH9cBsYCs0q8uWs63WOJ2LoBRz4KIzLH4B6r3gxxyT7megCm5bF68y%2BbqJ5eSaryggKNCu6uXgenoQdHDMbSVqBteX1Y%2Fyml1Yb24Hytm5HeVs3RCcrtnnsqhZ1VegHXlvHTWtq2TTP0L3CYhShav35CEw4UIsUgR3j8Hxy6&X-Amz-Signature=d92bcc29f56253f58583f6cf55fa6b2ac39df87587089e51cb4e4d7e49dcd19f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5J3TFUK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRIGFQKW%2BUasogm51PMWlWtXLeaeKL9V63XhSrxysZLQIhAMWB22nXjadQJ6ivmMg5vQbkqsNhfKi9e71GUa%2F6r8WlKv8DCGEQABoMNjM3NDIzMTgzODA1Igx6mY3tpaX4RLEYx6kq3AN5mmTAIeRuQL7U9E9fjWXwMB6ea%2BU%2FDMJ9lTP8zgd1xSPFEWU3EPgw1D3ouB4OYg2dUkjiRMHPRUEUDsAQKCggWMsv57kBi8Hq4YXGREyNxpTA3K3A4CYkGqDdsZiPvj9IXQrHcfrYIbF7AiTSbg6vgt8MrjEpw3dXdlcPdUNDfsHGbxr5ufhVQv2Wk09KKJ76oGaPFzvK692cx9g26ublfQne1Y9qw0kB3TuJbAXePHaOdHO6ljYmGwPDdik80%2BJc4cTANlUT2rO72bOXGaP%2FJ%2BgzCilGPpjIwldGpoXEB4CzOM6VVxhASRVpQVnYJaj02%2F4%2Fo0tSX%2BOVf5L9UDOtutPB3S4LsUVBC8iSyBYpVnLH6JAUgBjbPqi46yIVG%2FvHTVkyFeMBs7hn1N4HyLpwB0WTWEmHaxpHkzLUKb8heXlbDKjK%2BTgEL0WLtSVrE5OkNwj%2F7zUAB6G7WxtnUxeHp%2F2ZNn5Q3Rkf3B%2BdNfl56ev%2BaUpbTb%2FkAdk4JMfIRykud4k%2BrM23FsTYkOowiR3mycNd7UCAkqMQyBmjfK7lrDjB0lwFGbLrewSZvhifjY2szlzIaRnCVcprY1hGioBmODCVR%2FUf%2F2OHE%2FNsFAAfs3KBXWKpxRlJo%2BJ2jjDG9svJBjqkAeviSWLsj8XM6iFmnsVTyp6bCYUmul82AgXAt4n%2FgTq7VhJ9%2FQ%2BcxeyWfMEYGDLKuvF3bkzMs9nsEC1SfjxP1%2BCE47doS%2BRqHAeWZOeEq0BeTsE9WIlfo%2Ft%2FZ8Ps73S%2BdU53EpgE0ZL046nt7jUCnJ8Fq1D4SkhWKmu8NjPSEVWI1V%2FqsWmRQhu2ThC%2BN8nVY%2F7PeUeYsprQoirZeGp0WOqCByxg&X-Amz-Signature=36b1a4900d2422ed2d1bf76ee658a24f933be917d4e8d65a3c86511df63f0a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

