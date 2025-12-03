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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHBT7MT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDgn76u4EjayJRFeQ5cuyQn4MI2NZEkXzVvL0zwNiPffAIgJ2qHREWDhqPmNC1jBW7G1L%2FoRCYSNhr3ElkM9jXGpSMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJcVGt2ymdcGxCaGpSrcA67YlFb9U42NVKXlhZoe9Y%2BqEYUs5IN2Tun6DdvCv9acoxp7pbSh4mMqKeWRSvQ5Moes8aBvmWrwXaTSDK%2F7cxRqtg%2FpJV8fugF%2BNEyKJ4LfhpaO5V7dTi7sc8dTNmmYAKF6ZGaao146S2k%2FFRgrtGIk64R46KsRtBUgwzPWUXvTTKfTYgIu%2BLnXQzmRCtpHOjz534V4%2Bh3%2FScPKzKNw8ndF4%2FGyQyTn4s0d%2FGseWzG%2F6hPxdCYFRur5wL7REUOscS%2B3b1yCPuVNdwXQbyF50c%2FOm2deEGU9DWdgdK6SvPtmAfSVxLbk1cVUNknUAxsI%2BOvvi7yHnJZOLlwJ7htOFWGIt4KFec2mrxKzVF%2B4yrrdnR7PQhLAAVRpwxWcjdqv5sXzSADbLkEnW72OuxA78%2B6RIuGu2Qx97QA%2FRnh3ToUXJas1CNWeGF0OFN37aGHaMTNcqTRL1yYZP%2BEyhTW2QtZ2Yodnwymzv%2F8zUapov06PWcMDM9VpTKb4xOdzLvAOTixbNjd%2B99xGfY30%2Fcl8nREGuB9YuMMcOSlzNvgN32rhRd4s5BB%2F2Ah1Et6YTFHUG2L95%2BTXWQVFVEOg1Jdde2qt9DeM8ngRA3HTZqKSMqZcg%2ByPyA4EBrTQ9UbpMOiRwskGOqUBYQEGE2MDYKFyntFfyiBaoCbdzc%2FAHFnEqssCQiRIkKoGzVTS2KjzMKuN9YO13Dx3%2Br0XBk7L8kBHVviraYBn3QapHs0Bbzfq3OEQJLP53WEA7mG2HZy%2F2zsNXqGDCaCZv7iKzj6qwBgONMQQT4moqzut9kCAdUX7Ropc7C7cDu8nMAXUpxEtvh0%2BCucHqaKTxA3pk5qXJkDNg3OY5wbRKhGHxFtN&X-Amz-Signature=560c792784a55e5ed6c1d5b390a962c2db1758a6f856aae3cc2e65e676d0b94a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2BN577O%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDNd%2BquAsqPjrWXnfQBqoI1OQ4FEuuZMOgyz9%2BtvIlDVQIgWWB5C4LtADxvJ%2BuMRoJ6mQcukC3nDQg9PiDAUQUwkj0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHmHrv07JapVepZ7gyrcA3Rm1aN8ibx60V63H5t8jLaiAJIAlKpAY50hHoUxuofR54sUSHM2zmHvFM3jpVj8pbYbv5Q%2B5F%2B%2BahAcX3GYKd6Za8v8ZNLP0THWqzv%2FZEZsZ%2BzK3bMg9TxPUPyyFfGNjI0mvGnp%2Bfvaa021p7lEZVdbQRhHW7%2BSiOu79LLUXdiajJiyJ1bxS1EgRGSLI8NG2m31HyFQ6Lxz8PKhhtCkhAaanR2X1muRkuyUYoPy3FJ6GOrjGB3DqyARp%2FP6TsszMpeVXYl1nGy1j5aRUn0eCWGuh2J16z%2F1B5xqX3yJqDg2lekCKDqLBzs7Mjo7w9pXM%2FNXLcUQRXsniZrnEGFLDnxljZjd2%2BkneB5R8kfV%2Fbt2%2BwqfoxCqO%2BVf5X%2BVIhug7dU6tyLOOhPy423IbBsSU53Jq4yqCeYQb4Tkd44YgYJpWFsmpeApAWt9Kt4YZcpOikQwNy1vfDgTd6deMP3EGWeR9Vv2%2FXG2kqBk0HU%2FgG7Gxxt%2BHjSKyQGs%2B%2Buk2q%2Fmd5z8C%2FW6DgTUo2ymWFA8YXQWJ%2FWoxm5r9iANoc5rTdzzZ7Y%2FX9YZjbBeErIjPlmi61WBmDb2a08kdzla8BvzK4wX0hteatZYbCBIjUh5d0OyBxTo7H4HWnSxGW88MIKRwskGOqUBtn18%2FSqTRzRGVk19C9xTRkK0gx%2FNBhbVLLGEVz%2BW1bXBl2YMscQlgZbmsF7X2YZjYQkH%2B8Ih%2BcdYEW5080r7iNr%2Fl2lHdg%2FTTgO%2F55CXd%2Fl%2BnQpP1SWv9Rl0stUZmeuZAFCCj1Fb1zzKwxpT%2FArzSZzz91%2BhfkRPBSwAWlpRsV3tRaiWfLkfOEY7%2FNeC%2BH%2FvYHgozCRMN7IST6RIsZSj9ks7OgCw&X-Amz-Signature=636c355c7e1046ee225fd5e1f49af081ab48031ebc8ff062889c3a376321d385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

