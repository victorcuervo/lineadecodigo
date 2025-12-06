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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QCNMJL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8MmhFehNbu937pJLbO82CaW8WU%2FLApYbfkwLk9ggurAiEAuHhrNSbcolifZUAtRTlxKVOBwa09YFSDlVhNMkxo8O8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMuwg7Hsd%2Bp5JHsQQSrcA5xs8TmUmgT1I0b%2F2uvDFJovFTzU1xq%2BYnE5i78CDIkCng%2Bs%2F%2FZftdOOBwWJTA9IJaLrOk3unqVgb58wIREXEDLBLpcUJIUFB8RcvHtJCe6ugCaqgId867vR2b4eMOvG50C1pYV6iJWAKm09CwXCzqUWUbgdkXHA5Yx9ibisndnlpkkUeO2xs9hAj5BhRjLE2xZzZI3PtXFMGeWvykvHDb4RGiz2uZDU%2B5qpnvHbjkeCAt0EqyiTzLOnjznotIgg7%2BmhzoBFvET9Wxbgi8PNz93Mt1ek9GkB0PwjqBDCb8kq9ntZOkkJa3bruze0gXI0OVxT1eEH38siB8130pTmkQsYSwKTcrdFY0eXFHiTJn%2F3nfQlyK7d910yqMtZismws7Jwwog4dLYZ7aRiVmbnWmJxKjwKLr7qGw2ltgx6SSumlT4S9wWmd1g2A8ww3xV%2Bq1dC%2BmZTWD16aB%2FcrYleMg5ezFwdg2R7pxcPGt2xXhcmc0A5m2S4tY096TlVqOvEn4r8w%2FoHCr%2BkfxcVC1HKWL1Oi8JS%2B46GIe94vmLETGoMM0XoBHZVpk466RlRS2D79P7%2FMdsJ8IPXQbo82Jds%2BY%2B8YA1PEJnsQoEg%2B94q3nnaHqt2o6RKTYDyknEcMNim0MkGOqUBeyXiohZJjqyqwIBuq%2FkjahTyMTKH9%2B3ANUqZJ920YcwwmRoQl2MSLDFKralDDsGILsJdlS3v0AQmh8wBjCkr6CEMD7HynMQbJVw%2Bgj%2BoUPXCE1bbh%2BdKhNmHxW8MX%2BBvlYnPv2kMSk%2B3s6amzc8L9%2BF4U2DjyDxyHPOY6A8%2FFu%2FqwyxiktpmWfo19PiT%2Bn4RY1DEJgGmbGsKB1d6IXBDSNFsAk7z&X-Amz-Signature=b0a18fe4851eddeaad0d155d2534b87cac2dfe64d19a54c4b573e652fa4c2646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYC4NJ6B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuDcTb5%2BScFmlvKTxF2ed6vyLPmvbp58cfZNdlEW4atQIgR%2FwnKzu9VNFMJz0PQjU6ZOtue8gNLTBeRJbBkr8dh0cq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJSf2Tx91bJgslkwHircAypiic7d%2Btz%2BZQqnRtSmTX4lj77cG153m2nZtMzSG27W8Xtc4AlXJL%2Boo1bjYxcEfeOvtDBfCY9kHQ38HTcAmPJErLhgcnLCOf%2FQVG0TpgNRnlthnqBTVszXixGSRMdiODoV6a0IKG%2FXfeFp8VUqlSqS3PQpQypY6ctlW3FzC8amC8Am8b6MJxTrCrtG6BpNYDzX9s4SINWt4cvnYBpRp%2BiBAffJCnL%2FifntxdxduHw8uksViNoAQ%2F2y0DBWcG3MesxphM6SmHThTlz9qAeMklpLaZQ1f%2BGwq7Qi7HsnB3rruKCixWRaokcc2YUhTdD%2Fu8KuynObSIjC9yJn5jpkaWwmT%2Fgo%2BawD7g36dPAx3uqOaPufV5DPLni3BL9om1BiyouteI4D9joNUbLY7n6LWEhI%2BwQ7OehYe0UHX6C7zXX0RlQRHg%2F%2BACvFTNAFYg250Q49m3E5IAzrxBatHpWSfc3YtQXnnnBDk9CkoME6aJzkdv7D%2F%2BD6IxhXnmJ4j5v%2BOG2He8z2fRksNSrxsEbjLYYxGyBPIDAbyBhwaqpzLH91ZnTBB6ZmvMQZ7d8cn4gSHUhjqpu6yXliB%2FrFzzcuI%2Bo9DV1nBCKydFamF41SpIuCcs7hhiPvLeYDszT8MP6m0MkGOqUBYU6SuVGE7V3YOuBSUKspNYcthBNj0hFTfCA%2FXnZiEY2zRndaqRAbtKeCdxZJ7XwA9UwxZvhlD328ukEwC1kBwOEb%2BtAjHpAudqzXaJoNiASdhNE402RxX5ohs71Ro8yllnF0Oib3xUI5HjFnAB%2BRto8pZhjZZzsTL3tTi8vMLFjlpOTPJ3zGBL9eBxZtTGOteOqLT2I502YuKcXgFTO44aN4qYE%2F&X-Amz-Signature=e3c59b276623f9f6c37feb9f3bfb47eb591b1c7e55c4ec6426b5b82309c6fcd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

