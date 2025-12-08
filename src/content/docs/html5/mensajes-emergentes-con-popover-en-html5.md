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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ANO7V6Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPr2lzZ4a77c9c6ttwfn7vUVr3I41IORRBHOkMuKAGzAiEAwqGP1%2Buue3LHdGI2uqC8IEe02Cdimm3ZsdFJL65oJ%2FYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLN0Vfg1xkYJKxk4CrcA78B7lBgIpkLNo8NETWCgTGxpdXCW%2BL3DqTjgw9dBKqHgMmfnY%2FCq12rRWcl98YGDgjN7mt6TH8v2SQLLvnG%2B6kX9C%2FIQvwQ4g32JjULVeewSfbD1%2FeJ7erZ%2FMstX1REl%2BNYoE2U0%2FIe7JKcDxLIo7r70SCPXsbXCM6EOleXpZt58BxyVRMUmp155U3rfWTMXFur3%2FEEWnjji4J8N9l6dyGzKJSiOme7kTMzi3nPtkzjjTCR9ZJ2XSQylTRAqMhNIGaMlZI1nqFEoWMtOTNnA3U8YdkhXAYbz%2BFcMBglCciyhUrm%2FSQEZ%2F8ngNqXlJcnCCUdWMv8psiuyef%2Fajy7wYP%2FIm%2FMhfe%2BOU3Y9ZWqT%2BWwpChYUN%2FaMHuc%2B8bBn2YriJ2LbJVvWirjXPmJqlBybZVSiO52DMwsgxqaL2A05gcOJ7lIq6Qg%2Blh67FUajjksBO6H2QCSMfXEx59ngNf%2FN3RUPQDmrtFKKD6YhtGD5Nb3lVJjNqBa21rZgDePNdPCKi6g9O%2BWk5AXG39K4Vngi0skEcIjn5ZCQn%2F3R3eP6pAfilQxN4ZvgR2SUvo9K3SoQ4Tislw0QNg7SsFWViDGqbZL2QaqY%2BP%2BjOG4jggx4FMHYQQTwtiq5Gm450eiMKHu2ckGOqUBoCMRaT9rFhEvJOY9B38OQgWwZPh%2Fh659rN%2Bx58E1Qr3glxK2gEEvvrqI8GM8yHWiFR%2FZecMHqxCK6vFQSGaKd0hSrdSITF5aijv6f3CuxLaIjLEt0AV03L5alM8Sls30xsZvrtJgWM%2BaWlVEmFx3KNLy9rfmiN5rWbLzAsyfv5MpE5O7vUOwMp6QWpFmah2BWe9RZWozihM%2FIFzk0EYpKDwouA4v&X-Amz-Signature=885f5db50b86ddd3b91a6fa59db146c98e0785bdd0e4c04b388fe1e1b30fa794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWQ2H24V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID86lIRIekjL2ER2gZlnJIo8WzOoJyhz7c3VQf7bRxXxAiB7tSnQkmG%2BJx3BVJ6uw39X81qDikBDG0LFsaJE0xRVuyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9d%2Bogce3fhVufWygKtwD%2B%2FTluETDlpXszWwkaaj8beCNWDyV5lAptZ6%2F3MHDSLAF0vrz7jEKwWGB27jZTJmSziZ%2FUCWc9muKt8KgBsKOeDlrqH6kOEDnwd8LZN5%2FGB%2FUhxoB7BceQN58NKW49b2KpESe1S2TEOdadaQsFz%2BcsguzcWN8EfDY7mtAfbhDB6F3lsHJ9fCFAggVtDstBU2xUh2YulpO8%2Bm4EIu057HP%2ByrxNPIKUK3YRQ6DFBe2LVi9A9tI%2F7dJD%2FKsVALJ2Qcf4F4PUSuktzwkZdFnC6r3O7dyKVXPSmzg7attPLKZH366XIOhIwL8uEQ5tJwUnLoaUF0NaM8X7CfvsyzoSOVXpvIY%2BPyCuUuhQEVkPN75oLkpp2pbpZJZ3ppDO8pwxaLoX9s08%2BWyF1dNhy%2BX9eCSrGfd5O%2FFqMrHo11%2F9s8hR%2Bq3WAXKs%2BrLdeBebLSq9h352NCa9gUCseUwf1OeEij5C6yaeTgZEKlpJr8JmqpC%2F2sFNEnaA2CODcrVWr04FrdD%2BF8h%2F9uAdXU1nuggbU3b1xBsBfKiG%2FsDv6xkbhraReuhhc8PW1Bt1QhBO13PGTAx3m%2BegUfE5XHNN1q%2Fs%2BDc8zITGj8I6R70kiRG5lNHFknyx%2FZR4Q73MMWtv0cwm%2B3ZyQY6pgHG%2BF38DXkZYfT8GjAgOOvoReZvRjwjuVrGQFwxIPJz8gaPGD5XPMl3q%2Bc1NU0pCZ%2BpAAjJ1e1W5qTZC2M3IDa7cw705tNU8RUiCiJw8NdM3OL06xAwAVuYvTynqsZHHyhTU2w9p3O6V%2BGHccrpYlYc2F6PKbrHZ%2B6hLSK2kc1lSqXIvveEhngNLCBqUPBTZZHwjffTVoB4SbjDuadOvHpoS9ZZUfQN&X-Amz-Signature=ec6be87bb63deddb6c3e0c9fed1494e6ed1ed3620aeb6aa50f36264f69dda836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

