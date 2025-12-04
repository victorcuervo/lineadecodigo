---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UZUMRIY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFK3ZshWhgrfKANvmdqMAwWloW%2FZf2t72zSJzhGIzQM1AiEA602dqFV%2BEeGLtj%2FXWKcYeWqD2P2Mc2Y6yjASA4Tvevwq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDGfwsXQQq2inuKBegyrcA0C2UoRiJWZd4GBTtt7Xa2HsNkHgJX5LwJMe8xxGO7SCix734ziMzu9XJipQrNORaTZzPJbNvpewwlNPn7JZSeUcnq3%2BC3t1jzyCIeE7kLOldMNMB19CV028FgOIXeB1izo7KEHG0ejUl4al9Xbd87xgvXuXY5OFGCi1C8Qlpw7E%2FjcTwI46L%2FhSKt15Q%2BlCbCTsfzMxQvAooNdQG8eWoq%2FIl7WL%2Fhu8fdxjh%2F3IU5WLrHknL%2FD4K%2FJhQq%2BpMS2WfGjwe%2FyYABKC1YaAskDymUZ%2FME%2FZC0ALrhjrO9ol6mGnuRz35v05Yso8QG6f8qHllxKJoaeZGVblCgeA7NfZ4GKpMmszS2mOBg74ns%2FASbYDoYKSwDRyYDCP%2B2cNkaLCZWlcsyYlgxyKrNdg7v22tUKumXiAtdVKFdeD9jMHx4NXbkDu3X8k3JmR7jxwRbYdxlJgGeTLDMoHqrbyw6J%2BWFsxCd4CKYGZnkxLMuJNN1Whug4A9yT5BgqVjhApm9oCucLawcmG2Sw2VLqTXV9trB7thA98xRAOf%2BKG9JDAmOKr1zQw%2F9P0AcJOtiCYJ2Obc3XYVjWbxVyV3jqCPZIq96OLQS4CWVsYjiGIY2SSU6axFVqzwdgaRRCmmjf7MPDnxMkGOqUBXNwl3SJEDAw4Yf%2By7l8XehVvZaLKSTkhTAiTAe5sZccoxKEnM29Q6DEa14crzs5hE9i%2B78PoDthcTQUoJNH5X1YvUmEONYP%2FsmtSzIdcDgfDg6XICUm7MR2Ob5quhNW8yj9LMCdqkOfiC9tv%2F2XjYddxDmOIJBUtA7rQkoVPxiu8pvy5doEq7ZH%2BJYcIfxkRcuiVjygnF01iCYuFCLhmfLKPw6lw&X-Amz-Signature=878576f9cec7472cb05691e1ad3b027faa9c4c68f46717d8ffa0d967cb93f847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEW3FAO6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCQ9o0RwYdmuDMZ6B3UEOoMUkRn2JR3laeTie6EP2c4XAIhAMJ0gGVx%2FFN3XYEPqbP23XggxDwpypnjI0ixCiFTAbSQKv8DCEAQABoMNjM3NDIzMTgzODA1IgxWAEObvLpTJFDxMewq3AP8zoNIyue7PsuoKEMr7WSybSZ%2BdGYnEXc1MlE7CHv%2FkJf40f8xvcGKOG72R%2BhDb0%2FtFLk0OAZ7uc%2FDGTqWJ0lFD0qypnru5LFjFnYgld0oihq%2B%2BH9lmgbuf2I9p5Rd5KwCnzVo0RkKwbpMuKVSE9YIeDtnRGR8ATQqyNJhzSRk5i5QhlMQJs3rxF1JtcCkqoazEyumCLi9WUhnVVVkBzJCs3jlpVLIw7MFL5H3Hd%2BtEeniXS0%2FMctW422oMFjyievqbhUxB1mPwJEOiIQlgF7uD1YJRvu9UMZdflindYw1lf2f%2BCXEID5q4QLXae4wDU3L1JMmdHFZ33V3gi8xGlG%2FmaB98GlOz2aW6NiyUDggTH7tcimk02%2BVnjkMxFeCVjYNt7Lj%2B0TK1vlEzXG%2FNhzqlBZiyEqVmDeWbwVpBDe1MGCFg0S3t0nfAvPKa9ULcCk2MYlDWOPFOsf4xbszxKmc%2F5SfVLNil7csA1A%2FWWt%2F%2BlKdzRf3lYWOfatlP3HppevFdhKNJLc3hT5Q7c9xv38bdjALJvqIHjxWLKwqnwrFKNSUi96s6AslyglKsAY7oRtBg1xQ2oNwdAq34llkVOT3wtoFDxrUIzsOL3jnPJ16AU3bgd1ElPGR%2B%2FBtEDDC6MTJBjqkAV%2B7E2Ga%2Boad2%2BYg37U3w2LXlGgBiKgSYaz6dk%2FXKKKf7m3d7cG6L05%2BxSd%2BqeKxFpDQbSHhIpkW%2B1o1x%2FZ9jmHAMdFhCP2rcDzp9rezNs635qQyycDTYjetzen7ci0yzO9I%2F18orF5q6F3zRgQGrSLnCV%2FBjl4c%2FqGdgkAI7pAU7dGtrCMLPlTlUJLKO6kPOGoXosTYDOvduUr3FyCd%2BwyvNaGO&X-Amz-Signature=861c1b1391dc919e65c5770dc8b2e8cc9b49406afa0771e34a9fdd23893e4e03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

