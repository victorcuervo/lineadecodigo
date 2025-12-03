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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BEVYAYB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBu8FqNwpeCuSrVdveL6fyvSknoSrGuIJcIW%2FayEjGYxAiBrqjIj7otU4tbvssug8TSYAq8rSk3JYTzQx7HAX09Yoyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMpFUULlB7IBr3lcs7KtwDUnVXdcN9hWTp5szEheEgRPbBWS0vNaM3jQJLOUELWbdpy1EPN41eb9I0HFItM1teOqLJDHYCaCUF3w3MOCT65lv6R3USzhiS1j%2FLS1df2mB0xCNXj9JoXLUTkixW0u5B5E9cRe%2Fpuol6SWXgPt%2B0rGlix1SjByqfEElwE7MqDa9KHdGdFQYk%2BgTMDZHIoi4begx9bHC57BCh9visrRZMYipLwvLzlbFt1hLUUups9vwp%2FmoTRuJWTvH6K6mIvUZx%2FSd0KGQYV21oFeGQNJJTYAxbZ%2BHgP1kOijOdfOr%2BMfnr6Ie7jiFFACyCC1R8UIoDCToVrVDboXtMxrpV6vepq6Cj%2Bl2AmlJT1XBHGgxY7TKS%2BHLQt583NYO7HL%2FcZLgdij9vOEgW3aNU4dk3fOP5S6PG4eSxpDjT4r6bRtYzFyQv7Snwo3TxX6nuDsOpRmDqQSWAr7DQ8uMaDTHxqxZQGLgNvBiaKrUbc8w59eflM8ALkL5nuJPFEWJoQZmp%2FlYY2YPJdDVmji2Tz%2BETY1bwN%2FodKrsPnDM3MXTaBkJTbzBccPv%2FU60R%2BpfVHM4Y7NWTiys35T6N93wfhWWALRnsTGiMtajF2hP162taBGrrBfskE6DZYGjCTw7C%2BB8wxL7CyQY6pgHY61Q6tOvdayz5wq4nySt1ukZ0MmNIVBvoliTohjG2lE4rHViFQJoBq5hdQO47tyAp0OZHYaBwYRKrBlOk91avOs6OD2%2F1X2bj8ixnDaVEc28Q36fLE9QJX57hDdqnNcGCP4qt6ilMGel4fkwPWrqwEesGgseph58lvWpKUNdi7RSAkmFMisZJLxLA4NDJkiX9vkd1Im7cEuNBeT9Uf5VNa79gNSUE&X-Amz-Signature=b0d3ce4e2054f24560186d0c3766db4af98a6837caa52add74095ddf58f0c1dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGLIEIK2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIAIgj01hi6gS1PRgOTn4Z2Tn8g25J%2FQF2lZTGB9e4nJMAiBZem5JCnOkTluv6VGWetuSdheAlCHT90pfw%2Fy%2FE84DMCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM68cOCBV1%2FVTDCXKEKtwDy3gyT55Gyg2QmfY0dyInex85TboPl4osdY8IYIj83INmDcYyy%2BQmRHMRokknUNHtHPbEVCtXD9GF1ztgH%2FnPZu%2FzJIsudV7pYLbmzP60qJfLWWzPGToK7RFfg%2Blspuob3h2kEdxj%2BoshBYSAVh0QAk0PveojlQ35BO3HlNbZ2%2Fupm4PMHNsPm%2B59M01VOCaOXDvrCJi3pYt00whojSel%2B17ftD%2F5Lwx8NSxb84wW2zs7lc7%2BqGakpPidBz7947dCeE6XG%2F1Ch7AGp99e9UAFJXkTZqkJ05nQCkbkTO2dp%2B9UpUKzNjeSsqhnv5oUI4%2BAR4s2BhaQvdv4CvAt1JVeyrWgkq8dqS71irBr2vZYhtq%2BPoT7bpkbRScmQNAhmPsHB%2BXKIVnNz%2BX9qbkjSd%2BSTYhyswsuIhYa0N%2BcC%2F5Ciy6csUVvwTfpI8hFMtDJ%2FegndX6fLSxkqo%2FXqHIyYMxMoBLD4A4j2kuMztcFzZAWpjrz9GIyDDyXd5n%2Fpz0rasojo0pNqV16ESYKl6eXGCoEsm5ByrxcMgrZ0h9GvNHJWl8LoNbERQyaYVvE%2FKagqP8Zrz37hfHG779lhuCjgwjlCUnbmXGHD3KK3q9UuIZdckzQOygLjoMogVUyrUwwnr3CyQY6pgF5O2aI%2FmKKnTFktyMm3a47%2BWLQZUUbgrjg%2BieLv0Tx74pWANbav3Sw35P3el%2FHT6FV1uYDNQU%2BvwCpGwEEuobbRuefB0tnBMuHCVDkNbWaevBuaol3WkQqsB7Oj5SvFngxA%2FRz1R7NIw%2BZLOMTfgBeLaM9r%2FoJHuzfjncbv1D4qJvQzHk6vLBk87GKavt%2FcqMj7%2FG2V14fL5A9nHrG8R%2BSzMps0H87&X-Amz-Signature=09d2cd536287927c388cc9b7d60c7d96a65af7a3b140ab8b4c5af5009ac26aff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

