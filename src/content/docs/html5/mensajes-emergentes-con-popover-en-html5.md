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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2KUFON6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEGtFN0Y1reuXiognWfFuj4Rz73Ef6heZcWDoNCgAlsBAiBzZpxvNUrBo2%2FFKOo6Zdz0IbVoE1aiLRLPiwYZ8WL4QSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMc9QO3ZVhhLHfzDYVKtwDes8JnDaFgMvNdOyWsNyoEV%2BHhzgHBZ6qH%2FjECiskKmMjrNnd52c4F1j5h2xhkO%2BXzPKRkYu5IhVjbEr5Nf%2Bm3qzxIlQItOAsQs2Tv8N1yQH%2BGzJG%2BAM%2B4TsJvnBHJht5klxIIIOU6FYpQaI%2BTXMr7VyRYppM%2Fhlz6WDgqRoqBPHAOL8Ke56QsbnoBwXC7ygX7E5gnspUP%2BzSLUbNtNV1W50zewdqMFBY1uR7oSFnCx8bu0Gx7%2FmMH9HhWG1%2BudC6Map0EHIpGQ8USMmFXR2sIvahKn7wzz1LKCtn3fbl8zPee9nNdI5KS4KqTTHyXPEF3Gqlrqb2%2FwF8fkBPNJKxJhzsSUXyqEAY9Ggk9j4Ro3aE2ECJu50grGjcO5rrTWheIqLT%2FbNu9WKdS572WxQXd1iy%2Brrh7loADwC0wTP%2Fhcpz5cQDOV0LeYHXi%2Bup5CAg15Qu0Ob0idU5PeFWXyBY7EhsYBOgrpW0fv0QrqZCkXbdM5KrNEwLfvviWaLpiHpo2H6J8PmKwSYduhNxz%2B24VXTKLcIHhSkjMjp0mhywRvEDpl2gXkkwlzhrgH1Cgt8rqlTsBzaaumfkXEl6BsgbJIHTbu2%2Bw8YHp3yXeZ%2BVLrP0qAcdGG5ER4JT6kkwrN3CyQY6pgGCjYYiG%2Br%2FIgVjq4BHETWbeKjsrDnzhWiCRr6GNa1wchSuOPNb1QNU6wEMdcp3wbVleZlM76KCs00dOvNTQTV1nx%2Fa%2FGqgjDskGJq47uRnEVBjA1EID8CHMYpS1Gu4xeGJM8pOO4ogKv6HVvQDUV50qU5L9RPoWQ2DhfYSS9gHuq4B5QlEvtsBKg9WC4sn1OPpnSaZlJYVVq63qWa2bCYQfP5LXxUq&X-Amz-Signature=a7cd2847e030429dbfd07449f3bb4b58aecaae781dcc10b2743870160b4418a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYYSU4WZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIC0GW9Nlt2UA3bONCNsGMGU7rTLffsU%2FZ6rBmzve%2B3uXAiAjHOR7olzoG5I6C5OKXNtBz2%2FykI93bi%2Fxv2Ho9DvaKyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMPcf3YsOnSwj7DhRTKtwDZPx9TolfvOQfsjwDJ%2FF6HtWuh%2FvMiC%2FS7Okw8p%2BNNVQRh6ExUEpDW3ffTUZdw02NdaE6DVJconN8D62hVbMmYb3sUWIGonzY7GMeg0VEAKN%2F6aO2UF%2FITSAOaNIOfAhVeMFizQVvmcrclFgqnpxpaH%2FlIvoMg1eN2zuWuLKIONVGoZxLtiKOYKEctxaXdwF6A%2B10r2a9sAYffjgq8R6aKT4Jc77G3AnaHreCsrx31y2Ll%2BLvKWGL75cTOMmilAL88FL0EgENxwNCFqLVCmNDFp9Lh1RMYMAAqfXe%2BTBRaLiaejF%2FLa%2BgVzCIB3L7n%2FnE6BC5v0E7O9Ddv8CdGGQKhHn%2FR%2F%2BqipDvff4Zuh40UDK4%2BesxJh5W%2FvjZxjtV7b3s2BwQw1xf8z2QhGWINSvHXThLV6WfurWq%2BX1BV27xQRReFX6bh2znFK%2FikgQFZBtnK1hh6KTv9AdJtaKH78YFDB8wMemsDe7dTlu%2FEIAAMMgCedtR8EZmTcQCANV3meA2FZE%2BR%2FBajPSYwGNdLBObMn4OIeVoqSHx86JwYN45LjuC%2FidTAQrpEi56kcs4uYoMROKneC9F91gx6U150O3o%2ByNWGpVTVvKLSlRcGzre6aqYMtr9GahO60vGDJQwrdzCyQY6pgGrGZkZp8h1LdrvogKRipQFSUEG9HwCb%2F5k%2BhcDFM6bjNr8qoz3OjgG7c%2FnPvKm4P8w8szdv%2FQ2K3nF3dmeDCheD%2Bi8GxspdBf5k9PmLZ1w1cpTP%2F0J%2FN2CRBM6puskrmVS0RXf3RJqH7GxHz2Ol85KTOnR%2FU%2FfcpwkhGYXknHNcVjoELvlndhAbHXVFU2bggeJn2ZefNu%2BTzflidydNd2cku9vhJkQ&X-Amz-Signature=a88e9d1eefcfc37d1be3f693ab51d846dff9b7f3de7a7ed3d38fca57b7be45ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

