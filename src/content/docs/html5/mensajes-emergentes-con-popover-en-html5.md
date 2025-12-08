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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHWXVT2P%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLEHQxBlHkUVegBPGUKYmTOkvMLtY9VgKypRPvYssv%2FAIgZ5r5wJk6%2BPsYN1QzyOtT1AM54BS6EdJO6RSXEXNF%2BVoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIw5Gwb58GZ9JKa78yrcA2an4D8W%2FTbad%2FHyhNbx1XNt6%2Fxw5rWUCLBS6Igi5xTw0v%2FuCNhhk8JThOz1rUpJZZaIQLkQ%2F%2FkdlM2SljDJuxmg8v7hoaiX8iHW4vE4Nowiu2sZU33iT%2BMVUt80655Twq4Dt2FOEnY%2FSwFr3MbQEtZuQ%2BYwqBAs3b2iaXvG3qSyVejFUl2GKNhK%2FliqQX7IPqvuTt8WBJ2tDuFAZGmmnASZFrHwxNROmd%2BGhozva5nRkxxBkSectjK6p4aK2ngk%2BbPLhWpS4eznH4HCR%2B%2F%2FgidAfEHENS3grWNVRKX9CQuS0ednu%2FkERpcej6tkQcCHXN6hYXvMP9t%2FOtXg1HxVCoQwFSY47%2BaLYI6FE10OdaXcyuer4n0hCAxU6WVcroJxgYafzC72SnAhZdi6SKVbXa0Z8fTZOd8IAqHL96OHqKDAi1rmGyg4UPG6mYUENPlLGBMKtWiVGxoAr8T1pE1yoxdMqZLfE8nrC9g%2Bpd%2BmB92FBjWRq4DufpcnsIh9if%2BksCk9Dznkfj1aI6jfmfVN4DfA%2FGj%2Bdd0IMfxDAFlMfLAFcA9w%2F22IXg4zsQKLREpenW0NAAcbxjhev9las1iBUFd3Oh0zl2d7%2FzNdaX2N%2BmxSVS54dxwwKEzZXKVRMJvu2ckGOqUBULDsTpeL7K%2F7C0so9chs%2FoQopImM%2FjSm9azQFsPkOvylynHihFd%2FOkUU%2FQtnZzgZ4uqYyV6yxW1vVeAdWkRYUWDA7%2FQiHBjdyxwiscALj4l2h0T57TSLbrIl9GdAHP5xhEt9QsA8mdxkoauDz7t6%2BKpuCOqCpct401j3LLPHCAL2p4qxQ6vTh3BbI4Awiy22qSM5SiQkHRCisWBFT6uSh3I0EnrX&X-Amz-Signature=1c14d017357f55ea22adaed10a299e3c3724d148ee05ab10667f365fc40be458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDLXXFY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD78EdhOjgyxqskauCJX9GAdhtmWsbnl4ullpM0NRtl5wIhAPqScEoC4qAHdMZm0QFcd1ioB1ibDu0j3a8rSqTncOx4KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoL3DDMEugfO7ivgkq3AMusnsmL7voM8ukhtZT%2BGYjeB0NQvYAMRLTbnojS%2FvzYSUXyefkgMLNCkXRDaolr9vk%2Bg162YjUkkaMZqgCXS5G7K%2FeotA2R8LIpjoGvlAyDpEuffFlgHXB2w%2FpeF1m0bgq8hUR%2BgLfwAUyeWeOhK4j%2FRUwDrY5qYjtcVVoZ3%2FtD4BcLD58mo9fBgZh695%2FMHShT9tObaohozN3jDRSYgy7olyOPa7Cu9VfyiPoSUamlAaTTqipz6OjB5v1xDKg5JOZS8Sk34QzOns95z2plI4GLGkl0saq%2BdxrFOrIvzm32w0Fhn6HmdonqgC0ovsffRM3SuabybevHpMJj6tIoHq3r4x3kpAQwSYfOeLD1YAHDaYOz8%2FClM%2FwulapRrMaLsv9TdJJy9OCu9akYca8JoYgfaNLaTr8uBufccMiCFBbqvvU%2BwPiJwT3PPL%2FMjU1OSRNpQTQG9owlvs9teZNelI7LDk8QAtjXRvTxt8BGk%2B9%2BrhsA8sE4VK3crpEg9eE8c%2FOOgsUWe9%2BBqHg%2F9%2Bo%2Fou9%2FXgltr1d8olDMnQhsChjmJxZ4lTMJPQ3WkytiEU6c%2BW1nENnX2XNAo1G2YsutfFAaovepr7hBLk9mbMOOm%2BrLU4L720KfE%2FyxEOiUTCq7tnJBjqkATVUjzQ0hRdsxcXmyDEkCZ%2BpVFZUWJqiwGflJ3m2oJY1SVh28itVbYlrtv8wVneZ69KmwTAvFNr34B3i2bF0OUOfIQ%2Bo%2Btn9yaoK150LqtbpxybrLNjx5rrlDRfdAjtCssOYTAF%2Bow0s%2B5GSpWaPUilbi4pc3%2Bs8HMvPMVBds59QjJChDHFkaKlxmeu4ZbLPnDFTSc6netHuORELdpnDq6VzzF%2Ft&X-Amz-Signature=6b785761e2e040912675a2d2ad8f709ccde4ee01f998ea6b3b131850351e861c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

