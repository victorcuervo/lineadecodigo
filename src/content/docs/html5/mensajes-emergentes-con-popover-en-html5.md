---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGM47UA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC0RGMSxywJFM90HMFTTNQ2Skr%2F3B%2BwZxGRme5rrAyWXwIhANOknHID%2FHpNCMG5V2mG8KNhQzl6X4Tn66aZLCQlThxkKv8DCDYQABoMNjM3NDIzMTgzODA1Igwg645EH5ex6%2BjdFoUq3APfjNEt4TRg3M8h%2Bo8MmqYWdnoeSPwIRJ%2F3TT%2F2awhpIcV2kurb4t%2Fox79EZKOyjrMn7%2FzcPHI8TlOUOXr3WnJjeBEd5aItJy8m%2FRmfg6xb0tu2yxRjuQXnq4HNHsSig7yIUOFtjPw7HrdONcCFEXDP01Bck14h00byBfKvWGYGM4LkCMeuvVfuXbZfGn34qm1QJ19BUhnFNsH19wfIUxX4Kw84ckf5ScbBWLM39B9LcMpbM8CAeattPtffgQCdsUqU6hY6oaK10MkpOtsUysjZl6oPnHw3WhoVGMBpr8cuR5LiQVU9E%2FxqZDbj%2Fh1j5RByHY7EIDxkma%2BgnH3WnV7xzEnHUoZHq9X7b5bMNrtAgC7VT7C134p%2Bk7BTjSzXijbwCyuRys8CuckjAComxdGh9yzKCiKN4dP6H3SbdTuxucvt1c7%2FYzVt1BVHPFDQvtbEO93daRmjZiJR5XmKjBMoe80ASnpCbVe4DxptoqWx2f3pegCIy5o1jpZciXQt1sQPUPTSeYTqo2Vl66UWJtdgBnVZObcmqDkMf93V2LjmzKmqoyEFigNLmpOKnSu44jL1yyxma1ScgYGrY6HOQ%2BlKbiH3COopa5dBa4oGk5Cau4pHjqSl5tFTJdSlqDD0vcLJBjqkAQJRMcOVBR6gTzy1MtXiMfE30HnlBXAX%2Bzg6wAy1%2FJ7ClPh5dXLVm%2B%2FFV3xSLGdjrvJDYFrz7nuQz52EmITefX%2F1YGBeT%2B3KXTmCdqpYL5qvSF7JZc%2BCDNw13%2Fwka3SYpv4t0%2Fmgi9RiXj%2F0%2BboFJYtmclI%2FjtYfSzFJZV0%2FPrR1bgQEpgzcnbDYc3V0oIAiy%2FBaSO2WbVC5uhWrHIjYT1rywI5p&X-Amz-Signature=8d8db599b880129ad1a5e507a1526eec8cff8d558bbaabc235ca87d8de39277b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJSMFHWE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCzQ9FkCYSBes9Hm1H%2FHwT2aT8Atf0N%2FhARpX6tLyu7IwIgMzH71Fkd15ImtdnpBDHDENMY0yNjAlkVOC2bLulbe4gq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDAjSjLXfAn7IWzvGHCrcAz9QXdIDbH%2FtyGSqHwTWCTkl7Cc9vIohq0hYNRv4dhWPo8rXadWM0W9Fvt3ILXs%2BBXZl7dManZ4KEUE%2F0HdtOENbh1gzNG9IPuSfPG2wlFemhCGB2sqEEggImvP1JDj%2Ftz%2FCo2ztvKBcuKwnEI9GwU9IIpizbTe1jJGesbfE9LQSnHi0DlHGw3Xh251salPDIJB4FQAnJiyV8zEn0msJk10uroGQ0WMo2VwDNh%2B78TOYBgOMQF5NrOZIS%2FEEt9bp7laGT7Du6qw4JNFeGqu8mcQ3OXTix4K4u47dh%2BddqL9XVjMav83cEQuE1Den2KnskRVBfqrtvii0csSVVjm7z8Idv%2BNHHGrRzDnYk5PF%2B7cg8RrqRPuZ3h9s%2BlufUbAvs2GO%2BMUBBanogEn%2BpsOxxLs%2Fzw5t8taOIkQcpwdeDyaRPz15L%2F3u7gLXvUbd10Vajd56o2NZTq%2FNa3l0zUBxuoqXwJ1GhrI6NUwWMNwdESsnUTurc8UnZZUnARlm8gxIo9qT2AB85HHObWbzxtvY33TIic4lhNKeE1MoFUKCgbU2ELX07DToFk9FBJNfzL7vr9qo81hQzixWIJV97zrUDvYUEe7nDT32rC5SF40tULZMwL03zK%2FyKmu5OPOPMIe%2BwskGOqUBWritDL2OljxYeMmgylbwi1E5dj0AsXUV5DEZyCf8YZZPsu5BsSRy2wvKM%2BHzp%2FOZg08XNU39UF6tQQ0OiXpHd8UaVLlugbJIYxTlJZiD7OvhaXOJ%2BZzvChfAxO8hGR6LE5MwBB97ULvPmw%2F2xhkKwCiJxzCc4mGNeO%2FrOygiEs3SyE8esT1RCD1Fg6NhrTRsnJdp4R6fPWhpt4w2lgSWNaKR%2Bmhe&X-Amz-Signature=b11fd2c5367843ded59d73237d676f703a2451de3e031f120127b63447305055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

