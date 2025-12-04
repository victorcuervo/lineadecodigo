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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M62CC4L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIAxmBN%2F1%2FJ%2BVR3X6v0CcxmnwWd2Qx5qvZw4blzY1BMCzAiBGwMDHrfKNQO6uIpuMN931awc5aGM3e7SqtBdRSPOuKSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM7kFJZCnrLHlx3JIoKtwDW8PVuDvQ0Sz2cq0LL5apQ2dDj4fGF4h1sqtk9PHlelql%2F0W2JnNXtC7yl5BqGRuo0ORA2Q01km8yInqZ%2BhEQhNHTims%2FsywF%2FYtfQqs5HnPHRLv94dwHOEBBOia2QuAEt8y4m65P4ruDMt0jPdCYecZ5e0%2Bf9XWc25323LIcwpC8UL5OYsJrBnf12i2dXs%2FO0jslS%2BtHYI4UDjctUEBTid3%2BhqJ1LTHMMAqTPuNpFryaOgzcBavlT8xR1DvZreISk60nUMJ5okbbQD79ZoZyYTfoBwBk9Qg8VxMfnwmFc6dV6jaKJaKYndvG3RTB2eiixdi87LlSn11bfSsyBWUpaOurTdAW7uzQIgZDtHXsXEN59miQeNT01wfivgoPCPpTsVjsIWuyq2VgQ%2FaQokSS9l%2FQqPwX2xtWikG1DR8AF9y62agh%2FKKHv3DGhzFlN0vwE%2B3VBwYBJXnu0ZuStBde5AdrOvg7UNgi8Qd30%2Bf3v6EoyJKpSVh%2Bxuo10cMdJX%2BzKsSSZmcIF6fiastwPOV62sZXx1qgNHw4%2BYuwCAM7oiNmumXwhj33VdAotARohUIxkVEodwFYX6l9WC2nFokE1uDJFZReYTg31seXf0wNQCyLpD9m1%2FZvNmppZLQw7JTDyQY6pgEH8WRhU4yKOkZp2NXEed9t6aAmI49VPCWBpD8wQyTGchzZATwUZOyiFn7fL7eIJRxVsL%2BnAQHCcVLq690YIVpQbNvp3ll7x3ABgCpo8by6V0leNnv%2F2MAlDMRLvxTBlIQgHvbRspzUc2%2FJ9Ej9bSRyb%2Fnuh4%2BMwbBoH0WQ5Dd1%2FrPVDZxowS%2Br%2F5Q95Fw7YuYK5OmtGM6d6AW5zVB%2B%2FXpcyTN%2Bv%2BKX&X-Amz-Signature=dbbcee81f331e17182e874aff98187f40d652ada4094fe728b89565a58b7ccc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q54E4BQU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCICUhEg3DTiR3g9c3J7E7swssY54bFxpoYPT8GQM9aQB2AiA7h4GAoJyx0ejMgAHukezF%2B21DDUO8jY%2F1velPJbwPvyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMbxsEK5117kNjZbNeKtwDAttxrR%2F87NW8LP7m3f5OxpbhtpsHnbbi36DXcKqRAwZVhCgKg23PHBVi5HFJgBdM90kfFi0qgzgdOAE2rs2SwRYNazI7PkEes1J6hSaxewP5wzugMRCoAcumVlQGSaeLY0IitYoX3aP7J%2Fin%2BlcZaxJ9hhMaqLKOo%2F16l6LpU21nyb1oA9uztEu0XZT6UUsPxg30DHMWYx8le9G%2FbVCoxZ5tsUUp3izcNUCYacYxysd1ccbaUBfBKzO2GF5o%2Brw4vmHZ%2B%2B5YzSi3jvNxuIbxF0GhyjAU3VcloNOc1a5v9qMJKV691LxAIg8m%2B%2Bndhlw3koVnoWa%2Bx6uKlCAjPtMh4W4W9O9sOwC8%2BAMY3YuXQFdmCcQDrxovnAQVCPqhw1FDhgZXX6OWnBgJ1swxFlIV0DLm1qrMzDinempGvW%2FusiG%2Ffquplf2PIl2XY8xgbFXO%2Ffs49x3RNbVJVBgRWMPD4AP8zxFn8d%2Fjb9yN7YZf36I%2FeglgqTZh1ce2S6e6UseOUA8fwYfPANpyayQYqd7vFu6juITBwoxaHxuMWqVndFDmJpCsQAERJaEA%2FLhjlpuSZQWtLQEuYpdZiZu%2Fzhn%2BcHKhyowDyif9w4M6vxNrqdvHE53hAjOr%2FPtWaeQwk5XDyQY6pgE3ztymWdplf2wM%2BzXlaXd%2Fg1EogBWVpaasYaG9T9nTWVRprRVUfMDFi%2B31H6fOWbKRiaKj9PAN11WQ0OZ0nUUQ%2F%2BXODn0NItzfWGF65h9jdEouqSC%2FA8b4zNUnSyZH6tXpFyQxAsGuSldXbyP89n%2BKMgDx8wK6HW9P7qNS8rp2vBT6MVLbxHp2nAGvTTkgeumaXbVSDMPMzHbHfyn1lvE9NMrMdZ4H&X-Amz-Signature=03ac6a7a2b0b6aca0af5d72393ae54cf0d3be43f29c35b24be1846642180533c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

