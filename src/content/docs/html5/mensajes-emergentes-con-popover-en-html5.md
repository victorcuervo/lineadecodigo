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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XZF5AYK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGEbqrJsjz47gZpvxc3hVC3iGHej2Q%2BPUz5imeyyqzkAIhAJns8EXkjEA956FUZOkq81qUXeZFx0n86EaxV9KkjcISKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvnMbcNkklaNJHHr0q3AOVi9m2%2B07ESMVIbWYJg1eKUte1YNVtALGoqaS8x7j5QANPMDAYx1a3EOEbIYnSvOPWbZ8ZtedBf3AS7m3%2Bdxfko2FN9RUfcbKQJZSyL%2BcKdPAf7eYNIFzZWKdxEj7qH0n9oLIrN2%2FVkzOKIfjbV4IVeKyvtMRan1UGL3%2BDBSNxQ%2FE7%2F178iESxaKh3WjO9fgVJKdvxZGiu9t41ymtArkcJJog6lPfyp5Sp%2Bv1c9khlwgkeLnF3PfXZxq58wVicY94UzJsYc%2FLwbOm8jmXXUibzP9SnM5z5LSek01bWcy2kDu4InHjrnnh8D7teIqeN7RfNOX1Qj844yIsKlbHXH%2BO1H%2F3fbIG33pF4zQ1Af0inY3ykISJbY29q8oPPxWLVX%2FxRSjDs5isQbBeab3pnr7vRo0DaMYrvsvIsLk9WQ%2Fx4465B4wMpQ4TRVnVGdawCVWU8BERWTcshD7mYe2gsn6lisIHeBahbNdeoNI95YZFtzsq5F2uyu61zGV5x5XIiNdeERY%2FLaBkb841uxuJPxMOjW8QRwjCi%2BbbD%2FvgIKOGUcjGmDSOjQi1i7Yq%2FEhLXfEqwIanLQhmwFPsSx2tpJsqcP9ctRikRi8cuQNfgE1bAbpVMAi3M3af4ZHmrWDDtntTJBjqkAWorbwPVmbMtLPzMl5j2HKQ5PuGfrn3w4m2EtvhwyLgf%2FXZ85WJ8cxxrzbERHEN8Lgmdw4ejWIkaGs%2FZjnrzBcOVX3LDdNUbktyKbCJDmS5CIzRPtFw79QBUbd52qoXBchEvEgpdAakotmHIWIkJcF3AUcQ6WIHqJucEEKX7reAAecNxoOyksVkroS8jVvthv9Fn15vGgohuf7KlFLj7igIjmGs8&X-Amz-Signature=1491845fbea992af02d9df01f4ad71c4a696983db8d7f054472693dc4e4b7d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T62RI3X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN3szDLY5fEtQLfu50esGlEjnR%2ByrZ4cCJgUFDN%2FDgbwIgclSdRVMdPDu3l8qOnYyjr%2BfgNpxY6yjrah%2F4Bh62zSQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfv2IA8eeoHDSkjiCrcA2qYL1DNBVLrdoKvipSSR736jzYM5nqDhYdOojv5hTeJZnhGwP5K9hIi2wVFpZcIieedkeyaZW6oSRmtssqU0LtS7GbvuYTEH7ytUMs03jgGhL7%2Fm%2BrRjTO1P5AYXRp8oe5RV3y5o4m8I3fx2olXdO85O6X%2BsdjJzW3TuJOun28y%2Fid28SUrdplJKRofdVkr%2F%2FLrQ6PiBaoBRWc4bmkm0LtbUU5FVlxFEbyBYeGunf4BG98rgK2a9WH5Q92dRRsJR%2BVal1Q3Wrv8jNuL7ItwclLej697gf06dZStMLfoKJb0m6A2AVnyhbjZABgReUkptO4xmR22W%2FOVo8BosVKXAFP8oUxhoI85tuHnZwSCgqQjGRq5Hqwjy9PkNpIaXZKEeXRjlWqcSb79v6IvvduRJohUGfRI8VDe706d8vMK%2BJ7Ql%2FDg8ei%2F45eaKcJedZiBXqIgwGYTl5KG6ncxQ%2BIq0lu4dSGVX93596wXu0k1Un80%2FznNdzGfe9zb1IP4m2I3uy2B9aV3Q%2FxK4wnbxMS8nhl32Z7DA47pI9Pu31xbULdANsloWIus8d3%2F3E2j3x173QQlN%2Beygwdm8oQ4RDW8er1%2FHJSlWA2S8SRXzthl2pd1nzBJ%2FZFjn2wXKQaZMJWa1MkGOqUBtwmC%2F246R0256go7fvtgcxZN0ACXTD%2FrCEj3Q%2Bdny09%2BSEvHzBrObDGXwzfoPXnOcuvnAuLjrFIpXe4UWGBYfE0A3JT%2Bl90QAOTLhVnws7%2BtbxO3HiPTtAT6S6htCtCXFx%2Bbe4geFJ2Vzt1%2FAoITiPSKSAki4zg9%2BihPCmsGRfgHBQwFfbeBSjlT9yJ%2FoCHJKd4002KGf8R6nMiLenbGewbqXSJB&X-Amz-Signature=0e1769c87d9afbb052690b1e485b8194d2635c1a7849e5fa90b5d6fe28fae4f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

