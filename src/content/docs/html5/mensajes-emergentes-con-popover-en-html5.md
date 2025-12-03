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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJLXRABU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDOCyopsBRq5k%2BOvL8DYEda9CidTuflPNVrGejsxSkwfwIgZCDj0lU1wNDFyawDs3Ez3an99tsNxnRuQZfuSU5IkVUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNOd%2F8Arzt9mP9Yr%2BSrcA6aUsbt0H1AumGK4YkB2tOwpRs1oAGPmJ0UAAFyYrz3OmgCMS4HqqfOjKta2HzLp5ymY2nX1Uu3dQo1d9VRwke6sDizoSKRKAeySAJ2d%2BWJWnPcRoFGzn6is6BPRtjkqEULSJbz8rATFF61Drp14iHKWBFxSsDJQIFygCRdtEunshlijxrl1dzlFI96HpBTpCrAPhk%2FA9YmpPcLFMKUoVGKeoHRjP7mrz1HY6K2JP5N1LMixsj7xhVrfUs3gf6o42HOKgN4tOd1Q3J6g5GGW6xoQErQvZObsaLsPDDnTGz7OvaGlmXbdtdngfPY4a7Jx%2BbcpR5NYvwEYZvS21eB%2BsOzNv8mWEP9H6iQMzKQ6bgykbXZ4mbqYzDXm7xUXTiez6xnoSIfvozs7w%2BWAyOLaAM8MSrhbVarSX2UcVgWDdCUOomBzN4snH%2BdknV8G4IKHlh%2BH3HwBiBJrcYJ1szA5wBREt1aQdXIdyZ%2FrWj2JM8fe5%2FX3P6TZx4nIz43n7bmrxBYQsGSx67ZjT2b0M7%2BcYwHzJtQtHcSEAIq3jXWPXBh2O1b8fYuFq8WYP3leLlbRm%2FZ%2BXtwRQj0KDDsi75mdhhDYpKrwy%2F9LHG1H9GhpmuzuOi7sc%2FX938bIt0%2BXMLPdwskGOqUBEV3GzByFois8hATFfuibnG%2BbURTyCXu%2Fnw5zT1eio9uh7Xg2CAG5hdp08adCM6PcvbEQoFKAQAWHcmCYxmrHKfjej6HY0yt4qvp3zMUzB1CRzBNgBBZK0IBC8tXbvtDNZQF8RofRvrtObP7I%2BJXtjA2R8n0yEoTOwCZv%2BwPdABEJ%2BIZ8Sr9mkMN3k1dWUwjKkenwJ1OzHpgBCUfmtnyoM650fqBg&X-Amz-Signature=763ac42cc21d415529822f4c2c402a8fa388a527bce9b6303adf439e6fca66d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4LKQ5I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDzd2Hsz2BsyPT1TjZMV68Tw9RPoT8dJLLdd5mscHBMHAIhANIelmXbAFd%2B8sOy3PmMpQwcogtAiB4qcYrcyFdk186YKv8DCDcQABoMNjM3NDIzMTgzODA1IgzPXT0ilpghmaUZXs0q3APxlkXpG9CTXNslswGG0v%2FjZv0Ww1OPXDr2dW%2FXdDrnpcY4F%2Fi82mGmOIAkNB%2BWqYgaT%2FMMWORU1MIbc%2FyLILQFyraoSa%2BIpBl4sPzIoCrj7TLAM5%2BvLeo%2FgN43bqmbeawWJvrP%2B%2FvE3PtbsS%2BGwS2erCi6KjX1VNPH7%2BvpzBRdJ48RQ3X%2B2rkuBQ0RRLldIQHYArOeJWxP9WAQOcgO8IDjMrKEy72ea1GRPGCS%2FzEQNYEvrwNbb9OVr2BgvQvBOEAQduUEvdiL725IDTVa7V%2Bb2%2FTR0bBJD2Z9oXSUoZPD33qo8xLiYjeNP995E7iyTSEAjz37zBzm2bw5Nu3xjHdxzxogsYCE8A4siwE4Qokz7LOUNEFg9o4zNLZE%2F30%2Bx%2FiyqKMVfRyEUuRwfFLUqvZHsxwK1uxvAEN2QuG6122wpXnYPm7xaEwj5wQQofEJEy9RGpT3F7p%2FUTN5SeMj0yrT2TngFmEB8Iv847dj4TGZROn3j%2B1x4Na31rlwHrEifLlAqEev8b8sLuXLO4BB%2FW3ZE9riLazulk%2BHwBgG5BiFqLjXyUKx%2FMo%2F8RyyJLT5lZni6f4DFHOLsZwB7z2dNFy1LDcaNbF8Zezn0FLvMCWp7ZJOA6T1NCoL7BQC2TCw3MLJBjqkAenNgO0vuEgfgcoLC9UWZFbwkPPoNYUoD1eXs1W81Pf0lQ%2FzwKhZeLe6w9gw6%2FgY%2B3rLVoZA4Vt4C%2F7Ywcy99Mhs%2B1z3hCM6ekOol0xFHhVUOnR8qwfQ0HeM8h%2FXF8vSWCE3OMdaPniM5DcA%2B0I7pLHNAt%2Fw%2BL5ctbLavnCYdbi7SRk%2B1m9ehAzqgKZ4h9Y8%2F1KuQui9DncHDT8qU44eQQiiK8II&X-Amz-Signature=2a8c6fead95309691dcb7221c2481f1fe90ee007c21715b427166cc67ecb3efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

