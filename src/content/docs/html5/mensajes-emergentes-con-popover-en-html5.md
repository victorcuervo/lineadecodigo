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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC4YTWKA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC400mzy%2BKSTrBRsQI%2BaHmnbvm%2Fatw%2FSqZEPxAOh6DWugIgP%2FI9ZoXfWnyez9BjdIsngNPJtBPAvtmI%2BnynDtfRKA8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDK63WdjzUl6rAhPZpSrcA%2BmtBpRJM1YRO%2BwGhyXeI%2BYq8HNsLEAf84SAINWg%2F2CiAUzEFpnYMFuc7HJHGsGNz6D4T5XTltvxge3B1Nw063qh9lF2Q4OeaQMxXfz3SXD7ZPXfiVX6rprUoMGeecSHyRm%2BksDblF%2FAwi1GN0gssFMc%2FHRqiYtee03D8hx%2BRlQFDL0Hj0LeqXuA%2BPZT2ASlDQpI59tkhj%2FgD9aj7zKA8CLBDBXfRayBTWM7R3xTYCrTkSRaKjdFO%2ByT%2FYHUAD9F1ZRub%2F%2FTyr%2FLU23U5%2BWZzt7VacQ6TM3bA%2FsrqVoRlG8q3Ks82bma%2BiOYp29pmolYnfwRv2cFewd%2F3fQ9Ivh6pb4xz4ni0BIdCX18egHeyqRD5a0h5RzVMTmkRBzEe1ltquz8I7gvnl54KG5NpkjtE1jhgQu4O7D5oQ4O%2Fq4ZeNJEP1TJMNAuDhWQqJuD9kboA%2FC%2BsY7sNzmuovnD953b9QQbf%2FL0fKj%2F%2FfWtAl%2Bl%2BlifmQY993AyaLOtnOoWNGQTLA9OFZGrsZIv25zH%2F%2F0nNVI0JoGag%2BPDRwX0g8yQLiuQfIp1CwI9sv9UFpIcZD9hhmmn9xWkEv%2F%2BBa9gTisBZA2vngvuDQ%2FC92yA6xVsAUu9eALolJb%2F2PwqTuRIMLOvyckGOqUBWtkkWMdbtZQ7NiTlYTcgiR3Tpt%2FiY370cHf%2BxwCRdHQWFodVSWWP5r2QUNRwBWCR1e%2Fh4b30%2BN1AQldZDIgHlgqRQKdvVSfeJaZy%2BsxWjUCLCBRg2qH09963vBCqLvvTUEAnwznXd3pOuF4FInDCZjqSrfcURROGKN5rmNUW3mEEQQo2kaokhR%2BVBYoh%2Fq3qYVTHEXOWkt5QwoiA3Ls4Gv9R%2B9sh&X-Amz-Signature=54a3aa08f9c5ccfbf72d31f6f80c80c1154787b168bec12832c2496dc44bd70a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPNE76CC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDuGND8eJ%2F3YcxVZ437Nh%2Fsas4eaYlJqJx8L%2BwaLtd2wIgOh5qgTpY5wgY%2F9NCdNkAaDAHgDsdFBWe%2BrfB%2Bcfe9nMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAKSilOfnrLEsx02qircA0lQZnkQ4zN%2FPykxNSV6pdcSVVWx7WwvY1fE94Z8shnKPa0bSq0x2xvHWkDoT7eA0osCFBWtgEYvETMlJfIDy369Mefxe8ptq%2BHd9NfBxMJNzfUtUi%2FvE%2Bj1oO8xpuS0zPw2u0VbYNgSyDNk0%2Flkj24yI9ttMC%2F%2FMRvFjSDHG0xuunsZiNYoFSvWvNebMzcVVFmDuzTmJKPUUloCMr%2F0qTnghPGpuW83MeQo7F6EP%2B9Kkm5Yv2hiBQzR4CU7KSi6qzTQ%2BRSZ%2FMw6bD7lijCEhaE57QZi2gpkESObGqCXGAEDPtJD9N9OYDG8n7GCvGR6pSdae0UsnzJjtL%2FArrwpZ3knUZ0OF1UKdKuc1UcWZbzgmsom1ewNZewCI44GoSa6errHmli614m52d6OjpJf3iemm9on7yr5SUkSDGIjvDR5MDPzSYYK0A1nvwQNlFBgP%2BO0IRhusc6ejDY0YDGlHlafj%2FmFr5koc7HUwujmzMAG6Q2QMXufh4f6NqlklRvq76xVuMxjqpxm%2FMxumchvbu9%2Fc5owiqJVjN5m%2B7hqYGwL%2BUiJw67kxDFX7tgkfMVZZ7HX93uE9wMVDw3CpJR3Ix%2FC8EoDw4dJ0D5d1av7xFsmrdBZnrIGiWEc8uN5MPSxyckGOqUBLviFjmNJn7o8x8%2Bt2nc5VteVMXw%2BLknNqVr%2FtI%2FEimJ3j7HvZFYI%2FuzbKEVt703SwfU14fUTS8uDgC2o8Z6RdxD%2FHBg9ftTxEehue5unHJuXrzMJGZt6m%2Fek6MRmBuzsyVLnFC9YJSg%2B%2BnhFN8%2FbSOrxi3Hlw61S4xU5XNblAe9R3plmwPW0MdEbk99JeYMV2FSV%2B6eQCtTRCCuW8GyP7DbNW%2BgG&X-Amz-Signature=2dbbec968fa9b2a0286f5efd632cece32a2cee865799ed44574757f2bc90c6ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

