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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJIFB3R3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPKAXl4aODPh3O6RzTuquuxpi0jFYvxGySt0sWkZoljgIhAOnvjOLZULtoCh%2FqROhk4E4HQCOuX4PxfKNkU4WgwYQjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg9xSIXTcvv%2BBmHUIq3AMdzX17CLbnRmAKt824hEArE3J%2FVEWZKSU7bet%2FvXhQjk%2FGZTu%2B4ENA%2B0PyyjhtuMgwB8ocmGUqcD8sowN93J4yuzoyQ%2BYRzo8NMqGvfZgmny1jFnz%2Frf%2BV0VN8JECYr%2BLQUeeS9Y9%2BD3uqJ0WxLLu%2Bac4wFeraD9nYkUNGybfPDhdZIfjovL1iPZJol0wl0hHkWvv46VIQQpRi1t%2Bj1shtLKo8rZg1%2F%2F%2F0Px8bOWZXfjPH6bKSl9NhNG6aGBR59p1UjwCYO7FQvBItI1EU%2F%2FfLDAujqlZ5HpE5pnFOGB33sYA%2FnA5Pj2Jlf%2B%2FW4h3Wpah9uF12w0MkiQhkXRt04aHGp%2Bpa5Mv35iirKR3LdeZahgNcoTXBphj1ZDOZ05YD3IaKbNPc8Fh6OboZqUGwLsAB2IuiG%2BmNWchDAw5Ph8AuiHsTi4PabR741%2BRa8OW7COT6RwFVqFHY4M10%2BdcxvQruIzjLdfoz9xPIx009HT9Ewjw1V7sC%2B7Sff9bHHDgv0YjshH47mR5A%2BcxTsvGIQEhMqBDuTfy4oMNErR32iuSoP606GnzkcoeuuFrH%2F3wp2fubSvmXpdpUZENsUGkhTccjhzhuiGV9MV6LSxcWXvcipQjyXEIFT429ML9%2FLTDi%2FdLJBjqkATKtS5Qyzx72R7pfJ1sq6GdNfUoq%2FuW9qoFNvmOZTiSZ2JFQrPQ67%2BiHc6Xi5swnw1HuePqH1gHLAxf7dcApcEQ44jXolZztrGRnzBaMrX6Q4ojKIbq%2BUIqYtIDIPjiPTO3AhRUBnR41k3imB%2Fe6uyLD9rWQhc7eZ731byTSWA%2FieFMzd9aFUjTn6C7ogYWoNzSSTnv2Lrk5fJsb3VLZRx8wvNl1&X-Amz-Signature=c43d8fb29e84fda9662191e0449e0e2d34c083ac11c5c563d784205b4867aae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USMX7UI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEM3cOEgAFqTJIp12WMNzScMm1eJ1Gdc5Ly8BqcP9XmaAiEA2XlNgmUy7x%2FBJst23L780Envsd8XZJMjQJMgGuYJXlYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASWhhVWyv5ORdMxmCrcA2bI8Y1gtRP3layOtYEuakOP0zbM10cGHNYEhpVrlFJpyXC%2FLNLUMBo0pdMqwLk3rNoGHkpLb25pBDMIx4p7nDuwx9XIJvluyCGYafnxRifLwMPTgJoAmhnL8PqVz6Re6VBLTGL%2BwafnOZ%2FGn1ZGlsMR0eY4tBS%2FKFduGLjk4hsHuq8F%2BcB0lLq5kibw97Mi7W7R45uPxRhhV2l%2FELCOWjCkYjIHX6Vuzx43BgyoRRVHamMktzPPbQGv5hQBfUjdKH6LQY7B2DlrnrDngimzip0VSKHrsKA67qhASzVAoc0E%2Fw4dXwIlqf%2F%2BW7HtO0rT%2FgCbisn2SPzMpJqfx8BAJk0kuowLVPGdYEEAHEE2OqQFi5ERTcEw7lX9MDOWfpTzZgqjLU%2BtHX8ED50udP0kl6DuSU9Il%2Boribot8e41oy30lzl0RCi%2BC9VDYMK93EgfvYCq%2F0u2YmB9EUJeTWyP7R3p15FOdNmtBiNkzOKp47wlsraSHJLM1hut0DP7W131uf%2FeWFG3UkoX%2FP4ICym2gkFQ1cFH%2FvgbcYlsKCqCgNzOszpTtgM%2F4x7vJr7wQLy%2BvVX4aF2wkhyI19BVOjXoOgoeO%2FB2D2%2F4Gc0c0Jp1kBWpSrCRmu3eZV5Yk31bMNv90skGOqUB5E42T6yg2Jbro6fQtXLMk%2FIyoFbkFDg1ELbZ9izUWwt0XaoPhegTxlt1Bo1%2BAoChiqfOz3ZhgExB22ZPHHWoSVBWDOewOKbUGAHnPDGxQkK7aGqx2%2FHyTe8eEWfnyxReIZSgu3oPKTTcVL1LIDnL0COys0KCiAh%2FLEBScdwGw8o6Xpz3uWk1%2BGAhe2Hm2SQ7K8X8FHxqWJEV5lCRDHWNRrnmnSP%2F&X-Amz-Signature=d8702ebd248da79baf164b8a88a71c2e265d505588070604d7eae2e54462a52f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

