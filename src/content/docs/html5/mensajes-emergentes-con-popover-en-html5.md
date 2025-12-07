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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T26TAB36%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDB2l1yeBBFnIhGzv%2FwPdK%2FY1JeczMNYBI3eX%2FdIRwcWAiEAyFnDEczMZQO%2FIpfb5TEEcz9rHWHwu7cYWvoG1m9yMoMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2F2oB5v0HZLBwSdjSrcAyofIJxYEKOD7kl817f4FjEsR59LP5Zz03ZDkIrYVYvwPpg8ApQBGWUOTJ0gtfRMkjebd6aS90cvF0UBOyLa2rdl2KchKFVIuZj5IW1D18HnemRUgWEwO%2FnMlaVcbhQVy30XmQwSDq1MXG9Pbt8nkfRTP2hsCUWJenHE33ELcOl%2F%2FDJvic5m7m2nDtOgtPKvsa6b3N1mJf1TlF1JRHqdoeQtuS6weBZyhQEhUASLAe4f0IT%2B5R5CtLkdYzl4ckAXkANQv4OgkOqWkumcI7dcglV9VK1CRuDMdD9fce0Hg9rwQ97Nbx9%2BRAcatGfbemmcufOh1QxmfxQNoy%2FWCfN2B5SQWfN0K8QYB3RtqEOmRtSfpdWISxruUPB0QwiNJbAoalLbl2XuRzmeeHTq9xdEB%2F4nj1VweP2pRTJtDWYQ2g011MOiBsHsL6USnxlg0CRAwG0%2B1H1zNFI14UQW3rIVr3bS7nylHNaIJ9m9ls7cjFns%2BTu4mvzotnVJd5DLUYWVTLt%2BU%2BnwOvd7FJ8RZakEiqbu7eECmky1y2suWYvhXHVnweku9hWVAVmUMmaeI6a5JJWodwWv%2FyPWVLAkbLzoKshvCCeh3lO%2F17sT8sA73E01ts%2FCtRhpqpEmiaFxMLaa1ckGOqUBw2c%2FAf1rCIjkj%2FcnMXIBs4QCVBZEReM9Pngd71zLnuNGmAlw4Wb%2FIW36meOLXP1TzmnyHXa4aUCXw0X95Fee9ZFX%2FUfBpxS7vr9983d3D2eIz7S6nLTvB%2FXEOGYD1OlckA72uTQcLpDgZmPpLxneQFBj2G99Hfsq6vajJCoJ%2Fu1Ft5Z6Y28O7AaEpLpmX2ow6MayaIl6xFRLw6YSgthsWUgy90%2FJ&X-Amz-Signature=4a4a4e919a5d2007c03ecb15cd59de538538f09d53454721935d8d3ba1d3829f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEIN6PUL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnX2EJTwo%2FAYtDiGo17Dk0KFuZSGRL58EnoDF6pfgUoAiBEmXCjLGVnKpmK6lWRwQrXKA7WVBKqbEY6HAg5Ha9beiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBTBOhv%2FNL4p6J3OZKtwDz37WLECOvaZsY5jyYRqWa8dTi7lFkK6%2Bkrp7ibsExw48Sjsa8KFNQivD0UOl2HLsbur3Pw6iguuNKetLiR%2FzBtpsjfPN06C9qwiviH0NNnX9hza8VEqDEgOyaqwr9CzqnIXNFN4A9V4ieM8sXcc4cow6Bjv0t8wBiduJ82InYc0Tc6JdH2TEpe%2F%2FU65jVzn5ISihgMqtpiJZqAWiQ1f2WmfMGfk6fxvlHzL97K1gqlzGXtas4rcd0FIJwXD0VkWdIG94k9PM3DVJp8JGuAoZk5q%2BDJ1Mra02nkohfY1iloYJ1%2B2u09DKVsJp9WuCctLJBj1A97owsMezeP8MjyYskqsO6XnvNkyF0WS4a6JkGpMt79EZCv%2BFVN8YmeY9hvpO8ONhQypeYT48SNP2DBGeW27%2BuI%2Bbr%2BSAxFC%2B7ToyJf%2FkOe%2BLq2Cp5NyELjIN164gsi9CSDMou0sQRzkw9CLDQTVRxTmgEQDR8ZFBWXFzWB4fZMlYWDK094iDQ0jYqsYMRTNRlSHHKApyMfAWXvB3Pn9tP1Bv7vVfUWxf3pTL4suYra3hQvE7M5zIht1L6%2FeM5FRJ93du4dZE3acp%2F9b4odqoDOg5ThZ%2FQ4lXbZXh%2FeN8Xshx05SlvbKc0JEwtJnVyQY6pgGSEcW6PFSqsXvwGfHWSMZ15frOShldBtiwZW%2FUjLS9WttsM3BvvTfvRIb%2F2mYdUXA7z71DpaiIJgb71e%2BcyABJC4l56AGy3KlHfs0pZNaF8FVHo1epcXShiW5HyP58khw0%2Bs9vvA78c7NLNlxLkpcZ%2FkPQd7b3BH7hXkf0df0%2BQfhLxgMKqnDhDlrfeMGJIm7BqXb6%2F%2BvVUSXmenuv%2FDDl3Q0Hr6AC&X-Amz-Signature=f9b486d0d52e69a61d72ae57f101373191bfc10777ccacc5807072b8897a0cf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

