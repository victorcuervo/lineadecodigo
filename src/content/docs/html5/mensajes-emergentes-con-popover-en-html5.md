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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2UXFQNN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWTyGUmrKxdFs3mx9Nu%2Bal63vP%2FKrHcbpEmcZm8SLSggIgYAuv%2BLps6kItCgJjdGdaW10UTgRplTVkgfmWFHL9Orcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAzlUcCB3bwkZBFSOyrcA56Uzj8SwdPspC9uqfXDxTvc6KBgamDF3%2BBIEu%2Fl7PufsWfVJopkbeuTRUwCLGmc7%2FO4OlhA5jX1wDVp7fTihtzRi1pUqrqm2U5s1r4D41jwrGW2lbrQBmkxWi3LSU1dje358YGyvSgcHYEFGa2TRzHlxIgR9A9diz5GrCSvY56nM5bb%2FnaYbnVjCZjbvZlkfqR8%2BkF9uHkE0qEktunx2eKTdk5lhuaZAPDPHvaRnuya6vPB2l3UHthxlJ2u3dkab2RQJI1HqvbbffTCS7JRKvmNdsdqvO6tfzRu3E2jdquA3aveAPajCxS%2BHbpW4EsdjsHpiABF8oxA7uJC%2BefZQLSoJ%2FqMCWoxOlA%2BfmSMjM2tiwPcr98tpP0nh5ZHLsp%2BIoKFnNNaVWlwwaF40w4M4zBdWVv06Ge57lkm5EYJRnk7i%2FxBZcG70%2BcKITLSRV9X0SvnrQ%2FES%2BlORj3RkutJEz6DR0dPUOW3LtS89aRL9RlzKGEK6Rs270La0MJ6sQlO4p23AszSzob%2BIzdLIWPST76grMQQgpdZ4G6e9%2B0bXqU999xdlT2TiMz925UaI%2BFwaFj%2BXOJrTK5GA5xtJjj2aG7khd2%2BXcfcsWa%2FT5WwkVdXhhklgWG7Qr4hpqebMPe8z8kGOqUBX49Qhhv281x%2FP8DVfG7vP39Urrj0nBWeCEzlNcvU%2Frd32iIebmOMU2EnxG0CsQJVJbvvT3XVEpd2VYtqH%2FiNS14%2FwQIJ7oVGBAB%2BupoaDPf%2B7NR56DtsAu342MaW6npJ%2FK2ZMvq8ZLuPCBM1pt5cDl0RYuD6PGXEToqQh15%2FxFpk1bHL4jnUaW0qF6Gey352OetVwQoGucvJMcvgDywCW6ucWJLZ&X-Amz-Signature=2ed2dec693462a4c258c09cdb3444c45ec95cd36e742fed726b4fe79ab4dc7f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHEP6G5I%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChr9OKMhL0csj4ElStZNO3E5OYfnr2N%2FeYRdluIpfdeAiEAlC0CLpVE72Jc1sDkGlPNKDHSbJ%2Bzg3mUMH3JwW9zyYYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHK64VzRMnZWILHikyrcA79gmpGXwWdvTobI2W8NzoQwygpbI4IgiB6YcUpHYhnJHRNko6bn3PUf%2BSL2K0aGBImK9gEH8f4vLyWl4kpfGS%2FStmQqQFsQospym6SldS0do1dAdTmmHOH0JZ5bZlRhspOCNERtAJyj63qQBj5lytGjQrRf9G8beQZbFqX9S3b3RqzwWb8nyUdMFSWNWCC0yQjURfDYYGRWNRtF2uR8%2F%2B0L8n73uKar42A7uJjngigizYBWcipJLQ2BvkBhvqJ5h1zFdHzTkECDw4rcMcG%2FnqJW9e6Oe2t2Cly1UC3UBsrtqewHqCV5eDz9our5sa7t6jXC8z%2Bq%2B%2BIi%2FAY5IFevdd19xIOLGM9EiF1uHnyIdsTxq1G4Seit5XAtlAVD1h2v6Y4cuBLNf3FngToqCyFGz8JT14SRaZTsDy81YwnYadsebV3kFyirfn0zpcvDrPZ7dJO86YmQhL03wmEGAmXdRhDcyO8jNIN4TDaPjtGAyQW93OyKUmLjNpFubIUPEIlTpmrj5xHUhQMo01gnImdtv5JB2QX3Wx9HWN3GuTFKcRaU9Y1xSSOC8XDBzVaeh7VeYO3jufPo2%2Fc0t39c%2F9i8oRdyKvU%2Fd5SZ6ACCaBt%2BUl%2BHA5ksXSadNkJ0j%2FAoMLG8z8kGOqUBnRykWmvsNfMmwLXnY6pd%2B9ObnQGkO2MuKxpfrH%2BII1xb7ZNXeX0cQXc1VXotvYfHrehUt7Wl6%2BqkB8MqpxIjvCLKWzlUqAcs2n1YcRXV0wLxZLb%2Bk7MZeg%2BguEO65upOz1K%2Fwcb8hCq37CfWivvf%2FANmDMA1WaEbbsyN%2B%2F4fmEQPpcEqwb92LWuybVXUIvWAynhPz9tKhG2g7M3pvpc2B6XyZTda&X-Amz-Signature=31fa821ab49cdeb4b11dcb6c78f5cbc70e4bc2d60d9f1b7ec182d79a764965cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

