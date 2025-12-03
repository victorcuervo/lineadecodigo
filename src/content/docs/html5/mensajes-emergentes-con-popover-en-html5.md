---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVUI3FUL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIHvK9rYQSUMEa%2FyBLvUjuP4gWzgUgY7bp8ZLPi57EzjQAiEA0rHz8JIje88qKV%2BUCyUkZZ8mVXRmYPpp29yzgf%2FZMiIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCqEyd6hKf%2BhHhZYbyrcA3bz29tmAUOBKXQthqPZvaABZL1JBTlBhqoq1trgLTh8BtRxGk2JtCumvFroSpN%2F8FPtLC1%2BkQgUQARBE2VYSwml3xx3aeZPaf5hqBY9b7HnraqETd7KxtV%2FsPeLvQUSeVh%2BGP1sLegPNjqEufLICoBPoXajPHjPTRSvleWJ8v1GFrCZpne4GoA2LqnIiQxBq6wQ3hxDp8uTyvP7lBzRKmGooVzjUxgkQHXGRzjB0paAtPLkxw2NfnuTsYMk5CFjDGSwLMMBnHrhURQN%2BG2ZKpp9V5yWR%2BXinF2vTWqP9wAzS3EkCvUDDfoToQso3io7On4CfbB%2FjfUzyS5y5P%2FVr7rbFFxeQMmHUJ81BWsYWiA3ozUATrZbp0EEAHcpRLc0zmWX2ozML99VAScci7k6Y93FMSHy97Z%2FH%2Beho2USI%2Byp4%2Fx54VUjcy2SihraFU8aPPg2xfQQ2xCwlI0aGt%2BDzdgyVIOVsfYYRQK1OixZhKZ%2Fqh7NsaCOB271qH57wUA9MnEpxVe9MjeyGB%2B68ZBycKX4KWh2lAA3zGmrjXO7cKFiXflv7fmkWmV5YHJRsSQoisdBaGEIZZZ2AroISPgl0qQEoAMCDdZnE2igAZ5wZXbD6QDnYnZzHgSf8jqQMM29wskGOqUBLBlK1m6Z8DrUa7wv%2BmoAFbVFlKdUCG6TBqkJYQLpNN08ihucUUDS%2F86DTHeP3xkcWz47pvEZ4jr3r7zjQsh7YLdLtrU53APvI17tgq7bkBW8oIzPvIjJjViJF%2FmIYcCUymwCtaNrbaXjEjSJVZsFH5BtGWxuLcOw2CepjM91BA3Iv7FDOtaahO1o3Ag2xORb1Fig2ziV0jU8fa6hZN5zhn2rLByR&X-Amz-Signature=54d9994572815518f5bf17a79787cbf3220eccf5e94733596b9074bfc25cc54f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFKPGSWY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCLbb7Yl7mQygSr78jxFGmWmaR%2FjTCukhxlig8Vk1m6AgIgAxGQIZgM6yTkblQtsFZPS8i7QLzp%2FhFfdKQnWTCFg7cq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDOCIB33VJ8GMOICblyrcA0dojHHex%2B6i2nxDrKBpH6%2Ft7Q5EDI80m1OqLDC0xTfOh2vzBaGymo%2FN9rhkA6FWF60YgX41ClXdixwhSxWyeYleo2%2FYnTGiCut480jWCdlZ3TbtBoLBf4mtVuAked%2FJoppWzaqDaYDph314aDVkrvAGtCGNBn5NcCPbZKbR2G9AYdEafawzx2GSljpp8qJgaiVdYSPKwK9Q6bgVmx2dTM2iXejF7%2BPzPIWvwRojfUwtd3fmQ1CuE03Aju4Wsum5Ml9v%2BdS6JstCFPBq7bEawKCOY4T55bmvZ17DpuRNGWZYMm%2BABS1UsPdCBXoAOIeAd9hySJEI%2B7HR25JGgsCMR8b6pab43U8UHdBU01yeKzlIh3rXoEB9nXEPBXd2WabPYgq%2BInUvjtp5ABHRCThzzMIzRkMSoRPOHJZJL5%2BI4hm%2BC7s94z%2F%2FAQiwnZRDsvs8JIbp9%2BQOpelHlJlQvv2d4Kk2q%2FLMYgk5joPFELXcEvO8j6iACCoetsGDScWoFLNT8sOH%2FBnvrII4V%2F6I%2FVN2uBGMcr9Ny8BbowxnpKJUKN%2Bgifav2Y5R0gkA2f6Ay7IzvJaNdoRSUpQYTB4rfr%2BXEQeiAKGHtB7lHKF%2B0qzjyLQQFGiRSX1dD2hECLi7MLu9wskGOqUBA5LlHxFEoDOHcLEFMmz0x0MqFC8PIXNJ8ocL8MR0TfVZLF1aJXpA5iJXPRcdzq7S95MLITvb%2F0zhy5W7byUKceyuEGqA3gcbXOd7h5YcKvjPIenYkpGCVT3L2v28jamgwui08KOfLn4C8bDJhJPqiXClrfp853Cb4WYSNpOWT8utd%2BVFCxoNJKz%2BtY0Gwk14I5BHI%2F6pb%2Br7ob0mPySBLRs2%2FW84&X-Amz-Signature=6ea995992b9535dc152702c8cd07febd2a08a2c4ceac1123ee3e7dda46fb854a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

