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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYEVXEW2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwA%2B5KIG7yqzfC%2FpzscWlrXhNMSmvuNoaoxxKxtP05lwIgEkQwWhNplxMYDa9uFB5OXwxoSwEE0IS3ITdsDLj54KIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8iE49tiSG1wyNGUyrcA8KcKNlV8%2FNV5hwZ7giz2IRPAiR0Z5eD99waFdD8l7aCP05gpEb4LJsl1znFdurxsVv7NZJ3HLXHGSgJj1%2Bb6OQKruo8AVdB99NlXYhrt8UUVg19uyfl2WI9qT7ieB8U3uDDCFdeST4hi1ygPAVN8a9hzUlYIggQmwEHt2e8%2FKpM6KSTl35WGEe3peI0DvuGsC83MZrfCcmcXcnfAaOaApLPXvzB%2FetHKL6mbkeN5nTP1DculxevgtmsfqgaJkmNe3cgqH2Zjsf3Kb5tth3LAWgJ4uQ0xlGhJ6bE5FuI9FqinSqsqnZLIL4iftK5Sa3qtfpA302NoAtlyPsmcEuzdkErcoiRa%2BSKq6V0ErO7rKmxlB%2Fj2TxokWWuobRE%2B0BWOKU8axM2tOsWLKNEjLvQb1cmLT3IfHWNlMI7LSrOKdc%2FGF1NnpnKrpFnvN16SXJ7GU9uOMncZY%2BVe%2F5aiVkJvazRzA9maLi9zE16yRI2uBkIPn%2FA8HzaOpXASnsXyDLlIF53AwSq3cDObeAnZflBqBHBXbAN8VyldoeRli1nZhYPR7cVu77yKRkK7eK2ygr%2BavZF17Plyu4IIZcynu2RzH8rVXOD3YSKV%2FegKlzmZeXstgeyLx0hAViTR3hhMPLp3ckGOqUBrvmhKsfgIppcX3HQzNa78PThsj5gVxfWL7vPZ%2FIYscRB6ZuCsZFI0OMdOIStlXMj1%2Fx0xhDIV14vCYtjnJVfLLe2t0%2BIU1qvMAQLbZ55m208EDUFimOLaANbnx18SSB1PTNVNAtR4GDnO9Dgb5wWfYgw3yIeAhBKHpgihv8leY0FDJEvXbMU5LmgiF2AU5zEbQcrPREyNK%2FiqXWIG3mfilYNeMRE&X-Amz-Signature=36f277b7258ea12ed6759597372d8e722d9f9b98d1c18c0a72044e67bd88dab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDMRTRID%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhHhcrMLmo2aWvFQUDoWd%2F7H2EIj0rIt77Aar39E9mCwIhAOTSxOl7a3ItLRwYV2xBbVxArlvs77i5KbsyP%2FpUk4E2KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXb76AsCp1KZwWriMq3AP1EHs%2BRNdk6fGaFgAMzS8uiryz5jLTi9SfMlkXOmGJ34Atti%2BT4ts1vQiBX8BMaiLVHdnA%2FAqaMeuLuLaWlN32ExdmDpBEGfyp15gevLFY2wJLM3f2X4YEAv%2FMiYA3xEJWFzR55zs5uFXIt44X50GCw6GcIuUtkXWqfN%2F%2Brfd7wsrOspLcCRkIR3sMk5PfRnTTe8ek%2FwadKm6Q3vxTXeyI%2BTyOFvg2HjBKetX9bEDWM%2BM8Ne5BoDOLJ11fbqTgTsDK0RvmRdGUXepKDAk56maHy%2FMyQudxdEuHQM4Czu69xS7jYG8UFvm7k%2BSilAX99jGWceU1vaQXMz8SYZ%2Br0i2%2Fj%2BcTHxSK%2FgZQwNak33FCMwVHkiRxbVJSQYhgibOUORXIBy0fZaSN56S0%2BNUt1QuO0FKxMpprjkH56D0QFPMBGJPEIrba%2B9ebRtA2nRNguiA04Y4dVgJjOl%2F3UXwSREsj1NwW%2Fy2u3YwsDgELA4mPNy4pb8lwEF9K0owLNQYXkqCfxp9ttg8y4RVAaAxWVqqa51B%2BhjkVx1AKtd0ZpaM04f9db5HqL%2FMF5pSnYrw%2FwSbw5f1RVxyaeFyDRPVcIlYvpLizR0k9Gsd9bR9QH3jX342Fh84Pj6e0Lp8dCDCR6d3JBjqkAUaNI6C6GESHuI9W3jx8hB0c1aGEpSoNMSTaQWIAfZRGVPvxnoJsM1xvoVtnIW3WuJTOH0aMKgKAKKH0okNnOyCFnNf1Tn%2BZROvXE%2BlKAV4jL6shvdr9Fh4VNy8oXrv1r%2F6S%2Bs3U%2FzjPm3QY7lU373%2FCjBgPkV4R%2B9RWypQyHNGlLigT%2F9ws60lD%2Br54ON7WCeBY0y4lJKSep7zefahpNOXvEHn3&X-Amz-Signature=41e479ac8020f03eb7a57554f62c3a5e1fb9b1296718287734a799d40380d6d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

