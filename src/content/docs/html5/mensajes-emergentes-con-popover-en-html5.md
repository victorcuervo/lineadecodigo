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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QH3ST6T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKsIMjOiskGWNqz0HzpP3RtRK2Y%2BAaHthP%2BT5acNKU9AiB8EwGximzdQBf%2BtaSmZcbUtMNhO%2FB2XEz456DCoa6aLSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYSjS4O5TtWLT1POCKtwD1c4uEie%2B%2Fi3hkGnQZ%2FfqmTJcvdTADrMSDhu9ecaOiOrO48brSGYH3%2FO6XYiqCFJbcLeKEHCHbegkmyhKn2W%2Fc0vxMVSok9ayXPO%2FzEEiI7bbNNZWdwvFF8hcfSXJB90TuES%2BK%2BMD%2BLtZx3%2FLN%2Fob%2BhplZ7afNc2jyXe4dkAhr5%2FlGcIKqvrfFMf5bOPmLQjy%2FZU1olxifls6wxZlEhp91osqHiYRX1%2BOXsGso01qfDvqYOYQpqs1yrq2YKawLisRds8EvFt9bX5ezg4%2BhqI0sjpY74CqgmqLAsj2wJZS5UQpzVGPOQmFLxJPe6gwC5%2FREhI5f%2BGwOY2mw%2FrixNUH8rRcec7VKs%2Bu12G4ZUQU11pz%2BdGIfFGvFULvy5wDWMUiKYIP8AiEsRXC2HARU2zJ6qRWseD8LCEvQUqVvgO63OD%2FpWFx5U8AijOkX2Wt5npkjcHuqhjBt57lvrKZVJMiThZyBg%2BQyoao8yYtepEJykggJ98%2BY4hsR%2FT3iGEuXWE9QZxC85BlREMzr5VIWP%2FwaABPL%2FzDaI0C5jvlh2FFtUe2XSnvUCjaskYjgLuxXZIqPUe7zDiVcKyFH7JMC7EtIR3oYyBwj%2FVXYHAs1S2mOQxly66qFHKyGasa%2FFQw96bQyQY6pgH4idfArhq8sUm%2BUKLgRoYjqYSm88rJpQyJaCgHbRZwYGLQysLA8RtoJtqw5SXUD%2FrEJ%2Bzq9F1LIp95QcsbIFKNuapmkajhfefLE2Z7OS7D65kfQb2sdMkMvkA1DvV8zdw%2B%2BfabqTkQGStz6m2QvqPpe1%2FDSJUw3Tf1hNd%2BAIA%2FedamzMP85IAfsLZb4%2F5plugr3Sc%2FCcZPYtvq%2BhXH8C5S1pW%2Bc%2BhX&X-Amz-Signature=ae62858aa578e0048de7e34e920cdf745b0a7fa87404cf16ecaf68b5d9a6caca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC46YIX7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwZXvYH4%2FK%2BMIm0aiSnkB3RBxbte%2FJr4lKd48Cr4MvlwIhAJukLEBHukKha2l9dG1LeTor2pUFNVThYmoQjDh4maRvKv8DCHUQABoMNjM3NDIzMTgzODA1IgzHDIkImBDEh6DI82gq3AM67oRpe1dvWPGChr45I3mJUOY6y0BNgUUuGKkudSvaS4%2BJL%2FeHSvHC8WUdtrC8qmgnJwV8ZXFzneHCfMJtH8DzAJV0mZfrrUQuWYL8BIQaxBqABvo0GeQsByVvEExziQKk3AFI5Ni%2FB4yvlfC%2FnjHOp8f3ufip%2FMLyaCpu2BUKqmcZg%2B4V06oX8CPJbzP%2F%2Beeh1T2IcfdJjC%2FqSj0TSer7i6M43o1X6VfyDkja9PnYZofacRaqmzV%2B%2BTqETaxoIekBjXHARHk6SKNjbI7iehE4ZmEtRbvurX69DqcJnnm2TGTaxfzQFSNByN%2BEYmikMAVpgQXmi7xoyzHCg9vfdfvQqoWx%2BDxw%2B2N4idin7cTS2vTjxnGTtE%2FJw0Qhoysz1yafV4cRp%2BS%2F04usjcam7Xv07kRPM9ISPCpF98LURpKvsVrOGo9snrOF3q6rqw4HWq7HsVHa%2BIcg12AGF0cB%2FsId7bxNy%2Fh8uyKUFwnFXsfZiWJJl%2B7fde3JgQ%2BNORKSIai7KDnEuGJDEV9lczYf8TYJkRIwedhmzlIIBJfCywAB0oCcbpbJNY3dKULPqjFB7kZpyg6NHmQinOlTa05dkMaUD%2FXz7HjVIOYEVmHTSPbc%2BGfJ87gwqinjulubCTCnptDJBjqkAT3WFiYGLbtKphyWqrl3262rpV7rW9Csrow993IIEamJhfCqxHK3AazdJOC5GsTiLewr8Xc9gMzQc8evi6rJ%2F%2FP4PnuRhhEJqNU23XIb03umQBuYH9zlPTGu99o95q0k3mHBbonJ5Q7AeSwWEuZROjBUjLERUCW6paO%2Fro0EyQA5YSDj8zZ8XIKzmSaVvz3Dpo%2Fdf032GWg7n5bu0FovX4eVmsYo&X-Amz-Signature=1c2b1b9a6a86bbaf4005de8d61e4354e37eb16e6adf4d55cda119b46d73a33f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

