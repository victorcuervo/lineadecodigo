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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAZZHYAO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChC8EIWsKTOoMfE1mDbZ1HAr%2BI5NYeDxgxzUmAi3Z9nQIgI9LjdKufkATOTcrg%2BG6EmNHhNc2LzEpX8OdtVQOfiPIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN7SEBw5VKA3KbS2cSrcA3ovigQN8hOc01aXzxbFZJ3fFqyeSL0qkaEBwwg8cPcg795OO2hqLpT8OQ59%2F6CJyop%2Bb5uX6Ahk1DL0DcRGxIEpct9cQW4N5MQM1WnydkDSuLwg%2BvPiY5HtLt0MuHTeGIs3oKQBuUkecBB%2F1Nk9dO5vaOP8urPfi57Zz%2FbuJi634%2BQLn5NHSrW%2F3kJnh91OHH53iyGj1EUwLdem0ZrL%2FyZziideEy9nZfOHBEyoE5DQxVFnBUd1l599c83ZYA94QMfb8AsNKcHWMgFffOPRdTBSJ6oQ23NOML%2Brh%2FKZ1oQB%2BC8Fs0QUzkEkwmRewfJPE42SfRTQmjq9Bz4xONasOooBMsQoWOO58xFvfcyoG4PuHb6i%2F3BMT9h96BR7mJs721qHhHvvrXI57TbVQlOvBwJ54EB8GmvUjEeVOeh9CB2CrLoTSXTvyBk5Y3OM8tZ44dHOu5JMNTrcoN%2B8adFoH%2BIwYkzt76aGT%2F6kcL9au%2FImV9zHDnrHD4GkFGf1GUpqOiRqSNikgnx%2F8BBL%2Fc%2FtzHJWpbPt%2Fz1eRMis0U%2FBcDIBgyBLB0Iqn4kcvjvz5HNSCzuTyvHGzkfs35959SXtczASzl8vWED97vqkiXvt8SUCIO0bQ3iigrEkd2YkMIfQyskGOqUBokGF4yjPrgEuT6i9fBTvLv51Csr8w4ThBsIQB%2BJfT0BJeLtx%2Bsf%2Fvv9PiVEtmwFR8mmOWzuW76xmOOXjUehPW7OyW7OF29wS4pTZHHpdva%2F5SBwIHfWP%2BYPsPNQsaYzHGgCV1nly4WJXkKiBSPYcGv55ptShmh8Qn8S%2Fbq2p4rITZsX5NDlvrTBCHCN%2FMu2xPA7rmJYTNf4MfF2djZCwM6Wc%2BF00&X-Amz-Signature=d8f9f91eb63894a854bbf355bd4c69c068370960f3ac7589e9d584b9d6d09b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CMHIABK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi01Ztom%2BPzmu66nOqMMEK5UHm5pgV32PqFWzkFeu4CAIge%2Fqzec7XNnvwQP0mIUMw276s2Mrwcznv%2FQlvDoyeb3Uq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGtoNbHHNX0%2B9FHw8SrcA4tV4myMeJWhpFjTTyifwUakjmGRvNP%2BJgJP2jwJBl9VMro2BZIZowxM%2BCo3E8Xx0%2BUgLH3jvdB73nKRZjJpoHYAjBle%2BuqGey7C3O2JauW9ckX5DU%2BIX5rSmdlsdCtEuCntc5UT40rhI3lSzpfS0xxzppZiB7kZeImBp0UrTKHnXfIX%2FeVe7%2BTHtSnP3FotTJZdwbcj%2F6ReLzcSczis402BDJ5PWsZsaD8wI0eGj6O3hy5ZqiLaGDHjVfnM1N3mRaeSVeCie6qCyC8pvNdY2YnRDNcjS0zjD4ywRTG7bEsCEpGA2i6DahJIwBDpXT5CUvAySJvivB8usWc8Vxgzo%2FvaInSegzP7Hbvza0%2FbLi%2FnPPxEH4fe2hQr0MJIgO5J%2B%2BoS36ENEGqPC6xQIB9E7YZL6QylMoAGp9hyDCuChNDC5igfGJZC2yCJlTQm5f3KIg9z5LYDCcHxTY6hIM2SoIZitfV4MpmmiC12d5FaQljGoGHkVfxnkx4C2%2FHUtq0UyoenzYRN9qDPuTVX5C8v8kHSpRyaVt%2B9y4bFfymQ%2FksWRUB80XML6ccvFZbnquSjej153FQ%2BDeIEa3028mwh8QSCwVzbtwvZXXqgrKiMpQQAyxroSD6cObAu304FMMbPyskGOqUBYtZoYz1C6Q8xqoN9yJ7gqEd30fAulUMM%2BYLHdxVMUz9OfZJnYoZOYKUgBtjlpPLSs6BrlL6wbFNACrdboLLwxwAE4DgcCBJrF2YTB%2BPf3mZLlkqnjR9r8l1oZnZFrwMxZMx6Y6AvGY2Da8s%2FcVL4g3SRVYCJam4PUyXrL8%2BgEXQbtRcOHJIz9KK%2Fw%2Fq46WcoLyPPlfTAFEOvL%2FJijHI6EaFgH4yo&X-Amz-Signature=257cc91df4c0aae2fd88c5756a044bcbf57d69294315cc873011d565cf6a7408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

