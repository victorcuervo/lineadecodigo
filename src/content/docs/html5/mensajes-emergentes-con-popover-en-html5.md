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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SKQEGYF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFwYP%2FZ9oDlRajN73YVhKgtFw7w5OZ30SoYs%2BUCKR3uVAiEA3u8CIqYWK712jmnZN08ibIUgOGWEbhN%2BAHHtvs4UJXAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHbghF5%2FIMQEXzPD5ircA%2BOAid%2BaotaEdJj3%2FCPSMjG%2B09Dl8%2Bcjip3iITqTmCVku2M%2BNobvc%2B%2F38jV6Bp8Zao7Zaw2DcZLjeHtWyXsBXRur00YtQ%2Fd7MQJijZKZeAs6byBmu5iemGmeI5aAZ4ajCQG1QVuy8PzUIjruCITK6s2vxrBl8e6TEZpxqZNTMpEABdQDjWWnGNcTlrIMWPQpAr1EHJxNN%2Fk7aSRwlgExRSuMoPYcAbgbmqP9JKYLjzvAv%2F9JRsyosNVCJ4NbNmZo8ISHMrJS%2BylOOrR4uRWsRYQoYia2SiNn6z1TbBIrC3VEXO8SDdzK5gQRv2afGnvRsVjFfDgO39ftvavmt8DHE5rBk9T8ECl2mZa6RZzRAxQa47HtELgQRNAqQSU1gdAssK0j1hh%2FEB2JajiPp%2FQKbKPeCnAKt2DIwob1d9%2Bja88VcPSrNiOkPZAEwUQT%2F%2FS4Z1kMTy5eYgyM%2FPtD6ZtZxX%2B4%2FR4A3EzCESFClD1XVDnhXPQc%2BxWIr7N%2B9cdxowNeVak4%2BsC1w41nIkO16%2B3k4a9AJ8tboy60fdU2fQWg%2BCXtRMeGqglVioDG3iV2OFQFbaKdB%2BaoYRszhgpb4SK823LcIcKfbAf9ipTkxoHwRVqGtOoqpDwS1sIA%2BbzhMPfnxMkGOqUBzbhL3lZluhL5IwuRb7jz1GhxM9IzTPhz4TKm81YMd6vS9l3KjTHAo7%2BtD0w%2FyOGl0AXJ%2BKhZ%2Fdy3ID2IjLpw%2BtrdTdmNf9i6%2FeuEdVhntwCoXMM55EVJgskb5uTdNFGvqcU2LZT1gZu%2BonPnZNIWQZNMVYjydBcyBBsKPcTDw5hjhgzF2NrLsyAwmghvAoDuTjQ5gNa8EmzDFTMK9a4xnPwGT3D1&X-Amz-Signature=83a71fed954ff4f8b8a018503ab4260cff2d2ba45d3db886b80f3652253f61e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKZSNRL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDUUXcMJoLSjbPYmF8UQ%2FGju4MOoozK2zKKLoaP4%2FeQ6AIgN%2FkaOcbPvz7x3ZTpWCyb5QfFFnHr8PzzcWd8BALWKnQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDO1KnVxMr19bf0Vg3yrcA%2FK7FVfIIOzRtdTXA%2Bb39K8H6ZpGys3jY4Er5fYSZ%2BUAPB4ox%2F3ITyw5mHRNucESmyBD98G7EsuxHfis62WqKvpFPG%2BB3ZNNEdC8g31gTsgqGqs9ffymNGyDqnWNb83Cn8yJYLOwyvQTAvxqIz9jk7wBU%2F6dDWSPHWwXrzJTlHulRXSLMRkHt%2FuJmuWI01f3B%2BQoU2Fukg%2Fjc5l1vefdNR%2B5ZZEJlgg3LPPkl7cjo8gx5S56aKgw6010eutHVVyWZH627D89kAlcTU8gwOCIaywplOrkbfqNXuaKDGnnGrVmF%2Fkc%2FA2shqvyz2CikWL%2Fj3R7Vkr3jMl8Qy7Zc4KNaTofev%2BBF8u5fs0W5tg0XsGjVu1FIBS86ezBL945Isa%2FGjehruYSbh4JUBmAoI%2Fg5cgDEwLPF4ftzowNKH%2FLA45OrW7MPhAFccSL1MbPuDkx9HDtiKz7hZIu8Guh9ckav64TQdaOfBD%2FnRk191rOJsnFTMysBA6%2FXjPgeyceBlObclfLDEloqIWg%2Bm42Re%2FESjcLF9A3VXYjU4g3X3wwSYrLNmxnt4WAv%2FyerszfcssEC%2Fnqmiuqet56wFOKokR9Rba5sktk4Opq%2B%2FwDGuCUrFeV8IrmbFD3gyyuJMyLMPzoxMkGOqUBw7YkSY1lVhl53TbB1x5GIyo1YJ2OpCVZGRmxwYWgHVEbUIk42hfE6DfZzvlBpvpTeDP9K4olM9VLT1rieC%2FsM5jr7Ay5QtLCywD45LsPTuBZM12IRY3Ixzzaqm7Qpt8%2BGt7zqSrSZ%2FT%2Bj%2FV6e2PTOc8TRH78x7JQyzrGnAGEP3oHpP4rUDqi0bOVFf7un7dODS846NA15CIFWDb7QwJgxX0GZo%2BH&X-Amz-Signature=c301ebe8f7b97d10bded24820bd6ad9f1b2b3579f9c4e94d808252ae05bc3fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

