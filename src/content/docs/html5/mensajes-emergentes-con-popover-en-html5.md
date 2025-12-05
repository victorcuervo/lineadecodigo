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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BYQYBE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhXeyCwb%2BFUrv244GJT37B3KSXbuZCWSp5bPwCK9i0BwIgWZV0Mi%2F8pLRCaBW5bkzkN61y70yY3aZmHu4FDj0LqQUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEf%2F9uzgZ68oVAac5SrcA99vcXa%2FEB0rolfECus7CAPWEotOL%2BH5GJnQ%2BWu912h9OI4QY60W6g%2BY37Hp2yLptZ07d%2FCdezpmWhLfV1RoswfTSOxuY%2FNponPy6PNKjcNPbdm7z%2BPLX7GxmhQRrOfFNTbpolDqJzyy6bsVC4lo1x63kwqxDP%2F0aBhSRnUb1GOwVQm%2BtGoPt1j5KsBMrfHZfoS0CgGPbaQxWghsDBurYm8UO3vQB902wRpJXweSYlPAhoYIFzucXw7uUYEbo294nUpqVJTDiNWVdWcaGG1rj48y3sJIO9FocIUZjePlJuxAI7gzctzlG7AJoaOCkfaxP28CalaNS%2Fas%2FdQMDRnoGp%2BCZoYosYHC3YGgDZZg86E2d37zDO5SkMDgLQvRBlE2o0Nw1rRqji%2BA5yrpQe5yUdHenD4aC%2BCa0Fzv9e7JpEoh9og3pynd4XlTgdCUADk073XUpjZlfjDX3bCUfky1iKyddU2NoDVdqRaC0F%2BnIeJyDom%2Flf7xHn%2Fa580UynhNpnr6bSG1J4ifB35bv2ycA0tKu6Bx%2Bep5fNbKG0pS6sO5t2oxNxBd3Hv0woMdNjr5jebfKyDpyaYMzyAh5Bn%2F4xh79Mv0eG%2BKTpSM6ZmlYU9XjQ8l%2F8aj8rlDhRB8MJzry8kGOqUBmmMTR7eIUMiCWdd0rWCQkw%2B3C7d7fK4f5DDI5sR05DR5Yjo29O4DJ6VtyxsUw6YKrCI%2FaepXRWhP3h1aOxig6X3TNDWegdSF9OQ5kIrlVE1dgYMRT%2Fd5umbaQ8XZx2mLWbtSmG0vWpRKppuK2hVfUFAjxeU0kmGgIdDMo7LqJ0R%2BFzUvGoyGgOMuPvzH7YIszcj1s8Offy8M5%2BvlkBncHfdirQtk&X-Amz-Signature=f22e11ddb95081f7fb043ae21e5183e4e70f2890bb90a5385406350f66215da5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4LMIC44%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9NoggQ8aCVzAUzefuQR9GVaNrwyES2ZQSz9remZ%2BAOQIhAOnfmmNnUmf0EGakGXppkk2G9N9w16Sq5ckUicqWjCWOKv8DCGEQABoMNjM3NDIzMTgzODA1IgyfkXNag5BaFy7BeSgq3AO6IPNQBqwp9K8qytqfjrttqInQUlXOr5nOEM50kTcrvgvI7QOUIUuUC4L00FtW7DX4upwbcTXNkzrl0ntk5CCokX9m%2BKsaZyLEezkH8qSzh%2FiZr%2F3D8Ric6yAvnYvQkwcsz36ob2qVn0x7jVVvUFPx9WsQUNQrAswTD%2BsSfbZfvu08LXigtJo4OVq97GMhnYa4qPQKP3NcHuuffHPYKam8YVmAmDo48HBxM4j1zMYPkhYv7HH2p%2BOPQLsWlbAqGSZIg2dYg81x3cjyNh8vzECezeveu0koEMdl%2FTBfjF%2FFox8zGdanZOFews9eKp2HEps1%2FVfCMnUE2Ki%2F1UjgLsgRcYBJ9tyb%2FsjFMyTH1d%2BveZiI77KePGaI30PAc8SCe5gBsHzNL%2Fh9sErovgNvlHAYXz7GNK6Vh2uhmVRs%2FV38s5p%2FyD4Hji%2Bfu4ETCXPLt6lwwBF3ohOEV6Ret55Bl6OsEo3Yqz%2F7Bhwc0DdmQb1Y%2FyXHaOtrE07q5sXTi454drxqxwlBQTMnatlu78y3UGwncNU8QeI%2F2eYYFHuIOR2ffUF%2BAVXbD%2FzPNhNqqbd5TZAFWHa2CI80Q9MQNO8BZFRP3oQgfIWSFxoGEs1QNR%2FcqVASjHvf%2FmCvgEHBsTCA%2BcvJBjqkASrgcWWT4WrUIQQz5sFmP39lSxHwIoOtnVQv7rxMDZm6B155hWigXXOVxbtVvBu6CwqruynVjEjHVozEhdVrBaXZHzXR8QjsrU4Kd8VWvYF6kxA6%2BOgzgxlty9HgKYLjP5Z9mh0QWYK%2FvPABS9Z4Xicsc6vNZ55%2F0Rl%2BaCk3zljmEMYMxGaEBk%2FJ5V3xVJU4Gkf9FbaHZBVPTMayAbns%2FE65zBxK&X-Amz-Signature=cda67b92fc77c9a1e2556a5ffff19ea04cf86da014aed3cfafee3cf2c6775b72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

