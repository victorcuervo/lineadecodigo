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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD2YPTRM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlVCU%2B79oRbY2R4NdoW%2F4f00j8JouA2tctV%2Fh1A5OUjAiAocrobl3e09FWiEgZ7gJcvGK07xFMB5WSrPPcLn6n50iqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzMVxWs%2F9ZlYJTCshKtwDuckMA8qimrpN67OXjLAcWCz7G50Jla843kd1mTVyA7ohbGv076F%2BrO3B%2BGqWKdeSheCXgpwY6g%2B2vPem35hgf0fwx3lZTwlwi0%2BwS%2BXbgQ0%2FrWyNgTlRq4C9yKRCM9uzIXjfc4hDGjcBZruN67Rt6dYWPL9uH7KMz033J5LUwFM%2B9rHMDCbIiu0GkKuIWQt62DXAk8AhLhTdLmxH4sNw3U2PxlXfFRtKXYp4jSbSv6Z8vO%2BIbEGE3lDnOLSDnIA1QhqGcMTroDpJePOrN8bo%2F09fwiHazWQlwWnnnfUxWymvegnPWUXsa8%2BwOdccxYt8YAu%2F%2Bv94kbUxfMj7do1Q9AeUk3YvIi2E9%2BPSgbb6We7sX7waCHQ%2B%2BWuJqTDxpevij9jdpauQ588pEyqq7Z9Gvfa7AVCt0DbNt4ZO4HpSFHimrZYPzpaeMFuhNhP8htT6WUhZ1kCXKDMM8EoyH6QLtpSOPZVaRofq720UN0jZMEk0ZOb5I5Axf7FB78ZV9%2FdnXLR6yYA%2B5C3IjGzX8bdn4H12g%2BUX2tPMriQk3dvVvj%2Btw6wMCRysc9s2%2BcNLZ%2BaBLzN3mV4Pqrh1IMIbxkvHijE7cBBW9TNL4j%2BX64a8YLS%2FbW04es5iQJtk8DIwjIffyQY6pgE2fHz0v2dZ4qHlqZAYJG33sNeSsKDl%2B489juhdIajWY12mHP%2Fg9Y9078ue56Wze8ry5km%2BWEAsaUBC6dpyL7weGV5NP7zaRQW0epIdt7uaNT59sFn%2Fu71Tlkad81YE1ja%2BBaN7C0DJcshRPT0330ZG%2BTW7EAIGh9HXF8z9gfaZHx1ejHXKHzlbeM0iHNFOq5bxG%2BkwrkczOF8c%2BdToZ1BAAQSpCPp%2B&X-Amz-Signature=32e9a44d150538779110ab83917c3a97ef30a14b448df14570a1e4d425ef8a52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKTLLD5I%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHzq9pLfm8TV6Kkco0lVTwosPMjXdjFKHIoZYb%2BrGFQAiEAvDIwmsIXCvoT5GqlfP7mKm%2FClMAbgbdM1apc7kz0G%2BIqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApbM3oZGaEm%2F%2BoEXSrcA%2Fbf30KQTezn%2BkzVOMiG0xWmV%2Fcc2PYR3%2Bt9o4G50xyawYX8Vge56Jc5kp20EjV4Jr9s0U8v6Ftm2kC%2Bo1EkMYG75A5pT%2BLGfgM%2F1KhOILNU1bCFY7r6t6Fic%2F4RPBSqLUAX34oPah4YlmueZFhBJEGi2t5L64dUpgz5aRkUxLjoyrc7fJ%2BVO8gDYdt4p6f%2F9RXr%2ByQwprv8ZKANsgbCIczzbmnbETTv5QoTf%2Bu8HS77M253foKXEm0iZ%2BOxeCoZ88Ptbp%2FmI%2FIfY72ivtfSsJ%2FP22ZWDr2TNmuU8qPmgcF2IIirx%2BFBRLeSWx6c8z3IvY5W8ep7%2FOKefJW3aEbkggEt%2FBZC3NoCLlUP%2BjTLZNKllEs%2F5H8g7SVOFSNABLmmoPp4cLQ8%2FtOOe%2B0XpBV05gEaT0sSAmH%2BjtAzhBrQdQETgegljbeSANmCz3%2F5H4gGhgejF9DmEtY9i2xY5yBGvynNjixIRhdut2c%2Fa33m5Dfy2k%2BNmbQA5CDxL12H%2BNfly8PorVmW8eDNIWQ2LHW%2B9DLSelSlijgfpykt49kF21AmIrWvtJno3u8ymhgOcVaqnNWND2wjATslxifpeJw5e6UcZGRX7Q9yUxjdjNln41gyqUVps1ocX7%2B0p6kWMPiH38kGOqUBDzM3tTYHPENxaIUB48qrZi9wrmVRXsJmG4YaQTNRQJHdReJm9qUS6y7bpTIm2Kj6Kb5ZHRNh5K3bJ%2BVj2mYzaE%2BR2Q1Jzrb7X%2F9iUd4vJx3obnfwnI6iJVdt4xfeenc3wxG6XmAFuwGk99pPMsY%2Fbi%2BBRTKpuQGsi82mrERWgFYICqIrANrmjT5mZc8MOzMmSHl0SUKAUTBLRRi3gMCTptuEitVS&X-Amz-Signature=499bde0f40d4926dd7185e40c985f73f74e5e75d332d1aed1c923f2391d29d9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

