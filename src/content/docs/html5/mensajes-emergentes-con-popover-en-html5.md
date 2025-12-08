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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTDU52YK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFatQmh6YCPsbwRetxgRanUc2wwpQfBWi2PxM5tOLokTAiBMA%2FC9vwmsJLjNdI5nStAQG9nCF80%2BXhJchqe8bk1zfyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpctZlvQCn%2FYF1vkkKtwDoqJI3MWDuMuZDpCbQnoSz70z0nXMBHTHZFPCPkGtbpMx5wnY8uGEaaHWbSw7sP6uMBZ%2B7Ap7oceylUbhwaiDgTcP7LDrrZPson%2FxUCn3ND74gCrQpsd%2BOCvfRveBDOzgEyW2DM1ZW1GxjMysjB3UF8CxZFMFLYhzZ8SuDKWr4VFlXFjMfi3l2bhFrkNPwpY3LNJ3fKemP%2Bx5Zf3T%2FeBOgfuKp%2FLwxaKXUxIVpy7YWK6AOo8T6sj3oXdCd62f4ZxnpLO60qx2XsQiUmAn6hUPPtPUnsOf8iPSGrTDZGtMkR2qbtHVRwpt%2BcuAKolwg31WZ9ea9Co5yEsSbe6ogUAmC%2FWFwr%2F4ZJP6zCuGHgDh%2FRhz%2FWblmtNkxNzwg6P2X6mTppF7w7eS0ES1t8CdNh%2BIXU2ZImYnsm0IGDbWneX%2FVVpiXYHidPJZAV%2BHIBvL40%2FudtfQb5PvZgPSV7ml%2F%2BjZx9cDDvko9JcsLv38AgPnsYat0lRDbZQqwCfTdgM2IEdToxGYJmwtIKLke4K5khIXm%2FeI3vS%2F46Jt99imoSEMNOL61KSiXwvVcXOJ8XjM%2BF%2BXhx1%2FaMw7MPuMNvSW94B%2BbRLE%2B7pBIOyi1DxrRTZ9gQMkDTjbE3bnVZmUlBYw66HYyQY6pgFuGJUiETDr8HlZ0MxCIJv6DvOMGXMKliB9%2F61eETN9ltK76dAV5b6SmFBIAiU4XliyO0spMIBu7tRNIMI4zYAmtavWMGpjXIAQwnwiaqtGf8ayRZ2J%2B9wrOKrAtKdW%2B7VVILdHrnBfKq1e2zpHk6qd6qyOX%2Bffyg9SajOV1qpr%2BLMhxxOKHCKornYJoXk5LDwIzH07unkfmnfn7bQLivZp%2BAD3UtTj&X-Amz-Signature=36dd87aab8db339a79656044a92b3d6a96d84acf97aa316367f1f027adafb18c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN5RTRLZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2byxgnjqvg01MUIPrFyO7Kby0dqDjdvU6Mxs%2BRqXVVAiEA%2FsPvFxd%2FX96%2FSDiIRssgsAuW3VGUCKWZY7qocwOAn3IqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaQdTzDavo3STN%2BDSrcAwpS9bgKtFcRD31e9tZAl8AlpQ39YjF0hzX8ILleEhpuTMDJQuMdWFZ%2Bwc%2F5I58F25hhDsd9I2Phq6%2BjdJKwIBctaFHGvtg61vz4DrQLWrZEdWOWL%2Fme1%2BpjEaOPm%2BMqIT2N5wv2%2FBOq1Tfxs%2FgAimGHNgzbh%2FS7Y0ZQZcZo2y1ckqMS2HltXcA1X6KlrsncTUnc9xKmQiyu0JxfzeTgGjBVS1qZZjQREd6DlkSbpTGWIKtavU0UMr9PhATjFj%2BXbS7VCGg8HkxklZBSZNkdRqxiPvIByxlImvGs5UAwMo7L6c86rbT2okNO5hmLRzyHb0Hn5TLpU7Ay9Nhg%2BVY3ERurMMzBJYlPaGuDS6m2esCkwOHBUNBYXFmXcR6x%2BCnoypj0g1w5zKOGFgqPYfVVRhylOFiSTKq2lekzkG7pXpP6zxDQNjWZ9toQdWjeNexVkHdoiC%2Fwt1jOe4ufHlSnz0N%2FdFNwIr6Mwi6SV3YKCoE1S2sZyNlH3VcnGpr%2Ft5DrYUP6QA73PKyn6uDxnG42eBxCPLXmeQnqWzB%2Bg0MoAwnbL9cXATfEmDzLG5axpmS3VX9gSq%2Fr20s2LRM5%2B7zhyTq5gWywxB1E53CXZmKZhR3So7JjLSjqe62znop5MMuh2MkGOqUBTAFehi84NQMA81K2%2Fbh4G0QN%2F%2BDcQWrKvXHSp8ttx4K0LnWSNhWiUU9kG%2BtiT751wu2R88VzBfqPlaq3EYDDvxkPx%2BF3b7sdmL4KknbwpuitBgI0wn8oP5FsevaXZNHFHY%2FzSDCyumdxIbTFpcOZzO4CQuIr7MHjxcwu3Eyi5n6s6UM7Coap7iTVlutUHOnSJZH7SOnIJkJXPyfsKNeMhL2n04Cb&X-Amz-Signature=adac6aefe98b2c03cd5fddbb4a3635835d2445c6648b44d004293fe38f65deb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

