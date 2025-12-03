---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO7G7V7H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBqGlDINha8N4QqseldIBM7v%2Bbwg1o2t1fpvZkRmuU8PAiA9isMYCgasfrDUWXNDnDIZiteTNA%2FQ1i8zGt7GpQDjcyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMDN3e8pdANhCHEIAzKtwD%2FlDTEBVqWtxt2Yg8svxy2dCbAijQcRjaWc9rjsLn6vSVbUCiaKRS%2B3qRiMQz9JpSWd2Wi4UGO5YYr2MJ4M7qaEUPG18IV%2Boumk1Y74ASX%2Fhkx1yVURdbpjd6f%2BcLHzpMPO%2BQpV8glVZcE18efaVQcxVMnXugSj%2FK5U4BD9itb8S3LZPr880G35Hie6rtOLBDnXVjOka7qzo5PHXA93Wd3xDHGkHTxqoZ65PpMfR2%2BE2JrASOsO0iMt6xuE9sBMLKb%2BRT9HG5WNwG4nvr7fydyWJmyzw%2BVB5HZdMfvhh9gSM4flo0tSR12ohPxgS4xeRmHUbkTitjaGDDJGjx%2F6372m%2FcCxaT7pOUig8jACSsM8O2jIucXHFME%2Bp48W%2FV2vEBUEes5Oa8Y6pRd%2BLubOL9chqjsn%2F0bNTSb6wesjrZNpGSZBsz9O47Zw7r7gjApuYgrjqpfT0Ie22oJhFaCe7p1R%2FRn%2FWtVy2e5bsUeivRWJLWYegnUUSb0pkpy%2BMWt8cs727JpFFuZkbni7yHq9M1XmNhskSnrPUIs%2FnSDdcCyDFCPe45qwVuZjz5Yw7BDCXoNtKdJ%2BBQtxE5yT%2BkljHY7u%2FIuVFpFXkxN6puS%2B2tlIMyK2%2F0EBNHcs7IJ2kwlJa%2ByQY6pgECAFqNldnC2U%2BoBAdWzkiAEZv0GKGyeADehBVQg13gjzugtnx8CDVEtZedf4yWlfNcO6g69HPhy7XR73XBzntt7D6YkEgeiq7zGtNlRTbEORTTHFYyaRqetX1xBgil3fGF2rH1oN6lDE0qAgAkVuZQk5FcsQFPqnNoTgEY2nGpQoEGTYSXUh8ZjDIDyWyJKO6KlyqgmZuJJTau5cc9Qocx1jcDNNOX&X-Amz-Signature=2a9d49ce6c6e9adbc0cb1098bb8ecad683c670f5ee27ddfff6107e66aabc5c21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRDEOZRV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDOZQ1tT5JmJ2TjIkjOvah8ICsjwDfmPs%2Bmb%2FgP0NlFDQIgdNOMfR%2FwMKKLveFi0Nl6z5YbyTHmyNXLisMaq%2FcnS9Yq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBzqdmtGsg744CdmDSrcA9gCc7xxFuDiOcNr%2FT3CjZCGunBolxJOjwYKVdQWMMofSsn8BueN4UVXhawf1skuVqhEopAnz%2Bk5Rd4ABhcuTg%2FS9Iy2crPENltqMerxbD4h6PKJCzGHSA2jS9oYHqOLzTUvdNrNa0lAQ9ZzJs%2Fft1GU9MeOMLWbCXD1nUVznzcgdravkXcheww7b743t%2BV7N9l0rz%2B5%2Bf1MeBhfGbclM%2BN642X2%2Fp7rols%2BgLC0mvlWn7TTR7ie%2FxyEAemxPCYvLx85%2Bt6gjS5WvWGH6Oz4%2FcSwlPpWEuvhpPqcQY1D42waFvvntltLt2MQVm6dTrMmhml%2Be6EC9z1xC36dnjUOwIKmaYPYtFKX0ncHLk4fZ8G%2B%2FZyG1EQZc2h%2F7DOK2fhDIauljJMI8vafm4EFmHXkP8ggAHh%2BVAtDPn%2Fs7R7mZLz9lBIjwGjRj1fbQgxF9g8NG7HJt4t54EaEjAPmR3nIzijab1m5khRhuludKUuCQoxedMRofXgoEDbgDevRV0WADs%2Ff3hUEWnwgU%2FWQWDa3oMf7p3qhfIhFrQs8pwQ%2BYbpr7bu%2BNWpdmy1o82AXOXdWASCxWBRJJHfx1JJhilzHHnS34khUMNWbbYpRceNJ90MyxBDLrU2%2FP2DxW%2BlGMMSUvskGOqUBB5eHb9Y8wVwv3EA6b%2BcJSllrvoRH7%2BFz5jLw8ta9FC%2F3CS4j9XJWsLoWoxd1Ot6T4zPa0%2B1PZLrxsjwiaplN9I8di%2B0MCYKySdBxX9b0RpcdZfez%2FhepPzEFuc2%2B0uMkjEhqnSpqH5BYs0wYMVbDBBXmruLvSROS5UPoKdtXpTUoluDGqnEYB1Is5CZF64S%2F69IsG560zU6jj%2B7gzy4RCXBYrJnt&X-Amz-Signature=fe16a6d2428dda06b9ca27ff64e8c163d24ca7b63ca1cf628282ed1ea888e565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

