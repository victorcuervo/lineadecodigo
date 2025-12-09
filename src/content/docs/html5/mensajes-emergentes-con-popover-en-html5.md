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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672L4JAZP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3yDK4Xx2oAGUheswCeh5YMe20%2FO8P1MF6uxbsCsr9ZwIgLyYzUuEo0pkdbDR0TukLFcyNclk05XVlX%2BDCx8SglZ8qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcgmxnB64%2FQJow5fyrcA%2F9aYS0asYsMVphaiL7tijrQw%2Bp8mOLg60XbSBY6%2F1WSuIqyO0PMWvS%2BWy57GfKJruqN5Zevx1Hbk6OBrJ0%2BOsMmp3afbHuhmzUc7Cwok84EAKbQSb2IPYtr896i7YyOcYzDKzg1y%2B6jD2%2FgmorWrCp3GP7xVuDR%2BYfslw3K3IaUculxKEV1oCk8TFLoaJGWZ3dDJfWbsKB3KhuurFWoceqPq5BqeW7B8Q%2Fk3N5phmvluTfpIHuYvQ2ejan2BTVr6AONMLjO0tKhYVBpS17hr%2F32bxEV4foMLUSYRqfXA2ZgZd34vIxaV2EFRiEfHAsEzyRyGc%2B0cRc8Ve9TP1DMDafsulcEbmRG0CzoAaMzyS9GzvlG18sBfm6oUe4QTwyAJ5D1kelgxT6ZyzZHJKNsacuzbiGYzdFeuzyl9qM92%2BsuF%2BA0saZ%2BhgVQrnrxafGrIxJdgnWkGBuC3fL%2BLe41ioTw3qISBX7P%2BtqnYcGCzT4S3bsuZN5dwcxMiQF11p%2F9KFoiFkb8vizfRGqW5hx3EDA3CX%2F2YshoCi597dwnT0ddd5KLjjsHKDAH933TeVdv9f8VFVwXXgqWB7pIlyEAgATV%2BCAj3V8f8FGmbWnbTIJv2vMfeGQOxwzjut5GMLLC3ckGOqUBEWpH0%2FwhR3nw%2Bx4i0WUYckatsPVo7rOTxvqM63Ze9nY5aTB0XeRs4dIh8qDMRn%2BXaVWGEWqBln%2B3EBiJ%2B8iBK0H4M3ytBJ4pCb9YTc057H%2Fn%2BxGSvWy9BVYGEMCy5juD3FzlWuUAKrbxXuTzHj3iP6hE%2B54sq0PxHI4iwcEU6%2FL8TTAxN5FKfOVXPtNLcztayS9lfA6JqZWR9%2BsyHLhbs4KuccEv&X-Amz-Signature=5660ec1ed13aaa1cc59098ab4d4920c8f84ac0f047ca1c350d9b6466d152b6ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZU4W5U%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4iBHh%2B6YqopzzCqa8tNz0nJcuYY8FC9%2BXfUthT5YbewIhAP0A65dConVTZ3V6eKF9KcfGa7hBLrbSOPns5RG%2FoQGpKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxn%2BOf6p1Q2R4UuV44q3AOGN3ZEaBXd2QebjquDBZPhbGp1Hntiqj%2BtVg2hLe0UiEs59oHgIj7W9JxzEc8lnkFS3xTYDmfRJEC4%2BE9Ily9IBj9JDvHR0NVUdOYV0mm7IJTooJhP0Wm2ufDb4qtcghMSvY4LXDsAfa%2F6DAu%2BhokyrpqDHi8n5TaWBVFci0SgrR0M%2BK5%2BUh%2F3L0PSfGYBtA9i6rWK2qtannLm5Uvd%2BcB%2FmYBum%2BTrk3F7D8BH8L5fZiVg9go8Jdo%2F820hxh82DlqLiBEBik4ab3LqtiSKQBDblqHS%2FVjBVz3R%2F0qoz2iO3uragv7dAJ3Hn3mas6JG4%2FBPPoD8lLpHzQ8milPV%2F9XODJcEmoBR3HHnDtEYaQX24GdM5Yez2F4y0Jluj1buDFT38g1EetDC5SH7%2FrZNr1drnrP8R7HBR4CkYfTngPhJJpS5BOJFa4646LRjHPQ5jZxFqYjfrW%2F7QGv%2BRG6rKovScAEWUDWjYF5S73eq1QOHpabd%2BJN5Is2etYbM8tDn2zLvzz6M88QwwsoV%2B%2BCVjVfZXNmVUzQNsYEhw7JRgTV3mlkZ1VTnN80NBktMl%2BpcpE5L6slqTyPy6M%2Fe6K5ZwffVbr%2BL8AO5RY%2Bh8wya%2FwQlHU3%2F4vujnbzHVKa%2FeTCywt3JBjqkAZT4cF8s2121XSqT%2Buun9ZZkW5cKOyXXxvpthQgvub9XkQtN6KhKHa9tQm2myOCWPHchmbgAtiYC%2FMLrG4m%2BzSTwVFcjzvQYFCimbnUM5B8Hd4vmM7LOVshdVd%2FX4G2iBvN1osSRDu05D3Rrp3I9IN8bu8Gq4mFbRZvS%2Bk1d76jgcAdpc%2B3ubqMce91jfXG%2FDd3W461rjPP%2FNYIt%2BRAJyPETRhe5&X-Amz-Signature=4624f5fd6ffb5b70d09b71defb9ca6c8bd83e582ccf1d45d0737199319d9e3db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

