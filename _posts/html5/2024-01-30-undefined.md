---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCMEZMF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDcGNUDg4Siz3yIAyJMbctPVJp92HSR0ZGiCdzCHlLxyAIgc1hQDnU9nOwol9UlzjyDu6BKRJ0mcF7R9fXZuFRV7gwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDIB8R2imoqxnWnG4CrcA4RBw1KGaiX6XABUjiiO1mpNdmeUKpLL7zsNg4xU5xleuTfXKiJ0GY4FK8yGgqPc%2BL4KkhZJJ8ju6yHpP7xay3wG%2B5IHkMGu1reBi8PS4xMPGgv3kkE1zQC4sGmB7u3Yvtzv0kkJzr03jXgI4MrTQXqXcC8O8MBMhJP5nhsx7wdot%2FhiQ492OW1XUffORyTA0BLFcpREsg93P5wOg5xjow797pQynXxG2KC7dLni18aIUarQT6bPYCXSiFxTt3H9GTJHKLoePQT4qhEQ6%2FeOB2emSiEnk0NFTcyEMup0bvV%2B54bjKQS%2FZs19BZ16Wuhv3mo2m9CAd4P6TTvuDZ57D2wszshXJMQm0LkBkqHhYNd6CpNqSe2NzdvOWhacW9Up%2FOwf86MVcHRkGoxfE3%2FwGQDNTu1P%2BMyOjgpLaVPCdmc1R7rmB2eq0w9jV0NZvgxt1aFvj9hXI%2FS8T5DM76I%2FYB6cFjcVmGe9EgZgIuOjsxKrqHETwdV2Ynkd5Wt9iTaFHbfzXUQOIPfrf9PB4CBQhdV9mF4c21vhs5pfS7q3JD5VbJP61wczDozcN9DGKreQNQn70aNcxuyHpsQ7sfa2yfTiXPTKPbkRiZXBBejzUKGs2%2FrHDeLvh3YziSAWMJKVvskGOqUBHufHt2lSO5xOtd%2F%2BXvXARh8H%2FJBr2bgRei5lHLyt45NCXmaUAXvOdDatE7B0mT9uVdsyK0NxBtDqqlgXk7MZYvPZQYatJm9Pc3JwV3DyainTrzK2oT%2BwzVk66wu%2FznIbbl%2BwL7B3KdXKhI%2BupR95bIC7KyiLX7hnBSrLpCUdgksJNOF1GyMFj8jaxU7QHsOHXoAin3X%2FbfgV3Y3XFO6JcmbpR8DV&X-Amz-Signature=78943f3cdc43482e47d7b7d4d429d48beaf8274654fe4e74466a68194ad57d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCSDD34K%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIG7QVzsqn6f1BRKViPoXSbHGyhACTKco2Dt%2B%2B57PXvPeAiEAsYW%2BkUn0dCkRqrC6q%2BHlLIFYcXMw9IzRek5F6mPJwUsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFA%2Bhi%2BjDaAuMCv8rCrcAyw5rHHXQICOx6Zksoa1Jg4vO%2Bl6BqoxSWyHvsZzQY0d9TobrTkn1DXfFDZmfTbjgVXWO8yEimKzLXwGGWYWoYtSdZIBUFvgdyRSH4bFFCUo0NQnyQ8blcC72Lsz8LaRu2ZyH6AmIyVRHNplLVOlAZO5TRq4QyxrQ4%2FXix%2FY8S9Z9vnDyD18D06csqyyOH2jaC7sQdl58sqgIWITmR14SD8t2aYkWuZOjv%2FeS%2FWlKetr7MFHzY3PrOTpigLysYDV2T8hy0U8FZx1m4Mxt4pTtqM6koyu1OHTs2ILdgEQ6%2F%2Bso5JxV7k1kQ%2FYiH2NgoIi9epJufliKxoZxjfDlrqNjs1vTIcHwthEdhuOWmNy%2FYYXdxln34AO4Ax0JFPGE3125TGEtsEMLmi1hqax%2FroyLtNwHSscTwdKsPpy5c5ziINjrTM5YzdjisqqlUdsOgx80f8rBwvJCtWlrWP7ybfQdHn5SAg%2BkUmjUpWXtBWAFvLaJ6cfNsFbDs1gTjZw%2B3Io%2BwbB9ylsTXpfLym%2BmmL33T1Ic6Zfj5FDGVlm7RazS05rrRQCzR1%2BVxcdpPvHKuyX8qS4dETw7ui0mPZZF%2BoMM%2FN5G1V7W1BGcj%2B%2FggG%2BNFIJOCAgVAOrpZFg307cMK%2BWvskGOqUBqALOkNpQIQ2%2BYo8F4aNJKcZm47KHDJrvlGB86xRF7o8tsDzWux1TNHaaCEI54qgAP6hJEME74KVJ1yOF%2FK1ffebUkX18M4gv3hr8gIiWhcy0ABada687lUZOkkw2PZWkdw1p3mHRFjClbq%2FPPxglXu%2FPPM4ikAsJa%2FIdj0W03LMsrRAedNgRUYEM%2F3GLjwBb2orzeZACmE1qXhquYiE6JsA1v5jq&X-Amz-Signature=3c94778232be5c7964e9bcb0583aa8f845bf3948ec4ceb32b187b3c2793ca4ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

