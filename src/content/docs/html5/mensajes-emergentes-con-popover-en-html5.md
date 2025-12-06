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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJOQ6VB2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAykJUCFCegfrPQkWaiBva2WG8Vij%2Fh8KR1BljMEWhEQAiA9cM7FuUwRpsTf3I95m4mtb6wA9OmWC1fPH0jzDWukJCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMejGqe798EHvI%2BtQMKtwDTjre6XWFrpsd4gKwGF4CUAHkkPHwBANxQKaEEGjM0HsmkBbZVvQ7cmp%2B8%2F3S01gmFjBqfpChnGdzgLaqBaxrrul3VinBS4qwRzATKFak6vODead5cb4Z%2F8TukhGWPqXKb8zjdbeGcGCx5FEHJFmkfOURA0eTGdTQNaJ4ZICWPab7F1AvfDg5cb0UtuDY7SShTchxmsJMsKlF5EKuKpDtGaCT7g8ToK4svlXGy3AfiTZrleuKk50wbD%2BV6ftXoB5145dYdVuDSMp7XtEHrDbZzzptdNcxMMEQVjkQ40fAPwDtmn5TfKLkLYu0bKH7PUgwj%2BIQ8BPzNtJ%2BLQA3L7ot6TzZFNQhUwtS2CbG725z2P0eXYDADsK2IRjJ%2ByPGvyxd3guGAYn1OpNKAiWe8VO0GqwogSGPi%2Bx%2FncgOcCnh3sToNuu%2BV%2F%2FCED4HqXYncTx8oBWzYhr1K%2ByBZ9%2FJFT5fqaASo8NRXQvPXPLD%2BWCxSabW7OKA6EVhCeWNB0UWujL7q35maBVOLt%2BJ5ugcJIbpC9AIriJIHAPJbZXTLqoM4EcP6oF0iJzbqWN2QyNahvBkvrvJP9w3DuJ1g%2F5wR5PURSG1I2Eq6UmRJhiaz8iangD0%2FT3%2F6a0lXteCkvwwqcTRyQY6pgEcfig6h720AxKv%2FGbCrEZOtVVHVZ4rNNumML7DGo4ZFn6YRHkuuOMxlCtnfNqBNbMPZJmYMmshJM6hyIw5QeiBI1cPCsH02ScsFXnPEO2dHlju9xsD1wj8uj8xdZZ72vn029VeIzAsdOnYs%2B3CclpSpUn%2Fl9ShhGjAbQuj9grXxoS9htX%2F9ZZa%2FTgbPrNrj2%2BFg6pzKbBi7%2Bh%2BZkH8NHe8qkrIfEG2&X-Amz-Signature=c4a1518bbdf0883d609fcf2e2aa1508814ee5736f1ff23a9ac6a63c23713df48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2FS4U3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzDTKDoiPpr%2F7pEbFUGMfoNMwKuZ1U0f5uonK%2FtNn%2BNAiBrOewVZRLg7e3PXwfDiSokuQrZi91QpmOc9lzFKD51Fir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMenne1PYI%2FZSpdGXXKtwDf%2B4HtcdrUFsp5THbtKG166WpiZ1bO1eH2aKfDrJsDA8nR%2BqzYsNDAb06jjYth50LzCcyQsacJMG9MgV%2FzCh7qb2sdbwmdoIVqDyFzD8HcygAgve62xiZtIYWeAlHkx0%2BMABU6na8KaQ8pgCjTw2SYhEfr15J74K%2FnaKLpI107rFDye9%2BUM0oiqboDeR%2F438vHs9vQRbkuLANweXuYNvBNSwkO3G8WDRNiKX451ljT0Z3onSgiRyZNh%2BuZ%2BL6xllFks0%2BHaekWMEEtNMdb0ujl18R%2BXLvUnsycUXtLBhonb71cekUuAJAHyzIHDthXZmWA%2Fp6NZtc2w7V4n5Y%2FJEPYPMNgELssjiVSx7AEzu8U%2FwWHWanjiLi1nZz%2Fne2ZNxmy7hbqvx2%2FqGVX%2BiXWObQDCkDBFdubocLV69IKbr1lX6VNDGgQlWpnWbOJ4XQwjPUojqEcwQE9raYLMhlSr2d%2F9dMWUmqScP477e3O3HBu6CVSip1TnLNsv1njmwyfhrkGkGP2Qhap9sw0SfvOXiESk3ebGGnWI7q0jSKfwPYjVxAQZ3KmlE5tMBIuUgQHB66oj8e7Rq16LF2dCbPB7yoOhY0JjIXP3s2L9Q4WWIyaNQGUGUArRZtKQcWibYwk8zRyQY6pgEmNFJS6%2FY9HdLXqnAFS%2F0a14QD5QO%2FjSxnQT9JXwfKMx2oFW6zvg20RD5e58KmeDvRMXokSx8wgt91%2F55PxU5fIWVfUvVxj1%2F%2BkrBLP%2Bm7sg%2F6sSWZO5mC49tmIlGtv6ua70dLasuRMVuc9sCxzhiCKPHAdghYPP0ewk2YBXtThlV9knijtJ9Yx9ZIoa2jglxY6kriimjpSIvCPeimv9CXWVPKfEpN&X-Amz-Signature=4a9f04b45c25582071eca4642d412eef98072ef11c20534aa365d4a368c9d757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

