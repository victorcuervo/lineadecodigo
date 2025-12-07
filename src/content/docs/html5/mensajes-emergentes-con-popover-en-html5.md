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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHUFJXW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3fMvXOFqb8%2BE7ck3fboiwIi4%2F32C8J2Gq7nMKJ37RYQIgInTLad%2BTzEzw8XVNuq9IQfRBJKDczqtRwnaB48a1njMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMl%2B6RSGHqBaap96eyrcAwlXLCYDSu%2BSUi5o4TySd32x3j7j02EUaH0KfZzBFck%2FNkuBsY%2FBVLjPeuwfwx32NxO99cFykZlYMmq6HRlyRQ%2BI%2FIAR2BIfRaDyMSQQdrn5VKQSO0Y7%2BlHILBaqrlyuo7jXKLTGTKYD4ekRDSLVldwkOzmb%2BoE%2BiN7ZEWhakmwuSFhV2zXmolJDHnbrgMXLzukQ1MLNlsKjxCv1KfsCMBfN6UnO%2B%2FGH%2FIKec9dCgCyn0zUmoaAaZgD8E9qtsaIdkckHr3efzRwJfCZxHuM3JRO4a8BkPmOnd9QQfPZHPVCT3NoBGIzIGEYHg1iu5i9IFRjR6SRzPz8f50Ta2Q%2BiowC59MQG8FuX6jA%2BE2tNeXkA4YBG2l9elNpgZuYn6%2BSKMZq0Uf%2Bk1Es3mI8SqJPFEeXiQKyx0rqKOvjuAjWNI%2Fu%2BQDr0XTgW8zH1HVGy8BaaHSaFdRAC3hCUPxIfMw00aAzAyzFkIyHA4xulNsWUJLhpfFRbEHwiWTU%2Fn7NFXC3fecYI%2B2nIVOl1NO4s2VIKTIHY0XK1h%2F7XYYd2A5iuojsh1VQGRwOxfykLf7rXoEYAqlJuToJNDIMwXIQIZ%2BNwNt9h%2BZlw20qJqgABY%2FqL7RkPu5rUiDKQ8h6xTBiPMLSZ1ckGOqUBtgFJqUeSm8ZumIUnnYSfkzpCMwiArHi9KypVmjiwAZ%2BfE45om5KHKVB8gWfC9vGYD%2BWgs4O5ft%2BzJ0HeHc%2Bo9RteHrJeiNTaTzKmvmz5%2FeQwX%2F%2BRnL0seWHSYv6ycmu0%2BwU69bIOTb2iyxyCOOyylStik3L0WurGpMhI9zHT1Exo7dEvCBVZWVafN8VlUaxHApXxcAIZ6sSySUAZq5C060rT9YX3&X-Amz-Signature=899e8cc9d8c2eaf8773eafd01dde4ca298246f9be4635d62a930419e249ac163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LOJFH2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcED2AJEny9twCfDOxJeaqSlkbDyG7od0E92mkxwdvDAiBRSKF8TcycZ5WcBFprWLAMLhvRyoKi95oRQNDa09QldCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxTmlqNphGxpgbTeGKtwDsolDV9eLo0lYau9W04kDcFtlGE9ewSuDxCPkQRBy%2FCvVtKgC9pIQ4%2B4JiJ9q7EmvaH%2FesCLb9LoayAlwYanYcEewMnC%2BuiIO%2BduydExPDlG4%2BPADsIyuR5C818v1%2FByRuy3hOCA%2ByNNbdO0n5lME%2BQHgHwMAZBqak8BZ1X%2FsyjizZ0qEHU0szAq9Rj6DcHNlrrZOIhWG2%2FXsB9mzj5SH5I5%2BRUIdPTVCRE6P2OTXvooWaNszjjkTh9Qc%2FkN7f9W39IbMZZh7jvWX0lA6Uhb20KaDeFptX31P5oBIsp8inmLaamIN8%2FtQamIrZpyA7qYQEE1ZMbbKtsgCWOA3hVA%2Fbj3H4F4bM%2BBjOB5jQOvCJpKnRrbixWQmhpD%2BbGpebrJqtIJZdMvfacExLfbI91F62815C%2BNWflBBIF1mYVG6bUUHwluQkCNQp38YqAhSJgbH37Ub4tH50GHtqRyowEh9ddo3YKLBoz5V5BsWBRl9Dgh4HSLsijIUWNCDEd6XYPRZQdswnm2O%2FzGiyf%2FHHsC8E7Qs6tekobeTlI2ZZ7hCGSSY4WVl6etxw7fX6PeCl44NZfB%2FnLr4Gx5E2DOJK5oBHSWED%2F8tTzmvknmMWTZZ%2Fjfvi5iRGfL2ussjSo4wwZrVyQY6pgGMXfBlwFbJM2FR8dd%2FoFT2QeF0FfdPDrJ%2BPAF7NsrP%2FMvT78O93J%2BD3iQhpMbj9reNVDhlZUxZg2zAmVmIlrwmCRrj%2FHvTcCWR10K17C1ZijizJIAVRdj1ZP06FnvfEqxKGIZjbjYawy2348qFCgu%2BGQPh8rtgha3nClkc9sVk5oayp5llSdIeW9OhCT8eml6HlSHFVxRP294VTJlMR%2F28StE2rmnk&X-Amz-Signature=1caea26ea6b70127de67fccfeb44221bd2e3ae655f3c6c6b5941346e3476a3a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

