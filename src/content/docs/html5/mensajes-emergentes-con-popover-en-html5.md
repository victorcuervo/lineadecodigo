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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6CZRMWS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWQK3%2Bz8SHYljEec3pF4y%2BDtQvUAmfGK2dJ9Vac3C7iwIgckFLGrV6DyePQSJpSxACuVp1a8zdI%2F1qg5%2Brw5%2BEAtgq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJSuzjIS127YoSVgHyrcA0czm4QT0VUKq1eNA%2Bnth66uWsQ8rOK2GYxfDqCxzcXQrY4p3f9XIUI%2FgGe3FW4fcr5oWYiUQ8fnRW9yaECv8H8ExOb0kPChOCTLfgtjJbjCCZoFQF1p%2BIdY3RWM61UAk8bRyuNVJoiNk6QH5Hu65BrTR3KiQNRPteL%2BlhqOZaU62S%2BsNvvjFHKHpC8Roep39BGUAlPZc4z4eIRyWTAO6dMQ1KMSXBM9oVlQYqBYsC3BqteKtjG6pt%2F9ytDlVRas0py47qNXn2ZyxByg07ZW%2F7qcUaua6f8Jye%2BzlizcSsKohO4U%2BeIhX%2BUzk2xhKMu4VZvN2cjtC%2FsP5sPB1Z3wPgtfjMUqoB3t1S%2FO1o%2FmGnMvx0LpFNf%2FQB86pweNwJGRP8T4UbXfhPhMCiJQdZrKbFEfbuROK%2FnCf6juHU3hK90ksNRf3OQWVAfG5gL1UhZX4r0ooyDoKjfmXA%2BMEFaQxw4F1oRCQdxM5cTCLuQtJUSNYhxoDf4ssEcU2%2BUkympGWKBcRG3nQ6sFBsrwrYVcQ3ohndemk4lGXDcwxe%2FOXKie7LgXnbWx0oKH5dSqFQhVfe2WzqKTA2SPt9P66B8%2BOwk3nqy04WZHgPwX42c3P%2F7B3Ds4ZqVtUkH2GKVnMJeozskGOqUBygzI%2Fz0oecUPmjlAn6AQwSp37zQ%2FrvbMapmMF49myq59uT3icke1g9XVQ%2BnnVd3lmFS0goerT2at77nsuz0EE0cRMatkZXe6nCO%2FYpWCPmb2BsjEUA46gNShtslAGcnXnMPjiDAov1S2jxA%2FSfltuMkWWHUsy15%2FXzh8YtHkvw%2FeQ08zWKq35G6v8T%2Bd65CTYikV%2BPGsU2rR8KVzGXN5BuzhoJvx&X-Amz-Signature=3538a8d12bd4ace24aaada64972f679b21a77db6a7343dca47abf86ea4f4e79a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMSF4MJI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8UevEQcNz%2FRJ0Bx87W4WZCG1ju5o5BSSDEdiU%2F3J%2FbAiB%2B02NJ75u7oxW6jLBNLaljdLBStAgKOAXI7%2BRCkOO%2FpCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM%2F10HDMm%2Fsi0JOPGVKtwDq12lp3J9vVg4R%2F33XPY4WHsnZCoh1ka%2B6tjcvH5Ri6HCz63ODkV00YWyNoEZxM%2BXUnq41Upzpa659sG%2BYasgp0OEfkgQNsGRJXwm0Cwc1ROk%2B8z7LLs83mMwM1bDtrXXVJYut9fajdPzhb51DkHf1vkhh51%2F24TQAzye1KHYQHVsefaQVGqCCA%2FjXho8MtcXKE1ibRECk18%2F9NQdxCgAv5sgk60M%2FMeekl3pgMrBj8RbZlSosjXdLRSRFMGhzBpxzSpfoemgaUe85hEzssFGgzpn%2FN3JqD1lVLgJf7AwsQipw5kP6Wq9V9N8xSnXXtTLp0rjpTQ5r3Zfse8NBWilIJhmzRBuepJ9PXQhRyDexKH5%2FLq4d6OP0RNq9LLYS0Ht0kmNqzuyZJ4StYxtNjUfC0BaA63uWhrH6RPD50%2FS5uWecCGJBjOkcmP1WUrXfBpRN3SpbOGSz1i11VuHTvLXOQFg7jWoy9O9WPOBEl7qPGwKPH1CUVJltZ9COk28V%2BEV5GtF%2BWZjzSQ6PCbQ8TC3CiA3dUkl4wTFKFtKzTa0jHmHH2oI%2FzbEUC2k6pR01fJn5tbsvr6rNF%2BeBp1q0ly5GRfagk%2FNIWUhrj7%2BI%2B5dtnzqcnL0zo8uKdJ3enQw%2BafOyQY6pgEGCCl%2FLv0P5Fp3%2FgFy5i6gh7bH8eDTakMHMJAaJ4j%2Bxe9v6MdmUBHIwt%2F4qby%2FHXZzWjLQj7BveabPJuKkEIsNlrXPY4UQLmWYtB0%2B8K4cjNeHzen7khi1NUDGJf3f8dW4HItV9mXZ5UrBoNjwBLlgN6xH39VuYUDH22VQKG7gRO17SP%2Fw6IYoeHLzr%2B7%2BFPO3sfngWaX%2BgFpOslvsUcA77vPuzchC&X-Amz-Signature=fa3bbb742db984c803558bb2c471bb07139fb535047fd0e61905e791704ea1c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

