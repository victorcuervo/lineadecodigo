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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOPRHSLH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICaHM%2BkPu69rMvAIL%2B5STG73wugOAjxP0JMEmaAKwn6kAiEA7H673EuZHD3oVd6aIoVWn%2BioDoZel%2F7oGKD%2BpEAHKHkqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9VdUP6yuP5wkogASrcA6IuNiNr3zvBZHv5bbm%2FawIZxmszIG80jqRuUW1EkPgTbGArI5hA%2BCDHT8rNV4HtO4Mk2Vt3tkw5h9Z99m8aY83cL6iqhRK3A7LGLPCUVaHZcrqLr8aI8xZ%2FfD0wANkPgCn9vK08t8mG3KuaT%2FA1nYcjqRoMdOMgh%2Bl2CjrAauc5o2gfbIbdFIeec3F%2F4GobDrXo6x8Ae%2B%2FfYcO8ak8LXYQXJwZES9ADjWsx%2BPR3TXEtk4hKOz1OBbIWKZmky325C8Uy%2FeistUxhEsGLq8RR88au75oHXClQg8gZGfN9IJ%2BclRxbvgSw89oL0rkd7oA0ywY1XutA4k4gvST7lmsLxNfxmmwpUv%2Bo1m3NamwOakRFfzUAHM3iQBmGdZb16pRNcNIqsvn97NPyvJmRxcS7oABpgkvVqTReThSo6lrTPieq9mmqghqlpfd1tV7t4cle8N1V2b%2FQBaOSZZIi7UuvexhdLNI4XYvOTKD8LBDlbdoMpp1G5fzEClUKbQRUvxpebrkhqcwzOBOuY2YCugte4y6zp3cnFnXkT8OWhKWHnfPXYM8Qnd8qi%2F72DRpEBeyvZC%2FXVHIm4XZ7MEhaNfsgNdGrC%2Bm8Emv9rtCtlhBXX7eIekmYCyd6uCts2iMXMKyH3MkGOqUBFj%2BBICCVF35nTRHNsSoCeYLikfzHOnXBFKqAHvzvAw8IaZsizkQ2VXhu5%2B4e8WzpFZnF5Ls8BKODAb03DMS10BKP%2F421pKWMGjdPScqr2XNx9rk9HnOzlXLIRAnvoFzrBftwgw7azWBFeTIS3d4y%2F4aWwUhnwSe8oPCQ8da8jVb17LdX5fu3Ktc5Bmcd1xdlFVHdu7KcSmzOFK5%2BlC64WfngQYsm&X-Amz-Signature=9c2256250d3343cdfc98eaa4feee450cd5e4349db1d8c55416bf58fc20f0e7a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7EVRVYF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBo99fgU6aa86UKLorawyYMhbDFNISf82A2qtvNCcQSAAiAaDjP1ihC4e1ajRmmH4MhYvEMsnabrQ5IOg6QmH3G2TSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlEslQSIyQ5Afqg5QKtwDnZec8i6Z58PcuDxQdC0orld7kzyOON37SRL36xOzbZyKuBMHT75H4aKTwMm3SxltBAf5Sb%2FlhJsglyjJ%2B1UAxtaX%2FjD0cUnW%2FgmFLhZjaplDO9FsyB9hWozkhd1mKkvnBz4MGZkwKmWQVzNqpSkJItNJ1i%2BxoOcK0W8tedJRFQWIfLIA%2F43kw0wScvj%2Bvu62B4yRk3%2B8%2BMenyjEUCBXDXwvGk11WEKAmldHZCvRBbSguhp26Xs3ehPVYXxjK8gD%2FZWg%2F9duGrcMs2Km%2FEKvLrPHLrxLML26YE0q4KpoLHnAoCm39vew43VB8kM2vpWfXr%2B2DQpE5SpmgCchWOki%2B%2F3ikTlZos36rP8QNQGFBBnUlm9ML8k8kyo9n4N3DGhBUuG%2FhFfMjW1C8UOO9s6L6w2zJzHkNuCgV35vOZs8D5DNKse2TSKULIrTkEMn%2F3kDzS4bqGhCHZED6WFZUF1tU7Qw1GtDyJcKY3nmSzlUBHZr48fnpr2GcFI12EfeiJx64CA5Hp%2BG1cBiMF5wz6UIvNMHu5Gs9jtBKSbpRp9j3jU7rpdBhfqYL%2F1RmxGX5I461hO1E3n8ZNgc6qSFvAtnpWdRiFk5l1FxrE7invnMp6nDnWp4rq2xIMk1DU%2FMwmofcyQY6pgEeP31AEwfh6lKdJ%2BKnEWDRwXu84N%2FEbWhGk%2BTnMdhqqdb1M3qeglt%2Fyz%2F0FaqphKcBa2knnTGEvGdk3nuUwArT%2Bk2eoUHYgTrTwPh7XrwbA89F07F6hiB5tyXe32Zh2%2BFjgxQ2IDA1rQofxdJ0Cy5QruNVzV%2FQSAwQpcmtl%2Bhj9A4dcHQlQPXqG7xyTbV5u1xHXTnN9M3T3Y6QAgZdXXGUW17Lvipj&X-Amz-Signature=7a93f7f096183d1fe7b33b0409d1672c456aff2a29a196d7297b324787497ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

