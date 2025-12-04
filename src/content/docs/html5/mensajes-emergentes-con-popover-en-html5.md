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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZSXQV2K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEtHerT7j%2FWU80Oe9GWrvHAUIzD32jBIxkprhfZw%2FinSAiB2w3EUAtwkk5Hu%2BPfoAdzrg2JG9ygTKs0ax6QxTLglLyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM1XQdBb6AJLCG2UTXKtwDjDi6AyeMGAdyBJtZ4tR%2F5WrYqVXqYOTResjJuZuXEuc1lV4dSCwzkA7utal%2FQF%2BkO8DlhnWolq%2B3sH2a132iQcelYBTpnAEiZET3LxXy9r78P9BlKE9D2aSJbax6j2KLKTKJp58HIbu5I07LmUEoptk8knEqgOHbCyXTyP%2FuhG8%2B3Ivqaj9eyVrLj5nj3JEdYa9GblfukokmxKEwmKN%2Fv5mNQWFoDGw74PzvpwX3PllYebMvNkBpKFWLJbxzZH2DX%2B3zajjp%2Ba6f1jrTKis4q9XZWSB6MtIuM7cLxWnyjIdVpmzJ5IdxLXB4gY0HutiUt33Lft1au84owfHgfMFXotVnkPkbjOGD%2FBYck7z3Ic5r9bEHxWxB6SjS6KRETpnr9p4mqgkgPI8%2FeMv%2FmujkJzOTyX5NB8979SYqMG7medoSGSjf3JQ2UbxVTDxk0N9uoqsgb0HWSxUTwdgLw6rH7xFUtoK6rU4urTHitdsv7cNbzD253c4Y%2B8VNGkqnJ44EevmYvEp9G%2FfIYszLbW%2BsX1ar8wOY7MS37qPkJphfqXcTFxhS6ewxKmfu%2Bgm1m7IkY4GGf%2FKC3LGKsJnvLQ5180ph75oPGny4ZB4Z3lScGNH5O12UR%2FVDU6vr9jcwyKHGyQY6pgEUmS79mA6GoONcFrYTsZqKGxRPxe%2BAKAfNjOB4zagovgRLlWKjCUD884Q%2Bblh7TXGJk%2BEJQRUn%2B1OdV919rRB5jyK%2FBIi%2BG3bk9wcCXAKXcODPJyYBPJ1Pd7g7ob9dFKW5lZIAO2zdVhquWZS1XWG9S7BYVrplcWcQ%2Bhp5HLtHNic4HkxKXJ5jBXVvxOv5LQvexm%2BUt0Y5X9kPS9eT469o24mdRiNt&X-Amz-Signature=cac45cac104466c1d0623725c04bb4875c6d1fd4bd20505d086087ad64ae9e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZMXRWN4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEEFfhlH0SFY0i4vjDI2kZWzQUKGkemoublxkfai2LGtAiEAhoqC%2BGwzQJytUeDo%2FYBSX3FYo2yvBy%2BIq27BADu5gVwq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHhN2YNafOb5n%2Fh18CrcA3Ia2L5kj2wFBejhgAGo6%2BJGtmOzDHx8ztAK3B%2FQrTORlwBBsHTcb55Z9F4qnHRPZdud4hjrllniw6rH1txyyEq8tDWgNuFLcIgJ18VHvCk9lETcaWZzEVL3GAE%2BwA4T4nXM3Kb4vmU4DABN3vYGXoZ%2FqoT3wbxU96xTjS6yLvBDL7R9O78m8atcWwkkjdsGm2Yd00SL2VraHTdI5A1yvgoJVbVWNej6L1I1M9cffviNYhaLy6zAsa4IE8jvHAqQhL1DEw70j%2Bl7Yx0izXbqGEywnOwLIbu3D%2BHCEPtO4rp75mLV6EzMttnZYShMjpnInccF5LG1uZUGDtU4lLggZsqbT74F4vWry04wutXFta%2BOHx8WeXkOAw%2FQy2zwcmMRne2onQDmDaCENFZAAZtOibuokTEX%2B5dtoPGdFqUWJPZDcQbf8AKdBO0WsDTqgbqDohGWZuiwfIbr2fmgwOd4Q74WflMfDe2yAwB472n8sx4pYoa5TgE5C2wXEchC7AGS%2B3XPoD88v7vKHoXe1L%2BXELGNdUKF%2Br%2BVpLU5TQg2pywBrlXyQhLNMjL7JfOso9qjVelCjtXDGzaD48ZLgRKBRXr3XuU2lfUCsInxdMpziIa4zAkkXrNHYDW8P3fzMM6gxskGOqUBknVh2Ge0KEuratmBEGrO3NTwvtcWoeblwxx4kuZT7ug3WypCi15whAbuzqD4Yodg6C%2FJMXhQUOah5%2BIpJwqVy8rxnyr3wjTNxSjj4xLV8uGiXbCUaX9Wrx2mMvfyr2MUgNculjqzvHyBy%2BozlrUlJ%2FAoy9IHDGBkmCFyy6tbGE7De3J3m7K3su4iJwGCsucXio8wVm%2F%2BoahGdsA5OOpqjqYJbphf&X-Amz-Signature=f893336c2a386e25ecfa6b27a2c628e819b2130b497203df36dac8cc399b8657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

