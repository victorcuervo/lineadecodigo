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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ45WSHY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWftza7%2BnokpJjw9y3B0uNNV4ngJyqjy%2BED96QrW%2FFMQIhAP4%2BM7AMyz7rlshdUvlAFqazKNLHipDvmjI5NbMnNpvAKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGaMW8yZii%2FWyJxxgq3AONGKRFXhuHAzGQNp3i2YyFT%2Fa%2BrYsYxnZr2DFBaa7p5L6cD9CrVkrJZj3r77OZRYtuBnO9z60ak5PkQriSKnTq6xs%2FsF9f0jguOxOS6qKZk2%2FzxH7WqV9xt1QdiDEaESAbcgpc0GdOFRNHZtykIevsOzZPb5IJfYYbna7TvklgGKeLhcJpL%2F0XDCy9OS8nU%2FRE7BP2af%2ByFgXa%2BBjsZkx5JC7KQX6h0y2TcjPW9CRg3BbGCuiJAyH3kGzhS83%2BGBLUGqvqIztHR1RPSQtUwOifICIlCXclPYFMujIfsuemQL9%2FRibnAu22FZdfR544Y3Ap6e4w1GV6Je0QWtl1vLgfTyyqsY8WVYZreAE9372yLPZkO71W4hZpHCAvZJb0x1v8Z20b6ZR1UEA8HRIPeMWGct9OTWkn0pSH1T0cOw%2FVaYhDRlDMlrP4JnZD2SJv5ubsLBDFSQ9muJb3JMUOTAMaN6jViC%2Bjzc8bWj2s8aLP5CtoAY3tKiVVIXt3Es3z%2BMJo5Meo%2FUUQlND9X%2B97tZij76TVHezTmf7ubcARWjMvpBTqhvFvKdYDYcT88a1Nll9M1Q%2BlFdjEDEg%2BYX6nOhRDhw7NaVA4NAsK1ayu3nzviKFnWPoCab%2BlRGBRuTD6v9bJBjqkAXNeJZxBeiikC%2FUcC7KqX3LcFAwyGBuPtBkiS7LZpOgLclHiVRUP%2FrTwuErWRoc9Fe8k1MeqSmCZ5nIbrq2F2Zp4%2BfsoWqFTqgDy5neQYeVG96saICdvc4Uc9mT04JgunYD7jsGAvZzMqFdiEixz5cUGbcwqLVWS0wGt5GwU6Fox3XVCK4gM4mbjj1saclpdCmQSjffJzksyA%2BGnUDozuCXOHL0P&X-Amz-Signature=4a4c9189e9fafb1f3284df8a64d58efa547fc0292fa6736eea2ee05d9c7a0b4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HUFXN42%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5wpn0g%2BX9h1KDuTVMGbujP5iYKNW0wK0E1LnmCD8FTgIgOIOuIXTw6cpfmwBncNUHBsxnNwojAfvpwC6r2Il53%2FIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHirhUl5%2F2hBSE%2B17CrcA1NRA6DGwY%2F1IOlCtwRs3yDWfmIS9Oznci%2BZAwuKG8OxNbPnmZkikcMZxpqNtMoKX%2B4a7bcwpNZTpz3J79nnPBXdWAF2xMhdRZpZGrstp5H2mJJmeo96xALa5Icijp21emYaIrYy1t3HBFBJlC8KP%2F6bU9rHsPVfe4SbVi9Pq%2FRcFoJXIyAo6SPtX4N5rm%2B86mQNvLhkYqccvt6eOJfdpWEIKWs5avbTZTNdXSobEnLm5vkukJkNDm7dMslM%2B2ouhixwVfe37k0AOBksemfQgh73AT9cDfLjitcklkAY%2FR31jKao2ArmMs5P6dVWj54e3fPwSdVd7v%2F9mq9UyNCzCSicH5vaXt0XFjBi9vYYfHIZlTSUkcFmpZoh84g1rhnGu8up1CVa9ou5y0zWRD8hnf3KgmpIc8pJLgl3IcfAKlqtP75LAHCSc6ir5Lm0NM7IB0tJ52FDU%2BVXtH%2BD6Co9Ve%2B9AHrbawT1ZqECvAnlo7%2FMQwsgf95CmhIZdoH2Rbk3zUg%2FvzeIgA6IHThrN9TivKZw9e78Njc6nunoY8XYZn5okqic4Edv9Q7LD0wzIAxN3QyikUrII2c8oB2Nk10ZdX6iifiM6a5cSNZJRP%2BY4yEWRAjbxBwmVx%2Bn0XwTMI%2B41skGOqUBfmRMk51MiHKQzcrP0jH8xrmWXX%2Bx9MFalPLDJGk%2BxHppXxMGFHahEXKP2y666GUgTF%2BheGTK8F7leQK8bfxPeKEgYkBZsCIDkuCEzDxzNfmSp4%2F6jqBuZjWCF4JMKigw90wEGkT5nQ4KyhbadEhRK2hecSPbndYTzDgApSySA2pOfx00c2P20FlSxx5fx7bVNYpbSwzN5zpxYpGz33id6Bi0Lsu0&X-Amz-Signature=887706d4c022821955f3b2ac731e5e843f70ba24690dc2e04503c719d9b0bba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

